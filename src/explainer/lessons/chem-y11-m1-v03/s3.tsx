// Y11 Chem M1 V03 scenes 12 to 17: two HSC-style attempts (the whole card and a neutral picture from the first frame,
// the ring full from "Pause here to answer." and then the 10 s countdown), brief feedback (navy givens strip, green
// framed answers, one red crossed slip), the handoff basin losing its water as steam (the final frame V04 opens on) and
// the key notes with the "Undissolved: filter it out." card.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Givens, Lines, QTag} from '../chem-y11-m1-v01/s3';
import {BASIN, CUSO4, CUSO4_X, SANDB, hold, sc} from './common';
import {
	AMB, Card, Checklist, Chip, Fade, Framed, Glyph, Heading, INK, PURE, PauseRing, PenArrow, Plate, RED, Rich, SAND_INK, SVG, Sx, VIOL, Wisps, Write, gx, gy, ph, prog,
} from './parts';
import type {G, Seg} from './parts';
import {Curve} from './parts';
import {KNO3} from './s2';

const GOOD = '#23704a';

// ---------- 12. attempt 1 ----------
const K12 = cues(sc('attempt-1'), {pause: 'Pause here'});
export const SceneAttempt1: React.FC = () => (
	<SVG>
		<Heading text="Your turn" at={0} />
		<QTag />
		<Card h={700} />
		<Lines x={140} y={270} size={38} lh={58} lines={[
			[{t: 'A mixture contains clean sand, water and dissolved potassium nitrate.'}],
			[{t: 'Describe how to obtain (a) dry sand and (b) dry potassium nitrate'}],
			[{t: 'crystals from this mixture. Justify each step by referring to a'}],
			[{t: 'physical property.'}],
		]} />
		<Sx x={140} y={560} text="(4 marks)" size={34} color={INK} weight={700} at={-1000} />
		<Plate p={SANDB} x={1490} y={270} h={390} />
		<PauseRing h={hold('attempt-1')} at={K12.pause} x={140} y={936} cx={1640} cy={720} whole />
	</SVG>
);

// ---------- 13. feedback 1 ----------
const K13 = cues(sc('feedback-1'), {filter: 'Filter first', sand: 'The sand is', rinse: 'Rinse it', next: 'Next', kno: 'Potassium nitrate', filt2: 'Filter them', cr: 'Crystallising before', avoid: 'avoid'});
const GM: G = {x: 1540, y: 600, w: 220, h: 150, x0: 0, x1: 85, y0: 0, y1: 180};
export const SceneFeedback1: React.FC = () => (
	<SVG>
		<Heading text="Your turn" at={-1000} />
		<Givens segs={[{t: 'clean sand     |     water     |     dissolved potassium nitrate'}]} />
		<Plate p={SANDB} x={1580} y={290} h={200} />
		<Framed x={110} y={370} segs={[{t: '(a) filter, rinse, dry', c: GOOD}]} at={K13.filter} size={44} />
		<Rich x={130} y={436} segs={[{t: 'sand is '}, {t: 'insoluble', c: SAND_INK}, {t: ' and too big for the pores, so it stays as the residue'}]} size={34} weight={700} at={K13.sand} />
		<Rich x={130} y={482} segs={[{t: 'rinse with a little distilled water, then dry it'}]} size={34} weight={700} at={K13.rinse} />
		<Framed x={110} y={600} segs={[{t: '(b) concentrate, cool slowly, filter, dry', c: GOOD}]} at={K13.next} size={44} />
		<Rich x={130} y={666} segs={[{t: 'heat the filtrate to concentrate it, then let it cool slowly'}]} size={34} weight={700} at={K13.next + 10} />
		<Rich x={130} y={712} segs={[{t: 'potassium nitrate is much less soluble when cold, so crystals form', c: '#9c5a00'}]} size={34} weight={700} at={K13.kno} />
		<Fade at={K13.kno}>
			<path d={`M${GM.x},${GM.y} L${GM.x},${GM.y + GM.h} L${GM.x + GM.w},${GM.y + GM.h}`} fill="none" stroke={INK} strokeWidth={3} />
			<Sx x={GM.x + GM.w} y={GM.y + GM.h + 34} text="temperature" size={28} color={INK} anchor="end" weight={700} at={-1000} />
		</Fade>
		<Curve g={GM} fn={KNO3} t0={0} upto={useCurrentFrame() >= K13.kno ? 80 : 0} color={AMB} width={5} />
		<PenArrow a={[gx(GM, 78), gy(GM, 160)]} b={[gx(GM, 26), gy(GM, 40)]} at={K13.kno + 14} color={AMB} bend={0.15} width={4} />
		<Chip x={110} y={760} segs={[{t: 'crystallise first, then filter'}]} at={K13.cr} size={40} color={RED} strike={K13.avoid} />
		<Write x={110} y={900} text="sand ends up in the crystals" at={K13.avoid + 6} size={44} color={RED} />
		{void K13.filt2}
	</SVG>
);

