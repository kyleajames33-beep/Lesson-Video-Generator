import React from 'react';
import {Arrow,C,Dot,Label,PhysicsVisual,VisualProps} from '../../course-kit';
import {bank,clamp,momentDrawing,pendulum} from './model';
const reveal=(p:number,start:number)=>clamp((p-start)/.12);

export const MomentArm:React.FC<VisualProps>=({progress})=>{
 const p=clamp(progress),s=momentDrawing(30+45*clamp(p/.55));
 const {px,py,ex,fx,fy}=s,u={x:s.ux,y:s.uy};
 return <g><Label x={60} y={55} size={40}>The moment arm meets the force line at 90°.</Label>
 <path d={`M${px} ${py}H${ex}`} stroke={C.muted} strokeWidth={20}/><Dot x={px} y={py} color={C.ink}/>
 <path d={`M${ex-s.back*u.x} ${py-s.back*u.y}L${ex+s.forward*u.x} ${py+s.forward*u.y}`} stroke={C.orange} strokeWidth={3} strokeDasharray="9 7"/>
 <Arrow x1={ex} y1={py} x2={ex+150*u.x} y2={py+150*u.y}/>
 <path d={`M${ex} ${py}h100M${ex+65} ${py}A65 65 0 0 0 ${ex+65*Math.cos(s.a)} ${py-65*Math.sin(s.a)}`} stroke={C.rule} strokeWidth={2} fill="none"/>
 <Label x={ex+105*Math.cos(s.a/2)} y={py-105*Math.sin(s.a/2)+10} size={30}>θ</Label>
 <Label x={735} y={145} color={C.orange}>F = 50 N</Label><Label x={350} y={230}>r = 0.40 m</Label>
 <g opacity={reveal(p,.12)}><path d={`M${px} ${py}L${fx} ${fy}`} stroke={C.blue} strokeWidth={5}/>
 <path d={`M${fx+18*u.x} ${fy+18*u.y}l${18*u.y} ${-18*u.x}l${-18*u.x} ${-18*u.y}`} fill="none" stroke={C.blue} strokeWidth={3}/>
 <Label x={80} y={170} color={C.blue}>d = r sin θ</Label><Label x={80} y={220} color={C.blue}>d = {s.d.toFixed(3)} m</Label></g>
 <Label x={735} y={250} size={30}>θ: lever to force</Label><Label x={735} y={305}>θ = {(s.a*180/Math.PI).toFixed(0)}°</Label><Label x={735} y={365}>τ = Fd</Label><Label x={735} y={425} color={C.orange}>{s.torque.toFixed(1)} N m</Label>
 <Label x={60} y={535}>Measure d from the pivot to the dashed force line.</Label><Label x={60} y={590} size={32} color={C.muted}>Angle comparison; the lever stays fixed. Positive torque is anticlockwise.</Label></g>;
};

export const BeamEquilibrium:React.FC<VisualProps>=({progress})=>{
 const p=clamp(progress),stage=Math.min(3,Math.floor(p*4));
 const headings=['Choose the pivot. Anticlockwise is positive.','Add the signed torques about the pivot.','Balance the vertical forces as well.','Both equilibrium conditions hold.'];
 const lines=[['Support acts through pivot.','Its torque is zero.'],['+ (30 N)(2 m) = +60 N m','− (20 N)(3 m) = −60 N m','Στ = 0 N m'],['R − 30 N − 20 N = 0','R = 50 N upward'],['Στ = 0 N m','ΣF = 0 N']][stage];
 return <g><Label x={55} y={55} size={38}>{headings[stage]}</Label><Label x={55} y={110} size={32} color={C.muted}>Light beam; vertical loads; distances measured from pivot.</Label>
 <path d="M100 315H650" stroke={C.muted} strokeWidth={20}/><path d="M290 360L320 325L350 360Z" fill={C.ink}/>
 <Arrow x1={100} y1={315} x2={100} y2={405} color={C.rose}/><Arrow x1={650} y1={315} x2={650} y2={375} color={C.rose}/>
 <Label x={65} y={460} color={C.rose}>30 N</Label><Label x={610} y={430} color={C.rose}>20 N</Label>
 <Label x={185} y={280}>2 m</Label><Label x={465} y={280}>3 m</Label><Dot x={320} y={315} color={C.ink}/>
 <g opacity={stage>=2?reveal(p,.5):.35}><Arrow x1={320} y1={315} x2={320} y2={165} color={C.blue}/><Label x={350} y={195} color={C.blue}>{stage>=2?'R = 50 N':'R'}</Label></g>
 {lines.map((line,i)=><Label key={line} x={700} y={235+i*72} size={32} color={i===lines.length-1?C.orange:C.ink}>{line}</Label>)}
 <Label x={55} y={565}>Zero torque prevents angular acceleration.</Label><Label x={55} y={610} size={32}>Zero net force prevents translational acceleration.</Label></g>;
};

