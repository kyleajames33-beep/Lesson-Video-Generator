const fs=require('fs');const path=require('path');const root=__dirname;const dir=path.join(root,'revision-02');fs.mkdirSync(dir,{recursive:true});const lesson=JSON.parse(fs.readFileSync(path.join(root,'lesson.json')));
const prompt=lesson.scenes.find(s=>s.id==='fungi-check');prompt.bullets[2].text='Classify each pathway as sexual or asexual. Give formation evidence.';prompt.bullets.push({text:'Explain why spore alone is insufficient.',at:0});
const definitions={
'fungi-yeast':[
["Baker's yeast",'Baker\'s yeast: a single-celled fungus','Named example: Saccharomyces cerevisiae.'],
['In budding','An outgrowth develops on the parent','Budding: a daughter cell grows from an outgrowth.'],
['The cell copies','The parent copies its DNA','DNA is inherited information.'],
['Its nucleus','The nucleus divides by mitosis','Nucleus: the compartment containing DNA.'],
['One nucleus enters','One nucleus enters the growing bud','Copied information supplies the daughter cell.'],
['The bud can then','The daughter cell can separate','No reproductive cells or nuclei fuse.'],
['Copying supports','Asexual copying supports similar information','Mutations are changes in DNA.']],
'fungi-mould':[
['Now consider','Rhizopus stolonifer: bread mould','This is its asexual pathway.'],
['Its body includes','The fungal body includes hyphae','Hyphae: thin growing threads.'],
['A sporangium','A stalk ends in a sporangium','Sporangium: a spore-containing structure.'],
['In this pathway','Mitosis forms spores without fusion','Formation evidence: an asexual pathway.'],
['Releasing them','Spores disperse from the parent','Dispersal: movement away from the parent.'],
['A spore that','A spore can germinate in suitable conditions','Germination means beginning to grow.'],
['It produces hyphae','Growing hyphae develop a new fungal body','Keep the spore and its new growth distinct.'],
['Dispersal creates','Landing somewhere does not guarantee growth','Suitable moisture, nutrients and conditions are needed.']],
'fungi-sexual':[
['The same yeast','Baker\'s yeast also has a sexual pathway','This is a simplified named model.'],
['In a simplified','Compatible mating-type cells can join','Compatibility matters.'],
['Their nuclei then','The nuclei fuse','Fusion brings chromosome sets together.'],
['A chromosome','Chromosomes contain DNA','Introduce the structure before counting sets.'],
['A haploid cell','Haploid: one set. Diploid: two sets.','The number describes chromosome sets.'],
['Nuclear fusion produces','Nuclear fusion produces a diploid cell','The resulting cell has two chromosome sets.'],
['Compatibility matters','Any two cells do not guarantee fusion','Different fungi have different arrangements.']],
'fungi-meiosis':[
['Under suitable','Diploid yeast under suitable nutrient limitation','This named cell has two chromosome sets.'],
['Meiosis is','Meiosis reduces two chromosome sets to one','Meiosis can reshuffle inherited information.'],
['The resulting','Haploid nuclei are packaged into spores','These nuclei have one chromosome set.'],
['This spore formation','Fusion joined sets; meiosis separates them','The spores belong to this sexual cycle.'],
['It is different','Rhizopus mitotic spores follow another pathway','Do not classify by the word spore alone.'],
['These are selected','Selected examples, with organism limits','Fungi do not all share one life cycle.']]
};
const cuePlan={schemaVersion:1,basis:'Scene-local planning estimates at 140 words/minute. No measured alignment. Match each exact phrase to fresh audio before production.',scenes:[]};
for(const [id,rows]of Object.entries(definitions)){const scene=lesson.scenes.find(s=>s.id===id);scene.estimatedStages=rows.map(([phrase,label,anchor],i)=>{const offset=scene.voiceover.text.indexOf(phrase);if(offset<0)throw Error(phrase);const words=scene.voiceover.text.slice(0,offset).trim().split(/\s+/).filter(Boolean).length;return {at:Math.ceil(words/140*60*30),phrase,label,anchor,status:'estimated-not-measured',stage:i+1};});scene.diagram={type:'flow',delay:60,nodes:[{id:'current',label:scene.estimatedStages[0].label}],edges:[]};scene.bullets=[{text:scene.estimatedStages[0].anchor,at:0}];cuePlan.scenes.push({sceneId:id,stages:scene.estimatedStages});}
fs.writeFileSync(path.join(dir,'lesson.json'),JSON.stringify(lesson,null,2)+'\n');fs.writeFileSync(path.join(dir,'cue-plan.json'),JSON.stringify(cuePlan,null,2)+'\n');fs.copyFileSync(path.join(root,'source-notes.md'),path.join(dir,'source-notes.md'));
for(const file of ['Player.tsx','Native.tsx']){let text=fs.readFileSync(path.join(root,file),'utf8').replaceAll('../../../../src','../../../../../src').replace("import {LessonVideo} from '../../../../../src/LessonVideo';","import {FungiStagedVideo as LessonVideo} from './FungiStagedVideo';");fs.writeFileSync(path.join(dir,file),text);}
let build=fs.readFileSync(path.join(root,'build.mjs'),'utf8').replaceAll('../../../../scripts','../../../../../scripts').replaceAll('../../../../src','../../../../../src').replace("const base='docs/production/overnight-module5-2026-10-10/biology-fungi'","const base='docs/production/overnight-module5-2026-10-10/biology-fungi/revision-02'").replaceAll('out/prototypes/overnight-biology-fungi-2026-10-10','out/prototypes/overnight-biology-fungi-2026-10-10-v2').replace("const page='overnight-biology-fungi-2026-10-10'","const page='overnight-biology-fungi-2026-10-10-v2'");build=build.replace("Generic FlowDiagram is registered and uses its fallback short stagger because docs-owned source is outside catalogue sceneSync. Its process arrows teach logical order, not measured timing. Narration-specific node alignment and actual voiced review remain pending.","Docs-owned FungiStagedVideo supplies one current FlowDiagram node and one necessary anchor, replacing earlier stage content at phrase-based planning estimates. Future stages are absent from rendered props. Existing scene durations and every spoken word remain exact. Measured alignment and exact voiced review remain pending.");build=build.replace("Named pathway with only its current starting condition, mechanism and result. The process model makes causal order visible without pretending to show cellular anatomy.","One current causal stage and its necessary anchor. Future stages and unrelated earlier facts are absent. Existing process primitive is a model, not cellular anatomy.").replace("Existing node entrances and arrows indicate formation order. Fallback cues are visual order estimates, not aligned speech.","Current node enters at its semantic phrase estimate, then holds. Replace the node and anchor at the next cue. Estimates require fresh measured alignment.");fs.writeFileSync(path.join(dir,'build.mjs'),build);
