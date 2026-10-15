import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, Enter, FONT_DISPLAY, FONT_HAND, HandText, INK, INK_SOFT, prog} from '../../kit';
import {cues} from '../../cues';
import {H2I2_EQ} from '../chem-m5-c06/board';
import {HotTube} from '../chem-m5-c06/parts';
import {LitArrows} from '../chem-m5-c08/parts';
import {toks} from '../chem-m5-c05/parts';
import {Arrow, BLUE, Chip, Fade, Flame, KMark, LogLine, Overlay, QKGap, QMarker, Ring, Sx, TEAL, Tick, UpDown, lx} from './parts';
import type {Ln} from './parts';
import {H2C, H2_INK, HEAT, Heading, QINK, kf, sc} from './common';
import {AttemptBoard, HI_TUBE, LNHI} from './s4';

// ---------- 10b. Extra check: the first line of the aid ----------
const X = 'feedback-extra-check';
const KX = cues(sc(X), {first: 'first line of the aid', back: 'Back at about 450', added: 'added more hydrogen', stay: 'stay at 49', because: 'because adding hydrogen', amounts: 'changes the amounts', notTemp: 'not the temperature', whatQ: 'What changes is Q', smaller: 'makes Q smaller', falls: 'Q falls below K', shifts: 'shifts right', use: 'use some of the extra', think: 'If you think K changed', separate: 'separate the two', means: 'a shift means Q moved', toward: 'toward K', itself: 'K itself did not move'});
export const SceneExtraCheck: React.FC = () => {
	const f = useCurrentFrame();
	const qv = 10 ** kf(f, [[KX.falls - 10, Math.log10(49)], [KX.falls + 10, Math.log10(20)], [KX.shifts, Math.log10(20)], [KX.use + 60, Math.log10(40)]]);
	const counts = {h: kf(f, [[KX.added, 3], [KX.added + 20, 7], [KX.shifts, 7], [KX.use + 60, 6]]), i: kf(f, [[KX.shifts, 3], [KX.use + 60, 2]]), hi: kf(f, [[KX.shifts, 8], [KX.use + 60, 10]])};
	const kx = lx(49, LNHI);
	return (
		<>
			<Heading text="Extra check: add hydrogen" at={4} size={62} />
			<Overlay>
				<AttemptBoard extraLine={{text: 'now: more H_2 added, same temperature', at: KX.added}} />
				<LitArrows items={H2I2_EQ} x={96} y={250} size={50} fwd={KX.shifts} />
				<HotTube x={HI_TUBE.x} y={HI_TUBE.y} counts={counts} />
				<Arrow x1={HI_TUBE.x + 260} y1={HI_TUBE.y + 60} x2={HI_TUBE.x + 150} y2={HI_TUBE.y + 120} at={KX.added} color={AMBER_INK} width={6} />
				<circle cx={HI_TUBE.x + 290} cy={HI_TUBE.y + 44} r={12} fill={H2C} stroke={H2_INK} strokeWidth={3} opacity={prog(f, KX.added, 10)} />
				<Sx x={HI_TUBE.x + 312} y={HI_TUBE.y + 56} text="+ H_2" size={38} color={AMBER_INK} hand at={KX.added} />
				{/* K holds at 49 while Q drops and climbs back */}
				<LogLine ln={LNHI} at={6} size={28} />
				<KMark ln={LNHI} value={49} at={10} label="K = 49" size={42} ring={KX.stay} ringOut={KX.whatQ} />
				<QMarker ln={LNHI} at={KX.whatQ} value={() => qv} label="Q" side="mid" size={42} />
				<Ring cx={1500} cy={LNHI.y + 130} rx={260} ry={40} at={KX.whatQ + 4} out={KX.smaller} color={AMBER} seed={3} width={4} />
				<QKGap ln={LNHI} at={KX.falls + 10} out={KX.use + 40} qx={lx(20, LNHI)} kx={kx} />
				<Sx x={1010} y={250} text="K stays at 49" size={40} color={TEAL} hand at={KX.stay + 6} />
				<Fade at={KX.smaller} out={KX.think - 6}>
					<Sx x={960} y={640} text="more H_2 in the reactants: Q smaller" size={42} color={QINK} hand at={KX.smaller} />
				</Fade>
				<Fade at={KX.shifts} out={KX.think - 6}>
					<Sx x={960} y={700} text="shifts right, uses some extra H_2" size={42} color={BLUE} hand at={KX.shifts} />
				</Fade>
				{/* the named wrong idea */}
				<Chip x={960} y={600} w={720} text="K changed because it shifted" size={40} at={KX.think} color={INK_SOFT} cross={KX.separate + 6} />
				<Sx x={960} y={760} text="a shift is Q moving;" size={50} color={QINK} hand at={KX.means} />
				<Sx x={960} y={824} text="K is the target" size={50} color={TEAL} hand at={KX.means + 20} />
				<Tick x={kx + 110} y={240} at={KX.itself} s={44} />
			</Overlay>
		</>
	);
};

