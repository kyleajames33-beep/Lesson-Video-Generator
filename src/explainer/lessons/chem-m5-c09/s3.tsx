import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, DrawPath, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {cues} from '../../cues';
import {BLUE, Bars9, Bath, CLIP_HEAT, Chip, EmptyBars9, EqualBrace, Fade, Flame, FracX, GivensCard, KMark, LN9, LogLine, No2Tube, Overlay, QKGap, QMarker, Ring, Sx, TEAL, TUBE9, Tag, Tick, lx, tubeGeom} from './parts';
import type {Term} from './parts';
import {HEAT, Heading, K100, K25, N2O4_DOT, N2O4_INK, NO2_INK, PLUS, QINK, kf, sc} from './common';
import {kDen, kNum} from './s1';

// ---------- 6. Four changes, only one moves K ----------
const S6 = 'four-changes';
const K7 = cues(sc(S6), {table: 'in a table', first3: 'The first three', addN: 'adding N two O four', squeeze: 'squeezing the container', catalyst: 'adding a catalyst', alone: 'leave K alone', heat: 'Heat the tube', diff: 'different amounts', changes: 'K changes', shift: 'A shift is Q moving', target: 'the target itself moving', only: 'Only temperature moves the target'});
const COLS = {doo: 500, moves: 840, k: 1500};
const ROWY = [410, 510, 610, 710];
/** A tiny line with a fixed or moving teal K pin and an ink Q diamond. */
const MiniLine: React.FC<{x: number; y: number; w: number; at: number; moveAt: number; k: [number, number]; q: [number, number]}> = ({x, y, w, at, moveAt, k, q}) => {
	const f = useCurrentFrame();
	const u = prog(f, moveAt, 36);
	const kx = x + w * (k[0] + (k[1] - k[0]) * u), qx = x + w * (q[0] + (q[1] - q[0]) * u);
	return (
		<Fade at={at}>
			<path d={`M${x},${y} L${x + w},${y}`} stroke={INK} strokeWidth={4} strokeLinecap="round" />
			<path d={`M${kx},${y - 4} L${kx - 12},${y - 28} Q${kx},${y - 38} ${kx + 12},${y - 28} Z`} fill={TEAL} stroke={INK} strokeWidth={2.5} strokeLinejoin="round" />
			<path d={`M${qx},${y + 12} L${qx + 12},${y + 26} L${qx},${y + 40} L${qx - 12},${y + 26} Z`} fill={QINK} />
		</Fade>
	);
};
export const SceneFourChanges: React.FC = () => {
	const f = useCurrentFrame();
	const g = tubeGeom(TUBE9.x, TUBE9.y, TUBE9.h);
	const rows = [
		{doo: 'add N_2O_4', moves: 'concentrations, Q', k: 'same', at: K7.addN},
		{doo: 'squeeze', moves: 'concentrations, Q', k: 'same', at: K7.squeeze},
		{doo: 'catalyst', moves: 'both rates, equally', k: 'same', at: K7.catalyst},
		{doo: 'heat', moves: 'the two rates, unequally', k: 'changes', at: K7.heat},
	];
	const hot = prog(f, K7.heat, 16);
	const gx = g.gas.cx, gy0 = g.gas.y0;
	return (
		<>
			<Heading text="Four changes, only one moves K" at={4} size={62} />
			<No2Tube {...TUBE9} clip={{src: CLIP_HEAT, at: K7.heat - 70, rate: 1}} />
			<Overlay>
				<Bath {...TUBE9} kind="hot" amount={hot} label="heated" />
			</Overlay>
			<Overlay>
				{/* one-beat icon by the tube for each row */}
				<Fade at={K7.addN} out={K7.squeeze - 4}>
					<circle cx={gx + 110} cy={gy0 + 40} r={18} fill={N2O4_DOT} stroke={INK} strokeWidth={3} />
					<Sx x={gx + 140} y={gy0 + 54} text="+" size={60} color={PLUS} at={K7.addN} />
				</Fade>
				<Fade at={K7.squeeze} out={K7.catalyst - 4}>
					<path d={`M${gx - 110},${gy0 + 260} L${gx - 50},${gy0 + 260} M${gx - 70},${gy0 + 240} L${gx - 48},${gy0 + 260} L${gx - 70},${gy0 + 280}`} fill="none" stroke={BLUE} strokeWidth={7} strokeLinecap="round" strokeLinejoin="round" />
					<path d={`M${gx + 110},${gy0 + 260} L${gx + 50},${gy0 + 260} M${gx + 70},${gy0 + 240} L${gx + 48},${gy0 + 260} L${gx + 70},${gy0 + 280}`} fill="none" stroke={BLUE} strokeWidth={7} strokeLinecap="round" strokeLinejoin="round" />
				</Fade>
				<Chip x={gx + 60} y={gy0 + 10} w={170} h={52} text="catalyst" size={32} at={K7.catalyst} out={K7.heat - 4} color={INK} />
				<Flame x={gx + 120} y={g.beaker.y1 - 20} at={K7.heat} s={0.9} />
				{/* the table */}
				<Sx x={COLS.doo} y={310} text="what you do" size={34} color={INK_SOFT} weight={600} at={K7.table} />
				<Sx x={COLS.moves} y={310} text="what moves" size={34} color={INK_SOFT} weight={600} at={K7.table} />
				<Sx x={COLS.k} y={310} text="K" size={34} color={INK_SOFT} weight={600} at={K7.table} />
				<DrawPath d={`M${COLS.doo - 20},332 L1840,332`} at={K7.table} dur={20} color={INK} width={3} />
				{rows.map((r, i) => (
					<g key={i}>
						<Fade at={r.at}>
							<rect x={COLS.doo - 20} y={ROWY[i] - 56} width={1360} height={84} rx={14} fill={i === 3 ? 'rgba(196,88,47,0.08)' : 'rgba(13,107,82,0.05)'} />
						</Fade>
						<Sx x={COLS.doo} y={ROWY[i]} text={r.doo} size={46} color={i === 3 ? HEAT : INK} hand at={r.at} />
						<Sx x={COLS.moves} y={ROWY[i]} text={r.moves} size={46} color={INK} hand at={r.at + 6} />
						<Sx x={COLS.k} y={ROWY[i]} text={r.k} size={46} color={i === 3 ? HEAT : TEAL} hand at={i === 3 ? K7.changes : r.at + 10} />
						{i < 3 ? <Tick x={COLS.k + 140} y={ROWY[i] - 14} at={K7.alone + i * 6} s={40} /> : null}
					</g>
				))}
				<Ring cx={COLS.k + 84} cy={ROWY[3] - 14} rx={110} ry={42} at={K7.changes + 6} color={AMBER} seed={5} width={5} />
				<Flame x={COLS.k + 230} y={ROWY[3] + 10} s={0.8} at={K7.changes + 10} />
				{/* shift against target */}
				<Sx x={COLS.doo} y={850} text="shift: Q moves" size={50} color={QINK} hand at={K7.shift} />
				<MiniLine x={1090} y={826} w={340} at={K7.shift} moveAt={K7.shift + 10} k={[0.62, 0.62]} q={[0.15, 0.62]} />
				<Sx x={COLS.doo} y={940} text="K changes: the target moves" size={50} color={TEAL} hand at={K7.target} />
				<MiniLine x={1090} y={916} w={340} at={K7.target} moveAt={K7.target + 10} k={[0.25, 0.8]} q={[0.25, 0.25]} />
				<DrawPath d={`M1470,800 L1490,800 L1490,960 L1470,960`} at={K7.only} dur={16} color={AMBER_INK} width={5} />
				<Sx x={1510} y={870} text="not the" size={44} color={AMBER_INK} hand at={K7.only + 8} />
				<Sx x={1510} y={918} text="same thing" size={44} color={AMBER_INK} hand at={K7.only + 12} />
				<Ring cx={COLS.doo + 60} cy={ROWY[3] - 14} rx={90} ry={44} at={K7.only + 16} color={AMBER} seed={8} width={5} />
			</Overlay>
		</>
	);
};

