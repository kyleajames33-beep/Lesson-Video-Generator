import React from 'react';
import {Arrow, C, DataGraph, Dot, Label, Panel, type PhysicsVisual, type VisualProps} from '../course-kit';
import {bindingCurve, clamp, decayTimes, hydrogenEnergy, hubbleVelocity, phase, remaining, scaleFactor} from './model';

const Note: React.FC<{children: string}> = ({children}) => {
 const words=children.split(' '), lines:string[]=[''];
 for(const word of words){const last=lines.length-1;if((lines[last]+' '+word).length>72)lines.push(word);else lines[last]+=(lines[last]?' ':'')+word;}
 return <g>{lines.map((line,i)=><Label key={i} x={550} y={lines.length===1?610:575+i*37} size={32} color={C.muted} anchor="middle">{line}</Label>)}</g>;
};
const Line: React.FC<{d:string;color?:string;p?:number;dash?:string}> = ({d,color=C.ink,p=1,dash}) => <path d={d} fill="none" stroke={color} strokeWidth={5} strokeLinecap="round" pathLength={1} strokeDasharray={dash??1} strokeDashoffset={dash?0:1-clamp(p)}/>;
const Wave: React.FC<{x:number;y:number;length:number;cycles:number;color?:string}> = ({x,y,length,cycles,color=C.orange}) => <Line color={color} d={Array.from({length:181},(_,i)=>`${i?'L':'M'}${x+i*length/180},${y+18*Math.sin(i/180*cycles*2*Math.PI)}`).join(' ')}/>;

export const Expansion: React.FC<VisualProps> = ({progress}) => {
 const p=clamp(progress), a=scaleFactor(phase(p,0,.6));
 return <g>
  <Label x={40} y={42} weight={750}>Distances grow as space expands</Label>
  <Panel x={25} y={68} w={510} h={335}/>
  {[-1,0,1].flatMap((j)=>[-1,0,1].map((i)=><Dot key={`${i}-${j}`} x={280+i*65*a} y={235+j*52*a} r={12} color={i===0&&j===0?C.orange:C.blue}/>))}
  <Arrow x1={280} y1={235} x2={280+65*a} y2={235} color={C.orange}/>
  <Label x={280} y={435} anchor="middle">Same galaxies, larger separation</Label>
  <DataGraph x={560} y={68} w={510} h={335} xRange={[0,100]} yRange={[0,7000]} xLabel="Distance (Mpc)" yLabel="Recession speed (km/s)" points={Array.from({length:31},(_,i)=>[i*100/30,hubbleVelocity(i*100/30)] as [number,number])} progress={phase(p,.1,.8)}/>
  <Label x={60} y={475}>Wavelength stretches with the scale factor</Label>
  <Wave x={70} y={505} length={250*a} cycles={7}/>
  <Label x={930} y={520} anchor="middle" color={C.orange}>λ ∝ a</Label>
  <Note>Local expansion model. No preferred centre. H₀ = 70 km/s/Mpc is illustrative.</Note>
 </g>;
};

export const StellarEvolution: React.FC<VisualProps> = ({progress}) => {
 const p=clamp(progress), collapse=phase(p,.45,.75);
 return <g>
  <Label x={40} y={42} weight={750}>Initial mass changes a star's path</Label>
  <g opacity={.8}>{Array.from({length:20},(_,i)=><circle key={i} cx={100+(i*43%125)} cy={150+(i*61%170)} r={19+(i%4)*6} fill={C.rule}/>)}</g>
  <Label x={160} y={370} anchor="middle">Gas cloud</Label>
  <Arrow x1={240} y1={230} x2={320} y2={230}/>
  <circle cx={380} cy={230} r={40} fill={C.orange}/>
  <Label x={380} y={370} anchor="middle">Star forms</Label>
  <Line d="M430,230 L530,150 H1030" p={phase(p,0,.45)} color={C.orange}/>
  <circle cx={640} cy={150} r={35+25*phase(p,.1,.4)} fill={C.rose}/>
  <circle cx={985} cy={150} r={18} fill={C.blue}/>
  <Label x={620} y={80} anchor="middle">Sun-like star</Label>
  <Label x={640} y={255} anchor="middle">Red giant</Label>
  <Label x={965} y={255} anchor="middle">White dwarf</Label>
  <Line d="M430,230 L530,430 H1030" p={phase(p,.35,.8)} color={C.orange}/>
  <circle cx={640} cy={430} r={60} fill={C.rose}/>
  <circle cx={640} cy={430} r={Math.max(10,28*(1-collapse))} fill={C.ink}/>
  <circle cx={835} cy={430} r={10+50*collapse} fill="none" stroke={C.orange} strokeWidth={6} opacity={collapse}/>
  <circle cx={1000} cy={430} r={17} fill={C.ink}/>
  <Label x={635} y={340} anchor="middle">Massive star</Label>
  <Label x={825} y={525} anchor="middle">Core collapses</Label>
  <Label x={1010} y={340} anchor="middle" size={32}>NS or BH</Label>
  <Note>Schematic branches, not a time scale. Mass loss and composition also matter.</Note>
 </g>;
};

