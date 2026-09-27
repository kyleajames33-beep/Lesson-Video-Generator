// gallery-icons: a library of small coded "painted" lab objects for the
// chem-y12-m8 gallery kinds (chem12m8Cards, chem12m8Standard).
//
// Every icon is drawn with its ORIGIN AT THE BASE CENTRE (where it stands on a
// plinth) and grows upward (negative y). `ICON_BOX[name]` gives its nominal
// footprint {w, h} at scale 1 so a layout can fit it. Style: soft top-left
// light, glossy sheen overlays, clean outlines (matches diorama.tsx / shared.tsx).
//
// Icons are parametrised through `IconSpec` (colour, label, value, ions…) and
// animated with `t` = frames since the icon appeared (small, deterministic
// "life": drips, flicker, colonies growing). Text inside an icon is sized with
// `fs()` so it never renders below ~15 viewBox units after the icon is scaled.
//
// Could be promoted to a shared primitive later: nothing here is lesson-specific.

import type {ReactNode} from 'react';
import {TOK} from '../../../../styles/tokens';
import {ELEMENT_COLORS} from '../../diorama';
import {Beaker, Flask, GlossDefs, Mark, TestTube, hash01, shade, textW} from './shared';

export type IconSpec = {
	/** Icon name: a key of ICON_BOX. */
	name: string;
	/** Main colour (liquid, precipitate, tile, capsule…). */
	color?: string;
	/** Secondary colour where an icon has one. */
	color2?: string;
	/** Short label (a tag, an element symbol, a lamp's element…). */
	label?: string;
	/** Secondary text (e.g. an element tile's name). */
	sub?: string;
	/** Readout text (e.g. a balance display). Empty = blank display. */
	value?: string;
	/** What sits on a balance pan: 'crucible' | 'molecule'. */
	load?: string;
	/** For ionBeaker: the ions to show. */
	ions?: {label: string; color: string; n?: number; ink?: string}[];
	/** For hbond: which glyph. */
	role?: 'donor' | 'acceptor';
	/** Extra scale multiplier for this icon. */
	scale?: number;
};

type R = {uid: string; t: number; s: IconSpec; k: number; accent: string};

const GLASS = 'rgba(70,90,110,0.55)';
const WATER = 'rgba(120,175,225,0.4)';
const c01 = (v: number) => Math.max(0, Math.min(1, v));

/** Footprint of each icon at scale 1 (origin at base centre). */
export const ICON_BOX: Record<string, {w: number; h: number}> = {
	testTube: {w: 110, h: 200},
	balance: {w: 132, h: 100},
	burette: {w: 124, h: 210},
	phMeter: {w: 134, h: 160},
	doMeter: {w: 134, h: 160},
	condProbe: {w: 134, h: 160},
	thermometer: {w: 90, h: 172},
	turbidJar: {w: 104, h: 116},
	turbidityMeter: {w: 150, h: 134},
	petri: {w: 136, h: 70},
	bodBottle: {w: 120, h: 136},
	elementTile: {w: 112, h: 116},
	leadPipe: {w: 126, h: 128},
	groundwater: {w: 136, h: 136},
	precipTank: {w: 132, h: 126},
	resinBeads: {w: 96, h: 176},
	roMembrane: {w: 156, h: 108},
	plants: {w: 116, h: 170},
	cuvette: {w: 140, h: 100},
	cuvetteSeries: {w: 136, h: 100},
	aasFlame: {w: 190, h: 110},
	lamp: {w: 64, h: 140},
	icColumn: {w: 150, h: 176},
	pill: {w: 118, h: 76},
	oilWater: {w: 158, h: 160},
	hbond: {w: 132, h: 112},
	ionBeaker: {w: 124, h: 118},
	evidenceStack: {w: 118, h: 118},
};

/** Shared gradients for every icon; render once per diagram. */
export const GalleryDefs = ({id}: {id: string}) => (
	<>
		<defs>
			<linearGradient id={`${id}-gi-sheen`} x1="0" y1="0" x2="1" y2="1">
				<stop offset="0%" stopColor="#ffffff" stopOpacity={0.55} />
				<stop offset="45%" stopColor="#ffffff" stopOpacity={0.05} />
				<stop offset="100%" stopColor="#000000" stopOpacity={0.16} />
			</linearGradient>
			<linearGradient id={`${id}-gi-metal`} x1="0" x2="1" y1="0" y2="0">
				<stop offset="0%" stopColor="#eef1f4" />
				<stop offset="40%" stopColor="#bcc3cb" />
				<stop offset="100%" stopColor="#848c95" />
			</linearGradient>
			<linearGradient id={`${id}-gi-metalv`} x1="0" x2="0" y1="0" y2="1">
				<stop offset="0%" stopColor="#eef1f4" />
				<stop offset="45%" stopColor="#bcc3cb" />
				<stop offset="100%" stopColor="#848c95" />
			</linearGradient>
			<linearGradient id={`${id}-gi-lead`} x1="0" x2="1" y1="0" y2="0">
				<stop offset="0%" stopColor="#a9b0b8" />
				<stop offset="45%" stopColor="#7b838c" />
				<stop offset="100%" stopColor="#555c64" />
			</linearGradient>
			<linearGradient id={`${id}-gi-plastic`} x1="0" x2="0.4" y1="0" y2="1">
				<stop offset="0%" stopColor="#ffffff" />
				<stop offset="100%" stopColor="#d9dde1" />
			</linearGradient>
			<linearGradient id={`${id}-gi-lcd`} x1="0" x2="0" y1="0" y2="1">
				<stop offset="0%" stopColor="#1f2f29" />
				<stop offset="100%" stopColor="#2d4a40" />
			</linearGradient>
			<linearGradient id={`${id}-gi-wood`} x1="0" x2="0" y1="0" y2="1">
				<stop offset="0%" stopColor="#e2c093" />
				<stop offset="100%" stopColor="#b88d5c" />
			</linearGradient>
			<linearGradient id={`${id}-gi-flame`} x1="0" x2="0" y1="1" y2="0">
				<stop offset="0%" stopColor="#2f63d8" stopOpacity={0.95} />
				<stop offset="55%" stopColor="#79a8ff" stopOpacity={0.7} />
				<stop offset="100%" stopColor="#bcd4ff" stopOpacity={0} />
			</linearGradient>
			<linearGradient id={`${id}-gi-leaf`} x1="0" x2="1" y1="0" y2="1">
				<stop offset="0%" stopColor="#8fcf6a" />
				<stop offset="100%" stopColor="#3f8a37" />
			</linearGradient>
			<radialGradient id={`${id}-gi-glow`} cx="50%" cy="50%" r="50%">
				<stop offset="0%" stopColor="#fff6d8" stopOpacity={1} />
				<stop offset="45%" stopColor="#ffd98a" stopOpacity={0.7} />
				<stop offset="100%" stopColor="#ffd98a" stopOpacity={0} />
			</radialGradient>
		</defs>
		<GlossDefs
			id={`${id}-gi`}
			colors={{
				C: ELEMENT_COLORS.C,
				O: ELEMENT_COLORS.O,
				H: ELEMENT_COLORS.H,
				N: ELEMENT_COLORS.N,
				bead: '#d8962a',
				colony: '#c63a55',
			}}
		/>
	</>
);

