import React from "react";
import { ParticleBackground } from "../components/ParticleBackground.js";
import { SubtitleOverlay } from "../components/SubtitleOverlay.js";
import { TerminalWindow } from "../components/TerminalWindow.js";

export const Scene03_Superpowers: React.FC = () => {
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

      <div style={{ zIndex: 10, textAlign: "center", marginBottom: "40px" }}>
        <div
          style={{
            fontSize: "14px",
            fontWeight: 700,
            color: "#38bdf8",
            textTransform: "uppercase",
            letterSpacing: "2px",
            marginBottom: "10px"
          }}
        >
          Ish Jarayoni & Avtonomlik
        </div>
        <h2 style={{ fontSize: "48px", fontWeight: 800, margin: 0 }}>
          Agentic Super-kuchlar: Slash Komandalar va Subagentlar
        </h2>
      </div>

      <div style={{ zIndex: 10, width: "100%", maxWidth: "980px" }}>
        <TerminalWindow
          title="antigravity ~ autonomous execution session"
          commands={[
            {
              prompt: "user>",
              text: "/plan Loyihani to'liq xavfsiz refaktoring qilish va testlarni yangilash",
              output: [
                "[✓] Subagent 'research' ishga tushirildi (kod bazasi tahlil qilinmoqda...)",
                "[✓] Arxitektura tahlil qilindi: 14 ta fayl, 3 ta yangi modul",
                "[Artifact] <Artifact Directory>/plan.md yaratildi. Foydalanuvchi tasdig'i kutilmoqda..."
              ]
            },
            {
              prompt: "user>",
              text: "/grill-me Noaniq savollarni birgalikda yechamiz",
              output: [
                "[?] Savol 1/3: Ma'lumotlar bazasi sifatida PostgreSQL yoki SQLite tanlanadimi?",
                "-> (Recommended) PostgreSQL (katta yuklamalar va masshtab uchun mos)"
              ]
            },
            {
              prompt: "user>",
              text: "/goal Barcha unit testlarni yozib, coverage darajasini 90% ga yetkaz",
              output: [
                "[✓] Avtonom rejim faollashdi. Agent fon rejimida to'xtovsiz ishlaydi..."
              ]
            }
          ]}
        />
      </div>

      <SubtitleOverlay text="/plan, /grill-me, /goal va Subagentlar to'dasi orqali Antigravity har qanday murakkab vazifani xatosiz rejalashtiradi va bajaradi." />
    </div>
  );
};
