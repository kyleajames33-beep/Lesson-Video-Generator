// S05 scenes 8 to 10: significant figures done strictly (the lens on each measured value, ΔT from a subtraction keeps
// decimal places, exact numbers never limit, one 2025 guideline's bands), round once (early rounding moves the answer;
// a NESA sample answer carries its digits; one accepted range is for reading a graph), and visible working when a step
// is wrong (the same slip, A bare and B shown; one 2021 ladder; no carried-forward promise; the sense check).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, AnswerBox, CARD, Chip, DrawPath, GREY, GREY_INK, GreyTag, HandLine, INK, INK_SOFT, LostMarksTag, Overlay, PenArrow, RED, RoutineStrip, T, TEAL, measure, prog, pulse, vis,
} from './kit';
import {scribbleEllipse} from '../../kit';
import type {ARow, AnsSpec} from './kit';
import {BOX, CupSlot, SX, SW, WORK, WorkCardSmall, boxTop, given, sc} from './common';
import {BandLadder, PenBox, SenseGauge, SigFigNum, numW} from './pieces';

const ALL4 = [-100, -100, -100, -100];
const GIV = given(['v1', 'v2', 'd', 't2', 't1', 'cp', 'c1', 'c2']);
const Card: React.FC = () => <WorkCardSmall ann={GIV}><CupSlot spec={WORK} at={-100} read={{at: -100, rise: -100}} /></WorkCardSmall>;

