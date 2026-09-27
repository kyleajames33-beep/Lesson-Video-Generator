// GalvanicCellDiorama — a working galvanic cell on two plinths.
//
// Two beakers (half-cells) stand on plinths, joined by an external wire with a
// bulb and by a salt bridge. Electrons (amber) run through the wire from the
// anode to the cathode; ions drift through the salt bridge (anions toward the
// anode, cations toward the cathode). At each electrode the half-reaction plays
// on a loop: a metal anode sheds ions into solution, a metal cathode collects
// ions as metal, and an inert cathode (Pt) passes electrons to ions that stay
// in solution (e.g. Fe³⁺ → Fe²⁺) while the electrode itself is unchanged.
//
// Everything is config: which side is the anode, electrode names, the ions and
// half-equations, and a list of timed caption steps. `parts: true` numbers the
// four parts (anode, cathode, wire, salt bridge) as they are introduced.

import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {Ball, Beaker, ExtraAtomDefs, colorOf, ramp, shade} from './shared';

type IonSpec = {el: string; label: string};
export type HalfCell = {
	/** Electrode label, e.g. "Zn" or "Pt". */
	electrode: string;
	/** Colour key for the electrode (EXTRA_COLORS / ELEMENT_COLORS). */
	electrodeEl: string;
	role: 'anode' | 'cathode';
	halfEq: string;
	/** Ions that swim in this beaker. */
	ions: IonSpec[];
	/** What happens at the electrode surface. */
	process: 'dissolve' | 'deposit' | 'convert';
	/** dissolve: the ion formed; deposit: the ion consumed; convert: the ion before. */
	processIon: IonSpec;
	/** convert only: the ion after. */
	convertTo?: IonSpec;
	inert?: boolean;
};
export type GalvanicCellProps = {
	delay?: number;
	left?: HalfCell;
	right?: HalfCell;
	/** Frame (after delay) the electrons start to flow. */
	flowAt?: number;
	/** Frames (after delay) at which each role label appears: [anode, cathode]. */
	rolesAt?: [number, number];
	/** Timed caption line: each entry replaces the previous at its frame. */
	steps?: {at: number; text: string; key?: boolean}[];
	/** Number the four parts at these frames: [anode, cathode, wire, salt bridge]. */
	parts?: [number, number, number, number];
	/** Frames at which the inert electrode is picked out: [highlight, tag]. */
	inertAt?: [number, number];
};

const ID = 'c11m3gal';
const W = 760;
const L = 190;
const R = 570;
const BASE = 372;
const BH = 200;
const BW = 224;
const WIRE_Y = 84;
const E_TOP = 120;
const E_BOT = 336;
const E_W = 30;
const BRIDGE_TOP = 150;
const BRIDGE_BOT = 300;
const LIQ_TOP = BASE - BH * 0.7;

const DEFAULT_LEFT: HalfCell = {
	electrode: 'Zn', electrodeEl: 'Zn', role: 'anode', halfEq: 'Zn → Zn²⁺ + 2e⁻',
	ions: [{el: 'Zn', label: 'Zn²⁺'}], process: 'dissolve', processIon: {el: 'Zn', label: 'Zn²⁺'},
};
const DEFAULT_RIGHT: HalfCell = {
	electrode: 'Cu', electrodeEl: 'Cu', role: 'cathode', halfEq: 'Cu²⁺ + 2e⁻ → Cu',
	ions: [{el: 'CuIon', label: 'Cu²⁺'}], process: 'deposit', processIon: {el: 'CuIon', label: 'Cu²⁺'},
};

