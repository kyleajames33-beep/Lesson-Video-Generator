// Scenes 7 to 13: the number that decides (the live k slider and a log-scale bar graph of fissions per generation),
// where neutrons go (escape, capture by uranium-238, fission; a small lump against a larger one), slowing them down
// (fast and slow capture, water's protons, the equal-mass head-on hit on the collisions engine, about eighteen
// collisions), holding k at one (the coded core with its rod-depth slider and a power trace), uncontrolled (a seeded
// chance-engine chain with average k = 2), the painted OPAL pool and the memory card.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading} from '../../math/studio';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {Readout} from '../../physics/atom/universe';
import {NucleonCluster, clusterLayout} from '../../physics/atom/decay';
import {Core, FuelLump, GenBars, GenTree, rodAt} from '../../physics/atom/fission';
import type {BarsG, CoreG} from '../../physics/atom/fission';
import {Disc, headOnAt, headOnRun} from '../../physics/atom/neutron';
import {LPlate, placeOf} from '../../physics/light/plates';
import {runChain} from '../../sims/chain';
import {MemoryCard} from '../../shared/scenes';
import {E_FAST, E_THERM, HEAD, HEAD_SIZE, K101, K_RODS, K_SET, N_COLL, OPAL, cap, cue, dur, gen} from './common';
import {AMBER, FUEL, GREY, INK, Lbl, NAVY, NEUTRON, NUC_RED, Neutron, OPAL_AT, OPAL_PLATE, SLATE, T, WATER, comma, fx} from './parts';

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const pulseOf = (f: number, at: number, d = 30) => (f >= at && f < at + d ? Math.sin(((f - at) / d) * Math.PI) : 0);
const U5 = clusterLayout(92, 143, 9), U8 = clusterLayout(92, 146, 12);

// ---------- 7. the number that decides ----------
const BG: BarsG = {x: 250, y: 300, w: 980, h: 470, logMin: 1, logMax: 5};
const kAt = (f: number, aw: number, st: number, sc: number) => {
	let k = 1.0;
	k = lerp(k, K_SET[0], prog(f, aw, 24));
	k = lerp(k, K_SET[1], prog(f, st, 24));
	return lerp(k, K_SET[2], prog(f, sc, 24));
};
export const S07: React.FC = () => {
	const id = 'multiplication-factor';
	const f = useCurrentFrame();
	const kd = cue(id, 'k, the average number of neutrons from each fission'), aw = cue(id, 'the chain dies away'), st = cue(id, 'the rate stays steady'), cc = cue(id, "That's called critical"), sc = cap(id, cue(id, "That's called supercritical"), 40);
	const k = kAt(f, aw, st, sc);
	const vals = Array.from({length: 10}, (_, i) => gen(k, i + 1));
	const g10 = gen(k, 10);
	const SX = 1380, SW = 420;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<Chip x={96} y={186} at={kd} size={28} w={1728} color={NAVY.ink}>k = the average number of neutrons from each fission that go on to cause a further fission</Chip>
			<FrameSvg>
				<GenBars g={BG} values={vals} fill={NAVY.soft} stroke={NAVY.stroke} ink={INK} yTicks={[10, 100, 1000, 10000, 100000]} tickLabel={v => comma(v)} />
				<line x1={SX} y1={860} x2={SX + SW} y2={860} stroke={INK} strokeWidth={5} strokeLinecap="round" />
				{[0.5, 1, 1.5].map(v => <g key={v}><line x1={SX + ((v - 0.5) / 1) * SW} y1={846} x2={SX + ((v - 0.5) / 1) * SW} y2={874} stroke={INK} strokeWidth={3} /><text x={SX + ((v - 0.5) / 1) * SW} y={910} textAnchor="middle" style={T(26, INK)}>{fx(v, 1)}</text></g>)}
				<circle cx={SX + (k - 0.5) * SW} cy={860} r={18} fill={NAVY.stroke} stroke="#fffdf8" strokeWidth={3} />
			</FrameSvg>
			<Lbl x={BG.x - 10} y={BG.y - 40} at={-30} color={INK} size={28}>fissions per generation (log scale)</Lbl>
			<Lbl x={BG.x + BG.w / 2} y={BG.y + BG.h + 80} at={-30} color={INK} size={28} anchor="middle">generation (1000 fissions in generation 1)</Lbl>
			<Lbl x={SX} y={826} at={-30} color={NAVY.ink} size={26}>k slider</Lbl>
			<Readout x={1380} y={280} label="k" value={fx(k, 2)} color={NAVY.ink} w={200} />
			<Readout x={1600} y={280} label="gen 10" value={comma(g10)} color={NAVY.ink} w={220} />
			<Lbl x={1380} y={450} at={aw + 10} color={NAVY.ink} size={28}>k &lt; 1: subcritical, dies away</Lbl>
			<Lbl x={1380} y={500} at={st + 10} color={NAVY.ink} size={28 + 6 * pulseOf(f, cc, 30)}>k = 1: critical, steady (an average)</Lbl>
			<Lbl x={1380} y={550} at={sc + 10} color={NAVY.ink} size={28}>k &gt; 1: supercritical, grows</Lbl>
			<Lbl x={1380} y={600} at={sc + 20} color={GREY.ink} size={26}>{`gen 10 at k = 1.5: ${comma(gen(1.5, 10))} (≈ 38,000)`}</Lbl>
			<HandTag x={1380} y={690} text="critical = steady, not dangerous" at={cc + 30} size={32} color={NAVY.ink} marks={[{kind: 'circle', cx: 1600, cy: 492, rx: 250, ry: 30}]} />
			<Lbl x={1380} y={760} at={sc + 30} color={GREY.ink} size={26}>{`even k = 1.01: × ${fx(K101, 1)} after 100 generations`}</Lbl>
		</>
	);
};

