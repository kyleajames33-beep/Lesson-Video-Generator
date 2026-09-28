// SoapDiagram — soap molecules, micelles, grease and hard water (L17).
//
// A soap molecule is drawn as a bead-chain tail (carbon beads) ending in an
// ionic head: –COO⁻ (grey C + two red O) with its Na⁺, or, for a detergent,
// –SO₃⁻ (yellow S + three red O). Three modes:
//
//  structure  One sodium stearate molecule, full size: 17 tail carbons
//             (C₁₇H₃₅–, H atoms omitted) + the COO⁻ Na⁺ head. The tail and head
//             are bracketed and named, "amphipathic" lands, then many
//             molecules gather in water into a micelle (tails in, heads out).
//  clean      Grease on a plate. Soap tails embed in it, heads face the water;
//             agitation lifts the grease off as a droplet wrapped in soap (a
//             micelle), "emulsified, not dissolved"; a second droplet arrives
//             and the like-charged heads keep them apart; the water rinses
//             them away.
//  hardwater  Soap vs detergent in hard water. Ca²⁺/Mg²⁺ ions appear; two soap
//             heads bind one Ca²⁺ and the insoluble salt sinks as scum; the
//             detergent's sulfonate heads stay dissolved beside the same ions.
//
// Micelle members use shortened tails (a stylised drawing); only the single
// molecule in `structure` is drawn to its true carbon count.

import {Easing, interpolate, useCurrentFrame} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, ELEMENT_COLORS, idleBob, idlePulse} from '../../diorama';
import {Chip, ELEMENTS, Title, clamp, fadeAt, shade} from './shared';

export type SoapProps = {
	mode?: 'structure' | 'clean' | 'hardwater';
	title?: string;
	beats?: {
		tail?: number; head?: number; amphipathic?: number; micelle?: number; micelleLabel?: number;
		embed?: number; scrub?: number; emulsified?: number; repel?: number; rinse?: number;
		ions?: number; scum?: number; wasted?: number; detergent?: number; sulfonate?: number; soluble?: number; verdict?: number;
	};
	delay?: number;
};

const ID = 'c12m7soap';
const W = 760;
const H = 530;
const GREASE = '#a3793a';
const WATER = '#7fb8d9';
const CA = '#9fb3a8';
const MG = '#b9c9a4';
const ease = Easing.inOut(Easing.cubic);
const rad = (d: number) => (d * Math.PI) / 180;

/** One soap/detergent molecule. (x, y) = head; `angle` = direction from head to tail (deg). */
const SoapMol = ({
	x, y, angle, beads = 6, s = 1, frame = 0, seed = 0, head = 'coo', na = false, opacity = 1, headRing = 0,
}: {x: number; y: number; angle: number; beads?: number; s?: number; frame?: number; seed?: number; head?: 'coo' | 'so3'; na?: boolean; opacity?: number; headRing?: number}) => {
	const a = rad(angle);
	const ux = Math.cos(a);
	const uy = Math.sin(a);
	const px = -uy;
	const py = ux;
	const sp = 8.5 * s;
	const pts = Array.from({length: beads}, (_, k) => {
		const z = (k % 2 ? 1 : -1) * 3 * s + Math.sin(frame / 16 + k * 0.8 + seed) * 1.2 * s;
		const d = 9 * s + k * sp;
		return {x: x + ux * d + px * z, y: y + uy * d + py * z};
	});
	// head atoms point away from the tail
	const out = {x: -ux, y: -uy};
	const oA = {x: x + (out.x * Math.cos(0.9) - out.y * Math.sin(0.9)) * 8 * s, y: y + (out.x * Math.sin(0.9) + out.y * Math.cos(0.9)) * 8 * s};
	const oB = {x: x + (out.x * Math.cos(-0.9) - out.y * Math.sin(-0.9)) * 8 * s, y: y + (out.x * Math.sin(-0.9) + out.y * Math.cos(-0.9)) * 8 * s};
	const oC = {x: x + out.x * 9 * s, y: y + out.y * 9 * s};
	return (
		<g opacity={opacity}>
			<polyline points={[`${x},${y}`, ...pts.map((p) => `${p.x},${p.y}`)].join(' ')} fill="none" stroke={shade(ELEMENT_COLORS.C, 0.3)} strokeWidth={2.4 * s} strokeLinejoin="round" />
			{pts.map((p, k) => (
				<circle key={k} cx={p.x} cy={p.y} r={4.2 * s} fill={`url(#${ID}-atom-C)`} />
			))}
			{headRing > 0 && <circle cx={x + out.x * 3 * s} cy={y + out.y * 3 * s} r={16 * s} fill="none" stroke={TOK.amber} strokeWidth={2.5} strokeDasharray="4 3" opacity={headRing} />}
			{head === 'coo' ? (
				<>
					<circle cx={x} cy={y} r={4.8 * s} fill={`url(#${ID}-atom-C)`} />
					<circle cx={oA.x} cy={oA.y} r={5 * s} fill={`url(#${ID}-atom-O)`} />
					<circle cx={oB.x} cy={oB.y} r={5 * s} fill={`url(#${ID}-atom-O)`} />
				</>
			) : (
				<>
					<circle cx={x} cy={y} r={5.4 * s} fill={`url(#${ID}-atom-S)`} />
					<circle cx={oA.x} cy={oA.y} r={4.6 * s} fill={`url(#${ID}-atom-O)`} />
					<circle cx={oB.x} cy={oB.y} r={4.6 * s} fill={`url(#${ID}-atom-O)`} />
					<circle cx={oC.x} cy={oC.y} r={4.6 * s} fill={`url(#${ID}-atom-O)`} />
				</>
			)}
			{na && (
				<g>
					<circle cx={x + out.x * 24 * s} cy={y + out.y * 24 * s} r={6.5 * s} fill={`url(#${ID}-atom-Na)`} />
					<text x={x + out.x * 24 * s} y={y + out.y * 24 * s + 3.2 * s} textAnchor="middle" fill="#ffffff" fontSize={7.5 * s} fontWeight={900}>+</text>
				</g>
			)}
		</g>
	);
};

