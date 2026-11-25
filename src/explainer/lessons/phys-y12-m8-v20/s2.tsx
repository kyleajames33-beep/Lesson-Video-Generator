// Scenes 8 to 14: the quark model (two charges fit both nucleons; confinement), the same test on an electron (two
// columns), a track that bent the wrong way (the painted cloud chamber beside a coded track chamber; the positron's
// track is two joined magnetic runs on the field motion engine, slower and tighter above the lead plate), heavier
// cousins (discovery cards), the particle no one could see (the beta energy spread, the painted reactor pool, the
// detector tank), two families (the classification tree) and the memory card.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Mark, prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading} from '../../math/studio';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {Bars, CrossGrid, QBag, QDot, SchemCard, TreeLink, TreeNode} from '../../physics/atom/particles';
import {Anti} from '../../physics/atom/universe';
import {NucleonCluster, clusterLayout} from '../../physics/atom/decay';
import {LPlate, placeOf} from '../../physics/light/plates';
import {MemoryCard} from '../../shared/scenes';
import {CARD, CARD_SHADOW} from '../../shared/tokens';
import {FONT_DISPLAY} from '../../kit';
import {runMotion, stateAt, trailTo} from '../../sims/field-motion';
import type {MotionPath} from '../../sims/field-motion';
import {HEAD, HEAD_SIZE, MU_LIFE, MU_RATIO, Q_D, Q_N, Q_P, Q_U, cap, cue} from './common';
import {AMBER, Arrow, CARD_AT, CLOUD, CLOUD_AT, DOWN, GREEN_C, GREY, INK, LEP, Lbl, NAVY, NEUTRON, NUC_RED, NU, OPAL_PLATE, ROSE, SLATE, TestCard, UP, fr3, fx} from './parts';
import {OPAL_AT} from '../phys-y12-m8-v18/parts';

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

