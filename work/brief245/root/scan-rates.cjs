// Root (21 Nov): flag voiced scenes whose speech rate is far below normal (possible unscripted extra speech).
const fs = require('fs'), path = require('path');
const base = 'docs/production/claude-pm/lessons';
for (const d of fs.readdirSync(base)) {
  const p = path.join(base, d, 'measured', 'lesson.json');
  if (!fs.existsSync(p)) continue;
  const l = JSON.parse(fs.readFileSync(p, 'utf8'));
  for (const s of l.scenes) {
    const v = s.voiceover; if (!v || !v.text || v.endFrame == null) continue;
    const sec = (v.endFrame - v.startFrame) / 30; if (sec < 3) continue;
    const rate = v.text.length / sec;
    if (rate < 10) console.log(d, s.id, v.text.length + ' chars', sec.toFixed(1) + ' s', rate.toFixed(1) + ' c/s');
  }
}
