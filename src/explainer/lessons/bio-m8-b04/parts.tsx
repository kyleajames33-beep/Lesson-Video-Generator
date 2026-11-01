import React from 'react';
import {useCurrentFrame} from 'remotion';
import {P} from './assets';
import {tw} from '../bio-m8-b01/parts';
import {PlateB,prog,vis,pbPt,DrawPath,TEAL,T} from '../bio-m8-b03/parts';
export * from '../bio-m8-b03/parts';
export const Pic:React.FC<{name:string;x:number;y:number;w:number;at?:number;out?:number;o?:number}>=({name,x,y,w,at=-100,out,o=1})=>{const f=useCurrentFrame();return <g opacity={vis(f,at,out,18)*o} transform={`translate(${(1-prog(f,at,24))*30},0)`}><PlateB p={P[name]} cx={x} cy={y} w={w}/></g>};
export const Pair:React.FC<{a:string;b:string;x:number;y:number;w:number;at:number;show?:number;out?:number}>=({a,b,x,y,w,at,show=-100,out})=>{const f=useCurrentFrame(),v=prog(f,at,32);return <g opacity={vis(f,show,out,20)}><PlateB p={P[a]} cx={x} cy={y} w={w} o={1-v}/><PlateB p={P[b]} cx={x} cy={y} w={w} o={v}/></g>};
export const Point:React.FC<{name:string;x:number;y:number;w:number;u:number;v:number;tx:number;ty:number;t:string;at:number;out?:number}>=({name,x,y,w,u,v,tx,ty,t,at,out})=>{const f=useCurrentFrame(),p=pbPt(P[name],x,y,w)(u,v);const labelW=Math.min(540,tw(t,30,true));const end:[number,number]=p[1]>ty+30?[tx+labelW/2,ty+18]:p[1]<ty-40?[tx+labelW/2,ty-38]:p[0]<tx?[tx-12,ty-12]:[tx+labelW+18,ty-12];return <g opacity={vis(f,at,out,14)}><DrawPath d={`M${p} L${end}`} at={at} color={TEAL} width={4}/><circle cx={p[0]} cy={p[1]} r={7} fill={TEAL}/><T x={tx} y={ty} t={t} at={at+12} w={560} s={30} c={TEAL}/></g>};