// ---------- 8. where neutrons go ----------
const LUMP = {cx: 520, cy: 540, r: 280};
const Track: React.FC<{a: readonly [number, number]; b: readonly [number, number]; t: number; color?: string}> = ({a, b, t, color = GREY.stroke}) => (t <= 0.001 ? null : (
	<g>
		<line x1={a[0]} y1={a[1]} x2={lerp(a[0], b[0], t)} y2={lerp(a[1], b[1], t)} stroke={color} strokeWidth={4} strokeDasharray="10 7" />
		<Neutron x={lerp(a[0], b[0], t)} y={lerp(a[1], b[1], t)} r={16} />
	</g>
));
const spokes = (cx: number, cy: number, len: number, n = 8) => Array.from({length: n}, (_, i) => { const a = (i / n) * Math.PI * 2 + 0.3; return [cx + len * Math.cos(a), cy + len * Math.sin(a)] as const; });
export const S08: React.FC = () => {
	const id = 'neutron-losses';
	const f = useCurrentFrame();
	const es = cue(id, 'Some escape through the surface'), ab = cue(id, 'Some are absorbed'), e8 = cue(id, 'uranium two thirty-eight'), or = cue(id, 'Only the rest cause fission'), sl = cue(id, 'In a small lump'), cm = cap(id, cue(id, 'called the critical mass'), 24);
	const fis = prog(f, or + 30, 20);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<FuelLump cx={LUMP.cx} cy={LUMP.cy} r={LUMP.r} fill="#ece9e3" stroke={INK} />
				<NucleonCluster cx={420} cy={700} r={2.6} discs={U8} pFill={NUC_RED} nFill={NEUTRON} letters={false} />
				<NucleonCluster cx={660} cy={420} r={2.6} discs={U5} pFill={NUC_RED} nFill={NEUTRON} letters={false} opacity={1 - fis} />
				{fis > 0.001 ? <g opacity={fis}><circle cx={660} cy={420} r={70} fill={AMBER.soft} opacity={0.7} /><NucleonCluster cx={630} cy={395} r={2.6} discs={clusterLayout(56, 85, 4)} pFill={NUC_RED} nFill={NEUTRON} letters={false} /><NucleonCluster cx={695} cy={450} r={2.6} discs={clusterLayout(36, 56, 5)} pFill={NUC_RED} nFill={NEUTRON} letters={false} /></g> : null}
				<Track a={[460, 480]} b={[150, 360]} t={prog(f, es, 30)} />
				<Track a={[560, 600]} b={[880, 790]} t={prog(f, es + 10, 30)} />
				<Track a={[560, 560]} b={[452, 690]} t={prog(f, ab, 30)} />
				<Track a={[460, 360]} b={[612, 410]} t={prog(f, or, 30) * (1 - prog(f, or + 30, 8))} />
				<rect x={1080} y={200} width={740} height={230} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.22)" strokeWidth={3} />
				<Neutron x={1130} y={300} r={14} label={false} opacity={prog(f, es, 12)} />
				<Neutron x={1130} y={350} r={14} label={false} opacity={prog(f, ab, 12)} />
				<Neutron x={1130} y={400} r={14} label={false} opacity={prog(f, or, 12)} />
				<FuelLump cx={1200} cy={580} r={90} fill="#ece9e3" stroke={INK} seed={3} opacity={prog(f, sl, 14)} />
				{f >= sl ? spokes(1200, 580, 140).map(([x, y], i) => <line key={i} x1={1200} y1={580} x2={lerp(1200, x, prog(f, sl + 10, 30))} y2={lerp(580, y, prog(f, sl + 10, 30))} stroke={GREY.stroke} strokeWidth={4} strokeDasharray="8 6" />) : null}
				<FuelLump cx={1600} cy={580} r={130} fill="#ece9e3" stroke={INK} seed={5} opacity={prog(f, cm, 14)} />
				{f >= cm ? spokes(1600, 580, 95).map(([x, y], i) => <line key={i} x1={1600} y1={580} x2={lerp(1600, x, prog(f, cm + 6, 24))} y2={lerp(580, y, prog(f, cm + 6, 24))} stroke={GREY.stroke} strokeWidth={4} strokeDasharray="8 6" />) : null}
			</FrameSvg>
			<Lbl x={LUMP.cx} y={LUMP.cy - LUMP.r - 20} at={-30} color={INK} size={30} anchor="middle">a lump of uranium fuel (diagram)</Lbl>
			<Lbl x={420} y={790} at={-30} color={INK} size={28} anchor="middle">²³⁸U</Lbl>
			<Lbl x={660} y={515} at={-30} color={INK} size={28} anchor="middle">²³⁵U</Lbl>
			<Lbl x={120} y={320} at={es + 20} color={GREY.ink} size={30}>escape</Lbl>
			<Lbl x={240} y={850} at={e8 + 10} color={GREY.ink} size={30}>absorbed, no fission</Lbl>
			<Lbl x={760} y={330} at={or + 40} color={AMBER.ink} size={30}>fission</Lbl>
			<Lbl x={1110} y={250} at={-30} color={INK} size={30}>where a neutron can go</Lbl>
			<Lbl x={1160} y={310} at={es} color={GREY.ink} size={28}>escapes through the surface</Lbl>
			<Lbl x={1160} y={360} at={ab} color={GREY.ink} size={28}>absorbed by a nucleus that does not split</Lbl>
			<Lbl x={1160} y={410} at={or} color={AMBER.ink} size={28}>causes fission (the rest)</Lbl>
			<Lbl x={1200} y={738} at={sl + 30} color={NAVY.ink} size={30} anchor="middle">small lump: k &lt; 1</Lbl>
			<Lbl x={1600} y={760} at={cm + 20} color={NAVY.ink} size={30} anchor="middle">larger lump: k = 1</Lbl>
			<HandTag x={1080} y={468} text="more surface, more escape" at={sl + 40} size={30} color={GREY.ink} marks={[{kind: 'arrow', from: [1160, 482], to: [1150, 560], bend: 0.2}]} />
			<div style={{position: 'absolute', left: 1080, top: 790, width: 740}}><Row at={cm + 10} size={30} style={{whiteSpace: 'normal'}}><AnswerBox at={cm + 14}>Critical mass: minimum mass of fissile material needed to sustain a chain reaction</AnswerBox></Row></div>
		</>
	);
};

