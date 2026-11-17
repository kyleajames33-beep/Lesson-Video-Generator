// Y11 Chem M1 V02 scenes 11 to 16: two HSC-style attempts (whole card with neutral pictures, 10 s countdown), brief
// feedback (navy givens strip, green framed answers, one red crossed slip), the handoff beaker of sand and salty
// water (the final frame V03 opens on) and the key notes with the "Flat hints pure" card.
import React from 'react';
import {cues} from '../../cues';
import {Givens, Lines, QTag} from '../chem-y11-m1-v01/s3';
import {DRY, SALT, SANDB, hold, sc} from './common';
import {
	AMB, Card, Chip, Fade, Framed, GREEN, Heading, INK, MIX, PauseHold, Plate, PURE, RED, Rich, SVG, StateStrip, Sx, Write, plateMap,
} from './parts';
import type {Seg} from './parts';

// ---------- 11. attempt 1 ----------
const K11 = cues(sc('attempt-1'), {pause: 'Pause here'});
export const SceneAttempt1: React.FC = () => {
	const sm = plateMap(SALT, 0, 0, 0); void sm;
	const sh = (240 / SALT.box[2]) * SALT.box[3];
	return (
		<SVG>
			<Heading text="Your turn" at={0} />
			<QTag />
			<Card h={700} />
			<Lines x={140} y={262} size={38} lh={56} lines={[
				[{t: 'Two white solids, X and Y, are heated slowly at the same rate.'}],
				[{t: 'Solid X melts completely at 122 °C, and its temperature stays'}],
				[{t: 'constant while it melts. Solid Y begins to melt at 70 °C and is'}],
				[{t: 'completely liquid at 84 °C.'}],
			]} />
			<Lines x={140} y={520} size={38} lh={56} lines={[
				[{t: '(a)  Which solid is more likely to be a mixture?', w: 800}],
				[{t: '      Justify your answer.', w: 800}],
				[{t: '(b)  A student concludes that solid X must be a pure', w: 800}],
				[{t: '      substance. Evaluate this conclusion.', w: 800}],
			]} />
			<Sx x={140} y={800} text="(3 marks)" size={34} color={INK} weight={700} at={-1000} />
			{['X', 'Y'].map((t, i) => (
				<g key={t}>
					<Plate p={SALT} x={1480} y={250 + i * 150} h={sh} />
					<Sx x={1450} y={300 + i * 150} text={t} size={48} color={INK} anchor="end" weight={800} at={-1000} />
				</g>
			))}
			<PauseHold h={hold('attempt-1')} at={K11.pause} x={140} y={936} cx={1640} cy={680} />
		</SVG>
	);
};

// ---------- 12. feedback 1 ----------
const K12 = cues(sc('feedback-1'), {y: 'Solid Y is more likely', four: 'four.', x: "Solid X's sharp", sol: 'solubility.', writing: 'Writing that', avoid: 'slip to avoid'});
const MiniCurve: React.FC<{x: number; y: number; slope: boolean}> = ({x, y, slope}) => (
	<g>
		<path d={`M${x},${y + 70} L${x},${y} M${x},${y + 70} L${x + 150},${y + 70}`} stroke={INK} strokeWidth={3} fill="none" />
		<path d={slope ? `M${x + 6},${y + 60} L${x + 50},${y + 34} L${x + 100},${y + 22} L${x + 144},${y + 4}` : `M${x + 6},${y + 60} L${x + 50},${y + 26} L${x + 100},${y + 26} L${x + 144},${y + 4}`} stroke={slope ? AMB : PURE} strokeWidth={5} fill="none" strokeLinejoin="round" />
	</g>
);
export const SceneFeedback1: React.FC = () => (
	<SVG>
		<Heading text="Your turn" at={-1000} />
		<Givens segs={[{t: 'X: 122 °C, constant while melting     |     Y: 70 °C to 84 °C'}]} />
		<Framed x={110} y={390} segs={[{t: '(a) Y', c: GREEN}]} at={K12.y} size={52} />
		<Rich x={420} y={372} segs={[{t: 'melts from 70 °C to 84 °C, a 14 °C range:'}]} size={38} weight={700} at={K12.four - 40} />
		<Rich x={420} y={420} segs={[{t: 'physical evidence of a mixture', c: MIX}]} size={38} weight={800} at={K12.four} />
		<Fade at={K12.four - 40}><MiniCurve x={1600} y={330} slope /></Fade>
		<Framed x={110} y={580} segs={[{t: '(b) consistent with pure, not proof', c: GREEN}]} at={K12.x} size={52} />
		<Rich x={150} y={660} segs={[{t: 'compare with data; check a second property (density, solubility)'}]} size={38} weight={700} at={K12.sol - 40} />
		<Fade at={K12.x}><MiniCurve x={1600} y={520} slope={false} /></Fade>
		<Chip x={110} y={720} segs={[{t: 'X is definitely pure'}]} at={K12.writing} size={40} color={RED} strike={K12.avoid} />
		<Write x={110} y={900} text="consistent with, not proof of" at={K12.avoid + 8} size={44} color={RED} />
	</SVG>
);

