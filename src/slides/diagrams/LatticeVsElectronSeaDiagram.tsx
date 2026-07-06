// LatticeVsElectronSeaDiagram — side-by-side structural comparison:
// LEFT an ionic crystal lattice (rigid grid of alternating + / − ions),
// RIGHT a metallic structure (fixed positive ions in a mobile sea of
// delocalised electrons). Explains why ionic solids shatter / don't
// conduct when solid, while metals bend / conduct. Serves both the ionic
// (L7) and metallic (L8) bonding lessons. TOK palette.

import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK} from '../../styles/tokens';

const clampOpts = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};
const POS = '#d65a4a';

export const LatticeVsElectronSeaDiagram = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const t = frame / fps;
	const fade = interpolate(frame, [0, 16], [0, 1], clampOpts);
	const label = (d: number) => interpolate(frame, [d, d + 12], [0, 1], clampOpts);
	const verdict = interpolate(frame, [96, 112], [0, 1], clampOpts);
	const pop = (i: number, start: number) => Math.max(0, spring({frame: frame - start - i * 1.4, fps, config: {damping: 13, stiffness: 240, mass: 0.6}}));

	// LEFT: ionic lattice — 4x4 alternating + / − ions
	const lattice: {x: number; y: number; pos: boolean; i: number}[] = [];
	let li = 0;
	for (let r = 0; r < 4; r++) for (let c = 0; c < 4; c++) lattice.push({x: 70 + c * 48, y: 150 + r * 48, pos: (r + c) % 2 === 0, i: li++});

	// RIGHT: metallic — fixed + ions in a grid, with drifting electron dots between
	const metalIons: {x: number; y: number; i: number}[] = [];
	let mi = 0;
	for (let r = 0; r < 4; r++) for (let c = 0; c < 4; c++) metalIons.push({x: 470 + c * 48, y: 150 + r * 48, i: mi++});
	const electrons = Array.from({length: 18}, (_, i) => i);

	return (
		<svg viewBox="0 0 720 420" role="img" aria-label="Ionic lattice versus metallic electron sea" style={{width: '100%'}}>
			<text x={185} y={70} textAnchor="middle" fill={TOK.ink} fontSize={26} fontWeight={800} opacity={label(6)}>ionic lattice</text>
			<text x={185} y={98} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={600} opacity={label(12)}>fixed + and − ions</text>
			<text x={585} y={70} textAnchor="middle" fill={TOK.ink} fontSize={26} fontWeight={800} opacity={label(10)}>metallic</text>
			<text x={585} y={98} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={600} opacity={label(16)}>ions in an electron sea</text>

			{/* ionic lattice */}
			{lattice.map((n) => {
				const s = pop(n.i, 20);
				return (
					<g key={'l' + n.i} transform={`translate(${n.x},${n.y}) scale(${s}) translate(${-n.x},${-n.y})`} opacity={interpolate(s, [0, 0.25], [0, 1], {extrapolateRight: 'clamp'})}>
						<circle cx={n.x} cy={n.y} r={16} fill={n.pos ? POS : TOK.chem2} />
						<text x={n.x} y={n.y + 6} textAnchor="middle" fill="#fff" fontSize={18} fontWeight={800}>{n.pos ? '+' : '−'}</text>
					</g>
				);
			})}

			{/* divider */}
			<line x1={360} y1={120} x2={360} y2={330} stroke={TOK.rule} strokeWidth={2} strokeDasharray="10 10" opacity={fade} />

			{/* metallic: electron sea (drifting dots) behind fixed + ions */}
			{electrons.map((i) => {
				const baseX = 466 + ((i * 41) % 170);
				const baseY = 140 + ((i * 29) % 180);
				const dx = Math.sin(t * 1.4 + i) * 7;
				const dy = Math.cos(t * 1.2 + i) * 7;
				return <circle key={'e' + i} cx={baseX + dx} cy={baseY + dy} r={5} fill={TOK.chem2} opacity={fade * 0.5} />;
			})}
			{metalIons.map((n) => {
				const s = pop(n.i, 24);
				return (
					<g key={'m' + n.i} transform={`translate(${n.x},${n.y}) scale(${s}) translate(${-n.x},${-n.y})`} opacity={interpolate(s, [0, 0.25], [0, 1], {extrapolateRight: 'clamp'})}>
						<circle cx={n.x} cy={n.y} r={15} fill={POS} stroke={TOK.bgLift} strokeWidth={2} />
						<text x={n.x} y={n.y + 6} textAnchor="middle" fill="#fff" fontSize={16} fontWeight={800}>+</text>
					</g>
				);
			})}

			<text x={360} y={400} textAnchor="middle" fill={TOK.chem1} fontSize={22} fontWeight={800} opacity={verdict}>
				fixed ions shatter; a mobile electron sea bends and conducts
			</text>
		</svg>
	);
};