// ---------- 14. attempt 2 ----------
const K14 = cues(sc('attempt-2'), {pause: 'Pause here'});
export const SceneAttempt2: React.FC = () => (
	<SVG>
		<Heading text="Last one" at={0} />
		<QTag />
		<Card h={700} />
		<Lines x={140} y={270} size={38} lh={58} lines={[
			[{t: 'A student pours a blue solution of copper(II) sulfate through filter'}],
			[{t: 'paper. The filtrate is just as blue as the original solution. The'}],
			[{t: 'student concludes that the filter paper must be faulty.'}],
		]} />
		<Lines x={140} y={470} size={38} lh={58} lines={[
			[{t: "(a)  Explain why the student's conclusion is incorrect."}],
			[{t: '(b)  Describe how solid copper(II) sulfate crystals could be'}],
			[{t: '       obtained from the solution.'}],
		]} />
		<Sx x={140} y={690} text="(3 marks)" size={34} color={INK} weight={700} at={-1000} />
		<Plate p={CUSO4} x={1530} y={250} h={420} />
		<PauseRing h={hold('attempt-2')} at={K14.pause} x={140} y={936} cx={1640} cy={720} whole />
	</SVG>
);

// ---------- 15. feedback 2 ----------
const K15 = cues(sc('feedback-2'), {paper: 'The paper', cu: 'The copper sulfate', sep: 'separate ions', toget: 'To get crystals', dry: 'dry them', swap: 'Swapping', avoid: 'avoid'});
export const SceneFeedback2: React.FC = () => {
	const f = useCurrentFrame();
	const P = {cx: 1640, cy: 400, r: 130};
	return (
		<SVG>
			<Heading text="Last one" at={-1000} />
			<Givens segs={[{t: 'blue copper(II) sulfate solution     |     filtrate just as blue'}]} />
			<Framed x={110} y={370} segs={[{t: '(a) dissolved ions pass through the pores', c: GOOD}]} at={K15.paper} size={44} />
			<Rich x={130} y={436} segs={[{t: 'copper(II) and sulfate ions are far smaller than the pores,'}]} size={34} weight={700} at={K15.cu} />
			<Rich x={130} y={482} segs={[{t: 'so they pass through with the water: the paper is working', c: VIOL}]} size={34} weight={700} at={K15.sep + 20} />
			<g>
				<defs><clipPath id="v3fb2"><circle cx={P.cx} cy={P.cy} r={P.r - 3} /></clipPath></defs>
				<circle cx={P.cx} cy={P.cy} r={P.r} fill="#dcebf7" />
				<g clipPath="url(#v3fb2)">
					<rect x={P.cx - P.r} y={P.cy - 14} width={2 * P.r} height={28} fill="#d9c9a6" />
					{Array.from({length: 5}, (_, i) => <rect key={i} x={P.cx - P.r + 24 + i * 50} y={P.cy - 16} width={18} height={32} rx={6} fill="#dcebf7" />)}
					{Array.from({length: 8}, (_, i) => {
						const t = (f * 1.5 + i * 32) % 260;
						const x = P.cx - P.r + 33 + (i % 5) * 50, y = P.cy - P.r + t;
						return i % 2 ? <g key={i}><circle cx={x} cy={y} r={11} fill="#d2691e" stroke="#7a3a10" strokeWidth={2} />{[0, 1, 2, 3].map(k => <circle key={k} cx={x + Math.cos(k * 1.57) * 13} cy={y + Math.sin(k * 1.57) * 13} r={6} fill="#e8553a" stroke="#7a3a10" strokeWidth={1.5} />)}</g> : <Glyph key={i} k="Cu" x={x} y={y} u={11} />;
					})}
				</g>
				<circle cx={P.cx} cy={P.cy} r={P.r} fill="none" stroke={INK} strokeWidth={5} />
				<Sx x={P.cx} y={P.cy + P.r + 36} text="Cu^{2+} and SO_4^{2−} ions" size={30} color={INK} anchor="middle" weight={800} at={-1000} />
			</g>
			<Framed x={110} y={620} segs={[{t: '(b) concentrate, cool slowly, filter, dry', c: GOOD}]} at={K15.toget} size={44} />
			<Rich x={130} y={686} segs={[{t: 'heat gently, cool slowly, filter off the blue crystals, dry them'}]} size={34} weight={700} at={K15.toget + 20} />
			<Plate p={CUSO4_X} x={1580} y={600} h={220} at={K15.toget} />
			<Chip x={110} y={750} segs={[{t: 'use finer filter paper'}]} at={K15.swap} size={40} color={RED} strike={K15.avoid} />
			<Write x={110} y={900} text="paper can't catch dissolved ions" at={K15.avoid + 6} size={44} color={RED} />
			{void K15.dry}{void prog}
		</SVG>
	);
};