// ---------- 13. attempt 2 ----------
const K13 = cues(sc('attempt-2'), {pause: 'Pause here'});
export const SceneAttempt2: React.FC = () => {
	const dh = (260 / DRY.box[2]) * DRY.box[3];
	return (
		<SVG>
			<Heading text="Last one" at={0} />
			<QTag />
			<Card h={700} />
			<Lines x={140} y={262} size={38} lh={56} lines={[
				[{t: 'At normal atmospheric pressure, a white solid changes directly'}],
				[{t: 'into a gas at about −78 °C. When the gas is collected and cooled'}],
				[{t: 'below −78 °C, the same white solid forms again.'}],
			]} />
			<Lines x={140} y={480} size={38} lh={56} lines={[
				[{t: '(a)  Name this change of state.', w: 800}],
				[{t: '(b)  A student claims that a chemical reaction has occurred', w: 800}],
				[{t: '      because a gas was produced. Evaluate this claim.', w: 800}],
			]} />
			<Sx x={140} y={700} text="(3 marks)" size={34} color={INK} weight={700} at={-1000} />
			<Plate p={DRY} x={1500} y={260} h={dh} />
			<PauseHold h={hold('attempt-2')} at={K13.pause} x={140} y={936} cx={1640} cy={680} />
		</SVG>
	);
};

// ---------- 14. feedback 2 ----------
const K14 = cues(sc('feedback-2'), {sub: "It's sublimation", wrong: 'And the claim is wrong', same: 'The same white solid', parts: 'The particles are', phys: 'physical change', prod: 'Producing a gas', itself: 'by itself'});
export const SceneFeedback2: React.FC = () => {
	const dh = (220 / DRY.box[2]) * DRY.box[3];
	return (
		<SVG>
			<Heading text="Last one" at={-1000} />
			<Givens segs={[{t: 'solid → gas at about −78 °C     |     cooled: the same white solid again'}]} />
			<Framed x={110} y={370} segs={[{t: '(a) sublimation', c: GREEN}]} at={K14.sub} size={52} />
			<Rich x={640} y={370} segs={[{t: 'solid → gas, no liquid'}]} size={38} weight={700} at={K14.sub + 20} />
			<StateStrip x={640} y={430} s={0.85} at={K14.sub + 20} crossAt={K14.sub + 30} arrowAt={K14.sub + 40} />
			<Framed x={110} y={600} segs={[{t: '(b) physical change: same particles', c: GREEN}]} at={K14.phys} size={52} />
			<Rich x={150} y={680} segs={[{t: 'the same white solid re-forms: no new substance'}]} size={38} weight={700} at={K14.same} />
			<Plate p={DRY} x={1560} y={330} h={dh} />
			<Chip x={110} y={730} segs={[{t: 'chemical: a gas formed'}]} at={K14.prod} size={40} color={RED} strike={K14.itself} />
			<Write x={110} y={900} text="a gas isn't proof of a reaction" at={K14.itself + 8} size={44} color={RED} />
			{void K14.wrong}{void K14.parts}
		</SVG>
	);
};

