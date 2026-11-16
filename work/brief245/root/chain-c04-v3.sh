#!/bin/bash
cd /c/lesson-video-generator
until mkdir work/brief245/root/stills.lock 2>/dev/null; do sleep 30; done
echo "== c04 v3 start $(date +%T)"
node scripts/render-explainer.mjs Explainer-chem-m8-c04 --confirm --revision=v3 2>&1 | grep -v "h264_mp4toannexb\|Last message repeated" | tail -20
rmdir work/brief245/root/stills.lock
node work/brief245/root/prep-new-v1.mjs chem-m8-c04 v3 2>&1 | tail -3
echo "== c04 v3 end $(date +%T)"