// ---------- 7a. Heating gives a new K, and Q is left behind ----------
const S7 = 'new-k';
const K8 = cues(sc(S7), {link: 'reaction quotient video', take: 'Take the tube settled', c1: '0.0329', c2: '0.0142', q: 'Q is 0.0142', sq: 'squared over', den: ['0.0329', 2], is: '0.0061', equal: 'equal to K', drop: 'drop it in boiling water', amounts: 'The amounts have not had time', still: 'Q is still', k49: '0.49', kNow: 'K is now', below: 'Q is below K'});
const CARD7 = {x: 400, y: 300, w: 560};
const W7 = 650;
export const SceneNewK: React.FC = () => {
	const f = useCurrentFrame();
	const hot = prog(f, K8.drop, 18);
	const kv = 10 ** kf(f, [[K8.k49 - 6, Math.log10(K25)], [K8.k49 + 8, Math.log10(K100)]]);
	const qNum: Term[][] = [[{t: 'NO_2', p: '2', at: K8.q, color: NO2_INK}]];
	const qDen: Term[][] = [[{t: 'N_2O_4', at: K8.q + 8, color: N2O4_INK}]];
	const vNum: Term[][] = [[{t: '0.0142', p: '2', br: false, at: K8.q + 16, pAt: K8.sq, color: NO2_INK}]];
	const vDen: Term[][] = [[{t: '0.0329', br: false, at: K8.den, color: N2O4_INK}]];
	return (
		<>
			<Heading text="Heating gives a new K" at={4} size={62} />
			<No2Tube {...TUBE9} brown={0} />
			<Overlay>
				<Bath {...TUBE9} kind="hot" amount={hot} label="100 °C" />
			</Overlay>
			<Overlay>
				<GivensCard x={CARD7.x} y={CARD7.y} w={CARD7.w} h={190} at={K8.take} lh={56} title="settled at 25 °C" lines={[
					{text: '[N_2O_4] = 0.0329 mol/L', at: K8.c1, ring: K8.c1 + 8},
					{text: '[NO_2] = 0.0142 mol/L', at: K8.c2, ring: K8.c2 + 8},
				]} />
				<Tag x={CARD7.x} y={510} w={360} text="amounts not changed yet" at={K8.amounts} color={AMBER_INK} size={32} />
				{/* Q working line */}
				<FracX cx={560} cy={660} size={46} num={qNum} den={qDen} barAt={K8.q} prefix="Q =" prefixAt={K8.q} hold={190} />
				<Sx x={W7 + 30} y={676} text="=" size={46} at={K8.q + 14} />
				<FracX cx={W7 + 190} cy={660} size={46} num={vNum} den={vDen} barAt={K8.q + 14} hold={220} />
				<Sx x={W7 + 320} y={676} text="= 0.0061" size={50} color={TEAL} at={K8.is} />
				<Tag x={W7 + 40} y={770} w={340} text="Q: no unit written" at={K8.den + 20} color={INK_SOFT} size={32} />
				{/* the log line: Q and K together, then K jumps */}
				<LogLine ln={LN9} at={8} size={26} />
				<KMark ln={LN9} value={K25} at={K8.k49 - 2} ghost label="" />
				<KMark ln={LN9} value={() => kv} at={K8.take} label={ff => (ff < K8.k49 + 4 ? 'K = 0.0061' : 'K = 0.49')} size={42} flash={K8.k49 + 8} />
				<QMarker ln={LN9} at={K8.is} value={K25} label="Q = 0.0061" side="mid" size={42} labelDy={-10} />
				<Ring cx={lx(K25, LN9)} cy={LN9.y + 128} rx={110} ry={40} at={K8.still + 10} out={K8.below} color={AMBER} seed={6} width={5} />
				<EqualBrace ln={LN9} v={K25} at={K8.equal} out={K8.drop} />
				<QKGap ln={LN9} at={K8.below} qx={lx(K25, LN9)} kx={lx(K100, LN9)} />
				<Fade at={K8.below + 6}>
					<Sx x={(lx(K25, LN9) + lx(K100, LN9)) / 2} y={LN9.y + 180} text="Q below K" size={52} color={AMBER_INK} anchor="middle" hand at={K8.below + 6} />
				</Fade>
			</Overlay>
		</>
	);
};