/** A glossy sphere using the shared gloss colours (C, O, H, N, bead, colony). */
const Sphere = ({gid, name, x, y, r, opacity = 1}: {gid: string; name: string; x: number; y: number; r: number; opacity?: number}) => {
	const base = name === 'bead' ? '#d8962a' : name === 'colony' ? '#c63a55' : ELEMENT_COLORS[name] ?? '#9a9a9a';
	return <circle cx={x} cy={y} r={r} fill={`url(#${gid}-gi-g-${name})`} stroke={shade(base, -0.35)} strokeWidth={1} opacity={opacity} />;
};

/** Small tag pill used inside icons. */
const Tag = ({x, y, text, size, color = TOK.inkDim}: {x: number; y: number; text: string; size: number; color?: string}) => {
	const w = textW(text, size) + 18;
	const h = size + 12;
	return (
		<g>
			<rect x={x - w / 2} y={y - h / 2} width={w} height={h} rx={h / 2} fill="#ffffff" stroke={color} strokeWidth={1.8} />
			<text x={x} y={y + size * 0.36} textAnchor="middle" fill={color} fontSize={size} fontWeight={800}>
				{text}
			</text>
		</g>
	);
};

// ── Icons ────────────────────────────────────────────────────────────────

const TestTubeIcon = ({uid, t, s, k}: R) => {
	const fs = Math.max(16, 15.5 / k);
	const settle = c01(t / 45);
	const col = s.color ?? '#fbfbf8';
	// Suspended white specks that sink onto the settled layer.
	const specks = Array.from({length: 16}, (_, i) => {
		const x0 = -14 + 28 * hash01(i + 3);
		const y0 = -104 + 64 * hash01(i + 11);
		const y = y0 + (-30 - y0) * c01(settle * (0.55 + 0.6 * hash01(i + 5)));
		return <circle key={i} cx={x0} cy={y} r={3.2} fill={col} stroke="#9aa1a8" strokeWidth={0.9} opacity={1 - settle * 0.5} />;
	});
	return (
		<g>
			<TestTube cx={0} baseY={-4} w={40} h={160} fill={0.7} liquid="rgba(95,150,210,0.55)" solid={0.6 + 0.9 * settle} solidColor={col} cloud={0.75 - settle * 0.4}>
				{specks}
			</TestTube>
			{/* rack: holds the tube high so the precipitate at the bottom stays in view */}
			<rect x={-48} y={-128} width={96} height={15} rx={4} fill={`url(#${uid}-gi-wood)`} stroke="#8a6a44" strokeWidth={1.5} />
			<rect x={-44} y={-114} width={9} height={114} rx={2} fill={`url(#${uid}-gi-wood)`} stroke="#8a6a44" strokeWidth={1.2} />
			<rect x={35} y={-114} width={9} height={114} rx={2} fill={`url(#${uid}-gi-wood)`} stroke="#8a6a44" strokeWidth={1.2} />
			{s.label && <Tag x={0} y={-184} text={s.label} size={fs} />}
		</g>
	);
};

const BalanceIcon = ({uid, t, s, k}: R) => {
	const fs = Math.max(16, 15.5 / k);
	const settle = c01(t / 30);
	return (
		<g>
			<ellipse cx={6} cy={2} rx={68} ry={7} fill="rgba(40,36,30,0.18)" />
			<rect x={-64} y={-48} width={128} height={48} rx={9} fill={`url(#${uid}-gi-plastic)`} stroke="#9aa3ab" strokeWidth={2} />
			<rect x={-48} y={-39} width={96} height={29} rx={5} fill={`url(#${uid}-gi-lcd)`} />
			{s.value ? (
				<text x={0} y={-24.5 + fs * 0.36} textAnchor="middle" fill="#9ff0c8" fontSize={fs} fontWeight={800} opacity={settle}>
					{s.value}
				</text>
			) : (
				<text x={40} y={-24.5 + 15.5 * 0.36} textAnchor="end" fill="#9ff0c8" fontSize={Math.max(15.5, 15.5 / k)} fontWeight={700} opacity={0.75}>
					g
				</text>
			)}
			<rect x={-5} y={-60} width={10} height={12} fill={`url(#${uid}-gi-metal)`} />
			<ellipse cx={0} cy={-62} rx={48} ry={9} fill={`url(#${uid}-gi-metal)`} stroke="#7d858e" strokeWidth={1.5} />
			<ellipse cx={-10} cy={-64} rx={26} ry={3} fill="#ffffff" opacity={0.5} />
			{s.load === 'crucible' && (
				<g>
					<path d="M -20 -92 L 20 -92 L 14 -64 L -14 -64 Z" fill="#f2eee6" stroke="#a79f90" strokeWidth={1.6} />
					<ellipse cx={0} cy={-92} rx={20} ry={5} fill="#e4ded2" stroke="#a79f90" strokeWidth={1.4} />
					<ellipse cx={0} cy={-90} rx={14} ry={3} fill="#fbfbf8" />
					<rect x={-15} y={-88} width={4} height={18} rx={2} fill="#ffffff" opacity={0.6} />
				</g>
			)}
			{s.load === 'molecule' && (
				<g>
					<line x1={-18} y1={-82} x2={12} y2={-86} stroke="#6a6a6a" strokeWidth={4} />
					<line x1={12} y1={-86} x2={2} y2={-110} stroke="#6a6a6a" strokeWidth={4} />
					<line x1={-18} y1={-82} x2={-30} y2={-104} stroke="#6a6a6a" strokeWidth={4} />
					<Sphere gid={uid} name="O" x={2} y={-110} r={11} />
					<Sphere gid={uid} name="N" x={-30} y={-104} r={11} />
					<Sphere gid={uid} name="C" x={-18} y={-80} r={13} />
					<Sphere gid={uid} name="C" x={12} y={-86} r={13} />
					<Sphere gid={uid} name="H" x={32} y={-78} r={8} />
				</g>
			)}
		</g>
	);
};

const BuretteIcon = ({uid, t, s}: R) => {
	const bx = 12; // burette axis
	const drip = (t % 42) / 42;
	return (
		<g>
			<rect x={-60} y={-9} width={92} height={9} rx={3} fill={`url(#${uid}-gi-metalv)`} stroke="#7d858e" strokeWidth={1} />
			<rect x={-50} y={-206} width={7} height={197} rx={3} fill={`url(#${uid}-gi-metal)`} />
			<rect x={-50} y={-160} width={bx - 6 + 50} height={6} rx={2} fill={`url(#${uid}-gi-metalv)`} />
			<rect x={bx - 11} y={-165} width={22} height={16} rx={3} fill="#6b737c" />
			{/* burette glass */}
			<rect x={bx - 7} y={-200} width={14} height={118} rx={4} fill="rgba(255,255,255,0.35)" />
			<rect x={bx - 5} y={-188} width={10} height={106} fill={s.color2 ?? WATER} />
			{Array.from({length: 8}, (_, i) => (
				<line key={i} x1={bx - 7} x2={bx - (i % 2 ? 2 : 0)} y1={-190 + i * 13} y2={-190 + i * 13} stroke="rgba(60,70,80,0.55)" strokeWidth={1.2} />
			))}
			<rect x={bx - 7} y={-200} width={14} height={118} rx={4} fill="none" stroke={GLASS} strokeWidth={2.4} />
			<rect x={bx - 5} y={-82} width={10} height={10} fill="#e8eaec" stroke={GLASS} strokeWidth={1.5} />
			<rect x={bx - 16} y={-80} width={32} height={6} rx={3} fill="#3d7fd1" />
			<path d={`M ${bx - 4} -72 L ${bx + 4} -72 L ${bx + 1} -58 L ${bx - 1} -58 Z`} fill="rgba(255,255,255,0.5)" stroke={GLASS} strokeWidth={1.5} />
			<ellipse cx={bx} cy={-56 + drip * 14} rx={2.6} ry={3.4} fill="rgba(90,150,215,0.8)" opacity={1 - drip * 0.8} />
			<Flask cx={bx} baseY={0} w={72} h={58} level={0.45} liquid={s.color ?? WATER} />
		</g>
	);
};

