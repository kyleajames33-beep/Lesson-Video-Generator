#!/bin/bash
# sheets-repair2.sh <shortId>... (13 Nov 2026): 16-frame grade sheet per lesson, holding the stills lock.
#   -> docs/production/claude-pm/builds/math-a12-<id>-sheet-repair2-2026-11-13.jpg ; log in $L/grade-<id>.log
export NODE_OPTIONS=--max-old-space-size=4096
cd /c/lesson-video-generator
L=/c/Users/kygs/AppData/Local/Temp/claude/maths-repair
LOCK=out/explainer/.stills-lock
for s in "$@"; do
  id=Explainer-math-a12-$s
  # explainer-grade.mjs takes and waits for the stills lock itself; this script must not hold it (13 Nov deadlock).
  # 13 Nov: hard 40-minute limit (includes waiting for the lock) so a hung grade (for example on a full disk) releases the lock
  timeout -k 30 2400 npm run grade:explainer -- $id > $L/grade-$s.log 2>&1; rc=$?; echo "grade exit $rc" >> $L/grade-$s.log
  if [ $rc -eq 124 ] || [ $rc -eq 137 ]; then powershell -NoProfile -c "Get-CimInstance Win32_Process -Filter \"Name='node.exe'\" | Where-Object { \$_.CommandLine -match 'grade' -and \$_.CommandLine -match '$id' } | ForEach-Object { Stop-Process -Id \$_.ProcessId -Force }" ; fi
  [ "$(ls out/explainer/$id/grade/stills/sheet-*.png 2>/dev/null | wc -l)" -ge 16 ] && python out/explainer/.repair-sweep/sheet.py out/explainer/$id/grade/stills docs/production/claude-pm/builds/math-a12-$s-sheet-repair2-2026-11-13.jpg >> $L/grade-$s.log 2>&1
  echo "$s sheet $(grep 'grade exit' $L/grade-$s.log)" >> $L/sheets-status.log
done
