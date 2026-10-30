// M7 P05 (Biology practical) scenes 6 to 10: close, invert, incubate (base label, the painted tape strips ringed as
// "secure the lid as your school procedure directs", the flip with the discs staying on, the incubator, 28 °C in the
// 25 to 30 band, 37 °C crossed, the padlock and "never opened"); measure through the base (plate 3 turned over, the
// painted ruler at the plate's own mm scale across disc A, 24 then a quarter turn and 26, the average, then disc C:
// 6 mm, and the crossed "open the lid"); the results (three rotated plates, the zone table cell by cell, means,
// spreads and the blank row); what zone size depends on (the claim card's teal line, the four-spoke fan, the halo
// pair, the wall-burst target, two crossed chips); a plate isn't a patient (the terracotta column with tissue,
// capsule and bacterium, the narrow conclusion, the memory line).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Heading, Overlay} from '../bio-m5-b13/shared';
import {S} from './common';
import {
	AMBER, AMBER_INK, BaseLabel, Bench, CARD, CTag, Circle, CrossChip, DPlate, DiscChips, DrawPath, EDGE, FEAT, GREEN, GREEN_SOFT, GREYT, GREY_INK, GTag, Halo, INK, INK_SOFT, PLATES,
	Padlock, Pl, PlateB, QUESTION, RZ, Rail, RowBox, Ruler, Sx, TEAL, TEAL_SOFT, TERRA, TERRA_SOFT, TempBand, WText, discAt, fitW, kOf, lerp, mmOf, prog, ptOf, pulse, smooth, vis,
} from './parts';

// ---------- 6. Close, invert, incubate ----------
const K6 = cues(S('incubate'), {proc: "school's procedure", water: 'water testing practical', label: 'label the base', close: 'close the lid', upside: 'upside down', t25: 'twenty five to thirty', days: 'two days', never: 'never thirty seven', shut: 'shut'});
export const SceneIncubate: React.FC = () => {
	const f = useCurrentFrame();
	const D = {cx: 680, cy: 560, w: 400};
	const k = kOf(D.w);
	const rim = FEAT.rim * k;
	const flip = prog(f, K6.upside, 20);
	const sy = Math.abs(Math.cos(flip * Math.PI)) * (flip > 0.5 ? -1 : 1);
	const into = smooth(prog(f, K6.upside + 26, 26));
	const INC = {cx: 430, cy: 600, w: fitW(PLATES.incubator, 540, 440)};
	const stack = ptOf(PLATES.incubator, INC.cx, INC.cy, INC.w, FEAT.stack);
	const disp = ptOf(PLATES.incubator, INC.cx, INC.cy, INC.w, FEAT.display);
	const tapes = FEAT.tape.map(([u, v]) => [D.cx + (u - FEAT.c[0]) * k, D.cy + (v - FEAT.c[1]) * k]);
	const ringO = vis(f, K6.close, K6.upside, 10);
	return (
		<>
			<Heading text={QUESTION} at={-200} size={54} />
			<Overlay>
				<Rail lit={3} at={4} />
				<Bench />
				<g transform={`translate(${lerp(D.cx, stack[0], into)},${lerp(D.cy, stack[1], into)}) scale(${lerp(1, 0.22, into)},${lerp(1, 0.22, into) * (flip > 0 ? sy : 1)}) translate(${-D.cx},${-D.cy})`} opacity={1 - prog(f, K6.upside + 48, 10)}>
					<DPlate p={PLATES.fresh} cx={D.cx} cy={D.cy} w={D.w} />
					<BaseLabel x={D.cx} y={D.cy} r={rim} at={K6.label} />
				</g>
				{tapes.map(([x, y], i) => <g key={i} opacity={ringO}><Circle x={x} y={y} r={44} at={K6.close + i * 6} color={AMBER} width={5} /></g>)}
				<Pl p={PLATES.incubator} cx={INC.cx} cy={INC.cy} w={INC.w} o={prog(f, K6.upside + 20, 16)} />
				<g opacity={prog(f, K6.t25, 12)}>
					<rect x={disp[0] - 44} y={disp[1] - 20} width={88} height={38} rx={6} fill="#20302a" />
					<Sx x={disp[0]} y={disp[1] + 10} text="28 °C" size={24} color="#9fe3b0" weight={700} anchor="middle" at={-100} />
				</g>
				<Padlock x={stack[0] + 120} y={stack[1] - 30} at={K6.shut} s={1.1} />
				<TempBand x={760} y={830} w={440} at={K6.t25} mark37={prog(f, K6.never, 10)} />
				<Sx x={980} y={950} text="2 days (48 h)" size={24} color={GREY_INK} weight={600} anchor="middle" at={K6.days} />
				<CTag x={RZ.x} y={260} text="secure the lid as your school procedure directs" at={K6.close + 4} color={AMBER_INK} size={28} maxW={RZ.w} dim={prog(f, K6.upside, 10)} />
				<CTag x={RZ.x} y={370} text="discs stay on: pressed into the agar" at={K6.upside + 10} color={AMBER_INK} size={28} maxW={RZ.w} dim={prog(f, K6.t25, 10)} />
				<CrossChip x={RZ.x} y={480} text="37 °C" at={K6.never} cross={K6.never + 16} size={36} />
				<WText x={RZ.x + 6} y={590} text="body temperature favours microbes adapted to us" size={26} maxW={RZ.w - 10} color={GREY_INK} weight={600} at={K6.never + 12} />
				<WText x={RZ.x} y={720} text="never opened after incubation" size={40} maxW={RZ.w} color={TERRA} hand weight={700} at={K6.shut} />
				<GTag x={RZ.x} y={900} text="the water testing practical" at={K6.water} size={22} />
				{void K6.proc}
			</Overlay>
		</>
	);
};