const MeterIcon = ({uid, t, s, k}: R, kind: 'ph' | 'do' | 'cond') => {
	const fs = Math.max(17, 15.5 / k);
	const label = s.label ?? (kind === 'ph' ? 'pH' : kind === 'do' ? 'DO' : 'EC');
	const px = 34; // probe axis
	const blink = 0.75 + 0.25 * Math.sin(t / 9);
	const probe = (
		<g>
			<rect x={px - 6} y={-118} width={12} height={78} rx={6} fill="#3a3f46" />
			<rect x={px - 4} y={-114} width={3} height={66} rx={1.5} fill="#ffffff" opacity={0.25} />
			{kind === 'ph' && <circle cx={px} cy={-34} r={8} fill="rgba(220,235,245,0.8)" stroke={GLASS} strokeWidth={1.5} />}
			{kind === 'do' && <rect x={px - 7} y={-44} width={14} height={12} rx={3} fill="#e9d9a6" stroke="#8f7f4f" strokeWidth={1.2} />}
			{kind === 'cond' && (
				<g>
					<rect x={px - 6} y={-50} width={12} height={5} fill={`url(#${uid}-gi-metal)`} />
					<rect x={px - 6} y={-40} width={12} height={5} fill={`url(#${uid}-gi-metal)`} />
				</g>
			)}
		</g>
	);
	return (
		<g>
			<Beaker cx={px} baseY={0} w={60} h={70} level={0.68} liquid={s.color ?? WATER}>
				{probe}
			</Beaker>
			<path d={`M -30 -118 C -30 -150, ${px} -150, ${px} -118`} fill="none" stroke="#3a3f46" strokeWidth={3} />
			<ellipse cx={-30} cy={2} rx={34} ry={5} fill="rgba(40,36,30,0.18)" />
			<rect x={-62} y={-122} width={62} height={122} rx={11} fill={`url(#${uid}-gi-plastic)`} stroke="#8f98a0" strokeWidth={2} />
			<rect x={-55} y={-112} width={48} height={36} rx={5} fill={`url(#${uid}-gi-lcd)`} />
			<text x={-31} y={-94 + fs * 0.36} textAnchor="middle" fill="#9ff0c8" fontSize={fs} fontWeight={800} opacity={blink}>
				{label}
			</text>
			<circle cx={-44} cy={-56} r={7} fill="#e2e6ea" stroke="#9aa3ab" strokeWidth={1.5} />
			<circle cx={-18} cy={-56} r={7} fill="#e2e6ea" stroke="#9aa3ab" strokeWidth={1.5} />
			<rect x={-62} y={-122} width={62} height={122} rx={11} fill={`url(#${uid}-gi-sheen)`} opacity={0.6} />
		</g>
	);
};

const ThermometerIcon = ({t}: R) => {
	const rise = c01(t / 40);
	const top = -40 - 70 * rise - Math.sin(t / 20) * 1.5;
	return (
		<g>
			<Beaker cx={0} baseY={0} w={78} h={82} level={0.72} liquid={WATER}>
				<g />
			</Beaker>
			<rect x={-7} y={-168} width={14} height={152} rx={7} fill="rgba(255,255,255,0.75)" stroke={GLASS} strokeWidth={2} />
			{Array.from({length: 9}, (_, i) => (
				<line key={i} x1={3} x2={7} y1={-150 + i * 13} y2={-150 + i * 13} stroke="rgba(60,70,80,0.55)" strokeWidth={1.2} />
			))}
			<rect x={-2.5} y={top} width={5} height={-18 - top} fill="#d8342c" />
			<circle cx={0} cy={-18} r={9.5} fill="#d8342c" stroke="#9c211b" strokeWidth={1.2} />
			<circle cx={-3} cy={-21} r={3} fill="#ffffff" opacity={0.6} />
		</g>
	);
};

const murky = 'rgba(170,140,95,0.62)';
const Particles = ({t, x0, x1, y0, y1, n, seed, color = '#7d623e', r = 2.6}: {t: number; x0: number; x1: number; y0: number; y1: number; n: number; seed: number; color?: string; r?: number}) => (
	<g>
		{Array.from({length: n}, (_, i) => {
			const x = x0 + (x1 - x0) * hash01(seed + i * 7) + Math.sin(t / 23 + i) * 2.5;
			const y = y0 + (y1 - y0) * hash01(seed + i * 13) + Math.sin(t / 31 + i * 1.3) * 2.5;
			return <circle key={i} cx={x} cy={y} r={r * (0.7 + 0.6 * hash01(seed + i))} fill={color} opacity={0.75} />;
		})}
	</g>
);

const TurbidJarIcon = ({t, s}: R) => (
	<Beaker cx={0} baseY={0} w={90} h={112} level={0.8} liquid={s.color ?? murky}>
		<Particles t={t} x0={-38} x1={38} y0={-84} y1={-10} n={16} seed={4} />
	</Beaker>
);

const TurbidityMeterIcon = ({uid, t, s}: R) => {
	const beam = 0.8 + 0.2 * Math.sin(t / 7);
	return (
		<g>
			<ellipse cx={6} cy={2} rx={78} ry={7} fill="rgba(40,36,30,0.18)" />
			<rect x={-74} y={-20} width={148} height={20} rx={6} fill={`url(#${uid}-gi-plastic)`} stroke="#9aa3ab" strokeWidth={1.8} />
			{/* lamp */}
			<rect x={-74} y={-78} width={24} height={30} rx={5} fill="#5d646c" />
			<circle cx={-50} cy={-63} r={16} fill={`url(#${uid}-gi-glow)`} opacity={beam} />
			<line x1={-50} y1={-63} x2={60} y2={-63} stroke="#ffd27a" strokeWidth={5} opacity={0.55 * beam} strokeLinecap="round" />
			<g transform="translate(0,-20)">
				<Beaker cx={0} baseY={0} w={62} h={88} level={0.82} liquid={s.color ?? murky}>
					<Particles t={t} x0={-24} x1={24} y0={-66} y1={-8} n={11} seed={9} />
				</Beaker>
			</g>
			{/* scattered light at 90° to a detector */}
			{[-10, 0, 10].map((dx, i) => (
				<line key={i} x1={dx} y1={-66} x2={dx * 1.4 + 2} y2={-114} stroke="#ffd27a" strokeWidth={2.5} opacity={0.5 + 0.35 * Math.sin(t / 8 + i)} strokeLinecap="round" />
			))}
			<rect x={-16} y={-132} width={36} height={16} rx={4} fill="#5d646c" />
		</g>
	);
};

