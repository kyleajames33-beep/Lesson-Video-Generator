import React from 'react';
import {Arrow,C,DataGraph,Dot,Label,Panel,lerp,type PhysicsVisual,type VisualProps} from '../course-kit';
import {circular,circularOrbit,EARTH_RADIUS,keplerState,MU,torque,trajectory,verticalLoopAt} from './model';
import {projectileDetailVisuals} from './projectile-details';
import {practicalDetailVisuals} from './practical-details';
import {rotationDetailVisuals} from './rotation-details';

const Ground:React.FC=()=> <path d="M60 490H1020" stroke={C.ink} strokeWidth={4}/>;
const trace=(pts:{x:number;y:number}[],x0:number,y0:number,s:number)=>pts.map((p,i)=>`${i?'L':'M'}${x0+p.x*s},${y0-p.y*s}`).join(' ');
const samples=(f:(t:number)=>{x:number;y:number},end:number)=>Array.from({length:101},(_,i)=>f(end*i/100));

export const LaunchAngleComparison:React.FC<VisualProps>=({progress:p})=>{
  const angle=lerp(30,60,p),m=trajectory(20,angle),current=m.at(m.duration*.55);
  return <g><Ground/>{[30,60].map(a=><path key={a} d={trace(samples(trajectory(20,a).at,trajectory(20,a).duration),80,490,22)} stroke={C.rule} strokeWidth={4} strokeDasharray="8 7" fill="none"/>)}
    <path d={trace(samples(m.at,m.duration),80,490,22)} fill="none" stroke={C.orange} strokeWidth={6}/><Dot x={80+current.x*22} y={490-current.y*22} r={15}/>
    <Arrow x1={80} y1={490} x2={80+120*Math.cos(angle*Math.PI/180)} y2={490-120*Math.sin(angle*Math.PI/180)} color={C.blue}/>
    <Label x={68} y={70} size={40} weight={750}>Same launch speed: 20 m/s</Label><Label x={68} y={124} color={C.blue}>Angle: {angle.toFixed(0)}°</Label>
    <Label x={650} y={70} size={40} color={C.orange}>Range: {m.range.toFixed(1)} m</Label><Label x={650} y={122}>Level ground; g = 10 m/s²</Label>
    <Label x={70} y={560}>30° and 60° have the same range.</Label><Label x={70} y={608} color={C.muted} size={30}>45° maximises range only in this ideal level-ground model.</Label></g>;
};

export const ElevatedLaunch:React.FC<VisualProps>=({progress:p})=>{
  const m=trajectory(15,0,10),t=m.duration*p,b=m.at(t),scale=32;
  return <g><path d="M60 430H1020" stroke={C.ink} strokeWidth={4}/><path d="M95 110H240V430H95Z" fill="#ece5da" stroke={C.rule} strokeWidth={3}/><Label x={75} y={75}>Horizontal launch: 15 m/s</Label>
    <path d={trace(samples(m.at,m.duration),240,430,scale)} fill="none" stroke={C.rule} strokeDasharray="8 7" strokeWidth={3}/>
    <path d={trace(samples(m.at,t),240,430,scale)} fill="none" stroke={C.orange} strokeWidth={5}/><Dot x={240+b.x*scale} y={430-b.y*scale} r={17}/>
    <Arrow x1={240+b.x*scale} y1={430-b.y*scale} x2={240+b.x*scale+75} y2={430-b.y*scale} color={C.blue}/>
    <Arrow x1={240+b.x*scale} y1={430-b.y*scale} x2={240+b.x*scale} y2={430-b.y*scale+10*t*5} color={C.rose}/>
    <Label x={70} y={350} size={36}>10 m</Label><Label x={600} y={70}>Time: {t.toFixed(2)} s</Label><Label x={600} y={118}>Height: {Math.max(0,b.y).toFixed(1)} m</Label>
    <Label x={80} y={560}>The drop determines the flight time.</Label><Label x={80} y={606} size={30} color={C.muted}>No air resistance; g = 10 m/s². Motion is slowed.</Label></g>;
};