// ---------- 8. the quark model ----------
const TONES_VIOLET = '#7d62b3';
const BP = {x: 290, y: 470, r: 110}, BN = {x: 290, y: 770, r: 110};
const Trio: React.FC<{c: {x: number; y: number}; q: readonly ('u' | 'd')[]; o: number}> = ({c, q, o}) => (
	<g opacity={o}>{q.map((k, i) => <QDot key={i} x={c.x + [-44, 44, 0][i]} y={c.y + [28, 28, -46][i]} r={32} label={k} tone={k === 'u' ? UP : DOWN} />)}</g>
);
export const S08: React.FC = () => {
	const id = 'quark-charges';
	const f = useCurrentFrame();
	const uq = cue(id, 'The up quark has a charge'), dq = cue(id, 'minus one third'), pq = cue(id, 'A proton is up, up, down'), p1 = cue(id, 'is plus one'), nq = cue(id, 'A neutron is up, down, down'), z0 = cue(id, 'which gives zero'), rs = cue(id, 'fitted to one result'), pa = cap(id, cue(id, 'Pull them apart'), 70), ni = cap(id, cue(id, 'makes new quarks instead'), 20);
	const pull = prog(f, pa, 40), snap = prog(f, Math.max(pa + 40, ni - 10), 16);
	const L0 = 1380, R0 = 1500;
	const lx = lerp(L0, 1240, pull), rx = lerp(R0, 1700, pull);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<TestCard x={CARD_AT.x} y={CARD_AT.y} sc={1} pat={1} />
			<Lbl x={96} y={196} at={4} color={INK} size={30}>1964: Gell-Mann and Zweig proposed quarks</Lbl>
			<Chip x={96} y={236} at={uq} size={34} color={UP.ink} border={UP.stroke}>{`u: ${fr3(Q_U)}e`}</Chip>
			<Chip x={300} y={236} at={dq} size={34} color={DOWN.ink} border={DOWN.stroke}>{`d: ${fr3(Q_D)}e`}</Chip>
			<FrameSvg>
				<QBag x={BP.x} y={BP.y} r={BP.r} />
				<QBag x={BN.x} y={BN.y} r={BN.r} />
				<Trio c={BP} q={['u', 'u', 'd']} o={prog(f, pq, 16)} />
				<Trio c={BN} q={['u', 'd', 'd']} o={prog(f, nq, 16)} />
				{[BP, BN].map((c, k) => <text key={k} x={c.x} y={c.y + 30} textAnchor="middle" opacity={1 - prog(f, k ? nq : pq, 10)} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 80, fill: '#8a8378'}}>?</text>)}
				{f >= pa - 10 ? <g opacity={prog(f, pa - 10, 12)}>
					<path d={`M${lx},780 C${lerp(lx, rx, 0.3)},${760 - 30 * pull} ${lerp(lx, rx, 0.7)},${800 + 30 * pull} ${rx},780`} fill="none" stroke={TONES_VIOLET} strokeWidth={8 - 4 * pull} opacity={1 - snap} strokeDasharray="10 6" />
					<QDot x={lx} y={780} r={30} label="u" tone={UP} />
					<QDot x={rx} y={780} r={30} label="d̄" tone={DOWN} anti />
					<g opacity={snap}><QDot x={lx + 90} y={780} r={30} label="d̄" tone={DOWN} anti /><QDot x={rx - 90} y={780} r={30} label="d" tone={DOWN} /></g>
				</g> : null}
			</FrameSvg>
			<Lbl x={BP.x} y={BP.y + BP.r + 40} at={-30} color={INK} size={28} anchor="middle">proton (model)</Lbl>
			<Lbl x={BN.x} y={BN.y + BN.r + 40} at={-30} color={INK} size={28} anchor="middle">neutron (model)</Lbl>
			<div style={{position: 'absolute', left: 470, top: 420}}><Row at={p1} size={52}><AnswerBox at={p1 + 4}>{`${fr3(Q_U)} + ${fr3(Q_U).slice(1)} − ${fr3(-Q_D).slice(1)} = ${fr3(Q_P)}`}</AnswerBox></Row></div>
			<Lbl x={470} y={540} at={-30} color={INK} size={30}>proton: +1 (measured)</Lbl>
			<Lbl x={800} y={540} at={p1 + 10} color={INK} size={30}>✓ matches</Lbl>
			<div style={{position: 'absolute', left: 470, top: 720}}><Row at={z0} size={52}><AnswerBox at={z0 + 4}>{`${fr3(Q_U)} − ${fr3(-Q_D).slice(1)} − ${fr3(-Q_D).slice(1)} = ${fr3(Q_N)}`}</AnswerBox></Row></div>
			<Lbl x={470} y={840} at={-30} color={INK} size={30}>neutron: 0 (measured)</Lbl>
			<Lbl x={800} y={840} at={z0 + 10} color={INK} size={30}>✓ matches</Lbl>
			<Lbl x={470} y={460} at={-30} out={p1} color={GREY.ink} size={44}>charge from parts = ?</Lbl>
			<Lbl x={470} y={760} at={-30} out={z0} color={GREY.ink} size={44}>charge from parts = ?</Lbl>
			<HandTag x={96} y={330} at={z0 + 20} size={30} color={UP.ink} marks={[{kind: 'circle', cx: 175, cy: 263, rx: 98, ry: 40}, {kind: 'circle', cx: 380, cy: 263, rx: 98, ry: 40}]} />
			<HandTag x={1050} y={480} text="same two values fit both:" at={rs} size={34} color={INK} />
			<HandTag x={1050} y={530} text="a constraint, not a fit" at={rs + 14} size={34} color={INK} />
			<Lbl x={1150} y={680} at={pa} color={INK} size={28}>pull two quarks apart...</Lbl>
			<Lbl x={1150} y={880} at={ni + 10} color={INK} size={28}>confinement: quarks are never seen alone</Lbl>
		</>
	);
};

