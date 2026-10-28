// M7 P01 (Biology practical) scenes 5 to 8: controls and repeats (the minus cup stays clear, the plus cup turns pink;
// the green controls rows, then accurate, reliable and valid lines; the sealed teacher's record, a faint second run
// with a new starter, the crossed "one run" chip); test the cups (all eight turn pink; "now: yes; first: no; when:
// no"); trace the source (row-by-row wipe of the pink well plate, partner arrows and lit contact-sheet cells, the start
// row dimmed and crossed for real outbreaks, the contact tracing gloss); the epidemic curve (bars 1, 1, 2, 4 with the
// plate's new wells pulsing, the running total with x2 hops, the one-jug graph and the crossed chip).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Heading, Overlay} from '../bio-m5-b13/shared';
import {S} from './common';
import {
	AMBER, AMBER_INK, Bench, CTag, ContactSheet, Cup, CupRow, DrawPath, Dropper, EDGE, FallDrop, GREEN, GREYT, GREY_INK, GTag, INK, INK_SOFT, LET, MistakeChip, PINK, PINKS, QUESTION,
	ROW, RZ, Rail, RowBox, Sx, TEAL, TERRA, WText, WellArrow, WellPlate, cupH, cupX, dropTip, prog, pulse, smooth, vis, wellPt, wellR,
} from './parts';
import type {Pt, RowG, WellG} from './parts';

const rim = (g: RowG, i: number): Pt => [cupX(g, i), g.y - cupH(g.w) * 0.3];

// ---------- 5. Controls and repeats ----------
const K5 = cues(S('controls-repeats'), {two: 'You need two', neg: 'The negative control', clear: 'should stay clear', pos: 'The positive control', works: 'indicator works', record: "teacher's secret record", repeat: 'repeat with a', reliable: "it's reliable"});
const R5: RowG = {x0: 130, dx: 112, y: 520, w: 90};
export const SceneControls: React.FC = () => {
	const f = useCurrentFrame();
	const negX = 1050, posX = 1170;
	const dTip = dropTip(1110, 320, 110);
	const ctlDim = prog(f, K5.record, 12);
	const vra = [
		{t: "accurate: traced starter matches the teacher's record", at: K5.record + 10},
		{t: 'reliable: repeat runs, new starter, same method, tracing still works', at: K5.reliable + 6},
		{t: 'valid: only the contacts decide who turns pink; both controls pass', at: K5.reliable + 50},
	];
	return (
		<>
			<Heading text={QUESTION} at={-200} size={54} />
			<Overlay>
				<Rail lit={2} at={-100} />
				<Bench />
				<CupRow g={{...R5, y: 360, w: 60}} at={K5.repeat} letters={false} o={() => 0.45} outline={i => (i === 5 ? vis(f, K5.repeat + 10, K5.repeat + 60, 10) : 0)} />
				<CupRow g={R5} at={-100} />
				{[{x: negX, s: '−', at: K5.neg, pk: 0}, {x: posX, s: '+', at: K5.pos, pk: prog(f, K5.pos + 40, 14)}].map(c => (
					<g key={c.s} opacity={prog(f, c.at, 12)}>
						<Cup cx={c.x} cy={R5.y} w={R5.w} pink={c.pk} />
						<circle cx={c.x} cy={R5.y - cupH(R5.w) / 2 - 34} r={20} fill="#dcefe3" stroke={GREEN} strokeWidth={3} />
						<Sx x={c.x} y={R5.y - cupH(R5.w) / 2 - 24} text={c.s} size={32} color={GREEN} weight={800} anchor="middle" at={-100} />
					</g>
				))}
				<Dropper cx={1110} cy={320} h={110} o={vis(f, K5.clear - 20, K5.record, 10)} label={false} />
				<FallDrop a={dTip} b={rim(R5, 0).map((v, k) => (k === 0 ? negX : v)) as Pt} at={K5.clear} dur={16} color="#f4d9e8" />
				<FallDrop a={dTip} b={[posX, rim(R5, 0)[1]]} at={K5.pos + 24} dur={16} color="#f4d9e8" />
				<g opacity={1 - 0.5 * ctlDim}>
					<RowBox x={RZ.x} y={260} w={RZ.w} h={130} at={K5.neg} color={ctlDim > 0.5 ? EDGE : GREEN} />
					<WText x={RZ.x + 22} y={304} text="negative control: unmixed water → stays clear → no contamination" size={27} maxW={RZ.w - 44} color={ctlDim > 0.5 ? GREY_INK : GREEN} hand weight={700} at={K5.clear + 10} />
					<RowBox x={RZ.x} y={404} w={RZ.w} h={130} at={K5.pos} color={ctlDim > 0.5 ? EDGE : GREEN} />
					<WText x={RZ.x + 22} y={448} text="positive control: base → pink → the indicator works" size={27} maxW={RZ.w - 44} color={ctlDim > 0.5 ? GREY_INK : GREEN} hand weight={700} at={K5.works} />
				</g>
				<RowBox x={RZ.x} y={560} w={RZ.w} h={420} at={K5.record} color={AMBER_INK} />
				{vra.map((v, i) => <WText key={i} x={RZ.x + 22} y={604 + i * 128} text={v.t} size={27} maxW={RZ.w - 44} color={INK} hand weight={700} at={v.at} />)}
				<g opacity={prog(f, K5.record, 12)}>
					<rect x={110} y={690} width={300} height={70} rx={10} fill="#e9e4da" stroke={GREYT} strokeWidth={2.5} />
					<path d="M110,690 L260,735 L410,690" fill="none" stroke={GREYT} strokeWidth={2} />
					<Sx x={260} y={790} text="teacher's record: starter" size={22} color={GREY_INK} weight={700} anchor="middle" at={-100} />
				</g>
				<CTag x={460} y={690} text="repeat: new starter, same method" at={K5.repeat + 14} color={AMBER_INK} size={28} />
				<MistakeChip x={460} y={790} text="one run is enough" at={K5.reliable - 10} cross={K5.reliable + 16} size={24} />
				<GTag x={110} y={880} text="to test a variable, change one thing between runs: for example, two 'immune' cups that only ever hold water" at={K5.reliable + 30} size={15} />
				{void K5.two}{void TEAL}{void PINK}{void INK_SOFT}
			</Overlay>
		</>
	);
};

