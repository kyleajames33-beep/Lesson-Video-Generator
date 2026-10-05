import {mkdir,readFile,writeFile} from 'node:fs/promises';
import path from 'node:path';
import {foundationsSources,foundationsArtifacts} from './lib/foundations-chemistry-lessons.mjs';
import {hash} from './lib/science-audit.mjs';
const output=path.resolve(process.argv[2]??'out/review/foundations-chemistry-lessons');
await mkdir(output,{recursive:true});const lessons=[];
for(const name of Object.keys(foundationsSources)){
 const source='src/data/'+name+'.json',bytes=await readFile(source),artifacts=foundationsArtifacts(name,bytes),exports=[];
 for(const [role,value] of Object.entries(artifacts)){const content=JSON.stringify(value,null,2)+'\n',file=name+(role==='draft'?'':'.'+role)+'.json';await writeFile(path.join(output,file),content);exports.push({role,file,sha256:hash(content)});}
 lessons.push({name,source,sourceSha256:hash(bytes),exports});
}
await writeFile(path.join(output,'manifest.json'),JSON.stringify({schemaVersion:1,status:'isolated foundations-chemistry proposals; teacher, specialist and visual review pending',sourceLessonsModified:false,audioGenerated:false,rendered:false,registered:false,lessons},null,2)+'\n');
console.log('Prepared four isolated foundations-chemistry lessons with unapproved text takes. No audio or renders.');