const Ion = ({x, y, label, color, r = 18}: {x: number; y: number; label: string; color: string; r?: number}) => (
	<g>
		<circle cx={x} cy={y} r={r} fill={color} stroke={shade(color, -0.35)} strokeWidth={1.2} />
		<circle cx={x - r * 0.35} cy={y - r * 0.35} r={r * 0.3} fill="#ffffff" opacity={0.55} />
		<text x={x} y={y + 5.5} textAnchor="middle" fill={TOK.ink} fontSize={15} fontWeight={900}>{label}</text>
	</g>
);

/** A micelle of `n` molecules around (cx, cy); tails point in. `fill` 0..1 = how many are in place. */
const Micelle = ({cx, cy, R, n, s, frame, seed = 0, grease = 0, assemble = 1, from}: {cx: number; cy: number; R: number; n: number; s: number; frame: number; seed?: number; grease?: number; assemble?: number; from?: (k: number) => {x: number; y: number; a: number}}) => (
	<g>
		{grease > 0 && <circle cx={cx} cy={cy} r={R - 10 * s} fill={GREASE} opacity={0.85 * grease} />}
		{Array.from({length: n}, (_, k) => {
			const ang = (360 * k) / n + seed * 11 + Math.sin(frame / 40 + k) * 2;
			const hx = cx + Math.cos(rad(ang)) * R;
			const hy = cy + Math.sin(rad(ang)) * R;
			const t = Math.max(0, Math.min(1, assemble * 1.4 - (k / n) * 0.4));
			const f = from ? from(k) : {x: hx, y: hy, a: ang + 180};
			const x = f.x + (hx - f.x) * t;
			const y = f.y + (hy - f.y) * t;
			const a = f.a + (ang + 180 - f.a) * t;
			return <SoapMol key={k} x={x} y={y} angle={a} beads={5} s={s} frame={frame} seed={k + seed} />;
		})}
	</g>
);

const Pool = ({cx, cy, rx}: {cx: number; cy: number; rx: number}) => (
	<g>
		<DioramaPlinth id={ID} cx={cx} cy={cy} rx={rx} />
		<ellipse cx={cx} cy={cy} rx={rx * 0.86} ry={rx * 0.34 * 0.86} fill={WATER} opacity={0.35} />
	</g>
);

