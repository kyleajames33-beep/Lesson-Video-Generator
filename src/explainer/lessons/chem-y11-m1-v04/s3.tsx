// Y11 Chem M1 V04 scenes 11 to 16: two HSC-style attempts (whole card and a neutral picture from the first frame, the
// ring full from "Pause here to answer."), brief feedback (navy givens strip, green framed answers, one red crossed
// slip), the handoff strip with its ink dot and a close view of the dyes (the final frame V05 opens on) and the key
// notes with the ladder card and the safety strip.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Givens, Lines, QTag} from '../chem-y11-m1-v01/s3';
import {BOTTLE, CUSO4, SIMPLE, hold, sc} from './common';
import {
	AMB, Card, Chip, ETH, ETH_INK, Fade, Framed, Heading, INK, PURE, PauseRing, PenArrow, PenRing, Plate, RED, Rich, SVG, Strip, Sx, TERRA_INK, VapourPath, Write,
	plateMap, prog, simpleGeo,
} from './parts';
import type {Seg} from './parts';
import {RecvFill} from './s1';

const GOOD = '#23704a';

// ---------- 11. attempt 1 ----------
const K11 = cues(sc('attempt-1'), {pause: 'Pause here'});
export const SceneAttempt1: React.FC = () => (
	<SVG>
		<Heading text="Your turn" at={0} />
		<QTag />
		<Card h={700} />
		<Lines x={140} y={270} size={38} lh={58} lines={[
			[{t: 'A solution contains water and a dissolved blue dye. The dye does'}],
			[{t: 'not evaporate when the solution is heated.'}],
		]} />
		<Lines x={140} y={420} size={38} lh={58} lines={[
			[{t: '(a)  Name a technique that could be used to collect the water,'}],
			[{t: '       and explain how it works.'}],
			[{t: '(b)  Explain why filtration cannot be used to collect the water'}],
			[{t: '       separately from the dye.'}],
		]} />
		<Plate p={CUSO4} x={1530} y={250} h={420} />
		<PauseRing h={hold('attempt-1')} at={K11.pause} x={140} y={936} cx={1640} cy={760} />
	</SVG>
);