// ---------- 9. slowing them down ----------
const HEAD_ON = headOnRun(1, 1, 3, 8);
const ZIG = Array.from({length: 19}, (_, i) => [200 + i * 44, i % 2 ? 690 : 790 - (i % 4) * 20] as const);
export const S09: React.FC = () => {
	const id = 'moderator';
	const f = useCurrentFrame();
	const ff = cue(id, 'Fission neutrons are fast'), cs = cue(id, 'It captures slow ones far more easily'), mo = cue(id, 'So a reactor uses a moderator'), wm = cue(id, 'about the same mass as a neutron'), eq = cue(id, 'When equal masses meet head on'), en = cue(id, 'handing over its energy'), ae = cue(id, 'After about eighteen collisions'), ns = cap(id, cue(id, 'a neutron is slow'), 24);
	const fast = prog(f, ff, 30), slow = prog(f, cs, 50);
	const t = 8 * prog(f, eq, 70, x => x);
	const h = headOnAt(HEAD_ON, t, 230, 90);
	const zz = prog(f, ae, 40, x => x), seg = zz * (ZIG.length - 1), i0 = Math.min(ZIG.length - 2, Math.floor(seg)), fr = seg - i0;
	const zx = lerp(ZIG[i0][0], ZIG[i0 + 1][0], fr), zy = lerp(ZIG[i0][1], ZIG[i0 + 1][1], fr);
	const nColl = Math.round(seg * (N_COLL / (ZIG.length - 1)));
	const speed = Math.exp(-(seg * (N_COLL / (ZIG.length - 1))) / 2);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<rect x={110} y={200} width={800} height={230} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={3} />
				<NucleonCluster cx={520} cy={330} r={2.6} discs={U5} pFill={NUC_RED} nFill={NEUTRON} letters={false} />
				<Neutron x={lerp(160, 860, fast)} y={262} r={16} streak={60} deg={0} />
				<rect x={1010} y={200} width={800} height={230} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={3} />
				<NucleonCluster cx={1420} cy={320} r={2.6} discs={U5} pFill={NUC_RED} nFill={NEUTRON} letters={false} />
				{slow < 1 ? <Neutron x={lerp(1060, 1380, slow)} y={320} r={16} opacity={1 - prog(f, cs + 46, 6)} /> : null}
				{slow >= 1 ? <circle cx={1420} cy={320} r={58} fill="none" stroke={AMBER.stroke} strokeWidth={5} opacity={1 - prog(f, cs + 60, 30)} /> : null}
				<rect x={110} y={480} width={1000} height={420} rx={18} fill={WATER.fill} stroke={WATER.edge} strokeWidth={3} opacity={prog(f, mo, 14)} />
				{f >= mo ? [[760, 600], [960, 640], [380, 840], [680, 860], [930, 820]].map(([x, y], i) => <Disc key={i} x={x} y={y} r={14} fill={NUC_RED} text="p" opacity={prog(f, wm, 14)} />) : null}
				{f >= eq ? <g><Neutron x={h.x1} y={560} r={22} /><Disc x={h.x2} y={560} r={22} fill={NUC_RED} text="p" /></g> : <g opacity={prog(f, wm, 14)}><Neutron x={230} y={560} r={22} /><Disc x={230 + 3 * 90} y={560} r={22} fill={NUC_RED} text="p" /></g>}
				{zz > 0.001 ? <g><polyline points={ZIG.slice(0, i0 + 1).map(p => p.join(',')).join(' ') + ` ${zx},${zy}`} fill="none" stroke={GREY.stroke} strokeWidth={3} strokeDasharray="7 5" /><Neutron x={zx} y={zy} r={12} label={false} /></g> : null}
				{zz > 0.001 ? <rect x={1160} y={810} width={600 * speed} height={34} fill={GREY.stroke} stroke={INK} strokeWidth={2} /> : null}
			</FrameSvg>
			<Lbl x={130} y={400} at={ff + 20} color={GREY.ink} size={28}>{`fast (≈ ${fx(E_FAST, 0)} MeV): rarely captured`}</Lbl>
			<Lbl x={1030} y={400} at={cs + 20} color={GREY.ink} size={28}>{`slow (≈ ${fx(E_THERM, 2)} eV): captured far more readily`}</Lbl>
			<Lbl x={540} y={260} at={-30} color={INK} size={26}>²³⁵U</Lbl>
			<Lbl x={1440} y={260} at={-30} color={INK} size={26}>²³⁵U</Lbl>
			<Chip x={1150} y={470} at={mo} size={28} w={680} color={INK}>A moderator (water or graphite) slows the fast neutrons to thermal speeds</Chip>
			<Lbl x={130} y={520} at={mo + 10} color={WATER.ink} size={28}>water (moderator)</Lbl>
			<Lbl x={230} y={620} at={wm + 10} color={INK} size={28} anchor="middle">n ≈ 1 u</Lbl>
			<Lbl x={500} y={620} at={wm + 16} color={INK} size={28} anchor="middle">p ≈ 1 u</Lbl>
			<HandTag x={560} y={508} text="equal masses: full hand-over" at={en + 10} size={32} color={GREY.ink} marks={[{kind: 'circle', cx: h.x1, cy: 560, rx: 46, ry: 40}]} />
			<Readout x={1160} y={640} label="collisions" value={zz > 0 ? `${nColl}` : '0'} color={GREY.ink} w={260} />
			<Lbl x={1160} y={890} at={ae} color={GREY.ink} size={26}>neutron speed (relative)</Lbl>
			<Lbl x={1460} y={700} at={ns} color={GREY.ink} size={30}>{`${fx(E_FAST, 0)} MeV → ${fx(E_THERM, 2)} eV`}</Lbl>
			<Lbl x={1460} y={750} at={ns + 6} color={GREY.ink} size={26}>{`about ${fx(N_COLL, 1)} collisions`}</Lbl>
		</>
	);
};

