// EntropyDisorderDiagram — entropy increases solid → liquid → gas. Three
// boxes: ordered grid (solid), looser cluster (liquid), scattered (gas),
// with a rising "S" arrow. Teaches ΔS > 0 for solid→gas. TOK palette.

import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK} from '../../styles/tokens';

const clampOpts = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};

export const EntropyDisorderDiagram = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const t = frame / fps;
	const fade = interpolate(frame, [0, 16], [0, 1], clampOpts);
	const label = (d: number) => interpolate(frame, [d, d + 12], [0, 1], clampOpts);
	const verdict = interpolate(frame, [96, 112], [0, 1], clampOpts);

	const pop = (i: number, start: number) => Math.max(0, spring({frame: frame - start - i * 1.5, fps, config: {damping: 13, stiffness: 240, mass: 0.6}}));

	// SOLID: neat 3x3 grid
	const solid = [];
	for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++) solid.push({x: 80 + c * 30, y: 180 + r * 30});
	// LIQUID: looser, slight jitter
	const liquid = [];
	for (let i = 0; i < 9; i++) { const a = i * 0.7; liquid.push({x: 320 + (i % 3) * 34 + Math.sin(a) * 6, y: 178 + Math.floor(i / 3) * 34 + Math.cos(a) * 6}); }
	// GAS: scattered + drifting
	const gas = [];
	for (let i = 0; i < 9; i++) { gas.push({x: 560 + ((i * 53) % 110) - 8, y: 150 + ((i * 37) % 130)}); }

	const box = (x: number, title: string, sub: string, delay: number) => (
		<g opacity={fade}>
			<rect x={x} y={130} width={150} height={150} rx={10} fill={`${TOK.chem3}55`} stroke={TOK.rule} strokeWidth={2} />
			<text x={x + 75} y={112} textAnchor="middle" fill={TOK.ink} fontSize={24} fontWeight={800} opacity={label(delay)}>{title}</text>
			<text x={x + 75} y={304} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={600} opacity={label(delay + 6)}>{sub}</text>
		</g>
	);

	return (
		<svg viewBox="0 0 720 400" role="img" aria-label="Entropy increases from solid to liquid to gas" style={{width: '100%'}}>
			{box(55, 'solid', 'low entropy', 6)}
			{box(305, 'liquid', 'more entropy', 12)}
			{box(545, 'gas', 'high entropy', 18)}

			{solid.map((p, i) => <circle key={'s' + i} cx={p.x} cy={p.y} r={8} fill={TOK.chem2} transform={`translate(${p.x},${p.y}) scale(${pop(i, 20)}) translate(${-p.x},${-p.y})`} />)}
			{liquid.map((p, i) => <circle key={'l' + i} cx={p.x} cy={p.y} r={8} fill={TOK.chem2} transform={`translate(${p.x},${p.y}) scale(${pop(i, 30)}) translate(${-p.x},${-p.y})`} />)}
			{gas.map((p, i) => { const dx = Math.sin(t * 1.3 + i) * 4, dy = Math.cos(t * 1.1 + i) * 4; return <circle key={'g' + i} cx={p.x + dx} cy={p.y + dy} r={8} fill={TOK.amber} transform={`translate(${p.x},${p.y}) scale(${pop(i, 40)}) translate(${-p.x},${-p.y})`} />; })}

			{/* rising entropy arrow under all three */}
			<line x1={70} y1={320} x2={650} y2={320} stroke={TOK.inkMute} strokeWidth={3} markerEnd="url(#entArrow)" opacity={fade} />
			<defs><marker id="entArrow" markerWidth="10" markerHeight="8" refX="8" refY="4" orient="auto"><polygon points="0 0, 10 4, 0 8" fill={TOK.inkMute} /></marker></defs>

			<text x={360} y={356} textAnchor="middle" fill={TOK.chem1} fontSize={23} fontWeight={800} opacity={verdict}>
				more disorder means higher entropy — ΔS &gt; 0
			</text>
		</svg>
	);
};
