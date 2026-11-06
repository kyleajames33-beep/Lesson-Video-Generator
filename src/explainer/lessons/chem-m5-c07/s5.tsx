import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, DrawPath, Enter, FONT_DISPLAY, FONT_HAND, HandText, INK, INK_SOFT, prog} from '../../kit';
import {cues} from '../../cues';
import {AnswerTable, Arrow, Chip, Cross, Fade, MEOH_EQ, Overlay, Snowflake, Flame, Sx} from './parts';
import type {TRow} from './parts';
import {EqRow} from './s4';
import {Heading, COLD, COST, GREEN, HEAT, RATE, YIELD, kf, sc} from './common';

const clamp = (v: number, a = 0, b = 1) => Math.max(a, Math.min(b, v));
const TB = {x: 96, y: 224, labelW: 180, colW: 340, rowH: 190, size: 28, headSize: 36};
const RC = 1350; // right column x

/** A wrong-answer chip with a cross and a correcting line below it. */
const Wrong: React.FC<{y: number; chip: string; fix: string; at: number; crossAt: number; fixAt: number}> = ({y, chip, fix, at, crossAt, fixAt}) => (
	<g>
		<Chip x={RC} y={y} w={480} h={60} text={chip} size={28} at={at} color={INK_SOFT} cross={crossAt} />
		<Sx x={RC + 20} y={y + 104} text={fix} size={34} color={YIELD} hand at={fixAt} />
	</g>
);

