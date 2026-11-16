// Lesson-local copy of the kit StudioToolPanel with a smaller input font (the full typed set-ups in scene 7 do not fit
// the kit's 40 px input line). Same look and behaviour otherwise; no shared file depends on it.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, prog} from '../../kit';
import {CARD_SHADOW, vis} from '../../math/studio';

export const ToolPanel: React.FC<{x: number; y: number; w?: number; title?: string; input: string; output: React.ReactNode; typeAt: number; outputAt: number; cps?: number; at?: number; out?: number; inputSize?: number}> = ({x, y, w = 760, title = 'calculator', input, output, typeAt, outputAt, cps = 18, at = 0, out, inputSize = 30}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 12);
	if (o <= 0.001) return null;
	const chars = Math.max(0, Math.min(input.length, Math.floor(((f - typeAt) / 30) * cps)));
	const typed = chars >= input.length;
	const working = typed && f < outputAt;
	return <div style={{position: 'absolute', left: x, top: y, width: w, opacity: o, background: '#2a2d31', borderRadius: 22, padding: '18px 26px 22px', boxShadow: CARD_SHADOW, boxSizing: 'border-box', border: '3px solid #4a4f55'}}>
		<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 28, letterSpacing: 2, textTransform: 'uppercase', color: '#a9b4ae'}}>{title}</div>
		<div style={{marginTop: 10, background: '#dfe8dc', borderRadius: 12, padding: '10px 18px', minHeight: 140, boxSizing: 'border-box'}}>
			<div style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: inputSize, color: '#1f2a24', whiteSpace: 'pre'}}>{input.slice(0, chars)}<span style={{opacity: !typed && Math.floor(f / 8) % 2 === 0 ? 1 : 0}}>|</span></div>
			<div style={{textAlign: 'right', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 52, color: '#1f2a24', whiteSpace: 'pre', minHeight: 60}}>
				{working ? <span style={{opacity: 0.4 + 0.6 * Math.abs(Math.sin(f * 0.25)), fontSize: 36}}>working…</span> : f >= outputAt ? <span style={{opacity: prog(f, outputAt, 10)}}>{output}</span> : null}
			</div>
		</div>
	</div>;
};