// ---------- 8. Significant figures ----------
const K8 = cues(sc('sig-figs'), {why: 'Why fifty four', least: 'least precise', most: 'Most values', sub: 'subtraction', keeps: 'keeps decimal places', five: 'five point two has', two: 'only two', exact: 'Exact numbers', ratio: 'mole ratio', several: 'Several recent', top: 'top band', one: 'one three-mark', wrong: 'wrong significant', got: 'got two', not: 'Not every', right: 'right every time'});
const VALS: [string, string][] = [['60.0', 'aa.a'], ['0.800', 'g.aaa'], ['1.00', 'a.aa'], ['4.18', 'a.aa']];
export const SceneSigFigs: React.FC = () => {
	const f = useCurrentFrame();
	const top = boxTop();
	const LY = top + 110, step = 26;
	const SUBX = 400, SUBY = top + 300;
	const dimA = 1 - 0.65 * vis(f, K8.exact - 14, undefined, 12);
	const outA = K8.several - 4;
	const decX = SUBX + numW('25', 48);
	return (
		<Overlay>
			<RoutineStrip rows={ALL4} o={0.4} />
			<Card />
			<AnswerBox spec={BOX()} at={-100} counter={{total: 4, extra: [-1000, -1000, -1000, -1000], label: true}} o={1 - prog(f, 0, 18)} />
			{/* the answer under question */}
			<g>
				<PenBox x={SX} y={top} w={330} h={64} at={-100} color={INK} />
				<T x={SX + 18} y={top + 44} text="ΔH = −54 kJ mol^{−1}" size={32} hand weight={700} />
				<HandLine x={SX + 10} y={top + 120} text="not −54.3?" at={K8.why + 30} out={K8.two + 20} size={34} color={GREY_INK} />
				<HandLine x={SX + 10} y={top + 120} text="−54.34 → −54" at={K8.two + 24} size={34} color={AMBER_INK} />
				<GreyTag x={SX + 10} y={top + 140} text="2 sig figs, set by ΔT" at={K8.two + 40} size={22} />
			</g>
			<g opacity={vis(f, 0, outA, 10) * dimA}>
				<T x={360} y={LY - 70} text="the measured values" size={30} hand weight={700} color={INK_SOFT} o={prog(f, K8.most - 10, 10)} />
				{VALS.map(([v, s], i) => {
					const x = 360 + i * 200, at = K8.most + i * step;
					return (
						<g key={v}>
							<SigFigNum x={x} y={LY} text={v} sig={s} size={48} at={K8.most - 10 + i * 4} lens={at} lensOut={at + step} />
							<T x={x + numW(v, 48) / 2} y={LY + 46} text="3 sig figs" size={20} weight={700} color={AMBER_INK} anchor="middle" o={prog(f, at + 8, 10)} />
						</g>
					);
				})}
				<GreyTag x={560} y={LY + 64} text="leading zeros don't count" at={K8.most + step + 6} size={20} />
			</g>
			{/* ΔT from a subtraction */}
			<g opacity={vis(f, K8.sub - 4, outA, 10) * dimA}>
				<T x={decX + measure('.8', 48, false, 700)} y={SUBY} text="25.8" size={48} weight={700} anchor="end" />
				<T x={SUBX - 50} y={SUBY + 62} text="−" size={48} weight={700} />
				<T x={decX + measure('.6', 48, false, 700)} y={SUBY + 62} text="20.6" size={48} weight={700} anchor="end" />
				<DrawPath d={`M${SUBX - 50},${SUBY + 82} L${SUBX + 120},${SUBY + 82}`} at={K8.sub + 14} dur={10} color={INK} width={3} />
				<SigFigNum x={decX - numW('5', 48)} y={SUBY + 140} text="5.2" sig="a.a" size={48} at={K8.five - 10} lens={K8.two - 4} />
				<T x={SUBX + 200} y={SUBY + 140} text="2 sig figs" size={24} weight={700} color={AMBER_INK} o={prog(f, K8.two + 6, 10)} />
				<line x1={decX + 2} x2={decX + 2} y1={SUBY - 50} y2={SUBY + 150} stroke={TEAL} strokeWidth={2} strokeDasharray="4 6" opacity={prog(f, K8.keeps, 10)} />
				<T x={decX + 10} y={SUBY - 58} text="1 decimal place each" size={20} weight={700} color={TEAL} o={prog(f, K8.keeps + 6, 10)} />
				<DrawPath d={scribbleEllipse(decX + 8, SUBY + 124, 60, 40, 6, 1.1)} at={K8.two + 14} dur={14} color={AMBER} width={4} />
				<PenArrow a={[SUBX + 100, SUBY + 110]} b={[SX - 10, top + 110]} at={K8.two + 20} color={AMBER_INK} bow={-60} />
				<Chip x={700} y={SUBY - 30} text="÷ or ×: fewest significant figures; + or −: fewest decimal places" at={K8.keeps} size={28} color={INK} maxW={560} />
			</g>
			<g opacity={1 - prog(f, K8.several, 12)}>
				<Chip x={360} y={top + 520} text="exact: counts, mole ratios, 1000 mL = 1 L (never limit)" at={K8.exact} size={30} color={GREY_INK} fill="#eceae4" hand={false} />
			</g>
			{/* one 2025 guideline */}
			<BandLadder x={360} y={top + 30} at={K8.several} critW={560} rungH={110} under={K8.wrong} lit={[{rungs: [1], from: K8.got, to: 1e9}]}
				rungs={[
					{mark: '3', crit: 'correct calculations, with correct significant figures'},
					{mark: '2', crit: 'substantially correct calculations, OR correct calculations with', judge: 'incorrect significant figures'},
					{mark: '1', crit: 'some relevant information'},
				]} />
			<GreyTag x={360} y={top + 380} text="a NESA Chemistry marking guideline, 2025 (3 marks)" at={K8.several + 20} size={22} />
			<GreyTag x={360} y={top + 430} text="also named in other criteria: 2021, 2022, 2023, 2024 (one question each)" at={K8.top} size={22} />
			<HandLine x={360} y={top + 540} text="Get them right every time." at={K8.not + 10} size={44} color={AMBER_INK} />
			{void K8.least}{void K8.ratio}{void K8.one}{void K8.right}{void GREY}{void CARD}{void SW}
		</Overlay>
	);
};

