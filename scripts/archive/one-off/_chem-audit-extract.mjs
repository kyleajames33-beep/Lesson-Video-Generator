import {readFileSync} from 'node:fs';
const targets = [
  'chemistry-y12-m5-l9-writing-keq-expressions',
  'chemistry-y12-m6-l9-ka-kb-ice-tables',
  'chemistry-y12-m6-l11-ph-calculations-mastery',
  'chemistry-y12-m6-l12-ka-pka-acid-strength',
  'chemistry-y12-m6-l13-buffers',
  'chemistry-y12-m7-l20-organic-reactions-mastery',
  'chemistry-y12-m8-l2-gravimetric-analysis',
];
for (const t of targets) {
  const d = JSON.parse(readFileSync(`src/data/${t}.json`, 'utf8'));
  console.log(`\n${'='.repeat(70)}\n${t}\n${'='.repeat(70)}`);
  for (const s of d.scenes || []) {
    if (s.type === 'workedExample') {
      console.log(`\n[WORKED EXAMPLE] ${s.heading || s.id}`);
      if (s.prompt) console.log(`  Q: ${s.prompt}`);
      for (const st of s.steps || []) {
        const txt = typeof st === 'string' ? st : (st.text || st.label || JSON.stringify(st));
        const res = typeof st === 'object' && st.result ? `  => ${st.result}` : '';
        console.log(`   • ${txt}${res}`);
      }
      if (s.answer) console.log(`  ANSWER: ${s.answer}`);
    }
    if (s.type === 'quickCheck') {
      console.log(`\n[QUICK CHECK] ${s.heading || s.id}`);
      if (s.question) console.log(`  Q: ${s.question}`);
      if (s.options) console.log(`  Options: ${JSON.stringify(s.options)}`);
      if (s.answer) console.log(`  ANSWER: ${s.answer}`);
      for (const st of s.answerSteps || []) console.log(`   • ${typeof st==='string'?st:(st.text||JSON.stringify(st))}`);
    }
  }
}
