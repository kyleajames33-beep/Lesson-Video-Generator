import {mkdir,readFile,writeFile} from 'node:fs/promises';
import path from 'node:path';
import {indicatorName,indicatorArtifacts} from './lib/indicator-corrections.mjs';
import {hash} from './lib/science-audit.mjs';
const output=path.resolve(process.argv[2]??'out/review/indicator-corrections');
const source='src/data/'+indicatorName+'.json',bytes=await readFile(source),artifacts=indicatorArtifacts(bytes);
const exports=Object.entries(artifacts).map(([role,value])=>{
  const content=JSON.stringify(value,null,2)+'\n';
  return {role,file:indicatorName+(role==='draft'?'':'.'+role)+'.json',content,sha256:hash(content)};
});
await mkdir(output,{recursive:true});
for(const item of exports)await writeFile(path.join(output,item.file),item.content);
await writeFile(path.join(output,'manifest.json'),JSON.stringify({schemaVersion:1,source,sourceSha256:hash(bytes),
  status:'isolated unvoiced proposal; teacher and science review pending',sourceLessonsModified:false,audioGenerated:false,rendered:false,registered:false,
  exports:exports.map(({content,...item})=>item)},null,2)+'\n');
console.log('Prepared '+artifacts.draft.scenes.length+' scenes and '+artifacts.takes.takes.length+' unapproved text takes. No audio or renders.');