// ---------- 9. the same test on an electron ----------
const ColHead: React.FC<{x: number; title: string; children: React.ReactNode}> = ({x, title, children}) => (
	<div style={{position: 'absolute', left: x, top: 250, width: 600}}>
		<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 44, color: INK, textAlign: 'center'}}>{title}</div>
		{children}
	</div>
);
const RowBox: React.FC<{label: string; ticks: readonly string[]; o?: number}> = ({label, ticks, o = 1}) => (
	<div style={{display: 'flex', alignItems: 'center', marginTop: 18, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 34, color: INK}}>
		<span style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 44, height: 44, border: `4px solid ${INK}`, borderRadius: 6, marginRight: 14, color: GREEN_C.ink, background: CARD}}>{ticks.length && o > 0.5 ? '✓' : ''}</span>
		{label}
		<span style={{marginLeft: 14, color: GREEN_C.ink, fontSize: 28, opacity: o}}>{ticks.join(', ')}</span>
	</div>
);
export const S09: React.FC = () => {
	const id = 'electron-contrast';
	const f = useCurrentFrame();
	const fs = cue(id, 'Fire the same kind of probe'), ns = cue(id, 'shows no structure at all'), pt = cue(id, 'It still behaves like a point'), wd = cue(id, 'which do'), dn = cap(id, cue(id, "which don't"), 20);
	const probe = prog(f, fs, 40);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<div style={{position: 'absolute', left: 200, top: 190, width: 1520, height: 700, background: CARD, border: `4px solid ${INK}`, borderRadius: 22, boxShadow: CARD_SHADOW}} />
			<div style={{position: 'absolute', left: 958, top: 210, width: 4, height: 660, background: 'rgba(60,45,20,0.25)'}} />
			<Lbl x={230} y={232} at={-30} color={INK} size={30}>Fundamental? → no parts, no size</Lbl>
			<ColHead x={260} title="proton">
				<div style={{height: 210}} />
				<RowBox label="parts inside?" ticks={['scattering', 'patterns']} />
				<RowBox label="size and shape?" ticks={['≈ 1.7 fm across']} />
			</ColHead>
			<ColHead x={1060} title="electron">
				<div style={{height: 210}} />
				<RowBox label="parts inside?" ticks={[]} />
				<RowBox label="size and shape?" ticks={[]} />
			</ColHead>
			<FrameSvg>
				<QBag x={560} y={420} r={84} fill="rgba(200,68,58,0.18)"><circle cx={530} cy={440} r={10} fill={NUC_RED} stroke={INK} strokeWidth={2} /><circle cx={590} cy={440} r={10} fill={NUC_RED} stroke={INK} strokeWidth={2} /><circle cx={560} cy={390} r={10} fill={NUC_RED} stroke={INK} strokeWidth={2} /></QBag>
				<circle cx={1360} cy={420} r={16} fill={LEP.stroke} stroke="#fffdf8" strokeWidth={3} />
				{probe > 0.001 ? <g opacity={Math.min(1, probe * 3)}><circle cx={lerp(1110, 1320, probe)} cy={420} r={10} fill={NAVY.stroke} /><line x1={1110} y1={420} x2={lerp(1110, 1310, probe)} y2={420} stroke={NAVY.stroke} strokeWidth={4} strokeDasharray="10 7" /></g> : null}
				{f >= ns ? <circle cx={1360} cy={420} r={60} fill="none" stroke={NAVY.stroke} strokeWidth={3} strokeDasharray="6 6" opacity={prog(f, ns, 14)} /> : null}
			</FrameSvg>
			<Lbl x={1110} y={370} at={fs} color={NAVY.ink} size={26}>same probe</Lbl>
			<Lbl x={1440} y={430} at={ns + 10} color={NAVY.ink} size={28}>no structure seen</Lbl>
			<Lbl x={1100} y={760} at={pt} color={NAVY.ink} size={30}>point-like below 10⁻¹⁸ m</Lbl>
			<div style={{position: 'absolute', left: 300, top: 790}}><Row at={wd} size={44}><AnswerBox at={wd + 4}>composite</AnswerBox></Row></div>
			<div style={{position: 'absolute', left: 1060, top: 790}}><Row at={dn} size={40}><AnswerBox at={dn + 4}>fundamental (as far as we know)</AnswerBox></Row></div>
			<HandTag x={760} y={940} text="same test, different answer" at={dn + 14} size={34} color={NAVY.ink} />
		</>
	);
};

// ---------- 10. a track that bent the wrong way ----------
const CHB = {x: 640, y: 200, w: 760, h: 660};
const PLATE_Y = 330, PLATE_H = 18;
const sx10 = (x: number) => CHB.x + x, sy10 = (y: number) => CHB.y + CHB.h - y;
/** Below the plate: fast, gentle curve (radius about 900 px). Above it: speed cut to 0.46, so radius about 414 px.
 *  B into the page (b < 0) bends a positive charge moving up towards the left. */
