// Y11 Chem M1 V06 scenes 11 to 16: two HSC-style attempts (whole card with neutral pictures, the ring from "Pause
// here", 10 s countdown), brief feedback (navy givens strip, bar drawn from the same numbers, green framed answers,
// one red crossed slip), the handoff to the salt jar (the final frame V07 opens on) and the key notes with the
// "Divide by what you started with" card.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Givens, Lines, QTag} from '../chem-y11-m1-v01/s3';
import {BASIN_X, FILT_E, OVEN, SAND, SJAR, hold, p1, sc} from './common';
import {
	AMB, AccBar, SaltBoard, SAND_INK, Balance, CHALK_F, Card, Chip, DrawPath, Fade, Framed, Heading, INK, MIX, PURE, PauseHoldR, PenRing, Plate, ROSE, Readout, Rich, SVG, Sx, TEAL, TEAL_INK, Write,
	balGeo, prog, richW, smooth, tw,
} from './parts';
import type {Seg} from './parts';
import {SALT_SEG, SAND_SEG} from './s1';

const GREEN_T = '#2f8a5b', RED_T = '#c4362f', AMB_T = '#a35c00';
/** Underline drawn under part of a givens strip (Givens text starts at x 124, size 36, weight 700). */
const GivUnder: React.FC<{before: string; text: string; at: number; color?: string; y?: number}> = ({before, text, at, color = PURE, y = 246}) => {
	const f = useCurrentFrame();
	if (f < at) return null;
	const x0 = 124 + tw(before, 36, false, 700), x1 = x0 + tw(text, 36, false, 700);
	return <DrawPath d={`M${x0},${y} L${x1},${y}`} at={at} dur={12} color={color} width={5} />;
};

// ---------- 11. attempt 1 ----------
const K11 = cues(sc('attempt-1'), {pause: 'Pause here'});
export const SceneAttempt1: React.FC = () => {
	const g = balGeo(1400, 270, 300);
	return (
		<SVG>
			<Heading text="Your turn" at={0} />
			<QTag />
			<Card h={700} />
			<Lines x={140} y={270} size={38} lh={56} lines={[
				[{t: 'A 15.00 g mixture of chalk (insoluble) and table salt is'}],
				[{t: 'separated by filtration and evaporation. The student'}],
				[{t: 'recovers 4.20 g of dry chalk and 10.50 g of dry salt.'}],
			]} />
			<Lines x={140} y={480} size={38} lh={56} lines={[
				[{t: '(a)  Calculate the percentage by mass of each component'}],
				[{t: '      in the original mixture.'}],
				[{t: '(b)  Calculate the percentage of the original mass that'}],
				[{t: '      was not recovered.'}],
			]} />
			<Sx x={140} y={760} text="(4 marks)" size={34} color={INK} weight={700} at={-1000} />
			<Balance g={g} text="" />
			<PauseHoldR h={hold('attempt-1')} at={K11.pause} x={140} y={936} cx={1640} cy={680} />
		</SVG>
	);
};

// ---------- 12. feedback 1 ----------
const K12 = cues(sc('feedback-1'), {chalk: 'Chalk is', c28: 'twenty-eight', p1: ['percent', 1], salt: 'Salt is', s70: 'seventy', p2: ['percent', 2], together: 'Together', recovered: 'not recovered', slip: 'The slip', dividing: 'dividing by', hides: 'hides the loss', completely: 'completely.'});
export const SceneFeedback1: React.FC = () => {
	const ra = [{t: '(a) chalk:  '}, {t: '4.20 ÷ 15.00', c: PURE}, {t: ' × 100 = '}];
	const rs = [{t: '      salt:  '}, {t: '10.50 ÷ 15.00', c: PURE}, {t: ' × 100 = '}];
	const rb = [{t: '(b) 100% − 98.0% = '}];
	const g = balGeo(1280, 300, 380);
	return (
		<SVG>
			<Heading text="Your turn" at={-1000} />
			<Givens segs={[{t: 'mixture 15.00 g     |     chalk 4.20 g     |     salt 10.50 g'}]} />
			<GivUnder before="mixture " text="15.00 g" at={K12.chalk + 30} />
			<AccBar id="v6b12" x={110} y={320} w={820} h={110} whole={15} segs={[{m: 4.2, fill: CHALK_F, ink: INK, label: '28.0%', at: K12.c28}, SALT_SEG(10.5, K12.s70, '70.0%')]} gapAt={K12.recovered} gapLabel="2.0%" wholeLabel="15.00 g" base="whole mixture: 15.00 g" />
			<Balance g={g} text="15.00 g" />
			<Rich x={110} y={570} segs={ra} size={50} at={K12.chalk} />
			<Framed x={110 + richW(ra, 50)} y={570} segs={[{t: '28.0%', c: GREEN_T}]} at={K12.c28} size={52} />
			<Rich x={110} y={680} segs={rs} size={50} at={K12.salt} />
			<Framed x={110 + richW(rs, 50)} y={680} segs={[{t: '70.0%', c: GREEN_T}]} at={K12.s70} size={52} />
			<Rich x={110} y={790} segs={rb} size={50} at={K12.together} />
			<Framed x={110 + richW(rb, 50)} y={790} segs={[{t: '2.0% not recovered', c: GREEN_T}]} at={K12.recovered} size={52} />
			<Sx x={110 + richW(rb, 50) + richW([{t: '2.0% not recovered'}], 52) + 110} y={790} text="(0.30 g)" size={44} color={INK} weight={800} at={K12.recovered + 10} />
			<Chip x={110} y={840} segs={[{t: '÷ 14.70 g: chalk 28.6%, salt 71.4%'}]} at={K12.slip} size={40} color={RED_T} strike={K12.completely - 10} />
			<Write x={920} y={885} text="divide by the original 15.00 g" at={K12.completely} size={42} color={RED_T} />
			{void K12.p1}{void K12.p2}{void K12.dividing}{void K12.hides}
		</SVG>
	);
};