// ---------- 10a. Feedback, temperature ----------
const F1 = 'feedback-temperature';
const K1 = cues(sc(F1), {temp: 'Temperature', heat: 'gives out heat', yc: 'raises the yield', at25: 'at 25 degrees', nocol: 'almost no collisions', tiny: 'the rates are tiny', at250: 'At 250 degrees', cat: 'the catalyst speeds', settles: 'where the mixture settles', w1: 'the catalyst increases', w1b: 'changes the speed', w2: 'If you said hotter', w2b: 'hotter also lowers'});
const crawl = (C: number, k: number) => (t: number) => C * (1 - Math.exp(-k * t));
export const SceneFeedbackTemp: React.FC = () => {
	const f = useCurrentFrame();
	const rows: TRow[] = [
		{label: 'Temperature', at: K1.temp, cells: [
			{text: 'exothermic: cooling shifts toward CH_3OH', at: K1.yc, tick: K1.yc + 40},
			{text: 'fewer collisions have enough energy', at: K1.nocol},
			{text: 'rate falls, so a middle temperature, about 250 C, plus a catalyst', at: K1.at250},
		]},
		{label: 'Pressure', at: -100, cells: [null, null, null]},
		{label: 'Removal', at: -100, cells: [null, null, null]},
	];
	// small inset: 25 C crawls to a high ceiling; 250 C reaches a lower ceiling sooner
	const ox = 1390, oy = 530, W = 400, Hh = 230;
	const px = (t: number) => ox + (t / 10) * W, py = (v: number) => oy - v * Hh;
	const path = (fn: (t: number) => number, upTo: number) => { let d = ''; const n = 60; for (let i = 0; i <= n; i++) { const t = (upTo * i) / n; d += `${i ? 'L' : 'M'}${px(t).toFixed(1)},${py(fn(t)).toFixed(1)} `; } return d; };
	const cool = crawl(0.95, 0.09), mid = crawl(0.5, 0.8);
	const u1 = 10 * clamp((f - K1.at25) / 150), u2 = 10 * clamp((f - K1.at250) / 90);
	return (
		<>
			<Heading text="Temperature" at={4} size={58} />
			<Overlay>
				<EqRow items={MEOH_EQ} x={640} y={140} size={42} at={-100} />
				<AnswerTable x={TB.x} y={TB.y} labelW={TB.labelW} colW={TB.colW} rowH={TB.rowH} size={TB.size} headSize={TB.headSize} rows={rows} headAt={[-100, -100, -100]} placeholders={-100} />
				{/* Quality fix (6 Nov): the question's two settings stay on the right until the 25 C inset replaces them. */}
				<Fade at={6} out={K1.at25 - 14}>
					<rect x={RC} y={236} width={480} height={150} rx={20} fill="#fffdf8" stroke={GREEN} strokeWidth={4} />
					<Sx x={RC + 24} y={282} text="the plant" size={32} color={GREEN} hand at={6} />
					<Sx x={RC + 24} y={340} text="about 250 C, 50 to 100 atm" size={34} color={INK} at={10} />
					<Sx x={RC + 24} y={376} text="copper-based catalyst" size={30} color={INK_SOFT} at={14} />
					<rect x={RC} y={420} width={480} height={130} rx={20} fill="#fffdf8" stroke={COST} strokeWidth={4} />
					<Sx x={RC + 24} y={466} text="the student's claim" size={32} color={COST} hand at={18} />
					<Sx x={RC + 24} y={522} text="25 C and 500 atm" size={36} color={INK} at={22} />
					<Snowflake x={RC + 400} y={505} s={0.8} />
				</Fade>
				<Fade at={K1.at25}>
					<path d={`M${ox},${oy - Hh - 14} L${ox},${oy} L${ox + W + 10},${oy}`} fill="none" stroke={INK} strokeWidth={4} strokeLinecap="round" />
					<Sx x={ox} y={oy - Hh - 28} text="methanol in the gas" size={26} color={INK_SOFT} at={K1.at25} />
					<Sx x={ox + W / 2} y={oy + 40} text="time in the reactor" size={26} color={INK_SOFT} anchor="middle" at={K1.at25} />
					<path d={`M${ox},${py(0.95)} L${ox + W},${py(0.95)}`} stroke={YIELD} strokeWidth={3} strokeDasharray="10 8" />
					<path d={`M${ox},${py(0.5)} L${ox + W},${py(0.5)}`} stroke={YIELD} strokeWidth={3} strokeDasharray="10 8" />
					<path d={path(cool, u1)} fill="none" stroke={RATE} strokeWidth={6} strokeLinecap="round" />
					<path d={path(mid, u2)} fill="none" stroke={RATE} strokeWidth={6} strokeLinecap="round" opacity={u2 > 0 ? 1 : 0} />
					<Sx x={ox + W - 4} y={py(0.95) - 10} text="25 C: high ceiling, but it crawls" size={26} color={COLD} anchor="end" hand at={K1.at25 + 10} />
					<Sx x={ox + 8} y={py(0.5) - 24} text="250 C: lower, but sooner" size={26} color={HEAT} hand at={K1.at250} />
				</Fade>
				<Wrong y={590} chip="the catalyst increases the yield" fix="speed, not destination: same ceiling" at={K1.w1} crossAt={K1.w1b + 30} fixAt={K1.w1b} />
				<Wrong y={740} chip="always hotter, because faster" fix="hotter lowers the ceiling" at={K1.w2} crossAt={K1.w2b + 30} fixAt={K1.w2b} />
				<Fade at={K1.cat} out={K1.w1}>
					<Sx x={RC} y={628} text="a catalyst speeds both directions," size={32} color={RATE} hand at={K1.cat} />
					<Sx x={RC} y={670} text="the settled mixture stays put" size={32} color={RATE} hand at={K1.settles} />
				</Fade>
			</Overlay>
		</>
	);
};

