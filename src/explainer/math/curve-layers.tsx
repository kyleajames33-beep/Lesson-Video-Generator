import React, {useId} from 'react';
import {graphTransform, sampleFunction, type GraphSpec} from './graphs';
import {FONT_DISPLAY, INK_SOFT} from '../kit';

/** Additional curves share their host graph's mathematical coordinates and clip. */
export const CurveLayer: React.FC<{graph: GraphSpec; fn: (x: number) => number; color: string; dashed?: boolean; opacity?: number; draw?: number}> = ({graph, fn, color, dashed, opacity = 1, draw = 1}) => {
 const t = graphTransform(graph), id = 'curve-' + useId().replace(/:/g, '');
 return <g opacity={opacity}><defs><clipPath id={id}><rect x={t.box.left} y={t.box.top} width={t.box.width * Math.max(0, Math.min(1, draw))} height={t.box.height}/></clipPath></defs><g clipPath={`url(#${id})`}>{sampleFunction({...graph, fn}).map((line, i) => <path key={i} d={line.map((v, k) => {const p = t.point(v.x, v.y); return `${k ? 'L' : 'M'}${p.x},${p.y}`;}).join(' ')} fill="none" stroke={color} strokeWidth={dashed ? 3 : 5} strokeDasharray={dashed ? '9 8' : undefined}/>)}</g></g>;
};

/** Decimal measurements live in a grey panel; symbolic algebra stays exact. */
export const HeightSlopeReadout: React.FC<{height: number; slope: number; ratio?: number; highlightHeight?: boolean; circleSlopeSign?: boolean}> = ({height, slope, ratio, highlightHeight, circleSlopeSign}) => <div style={{color: '#283c58', background: '#f0ede7', borderRadius: 10, padding: '16px 22px', fontFamily: FONT_DISPLAY, fontSize: 30, lineHeight: 1.5}}><div>height y: <span style={{background:highlightHeight?'#f2d393':undefined}}>{height.toFixed(2)}</span></div><div>gradient: <span style={{border:circleSlopeSign?'2px solid #8a5a12':undefined,borderRadius:'50%'}}>{slope<0?'−':''}</span>{Math.abs(slope).toFixed(2)}</div>{ratio !== undefined && <div>gradient = {Number.isInteger(ratio) ? ratio : ratio.toFixed(2)} × height</div>}</div>;
