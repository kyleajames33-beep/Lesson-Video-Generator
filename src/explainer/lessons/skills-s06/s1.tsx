// S06 scenes 1 to 3: the hook (a gas graph writes on; twelve report tiles, eleven red flags and nine amber flags; a
// dashed "?" stub past the last point); read the axes (the graph enlarges, labels light, one small square on each
// axis, a teal read-off at 50 s, the half-square inset, "28 mL" against a crossed "28"); the worked question card
// (E. coli resistance, four demands, full size with the blank grid and answer slots, the 10 s countdown).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, AnswerBox, Chip, CrossedHabit, DrawPath, DrillCountdown, Flag, GREY_INK, GreyTag, Heading, INK, Overlay, QuestionCard, RoutineStrip, T, TEAL, ZONE, answerGeom,
	cardGeom, lerp, plateW, prog, smooth, vis,
} from './kit';
import type {AnsSpec} from './kit';
import {ClipPlate} from '../skills-s05/pieces';
import {ROD, SX, fullSpec, hold, sc} from './common';
import type {Grid} from './common';
import {AmberFlag, AxesInk, AxisLabel, GridPaper, PathLine, ReadOff, Ticks, Tile, VIOLET, XMark} from './pieces';

const ALL4 = [-100, -100, -100, -100];
// ---------- the gas graph (hook and read-axes): 10 s and 2 mL per square ----------
const vol = (t: number) => 40 * (1 - Math.exp(-t / 41.5));
const GT = [20, 40, 60, 100, 160], GV = [15, 25, 31, 36, 39];
const gxOf = (g: Grid, t: number) => g.x + (t / 10) * g.s;
const gyOf = (g: Grid, v: number) => g.y + g.ny * g.s - (v / 2) * g.s;
const curvePts = (g: Grid, t0: number, t1: number) => Array.from({length: 21}, (_, i) => { const t = t0 + ((t1 - t0) * i) / 20; return [gxOf(g, t), gyOf(g, vol(t))] as [number, number]; });
const GasGraph: React.FC<{g: Grid; at: number; lineAt: number; labels?: {x: number; y: number; xc?: string; yc?: string}; o?: number}> = ({g, at, lineAt, labels, o = 1}) => (
	<g opacity={o}>
		<GridPaper g={g} at={at} />
		<AxesInk g={g} at={at + 6} />
		<Ticks g={g} axis="x" ticks={[0, 50, 100, 150, 200].map(t => ({pos: gxOf(g, t), label: `${t}`}))} at={at + 10} size={g.s * 0.8} />
		<Ticks g={g} axis="y" ticks={[0, 10, 20, 30, 40].map(v => ({pos: gyOf(g, v), label: `${v}`}))} at={at + 10} size={g.s * 0.8} />
		{labels ? <AxisLabel g={g} axis="x" text="Time (s)" at={labels.x} color={labels.xc ?? INK} size={g.s} off={g.s * 2.6} /> : null}
		{labels ? <AxisLabel g={g} axis="y" text="Volume (mL)" at={labels.y} color={labels.yc ?? INK} size={g.s} off={g.s * 2.4} /> : null}
		{GT.map((t, i) => <XMark key={i} x={gxOf(g, t)} y={gyOf(g, GV[i])} at={at + 16 + i * 4} s={g.s * 0.36} />)}
		<PathLine pts={curvePts(g, 0, 160)} at={lineAt} dur={26} color={INK} width={Math.max(3, g.s * 0.16)} />
	</g>
);