// ---------- 9. Round once ----------
const K9 = cues(sc('round-once'), {round: 'round only once', ifyou: "If you'd rounded", tt: 'two point two', ff: 'fifty five', notm: 'not minus fifty four', nesa: "NESA's own", last: 'last line', range: 'range is accepted', graph: 'off a graph', centre: 'marking centre', reading: 'reading, not'});
export const SceneRound: React.FC = () => {
	const f = useCurrentFrame();
	const top = boxTop();
	const LX = 360, RX = 860, Y0 = top + 60;
	const colDim = 1 - 0.65 * vis(f, K9.last - 6, undefined, 12);
	const stripDim = 1 - 0.65 * vis(f, K9.range - 6, undefined, 12);
	const flash = pulse(f, K9.ff, 24);
	const rx = RX + measure('q ≈ ', 36, true, 700), rw = measure('2.2', 36, true, 700);
	const G = {x: SX + 40, y: top + 40, w: 320, h: 230};
	const readX = G.x + G.w * 0.55;
	const SY = top + 400;
	const tails: [string, string][] = [['0.0263', '62'], ['0.0527', '24'], ['2.94', '46'], ['68.1', '63%']];
	return (
		<Overlay>
			<RoutineStrip rows={ALL4} o={0.4} />
			<Card />
			<g opacity={colDim}>
				<T x={LX} y={Y0} text="carry the digits" size={30} hand weight={700} color={TEAL} />
				<HandLine x={LX} y={Y0 + 60} text="q = 2.1736 kJ" at={K9.round} size={36} />
				<HandLine x={LX} y={Y0 + 120} text="ΔH = −54.34 kJ mol^{−1}" at={K9.round + 14} size={36} />
				<HandLine x={LX} y={Y0 + 180} text="= −54 kJ mol^{−1}" at={K9.round + 28} size={36} color={TEAL} />
				<DrawPath d={`M${LX + 300},${Y0 + 168} l12,14 l26,-30`} at={K9.round + 40} dur={10} color="#2f8a5b" width={6} />
				<T x={RX} y={Y0} text="rounded halfway" size={30} hand weight={700} color={RED} o={prog(f, K9.ifyou, 10)} />
				<HandLine x={RX} y={Y0 + 60} text="q ≈ 2.2 kJ" at={K9.tt} size={36} />
				<HandLine x={RX} y={Y0 + 120} text="ΔH = −55.0 kJ mol^{−1}" at={K9.tt + 40} size={36} />
				<g transform={`translate(${RX},${Y0 + 168}) scale(${1 + 0.12 * flash}) translate(${-RX},${-(Y0 + 168)})`}>
					<HandLine x={RX} y={Y0 + 180} text="= −55 kJ mol^{−1}" at={K9.ff - 8} size={36} color={RED} />
				</g>
				<DrawPath d={scribbleEllipse(rx + rw / 2, Y0 + 48, rw / 2 + 14, 28, 3, 1.1)} at={K9.tt + 20} dur={14} color={RED} width={4} />
				<DrawPath d={`M${rx - 8},${Y0 + 66} L${rx + rw + 8},${Y0 + 30} M${rx - 8},${Y0 + 30} L${rx + rw + 8},${Y0 + 66}`} at={K9.ff} dur={10} color={RED} width={5} />
				<Chip x={RX + 260} y={Y0 + 24} text="rounded too early" at={K9.tt + 30} size={24} color={RED} fill="#fbe6e1" hand={false} />
			</g>
			{/* a NESA sample answer's digits */}
			<g opacity={vis(f, K9.last - 4) * stripDim}>
				<T x={LX} y={SY} text="a different question: watch the digits, not the chemistry" size={26} hand weight={700} color={GREY_INK} />
				{tails.map(([a, b], i) => {
					const x = LX + i * 205, at = K9.last + i * 6;
					return (
						<g key={i} opacity={prog(f, at, 8)}>
							<T x={x} y={SY + 60} text={a} size={34} weight={600} color={GREY_INK} />
							<T x={x + measure(a, 34, false, 600)} y={SY + 60} text={b} size={34} weight={700} color={INK} />
							<T x={x + measure(a + b, 34, false, 600) + 10} y={SY + 58} text="→" size={30} weight={600} color={GREY} />
						</g>
					);
				})}
				<g opacity={prog(f, K9.last + 30, 10)}>
					<rect x={LX + 4 * 205 - 8} y={SY + 22} width={measure('68.2%', 34, false, 800) + 16} height={52} rx={10} fill="#fff3c9" stroke={AMBER} strokeWidth={3} />
					<T x={LX + 4 * 205} y={SY + 60} text="68.2%" size={34} weight={800} color={AMBER_INK} />
				</g>
				<GreyTag x={LX} y={SY + 96} text="a NESA sample answer, Chemistry 2022 (sample answers guide, they are not model answers)" at={K9.last + 20} size={21} maxW={1050} />
			</g>
			{/* one accepted range: reading a graph */}
			<g opacity={vis(f, K9.range - 4)}>
				<rect x={G.x - 30} y={G.y - 30} width={G.w + 60} height={G.h + 110} rx={14} fill={CARD} stroke="rgba(60,45,20,0.2)" strokeWidth={2} />
				<DrawPath d={`M${G.x},${G.y} L${G.x},${G.y + G.h} L${G.x + G.w},${G.y + G.h}`} at={K9.range} dur={16} color={INK} width={3} />
				<DrawPath d={`M${G.x + 10},${G.y + G.h - 20} Q${G.x + G.w * 0.5},${G.y + G.h * 0.5} ${G.x + G.w - 10},${G.y + 20}`} at={K9.range + 10} dur={20} color={TEAL} width={4} />
				<DrawPath d={`M${readX},${G.y + G.h * 0.48} L${readX},${G.y + G.h}`} at={K9.graph} dur={14} color={INK_SOFT} width={2.5} />
				<circle cx={readX} cy={G.y + G.h * 0.48} r={7} fill={AMBER} opacity={prog(f, K9.graph, 8)} />
				<g opacity={prog(f, K9.centre - 10, 10)}>
					<DrawPath d={`M${readX - 26},${G.y + G.h + 22} L${readX - 26},${G.y + G.h + 32} L${readX + 26},${G.y + G.h + 32} L${readX + 26},${G.y + G.h + 22}`} at={K9.centre - 10} dur={12} color={AMBER_INK} width={4} cap="butt" />
					<T x={readX} y={G.y + G.h + 64} text="accepted range of readings" size={22} weight={700} color={AMBER_INK} anchor="middle" />
				</g>
			</g>
			<GreyTag x={SX} y={G.y + G.h + 100} text="a NESA Chemistry marking guideline, 2021 (2 marks)" at={K9.range + 30} size={20} maxW={SW} />
			<Chip x={SX} y={G.y + G.h + 160} text="the range covers reading the graph; your arithmetic still rounds once, to the right figures" at={K9.reading} size={24} color={INK} maxW={SW} />
			{void K9.notm}{void K9.nesa}
		</Overlay>
	);
};