export const ConicalPendulum:React.FC<VisualProps>=({progress})=>{
 const p=clamp(progress),phase=p*4*Math.PI,s=pendulum(phase),cx=255,topY=220,sideY=430,k=120,x=cx+s.x*k,z=topY+s.z*k;
 const sx=650+s.x*k,sy=sideY,pivotY=sideY-s.h*k,forceScale=9;
 return <g><Label x={55} y={52} size={38}>A horizontal circle, viewed from above and the side.</Label>
 <Label x={55} y={110}>Top view</Label><circle cx={cx} cy={topY} r={120} fill="none" stroke={C.rule} strokeWidth={3}/><path d={`M${cx} ${topY}L${x} ${z}`} stroke={C.blue} strokeWidth={3}/><Dot x={x} y={z}/><Dot x={cx} y={topY} r={5} color={C.ink}/>
 <Arrow x1={x} y1={z} x2={x-s.x/s.r*s.radial*forceScale} y2={z-s.z/s.r*s.radial*forceScale} color={C.blue}/><Label x={55} y={395} color={C.blue}>r = L sin θ = 1.00 m</Label>
 <Label x={570} y={102}>Side projection</Label><path d={`M650 ${pivotY}V${sy}M530 ${sy}H770`} stroke={C.rule} strokeWidth={2} strokeDasharray="7 7"/>
 <path d={`M650 ${pivotY}L${sx} ${sy}`} stroke={C.ink} strokeWidth={4}/><Dot x={650} y={pivotY} r={7} color={C.ink}/><Dot x={sx} y={sy}/>
 <Arrow x1={sx} y1={sy} x2={sx-s.tension*Math.sin(s.theta)*Math.cos(phase)*forceScale} y2={sy-s.weight*forceScale} color={C.orange}/>
 <Arrow x1={sx} y1={sy} x2={sx} y2={sy+90} color={C.rose}/>
 <g opacity={reveal(p,.15)}><Arrow x1={sx} y1={sy} x2={sx} y2={sy-90} color={C.blue}/><Arrow x1={sx} y1={sy} x2={sx-s.radial*Math.cos(phase)*forceScale} y2={sy} color={C.blue}/></g>
 <Label x={820} y={220} color={C.orange}>T = 11.55 N</Label><Label x={820} y={275}>T cos θ = 10 N</Label><Label x={820} y={330}>T sin θ = 5.77 N</Label>
 <Label x={55} y={445} size={32}>True θ = 30° to vertical</Label><Label x={55} y={490} size={32}>L = 2 m; m = 1 kg; g = 10 m/s²</Label><Label x={820} y={395}>Period = {s.period.toFixed(2)} s</Label>
 <Label x={55} y={570} size={32}>Blue arrows resolve tension; do not add them to T again.</Label><Label x={55} y={610} size={32} color={C.muted}>Two periods, slowed. Side view hides depth; projected arrows shorten.</Label></g>;
};

export const BankedFriction:React.FC<VisualProps>=({progress})=>{
 const p=clamp(progress),stage=Math.min(2,Math.floor(p*3)),design=bank(0).design,v=[12,design,20][stage],s=bank(v),x=360,y=330,k=.012,si=Math.sin(s.theta),co=Math.cos(s.theta);
 return <g><Label x={55} y={55} size={38}>Compare steady speeds on the same bank.</Label><Label x={55} y={108} size={32}>r = 50 m; θ = 30°; m = 1000 kg; g = 10 m/s²</Label>
 <path d="M100 480L620 180" stroke={C.muted} strokeWidth={12}/><g transform={`translate(${x} ${y}) rotate(-30)`}><rect x={-42} y={-32} width={84} height={45} rx={9} fill={C.orange}/><circle cx={-25} cy={15} r={12} fill={C.ink}/><circle cx={25} cy={15} r={12} fill={C.ink}/></g>
 <Arrow x1={x} y1={y} x2={x-s.normal*si*k} y2={y-s.normal*co*k} color={C.blue}/><Arrow x1={x} y1={y} x2={x} y2={y+120} color={C.rose}/>
 {Math.abs(s.friction)>1&&<Arrow x1={x} y1={y} x2={x+s.friction*co*k} y2={y-s.friction*si*k} color={C.green}/>}
 <Label x={80} y={180} color={C.blue}>N = {(s.normal/1000).toFixed(2)} kN</Label><Label x={385} y={495} color={C.rose}>mg = 10.0 kN</Label>
 <Label x={700} y={190} color={C.orange}>v = {v.toFixed(2)} m/s</Label><Label x={700} y={245}>Design: {design.toFixed(2)} m/s</Label>
 <Label x={700} y={320} size={32} color={C.green}>{stage===0?'Friction: up the bank':stage===1?'Friction: zero':'Friction: down the bank'}</Label>
 <Label x={700} y={375} color={C.green}>|f| = {(Math.abs(s.friction)/1000).toFixed(2)} kN</Label><Label x={700} y={435} size={32}>|f| ≤ μₛN; μₛ = 0.50</Label>
 <Label x={55} y={550} size={32}>N cos θ + f sin θ = mg; N sin θ − f cos θ = mv²/r</Label>
 <Label x={55} y={605} size={32} color={C.muted}>f is positive up the bank. Separate valid states; centre is left. No slipping.</Label></g>;
};
export const rotationDetailVisuals:PhysicsVisual[]=[
 {id:'m5-moment-arm',title:'Perpendicular moment arm',focus:'Measure the shortest pivot-to-force-line distance.',siteLessons:[6],entry:'Force vectors and sine.',limits:['Fixed lever; angle parameter comparison.'],component:MomentArm},
 {id:'m5-beam-equilibrium',title:'Beam equilibrium',focus:'Check signed torque and vertical force separately.',siteLessons:[6],entry:'Torque sign and force balance.',limits:['Light rigid beam; vertical forces only.'],component:BeamEquilibrium},
 {id:'m5-conical-pendulum',title:'Conical pendulum projections',focus:'Link a moving circular bob to tension components.',siteLessons:[8],entry:'Uniform circular motion and vector components.',limits:['Ideal string; fixed angle; side view is a projection.'],component:ConicalPendulum},
 {id:'m5-banked-friction',title:'Banked curve friction',focus:'Friction changes direction across design speed.',siteLessons:[8],entry:'Normal force, friction and inward net force.',limits:['Steady circular states; μs = 0.50; no longitudinal acceleration.'],component:BankedFriction},
];

