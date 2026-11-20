// Y11 Chem M1 V05 scenes 11 to 16: two HSC-style attempts (whole card and a neutral picture from the first frame,
// the ring full from "Pause here to answer."), brief feedback (navy givens strip, g01-style working rows with framed
// answers, one red crossed slip), the handoff bench (strip, balance with a blank readout, V03's sand and salt; the
// final frame V06 opens on) and the key notes with the "Spot over front" card.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Givens, Lines, QTag} from '../chem-y11-m1-v01/s3';
import {DYE, HOOK_SPOTS, hold, sc} from './common';
import {SALT, SAND} from '../chem-y11-m1-v01/common';
import {Balance, Chromatogram, balGeo} from '../chem-y11-m1-v06/parts';
import {
	AMB, Card, Chip, MIX, DevStrip, Dim, Fade, Framed, Heading, INK, Jar, PURE, PauseRing, Plate, RED, RF_INK, Rich, SLATE_INK, SVG, Sx, Write, jarGeo, plateMap, ph, spotY,
} from './parts';
import type {Seg} from './parts';

const GOOD = '#23704a';

// ---------- 11. attempt 1 ----------
const K11 = cues(sc('attempt-1'), {pause: 'Pause here'});
export const SceneAttempt1: React.FC = () => {
	const g = jarGeo(1560, 290, 380);
	return (
		<SVG>
			<Heading text="Your turn" at={0} />
			<QTag />
			<Card h={720} />
			<Lines x={140} y={262} size={38} lh={54} lines={[
				[{t: 'An unknown food dye was run alongside a standard sample of the'}],
				[{t: 'dye tartrazine, on the same chromatography paper in the same'}],
				[{t: 'solvent. The solvent front travelled 10.0 cm from the baseline,'}],
				[{t: "and the centre of the unknown's spot travelled 4.0 cm. Under"}],
				[{t: 'these conditions, tartrazine has an Rf value of 0.40.'}],
			]} />
			<Lines x={140} y={560} size={38} lh={54} lines={[
				[{t: '(a)  Calculate the Rf value of the unknown dye.'}],
				[{t: '(b)  A student concludes that the unknown dye must be'}],
				[{t: '       tartrazine. Evaluate this conclusion.'}],
			]} />
			<Jar x={1560} y={290} h={380}>
				<DevStrip x={g.cx - 26} y={g.Y(520)} w={52} h={g.Y(1370) - g.Y(520)} base={(g.Y(1370) - g.Y(520)) / 6} travel={0} spots={[]} />
			</Jar>
			<PauseRing h={hold('attempt-1')} at={K11.pause} x={140} y={960} cx={1660} cy={790} />
		</SVG>
	);
};

// ---------- 12. feedback 1 ----------
const K12 = cues(sc('feedback-1'), {rf: 'R F is', zero: ['zero', 3], matches: 'That matches', supports: 'supports', but: 'But it', another: 'another dye', running: 'Running both', ten: 'Ten divided', avoid: 'avoid'});
export const SceneFeedback1: React.FC = () => {
	const S = {x: 1560, y: 290, w: 120, h: 560};
	const b = S.h / 6, tr = 0.8 * (S.h - b);
	const by = S.y + S.h - b;
	return (
		<SVG>
			<Heading text="Your turn" at={-1000} />
			<Givens segs={[{t: 'front 10.0 cm     |     spot 4.0 cm     |     tartrazine Rf 0.40, same conditions'}]} />
			<DevStrip x={S.x} y={S.y} w={S.w} h={S.h} base={b} travel={tr} spots={[{c: DYE.yellow, rf: 0.4}]} dot={DYE.yellow} spotR={13} />
			<Dim x={S.x + S.w + 24} y0={by} y1={spotY(S.y, S.h, b, tr, 0.4)} at={K12.rf} label="4.0" color={RF_INK} />
			<Dim x={S.x + S.w + 110} y0={by} y1={by - tr} at={K12.rf + 10} label="10.0" color={PURE} />
			<Rich x={110} y={390} segs={[{t: '(a)  Rf = 4.0 ÷ 10.0 ='}]} size={52} at={K12.rf} />
			<Framed x={760} y={390} segs={[{t: '0.40', c: GOOD}]} at={K12.zero} size={52} />
			<Rich x={130} y={460} segs={[{t: 'matches tartrazine under the same conditions: supports the conclusion'}]} size={34} weight={700} at={K12.matches} />
			<Framed x={110} y={600} segs={[{t: "(b) supports, doesn't prove", c: GOOD}]} at={K12.but} size={44} />
			<Rich x={130} y={666} segs={[{t: 'another dye could share Rf 0.40; run both in a second solvent'}]} size={34} weight={700} at={K12.another} />
			<Chip x={110} y={740} segs={[{t: 'Rf = 10.0 ÷ 4.0 = 2.5'}]} at={K12.ten} size={40} color={RED} strike={K12.avoid} />
			<Write x={110} y={900} text="spot over front: never above 1" at={K12.avoid + 6} size={44} color={RED} />
			{void K12.supports}{void K12.running}
		</SVG>
	);
};

