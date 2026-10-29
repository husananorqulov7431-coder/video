#!/usr/bin/env python3
"""
Smart Code Auditor - Core Python Utility for Antigravity Custom Skill
Loyihadagi fayllarni skanerlab, maxfiy kalitlar (secrets) va xavfli amallarni aniqlovchi skript.
"""

import os
import re
import sys
import json
import argparse
from pathlib import Path

# Maxfiy ma'lumotlarni qidirish uchun RegEx patternlar
SECRET_PATTERNS = {
    "OpenAI / Gemini API Key": r"(?:sk-[a-zA-Z0-9]{32,}|AIza[0-9A-Za-z-_]{35})",
    "Generic Secret / Token / Password": r"(?i)(?:password|secret|token|api_key|apikey|bearer)\s*[:=]\s*['\"][a-zA-Z0-9_\-]{8,}['\"]",
    "Private Key Block": r"-----BEGIN (?:RSA )?PRIVATE KEY-----",
    "AWS Access Key ID": r"AKIA[0-9A-Z]{16}",
    "GitHub Personal Access Token": r"gh[pous]_[0-9a-zA-Z]{36}"
}

# Xavfsizlik zaifliklari (Security smells)
VULN_PATTERNS = {
    "Insecure eval() execution": r"\beval\s*\(",
    "Potential Command Injection (os.system/popen)": r"os\.(?:system|popen)\s*\(",
    "SQL Raw String Concatenation": r"(?i)(?:SELECT|INSERT|UPDATE|DELETE).*\+.*(?:\$|_GET|_POST|params)",
}

IGNORE_DIRS = {".git", "node_modules", "venv", ".venv", "__pycache__", "dist", "build", ".gemini"}
IGNORE_EXTS = {".png", ".jpg", ".jpeg", ".ico", ".svg", ".mp3", ".mp4", ".zip", ".tar", ".pyc"}


def audit_file(file_path: Path):
    findings = []
    try:
        with open(file_path, "r", encoding="utf-8", errors="ignore") as f:
            for line_no, line in enumerate(f, 1):
                # Maxfiy kalitlarni tekshirish
                for label, pattern in SECRET_PATTERNS.items():
                    if re.search(pattern, line):
                        findings.append({
                            "type": "SECRET",
                            "severity": "CRITICAL",
                            "rule": label,
                            "line": line_no,
                            "snippet": line.strip()[:100]
                        })

                # Zaifliklarni tekshirish
                for label, pattern in VULN_PATTERNS.items():
                    if re.search(pattern, line):
                        findings.append({
                            "type": "VULNERABILITY",
                            "severity": "HIGH",
                            "rule": label,
                            "line": line_no,
                            "snippet": line.strip()[:100]
                        })
    except Exception as e:
        pass
    return findings


def scan_workspace(root_dir: Path):
    results = {
        "scanned_files": 0,
        "critical_issues": 0,
        "high_issues": 0,
        "findings": []
    }

    for current_root, dirs, files in os.walk(root_dir):
        # Ignore dirs
        dirs[:] = [d for d in dirs if d not in IGNORE_DIRS]

        for file_name in files:
            ext = os.path.splitext(file_name)[1].lower()
            if ext in IGNORE_EXTS:
                continue

            file_path = Path(current_root) / file_name
            results["scanned_files"] += 1

            file_findings = audit_file(file_path)
            if file_findings:
                rel_path = file_path.relative_to(root_dir)
                for item in file_findings:
                    if item["severity"] == "CRITICAL":
                        results["critical_issues"] += 1
                    elif item["severity"] == "HIGH":
                        results["high_issues"] += 1

                    results["findings"].append({
                        "file": str(rel_path),
                        **item
                    })

    return results


def main():
    parser = argparse.ArgumentParser(description="Antigravity Smart Code Auditor")
    parser.add_argument("--path", default=".", help="Skaner qilinadigan katalog yo'li")
    parser.add_argument("--json", action="store_true", help="Natijani toza JSON formatida chiqarish")
    args = parser.parse_args()

    root_path = Path(args.path).resolve()
    results = scan_workspace(root_path)

    if args.json:
        print(json.dumps(results, indent=2))
    else:
        print("==================================================")
        print("  SMART CODE AUDITOR — XAVFSIZLIK TEKSHIRUVI")
        print("==================================================")
        print(f"Tekshirilgan fayllar soni: {results['scanned_files']}")
        print(f"Kritik xavflar (Secrets):  {results['critical_issues']}")
        print(f"Jiddiy zaifliklar (High):  {results['high_issues']}")
        print("--------------------------------------------------")
        if not results["findings"]:
            print("[+] Tabriklaymiz! Loyihada hech qanday xavf yoki sizib chiqqan kalitlar topilmadi.")
        else:
            for item in results["findings"]:
                badge = "[!!! CRITICAL]" if item["severity"] == "CRITICAL" else "[! HIGH]"
                print(f"{badge} {item['file']}:{item['line']} -> {item['rule']}")
                print(f"    Kod: {item['snippet']}")
        print("==================================================")


if __name__ == "__main__":
    main()
