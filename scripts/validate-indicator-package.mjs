import {readFile} from 'node:fs/promises';
import path from 'node:path';
import {spawnSync} from 'node:child_process';
import {indicatorName,indicatorSourceSha256,validateIndicatorArtifacts} from './lib/indicator-corrections.mjs';
import {hash} from './lib/science-audit.mjs';
const directory=path.resolve(process.argv[2]??'out/review/indicator-corrections');
const manifest=JSON.parse(await readFile(path.join(directory,'manifest.json')));
const roles=['draft','changes','pacing','takes','review'];
if(manifest.schemaVersion!==1||manifest.source!=='src/data/'+indicatorName+'.json'||manifest.sourceSha256!==indicatorSourceSha256||
  manifest.exports?.length!==roles.length||roles.some(role=>manifest.exports.filter(item=>item.role===role).length!==1)||
  ['sourceLessonsModified','audioGenerated','rendered','registered'].some(key=>manifest[key]!==false))throw new Error('Invalid indicator manifest');
const artifacts={};
for(const item of manifest.exports){
  const expected=indicatorName+(item.role==='draft'?'':'.'+item.role)+'.json';
  if(item.file!==expected)throw new Error('Unexpected indicator artifact path');
  const bytes=await readFile(path.join(directory,item.file));if(hash(bytes)!==item.sha256)throw new Error('Indicator export changed');
  artifacts[item.role]=JSON.parse(bytes);
}
const result=validateIndicatorArtifacts(await readFile(manifest.source),artifacts);
const schema=spawnSync(process.execPath,['scripts/validate-lesson.mjs',path.join(directory,indicatorName+'.json')],{encoding:'utf8'});
if(schema.error)throw schema.error;
console.log(schema.stdout);console.error(schema.stderr);if(schema.status!==0)throw new Error('Indicator schema validation failed');
console.log(JSON.stringify({...result,sourceChecksPassed:true,scienceApproval:false,mediaApproval:false}));
