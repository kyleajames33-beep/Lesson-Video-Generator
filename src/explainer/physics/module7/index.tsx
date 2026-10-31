import React from 'react';
import {Arrow,C,DataGraph,Dot,Label,Panel,PhysicsVisual,VisualProps,lerp} from '../course-kit';
import {ELECTRON_VOLT,PLANCK,clamp,doubleSlitIntensity,energyRatio,gamma,gratingIntensity,lorentz,malus,photoelectronEV,samples,shiftedWavelength,slitIntensity} from './model';

const Line:React.FC<{d:string;color?:string;dash?:string;width?:number}> = ({d,color=C.ink,dash,width=4})=><path d={d} stroke={color} strokeWidth={width} strokeDasharray={dash} fill="none" strokeLinecap="round"/>;
const wave=(x:number,y:number,w:number,a:number,cycles:number,phase:number)=>Array.from({length:161},(_,i)=>{const t=i/160;return `${i?'L':'M'}${x+w*t},${y-a*Math.sin(t*cycles*Math.PI*2-phase)}`;}).join(' ');
const caption=(text:string)=>{const words=text.split(' '),lines:string[]=[''];for(const word of words){const last=lines.length-1;if((lines[last]+' '+word).length>66)lines.push(word);else lines[last]+=(lines[last]?' ':'')+word;}return <g>{lines.map((line,i)=><Label key={i} x={550} y={lines.length>1?570+i*40:600} anchor="middle" size={32} color={C.muted}>{line}</Label>)}</g>;};

/** E is vertical; B uses conventional page-normal symbols. E cross B is right. */
export const ElectromagneticGeometry:React.FC<VisualProps>=({progress})=>{const p=clamp(progress),phase=p*2*Math.PI;return <g>
 <Label x={50} y={55} size={38}>Electric and magnetic fields travel together</Label>
 <Line d="M80,270H1000" color={C.rule}/>
 <Line d={wave(90,270,850,100,2,phase)} color={C.orange} width={6}/>
 {Array.from({length:17},(_,i)=>{const x=90+i*850/16,v=Math.sin(i/16*4*Math.PI-phase);return Math.abs(v)<.04?null:<g key={i}><circle cx={x} cy={270} r={Math.abs(v)*19} fill="white" stroke={C.blue} strokeWidth={3}/>{v>0?<circle cx={x} cy={270} r={Math.abs(v)*5} fill={C.blue}/>:<path d={`M${x-7*Math.abs(v)},${270-7*Math.abs(v)}l${14*Math.abs(v)},${14*Math.abs(v)}m${-14*Math.abs(v)},0l${14*Math.abs(v)},${-14*Math.abs(v)}`} stroke={C.blue} strokeWidth={3}/>}</g>;})}
 <Label x={80} y={135} color={C.orange}>E: vertical</Label><Label x={620} y={135} color={C.blue}>B: out • or in ×</Label>
 <Arrow x1={710} y1={415} x2={980} y2={415} label="travel"/>
 <Label x={80} y={435}>E ⟂ B ⟂ travel</Label><Label x={80} y={505}>c = fλ in vacuum</Label><Label x={620} y={505}>Ephoton = hf</Label>
 {caption('Fields are in phase. Symbol size shows |B|, not a second length scale.')}
 </g>;};

export const DoubleSlit:React.FC<VisualProps>=({progress})=>{const p=clamp(progress),coherent=p<.76,clip=React.useId().replace(/:/g,'');return <g><defs><clipPath id={clip}><rect x={320} y={150} width={398} height={340}/></clipPath></defs>
 <Label x={45} y={50} size={38}>{coherent?'Coherent slits create bright and dark fringes':'Path information removes the fringes'}</Label>
 <Label x={65} y={110}>Plane wave in</Label><Label x={355} y={110}>Slits</Label><Label x={790} y={110}>{coherent?'Coherent paths':'Path information'}</Label>
 {[90,155,220].map(x=><Line key={x} d={`M${x},165V465`} color={C.blue}/>)}
 <Line d="M320,150V270M320,290V350M320,370V485" width={10}/>
 {[280,360].map((sy,j)=><g key={sy} clipPath={`url(#${clip})`}>{Array.from({length:5},(_,i)=>{const r=35+i*65+p*55;return <path key={i} d={`M320,${sy-r}A${r},${r} 0 0 1 320,${sy+r}`} fill="none" stroke={j?C.blue:C.orange} strokeWidth={3} opacity={coherent?.55:.25}/>;})}</g>)}
 <rect x={720} y={150} width={18} height={340} fill={C.rule}/>
 {Array.from({length:160},(_,i)=>{const a=(i/159-.5)*4;return <rect key={i} x={750} y={150+i*340/160} width={200*doubleSlitIntensity(a,4,coherent)} height={340/160+1} fill={C.orange}/>;})}
 {coherent?<g><Label x={50} y={520}>Bright: Δpath = mλ</Label><Label x={590} y={520}>Dark: Δpath = (m + ½)λ</Label></g>:<Label x={550} y={520} anchor="middle">No coherent cross term: intensities add</Label>}
 {caption(coherent?'Equal, in-phase illumination. Bar length is relative intensity.':'Path information removes fringes. A broad envelope remains.')}
 </g>;};