// ---------- 11. Decision rule and handoff ----------
const D = 'decision-rule';
const KD = cues(sc(D), {temp: 'changes the temperature', ask: 'ask', take: 'take in heat', give: 'give it out', rule: 'use the rule', backwards: 'backwards', table: 'if a table shows', rising: 'K rising', takes: 'forward reaction takes in heat', next: 'Next', colour: 'colour reading'});
const LND: Ln = {y: 560, x0: 1320, x1: 1780, lo: -3, hi: 3};
/** Coded colourimeter: a box with a light beam through a cuvette to a detector. */
const Colourimeter: React.FC<{x: number; y: number; at: number}> = ({x, y, at}) => {
	const f = useCurrentFrame();
	const beam = prog(f, at + 10, 20);
	return (
		<Fade at={at}>
			<rect x={x} y={y} width={300} height={130} rx={18} fill="#eceae4" stroke={INK} strokeWidth={4} />
			<circle cx={x + 40} cy={y + 65} r={18} fill="#f6d77a" stroke={INK} strokeWidth={3} />
			<path d={`M${x + 58},${y + 65} L${x + 58 + 200 * beam},${y + 65}`} stroke="#f0b84a" strokeWidth={8} opacity={0.8} />
			<rect x={x + 130} y={y + 20} width={44} height={90} rx={6} fill="#c98a5c" fillOpacity={0.7} stroke={INK} strokeWidth={3} />
			<rect x={x + 250} y={y + 40} width={30} height={50} rx={6} fill={INK_SOFT} />
		</Fade>
	);
};
export const SceneDecision: React.FC = () => {
	const f = useCurrentFrame();
	const kv = 10 ** kf(f, [[KD.rising + 10, -2], [KD.rising + 50, 0.5]]);
	return (
		<>
			<Heading text="When the temperature changes" at={4} size={62} />
			<Overlay>
				<rect x={96} y={200} width={1100} height={250} rx={24} fill="#fffdf8" stroke={HEAT} strokeWidth={4} opacity={prog(f, KD.temp - 6, 12)} />
				<Sx x={136} y={282} text="Temperature changed?" size={58} color={HEAT} hand at={KD.temp} />
				<Sx x={136} y={356} text="Does the forward reaction" size={46} color={INK} hand at={KD.ask} />
				<Sx x={136} y={414} text="take in or give out heat?" size={46} color={INK} hand at={KD.take} />
				<Flame x={1060} y={400} s={1.2} at={KD.take} />
				<UpDown x={1110} y={404} dir="both" at={KD.give} color={TEAL} />
				{/* the rule */}
				<Sx x={136} y={540} text="takes in heat: heat it, K rises" size={48} color={BLUE} hand at={KD.rule} />
				<Sx x={136} y={612} text="gives out heat: heat it, K falls" size={48} color={AMBER_INK} hand at={KD.rule + 12} />
				{/* shown, not spoken */}
				<rect x={96} y={700} width={1100} height={150} rx={22} fill="#fffdf8" stroke="rgba(60,45,20,0.18)" strokeWidth={3} opacity={prog(f, KD.rule + 40, 12)} />
				<Sx x={136} y={760} text="Anything else changed?" size={40} color={INK_SOFT} hand at={KD.rule + 44} />
				<Sx x={136} y={816} text="K stays. Q moves." size={40} color={INK_SOFT} hand at={KD.rule + 50} />
				<Fade at={KD.rule + 50}>
					<path d="M620,790 L1000,790" stroke={INK} strokeWidth={4} strokeLinecap="round" />
					<path d="M880,786 L868,762 Q880,752 892,762 Z" fill={TEAL} stroke={INK} strokeWidth={2.5} />
					{(() => { const qx = 640 + 240 * prog(f, KD.rule + 60, 40); return <path d={`M${qx},${802} L${qx + 12},${816} L${qx},${830} L${qx - 12},${816} Z`} fill={QINK} />; })()}
				</Fade>
				{/* the rule run backwards */}
				<rect x={1260} y={200} width={580} height={430} rx={24} fill="#fffdf8" stroke={TEAL} strokeWidth={4} opacity={prog(f, KD.backwards - 6, 12)} />
				<Sx x={1290} y={262} text="run it backwards" size={42} color={TEAL} hand at={KD.backwards} />
				<Sx x={1300} y={338} text="T up" size={48} color={HEAT} hand at={KD.table} />
				<UpDown x={1440} y={348} dir="up" at={KD.table} color={HEAT} s={0.8} />
				<Sx x={1520} y={338} text="K up" size={48} color={TEAL} hand at={KD.rising} />
				<UpDown x={1650} y={348} dir="up" at={KD.rising} color={TEAL} s={0.8} />
				<Sx x={1290} y={420} text="so the forward reaction" size={38} color={INK} hand at={KD.takes} />
				<Sx x={1290} y={464} text="takes in heat" size={38} color={BLUE} hand at={KD.takes + 6} />
				<LogLine ln={LND} at={KD.rising} labels={false} />
				<KMark ln={LND} value={() => kv} at={KD.rising + 4} label="K" size={38} />
				{/* next */}
				<rect x={1260} y={660} width={580} height={300} rx={24} fill="#fffdf8" stroke={TEAL} strokeWidth={4} opacity={prog(f, KD.next - 6, 12)} />
				<Sx x={1290} y={724} text="Next:" size={56} color={TEAL} hand at={KD.next} />
				<Sx x={1290} y={784} text="finding K from measured colour" size={38} color={TEAL} hand at={KD.colour} />
				<Colourimeter x={1400} y={810} at={KD.colour} />
			</Overlay>
		</>
	);
};