// ---------- 6. Test the cups ----------
const K6 = cues(S('test-cups'), {after: 'After round three', adds: 'adds a drop', all: 'All eight turn', final: 'The final test', first: 'who was first', saved: 'saved samples matter'});
export const SceneTest: React.FC = () => {
	const f = useCurrentFrame();
	const dTip = dropTip(640, 330, 140);
	return (
		<>
			<Heading text={QUESTION} at={-200} size={54} />
			<Overlay>
				<Rail lit={3} at={4} />
				<Bench />
				<CupRow at={-100} pink={i => prog(f, K6.adds + 30 + i * 6, 12)} />
				<Dropper cx={640} cy={330} h={140} o={vis(f, K6.adds - 10, K6.final, 10)} />
				{LET.map((_, i) => <FallDrop key={i} a={dTip} b={rim(ROW, i)} at={K6.adds + 14 + i * 6} dur={14} color="#f4d9e8" />)}
				<CTag x={110} y={700} text="8 of 8 pink" at={K6.all + 10} color={PINK} size={34} />
				<CTag x={420} y={700} text="now: yes; first: no; when: no" at={K6.first} color={AMBER_INK} size={38} />
				<ContactSheet g={{cx: 1575, cy: 620, w: 460}} at={0} colAt={[-100, -100, -100]} />
				<GTag x={RZ.x} y={940} text="all three rounds recorded" at={6} size={20} />
				{void K6.after}{void K6.saved}
			</Overlay>
		</>
	);
};