// ---------- 10b. Feedback, pressure and removal ----------
const F2 = 'feedback-pressure-removal';
const K2 = cues(sc(F2), {press: 'Pressure and removal', three: 'Three gas particles', shifts: 'squeezing shifts toward methanol', crowd: 'the crowding raises', f500: 'Five hundred atmospheres', costs: 'costs far more', leak: 'a leak is more dangerous', stops: 'the plant stops', cond: 'Condensing the methanol', away: 'takes it away', rev: 'the reverse rate stays low', fwd: 'shift runs forward again', w1: 'If you said pressure slows', crowds: 'it crowds the particles', w2: 'If you gave no reason', cs: 'add cost and safety'});
export const SceneFeedbackPressure: React.FC = () => {
	const f = useCurrentFrame();
	const rows: TRow[] = [
		{label: 'Temperature', at: -100, cells: [
			{text: 'exothermic: cooling shifts toward CH_3OH', at: -100, tick: -100},
			{text: 'fewer collisions have enough energy', at: -100},
			{text: 'rate falls, so a middle temperature, about 250 C, plus a catalyst', at: -100},
		]},
		{label: 'Pressure', at: K2.press, cells: [
			{text: '3 gas to 1: squeeze shifts toward CH_3OH', at: K2.shifts, tick: K2.shifts + 50},
			{text: 'more crowded, more collisions', at: K2.crowd},
			{text: '500 atm costs more and is less safe, so 50 to 100 atm', at: K2.costs},
		]},
		{label: 'Removal', at: K2.cond, cells: [
			{text: 'taking CH_3OH away: more is made in total', at: K2.away, tick: K2.away + 60},
			{text: 'reverse rate stays low, so forward stays ahead', at: K2.rev},
			null,
		]},
	];
	// the extra-ammonia and extra-cost bars, small, with the plant band and a cross at 500 atm
	const AX = 520, X0 = 1395, DX = 68;
	return (
		<>
			<Heading text="Pressure and removal" at={4} size={58} />
			<Overlay>
				<EqRow items={MEOH_EQ} x={800} y={140} size={42} at={-100} />
				<AnswerTable x={TB.x} y={TB.y} labelW={TB.labelW} colW={TB.colW} rowH={TB.rowH} size={TB.size} headSize={TB.headSize} rows={rows} headAt={[-100, -100, -100]} placeholders={-100} />
				<Chip x={RC} y={236} w={200} h={54} text="3 gas particles" size={28} at={K2.three} color="#2c3e78" />
				<Chip x={RC + 270} y={236} w={200} h={54} text="1 gas particle" size={28} at={K2.shifts} color="#2f8a5b" />
				<Arrow x1={RC + 214} y1={263} x2={RC + 258} y2={263} at={K2.shifts} color={GREEN} width={7} />
				<Fade at={K2.f500}>
					<path d={`M${RC},${AX} L${RC + 480},${AX}`} stroke={INK} strokeWidth={4} strokeLinecap="round" />
					<Sx x={RC} y={AX + 40} text="pressure, low to very high" size={26} color={INK_SOFT} at={K2.f500} />
					{[0, 1, 2, 3, 4, 5].map(i => {
						const gh = 130 * Math.pow(0.7, i), rh = 25 + 17 * i, x = X0 + i * DX;
						const gp = prog(f, K2.f500 + 8 + i * 6, 10);
						return (
							<g key={i}>
								<rect x={x - 25} y={AX - gh * gp} width={22} height={gh * gp} rx={3} fill={GREEN} stroke={INK} strokeWidth={2} />
								<rect x={x + 1} y={AX - rh * gp} width={22} height={rh * gp} rx={3} fill={COST} stroke={INK} strokeWidth={2} />
							</g>
						);
					})}
				</Fade>
				<Fade at={K2.stops}>
					<rect x={X0 + DX * 1.5 - 30} y={AX - 150} width={100} height={150} rx={10} fill="#f5c542" opacity={0.22} stroke={AMBER_INK} strokeWidth={3} strokeDasharray="8 6" />
					<Sx x={X0 + DX * 2 - 10} y={AX - 160} text="50 to 100 atm" size={28} color={AMBER_INK} anchor="middle" hand at={K2.stops} />
				</Fade>
				<Fade at={K2.f500 + 30}>
					<Sx x={RC + 480} y={AX + 40} text="500 atm" size={28} color={INK} anchor="end" hand at={K2.f500 + 30} />
					<Cross x={X0 + 5 * DX} y={AX - 76} at={K2.f500 + 40} s={20} />
				</Fade>
				<Wrong y={620} chip="pressure slows the reaction" fix="crowding raises the rate" at={K2.w1} crossAt={K2.crowds + 20} fixAt={K2.crowds} />
				<Wrong y={760} chip="no reason against the highest pressure" fix="add: cost and safety" at={K2.w2} crossAt={K2.cs + 20} fixAt={K2.cs} />
			</Overlay>
		</>
	);
};