export const DiffractionComparison:React.FC<VisualProps>=({progress})=>{const p=clamp(progress);const rows:[string,(x:number)=>number][]=[['One slit',slitIntensity],['Two slits',x=>doubleSlitIntensity(x)],['Six slits',x=>gratingIntensity(x)]];return <g>
 <Label x={40} y={48} size={38}>Adding slits sharpens the principal maxima</Label>
 {rows.map(([name,f],j)=><g key={name}><Label x={45} y={150+j*155}>{name}</Label><Line d={`M270,${190+j*155}H1030`} color={C.rule}/><path d={samples(-2,2,801,f).slice(0,Math.max(1,Math.floor(801*p))).map(([x,y],i)=>`${i?'L':'M'}${650+x*180},${190+j*155-y*100}`).join(' ')} fill="none" stroke={[C.orange,C.blue,C.green][j]} strokeWidth={3}/></g>)}
 {caption('Same slit width and spacing. Horizontal: a sin θ / λ. Peak-normalised.')}
 </g>;};

export const Polarisation:React.FC<VisualProps>=({progress})=>{const angle=90*clamp(progress),intensity=malus(1,angle),r=angle*Math.PI/180;return <g>
 <Label x={45} y={55} size={38}>The analyser passes one electric-field component</Label>
 <Label x={70} y={140}>Plane-polarised input</Label><Label x={630} y={140}>Rotating analyser</Label>
 <Arrow x1={80} y1={315} x2={1010} y2={315} color={C.rule}/>
 {[170,270,370].map(x=><g key={x}><Arrow x1={x} y1={390} x2={x} y2={240} color={C.orange}/></g>)}
 <ellipse cx={600} cy={315} rx={75} ry={145} fill={C.tint} stroke={C.ink} strokeWidth={3}/>
 <Line d={`M${600-65*Math.sin(r)},${315+125*Math.cos(r)}L${600+65*Math.sin(r)},${315-125*Math.cos(r)}`} color={C.blue} width={7}/>
 <Line d="M600,190V440" dash="7 8" color={C.rule}/>
 <Label x={700} y={215} color={C.blue}>θ = {Math.round(angle)}°</Label>
 <rect x={790} y={275} width={180} height={80} fill={C.orange} opacity={intensity}/>
 <Label x={720} y={430}>I / Iin = {intensity.toFixed(2)}</Label>
 <Label x={70} y={510}>I = Iin cos²θ</Label><Label x={490} y={510} size={32}>Unpolarised first filter: Iout = I₀/2</Label>
 {caption('Ideal filters. θ is the angle between the input E and analyser axes.')}
 </g>;};