const V0 = 204, R1 = 900;
const TRACK1 = runMotion({field: {kind: 'magnetic', qOverM: 1, b: -V0 / R1}, start: {x: 560, y: 0, vx: -40, vy: 200}, duration: 3, steps: 1200, stopWhen: s => s.y >= PLATE_Y - PLATE_H / 2});
const END1 = stateAt(TRACK1, TRACK1.duration);
const TRACK2 = runMotion({field: {kind: 'magnetic', qOverM: 1, b: -V0 / R1}, start: {x: END1.x, y: PLATE_Y + PLATE_H / 2, vx: END1.vx * 0.46, vy: END1.vy * 0.46}, duration: 9, steps: 2400, stopWhen: s => s.vy < -30 || s.x < 30});
const trackPath = (p: MotionPath, t: number) => trailTo(p, t).map(([x, y], i) => `${i ? 'L' : 'M'}${sx10(x).toFixed(1)},${sy10(y).toFixed(1)}`).join(' ');
const MID2 = stateAt(TRACK2, TRACK2.duration * 0.45);
export const S10: React.FC = () => {
	const id = 'positron-track';
	const f = useCurrentFrame();
	const td = cue(id, 'a trail of droplets'), lp = cue(id, 'A lead plate across the middle'), tr = cue(id, 'which way it was travelling'), pc = cue(id, 'the way it bent meant positive charge'), el = cue(id, "the trail looked like an electron's"), pn = cap(id, cue(id, 'antimatter partner'), 16);
	const d1 = prog(f, td, 50, t => t), d2 = prog(f, lp + 20, 50, t => t);
	const sp = Math.hypot(MID2.vx, MID2.vy), nx = -MID2.vy / sp, ny = MID2.vx / sp;
	const fxs = sx10(MID2.x), fys = sy10(MID2.y);
	const cl = placeOf(CLOUD, {x: 130, y: 300, w: 300});
	const [gx, gy] = cl.at(CLOUD_AT.glass[0], CLOUD_AT.glass[1]);
	const e1 = stateAt(TRACK1, TRACK1.duration * 0.55);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<LPlate spec={CLOUD} p={{x: 130, y: 300, w: 300}} />
				<rect x={CHB.x} y={CHB.y} width={CHB.w} height={CHB.h} rx={16} fill="#f3f1ec" stroke={INK} strokeWidth={4} />
				<CrossGrid x={CHB.x} y={CHB.y} w={CHB.w} h={CHB.h} gap={76} />
				<rect x={CHB.x} y={sy10(PLATE_Y) - PLATE_H / 2} width={CHB.w} height={PLATE_H} fill="#8a8f96" stroke={INK} strokeWidth={2} opacity={prog(f, lp, 14)} />
				{d1 > 0.001 ? <path d={trackPath(TRACK1, TRACK1.duration * d1)} fill="none" stroke={INK} strokeWidth={6} strokeLinecap="round" strokeDasharray="1 11" /> : null}
				{d2 > 0.001 ? <path d={trackPath(TRACK2, TRACK2.duration * d2)} fill="none" stroke={INK} strokeWidth={6} strokeLinecap="round" strokeDasharray="1 11" /> : null}
				{f >= tr ? <Arrow x0={sx10(e1.x) + 30} y0={sy10(e1.y) + 40} x1={sx10(e1.x) + 30 + e1.vx * 0.35} y1={sy10(e1.y) + 40 - e1.vy * 0.35} color={ROSE.stroke} width={6} opacity={prog(f, tr, 12)} /> : null}
				{f >= pc ? <Arrow x0={fxs} y0={fys} x1={fxs + nx * 90} y1={fys - ny * 90} color={AMBER.stroke} width={6} opacity={prog(f, pc, 12)} /> : null}
				<g opacity={prog(f, el, 16)}>
					<rect x={1440} y={560} width={380} height={230} rx={14} fill="#fffdf8" stroke="rgba(60,45,20,0.3)" strokeWidth={3} />
					<line x1={1480} y1={630} x2={1560} y2={630} stroke={INK} strokeWidth={14} strokeLinecap="round" />
					<line x1={1480} y1={730} x2={1780} y2={730} stroke={INK} strokeWidth={4} strokeLinecap="round" strokeDasharray="1 9" />
				</g>
				{f >= el ? <Mark x={1640} y={630} at={el + 16} kind="cross" color={SLATE.stroke} size={36} /> : null}
				{f >= el ? <Mark x={1800} y={700} at={el + 26} kind="tick" color={INK} size={32} /> : null}
				{f >= pn ? <Anti x={1520} y={880} r={30} color={ROSE.stroke} text="e⁺" opacity={prog(f, pn, 12)} /> : null}
			</FrameSvg>
			<HandTag x={150} y={260} at={4} size={30} color={GREY.ink} marks={[{kind: 'arrow', from: [gx + 40, gy - 20], to: [CHB.x - 10, CHB.y + 30], bend: -0.2}]} />
			<Lbl x={130} y={760} at={-30} color={GREY.ink} size={26}>cloud chamber (illustration)</Lbl>
			<Lbl x={CHB.x + 16} y={CHB.y + 36} at={-30} color={NAVY.ink} size={28}>B into page</Lbl>
			<Lbl x={CHB.x + CHB.w - 16} y={CHB.y + CHB.h - 22} at={-30} color={GREY.ink} size={26} anchor="end">schematic</Lbl>
			<Lbl x={CHB.x + 20} y={sy10(PLATE_Y) - 26} at={lp + 6} color={INK} size={28}>lead plate</Lbl>
			<Lbl x={1440} y={250} at={lp + 30} color={INK} size={30}>slower → smaller r (r = mv/qB)</Lbl>
			<HandTag x={1440} y={330} text="slowed by the lead: so it went up" at={tr + 10} size={30} color={ROSE.ink} />
			<Chip x={1440} y={400} at={pc + 10} size={30} color={INK}>bends like a positive charge</Chip>
			<Lbl x={1480} y={600} at={el + 4} color={INK} size={26}>proton-like: short, thick</Lbl>
			<Lbl x={1480} y={700} at={el + 4} color={INK} size={26}>electron-like: long, thin</Lbl>
			<div style={{position: 'absolute', left: 1570, top: 850}}><Row at={pn} size={38}><AnswerBox at={pn + 4}>e⁺ (positron), 1932</AnswerBox></Row></div>
		</>
	);
};

