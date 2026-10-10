// DisruptReplaceDiagram (chem12m7DisruptReplace): the "disrupt and replace"
// model of solubility, as an energy trade the learner can see.
//
// Left panel, water: a hydrogen-bonded network of water molecules. A
// non-polar hydrocarbon (hexane, built by the mol engine so every H is real)
// pushes in. The water to water hydrogen bonds around it break (coral, then
// gone), and the hydrocarbon can only offer weak dispersion forces back (a
// faint dotted halo). The ledger under the panel compares the two: a long
// "broken" bar against a short "formed" bar, so the trade is unfavourable.
//
// Right panel, hexane: the same hydrocarbon slips between solvent hexane
// molecules. Dispersion forces are broken and dispersion forces are formed,
// so the two ledger bars match: a fair trade, and it dissolves.
//
// The ledger bars are qualitative (no numbers are invented); the panels are
// a particle model, not to scale. Beats are frames after `delay`. Hold: every
// molecule jostles gently (idleBob) and the dispersion halos breathe.

import {useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {idleBob, idlePulse} from '../../diorama';
import {MolDefs, MolLayer, bboxOf, buildMol, clamp, fadeAt, popAt} from './mol';
import type {DrawAtom, DrawBond} from './mol';
import {interpolate} from 'remotion';

export type DisruptReplaceProps = {
	at?: {
		water?: number;
		enter?: number;
		breakBonds?: number;
		offer?: number;
		verdictWater?: number;
		hexane?: number;
		swap?: number;
		verdictHexane?: number;
		rule?: number;
	};
	/** Text under the diagram at `rule`. */
	ruleText?: string;
	delay?: number;
};

const ID = 'c12m7dr';
const W = 760;
const H = 530;
const CORAL = '#d9604a';
const PANEL_Y0 = 58;
const PANEL_H = 236;
const PANEL_W = 356;
const LEFT_X0 = 14;
const RIGHT_X0 = W - 14 - PANEL_W;

const ease = (frame: number, a: number, b: number) => {
	const t = interpolate(frame, [a, b], [0, 1], clamp);
	return t * t * (3 - 2 * t);
};
const hash01 = (n: number) => {
	const x = Math.sin(n * 127.1 + 311.7) * 43758.5453;
	return x - Math.floor(x);
};

// Hexane: straight-chain skeleton; the engine fills in all 14 hydrogens.
const HEXANE = buildMol({atoms: 'c1:C@0,0 c2:C@1,0 c3:C@2,0 c4:C@3,0 c5:C@4,0 c6:C@5,0', bonds: 'c1-c2 c2-c3 c3-c4 c4-c5 c5-c6'});
const HEX_BOX = bboxOf(HEXANE.atoms);

/** Place the hexane model at (cx, cy) with unit u and rotation rot (degrees). */
const placeHexane = (cx: number, cy: number, u: number, rot: number, s: number, o: number, key: string) => {
	const r = (rot * Math.PI) / 180;
	const c = Math.cos(r), sn = Math.sin(r);
	const atoms: DrawAtom[] = HEXANE.atoms.map((a) => {
		const x = (a.x - HEX_BOX.cx) * u, y = (a.y - HEX_BOX.cy) * u;
		return {id: `${key}-${a.id}`, el: a.el, x: cx + x * c - y * sn, y: cy + x * sn + y * c, s, o};
	});
	const pos = new Map(HEXANE.atoms.map((a, i) => [a.id, atoms[i]]));
	const bonds: DrawBond[] = HEXANE.bonds.map((b) => {
		const A = pos.get(b.a)!, B = pos.get(b.b)!;
		return {x1: A.x, y1: A.y, x2: B.x, y2: B.y, lines: [Math.min(1, s) * o], spread: 1};
	});
	return {atoms, bonds};
};

// Water network: a jittered lattice inside the left panel. Each molecule's
// H atoms point at its nearest neighbours, so the dashed hydrogen bonds run
// H···O, the way the structure really works.
type Water = {x: number; y: number; theta: number};
const WATERS: Water[] = (() => {
	const out: Water[] = [];
	const cols = 6, rows = 4;
	for (let r = 0; r < rows; r++) {
		for (let c = 0; c < cols; c++) {
			const k = r * cols + c;
			out.push({
				x: LEFT_X0 + 36 + c * 57 + (r % 2) * 22 + (hash01(k) - 0.5) * 12,
				y: PANEL_Y0 + 38 + r * 54 + (hash01(k + 50) - 0.5) * 12,
				theta: 0,
			});
		}
	}
	for (const w of out) {
		let best = Infinity, ang = 0;
		for (const o of out) {
			if (o === w) continue;
			const d = Math.hypot(o.x - w.x, o.y - w.y);
			if (d < best) {
				best = d;
				ang = Math.atan2(o.y - w.y, o.x - w.x);
			}
		}
		w.theta = ang;
	}
	return out;
})();
const HALF_HOH = (104.5 / 2) * (Math.PI / 180);
const OH = 15;
const hydrogensOf = (x: number, y: number, theta: number) => [
	{x: x + Math.cos(theta + HALF_HOH) * OH, y: y + Math.sin(theta + HALF_HOH) * OH},
	{x: x + Math.cos(theta - HALF_HOH) * OH, y: y + Math.sin(theta - HALF_HOH) * OH},
];
// Hydrogen bonds: from each H to the nearest O of another molecule, if close.
const HBONDS: {from: number; h: number; to: number}[] = (() => {
	const out: {from: number; h: number; to: number}[] = [];
	WATERS.forEach((w, i) => {
		hydrogensOf(w.x, w.y, w.theta).forEach((hp, hk) => {
			let best = Infinity, bj = -1;
			WATERS.forEach((o, j) => {
				if (j === i) return;
				const d = Math.hypot(o.x - hp.x, o.y - hp.y);
				if (d < best) {
					best = d;
					bj = j;
				}
			});
			if (bj >= 0 && best < 58 && !out.some((b) => b.from === bj && b.to === i)) out.push({from: i, h: hk, to: bj});
		});
	});
	return out;
})();

// Where the hydrocarbon settles in the water panel.
const HOLE = {x: LEFT_X0 + PANEL_W / 2 + 6, y: PANEL_Y0 + PANEL_H / 2 + 6, rx: 92, ry: 42};
/** Normalised distance from the hole centre (1 = on the hole's edge). */
const holeD = (x: number, y: number) => Math.hypot((x - HOLE.x) / HOLE.rx, (y - HOLE.y) / HOLE.ry);
/** Water molecules end at least this far out, so none overlaps the hydrocarbon. */
const CLEAR = 1.22;
const inHole = (x: number, y: number) => holeD(x, y) < CLEAR;

// Solvent hexane molecules in the right panel (centre, rotation).
const SOLVENT = [
	{x: RIGHT_X0 + 92, y: PANEL_Y0 + 50, rot: -8},
	{x: RIGHT_X0 + 268, y: PANEL_Y0 + 54, rot: 10},
	{x: RIGHT_X0 + 82, y: PANEL_Y0 + 188, rot: 12},
	{x: RIGHT_X0 + 272, y: PANEL_Y0 + 192, rot: -10},
];
const SOLUTE_R = {x: RIGHT_X0 + PANEL_W / 2, y: PANEL_Y0 + PANEL_H / 2 + 2};

export const DisruptReplaceDiagram = ({at = {}, ruleText = 'Forces broken must be replaced by forces about as strong', delay = 62}: DisruptReplaceProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const t = {
		water: at.water ?? 0,
		enter: at.enter ?? 240,
		breakBonds: at.breakBonds ?? 300,
		offer: at.offer ?? 410,
		verdictWater: at.verdictWater ?? 580,
		hexane: at.hexane ?? 690,
		swap: at.swap ?? 800,
		verdictHexane: at.verdictHexane ?? 860,
		rule: at.rule ?? 950,
	};

	// ---- Water panel ---------------------------------------------------
	const enter = ease(frame, t.enter, t.enter + 50);
	const brk = ease(frame, t.breakBonds, t.breakBonds + 36);
	const waterShown = fadeAt(frame, t.water, 14);
	// Molecules inside the hole are pushed outward as the hydrocarbon arrives.
	const pushed = WATERS.map((w, k) => {
		const d = holeD(w.x, w.y) || 0.01;
		// Inside the hole: slide out along the same direction to the CLEAR contour.
		const scale = d < CLEAR ? 1 + (CLEAR / d - 1) * enter : 1;
		const bob = idleBob(frame, k, 1.4) * fadeAt(frame, t.water + 30, 30);
		return {x: HOLE.x + (w.x - HOLE.x) * scale, y: HOLE.y + (w.y - HOLE.y) * scale + bob, theta: w.theta};
	});
	// A hydrogen bond breaks if either partner had to move, or it ran through the hole.
	const bondBroken = (b: {from: number; to: number}) => {
		const A = WATERS[b.from], B = WATERS[b.to];
		return inHole(A.x, A.y) || inHole(B.x, B.y) || inHole((A.x + B.x) / 2, (A.y + B.y) / 2);
	};
	const hexInWaterX = interpolate(enter, [0, 1], [HOLE.x, HOLE.x]);
	const hexInWaterY = interpolate(enter, [0, 1], [PANEL_Y0 - 70, HOLE.y]);
	const hexW = placeHexane(hexInWaterX, hexInWaterY + idleBob(frame, 40, 1.4) * fadeAt(frame, t.enter + 60, 30), 22, 0, popAt(frame, fps, t.enter - 6), 1, 'hw');
	const offer = fadeAt(frame, t.offer, 18);

	// ---- Hexane panel --------------------------------------------------
	const hexShown = fadeAt(frame, t.hexane, 16);
	const swap = ease(frame, t.swap, t.swap + 50);
	const solvent = SOLVENT.map((m, k) => {
		const bob = idleBob(frame, k + 20, 1.4) * fadeAt(frame, t.hexane + 30, 30);
		// They part slightly to make room: dispersion broken, then re-formed.
		const dy = (m.y < SOLUTE_R.y ? -1 : 1) * 10 * swap;
		return placeHexane(m.x, m.y + dy + bob, 17, m.rot, popAt(frame, fps, t.hexane + k * 5), 1, `s${k}`);
	});
	const soluteY = interpolate(swap, [0, 1], [PANEL_Y0 - 60, SOLUTE_R.y]);
	const solute = placeHexane(SOLUTE_R.x, soluteY + idleBob(frame, 30, 1.4) * fadeAt(frame, t.swap + 60, 30), 17, 0, popAt(frame, fps, t.swap - 6), 1, 'sr');
	const swapForm = fadeAt(frame, t.swap + 40, 18);

	// ---- Ledgers -------------------------------------------------------
	const LEDGER_Y = PANEL_Y0 + PANEL_H + 34;
	const BAR_W = 206;
	const Ledger = ({x0, broken, formed, tBroken, tFormed, brokenText, formedText, brokenColor}: {
		x0: number; broken: number; formed: number; tBroken: number; tFormed: number; brokenText: string; formedText: string; brokenColor: string;
	}) => {
		const bx = x0 + 132;
		const gb = ease(frame, tBroken, tBroken + 30);
		const gf = ease(frame, tFormed, tFormed + 30);
		return (
			<g>
				<g opacity={fadeAt(frame, tBroken, 12)}>
					<text x={x0 + 4} y={LEDGER_Y + 6} fill={TOK.inkDim} fontSize={15} fontWeight={800}>forces broken</text>
					<rect x={bx} y={LEDGER_Y - 12} width={BAR_W} height={22} rx={6} fill="#ffffff" stroke={TOK.rule} strokeWidth={1.5} />
					<rect x={bx} y={LEDGER_Y - 12} width={BAR_W * broken * gb} height={22} rx={6} fill={brokenColor} opacity={0.88} />
					<text x={bx + 8} y={LEDGER_Y + 4} fill="#ffffff" fontSize={14} fontWeight={800} opacity={fadeAt(frame, tBroken + 24, 10)}>{brokenText}</text>
				</g>
				<g opacity={fadeAt(frame, tFormed, 12)}>
					<text x={x0 + 4} y={LEDGER_Y + 42} fill={TOK.inkDim} fontSize={15} fontWeight={800}>forces formed</text>
					<rect x={bx} y={LEDGER_Y + 24} width={BAR_W} height={22} rx={6} fill="#ffffff" stroke={TOK.rule} strokeWidth={1.5} />
					<rect x={bx} y={LEDGER_Y + 24} width={BAR_W * formed * gf} height={22} rx={6} fill={theme.accent} opacity={0.88} />
					<text x={bx + BAR_W * formed * gf + 8} y={LEDGER_Y + 40} fill={theme.accent} fontSize={14} fontWeight={800} opacity={fadeAt(frame, tFormed + 24, 10)}>{formedText}</text>
				</g>
			</g>
		);
	};

	const Verdict = ({cx, y, text, color, tAt}: {cx: number; y: number; text: string; color: string; tAt: number}) => {
		const w = text.length * 8.6 + 28;
		const p = popAt(frame, fps, tAt);
		return (
			<g opacity={Math.min(1, p)} transform={`translate(${cx},${y}) scale(${0.85 + 0.15 * Math.min(1, p)})`}>
				<rect x={-w / 2} y={-16} width={w} height={32} rx={16} fill="#ffffff" stroke={color} strokeWidth={2.5} />
				<text x={0} y={6} textAnchor="middle" fill={color} fontSize={16} fontWeight={800}>{text}</text>
			</g>
		);
	};

	const panelFrame = (x0: number, title: string, shown: number) => (
		<g opacity={shown}>
			<rect x={x0} y={PANEL_Y0} width={PANEL_W} height={PANEL_H} rx={18} fill="#ffffff" stroke={TOK.rule} strokeWidth={1.5} />
			<text x={x0 + PANEL_W / 2} y={PANEL_Y0 - 14} textAnchor="middle" fill={theme.accent} fontSize={19} fontWeight={800} letterSpacing="0.02em">{title}</text>
		</g>
	);

	const breathe = 0.55 + 0.25 * idlePulse(frame, 60);

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Disrupt and replace: a hydrocarbon breaks water's hydrogen bonds but offers only weak dispersion forces back, so it stays insoluble; in hexane, dispersion forces are swapped for dispersion forces, so it dissolves" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<MolDefs id={ID} />
			<defs>
				<clipPath id={`${ID}-clipL`}>
					<rect x={LEFT_X0} y={PANEL_Y0} width={PANEL_W} height={PANEL_H} rx={18} />
				</clipPath>
				<clipPath id={`${ID}-clipR`}>
					<rect x={RIGHT_X0} y={PANEL_Y0} width={PANEL_W} height={PANEL_H} rx={18} />
				</clipPath>
			</defs>

			{/* ---------- water panel ---------- */}
			{panelFrame(LEFT_X0, 'hydrocarbon + water', waterShown)}
			<g clipPath={`url(#${ID}-clipL)`} opacity={waterShown}>
				{/* hydrogen bonds H···O */}
				{HBONDS.map((b, k) => {
					const A = pushed[b.from], B = pushed[b.to];
					const hp = hydrogensOf(A.x, A.y, A.theta)[b.h];
					const broken = bondBroken(b);
					const color = broken ? (brk > 0 ? CORAL : '#7f9bb5') : '#7f9bb5';
					const o = broken ? (brk < 0.5 ? 1 : 1 - (brk - 0.5) * 2) : 1;
					return o > 0.01 ? (
						<line key={k} x1={hp.x} y1={hp.y} x2={B.x} y2={B.y} stroke={color} strokeWidth={broken && brk > 0 ? 3 : 2.2} strokeDasharray="3 4" strokeLinecap="round" opacity={o * fadeAt(frame, t.water + 16, 16)} />
					) : null;
				})}
				{/* broken-bond marks */}
				{HBONDS.filter(bondBroken).map((b, k) => {
					const A = WATERS[b.from], B = WATERS[b.to];
					const mx = (A.x + B.x) / 2, my = (A.y + B.y) / 2;
					const o = fadeAt(frame, t.breakBonds, 10) * (1 - fadeAt(frame, t.breakBonds + 70, 30));
					const dx = mx - HOLE.x, dy = my - HOLE.y, d = Math.hypot(dx, dy) || 1;
					const px = mx + (dx / d) * 30 * brk, py = my + (dy / d) * 30 * brk;
					return (
						<g key={`x${k}`} opacity={o}>
							<line x1={px - 6} y1={py - 6} x2={px + 6} y2={py + 6} stroke={CORAL} strokeWidth={3} strokeLinecap="round" />
							<line x1={px - 6} y1={py + 6} x2={px + 6} y2={py - 6} stroke={CORAL} strokeWidth={3} strokeLinecap="round" />
						</g>
					);
				})}
				{/* water molecules */}
				{pushed.map((w, k) => {
					const [h1, h2] = hydrogensOf(w.x, w.y, w.theta);
					return (
						<g key={k}>
							<line x1={w.x} y1={w.y} x2={h1.x} y2={h1.y} stroke="#6f6c66" strokeWidth={3.2} strokeLinecap="round" />
							<line x1={w.x} y1={w.y} x2={h2.x} y2={h2.y} stroke="#6f6c66" strokeWidth={3.2} strokeLinecap="round" />
							<circle cx={h1.x} cy={h1.y} r={5.6} fill={`url(#${ID}-el-H)`} stroke="rgba(0,0,0,0.25)" strokeWidth={0.8} />
							<circle cx={h2.x} cy={h2.y} r={5.6} fill={`url(#${ID}-el-H)`} stroke="rgba(0,0,0,0.25)" strokeWidth={0.8} />
							<circle cx={w.x} cy={w.y} r={9.5} fill={`url(#${ID}-el-O)`} stroke="rgba(0,0,0,0.25)" strokeWidth={0.8} />
						</g>
					);
				})}
				{/* weak dispersion offered back */}
				<ellipse cx={HOLE.x} cy={hexInWaterY} rx={HOLE.rx - 6} ry={HOLE.ry - 4} fill="none" stroke={theme.accent} strokeWidth={2} strokeDasharray="2 6" strokeLinecap="round" opacity={offer * breathe} />
				<MolLayer id={ID} atoms={hexW.atoms} bonds={hexW.bonds} u={22} />
			</g>
			<g opacity={fadeAt(frame, t.water + 20, 14) * (1 - fadeAt(frame, t.enter, 12))}>
				<text x={LEFT_X0 + PANEL_W / 2} y={PANEL_Y0 + PANEL_H + 18} textAnchor="middle" fill="#5b7a96" fontSize={15} fontWeight={800}>dashes: hydrogen bonds between water molecules</text>
			</g>
			<g opacity={fadeAt(frame, t.breakBonds + 10, 14) * (1 - fadeAt(frame, t.offer, 12))}>
				<text x={LEFT_X0 + PANEL_W / 2} y={PANEL_Y0 + PANEL_H + 18} textAnchor="middle" fill={CORAL} fontSize={15} fontWeight={800}>strong hydrogen bonds broken</text>
			</g>
			<g opacity={fadeAt(frame, t.offer + 6, 14)}>
				<text x={LEFT_X0 + PANEL_W / 2} y={PANEL_Y0 + PANEL_H + 18} textAnchor="middle" fill={theme.accent} fontSize={15} fontWeight={800}>only weak dispersion forces offered back</text>
			</g>

			<Ledger x0={LEFT_X0} broken={1} formed={0.3} tBroken={t.breakBonds + 20} tFormed={t.offer + 20} brokenText="H-bonds (strong)" formedText="dispersion" brokenColor={CORAL} />
			<Verdict cx={LEFT_X0 + PANEL_W / 2} y={LEDGER_Y + 88} text="unfavourable trade: insoluble" color={CORAL} tAt={t.verdictWater} />

			{/* ---------- hexane panel ---------- */}
			{panelFrame(RIGHT_X0, 'hydrocarbon + hexane', hexShown)}
			<g clipPath={`url(#${ID}-clipR)`} opacity={hexShown}>
				{/* dispersion contacts, re-formed around the solute */}
				{SOLVENT.map((m, k) => (
					<line
						key={`d${k}`}
						x1={m.x + (SOLUTE_R.x - m.x) * 0.36}
						y1={m.y + (SOLUTE_R.y - m.y) * 0.36}
						x2={m.x + (SOLUTE_R.x - m.x) * 0.64}
						y2={m.y + (SOLUTE_R.y - m.y) * 0.64}
						stroke={theme.accent}
						strokeWidth={2.4}
						strokeDasharray="2 6"
						strokeLinecap="round"
						opacity={swapForm * breathe}
					/>
				))}
				{solvent.map((m, k) => (
					<MolLayer key={k} id={ID} atoms={m.atoms} bonds={m.bonds} u={17} />
				))}
				<ellipse cx={SOLUTE_R.x} cy={soluteY} rx={66} ry={30} fill={`rgba(${theme.cardTint},0.10)`} stroke={theme.accent} strokeWidth={2} opacity={fadeAt(frame, t.swap, 12)} />
				<MolLayer id={ID} atoms={solute.atoms} bonds={solute.bonds} u={17} />
			</g>
			<g opacity={fadeAt(frame, t.swap + 30, 14)}>
				<text x={RIGHT_X0 + PANEL_W / 2} y={PANEL_Y0 + PANEL_H + 18} textAnchor="middle" fill={theme.accent} fontSize={15} fontWeight={800}>dispersion forces swapped for dispersion forces</text>
			</g>

			<Ledger x0={RIGHT_X0} broken={0.42} formed={0.42} tBroken={t.swap + 20} tFormed={t.swap + 40} brokenText="dispersion" formedText="dispersion" brokenColor="#7f8a93" />
			<Verdict cx={RIGHT_X0 + PANEL_W / 2} y={LEDGER_Y + 88} text="fair trade: dissolves" color={theme.accent} tAt={t.verdictHexane} />

			<text x={W / 2} y={H - 10} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={700} opacity={fadeAt(frame, t.water + 30, 14) * (1 - fadeAt(frame, t.rule, 12))}>particle model, not to scale; bar lengths are qualitative</text>
			<text x={W / 2} y={H - 10} textAnchor="middle" fill={TOK.ink} fontSize={18} fontWeight={800} opacity={fadeAt(frame, t.rule, 16)}>{ruleText}</text>
		</svg>
	);
};
