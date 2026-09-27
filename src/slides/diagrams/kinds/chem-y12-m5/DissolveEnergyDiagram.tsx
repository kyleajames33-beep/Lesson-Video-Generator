// DissolveEnergyDiagram (kind: chem12m5Dissolve) — dissolving as two
// competing energy steps.
//
// Left: an ionic lattice on a plinth. Step 1: a cation and an anion are pulled
// out of the lattice while heat arrows point IN ("lattice energy: endothermic").
// Step 2: water molecules swing in and surround the freed ions — δ− oxygen
// towards the cation, a δ+ hydrogen towards the anion — while heat arrows
// point OUT ("hydration energy: exothermic").
//
// Right: an energy ledger. The lattice bar grows up (+, energy in), the
// hydration bar grows down (−, energy out), and the ΔH(dissolution) bar is
// their sum (amber). Then the two outcomes: hydration bigger → ΔH < 0 and the
// thermometer rises (solution warms); lattice bigger → ΔH > 0 and it falls
// (solution cools). Qualitative: no values are shown.
//
// Water geometry (104.5°, O–H) follows kinds/chem-y11-m1/HydrationDiagram.

import {interpolate, useCurrentFrame} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {AtomDefs, Ball, beatCaption, clamp, ease, eramp, ramp, shade, colorOf} from './shared';

export type DissolveProps = {
	delay?: number;
	cation?: {el: string; label: string};
	anion?: {el: string; label: string};
	beats?: {
		step1?: number; pull?: number; latticeBar?: number; step2?: number; oxygen?: number; hydrogen?: number;
		hydrationBar?: number; sum?: number; which?: number; warm?: number; warmTherm?: number; cool?: number; coolTherm?: number;
	};
};

const ID = 'c12m5dis';
const W = 760;
const H = 530;
const HEAT = '#e0563a';

// Water geometry
const O_R = 11;
const H_R = 7.5;
const OH = 16;
const HALF = (52 * Math.PI) / 180;

const Water = ({x, y, axis, opacity = 1}: {x: number; y: number; axis: number; opacity?: number}) => {
	const hs = [-1, 1].map((sg) => ({x: x + Math.cos(axis + sg * HALF) * OH, y: y + Math.sin(axis + sg * HALF) * OH}));
	const parts = [{el: 'O', x, y, r: O_R}, ...hs.map((h) => ({el: 'H', x: h.x, y: h.y, r: H_R}))].sort((a, b) => a.y - b.y);
	return (
		<g opacity={opacity}>
			{parts.map((p, i) => (
				<circle key={i} cx={p.x} cy={p.y} r={p.r} fill={`url(#${ID}-atom-${p.el})`} stroke={shade(colorOf(p.el), -0.35)} strokeWidth={1} />
			))}
		</g>
	);
};