const spectrumColors=['#6754a1','#4354a8','#217c9b','#3b814f','#ac871d','#c66d27','#ad453d'];
export const SpectraAndShift:React.FC<VisualProps>=({progress})=>{const z=.08*clamp(progress),rest=[410.2,434.0,486.1,656.3],px=(n:number)=>350+(n-380)/370*670;return <g>
 <Label x={40} y={50} size={38}>Match the pattern, then measure its shift</Label>
 {['Continuous','Emission','Absorption'].map((name,j)=><g key={name}><Label x={40} y={160+j*125}>{name}</Label><rect x={350} y={115+j*125} width={670} height={65} fill={j===1?C.ink:'white'}/>{j!==1&&spectrumColors.map((c,i)=><rect key={c} x={350+i*670/7} y={115+j*125} width={670/7+1} height={65} fill={c}/>)}{j!==0&&rest.map(n=><rect key={n} x={px(n)-3} y={115+j*125} width={6} height={65} fill={j===1?'#f7ded1':C.ink}/>)}</g>)}
 <Label x={40} y={500}>Receding gas</Label><Line d="M350,485H1020" color={C.rule}/>
 {rest.map(n=><g key={n}><Line d={`M${px(n)},460V505`} color={C.rule} dash="5 4"/><Line d={`M${px(shiftedWavelength(n,z))},455V510`} color={C.orange} width={5}/></g>)}
 <Label x={350} y={550}>380 nm</Label><Label x={1015} y={550} anchor="end">750 nm</Label>
 {caption(`λobserved = (1 + z) λrest. Here z = ${z.toFixed(3)}. Colours are schematic.`)}
 </g>;};

export const LightClock:React.FC<VisualProps>=({progress})=>{const p=clamp(progress),b=.6,g=gamma(b),d=180,trip=2*d*g,travel=b*trip,t=p*trip,xx=560+b*t,yy=p<.5?420-p*2*d:240+(p-.5)*2*d;return <g>
 <Label x={40} y={50} size={38}>A moving light clock has a longer light path</Label>
 <Label x={65} y={130}>Clock rest frame</Label><Label x={570} y={130}>Lab frame: v = 0.60c</Label>
 <Line d="M110,240H350M110,420H350" width={9}/><Line d="M230,420V240V420" color={C.orange} dash="9 8"/>
 <Dot x={230} y={p<.5?420-p*2*d:240+(p-.5)*2*d} r={12}/>
 <Line d={`M560,420L${560+travel/2},240L${560+travel},420`} color={C.orange} dash="9 8"/>
 <Line d={`M${xx-65},240H${xx+65}M${xx-65},420H${xx+65}`} width={9}/><Dot x={xx} y={yy} r={12}/>
 <Arrow x1={560} y1={470} x2={560+travel} y2={470} label="v Δt" color={C.blue}/>
 <Label x={80} y={520}>Δτ = 2d/c</Label><Label x={600} y={520}>Δt = γΔτ = 1.25Δτ</Label>
 {caption('Same pair of emission/return events. Panels show equal fractions of a tick.')}
 </g>;};

export const LengthMeasurement:React.FC<VisualProps>=({progress})=>{const beta=.8*clamp(progress),length=600/gamma(beta);return <g>
 <Label x={40} y={55} size={38}>Measure both ends at one lab time</Label>
 <Label x={70} y={145}>Rod rest frame</Label><rect x={280} y={170} width={600} height={70} rx={8} fill={C.tint} stroke={C.orange} strokeWidth={4}/>
 <Line d="M280,265H880M280,250V280M880,250V280" color={C.orange}/><Label x={580} y={310} anchor="middle">Proper length L₀</Label>
 <Label x={70} y={375}>Lab frame</Label><rect x={280} y={395} width={length} height={70} rx={8} fill={C.tint} stroke={C.orange} strokeWidth={4}/>
 {[280,280+length].map(x=><g key={x}><Line d={`M${x},385V480`} color={C.blue} dash="7 6"/><Dot x={x} y={430} color={C.blue} r={7}/></g>)}
 <Arrow x1={920} y1={425} x2={1030} y2={425} label="v"/>
 <Label x={280} y={520}>v/c = {beta.toFixed(2)}</Label><Label x={610} y={520}>L / L₀ = {(1/gamma(beta)).toFixed(2)}</Label>
 {caption('A coordinate measurement, not a photograph. Perpendicular height is unchanged.')}
 </g>;};

