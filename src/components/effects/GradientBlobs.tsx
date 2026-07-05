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
          background: "radial-gradient(circle, rgba(0, 245, 255, 0.4), transparent 70%)",
          animationDelay: "0s",
        }}
      />
      <div
        className="aurora-blob"
        style={{
          width: 500,
          height: 500,
          top: "30%",
          right: "-10%",
          background: "radial-gradient(circle, rgba(123, 97, 255, 0.35), transparent 70%)",
          animationDelay: "2s",
        }}
      />
      <div
        className="aurora-blob"
        style={{
          width: 400,
          height: 400,
          bottom: "-5%",
          left: "30%",
          background: "radial-gradient(circle, rgba(0, 255, 178, 0.3), transparent 70%)",
          animationDelay: "4s",
        }}
      />
    </div>
  );
}