// ---------- 12. feedback 1 ----------
const K12 = cues(sc('feedback-1'), {use: 'Use simple', heat: 'Heat the', vap: 'The vapour condenses', filt: 'Filtration', because: 'because the dye', its: 'Its particles', filtering: 'Filtering out', avoid: 'avoid'});
export const SceneFeedback1: React.FC = () => {
	const f = useCurrentFrame();
	const g = simpleGeo(1300, 290, 360);
	const P = {cx: 1660, cy: 780, r: 100};
	return (
		<SVG>
			<Heading text="Your turn" at={-1000} />
			<Givens segs={[{t: 'water + dissolved blue dye     |     the dye does not evaporate'}]} />
			<Plate p={SIMPLE} x={1300} y={290} h={360} />
			<ellipse cx={g.flask[0]} cy={g.flask[1] + 12} rx={45} ry={20} fill="rgba(40,110,200,0.45)" />
			<RecvFill g={g} lvl={950 - Math.min(40, Math.max(0, f - K12.vap) * 0.2)} id="v4fb1" />
			<VapourPath pts={[[g.flask[0], g.surf[1] - 16], g.neck, g.bulb, g.arm, g.cEnd, g.tip]} from={K12.heat} n={7} speed={0.006} cond={0.7} />
			<Framed x={110} y={370} segs={[{t: '(a) simple distillation', c: GOOD}]} at={K12.use} size={52} />
			<Rich x={130} y={440} segs={[{t: 'water evaporates; the '}, {t: 'non-volatile', c: '#6b4fa0'}, {t: ' dye stays in the flask'}]} size={34} weight={700} at={K12.heat} />
			<Rich x={130} y={486} segs={[{t: 'the vapour condenses in the condenser: pure water collects'}]} size={34} weight={700} at={K12.vap} />
			<Framed x={110} y={620} segs={[{t: '(b) dissolved: passes through the pores', c: GOOD}]} at={K12.because} size={44} />
			<Rich x={130} y={686} segs={[{t: 'dye particles are far smaller than the pores'}]} size={34} weight={700} at={K12.its} />
			<g opacity={prog(f, K12.its, 12)}>
				<defs><clipPath id="v4fbp"><circle cx={P.cx} cy={P.cy} r={P.r - 3} /></clipPath></defs>
				<circle cx={P.cx} cy={P.cy} r={P.r} fill="#dcebf7" />
				<g clipPath="url(#v4fbp)">
					<rect x={P.cx - P.r} y={P.cy - 12} width={2 * P.r} height={24} fill="#d9c9a6" />
					{Array.from({length: 4}, (_, i) => <rect key={i} x={P.cx - P.r + 20 + i * 50} y={P.cy - 14} width={18} height={28} rx={6} fill="#dcebf7" />)}
					{Array.from({length: 6}, (_, i) => { const t = (f * 1.4 + i * 40) % 220; return <circle key={i} cx={P.cx - P.r + 29 + (i % 4) * 50} cy={P.cy - P.r + t} r={9} fill="#2f6fc4" stroke="#183a6a" strokeWidth={2} />; })}
				</g>
				<circle cx={P.cx} cy={P.cy} r={P.r} fill="none" stroke={INK} strokeWidth={4} />
				<Sx x={P.cx} y={P.cy + P.r + 34} text="dye through the paper" size={30} color={INK} anchor="middle" weight={800} at={-1000} />
			</g>
			<Chip x={110} y={750} segs={[{t: 'filter out the dye'}]} at={K12.filtering} size={40} color={RED} strike={K12.avoid} />
			<Write x={110} y={900} text="dissolved particles pass through" at={K12.avoid + 6} size={44} color={RED} />
			{void K12.filt}
		</SVG>
	);
};

// ---------- 13. attempt 2 ----------
const K13 = cues(sc('attempt-2'), {pause: 'Pause here'});
export const SceneAttempt2: React.FC = () => {
	const bw = plateMap(BOTTLE, 0, 0, 250).w;
	return (
		<SVG>
			<Heading text="Last one" at={0} />
			<QTag />
			<Card h={720} />
			<Lines x={140} y={262} size={38} lh={54} lines={[
				[{t: 'Two liquids, P and Q, are completely miscible. Pure P boils'}],
				[{t: 'at 68 °C and pure Q boils at 72 °C. In a simple distillation,'}],
				[{t: 'the first vapour is only slightly richer in P than the liquid.'}],
			]} />
			<Lines x={140} y={440} size={38} lh={54} lines={[
				[{t: '(a)  Explain why simple distillation would give a poor'}],
				[{t: '       separation of P and Q.'}],
				[{t: '(b)  Explain how a fractionating column improves the separation.'}],
				[{t: '(c)  State whether these boiling points alone guarantee that'}],
				[{t: '       pure P can be collected. Justify your answer.'}],
			]} />
			{['P', 'Q'].map((t, i) => (
				<g key={t}>
					<Plate p={BOTTLE} x={1560 + i * (bw + 30)} y={280} h={250} />
					<Sx x={1560 + i * (bw + 30) + bw / 2} y={580} text={t} size={48} color={INK} anchor="middle" weight={800} at={-1000} />
				</g>
			))}
			<PauseRing h={hold('attempt-2')} at={K13.pause} x={140} y={960} cx={1660} cy={760} />
		</SVG>
	);
};

