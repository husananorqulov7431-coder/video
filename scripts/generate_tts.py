#!/usr/bin/env python3
"""
Google Antigravity Masterclass - TTS & Timing Manifest Generator
Bu skript ssenariydagi barcha matnlarni o'zbek tilida yuqori sifatli audio (MP3) qilib yaratadi
va har bir sahnaning aniq davomiyligi hamda kadrlar sonini (60 FPS) hisoblab
Remotion uchun `audio/timing_manifest.json` faylini chiqaradi.
"""

import os
import sys
import json
import asyncio
from pathlib import Path

# Loyiha ildiz katalogi
ROOT_DIR = Path(__file__).resolve().parent.parent
SCRIPT_PATH = ROOT_DIR / "subtitles" / "script.json"
AUDIO_OUT_DIR = ROOT_DIR / "public" / "audio"
MANIFEST_PATH = ROOT_DIR / "audio" / "timing_manifest.json"

FPS = 60  # Video kadrlar chastotasi


async def generate_with_edge_tts(text: str, output_file: Path, voice: str = "uz-UZ-SardorNeural"):
    """Microsoft Edge Neural TTS orqali tabiiy o'zbek tilida audio generatsiya qilish."""
    try:
        import edge_tts
    except ImportError:
        print("[!] edge-tts kutubxonasi topilmadi. O'rnatilmoqda: pip install edge-tts mutagen")
        import subprocess
        subprocess.check_call([sys.executable, "-m", "pip", "install", "edge-tts", "mutagen"])
        import edge_tts

    communicate = edge_tts.Communicate(text, voice, rate="+2%", pitch="+0Hz")
    await communicate.save(str(output_file))


def get_audio_duration_seconds(file_path: Path) -> float:
    """Audio fayl davomiyligini (sekundlarda) aniq o'lchash."""
    try:
        from mutagen.mp3 import MP3
        audio = MP3(file_path)
        return float(audio.info.length)
    except Exception:
        # Mutagen bo'lmasa yoki xato bo'lsa, fayl hajmi va standart bitrate orqali taxminiy hisoblash
        # Masalan, 128 kbps MP3 uchun: bytes / (128 * 1024 / 8)
        size_bytes = os.path.getsize(file_path)
        return round(size_bytes / 16000.0, 2)


async def main():
    AUDIO_OUT_DIR.mkdir(parents=True, exist_ok=True)

    if not SCRIPT_PATH.exists():
        print(f"[-] Xatolik: {SCRIPT_PATH} topilmadi!")
        sys.exit(1)

    with open(SCRIPT_PATH, "r", encoding="utf-8") as f:
        data = json.load(f)

    scenes = data.get("scenes", [])
    manifest = {
        "title": data.get("title", "Antigravity Masterclass"),
        "language": data.get("language", "uz"),
        "fps": FPS,
        "totalDurationSec": 0,
        "totalFrames": 0,
        "scenes": []
    }

    current_frame_start = 0

    print("==================================================")
    print(" Google Antigravity - TTS & Audio Sintezi Boshlandi")
    print("==================================================")

    for idx, scene in enumerate(scenes, 1):
        scene_id = scene["id"]
        narration = scene["narration"]
        mp3_name = f"{scene_id}.mp3"
        output_mp3 = AUDIO_OUT_DIR / mp3_name

        print(f"[{idx}/{len(scenes)}] Ovoz yaratilmoqda: {scene_id} ({scene['title']})...")
        await generate_with_edge_tts(narration, output_mp3)

        duration_sec = get_audio_duration_seconds(output_mp3)
        # Sahnaga 1 soniya vizual nafas olish (buffer) qo'shamiz
        padded_duration_sec = round(duration_sec + 1.2, 2)
        frames_count = int(padded_duration_sec * FPS)

        scene_manifest = {
            "id": scene_id,
            "title": scene["title"],
            "audioFile": f"audio/{mp3_name}",
            "durationSec": padded_duration_sec,
            "rawAudioDurationSec": round(duration_sec, 2),
            "startFrame": current_frame_start,
            "durationInFrames": frames_count,
            "endFrame": current_frame_start + frames_count,
            "visuals": scene.get("visuals", {})
        }

        manifest["scenes"].append(scene_manifest)
        current_frame_start += frames_count
        print(f"    -> Davomiyligi: {padded_duration_sec}s ({frames_count} kadr)")

    manifest["totalDurationSec"] = round(current_frame_start / FPS, 2)
    manifest["totalFrames"] = current_frame_start

    with open(MANIFEST_PATH, "w", encoding="utf-8") as f:
        json.dump(manifest, f, indent=2, ensure_ascii=False)

    print("==================================================")
    print(f"[+] Sintez muvaffaqiyatli yakunlandi!")
    print(f"[+] Umumiy vaqt: {manifest['totalDurationSec']} soniya (~{round(manifest['totalDurationSec']/60, 1)} daqiqa)")
    print(f"[+] Jami kadrlar soni (60 FPS): {manifest['totalFrames']}")
    print(f"[+] Manifest saqlandi: {MANIFEST_PATH}")
    print("==================================================")


if __name__ == "__main__":
    asyncio.run(main())
