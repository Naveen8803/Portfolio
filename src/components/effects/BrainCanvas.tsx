"use client";

import { useEffect, useRef } from "react";

interface Node3D {
  x: number;
  y: number;
  z: number;
  px: number;
  py: number;
}

export default function BrainCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let angleX = 0.005;
    let angleY = 0.008;

    const nodes: Node3D[] = [];
    const count = 40;
    const radius = 90;

    // Create points on a sphere (Fibonacci lattice)
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;

      nodes.push({
        x: radius * Math.sin(phi) * Math.cos(theta),
        y: radius * Math.sin(phi) * Math.sin(theta),
        z: radius * Math.cos(phi),
        px: 0,
        py: 0,
      });
    }

    const resize = () => {
      canvas.width = canvas.parentElement?.clientWidth || 280;
      canvas.height = canvas.parentElement?.clientHeight || 280;
    };

    const rotateX = (node: Node3D, angle: number) => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      const y1 = node.y * cos - node.z * sin;
      const z1 = node.z * cos + node.y * sin;
      node.y = y1;
      node.z = z1;
    };

    const rotateY = (node: Node3D, angle: number) => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      const x1 = node.x * cos - node.z * sin;
      const z1 = node.z * cos + node.x * sin;
      node.x = x1;
      node.z = z1;
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      const fov = 350;

      // Project points to 2D
      nodes.forEach((node) => {
        rotateX(node, angleX);
        rotateY(node, angleY);

        const scale = fov / (fov + node.z);
        node.px = cx + node.x * scale;
        node.py = cy + node.y * scale;
      });

      // Draw connections/edges based on proximity
      for (let i = 0; i < nodes.length; i++) {
        const n1 = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const dist = Math.sqrt(
            Math.pow(n1.x - n2.x, 2) +
              Math.pow(n1.y - n2.y, 2) +
              Math.pow(n1.z - n2.z, 2)
          );

          if (dist < 75) {
            ctx.beginPath();
            ctx.moveTo(n1.px, n1.py);
            ctx.lineTo(n2.px, n2.py);
            const depthOpacity = (n1.z + n2.z + 2 * radius) / (4 * radius); // Depth mapping
            ctx.strokeStyle = `rgba(0, 245, 255, ${0.12 * depthOpacity})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      nodes.forEach((node) => {
        const depth = (node.z + radius) / (2 * radius);
        ctx.beginPath();
        ctx.arc(node.px, node.py, 2 + depth * 3, 0, Math.PI * 2);
        // Alternate colors
        ctx.fillStyle = node.x > 0 ? "#00F5FF" : "#7B61FF";
        ctx.shadowBlur = 8;
        ctx.shadowColor = "#00F5FF";
        ctx.fill();
        ctx.shadowBlur = 0; // Reset shadow
      });

      animationId = requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />;
}