// ── structure ──────────────────────────────────────────────────────────────
const Structure = ({frame, b, accent}: {frame: number; b: Required<NonNullable<SoapProps['beats']>>; accent: string}) => {
	const molY = 168;
	const headX = 580;
	const s = 2.3;
	const tailStartX = headX - (9 + 16 * 8.5) * s;
	const tailMid = (tailStartX + headX) / 2;
	const assemble = interpolate(frame, [b.micelle, b.micelle + 90], [0, 1], {...clamp, easing: ease});
	const pulse = idlePulse(frame);
	const mc = {x: W / 2, y: 404};
	return (
		<g>
			{/* the display shelf */}
			<g opacity={fadeAt(frame, 2)} transform={`translate(0, ${molY + 34}) scale(1, 0.4) translate(0, ${-molY - 34})`}>
				<DioramaPlinth id={ID} cx={W / 2} cy={molY + 34} rx={345} />
			</g>
			{/* tint the two faces */}
			<ellipse cx={tailMid - 8} cy={molY} rx={(headX - tailStartX) / 2 + 10} ry={26} fill={GREASE} opacity={0.2 * fadeAt(frame, b.tail, 14)} />
			<circle cx={headX + 10} cy={molY} r={40} fill={WATER} opacity={0.4 * fadeAt(frame, b.head, 14)} />
			<g opacity={fadeAt(frame, 8, 14)}>
				<SoapMol x={headX} y={molY + idleBob(frame, 1, 1.2)} angle={180} beads={17} s={s} frame={frame} na />
			</g>
			<g opacity={fadeAt(frame, b.tail, 12)}>
				<path d={`M ${tailStartX - 6} ${molY + 30} v 8 H ${headX - 22} v -8`} fill="none" stroke={TOK.inkDim} strokeWidth={2.5} />
				<text x={tailMid} y={molY + 64} textAnchor="middle" fill={TOK.ink} fontSize={21} fontWeight={800}>hydrophobic tail</text>
				<text x={tailMid} y={molY + 87} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={700}>non-polar C₁₇H₃₅– chain: mixes with grease</text>
			</g>
			<g opacity={fadeAt(frame, b.head, 12)}>
				<text x={headX + 20} y={molY - 74} textAnchor="middle" fill={TOK.ink} fontSize={21} fontWeight={800}>hydrophilic head</text>
				<text x={headX + 20} y={molY - 51} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={700}>ionic –COO⁻ Na⁺</text>
				<text x={headX - 20} y={molY - 18} textAnchor="middle" fill={TOK.ink} fontSize={22} fontWeight={900}>−</text>
			</g>
			<g opacity={fadeAt(frame, b.amphipathic, 12)}>
				<Chip x={W / 2} y={292} text="amphipathic: one water-loving end, one oil-loving end" color={TOK.amberInk} size={18} />
			</g>

			{/* micelle in water */}
			<g opacity={0.5 + 0.5 * fadeAt(frame, b.micelle - 10, 14)}>
				<Pool cx={W / 2} cy={478} rx={230} />
			</g>
			<g opacity={fadeAt(frame, b.micelle - 10, 14)}>
				<Micelle
					cx={mc.x}
					cy={mc.y + idleBob(frame, 3, 1.5)}
					R={60}
					n={16}
					s={1.1}
					frame={frame}
					assemble={assemble}
					from={(k) => ({x: 150 + ((k * 97) % 460), y: 360 + ((k * 53) % 90), a: (k * 67) % 360})}
				/>
			</g>
			<circle cx={mc.x} cy={mc.y} r={86 + pulse * 3} fill="none" stroke={TOK.amber} strokeWidth={2.5} strokeDasharray="6 6" opacity={0.8 * fadeAt(frame, b.micelleLabel, 14)} />
			<text x={mc.x + 104} y={mc.y - 30} fill={accent} fontSize={19} fontWeight={800} opacity={fadeAt(frame, b.micelleLabel, 14)}>micelle:</text>
			<text x={mc.x + 104} y={mc.y - 7} fill={TOK.inkDim} fontSize={17} fontWeight={800} opacity={fadeAt(frame, b.micelleLabel, 14)}>tails in,</text>
			<text x={mc.x + 104} y={mc.y + 15} fill={TOK.inkDim} fontSize={17} fontWeight={800} opacity={fadeAt(frame, b.micelleLabel, 14)}>heads out into water</text>
		</g>
	);
};