export const ProjectilePractical:React.FC<VisualProps>=({progress:p})=>{
  const data:Array<[number,number]>=[[1,.045],[4,.19],[9,.455],[16,.79],[25,1.27]],count=Math.max(1,Math.ceil(p*5));
  return <g><path d="M90 160H330V470H90Z" fill="#eee8dc" stroke={C.ink} strokeWidth={3}/><circle cx={340} cy={157} r={13} fill={C.orange}/><Arrow x1={310} y1={157} x2={420} y2={157} color={C.blue}/>
    <path d="M340 157Q500 165 580 470" stroke={C.orange} strokeWidth={4} fill="none" strokeDasharray="9 7"/><path d="M330 470H600" stroke={C.ink} strokeWidth={3}/>
    <Label x={90} y={80}>Horizontal launcher</Label><Label x={95} y={520}>Measure range x and drop h.</Label>
    <DataGraph x={630} y={90} w={440} h={440} xRange={[0,25]} yRange={[0,1.5]} xLabel="x² (m²)" yLabel="Drop h (m)" points={[[0,0],[25,1.25]]} color={C.blue}/>
    {data.slice(0,count).map(([x,y])=><Dot key={x} x={718+x/25*316} y={434-y/1.5*282} color={C.rose} r={7}/>)}
    <Label x={75} y={570} size={32} color={C.muted}>Simulated data compare a prediction with scattered points.</Label><Label x={75} y={608} size={30} color={C.muted}>These points are not real experimental evidence.</Label></g>;
};

export const TorqueLever:React.FC<VisualProps>=({progress:p})=>{
  const degrees=lerp(15,90,p),a=degrees*Math.PI/180,px=190,py=360,ex=650,ey=360;
  return <g><path d={`M${px} ${py}H${ex}`} stroke={C.muted} strokeWidth={24} strokeLinecap="round"/><circle cx={px} cy={py} r={29} fill={C.ink}/>
    <path d="M165 395L190 365L215 395Z" fill={C.ink}/><Arrow x1={ex} y1={ey} x2={ex+150*Math.cos(a)} y2={ey-150*Math.sin(a)} color={C.orange}/>
    <path d={`M${ex-230*Math.cos(a)} ${ey+230*Math.sin(a)}L${ex+185*Math.cos(a)} ${ey-185*Math.sin(a)}`} stroke={C.orange} strokeWidth={2} strokeDasharray="7 7"/>
    <Label x={180} y={446}>Pivot</Label><Label x={350} y={328} color={C.blue}>r = 0.4 m</Label><Label x={680} y={145} color={C.orange}>F = 50 N</Label>
    <Label x={76} y={75} size={40} weight={750}>Turn the force towards perpendicular.</Label><Label x={76} y={132}>θ = {degrees.toFixed(0)}°</Label>
    <Panel x={670} y={440} w={370} h={120}><Label x={695} y={488} size={36}>τ = rF sin θ</Label><Label x={695} y={535} color={C.orange}>τ = {torque(.4,50,degrees).toFixed(1)} N m</Label></Panel>
    <Label x={75} y={590} color={C.muted} size={30}>The dashed line is the force's line of action. Torque is anticlockwise.</Label></g>;
};

