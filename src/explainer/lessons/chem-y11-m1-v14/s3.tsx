// Y11 Chem M1 V14 scenes 11 to 16: two HSC-style attempts (whole card with neutral pictures: the sodium sample, then
// the period 3 sample row; ring from "Pause here", 10 s countdown), brief feedback (navy givens strip, green framed
// answers, one red crossed slip), the handoff (the final frame: group 1 ionisation-energy bars with "easier to lose
// the outer electron", the trough of water with a "?", the "Next" chip) and the key notes with the memory card, which
// cross-fade back to the handoff's final frame.
import React from 'react';
import {Freeze, useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Givens, QTag} from '../chem-y11-m1-v01/s3';
import {DATA, G1, NA, P3, ROW, TROUGH, core, dur, en, enS, fitH, hold, ie, ph, sc} from './common';
import {
	AMB_S, AMB_T, Card, Chip, E_BLUE, E_INK, Fade, Framed, GREEN_T, HBarV, Hatch, Heading, INK, NAVY_T, OR_F, OR_S, OR_T, PauseHoldR, PenArrow, PenRing, PlateB, Pull, RAtom,
	RED_T, Rich, Ruler, SVG, ShadeTable, Sx, VBarV, VI_F, VI_S, VI_T, Write, ePos, lerp, prog, ringsOf, smooth, toward,
} from './parts';
import type {SG, Seg} from './parts';

const Q: React.FC<{lines: string[]; y0?: number; lh?: number}> = ({lines, y0 = 290, lh = 58}) => <>{lines.map((t, i) => <Rich key={i} x={140} y={y0 + i * lh} segs={[{t}]} size={38} weight={700} />)}</>;
const na = DATA.Na, k = DATA.K, ar = DATA.Ar, cl = DATA.Cl;

// ---------- 11. attempt 1 ----------
const K11 = cues(sc('attempt-1'), {pause: 'Pause here'});
export const SceneAttempt1: React.FC = () => (
	<SVG>
		<Heading text="Your turn" at={0} />
		<QTag />
		<Card h={700} />
		<Q lines={[`The first ionisation energy of sodium is ${ie(na)} kJ mol^{−1} and that of`, `potassium is ${ie(k)} kJ mol^{−1}.`]} />
		<Q y0={440} lines={['Explain this difference in terms of atomic structure.']} />
		<Sx x={140} y={520} text="(3 marks)" size={34} color={INK} weight={700} at={-1000} />
		<PlateB p={NA} cx={1560} bottom={830} h={400} />
		<PauseHoldR h={hold('attempt-1')} at={K11.pause} x={140} y={936} cx={1100} cy={740} />
	</SVG>
);

