#!/bin/bash
# overview.sh <id> : sheets of every 3rd second, 6x5 tiles of 320 px
D=C:/Users/kygs/AppData/Local/Temp/claude/maths-repair/Explainer-math-a12-$1
T=$(python -c "import json;print(json.load(open('$D/probe.json',encoding='utf-8'))['to'])")
fr=(); n=0; s=0
for ((f=0; f<=T; f+=90)); do fr+=($f); if [ ${#fr[@]} -eq 30 ]; then python tiles.py $D $D/ov$s.jpg 6 5 320 ${fr[@]} >/dev/null; s=$((s+1)); fr=(); fi; done
[ ${#fr[@]} -gt 0 ] && python tiles.py $D $D/ov$s.jpg 6 5 320 ${fr[@]} >/dev/null
ls $D/ov*.jpg