// ---------- 7. Measure through the base ----------
const K7 = cues(S('measure'), {measure: 'To measure', over: 'turn the plate over', ruler: 'ruler across', base: 'base', centre: 'centre of the disc', edge: 'clear zone edge', mm: ['millimetres', 1], quarter: 'quarter turn', again: 'measure again', average: 'average', nozone: 'No zone', six: 'six millimetres', width: 'width of the disc'});
export const SceneMeasure: React.FC = () => {
	const f = useCurrentFrame();
	const P = {cx: 600, cy: 600, w: 600};
	const fl = prog(f, K7.over, 22);
	const sx = Math.max(0.02, Math.abs(Math.cos(fl * Math.PI)));
	const mir = fl > 0.5;
	const mm = mmOf(P.w);
	const A = discAt(P.cx, P.cy, P.w, 'A', 180, true);
	const C = discAt(P.cx, P.cy, P.w, 'C', 180, true);
	const slide = smooth(prog(f, K7.ruler, 40));
	const rot = smooth(prog(f, K7.quarter, 22));
	const toC = smooth(prog(f, K7.nozone, 26));
	const phase = f < K7.quarter ? 0 : f < K7.nozone ? 1 : 2;
	const px = lerp(A[0], C[0], toC) + (1 - slide) * -900, py = lerp(A[1], C[1], toC);
	const angle = phase === 2 ? lerp(90, 0, toC) : 90 * rot;
	const rulerProps = phase === 0
		? {start: 12, ticks: [0, 24] as [number, number], ticksAt: K7.edge, read: '24 mm', readAt: K7.mm}
		: phase === 1
			? {start: 13, ticks: [0, 26] as [number, number], ticksAt: K7.again + 8, read: '26 mm', readAt: K7.again + 26}
			: {start: 3, ticks: [0, 6] as [number, number], ticksAt: K7.six, read: '6 mm', readAt: K7.six + 14, readColor: GREY_INK};
	const avgDim = prog(f, K7.nozone, 12);
	return (
		<>
			<Heading text={QUESTION} at={-200} size={54} />
			<Overlay>
				<Rail lit={4} at={4} />
				<Bench />
				<g transform={`translate(${P.cx},0) scale(${sx},1) translate(${-P.cx},0)`}>
					<DPlate p={PLATES.zones} cx={P.cx} cy={P.cy} w={P.w} rot={180} mirror={mir} />
					<DiscChips cx={P.cx} cy={P.cy} w={P.w} rot={180} mirror={mir} at={-100} size={24} away={P.w * 0.15} />
				</g>
				<GTag x={P.cx} y={270} text={mir ? 'plate 3, base up, lid on' : 'plate 3'} at={-100} size={24} anchor="middle" />
				{f >= K7.ruler ? <Ruler px={px} py={py} mm={mm} angle={angle} {...rulerProps} o={prog(f, K7.ruler, 10) * (phase === 1 && f < K7.again + 4 ? 0.85 : 1)} /> : null}
				<Sx x={RZ.x} y={320} text="first: 24 mm" size={38} color={avgDim > 0.5 ? GREY_INK : AMBER_INK} hand weight={700} at={K7.mm + 6} />
				<Sx x={RZ.x} y={380} text="quarter turn: 26 mm" size={38} color={avgDim > 0.5 ? GREY_INK : AMBER_INK} hand weight={700} at={K7.again + 30} />
				<Sx x={RZ.x} y={460} text="(24 + 26) ÷ 2 = 25 mm" size={42} color={AMBER_INK} weight={800} at={K7.average} />
				<WText x={RZ.x} y={640} text="no zone: 6 mm = disc only" size={34} maxW={RZ.w} color={GREY_INK} hand weight={700} at={K7.six + 10} />
				<CrossChip x={RZ.x} y={700} text="open the lid to see better" at={K7.width + 6} cross={K7.width + 30} caption="measure through the base, lid on" size={32} />
				{void K7.measure}{void K7.base}{void K7.centre}
			</Overlay>
		</>
	);
};