// ---------- 11. Decision rule and handoff ----------
const D = 'decision-rule';
const KD = cues(sc(D), {so: 'So when a question', yw: 'the yield and why', rw: 'the rate and why', lw: 'what limits it', fwd: 'When the forward reaction', heat: 'gives out heat', cold: 'too slow when cold', apart: 'pull apart', comp: 'the plant compromises', takes: 'If it takes in heat', both: 'heat helps both', later: 'Later, K', next: 'Next'});
export const SceneDecision: React.FC = () => {
	const f = useCurrentFrame();
	const grey = prog(f, KD.takes, 14);
	return (
		<>
			<Heading text="Justify industrial conditions" at={4} size={60} />
			<Overlay>
				<Fade at={KD.so + 6}>
					<rect x={96} y={190} width={1728} height={230} rx={24} fill="#fffdf8" stroke="rgba(60,45,20,0.18)" strokeWidth={3} />
					<Sx x={140} y={256} text="Take one condition at a time:" size={52} hand at={KD.so + 8} />
				</Fade>
				<Chip x={140} y={296} w={500} h={80} text="yield, and why" size={46} at={KD.yw} color={GREEN} />
				<Chip x={680} y={296} w={500} h={80} text="rate, and why" size={46} at={KD.rw} color={RATE} />
				<Chip x={1220} y={296} w={560} h={80} text="what limits it" size={46} at={KD.lw} color={COST} />
				<Fade at={KD.fwd - 6}>
					<rect x={96} y={450} width={1728} height={330} rx={24} fill="#fffdf8" stroke="rgba(60,45,20,0.18)" strokeWidth={3} />
					<Sx x={140} y={520} text="Temperature: does the forward reaction give out heat" size={44} hand at={KD.fwd} />
					<Sx x={140} y={574} text="and run too slowly when cold?" size={44} hand at={KD.cold - 10} />
					<Sx x={140} y={650} text="If yes, yield and speed pull apart, so the plant compromises." size={46} color={AMBER_INK} hand at={KD.apart} />
					<g opacity={1}>
						<Sx x={140} y={730} text="If it takes in heat, heat helps both." size={44} color={grey > 0.5 ? INK_SOFT : INK} hand at={KD.takes} />
					</g>
				</Fade>
				{/* Quality fix (6 Nov): the memory-aid graph, small, fills the card: yield falls and speed rises with temperature,
				    drawn on "gives out heat" and "too slow when cold"; the crossing is marked on "compromises". */}
				<Fade at={KD.fwd}>
					<path d="M1390,470 L1390,736 L1800,736" fill="none" stroke={INK} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
					<Snowflake x={1420} y={762} s={0.55} />
					<Sx x={1595} y={772} text="temperature" size={28} color={INK_SOFT} anchor="middle" at={KD.fwd} />
					<Flame x={1770} y={756} s={0.55} />
				</Fade>
				<DrawPath d="M1400,500 C1520,510 1650,640 1790,712" at={KD.heat} dur={26} color={COLD} width={7} />
				<Sx x={1410} y={492} text="yield" size={38} color={COLD} hand at={KD.heat + 8} />
				<DrawPath d="M1400,712 C1540,706 1660,620 1790,500" at={KD.cold} dur={26} color={HEAT} width={7} />
				<Sx x={1790} y={492} text="speed" size={38} color={HEAT} anchor="end" hand at={KD.cold + 8} />
				<Fade at={KD.comp}>
					<circle cx={1596} cy={608} r={16} fill="#f5c542" stroke={AMBER_INK} strokeWidth={4} />
					<path d="M1596,626 L1596,736" stroke={AMBER_INK} strokeWidth={4} strokeDasharray="10 8" />
				</Fade>
				<Fade at={KD.later}>
					<rect x={118} y={822} width={16} height={46} rx={8} fill="#fffdf8" stroke={INK_SOFT} strokeWidth={4} />
					<circle cx={126} cy={874} r={16} fill={HEAT} stroke={INK_SOFT} strokeWidth={4} />
				</Fade>
				<Chip x={170} y={822} w={640} h={70} text="K and temperature: a later video" size={40} at={KD.later} color={INK_SOFT} />
				<Fade at={KD.next}>
					<path d="M830,880 q30,-60 60,-30 t60,-20" fill="none" stroke={GREEN} strokeWidth={6} strokeLinecap="round" />
				</Fade>
				<Chip x={980} y={822} w={780} h={70} text="Next: reading equilibrium graphs" size={42} at={KD.next} color={GREEN} />
			</Overlay>
		</>
	);
};