// ---------- 13. attempt 2 ----------
const K13 = cues(sc('attempt-2'), {pause: 'Pause here'});
export const SceneAttempt2: React.FC = () => {
	const S = {x: 1600, y: 280, w: 110, h: 440};
	const b = S.h / 6, tr = 0.8 * (S.h - b);
	return (
		<SVG>
			<Heading text="Last one" at={0} />
			<QTag />
			<Card h={700} />
			<Lines x={140} y={262} size={38} lh={56} lines={[
				[{t: 'In a paper chromatography experiment, the solvent front'}],
				[{t: 'travelled 12.0 cm from the baseline. Spot A travelled 3.0 cm'}],
				[{t: 'and spot B travelled 9.0 cm.'}],
			]} />
			<Lines x={140} y={460} size={38} lh={56} lines={[
				[{t: '(a)  Calculate the Rf value of each spot.'}],
				[{t: '(b)  Identify which component is more strongly attracted to'}],
				[{t: '       the stationary phase. Justify your answer.'}],
			]} />
			<DevStrip x={S.x} y={S.y} w={S.w} h={S.h} base={b} travel={tr} spots={[{c: DYE.pink, rf: 0.25}, {c: DYE.blue, rf: 0.75}]} dot={INK} spotR={12} frontLine tint={false} />
			<Sx x={S.x - 16} y={spotY(S.y, S.h, b, tr, 0.25) + 12} text="A" size={38} color={INK} anchor="end" weight={800} at={-1000} />
			<Sx x={S.x - 16} y={spotY(S.y, S.h, b, tr, 0.75) + 12} text="B" size={38} color={INK} anchor="end" weight={800} at={-1000} />
			<PauseRing h={hold('attempt-2')} at={K13.pause} x={140} y={936} cx={1660} cy={800} />
		</SVG>
	);
};

// ---------- 14. feedback 2 ----------
const K14 = cues(sc('feedback-2'), {forA: 'For A', five1: ['five', 1], forB: 'For B', five2: ['five', 2], a: 'A is more', spent: 'It spent', choosing: 'Choosing', avoid: 'avoid'});
export const SceneFeedback2: React.FC = () => (
	<SVG>
		<Heading text="Last one" at={-1000} />
		<Givens segs={[{t: 'front 12.0 cm     |     A 3.0 cm     |     B 9.0 cm'}]} />
		<Rich x={110} y={380} segs={[{t: 'Rf(A) = 3.0 ÷ 12.0 ='}]} size={52} at={K14.forA} />
		<Framed x={780} y={380} segs={[{t: '0.25', c: GOOD}]} at={K14.five1} size={52} />
		<Rich x={110} y={500} segs={[{t: 'Rf(B) = 9.0 ÷ 12.0 ='}]} size={52} at={K14.forB} />
		<Framed x={780} y={500} segs={[{t: '0.75', c: GOOD}]} at={K14.five2} size={52} />
		<Framed x={110} y={640} segs={[{t: '(b) A: lower Rf, more time stuck', c: GOOD}]} at={K14.a} size={44} />
		<Rich x={130} y={706} segs={[{t: 'A spent more time stuck to the paper: a smaller fraction of the distance'}]} size={34} weight={700} at={K14.spent} />
		<Rich x={1220} y={640} segs={[{t: 'stickier stays lower', c: SLATE_INK}]} size={40} hand at={K14.a + 20} />
		<DevStrip x={1500} y={260} w={110} h={330} base={55} travel={220} spots={[{c: DYE.pink, rf: 0.25}, {c: DYE.blue, rf: 0.75}]} dot={INK} spotR={11} />
		<Sx x={1486} y={spotY(260, 330, 55, 220, 0.25) + 12} text="A" size={34} color={INK} anchor="end" weight={800} at={-1000} />
		<Sx x={1486} y={spotY(260, 330, 55, 220, 0.75) + 12} text="B" size={34} color={INK} anchor="end" weight={800} at={-1000} />
		<Chip x={110} y={760} segs={[{t: 'B: it moved further'}]} at={K14.choosing} size={40} color={RED} strike={K14.avoid} />
		<Write x={110} y={910} text="further = less attracted to the paper" at={K14.avoid + 6} size={44} color={RED} />
	</SVG>
);