// ---------- 8. The results ----------
const K8 = cues(S('results'), {here: 'Here are the results', a24: 'twenty four', a26: 'twenty six', a25: 'twenty five millimetres', mean: 'mean of', b: 'B averaged', b15: 'fifteen', c: 'C and the blank', agree: 'agree closely', reliable: 'reliable', blankNo: 'blank made no', zones: 'zones'});
const TX = 1240, COLW = [110, 110, 110, 110, 180], RH = 62, TY = 262;
export const SceneResults: React.FC = () => {
	const f = useCurrentFrame();
	const colX = COLW.reduce<number[]>((a, w, i) => [...a, (a[i - 1] ?? TX) + (i ? COLW[i - 1] : 0)], []);
	const xs = COLW.map((_, i) => TX + COLW.slice(0, i).reduce((a, b) => a + b, 0));
	void colX;
	const head = ['disc', 'plate 1', 'plate 2', 'plate 3', 'mean (mm)'];
	const rows = [
		{c: ['A', '24', '26', '25', '25'], at: [K8.a24 - 6, K8.a24, K8.a26, K8.a25, K8.mean]},
		{c: ['B', '15', '14', '16', '15'], at: [K8.b, K8.b + 6, K8.b + 12, K8.b + 18, K8.b15]},
		{c: ['C', '6', '6', '6', '6'], at: [K8.c, K8.c + 4, K8.c + 8, K8.c + 12, K8.c + 16]},
		{c: ['blank', '6', '6', '6', '6'], at: [K8.c + 14, K8.c + 18, K8.c + 22, K8.c + 26, K8.c + 30]},
	];
	const W = COLW.reduce((a, b) => a + b, 0);
	const PX = [235, 595, 955], ROT = [0, 90, 180], PW = 330, PY = 500;
	const readAt = [K8.a24, K8.a26, K8.a25];
	const blankP = pulse(f, K8.zones - 10, 40);
	const spreadDim = prog(f, K8.blankNo, 12);
	return (
		<>
			<Heading text={QUESTION} at={-200} size={54} />
			<Overlay>
				<Rail lit={4} at={-100} />
				<Bench w={1130} />
				{PX.map((x, i) => {
					const [ax, ay] = discAt(x, PY, PW, 'A', ROT[i]);
					return (
						<g key={i} opacity={prog(f, i * 6, 12)}>
							<DPlate p={PLATES.zones} cx={x} cy={PY} w={PW} rot={ROT[i]} />
							<DiscChips cx={x} cy={PY} w={PW} rot={ROT[i]} at={-100} size={18} away={PW * 0.15} />
							<Sx x={x} y={PY + 196} text={`plate ${i + 1}`} size={26} color={GREY_INK} weight={700} anchor="middle" at={-100} />
							<g opacity={vis(f, readAt[i], K8.mean + 20, 8)}><Circle x={ax} y={ay} r={FEAT.zoneR.A * kOf(PW) + 6} at={readAt[i]} color={AMBER} width={4} /></g>
						</g>
					);
				})}
				{/* the zone table */}
				<g opacity={prog(f, K8.here, 12)}>
					<rect x={TX} y={TY} width={W} height={RH * 5} rx={12} fill={CARD} stroke={EDGE} strokeWidth={2.5} />
					<rect x={TX} y={TY} width={W} height={RH} rx={12} fill="#efe6d4" />
					{head.map((h, i) => <Sx key={h} x={xs[i] + COLW[i] / 2} y={TY + 40} text={h} size={22} color={i === 4 ? AMBER_INK : INK} weight={800} anchor="middle" at={-100} />)}
					{[1, 2, 3, 4].map(r => <line key={r} x1={TX} x2={TX + W} y1={TY + r * RH} y2={TY + r * RH} stroke={EDGE} strokeWidth={2} />)}
					{[1, 2, 3, 4].map(c => <line key={'c' + c} x1={xs[c]} x2={xs[c]} y1={TY} y2={TY + 5 * RH} stroke={EDGE} strokeWidth={2} />)}
				</g>
				<g opacity={prog(f, K8.c + 14, 10)}>
					<rect x={TX + 3} y={TY + 4 * RH + 3} width={W - 6} height={RH - 6} rx={10} fill={blankP > 0.01 ? GREEN_SOFT : 'none'} fillOpacity={blankP} stroke={GREEN} strokeWidth={3} />
				</g>
				{rows.map((r, ri) => r.c.map((t, ci) => <Sx key={ri + '-' + ci} x={xs[ci] + COLW[ci] / 2} y={TY + (ri + 1) * RH + 42} text={t} size={30} color={ci === 4 ? AMBER_INK : ci === 0 ? (ri === 3 ? GREEN : INK) : INK} hand weight={700} anchor="middle" at={r.at[ci]} />))}
				<Sx x={TX} y={TY + 5 * RH + 56} text="(24 + 26 + 25) ÷ 3 = 25" size={34} color={prog(f, K8.agree, 10) > 0.5 ? GREY_INK : AMBER_INK} weight={800} at={K8.mean} />
				{[0, 1].map(i => f >= K8.agree + i * 10 ? <DrawPath key={i} d={`M${xs[1] + 14},${TY + (i + 1) * RH + 52} L${xs[4] - 14},${TY + (i + 1) * RH + 52}`} at={K8.agree + i * 10} dur={12} color={spreadDim > 0.5 ? GREYT : AMBER} width={4} /> : null)}
				<Sx x={TX} y={TY + 5 * RH + 112} text="A: spread 2 mm   B: spread 2 mm" size={30} color={spreadDim > 0.5 ? GREY_INK : AMBER_INK} hand weight={700} at={K8.agree + 14} />
				<WText x={TX} y={TY + 5 * RH + 160} text="the gap between A and B (10 mm) is far bigger than the spread" size={24} maxW={W} color={GREY_INK} weight={600} at={K8.reliable} />
				<CTag x={TX} y={TY + 5 * RH + 222} text="no zone beyond the disc: paper and water didn't cause it" at={K8.zones - 6} color={GREEN} size={25} maxW={W - 60} />
				<GTag x={1850} y={1018} text="example data" at={-100} size={20} anchor="end" />
				<GTag x={100} y={880} text="colonies inside a zone? possibly resistant cells: never open or subculture" at={K8.zones + 30} size={22} />
				{void INK_SOFT}{void TEAL}{void K8.blankNo}
			</Overlay>
		</>
	);
};

