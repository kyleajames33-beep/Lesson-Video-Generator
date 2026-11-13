#!/bin/bash
export NODE_OPTIONS=--max-old-space-size=4096
cd /c/lesson-video-generator
for id in "$@"; do
  node out/explainer/.repair-sweep/sweep.mjs Explainer-math-a12-$id > /c/Users/kygs/AppData/Local/Temp/claude/maths-repair/sweep-$id.log 2>&1
  echo "$id exit $?" >> /c/Users/kygs/AppData/Local/Temp/claude/maths-repair/sweep-status.log
done
