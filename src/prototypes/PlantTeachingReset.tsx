import React from 'react';
import {AbsoluteFill,Img,interpolate,staticFile,useCurrentFrame} from 'remotion';
import type {LessonData,SceneData} from '../lesson/types';
import {FONT_DISPLAY,FONT_MONO,TOK} from '../styles/tokens';
const GREEN='#386348',AMBER='#b86e0a',PINK='#dab1b7';
const ART='assets/biology/strawberry-runner-botanical-v1.png';
type Beat={at:number;spokenCue:string;line:string;view:string};
type Selected=SceneData&{heading:string;teachingReset:{previewBeats:Beat[]}};
const clamp={extrapolateLeft:'clamp' as const,extrapolateRight:'clamp' as const};
const Text=({x=95,y=285,w=625,size=49,color=TOK.ink,children}:{x?:number;y?:number;w?:number;size?:number;color?:string;children:React.ReactNode})=><div style={{position:'absolute',left:x,top:y,width:w,fontSize:size,fontWeight:550,lineHeight:1.22,color}}>{children}</div>;
/** Generic flower cutaway, with one selected ovule, not strawberry anatomy. */
const Flower=({view,age}:{view:string;age:number})=>{
 const tube=['tube','deliver','delivered','join','embryo'].includes(view),stopped=view==='stopped',pollen=view!=='egg'&&view!=='pollen-source';
 const egg=view!=='whole',joining=view==='join',embryo=view==='embryo';
 const length=interpolate(age,[0,100],[0,1],clamp);
 return <svg viewBox="0 0 940 650" style={{position:'absolute',left:785,top:260,width:1040,height:650}} role="img" aria-label={stopped?'Pollen at stigma with a tube stopped above the ovule and an egg still inside':'Generic flower cutaway locating stigma, ovary and an egg inside one ovule'}>
  <defs><linearGradient id="plantPetal" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#fff8f5"/><stop offset="0.62" stopColor="#ead0cf"/><stop offset="1" stopColor="#c08e9b"/></linearGradient><radialGradient id="plantOvary"><stop stopColor="#f4f5dc"/><stop offset="0.72" stopColor="#dde7bc"/><stop offset="1" stopColor="#9cb777"/></radialGradient><linearGradient id="plantAnther"><stop stopColor="#f7d987"/><stop offset="0.55" stopColor="#d5a53d"/><stop offset="1" stopColor="#b58728"/></linearGradient></defs>
  <g stroke={GREEN} strokeWidth={3}>
   <path d="M360 550V625" fill="none" strokeWidth={13}/><path d="M350 594C210 505 220 600 350 610 M370 594C500 520 495 610 370 610" fill="#acc9a0"/>
   <path d="M330 383C265 371 166 343 127 281C80 211 130 153 194 179C261 192 297 294 330 383Z" fill="url(#plantPetal)" stroke="#ae8790"/><path d="M333 375C259 321 202 259 179 200 M310 347C245 302 207 252 201 218 M275 335C194 289 155 248 146 210" stroke="#c59ca5" strokeWidth={1.4} fill="none"/>
   <path d="M390 383C455 371 554 343 593 281C640 211 590 153 526 179C459 192 423 294 390 383Z" fill="url(#plantPetal)" stroke="#ae8790"/><path d="M387 375C461 321 518 259 541 200 M410 347C475 302 513 252 519 218 M445 335C526 289 565 248 574 210" stroke="#c59ca5" strokeWidth={1.4} fill="none"/>
   <path d="M315 350C255 240 250 140 210 135 M405 350C465 240 470 140 510 135" fill="none"/>
   <ellipse cx={207} cy={130} rx={18} ry={39} fill="url(#plantAnther)" stroke="#b48e29"/><ellipse cx={513} cy={130} rx={18} ry={39} fill="url(#plantAnther)" stroke="#b48e29"/>
   <path d="M332 373V124Q360 143 388 124V373" fill="#d9e3ba"/><path d="M340 138V374 M381 138V374" stroke="#afc58a" strokeWidth={2}/><path d="M205 100V156 M511 100V156" stroke="#a0782a" strokeWidth={2.5}/><path d="M192 108L201 119 M215 143L209 152 M500 112L505 126 M521 135L515 148" stroke="#f5dca0" strokeWidth={2}/><ellipse cx={360} cy={115} rx={63} ry={25} fill="#b1cb93"/>
   <ellipse cx={360} cy={446} rx={121} ry={104} fill="url(#plantOvary)"/><ellipse cx={360} cy={446} rx={109} ry={93} fill="none" stroke="#b3c791" strokeWidth={2}/>
  </g>
  {egg?<><path d="M319 392C351 369 410 392 423 435C438 483 395 523 356 517C310 512 292 454 311 417Z" fill="#fff8e7" stroke="#9a8244" strokeWidth={3}/><path d="M328 401C358 387 400 409 410 440C421 478 391 506 357 505" fill="none" stroke="#d4c9a0" strokeWidth={2}/><path d="M316 488L277 498" stroke="#9a8244" strokeWidth={4}/><circle cx={365} cy={430} r={19} fill={embryo?'#86a06c':joining?'#e5bd63':'#d8c490'} stroke="#806b34" strokeWidth={2}/>{embryo?<path d="M357 410C322 422 340 466 370 472 M365 442C397 423 397 463 370 472" fill="none" stroke={GREEN} strokeWidth={9}/>:null}</>:null}
  {pollen?<><circle cx={352} cy={80} r={15} fill="#e4b85a" stroke={AMBER} strokeWidth={3}/><path d="M350 104V115" stroke={AMBER} strokeWidth={3}/></>:null}
  {tube||stopped?<path d={stopped?'M351 92C333 183 383 204 354 286':'M351 92C333 183 383 233 356 336C327 379 306 398 324 415L347 430'} fill="none" stroke={AMBER} strokeWidth={10} pathLength={1} strokeDasharray={1} strokeDashoffset={stopped||view!=='tube'?0:1-length}/>:null}
  {view==='deliver'||view==='delivered'?<circle cx={view==='delivered'?345:interpolate(age,[0,75,100,110],[350,356,324,345],clamp)} cy={view==='delivered'?425:interpolate(age,[0,75,100,110],[150,336,412,425],clamp)} r={8} fill={GREEN}/>:null}
  {joining?<circle cx={interpolate(age,[0,55],[338,365],clamp)} cy={430} r={8} fill={GREEN} opacity={interpolate(age,[45,60],[1,0],clamp)}/>:null}
  {pollen&&view!=='whole'?<><text x={560} y={87} fontSize={31} fill={AMBER}>Pollen</text><path d="M550 78H381" fill="none" stroke={AMBER} strokeWidth={2}/><text x={560} y={150} fontSize={31} fill={GREEN}>Stigma</text><path d="M550 142L423 117" stroke={GREEN} strokeWidth={2}/></>:null}
  {view==='pollen-source'?<><circle cx={245} cy={120} r={12} fill="#e4b85a" stroke={AMBER} strokeWidth={3}/><text x={50} y={85} fontSize={31} fill={AMBER}>Anther</text><path d="M160 92L190 120" stroke={AMBER} strokeWidth={2}/></>:null}
  {tube||stopped?<><text x={560} y={260} fontSize={31} fill={AMBER}>Pollen tube</text><path d="M550 252L365 265" stroke={AMBER} strokeWidth={2}/></>:null}
  {egg?<><text x={560} y={435} fontSize={31} fill={GREEN}>{embryo?'Embryo':joining?'Fertilised egg':'Egg inside ovule'}</text><path d="M550 428H397" stroke={GREEN} strokeWidth={2}/><text x={560} y={517} fontSize={31} fill={GREEN}>Ovary</text><path d="M550 510L475 483" stroke={GREEN} strokeWidth={2}/></>:null}
  <text x={120} y={646} fontSize={25} fill="#616a60">Simplified flowering-plant cutaway, not to scale</text>
 </svg>;
};
const Seed=()=> <svg viewBox="0 0 900 650" style={{position:'absolute',left:790,top:270,width:1020,height:650}} role="img" aria-label="Magnified seed with its young plant embryo inside the protective covering">
 <defs><linearGradient id="seedCoat"><stop stopColor="#d2b28b"/><stop offset="0.55" stopColor="#ae8057"/><stop offset="1" stopColor="#d4b48d"/></linearGradient><linearGradient id="seedEmbryo"><stop stopColor="#cad6a9"/><stop offset="1" stopColor="#8ba474"/></linearGradient></defs>
 <path d="M340 65C150 75 120 460 325 560C500 640 620 430 580 235C550 95 460 38 340 65Z" fill="url(#seedCoat)" stroke="#8b6747" strokeWidth={4}/>
 <path d="M340 95C180 115 170 445 335 530C483 591 587 405 550 247C520 125 455 75 340 95Z" fill="#f4dfb8"/>
 <ellipse cx={334} cy={296} rx={47} ry={88} transform="rotate(-18 334 296)" fill="url(#seedEmbryo)" stroke={GREEN} strokeWidth={3}/><ellipse cx={432} cy={296} rx={47} ry={88} transform="rotate(18 432 296)" fill="url(#seedEmbryo)" stroke={GREEN} strokeWidth={3}/>
 <path d="M377 323C386 365 396 398 385 456L374 477L365 455C369 402 362 366 365 329Z" fill="#aac18c" stroke={GREEN} strokeWidth={3}/><path d="M325 253C334 293 347 335 365 354 M440 254C432 294 419 335 397 354" stroke="#7d9865" strokeWidth={1.5} fill="none"/>
 <text x={620} y={250} fontSize={32} fill={GREEN}>Embryo:</text><text x={620} y={294} fontSize={32} fill={GREEN}>young plant</text><path d="M610 283L458 299" stroke={GREEN} strokeWidth={3}/>
 <text x={620} y={451} fontSize={32} fill="#8b6747">Seed covering</text><path d="M610 442L560 420" stroke="#8b6747" strokeWidth={3}/>
 <text x={235} y={625} fontSize={27} fill="#616a60">Magnified seed model, not to scale</text>
 </svg>;
