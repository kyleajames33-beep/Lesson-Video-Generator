#!/bin/bash
# Root (16 Nov): render the five new Module 8 masters one at a time, then prep each for queueing.
cd /c/lesson-video-generator
for k in chem-m8-c09 chem-m8-c10 chem-m8-c11a chem-m8-c11b chem-m8-c12; do
  echo "== $k start $(date +%T)"
  node scripts/render-explainer.mjs Explainer-$k --confirm --revision=v1 2>&1 | grep -v "Rendered\|frame\|%" | tail -15
  node work/brief245/root/prep-new-v1.mjs $k v1 2>&1 | tail -3
  echo "== $k end $(date +%T)"
done