export const HRDiagram: React.FC<VisualProps> = ({progress}) => {
 const p=clamp(progress);
 const hx=(t:number)=>155+(Math.log10(30000)-Math.log10(t))*805; const hy=(l:number)=>475-(l+4)/10*350; const sx=hx(5780),sy=hy(0); const stars=Array.from({length:34},(_,i)=>{const t=30000*Math.pow(.1,i/33);return {x:hx(t),y:hy(7*Math.log10(t/5780))};});
 return <g>
  <Label x={40} y={42} weight={750}>Temperature and luminosity classify stars</Label>
  <Panel x={60} y={65} w={970} h={510}/>
  <Line d="M155,110 V475 H960"/>
  <Label x={200} y={100}>Luminosity (L☉), log scale</Label>
  <Label x={550} y={565} anchor="middle" size={32}>Surface temperature (K), hotter to the left</Label>
  {[['30 000',hx(30000)],['6 000',hx(6000)],['3 000',hx(3000)]].map(([t,x])=><Label key={t} x={Number(x)} y={520} anchor="middle" size={32}>{t}</Label>)}
  {[['10⁶',hy(6)],['1',hy(0)],['10⁻⁴',hy(-4)]].map(([t,y])=><Label key={t} x={140} y={Number(y)} anchor="end" size={32}>{t}</Label>)}
  {stars.map((s,i)=><Dot key={i} x={s.x} y={s.y} r={9} color={i<16?C.blue:C.orange}/>)}
  {[0,1,2,3,4,5].map(i=><Dot key={i} x={785+i*23} y={230+i%2*24} r={13} color={C.rose}/>)}
  {[0,1,2,3,4].map(i=><Dot key={i} x={250+i*28} y={425+i%2*15} r={8} color={C.blue}/>)}
  <Label x={380} y={245}>Main sequence</Label>
  <Label x={755} y={200} color={C.rose}>Giants</Label>
  <Label x={350} y={465} color={C.blue}>White dwarfs</Label>
  <Dot x={sx} y={sy} r={14}/><Label x={sx+35} y={sy+30}>Sun</Label>
  <g opacity={phase(p,.35,.65)}><Line d={`M${sx},${sy} Q740,300 790,235 T880,190`} color={C.rose} p={phase(p,.35,1)}/><Label x={650} y={400} size={32} color={C.rose}>Core H runs low</Label></g>
  <Note>Illustrative positions and path, not observed stellar data.</Note>
 </g>;
};

