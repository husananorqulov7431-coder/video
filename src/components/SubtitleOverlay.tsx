import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

interface SubtitleOverlayProps {
  text: string;
}

export const SubtitleOverlay: React.FC<SubtitleOverlayProps> = ({ text }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 14 }
  });

  const opacity = interpolate(entrance, [0, 1], [0, 1]);
  const translateY = interpolate(entrance, [0, 1], [20, 0]);

  if (!text) return null;

  return (
    <div
      style={{
        position: "absolute",
        bottom: 50,
        left: "50%",
        transform: `translateX(-50%) translateY(${translateY}px)`,
        maxWidth: "85%",
        zIndex: 50,
        opacity
      }}
    >
      <div
        style={{
          background: "rgba(15, 23, 42, 0.85)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.12)",
          boxShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.5), 0 0 20px rgba(99, 102, 241, 0.2)",
          borderRadius: "16px",
          padding: "16px 28px",
          textAlign: "center"
        }}
      >
        <span
          style={{
            fontSize: "26px",
            lineHeight: 1.4,
            fontWeight: 600,
            fontFamily: "Inter, system-ui, sans-serif",
            color: "#f8fafc",
            textShadow: "0 2px 4px rgba(0,0,0,0.6)"
          }}
        >
          {text}
        </span>
      </div>
    </div>
  );
};
