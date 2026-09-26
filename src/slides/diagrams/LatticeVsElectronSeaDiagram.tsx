// LatticeVsElectronSeaDiagram — side-by-side structural comparison:
// LEFT an ionic crystal lattice (NaCl: a rigid 3D grid of alternating Na⁺
// and Cl⁻ ions), RIGHT a metallic structure (a lattice of fixed cations in a
// mobile sea of delocalised electrons). Explains why ionic solids are rigid
// and brittle while metals bend and conduct. Serves both the ionic (L7) and
// metallic (L8) bonding lessons.
//
// Diorama restyle: glossy CPK ions (Na violet and smaller, Cl green and
// larger) packed as a 3 × 3 × 3 cube and painted back to front, metal
// cations on the second plinth with electrons that keep streaming between
// them (the sea is never still), and ions that only vibrate in place.
//
// Timing: both lessons reveal the card at the default frame 62 (START).
// Beat plan (frames after START):
//   0     plinths + titles
//   20    ionic lattice builds ion by ion
//   60    metal cations appear, then the electron sea starts to flow
//   150   verdict line

import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../styles/tokens';
import {DioramaDefs, DioramaPlinth, idleBob} from './diorama';
import {Ball, BallDefs, fadeAt} from './kinds/restyle-chem-specials/props';

const ID = 'latsea';
const START = 62;
const W = 760;
const PLINTH_Y = 408;
const METAL = '#9aa6b2';
const ELECTRON = '#3f6fd8';

type Ion = {x: number; y: number; depth: number; na: boolean; i: number};

// 3 × 3 × 3 rock-salt cube in an oblique projection, sorted back to front.
const LATTICE: Ion[] = (() => {
	const out: Ion[] = [];
	let n = 0;
	for (let k = 2; k >= 0; k--)
		for (let j = 0; j < 3; j++)
			for (let i = 0; i < 3; i++) out.push({x: (i - 1) * 50 + (k - 1) * 24, y: (j - 1) * 50 - (k - 1) * 24, depth: k, na: (i + j + k) % 2 === 0, i: n++});
	return out;
})();

// Metal: 4 × 3 cations.
const CATIONS = Array.from({length: 12}, (_, n) => ({x: ((n % 4) - 1.5) * 52, y: (Math.floor(n / 4) - 1) * 52, i: n}));

