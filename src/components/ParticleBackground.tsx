import React from "react";
import { interpolate, useCurrentFrame } from "remotion";

export const ParticleBackground: React.FC = () => {
  const frame = useCurrentFrame();

  const particles = React.useMemo(() => {
    return Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      x: (i * 73) % 100,
      y: (i * 47) % 100,
      size: (i % 3) + 2,
      speed: ((i % 4) + 1) * 0.3,
      color: i % 2 === 0 ? "rgba(168, 85, 247, 0.4)" : "rgba(56, 189, 248, 0.4)"
    }));
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "#080c14",
        backgroundImage: `
          radial-gradient(circle at 20% 30%, rgba(99, 102, 241, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 80% 70%, rgba(168, 85, 247, 0.15) 0%, transparent 50%),
          linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
        `,
        backgroundSize: "100% 100%, 100% 100%, 60px 60px, 60px 60px",
        overflow: "hidden",
        zIndex: 0
      }}
    >
      {particles.map((p) => {
        const currentY = (p.y - (frame * p.speed * 0.1)) % 100;
        const normalizedY = currentY < 0 ? currentY + 100 : currentY;
        const opacity = interpolate(
          normalizedY,
          [0, 20, 80, 100],
          [0, 0.8, 0.8, 0],
          { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
        );

        return (
          <div
            key={p.id}
            style={{
              position: "absolute",
              left: `${p.x}%`,
              top: `${normalizedY}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              borderRadius: "50%",
              backgroundColor: p.color,
              boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
              opacity,
              pointerEvents: "none"
            }}
          />
        );
      })}
    </div>
  );
};