export const CircularMotion:React.FC<VisualProps>=({progress:p})=>{
  const s=circular(p*Math.PI*2,180,4),x=320+s.x,y=315+s.y;
  return <g><circle cx={320} cy={315} r={180} stroke={C.rule} strokeWidth={4} fill="none"/><Dot x={320} y={315} r={6} color={C.muted}/>
    <path d={`M320 315L${x} ${y}`} stroke={C.rule} strokeWidth={2}/><Dot x={x} y={y} r={18}/>
    <Arrow x1={x} y1={y} x2={x+s.vx*24} y2={y+s.vy*24} color={C.blue}/><Arrow x1={x} y1={y} x2={x-s.x*.55} y2={y-s.y*.55} color={C.rose}/>
    <Label x={640} y={145} color={C.blue} size={38}>Velocity is tangent.</Label><Label x={640} y={215} color={C.rose} size={38}>Net force points inward.</Label>
    <Label x={640} y={320}>r = 2 m; v = 4 m/s</Label><Label x={640} y={385}>a = v²/r = 8 m/s²</Label><Label x={640} y={452}>The speed stays constant.</Label>
    <Label x={76} y={590} size={31} color={C.muted}>The inward net force changes direction, so the velocity changes.</Label></g>;
};

export const BankedTrack:React.FC<VisualProps>=({progress:p})=>{
  const theta=lerp(15,40,p)*Math.PI/180,cx=370,cy=350,n=130/Math.cos(theta);
  return <g><path d={`M90 ${cy+280*Math.tan(theta)}L650 ${cy-280*Math.tan(theta)}`} stroke={C.muted} strokeWidth={12}/>
    <g transform={`translate(${cx} ${cy}) rotate(${-theta*180/Math.PI})`}><rect x={-48} y={-28} width={96} height={38} rx={10} fill={C.orange}/><circle cx={-30} cy={13} r={13} fill={C.ink}/><circle cx={30} cy={13} r={13} fill={C.ink}/></g>
    <Arrow x1={cx} y1={cy} x2={cx-n*Math.sin(theta)} y2={cy-n*Math.cos(theta)} color={C.blue}/><Arrow x1={cx} y1={cy} x2={cx} y2={cy+130} color={C.rose}/>
    <Label x={120} y={155} color={C.blue}>Normal force N</Label><Label x={415} y={480} color={C.rose}>Weight mg</Label>
    <Label x={700} y={140} size={38}>No friction</Label><Label x={700} y={218}>N cos θ = mg</Label><Label x={700} y={284}>N sin θ = mv²/r</Label>
    <Label x={700} y={370} color={C.orange}>θ = {(theta*180/Math.PI).toFixed(0)}°</Label><Label x={700} y={426}>r = 50 m; g = 10 m/s²</Label><Label x={700} y={482}>v = {Math.sqrt(500*Math.tan(theta)).toFixed(1)} m/s</Label>
    <Label x={70} y={592} size={31} color={C.muted}>The normal force's inward component supplies the radial net force.</Label></g>;
};

export const VerticalLoop:React.FC<VisualProps>=({progress:p})=>{
  const state=verticalLoopAt(p),theta=state.theta,r=155,x=310+r*Math.cos(theta),y=320-r*Math.sin(theta),tension=state.tensionPerMass;
  return <g><circle cx={310} cy={320} r={r} stroke={C.rule} strokeWidth={4} fill="none"/><Dot x={x} y={y} r={16}/>
    <Arrow x1={x+10} y1={y} x2={x+10} y2={y+35} color={C.rose}/><Arrow x1={x-10} y1={y} x2={x-10-(x-310)/r*tension*3.5} y2={y-(y-320)/r*tension*3.5} color={C.blue}/>
    <Label x={610} y={120} color={C.blue}>Tension pulls inward.</Label><Label x={610} y={185} color={C.rose}>Weight always points down.</Label><Label x={610} y={280}>r = 2 m; g = 10 m/s²</Label>
    <Label x={610} y={345}>Speed: {state.speed.toFixed(1)} m/s</Label><Label x={610} y={410}>Tension / mass: {tension.toFixed(1)} N/kg</Label>
    <Label x={75} y={570}>The ball slows as it rises, then speeds up as it falls.</Label><Label x={75} y={613} size={29} color={C.muted}>Ideal taut string. Force arrows share one scale; their tails are offset for clarity.</Label></g>;
};

