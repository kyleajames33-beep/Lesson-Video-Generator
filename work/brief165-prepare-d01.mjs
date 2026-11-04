import fs from 'node:fs';
const file='docs/production/claude-pm/lessons/math-a12-d01.md';
const design=fs.readFileSync(file,'utf8');
const headings=[...design.matchAll(/^### (\d+)\. ([^\r\n]+)/gm)];
if(headings.length!==16) throw Error(`Expected 16 scenes; found ${headings.length}`);
const scenes=headings.map((heading,i)=>{
 const n=heading[1], index=Number(n), id=`scene-${n.padStart(2,'0')}`;
 const part=design.slice(heading.index,headings[i+1]?.index??design.indexOf('\n## Teaching checks',heading.index));
 const narration=part.match(/^> ([^\r\n]+)/m)?.[1];if(!narration)throw Error(`Missing narration ${id}`);
 const text=narration.replace(/\*\*/g,'').trim();
 const hold=index===16?60:([11,13].includes(index)?10:Number(part.match(/Hold about (\d+) seconds?/i)?.[1]??0));
 return {id,title:heading[2],text,audioFile:`public/audio/math-a12-d01/${id}.wav`,holdSeconds:hold,holdKind:[11,13].includes(index)?'countdown':index===16?'notes':'visual'};
});
const folder='docs/production/claude-pm/lessons/math-a12-d01';fs.mkdirSync(folder,{recursive:true});
fs.writeFileSync(`${folder}/voice-manifest.json`,JSON.stringify({mathPronunciation:true,source:file,scenes:scenes.map(({id,text,audioFile})=>({id,text,audioFile}))},null,2),{flag:'wx'});
fs.writeFileSync(`${folder}/lesson.json`,JSON.stringify({id:'math-a12-d01',fps:30,scenes:scenes.map(({id,title,text,holdSeconds,holdKind})=>({id,title,voiceover:{text},holdSeconds,holdKind,durationInFrames:1}))},null,2),{flag:'wx'});
console.log(`Prepared ${scenes.length} scenes; ${scenes.reduce((n,s)=>n+s.text.length,0)} narration characters.`);