// ---------- 10. Working when a step is wrong ----------
const K10 = cues(sc('working-when-wrong'), {suppose: 'Now suppose', two: 'Two students', acid: "acid's moles", both: 'both get', ansA: 'Answer A writes', ansB: 'Answer B shows', our: 'In our marking', nothing: 'nothing', still: 'B is still wrong', earns2: 'earns two', recent: 'In one recent', main: 'main steps', some: 'some relevant steps', qbq: 'question by question', dont: "don't count", make: 'Make every step', vis2: ['visible', 2], sense: 'sense check helps', far: 'far from', recheck: 'recheck'});
export const SceneWrong: React.FC = () => {
	const f = useCurrentFrame();
	const top = boxTop();
	const A: AnsSpec = {x: 330, y: top, w: 420, lines: 2, lh: 46, size: 28};
	const B: AnsSpec = {x: 780, y: top, w: 630, lines: 7, lh: 44, size: 26};
	const b0 = K10.ansB;
	const bRows: ARow[] = [
		{text: 'q = mcΔT', at: b0, dur: 14},
		{text: 'q = 100 g × 4.18 J g^{−1} °C^{−1} × 5.2 °C = 2.1736 kJ', at: b0 + 10, dur: 26},
		{text: 'n(HCl) = 0.0480 mol', at: b0 + 26, dur: 14},
		{text: 'ΔH = −q ÷ n = −2.1736 kJ ÷ 0.0480 mol = −45 kJ mol^{−1}', at: b0 + 36, dur: 26},
	];
	const lad = vis(f, K10.main - 6, K10.vis2 - 10, 14);
	const aO = 1 - 0.6 * vis(f, K10.make, undefined, 12);
	return (
		<Overlay>
			<RoutineStrip rows={ALL4} o={0.4} />
			<Card />
			<g opacity={1 - 0.85 * lad}>
				<g opacity={aO}>
					<AnswerBox spec={{...A, label: 'Answer A'}} at={K10.ansA - 10} rows={[{text: 'ΔH = −45 kJ mol^{−1}', at: K10.ansA + 10, dur: 24}]} counter={{total: 4, at: K10.nothing}} />
					<Chip x={A.x} y={A.y + 190} text="0 / 4: nothing to mark" at={K10.nothing + 6} size={24} color={RED} fill="#fbe6e1" hand={false} />
				</g>
				<AnswerBox spec={{...B, label: 'Answer B'}} at={b0 - 10} rows={bRows} counter={{total: 4, at: K10.still, label: true}}
					ann={[{kind: 'ring', row: 2, phrase: 'n(HCl) = 0.0480 mol', at: b0 + 60, color: RED}, {kind: 'tick', row: 1, phrase: 'q', at: K10.earns2 + 4}, {kind: 'tick', row: 3, phrase: 'ΔH', at: K10.earns2 + 12}]} />
				<Chip x={B.x + 300} y={B.y + 144} text="used the excess reactant" at={b0 + 70} size={20} color={RED} fill="#fbe6e1" hand={false} />
				<GreyTag x={A.x} y={A.y + 270} text="B's ticks: q, with units; ΔH = −q ÷ n, sign and unit" at={K10.earns2 + 20} size={21} maxW={420} />
				<LostMarksTag x={B.x} y={B.y + 410} text="−2: wrong moles of water, so wrong value" at={K10.earns2 + 34} maxW={630} size={24} />
			</g>
			{/* one NESA ladder, nobody placed on it */}
			<g opacity={lad}>
				<rect x={320} y={top - 16} width={1100} height={620} rx={18} fill={CARD} opacity={0.94} />
				<BandLadder x={360} y={top + 10} at={K10.main - 6} critW={620} rungH={96} lit={[{rungs: [1], from: K10.main, to: K10.some}, {rungs: [2], from: K10.some, to: K10.qbq}]}
					rungs={[{mark: '4', crit: 'correct answer'}, {mark: '3', crit: 'the main steps of the calculation'}, {mark: '2', crit: 'some relevant steps of the calculation'}, {mark: '1', crit: 'some relevant information'}]} />
				<GreyTag x={360} y={top + 410} text="a NESA Chemistry marking guideline, 2021 (4 marks)" at={K10.main + 10} size={22} />
				<Chip x={360} y={top + 470} text="no general carried-forward rule in the published guidelines" at={K10.qbq} size={28} color={GREY_INK} fill="#eceae4" hand={false} />
			</g>
			<g opacity={vis(f, K10.make)}>
				<HandLine x={SX} y={top + 40} text="make every step visible" at={K10.make + 6} size={34} color={TEAL} />
			</g>
			<g opacity={pulse(f, K10.recheck, 40)}><rect x={B.x + 60} y={B.y + 50 + 2 * 44 + 4} width={300} height={44} rx={10} fill="none" stroke={RED} strokeWidth={4} /></g>
			<SenseGauge x={SX + 10} y={top + 230} w={360} at={K10.sense} value={-45} settle={K10.far - 30} zoneTag={false} outside={{at: K10.recheck, text: 'recheck: which reactant ran out?'}} />
			{void K10.suppose}{void K10.two}{void K10.acid}{void K10.both}{void K10.our}{void K10.recent}{void K10.dont}{void AMBER}{void GREY}{void INK}
		</Overlay>
	);
};