// ---------- 7. Read the samples and trace ----------
const K7 = cues(S('trace-source'), {adds: 'adds indicator to', read: 'row by row', start: 'At the start', r1: 'After round one', mixed: 'mixed with D', without: 'Without the start', r2: 'After round two', real: 'Real outbreaks have', symptoms: 'symptoms began', tracing: 'called contact tracing'});
const W7: WellG = {cx: 700, cy: 590, w: 860};
export const SceneTrace: React.FC = () => {
	const f = useCurrentFrame();
	const rowAt = [K7.start, K7.r1, K7.r2, K7.r2 + 140];
	const startDim = Math.max(vis(f, K7.without + 10, K7.without + 70, 10), prog(f, K7.real, 12));
	const r = wellR(W7);
	const P = (c: number, row: number) => wellPt(W7, c, row);
	const [sx, sy] = P(0, 0);
	return (
		<>
			<Heading text={QUESTION} at={-200} size={54} />
			<Overlay>
				<Rail lit={3} at={-100} />
				<Bench />
				<WellPlate g={W7} id="p01-t" at={0} rowAt={rowAt} dimRow={[startDim, 0, 0, 0]} size={22} />
				<circle cx={P(3, 0)[0]} cy={P(3, 0)[1]} r={r * 1.25} fill="none" stroke={AMBER} strokeWidth={5} opacity={vis(f, K7.start + 20, K7.r1, 10)} />
				<WellArrow a={P(3, 1)} b={P(2, 1)} at={K7.mixed} bow={-50} />
				<WellArrow a={P(2, 2)} b={P(0, 2)} at={K7.r2 + 40} bow={-50} />
				<WellArrow a={P(3, 2)} b={P(6, 2)} at={K7.r2 + 54} bow={-60} />
				{f >= K7.real + 10 ? <g><DrawPath d={`M${sx - 60},${sy - 26} L${sx - 20},${sy + 26}`} at={K7.real + 10} dur={8} color={GREYT} width={5} /><DrawPath d={`M${sx - 20},${sy - 26} L${sx - 60},${sy + 26}`} at={K7.real + 14} dur={8} color={GREYT} width={5} /></g> : null}
				<CTag x={110} y={900} text="start: D only → D was the starter" at={K7.start + 24} color={AMBER_INK} size={30} />
				<GTag x={110} y={990} text="index case: the first case in an outbreak" at={K7.start + 40} size={18} />
				<CTag x={680} y={900} text="C met D" at={K7.mixed + 10} color={AMBER_INK} size={30} dim={prog(f, K7.r2, 10)} out={K7.r2 + 30} />
				<GTag x={300} y={262} text="after round 1 alone: C or D?" at={K7.without + 10} out={K7.r2} size={22} />
				<CTag x={680} y={900} text="each new case met a pink partner" at={K7.r2 + 40} color={AMBER_INK} size={30} dim={prog(f, K7.real, 10)} />
				<GTag x={300} y={262} text="no one is tested before an outbreak" at={K7.real + 16} size={22} />
				<GTag x={680} y={990} text="when symptoms began: the real version of the saved samples" at={K7.symptoms + 10} size={18} />
				<ContactSheet g={{cx: 1575, cy: 560, w: 440}} at={0} colAt={[-100, -100, -100]} light={{C1: K7.mixed, A2: K7.r2 + 40, G2: K7.r2 + 54}} />
				<CTag x={RZ.x} y={850} text="contact tracing: finding who each case met" at={K7.tracing} color={TEAL} size={30} maxW={560} />
				<GTag x={RZ.x} y={990} text="b10: how health teams use it to stop spread" at={K7.tracing + 16} size={18} />
				{void K7.adds}{void K7.read}{void INK}{void smooth}
			</Overlay>
		</>
	);
};