export const DissolveEnergyDiagram = ({
	delay = 62,
	cation = {el: 'Na', label: 'cation'},
	anion = {el: 'Cl', label: 'anion'},
	beats = {},
}: DissolveProps) => {
	const frame = useCurrentFrame() - delay;
	const theme = useAccent();
	const b = {
		step1: 92, pull: 150, latticeBar: 245, step2: 362, oxygen: 450, hydrogen: 508, hydrationBar: 596, sum: 676, which: 800,
		warm: 822, warmTherm: 925, cool: 961, coolTherm: 1030, ...beats,
	};

	// ── Lattice on the plinth ──
	const PC = {x: 250, y: 330, rx: 212};
	const cols = 4, rows = 3, colW = 44, rowH = 29;
	const L0 = {x: PC.x - ((cols - 1) * colW) / 2 - 9, y: PC.y - 60};
	const CAT_R = 13, AN_R = 18;
	const cells = Array.from({length: rows * cols}, (_, k) => {
		const c = k % cols, r = Math.floor(k / cols);
		return {k, c, r, x: L0.x + c * colW + r * 9, y: L0.y + r * rowH, cat: (c + r) % 2 === 0};
	});
	const catCell = cells.find((q) => q.r === rows - 1 && q.c === 1)!; // front row, cation
	const anCell = cells.find((q) => q.r === rows - 1 && q.c === 2)!; // front row, anion
	const pull = eramp(frame, b.pull, 70);
	const catEnd = {x: PC.x - 132, y: PC.y + 18};
	const anEnd = {x: PC.x + 134, y: PC.y + 18};
	const catPos = {x: catCell.x + (catEnd.x - catCell.x) * pull, y: catCell.y + (catEnd.y - catCell.y) * pull - Math.sin(Math.PI * pull) * 30 + idleBob(frame, 1, 1.2) * pull};
	const anPos = {x: anCell.x + (anEnd.x - anCell.x) * pull, y: anCell.y + (anEnd.y - anCell.y) * pull - Math.sin(Math.PI * pull) * 30 + idleBob(frame, 2, 1.2) * pull};

	// ── Waters: free on the plinth, then into shells ──
	const N = 6;
	const free = [
		[-190, -38], [-150, 34], [-70, 62], [-196, 18], [-110, -64], [-40, 74],
		[190, -38], [150, 34], [70, 62], [196, 18], [110, -64], [40, 74],
	];
	const spin = Math.max(0, frame - b.step2 - 60) / 240;
	const waters = Array.from({length: N * 2}, (_, k) => {
		const ionIdx = k < N ? 0 : 1;
		const kk = k % N;
		const start = {x: PC.x + free[k][0], y: PC.y + 8 + free[k][1] * 0.62};
		const ang = (kk / N) * Math.PI * 2 + spin * (ionIdx === 0 ? 1 : -1);
		const t0 = (ionIdx === 0 ? b.step2 : b.step2 + 40) + kk * 7;
		const t = ease(interpolate(frame, [t0, t0 + 50], [0, 1], clamp));
		const ion = ionIdx === 0 ? catPos : anPos;
		let target: {x: number; y: number};
		let axis: number;
		if (ionIdx === 0) {
			const R = CAT_R + O_R + 6;
			target = {x: ion.x + Math.cos(ang) * R, y: ion.y + Math.sin(ang) * R * 0.92};
			axis = ang; // H side faces away: δ− O toward the cation
		} else {
			const R = AN_R + H_R + 3 + OH;
			target = {x: ion.x + Math.cos(ang) * R, y: ion.y + Math.sin(ang) * R * 0.92};
			axis = ang + Math.PI + HALF; // one O–H points back at the anion: δ+ H toward it
		}
		const freeAxis = (k * 1.3 + frame / 90) % (Math.PI * 2);
		let d = axis - freeAxis;
		d = Math.atan2(Math.sin(d), Math.cos(d));
		return {
			x: start.x + (target.x - start.x) * t + idleBob(frame, k + 30, 1.5) * (1 - t),
			y: start.y + (target.y - start.y) * t + idleBob(frame, k + 60, 1.5) * (1 - t),
			axis: freeAxis + d * t,
		};
	});

	// ── Ledger ──
	const scenB = eramp(frame, b.cool, 40); // 0 = hydration bigger, 1 = lattice bigger
	const LAT = 96;
	const HYD = 126 + (66 - 126) * scenB;
	const latH = LAT * eramp(frame, b.latticeBar, 40);
	const hydH = HYD * eramp(frame, b.hydrationBar, 40);
	const sumIn = eramp(frame, b.sum, 40);
	const net = (LAT - HYD) * sumIn; // + up (endothermic), − down (exothermic)
	const ZY = 290;
	const BX = [520, 592, 664];
	const BWd = 44;
	const bar = (x: number, h: number, fill: string, stroke: string, op = 1) =>
		h >= 0 ? (
			<rect x={x - BWd / 2} y={ZY - h} width={BWd} height={Math.max(0, h)} rx={6} fill={fill} stroke={stroke} strokeWidth={2} opacity={op} />
		) : (
			<rect x={x - BWd / 2} y={ZY} width={BWd} height={-h} rx={6} fill={fill} stroke={stroke} strokeWidth={2} opacity={op} />
		);

	// Thermometer: rises for the warm outcome, falls for the cool one.
	const thermWarm = eramp(frame, b.warmTherm, 50) * (1 - scenB);
	const thermCool = eramp(frame, b.coolTherm, 50);
	const T0 = 0.5;
	const tLevel = T0 + 0.32 * thermWarm - 0.3 * thermCool;
	const TX = 726, TY0 = 150, TY1 = 420;

	const caps = beatCaption(frame, [
		{at: 0, text: 'Dissolving an ionic solid: two steps'},
		{at: b.step1, text: 'Step 1: pull the ions out of the lattice'},
		{at: b.step2, text: 'Step 2: water surrounds the freed ions'},
		{at: b.sum, text: 'ΔH(dissolution) = lattice + hydration'},
		{at: b.which, text: 'Which one is bigger?'},
		{at: b.warm, text: 'Hydration bigger: ΔH < 0, the solution warms'},
		{at: b.cool, text: 'Lattice bigger: ΔH > 0, the solution cools'},
	]);

	const inArrows = ramp(frame, b.step1 + 20, 16) * (1 - 0.7 * ramp(frame, b.step2, 20));
	const outArrows = ramp(frame, b.hydrationBar - 20, 16);
	const flow = (frame % 40) / 40;

	// Draw order: lattice ions + moving ions + waters by y
	type D = {kind: 'ion'; el: string; x: number; y: number; r: number; sign: string} | {kind: 'w'; k: number; y: number};
	const items: D[] = [];
	cells.forEach((c) => {
		if (c === catCell || c === anCell) return;
		items.push({kind: 'ion', el: c.cat ? cation.el : anion.el, x: c.x, y: c.y, r: c.cat ? CAT_R : AN_R, sign: c.cat ? '+' : '−'});
	});
	items.push({kind: 'ion', el: cation.el, x: catPos.x, y: catPos.y, r: CAT_R, sign: '+'});
	items.push({kind: 'ion', el: anion.el, x: anPos.x, y: anPos.y, r: AN_R, sign: '−'});
	waters.forEach((w, k) => items.push({kind: 'w', k, y: w.y}));
	items.sort((p, q) => p.y - q.y);

	const heatArrow = (x: number, y: number, dir: 1 | -1, op: number, key: string) => {
		// dir 1 = pointing down (in), −1 = pointing up (out)
		const len = 46;
		const y0 = y, y1 = y + dir * len;
		const u = flow;
		return (
			<g key={key} opacity={op}>
				<line x1={x} y1={y0} x2={x} y2={y1 - dir * 12} stroke={HEAT} strokeWidth={5} strokeLinecap="round" />
				<path d={`M ${x - 10} ${y1 - dir * 14} L ${x} ${y1} L ${x + 10} ${y1 - dir * 14} Z`} fill={HEAT} />
				<circle cx={x} cy={y0 + dir * u * (len - 16)} r={3} fill="#ffffff" opacity={0.85} />
			</g>
		);
	};

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Dissolving an ionic solid: breaking the lattice absorbs energy (endothermic), hydrating the freed ions releases energy (exothermic); ΔH of dissolution is their sum, so the solution warms if hydration is bigger and cools if lattice energy is bigger" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<AtomDefs id={ID} elements={[cation.el, anion.el, 'O', 'H']} />

			<text x={250} y={36} textAnchor="middle" fill={TOK.ink} fontSize={21} fontWeight={800} opacity={caps.opacity}>{caps.text}</text>

			{/* Energy in (step 1) */}
			<g opacity={inArrows}>
				<text x={250} y={86} textAnchor="middle" fill={HEAT} fontSize={19} fontWeight={800}>lattice energy: in</text>
				<text x={250} y={108} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={800}>endothermic</text>
				{heatArrow(200, 132, 1, 1, 'i1')}
				{heatArrow(300, 132, 1, 1, 'i2')}
			</g>
			{/* Energy out (step 2) */}
			<g opacity={outArrows}>
				{heatArrow(catEnd.x, catEnd.y - 62, -1, 1, 'o1')}
				{heatArrow(anEnd.x, anEnd.y - 66, -1, 1, 'o2')}
				<text x={catEnd.x} y={catEnd.y - 132} textAnchor="middle" fill={HEAT} fontSize={17} fontWeight={800}>hydration</text>
				<text x={catEnd.x} y={catEnd.y - 114} textAnchor="middle" fill={HEAT} fontSize={17} fontWeight={800}>energy: out</text>
				<text x={anEnd.x} y={anEnd.y - 132} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={800}>exothermic</text>
			</g>

			<g opacity={ramp(frame, 2)}>
				<DioramaPlinth id={ID} cx={PC.x} cy={PC.y} rx={PC.rx}>
					{items.map((it, i) =>
						it.kind === 'ion' ? (
							<Ball key={`i${i}`} id={ID} el={it.el} x={it.x} y={it.y} r={it.r} label={it.sign} labelSize={it.r * 1.1} shadow />
						) : (
							<Water key={`w${it.k}`} x={waters[it.k].x} y={waters[it.k].y} axis={waters[it.k].axis} opacity={ramp(frame, 8 + it.k * 2, 12)} />
						),
					)}
				</DioramaPlinth>
			</g>

			{/* δ labels */}
			<g opacity={ramp(frame, b.oxygen, 14)}>
				<text x={catEnd.x} y={468} textAnchor="middle" fill={TOK.ink} fontSize={17} fontWeight={800}>δ− O faces {cation.label === 'cation' ? 'the cation' : cation.label}</text>
			</g>
			<g opacity={ramp(frame, b.hydrogen, 14)}>
				<text x={anEnd.x} y={468} textAnchor="middle" fill={TOK.ink} fontSize={17} fontWeight={800}>δ+ H faces {anion.label === 'anion' ? 'the anion' : anion.label}</text>
			</g>

			{/* Legend */}
			<g opacity={ramp(frame, 6)}>
				<Ball id={ID} el={cation.el} x={40} y={494} r={CAT_R} label="+" labelSize={14} />
				<text x={60} y={500} fill={TOK.ink} fontSize={17} fontWeight={800}>{cation.label}</text>
				<Ball id={ID} el={anion.el} x={160} y={494} r={AN_R - 3} label="−" labelSize={16} />
				<text x={182} y={500} fill={TOK.ink} fontSize={17} fontWeight={800}>{anion.label}</text>
				<Water x={286} y={492} axis={Math.PI / 2} />
				<text x={308} y={500} fill={TOK.ink} fontSize={17} fontWeight={800}>water</text>
			</g>

			{/* Ledger */}
			<g opacity={ramp(frame, b.latticeBar - 20, 16)}>
				<text x={592} y={40} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={800} letterSpacing="0.05em">ENERGY LEDGER</text>
				<line x1={488} y1={ZY} x2={698} y2={ZY} stroke={TOK.inkMute} strokeWidth={2} />
				<text x={488} y={ZY - 150} fill={TOK.inkDim} fontSize={16} fontWeight={800}>in (+)</text>
				<text x={488} y={ZY + 172} fill={TOK.inkDim} fontSize={16} fontWeight={800}>out (−)</text>
				{bar(BX[0], latH, 'rgba(224,86,58,0.22)', HEAT)}
				<text x={BX[0]} y={ZY - latH - 10} textAnchor="middle" fill={HEAT} fontSize={16} fontWeight={800}>lattice</text>
			</g>
			<g opacity={ramp(frame, b.hydrationBar - 10, 14)}>
				{bar(BX[1], -hydH, 'rgba(224,86,58,0.08)', HEAT)}
				<text x={BX[1]} y={ZY + hydH + 22} textAnchor="middle" fill={HEAT} fontSize={16} fontWeight={800}>hydration</text>
			</g>
			<g opacity={ramp(frame, b.sum - 10, 14)}>
				{bar(BX[2], net, 'rgba(240,168,48,0.35)', TOK.amber)}
				<text x={BX[2]} y={net >= 0 ? ZY - net - 10 : ZY - net + 22} textAnchor="middle" fill={TOK.amberInk} fontSize={17} fontWeight={800}>ΔH</text>
				<text x={BX[2]} y={net >= 0 ? ZY + 22 : ZY - 10} textAnchor="middle" fill={TOK.amberInk} fontSize={17} fontWeight={800} opacity={ramp(frame, b.warm, 14)}>
					{scenB > 0.5 ? '> 0' : '< 0'}
				</text>
				<text x={592} y={70} textAnchor="middle" fill={TOK.ink} fontSize={17} fontWeight={800}>ΔH = lattice + hydration</text>
			</g>

			{/* Thermometer */}
			<g opacity={ramp(frame, b.which - 10, 16)}>
				<rect x={TX - 9} y={TY0} width={18} height={TY1 - TY0} rx={9} fill="#ffffff" stroke={TOK.inkMute} strokeWidth={2} />
				<circle cx={TX} cy={TY1 + 14} r={17} fill={HEAT} stroke={shade(HEAT, -0.25)} strokeWidth={2} />
				<rect x={TX - 4.5} y={TY1 - (TY1 - TY0) * tLevel} width={9} height={(TY1 - TY0) * tLevel + 8} rx={4.5} fill={HEAT} />
				<line x1={TX - 20} y1={TY1 - (TY1 - TY0) * T0} x2={TX - 11} y2={TY1 - (TY1 - TY0) * T0} stroke={TOK.inkMute} strokeWidth={2} />
				<text x={TX} y={TY0 - 12} textAnchor="middle" fill={TOK.ink} fontSize={18} fontWeight={800} opacity={ramp(frame, b.warmTherm, 14) * (1 - scenB)}>warms ↑</text>
				<text x={TX} y={TY0 - 12} textAnchor="middle" fill={theme.accent} fontSize={18} fontWeight={800} opacity={ramp(frame, b.coolTherm, 14)}>cools ↓</text>
			</g>
			{/* keep the net bar breathing in the hold */}
			<rect x={BX[2] - BWd / 2 - 5} y={net >= 0 ? ZY - net - 5 : ZY - 5} width={BWd + 10} height={Math.abs(net) + 10} rx={9} fill="none" stroke={TOK.amber} strokeWidth={1.5} opacity={frame > b.warm ? 0.3 + 0.5 * idlePulse(frame) : 0} />
		</svg>
	);
};