const PetriIcon = ({uid, t}: R) => {
	const grow = c01(t / 60);
	const n = Math.round(20 * grow);
	return (
		<g>
			<ellipse cx={6} cy={2} rx={68} ry={9} fill="rgba(40,36,30,0.18)" />
			<path d="M -62 -26 L -62 -14 A 62 22 0 0 0 62 -14 L 62 -26 Z" fill="rgba(215,230,240,0.7)" stroke={GLASS} strokeWidth={1.8} />
			<ellipse cx={0} cy={-26} rx={62} ry={22} fill="#efd7a2" stroke="#c9ad73" strokeWidth={1.5} />
			<ellipse cx={-16} cy={-32} rx={30} ry={7} fill="#ffffff" opacity={0.25} />
			{Array.from({length: n}, (_, i) => {
				const a = hash01(i * 3 + 1) * Math.PI * 2;
				const rr = Math.sqrt(hash01(i * 5 + 2)) * 0.82;
				const cr = 3 + 3.2 * hash01(i + 40);
				return <circle key={i} cx={Math.cos(a) * 58 * rr} cy={-26 + Math.sin(a) * 19 * rr} r={cr} fill={`url(#${uid}-gi-g-colony)`} stroke="#8e2336" strokeWidth={0.8} />;
			})}
			<ellipse cx={0} cy={-30} rx={64} ry={23} fill="none" stroke={GLASS} strokeWidth={2} />
			<path d="M -46 -44 A 64 23 0 0 1 20 -52" fill="none" stroke="#ffffff" strokeWidth={3} opacity={0.6} strokeLinecap="round" />
		</g>
	);
};

const BodBottleIcon = ({t}: R) => {
	const body = 'M -34 -8 Q -34 0 -26 0 L 26 0 Q 34 0 34 -8 L 34 -66 Q 34 -84 13 -90 L 13 -104 L -13 -104 L -13 -90 Q -34 -84 -34 -66 Z';
	return (
		<g>
			<ellipse cx={6} cy={3} rx={40} ry={6} fill="rgba(40,36,30,0.18)" />
			<path d="M -34 -80 L -34 -8 Q -34 0 -26 0 L 26 0 Q 34 0 34 -8 L 34 -80 Z" fill={WATER} clipPath="none" />
			<path d={body} fill="rgba(200,225,240,0.18)" stroke={GLASS} strokeWidth={2.6} />
			{/* ground-glass stopper */}
			<path d="M -10 -104 L -12 -114 Q -20 -118 -20 -124 Q 0 -132 20 -124 Q 20 -118 12 -114 L 10 -104 Z" fill="rgba(245,248,250,0.9)" stroke={GLASS} strokeWidth={2} />
			<rect x={-26} y={-70} width={6} height={58} rx={3} fill="#ffffff" opacity={0.5} />
			{/* "in the dark" badge */}
			<g transform={`translate(44,-104) rotate(${Math.sin(t / 30) * 4})`}>
				<circle r={15} fill="#2e3a59" />
				<path d="M 4 -9 A 9 9 0 1 0 5 8 A 7 7 0 1 1 4 -9 Z" fill="#f4e6b0" />
			</g>
		</g>
	);
};

const ElementTileIcon = ({uid, s, k}: R) => {
	const c = s.color ?? '#56606b';
	const nameSize = Math.max(16, 15.5 / k);
	return (
		<g>
			<ellipse cx={8} cy={3} rx={56} ry={7} fill="rgba(40,36,30,0.2)" />
			<path d="M 48 -4 L 58 -12 L 58 -112 L 48 -104 Z" fill={shade(c, -0.18)} />
			<path d="M -48 -104 L -38 -112 L 58 -112 L 48 -104 Z" fill={shade(c, 0.18)} />
			<rect x={-48} y={-104} width={96} height={100} rx={6} fill={c} stroke={shade(c, -0.3)} strokeWidth={1.5} />
			<rect x={-48} y={-104} width={96} height={100} rx={6} fill={`url(#${uid}-gi-sheen)`} />
			<text x={0} y={-50} textAnchor="middle" fill="#ffffff" fontSize={44} fontWeight={800}>
				{s.label ?? 'Pb'}
			</text>
			{s.sub && (
				<text x={0} y={-20} textAnchor="middle" fill="#ffffff" fontSize={nameSize} fontWeight={700} opacity={0.92}>
					{s.sub}
				</text>
			)}
		</g>
	);
};

const LeadPipeIcon = ({uid, t}: R) => {
	const d = 'M -34 0 L -34 -82 Q -34 -104 -12 -104 L 44 -104';
	const drip = (t % 48) / 48;
	return (
		<g>
			<ellipse cx={-26} cy={2} rx={26} ry={5} fill="rgba(40,36,30,0.2)" />
			<path d={d} fill="none" stroke="#4f565d" strokeWidth={26} />
			<path d={d} fill="none" stroke="#7b838c" strokeWidth={22} />
			<path d="M -40 -6 L -40 -80 Q -40 -106 -12 -110 L 44 -110" fill="none" stroke="#c3c9cf" strokeWidth={4} opacity={0.6} />
			{/* joints */}
			<rect x={-50} y={-50} width={32} height={14} rx={3} fill={`url(#${uid}-gi-lead)`} stroke="#4f565d" strokeWidth={1.2} />
			<rect x={10} y={-120} width={14} height={32} rx={3} fill={`url(#${uid}-gi-lead)`} stroke="#4f565d" strokeWidth={1.2} />
			{/* patina */}
			{[[-30, -20], [-38, -66], [-8, -100], [32, -108]].map(([x, y], i) => (
				<ellipse key={i} cx={x} cy={y} rx={4} ry={2.5} fill="#b9c2ad" opacity={0.7} />
			))}
			{/* open end + drip */}
			<ellipse cx={46} cy={-104} rx={5} ry={12} fill="#3e444a" />
			<ellipse cx={50} cy={-88 + drip * 60} rx={3.4} ry={4.6} fill="rgba(90,150,215,0.85)" opacity={1 - drip} />
		</g>
	);
};

const GroundwaterIcon = ({uid, t, s, k}: R) => {
	const W = 124, x0 = -62;
	const bands = [
		{h: 26, c: '#b6a58c'},
		{h: 22, c: '#9a8a74'},
		{h: 30, c: '#6f9cc4'},
		{h: 22, c: '#76695b'},
	];
	let y = -100;
	const fs = Math.max(16, 15.5 / k);
	return (
		<g>
			<ellipse cx={8} cy={3} rx={70} ry={7} fill="rgba(40,36,30,0.2)" />
			<path d={`M ${x0 + W} -100 L ${x0 + W + 10} -108 L ${x0 + W + 10} -8 L ${x0 + W} 0 Z`} fill="#6b5f52" />
			<path d={`M ${x0} -100 L ${x0 + 10} -108 L ${x0 + W + 10} -108 L ${x0 + W} -100 Z`} fill="#c9bba4" />
			{bands.map((b, i) => {
				const r = <rect key={i} x={x0} y={y} width={W} height={b.h} fill={b.c} />;
				y += b.h;
				return r;
			})}
			{/* gravel in the aquifer, water glinting */}
			{Array.from({length: 12}, (_, i) => (
				<circle key={i} cx={x0 + 6 + (W - 12) * hash01(i + 2)} cy={-52 + 22 * hash01(i + 9)} r={3 + 2 * hash01(i)} fill="#9fb8cc" stroke="#5e82a3" strokeWidth={0.8} />
			))}
			<rect x={x0} y={-52} width={W} height={30} fill="#ffffff" opacity={0.1 + 0.06 * Math.sin(t / 15)} />
			<rect x={x0} y={-100} width={W} height={100} fill={`url(#${uid}-gi-sheen)`} opacity={0.5} />
			{/* bore */}
			<rect x={24} y={-132} width={12} height={106} fill={`url(#${uid}-gi-metal)`} stroke="#6b737c" strokeWidth={1} />
			<rect x={27} y={-40} width={6} height={10} fill="rgba(90,150,215,0.85)" />
			{s.label && <Tag x={-24} y={-122} text={s.label} size={fs} />}
		</g>
	);
};