export const Spectra: React.FC<VisualProps> = ({progress}) => {
 const p=clamp(progress), z=.04*phase(p,.4,1);
 const colors=['#63378c','#225faf','#14858a','#437b3f','#a37315','#be5626','#a63838'];
 return <g>
  <Label x={40} y={42} weight={750}>A cooler gas removes selected wavelengths</Label>
  <circle cx={120} cy={155} r={48} fill={C.orange}/>
  <Label x={120} y={252} anchor="middle">Hot source</Label>
  <Arrow x1={185} y1={155} x2={300} y2={155}/>
  <Panel x={325} y={90} w={180} h={130}/>
  {[0,1,2,3,4,5,6,7].map(i=><Dot key={i} x={350+i%4*40} y={125+Math.floor(i/4)*48} color={C.blue} r={7}/>)}
  <Label x={415} y={252} anchor="middle">Cooler gas</Label>
  <Arrow x1={525} y1={155} x2={680} y2={155}/>
  <path d="M710,110 L710,200 L785,155Z" fill={C.tint} stroke={C.orange} strokeWidth={4}/>
  <Label x={850} y={252} anchor="middle">Light is dispersed</Label>
  {['Laboratory rest','Receding source'].map((name,row)=><g key={name}>
   <Label x={45} y={340+row*135}>{name}</Label>
   {colors.map((c,i)=><rect key={c} x={370+i*90} y={295+row*135} width={90} height={65} fill={c}/>)}
   {[450,550,650].map((lambda,i)=><rect key={i} x={370+(lambda*(row?1+z:1)-400)/300*630} y={295+row*135} width={7} height={65} fill={C.ink}/>)}
  </g>)}
  <Arrow x1={820} y1={530} x2={1000} y2={530}/><Label x={800} y={525} anchor="end">Longer wavelength</Label>
  <Note>Line pattern identifies elements. Doppler shift is radial motion; cosmological shift differs.</Note>
 </g>;
};

export const Nucleosynthesis: React.FC<VisualProps> = ({progress}) => {
 const p=clamp(progress);
 return <g>
  <Label x={40} y={42} weight={750}>Nuclei bind more tightly near the iron group</Label>
  <DataGraph x={20} y={65} w={640} h={450} xRange={[0,250]} yRange={[0,9]} xTicks={[0,50,150,250]} yTicks={[0,4,8]} xLabel="Mass number A" yLabel="Binding energy/nucleon (MeV)" points={bindingCurve} progress={phase(p,0,.7)}/>
  <Label x={280} y={178} color={C.orange}>Iron-group region</Label>
  <Arrow x1={180} y1={340} x2={275} y2={260} color={C.blue}/>
  <Label x={180} y={395} color={C.blue}>Light nuclei fuse</Label>
  <Arrow x1={585} y1={270} x2={470} y2={235} color={C.rose}/>
  <Label x={390} y={350} color={C.rose}>Heavy nuclei split</Label>
  <Label x={705} y={100} weight={750}>Element sources</Label>
  <circle cx={740} cy={170} r={26} fill={C.orange}/><Label x={790} y={165}>Big Bang</Label><Label x={790} y={205} size={32}>Mostly H and He</Label>
  <circle cx={740} cy={295} r={30} fill={C.rose}/><Label x={790} y={290}>Stars</Label><Label x={790} y={330} size={32}>Fusion and capture</Label>
  <g opacity={phase(p,.4,.7)}><circle cx={720} cy={435} r={20} fill={C.blue}/><circle cx={760} cy={435} r={20} fill={C.blue}/><Line d="M700,460 Q740,510 790,455" color={C.orange}/><Label x={705} y={390} size={32}>Neutron-rich ejecta</Label><Label x={805} y={475} size={32}>Rapid capture</Label></g>
  <Note>Curve is approximate. Capture can build beyond iron; ordinary fusion there costs energy.</Note>
 </g>;
};

export const RutherfordScattering: React.FC<VisualProps> = ({progress}) => {
 const p=phase(progress,0,.85);
 const paths=['M110,130 H990','M110,230 H480 Q650,230 990,160','M110,280 H490 Q590,280 700,100','M110,307 H530 Q620,307 565,260 L410,180'];
 return <g>
  <Label x={40} y={42} weight={750}>A small positive nucleus explains rare large turns</Label>
  <rect x={80} y={115} width={40} height={290} rx={10} fill={C.muted}/>
  <Label x={80} y={465}>Alpha source</Label>
  <rect x={610} y={90} width={45} height={440} fill={C.tint}/>
  <Dot x={632} y={310} r={19} color={C.orange}/>
  {paths.map((d,i)=><Line key={d} d={d} color={i<2?C.blue:C.rose} p={p}/>)}
  <Label x={890} y={92} anchor="middle" color={C.blue}>Most pass through</Label>
  <Label x={870} y={525} color={C.rose} anchor="middle">Rare large turn</Label>
  <Label x={635} y={575} anchor="middle">Foil nuclei greatly enlarged, paths illustrative</Label>
  <Label x={280} y={390} color={C.blue}>α particles (+)</Label>
  <circle cx={632} cy={310} r={40+20*phase(progress,.5,1)} fill="none" stroke={C.orange} strokeWidth={3} opacity={phase(progress,.5,.8)}/>
 </g>;
};