export const GalvanicCellDiorama = ({
	delay = 90,
	left = DEFAULT_LEFT,
	right = DEFAULT_RIGHT,
	flowAt = 440,
	rolesAt = [440, 560],
	steps = [],
	parts,
	inertAt,
}: GalvanicCellProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();

	const sides = [
		{cfg: left, cx: L, eX: L - 62},
		{cfg: right, cx: R, eX: R + 62},
	];
	const anodeSide = sides.find((s) => s.cfg.role === 'anode')!;
	const cathodeSide = sides.find((s) => s.cfg.role === 'cathode')!;
	const flowing = frame >= flowAt;
	const flowT = Math.max(0, frame - flowAt);
	const flowIn = ramp(frame, flowAt, 20);
	const build = (i: number) => Math.max(0, spring({frame: frame - i * 8, fps, config: {damping: 16, stiffness: 140}}));

	// ── External circuit path: anode electrode top → up → across → cathode top.
	const pathPts = [
		{x: anodeSide.eX, y: E_TOP}, {x: anodeSide.eX, y: WIRE_Y}, {x: cathodeSide.eX, y: WIRE_Y}, {x: cathodeSide.eX, y: E_TOP},
	];
	const segLen = pathPts.slice(1).map((p, i) => Math.hypot(p.x - pathPts[i].x, p.y - pathPts[i].y));
	const total = segLen.reduce((a, b) => a + b, 0);
	const along = (d: number) => {
		let rem = ((d % total) + total) % total;
		for (let i = 0; i < segLen.length; i++) {
			if (rem <= segLen[i]) {
				const t = rem / segLen[i];
				return {x: pathPts[i].x + (pathPts[i + 1].x - pathPts[i].x) * t, y: pathPts[i].y + (pathPts[i + 1].y - pathPts[i].y) * t};
			}
			rem -= segLen[i];
		}
		return pathPts[pathPts.length - 1];
	};
	const nE = 8;
	const electrons = Array.from({length: nE}, (_, k) => along(flowT * 2.6 + (k * total) / nE));

	// ── Salt bridge (inverted U inside both beakers).
	const bxL = L + 78, bxR = R - 78;
	const bridgePath = `M ${bxL} ${BRIDGE_BOT} L ${bxL} ${BRIDGE_TOP + 26} Q ${bxL} ${BRIDGE_TOP} ${bxL + 26} ${BRIDGE_TOP} L ${bxR - 26} ${BRIDGE_TOP} Q ${bxR} ${BRIDGE_TOP} ${bxR} ${BRIDGE_TOP + 26} L ${bxR} ${BRIDGE_BOT}`;
	const bPts = [{x: bxL, y: BRIDGE_BOT}, {x: bxL, y: BRIDGE_TOP}, {x: bxR, y: BRIDGE_TOP}, {x: bxR, y: BRIDGE_BOT}];
	const bSeg = bPts.slice(1).map((p, i) => Math.hypot(p.x - bPts[i].x, p.y - bPts[i].y));
	const bTot = bSeg.reduce((a, b) => a + b, 0);
	const bAt = (u: number) => {
		let rem = Math.max(0, Math.min(1, u)) * bTot;
		for (let i = 0; i < bSeg.length; i++) {
			if (rem <= bSeg[i]) {
				const t = rem / bSeg[i];
				return {x: bPts[i].x + (bPts[i + 1].x - bPts[i].x) * t, y: bPts[i].y + (bPts[i + 1].y - bPts[i].y) * t};
			}
			rem -= bSeg[i];
		}
		return bPts[3];
	};
	// u = 0 is the left leg, 1 the right leg. Anions head to the anode side.
	const anodeIsLeft = anodeSide.cx === L;
	const bridgeIons = Array.from({length: 6}, (_, k) => {
		const anion = k % 2 === 0;
		const towardLeft = anion === anodeIsLeft;
		const period = 260;
		const ph = ((flowT * 1 + k * (period / 6)) % period) / period;
		const u = towardLeft ? 0.9 - ph * 0.8 : 0.1 + ph * 0.8;
		return {...bAt(u), anion, o: flowIn * Math.min(1, Math.min(ph, 1 - ph) * 8)};
	});

	// ── Half-cell surface process (looping, two particles staggered).
	const period = 110;
	const proc = (side: (typeof sides)[number], k: number) => {
		const cfg = side.cfg;
		const ph = (((flowT + k * (period / 2)) % period) + period) % period / period;
		const inward = side.cx === L ? 1 : -1; // direction from electrode into the beaker
		const surfX = side.eX + (inward * E_W) / 2 + inward * 20;
		const farX = side.eX + inward * 88;
		const y0 = 258 + k * 44;
		let x = surfX, y = y0, spec = cfg.processIon, o = flowIn;
		if (cfg.process === 'dissolve') {
			x = surfX + (farX - surfX) * ph;
			spec = ph < 0.18 ? {el: cfg.electrodeEl, label: cfg.electrode} : cfg.processIon;
			o *= Math.min(1, (1 - ph) * 5);
		} else if (cfg.process === 'deposit') {
			x = farX + (surfX - farX) * Math.min(1, ph / 0.85);
			o *= ph > 0.85 ? Math.max(0, 1 - (ph - 0.85) * 8) : Math.min(1, ph * 6);
		} else {
			// convert: in to the surface, switch, back out
			const d = ph < 0.5 ? ph / 0.5 : (1 - ph) / 0.5;
			x = farX + (surfX - farX) * d;
			spec = ph < 0.5 ? cfg.processIon : cfg.convertTo ?? cfg.processIon;
			o *= Math.min(1, Math.min(ph, 1 - ph) * 6);
		}
		return {x, y: y + idleBob(frame, k + (side.cx === L ? 0 : 7), 1.5), spec, o};
	};

	// Background ions swimming in each beaker.
	const swimmers = (side: (typeof sides)[number]) => {
		const inward = side.cx === L ? 1 : -1;
		const slots = [{x: side.cx - inward * 18, y: 350}, {x: side.cx + inward * 34, y: 350}];
		return slots.map((s, i) => ({...s, y: s.y + idleBob(frame, i + (side.cx === L ? 20 : 30), 2.5), spec: side.cfg.ions[i % side.cfg.ions.length]}));
	};

	const inertHi = inertAt ? ramp(frame, inertAt[0], 16) : 0;
	const inertTag = inertAt ? ramp(frame, inertAt[1], 16) : 0;

	// Caption: the latest step whose time has come.
	const cur = steps.filter((s) => frame >= s.at).pop();
	const capIn = cur ? ramp(frame, cur.at, 12) : 0;

	const partBadge = (n: number, x: number, y: number, label: string, at?: number) => {
		if (at === undefined) return null;
		const s = Math.max(0, spring({frame: frame - at, fps, config: {damping: 11, stiffness: 180, mass: 0.6}}));
		return (
			<g key={n} transform={`translate(${x} ${y}) scale(${s})`} opacity={Math.min(1, s * 2)}>
				<circle r={15} fill={TOK.ink} />
				<text y={6} textAnchor="middle" fill="#ffffff" fontSize={17} fontWeight={800}>{n}</text>
				<text x={22} y={6} fill={TOK.ink} fontSize={16} fontWeight={800}>{label}</text>
			</g>
		);
	};

	const els = Array.from(new Set([
		...sides.flatMap((s) => [s.cfg.electrodeEl, s.cfg.processIon.el, ...(s.cfg.convertTo ? [s.cfg.convertTo.el] : []), ...s.cfg.ions.map((i) => i.el)]),
		'e',
	]));

	return (
		<svg viewBox={`0 0 ${W} 530`} role="img" aria-label={`Galvanic cell: ${anodeSide.cfg.electrode} anode (${anodeSide.cfg.halfEq}) and ${cathodeSide.cfg.electrode} cathode (${cathodeSide.cfg.halfEq}); electrons flow through the wire from anode to cathode and ions move through the salt bridge`} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} elements={[]} />
			<ExtraAtomDefs id={ID} elements={els} />
			<defs>
				{sides.map((s, i) => (
					<linearGradient key={i} id={`${ID}-rod-${i}`} x1="0" x2="1" y1="0" y2="0">
						<stop offset="0%" stopColor={shade(colorOf(s.cfg.electrodeEl), 0.12)} />
						<stop offset="40%" stopColor={shade(colorOf(s.cfg.electrodeEl), 0.22)} />
						<stop offset="100%" stopColor={shade(colorOf(s.cfg.electrodeEl), -0.25)} />
					</linearGradient>
				))}
			</defs>

			{/* Caption */}
			<text x={W / 2} y={34} textAnchor="middle" fill={cur?.key ? TOK.amberInk : TOK.ink} fontSize={22} fontWeight={800} opacity={capIn}>
				{cur?.text ?? ''}
			</text>

			{/* Plinths + beakers */}
			{sides.map((s, i) => (
				<g key={i} opacity={Math.min(1, build(i) * 1.4)}>
					<DioramaPlinth id={ID} cx={s.cx} cy={BASE + 6} rx={140}>
						<Beaker cx={s.cx} baseY={BASE} w={BW} h={BH} level={0.7} liquid={s.cfg.ions[0]?.el === 'CuIon' ? 'rgba(80,140,220,0.3)' : 'rgba(150,200,235,0.28)'}>
							{swimmers(s).map((p, k) => (
								<Ball key={k} id={ID} el={p.spec.el} x={p.x} y={p.y} r={19} label={p.spec.label} labelSize={15} labelColor="#1f2a36" opacity={0.9} />
							))}
							{[0, 1].map((k) => {
								const p = proc(s, k);
								return <Ball key={`p${k}`} id={ID} el={p.spec.el} x={p.x} y={p.y} r={19} label={p.spec.label} labelSize={15} labelColor="#1f2a36" opacity={p.o} />;
							})}
						</Beaker>
					</DioramaPlinth>
				</g>
			))}

			{/* Salt bridge */}
			<g opacity={build(2)}>
				<path d={bridgePath} fill="none" stroke="rgba(70,90,110,0.5)" strokeWidth={30} strokeLinejoin="round" />
				<path d={bridgePath} fill="none" stroke="#eef3f6" strokeWidth={25} strokeLinejoin="round" />
				<path d={bridgePath} fill="none" stroke="#ffffff" strokeWidth={6} strokeLinejoin="round" opacity={0.7} transform="translate(-6 0)" />
				{bridgeIons.map((b, k) => (
					<g key={k} opacity={b.o}>
						<circle cx={b.x} cy={b.y} r={10} fill={b.anion ? '#6b7fd6' : '#d6865a'} stroke="#ffffff" strokeWidth={1.5} />
						<text x={b.x} y={b.y + 6} textAnchor="middle" fill="#ffffff" fontSize={16} fontWeight={800}>{b.anion ? '−' : '+'}</text>
					</g>
				))}
			</g>

			{/* Electrodes */}
			{sides.map((s, i) => {
				const inert = s.cfg.inert;
				return (
					<g key={i} opacity={build(i)}>
						<rect x={s.eX - E_W / 2} y={E_TOP} width={E_W} height={E_BOT - E_TOP} rx={4} fill={`url(#${ID}-rod-${i})`} stroke={inert && inertHi > 0 ? TOK.amber : shade(colorOf(s.cfg.electrodeEl), -0.35)} strokeWidth={inert && inertHi > 0 ? 3 + idlePulse(frame) * 2 : 1.5} />
						<text x={s.eX} y={E_TOP + 30} textAnchor="middle" fill="#1f2a36" fontSize={17} fontWeight={800}>{s.cfg.electrode}</text>
					</g>
				);
			})}

			{/* External circuit: wire + bulb */}
			<g opacity={build(3)}>
				<polyline points={pathPts.map((p) => `${p.x},${p.y}`).join(' ')} fill="none" stroke="#5a6570" strokeWidth={5} strokeLinejoin="round" />
				<circle cx={W / 2} cy={WIRE_Y} r={22 + 10 * flowIn} fill="#ffe27a" opacity={0.35 * flowIn * (0.7 + 0.3 * idlePulse(frame, 40))} />
				<circle cx={W / 2} cy={WIRE_Y} r={18} fill={flowing ? '#fff3b0' : '#f3f3f0'} stroke="#6d6d6d" strokeWidth={2.5} />
				<path d={`M ${W / 2 - 7} ${WIRE_Y + 4} q 3.5 -12 7 0 q 3.5 12 7 0`} fill="none" stroke="#8a6d1a" strokeWidth={2} />
				{flowing && electrons.map((e, k) => <Ball key={k} id={ID} el="e" x={e.x} y={e.y} r={7} />)}
				<g opacity={flowIn}>
					<text x={(anodeSide.eX + W / 2) / 2} y={WIRE_Y - 16} textAnchor="middle" fill={TOK.amberInk} fontSize={18} fontWeight={800}>
						{anodeIsLeft ? 'e⁻ →' : '← e⁻'}
					</text>
					<text x={(cathodeSide.eX + W / 2) / 2} y={WIRE_Y - 16} textAnchor="middle" fill={TOK.amberInk} fontSize={18} fontWeight={800}>
						{anodeIsLeft ? 'e⁻ →' : '← e⁻'}
					</text>
				</g>
			</g>

			{/* Role labels under each plinth */}
			{sides.map((s, i) => {
				const at = s.cfg.role === 'anode' ? rolesAt[0] : rolesAt[1];
				return (
					<g key={i} opacity={ramp(frame, at, 14)}>
						<text x={s.cx} y={470} textAnchor="middle" fill={TOK.ink} fontSize={21} fontWeight={800} letterSpacing="0.04em">
							{s.cfg.role === 'anode' ? 'ANODE · oxidation' : 'CATHODE · reduction'}
						</text>
						<text x={s.cx} y={498} textAnchor="middle" fill={TOK.inkDim} fontSize={19} fontWeight={700}>{s.cfg.halfEq}</text>
					</g>
				);
			})}

			{/* Inert electrode tag, beside the top of the rod */}
			{sides.filter((s) => s.cfg.inert).map((s, i) => {
				const outward = s.cx === L ? -1 : 1;
				return (
					<text key={i} x={s.eX + outward * 24} y={E_TOP + 26} textAnchor={outward < 0 ? 'end' : 'start'} fill={TOK.amberInk} fontSize={19} fontWeight={800} opacity={inertTag}>
						inert
					</text>
				);
			})}

			{/* Numbered parts */}
			{parts && (
				<g>
					{partBadge(1, anodeSide.eX + (anodeIsLeft ? 24 : -100), E_TOP - 4, 'Anode', parts[0])}
					{partBadge(2, cathodeSide.eX + (anodeIsLeft ? -118 : 24), E_TOP - 4, 'Cathode', parts[1])}
					{partBadge(3, W / 2 + 34, WIRE_Y + 30, 'Wire', parts[2])}
					{partBadge(4, W / 2 - 60, BRIDGE_TOP + 40, 'Salt bridge', parts[3])}
				</g>
			)}
		</svg>
	);
};