const PrecipTankIcon = ({t, s}: R) => {
	const grow = c01(t / 70);
	const sludge = 4 + 12 * grow;
	const col = s.color ?? '#e3ddcf';
	return (
		<g>
			<ellipse cx={6} cy={3} rx={70} ry={7} fill="rgba(40,36,30,0.18)" />
			<rect x={-62} y={-104} width={124} height={104} rx={8} fill="rgba(200,225,240,0.18)" />
			<rect x={-60} y={-90} width={120} height={88} rx={6} fill="rgba(150,190,215,0.35)" />
			{/* flakes falling */}
			{Array.from({length: 14}, (_, i) => {
				const phase = ((t * (0.9 + 0.5 * hash01(i))) / 70 + hash01(i + 20)) % 1;
				const x = -50 + 100 * hash01(i + 3) + Math.sin(t / 15 + i) * 3;
				const y = -84 + (84 - sludge - 6) * phase;
				return <rect key={i} x={x} y={y} width={6} height={4.5} rx={1} fill={col} stroke={shade(col, -0.3)} strokeWidth={0.8} transform={`rotate(${(i * 37 + t) % 360} ${x + 3} ${y + 2})`} />;
			})}
			<path d={`M -60 -2 L -60 ${-sludge} Q 0 ${-sludge - 5} 60 ${-sludge} L 60 -2 Z`} fill={col} stroke={shade(col, -0.25)} strokeWidth={1.2} />
			<rect x={-62} y={-104} width={124} height={104} rx={8} fill="none" stroke={GLASS} strokeWidth={2.6} />
			<rect x={-54} y={-96} width={6} height={84} rx={3} fill="#ffffff" opacity={0.45} />
			{/* dosing pipe */}
			<path d="M -30 -122 L -30 -104" stroke="#6b737c" strokeWidth={8} />
			<rect x={-44} y={-126} width={30} height={8} rx={3} fill="#6b737c" />
			<circle cx={-30} cy={-98 + ((t % 30) / 30) * 10} r={3} fill={col} stroke={shade(col, -0.3)} strokeWidth={0.8} />
		</g>
	);
};

const ResinBeadsIcon = ({uid, t}: R) => {
	const beads: ReactNode[] = [];
	for (let row = 0; row < 8; row++) {
		for (let c = 0; c < 3; c++) {
			const x = -14 + c * 14 + (row % 2 ? 7 : 0) - (row % 2 && c === 2 ? 28 : 0);
			beads.push(<Sphere key={`${row}-${c}`} gid={uid} name="bead" x={x} y={-150 + row * 14} r={7} />);
		}
	}
	// Contaminant ions caught on the beads (dark dots); harmless ions released below (white dots).
	const caught = Math.min(6, Math.floor(t / 14));
	const release = (t % 36) / 36;
	return (
		<g>
			<ellipse cx={4} cy={2} rx={34} ry={5} fill="rgba(40,36,30,0.18)" />
			<rect x={-30} y={-6} width={60} height={6} rx={3} fill={`url(#${uid}-gi-metalv)`} />
			<rect x={-4} y={-40} width={8} height={34} fill={`url(#${uid}-gi-metal)`} />
			<rect x={-24} y={-170} width={48} height={132} rx={10} fill="rgba(200,225,240,0.25)" />
			{beads}
			{Array.from({length: caught}, (_, i) => (
				<circle key={i} cx={-12 + 12 * (i % 3) + (i > 2 ? 6 : 0)} cy={-146 + 14 * Math.floor(i / 3) * 2} r={3.4} fill="#3b4350" />
			))}
			<rect x={-24} y={-170} width={48} height={132} rx={10} fill="none" stroke={GLASS} strokeWidth={2.6} />
			<rect x={-18} y={-162} width={5} height={110} rx={2.5} fill="#ffffff" opacity={0.45} />
			<circle cx={0} cy={-36 + release * 26} r={3.2} fill="#ffffff" stroke="#9aa3ab" strokeWidth={1} opacity={1 - release} />
		</g>
	);
};

const RoMembraneIcon = ({uid, t, accent}: R) => {
	const push = Math.sin(t / 12) * 4;
	return (
		<g>
			<ellipse cx={6} cy={3} rx={78} ry={7} fill="rgba(40,36,30,0.18)" />
			<rect x={-60} y={-16} width={10} height={16} fill="#6b737c" />
			<rect x={50} y={-16} width={10} height={16} fill="#6b737c" />
			<rect x={-74} y={-100} width={148} height={84} rx={12} fill="rgba(200,225,240,0.25)" />
			<rect x={-70} y={-92} width={68} height={72} fill={murky} opacity={0.75} />
			<rect x={2} y={-92} width={68} height={72} fill={WATER} />
			<Particles t={t} x0={-62} x1={-10} y0={-84} y1={-28} n={11} seed={21} color="#5b4a33" r={3} />
			{/* water passing through */}
			{Array.from({length: 4}, (_, i) => {
				const ph = ((t / 50 + i / 4) % 1);
				return <circle key={i} cx={-8 + ph * 60} cy={-80 + i * 16} r={3} fill="rgba(70,140,215,0.85)" opacity={Math.sin(ph * Math.PI)} />;
			})}
			{/* membrane */}
			<line x1={0} y1={-96} x2={0} y2={-18} stroke={accent} strokeWidth={5} strokeDasharray="7 4" />
			<rect x={-74} y={-100} width={148} height={84} rx={12} fill="none" stroke={GLASS} strokeWidth={2.6} />
			{/* pressure piston */}
			<g transform={`translate(${push},0)`}>
				<rect x={-68} y={-90} width={8} height={68} rx={3} fill={`url(#${uid}-gi-metal)`} stroke="#6b737c" strokeWidth={1} />
				<line x1={-96} y1={-56} x2={-68} y2={-56} stroke="#6b737c" strokeWidth={6} />
			</g>
		</g>
	);
};

const PlantsIcon = ({uid, t}: R) => {
	const sway = Math.sin(t / 25) * 3;
	const leaf = (x: number, y: number, a: number, sc = 1) => (
		<g transform={`translate(${x},${y}) rotate(${a}) scale(${sc})`}>
			<path d="M 0 0 Q 16 -12 32 0 Q 16 12 0 0 Z" fill={`url(#${uid}-gi-leaf)`} stroke="#2f6b2a" strokeWidth={1} />
			<line x1={2} y1={0} x2={28} y2={0} stroke="#2f6b2a" strokeWidth={0.8} opacity={0.7} />
		</g>
	);
	const up = (t % 60) / 60;
	return (
		<g>
			<Beaker cx={0} baseY={0} w={96} h={66} level={0.82} liquid={WATER}>
				{[-22, -6, 10, 24].map((x, i) => (
					<path key={i} d={`M ${x * 0.3} -60 Q ${x * 0.8} -40 ${x} -10 M ${x * 0.6} -40 Q ${x * 0.6 - 10} -30 ${x * 0.6 - 14} -18`} fill="none" stroke="#e8dcc0" strokeWidth={2.4} strokeLinecap="round" />
				))}
				{[-14, 12].map((x, i) => (
					<circle key={i} cx={x * (1 - up)} cy={-14 - 50 * up} r={3.2} fill="#3b4350" opacity={1 - up * 0.6} />
				))}
			</Beaker>
			<g transform={`rotate(${sway} 0 -58)`}>
				<path d="M 0 -58 Q -4 -110 0 -160" fill="none" stroke="#4d8a38" strokeWidth={5} strokeLinecap="round" />
				<path d="M 0 -96 Q 14 -118 22 -136" fill="none" stroke="#4d8a38" strokeWidth={3.5} strokeLinecap="round" />
				{leaf(0, -84, -150, 1.1)}
				{leaf(0, -104, -30, 1.1)}
				{leaf(0, -130, -160, 0.95)}
				{leaf(22, -136, -50, 0.9)}
				{leaf(0, -158, -95, 0.85)}
			</g>
		</g>
	);
};

