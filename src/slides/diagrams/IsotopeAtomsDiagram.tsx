// IsotopeAtomsDiagram — two atoms of the same element side by side: same
// number of protons, different number of neutrons (carbon-12 vs carbon-14).
// Later the electrons join: both have 6, which is why isotopes are
// chemically identical.
//
// Diorama restyle: each nucleus is a packed ball of glossy protons (red) and
// neutrons (grey), painted back-to-front, floating over its own plinth with a
// soft shadow on the grass; electrons circle on tilted orbits for the hold.
//
// Timing: Chem Y11 M1 L14 concept-isotopes reveals at the default frame 62.
// Beat plan (frames after START = 62):
//   0     plinths + element names
//   20    protons pack in (both nuclei), then neutrons
//   100   counts; the different neutron count is the amber highlight
//   540   electrons fade in on their orbits ("same electrons: same chemistry",
//         where the narration reaches it) and keep circling

import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../styles/tokens';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from './diorama';
import {Ball, BallDefs, fadeAt} from './kinds/restyle-chem-specials/props';

const ID = 'iso';
const START = 62;
const W = 760;
const PROTON = '#d65a4a';
const NEUTRON = '#a3abb3';
const ELECTRON = '#3f6fd8';
const NUC_Y = 262;
const PLINTH_Y = 398;
const ELECTRONS_AT = 540;

type Nucleon = {x: number; y: number; z: number; proton: boolean; order: number};

// Pack N nucleons into a ball (Fibonacci directions, radius ∝ cube root) and
// spread the protons evenly through it. Deterministic.
const packNucleus = (protons: number, neutrons: number): Nucleon[] => {
	const n = protons + neutrons;
	const golden = Math.PI * (3 - Math.sqrt(5));
	const out: Nucleon[] = [];
	for (let i = 0; i < n; i++) {
		const rho = 36 * Math.cbrt((i + 0.5) / n);
		const yy = 1 - (2 * (i + 0.5)) / n;
		const rr = Math.sqrt(1 - yy * yy);
		const th = golden * i;
		out.push({x: Math.cos(th) * rr * rho, y: yy * rho * 0.92, z: Math.sin(th) * rr * rho, proton: false, order: i});
	}
	// Protons: every (n / protons)-th nucleon, so they are mixed through the nucleus.
	for (let k = 0; k < protons; k++) out[Math.floor((k * n) / protons)].proton = true;
	return out.sort((a, b) => a.z - b.z);
};

const C12 = packNucleus(6, 6);
const C14 = packNucleus(6, 8);

export const IsotopeAtomsDiagram = () => {
	const frame = useCurrentFrame() - START;
	const {fps} = useVideoConfig();
	const pulse = idlePulse(frame + START);
	const electrons = fadeAt(frame, ELECTRONS_AT, 20);

	const atom = (cx: number, nucleus: Nucleon[], side: number) => {
		const orbit = (rx: number, ry: number, tilt: number, count: number, speed: number, phase: number) => (
			<g opacity={electrons}>
				<ellipse cx={cx} cy={NUC_Y} rx={rx} ry={ry} fill="none" stroke={ELECTRON} strokeOpacity={0.35} strokeWidth={2} transform={`rotate(${tilt} ${cx} ${NUC_Y})`} />
				{Array.from({length: count}, (_, i) => {
					const a = ((frame + START) * speed) / 60 + phase + (i * 2 * Math.PI) / count;
					const ex = Math.cos(a) * rx, ey = Math.sin(a) * ry;
					const t = (tilt * Math.PI) / 180;
					return <Ball key={i} id={ID} fill="e" edge={ELECTRON} x={cx + ex * Math.cos(t) - ey * Math.sin(t)} y={NUC_Y + ex * Math.sin(t) + ey * Math.cos(t)} r={7} />;
				})}
			</g>
		);
		return (
			<g>
				<DioramaPlinth id={ID} cx={cx} cy={PLINTH_Y} rx={118}>
					<ellipse cx={cx} cy={PLINTH_Y - 4} rx={46} ry={12} fill="rgba(40,60,20,0.25)" filter={`url(#${ID}-blur)`} />
				</DioramaPlinth>
				{orbit(80, 28, -18, 2, 1.3, side)}
				{nucleus.map((p) => {
					const t0 = p.proton ? 20 : 54;
					const s = Math.max(0, spring({frame: frame - t0 - (p.order % 8) * 3, fps, config: {damping: 13, stiffness: 220, mass: 0.6}}));
					const bob = idleBob(frame, side * 3, 1.6);
					return (
						<Ball key={p.order} id={ID} fill={p.proton ? 'p' : 'n'} edge={p.proton ? PROTON : NEUTRON} x={cx + p.x} y={NUC_Y + p.y + bob} r={14} scale={Math.min(1, s)} opacity={s > 0.02 ? 1 : 0} />
					);
				})}
				{orbit(136, 50, 14, 4, 0.8, side + 1)}
			</g>
		);
	};

	const counts = (cx: number, neutrons: number, hot: boolean) => (
		<g opacity={fadeAt(frame, 100)}>
			<text x={cx} y={86} textAnchor="middle" fill={TOK.inkDim} fontSize={21} fontWeight={700}>
				6 protons ·{' '}
				<tspan fill={hot ? TOK.amberInk : TOK.inkDim} fontWeight={800}>{neutrons} neutrons</tspan>
			</text>
			{hot ? <rect x={cx + 2} y={64} width={112} height={30} rx={15} fill="none" stroke={TOK.amber} strokeWidth={2 + pulse * 1.5} /> : null}
		</g>
	);

	return (
		<svg viewBox={`0 0 ${W} 530`} role="img" aria-label="Carbon-12 and carbon-14: same protons and electrons, different neutrons" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<BallDefs id={ID} colors={{p: PROTON, n: NEUTRON, e: ELECTRON}} />

			<text x={195} y={54} textAnchor="middle" fill={TOK.ink} fontSize={30} fontWeight={800} opacity={fadeAt(frame, -START, 14)}>carbon-12</text>
			<text x={565} y={54} textAnchor="middle" fill={TOK.ink} fontSize={30} fontWeight={800} opacity={fadeAt(frame, -START, 14)}>carbon-14</text>
			{counts(195, 6, false)}
			{counts(565, 8, true)}

			<g opacity={fadeAt(frame, -START, 16)}>
				{atom(195, C12, 0)}
				{atom(565, C14, 1)}
			</g>

			{/* legend */}
			<g opacity={fadeAt(frame, 100)}>
				<Ball id={ID} fill="p" edge={PROTON} x={240} y={486} r={10} />
				<text x={256} y={493} fill={TOK.inkDim} fontSize={19} fontWeight={700}>proton</text>
				<Ball id={ID} fill="n" edge={NEUTRON} x={350} y={486} r={10} />
				<text x={366} y={493} fill={TOK.inkDim} fontSize={19} fontWeight={700}>neutron</text>
				<g opacity={electrons}>
					<Ball id={ID} fill="e" edge={ELECTRON} x={472} y={486} r={7} />
					<text x={486} y={493} fill={TOK.inkDim} fontSize={19} fontWeight={700}>electron</text>
				</g>
			</g>
			<text x={W / 2} y={524} textAnchor="middle" fill={TOK.chem1} fontSize={20} fontWeight={800} opacity={fadeAt(frame, 130)}>
				{frame < ELECTRONS_AT ? 'same protons, different neutrons' : 'same electrons too, so the same chemistry'}
			</text>
		</svg>
	);
};
