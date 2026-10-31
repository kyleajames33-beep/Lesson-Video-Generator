import React from 'react';
import {FONT_DISPLAY, TOK} from '../../styles/tokens';

export const C = {ink: '#252a2d', muted: '#59636a', rule: '#cbd3d6', paper: TOK.bg, orange: TOK.phys1, tint: TOK.phys3, blue: '#176f88', rose: '#9a4d68', green: '#217554'};
export type VisualProps = {progress: number};
export type PhysicsVisual = {
  id: string; title: string; focus: string; siteLessons: number[];
  entry: string; limits: string[]; component: React.FC<VisualProps>; seconds?:number;
};
export const lerp = (a: number, b: number, p: number) => a + (b - a) * Math.max(0, Math.min(1, p));
export const Label: React.FC<{x: number; y: number; children: React.ReactNode; size?: number; color?: string; anchor?: 'start'|'middle'|'end'; weight?: number}> = ({x,y,children,size=34,color=C.ink,anchor='start',weight=500}) => <text x={x} y={y} fontFamily={FONT_DISPLAY} fontSize={size} fill={color} textAnchor={anchor} fontWeight={weight}>{children}</text>;
export const Arrow: React.FC<{x1:number;y1:number;x2:number;y2:number;color?:string;width?:number;label?:string}> = ({x1,y1,x2,y2,color=C.orange,width=6,label}) => {
  const angle = Math.atan2(y2-y1,x2-x1), length=Math.hypot(x2-x1,y2-y1), head=Math.min(18,length*.4);
  const bx=x2-head*Math.cos(angle),by=y2-head*Math.sin(angle),nx=-Math.sin(angle)*head*.45,ny=Math.cos(angle)*head*.45;
  return <g><path d={`M${x1},${y1}L${x2},${y2}`} stroke={color} strokeWidth={Math.min(width,length*.25)} fill="none" strokeLinecap="round"/><path d={`M${x2},${y2}L${bx+nx},${by+ny}L${bx-nx},${by-ny}Z`} fill={color}/>{label && <Label x={(x1+x2)/2} y={(y1+y2)/2-22} color={color} anchor="middle">{label}</Label>}</g>;
};
export const Panel: React.FC<{x:number;y:number;w:number;h:number;children?:React.ReactNode}> = ({x,y,w,h,children}) => <g><rect x={x} y={y} width={w} height={h} rx={18} fill="#fff" stroke={C.rule} strokeWidth={2}/>{children}</g>;
export const Dot: React.FC<{x:number;y:number;r?:number;color?:string}> = ({x,y,r=12,color=C.orange}) => <circle cx={x} cy={y} r={r} fill={color} stroke="#fff" strokeWidth={3}/>;
export const FieldGrid: React.FC<{x:number;y:number;w:number;h:number;direction:'in'|'out';color?:string}> = ({x,y,w,h,direction,color=C.blue}) => <g>{Array.from({length:20},(_,i)=>{const cx=x+(i%5+.5)*w/5,cy=y+(Math.floor(i/5)+.5)*h/4;return <g key={i} opacity={.5}><circle cx={cx} cy={cy} r={11} stroke={color} strokeWidth={2} fill="none"/>{direction==='out'?<circle cx={cx} cy={cy} r={3} fill={color}/>:<path d={`M${cx-5},${cy-5}l10,10m-10,0l10,-10`} stroke={color} strokeWidth={2}/>}</g>;})}</g>;
export type GraphBox={x:number;y:number;w:number;h:number;xRange:[number,number];yRange:[number,number]};
/** One coordinate map for curves, measurement intervals and annotations. */
export const graphScale=({x,y,w,h,xRange,yRange}:GraphBox)=>{
  const left=x+88,right=x+w-36,top=y+62,bottom=y+h-96;
  const px=(n:number)=>left+(n-xRange[0])/(xRange[1]-xRange[0])*(right-left),py=(n:number)=>bottom-(n-yRange[0])/(yRange[1]-yRange[0])*(bottom-top);
  return {left,right,top,bottom,px,py};
};
export const DataGraph: React.FC<GraphBox&{xLabel:string;yLabel:string;points:[number,number][];progress?:number;color?:string;xTicks?:number[];yTicks?:number[]}> = ({x,y,w,h,xRange,yRange,xLabel,yLabel,points,progress=1,color=C.orange,xTicks,yTicks}) => {
  const {left,right,top,bottom,px,py}=graphScale({x,y,w,h,xRange,yRange});
  const position=Math.max(0,Math.min(1,progress))*Math.max(0,points.length-1),whole=Math.floor(position),fraction=position-whole;
  const shown=points.slice(0,whole+1);
  if(fraction>0&&points[whole+1]) shown.push([lerp(points[whole][0],points[whole+1][0],fraction),lerp(points[whole][1],points[whole+1][1],fraction)]);
  const last=shown.at(-1);
  return <Panel x={x} y={y} w={w} h={h}>
    <Label x={x+24} y={y+39} size={30} color={color} weight={750}>{yLabel}</Label>
    <path d={`M${left},${top}V${bottom}H${right}`} stroke={C.ink} strokeWidth={3} fill="none"/>
    {yRange[0]<0&&yRange[1]>0&&<path d={`M${left},${py(0)}H${right}`} stroke={C.rule} strokeDasharray="8 7"/>}
    {(xTicks??[xRange[0],(xRange[0]+xRange[1])/2,xRange[1]]).map(n=><g key={n}><path d={`M${px(n)},${bottom}v8`} stroke={C.ink} strokeWidth={2}/><Label x={px(n)} y={bottom+36} size={30} anchor="middle">{Number(n.toPrecision(3))}</Label></g>)}
    {(yTicks??[yRange[0],yRange[1]]).map(n=><g key={n}><path d={`M${left-8},${py(n)}h8`} stroke={C.ink} strokeWidth={2}/><Label x={left-15} y={py(n)+10} size={30} anchor="end">{Number(n.toPrecision(3))}</Label></g>)}
    <Label x={(left+right)/2} y={bottom+78} size={30} anchor="middle">{xLabel}</Label>
    <path d={shown.map((p,i)=>`${i?'L':'M'}${px(p[0])},${py(p[1])}`).join(' ')} fill="none" stroke={color} strokeWidth={5} strokeLinecap="round"/>
    {last&&<Dot x={px(last[0])} y={py(last[1])} color={color} r={8}/>}
  </Panel>;
};