const Cuv = ({uid, x, color, alpha}: {uid: string; x: number; color: string; alpha: number}) => (
	<g>
		<rect x={x - 17} y={-96} width={34} height={86} rx={3} fill="rgba(255,255,255,0.45)" />
		<rect x={x - 15} y={-74} width={30} height={62} rx={2} fill={color} opacity={alpha} />
		<rect x={x - 17} y={-96} width={34} height={86} rx={3} fill="none" stroke={GLASS} strokeWidth={2.2} />
		<rect x={x - 12} y={-90} width={5} height={74} rx={2.5} fill="#ffffff" opacity={0.5} />
		<rect x={x - 17} y={-96} width={34} height={86} rx={3} fill={`url(#${uid}-gi-sheen)`} opacity={0.4} />
	</g>
);

const CuvetteIcon = ({uid, t, s}: R) => {
	const col = s.color ?? '#3f5fd0';
	const pulse = 0.8 + 0.2 * Math.sin(t / 8);
	return (
		<g>
			<ellipse cx={6} cy={2} rx={70} ry={6} fill="rgba(40,36,30,0.18)" />
			<rect x={-68} y={-12} width={136} height={12} rx={4} fill={`url(#${uid}-gi-plastic)`} stroke="#9aa3ab" strokeWidth={1.5} />
			<rect x={-68} y={-58} width={18} height={24} rx={4} fill="#5d646c" />
			<circle cx={-50} cy={-46} r={13} fill={`url(#${uid}-gi-glow)`} opacity={pulse} />
			<line x1={-50} y1={-46} x2={-17} y2={-46} stroke="#ffd27a" strokeWidth={6} opacity={0.75} strokeLinecap="round" />
			<line x1={17} y1={-46} x2={50} y2={-46} stroke="#ffd27a" strokeWidth={6} opacity={0.3} strokeLinecap="round" />
			<rect x={50} y={-58} width={18} height={24} rx={4} fill="#5d646c" />
			<Cuv uid={uid} x={0} color={col} alpha={0.75} />
		</g>
	);
};

const CuvetteSeriesIcon = ({uid, s}: R) => {
	const col = s.color ?? '#c2185b';
	return (
		<g>
			<ellipse cx={6} cy={2} rx={68} ry={6} fill="rgba(40,36,30,0.18)" />
			<rect x={-66} y={-12} width={132} height={12} rx={4} fill={`url(#${uid}-gi-plastic)`} stroke="#9aa3ab" strokeWidth={1.5} />
			{[0.2, 0.5, 0.9].map((a, i) => (
				<Cuv key={i} uid={uid} x={-44 + i * 44} color={col} alpha={a} />
			))}
		</g>
	);
};

const HCLamp = ({uid, t, x, label, fs, horizontal = false}: {uid: string; t: number; x: number; label?: string; fs: number; horizontal?: boolean}) => {
	const glow = 0.75 + 0.25 * Math.sin(t / 6);
	if (horizontal) {
		return (
			<g>
				<rect x={x - 26} y={-78} width={46} height={26} rx={13} fill="rgba(215,232,245,0.6)" stroke={GLASS} strokeWidth={2} />
				<rect x={x - 38} y={-76} width={16} height={22} rx={3} fill="#3d434a" />
				<circle cx={x + 8} cy={-65} r={13} fill={`url(#${uid}-gi-glow)`} opacity={glow} />
				<rect x={x + 2} y={-70} width={9} height={10} rx={2} fill="#8a929b" />
				{label && (
					<text x={x - 8} y={-38} textAnchor="middle" fill={TOK.ink} fontSize={fs} fontWeight={800}>
						{label}
					</text>
				)}
			</g>
		);
	}
	return (
		<g>
			<ellipse cx={x + 4} cy={2} rx={26} ry={5} fill="rgba(40,36,30,0.2)" />
			<path d={`M ${x - 18} -34 L ${x - 18} -112 Q ${x - 18} -132 ${x} -132 Q ${x + 18} -132 ${x + 18} -112 L ${x + 18} -34 Z`} fill="rgba(215,232,245,0.55)" stroke={GLASS} strokeWidth={2} />
			<circle cx={x} cy={-104} r={20} fill={`url(#${uid}-gi-glow)`} opacity={glow} />
			<rect x={x - 7} y={-110} width={14} height={16} rx={2} fill="#8a929b" />
			<rect x={x - 1.5} y={-94} width={3} height={58} fill="#8a929b" />
			<rect x={x - 12} y={-122} width={4} height={80} rx={2} fill="#ffffff" opacity={0.5} />
			<rect x={x - 23} y={-36} width={46} height={32} rx={5} fill="#3d434a" />
			<rect x={x - 14} y={-4} width={4} height={4} fill="#8a929b" />
			<rect x={x + 10} y={-4} width={4} height={4} fill="#8a929b" />
			{label && (
				<text x={x} y={-20 + fs * 0.36} textAnchor="middle" fill="#ffffff" fontSize={fs} fontWeight={800}>
					{label}
				</text>
			)}
		</g>
	);
};

const AasFlameIcon = ({uid, t, s, k}: R) => {
	const fs = Math.max(16, 15.5 / k);
	const fl = (i: number) => Math.sin(t / 3.3 + i * 1.7) * 3 + Math.sin(t / 5.1 + i) * 2;
	const flame = `M -40 -46 Q -34 ${-70 + fl(1)} -20 ${-82 + fl(2)} Q -8 ${-94 + fl(3)} 0 ${-104 + fl(4)} Q 8 ${-94 + fl(5)} 20 ${-82 + fl(6)} Q 34 ${-70 + fl(7)} 40 -46 Z`;
	return (
		<g>
			<ellipse cx={6} cy={2} rx={90} ry={6} fill="rgba(40,36,30,0.18)" />
			{/* burner */}
			<rect x={-30} y={-6} width={60} height={6} rx={3} fill={`url(#${uid}-gi-metalv)`} />
			<rect x={-8} y={-38} width={16} height={32} fill={`url(#${uid}-gi-metal)`} />
			<rect x={-44} y={-46} width={88} height={10} rx={3} fill={`url(#${uid}-gi-metal)`} stroke="#6b737c" strokeWidth={1} />
			<path d={flame} fill={`url(#${uid}-gi-flame)`} />
			<path d={`M -30 -46 Q -14 ${-60 + fl(8) * 0.5} 0 ${-66 + fl(9) * 0.5} Q 14 ${-60 + fl(10) * 0.5} 30 -46 Z`} fill="#2a58d0" opacity={0.55} />
			{/* beam: lamp → flame → detector */}
			<line x1={-50} y1={-65} x2={62} y2={-65} stroke="#ffd27a" strokeWidth={4} opacity={0.6} strokeLinecap="round" />
			<HCLamp uid={uid} t={t} x={-70} label={s.label} fs={fs} horizontal />
			<rect x={62} y={-78} width={18} height={26} rx={4} fill="#5d646c" />
		</g>
	);
};