export const QuantumAtom: React.FC<VisualProps> = ({progress}) => {
 const p=clamp(progress);
 // Energy axis grows upward: E=-13.6 at y=490, E=0 at y=145.
 const ey=(e:number)=>145-e/13.6*345;
 return <g>
  <Label x={40} y={42} weight={750}>Energy levels are discrete; an orbital is not a path</Label>
  <Label x={70} y={105}>Hydrogen energy (eV)</Label>
  {[1,2,3].map(n=><g key={n}><Line d={`M85,${ey(hydrogenEnergy(n))} H470`} color={C.blue}/><Label x={500} y={ey(hydrogenEnergy(n))+10} size={32}>n={n}: {hydrogenEnergy(n).toFixed(2)}</Label></g>)}
  <Line d="M85,145 H470" color={C.muted} dash="9 8"/><Label x={500} y={155} size={32}>0: free electron</Label>
  <Arrow x1={350} y1={ey(hydrogenEnergy(3))} x2={350} y2={ey(hydrogenEnergy(2))} color={C.orange}/>
  <Wave x={80} y={330} length={220} cycles={4} color={C.orange}/>
  <Label x={80} y={390} color={C.orange}>Photon: E = hf = ΔE</Label>
  <g>{Array.from({length:180},(_,i)=>{const a=i*2.399963,r=140*Math.sqrt((i+.5)/180),x=850+r*Math.cos(a),cy=300+r*Math.sin(a);return <circle key={i} cx={x} cy={cy} r={4} fill={C.blue} opacity={Math.exp(-r/55)*.95*phase(p,i/400,.65+i/600)}/>;})}</g>
  <Dot x={850} y={300} r={9}/>
  <Label x={850} y={480} anchor="middle">1s probability density</Label>
  <Label x={850} y={525} anchor="middle" size={32}>Darker = greater density</Label>
  <Note>Density cross-section, not electron motion. No trajectory or jump duration is shown.</Note>
 </g>;
};

export const RadioactivePopulation: React.FC<VisualProps> = ({progress}) => {
 const t=clamp(progress)*4;
 return <g>
  <Label x={40} y={42} weight={750}>Individual decays are random; populations have a pattern</Label>
  <Panel x={25} y={85} w={430} h={400}/>
  {decayTimes.map((time,i)=><Dot key={i} x={60+i%10*39} y={135+Math.floor(i/10)*44} r={11} color={time>t?C.orange:C.rule}/>)}
  <Label x={240} y={525} anchor="middle">Orange: undecayed nuclei</Label>
  <DataGraph x={475} y={85} w={600} h={425} xRange={[0,4]} yRange={[0,1]} xTicks={[0,1,2,3,4]} yTicks={[0,.5,1]} xLabel="Time (half-lives)" yLabel="Expected surviving fraction" points={Array.from({length:81},(_,i)=>[i/20,remaining(i/20)] as [number,number])} progress={clamp(progress)}/>
  <Note>Deterministic sample of a stochastic population. Grey marks are decay products, not lost matter.</Note>
 </g>;
};