// ── clean ──────────────────────────────────────────────────────────────────
const Clean = ({frame, b, accent}: {frame: number; b: Required<NonNullable<SoapProps['beats']>>; accent: string}) => {
	const plateY = 452;
	const gx = 300;
	const gR = 58;
	const embed = interpolate(frame, [b.embed, b.embed + 60], [0, 1], {...clamp, easing: ease});
	const lift = interpolate(frame, [b.scrub + 20, b.scrub + 110], [0, 1], {...clamp, easing: ease});
	const second = interpolate(frame, [b.repel, b.repel + 70], [0, 1], {...clamp, easing: ease});
	const rinse = interpolate(frame, [b.rinse, b.rinse + 160], [0, 1], {...clamp, easing: Easing.inOut(Easing.quad)});
	const shake = frame > b.scrub && frame < b.scrub + 60 ? Math.sin(frame * 1.3) * 5 : 0;
	const pulse = idlePulse(frame);
	// Droplet 1 path: on the plate → up into the water → (rinse) drift right.
	const d1 = {x: gx + shake + rinse * 40, y: plateY - 20 - lift * 190 + idleBob(frame, 1, 1.5) * lift};
	const d2 = {x: 680 - second * 150 + rinse * 40, y: plateY - 230 + idleBob(frame, 2, 1.5)};
	return (
		<g>
			{/* water and the plate */}
			<rect x={30} y={70} width={W - 60} height={plateY - 80} rx={24} fill={WATER} opacity={0.14 * fadeAt(frame, 2)} />
			<g opacity={fadeAt(frame, 2)} transform={`translate(0, ${plateY}) scale(1, 0.45) translate(0, ${-plateY})`}>
				<DioramaPlinth id={ID} cx={W / 2} cy={plateY} rx={340} />
			</g>
			<text x={W - 50} y={plateY + 44} textAnchor="end" fill={TOK.inkDim} fontSize={17} fontWeight={800} opacity={fadeAt(frame, 10)}>greasy plate</text>

			{/* grease: a dome on the plate, rounding into a droplet as it lifts */}
			<g opacity={1}>
				{lift < 1 && (
					<path
						d={`M ${gx - gR - 14 + shake} ${plateY - 4} Q ${gx - gR + shake} ${plateY - gR * (1.1 + lift)} ${gx + shake} ${plateY - gR * (1.25 + lift)} Q ${gx + gR + shake} ${plateY - gR * (1.1 + lift)} ${gx + gR + 14 + shake} ${plateY - 4} Z`}
						fill={GREASE}
						opacity={0.9 * (1 - lift)}
					/>
				)}
				<text x={gx - 110} y={plateY - 60} textAnchor="end" fill={TOK.ink} fontSize={18} fontWeight={800} opacity={fadeAt(frame, 10) * (1 - fadeAt(frame, b.scrub, 12))}>grease</text>
			</g>
			{/* soap molecules embedding (upper half of the dome) */}
			{lift < 1 &&
				Array.from({length: 7}, (_, k) => {
					const ang = 200 + (140 * k) / 6;
					const hx = gx + shake + Math.cos(rad(ang)) * (gR + 22);
					const hy = plateY - 22 + Math.sin(rad(ang)) * (gR + 22);
					const fx = gx - 250 + k * 80;
					const fy = 110 + (k % 3) * 30;
					const x = fx + (hx - fx) * embed;
					const y = fy + (hy - fy) * embed;
					const a = (k * 50) % 360 + ((ang + 180) - ((k * 50) % 360)) * embed;
					return <SoapMol key={k} x={x} y={y} angle={a} beads={5} s={1.15} frame={frame} seed={k} opacity={fadeAt(frame, b.embed - 30 + k * 3, 12) * (1 - lift)} />;
				})}
			{/* the lifted droplet: a micelle with a grease core */}
			{lift > 0 && <Micelle cx={d1.x} cy={d1.y} R={70} n={18} s={1.15} frame={frame} grease={1} assemble={1} />}
			{second > 0 && (
				<g opacity={Math.min(1, second * 2)}>
					<Micelle cx={d2.x} cy={d2.y} R={60} n={16} s={1.1} frame={frame} seed={3} grease={1} />
				</g>
			)}
			<g opacity={fadeAt(frame, b.embed + 50, 12) * (1 - fadeAt(frame, b.scrub, 10))}>
				<Chip x={560} y={250} text="tails into grease, heads into water" color={accent} size={17} />
			</g>
			<g opacity={fadeAt(frame, b.scrub, 12) * (1 - fadeAt(frame, b.emulsified - 8, 10))}>
				<Chip x={W / 2} y={46} text="agitation lifts the grease off, wrapped in soap" color={accent} size={17} />
			</g>
			<g opacity={fadeAt(frame, b.emulsified, 12)}>
				<Chip x={W / 2} y={46} text="emulsified: suspended, not dissolved" color={TOK.amberInk} size={19} />
			</g>
			{/* like-charged surfaces repel */}
			{second > 0.8 && (
				<g opacity={fadeAt(frame, b.repel + 70, 12)}>
					<text x={(d1.x + d2.x) / 2} y={(d1.y + d2.y) / 2 - 30} textAnchor="middle" fill={TOK.ink} fontSize={22} fontWeight={900}>−  −</text>
					<path d={`M ${(d1.x + d2.x) / 2 - 12} ${(d1.y + d2.y) / 2 - 4} h -26 m 8 -7 l -8 7 l 8 7 M ${(d1.x + d2.x) / 2 + 12} ${(d1.y + d2.y) / 2 - 4} h 26 m -8 -7 l 8 7 l -8 7`} fill="none" stroke={accent} strokeWidth={3 + pulse} strokeLinecap="round" />
					<text x={(d1.x + d2.x) / 2} y={(d1.y + d2.y) / 2 + 112} textAnchor="middle" fill={accent} fontSize={17} fontWeight={800}>negative heads repel: no merging</text>
				</g>
			)}
			{/* rinse flow */}
			<g opacity={fadeAt(frame, b.rinse, 14)}>
				{[0, 1, 2].map((k) => {
					const x0 = 80 + ((frame * 1.2 + k * 90) % 260);
					return <path key={k} d={`M ${x0} ${120 + k * 26} h 60 m -10 -7 l 10 7 l -10 7`} fill="none" stroke={WATER} strokeWidth={4} strokeLinecap="round" opacity={0.9} />;
				})}
				<text x={120} y={100} fill={TOK.inkDim} fontSize={17} fontWeight={800}>rinse water</text>
			</g>
		</g>
	);
};