const LampIcon = ({uid, t, s, k}: R) => <HCLamp uid={uid} t={t} x={0} label={s.label} fs={Math.max(17, 15.5 / k)} />;

const IcColumnIcon = ({uid, t, accent}: R) => {
	const run = c01(t / 70);
	const cx = -40;
	// Two bands separating as they move down the column.
	const bandY = (speed: number) => -150 + 110 * c01(run * speed);
	const trace = (() => {
		const pts: string[] = [];
		const N = 40;
		for (let i = 0; i <= N; i++) {
			const u = i / N;
			if (u > run) break;
			const x = -4 + u * 76;
			const y = -44 - 62 * Math.exp(-((u - 0.35) ** 2) / 0.004) - 48 * Math.exp(-((u - 0.72) ** 2) / 0.005);
			pts.push(`${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`);
		}
		return pts.join(' ');
	})();
	return (
		<g>
			<ellipse cx={4} cy={2} rx={76} ry={6} fill="rgba(40,36,30,0.18)" />
			<rect x={cx - 22} y={-6} width={44} height={6} rx={3} fill={`url(#${uid}-gi-metalv)`} />
			<rect x={cx - 3} y={-36} width={6} height={30} fill={`url(#${uid}-gi-metal)`} />
			<rect x={cx - 13} y={-164} width={26} height={130} rx={6} fill="#eee8da" />
			{[1.0, 0.62].map((sp, i) => (
				<g key={i}>
					{Array.from({length: 7}, (_, j) => (
						<circle key={j} cx={cx - 8 + (j % 4) * 5.5} cy={bandY(sp) + (j > 3 ? 5 : 0)} r={2.4} fill={i === 0 ? '#3b4350' : accent} />
					))}
				</g>
			))}
			<rect x={cx - 13} y={-164} width={26} height={130} rx={6} fill="none" stroke={GLASS} strokeWidth={2.4} />
			<rect x={cx - 9} y={-158} width={4} height={116} rx={2} fill="#ffffff" opacity={0.5} />
			{/* chromatogram card */}
			<rect x={-14} y={-150} width={94} height={118} rx={8} fill="#ffffff" stroke="#c9ced3" strokeWidth={1.5} />
			<line x1={-6} y1={-42} x2={74} y2={-42} stroke="#8a9199" strokeWidth={1.6} />
			<line x1={-6} y1={-42} x2={-6} y2={-142} stroke="#8a9199" strokeWidth={1.6} />
			<path d={trace} fill="none" stroke={TOK.ink} strokeWidth={2.6} strokeLinejoin="round" />
			<rect x={-14} y={-32} width={94} height={32} rx={0} fill="none" />
			<line x1={80} y1={-90} x2={96} y2={-90} stroke="none" />
		</g>
	);
};

const PillIcon = ({uid, s}: R) => {
	const c = s.color ?? '#e0553f';
	return (
		<g>
			<ellipse cx={6} cy={2} rx={58} ry={6} fill="rgba(40,36,30,0.18)" />
			<g transform="translate(-14,-30) rotate(-18)">
				<path d="M -40 -14 L 0 -14 L 0 14 L -40 14 A 14 14 0 0 1 -40 -14 Z" fill={c} stroke={shade(c, -0.3)} strokeWidth={1.4} />
				<path d="M 0 -14 L 40 -14 A 14 14 0 0 1 40 14 L 0 14 Z" fill="#f4f1ea" stroke="#b3ada2" strokeWidth={1.4} />
				<rect x={-52} y={-14} width={104} height={28} rx={14} fill={`url(#${uid}-gi-sheen)`} />
			</g>
			<ellipse cx={34} cy={-12} rx={22} ry={9} fill="#f4f1ea" stroke="#b3ada2" strokeWidth={1.4} />
			<path d="M 12 -12 L 12 -8 A 22 9 0 0 0 56 -8 L 56 -12" fill="#ddd8cd" stroke="#b3ada2" strokeWidth={1.2} />
			<line x1={20} y1={-12} x2={48} y2={-12} stroke="#c9c2b5" strokeWidth={1.5} />
		</g>
	);
};

const OilWaterIcon = ({t, k}: R) => {
	const fs = Math.max(15.5, 15.5 / k);
	const x0 = -52, w = 58;
	const oil = 'rgba(240,200,90,0.55)';
	const dots = [
		{x: -40, y: -118, top: true}, {x: -24, y: -104, top: true}, {x: -32, y: -90, top: true},
		{x: -18, y: -126, top: true}, {x: -30, y: -42, top: false}, {x: -16, y: -26, top: false},
	];
	return (
		<g>
			<ellipse cx={-18} cy={2} rx={38} ry={5} fill="rgba(40,36,30,0.18)" />
			<rect x={x0} y={-150} width={w} height={146} rx={8} fill="rgba(200,225,240,0.2)" />
			<rect x={x0 + 2} y={-138} width={w - 4} height={66} fill={oil} />
			<rect x={x0 + 2} y={-72} width={w - 4} height={66} rx={6} fill="rgba(110,165,220,0.45)" />
			<line x1={x0 + 2} x2={x0 + w - 2} y1={-72} y2={-72} stroke="rgba(150,120,40,0.7)" strokeWidth={1.6} />
			{dots.map((d, i) => (
				<circle key={i} cx={d.x + Math.sin(t / 19 + i) * 2} cy={d.y + Math.cos(t / 23 + i) * 2} r={5} fill="#3b3b3b" stroke="#111" strokeWidth={0.8} />
			))}
			<rect x={x0} y={-150} width={w} height={146} rx={8} fill="none" stroke={GLASS} strokeWidth={2.6} />
			<rect x={x0 + 6} y={-144} width={5} height={132} rx={2.5} fill="#ffffff" opacity={0.45} />
			<text x={x0 + w + 12} y={-100} fill={TOK.inkDim} fontSize={fs} fontWeight={700}>
				octanol
			</text>
			<text x={x0 + w + 12} y={-34} fill={TOK.inkDim} fontSize={fs} fontWeight={700}>
				water
			</text>
		</g>
	);
};