// ---------- 14. feedback 2 ----------
const K14 = cues(sc('feedback-2'), {four: 'four degrees', both: 'both liquids', one: 'one cycle', col: 'A column', each: 'each one', no: 'And no', may: 'might form', saying: 'Saying', avoid: 'avoid'});
export const SceneFeedback2: React.FC = () => (
	<SVG>
		<Heading text="Last one" at={-1000} />
		<Givens segs={[{t: 'P 68 °C     |     Q 72 °C     |     first vapour only slightly richer in P'}]} />
		<Framed x={110} y={350} segs={[{t: '(a) only 4 °C apart: both evaporate', c: GOOD}]} at={K14.four - 20} size={44} />
		<Rich x={130} y={410} segs={[{t: '72 − 68 = 4 °C; one cycle gives vapour only a little richer in P'}]} size={34} weight={700} at={K14.one} />
		<Framed x={110} y={510} segs={[{t: '(b) column: many cycles', c: GOOD}]} at={K14.col} size={44} />
		<Rich x={130} y={570} segs={[{t: 'condensing and boiling again many times, each enriching the vapour in P'}]} size={34} weight={700} at={K14.each} />
		<Framed x={110} y={670} segs={[{t: '(c) not guaranteed: an azeotrope may form', c: GOOD}]} at={K14.no} size={44} />
		<Rich x={130} y={730} segs={[{t: "boiling points alone don't show whether an azeotrope forms"}]} size={34} weight={700} at={K14.may} />
		<Fade at={K14.each}>
			{[0, 1, 2, 3, 4, 5].map(i => <rect key={i} x={1480 + i * 52} y={600 - 50 - i * 52} width={52} height={50 + i * 52} rx={5} fill={i === 0 ? PURE : ETH} stroke={INK} strokeWidth={2} />)}
			<Sx x={1460} y={640} text="each cycle: a little richer in P" size={30} color={INK} weight={800} at={-1000} />
		</Fade>
		<Chip x={110} y={770} segs={[{t: 'P boils off first at 68 °C, leaving pure Q'}]} at={K14.saying} size={40} color={RED} strike={K14.avoid} />
		<Write x={110} y={910} text="both evaporate together" at={K14.avoid + 6} size={44} color={RED} />
		{void K14.both}
	</SVG>
);

// ---------- 15. handoff (final frame; V05 opens on it) ----------
const K15 = cues(sc('handoff'), {dist: 'Distillation separates', but: 'But what', black: 'black', mix: "It's a mixture", tiny: 'tiny amount', next: 'Next time', strip: 'strip of paper', dist2: 'distances'});
export const STRIP = {x: 640, y: 220, w: 220, h: 700};
export const DOT: [number, number] = [STRIP.x + STRIP.w / 2, STRIP.y + STRIP.h - STRIP.h / 6];
/** The handoff board, also V05's opening frame. */
export const InkBoard: React.FC<{ringAt?: number; inkAt?: number; tinyAt?: number; nextAt?: number; nextOut?: number}> = ({ringAt = -1000, inkAt = -1000, tinyAt = -1000, nextAt = -1000, nextOut}) => {
	const f = useCurrentFrame();
	const V = {cx: 1300, cy: 520, r: 210};
	const dyes = ['#2a6fd1', '#d43a8a', '#e8b21f', '#2f9a5a'];
	return (
		<>
			<Strip x={STRIP.x} y={STRIP.y} w={STRIP.w} h={STRIP.h} />
			<Sx x={STRIP.x + STRIP.w + 16} y={DOT[1] + 46} text="pencil line" size={30} color={INK} weight={700} at={-1000} />
			<PenRing cx={DOT[0]} cy={DOT[1]} rx={40} ry={36} at={ringAt} color={INK} seed={3} />
			<g opacity={prog(f, inkAt, 14)}>
				<path d={`M${DOT[0] + 30},${DOT[1] - 20} L${V.cx - V.r * 0.8},${V.cy + V.r * 0.4} L${V.cx - V.r * 0.4},${V.cy + V.r * 0.85} Z`} fill="rgba(60,45,20,0.07)" stroke="rgba(60,45,20,0.35)" strokeWidth={2} strokeDasharray="8 7" />
				<circle cx={V.cx} cy={V.cy} r={V.r} fill="#2a2522" />
				{Array.from({length: 36}, (_, i) => { const a = i * 2.4, rr = 30 + ((i * 53) % 150); return <circle key={i} cx={V.cx + Math.cos(a) * rr + Math.sin(f * 0.04 + i) * 4} cy={V.cy + Math.sin(a) * rr} r={12} fill={dyes[i % 4]} stroke="#111" strokeWidth={2} />; })}
				<circle cx={V.cx} cy={V.cy} r={V.r} fill="none" stroke={INK} strokeWidth={5} />
				<Sx x={V.cx} y={V.cy + V.r + 60} text="black ink: several dyes" size={44} color={INK} anchor="middle" weight={800} at={-1000} />
				<Sx x={V.cx} y={V.cy + V.r + 98} text="(model colours)" size={30} color={INK} anchor="middle" weight={700} at={-1000} />
			</g>
			<Chip x={1560} y={300} segs={[{t: 'only a few drops'}]} at={tinyAt} size={40} color={INK} />
			<Chip x={960} y={110} segs={[{t: 'Next: why do the dyes travel different distances?'}]} at={nextAt} out={nextOut} size={40} color={PURE} anchor="middle" />
		</>
	);
};
export const SceneHandoff: React.FC = () => (
	<SVG>
		<Fade at={-1000} out={K15.but}>
			<Sx x={96} y={300} text="distillation separates by" size={38} color={INK} weight={800} at={K15.dist} />
			<Sx x={96} y={346} text="how easily things evaporate" size={38} color={ETH_INK} weight={800} at={K15.dist} />
		</Fade>
		<InkBoard ringAt={K15.mix - 10} inkAt={K15.mix} tinyAt={K15.tiny} nextAt={K15.dist2 - 20} />
		{void K15.black}{void K15.next}{void K15.strip}{void AMB}{void PenArrow}
	</SVG>
);

