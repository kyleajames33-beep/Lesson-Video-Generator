import {mkdir,readFile,writeFile} from 'node:fs/promises';
import path from 'node:path';
import {analyticalSources,analyticalArtifacts} from './lib/analytical-inference-lessons.mjs';
import {hash} from './lib/science-audit.mjs';
const output=path.resolve(process.argv[2]??'out/review/analytical-inference-lessons');
await mkdir(output,{recursive:true});const lessons=[];
for(const name of Object.keys(analyticalSources)){
 const source='src/data/'+name+'.json',bytes=await readFile(source),artifacts=analyticalArtifacts(name,bytes),exports=[];
 for(const [role,value] of Object.entries(artifacts)){const content=JSON.stringify(value,null,2)+'\n',file=name+(role==='draft'?'':'.'+role)+'.json';await writeFile(path.join(output,file),content);exports.push({role,file,sha256:hash(content)});}
 lessons.push({name,source,sourceSha256:hash(bytes),exports});
}
await writeFile(path.join(output,'manifest.json'),JSON.stringify({schemaVersion:1,status:'isolated analytical-inference proposals; teacher, specialist and visual review pending',sourceLessonsModified:false,audioGenerated:false,rendered:false,registered:false,lessons},null,2)+'\n');
console.log('Prepared five isolated analytical-inference lessons with unapproved text takes. No audio or renders.');