// ---------- 11. heavier cousins ----------
const CardBox: React.FC<{x: number; at: number; title: string; lines: readonly string[]; children?: React.ReactNode}> = ({x, at, title, lines, children}) => {
	const o = prog(useCurrentFrame(), at, 16);
	if (o <= 0.001) return <div style={{position: 'absolute', left: x, top: 210, width: 420, height: 560, border: '3px dashed rgba(60,45,20,0.35)', borderRadius: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 90, color: '#8a8378'}}>?</div>;
	return (
		<div style={{position: 'absolute', left: x, top: 210, width: 420, height: 560, opacity: o, background: CARD, border: `3px solid rgba(60,45,20,0.3)`, borderRadius: 18, boxShadow: CARD_SHADOW, padding: '16px 22px'}}>
			<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 38, color: INK}}>{title}</div>
			<div style={{height: 230}}>{children}</div>
			{lines.map((l, i) => <div key={i} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 28, color: INK, lineHeight: 1.22, marginTop: 6}}>{l}</div>)}
			<div style={{position: 'absolute', right: 18, bottom: 10, fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 26, color: GREY.ink}}>schematic</div>
		</div>
	);
};
const Sketch: React.FC<{d: string; w?: number}> = ({d, w = 5}) => (
	<svg width={376} height={220} viewBox="0 0 376 220" style={{marginTop: 8}}>
		<rect x={2} y={2} width={372} height={216} rx={12} fill="#f3f1ec" stroke="rgba(60,45,20,0.25)" strokeWidth={2} />
		<path d={d} fill="none" stroke={INK} strokeWidth={w} strokeLinecap="round" strokeDasharray="1 10" />
	</svg>
);
const FAM11 = Array.from({length: 26}, (_, i) => [600 + (i % 13) * 96, 860 + Math.floor(i / 13) * 44] as const);
export const S11: React.FC = () => {
	const id = 'muon-pion';
	const f = useCurrentFrame();
	const ms = cue(id, 'More surprises followed'), th = cue(id, 'about two hundred times heavier'), cp = cue(id, 'caught the pion'), bh = cap(id, cue(id, 'by the hundred'), 20);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<LPlate spec={CLOUD} p={{x: 96, y: 300, w: 300}} />
				{f >= bh ? <g opacity={prog(f, bh, 16)}>{FAM11.map(([x, y], i) => <circle key={i} cx={x} cy={y} r={12} fill={NUC_RED} stroke={INK} strokeWidth={2} />)}</g> : null}
			</FrameSvg>
			<HandTag x={96} y={260} text="cosmic rays first" at={ms} size={32} color={GREY.ink} />
			<Lbl x={96} y={740} at={-30} color={GREY.ink} size={26}>cloud chamber</Lbl>
			<CardBox x={470} at={-30} title="e⁺ (positron), 1932" lines={['charge +e, mass of an electron', 'cosmic rays, cloud chamber']}><Sketch d="M320,205 C300,140 250,110 200,100 C140,90 100,120 110,160" /></CardBox>
			<CardBox x={930} at={th} title="μ (muon), 1936" lines={[`charge −e, ≈ ${fx(MU_RATIO, 0)} mₑ`, `decays in about ${fx(MU_LIFE, 0)} μs, yet no known parts`]}><Sketch d="M40,205 C120,150 220,90 360,40" w={6} /></CardBox>
			<CardBox x={1390} at={cp} title="π (pion), 1947" lines={['cosmic rays,', 'mountain-top photographic plates']}><Sketch d="M60,200 L170,110 L300,60" w={9} /></CardBox>
			<Lbl x={600} y={830} at={bh + 6} color={INK} size={28}>then hundreds more, made by accelerators (next time)</Lbl>
			<Lbl x={950} y={182} at={th + 10} color={NAVY.ink} size={26}>like an electron, about 200 times heavier</Lbl>
		</>
	);
};

