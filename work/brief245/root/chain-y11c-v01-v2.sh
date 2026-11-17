#!/bin/bash
cd /c/lesson-video-generator
until mkdir work/brief245/root/stills.lock 2>/dev/null; do sleep 30; done
node scripts/explainer-stills.mjs Explainer-chem-y11-m1-v01 300 1440 1710 1890 2 2>&1 | tail -4
echo "== v01 v2 start $(date +%T)"
node scripts/render-explainer.mjs Explainer-chem-y11-m1-v01 --confirm --revision=v2 2>&1 | grep -v "h264_mp4toannexb\|Last message repeated" | tail -4
rmdir work/brief245/root/stills.lock
echo "== v01 v2 end $(date +%T)"
