// P03 (Biology practical) scenes 6 to 9: record (tally table, which total, working in the rows), pool the year group
// (four sheets slide together; class table with a pooled row), present (a column graph built to the conventions, with
// a crossed zoomed-axis inset) and the bead model (ten beads drawn and returned; a dot-strip chart of sample results).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, BEADS, CARD, CLASS1, CLASS1_CLASSIFIED, CLASS1_TOTAL, CLASSES, CZ, ColumnGraph, Cross, DataTable, Desk, DotStrip, DrawPath, EDGE, FREE, Fade,
	GRAPH_DATA, GREYT, GreyTag, INK, INK_SOFT, MistakeChip, Overlay, PLP, POOLED, Panel, PlateB, QMark, Question, Rail, Ring, S, SpanBracket, Sx, TEAL, Tally, lerp,
	pctOf, prog, pulse, rng, stripX,
} from './shared';

// ---------- 6. Record: the table and the frequency ----------
const K6 = cues(S('record-frequency'), {
	record: 'Record the counts in a table', category: 'category', tally: 'tally', count: 'count and frequency', returned: 'returned thirty slips', nine: 'nine attached', nineteen: 'nineteen free',
	two: 'two unsure', freq: 'Frequency is the count divided', which: 'But which total', leave: 'Leave out the unsure slips', say: 'say so in your table', p32: 'thirty-two per cent', p68: 'sixty-eight per cent',
});
const TC = [200, 330, 130, 350];
const TX = TC.map((_, i) => CZ.x + TC.slice(0, i).reduce((a, b) => a + b, 0));
const TROW = 72, TY0 = 260;
export const SceneRecordP03: React.FC = () => {
	const f = useCurrentFrame();
	const heads = [{t: 'category', at: K6.category}, {t: 'tally', at: K6.tally}, {t: 'count', at: K6.count}, {t: 'frequency (%)', at: K6.count + 12}];
	const rows = [
		{t: 'attached', n: CLASS1.attached, at: K6.nine, c: AMBER_INK},
		{t: 'free', n: CLASS1.free, at: K6.nineteen, c: FREE},
		{t: 'unsure', n: CLASS1.unsure, at: K6.two, c: INK_SOFT},
	];
	const dimU = prog(f, K6.leave, 12);
	return (
		<>
			<Question />
			<Overlay>
				<Rail lit={3} at={K6.record} />
				<Desk />
				<PlateB p={PLP.clipboard} cx={300} cy={850} w={150} o={prog(f, 0, 12)} />
				<Fade at={K6.record}>
					<rect x={CZ.x} y={TY0} width={CZ.w} height={TROW * 5} rx={14} fill={CARD} stroke={EDGE} strokeWidth={3} />
					<rect x={CZ.x} y={TY0} width={CZ.w} height={TROW} rx={14} fill="#efe6d4" />
				</Fade>
				{heads.map((h, i) => <Sx key={i} x={TX[i] + 18} y={TY0 + 46} text={h.t} size={28} color={INK} weight={800} at={h.at} />)}
				{rows.map((r, i) => {
					const y = TY0 + TROW * (i + 1);
					return (
						<g key={r.t} opacity={i === 2 ? 1 - 0.55 * dimU : 1}>
							<line x1={CZ.x + 10} y1={y} x2={CZ.x + CZ.w - 10} y2={y} stroke={EDGE} strokeWidth={2} opacity={prog(f, r.at, 10)} />
							<Sx x={TX[0] + 18} y={y + 46} text={r.t} size={32} color={r.c} weight={700} at={r.at} />
							<Tally x={TX[1] + 18} y={y + 20} n={r.n} p={prog(f, r.at, 24)} h={32} gap={9} />
							<Sx x={TX[2] + 40} y={y + 46} text={String(r.n)} size={34} color={INK} weight={800} at={r.at + 20} />
						</g>
					);
				})}
				<g opacity={prog(f, K6.returned, 10)}>
					<line x1={CZ.x + 10} y1={TY0 + TROW * 4} x2={CZ.x + CZ.w - 10} y2={TY0 + TROW * 4} stroke={INK_SOFT} strokeWidth={2.5} />
					<Sx x={TX[0] + 18} y={TY0 + TROW * 4 + 46} text="total slips" size={30} color={INK} weight={700} />
					<Sx x={TX[2] + 40} y={TY0 + TROW * 4 + 46} text={String(CLASS1_TOTAL)} size={34} color={INK} weight={800} />
				</g>
				<Sx x={TX[3] + 18} y={TY0 + TROW + 46} text={`${CLASS1.attached} / ${CLASS1_CLASSIFIED} × 100 = ${pctOf(CLASS1.attached, CLASS1_CLASSIFIED)}%`} size={28} color={AMBER_INK} weight={800} at={K6.p32 - 30} />
				<Sx x={TX[3] + 18} y={TY0 + TROW * 2 + 46} text={`${CLASS1.free} / ${CLASS1_CLASSIFIED} × 100 = ${pctOf(CLASS1.free, CLASS1_CLASSIFIED)}%`} size={28} color={FREE} weight={800} at={K6.p68 - 30} />
				<Sx x={TX[3] + 18} y={TY0 + TROW * 3 + 46} text="left out" size={28} color={INK_SOFT} weight={700} at={K6.leave + 10} />
				<Sx x={CZ.x + 10} y={TY0 + TROW * 5 + 44} text={`frequency of the ${CLASS1_CLASSIFIED} classified (${CLASS1.unsure} unsure left out)`} size={28} color={INK} weight={600} at={K6.say} />
				<GreyTag x={CZ.x + 700} y={TY0 + TROW * 5 + 60} text="example data" at={K6.returned + 10} size={22} />
				{/* left zone: formula and which total */}
				<Fade at={K6.freq}>
					<Panel x={110} y={270} w={660} h={110} stroke={AMBER} />
					<Sx x={140} y={340} text="frequency = count / total × 100" size={38} color={INK} weight={800} />
				</Fade>
				<g opacity={prog(f, K6.which, 12)}>
					<Panel x={110} y={420} w={300} h={90} />
					<Sx x={130} y={476} text={`total slips: ${CLASS1_TOTAL}`} size={30} color={INK} weight={700} />
					<Panel x={470} y={420} w={300} h={90} stroke={TEAL} />
					<Sx x={490} y={476} text={`classified: ${CLASS1_CLASSIFIED}`} size={30} color={INK} weight={700} />
					<QMark x={440} y={480} size={50} o={1 - prog(f, K6.leave, 10)} />
				</g>
				{f >= K6.leave + 10 ? <Ring cx={620} cy={465} rx={170} ry={60} at={K6.leave + 10} color={TEAL} /> : null}
				<Sx x={110} y={580} text="which total? say it in the table" size={32} color={AMBER_INK} hand at={K6.which + 10} />
				<Sx x={110} y={650} text={`check: ${pctOf(CLASS1.attached, CLASS1_CLASSIFIED)} + ${pctOf(CLASS1.free, CLASS1_CLASSIFIED)} = 100`} size={32} color={TEAL} hand at={K6.p68 + 30} />
			</Overlay>
		</>
	);
};

