#!/bin/bash
cd /c/lesson-video-generator
until mkdir work/brief245/root/stills.lock 2>/dev/null; do sleep 30; done
echo "== b15 start $(date +%T)"
node scripts/render-explainer.mjs Explainer-bio-m8-b15 --confirm --revision=v1 2>&1 | grep -v "h264_mp4toannexb\|Last message repeated" | tail -4
rmdir work/brief245/root/stills.lock
node work/brief245/root/prep-new-v1.mjs bio-m8-b15 v1 2>&1 | tail -2
echo "== b15 end $(date +%T)"
