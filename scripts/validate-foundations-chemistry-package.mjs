import {readFile} from 'node:fs/promises';
import path from 'node:path';
import {spawnSync} from 'node:child_process';
import {foundationsSources,validateFoundationsArtifacts} from './lib/foundations-chemistry-lessons.mjs';
import {hash} from './lib/science-audit.mjs';
const directory=path.resolve(process.argv[2]??'out/review/foundations-chemistry-lessons');
const manifest=JSON.parse(await readFile(path.join(directory,'manifest.json'))),names=Object.keys(foundationsSources),roles=['draft','changes','pacing','takes','review'];
if(manifest.schemaVersion!==1||manifest.lessons?.length!==names.length||names.some(name=>manifest.lessons.filter(l=>l.name===name).length!==1)||['sourceLessonsModified','audioGenerated','rendered','registered'].some(k=>manifest[k]!==false))throw new Error('Invalid foundations-chemistry manifest');
for(const entry of manifest.lessons){
 if(entry.source!=='src/data/'+entry.name+'.json'||entry.sourceSha256!==foundationsSources[entry.name]||entry.exports?.length!==roles.length||roles.some(role=>entry.exports.filter(e=>e.role===role).length!==1))throw new Error('Invalid foundations-chemistry lesson manifest');
 const artifacts={};
 for(const item of entry.exports){if(item.file!==entry.name+(item.role==='draft'?'':'.'+item.role)+'.json')throw new Error('Unexpected foundations-chemistry artifact path');const bytes=await readFile(path.join(directory,item.file));if(hash(bytes)!==item.sha256)throw new Error('Foundations-chemistry export changed');artifacts[item.role]=JSON.parse(bytes);}
 const result=validateFoundationsArtifacts(entry.name,await readFile(entry.source),artifacts);
 const schema=spawnSync(process.execPath,['scripts/validate-lesson.mjs',path.join(directory,entry.name+'.json')],{encoding:'utf8'});if(schema.error)throw schema.error;console.log(schema.stdout);console.error(schema.stderr);if(schema.status!==0)throw new Error('Foundations-chemistry schema validation failed');
 console.log(JSON.stringify({name:entry.name,...result,sourceChecksPassed:true,scienceApproval:false,visualApproval:false,mediaApproval:false}));
}