// ── hard water ─────────────────────────────────────────────────────────────
const HardWater = ({frame, b, accent}: {frame: number; b: Required<NonNullable<SoapProps['beats']>>; accent: string}) => {
	const L = 196;
	const R = 564;
	const poolY = 386;
	const ions = (cx: number) => [
		{x: cx - 70, y: 190, l: 'Ca²⁺', c: CA},
		{x: cx + 60, y: 230, l: 'Mg²⁺', c: MG},
		{x: cx + 10, y: 150, l: 'Ca²⁺', c: CA},
	];
	const ionsIn = fadeAt(frame, b.ions, 14);
	const bind = interpolate(frame, [b.scum, b.scum + 60], [0, 1], {...clamp, easing: ease});
	const sink = interpolate(frame, [b.scum + 60, b.scum + 140], [0, 1], {...clamp, easing: Easing.in(Easing.quad)});
	const detIn = fadeAt(frame, b.detergent, 14);
	const pulse = idlePulse(frame);
	// Scum clump (left): Ca²⁺ between two soap heads.
	const cx0 = L - 70;
	const cy0 = 190;
	const clump = {x: cx0 + (L - cx0) * bind, y: cy0 + (poolY - 30 - cy0) * sink + (1 - sink) * 40 * bind};
	return (
		<g>
			{[L, R].map((x) => (
				<g key={x} opacity={fadeAt(frame, 2)}>
					<rect x={x - 170} y={96} width={340} height={poolY - 100} rx={22} fill={WATER} opacity={0.14} />
					<Pool cx={x} cy={poolY} rx={165} />
				</g>
			))}
			<text x={L} y={80} textAnchor="middle" fill={TOK.ink} fontSize={20} fontWeight={800} opacity={fadeAt(frame, 4)}>soap: –COO⁻ head</text>
			<text x={R} y={80} textAnchor="middle" fill={TOK.ink} fontSize={20} fontWeight={800} opacity={detIn}>detergent: –SO₃⁻ head</text>

			{/* hard-water ions */}
			<g opacity={ionsIn}>
				{ions(L).map((io, k) => (k === 0 ? null : <Ion key={k} x={io.x} y={io.y + idleBob(frame, k, 2)} label={io.l} color={io.c} />))}
			</g>
			<g opacity={ionsIn * detIn}>
				{ions(R).map((io, k) => <Ion key={k} x={io.x} y={io.y + idleBob(frame, k + 4, 2)} label={io.l} color={io.c} />)}
			</g>
			{/* left: the Ca²⁺ that makes scum, with two soap molecules closing in */}
			<g opacity={ionsIn}>
				<Ion x={clump.x} y={clump.y + idleBob(frame, 9, 1.5) * (1 - sink)} label="Ca²⁺" color={CA} />
				<SoapMol x={clump.x - 24 - (1 - bind) * 40} y={clump.y + (1 - bind) * 60} angle={180 + (1 - bind) * 30} beads={6} s={1.35} frame={frame} seed={1} opacity={fadeAt(frame, 20, 12)} />
				<SoapMol x={clump.x + 24 + (1 - bind) * 50} y={clump.y + (1 - bind) * 50} angle={0 - (1 - bind) * 40} beads={6} s={1.35} frame={frame} seed={2} opacity={fadeAt(frame, 26, 12)} />
			</g>
			{/* scum layer building on the left plinth */}
			<g opacity={fadeAt(frame, b.scum + 130, 20)}>
				{[-90, -40, 40, 95].map((dx, k) => (
					<ellipse key={k} cx={L + dx} cy={poolY - 8 + (k % 2) * 6} rx={26} ry={9} fill="#8d8a84" opacity={0.85} />
				))}
				<text x={L} y={poolY + 100} textAnchor="middle" fill={TOK.amberInk} fontSize={19} fontWeight={800}>insoluble scum: soap wasted</text>
			</g>
			<g opacity={fadeAt(frame, b.scum + 20, 12)}>
				<text x={L} y={poolY + 76} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={800}>2 soap heads + Ca²⁺ → solid</text>
			</g>

			{/* right: detergent stays dispersed */}
			<g opacity={detIn}>
				{[
					{x: R - 110, y: 300, a: 200},
					{x: R + 110, y: 170, a: -20},
					{x: R + 120, y: 300, a: 30},
					{x: R - 40, y: 250, a: 150},
				].map((m, k) => (
					<SoapMol key={k} x={m.x} y={m.y + idleBob(frame, k + 12, 2.2)} angle={m.a} beads={6} s={1.35} frame={frame} seed={k + 5} head="so3" headRing={fadeAt(frame, b.sulfonate, 12) * (0.6 + 0.4 * pulse)} />
				))}
			</g>
			<g opacity={fadeAt(frame, b.soluble, 14)}>
				<text x={R} y={poolY + 76} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={800}>Ca²⁺ / Mg²⁺ sulfonate salts dissolve</text>
				<text x={R} y={poolY + 100} textAnchor="middle" fill={accent} fontSize={19} fontWeight={800}>no scum: keeps cleaning</text>
			</g>
			<text x={W / 2} y={H - 8} textAnchor="middle" fill={TOK.ink} fontSize={19} fontWeight={800} opacity={fadeAt(frame, b.verdict, 14)}>
				Same amphipathic design, smarter head group
			</text>
			<text x={L} y={130} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={800} opacity={ionsIn * (1 - fadeAt(frame, b.scum, 10))}>hard water: Ca²⁺ and Mg²⁺</text>
		</g>
	);
};

export const SoapDiagram = ({mode = 'structure', title, beats = {}, delay = 62}: SoapProps) => {
	const frame = useCurrentFrame() - delay;
	const theme = useAccent();
	const b = {
		tail: 430, head: 700, amphipathic: 1114, micelle: 1282, micelleLabel: 1560,
		embed: 310, scrub: 466, emulsified: 994, repel: 1150, rinse: 1474,
		ions: 94, scum: 358, wasted: 634, detergent: 778, sulfonate: 1114, soluble: 1342, verdict: 1534,
		...beats,
	};
	const titles = {structure: 'A molecule with two faces', clean: 'Emulsified, not dissolved', hardwater: 'Soap vs detergent in hard water'};
	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={titles[mode]} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} elements={ELEMENTS} />
			{mode !== 'clean' && <Title text={title ?? titles[mode]} opacity={fadeAt(frame, 0)} />}
			{mode === 'structure' && <Structure frame={frame} b={b} accent={theme.accent} />}
			{mode === 'clean' && <Clean frame={frame} b={b} accent={theme.accent} />}
			{mode === 'hardwater' && <HardWater frame={frame} b={b} accent={theme.accent} />}
		</svg>
	);
};