// ---------- 1. Hook ----------
const K1 = cues(sc('hook'), {graph: 'Graph questions', twelve: 'twelve', poorly: 'drawn or read poorly', nine: 'nine', numbers: 'numbers', read: 'read a graph', extend: 'extend'});
const TILES = [...Array.from({length: 6}, () => 'Chemistry'), ...Array.from({length: 6}, () => 'Biology')];
const RED_I = [6, 7, 8, 9, 10, 11, 0, 1, 2, 3, 4];
const AMB_I = [6, 7, 8, 9, 10, 11, 0, 1, 2];
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const g: Grid = {x: 760, y: 240, s: 21, nx: 20, ny: 20};
	const tilesO = vis(f, K1.twelve - 10, K1.extend, 12) + 0.3 * prog(f, K1.extend, 12);
	return (
		<>
			<Heading text="Graphs: read it, draw it, describe it" at={K1.extend + 8} size={56} />
			<Overlay>
				<GasGraph g={g} at={2} lineAt={30} labels={{x: 20, y: 24}} />
				{f >= K1.extend ? (
					<g>
						<PathLine pts={curvePts(g, 160, 200)} at={K1.extend} dur={16} color={GREY_INK} width={3.5} dash="8 7" />
						<Chip x={gxOf(g, 200) + 12} y={gyOf(g, vol(200)) - 60} text="?" at={K1.extend + 14} size={34} color={AMBER_INK} />
					</g>
				) : null}
				<g opacity={tilesO}>
					{TILES.map((t, i) => {
						const col = i % 6, row = Math.floor(i / 6);
						const x = 160 + col * 270, y = 770 + row * 96;
						const ri = RED_I.indexOf(i), ai = AMB_I.indexOf(i);
						return (
							<g key={i} opacity={prog(f, K1.twelve + i * 2, 10)}>
								<Tile x={x} y={y} w={240} h={80} top={t} bottom="feedback report" />
								{ri >= 0 ? <Flag x={x + 190} y={y + 32} at={K1.poorly + ri * 4} /> : null}
								{ai >= 0 ? <AmberFlag x={x + 218} y={y + 36} at={K1.numbers + ai * 4} s={0.9} /> : null}
							</g>
						);
					})}
				</g>
				<GreyTag x={960} y={970} text="research summary of NESA marking feedback, Chemistry and Biology 2020 to 2025: graph faults 11 of 12 reports; trends without values 9 of 12" at={K1.numbers + 20} out={K1.extend} size={20} anchor="middle" maxW={1700} />
				<g opacity={prog(f, K1.poorly, 10) * (1 - prog(f, K1.extend, 12))}>
					<Flag x={170} y={720} at={K1.poorly} /><T x={196} y={730} text="graphs drawn or read poorly: 11" size={24} weight={700} color={INK} />
				</g>
				<g opacity={prog(f, K1.numbers, 10) * (1 - prog(f, K1.extend, 12))}>
					<AmberFlag x={720} y={722} at={K1.numbers} /><T x={744} y={730} text="trends without the numbers: 9" size={24} weight={700} color={INK} />
				</g>
				{void K1.graph}{void K1.nine}{void K1.read}
			</Overlay>
		</>
	);
};

// ---------- 2. Read the axes ----------
const K2 = cues(sc('read-axes'), {axes: 'axes', measured: "what's measured", units: 'in what units', square: 'one small square', from: 'from the axis', across: 'across to the other', value: 'the value with', unit: ['unit', 1], half: 'half a small square', without: 'A number without', cost: 'cost the mark'});
export const SceneAxes: React.FC = () => {
	const f = useCurrentFrame();
	const m = smooth(prog(f, 0, 30));
	const g: Grid = {x: lerp(760, 470, m), y: lerp(240, 260, m), s: lerp(21, 28, m), nx: 20, ny: 20};
	const xLit = vis(f, K2.measured, K2.from, 10) > 0.5, yLit = xLit;
	const sq = {x: g.x, y: g.y + 19 * g.s};
	const yRead = gyOf(g, vol(50));
	const unitOn = f >= K2.unit;
	const I = {x: 1590, y: 590, r: 110};
	return (
		<>
			<Heading text="Graphs: read it, draw it, describe it" at={-200} size={56} />
			<Overlay>
				<GasGraph g={g} at={-100} lineAt={-100} labels={{x: K2.axes, y: K2.axes + 8, xc: xLit ? VIOLET : INK, yc: yLit ? AMBER_INK : INK}} />
				{/* one small square on each axis */}
				<g opacity={vis(f, K2.square, K2.from + 20, 10)}>
					<rect x={sq.x} y={sq.y} width={g.s} height={g.s} fill={AMBER} opacity={0.35} />
					<DrawPath d={`M${g.x},${g.y + g.ny * g.s + 46} l0,-8 l${g.s},0 l0,8`} at={K2.square} dur={10} color={VIOLET} width={3} />
					<DrawPath d={`M${g.x - 50},${sq.y} l8,0 l0,${g.s} l-8,0`} at={K2.square + 6} dur={10} color={AMBER_INK} width={3} />
				</g>
				<Chip x={SX} y={290} text="1 square = 10 s" at={K2.square + 4} size={32} color={VIOLET} />
				<Chip x={SX} y={370} text="1 square = 2 mL" at={K2.square + 12} size={32} color={AMBER_INK} />
				<ReadOff x={gxOf(g, 50)} y={yRead} base={g.y + g.ny * g.s} x0={g.x} at={K2.from} />
				<Chip x={g.x + 10} y={yRead - 62} text={unitOn ? '28 mL' : '28'} at={K2.across + 20} size={unitOn ? 34 : 30} color={TEAL} />
				{/* the half-square inset */}
				<g opacity={vis(f, K2.half - 4, undefined, 12)}>
					<circle cx={I.x} cy={I.y} r={I.r} fill="#fbfdff" stroke={GREY_INK} strokeWidth={3} />
					{[-1, 0, 1].map(k => <line key={'h' + k} x1={I.x - I.r + 8} x2={I.x + I.r - 8} y1={I.y + k * 70} y2={I.y + k * 70} stroke="#9fbfda" strokeWidth={2} />)}
					{[-1, 0, 1].map(k => <line key={'v' + k} y1={I.y - I.r + 8} y2={I.y + I.r - 8} x1={I.x + k * 70} x2={I.x + k * 70} stroke="#cfe0ee" strokeWidth={1.5} />)}
					<line x1={I.x - 90} y1={I.y + 70} x2={I.x + 90} y2={I.y - 35} stroke={INK} strokeWidth={4} />
					<circle cx={I.x} cy={I.y + 17} r={7} fill={TEAL} />
					<DrawPath d={`M${I.x + 22},${I.y} l10,0 l0,35 l-10,0`} at={K2.half + 10} dur={10} color={AMBER_INK} width={3} />
				</g>
				<GreyTag x={I.x} y={I.y + I.r + 16} text="estimate: about half a square" at={K2.half + 8} size={22} anchor="middle" />
				<CrossedHabit x={SX} y={830} text="28" at={K2.without} cross={K2.without + 20} caption="28 what?" size={40} maxW={300} />
				{void K2.units}{void K2.value}{void K2.cost}
			</Overlay>
		</>
	);
};

