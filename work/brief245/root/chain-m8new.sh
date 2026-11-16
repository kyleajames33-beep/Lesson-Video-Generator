#!/bin/bash
# Root (16 Nov): render the five new Module 8 masters one at a time, then prep each for queueing.
cd /c/lesson-video-generator
for k in bio-m8-b12 bio-m8-b13 bio-m8-b14 bio-m8-b16 chem-m8-c13; do
  echo "== $k start $(date +%T)"
  node scripts/render-explainer.mjs Explainer-$k --confirm --revision=v1 2>&1 | grep -v "Rendered\|frame\|%" | tail -15
  node work/brief245/root/prep-new-v1.mjs $k v1 2>&1 | tail -3
  echo "== $k end $(date +%T)"
done