// ---------- 10. holding k at one ----------
export const CORE: CoreG = {x: 250, y: 430, w: 640, h: 380, cols: 6, rows: 4, rods: 5};
const depthAt = (f: number, kf: number, kr: number, rt: number) => lerp(lerp(lerp(0.5, 0.85, prog(f, kf, 30)), 0.25, prog(f, kr, 30)), 0.52, prog(f, rt, 30));
const kOf = (f: number, kf: number, kr: number, rt: number) => (f < kf ? 1.0 : f < kr ? K_RODS[0] : f < rt ? K_RODS[1] : K_RODS[2]);
const PG = {x: 1150, y: 420, w: 660, h: 260};
export const S10: React.FC = () => {
	const id = 'control-rods';
	const f = useCurrentFrame();
	const cr = cue(id, 'With control rods'), kf = cue(id, 'so k falls'), kr = cue(id, 'and k rises'), ho = cue(id, 'hold k at exactly one'), rt = cap(id, cue(id, 'runs at a steady rate'), 30);
	const d = depthAt(f, kf, kr, rt), k = kOf(f, kf, kr, rt);
	const T0 = 0, T1 = dur(id) - 1;
	const pts: string[] = [];
	let P = 0.5;
	for (let t = T0; t <= Math.min(f, T1); t += 4) { P += (kOf(t, kf, kr, rt) - 1) * 0.18; P = Math.max(0.1, Math.min(0.9, P)); pts.push(`${(PG.x + ((t - T0) / (T1 - T0)) * PG.w).toFixed(1)},${(PG.y + PG.h - P * PG.h).toFixed(1)}`); }
	const power = f < kf ? 'steady' : f < kr ? 'falling' : f < rt ? 'rising' : 'steady';
	const absorbed = prog(f, kf + 6, 30);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<Core g={CORE} depth={d} water={WATER.fill} waterEdge={WATER.edge} fuel={FUEL.fill} fuelEdge={FUEL.edge} rod={SLATE.stroke} glow={0.6} />
				{absorbed > 0.001 && absorbed < 1 ? [0, 1, 2, 3].map(i => { const r = rodAt(CORE, i, d); return <Neutron key={i} x={lerp(r.x + 60, r.x, absorbed)} y={lerp(CORE.y + 120 + i * 50, CORE.y + 100 + i * 30, absorbed)} r={10} label={false} />; }) : null}
				<line x1={PG.x} y1={PG.y + PG.h} x2={PG.x + PG.w} y2={PG.y + PG.h} stroke={INK} strokeWidth={4} />
				<line x1={PG.x} y1={PG.y + PG.h} x2={PG.x} y2={PG.y - 10} stroke={INK} strokeWidth={4} />
				<polyline points={pts.join(' ')} fill="none" stroke={AMBER.stroke} strokeWidth={6} strokeLinejoin="round" />
			</FrameSvg>
			<Lbl x={CORE.x - 30} y={CORE.y + CORE.h + 80} at={-30} color={WATER.ink} size={26}>core: fuel in water (diagram)</Lbl>
			<Lbl x={PG.x} y={PG.y - 30} at={-30} color={INK} size={28}>power</Lbl>
			<Lbl x={PG.x + PG.w} y={PG.y + PG.h + 40} at={-30} color={INK} size={28} anchor="end">time</Lbl>
			<Readout x={1150} y={200} label="k" value={`${fx(k, 2)}${f >= kf && f < kr ? ' ↓' : f >= kr && f < rt ? ' ↑' : ''}`} color={NAVY.ink} w={300} />
			<Readout x={1480} y={200} label="power" value={power} color={AMBER.ink} w={330} />
			<Chip x={96} y={190} at={cr} size={28} color={INK}>Control rods (boron or cadmium) absorb surplus neutrons</Chip>
			<HandTag x={920} y={330} text="rods absorb" at={kf + 20} size={34} color={SLATE.ink} />
			<Lbl x={1150} y={760} at={kr + 20} color={GREY.ink} size={26}>k just above 1, briefly: power rises, still controlled</Lbl>
			<div style={{position: 'absolute', left: 1150, top: 800}}><Row at={rt} size={44}><AnswerBox at={rt + 4}>controlled: k held at 1</AnswerBox></Row></div>
			<HandTag x={0} y={0} at={rt + 12} color={SLATE.ink} marks={[{kind: 'brace', x: 220, y1: CORE.y - 40, y2: rodAt(CORE, 0, 0.52).tip, facing: 'left'}]} />
			<Lbl x={96} y={330} at={ho} color={SLATE.ink} size={26}>rod depth</Lbl>
		</>
	);
};