export const ParticleInteractions: React.FC<VisualProps> = ({progress}) => {
 const p=clamp(progress), incoming=phase(p,0,.45), outgoing=phase(p,.45,1),separation=20+160*outgoing;
 return <g>
  <Label x={40} y={42} weight={750}>Annihilation conserves charge, energy and momentum</Label>
  <g opacity={p<.45?1:0}><Dot x={150+270*incoming} y={180} r={18} color={C.blue}/><Label x={100} y={130} color={C.blue}>Electron e⁻</Label></g>
  <g opacity={p<.45?1:0}><Dot x={690-270*incoming} y={180} r={18} color={C.rose}/><Label x={630} y={130} color={C.rose}>Positron e⁺</Label></g>
  <g opacity={p>=.45?1:0}>
   <Dot x={420-separation} y={180} r={8}/><Dot x={420+separation} y={180} r={8}/>
   <Arrow x1={420-separation} y1={180} x2={420-separation-55} y2={180} color={C.orange}/>
   <Arrow x1={420+separation} y1={180} x2={420+separation+55} y2={180} color={C.orange}/>
   <Label x={420} y={130} anchor="middle" color={C.orange}>Two photons</Label>
   <Label x={480} y={235} color={C.orange}>Equal, opposite photon momenta</Label>
  </g>
  <Label x={40} y={330} weight={750}>Quark content fixes the nucleon's charge</Label>
  {[{x:230,title:'Proton: uud',q:['u','u','d'],sum:'+1e'},{x:640,title:'Neutron: udd',q:['u','d','d'],sum:'0'}].map(n=><g key={n.title} transform="translate(0 -20)">
   <ellipse cx={n.x} cy={435} rx={155} ry={70} fill={C.tint} stroke={C.rule} strokeWidth={3}/>
   {n.q.map((q,i)=><g key={i}><Dot x={n.x-90+i*90} y={430} r={24} color={C.blue}/><Label x={n.x-90+i*90} y={440} size={32} anchor="middle" color="#fff">{q}</Label><Label x={n.x-90+i*90} y={485} size={32} anchor="middle">{q==='u'?'+⅔':'−⅓'}</Label></g>)}
   <Label x={n.x} y={544} anchor="middle">{n.title}: {n.sum}</Label>
  </g>)}
  <Label x={880} y={380} size={32}>Strong: gluons</Label><Label x={880} y={425} size={32}>EM: photons</Label><Label x={880} y={470} size={32}>Weak: W, Z</Label>
  <Note>Schematics. Pair initially at rest as a whole. Gravity lies outside the Standard Model.</Note>
 </g>;
};

export const AcceleratorDetector: React.FC<VisualProps> = ({progress}) => {
 const p=clamp(progress), a=-Math.PI/2+Math.PI*2*phase(p,0,.7),x=260+150*Math.cos(a),y=265+150*Math.sin(a);
 return <g>
  <Label x={40} y={42} weight={750}>Electric fields add energy; magnetic fields steer</Label>
  <circle cx={260} cy={265} r={150} stroke={C.rule} strokeWidth={28} fill="none"/>
  {[0,1,2,3].map(i=><rect key={i} x={240} y={100} width={40} height={30} fill={C.blue} transform={`rotate(${i*90} 260 265)`}/>)}
  <rect x={385} y={235} width={55} height={60} fill={C.tint} stroke={C.orange} strokeWidth={4}/>
  <Dot x={x} y={y} r={12}/>
  <Arrow x1={x} y1={y} x2={x-55*Math.cos(a)} y2={y-55*Math.sin(a)} color={C.blue}/>
  <Label x={60} y={475} color={C.blue}>B bends the path</Label>
  <Label x={335} y={525} color={C.orange} anchor="middle">RF cavity: E does work</Label>
  <Arrow x1={440} y1={265} x2={535} y2={265} color={C.orange}/>
  {[{r:205,c:C.rule},{r:155,c:C.rose},{r:110,c:C.orange},{r:65,c:C.blue}].map(({r,c})=><circle key={r} cx={805} cy={285} r={r} fill="none" stroke={c} strokeWidth={22}/>)}
  <Line d="M805,285 Q850,200 915,220" p={phase(p,.65,.8)} color={C.ink}/>
  <Line d="M805,285 L945,390" p={phase(p,.65,.85)} color={C.rose}/>
  <Line d="M805,285 Q745,330 665,400 L605,425" p={phase(p,.7,1)} color={C.blue}/>
  <Label x={805} y={80} anchor="middle">Detector cross-section</Label>
  <Label x={805} y={545} anchor="middle">Tracker, calorimeters, muon system</Label>
  <Note>Detector responses depend on particle type and energy.</Note>
 </g>;
};

