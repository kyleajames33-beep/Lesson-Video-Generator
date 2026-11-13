#!/bin/bash
# ink-check.sh <shortId>... (13 Nov 2026): line-through-text check for math-a12 lessons, one remotion process at a time.
# Per lesson: plain 1 fps sweep (JPEG) + text-hidden and text-only 1 fps sweeps (PNG), then ink.py (visible graphic
# beside glyph ink) and hitsheet.py review sheets. Results: $L/ink/<short>.txt, <short>.json, <short>-hits-N.jpg.
# Add KEEP=1 to keep the frames; otherwise frames are deleted after the sheets are made.
export NODE_OPTIONS=--max-old-space-size=4096
cd /c/lesson-video-generator
L=/c/Users/kygs/AppData/Local/Temp/claude/maths-repair
S=out/explainer/.repair-sweep
mkdir -p $L/ink
for s in "$@"; do
  id=Explainer-math-a12-$s
  node $S/sweep.mjs $id > $L/ink/$s-norm.log 2>&1 || { echo "$s normal sweep failed" >> $L/ink/status.log; continue; }
  node $S/sweep.mjs $id --ink > $L/ink/$s-ink.log 2>&1 || { echo "$s ink sweep failed" >> $L/ink/status.log; continue; }
  node $S/sweep.mjs $id --textonly > $L/ink/$s-text.log 2>&1 || { echo "$s text sweep failed" >> $L/ink/status.log; continue; }
  python $S/ink.py $L/ink/$id --normal $L/$id --text $L/text/$id --json $L/ink/$s.json > $L/ink/$s.txt 2>&1
  rm -f $L/ink/$s-hits-*.jpg
  python $S/hitsheet.py $L/ink/$id $L/$id $L/ink/$s.json $L/ink/$s-hits > /dev/null 2>&1
  [ "$KEEP" = "1" ] || rm -rf "${L:?}/ink/$id/frames" "${L:?}/$id/frames" "${L:?}/text/$id/frames"
  echo "$s done $(tail -1 $L/ink/$s.txt)" >> $L/ink/status.log
done