export const InverseSquareGravity:React.FC<VisualProps>=({progress:p})=>{
  const r=lerp(1,3,p),x=275+r*80;
  return <g><circle cx={275} cy={300} r={60} fill={C.blue}/><Label x={275} y={310} size={29} color="#fff" anchor="middle">Mass M</Label>
    {[1,2,3].map(n=><circle key={n} cx={275} cy={300} r={n*80} fill="none" stroke={C.rule} strokeWidth={2}/>)}<Dot x={x} y={300} color={C.orange} r={18}/>
    <Arrow x1={x-20} y1={300} x2={x-20-100/r**2} y2={300} color={C.rose}/><Label x={70} y={65}>Centre-to-centre separation increases.</Label><Label x={75} y={600} size={31} color={C.muted}>Field arrows point towards the central mass. Diagram is schematic.</Label>
    <Panel x={745} y={140} w={325} h={330}><Label x={770} y={195}>r / r₀ = {r.toFixed(1)}</Label><Label x={770} y={270} color={C.rose}>g / g₀ = {(1/r**2).toFixed(3)}</Label><Label x={770} y={355}>Double r:</Label><Label x={770} y={415} color={C.orange}>one-quarter g</Label></Panel></g>;
};

export const OrbitEnergy:React.FC<VisualProps>=({progress:p})=>{
  const radius=lerp(7e6,14e6,p),o=circularOrbit(radius),angle=p*2*Math.PI,drawR=radius/1e5;
  return <g><circle cx={245} cy={300} r={EARTH_RADIUS/1e5} fill={C.blue}/><circle cx={245} cy={300} r={drawR} stroke={C.rule} strokeWidth={3} fill="none"/><Dot x={245+drawR*Math.cos(angle)} y={300-drawR*Math.sin(angle)} r={14}/>
    <Label x={65} y={80}>Circular-orbit comparison</Label><Label x={65} y={125} size={29}>Separate circular-orbit states</Label><Label x={65} y={490}>Radius: {(radius/1e6).toFixed(1)} Mm</Label><Label x={65} y={545}>Speed: {(o.speed/1000).toFixed(2)} km/s</Label>
    <DataGraph x={520} y={65} w={540} h={440} xRange={[7,14]} yRange={[-60,35]} xLabel="Radius (Mm)" yLabel="Specific energy (MJ/kg)" points={Array.from({length:101},(_,i)=>{const r=(7+i*.07)*1e6;return [r/1e6,-MU/(2*r*1e6)] as [number,number];})} progress={p} color={C.orange} yTicks={[-60,0,35]}/>
    <Label x={540} y={552} size={31}>K = {(o.kinetic/1e6).toFixed(1)}; U = {(o.potential/1e6).toFixed(1)} MJ/kg</Label><Label x={540} y={602} size={31} color={C.orange}>Total = {(o.total/1e6).toFixed(1)} MJ/kg</Label></g>;
};

export const GravitationalPotential:React.FC<VisualProps>=({progress:p})=>{
  const r=lerp(1,5,p),pts=Array.from({length:101},(_,i)=>{const x=1+i*.04;return [x,-60/x] as [number,number];});
  return <g><DataGraph x={35} y={25} w={650} h={500} xRange={[1,5]} yRange={[-60,0]} xLabel="Radius / R" yLabel="Potential (MJ/kg)" points={pts} progress={p} color={C.blue} yTicks={[-60,-30,0]}/>
    <Label x={735} y={118}>V = −GM/r</Label><Label x={735} y={198}>At r = {r.toFixed(1)} R:</Label><Label x={735} y={257} color={C.blue}>V = {(-60/r).toFixed(1)} MJ/kg</Label><Label x={735} y={346}>g points towards</Label><Label x={735} y={393}>decreasing potential.</Label>
    <Label x={70} y={585} size={31} color={C.muted}>Illustrative central mass: GM/R = 60 MJ/kg. Zero potential is at infinity.</Label></g>;
};