// ---------- 11. uncontrolled ----------
const CHAIN = runChain({seed: 11, generations: 6, released: 2.5, chance: 0.8});
export const S11: React.FC = () => {
	const id = 'uncontrolled';
	const f = useCurrentFrame();
	const mg = cue(id, 'multiplies every generation'), fl = cue(id, 'far less than a millionth of a second'), fs = cue(id, 'in a fraction of a second'), ex = cap(id, cue(id, 'makes its explosion'), 30);
	const upTo = 1 + 5 * prog(f, mg, 90, x => x);
	const flash = prog(f, fs, 16) * (1 - 0.6 * prog(f, fs + 20, 30));
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				{flash > 0.001 ? <rect x={150} y={230} width={1120} height={540} rx={30} fill={AMBER.soft} opacity={flash} /> : null}
				<GenTree nodes={CHAIN.tree} x0={180} x1={1240} y0={270} dy={96} r={13} upTo={upTo} fill={AMBER.soft} stroke={INK} link={GREY.stroke} burst={flash} />
			</FrameSvg>
			{CHAIN.events.map((n, i) => <Lbl key={i} x={1290} y={280 + i * 96} at={mg + i * 15} color={NAVY.ink} size={26}>{`gen ${i + 1}: ${n}`}</Lbl>)}
			<Readout x={1480} y={220} label="k (average)" value={fx(CHAIN.k[0], 1)} color={NAVY.ink} w={300} />
			<Lbl x={1480} y={370} at={-30} color={GREY.ink} size={26}>model: chance of each neutron</Lbl>
			<Lbl x={1480} y={404} at={-30} color={GREY.ink} size={26}>causing a fission; no rods, no water</Lbl>
			<Chip x={1480} y={470} at={fl} size={30} color={INK}>each generation ≪ 10⁻⁶ s</Chip>
			<Lbl x={1480} y={600} at={fs + 10} color={AMBER.ink} size={28}>energy released in</Lbl>
			<Lbl x={1480} y={640} at={fs + 14} color={AMBER.ink} size={28}>a fraction of a second</Lbl>
			<div style={{position: 'absolute', left: 96, top: 790, display: 'flex', flexDirection: 'column', gap: 10}}>
				<Row at={ex} size={32}><AnswerBox at={ex + 4}>controlled: k held at 1 (just above 1, briefly, to raise power)</AnswerBox></Row>
				<Row at={ex + 8} size={32}><AnswerBox at={ex + 12}>uncontrolled: k well above 1, unchecked growth (a weapon&apos;s explosion)</AnswerBox></Row>
			</div>
			<HandTag x={1300} y={900} text="k > 1 alone ≠ explosion" at={ex + 18} size={34} color={SLATE.ink} marks={[{kind: 'underline', x1: 520, x2: 700, y: 905}]} />
		</>
	);
};