export const module8Visuals: PhysicsVisual[] = [
 {id:'m8-expansion',title:'Expanding space and Hubble relation',focus:'Expand comoving separations and stretch a light wave, then connect distance to recession speed.',siteLessons:[1,2,3],entry:'Wavelength and graph gradients.',limits:['Local illustrative Hubble law, not a high-redshift distance calculator.','No CMB scattering or primordial-abundance mechanism.'],component:Expansion},
 {id:'m8-stellar-evolution',title:'Mass-dependent stellar branches',focus:'Distinguish a Sun-like path from a massive-star core-collapse path.',siteLessons:[6,10],entry:'Gravity attracts matter; fusion releases energy.',limits:['No universal remnant mass boundary.','No Type Ia mechanism or pulsar beam geometry; red-dwarf evolution omitted.'],component:StellarEvolution},
 {id:'m8-hr-diagram',title:'HR regions and a stellar path',focus:'Locate populations on temperature and luminosity axes and show a conceptual post-main-sequence track.',siteLessons:[6,8,10],entry:'Luminosity is emitted power, not apparent brightness.',limits:['Illustrative positions, not observed data or calibrated evolutionary tracks.','No cluster turn-off dating or radius calculation.'],component:HRDiagram},
 {id:'m8-spectra',title:'Absorption and radial redshift',focus:'Place cooler gas between a hot source and a dispersed spectrum, then shift a fixed line pattern.',siteLessons:[2,3,9],entry:'Light contains wavelengths; atoms absorb selected photon energies.',limits:['Schematic bands and lines, no element-specific wavelengths.','No OBAFGKM classification, emission-source mechanism or relativistic Doppler calculation.'],component:Spectra},
 {id:'m8-nucleosynthesis',title:'Binding and element origins',focus:'Relate binding energy to broad fusion and fission energy directions, and distinguish element-producing environments.',siteLessons:[2,6,7,14],entry:'Nuclei contain protons and neutrons.',limits:['Iron-group maximum, not an exact Fe-56 maximum; Ni-62 has greater binding per nucleon.','Neutron capture is not shown step by step; no claim all supernovae provide the main r-process.','No reaction energetics or operational chain-reaction design.'],component:Nucleosynthesis},
 {id:'m8-rutherford',title:'Rare large-angle scattering',focus:'Contrast common nearly straight alpha paths with rare strong Coulomb deflections.',siteLessons:[11],entry:'Like electric charges repel.',limits:['Not a quantitative scattering simulation or measured frequency sample.','Nuclei enlarged; electron and neutron discovery experiments are not implemented.'],component:RutherfordScattering},
 {id:'m8-quantum-atom',title:'Hydrogen levels and probability density',focus:'Link a discrete downward energy change to a photon while distinguishing density from an electron trajectory.',siteLessons:[12,13],entry:'Photon energy is hf.',limits:['Rounded nonrelativistic hydrogen energies.','Density marks show a 2D slice of 1s probability per volume, not radial probability or repeated detections.','No uncertainty experiment, quantum-number catalogue or Bohr orbital dynamics.'],component:QuantumAtom},
 {id:'m8-decay-population',title:'Random decays and expected half-life curve',focus:'Show changing individual membership alongside an expected exponential population trend.',siteLessons:[15],entry:'Radioactive decay changes an unstable nucleus.',limits:['Deterministic stratified illustrative sample, not a prediction for individual nuclei.','No alpha/beta/gamma transformation or Q-value working.'],component:RadioactivePopulation},
 {id:'m8-particles',title:'Annihilation and nucleon charge',focus:'Show opposite photon momenta and sum the charges of valence quarks.',siteLessons:[16,17,18],entry:'Energy, momentum and charge are conserved.',limits:['No literal quark or photon sizes.','No complete Standard Model table, pair-production recoil or weak-decay mechanism.','Carrier labels name interactions; they do not animate virtual-particle exchange.'],component:ParticleInteractions},
 {id:'m8-accelerator',title:'Ring steering and layered detection',focus:'Separate electric acceleration from magnetic steering and show different schematic detector responses.',siteLessons:[19],entry:'A perpendicular force changes motion direction.',limits:['Ring not an LHC engineering layout; no timing or magnet ramp model.','Detector trajectories are schematic; no quantitative momentum reconstruction or missing-momentum inference.'],component:AcceleratorDetector},
];
