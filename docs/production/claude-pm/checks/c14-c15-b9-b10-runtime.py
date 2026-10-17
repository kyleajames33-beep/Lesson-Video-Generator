# Narration count and runtime estimate for C14, C15, B9, B10 (17 Oct). Run: python c14-c15-b9-b10-runtime.py
# Build-parser rules: "### " headings, "> " narration lines, bold markers removed.
# Runtime = chars / 13.3 + 2 s per scene + stated reading holds + 10 s per countdown + 55 s extra notes hold.
import re, sys, pathlib
base = pathlib.Path(__file__).resolve().parent.parent / "lessons"
WORDS = {"half a": 0.5, "one": 1, "two": 2, "three": 3, "a": 1}
for name in ["chem-m5-c14.md", "chem-m5-c15.md", "bio-m5-b09.md", "bio-m5-b10.md"]:
    text = (base / name).read_text(encoding="utf-8")
    scenes, cur = [], None
    for line in text.splitlines():
        if line.startswith("### "):
            cur = {"h": line[4:], "n": "", "hold": 0.0, "cd": False}
            scenes.append(cur)
        elif cur is not None and line.startswith("## "):
            cur = None
        elif cur is not None:
            if line.startswith("> "):
                cur["n"] += (" " if cur["n"] else "") + line[2:].replace("**", "")
            m = re.search(r"Hold (?:about )?(half a|one|two|three|\d+(?:\.\d+)?|a) second", line)
            if m and "key notes" not in cur["h"]:
                v = m.group(1)
                cur["hold"] = WORDS.get(v, None) if v in WORDS else float(v)
            if re.search(r"Settle on the model answer for about a second", line):
                cur["hold"] = 1.0
            if "Countdown ring for 10 seconds" in line or "runs for 10 seconds" in line:
                cur["cd"] = True
    chars = [len(s["n"]) for s in scenes]
    total = sum(chars)
    holds = sum(s["hold"] for s in scenes)
    cds = sum(10 for s in scenes if s["cd"])
    missing = [s["h"] for s in scenes if not s["n"]]
    bad = [s["h"] for s in scenes if not re.match(r"\d+[a-z]?\. ", s["h"])]
    secs = total / 13.3 + 2 * len(scenes) + holds + cds + 55
    print(f"{name}: {len(scenes)} scenes, {total} chars, speech {total/13.3:.0f} s, holds {holds:.1f} s, "
          f"countdowns {cds} s -> {secs:.0f} s = {secs/60:.2f} min")
    print("  per scene:", ", ".join(f"{s['h'].split('.')[0]}:{c}" for s, c in zip(scenes, chars)))
    fb = [(s["h"].split(".")[0], round(len(s["n"]) / 13.3, 1)) for s in scenes if "feedback" in s["h"].lower()]
    print("  feedback seconds:", fb)
    if missing: print("  MISSING NARRATION:", missing)
    if bad: print("  BAD HEADINGS:", bad)
    if chr(0x2014) in text: print("  EM DASH PRESENT")
    if "## Build ids" not in text: print("  NO BUILD IDS")
