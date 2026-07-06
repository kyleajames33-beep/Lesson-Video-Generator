// IsotopeAtomsDiagram — two nuclei of the same element side by side: same
// number of protons, different number of neutrons. Teaches what isotopes
// are (carbon-12 vs carbon-14). TOK palette.

import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK} from '../../styles/tokens';

const clampOpts = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};
const PROTON = '#d65a4a';

export const IsotopeAtomsDiagram = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const fade = interpolate(frame, [0, 16], [0, 1], clampOpts);
	const label = (d: number) => interpolate(frame, [d, d + 12], [0, 1], clampOpts);
	const verdict = interpolate(frame, [90, 106], [0, 1], clampOpts);
	const pop = (i: number, start: number) => Math.max(0, spring({frame: frame - start - i * 2, fps, config: {damping: 13, stiffness: 240, mass: 0.6}}));

	// pack nucleons in a rough cluster around a centre
	const cluster = (cx: number, cy: number, protons: number, neutrons: number, startP: number, startN: number) => {
		const nodes: {x: number; y: number; fill: string; s: number}[] = [];
		const total = protons + neutrons;
		const cols = Math.ceil(Math.sqrt(total));
		for (let i = 0; i < total; i++) {
			const col = i % cols, row = Math.floor(i / cols);
			const jx = ((i * 31) % 9) - 4, jy = ((i * 47) % 9) - 4;
			const x = cx + (col - (cols - 1) / 2) * 26 + jx;
			const y = cy + (row - (Math.ceil(total / cols) - 1) / 2) * 26 + jy;
			const isP = i < protons;
			nodes.push({x, y, fill: isP ? PROTON : TOK.inkMute, s: pop(i, isP ? startP : startN)});
		}
		return nodes;
	};

	const left = cluster(180, 210, 6, 6, 20, 30);   // carbon-12
	const right = cluster(540, 210, 6, 8, 24, 34);  // carbon-14

	return (
		<svg viewBox="0 0 720 400" role="img" aria-label="Two isotopes: same protons, different neutrons" style={{width: '100%'}}>
			<text x={180} y={70} textAnchor="middle" fill={TOK.ink} fontSize={26} fontWeight={800} opacity={label(6)}>carbon-12</text>
			<text x={540} y={70} textAnchor="middle" fill={TOK.ink} fontSize={26} fontWeight={800} opacity={label(10)}>carbon-14</text>
			<text x={180} y={96} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={600} opacity={label(14)}>6 protons, 6 neutrons</text>
			<text x={540} y={96} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={600} opacity={label(18)}>6 protons, 8 neutrons</text>

			{[...left, ...right].map((n, i) => (
				<circle key={i} cx={n.x} cy={n.y} r={11} fill={n.fill} stroke={TOK.bgLift} strokeWidth={1.5}
					transform={`translate(${n.x},${n.y}) scale(${n.s}) translate(${-n.x},${-n.y})`}
					opacity={interpolate(n.s, [0, 0.25], [0, 1], {extrapolateRight: 'clamp'})} />
			))}

			<line x1={360} y1={120} x2={360} y2={300} stroke={TOK.rule} strokeWidth={2} strokeDasharray="10 10" opacity={fade} />

			{/* legend */}
			<g opacity={label(44)}>
				<circle cx={300} cy={336} r={9} fill={PROTON} /><text x={316} y={342} fill={TOK.inkDim} fontSize={17} fontWeight={600}>proton</text>
				<circle cx={410} cy={336} r={9} fill={TOK.inkMute} /><text x={426} y={342} fill={TOK.inkDim} fontSize={17} fontWeight={600}>neutron</text>
			</g>

			<text x={360} y={384} textAnchor="middle" fill={TOK.chem1} fontSize={22} fontWeight={800} opacity={verdict}>
				same protons, different neutrons
			</text>
		</svg>
	);
};
