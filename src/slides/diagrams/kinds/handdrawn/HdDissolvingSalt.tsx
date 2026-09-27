// hdDissolvingSalt — an ionic solid dissolving in water, hand-drawn style.
//
// A NaCl lattice sits on the left; water molecules wander on the right. One
// ion at a time, water molecules cluster on its exposed face, correctly
// oriented (the δ− oxygen end toward Na⁺, the δ+ hydrogen end toward Cl⁻),
// pull it out of the lattice and carry it off as a hydrated ion.
//
// Beat plan (frames @30 fps, relative to `delay`, default 62; each ion takes
// `framesPerIon`, default 40):
//   +0    lattice and water draw on
//   +20   first ion: waters attach (20 f), ion is pulled out (30 f)
//   +…    next ion every `framesPerIon`; orientation notes appear with the
//         first Na⁺ and the first Cl⁻
//   end   caption; hydrated ions and free water keep bobbing
//
// Chemistry checks: Cl⁻ drawn larger than Na⁺ (ionic radii ~181 vs ~102 pm);
// ions alternate in the lattice; water orientation follows the dipole (O δ−,
// H δ+); CPK colours from ELEMENT_COLORS. Four waters per ion is schematic
// (real hydration shells hold about six).

import {useCurrentFrame} from 'remotion';
import {TOK} from '../../../../styles/tokens';
import {ELEMENT_COLORS} from '../../diorama';
import {Hand, HandSvg, PENCIL, hash01, ramp} from './shared';

const ID = 'hdsalt';
const R_NA = 13;
const R_CL = 20;
const LAT = {x0: 76, y0: 128, d: 46};
const DEG = Math.PI / 180;

// dissolution order: exposed right column first, then the next ions it uncovers
const ORDER: {r: number; c: number; face: number}[] = [
	{r: 0, c: 3, face: 0},
	{r: 1, c: 3, face: 0},
	{r: 2, c: 3, face: 0},
	{r: 3, c: 3, face: 0},
	{r: 0, c: 2, face: -90},
	{r: 3, c: 2, face: 90},
];
const DEST = [
	{x: 440, y: 112},
	{x: 612, y: 132},
	{x: 500, y: 238},
	{x: 664, y: 262},
	{x: 420, y: 356},
	{x: 592, y: 372},
];

// free solvent molecules along the right edge, clear of the start grid and of every DEST
const FREE_SPOTS = [
	{x: 742, y: 44},
	{x: 744, y: 158},
	{x: 744, y: 300},
	{x: 738, y: 398},
	{x: 700, y: 452},
];

const isNa = (r: number, c: number) => (r + c) % 2 === 0;
const latPos = (r: number, c: number) => ({x: LAT.x0 + c * LAT.d, y: LAT.y0 + r * LAT.d});
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const ease = (t: number) => t * t * (3 - 2 * t);
const lerpAngle = (a: number, b: number, t: number) => {
	let d = ((b - a + Math.PI) % (2 * Math.PI)) - Math.PI;
	if (d < -Math.PI) d += 2 * Math.PI;
	return a + d * t;
};

/** A water molecule: O at (x,y), both H on the side the bisector angle `phi` points to. */
const Water = ({x, y, phi, o = 1}: {x: number; y: number; phi: number; o?: number}) => {
	const h = [phi - 52 * DEG, phi + 52 * DEG].map((a) => ({x: x + Math.cos(a) * 14, y: y + Math.sin(a) * 14}));
	return (
		<g opacity={o}>
			{h.map((p, i) => (
				<circle key={i} cx={p.x} cy={p.y} r={5.5} fill={ELEMENT_COLORS.H} stroke={PENCIL.ink} strokeWidth={1.8} />
			))}
			<circle cx={x} cy={y} r={9} fill={ELEMENT_COLORS.O} stroke={PENCIL.ink} strokeWidth={2} />
		</g>
	);
};

const Ion = ({x, y, na, o = 1}: {x: number; y: number; na: boolean; o?: number}) => (
	<g opacity={o}>
		<circle cx={x} cy={y} r={na ? R_NA : R_CL} fill={na ? ELEMENT_COLORS.Na : ELEMENT_COLORS.Cl} stroke={PENCIL.ink} strokeWidth={2.4} />
		<text x={x} y={y + 5} textAnchor="middle" fontFamily='"Caveat", cursive' fontWeight={700} fontSize={na ? 15 : 19} fill={PENCIL.ink}>
			{na ? '+' : '−'}
		</text>
	</g>
);

export type HdDissolvingSaltProps = {delay?: number; framesPerIon?: number};