// ---------- 9. What zone size depends on ----------
const K9 = cues(S('depends-on'), {agar: 'on this agar', larger: 'larger clear zone', active: 'how active', much: 'how much drug', diffuse: 'diffuse', slowly: 'spreads slowly', small: 'small zone', stronger: 'stronger drug', cs: "C's missing zone", lacks: 'lacks the part', targets: 'targets'});
const ClaimTeal: React.FC<{text: string; at: number; swapText?: string; swapAt?: number}> = ({text, at, swapText, swapAt = 1e9}) => {
	const f = useCurrentFrame();
	const sw = prog(f, swapAt, 14);
	return (
		<g>
			<rect x={RZ.x} y={250} width={RZ.w} height={200} rx={20} fill={TEAL_SOFT} stroke={TEAL} strokeWidth={3} opacity={prog(f, Math.min(at, 0), 10)} />
			<Sx x={RZ.x + 22} y={292} text="on this plate" size={30} color={TEAL} weight={800} at={-100} />
			<g opacity={1 - sw}><WText x={RZ.x + 22} y={340} text={text} size={29} maxW={RZ.w - 44} color={TEAL} hand weight={700} at={at} /></g>
			{swapText ? <g opacity={sw}><WText x={RZ.x + 22} y={340} text={swapText} size={29} maxW={RZ.w - 44} color={TEAL} hand weight={700} at={swapAt} /></g> : null}
		</g>
	);
};
const TEAL_LINE = 'A: larger clear zone than B (25 mm against 15 mm), these conditions';
export const SceneDepends: React.FC = () => {
	const f = useCurrentFrame();
	const Z = {cx: 290, cy: 520, w: 380};
	const k = kOf(Z.w);
	const [ax, ay] = discAt(Z.cx, Z.cy, Z.w, 'A');
	const [cx, cy] = discAt(Z.cx, Z.cy, Z.w, 'C');
	const e = FEAT.zoneR.A * k;
	const spokes = [
		{t: 'how active the drug is', at: K9.active, y: 320, keep: false},
		{t: 'dose in the disc', at: K9.much, y: 430, keep: false},
		{t: 'how far it diffuses', at: K9.diffuse, y: 540, keep: true},
		{t: 'target present?', at: K9.targets - 30, y: 680, keep: true},
	];
	return (
		<>
			<Heading text={QUESTION} at={-200} size={54} />
			<Overlay>
				<Rail lit={5} at={4} />
				<Bench />
				<DPlate p={PLATES.zones} cx={Z.cx} cy={Z.cy} w={Z.w} />
				<DiscChips cx={Z.cx} cy={Z.cy} w={Z.w} at={-100} size={20} away={Z.w * 0.15} only={['A', 'B', 'C']} />
				<ClaimTeal text={TEAL_LINE} at={K9.larger} />
				{spokes.map((s, i) => {
					const o = prog(f, s.at, 12);
					if (o <= 0.01) return null;
					const dim = s.keep ? 0 : prog(f, K9.diffuse, 12);
					const col = dim > 0.5 ? GREY_INK : INK;
					return (
						<g key={i}>
							<DrawPath d={`M${ax + e * 0.95},${ay + (s.y - 450) * 0.15} L${590},${s.y - 10}`} at={s.at} dur={12} color={dim > 0.5 ? GREYT : AMBER_INK} width={3.5} />
							<Sx x={604} y={s.y} text={s.t} size={32} color={col} hand weight={700} at={s.at + 6} />
						</g>
					);
				})}
				{/* the halo pair: same idea, two drugs spreading differently */}
				<g opacity={prog(f, K9.slowly - 10, 12)}>
					{[{x: 1000, R: 50, l: 'drug 1', s: 3}, {x: 1150, R: 86, l: 'drug 2', s: 5}].map(h => (
						<g key={h.l}>
							<circle cx={h.x} cy={510} r={90} fill="#efe7cf" stroke={GREYT} strokeWidth={2} />
							<circle cx={h.x} cy={510} r={9} fill="#fbfaf5" stroke="#c8c2b4" strokeWidth={1.5} />
							<Halo x={h.x} y={510} r0={9} R={h.R} edge={h.R} at={K9.slowly - 6} n={70} seed={h.s} dot={3} spread={60} />
							<Sx x={h.x} y={630} text={h.l} size={22} color={GREY_INK} weight={700} anchor="middle" at={-100} />
						</g>
					))}
				</g>
				<GTag x={1075} y={410} text="diffusion differs between drugs" at={K9.slowly + 10} size={20} anchor="middle" />
				<g opacity={prog(f, K9.targets - 24, 12)}>
					<Pl p={PLATES.burst} cx={1000} cy={760} w={fitW(PLATES.burst, 170, 110)} />
				</g>
				<GTag x={850} y={830} text="the antibiotics video: each drug hits a target" at={K9.targets - 10} size={20} />
				<CrossChip x={90} y={760} text="no zone = useless?" at={K9.cs} cross={K9.targets + 8} size={30} />
				<CrossChip x={90} y={850} text="bigger zone = stronger drug" at={K9.stronger} cross={K9.stronger + 24} size={30} />
				<WText x={RZ.x} y={500} text="clinical labs compare each drug with its own cut-off, on standard agar" size={22} maxW={RZ.w} color={GREY_INK} weight={600} at={K9.targets + 40} />
				{void cx}{void cy}{void K9.small}{void K9.lacks}{void K9.agar}{void PlateB}{void TERRA}{void RowBox}{void smooth}
			</Overlay>
		</>
	);
};