// ---------- 12. a reactor near Sydney ----------
const OP = {x: 140, y: 200, w: 600};
export const S12: React.FC = () => {
	const id = 'opal';
	const f = useCurrentFrame();
	const lh = cue(id, 'OPAL, at Lucas Heights'), td = cue(id, 'about thirteen metres deep'), fh = cue(id, 'Five hafnium control rods'), tw = cue(id, 'twenty megawatts'), oe = cue(id, "OPAL doesn't make electricity"), sc = cap(id, cue(id, 'medical isotopes for hospital scans'), 24);
	const pl = placeOf(OPAL_PLATE, OP);
	const [cx, cy] = pl.at(OPAL_AT.core[0], OPAL_AT.core[1]);
	const top = pl.at(1100, OPAL_AT.surface)[1], bot = pl.at(1100, OPAL_AT.floor)[1];
	const rods = prog(f, fh, 20);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<LPlate spec={OPAL_PLATE} p={OP} />
				{rods > 0.001 ? Array.from({length: OPAL.rods}, (_, i) => <rect key={i} x={cx - 50 + i * 25 - 5} y={cy - 110} width={10} height={90 * rods} rx={3} fill={SLATE.stroke} stroke="#20262c" strokeWidth={1.5} />) : null}
				{f >= td ? <g opacity={prog(f, td, 14)}><line x1={OP.x + OP.w + 30} y1={top} x2={OP.x + OP.w + 30} y2={bot} stroke={INK} strokeWidth={4} /><line x1={OP.x + OP.w + 16} y1={top} x2={OP.x + OP.w + 44} y2={top} stroke={INK} strokeWidth={4} /><line x1={OP.x + OP.w + 16} y1={bot} x2={OP.x + OP.w + 44} y2={bot} stroke={INK} strokeWidth={4} /></g> : null}
			</FrameSvg>
			<Lbl x={OP.x} y={935} at={lh} color={GREY.ink} size={26}>OPAL, Lucas Heights, NSW (ANSTO): illustration</Lbl>
			<Lbl x={OP.x + OP.w + 60} y={(top + bot) / 2} at={td + 6} color={INK} size={34}>{`≈ ${fx(OPAL.depth, 0)} m`}</Lbl>
			<Lbl x={960} y={250} at={td + 16} color={WATER.ink} size={30}>light water: moderator and coolant</Lbl>
			<Readout x={960} y={320} label="k" value="1" color={NAVY.ink} w={180} />
			<Lbl x={1170} y={360} at={fh + 10} color={SLATE.ink} size={30}>{`${OPAL.rods} hafnium control rods`}</Lbl>
			<Lbl x={1170} y={400} at={tw} color={AMBER.ink} size={30}>{`${OPAL.mw} MW (thermal)`}</Lbl>
			<CrossedChip x={960} y={480} at={oe} crossAt={oe + 14} size={30} caption="no turbine">OPAL makes electricity</CrossedChip>
			<Lbl x={960} y={640} at={oe + 20} color={INK} size={28}>power reactor: heat → steam → turbine</Lbl>
			<Lbl x={960} y={680} at={oe + 26} color={INK} size={28}>OPAL: research reactor (isotopes, neutron beams)</Lbl>
			<Chip x={960} y={740} at={sc} size={30} color={INK}>molybdenum-99 → technetium-99m for medical scans</Chip>
			<HandTag x={960} y={860} text="neutrons for medicine" at={sc + 10} size={36} color={NAVY.ink} marks={[{kind: 'circle', cx, cy, rx: 90, ry: 50}]} />
		</>
	);
};