// ---------- 7. Pool the year group ----------
const K7 = cues(S('pool'), {
	one: 'One class is a small sample', pool: 'pool the results', four: 'from four classes', their: 'Their attached frequencies were', alto: 'Altogether', thirty: "that's thirty attached",
	about27: 'about twenty-seven per cent', jump: 'jump around', better: 'better estimate',
});
const COLS7 = [{w: 280, head: 'group'}, {w: 360, head: 'attached / classified'}, {w: 300, head: 'frequency'}];
export const ScenePoolP03: React.FC = () => {
	const f = useCurrentFrame();
	const slide = prog(f, K7.pool, 30);
	const rowsT = [...CLASSES.map((c, i) => [`class ${i + 1}`, `${c.a} / ${c.n}`, `${pctOf(c.a, c.n)}%`]), ['pooled', `${POOLED.a} / ${POOLED.n}`, `${pctOf(POOLED.a, POOLED.n)}%`]];
	const rowAt = [K7.their - 10, K7.their + 8, K7.their + 30, K7.their + 60, K7.alto];
	const hot = (r: number) => (r < 4 ? pulse(f, K7.jump + r * 8, 22) : 0);
	return (
		<>
			<Question />
			<Overlay>
				<Rail lit={3} />
				<Desk />
				<Panel x={CZ.x} y={250} w={CZ.w} h={66} />
				<Sx x={CZ.x + 20} y={294} text={`class 1: ${CLASS1.attached} attached, ${CLASS1.free} free, ${CLASS1.unsure} unsure;  ${CLASS1.attached} / ${CLASS1_CLASSIFIED} = ${pctOf(CLASS1.attached, CLASS1_CLASSIFIED)}%`} size={28} color={INK_SOFT} weight={600} />
				<DataTable x={CZ.x} y={350} cols={COLS7} rows={rowsT} rowAt={rowAt} at={K7.four} size={34} rowH={66} hot={hot} />
				<g opacity={prog(f, K7.alto, 12)}><rect x={CZ.x + 4} y={350 + 66 * 5 + 4} width={CZ.w * 0.93 - 8} height={58} rx={10} fill="none" stroke={INK} strokeWidth={3} /></g>
				{f >= K7.better ? <Ring cx={CZ.x + 470} cy={350 + 66 * 5 + 33} rx={500} ry={50} at={K7.better} color={TEAL} /> : null}
				<Sx x={CZ.x + 20} y={820} text="bigger sample: a better estimate" size={36} color={TEAL} hand at={K7.better + 10} />
				<Sx x={CZ.x + 20} y={870} text="class values jump around" size={30} color={AMBER_INK} hand at={K7.jump} />
				<GreyTag x={CZ.x + 520} y={846} text="add the counts, not the percentages" at={K7.alto + 10} size={22} />
				{/* four sheets slide together */}
				<Sx x={110} y={300} text="one class is a small sample" size={32} color={INK} hand at={K7.one} />
				{CLASSES.map((c, i) => {
					const x0 = 130 + i * 160, y0 = 360;
					const x = lerp(x0, 290, slide), y = lerp(y0, 380 + i * 6, slide);
					return (
						<g key={i} opacity={prog(f, K7.four - 10 + i * 4, 10)}>
							<rect x={x} y={y} width={140} height={190} rx={8} fill={CARD} stroke={INK_SOFT} strokeWidth={2} />
							<Sx x={x + 14} y={y + 34} text={`class ${i + 1}`} size={22} color={INK} weight={700} />
							<Tally x={x + 14} y={y + 56} n={c.a} h={22} gap={7} />
						</g>
					);
				})}
				<Sx x={290} y={640} text={`pooled: ${POOLED.a} of ${POOLED.n}`} size={34} color={INK} weight={800} at={K7.thirty} />
				<Sx x={290} y={690} text={`about ${pctOf(POOLED.a, POOLED.n)}%`} size={40} color={AMBER_INK} hand at={K7.about27} />
			</Overlay>
		</>
	);
};