// ---------- 3. The worked question card ----------
const K3 = cues(sc('question-card'), {hsc: 'HSC-style Biology', lab: 'A hospital laboratory', table: 'the table shows', four: 'four parts', plot: 'plot it', describe: 'describe the trend', estimate: 'estimate one value', assess: 'assess a prediction', chem: 'If you take Chemistry', pause: 'Pause here'});
export const SceneCard: React.FC = () => {
	const f = useCurrentFrame();
	const h = hold('question-card');
	const spec = fullSpec([K3.lab, K3.table, K3.plot, K3.describe, K3.estimate, K3.assess]);
	const cg = cardGeom(spec);
	const gy = spec.y + cg.h + 18;
	const s = Math.min(22, Math.floor((1060 - gy) / 15));
	const grid: Grid = {x: ZONE.box.x, y: gy, s, nx: 20, ny: 15};
	const box: AnsSpec = {x: ZONE.box.x + 20 * s + 30, y: gy, w: 560, lines: 3, lh: 50, size: 26};
	const ag = answerGeom(box, []);
	const rodH = Math.min(150, cg.slot.h - 50);
	return (
		<Overlay>
			<RoutineStrip rows={ALL4} dim={[h.startFrame - 20, 1e9]} o={0.6} />
			<QuestionCard spec={spec} at={K3.hsc}>
				<g opacity={prog(f, K3.lab + 20, 14)}>
					<ClipPlate p={ROD} x={cg.slot.x + 10} y={cg.slot.y + 10} h={rodH} />
					<T x={cg.slot.x + 10 + plateW(ROD, rodH) / 2} y={cg.slot.y + rodH + 36} text="E. coli, a gut bacterium" size={17} weight={600} color={GREY_INK} anchor="middle" />
				</g>
			</QuestionCard>
			<GridPaper g={grid} at={K3.plot} />
			<AnswerBox spec={box} at={K3.describe} counter={{total: 8, label: true}} slots={{at: K3.describe + 10, n: 3, per: 1}} />
			{['(b)', '(c)', '(d)'].map((t, i) => <T key={t} x={ag.tx + 4} y={ag.base(i)} text={t} size={24} color={GREY_INK} weight={700} o={prog(f, [K3.describe, K3.estimate, K3.assess][i] + 10, 10)} />)}
			<DrillCountdown hold={h} at={K3.pause} x={box.x + box.w + 40} y={gy + 70} cx={box.x + box.w + 190} cy={gy + 190} r={48} />
			{void K3.four}{void K3.chem}{void AMBER}
		</Overlay>
	);
};