// ---------- 13. attempt 2 ----------
const K13 = cues(sc('attempt-2'), {pause: 'Pause here'});
export const SceneAttempt2: React.FC = () => {
	const wh = (280 / SAND.box[2]) * SAND.box[3];
	return (
		<SVG>
			<Heading text="Last one" at={0} />
			<QTag />
			<Card h={700} />
			<Lines x={140} y={270} size={38} lh={56} lines={[
				[{t: 'A 10.00 g mixture of sand and salt is separated. The sand'}],
				[{t: 'is dried in an oven for 10 minutes and then weighs 4.12 g.'}],
				[{t: 'The recovered dry salt weighs 6.25 g.'}],
			]} />
			<Lines x={140} y={480} size={38} lh={56} lines={[
				[{t: '(a)  Calculate the percentage by mass of each component.'}],
				[{t: '(b)  Explain why the percentages do not add to 100%,'}],
				[{t: '      and state how the method should be changed.'}],
			]} />
			<Sx x={140} y={720} text="(4 marks)" size={34} color={INK} weight={700} at={-1000} />
			<Plate p={SAND} x={1500} y={250} h={wh} />
			<Plate p={OVEN} x={1500} y={390} h={290} />
			<PauseHoldR h={hold('attempt-2')} at={K13.pause} x={140} y={936} cx={1220} cy={800} />
		</SVG>
	);
};

// ---------- 14. feedback 2 ----------
const K14 = cues(sc('feedback-2'), {sand: 'Sand comes', p1: ['percent', 1], salt: 'and salt at', p2: ['percent', 2], adds: 'That adds', weighed: 'extra was weighed', cause: 'most likely cause', ten: 'only ten minutes', dry: 'Dry it', weighing: 'weighing.', calling: 'Calling', mistake: 'mistake.'});
export const SceneFeedback2: React.FC = () => {
	const f = useCurrentFrame();
	const ra = [{t: '(a) sand:  '}, {t: '4.12 ÷ 10.00', c: PURE}, {t: ' × 100 = '}];
	const rs = [{t: '      salt:  '}, {t: '6.25 ÷ 10.00', c: PURE}, {t: ' × 100 = '}];
	const tot = 41.2 * smooth(prog(f, K14.sand, 18)) + 62.5 * smooth(prog(f, K14.salt, 18));
	return (
		<SVG>
			<Heading text="Last one" at={-1000} />
			<Givens segs={[{t: 'mixture 10.00 g     |     sand 4.12 g after 10 minutes     |     salt 6.25 g'}]} />
			<GivUnder before="mixture 10.00 g     |     sand 4.12 g after " text="10 minutes" at={K14.ten} color={TEAL} />
			<AccBar id="v6b14" x={110} y={320} w={760} h={100} whole={10} segs={[SAND_SEG(4.12, K14.sand, '41.2%'), SALT_SEG(6.25, K14.salt, '62.5%')]} extraAt={K14.weighed} wholeLabel="10.00 g mixture" base="whole mixture: 10.00 g" />
			<Sx x={1000} y={316} text="total" size={30} color={INK} weight={700} at={K14.sand} />
			<Readout x={1000} y={328} w={290} text={p1(tot)} size={52} color={tot > 100.05 ? TEAL_INK : PURE} frame={tot > 100.05 ? TEAL : PURE} anchor="middle" at={K14.sand} />
			<Write x={1320} y={384} text="0.37 g extra" at={K14.weighed} size={42} color={TEAL_INK} />
			<Plate p={SAND} x={1500} y={480} h={(300 / SAND.box[2]) * SAND.box[3]} />
			<Plate p={OVEN} x={1500} y={600} h={300} />
			<Rich x={110} y={570} segs={ra} size={50} at={K14.sand} />
			<Framed x={110 + richW(ra, 50)} y={570} segs={[{t: '41.2%', c: AMB_T}]} at={K14.sand + 40} size={52} tick={false} stroke="#e8a33d" />
			<Rich x={110} y={675} segs={rs} size={50} at={K14.salt} />
			<Framed x={110 + richW(rs, 50)} y={675} segs={[{t: '62.5%', c: AMB_T}]} at={K14.salt + 30} size={52} tick={false} stroke="#e8a33d" />
			<Framed x={110} y={790} segs={[{t: '(b) water in the sand: dry to constant mass', c: GREEN_T}]} at={K14.dry} size={44} />
			<Chip x={110} y={840} segs={[{t: 'extra 3.7% = a third substance'}]} at={K14.calling} size={40} color={RED_T} strike={K14.mistake - 6} />
			<Write x={800} y={885} text="usually water" at={K14.mistake} size={44} color={RED_T} />
			{void K14.p1}{void K14.p2}{void K14.adds}{void K14.cause}{void K14.weighing}{void MIX}{void AMB}{void ROSE}
		</SVG>
	);
};