const Runner=({view,age}:{view:string;age:number})=><>
 <Img alt="Completed illustration of a parent strawberry connected by a runner to an established rooted daughter plant" src={staticFile(ART)} style={{position:'absolute',left:80,top:335,width:1660,height:570,objectFit:'contain',mixBlendMode:'multiply'}}/>
 <svg width={1920} height={960} style={{position:'absolute',inset:0}} aria-hidden>
  {view==='runner'?<path d="M636 691C815 659 1018 710 1228 705" fill="none" stroke={AMBER} strokeWidth={5} pathLength={1} strokeDasharray={1} strokeDashoffset={1-interpolate(age,[0,55],[0,1],clamp)}/>:null}
  {view==='node'||view==='parts'?<circle cx={1228} cy={711} r={30} fill="none" stroke={AMBER} strokeWidth={4}/>:null}
  {view==='roots'?<><path d="M1210 859L1228 801 l-17 13 M1228 801l7 20" fill="none" stroke="#3981a5" strokeWidth={5}/></>:null}
  {view==='leaves'?<><path d="M1330 500L1270 575 l4 -23 M1270 575l25 -5" fill="none" stroke={AMBER} strokeWidth={5}/><text x={1370} y={495} fontSize={36} fill={AMBER}>Light</text></>:null}
  {view==='cut'?<><rect x={991} y={677} width={38} height={23} fill="#fafaf8"/><path d="M988 675L1036 720 M1036 675L988 720" stroke={AMBER} strokeWidth={4}/></>:null}
 </svg>
 {view==='roots'?<Text x={1460} y={805} w={350} size={34} color="#1d648d">Water uptake</Text>:null}
 {view==='cut'?<Text x={1460} y={730} w={350} size={34} color={AMBER}>Connection cut after establishment</Text>:null}
 <Text x={130} y={887} w={600} size={34} color={GREEN}>Parent plant</Text><Text x={1250} y={887} w={490} size={34} color={GREEN}>Established new plant</Text>
 </>;
