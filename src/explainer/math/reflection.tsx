import React, {useId} from 'react';
import {FONT_DISPLAY, INK, BLUE} from '../kit';
import {graphTransform, ReadoutPanel} from './graphs';
export type ReflectionPoint = {x:number; y:number};
export const reflectPoint = (p:ReflectionPoint,s:number):ReflectionPoint => {
 if(!Number.isFinite(s)||s<0||s>1)throw new RangeError('Reflection progress must be in [0,1]');
 return {x:(1-s)*p.x+s*p.y,y:(1-s)*p.y+s*p.x};
};
export const reflectDirection = (m:number,s:number) => reflectPoint({x:1,y:m},s);
export type ReflectionLayerProps = {fn:(t:number)=>number; derivative:(t:number)=>number; domain:readonly[number,number]; point:number; run?:number; progress:number; width?:number; size?:number; range?:readonly[number,number]; sourceLabel?:string; reflectedLabel?:string; finalRows?:(point:ReflectionPoint,slope:number)=>readonly string[]};
/** Equal-unit square plot; one map carries curve, point, tangent and both legs. */
export const ReflectionLayer:React.FC<ReflectionLayerProps> = ({fn,derivative,domain,point,run=1,progress,width=760,size=620,range=[-3,5],sourceLabel="Source curve folding across y = x",reflectedLabel="Reflected curve",finalRows}) => {
 const id=useId().replace(/:/g,''),graph={x:range,y:range,width:size+126,height:size+120},t=graphTransform(graph),m=derivative(point),origin={x:point,y:fn(point)},corner={x:point+run,y:fn(point)},tip={x:point+run,y:fn(point)+m*run};
 if(!Number.isFinite(m)||m<=0)throw new RangeError('Positive finite tangent slope required');
 const map=(p:ReflectionPoint)=>{const q=reflectPoint(p,progress);return t.point(q.x,q.y);};
 const a=map(origin),b=map(corner),c=map(tip),d=reflectDirection(m,progress),carried=reflectPoint(origin,progress),slope=d.y/d.x,done=progress===1;
 const curve=Array.from({length:501},(_,i)=>{const x=domain[0]+(domain[1]-domain[0])*i/500;return map({x,y:fn(x)});});
 const path=curve.map((p,i)=>`${i?'L':'M'}${p.x},${p.y}`).join(' ');
 const text=(x:number,y:number,copy:string)=><text x={x} y={y} fill={INK} style={{fontFamily:FONT_DISPLAY,fontSize:23,fontWeight:600}}>{copy}</text>;
 const line=(p:ReflectionPoint,q:ReflectionPoint,color:string,w=3)=><line x1={p.x} y1={p.y} x2={q.x} y2={q.y} stroke={color} strokeWidth={w}/>;
 const lo=t.point(range[0],range[0]),hi=t.point(range[1],range[1]);
 return <svg width={width} height={width*(size+120)/(size+126)} viewBox={`0 0 ${size+126} ${size+120}`} role="img" aria-label="Reflection in y equals x with turning tangent triangle">
 <defs><clipPath id={id}><rect x={84} y={48} width={size} height={size}/></clipPath></defs>
 {[-2,-1,0,1,2,3,4].map(v=>{const p=t.point(v,v);return <g key={v}>{line(t.point(v,range[0]),t.point(v,range[1]),'#e2d9c9',1)}{line(t.point(range[0],v),t.point(range[1],v),'#e2d9c9',1)}{text(p.x-6,size+78,String(v))}{text(48,p.y+8,String(v))}</g>})}
 {line(t.point(0,range[0]),t.point(0,range[1]),'#766f64')}{line(t.point(range[0],0),t.point(range[1],0),'#766f64')}
 <g clipPath={`url(#${id})`}><path d={`M${lo.x},${lo.y} L${hi.x},${hi.y}`} stroke="#958b7d" strokeDasharray="8 8"/>
 <path d={path} fill="none" stroke={BLUE} strokeWidth={4}/>{line(map({x:point-run,y:origin.y-m*run}),map({x:point+run,y:origin.y+m*run}),'#8a5a12')}
 {line(a,b,'#a65f12',5)}{line(b,c,'#178079',5)}<circle cx={a.x} cy={a.y} r={7} fill="#8a5a12"/>
 {text((a.x+b.x)/2+10,(a.y+b.y)/2+24,done?`rise ${run}`:`across ${run}`)}{text((b.x+c.x)/2+12,(b.y+c.y)/2-12,done?`run ${m*run}`:`up ${m*run}`)}</g>
 {text(105,30,done?reflectedLabel:sourceLabel)}
 <ReadoutPanel graph={graph} x={carried.x} y={carried.y} gradient={slope} panelX={110} panelY={90} rows={done?(finalRows?.(carried,slope)??[]):[`fold progress = ${progress.toFixed(2)}`]}/>
 </svg>;
};