// ---------- 16. handoff (final frame; V04 opens on it) ----------
const K16 = cues(sc('handoff'), {notice: 'Notice what', left: 'It left as', lost: 'lost', some: 'Sometimes', two: 'two liquids', next: 'Next time', better: 'better'});
export const HB16 = {x: 360, y: 210, w: 620};
export const HandoffBoard: React.FC<{lostAt?: number; twoAt?: number; nextAt?: number}> = ({lostAt = -1000, twoAt = -1000, nextAt = -1000}) => {
	const k = HB16.w / BASIN.box[2], h = BASIN.box[3] * k;
	const X = (u: number) => HB16.x + (u - BASIN.box[0]) * k, Y = (v: number) => HB16.y + (v - BASIN.box[1]) * k;
	return (
		<>
			<Plate p={BASIN} x={HB16.x} y={HB16.y} h={h} />
			<Wisps x0={X(420)} x1={X(940)} y={Y(470)} n={7} />
			<PenArrow a={[X(700), Y(420)]} b={[X(700), Y(90)]} at={lostAt - 12} color={PURE} bend={0.25} width={5} />
			<Sx x={1120} y={360} text="water lost as steam" size={48} color={INK} weight={800} at={lostAt} />
			<line x1={1110} y1={346} x2={X(900)} y2={Y(230)} stroke={INK} strokeWidth={3} opacity={lostAt < -100 ? 1 : 0} />
			<Chip x={1120} y={500} segs={[{t: 'catch the water?'}]} at={twoAt - 30} size={46} color={PURE} />
			<Chip x={1120} y={620} segs={[{t: 'two liquids?'}]} at={twoAt} size={46} color={PURE} />
			<Chip x={960} y={110} segs={[{t: 'Next: why does a fractionating column separate liquids better?'}]} at={nextAt} size={38} color={PURE} anchor="middle" />
		</>
	);
};
export const SceneHandoff: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<SVG>
			<HandoffBoard lostAt={K16.lost} twoAt={K16.two} nextAt={K16.better - 20} />
			<line x1={1110} y1={346} x2={HB16.x + (900 - BASIN.box[0]) * (HB16.w / BASIN.box[2])} y2={HB16.y + (230 - BASIN.box[1]) * (HB16.w / BASIN.box[2])} stroke={INK} strokeWidth={3} opacity={prog(f, K16.lost, 10)} />
			<Checklist sandAt={-1000} saltAt={-1000} />
			{void K16.notice}{void K16.left}{void K16.some}{void K16.next}
		</SVG>
	);
};

// ---------- 17. key notes ----------
const NOTES: Seg[][][] = [
	[[{t: 'Filtration: separates an '}, {t: 'insoluble', c: SAND_INK}, {t: ' solid from a liquid'}], [{t: 'by particle size.'}]],
	[[{t: 'Residue stays on the paper;'}], [{t: 'dissolved solids pass through in the filtrate.'}]],
	[[{t: 'A clear filtrate can still be a solution.'}], [{t: 'Rinse the residue before drying.'}]],
	[[{t: 'Crystallise: heat gently to saturation, stop before dry,'}], [{t: 'cool, filter, dry.'}]],
	[[{t: 'Filter first, then crystallise.'}], [{t: 'Crystals leave most impurities behind.'}]],
];
export const SceneNotes: React.FC = () => {
	let y = 300;
	const rows = NOTES.map((lines, i) => {
		const y0 = y;
		y += lines.length * 50 + 26;
		return (
			<Fade key={i} at={8 + i * 6}>
				<circle cx={112} cy={y0 - 12} r={8} fill={AMB} />
				{lines.map((l, kk) => <Rich key={kk} x={140} y={y0 + kk * 50} segs={l} size={38} weight={700} />)}
			</Fade>
		);
	});
	return (
		<SVG>
			<Write x={96} y={150} text="Key notes: what to write in your book" at={2} size={60} color={INK} cps={40} />
			<Write x={96} y={214} text="Pause the video if you need more time to copy." at={40} size={38} color={'#9c5a00'} />
			{rows}
			<Fade at={20}>
				<rect x={1260} y={290} width={564} height={360} rx={22} fill="#fffdf8" stroke={INK} strokeWidth={5} />
				<rect x={1270} y={300} width={544} height={340} rx={16} fill="none" stroke={INK} strokeWidth={2} />
				<Sx x={1300} y={350} text="memory aid" size={30} color={INK} hand at={-1000} />
				<Sx x={1300} y={440} text="Undissolved:" size={52} color={SAND_INK} hand at={-1000} />
				<Sx x={1300} y={500} text="filter it out." size={52} color={SAND_INK} hand at={-1000} />
				<Sx x={1300} y={570} text="Dissolved:" size={52} color={VIOL} hand at={-1000} />
				<Sx x={1300} y={626} text="crystallise it out." size={52} color={VIOL} hand at={-1000} />
			</Fade>
			<Checklist sandAt={-1000} saltAt={-1000} o={0} />
		</SVG>
	);
};
void ph; void Plate;