export const Simultaneity:React.FC<VisualProps>=({progress})=>{const beta=.6*clamp(progress),a=lorentz(-1,0,beta),b=lorentz(1,0,beta),px=(x:number)=>550+x*170,py=(ct:number)=>320-ct*170;return <g>
 <Label x={40} y={50} size={38}>Two frames disagree about simultaneous events</Label>
 <Line d="M260,320H850M550,500V115" color={C.ink}/><Label x={870} y={330}>x′</Label><Label x={560} y={125}>ct′</Label>
 <Line d="M380,490L720,150M380,150L720,490" color={C.rule} dash="7 7"/>
 <Line d={`M${px(a.x)},${py(a.ct)}L${px(b.x)},${py(b.ct)}`} color={C.blue}/>
 <Dot x={px(a.x)} y={py(a.ct)} color={C.orange}/><Dot x={px(b.x)} y={py(b.ct)} color={C.blue}/>
 <Label x={px(a.x)-20} y={py(a.ct)-25} anchor="end">A</Label><Label x={px(b.x)+20} y={py(b.ct)+35}>B</Label>
 <Label x={55} y={510}>In S: Δt = 0, Δx &gt; 0</Label><Label x={600} y={510}>In S′: Δt′ &lt; 0 for v &gt; 0</Label>
 {caption(`S′ moves right at ${beta.toFixed(2)}c. B is earlier. Axes use equal x′ and ct′ scales.`)}
 </g>;};

export const RelativisticEnergy:React.FC<VisualProps>=({progress})=>{const p=clamp(progress);return <g>
 <DataGraph x={35} y={25} w={650} h={515} xRange={[0,1]} yRange={[0,4]} xLabel="Speed v/c" yLabel="K / (mc²)" points={samples(0,.979,160,energyRatio)} progress={p}/>
 <path d={samples(0,1,100,x=>.5*x*x).slice(0,Math.max(1,Math.floor(p*100))).map(([x,y],i)=>`${i?'L':'M'}${123+x*526},${444-y*357/4}`).join(' ')} fill="none" stroke={C.blue} strokeWidth={4} strokeDasharray="8 7"/>
 <Label x={730} y={110} color={C.orange}>K = (γ − 1)mc²</Label><Label x={730} y={180} color={C.blue}>Classical: ½mv²</Label>
 <Label x={730} y={280}>E = γmc²</Label><Label x={730} y={350}>p = γmv</Label><Label x={730} y={440}>E² = (pc)² + (mc²)²</Label>
 {caption('m is invariant rest mass. The massive-particle curve never reaches v = c.')}
 </g>;};

export const PhotoelectricThreshold:React.FC<VisualProps>=({progress})=>{const p=clamp(progress),freq=(4+p*6)*1e14,work=2.2,threshold=work*ELECTRON_VOLT/PLANCK/1e14,k=photoelectronEV(freq,work),emitted=k!==null;return <g>
 <Label x={40} y={50} size={38}>A photon must supply the work function first</Label>
 <rect x={65} y={155} width={420} height={280} rx={100} fill="white" stroke={C.rule} strokeWidth={4}/>
 <Line d="M170,215V380M385,215V380" width={12}/><Label x={80} y={485}>Cathode</Label><Label x={350} y={485}>Collector</Label>
 <Arrow x1={85} y1={100} x2={170} y2={230} label="hf" color={C.blue}/>
 {emitted&&[0,.28,.56].map((q,i)=><Dot key={i} x={190+((p*2+q)%1)*170} y={265+i*35} r={8} color={C.orange}/>)}
 <Line d="M170,380V525H385V380"/><circle cx={278} cy={525} r={27} fill="white" stroke={C.ink} strokeWidth={3}/><Label x={278} y={536} anchor="middle">A</Label>
 <DataGraph x={540} y={110} w={520} h={410} xRange={[4,10]} yRange={[0,2]} xLabel="f (10¹⁴ Hz)" yLabel="Kmax (eV)" points={emitted?samples(threshold,10,120,f=>Math.max(0,photoelectronEV(f*1e14,work)??0)):[]} progress={clamp((freq/1e14-threshold)/(10-threshold))}/>
 <Label x={550} y={555}>{emitted?`Kmax = ${k.toFixed(2)} eV`:'No emission below threshold'}</Label>
 {caption(`φ = 2.20 eV. f = ${(freq/1e14).toFixed(2)} × 10¹⁴ Hz. Kmax = hf − φ.`)}
 </g>;};

