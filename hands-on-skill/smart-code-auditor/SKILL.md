---
name: smart-code-auditor
description: Kod bazasini xavfsizlik zaifliklari, maxfiy ma'lumotlar (API kalitlar, parollar, tokenlar) sizib chiqishi va toza arxitektura tamoyillari bo'yicha avtomatik tekshiruvchi Antigravity Custom Skilli. Kod audit qilish, commit oldidan xavfsizlikni tekshirish yoki loyiha sifatini baholash so'ralganda faollashadi.
---

# Smart Code Auditor — Antigravity Maxsus Qobiliyati

Ushbu skill Antigravity agentiga loyiha kodlarini chuqur xavfsizlik va sifat auditidan o'tkazish imkonini beradi.

## Qachon Faollashadi (Triggers)
Foydalanuvchi quyidagi mavzularda murojaat qilganda:
- "Kodni xavfsizlikka tekshir", "audit qil", "xatolarni tekshir"
- "Commit qilishdan oldin kodda sirli kalitlar qolib ketmaganmi?"
- "Loyiha arxitekturasi va kod sifatini bahola"
- "Yangi yozilgan kodlarni pre-review qil"

## Bajarilish Bosqichlari

### 1-Qadam: Audit Skriptini Ishga Tushirish
Agent `scripts/audit.py` yordamchi skriptini terminal orqali xavfsiz ishga tushiradi:
```bash
python <skill-dir>/scripts/audit.py --path .
```

### 2-Qadam: Natijalarni Tahlil Qilish
Skript quyidagi kategoriyalar bo'yicha JSON formatida hisobot qaytaradi:
1. **Critical Secrets**: Hardcoded API kalitlar, JWT tokenlar, parollar, AWS/GCP credentiallar.
2. **Security Vulnerabilities**: SQL Injection, Command Injection xavflari, xavfsiz bo'lmagan eval() chaqiruvlari.
3. **Code Smells**: Katta hajmli funksiyalar, ishlatilmagan importlar va qoldirib ketilgan console.log / debug printlari.

### 3-Qadam: Professional Hisobot Taqdim Etish
Agent tahlil natijasini foydalanuvchiga GitHub-style Markdown formatida va qadam-baqadam tavsiyalar bilan taqdim etadi.
Xavfli holatlar uchun `[!CAUTION]` va `[!WARNING]` ogohlantirish bloklaridan foydalanadi.
Har bir topilgan xatolikka aniq fayl yo'li va qator raqami (`[file.py:L45](...)`) bilan havola beradi.
