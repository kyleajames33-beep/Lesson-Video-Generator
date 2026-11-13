#!/bin/bash
# finalise.sh <id> <holdFrame> <beforePng|-> : grade (16-frame sheet), build sheet, after still, before copy
export NODE_OPTIONS=--max-old-space-size=4096
cd /c/lesson-video-generator
id=$1; fr=$2; before=$3
ev=work/brief239/$id/repair-12nov; mkdir -p $ev
[ "$before" != "-" ] && cp "work/brief239/$id/$before" "$ev/before-$fr.png"
npm run grade:explainer -- Explainer-math-a12-$id > $ev/grade.log 2>&1; echo "grade exit $?" >> $ev/grade.log
python out/explainer/.repair-sweep/sheet.py out/explainer/Explainer-math-a12-$id/grade/stills docs/production/claude-pm/builds/math-a12-$id-sheet.jpg >> $ev/grade.log 2>&1
node out/explainer/.repair-sweep/stills.mjs Explainer-math-a12-$id $ev $fr > $ev/stills.log 2>&1
echo "$id done" >> C:/Users/kygs/AppData/Local/Temp/claude/maths-repair/final-status.log