const Bud=()=> <svg viewBox="0 0 950 610" style={{position:'absolute',left:800,top:300,width:1000,height:610}} role="img" aria-label="Early stage model: small leaves at a runner node above soil, attached to the parent, with no roots">
 <path d="M70 320C260 312 450 330 600 319" fill="none" stroke={GREEN} strokeWidth={12}/><path d="M600 320V240" stroke={GREEN} strokeWidth={9}/>
 <path d="M600 270C484 236 505 168 597 242 M607 245C666 145 736 201 607 266" fill="#a6bf8a" stroke={GREEN} strokeWidth={4}/>
 <path d="M40 375H900" stroke="#8c7054" strokeWidth={6}/><path d="M40 378H900V545H40Z" fill="#c8ad89" opacity={0.5}/>
 <circle cx={600} cy={321} r={22} fill="none" stroke={AMBER} strokeWidth={4}/>
 <text x={70} y={250} fontSize={32} fill={GREEN}>Attached to parent</text><text x={650} y={326} fontSize={32} fill={GREEN}>Bud at node</text>
 <text x={80} y={433} fontSize={32} fill="#695443">Soil</text><text x={470} y={515} fontSize={32} fill="#695443">No roots yet</text>
 <text x={200} y={595} fontSize={27} fill="#616a60">Early runner stage: simplified model</text>
 </svg>;