// ---------- 10. A plate isn't a patient ----------
const K10 = cues(S('plate-not-patient'), {patient: "isn't a patient", tissue: 'infected tissue', harming: 'without harming', pathogen: 'actual pathogen', strain: 'teaching strain', trials: 'clinical trials', narrow: 'narrow', produced: 'A produced', cond: 'under these conditions'});
const CONCL = 'A produced a larger clear zone than B, on this agar, under these conditions';
export const ScenePatient: React.FC = () => {
	const f = useCurrentFrame();
	const nd = prog(f, K10.narrow, 14);
	const rows = [
		{t: 'reaches the infection?', at: K10.tissue},
		{t: 'safe at that dose?', at: K10.harming},
		{t: 'works on the real pathogen?', at: K10.pathogen},
	];
	const th = [
		{p: PLATES.tissue, x: 400, w: fitW(PLATES.tissue, 210, 200), tag: 'tissue, not agar', at: K10.tissue},
		{p: PLATES.blister, x: 660, w: fitW(PLATES.blister, 230, 200), tag: 'safe dose?', at: K10.harming},
		{p: PLATES.rodCoccus, x: 960, w: fitW(PLATES.rodCoccus, 270, 200), tag: 'teaching strain ≠ pathogen', at: K10.pathogen},
	];
	const Z = {cx: 250, cy: 760, w: 260};
	return (
		<>
			<Heading text={QUESTION} at={-200} size={54} />
			<Overlay>
				<Rail lit={5} at={-100} />
				<Bench />
				<ClaimTeal text={TEAL_LINE} at={-100} swapText={CONCL} swapAt={K10.narrow + 10} />
				<g opacity={prog(f, K10.patient, 12) * (1 - 0.45 * nd)}>
					<rect x={RZ.x} y={470} width={RZ.w} height={420} rx={20} fill={TERRA_SOFT} stroke={nd > 0.5 ? GREYT : TERRA} strokeWidth={3} />
					<Sx x={RZ.x + 22} y={512} text="as a medicine" size={30} color={nd > 0.5 ? GREY_INK : TERRA} weight={800} at={-100} />
					{rows.map((r, i) => <Sx key={i} x={RZ.x + 30} y={572 + i * 66} text={'• ' + r.t} size={32} color={nd > 0.5 ? GREY_INK : TERRA} hand weight={700} at={r.at} />)}
				</g>
				<g opacity={1 - 0.45 * nd}><CTag x={RZ.x + 24} y={790} text="shown by clinical trials (antibiotics video)" at={K10.trials} color={GREY_INK} size={26} maxW={RZ.w - 48} dim={nd} /></g>
				{th.map((t, i) => (
					<g key={i} opacity={prog(f, t.at, 12) * (1 - 0.5 * nd)}>
						<Pl p={t.p} cx={t.x} cy={430} w={t.w} />
						<Sx x={t.x} y={580} text={t.tag} size={24} color={GREY_INK} weight={600} anchor="middle" at={-100} />
					</g>
				))}
				<DPlate p={PLATES.zones} cx={Z.cx} cy={Z.cy} w={Z.w} o={prog(f, K10.narrow, 12)} />
				<CrossChip x={420} y={730} text="biggest zone = best medicine?" at={K10.narrow + 4} cross={K10.produced + 10} size={32} />
				<Sx x={RZ.x} y={960} text="Zone shows the plate, not the patient." size={36} color={TEAL} hand weight={700} at={K10.cond + 30} />
				{void K10.strain}{void ptOf}{void AMBER}{void GREEN}{void INK_SOFT}{void kOf}
			</Overlay>
		</>
	);
};
