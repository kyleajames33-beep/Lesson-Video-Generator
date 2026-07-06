import {readFileSync} from 'node:fs';
const targets=['biology-y12-m5-l14-mendelian-patterns','biology-y12-m5-l18-large-scale-population-genetics','biology-y12-m7-l14-vaccination-active-passive-immunity','biology-y12-m8-l13-analysing-epidemiological-data','biology-y12-m7-l5-microbial-testing'];
for(const t of targets){
  let d; try{d=JSON.parse(readFileSync(`src/data/${t}.json`,'utf8'));}catch(e){console.log('SKIP '+t);continue;}
  console.log(`\n${'='.repeat(64)}\n${t}\n${'='.repeat(64)}`);
  for(const s of d.scenes||[]){
    if(s.type==='workedExample'){
      console.log(`\n[WE] ${s.heading||s.id}`);
      if(s.prompt)console.log('  Q: '+s.prompt);
      for(const st of s.steps||[]){const x=typeof st==='string'?st:(st.text||st.label||JSON.stringify(st));console.log('   • '+x);}
      if(s.answer)console.log('  ANS: '+s.answer);
    }
    if(s.type==='quickCheck'){
      console.log(`\n[QC] ${s.heading||s.id}`);
      if(s.question)console.log('  Q: '+s.question);
      if(s.answer)console.log('  ANS: '+s.answer);
      for(const st of s.answerSteps||[])console.log('   • '+(typeof st==='string'?st:JSON.stringify(st)));
    }
  }
}
