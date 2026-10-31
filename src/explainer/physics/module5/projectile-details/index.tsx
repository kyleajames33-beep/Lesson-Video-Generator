import React from 'react';
import {Arrow,C,Dot,Label,Panel,type PhysicsVisual,type VisualProps} from '../../course-kit';
import {beat,clamp,resolution as v,rangeCase as r,obstacle as o,obstacleFlight as f,wallTime,wallHeight,target,targetAngle,targetFlights,pathAt} from './model';

const Ground:React.FC<{y?:number}>=({y=405})=><path d={`M60 ${y}H1030`} stroke={C.ink} strokeWidth={3}/>;
const Note:React.FC<{children:React.ReactNode}>=({children})=><Label x={60} y={606} size={32} color={C.muted}>{children}</Label>;
const Work:React.FC<{heading:string;lines:string[];color?:string}>=({heading,lines,color=C.orange})=><Panel x={45} y={450} w={1010} h={125}><Label x={65} y={488} size={32} color={color} weight={750}>{heading}</Label>{lines.map((line,i)=><Label key={line} x={65} y={527+i*38} size={34}>{line}</Label>)}</Panel>;

export const VectorResolution:React.FC<VisualProps>=({progress})=>{
 const p=clamp(progress),stage=p<.32?0:p<.64?1:2,x=130,y=355,s=21,ex=x+v.vx*s,ey=y-v.vy*s;
 const horizontal=beat(p,.08,.22),vertical=beat(p,.38,.52);
 return <g><Label x={60} y={48} size={40} weight={750}>Resolve one launch velocity</Label><Label x={60} y={96}>u = 20 m/s; θ = 30° above horizontal</Label>
  <path d={`M${x} ${y}H${ex+65}`} stroke={C.rule} strokeWidth={2}/><Arrow x1={x} y1={y} x2={ex} y2={ey}/>
  <Label x={210} y={155} color={C.orange}>u: hypotenuse</Label><path d={`M${x+80} ${y}A80 80 0 0 0 ${x+80*Math.cos(Math.PI/6)} ${y-40}`} fill="none" stroke={C.ink} strokeWidth={3}/><Label x={227} y={338}>θ</Label>
  <Arrow x1={x} y1={y} x2={x+v.vx*s*horizontal} y2={y} color={C.blue}/>
  {p>=.32&&<Arrow x1={ex} y1={y} x2={ex} y2={y-v.vy*s*vertical} color={C.rose}/>}
  <path d={`M${ex-18} ${y}v-18h18`} stroke={C.rule} strokeWidth={3} fill="none"/>
  <Label x={x+v.vx*s/2} y={404} anchor="middle" color={C.blue}>adjacent: uₓ</Label>
  {p>=.32&&<Label x={ex+35} y={254} color={C.rose}>opposite: uᵧ</Label>}
  <Label x={710} y={345} size={32} color={C.muted}>One scale: 21 px per m/s</Label>
  <Work heading={['Horizontal: adjacent ÷ hypotenuse','Vertical: opposite ÷ hypotenuse','These perpendicular arrows add to u.'][stage]} lines={stage===0?['cos θ = uₓ/u     →     uₓ = u cos θ = 17.3 m/s']:stage===1?['sin θ = uᵧ/u     →     uᵧ = u sin θ = 10.0 m/s']:['uₓ = 17.3 m/s right; uᵧ = 10.0 m/s up']}/>
  <Note>θ is measured from horizontal. The components describe one velocity.</Note></g>;
};