const HBondIcon = ({uid, t, s, k}: R) => {
	const fs = Math.max(16, 15.5 / k);
	const bob = Math.sin(t / 18) * 2;
	const dash = (x1: number, y1: number, x2: number, y2: number) => (
		<line x1={x1} y1={y1} x2={x2} y2={y2} stroke={TOK.inkDim} strokeWidth={3} strokeDasharray="5 5" strokeDashoffset={-t * 0.6} strokeLinecap="round" />
	);
	if (s.role === 'acceptor') {
		// O with its two lone pairs; an H from a neighbour points at one of them.
		return (
			<g transform={`translate(0,${bob})`}>
				<ellipse cx={0} cy={-2 - bob} rx={46} ry={6} fill="rgba(40,36,30,0.18)" />
				<line x1={-44} y1={-38} x2={-12} y2={-58} stroke="#6a6a6a" strokeWidth={5} />
				<Sphere gid={uid} name="C" x={-44} y={-36} r={15} />
				<Sphere gid={uid} name="O" x={-8} y={-62} r={21} />
				{[[-14, -94, 0], [20, -84, 50]].map(([x, y, a], i) => (
					<g key={i} transform={`translate(${x},${y}) rotate(${a})`}>
						<circle cx={-4.5} cy={0} r={3.3} fill={TOK.ink} />
						<circle cx={4.5} cy={0} r={3.3} fill={TOK.ink} />
					</g>
				))}
				{dash(28, -90, 46, -102)}
				<Sphere gid={uid} name="H" x={56} y={-108} r={12} opacity={0.8} />
				<text x={-46} y={-78} textAnchor="middle" fill={TOK.inkDim} fontSize={fs} fontWeight={800}>δ−</text>
			</g>
		);
	}
	return (
		<g transform={`translate(0,${bob})`}>
			<ellipse cx={0} cy={-2 - bob} rx={46} ry={6} fill="rgba(40,36,30,0.18)" />
			<line x1={-44} y1={-38} x2={-14} y2={-62} stroke="#6a6a6a" strokeWidth={5} />
			<line x1={-14} y1={-62} x2={20} y2={-62} stroke="#6a6a6a" strokeWidth={5} />
			<Sphere gid={uid} name="C" x={-44} y={-36} r={15} />
			<Sphere gid={uid} name="O" x={-14} y={-62} r={21} />
			<Sphere gid={uid} name="H" x={22} y={-62} r={13} />
			{dash(38, -62, 62, -62)}
			<text x={22} y={-86} textAnchor="middle" fill={TOK.inkDim} fontSize={fs} fontWeight={800}>δ+</text>
		</g>
	);
};

const IonBeakerIcon = ({uid, t, s, k}: R) => {
	const ions = s.ions ?? [{label: 'Ca', color: '#b8bec6', n: 4, ink: TOK.ink}, {label: 'Mg', color: '#d9dde2', n: 3, ink: TOK.ink}, {label: 'Pb', color: '#56606b', n: 1}];
	const all = ions.flatMap((ion, j) => Array.from({length: ion.n ?? 1}, (_, i) => ({ion, j, i})));
	const fs = Math.max(15.5, 15.5 / k);
	const r = 16;
	// Hex-ish slots inside the liquid.
	const slots = [
		[-30, -24], [0, -22], [30, -24], [-15, -50], [15, -50], [-36, -72], [36, -72], [0, -76], [-8, -100],
	];
	return (
		<g>
			<GlossDefs id={`${uid}-ib`} colors={Object.fromEntries(ions.map((ion, j) => [`i${j}`, ion.color]))} />
			<Beaker cx={0} baseY={0} w={112} h={108} level={0.86} liquid={WATER}>
				{all.slice(0, slots.length).map((a, n) => {
					const [x, y] = slots[n];
					return (
						<g key={n} transform={`translate(${x + Math.sin(t / 21 + n) * 1.6},${y + Math.cos(t / 27 + n * 1.3) * 1.6})`}>
							<circle r={r} fill={`url(#${uid}-ib-g-i${a.j})`} stroke={shade(a.ion.color, -0.35)} strokeWidth={1} />
							<text y={fs * 0.36} textAnchor="middle" fill={a.ion.ink ?? '#ffffff'} fontSize={fs} fontWeight={800}>
								{a.ion.label}
							</text>
						</g>
					);
				})}
			</Beaker>
		</g>
	);
};

const EvidenceStackIcon = ({uid, t, accent, k}: R) => {
	const fs = Math.max(16, 15.5 / k);
	return (
		<g>
			<ellipse cx={6} cy={2} rx={54} ry={6} fill="rgba(40,36,30,0.18)" />
			{[0, 1, 2].map((i) => {
				const a = c01((t - i * 14) / 10);
				if (a <= 0) return null;
				const y = -34 - i * 36 - (1 - a) * 24;
				const x = [-6, 6, -2][i];
				return (
					<g key={i} opacity={a}>
						<rect x={x - 48} y={y} width={96} height={32} rx={7} fill={`url(#${uid}-gi-plastic)`} stroke="#9aa3ab" strokeWidth={1.6} />
						<text x={x - 36} y={y + 16 + fs * 0.36} fill={TOK.inkDim} fontSize={fs} fontWeight={800}>
							test {i + 1}
						</text>
						<Mark x={x + 30} y={y + 16} ok size={11} color={accent} />
					</g>
				);
			})}
		</g>
	);
};

const RENDER: Record<string, (r: R) => ReactNode> = {
	testTube: TestTubeIcon,
	balance: BalanceIcon,
	burette: BuretteIcon,
	phMeter: (r) => MeterIcon(r, 'ph'),
	doMeter: (r) => MeterIcon(r, 'do'),
	condProbe: (r) => MeterIcon(r, 'cond'),
	thermometer: ThermometerIcon,
	turbidJar: TurbidJarIcon,
	turbidityMeter: TurbidityMeterIcon,
	petri: PetriIcon,
	bodBottle: BodBottleIcon,
	elementTile: ElementTileIcon,
	leadPipe: LeadPipeIcon,
	groundwater: GroundwaterIcon,
	precipTank: PrecipTankIcon,
	resinBeads: ResinBeadsIcon,
	roMembrane: RoMembraneIcon,
	plants: PlantsIcon,
	cuvette: CuvetteIcon,
	cuvetteSeries: CuvetteSeriesIcon,
	aasFlame: AasFlameIcon,
	lamp: LampIcon,
	icColumn: IcColumnIcon,
	pill: PillIcon,
	oilWater: OilWaterIcon,
	hbond: HBondIcon,
	ionBeaker: IonBeakerIcon,
	evidenceStack: EvidenceStackIcon,
};

/** Some icons are drawn off-centre; shift them so their box is centred. */
const X_SHIFT: Record<string, number> = {oilWater: 26, aasFlame: 14, icColumn: 14, burette: -6, phMeter: 0, doMeter: 0, condProbe: 0};

/**
 * Draw one gallery icon standing at (x, y) with overall `scale`.
 * `id` must be the diagram's defs prefix (GalleryDefs rendered with it);
 * `uid` should be unique per icon instance if the icon has its own defs (ionBeaker).
 */
export const GalleryIcon = ({
	id, uid, spec, x, y, scale = 1, t, accent, opacity = 1,
}: {id: string; uid?: string; spec: IconSpec; x: number; y: number; scale?: number; t: number; accent: string; opacity?: number}) => {
	const render = RENDER[spec.name];
	if (!render) return null;
	const k = scale * (spec.scale ?? 1);
	// Shared gradients use `${id}-gi-…`; ionBeaker's own gloss uses `${uid}-ib-…`.
	const node = render({uid: spec.name === 'ionBeaker' ? uid ?? id : id, t, s: spec, k, accent});
	return (
		<g opacity={opacity} transform={`translate(${x},${y}) scale(${k}) translate(${X_SHIFT[spec.name] ?? 0},0)`}>
			{node}
		</g>
	);
};

/** Nominal box of an icon, including its own extra scale. */
export const iconBox = (spec: IconSpec) => {
	const b = ICON_BOX[spec.name] ?? {w: 120, h: 120};
	const sc = spec.scale ?? 1;
	return {w: b.w * sc, h: b.h * sc};
};
