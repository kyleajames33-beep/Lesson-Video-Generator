import assert from 'node:assert/strict';
import {readFile,mkdir,writeFile} from 'node:fs/promises';
import path from 'node:path';
import {spawnSync} from 'node:child_process';
import {reconciledChemistrySources,reconciledChemistryScenes} from './lib/reconciled-chemistry-scenes.mjs';
import {removeMediaAndCues} from './lib/science-corrections.mjs';
import {removeSpeechCues} from './lib/quantitative-lessons.mjs';
import {hash} from './lib/science-audit.mjs';
const directory=path.resolve(process.argv[2]??'out/review/reconciled-chemistry-scenes');
const manifest=JSON.parse(await readFile(path.join(directory,'manifest.json')));
if(manifest.schemaVersion!==1||manifest.exports?.length!==5||['sourceLessonsModified','audioGenerated','rendered','registered','generationAuthorised'].some(k=>manifest[k]!==false))throw new Error('Invalid scene manifest');
const fixtures=[],expectedFiles=[];
await mkdir('out/checks/reconciled-scene-fixtures',{recursive:true});
for(const name of Object.keys(reconciledChemistrySources)){
 const source='src/data/'+name+'.json',bytes=await readFile(source),fixture=removeSpeechCues(removeMediaAndCues(JSON.parse(bytes)));
 delete fixture.introVoiceover;delete fixture.productionRole;
 for(const revision of reconciledChemistryScenes(name,bytes)){
  const file=name+'.'+revision.scene.id+'.scene-proposal.json';expectedFiles.push(file);
  const item=manifest.exports.find(e=>e.file===file);if(!item)throw new Error('Missing scene export');
  const exported=await readFile(path.join(directory,file));
  assert.equal(item.source,source);assert.equal(item.sourceSha256,hash(bytes));assert.equal(item.sha256,hash(exported));
  assert.deepEqual(JSON.parse(exported),{name,source,...revision},'Scene proposal differs from source-reviewed revision');
  fixture.scenes[fixture.scenes.findIndex(s=>s.id===revision.scene.id)]=revision.scene;
 }
 const fixturePath='out/checks/reconciled-scene-fixtures/'+name+'.json';await writeFile(fixturePath,JSON.stringify(fixture,null,2)+'\n');fixtures.push(fixturePath);
}
assert.deepEqual(manifest.exports.map(e=>e.file).sort(),expectedFiles.sort());
const run=spawnSync(process.execPath,['scripts/validate-lesson.mjs',...fixtures],{encoding:'utf8'});if(run.error)throw run.error;
await writeFile('out/checks/reconciled-scene-validation.txt',run.stdout+run.stderr);
console.log(JSON.stringify({sceneProposals:5,fixtures:fixtures.length,status:run.status,inheritedOrProposalWarnings:(run.stdout.match(/warning:/gu)??[]).length,
 limitation:'Source schema only. Complete fixtures contain unreviewed original scenes; do not render or generate from them.'}));
if(run.status!==0){console.error(run.stderr);process.exitCode=1;}