// ---------- 16. key notes ----------
const NOTES: Seg[][][] = [
	[[{t: 'Distillation: boil, then condense the vapour (the distillate).'}]],
	[[{t: 'Simple: one part non-volatile, or boiling points far apart.'}]],
	[[{t: 'Two mixed liquids both evaporate;'}], [{t: 'one cycle only enriches the vapour.', c: ETH_INK}]],
	[[{t: 'A column repeats condense-and-reboil cycles on its beads.'}]],
	[[{t: 'Ethanol and water stop near 96% (azeotrope);'}], [{t: 'a steady temperature is not proof.'}]],
];
export const SceneNotes: React.FC = () => {
	let y = 290;
	const rows = NOTES.map((lines, i) => {
		const y0 = y;
		y += lines.length * 50 + 24;
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
			<Write x={96} y={214} text="Pause the video if you need more time to copy." at={40} size={38} color={ETH_INK} />
			{rows}
			<Fade at={20}>
				<rect x={1260} y={280} width={564} height={400} rx={22} fill="#fffdf8" stroke={INK} strokeWidth={5} />
				<rect x={1270} y={290} width={544} height={380} rx={16} fill="none" stroke={INK} strokeWidth={2} />
				<Sx x={1300} y={340} text="memory aid" size={30} color={INK} hand at={-1000} />
				<Sx x={1300} y={420} text="Simple: one step." size={48} color={PURE} hand at={-1000} />
				<Sx x={1300} y={490} text="Column: many steps." size={48} color={ETH_INK} hand at={-1000} />
				<Sx x={1300} y={560} text="The ladder ends at" size={48} color={ETH_INK} hand at={-1000} />
				<Sx x={1300} y={624} text="the azeotrope." size={48} color={ETH_INK} hand at={-1000} />
				<rect x={96} y={880} width={1728} height={64} rx={14} fill="#fbeee6" stroke="#c4582f" strokeWidth={3} />
				<Sx x={124} y={923} text="Never heat a sealed system. Heat ethanol without a flame." size={30} color={TERRA_INK} weight={800} at={-1000} />
			</Fade>
			{void ETH}{void Chip}
		</SVG>
	);
};
