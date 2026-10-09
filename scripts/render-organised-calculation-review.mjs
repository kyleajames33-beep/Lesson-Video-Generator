import fs from 'node:fs';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {bundle} from '@remotion/bundler';
import {openBrowser,selectComposition,renderStill} from '@remotion/renderer';
const dir='out/prototypes/calculation-layout-review-2026-10-09';
fs.mkdirSync(dir,{recursive:true});
const hash=file=>createHash('sha256').update(fs.readFileSync(file)).digest('hex');
const cases=[['limiting','out/prototypes/limiting-clear-working-2026-10-09'],['empirical','out/prototypes/empirical-formulas-organised-2026-10-09']];
const serveUrl=await bundle({entryPoint:path.resolve('src/dev/release-entry.tsx'),outDir:path.resolve(`${dir}/bundle`)});
const browser=await openBrowser('chrome',{logLevel:'error'});
const frames=[];
try{
 for(const [key,folder]of cases){
  const lessonPath=`${folder}/lesson.json`,lesson=JSON.parse(fs.readFileSync(lessonPath)),revision=JSON.parse(fs.readFileSync(`${folder}/revision.json`));
  const inputProps={lesson};const composition=await selectComposition({serveUrl,id:'Lesson-release',inputProps,puppeteerInstance:browser});
  for(const [label,frame]of Object.entries(revision.reviewFrames)){
   const output=`${dir}/${key}-${label}.png`;
   await renderStill({serveUrl,composition,inputProps,frame,output,path:output,imageFormat:'png',scale:1,puppeteerInstance:browser,logLevel:'error'});
   frames.push({label:`${key}: ${label}`,frame,path:output,sha256:hash(output),lessonPath,lessonSha256:hash(lessonPath)});
   console.log('Reviewed frame: '+key+' '+label);
  }
 }
}finally{await browser.close({silent:true});}
fs.writeFileSync(`${dir}/frames.json`,JSON.stringify({checkedAt:new Date().toISOString(),scope:'Actual Remotion stills with current selected props; not motion or listening approval',sourceFiles:['src/slides/shared/OrganisedCalculation.tsx','src/slides/WorkedExampleSlide.tsx','src/slides/QuickCheckSlide.tsx','src/lesson/types.ts'].map(file=>({path:file,sha256:hash(file)})),frames},null,2)+'\n');
fs.writeFileSync(`${dir}/index.html`,`<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Organised calculation review</title><style>body{font:18px/1.5 system-ui;background:#f7f7f5;max-width:1200px;margin:30px auto;padding:20px}img{width:100%;display:block;border:1px solid #ddd;margin-bottom:30px}a{color:#0d6b52}h1,h2{line-height:1.2}</style><h1>Clearer calculations</h1><p>A short task, grouped givens and one current stage. Previous results remain available. These are actual Remotion frames; the empirical lesson is still unrecorded.</p><p><a href="http://localhost:8783/Lesson-release">Open the voiced limiting revision in Remotion</a> · <a href="http://localhost:8784/Lesson-release">Open the next empirical-formula draft</a></p>${frames.map(f=>`<h2>${f.label}</h2><img src="${path.basename(f.path)}" alt="${f.label}">`).join('')}`);
console.log('Actual Remotion frames and contact sheet prepared.');