export const EscapeEnergy:React.FC<VisualProps>=({progress:p})=>{
  const ratio=lerp(.7,1.3,p),u=-60,k=60*ratio**2,total=u+k,zero=320,scale=1.3;
  return <g><Label x={70} y={72} size={40}>Increase the launch speed.</Label><Label x={70} y={140}>Speed / escape speed = {ratio.toFixed(2)}</Label><path d="M80 320H1010" stroke={C.ink} strokeWidth={3}/><Label x={1020} y={330} size={30}>0</Label>
    {[{x:180,value:k,label:'Kinetic',color:C.blue},{x:470,value:u,label:'Potential',color:C.rose},{x:760,value:total,label:'Total',color:C.orange}].map(b=><g key={b.label}><rect x={b.x} y={Math.min(zero,zero-b.value*scale)} width={140} height={Math.max(2,Math.abs(b.value*scale))} fill={b.color}/><Label x={b.x+70} y={480} anchor="middle">{b.label}</Label><Label x={b.x+70} y={530} anchor="middle" color={b.color}>{b.value.toFixed(1)} MJ/kg</Label></g>)}
    <Label x={75} y={575} size={29} color={C.muted}>Fixed launch radius; no thrust after launch or drag.</Label><Label x={75} y={610} size={30} color={C.muted}>Escape requires total specific energy ≥ 0.</Label></g>;
};

export const KeplerOrbit:React.FC<VisualProps>=({progress:p})=>{
  const a=290,e=.55,b=a*Math.sqrt(1-e*e),cx=460,cy=300,focusX=cx+a*e,s=keplerState(p*Math.PI*2,a,e);
  const wedge=(from:number,to:number)=>`M${focusX},${cy} `+Array.from({length:41},(_,i)=>{const z=keplerState(lerp(from,to,i/40)*Math.PI*2,a,e);return `L${focusX+z.x},${cy+z.y}`;}).join(' ')+'Z';
  return <g><ellipse cx={cx} cy={cy} rx={a} ry={b} fill="none" stroke={C.rule} strokeWidth={3}/>
    <path d={wedge(0,.1)} fill={C.blue} opacity={.22}/><path d={wedge(.45,.55)} fill={C.rose} opacity={.22}/><path d={`M${focusX},${cy}L${focusX+s.x},${cy+s.y}`} stroke={C.orange} strokeWidth={3}/><Dot x={focusX} y={cy} color={C.orange} r={24}/><Dot x={focusX+s.x} y={cy+s.y} color={C.blue} r={15}/>
    <Label x={65} y={65} size={40}>Equal time intervals sweep equal areas.</Label><path d={`M${focusX+16} ${cy+18}L790 450`} stroke={C.muted} strokeWidth={2}/><Label x={810} y={470} size={31}>Central mass</Label><Label x={810} y={512} size={31}>at a focus</Label><Label x={810} y={210} color={C.blue}>Blue: 0.1 T</Label><Label x={810} y={275} color={C.rose}>Rose: 0.1 T</Label><Label x={810} y={370}>T² ∝ a³</Label>
    <Label x={75} y={590} size={31} color={C.muted}>An ideal two-body orbit. Equal time steps use Kepler's equation.</Label></g>;
};

