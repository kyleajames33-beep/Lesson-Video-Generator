// Scene 1: g01's final frame (the rainwater tank beside the rate graph y = 2t e^(t²), the four demand chips,
// "Which integral?" and "Next: integral practice"; g01's exported G01FinalFrame) opens into four questions about one tank, each needing a
// different kind of integral answer (a number, a function, a positive total, an estimate).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {HandTag, SceneHeading, smooth} from '../../math/studio';
import {G01FinalFrame} from '../math-a12-g01/s3';
import {K1} from './cuemap';
import {BROWN, CARD, Chip, FONT_DISPLAY, FONT_HAND, GREY, INK, KR, RateGraph, Tank, rate} from './parts';

const lerp = (a: number, b: number, u: number) => a + (b - a) * u;
/** g01's rate-graph window (its final frame), kept through this scene so the join does not jump. */
const G01_WIN = {x: [-0.08, 1.12] as [number, number], y: [-0.4, 6.4] as [number, number]};
/** Layout at u (0: g01's final frame, TankBoard in ../math-a12-g01/s3; 1: this scene's tank, graph and question column). */
const lay = (u: number) => ({tx: lerp(90, 60, u), ty: lerp(250, 250, u), tw: lerp(300, 280, u), gx: lerp(470, 400, u), gy: lerp(150, 170, u), gw: lerp(1380, 760, u), gh: lerp(650, 580, u)});
const CHIPS = ['amount', 'function', 'area', 'estimate'];
/** g01's board as it continues into scene 1: the tank, the rate graph and the four demand chips. */
const Rig: React.FC<{u: number; level: number; gauge: number; chipOut?: readonly number[]}> = ({u, level, gauge, chipOut = [9e9, 9e9, 9e9, 9e9]}) => {
	const f = useCurrentFrame();
	const L = lay(u);
	return <>
		<Tank x={L.tx} y={L.ty} w={L.tw} level={4} max={8} water={level} gauge={{text: 'in tank: ? L', o: gauge}} />
		<RateGraph x={L.gx} y={L.gy} w={L.gw} h={L.gh} win={G01_WIN}>
			{m => <>
				<text x={m.p(0.42, 0)[0]} y={m.p(0, 4.6)[1]} textAnchor="middle" opacity={1 - u} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 44, fill: INK}} stroke={CARD} strokeWidth={8} paintOrder="stroke">y = 2t e^(t²),  0 ≤ t ≤ 1</text>
				<text x={m.p(1, 0)[0] - 30} y={m.p(1, rate(1))[1] + 8} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, fill: GREY}} stroke={CARD} strokeWidth={7} paintOrder="stroke">2e ≈ 5.44</text>
			</>}
		</RateGraph>
		<div style={{position: 'absolute', left: lerp(470, 500, u), top: lerp(840, 830, u), display: 'flex', gap: 22}}>
			{CHIPS.map((c, i) => <span key={c} style={{opacity: 1 - prog(f, chipOut[i], 12), fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 34, color: GREY, background: CARD, border: `3px solid ${GREY}`, borderRadius: 16, padding: '4px 20px 6px'}}>{c}</span>)}
		</div>
	</>;
};

type Q = {text: string; at: number; tag: string; grey?: boolean};
export const S01: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K1;
	const u = smooth(prog(fr, k.rain - 24, 40));
	const qs: Q[] = [
		{text: 'How much flows in from t = 0 to t = 1?', at: k.second, tag: 'a number'},
		{text: 'Find V(t), the volume at time t.', at: k.t, tag: 'a function'},
		{text: 'an area', at: k.area, tag: 'a positive total', grey: true},
		{text: 'a table of readings', at: k.table, tag: 'an estimate', grey: true},
	];
	const qY = [175, 345, 515, 655];
	return (
		<>
			{fr < 1 ? <G01FinalFrame /> : <>
				<Chip x={96} y={96} at={-300} out={4} size={34} color={BROWN}>Next: integral practice</Chip>
				<SceneHeading text="Which integral fits?" at={14} size={44} />
				<Rig u={u} level={prog(fr, k.rain, 14)} gauge={prog(fr, k.rain + 6, 12)} chipOut={qs.map(q => q.at)} />
				<HandTag x={lay(1).gx + 150} y={235} text="rate, not amount" at={k.fast} size={40} color={INK} />
				{qs.map((q, i) => {
					const o = prog(fr, q.at, 14), so = prog(fr, k.notSame + i * 10, 12);
					if (o < 0.01) return null;
					return <div key={i} style={{position: 'absolute', left: 1200, top: qY[i], width: 670, opacity: o, transform: `translateX(${(1 - smooth(o)) * 40}px)`, display: 'flex', gap: 16, alignItems: 'flex-start'}}>
						<div style={{flex: 'none', width: 56, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 72, lineHeight: 1, color: INK, opacity: so}}>∫</div>
						<div style={{flex: 1}}>
							<div style={{background: CARD, borderRadius: 16, borderLeft: `8px solid ${q.grey ? '#b5ab9b' : BROWN}`, boxShadow: '0 10px 24px rgba(60,45,20,0.10)', padding: '8px 20px 10px', fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 36, lineHeight: 1.25, color: q.grey ? GREY : INK}}>
								{q.text}{q.grey ? <span style={{fontFamily: FONT_HAND, fontSize: 32, marginLeft: 14, opacity: 1 - so}}>later in this video</span> : null}
							</div>
							<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 38, color: KR.ink, opacity: so, marginTop: 2, marginLeft: 8}}>{q.tag}</div>
						</div>
					</div>;
				})}
				<Chip x={700} y={190} at={-300} out={k.rain - 30} size={48} color={KR.ink}>Which integral?</Chip>
				<Chip x={1560} y={92} at={k.so} size={40} color={KR.ink}>Which integral?</Chip>
			</>}
		</>
	);
};
