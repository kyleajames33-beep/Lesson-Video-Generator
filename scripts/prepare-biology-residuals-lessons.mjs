import {mkdir,readFile,writeFile} from 'node:fs/promises';
import path from 'node:path';
import {biologyResidualSources,biologyResidualArtifacts} from './lib/biology-residuals-lessons.mjs';
import {hash} from './lib/science-audit.mjs';
const output=path.resolve(process.argv[2]??'out/review/biology-residuals-lessons');
await mkdir(output,{recursive:true});const lessons=[];
for(const name of Object.keys(biologyResidualSources)){
 const source='src/data/'+name+'.json',bytes=await readFile(source),artifacts=biologyResidualArtifacts(name,bytes),exports=[];
 for(const [role,value] of Object.entries(artifacts)){const content=JSON.stringify(value,null,2)+'\n',file=name+(role==='draft'?'':'.'+role)+'.json';await writeFile(path.join(output,file),content);exports.push({role,file,sha256:hash(content)});}
 lessons.push({name,source,sourceSha256:hash(bytes),exports});
}
await writeFile(path.join(output,'manifest.json'),JSON.stringify({schemaVersion:1,status:'isolated biology-residuals proposals; teacher, specialist and visual review pending',sourceLessonsModified:false,audioGenerated:false,rendered:false,registered:false,lessons},null,2)+'\n');
console.log('Prepared five isolated biology-residuals lessons with unapproved text takes. No audio or renders.');
const review=['# Biology residual source review','', 'Five complete isolated unvoiced proposals. None is approved for audio generation, publication or classroom delivery.','', 'The unchanged catalogue remains authoritative. These drafts require teacher/science, curriculum, artwork, timing, audio and rendered review.',''];
for(const entry of lessons){const a=biologyResidualArtifacts(entry.name,await readFile(entry.source));review.push(`## ${a.draft.title}`,`Source: ${entry.source}`,`Finding: ${a.review.finding}`,`Source SHA-256: ${entry.sourceSha256}`,'',...a.review.fixInventory.map(t=>'- '+t),'');
 for(const scene of a.draft.scenes)review.push(`### ${scene.id}`,scene.voiceover.text,'');
 review.push('### Primary evidence and scope',...a.review.sourceEvidence.map(s=>`- [${s.title}](${s.url}). ${s.supports} Limit: ${s.limit}`),'');
}
await writeFile(path.join(output,'review.md'),review.join('\n')+'\n');