// ---------- 12. the particle no one could see ----------
const CH12 = {x: 200, y: 330, w: 700, h: 360};
const NB = 14, MASS_E = 0.4;
const SPEC = (() => {
	const v = Array.from({length: NB}, (_, i) => { const E = (i + 0.5) / NB; return Math.sqrt(E * E + 2 * E * MASS_E) * (1 - E) ** 2 * (E + MASS_E); });
	const m = Math.max(...v);
	return v.map(x => (0.85 * x) / m);
})();
const TYPICAL = 4;
export const S12: React.FC = () => {
	const id = 'neutrino';
	const f = useCurrentFrame();
	const se = cue(id, 'a spread of energies'), ev = cue(id, 'Energy seemed to vanish'), un = cue(id, 'an unseen, neutral particle'), an = cue(id, "Here it's an antineutrino"), nr = cap(id, cue(id, 'right beside a nuclear reactor'), 40);
	const bw = CH12.w / NB, xEnd = CH12.x + CH12.w;
	const tx = CH12.x + (TYPICAL + 1) * bw - bw * 0.14, ty = CH12.y + CH12.h - SPEC[TYPICAL] * CH12.h * 0.5;
	const op = placeOf(OPAL_PLATE, {x: 1150, y: 560, w: 188});
	const [cx, cy] = op.at(OPAL_AT.core[0], OPAL_AT.core[1]);
	const stream = prog(f, nr + 10, 60, t => t);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<SchemCard x={96} y={190} w={1000} h={700} title="beta decay: electron energies" />
				<line x1={CH12.x} y1={CH12.y - 10} x2={CH12.x} y2={CH12.y + CH12.h} stroke={INK} strokeWidth={4} />
				<line x1={CH12.x} y1={CH12.y + CH12.h} x2={xEnd + 60} y2={CH12.y + CH12.h} stroke={INK} strokeWidth={4} />
				<line x1={xEnd} y1={CH12.y - 30} x2={xEnd} y2={CH12.y + CH12.h} stroke={INK} strokeWidth={4} strokeDasharray="12 8" />
				<Bars x={CH12.x} y={CH12.y} w={CH12.w} h={CH12.h} values={SPEC} color={NAVY.stroke} reveal={prog(f, se, 40)} gap={0.18} />
				<g opacity={prog(f, se + 30, 14)}><rect x={xEnd - bw * 0.8} y={CH12.y} width={bw * 0.6} height={CH12.h} fill="none" stroke={GREY.stroke} strokeWidth={4} strokeDasharray="10 6" /></g>
				{f >= se + 30 ? <Mark x={xEnd - bw * 0.5} y={CH12.y + 90} at={se + 50} kind="cross" color={SLATE.stroke} size={46} /> : null}
				{f >= ev ? <g opacity={prog(f, ev, 16)}><rect x={tx} y={ty - 16} width={xEnd - tx} height={32} fill={AMBER.soft} stroke={AMBER.stroke} strokeWidth={2.5} /><rect x={CH12.x + TYPICAL * bw + bw * 0.09} y={CH12.y + CH12.h - SPEC[TYPICAL] * CH12.h} width={bw * 0.82} height={SPEC[TYPICAL] * CH12.h} fill="none" stroke={INK} strokeWidth={4} /></g> : null}
				{f >= un ? <g opacity={prog(f, un, 16)}><NucleonCluster cx={1300} cy={320} r={16} discs={clusterLayout(4, 5, 2)} pFill={NUC_RED} nFill={NEUTRON} letters={false} />
					<circle cx={1300 + lerp(60, 200, prog(f, un + 10, 40))} cy={320 - lerp(20, 90, prog(f, un + 10, 40))} r={16} fill={NAVY.stroke} stroke="#fffdf8" strokeWidth={3} />
					<circle cx={1300 + lerp(60, 210, prog(f, un + 10, 40))} cy={320 + lerp(20, 80, prog(f, un + 10, 40))} r={11} fill={NU.stroke} stroke="#fffdf8" strokeWidth={3} /></g> : null}
				{f >= nr ? <g opacity={prog(f, nr, 16)}>
					<LPlate spec={OPAL_PLATE} p={{x: 1150, y: 560, w: 188}} />
					<rect x={1620} y={640} width={200} height={130} rx={12} fill="#e8eef3" stroke={INK} strokeWidth={3} />
					{Array.from({length: 7}, (_, i) => { const t = (stream * 2 + i / 7) % 1; return <circle key={i} cx={lerp(cx, 1630, t)} cy={lerp(cy, 705, t) + Math.sin(i * 2.1) * 10} r={8} fill={NU.stroke} />; })}
				</g> : null}
			</FrameSvg>
			<Lbl x={CH12.x - 10} y={CH12.y - 34} at={-30} color={INK} size={28}>number of β electrons</Lbl>
			<Lbl x={CH12.x + 260} y={CH12.y + CH12.h + 56} at={-30} color={INK} size={28}>electron energy →</Lbl>
			<Lbl x={xEnd - 40} y={CH12.y - 50} at={-30} color={INK} size={26} anchor="middle">total energy available</Lbl>
			<Lbl x={200} y={850} at={se + 40} color={SLATE.ink} size={26}>crossed: expected if only two products (all at one value)</Lbl>
			<HandTag x={560} y={300} text="missing energy" at={ev + 10} size={32} color={AMBER.ink} marks={[{kind: 'arrow', from: [640, 318], to: [640, ty - 20], bend: 0.1}]} />
			<Lbl x={1520} y={260} at={un + 30} color={NAVY.ink} size={28}>e⁻</Lbl>
			<Lbl x={1530} y={420} at={un + 30} color={GREY.ink} size={28}>ν̄</Lbl>
			<HandTag x={1150} y={480} text="ν̄: neutral, almost never interacts" at={an} size={30} color={GREY.ink} />
			<Lbl x={1150} y={520} at={an + 14} color={GREY.ink} size={26}>neutrino family</Lbl>
			<Lbl x={1150} y={810} at={nr + 6} color={GREY.ink} size={26}>a nuclear reactor (illustration)</Lbl>
			<Lbl x={1620} y={800} at={nr + 6} color={GREY.ink} size={26}>detector tank</Lbl>
			<div style={{position: 'absolute', left: 1150, top: 840}}><Row at={nr + 20} size={32}><AnswerBox at={nr + 24}>ν̄ detected 1956 (Cowan and Reines)</AnswerBox></Row></div>
		</>
	);
};