// ---------- 15. handoff (final frame; V06 opens on it) ----------
const K15 = cues(sc('handoff'), {so: 'So chromatography', how: 'how much', sand: 'sand and salt', weigh: 'weigh them', next: 'Next time', comp: 'component'});
/** The handoff bench: V06's opening frame (top-pan balance with a blank display, V01's watch glasses of sand and
 *  salt, the developed black-ink chromatogram), copied from ../chem-y11-m1-v06/s1.tsx so the join is exact. */
export const HandoffBench: React.FC<{tagAt?: number; tagOut?: number; balAt?: number; wgAt?: number; chipAt?: number; nextAt?: number}> = ({tagAt = -1000, tagOut, balAt = -1000, wgAt = -1000, chipAt = -1000, nextAt = -1000}) => {
	const bg = balGeo(560, 380, 420);
	const sm = plateMap(SAND, 0, 0, 150);
	return (
		<>
			<Chip x={960} y={70} segs={[{t: 'Next: what fraction of a separated mixture came from each component?'}]} at={nextAt} size={36} color={PURE} anchor="middle" />
			<Chromatogram x={120} y={300} />
			<Sx x={185} y={790} text="which components?" size={34} color={INK} anchor="middle" weight={800} at={-1000} />
			<Write x={110} y={262} text="which, but not how much" at={tagAt} out={tagOut} size={42} color={INK} />
			<Balance g={bg} text="---.-- g" at={balAt} />
			<Plate p={SAND} x={1330} y={330} h={sm.k * SAND.box[3]} at={wgAt} />
			<Plate p={SALT} x={1330} y={560} h={sm.k * SALT.box[3]} at={wgAt + 8} />
			<Sx x={1330 + sm.w / 2} y={520} text="sand" size={40} color={INK} anchor="middle" hand at={wgAt} />
			<Sx x={1330 + sm.w / 2} y={750} text="salt" size={40} color={INK} anchor="middle" hand at={wgAt + 8} />
			<Chip x={1330 + sm.w / 2} y={790} segs={[{t: 'how much of each?'}]} at={chipAt} size={40} color={MIX} anchor="middle" />
		</>
	);
};
export const SceneHandoff: React.FC = () => (
	<SVG>
		<HandoffBench tagAt={K15.how - 20} tagOut={K15.next - 20} balAt={-1000} wgAt={K15.sand} chipAt={K15.weigh} nextAt={K15.comp - 24} />
		{void K15.so}
	</SVG>
);

// ---------- 16. key notes ----------
const NOTES: Seg[][][] = [
	[[{t: 'Stationary phase (paper) stays still;', c: SLATE_INK}], [{t: 'mobile phase (solvent) moves up it.', c: PURE}]],
	[[{t: 'Stronger attraction to the paper: more time stuck,'}], [{t: 'shorter distance, smaller Rf.'}]],
	[[{t: 'Rf = spot distance ÷ front distance,', c: RF_INK}], [{t: 'both from the baseline.'}]],
	[[{t: 'Rf is between 0 and 1, no units.'}], [{t: 'Measure to the centre of the spot.'}]],
	[[{t: 'Compare Rf under the same conditions.'}], [{t: 'A match supports; it does not prove.'}]],
];
export const SceneNotes: React.FC = () => {
	let y = 290;
	const rows = NOTES.map((lines, i) => {
		const y0 = y;
		y += lines.length * 50 + 22;
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
			<Write x={96} y={214} text="Pause the video if you need more time to copy." at={40} size={38} color={RF_INK} />
			{rows}
			<Fade at={20}>
				<rect x={1240} y={280} width={584} height={300} rx={22} fill="#fffdf8" stroke={INK} strokeWidth={5} />
				<rect x={1250} y={290} width={564} height={280} rx={16} fill="none" stroke={INK} strokeWidth={2} />
				<Sx x={1280} y={340} text="memory aid" size={30} color={INK} hand at={-1000} />
				<Sx x={1280} y={430} text="Spot over front," size={52} color={RF_INK} hand at={-1000} />
				<Sx x={1280} y={510} text="stickier stays lower." size={52} color={SLATE_INK} hand at={-1000} />
				<Sx x={96} y={950} text="Pencil baseline, solvent below it, lid on, mark the front straight away." size={30} color={INK} weight={800} at={-1000} />
			</Fade>
			{void useCurrentFrame}
		</SVG>
	);
};