// ---------- 15. handoff: inside the salt (final frame; V07 opens on it) ----------
const K15 = cues(sc('handoff'), {so: 'So by separating', salt: 'was salt', but: 'But salt itself', compound: 'a compound', bonded: 'bonded together', filter: 'no filter', next: 'Next time', formula: 'formula alone', element: 'each element'});
export const SceneHandoff: React.FC = () => (
	<SVG>
		<SaltBoard at={{nacl: K15.compound, compound: K15.compound + 10, lattice: K15.bonded - 10, filter: K15.filter, cross: K15.filter + 10, chip: K15.element}} />
		<Fade at={-1000} out={K15.but}>
			<Plate p={SAND} x={1000} y={420} h={SAND.box[3] * (280 / SAND.box[2])} />
			<Plate p={BASIN_X} x={1380} y={380} h={BASIN_X.box[3] * (320 / BASIN_X.box[2])} />
			<Sx x={1140} y={590} text="sand 6.00 g" size={38} color={SAND_INK} anchor="middle" weight={800} at={-1000} />
			<Sx x={1540} y={590} text="salt 14.00 g" size={38} color={INK} anchor="middle" weight={800} at={-1000} />
			<Sx x={1260} y={680} text="separated and weighed" size={38} color={INK} anchor="middle" weight={800} at={-1000} />
		</Fade>
		<PenRing cx={950} cy={232} rx={225} ry={48} at={K15.salt} out={K15.next} color={PURE} seed={3} />
		<Write x={900} y={440} text="bonded" at={K15.bonded} out={K15.element - 20} size={42} color={PURE} />
		{void K15.so}{void K15.but}{void K15.formula}
	</SVG>
);

// ---------- 16. key notes ----------
const NOTES: Seg[][][] = [
	[[{t: '% by mass = (mass of component ÷', c: PURE}], [{t: 'mass of original mixture) × 100', c: PURE}]],
	[[{t: 'Weigh by difference: (container + solid) − container.'}]],
	[[{t: 'Physical separation conserves matter:'}], [{t: 'no loss means a 100% total.'}]],
	[[{t: 'Below 100%: mass was lost.', c: ROSE}], [{t: 'Above 100%: extra mass, usually water.', c: TEAL_INK}]],
	[[{t: 'Dry to constant mass: heat, cool, weigh'}], [{t: 'until two readings match.'}]],
];
export const SceneNotes: React.FC = () => {
	let y = 300;
	const rows = NOTES.map((lines, i) => {
		const y0 = y;
		y += lines.length * 48 + 24;
		return (
			<Fade key={i} at={i * 3}>
				<circle cx={112} cy={y0 - 12} r={8} fill="#e8a33d" />
				{lines.map((l, kk) => <Rich key={kk} x={140} y={y0 + kk * 48} segs={l} size={36} weight={700} />)}
			</Fade>
		);
	});
	return (
		<SVG>
			<Write x={96} y={150} text="Key notes: what to write in your book" at={2} size={60} color={INK} cps={40} />
			<Write x={96} y={214} text="Pause the video if you need more time to copy." at={4} size={38} color={MIX} />
			{rows}
			<Fade at={6}>
				<rect x={1260} y={290} width={564} height={330} rx={22} fill="#fffdf8" stroke={PURE} strokeWidth={5} />
				<Sx x={1290} y={334} text="memory aid" size={30} color={INK} hand at={-1000} />
				<Sx x={1300} y={420} text="Divide by what you" size={50} color={PURE} hand at={-1000} />
				<Sx x={1300} y={484} text="started with," size={50} color={PURE} hand at={-1000} />
				<Sx x={1300} y={560} text="then account for the rest." size={44} color={ROSE} hand at={-1000} />
				<Balance g={balGeo(1390, 650, 260)} text="6.00 g" />
			</Fade>
		</SVG>
	);
};
