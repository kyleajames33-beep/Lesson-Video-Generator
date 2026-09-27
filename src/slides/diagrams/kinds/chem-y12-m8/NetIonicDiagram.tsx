// NetIonicDiagram — stripping spectators to reach the net ionic equation
// (Chem Y12 M8 L3, concept-net-ionic).
//
// Top: the equation, as term chips. Silver nitrate + sodium chloride is written
// out, then split into the full ionic equation over two rows. Na⁺ and NO₃⁻
// light up on both sides, get crossed out as spectators and fade, and the
// surviving chips slide together into the net ionic equation
// Ag⁺(aq) + Cl⁻(aq) → AgCl(s) inside an amber frame. The sulfate test's net
// ionic equation Ba²⁺(aq) + SO₄²⁻(aq) → BaSO₄(s) joins it on the second row.
// Below: a beaker on a stone plinth where the same thing happens to the ions:
// Ag⁺ and Cl⁻ lock into white AgCl that sinks; Na⁺ and NO₃⁻ keep swimming.
// Each chip carries a dot in its ion's ball colour, so the equation is also the
// legend for the beaker.
//
// Beats (frames after `delay`), placed at the matching voiceover words:
//   0 formula equation · 1 full ionic · 2 spectators light up · 3 cross out ·
//   4 net ionic + lock/sink · 5 sulfate line · 6 closing rule

import type {ReactElement} from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {Ball, Beaker, GlossDefs, clamp, ease, ramp} from './shared';
import {Chip, chipW, swim} from './lab-parts';

export type NetIonicProps = {
	delay?: number;
	/** Frames after delay: [formula, full ionic, spectators lit, cross out, net ionic, sulfate, rule]. */
	beats?: number[];
};

const ID = 'c12m8netionic';
const W = 760;
const CX = W / 2;
const ROW1 = 54;
const ROW2 = 112;
const SZ = 22;
const OPW = 30; // width of a "+" / "→" slot

const COL = {
	Ag: '#c9ccd2',
	NO3: '#3f6fd8',
	Na: '#8e5bd6',
	Cl: '#4fbf4a',
	Ba: '#3f9fae',
	SO4: '#f0c93a',
	solid: '#f6f6f2',
};

type Term = {text: string; dot?: keyof typeof COL} | {op: string};
const isOp = (t: Term): t is {op: string} => 'op' in t;

/** Centre x of every item in a row of chips and operators, centred on `cx`. */
const layout = (terms: Term[], cx = CX) => {
	const widths = terms.map((t) => (isOp(t) ? OPW : chipW(t.text, SZ, Boolean(t.dot))));
	const gap = 6;
	const total = widths.reduce((a, b) => a + b, 0) + gap * (terms.length - 1);
	let x = cx - total / 2;
	return widths.map((w) => {
		const c = x + w / 2;
		x += w + gap;
		return c;
	});
};

// Formula-level line, then the full ionic equation on two rows.
const FORMULA: Term[] = [{text: 'AgNO₃(aq)'}, {op: '+'}, {text: 'NaCl(aq)'}, {op: '→'}, {text: 'AgCl(s)'}, {op: '+'}, {text: 'NaNO₃(aq)'}];
const L1: Term[] = [{text: 'Ag⁺(aq)', dot: 'Ag'}, {op: '+'}, {text: 'NO₃⁻(aq)', dot: 'NO3'}, {op: '+'}, {text: 'Na⁺(aq)', dot: 'Na'}, {op: '+'}, {text: 'Cl⁻(aq)', dot: 'Cl'}];
const L2: Term[] = [{op: '→'}, {text: 'AgCl(s)', dot: 'solid'}, {op: '+'}, {text: 'Na⁺(aq)', dot: 'Na'}, {op: '+'}, {text: 'NO₃⁻(aq)', dot: 'NO3'}];
const NET: Term[] = [{text: 'Ag⁺(aq)', dot: 'Ag'}, {op: '+'}, {text: 'Cl⁻(aq)', dot: 'Cl'}, {op: '→'}, {text: 'AgCl(s)', dot: 'solid'}];
const SULF: Term[] = [{text: 'Ba²⁺(aq)', dot: 'Ba'}, {op: '+'}, {text: 'SO₄²⁻(aq)', dot: 'SO4'}, {op: '→'}, {text: 'BaSO₄(s)', dot: 'solid'}];

