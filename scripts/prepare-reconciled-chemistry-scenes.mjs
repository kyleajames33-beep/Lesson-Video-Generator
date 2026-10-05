import {mkdir,readFile,writeFile} from 'node:fs/promises';
import path from 'node:path';
import {reconciledChemistrySources,reconciledChemistryScenes} from './lib/reconciled-chemistry-scenes.mjs';
import {hash} from './lib/science-audit.mjs';
const output=path.resolve(process.argv[2]??'out/review/reconciled-chemistry-scenes'),items=[];
for(const name of Object.keys(reconciledChemistrySources)){
 const source='src/data/'+name+'.json',bytes=await readFile(source);
 for(const item of reconciledChemistryScenes(name,bytes))items.push({name,source,...item});
}
await mkdir(output,{recursive:true});const exports=[];
for(const item of items){
 const file=item.name+'.'+item.scene.id+'.scene-proposal.json',bytes=JSON.stringify(item,null,2).replaceAll('\u2014','\\u2014')+'\n';
 await writeFile(path.join(output,file),bytes);exports.push({file,source:item.source,sourceSha256:item.sourceSha256,scene:item.scene.id,finding:item.finding,sha256:hash(bytes)});
}
await writeFile(path.join(output,'manifest.json'),JSON.stringify({schemaVersion:1,scope:'Five isolated source-checked scene proposals across four lessons, not complete replacement lessons.',
 sourceLessonsModified:false,audioGenerated:false,rendered:false,registered:false,generationAuthorised:false,
 limitations:['Whole-lesson consistency and component labels still require integration review.','Explicit question precision and data-sufficiency requirements are revisions; old recordings cannot be reused.','All inherited media and speech cues removed. Duration and response holds are estimates only.'],exports},null,2)+'\n');
console.log('Prepared '+items.length+' isolated scene proposals. Catalogue and recorded media unchanged.');