export const LatticeVsElectronSeaDiagram = () => {
	const frame = useCurrentFrame() - START;
	const {fps} = useVideoConfig();
	const pop = (i: number, start: number) => Math.max(0, spring({frame: frame - start - i * 2, fps, config: {damping: 13, stiffness: 220, mass: 0.6}}));

	const LX = 195, RX = 565, CY = 272;
	const sea = fadeAt(frame, 110, 20);

	return (
		<svg viewBox={`0 0 ${W} 530`} role="img" aria-label="Ionic lattice of sodium and chloride ions versus metal cations in a sea of delocalised electrons" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} elements={['Na', 'Cl']} />
			<BallDefs id={ID} colors={{metal: METAL, e: ELECTRON}} />

			<g opacity={fadeAt(frame, -START, 14)}>
				<text x={LX} y={52} textAnchor="middle" fill={TOK.ink} fontSize={28} fontWeight={800}>ionic lattice</text>
				<text x={LX} y={80} textAnchor="middle" fill={TOK.inkDim} fontSize={19} fontWeight={600}>fixed Na⁺ and Cl⁻ ions</text>
				<text x={RX} y={52} textAnchor="middle" fill={TOK.ink} fontSize={28} fontWeight={800}>metallic</text>
				<text x={RX} y={80} textAnchor="middle" fill={TOK.inkDim} fontSize={19} fontWeight={600}>cations in a sea of electrons</text>
			</g>

			<g opacity={fadeAt(frame, -START, 16)}>
				<DioramaPlinth id={ID} cx={LX} cy={PLINTH_Y} rx={140}>
					<ellipse cx={LX} cy={PLINTH_Y - 6} rx={90} ry={18} fill="rgba(40,60,20,0.22)" filter={`url(#${ID}-blur)`} />
				</DioramaPlinth>
				<DioramaPlinth id={ID} cx={RX} cy={PLINTH_Y} rx={140}>
					<ellipse cx={RX} cy={PLINTH_Y - 6} rx={100} ry={18} fill="rgba(40,60,20,0.22)" filter={`url(#${ID}-blur)`} />
				</DioramaPlinth>
			</g>

			{/* ionic lattice: thin bonds along the cube edges, then the ions */}
			<g opacity={fadeAt(frame, 40, 20) * 0.45}>
				{LATTICE.map((a) => LATTICE.filter((b) => b.i > a.i && Math.abs(Math.hypot(b.x - a.x, b.y - a.y) - 50) < 0.5 && b.depth === a.depth).map((b) => (
					<line key={`${a.i}-${b.i}`} x1={LX + a.x} y1={CY + a.y} x2={LX + b.x} y2={CY + b.y} stroke={TOK.inkMute} strokeWidth={2} />
				)))}
			</g>
			{LATTICE.map((ion) => {
				const s = pop(ion.i, 20);
				const el = ion.na ? 'Na' : 'Cl';
				const r = ion.na ? 12 : 17;
				const x = LX + ion.x + idleBob(frame, ion.i, 0.9);
				const y = CY + ion.y + idleBob(frame + 13, ion.i + 5, 0.9);
				return (
					<g key={ion.i} opacity={s > 0.02 ? 1 : 0} transform={`translate(${x},${y}) scale(${Math.min(1, s)})`}>
						<circle r={r} fill={`url(#${ID}-atom-${el})`} stroke={ion.na ? '#5e3a96' : '#2f7d2c'} strokeWidth={1} />
						<text y={6} textAnchor="middle" fill="#ffffff" fontSize={16} fontWeight={900}>{ion.na ? '+' : '−'}</text>
					</g>
				);
			})}

			{/* metallic: electron sea behind and between fixed cations */}
			{Array.from({length: 22}, (_, i) => {
				// each electron streams left→right along its own lane and wraps round
				const lane = (i % 5) - 2;
				const speed = 0.55 + ((i * 7) % 5) * 0.12;
				const span = 250;
				const px = ((((frame + START) * speed + i * 67) % span) + span) % span - span / 2;
				const py = lane * 30 + Math.sin((frame + START) / 14 + i) * 6;
				return <Ball key={i} id={ID} fill="e" edge={ELECTRON} x={RX + px} y={CY + py} r={6} opacity={sea * (Math.abs(px) > span / 2 - 14 ? 0.3 : 0.95)} />;
			})}
			{CATIONS.map((c) => {
				const s = pop(c.i, 60);
				return (
					<g key={c.i} opacity={s > 0.02 ? 1 : 0} transform={`translate(${RX + c.x + idleBob(frame, c.i + 40, 0.9)},${CY + c.y + idleBob(frame + 9, c.i + 51, 0.9)}) scale(${Math.min(1, s)})`}>
						<circle r={17} fill={`url(#${ID}-ball-metal)`} stroke="#5d6873" strokeWidth={1} />
						<text y={6} textAnchor="middle" fill="#ffffff" fontSize={17} fontWeight={900}>+</text>
					</g>
				);
			})}

			{/* legend */}
			<g opacity={fadeAt(frame, 60)}>
				<circle cx={96} cy={114} r={10} fill={`url(#${ID}-atom-Na)`} />
				<text x={112} y={121} fill={TOK.inkDim} fontSize={18} fontWeight={700}>Na⁺</text>
				<circle cx={170} cy={114} r={12} fill={`url(#${ID}-atom-Cl)`} />
				<text x={188} y={121} fill={TOK.inkDim} fontSize={18} fontWeight={700}>Cl⁻</text>
				<circle cx={470} cy={114} r={11} fill={`url(#${ID}-ball-metal)`} />
				<text x={487} y={121} fill={TOK.inkDim} fontSize={18} fontWeight={700}>cation</text>
				<g opacity={sea}>
					<circle cx={572} cy={114} r={6} fill={`url(#${ID}-ball-e)`} />
					<text x={584} y={121} fill={TOK.inkDim} fontSize={18} fontWeight={700}>free electron</text>
				</g>
			</g>
			<text x={W / 2} y={526} textAnchor="middle" fill={TOK.chem1} fontSize={20} fontWeight={800} opacity={fadeAt(frame, 150, 16)}>
				ions locked in place vs cations in mobile electrons
			</text>
		</svg>
	);
};