// ---------- 15. handoff (final frame; V03 opens on it) ----------
const K15 = cues(sc('handoff'), {so: 'So properties', sep: 'They can also', here: "Here's a beaker", sand: "The sand doesn't", salt: 'the salt does', next: 'Next time', mix: 'mixture.'});
export const SceneHandoff: React.FC = () => {
	const W = 540, k = W / SANDB.box[2], H = SANDB.box[3] * k;
	const X = 900 - W / 2, Y = 222;
	const sy = Y + (1140 - SANDB.box[1]) * k, wy = Y + (700 - SANDB.box[1]) * k;
	return (
		<SVG>
			<Plate p={SANDB} x={X} y={Y} h={H} />
			<Write x={1300} y={330} text="use the difference" at={K15.sep} out={K15.sand - 10} size={42} color={INK} />
			<Fade at={K15.sand}>
				<Sx x={X - 30} y={sy + 12} text="sand: doesn't dissolve" size={44} color={INK} anchor="end" weight={800} at={-1000} />
				<line x1={X - 20} y1={sy} x2={X + 110} y2={sy} stroke={INK} strokeWidth={3} />
			</Fade>
			<Fade at={K15.salt}>
				<Sx x={X + W + 30} y={wy + 12} text="salt: dissolved" size={44} color={INK} weight={800} at={-1000} />
				<line x1={X + W + 20} y1={wy} x2={X + W - 120} y2={wy} stroke={INK} strokeWidth={3} />
			</Fade>
			<Chip x={1560} y={660} segs={[{t: 'dry sand'}]} at={K15.next} size={46} color={INK} />
			<Chip x={1560} y={770} segs={[{t: 'dry salt'}]} at={K15.next + 10} size={46} color={INK} />
			<Chip x={900} y={130} segs={[{t: 'Next: how do we get both back?'}]} at={K15.mix - 30} size={40} color={PURE} anchor="middle" />
			{void K15.so}{void K15.here}{void H}
		</SVG>
	);
};

// ---------- 16. key notes ----------
const NOTES: Seg[][][] = [
	[[{t: 'Physical property: measured without changing the substance.'}]],
	[[{t: 'Pure substance: sharp melting and boiling points;', c: PURE}], [{t: 'flat plateau on a heating curve.', c: PURE}]],
	[[{t: 'Mixture: changes state over a range; its curve slopes.', c: MIX}]],
	[[{t: 'Sharp is consistent with pure, not proof:'}], [{t: 'state pressure, check two properties.'}]],
	[[{t: 'Changes of state (even sublimation) are physical:'}], [{t: 'same particles before and after.'}]],
];
export const SceneNotes: React.FC = () => {
	let y = 300;
	const rows = NOTES.map((lines, i) => {
		const y0 = y;
		y += lines.length * 48 + 22;
		return (
			<Fade key={i} at={30 + i * 12}>
				<circle cx={112} cy={y0 - 12} r={8} fill={AMB} />
				{lines.map((l, kk) => <Rich key={kk} x={140} y={y0 + kk * 48} segs={l} size={36} weight={700} />)}
			</Fade>
		);
	});
	return (
		<SVG>
			<Write x={96} y={150} text="Key notes: what to write in your book" at={2} size={60} color={INK} cps={40} />
			<Write x={96} y={214} text="Pause the video if you need more time to copy." at={60} size={38} color={MIX} />
			{rows}
			<Fade at={96}>
				<rect x={1300} y={290} width={524} height={330} rx={22} fill="#fffdf8" stroke={PURE} strokeWidth={5} />
				<Sx x={1330} y={334} text="memory aid" size={30} color={INK} hand at={-1000} />
				<Sx x={1340} y={420} text="Flat hints pure," size={50} color={PURE} hand at={-1000} />
				<Sx x={1340} y={490} text="a slope hints mixture:" size={46} color={MIX} hand at={-1000} />
				<Sx x={1340} y={560} text="check another property." size={44} color={INK} hand at={-1000} />
			</Fade>
		</SVG>
	);
};