// ---------- 8. The epidemic curve ----------
const K8 = cues(S('epidemic-curve'), {count: 'count the new', one1: 'one at the', one2: 'one after round', two: 'two after round', four: 'four after round', plotted: 'Plotted against time', curve: 'an epidemic curve', every: 'every infected cup', doubled: 'doubled each round', n: 'one two four eight', growing: 'That growing shape', jug: 'one contaminated jug', peak: 'one sharp peak'});
const W8: WellG = {cx: 430, cy: 500, w: 420};
const G8 = {x0: 720, x1: 1200, top: 330, base: 740};
export const SceneCurve: React.FC = () => {
	const f = useCurrentFrame();
	const vals = [1, 1, 2, 4], at = [K8.one1, K8.one2, K8.two, K8.four];
	const NEW = [[3], [2], [0, 6], [1, 4, 5, 7]];
	const bw = 80, step = (G8.x1 - G8.x0) / 4, uy = (G8.base - G8.top) / 4.4;
	const bx = (i: number) => G8.x0 + step * (i + 0.5);
	const r = wellR(W8);
	const tot = ['1', '2', '4', '8'];
	const S2 = {x0: 1340, x1: 1800, top: 520, base: 760};
	const step2 = (S2.x1 - S2.x0) / 4, uy2 = (S2.base - S2.top) / 8.8;
	return (
		<>
			<Heading text={QUESTION} at={-200} size={54} />
			<Overlay>
				<Rail lit={4} at={4} />
				<Bench />
				<WellPlate g={W8} id="p01-c" at={0} rowAt={[-100, -100, -100, -100]} size={16} />
				{NEW.map((cs, row) => cs.map(c => {
					const [x, y] = wellPt(W8, c, row);
					const p = pulse(f, at[row], 40);
					return <circle key={row + '-' + c} cx={x} cy={y} r={r * (1.2 + 0.3 * p)} fill="none" stroke={AMBER} strokeWidth={4} opacity={Math.max(p, 0.5 * vis(f, at[row], at[row + 1] ?? K8.curve, 8))} />;
				}))}
				<g opacity={prog(f, K8.count, 12)}>
					<line x1={G8.x0} y1={G8.base} x2={G8.x1} y2={G8.base} stroke={INK_SOFT} strokeWidth={3} />
					<line x1={G8.x0} y1={G8.top} x2={G8.x0} y2={G8.base} stroke={INK_SOFT} strokeWidth={3} />
					{[0, 1, 2, 3, 4].map(v => <Sx key={v} x={G8.x0 - 10} y={G8.base - v * uy + 7} text={`${v}`} size={20} color={GREY_INK} weight={600} anchor="end" at={-100} />)}
					{['start', '1', '2', '3'].map((t, i) => <Sx key={t} x={bx(i)} y={G8.base + 30} text={t} size={22} color={GREY_INK} weight={700} anchor="middle" at={-100} />)}
					<Sx x={(G8.x0 + G8.x1) / 2} y={G8.base + 60} text="time (round)" size={22} color={INK} weight={700} anchor="middle" at={-100} />
					<Sx x={G8.x0} y={G8.top - 14} text="new cases" size={22} color={INK} weight={700} at={-100} />
				</g>
				{vals.map((v, i) => {
					const h = v * uy * smooth(prog(f, at[i], 18));
					return h > 0.5 ? <rect key={i} x={bx(i) - bw / 2} y={G8.base - h} width={bw} height={h} rx={6} fill={AMBER} /> : null;
				})}
				{[1, 2].map(i => <Sx key={'x' + i} x={(bx(i) + bx(i + 1)) / 2} y={G8.base - vals[i + 1] * uy - 20} text="×2" size={26} color={AMBER_INK} hand weight={700} anchor="middle" at={K8.doubled + 6 + i * 6} />)}
				<GTag x={G8.x0} y={814} text="propagated (person to person)" at={K8.growing} size={18} />
				<Sx x={G8.x0} y={905} text="infected:" size={24} color={GREY_INK} weight={700} at={K8.n} />
				{tot.map((t, i) => <Sx key={t} x={G8.x0 + 120 + i * 80} y={905} text={t} size={28} color={GREY_INK} weight={800} anchor="middle" at={K8.n + i * 8} />)}
				{[0, 1, 2].map(i => <Sx key={'h' + i} x={G8.x0 + 160 + i * 80} y={877} text="×2" size={18} color={GREY_INK} weight={700} anchor="middle" at={K8.n + 6 + i * 8} />)}
				<CTag x={RZ.x} y={262} text="epidemic curve: new cases against time" at={K8.curve} color={TEAL} size={30} maxW={560} />
				<CTag x={110} y={760} text="each pink cup met a clear one" at={K8.every + 6} color={AMBER_INK} size={30} maxW={560} />
				<GTag x={110} y={870} text="real curves grow like this only while" at={K8.growing + 10} size={16} />
				<GTag x={110} y={906} text="plenty of people can still catch it" at={K8.growing + 10} size={16} />
				<g opacity={prog(f, K8.jug, 12)}>
					<line x1={S2.x0} y1={S2.base} x2={S2.x1} y2={S2.base} stroke={GREYT} strokeWidth={3} />
					<line x1={S2.x0} y1={S2.top} x2={S2.x0} y2={S2.base} stroke={GREYT} strokeWidth={3} />
					<rect x={S2.x0 + step2 * 0.5 - 30} y={S2.base - 8 * uy2 * smooth(prog(f, K8.jug + 10, 16))} width={60} height={8 * uy2 * smooth(prog(f, K8.jug + 10, 16))} rx={5} fill="#b9b2a4" />
					{['start', '1', '2', '3'].map((t, i) => <Sx key={t} x={S2.x0 + step2 * (i + 0.5)} y={S2.base + 26} text={t} size={18} color={GREY_INK} weight={700} anchor="middle" at={-100} />)}
					<Sx x={S2.x0 + step2 * 0.5 + 40} y={S2.top + 20} text="8" size={22} color={GREY_INK} weight={800} at={-100} />
					<Sx x={S2.x0} y={S2.top - 12} text="new cases (one shared jug)" size={18} color={GREY_INK} weight={700} at={-100} />
					<GTag x={S2.x0 - 20} y={S2.base + 40} text="point source (one shared exposure)" size={16} at={-100} />
				</g>
				<CTag x={RZ.x} y={380} text="one shared source: one sharp peak" at={K8.peak} color={AMBER_INK} size={30} maxW={560} />
				<GTag x={RZ.x} y={870} text="real single-source cases bunch into one peak," at={K8.peak + 14} size={16} />
				<GTag x={RZ.x} y={906} text="about one incubation period wide" at={K8.peak + 14} size={16} />
				<MistakeChip x={110} y={970} text="lots ill at once means person-to-person spread" at={K8.peak + 10} cross={K8.peak + 34} size={22} />
				{void K8.plotted}{void TERRA}{void PINKS}{void EDGE}{void Cup}
			</Overlay>
		</>
	);
};