// ---------- 13. two families ----------
export const TREE = {root: [960, 250], had: [560, 430], lep: [1360, 430], bar: [330, 650], mes: [790, 650], leaves: [1360, 650]} as const;
const nodeBottom = (y: number, n: number, s = 30) => y + (n * s * 1.18 + 22) / 2;
const nodeTop = (y: number, n: number, s = 30) => y - (n * s * 1.18 + 22) / 2;
export const ClassTree: React.FC<{had: number; bar: number; mes: number; lep: number; leaves: number}> = ({had, bar, mes, lep, leaves}) => (
	<g>
		<TreeNode x={TREE.root[0]} y={TREE.root[1]} w={260} lines={['particles']} tone={{ink: INK, stroke: INK, soft: '#ebe4d6'}} size={36} />
		<TreeLink x0={TREE.root[0]} y0={nodeBottom(TREE.root[1], 1, 36)} x1={TREE.had[0]} y1={nodeTop(TREE.had[1], 2)} reveal={had} />
		<TreeLink x0={TREE.root[0]} y0={nodeBottom(TREE.root[1], 1, 36)} x1={TREE.lep[0]} y1={nodeTop(TREE.lep[1], 2)} reveal={lep} />
		<TreeNode x={TREE.had[0]} y={TREE.had[1]} w={520} lines={['hadrons', 'strong force, made of quarks']} tone={UP} empty={had < 0.5} />
		<TreeNode x={TREE.lep[0]} y={TREE.lep[1]} w={560} lines={['leptons', 'no strong force, no known parts']} tone={LEP} empty={lep < 0.5} />
		<TreeLink x0={TREE.had[0]} y0={nodeBottom(TREE.had[1], 2)} x1={TREE.bar[0]} y1={nodeTop(TREE.bar[1], 2)} reveal={bar} />
		<TreeLink x0={TREE.had[0]} y0={nodeBottom(TREE.had[1], 2)} x1={TREE.mes[0]} y1={nodeTop(TREE.mes[1], 2)} reveal={mes} />
		<TreeNode x={TREE.bar[0]} y={TREE.bar[1]} w={420} lines={['baryons', '3 quarks: p = uud, n = udd']} tone={UP} empty={bar < 0.5} />
		<TreeNode x={TREE.mes[0]} y={TREE.mes[1]} w={420} lines={['mesons', 'quark + antiquark (π)']} tone={UP} empty={mes < 0.5} />
		<TreeLink x0={TREE.lep[0]} y0={nodeBottom(TREE.lep[1], 2)} x1={TREE.leaves[0]} y1={nodeTop(TREE.leaves[1], 1, 34)} reveal={leaves} />
		<TreeNode x={TREE.leaves[0]} y={TREE.leaves[1]} w={360} lines={['e⁻, μ⁻, ν']} tone={LEP} size={34} empty={leaves < 0.5} />
	</g>
);
export const S13: React.FC = () => {
	const id = 'two-families';
	const f = useCurrentFrame();
	const hd = cue(id, 'Hadrons feel the strong force'), br = cue(id, 'Baryons, like protons and neutrons'), ms = cue(id, 'Mesons, like the pion'), lp = cue(id, "Leptons don't feel the strong force"), el = cue(id, 'The electron, the muon and the neutrinos'), sh = cap(id, cue(id, "it's still a hadron"), 30);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg><ClassTree had={prog(f, hd, 18)} bar={prog(f, br, 18)} mes={prog(f, ms, 18)} lep={prog(f, lp, 18)} leaves={prog(f, el, 18)} /></FrameSvg>
			<Lbl x={580} y={760} at={ms + 30} color={GREY.ink} size={28}>antiquark: antimatter partner of a quark</Lbl>
			<HandTag x={1150} y={790} at={el + 30} size={30} color={NAVY.ink} marks={[{kind: 'circle', cx: TREE.lep[0], cy: (TREE.lep[1] + TREE.leaves[1]) / 2, rx: 330, ry: 190}]} />
			<CrossedChip x={600} y={830} at={sh} crossAt={sh + 14} size={32} caption="classify by parts and forces, not mass">pion = lepton, because it&apos;s light</CrossedChip>
		</>
	);
};