// ---------- 12. feedback 1 ----------
const K12 = cues(sc('feedback-1'), {occupied: 'more occupied', nucleus: 'nucleus', plus: 'plus one', less: 'less energy', saying: 'Saying', classic: 'classic slip', distance: 'Distance'});
const S12 = 0.9;
const NA12: [number, number] = [300, 560], K12C: [number, number] = [720, 560];
export const SceneFeedback1: React.FC = () => {
	const f = useCurrentFrame();
	const RN = S12 * na.r, RK = S12 * k.r;
	const nE: [number, number] = [NA12[0] + RN, NA12[1]], kE: [number, number] = [K12C[0] + RK, K12C[1]];
	return (
		<SVG>
			<Heading text="Your turn" at={-1000} />
			<Givens segs={[{t: `Na ${ie(na)} kJ mol^{−1}     |     K ${ie(k)} kJ mol^{−1}`}]} />
			<RAtom cx={NA12[0]} cy={NA12[1]} rings={ringsOf(3, RN)} counts={na.shells} label={`${na.z}+`} nr={26} dot={8} labelSize={26} outerRot={0} />
			<RAtom cx={K12C[0]} cy={K12C[1]} rings={ringsOf(4, RK)} counts={k.shells} label={`${k.z}+`} nr={28} dot={8} labelSize={28} outerRot={0} />
			<Pull a={toward(NA12, nE, RN - 10)} b={toward(NA12, nE, 32)} w={6} p={prog(f, K12.less - 20, 14)} />
			<Pull a={toward(K12C, kE, RK - 10)} b={toward(K12C, kE, 34)} w={3} p={prog(f, K12.less - 14, 14)} />
			<Ruler c={NA12} R={RN} ang={-Math.PI / 2} at={K12.nucleus} />
			<Ruler c={K12C} R={RK} ang={-Math.PI / 2} at={K12.nucleus + 6} />
			<Sx x={NA12[0]} y={790} text={`Na  ${na.shells.join(',')}`} size={38} color={INK} anchor="middle" weight={800} at={-1000} />
			<Sx x={K12C[0]} y={790} text={`K  ${k.shells.join(',')}`} size={38} color={INK} anchor="middle" weight={800} at={-1000} />
			<Chip x={NA12[0]} y={816} segs={[{t: `+${core(na)}`, c: AMB_T}]} at={K12.plus} size={38} color={AMB_S} anchor="middle" />
			<Chip x={K12C[0]} y={816} segs={[{t: `+${core(k)}`, c: AMB_T}]} at={K12.plus + 6} size={38} color={AMB_S} anchor="middle" />
			<Framed x={980} y={380} segs={[{t: 'K: extra shell, further out', c: GREEN_T}]} at={K12.occupied} size={38} stroke={GREEN_T} />
			<Framed x={980} y={490} segs={[{t: 'core charge ', c: GREEN_T}, {t: `+${core(k)}`, c: AMB_T}, {t: ' for both', c: GREEN_T}]} at={K12.plus} size={38} stroke={GREEN_T} />
			<Framed x={980} y={600} segs={[{t: 'weaker pull: less energy to remove', c: GREEN_T}]} at={K12.less} size={38} stroke={GREEN_T} />
			<Chip x={980} y={660} segs={[{t: 'K has more protons, so it holds tighter'}]} at={K12.saying} size={38} color={RED_T} strike={K12.classic} />
			<Write x={1000} y={790} text="more shielding and distance" at={K12.distance} size={42} color={RED_T} />
			<PlateB p={NA} cx={1700} bottom={930} h={140} />
		</SVG>
	);
};

// ---------- 13. attempt 2 ----------
const K13 = cues(sc('attempt-2'), {pause: 'Pause here'});
export const SceneAttempt2: React.FC = () => (
	<SVG>
		<Heading text="Last one" at={0} />
		<QTag />
		<Card h={700} />
		<Q lines={['Consider the Period 3 elements from sodium to argon.', '(a) Identify the element with the highest first ionisation energy.', '(b) Identify the element with the highest electronegativity.', '(c) Explain why the answers to (a) and (b) are different.']} />
		<Sx x={140} y={530} text="(3 marks)" size={34} color={INK} weight={700} at={-1000} />
		{ROW.map((p, i) => <PlateB key={i} p={p} cx={210 + i * 150} bottom={820} h={fitH(p, 124, 170)} />)}
		<PauseHoldR h={hold('attempt-2')} at={K13.pause} x={140} y={936} cx={1620} cy={720} />
	</SVG>
);