// ---------- 8. Present: a column graph ----------
const K8 = cues(S('column-graph'), {
	present: 'To present it', column: 'column graph', because: 'because the classes are separate', put: 'Put the four classes', bottom: 'along the bottom', side: 'up the side',
	zero: 'starting from zero', gaps: 'Leave gaps between', title: 'give the graph a title', label: 'label both axes', units: 'with units on',
});
const G8 = {x: CZ.x + 150, y: 360, w: 800, h: 380};
export const SceneGraphP03: React.FC = () => {
	const f = useCurrentFrame();
	const slot = G8.w / GRAPH_DATA.length;
	return (
		<>
			<Question />
			<Overlay>
				<Rail lit={4} at={K8.present} />
				<Panel x={CZ.x} y={250} w={CZ.w} h={640} o={prog(f, K8.column, 12)} />
				<Sx x={CZ.x + 30} y={300} text="Frequency of attached earlobes in four Year 12 classes (example data)" size={24} color={INK} weight={800} at={K8.title} />
				<ColumnGraph x={G8.x} y={G8.y} w={G8.w} h={G8.h} data={GRAPH_DATA} at={K8.column} colAt={i => K8.put + 10 + i * 6} yLabel={f >= K8.label ? 'frequency of attached earlobes (%)' : undefined} xLabel={f >= K8.label + 10 ? 'group' : undefined} size={24} labels={f >= K8.bottom} />
				{f >= K8.zero ? <Ring cx={G8.x - 26} cy={G8.y + G8.h} rx={34} ry={26} at={K8.zero} /> : null}
				{f >= K8.gaps ? [0, 1, 2, 3].map(i => <SpanBracket key={i} x1={G8.x + slot * (i + 0.78)} x2={G8.x + slot * (i + 1.22)} y={G8.y + G8.h - 30} at={K8.gaps + i * 4} color={TEAL} up width={3} />) : null}
				<Sx x={CZ.x + 560} y={870} text="gaps: separate groups" size={28} color={TEAL} hand at={K8.gaps + 10} />
				{/* left zone */}
				<Sx x={110} y={300} text="column graph" size={40} color={INK} hand at={K8.column} />
				<Sx x={110} y={340} text="(a bar chart with vertical bars)" size={26} color={INK_SOFT} weight={600} at={K8.column + 8} />
				<MistakeChip x={110} y={380} text="line graph" at={K8.because} cross={K8.because + 20} size={30} />
				<Sx x={110} y={472} text="categories, not a continuous scale" size={26} color={AMBER_INK} hand at={K8.because + 26} />
				<g opacity={prog(f, K8.zero + 10, 12)}>
					<Panel x={110} y={500} w={600} h={380} />
					<ColumnGraph x={200} y={560} w={460} h={230} data={GRAPH_DATA} min={20} max={34} step={2} at={-30} size={18} labels={false} />
					<Sx x={140} y={540} text="axis starting at 20: differences look huge" size={24} color={INK_SOFT} weight={600} />
					<Cross x={430} y={680} s={110} at={K8.zero + 26} />
					<Sx x={140} y={850} text="axis must start at zero" size={32} color={AMBER_INK} hand at={K8.zero + 30} />
				</g>
			</Overlay>
		</>
	);
};