// ---------- 12. Key notes ----------
const rich = (text: string) => toks(text).map((t, i) => t.k === 1 ? <sub key={i} style={{fontSize: '0.64em', lineHeight: 0}}>{t.s}</sub> : t.k === 2 ? <sup key={i} style={{fontSize: '0.64em', lineHeight: 0}}>{t.s}</sup> : <span key={i}>{t.s}</span>);
export const NOTES = [
	'Only a change in temperature changes the value of K. For a given equation at a fixed temperature, adding or removing a substance, changing the pressure or volume, or adding a catalyst does not change K.',
	'Why: heating speeds up both reactions, but the one that takes in heat (it needs harder collisions) speeds up more, so the rates balance again only at a new mixture, and K changes. A catalyst speeds up both by the same factor, so K does not change.',
	'If the forward reaction takes in heat (endothermic), K rises when heated and falls when cooled. If the forward reaction gives out heat (exothermic), K falls when heated and rises when cooled.',
	'A shift is Q moving toward K. A temperature change moves K first, then Q follows.',
	'Reading a table: K rising with temperature means the forward reaction is endothermic. K falling means it is exothermic.',
	'Reversing the equation flips K (K becomes one over K) and the heat sign. The bigger the heat of reaction, the bigger the change in K (N_2O_4: K grew about 80 times; H_2 + I_2: a slight fall).',
];
export const SceneNotes: React.FC = () => (
	<>
		<div style={{position: 'absolute', left: 96, top: 76}}><HandText text="Key notes: what to write in your book" at={2} size={60} cps={40} /></div>
		<div style={{position: 'absolute', left: 120, top: 168, width: 1700}}>
			{NOTES.map((n, i) => (
				<Enter key={i} at={34 + i * 12} style={{display: 'flex', gap: 20, marginBottom: 14}}>
					<div style={{flex: 'none', width: 14, height: 14, marginTop: 11, borderRadius: 999, background: AMBER}} />
					<div style={{fontFamily: FONT_DISPLAY, fontSize: 32, fontWeight: 500, color: INK, lineHeight: 1.22}}>{rich(n)}</div>
				</Enter>
			))}
		</div>
		<Enter at={110} style={{position: 'absolute', left: 96, top: 760, width: 1730}}>
			<div style={{background: '#fffdf8', border: `4px solid ${TEAL}`, borderRadius: 22, padding: '8px 30px 10px', boxShadow: '0 12px 28px rgba(60,45,20,0.10)'}}>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 32, color: INK_SOFT}}>Memory aid</div>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 60, color: TEAL, lineHeight: 1.04}}>Change T, change K. Change anything else, K stays.</div>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 38, color: INK, lineHeight: 1.1}}>Use heat like a chemical only to find the direction: heat on the left, heating raises K. Heat on the right, heating lowers K.</div>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 26, color: TEAL, marginTop: 4}}>same equation as written; heat never goes in the K expression.</div>
			</div>
		</Enter>
		<Enter at={124} style={{position: 'absolute', left: 1180, top: 80}}>
			<div style={{fontFamily: FONT_HAND, fontSize: 38, fontWeight: 700, color: AMBER_INK}}>Pause the video if you need more time to copy.</div>
		</Enter>
	</>
);
void Fade; void FONT_HAND; void lx;