// ---------- 14. a way to remember ----------
export const S14: React.FC = () => {
	const id = 'memory-aid';
	const f = useCurrentFrame();
	const hp = cue(id, 'Hadrons have parts'), lp = cap(id, cue(id, 'Leptons are points'), 10);
	const pa = Math.sin(Math.PI * Math.min(1, Math.max(0, (f - hp) / 24))), pb = Math.sin(Math.PI * Math.min(1, Math.max(0, (f - lp) / 24)));
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<rect x={100} y={250} width={440} height={300} rx={18} fill={UP.soft} stroke={UP.stroke} strokeWidth={4 + 4 * pa} />
				<QBag x={320} y={420} r={90}><QDot x={280} y={445} r={28} label="u" tone={UP} /><QDot x={360} y={445} r={28} label="u" tone={UP} /><QDot x={320} y={375} r={28} label="d" tone={DOWN} /></QBag>
				<rect x={600} y={250} width={440} height={300} rx={18} fill={LEP.soft} stroke={LEP.stroke} strokeWidth={4 + 4 * pb} />
				{[700, 820, 940].map((x, i) => <circle key={i} cx={x} cy={430} r={i === 2 ? 11 : 16} fill={i === 2 ? NU.stroke : LEP.stroke} stroke="#fffdf8" strokeWidth={3} />)}
			</FrameSvg>
			<Lbl x={130} y={300} at={-30} color={UP.ink} size={34}>hadrons: parts</Lbl>
			<Lbl x={630} y={300} at={-30} color={LEP.ink} size={34}>leptons: points</Lbl>
			<Lbl x={650} y={500} at={-30} color={INK} size={28}>e⁻     μ⁻     ν</Lbl>
			<div style={{position: 'absolute', left: 1140, top: 260, width: 680}}><MemoryCard at={hp} main={<>Hadrons have parts. Leptons are points.</>} /></div>
		</>
	);
};