// ---------- 9. Why a bigger sample helps: a bead model ----------
const K9 = cues(S('bead-model'), {
	saw: 'You saw earlier', test: 'test it yourself', fill: 'Fill a bag', quarter: 'a quarter of them red', know: 'so you know the true frequency', draw: 'draw ten', count: 'count the red ones',
	back: 'put them back and shake', ten: 'Ten-bead samples gave', fifty: 'Fifty-bead samples gave', scatter: 'Small samples scatter', bigger: 'Bigger samples land closer',
});
const SX = CZ.x + 80, SW = 860, SY = 760;
export const SceneBeadsP03: React.FC = () => {
	const f = useCurrentFrame();
	const out = prog(f, K9.draw, 26) * (1 - prog(f, K9.back, 20));
	const shake = f > K9.back + 10 && f < K9.back + 40 ? Math.sin((f - K9.back) * 0.9) * 6 : 0;
	const r = rng(77);
	const tens = BEADS.ten.map(k => (k / 10) * 100), fifties = BEADS.fifty.map(k => (k / 50) * 100);
	return (
		<>
			<Question />
			<Overlay>
				<Rail lit={4} at={-100} />
				<Desk />
				<GreyTag x={CZ.x} y={250} text="B11: small samples bounce" at={K9.saw} size={24} />
				<g transform={`rotate(${shake} 260 820)`}><PlateB p={PLP.bag} cx={260} cy={820} w={250} o={prog(f, K9.fill, 12)} /></g>
				<Fade at={K9.quarter}>
					<Panel x={110} y={420} w={640} h={120} stroke={AMBER} />
					<Sx x={140} y={476} text={`${BEADS.total} beads: ${BEADS.red} red = ${pctOf(BEADS.red, BEADS.total)}%`} size={38} color={INK} weight={800} />
					<Sx x={140} y={520} text="so you know the true frequency" size={28} color={INK_SOFT} weight={600} />
				</Fade>
				{Array.from({length: 10}, (_, i) => {
					const tx = 430 + (i % 5) * 62, ty = 790 + Math.floor(i / 5) * 62;
					const jx = (r() - 0.5) * 20;
					const x = lerp(270, tx + jx, out), y = lerp(780, ty, out) - Math.sin(Math.PI * out) * 60;
					return out > 0.01 ? <PlateB key={i} p={i === 3 ? PLP.beadRed : PLP.beadWhite} cx={x} cy={y} w={46} o={Math.min(1, out * 2)} /> : null;
				})}
				<Sx x={430} y={970} text="1 red in 10 = 10%" size={30} color={INK} weight={700} at={K9.count} out={K9.back} />
				<Sx x={110} y={620} text="draw, count, put back, shake" size={32} color={AMBER_INK} hand at={K9.draw} />
				{/* the dot strip */}
				<Panel x={CZ.x} y={300} w={CZ.w} h={600} o={prog(f, K9.ten - 20, 12)} />
				<DotStrip x={SX} y={SY} w={SW} at={K9.ten - 20} />
				<Sx x={SX} y={470} text="samples of 10" size={30} color={AMBER_INK} weight={800} at={K9.ten} />
				{tens.map((v, i) => <circle key={i} cx={stripX(SX, SW, v)} cy={lerp(440, 530, prog(f, K9.ten + 20 + i * 18, 10))} r={16} fill={AMBER} stroke={AMBER_INK} strokeWidth={2.5} opacity={prog(f, K9.ten + 20 + i * 18, 8)} />)}
				<Sx x={SX} y={600} text="samples of 50" size={30} color={TEAL} weight={800} at={K9.fifty} />
				{fifties.map((v, i) => <circle key={i} cx={stripX(SX, SW, v)} cy={lerp(570, 660, prog(f, K9.fifty + 20 + i * 18, 10))} r={16} fill="#7fb0b5" stroke={TEAL} strokeWidth={2.5} opacity={prog(f, K9.fifty + 20 + i * 18, 8)} />)}
				<SpanBracket x1={stripX(SX, SW, Math.min(...tens))} x2={stripX(SX, SW, Math.max(...tens))} y={500} at={K9.scatter} up label="wide spread" color={AMBER_INK} size={30} />
				<SpanBracket x1={stripX(SX, SW, Math.min(...fifties))} x2={stripX(SX, SW, Math.max(...fifties))} y={690} at={K9.bigger} label="close to 25%" color={TEAL} size={30} />
				<GreyTag x={CZ.x + 20} y={920} text="example results" at={K9.ten + 10} size={22} />
			</Overlay>
		</>
	);
};
void AMBER; void DrawPath; void GREYT; void QMark;
