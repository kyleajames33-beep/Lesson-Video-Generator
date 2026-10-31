import React from 'react';
import {Arrow,C,DataGraph,Dot,Label,Panel,graphScale,lerp,type GraphBox,type PhysicsVisual,type VisualProps} from '../../course-kit';
import {PRACTICAL,compatibleSlopes,fallTime,halfRange,mean,practicalPoints,speedFromSlope,selectedSlopeAt} from './model';

export const RepeatedRangeMeasurements:React.FC<VisualProps>=({progress:p})=>{
  const flight=Math.min(1,p/.3),t=flight*fallTime(PRACTICAL.height),cx=150+400*PRACTICAL.launchSpeed*t,cy=440-400*(PRACTICAL.height-.5*PRACTICAL.g*t*t);
  const count=p<.3?0:Math.min(5,1+Math.floor((p-.3)/.07)),done=p>=.65;
  const ruler=(x:number)=>660+(x-.78)/.06*350;
  return <g>
    <Label x={55} y={55} size={38} weight={750}>Repeat the range measurement.</Label>
    <path d="M50 120H150V440H50Z" fill="#eee8dc" stroke={C.rule} strokeWidth={3}/><path d="M50 440H550" stroke={C.ink} strokeWidth={4}/>
    <path d={Array.from({length:81},(_,i)=>{const q=fallTime(.8)*i/80;return `${i?'L':'M'}${150+800*q},${120+1960*q*q}`;}).join(' ')} fill="none" stroke={C.rule} strokeWidth={3} strokeDasharray="8 7"/>
    <Dot x={cx} y={cy} r={15}/>{flight<1&&<Arrow x1={cx+17} y1={cy} x2={cx+77} y2={cy} color={C.blue}/>}
    <Label x={55} y={490}>h = 0.800 m; u = 2.00 m/s</Label>
    <Panel x={615} y={85} w={445} h={430}/><Label x={640} y={130} size={32} weight={750}>Five simulated ranges x (m)</Label>
    <path d="M660 180H1010" stroke={C.ink} strokeWidth={3}/>
    {[.78,.81,.84].map(n=><g key={n}><path d={`M${ruler(n)} 173v14`} stroke={C.ink} strokeWidth={2}/><Label x={ruler(n)} y={167} size={28} anchor="middle">{n.toFixed(2)}</Label></g>)}
    {PRACTICAL.ranges.slice(0,count).map((x,i)=><g key={i}><Label x={640} y={220+i*43} size={29}>{i+1}</Label><Dot x={ruler(x)} y={212+i*43} r={8} color={C.blue}/><Label x={1035} y={220+i*43} size={29} anchor="end">{x.toFixed(3)}</Label></g>)}
    {done&&<g><path d={`M${ruler(Math.min(...PRACTICAL.ranges))} 447H${ruler(Math.max(...PRACTICAL.ranges))}`} stroke={C.rose} strokeWidth={5}/><Dot x={ruler(mean(PRACTICAL.ranges))} y={447} r={9}/><Label x={640} y={490} size={30}>Mean = {mean(PRACTICAL.ranges).toFixed(3)} m</Label></g>}
    <Label x={55} y={550} size={31} color={C.muted}>{done?'Half-range = (0.818 − 0.798)/2 = 0.010 m':'Simulated readings. Motion is slowed; g = 9.8 m/s².'}</Label>
    {done&&<Label x={55} y={605} size={32} color={C.rose}>Mean ± half-range: x ≈ 0.808 ± 0.010 m.</Label>}
  </g>;
};

export const SlopeMeasurementIntervals:React.FC<VisualProps>=({progress:p})=>{
  const box:GraphBox={x:25,y:55,w:640,h:470,xRange:[0,1],yRange:[0,1.2]},s=graphScale(box),points=practicalPoints(),bounds=compatibleSlopes();
  const ready=p>=.4,selected=selectedSlopeAt(p),count=Math.min(5,1+Math.floor(p/.09));
  const line=(slope:number)=>`M${s.px(0)} ${s.py(0)}L${s.px(.9)} ${s.py(.9*slope)}`;
  return <g>
    <Label x={45} y={37} size={34} weight={750}>Measurement intervals allow a range of slopes.</Label>
    <DataGraph {...box} xLabel="Range squared x² (m²)" yLabel="Drop h (m)" points={[]} xTicks={[0,.5,1]} yTicks={[0,.6,1.2]}/>
    {points.slice(0,count).map(q=><g key={q.h}>
      <rect x={s.px(q.x2lo)} y={s.py(q.hhi)} width={s.px(q.x2hi)-s.px(q.x2lo)} height={s.py(q.hlo)-s.py(q.hhi)} fill={C.blue} opacity={.12}/>
      <path d={`M${s.px(q.x2lo)} ${s.py(q.h)}H${s.px(q.x2hi)}M${s.px(q.x2)} ${s.py(q.hlo)}V${s.py(q.hhi)}`} stroke={C.blue} strokeWidth={3}/><Dot x={s.px(q.x2)} y={s.py(q.h)} r={6} color={C.blue}/>
    </g>)}
    {ready&&<g><path d={`${line(bounds.low)}L${s.px(.9)} ${s.py(.9*bounds.high)}Z`} fill={C.orange} opacity={.1}/><path d={line(bounds.low)} stroke={C.rule} strokeWidth={3} fill="none"/><path d={line(bounds.high)} stroke={C.rule} strokeWidth={3} fill="none"/><path d={line(selected)} stroke={C.orange} strokeWidth={5} fill="none"/></g>}
    <Label x={710} y={125} size={34} weight={750}>h = s x²</Label><Label x={710} y={205} size={32}>s is the graph's slope.</Label>
    {ready&&<g><Label x={710} y={285} size={34} color={C.orange}>s = {selected.toFixed(3)} m⁻¹</Label><Label x={710} y={365} size={36}>u = √(g / 2s)</Label><Label x={710} y={435} size={36} color={C.orange}>u = {speedFromSlope(selected).toFixed(2)} m/s</Label></g>}
    <Label x={710} y={500} size={30}>g = 9.8 m/s²</Label>
    <Label x={55} y={565} size={30} color={C.muted}>Simulated data. ±0.01 m in range; ±0.02 m in drop.</Label><Label x={55} y={610} size={30} color={C.muted}>Assume the line passes through the origin.</Label>
  </g>;
};

export const practicalDetailVisuals:PhysicsVisual[]=[
  {id:'m5-repeat-measurements',title:'Repeated range measurements',focus:'Compare repeated readings before assigning a range and its uncertainty.',siteLessons:[5],entry:'Horizontal launch, range and a mean.',limits:['Five readings are simulated; mean plus or minus half-range is an illustrative spread estimate, not a confidence interval or full instrument budget.','The same launch is shown once; the reading list represents simulated repeats.'],component:RepeatedRangeMeasurements,seconds:16},
  {id:'m5-slope-intervals',title:'Uncertainty in a projectile graph',focus:'Compatible slopes produce a range of inferred launch speeds.',siteLessons:[5],entry:'Graph slope and the horizontal-launch relation h = gx²/(2u²).',limits:['Measurements are simulated and centred on the ideal model; intervals are illustrative bounds.','Zero intercept is imposed by the model. No least-squares fit, systematic-error model or confidence level is asserted.'],component:SlopeMeasurementIntervals,seconds:24},
];
