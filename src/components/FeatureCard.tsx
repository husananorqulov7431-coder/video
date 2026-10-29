import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

interface FeatureCardProps {
  title: string;
  description: string;
  badge?: string;
  color?: string;
  delayFrames?: number;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  badge,
  color = "#6366f1",
  delayFrames = 0
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame: Math.max(0, frame - delayFrames),
    fps,
    config: { damping: 14 }
  });

  const translateY = interpolate(entrance, [0, 1], [30, 0]);
  const opacity = interpolate(entrance, [0, 1], [0, 1]);

  return (
    <div
      style={{
        transform: `translateY(${translateY}px)`,
        opacity,
        background: "rgba(18, 24, 38, 0.8)",
        backdropFilter: "blur(14px)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        borderTop: `2px solid ${color}`,
        borderRadius: "16px",
        padding: "24px",
        boxShadow: `0 15px 30px -5px rgba(0, 0, 0, 0.6), 0 0 20px ${color}20`,
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        flex: 1,
        minWidth: "280px"
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h3 style={{ fontSize: "22px", fontWeight: 700, color: "#f8fafc", margin: 0 }}>
          {title}
        </h3>
        {badge && (
          <span
            style={{
              fontSize: "12px",
              fontWeight: 600,
              padding: "4px 10px",
              borderRadius: "20px",
              background: `${color}25`,
              color,
              border: `1px solid ${color}40`
            }}
          >
            {badge}
          </span>
        )}
      </div>

      <p style={{ fontSize: "15px", lineHeight: "1.6", color: "#94a3b8", margin: 0 }}>
        {description}
      </p>
    </div>
  );
};