// ---------- 14. feedback 2 ----------
const K14 = cues(sc('feedback-2'), {argon: 'Argon has', fifteen: 'fifteen hundred', chlorine: 'Chlorine has', three: 'three point two', novalue: 'no value', answering: 'Answering', trap: 'trap'});
const X14 = (i: number) => 150 + i * 100;
const BA14 = 580, BB14 = 880, KA14 = 0.17, KB14 = 62;
export const SceneFeedback2: React.FC = () => (
	<SVG>
		<Heading text="Last one" at={-1000} />
		<Givens segs={[{t: 'period 3: Na to Ar'}]} />
		<Sx x={96} y={318} text="first ionisation energy (kJ/mol)" size={30} color={OR_T} weight={800} at={-1000} />
		<line x1={96} y1={BA14} x2={910} y2={BA14} stroke={INK} strokeWidth={3} />
		{P3.map((x, i) => (
			<g key={x.sym}>
				<VBarV x={X14(i)} y0={BA14} w={66} v={ie(x)} k={KA14} p={1} text={`${ie(x)}`} color={OR_S} fill={OR_F} tColor={OR_T} />
				<Sx x={X14(i)} y={BA14 + 36} text={x.sym} size={32} color={INK} anchor="middle" weight={800} at={-1000} />
			</g>
		))}
		<PenRing cx={X14(7)} cy={BA14 - ie(ar) * KA14 - 20} rx={52} ry={38} at={K14.argon} color={OR_S} seed={4} />
		<Sx x={96} y={668} text="electronegativity" size={30} color={VI_T} weight={800} at={-1000} />
		<line x1={96} y1={BB14} x2={910} y2={BB14} stroke={INK} strokeWidth={3} />
		{P3.map((x, i) => (
			<g key={x.sym}>
				{x.en !== undefined ? <VBarV x={X14(i)} y0={BB14} w={66} v={en(x)} k={KB14} p={1} text={enS(x)} color={VI_S} fill={VI_F} tColor={VI_T} /> : <Hatch x={X14(i) - 33} y={BB14 - 110} w={66} h={110} id="v14h14" />}
				<Sx x={X14(i)} y={BB14 + 36} text={x.sym} size={32} color={INK} anchor="middle" weight={800} at={-1000} />
			</g>
		))}
		<PenRing cx={X14(6)} cy={BB14 - en(cl) * KB14 - 20} rx={52} ry={38} at={K14.chlorine} color={VI_S} seed={6} />
		<Framed x={1000} y={380} segs={[{t: '(a) argon, ', c: GREEN_T}, {t: `${ie(ar)} kJ/mol`, c: OR_T}]} at={K14.fifteen} size={44} stroke={GREEN_T} />
		<Framed x={1000} y={500} segs={[{t: '(b) chlorine, ', c: GREEN_T}, {t: enS(cl), c: VI_T}]} at={K14.three} size={44} stroke={GREEN_T} />
		<Framed x={1000} y={620} segs={[{t: '(c) electronegativity needs a bond', c: GREEN_T}]} at={K14.novalue} size={40} stroke={GREEN_T} />
		<Rich x={1000} y={690} segs={[{t: 'argon rarely bonds, so it has no Pauling value'}]} size={34} at={K14.novalue + 10} />
		<Chip x={1000} y={740} segs={[{t: 'argon for both'}]} at={K14.answering} size={44} color={RED_T} strike={K14.trap} />
		<Write x={1000} y={890} text="no bond, no value" at={K14.trap + 6} size={42} color={RED_T} />
	</SVG>
);

// ---------- 15. handoff: losing an electron in water (final frame; chem-y11-m1-v15 opens on it) ----------
const K15 = cues(sc('handoff'), {losing: 'losing their', easier: 'gets easier', lithium: 'from lithium', sodium: 'to sodium', potassium: 'to potassium', water: ['water', 1], water2: ['water', 2]});
export const TROUGH15 = {cx: 1390, bottom: 830, w: 700};
const AT15 = [1090, 1340, 1640];
export const SceneHandoff: React.FC = () => {
	const f = useCurrentFrame();
	const g3 = G1.slice(0, 3);
	const leaveAt = [K15.lithium, K15.sodium, K15.potassium];
	const atomsO = prog(f, K15.losing, 14) * (1 - prog(f, K15.water - 22, 18));
	return (
		<SVG>
			<Heading text="Ionisation energy and electronegativity" at={-1000} />
			<Sx x={96} y={302} text="group 1: first ionisation energy" size={30} color={OR_T} weight={800} at={-1000} />
			{g3.map((x, i) => <HBarV key={x.sym} x={96} y={330 + i * 110} lw={90} label={x.sym} v={ie(x)} k={0.85} p={1} text={`${ie(x)} kJ/mol`} color={OR_S} fill={OR_F} tColor={OR_T} h={70} size={44} outline={false} />)}
			<PenArrow a={[880, 340]} b={[880, 620]} at={K15.easier} color={OR_S} bend={0} width={7} head={22} />
			<Write x={96} y={720} text="easier to lose the outer electron" at={K15.easier + 20} size={42} color={OR_T} />
			{/* the three atoms losing their outer electron (cleared before the trough) */}
			{atomsO > 0.005 ? (
				<g opacity={atomsO}>
					{g3.map((x, i) => {
						const R = 0.75 * x.r, c: [number, number] = [AT15[i], 540];
						const rot = -Math.PI / 4;
						const e0 = ePos(c[0], c[1], R, 1, 0, rot);
						const to: [number, number] = [e0[0] + 70, e0[1] - 70];
						const lp = prog(f, leaveAt[i], 24);
						return (
							<g key={x.sym}>
								<RAtom cx={c[0]} cy={c[1]} rings={ringsOf(x.shells.length, R)} counts={x.shells} label={`${x.z}+`} nr={22} dot={8} labelSize={22} outerRot={rot} leave={{to, p: lp > 0 ? 1 : 0}} />
								{lp > 0 ? <circle cx={lerp(e0[0], to[0], smooth(lp))} cy={lerp(e0[1], to[1], smooth(lp))} r={8} fill={E_BLUE} stroke={E_INK} strokeWidth={2} /> : null}
								<PenArrow a={[e0[0] + 8, e0[1] - 8]} b={[to[0] - 4, to[1] + 4]} at={leaveAt[i]} color={OR_S} bend={0} width={4} head={12} />
								<Sx x={c[0]} y={c[1] + R + 50} text={x.sym} size={38} color={INK} anchor="middle" weight={800} at={-1000} />
							</g>
						);
					})}
					<Sx x={1360} y={850} text="each loses its one outer electron" size={38} color={INK} anchor="middle" weight={800} at={-1000} />
				</g>
			) : null}
			{/* the water */}
			<PlateB p={TROUGH} cx={TROUGH15.cx} bottom={TROUGH15.bottom} h={ph(TROUGH, TROUGH15.w)} at={K15.water} dy={30} />
			<Write x={TROUGH15.cx} y={660} text="?" at={K15.water + 12} size={140} color={INK} anchor="middle" />
			<Chip x={96} y={178} segs={[{t: 'Next: why do Group 1 metals react differently with water?'}]} at={K15.water2} size={38} color={NAVY_T} />
		</SVG>
	);
};