export const PlantTeachingScene=({lesson,scene}:{lesson:LessonData;scene:SceneData})=>{
 const f=useCurrentFrame(),s=scene as Selected,beats=s.teachingReset?.previewBeats;if(!beats?.length)throw Error(`Plant scene ${scene.id} has no selected cues.`);
 const beat=beats.reduce((current,b)=>f>=b.at?b:current,beats[0]);const age=f-beat.at;
 const flower=lesson.teachingRenderer==='plantSeed',notes=scene.id==='key-notes',attempt=scene.responseRole==='attempt',feedback=scene.responseRole==='feedback';
 return <AbsoluteFill style={{background:'#fafaf8',color:TOK.ink,fontFamily:FONT_DISPLAY}}>
  <Text y={48} w={1700} size={25} color={GREEN}><span style={{fontFamily:FONT_MONO,letterSpacing:'.07em'}}>BIOLOGY · {flower?'FLOWER TO SEED':'STRAWBERRY RUNNER'}</span></Text>
  <Text y={125} w={1720} size={64}>{s.heading}</Text>
  {notes?<><div style={{position:'absolute',left:110,top:325,width:1640,display:'grid',gap:48,fontSize:49,lineHeight:1.25}}>{lesson.teachingNotes?.map(line=><div key={line}>{line}</div>)}</div><Text y={880} w={1700} size={35} color={TOK.inkDim}>Pause if you would like more time to write.</Text></>:<>
   <Text y={flower||attempt||feedback?285:245} w={flower||attempt||feedback?640:1720} size={flower||attempt||feedback?49:46}>{beat.line}</Text>
   {flower?<>{beat.view==='seed'?<Seed/>:<Flower view={beat.view} age={age}/>} {attempt||feedback?<Text y={710} w={655} size={36}>Compatible pollen. Tube stops before the only ovule. No other tube reaches it.</Text>:null}</>:attempt||feedback?<><Bud/><Text y={705} w={650} size={36}>Leaves have begun growing. No roots yet. Still attached to the parent.</Text></>:<Runner view={beat.view} age={age}/>}
  </>}
 </AbsoluteFill>;
};
export const PlantSeedTeachingScene=PlantTeachingScene;
export const PlantRunnerTeachingScene=PlantTeachingScene;