export const module5Visuals:PhysicsVisual[]=[
  {id:'m5-launch-angle',title:'Launch angle and range',focus:'How does the same launch speed produce different ranges?',siteLessons:[1,2,4],entry:'Horizontal and vertical velocity components',limits:['Level ground only; no drag. Original projectile kit remains the component-motion reference.'],component:LaunchAngleComparison},
  {id:'m5-elevated-launch',title:'Horizontal launch from a height',focus:'The vertical drop determines time; horizontal velocity determines range.',siteLessons:[2,3,4],entry:'Constant acceleration and upward-positive coordinates',limits:['One configured horizontal launch; not an obstacle solver or a full worked calculation.'],component:ElevatedLaunch},
  {id:'m5-projectile-practical',title:'Testing the projectile model',focus:'A launcher and a graph connect measured drop to range squared.',siteLessons:[5],entry:'Horizontal launch model and graph axes',limits:['All dots are simulated. Companion measurement families show intervals; method controls and practical assessment need lesson-specific work.'],component:ProjectilePractical},
  {id:'m5-torque',title:'Force direction changes torque',focus:'A perpendicular force produces the largest turning effect.',siteLessons:[6,13],entry:'Force and a pivot',limits:['Single-force comparison. Companion moment-arm and beam families supply the distance construction and force ledger.'],component:TorqueLever},
  {id:'m5-circular-motion',title:'Velocity turns while speed stays constant',focus:'The inward net force continually changes the direction of velocity.',siteLessons:[7,13],entry:'Vectors and Newton’s second law',limits:['Uniform circular motion only. Net force is not an extra force in a free-body diagram.'],component:CircularMotion},
  {id:'m5-banked-track',title:'A banked track without friction',focus:'The normal force supports weight and supplies the inward resultant.',siteLessons:[8],entry:'Force components and circular motion',limits:['This family shows frictionless design speed. Companions cover conical motion and friction direction; limiting-speed derivations remain open.'],component:BankedTrack},
  {id:'m5-vertical-loop',title:'Forces around a vertical loop',focus:'Weight stays downward while tension points towards the centre.',siteLessons:[9,13],entry:'Energy conservation and radial force equations',limits:['Ideal string stays taut; no loss of contact, rigid rods or normal-force loop.'],component:VerticalLoop},
  {id:'m5-inverse-square',title:'Distance weakens the gravitational field',focus:'Double the separation and the field falls to one quarter.',siteLessons:[10,15,18],entry:'Force per unit mass',limits:['Single spherical central mass outside its surface. Field-line density is not quantitative.'],component:InverseSquareGravity},
  {id:'m5-orbit-energy',title:'Compare circular orbital energies',focus:'A higher circular orbit has lower speed and less negative total energy.',siteLessons:[11,12,13,18],entry:'Gravity provides radial net force; energy zero at infinity',limits:['A parameter comparison, not an animated transfer manoeuvre. GEO synchronisation and orbit-transfer burns remain gaps.'],component:OrbitEnergy},
  {id:'m5-gravitational-potential',title:'Read a gravitational potential graph',focus:'Potential rises towards zero as distance increases.',siteLessons:[14,15,18],entry:'Potential is potential energy per unit mass',limits:['The graph does not yet draw its tangent or show equipotential surfaces and work integrals.'],component:GravitationalPotential},
  {id:'m5-escape',title:'Escape requires nonnegative total energy',focus:'Compare kinetic, potential and total specific energy at one launch radius.',siteLessons:[16,18],entry:'Signed gravitational energy with zero at infinity',limits:['Energy threshold only; no trajectory classification or relativistic escape models.'],component:EscapeEnergy},
  {id:'m5-kepler',title:'Equal times, equal swept areas',focus:'An orbit speeds up near the central body and slows farther away.',siteLessons:[17,18],entry:'An ellipse has two foci; period means one complete orbit',limits:['Ideal Keplerian two-body motion; no perturbations, precession or numerical orbital data fit.'],component:KeplerOrbit},
  ...projectileDetailVisuals.map(v=>({...v,seconds:({'m5-vector-resolution':24,'m5-range-derivation':32,'m5-obstacle-clearance':30,'m5-target-angles':30} as Record<string,number>)[v.id]})),
  ...practicalDetailVisuals,
  ...rotationDetailVisuals.map(v=>({...v,seconds:({'m5-moment-arm':16,'m5-beam-equilibrium':24,'m5-conical-pendulum':20,'m5-banked-friction':24} as Record<string,number>)[v.id]})),
];