export const module7Visuals:PhysicsVisual[]=[
 {id:'m7-em-geometry',title:'Electromagnetic geometry',focus:'Track in-phase perpendicular fields and rightward propagation.',siteLessons:[1,2,10],entry:'Transverse oscillation and wavelength.',limits:['A plane wave in vacuum, not a microscopic emission mechanism.','Symbol radii encode signed field amplitude; E and B use different display scales.','No numerical spectrum, medium boundary or inverse-square apparatus.'],component:ElectromagneticGeometry},
 {id:'m7-double-slit',title:'Double-slit coherence',focus:'Connect secondary wavefronts to fringe intensity and loss of coherence.',siteLessons:[3,10,20],entry:'Superposition and path difference.',limits:['Illustrative wavefront geometry and separate far-field intensity strip are not a common physical scale.','Identical finite slits, equal in-phase illumination, far field.','Which-path mode shows zero visibility without asserting two narrow bands.','No photon trajectories or which-path measurement mechanism.'],component:DoubleSlit},
 {id:'m7-diffraction',title:'Slit and grating patterns',focus:'Compare sinc envelope and increasingly narrow array maxima.',siteLessons:[4,10],entry:'Angle, wavelength, slit width and spacing.',limits:['Six slits illustrate an array, not the thousands in a commercial grating.','Each intensity pattern is separately peak-normalised.','No white-light ray dispersion or wavelength-measuring apparatus.'],component:DiffractionComparison},
 {id:'m7-polarisation',title:'Polariser and analyser',focus:'Rotate the analyser and track transmitted intensity.',siteLessons:[5,10],entry:'A transverse electric field and intensity.',limits:['Ideal lossless polarisers other than rejected component.','Intensity for a plane-polarised input; initial unpolarised factor is stated separately.','No Brewster-angle ray construction or three-filter chain.'],component:Polarisation},
 {id:'m7-spectra-shift',title:'Spectra and redshift',focus:'Match emission/absorption wavelengths, then shift all lines by one factor.',siteLessons:[9],entry:'Wavelength and photon energy.',limits:['Hydrogen visible Balmer lines rounded in nm; colours schematic.','Display is wavelength-linear, not frequency-linear.','z is a measured shift factor, not a claim that z=v/c at arbitrary speeds.','No pressure broadening, Hubble data or source apparatus.'],component:SpectraAndShift},
 {id:'m7-light-clock',title:'Light-clock geometry',focus:'Compare a vertical rest-frame round trip with a lab-frame diagonal round trip.',siteLessons:[11,12],entry:'Constant light speed and Pythagoras.',limits:['Inertial flat-spacetime example at 0.60c.','Same progress fraction spans different coordinate times in the two panels.','No twin turnaround, GPS gravity correction or muon decay statistics.'],component:LightClock},
 {id:'m7-length',title:'Simultaneous endpoint measurement',focus:'Contract only the dimension parallel to relative velocity.',siteLessons:[13],entry:'Proper length and Lorentz factor.',limits:['Coordinate measurement, not a photograph or physical squeezing.','Both lab endpoints measured simultaneously in the lab.','No barn doors, ladder collisions or muon evidence.'],component:LengthMeasurement},
 {id:'m7-simultaneity',title:'Lorentz event pair',focus:'Transform two spacelike events and see their unequal frame times.',siteLessons:[11,15],entry:'x and ct coordinates; inertial frame.',limits:['S-prime moves in positive x. B is the positive-x event and is earlier there.','Axes carry the same units and scale. Connecting line joins simultaneous-S events, not a trajectory.','No signal-reception timing or twin acceleration.'],component:Simultaneity},
 {id:'m7-energy',title:'Relativistic energy curve',focus:'Contrast classical and relativistic kinetic energy as speed approaches c.',siteLessons:[14],entry:'Kinetic energy and invariant mass.',limits:['Dimensionless vertical ratio K/(mc²), for nonzero invariant mass.','Curve stops below c; infinity is not a plotted data point.','No nuclear reaction mechanism, mass budget or accelerator apparatus.'],component:RelativisticEnergy},
 {id:'m7-photoelectric',title:'Photoelectric threshold',focus:'Show emission only when a photon clears the work-function threshold.',siteLessons:[10,16,20],entry:'Photon energy hf and work function.',limits:['Ideal collector with ammeter, no variable stopping-voltage circuit.','Electron dots represent emitted charge, not resolved quantum paths.','Graph is model prediction for a fictional 2.20 eV work function, not Millikan data.','Emission energies span 0 to Kmax; dots do not assign each electron Kmax.'],component:PhotoelectricThreshold},
];