export const HdDissolvingSalt = ({delay = 62, framesPerIon = 40}: HdDissolvingSaltProps) => {
	const f = useCurrentFrame() - delay;
	const draw = ramp(f, 0, 12);
	const ionStart = (k: number) => 20 + k * framesPerIon;

	// water: 4 per dissolving ion (on a jittered grid on the right, nearest ones
	// go first) + free solvent molecules parked clear of the hydrated ions
	const grid = Array.from({length: ORDER.length * 4}, (_, i) => {
		const col = i % 6;
		const row = Math.floor(i / 6);
		return {x: 300 + col * 70 + (hash01(`wx${i}`) - 0.5) * 22, y: 74 + row * 84 + (hash01(`wy${i}`) - 0.5) * 24, phi: hash01(`wp${i}`) * Math.PI * 2};
	});
	const waterStart = [...grid, ...FREE_SPOTS.map((p, i) => ({...p, phi: hash01(`fp${i}`) * Math.PI * 2}))];
	const taken = new Set<number>();
	const assign = ORDER.map(({r, c}) => {
		const p = latPos(r, c);
		const pick = grid
			.map((w, i) => ({i, d: Math.hypot(w.x - p.x, w.y - p.y)}))
			.filter(({i}) => !taken.has(i))
			.sort((a, b) => a.d - b.d)
			.slice(0, 4)
			.map(({i}) => i);
		pick.forEach((i) => taken.add(i));
		return pick;
	});

	const bob = (i: number) => ({dx: Math.sin(f / 38 + i * 1.7) * 7, dy: Math.cos(f / 31 + i * 2.3) * 6});

	// ion states
	const ions = ORDER.map((o, k) => {
		const na = isNa(o.r, o.c);
		const home = latPos(o.r, o.c);
		const t0 = ionStart(k);
		const attach = ease(ramp(f, t0, t0 + 20));
		const pull = ease(ramp(f, t0 + 20, t0 + 50));
		const b = bob(100 + k);
		const x = lerp(home.x, DEST[k].x + b.dx * pull, pull);
		const y = lerp(home.y, DEST[k].y + b.dy * pull, pull);
		return {na, x, y, attach, pull, face: o.face};
	});
	const dissolving = new Set(ORDER.map((o) => `${o.r},${o.c}`));
	const firstNa = ions.findIndex((i) => i.na);
	const firstCl = ions.findIndex((i) => !i.na);
	const endAt = ionStart(ORDER.length - 1) + 56;

	return (
		<HandSvg id={ID}>
			{/* lattice (ions that stay) */}
			<g opacity={draw}>
				{[0, 1, 2, 3].flatMap((r) =>
					[0, 1, 2, 3].map((c) => {
						if (dissolving.has(`${r},${c}`)) return null;
						const p = latPos(r, c);
						return <Ion key={`${r}${c}`} x={p.x} y={p.y} na={isNa(r, c)} />;
					}),
				)}
			</g>
			<Hand x={LAT.x0 + 1.5 * LAT.d} y={LAT.y0 + 4 * LAT.d + 14} size={24} o={draw}>
				NaCl crystal lattice
			</Hand>

			{/* water */}
			{waterStart.map((w, i) => {
				const k = assign.findIndex((a) => a.includes(i));
				const b = bob(i);
				const wander = {x: w.x + b.dx, y: w.y + b.dy, phi: w.phi + f / 70};
				if (k < 0) return <Water key={i} {...wander} o={draw} />;
				const ion = ions[k];
				const slot = assign[k].indexOf(i);
				// on the exposed face while pulling, then spread evenly once free
				const aFace = (ion.face + [-50, -16, 16, 50][slot]) * DEG;
				const aFree = (45 + slot * 90 + ion.face) * DEG;
				const a = lerpAngle(aFace, aFree, ion.pull);
				const dist = ion.na ? 25 : 36;
				const target = {x: ion.x + Math.cos(a) * dist, y: ion.y + Math.sin(a) * dist, phi: ion.na ? a : a + Math.PI};
				const t = ion.attach;
				return (
					<Water
						key={i}
						x={lerp(wander.x, target.x, t)}
						y={lerp(wander.y, target.y, t)}
						phi={lerpAngle(wander.phi, target.phi, t)}
						o={draw}
					/>
				);
			})}

			{/* dissolving ions on top of their waters */}
			{ions.map((ion, k) => (
				<Ion key={k} x={ion.x} y={ion.y} na={ion.na} o={draw} />
			))}

			{/* notes */}
			<g>
				<Ion x={112} y={430} na o={ramp(f, ionStart(firstNa) + 16, ionStart(firstNa) + 24)} />
				<Hand x={134} y={438} size={25} anchor="start" o={ramp(f, ionStart(firstNa) + 16, ionStart(firstNa) + 24)}>
					Na⁺: water's O end (δ−) faces the ion
				</Hand>
				<Ion x={112} y={474} na={false} o={ramp(f, ionStart(firstCl) + 16, ionStart(firstCl) + 24)} />
				<Hand x={140} y={482} size={25} anchor="start" o={ramp(f, ionStart(firstCl) + 16, ionStart(firstCl) + 24)}>
					Cl⁻: water's H ends (δ+) face the ion
				</Hand>
				<Hand x={560} y={452} size={24} o={ramp(f, ionStart(1) + 50, ionStart(1) + 58)}>
					hydrated ions
				</Hand>
			</g>
			<Hand x={380} y={517} size={27} color={TOK.amberInk} o={ramp(f, endAt, endAt + 9)}>
				ion–dipole attractions pull the ions out of the lattice
			</Hand>
		</HandSvg>
	);
};
