# Google Antigravity To'liq Masterklass Video Loyihasi 🎬🚀

Ushbu repozitoriy Google Antigravity platformasini noldan professional darajagacha o'rgatuvchi 14 daqiqalik o'zbek tilidagi to'liq darslik videosi, ssenariylari, subtitrlari, ovoz generatori va kodli video tizimini o'z ichiga oladi.

---

## 🌟 Loyiha Arxitekturasi

Loyiha to'liq avtomatlashtirilgan CI/CD video generatori sifatida loyihalashtirilgan:

1. **Subtitr va Ssenariy (`subtitles/`)**:
   - `antigravity_masterclass.srt`: Standart millisekundli SRT subtitr fayli.
   - `script.json`: Har bir sahna, vizual holat va diktor matnlari.
2. **Audio va TTS Generator (`scripts/generate_tts.py`)**:
   - O'zbek tilidagi eng tabiiy neyron ovoz (`uz-UZ-SardorNeural`) orqali har bir sahnaning `.mp3` audiosini chiqaradi va davomiyligini o'lchab `audio/timing_manifest.json` hosil qiladi.
3. **Remotion Kodli Video Tizimi (`src/`)**:
   - React + TypeScript + TailwindCSS negizida qurilgan kadrlar tizimi.
   - Kosmik neon fon (`ParticleBackground`), sintaksisli kod oynasi (`CodeWindow`), interaktiv terminal (`TerminalWindow`) va sinxron subtitrlar (`SubtitleOverlay`).
4. **Jonli Amaliyot: Custom Skill (`hands-on-skill/smart-code-auditor/`)**:
   - Dars oxirida ko'rsatiladigan haqiqiy ishlaydigan Antigravity Custom Skilli (`SKILL.md` va `scripts/audit.py`).
5. **GitHub Actions CI/CD (`.github/workflows/render-video.yml`)**:
   - Barcha render jarayonini bulutda mustaqil bajaradi. Kompyuteringiz yuklanmaydi va qizimaydi!

---

## 🚀 Ishga Tushirish Qo'llanmasi

### 1-Usul: GitHub Actions orqali Bulutda Render Qilish (Tavsiya etiladi)

Kompyuteringizni og'ir render bilan band qilmaslik uchun:
1. Ushbu loyihani shaxsiy GitHub repozitoriyingizga yuklang (`git push origin main`).
2. GitHub-dagi repozitoriyangizning **Actions** bo'limiga o'ting.
3. **Render Antigravity Masterclass Video** nomli workflow avtomatik boshlanadi (yoki **Run workflow** tugmasini bosing).
4. Jarayon tugagach, **Artifacts** qismidan tayyor `Antigravity-Masterclass-Uzbek-1080p` (.mp4) videosini yuklab oling!

---

### 2-Usul: Lokal Kompyuterda Ko'rish va Testlash

Lokal muhitda videoni tahrirlash yoki brauzerda real vaqtda ko'rish uchun:

```bash
# 1. Bog'liqliklarni o'rnatish
npm install
pip install edge-tts mutagen

# 2. Audio fayllarni generatsiya qilish
python scripts/generate_tts.py

# 3. Remotion Studio-ni brauzerda ochish
npm start
```
Brauzerda `http://localhost:3000` manzili ochiladi va siz har bir sahna, animatsiya va audioni jonli ko'rishingiz mumkin bo'ladi.

Lokal ravishda to'liq video render qilish:
```bash
npm run render
```
Tayyor video `out/Antigravity_Masterclass_Uzbek.mp4` manziliga saqlanadi.

---

## 🛠️ Amaliyot: Custom Skill-ni Antigravity-ga O'rnatish

Videoning 5-modulida ko'rsatilgan `smart-code-auditor` qobiliyatini o'z Antigravity muhitingizga ulash uchun:
1. `hands-on-skill/smart-code-auditor` papkasini nusxalang.
2. Uni loyihangizdagi `.gemini/skills/` katalogiga yoki global `~/.gemini/antigravity/skills/` manziliga joylashtiring.
3. Antigravity chatida:
   ```
   /skill smart-code-auditor Ushbu loyihaning xavfsizligini tekshir
   ```
   deb yozing! Agent yangi qobiliyatni ishga tushirib, natijani taqdim etadi.