export const RangeDerivation:React.FC<VisualProps>=({progress})=>{
 const p=clamp(progress),stage=Math.min(3,Math.floor(p*4)),q=beat(p,.04,.18),b=r.at(r.duration*q),s=20;
 const headings=['Return to the launch height: y = 0','Choose the later root, after launch','Horizontal speed × the same flight time','Use 2 sin θ cos θ = sin(2θ)'];
 const lines=[['0 = (u sin θ)T − ½gT²','0 = T(u sin θ − ½gT)'],['T = 0 is launch. The later root gives:','T = 2u sin θ / g'],['R = (u cos θ)T','R = (u cos θ)(2u sin θ / g)'],['R = u² sin(2θ) / g','For this launch: R = '+r.range.toFixed(1)+' m']];
 return <g><Label x={60} y={48} size={40} weight={750}>Why does the level-ground range formula work?</Label><Label x={60} y={95}>u = 20 m/s; θ = 35°; g = 9.8 m/s²</Label><Ground/>
 <path d={pathAt(r,r.duration*q,90,405,s)} fill="none" stroke={C.orange} strokeWidth={5}/><Dot x={90+b.x*s} y={405-b.y*s}/>
 <path d={`M90 405V${405-b.y*s}H${90+b.x*s}`} stroke={stage<2?C.rose:C.blue} strokeWidth={3} strokeDasharray="8 7" fill="none"/>
 <Label x={70} y={153} color={C.rose}>{stage<2?'Vertical motion fixes T.':'Horizontal motion gives R.'}</Label>
 <Label x={720} y={196} color={C.blue}>uₓ = u cos θ</Label><Label x={720} y={245} color={C.rose}>uᵧ = u sin θ</Label>
 <Label x={90+r.range*s} y={439} size={32} anchor="end">landing: y = 0</Label><Work heading={headings[stage]} lines={lines[stage]}/><Note>Equal start/end heights; no drag; uniform g. Up is positive.</Note></g>;
};

export const ObstacleClearance:React.FC<VisualProps>=({progress})=>{
 const p=clamp(progress),stage=p<.34?0:p<.67?1:2,t=wallTime*beat(p,.04,.25),q=f.at(t),s=13,x=160,y=405,wx=x+o.distance*s,wy=y-wallHeight*s;
 const lines=stage===0?['t = x/uₓ = 25/(18 cos 35°) = '+wallTime.toFixed(3)+' s']:stage===1?['Δy = (18 sin 35°)t − 4.9t² = '+(wallHeight-o.height).toFixed(2)+' m','Height = 15 + Δy = '+wallHeight.toFixed(2)+' m']:['Clearance = '+wallHeight.toFixed(2)+' − 8 = '+(wallHeight-o.wall).toFixed(2)+' m','Yes. The ball passes above the wall.'];
 return <g><Label x={60} y={45} size={40} weight={750}>Does the ball clear the wall? By how much?</Label><Label x={60} y={90} size={34}>u = 18 m/s at 35°; wall is 25 m from the cliff</Label><Ground/><path d={`M70 ${y-o.height*s}H${x}V${y}H70Z`} fill="#e8e1d5" stroke={C.rule} strokeWidth={2}/>
 <path d={`M${wx-9} ${y}V${y-o.wall*s}h18V${y}Z`} fill={C.muted}/><path d={pathAt(f,t,x,y,s)} stroke={C.orange} strokeWidth={5} fill="none"/><Dot x={x+q.x*s} y={y-q.y*s}/>
 <Label x={65} y={165} size={32}>15 m</Label><Label x={wx+25} y={y-o.wall*s+10} size={32}>8 m</Label><Label x={700} y={401} size={32}>Sea level: y = 0</Label>
 {stage===0&&<Arrow x1={x} y1={425} x2={x+o.distance*s*beat(p,.06,.2)} y2={425} color={C.blue}/>}
 {stage===1&&<g><path d={`M${wx+130} ${wy}V${y}M${wx} ${wy}H${wx+140}M${wx+120} ${y}h20`} stroke={C.rose} strokeWidth={3} fill="none" strokeDasharray="8 5"/><Label x={wx+145} y={365} size={32} color={C.rose}>{wallHeight.toFixed(2)} m</Label></g>}
 {stage===2&&<path d={`M${wx} ${wy}V${y-o.wall*s}`} stroke={C.green} strokeWidth={5} strokeDasharray="8 5"/>}
 <Label x={700} y={165} color={C.blue} size={34}>uₓ = 14.74 m/s</Label><Label x={700} y={213} color={C.rose} size={34}>uᵧ = 10.32 m/s</Label><Label x={700} y={267} size={32}>g = 9.8 m/s² down</Label><Label x={700} y={320} size={32}>{stage===0?'Find time at the wall.':'At the wall: t = 1.696 s'}</Label>
 <Work heading={['1. Horizontal distance gives time at the wall','2. Use that time in the vertical equation','3. Compare heights from the same sea-level zero'][stage]} lines={lines}/><Note>No drag; uniform g; up positive. This is time to the wall.</Note></g>;
};

