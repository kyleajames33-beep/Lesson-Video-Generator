// Reproducible silent asset library. No lesson registry, speech or release renderer.
import {bundle} from '@remotion/bundler';
import {getCompositions,openBrowser,renderMedia,renderStill} from '@remotion/renderer';
import {build} from 'esbuild';
import {copyFile,mkdir,readFile,readdir,writeFile} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const dir=path.dirname(fileURLToPath(import.meta.url)),out=path.join(dir,'artifacts'),site=path.join(out,'site'),publicDir=path.join(out,'public');
const only=process.argv.find(a=>a.startsWith('--only='))?.split('=')[1];
const skipVideo=process.argv.includes('--skip-video');
const ids=process.argv.find(a=>a.startsWith('--ids='))?.slice(6).split(',');
const sampleName=process.argv.find(a=>a.startsWith('--sample='))?.slice(9);
for(const p of [path.join(publicDir,'fonts'),path.join(site,'fonts'),path.join(site,'stills'),path.join(site,'previews'),path.join(site,'checks')])await mkdir(p,{recursive:true});
for(const dest of [publicDir,site])await copyFile(path.resolve('public/fonts/inter-tight-latin-wght-normal.woff2'),path.join(dest,'fonts/inter-tight-latin-wght-normal.woff2'));
const {outputFiles}=await build({entryPoints:[path.join(dir,'catalog.ts')],bundle:true,write:false,platform:'node',format:'esm',define:{'process.env.NODE_ENV':'"production"'}});
const {modules,extraSamples,frameAtProgress}=await import(`data:text/javascript;base64,${Buffer.from(outputFiles[0].text).toString('base64')}`);
const sourceRoot='C:/Users/kygs/hscscience/subjects/physics/year12';
const lessonMap=[];
for(const m of modules){
  const folder=path.join(sourceRoot,`module${m.number}`),files=(await readdir(folder)).filter(x=>/^lesson\d+\.sa\.html$/.test(x)).sort();
  for(const name of files){
    const number=Number(name.match(/\d+/)[0]),source=await readFile(path.join(folder,name),'utf8'),title=source.match(/<title>(.*?)<\/title>/s)?.[1].split('|')[0].replace(/\u2014/g,':').replace(/\s*[:\uFFFD,]?\s*HSC Physics.*$/,'').trim();
    const supports=m.visuals.filter(v=>v.siteLessons.includes(number));
    lessonMap.push({module:m.number,lesson:number,title,siteSource:`${sourceRoot}/module${m.number}/${name}`,visuals:supports.map(v=>v.id),status:supports.length?'visual-support-present-teaching-coverage-not-approved':'visual-gap',limits:supports.flatMap(v=>v.limits)});
  }
}
const catalog=modules.map(m=>({number:m.number,title:m.title,visuals:m.visuals.map(({component,...rest})=>({...rest,stillFrame:frameAtProgress(rest.seconds??12,.625)}))}));
await writeFile(path.join(site,'course-map.json'),JSON.stringify({scope:'Year 12 2017 course Modules 5 to 8; visual support does not establish syllabus or teaching coverage',modules:catalog,lessons:lessonMap,samples:extraSamples},null,2));
await build({entryPoints:[path.join(dir,'gallery.tsx')],bundle:true,outfile:path.join(site,'gallery.js'),platform:'browser',format:'iife',define:{'process.env.NODE_ENV':'"production"'},minify:true});
await writeFile(path.join(site,'index.html'),`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>HSC Physics visual library</title><style>@font-face{font-family:'Inter Tight';src:url('fonts/inter-tight-latin-wght-normal.woff2');font-weight:100 900}body{margin:0;background:#f7f7f5;color:#252a2d;font:17px 'Inter Tight',system-ui,sans-serif}main{max-width:1320px;margin:auto;padding:24px}h1{font-size:32px}select{max-width:95%;font:inherit;padding:10px}a{color:#c2410c}.toggle{display:inline-block;margin:12px}.player{margin:18px 0;max-width:1280px;background:white}.player.phone{width:390px;max-width:100%}.modules{display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:24px}video{width:100%}li{margin:8px 0}</style></head><body><div id="root"></div><script src="gallery.js"></script></body></html>`);
console.log(`Catalog: ${lessonMap.length} site lessons, ${modules.reduce((n,m)=>n+m.visuals.length,0)} visual families.`);
if(process.argv.includes('--gallery-only'))process.exit(0);
const serveUrl=await bundle({entryPoint:path.join(dir,'course-entry.tsx'),publicDir,outDir:path.join(out,'bundle')});
const browser=await openBrowser('chrome');
const audit=[];
try{
  const compositions=await getCompositions(serveUrl,{puppeteerInstance:browser,timeoutInMilliseconds:120000});
  const selected=modules.filter(m=>!only||`m${m.number}`===only);
  for(const m of selected){
    for(const v of m.visuals.filter(v=>!ids||ids.includes(v.id))){
      for(const phone of [false,true]){
        const comp=compositions.find(c=>c.id===`${v.id}${phone?'-phone':''}`),frame=frameAtProgress(v.seconds??12,.625);
        await renderStill({serveUrl,puppeteerInstance:browser,composition:{...comp,props:{...comp.props,visualId:v.id,phone,qa:true}},frame,inputProps:{visualId:v.id,phone,qa:true},output:path.join(site,'stills',`${v.id}-${phone?'phone':'desktop'}.png`),scale:phone?390/1080:1,timeoutInMilliseconds:120000,logLevel:'error',onBrowserLog:log=>{
          const marker='PHYSICS_LABEL_AUDIT ',text=log.text??'';
          if(text.includes(marker)){try{audit.push({...JSON.parse(text.slice(text.indexOf(marker)+marker.length)),phone,frame});}catch{}}
        }});
      }
      console.log('Stills:',v.id);
    }
    if(!skipVideo&&!sampleName){
      console.log('Rendering silent module sample:',m.number);
      await renderMedia({serveUrl,puppeteerInstance:browser,composition:compositions.find(c=>c.id===`PhysicsModule${m.number}Silent`),codec:'h264',muted:true,scale:2/3,concurrency:1,timeoutInMilliseconds:120000,outputLocation:path.join(site,'previews',`module${m.number}-silent.mp4`)});
    }
  }
  if(!skipVideo&&sampleName){
    const sample=extraSamples.find(s=>s.id===sampleName);
    if(!sample)throw new Error('Unknown sample '+sampleName);
    console.log('Rendering detail sample:',sample.id);
    await renderMedia({serveUrl,puppeteerInstance:browser,composition:compositions.find(c=>c.id===sample.compositionId),codec:'h264',muted:true,scale:2/3,concurrency:1,timeoutInMilliseconds:120000,outputLocation:path.join(site,'previews',`${sample.id}-silent.mp4`)});
  }
  if(process.argv.includes('--boundary-checks')){
    const cases=[['m5-elevated-launch',0],['m5-elevated-launch',330],['m5-banked-track',330],['m5-kepler',330],['m5-vertical-loop',0],['m5-vertical-loop',180],['m6-coil-torque',0],['m6-coil-torque',330],['m6-eddy-brake',84],['m6-eddy-brake',330],['m6-generator-flux',0],['m6-generator-flux',330],['m7-photoelectric',0],['m7-photoelectric',330],['m7-double-slit',330],['m8-expansion',330],['m8-rutherford',330],['m8-particles',156],['m8-particles',200],['m8-particles',330],['m8-hr-diagram',330]];
    const detailCases=modules.flatMap(m=>m.visuals).filter(v=>v.seconds).flatMap(v=>[0,.23,.4,.65,.9,1,...(v.id==='m5-conical-pendulum'?[.125,.375,.875]:[])].map(p=>[v.id,frameAtProgress(v.seconds,p)]));
    for(const [id,frame] of [...cases,...detailCases].filter(([id])=>(!only||id.startsWith(only+'-'))&&(!ids||ids.includes(id)))){
      const comp=compositions.find(c=>c.id===id);
      await renderStill({serveUrl,puppeteerInstance:browser,composition:{...comp,props:{...comp.props,qa:true}},frame,output:path.join(site,'checks',`${id}-f${frame}.png`),timeoutInMilliseconds:120000,logLevel:'error',onBrowserLog:log=>{const marker='PHYSICS_LABEL_AUDIT ',text=log.text??'';if(text.includes(marker))audit.push({...JSON.parse(text.slice(text.indexOf(marker)+marker.length)),phone:false,frame});}});
    }
    console.log('Boundary frames checked.');
  }
}finally{await browser.close({silent:true});}
await writeFile(path.join(out,`label-audit${only?'-'+only:ids?'-selected':''}.json`),JSON.stringify(audit,null,2));
if(only||ids){
  let previous=[];try{previous=JSON.parse(await readFile(path.join(out,'label-audit.json'),'utf8'));}catch{}
  const key=x=>`${x.id}:${x.phone}:${x.frame}`;
  const merged=new Map(previous.map(x=>[key(x),x]));
  for(const row of audit)merged.set(key(row),row);
  await writeFile(path.join(out,'label-audit.json'),JSON.stringify([...merged.values()],null,2));
}
console.log('Gallery ready:',path.join(site,'index.html'));
