#!/bin/bash
cd /c/lesson-video-generator
for k in chem-y11-m1-v01 chem-y11-m1-v02; do
  until mkdir work/brief245/root/stills.lock 2>/dev/null; do sleep 30; done
  echo "== $k start $(date +%T)"
  node scripts/render-explainer.mjs Explainer-$k --confirm --revision=v1 2>&1 | grep -v "h264_mp4toannexb\|Last message repeated" | tail -6
  rmdir work/brief245/root/stills.lock
  echo "== $k end $(date +%T)"
done