// ---------- 7b. Then the mixture moves to match ----------
const S8 = 'mixture-moves';
const K9 = cues(sc(S8), {qbelow: 'Q below K means', compared: 'compared with a tube settled', little: 'too little N O two', splits: 'splits faster than it forms', builds: 'builds up', climbs: 'Q climbs', reaches: 'reaches the new K', two: 'two steps', first: 'first K changes', then: 'then the mixture moves'});
const BARS8 = {x0: 1120, base: 920, bw: 100, gx: 220};
export const SceneMixtureMoves: React.FC = () => {
	const f = useCurrentFrame();
	const u = (ff: number) => kf(ff, [[K9.climbs, 0], [K9.reaches + 22, 1]]);
	const qv = 10 ** (Math.log10(K25) + (Math.log10(K100) - Math.log10(K25)) * u(f));
	const n2o4 = 0.0329 + (0.0082 - 0.0329) * u(f), no2 = 0.0142 + (0.0635 - 0.0142) * u(f);
	const reached = K9.reaches + 22;
	const fwd = kf(f, [[K9.splits, 120], [K9.splits + 20, 290], [K9.builds, 290], [reached, 200]]);
	const rev = kf(f, [[K9.splits, 120], [K9.splits + 20, 120], [K9.builds, 120], [reached, 200]]);
	const labels = {fwd: ['splitting', 'forward'] as [string, string], rev: ['joining', 'reverse'] as [string, string]};
	return (
		<>
			<Heading text="Then the mixture moves" at={4} size={62} />
			<No2Tube {...TUBE9} clip={{src: CLIP_HEAT, at: K9.builds - 168, rate: 0.6}} />
			<Overlay>
				<Bath {...TUBE9} kind="hot" amount={1} label="100 °C" />
			</Overlay>
			<Overlay>
				<GivensCard x={CARD7.x} y={CARD7.y} w={CARD7.w} h={190} at={-100} lh={56} title={f < reached ? 'now at 100 °C' : 'settled at 100 °C'} lines={[
					{text: `[N_2O_4] = ${n2o4.toFixed(4)} mol/L`, at: -100},
					{text: `[NO_2] = ${no2.toFixed(4)} mol/L`, at: -100},
				]} />
				<Fade at={K9.little} out={K9.reaches}>
					<Sx x={CARD7.x} y={560} text="too little NO_2 compared with" size={38} color={AMBER_INK} hand at={K9.little} />
					<Sx x={CARD7.x} y={606} text="a tube settled at 100 °C" size={38} color={AMBER_INK} hand at={K9.little + 6} />
				</Fade>
				<Sx x={CARD7.x} y={560} text="check: 0.0635^{2} ÷ 0.0082 = 0.49" size={34} color={TEAL} weight={600} at={reached + 6} />
				<Sx x={CARD7.x} y={612} text="settled amounts given; you can check" size={30} color={INK_SOFT} hand at={reached + 14} />
				<Sx x={CARD7.x} y={648} text="them with the ICE table from C6" size={30} color={INK_SOFT} hand at={reached + 18} />
				{/* log line: Q climbs to the new K */}
				<LogLine ln={LN9} at={-100} size={26} />
				<KMark ln={LN9} value={K100} at={-100} label="K = 0.49" size={42} flash={reached} />
				<QMarker ln={LN9} at={-100} value={() => qv} label={ff => (ff < reached ? 'Q' : 'Q = K')} side="mid" size={42} />
				<QKGap ln={LN9} at={-100} out={K9.climbs} qx={lx(K25, LN9)} kx={lx(K100, LN9)} />
				{/* the rates: splitting faster until they meet */}
				<EmptyBars9 x0={BARS8.x0} base={BARS8.base} bw={BARS8.bw} gx={BARS8.gx} at={6} out={K9.splits} labels={labels} />
				<Bars9 x0={BARS8.x0} base={BARS8.base} bw={BARS8.bw} gx={BARS8.gx} fwd={fwd} rev={rev} at={K9.splits} eq={prog(f, reached, 12)} labels={labels} />
				<Fade at={K9.splits + 14} out={K9.builds + 20}>
					<Sx x={BARS8.x0 + BARS8.bw / 2} y={BARS8.base - 320} text="splitting faster" size={42} color={BLUE} anchor="middle" hand at={K9.splits + 14} />
				</Fade>
				{/* two steps */}
				<Sx x={CARD7.x} y={800} text="1. K changes" size={60} color={TEAL} hand at={K9.first} />
				<Sx x={CARD7.x} y={890} text="2. Q moves to the new K" size={60} color={QINK} hand at={K9.then} />
			</Overlay>
		</>
	);
};
void AMBER_INK; void FONT_HAND; void Flame; void kDen; void kNum; void HEAT;