// ---------- 16. key notes ----------
const NOTES: Seg[][][] = [
	[[{t: 'First ionisation energy', c: OR_T}, {t: ': energy to remove the'}], [{t: 'outermost electron (per mole, gas).'}]],
	[[{t: 'Generally '}, {t: 'rises across a period', c: OR_T}], [{t: 'and '}, {t: 'falls down a group', c: OR_T}, {t: '.'}]],
	[[{t: 'Small dips', c: RED_T}, {t: ': Mg to Al (new 3p subshell)'}], [{t: 'and P to S (paired 3p electron).'}]],
	[[{t: 'Electronegativity', c: VI_T}, {t: ': pull on a shared pair'}], [{t: `in a bond; no units; F highest (${enS(DATA.F)}).`}]],
	[[{t: 'Noble gases', c: INK}, {t: ': highest ionisation energy,'}], [{t: 'usually no electronegativity value.'}]],
];
const GN: SG = {x: 1232, y: 560, cw: 30, ch: 26};
export const SceneNotes: React.FC = () => {
	const f = useCurrentFrame();
	const D = dur('key-notes');
	const outA = D - 46;
	let y = 300;
	const rows = NOTES.map((lines, i) => {
		const y0 = y;
		y += lines.length * 50 + 24;
		return (
			<Fade key={i} at={i * 3}>
				<circle cx={112} cy={y0 - 12} r={8} fill={i === 3 ? VI_S : OR_S} />
				{lines.map((l, kk) => <Rich key={kk} x={140} y={y0 + kk * 50} segs={l} size={36} weight={700} />)}
			</Fade>
		);
	});
	return (
		<SVG>
			<Fade at={-1000} out={outA} d={18}>
				<Write x={96} y={150} text="Key notes: what to write in your book" at={2} size={60} color={INK} cps={40} />
				<Write x={96} y={214} text="Pause the video if you need more time to copy." at={4} size={38} color={AMB_T} />
				{rows}
				<Fade at={6}>
					<rect x={1170} y={290} width={654} height={560} rx={22} fill="#fffdf8" stroke={NAVY_T} strokeWidth={5} />
					<Sx x={1200} y={334} text="memory aid" size={30} color={INK} hand at={-1000} />
					<Sx x={1210} y={420} text="Top right holds tight;" size={48} color={VI_T} hand at={-1000} />
					<Sx x={1210} y={490} text="bottom left lets go." size={48} color={OR_T} hand at={-1000} />
					<ShadeTable g={GN} id="v14gn" corners={1} />
				</Fade>
			</Fade>
			{/* cross-fade back to the handoff's final frame */}
			{f >= outA ? <Fade at={outA + 4} d={18}><Freeze frame={dur('handoff') - 1}><SceneHandoff /></Freeze></Fade> : null}
		</SVG>
	);
};
void PlateB; void Hatch;
