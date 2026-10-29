import React from "react";
import { ParticleBackground } from "../components/ParticleBackground.js";
import { SubtitleOverlay } from "../components/SubtitleOverlay.js";
import { CodeWindow } from "../components/CodeWindow.js";

export const Scene05_HandsOn: React.FC = () => {
  const skillCode = `---
name: smart-code-auditor
description: Kod bazasini xavfsizlik zaifliklari va API kalitlar bo'yicha avtomatik tekshiruvchi skill.
---

# Smart Code Auditor

Foydalanuvchi "kodni tekshir", "audit qil" deb so'raganda faollashadi.

## Bosqichlar:
1. scripts/audit.py skriptini terminalda ishga tushir
2. Natijalarni tahlil qilib, xavfsizlik hisobotini tayyorla`;

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "#ffffff",
        fontFamily: "Inter, system-ui, sans-serif",
        overflow: "hidden",
        padding: "0 80px"
      }}
    >
      <ParticleBackground />

      <div style={{ zIndex: 10, textAlign: "center", marginBottom: "30px" }}>
        <div
          style={{
            fontSize: "14px",
            fontWeight: 700,
            color: "#f59e0b",
            textTransform: "uppercase",
            letterSpacing: "2px",
            marginBottom: "8px"
          }}
        >
          Jonli Amaliyot • Hands-on Coding
        </div>
        <h2 style={{ fontSize: "44px", fontWeight: 800, margin: 0 }}>
          Custom Skill Yaratish: 'smart-code-auditor'
        </h2>
      </div>

      <div style={{ zIndex: 10, width: "100%", maxWidth: "880px" }}>
        <CodeWindow
          filename="skills/smart-code-auditor/SKILL.md"
          language="markdown / yaml"
          code={skillCode}
          highlightLine={2}
        />
      </div>

      <SubtitleOverlay text="Noldan Custom Skill yaratish: SKILL.md tuzilishi, frontmatter va audit skriptini agentga bog'lash jarayoni." />
    </div>
  );
};
