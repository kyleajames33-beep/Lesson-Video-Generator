#!/bin/bash
# Root (16 Nov): after the s04-s06 chain exits, fix the uppercased handoff card titles and render s05 and s06 as v2.
cd /c/lesson-video-generator
while kill -0 3632 2>/dev/null; do sleep 60; done
sed -i '101s/title="F(x)"/title="the CDF"/' src/explainer/lessons/math-a12-s04/s3.tsx
sed -i '94s/title="f(x)"/title="the density"/' src/explainer/lessons/math-a12-s05/s3.tsx
grep -c 'title="the density"' src/explainer/lessons/math-a12-s05/s3.tsx
echo "math-a12-s06 v1 HOLD: opens on S05FinalFrame, whose card read F(X) for f(x). Superseded by v2." > work/release-queue/math-a12-s06-v1.HOLD.txt
for k in math-a12-s05 math-a12-s06; do bash work/brief245/root/render-one.sh $k v2 || echo "CHAIN STOP at $k"; done