export const TargetAngles:React.FC<VisualProps>=({progress})=>{
 const p=clamp(progress),stage=p<.3?0:p<.65?1:2,s=7,x=90,y=405;
 const flightProgress=[beat(p,.32,.5),beat(p,.67,.85)];
 const lines=stage===0?['sin(2θ) = Rg/u² = 72 × 9.8 / 30² = 0.784']:stage===1?['2θ₁ = sin⁻¹(0.784) = '+(2*targetAngle).toFixed(2)+'°','θ₁ = '+targetAngle.toFixed(2)+'°']:['2θ₂ = 180° − '+(2*targetAngle).toFixed(2)+'°','θ₂ = '+(90-targetAngle).toFixed(2)+'° = 90° − θ₁'];
 return <g><Label x={60} y={45} size={40} weight={750}>Which launch angles reach the same target?</Label><Label x={60} y={91}>u = 30 m/s; target R = 72 m; g = 9.8 m/s²</Label><Ground/>
 {targetFlights.map((m,i)=>{const q=flightProgress[i],b=m.at(m.duration*q);return <g key={i}>{p>=(i?.65:.3)&&<><path d={pathAt(m,m.duration*q,x,y,s)} fill="none" stroke={i?C.rose:C.blue} strokeWidth={5}/><Dot x={x+b.x*s} y={y-b.y*s} color={i?C.rose:C.blue}/></>}</g>;})}
 <path d={`M${x+target.range*s} 385v40`} stroke={C.green} strokeWidth={6}/><Label x={x+target.range*s} y={440} size={32} anchor="middle">72 m target</Label>
 <Label x={65} y={150} color={C.blue}>{stage>0?'Low arc: '+targetAngle.toFixed(2)+'°':''}</Label><Label x={650} y={150} color={C.rose}>{stage>1?'High arc: '+(90-targetAngle).toFixed(2)+'°':''}</Label>
 <Work heading={['Use the level-ground range relationship','First angle: the shallow path','Second angle: sine has a second solution'][stage]} lines={lines}/><Note>Same height; no drag; uniform g. Separate launches, each slowed.</Note></g>;
};

export const projectileDetailVisuals:PhysicsVisual[]=[
 {id:'m5-vector-resolution',title:'Resolve the initial velocity',focus:'Connect triangle sides to sine and cosine',siteLessons:[1,4],entry:'Right-triangle sine/cosine ratios; vectors have magnitude and direction.',limits:['Launch angle measured above horizontal; first-quadrant example.','Use at least 24 seconds to hold each equation.'],component:VectorResolution},
 {id:'m5-range-derivation',title:'Derive level-ground range',focus:'Vertical return time feeds horizontal range',siteLessons:[2,4],entry:'Velocity components, displacement equations and factorising a quadratic.',limits:['Equal launch/landing height, no drag, constant g.','Use at least 32 seconds.'],component:RangeDerivation},
 {id:'m5-obstacle-clearance',title:'Clear a wall from a cliff',focus:'Time at a horizontal location, then height against one datum',siteLessons:[3,4],entry:'Resolve velocity; substitute time in vertical displacement; signed displacement.',limits:['Point projectile, zero-width wall, no drag, constant g.','Use at least 30 seconds.'],component:ObstacleClearance},
 {id:'m5-target-angles',title:'Two angles for one target',focus:'Two sine solutions produce different physical paths',siteLessons:[2,3,4],entry:'Level-ground range formula; inverse sine; supplementary-angle identity.',limits:['Equal heights, 0° < θ < 90°, no drag, constant g.','Use at least 30 seconds.'],component:TargetAngles},
];