// Beaker geometry
const BASE = 418;
const BW = 300;
const BH = 196;
const PER = 3; // ions of each kind

export const NetIonicDiagram = ({delay = 62, beats = [190, 280, 370, 470, 520, 670, 790]}: NetIonicProps) => {
	const frame = useCurrentFrame() - delay;
	const [tForm, tIonic, tLit, tCross, tNet, tSulf, tRule] = beats;

	const formIn = ramp(frame, tForm, 14) * (1 - ramp(frame, tIonic, 14));
	const ionicIn = ramp(frame, tIonic, 16);
	const lit = ramp(frame, tLit, 14);
	const cross = ease(interpolate(frame, [tCross, tCross + 26], [0, 1], clamp));
	const collapse = ease(interpolate(frame, [tNet + 10, tNet + 46], [0, 1], clamp));
	const specFade = 1 - ramp(frame, tNet, 14);
	const netFrame = ramp(frame, tNet + 40, 16);
	const sulfIn = ramp(frame, tSulf, 16);
	const pulse = idlePulse(frame);

	const xF = layout(FORMULA);
	const x1 = layout(L1);
	const x2 = layout(L2);
	const xN = layout(NET);
	const xS = layout(SULF);

	const gloss = (k: keyof typeof COL) => `${ID}-g-${k}`;

	// ── Equation rows ─────────────────────────────────────────────
	const chips: ReactElement[] = [];
	// Formula line
	FORMULA.forEach((t, i) => {
		if (isOp(t)) chips.push(<text key={`f${i}`} x={xF[i]} y={ROW1 + 8} textAnchor="middle" fill={TOK.inkDim} fontSize={24} fontWeight={800} opacity={formIn}>{t.op}</text>);
		else chips.push(<Chip key={`f${i}`} x={xF[i]} y={ROW1} text={t.text} size={SZ} opacity={formIn} />);
	});
	// Full ionic rows (row 1 = reactants, row 2 = products)
	const spectator = (t: Term) => !isOp(t) && (t.dot === 'Na' || t.dot === 'NO3');
	const survivorTarget = (row: 1 | 2, i: number) => {
		// Where a surviving chip ends up in the NET row.
		if (row === 1 && i === 0) return xN[0];
		if (row === 1 && i === 6) return xN[2];
		if (row === 2 && i === 1) return xN[4];
		return 0;
	};
	const drawRow = (terms: Term[], xs: number[], row: 1 | 2) => {
		const y0 = row === 1 ? ROW1 : ROW2;
		terms.forEach((t, i) => {
			const key = `r${row}-${i}`;
			if (isOp(t)) {
				chips.push(<text key={key} x={xs[i]} y={y0 + 8} textAnchor="middle" fill={TOK.inkDim} fontSize={24} fontWeight={800} opacity={ionicIn * specFade}>{t.op}</text>);
				return;
			}
			if (spectator(t)) {
				chips.push(
					<Chip key={key} x={xs[i]} y={y0} text={t.text} size={SZ} dot={COL[t.dot!]} glossId={gloss(t.dot!)} opacity={ionicIn * specFade}
						fill={lit > 0 ? `rgba(142,91,214,${0.1 * lit})` : '#ffffff'} border={lit > 0.5 ? TOK.inkDim : 'rgba(0,0,0,0.14)'} borderW={1.5 + lit} strike={cross} />,
				);
				return;
			}
			const tx = survivorTarget(row, i);
			const x = xs[i] + (tx - xs[i]) * collapse;
			const y = y0 + (ROW1 - y0) * collapse;
			chips.push(<Chip key={key} x={x} y={y} text={t.text} size={SZ} dot={COL[t.dot!]} glossId={gloss(t.dot!)} opacity={ionicIn} />);
		});
	};
	drawRow(L1, x1, 1);
	drawRow(L2, x2, 2);
	// Net-row operators fade in once the chips have slid together
	NET.forEach((t, i) => {
		if (isOp(t)) chips.push(<text key={`n${i}`} x={xN[i]} y={ROW1 + 8} textAnchor="middle" fill={TOK.ink} fontSize={24} fontWeight={800} opacity={ramp(frame, tNet + 36, 12)}>{t.op}</text>);
	});
	// Sulfate line
	SULF.forEach((t, i) => {
		if (isOp(t)) chips.push(<text key={`s${i}`} x={xS[i]} y={ROW2 + 8} textAnchor="middle" fill={TOK.ink} fontSize={24} fontWeight={800} opacity={sulfIn}>{t.op}</text>);
		else chips.push(<Chip key={`s${i}`} x={xS[i]} y={ROW2 - (1 - sulfIn) * 10} text={t.text} size={SZ} dot={COL[t.dot!]} glossId={gloss(t.dot!)} opacity={sulfIn} />);
	});

	// Amber frame: holds the net ionic equation(s); grows to take the sulfate row.
	const fw = Math.max(xN[4] - xN[0], xS[4] - xS[0]) + 300;
	const fTop = ROW1 - 34;
	const fBot = ROW1 + 30 + (ROW2 - ROW1) * ease(sulfIn);

	// ── Caption under the equations ──────────────────────────────
	const steps: [number, string][] = [
		[tForm, 'Silver nitrate + sodium chloride'],
		[tIonic, 'Write every dissolved compound as its ions'],
		[tLit, 'Na⁺ and NO₃⁻ sit unchanged on both sides'],
		[tCross, 'They are spectators: cross them out'],
		[tNet, 'What is left is the net ionic equation'],
		[tSulf, 'Same logic for the sulfate test'],
		[tRule, 'Only the species that change survive the cut'],
	];
	let cap = -1;
	steps.forEach(([t], i) => {
		if (frame >= t) cap = i;
	});
	const capIn = cap >= 0 ? ramp(frame, steps[cap][0], 12) : 0;

	// ── Beaker ions ─────────────────────────────────────────────
	const bx0 = CX - BW / 2 + 28, bx1 = CX + BW / 2 - 28;
	const byTop = BASE - BH * 0.82 + 26, byBot = BASE - 30;
	const lock = ease(interpolate(frame, [tNet + 6, tNet + 46], [0, 1], clamp));
	const sink = ease(interpolate(frame, [tNet + 46, tNet + 110], [0, 1], clamp));
	const floorY = BASE - 26;
	const pile = [{x: CX - 58, y: floorY}, {x: CX + 4, y: floorY}, {x: CX + 66, y: floorY}];
	const kinds: {k: keyof typeof COL; sign: string; ink: string}[] = [
		{k: 'Ag', sign: '+', ink: '#2c3138'},
		{k: 'NO3', sign: '−', ink: '#ffffff'},
		{k: 'Na', sign: '+', ink: '#ffffff'},
		{k: 'Cl', sign: '−', ink: '#ffffff'},
	];
	type Drawn = {key: string; k: keyof typeof COL; x: number; y: number; sign: string; ink: string; spect: boolean};
	const drawn: Drawn[] = [];
	kinds.forEach((kind, ki) => {
		for (let j = 0; j < PER; j++) {
			const seed = ki * 10 + j + 3;
			const live = swim(seed, frame + 400, bx0, bx1, byTop, byBot - 14);
			let p = live;
			const pairs = kind.k === 'Ag' || kind.k === 'Cl';
			if (pairs && lock > 0) {
				const a = swim(0 * 10 + j + 3, tNet + 6 + 400, bx0, bx1, byTop, byBot - 14);
				const b = swim(3 * 10 + j + 3, tNet + 6 + 400, bx0, bx1, byTop, byBot - 14);
				const side = kind.k === 'Ag' ? -14 : 14;
				const meet = {x: (a.x + b.x) / 2 + side, y: (a.y + b.y) / 2};
				const dest = {x: pile[j].x + side, y: pile[j].y};
				p = lock < 1
					? {x: live.x + (meet.x - live.x) * lock, y: live.y + (meet.y - live.y) * lock}
					: {x: meet.x + (dest.x - meet.x) * sink, y: meet.y + (dest.y - meet.y) * sink};
				if (sink >= 1) p = {x: p.x + idleBob(frame, j, 0.5), y: p.y};
			}
			drawn.push({key: `${ki}-${j}`, k: kind.k, x: p.x, y: p.y, sign: kind.sign, ink: kind.ink, spect: !pairs});
		}
	});
	const solidIn = sink;
	const spectTag = ramp(frame, tCross, 16);

	return (
		<svg viewBox={`0 0 ${W} 530`} role="img" aria-label="Full ionic equation for silver nitrate plus sodium chloride; Na⁺ and NO₃⁻ are spectators and are crossed out, leaving the net ionic equation Ag⁺(aq) + Cl⁻(aq) → AgCl(s); the sulfate test is Ba²⁺(aq) + SO₄²⁻(aq) → BaSO₄(s)" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={COL} />

			{/* amber frame for the net ionic equations */}
			<g opacity={netFrame}>
				<rect x={CX - fw / 2} y={fTop} width={fw} height={fBot - fTop} rx={16} fill="rgba(240,168,48,0.07)" stroke={TOK.amber} strokeWidth={2.5 + pulse * 1.5} />
				<rect x={CX - 102} y={fTop - 13} width={204} height={26} rx={13} fill="#ffffff" stroke={TOK.amber} strokeWidth={2} />
				<text x={CX} y={fTop + 6} textAnchor="middle" fill={TOK.amberInk} fontSize={16} fontWeight={800} letterSpacing="0.08em">NET IONIC EQUATION</text>
			</g>
			{/* row tags inside the frame */}
			<g opacity={netFrame}>
				<text x={CX - fw / 2 + 16} y={ROW1 + 6} fill={TOK.inkDim} fontSize={18} fontWeight={800}>Cl⁻</text>
			</g>
			<g opacity={sulfIn}>
				<text x={CX - fw / 2 + 16} y={ROW2 + 6} fill={TOK.inkDim} fontSize={18} fontWeight={800}>SO₄²⁻</text>
			</g>

			{chips}

			{/* step caption */}
			<text x={CX} y={176} textAnchor="middle" fill={TOK.inkDim} fontSize={20} fontWeight={700} opacity={capIn}>
				{cap >= 0 ? steps[cap][1] : ''}
			</text>

			<DioramaPlinth id={ID} cx={CX} cy={BASE} rx={186}>
				<Beaker cx={CX} baseY={BASE} w={BW} h={BH} level={0.82}>
					<ellipse cx={CX + 4} cy={floorY + 16} rx={112 * solidIn} ry={14 * solidIn} fill={COL.solid} stroke="#c9c9c2" strokeWidth={1} opacity={0.95} />
					{drawn
						.slice()
						.sort((a, b) => a.y - b.y)
						.map((d) => (
							<Ball key={d.key} id={ID} name={d.k} color={COL[d.k]} x={d.x} y={d.y} r={16} label={d.sign} labelSize={21} labelColor={d.ink} opacity={d.spect ? 1 - 0.25 * spectTag : 1} />
						))}
				</Beaker>
			</DioramaPlinth>

			{/* spectator tag (left) */}
			<g opacity={spectTag}>
				<text x={112} y={290} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={800} letterSpacing="0.06em">SPECTATORS</text>
				<text x={112} y={316} textAnchor="middle" fill={TOK.ink} fontSize={19} fontWeight={800}>Na⁺, NO₃⁻</text>
				<text x={112} y={340} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={600}>keep swimming</text>
			</g>
			{/* precipitate tag (right) */}
			<g opacity={solidIn}>
				<line x1={CX + 96} y1={floorY + 10} x2={CX + 196} y2={floorY - 40} stroke={TOK.inkDim} strokeWidth={2} />
				<text x={652} y={floorY - 70} textAnchor="middle" fill={TOK.ink} fontSize={20} fontWeight={800}>AgCl(s)</text>
				<text x={652} y={floorY - 47} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={600}>white solid</text>
			</g>
		</svg>
	);
};