// ---------- 13. a way to remember ----------
const CORE13: CoreG = {x: 220, y: 400, w: 440, h: 300, cols: 4, rows: 3, rods: 4};
export const S13: React.FC = () => {
	const id = 'memory-aid';
	const f = useCurrentFrame();
	const st = cue(id, 'Slow them'), cs = cue(id, 'catch the spares'), ko = cap(id, cue(id, 'keep k at one'), 8);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg><Core g={CORE13} depth={0.52} water={WATER.fill} waterEdge={WATER.edge} fuel={FUEL.fill} fuelEdge={FUEL.edge} rod={SLATE.stroke} glow={0.6} waterPulse={pulseOf(f, st, 30)} rodPulse={pulseOf(f, cs, 30)} /></FrameSvg>
			<Readout x={220} y={760} label="k" value="1" color={NAVY.ink} w={180} size={52 + 10 * pulseOf(f, ko, 30)} />
			<Lbl x={440} y={800} at={st} color={WATER.ink} size={28}>water slows</Lbl>
			<Lbl x={440} y={840} at={cs} color={SLATE.ink} size={28}>rods catch the spares</Lbl>
			<div style={{position: 'absolute', left: 820, top: 330, width: 1000}}><MemoryCard at={st} main={<>Slow them, catch the spares, keep k at one.</>} /></div>
			<Lbl x={820} y={260} at={-30} color={GREY.ink} size={28}>the core (diagram)</Lbl>
			<HandTag x={0} y={0} at={ko + 4} color={NAVY.ink} marks={[{kind: 'circle', cx: 310, cy: 800, rx: 110, ry: 56}]} />
		</>
	);
};
