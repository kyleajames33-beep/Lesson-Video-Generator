#!/bin/bash
cd /c/lesson-video-generator
for k in math-a12-t01 math-a12-t02 math-a12-t03; do
  until mkdir work/brief245/root/stills.lock 2>/dev/null; do sleep 30; done
  echo "== $k start $(date +%T)"
  bash work/brief245/root/render-one.sh $k v1 2>&1 | grep -v "h264_mp4toannexb\|Last message repeated" | tail -8
  rmdir work/brief245/root/stills.lock
  echo "== $k end $(date +%T)"
done