// ---------- 12. Key notes ----------
const rich = (text: string) => text.split(/(_\d)/).map((p, i) => p.startsWith('_') ? <sub key={i} style={{fontSize: '0.64em', lineHeight: 0}}>{p.slice(1)}</sub> : <span key={i}>{p}</span>);
// Quality fix (6 Nov): short one-line bullets replace six paragraphs.
export const NOTES = [
	'Yield: how much product the settled mixture holds. Rate: how soon it gets there.',
	'Forward reaction gives out heat: cooling raises the yield but slows both rates.',
	'So a middle temperature plus a catalyst (Haber: about 450 °C, iron).',
	'A catalyst makes the mixture settle sooner. It does not change the settled mixture.',
	'More pressure: higher yield (fewer gas particles) and faster. Cost and safety limit it (Haber: about 200 atm).',
	'Condense the product out and recycle the rest (Haber: over 95% overall).',
	'Justify a condition: yield and why, rate and why, what limits it.',
];
export const SceneNotes: React.FC = () => (
	<>
		<div style={{position: 'absolute', left: 96, top: 84}}><HandText text="Key notes: what to write in your book" at={2} size={64} cps={40} /></div>
		<div style={{position: 'absolute', left: 120, top: 180, width: 1690}}>
			{NOTES.map((n, i) => (
				<Enter key={i} at={34 + i * 10} style={{display: 'flex', gap: 22, marginBottom: 14}}>
					<div style={{flex: 'none', width: 16, height: 16, marginTop: 11, borderRadius: 999, background: AMBER}} />
					<div style={{fontFamily: FONT_DISPLAY, fontSize: 38, fontWeight: 500, color: INK, lineHeight: 1.2}}>{rich(n)}</div>
				</Enter>
			))}
		</div>
		<Enter at={96} style={{position: 'absolute', left: 96, top: 742, width: 1730}}>
			<div style={{background: '#fffdf8', border: '4px solid #0d6b52', borderRadius: 22, padding: '8px 30px 10px', boxShadow: '0 12px 28px rgba(60,45,20,0.10)'}}>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 30, color: INK_SOFT}}>Memory aid</div>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 54, color: INK, lineHeight: 1.06}}><span style={{color: '#0d6b52'}}>Haber is a compromise:</span> yield asks for cold, speed asks for hot.</div>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, color: INK, lineHeight: 1.1}}>Justify with three things: yield, rate, limit.</div>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 24, color: '#0d6b52', marginTop: 4}}>Holds when the forward reaction gives out heat and is too slow when cold. If it takes in heat, heat helps both.</div>
			</div>
		</Enter>
		<Enter at={110} style={{position: 'absolute', left: 1200, top: 92}}>
			<div style={{fontFamily: FONT_HAND, fontSize: 38, fontWeight: 700, color: AMBER_INK}}>Pause the video if you need more time to copy.</div>
		</Enter>
	</>
);
void DrawPath; void kf; void YIELD;
