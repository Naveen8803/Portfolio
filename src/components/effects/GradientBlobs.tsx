"use client";

export default function GradientBlobs() {
  return (
    <div className="aurora-bg" aria-hidden="true">
      <div
        className="aurora-blob"
        style={{
          width: 600,
          height: 600,
          top: "-10%",
          left: "-5%",
          opacity: 0.1,
          background: "radial-gradient(circle, rgba(0, 245, 255, 0.35), transparent 70%)",
          animationDelay: "0s",
        }}
      />
      <div
        className="aurora-blob"
        style={{
          width: 500,
          height: 500,
          top: "35%",
          right: "-10%",
          opacity: 0.1,
          background: "radial-gradient(circle, rgba(123, 97, 255, 0.3), transparent 70%)",
          animationDelay: "3s",
        }}
      />
    </div>
  );
}
