// Scenes 7 to 12: iron says stop (the curve with a red barrier at the iron-group peak, the onion's core collapsing, the
// painted supernova remnant), beyond iron (one neutron capture and one beta decay on an N-Z grid with real nuclides and
// tallies), slow and rapid (a schematic N-Z chart with a stability band, the slow path along it and the rapid path far
// out and back), making energy against making elements (two framed columns, the painted ring, nebula, remnant, cloud
// and Sun), where every element came from (the periodic table filling by source) and the memory aid.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading} from '../../math/studio';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {Disc, LPlate, SUN} from '../../physics/light/plates';
import {Particle} from '../../physics/light/massenergy';
import {CLOUD} from '../../physics/atom/universe';
import {BindingCurve, NeutrinoDot, NucEq, Tally, bcX, bcY} from '../../physics/atom/nuclear';
import type {BCBox} from '../../physics/atom/nuclear';
import {GOLD_RING, NEBULA, NZGrid, Onion, PeriodicTable, REMNANT, ReachBar, TempLadder, nzPt, ptCell} from '../../physics/atom/elements';
import type {Ladder, NZBox, PTBox} from '../../physics/atom/elements';
import {AU, CO59, FE58, FE59, FE59_HALF_DAYS, FE_PEAK, HEAD, HEAD_SIZE, NU_SHARE, cap, cue} from './common';
import {AMBER, GREEN, GREY, INK, LADDER_MARKS, Lbl, NAVY, NEUTRON, NucDisc, PURPLE, RED, ROSE, SRC_FILL, SRC_LABEL, fillAt, fx} from './parts';
import type {Src} from './parts';

// ---------- 7. iron says stop ----------
export const BC7: BCBox = {x: 160, y: 250, w: 1000, h: 460};
const L7 = [{A: 1, text: '¹H', dx: -14, dy: 6, anchor: 'end' as const}, {A: 4, text: '⁴He', dy: -26}, {A: 12, text: '¹²C', dx: 14, dy: 40, anchor: 'start' as const}, {A: 16, text: '¹⁶O', dy: -26}, {A: 56, text: `iron-group peak (⁵⁶Fe: ${fx(FE_PEAK, 1)} MeV)`, dy: 70}, {A: 238, text: '²³⁸U', dy: -26, anchor: 'end' as const}];
const OC = {cx: 1490, cy: 540};
export const S07: React.FC = () => {
	const id = 'iron-limit';
	const f = useCurrentFrame();
	const pk = cue(id, 'Iron sits at the peak'), dc = cue(id, 'would move down the curve'), rl = cue(id, 'that can release energy'), pf = cue(id, 'its pressure falls, and gravity wins'), ci = cue(id, 'about the size of a city'), sn = cap(id, cue(id, 'in a supernova'));
	const px = bcX(BC7, 56), py = bcY(BC7, FE_PEAK);
	const col = prog(f, ci - 20, 18), blast = prog(f, sn, 40);
	const coreR = 34 - 28 * col;
	const nus = f >= sn ? Array.from({length: 12}, (_, i) => ((f - sn) / 40 + i / 12) % 1) : [];
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<LPlate spec={REMNANT} p={{x: OC.cx - 330, y: OC.cy - 300, w: 660}} opacity={blast} />
				<BindingCurve b={BC7} labels={L7} />
				{f >= pk + 10 ? <circle cx={px} cy={py} r={36} fill="none" stroke={INK} strokeWidth={4} opacity={prog(f, pk + 10, 12)} /> : null}
				{f >= dc ? <g opacity={prog(f, dc, 12)}><path d={`M${px + 30},${py - 10} Q${bcX(BC7, 140)},${py - 30} ${bcX(BC7, 200)},${bcY(BC7, 7.6) + 30}`} fill="none" stroke={RED.stroke} strokeWidth={7} /><path d="M0,0 L-22,-12 L-22,12 z" transform={`translate(${bcX(BC7, 200)} ${bcY(BC7, 7.6) + 34}) rotate(60)`} fill={RED.stroke} /></g> : null}
				{f >= rl ? <rect x={px - 7} y={BC7.y - 20} width={14} height={BC7.h + 20} fill={RED.stroke} opacity={0.85 * prog(f, rl, 12)} /> : null}
				{f >= pf ? <g opacity={prog(f, pf, 12) * (1 - 0.7 * blast)}>
					<Onion cx={OC.cx} cy={OC.cy} shells={[{r: 160, fill: '#f7e3a8'}, {r: 128, fill: '#f3cf8a'}, {r: 98, fill: '#e9b27a'}, {r: 72, fill: '#dc9a72'}, {r: 50, fill: '#c98a7c'}, {r: coreR, fill: '#9c8b86'}]} />
					{Array.from({length: 8}, (_, i) => { const a = (i * Math.PI) / 4, c = Math.cos(a), s = Math.sin(a), L = 50 + 40 * prog(f, pf + 10, 20); return <g key={i}><line x1={OC.cx + c * (170 + L)} y1={OC.cy + s * (170 + L)} x2={OC.cx + c * 178} y2={OC.cy + s * 178} stroke={NAVY.stroke} strokeWidth={6} /><path d="M0,0 L-16,-9 L-16,9 z" transform={`translate(${OC.cx + c * 168} ${OC.cy + s * 168}) rotate(${(a * 180) / Math.PI + 180})`} fill={NAVY.stroke} /></g>; })}
				</g> : null}
				{nus.map((u, i) => { const a = (i / 12) * 2 * Math.PI; return <NeutrinoDot key={i} x={OC.cx + Math.cos(a) * (60 + 260 * u)} y={OC.cy + Math.sin(a) * (60 + 260 * u)} text="" r={7} />; })}
				{f >= ci ? <g opacity={prog(f, ci, 10) * (1 - blast)}><line x1={OC.cx - 6} y1={OC.cy + 40} x2={OC.cx + 6} y2={OC.cy + 40} stroke={INK} strokeWidth={4} /></g> : null}
			</FrameSvg>
			<HandTag x={px + 60} y={py + 130} text="near iron: the top" at={pk + 20} out={dc} size={32} color={INK} />
			<HandTag x={bcX(BC7, 100)} y={bcY(BC7, 7.6) + 110} text="takes in energy" at={dc + 20} size={34} color={RED.ink} />
			<Chip x={160} y={820} at={rl} size={30} color={RED.ink}>no energy-releasing fuel left</Chip>
			<Lbl x={OC.cx} y={OC.cy - 220} at={pf} out={sn} color={INK} size={26} anchor="middle">iron core (not to scale)</Lbl>
			<Lbl x={OC.cx} y={OC.cy + 230} at={ci} out={sn} color={INK} size={28} anchor="middle">core radius ≈ 10 to 15 km, in &lt; 1 s</Lbl>
			<Chip x={1200} y={170} at={sn} size={28} color={INK}>core-collapse supernova (illustrative)</Chip>
			<Lbl x={1220} y={880} at={sn + 20} color={GREY.ink} size={28}>{`about ${fx(NU_SHARE * 100)}% of the energy leaves as neutrinos`}</Lbl>
		</>
	);
};

// ---------- 8. beyond iron: add neutrons ----------
export const NZ8: NZBox = {x: 180, y: 320, cell: 120, n0: 30, z0: 25, nN: 5, nZ: 4};
export const S08: React.FC = () => {
	const id = 'neutron-capture';
	const f = useCurrentFrame();
	const nc = cue(id, "A neutron has no charge, so it isn't repelled"), fe = cue(id, 'Iron fifty-eight absorbs a neutron and becomes iron fifty-nine'), el = cue(id, 'giving out an electron'), hi = cue(id, 'one element higher'), ta = cap(id, cue(id, 'you climb the periodic table'));
	const [x58, y58] = nzPt(NZ8, FE58.N, FE58.Z), [x59, y59] = nzPt(NZ8, FE59.N, FE59.Z), [xc, yc] = nzPt(NZ8, CO59.N, CO59.Z);
	const s1 = prog(f, fe + 20, 24), s2 = prog(f, el + 20, 24);
	const mx = s2 > 0 ? x59 + (xc - x59) * s2 : x58 + (x59 - x58) * s1, my = s2 > 0 ? y59 + (yc - y59) * s2 : y58;
	const nIn = prog(f, nc, 40), pBack = f >= nc ? Math.sin(Math.min(1, (f - nc) / 50) * Math.PI) : 0;
	const stair = prog(f, ta, 40);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<NZGrid b={NZ8} />
				<circle cx={x58} cy={y58} r={34} fill="none" stroke={INK} strokeWidth={5} opacity={prog(f, fe, 12)} />
				{f >= fe + 30 ? <circle cx={x59} cy={y59} r={34} fill="none" stroke={RED.stroke} strokeWidth={5} opacity={prog(f, fe + 30, 12)} /> : null}
				{f >= el + 30 ? <circle cx={xc} cy={yc} r={34} fill="none" stroke={INK} strokeWidth={5} opacity={prog(f, el + 30, 12)} /> : null}
				{f >= fe ? <circle cx={mx} cy={my} r={16} fill={AMBER.stroke} stroke={INK} strokeWidth={3} /> : null}
				{s1 > 0.02 ? <path d={`M${x58 + 34},${y58} L${x58 + (x59 - x58) * s1 - 10},${y58}`} stroke={INK} strokeWidth={4} /> : null}
				{s2 > 0.02 ? <path d={`M${x59 - 24},${y59 - 24} L${x59 + (xc - x59) * s2 + 14},${y59 + (yc - y59) * s2 + 14}`} stroke={INK} strokeWidth={4} /> : null}
				{stair > 0.01 ? <path d={`M${xc + 30},${yc - 30} L${xc + 120},${yc - 30} L${xc + 80},${yc - 90} L${xc + 200},${yc - 90} L${xc + 160},${yc - 150}`} fill="none" stroke={AMBER.stroke} strokeWidth={5} strokeDasharray="12 8" opacity={stair} /> : null}
				{f >= nc - 10 ? <g opacity={prog(f, nc - 10, 12) * (1 - prog(f, fe + 40, 14))}>
					<NucDisc x={1500} y={250} r={50} text="Fe" />
					<Particle x={960 + 480 * nIn} y={250} r={22} color={NEUTRON} text="n" size={20} opacity={1 - prog(f, nc + 40, 8)} />
					<Particle x={1300 - 120 * pBack} y={160} r={22} color={ROSE.stroke} text="p" size={20} />
					<line x1={1300 - 120 * pBack - 30} y1={160} x2={1300 - 120 * pBack - 30 - 70 * pBack} y2={160} stroke={RED.stroke} strokeWidth={6} />
				</g> : null}
				<LPlate spec={GOLD_RING} p={{x: xc + 200, y: yc - 300, w: 160}} opacity={stair} />
			</FrameSvg>
			<Lbl x={NZ8.x + NZ8.nN * NZ8.cell / 2} y={NZ8.y + NZ8.nZ * NZ8.cell + 80} at={0} color={INK} size={28} anchor="middle">neutrons N →</Lbl>
			<Lbl x={NZ8.x - 60} y={NZ8.y - 24} at={0} color={INK} size={28}>protons Z ↑</Lbl>
			<Lbl x={x58} y={y58 + 64} at={fe} color={INK} size={26} anchor="middle">⁵⁸Fe</Lbl>
			<Lbl x={x59} y={y59 + 64} at={fe + 30} color={RED.ink} size={26} anchor="middle">⁵⁹Fe</Lbl>
			<Lbl x={xc} y={yc - 50} at={el + 30} color={INK} size={26} anchor="middle">⁵⁹Co</Lbl>
			<Lbl x={1180} y={210} at={nc + 30} color={RED.ink} size={26} anchor="end">p: repelled</Lbl>
			<HandTag x={960} y={330} text="no charge, no push" at={nc + 20} out={fe + 40} size={32} color={GREY.ink} marks={[{kind: 'arrow', from: [980, 290], to: [1420, 280], bend: 0}]} />
			<div style={{position: 'absolute', left: 900, top: 420, opacity: prog(f, fe, 14)}}><NucEq terms={[{A: 58, Z: 26, s: 'Fe'}, '+', {A: 1, Z: 0, s: 'n'}, '→', {A: 59, Z: 26, s: 'Fe'}]} size={46} /></div>
			<div style={{position: 'absolute', left: 920, top: 490, display: 'flex', gap: 36}}>
				{f >= fe + 20 ? <Tally label="A" sum="58 + 1 = 59" tickAt={fe + 30} size={28} /> : null}
				{f >= fe + 26 ? <Tally label="Z" sum="26 + 0 = 26" tickAt={fe + 36} size={28} /> : null}
			</div>
			<div style={{position: 'absolute', left: 900, top: 580, opacity: prog(f, el, 14)}}><NucEq terms={[{A: 59, Z: 26, s: 'Fe'}, '→', {A: 59, Z: 27, s: 'Co'}, '+', {A: 0, Z: '−1', s: 'e'}, '+', 'ν̄']} size={46} /></div>
			<div style={{position: 'absolute', left: 920, top: 650, display: 'flex', gap: 36}}>
				{f >= el + 20 ? <Tally label="A" sum="59 = 59 + 0" tickAt={el + 30} size={28} /> : null}
				{f >= el + 26 ? <Tally label="Z" sum="26 = 27 − 1" tickAt={el + 36} size={28} /> : null}
			</div>
			<Lbl x={900} y={740} at={el + 10} color={GREY.ink} size={26}>{`beta decay: a neutron turns into a proton (⁵⁹Fe half-life ${FE59_HALF_DAYS} days)`}</Lbl>
			<CrossedChip x={1430} y={430} at={el + 40} crossAt={el + 56} size={30} caption="beta-minus: Z goes up">⁵⁹Fe → ⁵⁹Mn</CrossedChip>
			<div style={{position: 'absolute', left: 900, top: 780}}><Row at={hi - 6} size={44}><AnswerBox at={hi}>Z: 26 → 27, iron → cobalt</AnswerBox></Row></div>
			<HandTag x={1430} y={620} text="unstable, so it decays" at={hi + 20} size={30} color={GREY.ink} />
			<Lbl x={xc + 290} y={yc - 160} at={ta + 20} color={AMBER.ink} size={28} anchor="middle">{`… to Z = ${AU.Z}: gold`}</Lbl>
			<Lbl x={NZ8.x} y={NZ8.y + NZ8.nZ * NZ8.cell + 120} at={ta + 20} color={GREY.ink} size={26}>ink ring: stable; red ring: unstable</Lbl>
		</>
	);
};

// ---------- 9. slow and rapid ----------
const CH = {x: 120, y: 240, w: 1080, h: 580};
const band = (x: number) => 790 - 0.5814 * (x - 220);
const sPath = (() => {
	const pts: {x: number; y: number; kind: 'c' | 'd'; unstable: boolean}[] = [];
	let x = 260, y = band(260);
	for (let i = 0; i < 26 && x < 940; i++) {
		const below = y - band(x) > 14;
		if (below) { x -= 26; y -= 40; pts.push({x, y, kind: 'd', unstable: false}); }
		else { x += 34; pts.push({x, y, kind: 'c', unstable: y - band(x) > 14}); }
	}
	return pts;
})();
const R0 = {x: 478, y: band(478)}, R1 = {x: 1150, y: band(478)}, R2 = {x: 953, y: band(953)};
export const S09: React.FC = () => {
	const id = 'slow-rapid';
	const f = useCurrentFrame();
	const sp = cue(id, 'nuclei capture neutrons one at a time, with time to decay in between'), le = cue(id, 'strontium, barium and lead'), rp = cue(id, 'nuclei swallow many before they can decay'), ns = cue(id, 'two neutron stars colliding'), ur = cue(id, 'gold, platinum and uranium'), el = cap(id, cue(id, 'freshly made heavy elements'));
	const sN = Math.floor(sPath.length * prog(f, sp, Math.max(30, le - sp)));
	const r1 = prog(f, rp, 30), r2 = prog(f, rp + 34, 30);
	const spin = f >= ns ? (f - ns) / 8 : 0, close = prog(f, ns, Math.max(30, ur - ns));
	const nsR = 90 * (1 - 0.8 * close);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<rect x={CH.x} y={CH.y} width={CH.w} height={CH.h} rx={10} fill="none" stroke="rgba(60,45,20,0.25)" strokeWidth={3} />
				<path d={`M220,${band(220) + 34} L1100,${band(1100) + 34} L1100,${band(1100) - 34} L220,${band(220) - 34} Z`} fill="#e9e3d6" stroke="none" />
				{sPath.slice(0, sN).map((p, i) => { const prev = i ? sPath[i - 1] : {x: 260, y: band(260)}; return <g key={i}><line x1={prev.x} y1={prev.y} x2={p.x} y2={p.y} stroke={GREEN.stroke} strokeWidth={4} /><circle cx={p.x} cy={p.y} r={8} fill="#fffdf8" stroke={p.unstable ? RED.stroke : INK} strokeWidth={3} /></g>; })}
				{r1 > 0.001 ? <g>
					<line x1={R0.x} y1={R0.y} x2={R0.x + (R1.x - R0.x) * r1} y2={R0.y} stroke={PURPLE.stroke} strokeWidth={6} strokeDasharray="4 6" />
					{r2 > 0.001 ? <line x1={R1.x} y1={R1.y} x2={R1.x + (R2.x - R1.x) * r2} y2={R1.y + (R2.y - R1.y) * r2} stroke={PURPLE.stroke} strokeWidth={6} /> : null}
				</g> : null}
				{f >= ns - 10 ? <g opacity={prog(f, ns - 10, 12)}>
					{[0, 1].map(i => { const a = spin + i * Math.PI; return <circle key={i} cx={1560 + nsR * Math.cos(a)} cy={420 + nsR * 0.5 * Math.sin(a)} r={22} fill="#c9d4e8" stroke={INK} strokeWidth={3} />; })}
				</g> : null}
			</FrameSvg>
			<Lbl x={CH.x + CH.w} y={CH.y + CH.h + 40} at={0} color={INK} size={28} anchor="end">neutrons N → (schematic chart)</Lbl>
			<Lbl x={CH.x + 10} y={CH.y + 34} at={0} color={INK} size={28}>protons Z ↑</Lbl>
			<Lbl x={900} y={band(900) + 80} at={0} color={GREY.ink} size={26}>stable nuclei</Lbl>
			<Lbl x={150} y={300} at={sp} color={GREEN.ink} size={28}>slow process (s-process): old giant stars (AGB)</Lbl>
			<Lbl x={sPath[sPath.length - 1].x - 30} y={sPath[sPath.length - 1].y - 40} at={le} color={GREEN.ink} size={30} anchor="end">Sr, Ba, Pb</Lbl>
			<Lbl x={R0.x + 20} y={R0.y + 46} at={rp} color={PURPLE.ink} size={28}>rapid process (r-process)</Lbl>
			<HandTag x={760} y={R0.y + 110} text="many neutrons, fast" at={rp + 30} size={32} color={PURPLE.ink} marks={[{kind: 'arrow', from: [R0.x + 40, R0.y + 20], to: [R1.x - 20, R1.y + 20], bend: 0}]} />
			<Lbl x={R2.x + 30} y={R2.y - 20} at={ur} color={PURPLE.ink} size={30}>Au, Pt, U</Lbl>
			<HandTag x={0} y={0} at={ur + 16} color={INK} marks={[{kind: 'circle', cx: R2.x + 95, cy: R2.y - 30, rx: 90, ry: 34}]} />
			<Lbl x={1560} y={560} at={ns} color={INK} size={26} anchor="middle">two neutron stars collide (schematic)</Lbl>
			<Lbl x={1560} y={600} at={ns} color={GREY.ink} size={26} anchor="middle">(possibly some supernovae too)</Lbl>
			<Lbl x={1240} y={700} at={el} color={INK} size={26}>2017: gravitational waves from a</Lbl>
			<Lbl x={1240} y={738} at={el} color={INK} size={26}>neutron-star collision (GW170817);</Lbl>
			<Lbl x={1240} y={776} at={el} color={INK} size={26}>its glow showed new heavy elements</Lbl>
			<Lbl x={1240} y={814} at={el} color={INK} size={26}>(strontium identified in 2019)</Lbl>
			<Lbl x={CH.x} y={CH.y + CH.h + 90} at={sp + 20} color={INK} size={26}>ink ring: stable, captures again; red ring: unstable, decays first</Lbl>
		</>
	);
};

// ---------- 10. making energy against making elements ----------
export const S10: React.FC = () => {
	const id = 'energy-against-elements';
	const f = useCurrentFrame();
	const fu = cue(id, 'Fusion up to iron releases energy'), go = cue(id, "and it can't keep a star going"), gr = cue(id, 'gold is so rare'), sp = cue(id, 'spread all these elements into space'), yo = cap(id, cue(id, 'new stars, planets, and you'));
	const drift = f >= sp ? Math.min(1, (f - sp) / 60) : 0, form = prog(f, yo, 24);
	const box = (x: number, at: number, border: string, title: string, lines: string[], mark: 'tick' | 'cross') => (
		<div style={{position: 'absolute', left: x, top: 190, width: 840, opacity: prog(f, at, 14), background: '#fffdf8', border: `4.5px solid ${INK}`, borderRadius: 16, padding: '12px 22px'}}>
			<div style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 36, color: border}}>{title}</div>
			{lines.map(l => <div key={l} style={{fontFamily: 'Inter Tight', fontWeight: 700, fontSize: 32, color: INK, marginTop: 6}}>{l}</div>)}
			<svg width={56} height={56} viewBox="-28 -28 56 56" style={{position: 'absolute', right: 18, top: 16, opacity: prog(f, at + 16, 10)}}>{mark === 'tick' ? <path d="M-18,0 L-6,14 L20,-16" fill="none" stroke={AMBER.stroke} strokeWidth={7} strokeLinecap="round" /> : <path d="M-16,-16 L16,16 M16,-16 L-16,16" fill="none" stroke={GREY.stroke} strokeWidth={7} strokeLinecap="round" />}</svg>
		</div>
	);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			{box(96, fu, AMBER.ink, 'fusion (H → Fe)', ['releases energy', 'powers the star'], 'tick')}
			{box(984, go, PURPLE.ink, 'neutron capture (beyond Fe)', ['makes heavy elements, small amounts', 'no power for the star'], 'cross')}
			<FrameSvg>
				<LPlate spec={NEBULA} p={{x: 110, y: 560, w: 220}} opacity={prog(f, sp, 14)} />
				<LPlate spec={REMNANT} p={{x: 380, y: 560, w: 220}} opacity={prog(f, sp + 6, 14)} />
				{drift > 0 && drift < 1 ? [0, 1, 2, 3, 4, 5].map(i => <circle key={i} cx={(i < 3 ? 220 : 490) + (900 - (i < 3 ? 220 : 490)) * ((drift + i * 0.13) % 1)} cy={660 + 30 * Math.sin(i * 1.7)} r={10} fill={['#cfe3f5', '#cbe7d2', '#f5d595', '#ddcdf0', '#cbe7d2', '#f5d595'][i]} stroke={INK} strokeWidth={2} />) : null}
				<LPlate spec={CLOUD} p={{x: 790, y: 560, w: 260}} opacity={prog(f, sp + 20, 14) * (1 - form)} />
				<Disc spec={SUN} cx={920} cy={660} d={90} opacity={form} />
				{form > 0.5 ? <circle cx={1010} cy={630} r={9} fill={NAVY.stroke} opacity={form} /> : null}
				<LPlate spec={GOLD_RING} p={{x: 1460, y: 560, w: 260}} opacity={prog(f, gr, 14)} />
			</FrameSvg>
			<HandTag x={1300} y={500} text="rare: made only in extreme events" at={gr + 16} size={32} color={AMBER.ink} />
			<Lbl x={360} y={800} at={sp} color={INK} size={26} anchor="middle">winds and explosions spread the elements</Lbl>
			<Lbl x={920} y={800} at={yo} color={INK} size={26} anchor="middle">next generation: stars and planets</Lbl>
		</>
	);
};

// ---------- 11. where every element came from ----------
export const PT11: PTBox = {x: 120, y: 200, cw: 84, ch: 64, gap: 4};
export const S11: React.FC = () => {
	const id = 'origins';
	const f = useCurrentFrame();
	const bb = cue(id, 'came from the Big Bang'), la = cue(id, 'as they shed their outer layers'), ox = cue(id, 'Oxygen up to iron'), sl = cue(id, 'slow neutron capture in giants'), co = cap(id, cue(id, 'rapid neutron capture in neutron star collisions'));
	const at: Partial<Record<Src, number>> = {bb, sun: la, massive: ox, s: sl, r: co};
	const au = ptCell(PT11, AU.Z), he = ptCell(PT11, 2), fe = ptCell(PT11, 26);
	const LEG: [Exclude<Src, 'none'>, number][] = [['bb', bb], ['sun', la], ['massive', ox], ['s', sl], ['r', co]];
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<PeriodicTable b={PT11} fill={fillAt(f, at)} size={26} />
				{LEG.map(([s, a], i) => <rect key={s} x={300} y={206 + 34 * i} width={30} height={26} rx={4} fill={f >= a ? SRC_FILL[s] : '#ffffff'} stroke={INK} strokeWidth={2} />)}
				<LPlate spec={NEBULA} p={{x: 920, y: 210, w: 80}} opacity={prog(f, la, 12)} />
				<LPlate spec={REMNANT} p={{x: 1010, y: 206, w: 80}} opacity={prog(f, ox, 12)} />
				<LPlate spec={GOLD_RING} p={{x: 1100, y: 218, w: 80}} opacity={prog(f, co, 12)} />
			</FrameSvg>
			{LEG.map(([s, a], i) => <Lbl key={s} x={342} y={226 + 34 * i} at={a} color={INK} size={26}>{SRC_LABEL[s]}</Lbl>)}
			<HandTag x={1240} y={250} text="first 20 minutes" at={bb + 16} size={30} color={'#335f9e'} marks={[{kind: 'arrow', from: [1500, 250], to: [he.x - 6, he.y + 20], bend: -0.1}]} />
			<Lbl x={fe.x + fe.w / 2} y={fe.y - 12} at={ox + 20} color={AMBER.ink} size={26} anchor="middle">Fe: also white-dwarf supernovae</Lbl>
			<HandTag x={0} y={0} at={co + 16} color={INK} marks={[{kind: 'circle', cx: au.x + au.w / 2, cy: au.y + au.h / 2, rx: 52, ry: 42}]} />
			<Lbl x={PT11.x} y={900} at={co + 10} color={GREY.ink} size={26}>main source of each element; grey: other or mixed sources</Lbl>
		</>
	);
};

// ---------- 12. a way to remember ----------
const LAD12: Ladder = {x: 330, y0: 640, y1: 260, lo: 7, hi: 9.7};
const BC12: BCBox = {x: 820, y: 290, w: 640, h: 300};
export const S12: React.FC = () => {
	const id = 'memory-aid';
	const f = useCurrentFrame();
	const hs = cue(id, 'Heavier star, hotter core, heavier elements'), is = cue(id, 'until iron says stop'), an = cap(id, cue(id, 'Past iron, add neutrons'));
	const nIn = prog(f, an - 10, 30);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<TempLadder g={LAD12} color={RED.stroke} marks={LADDER_MARKS().filter((_, i) => i !== 3 && i !== 4)} size={26} />
				<ReachBar g={LAD12} T={1e8} dx={-80} color={PURPLE.stroke} opacity={prog(f, hs, 12)} />
				<ReachBar g={LAD12} T={3e9} dx={-120} color={PURPLE.stroke} opacity={prog(f, hs + 10, 12)} />
				<BindingCurve b={BC12} ticksA={[]} ticksB={[]} xTitle="" yTitle="" labels={[{A: 56, text: 'Fe', dy: -24}]} />
				{f >= is ? <rect x={bcX(BC12, 56) - 6} y={BC12.y - 20} width={12} height={BC12.h + 20} fill={RED.stroke} opacity={0.85 * prog(f, is, 12)} /> : null}
				<NucDisc x={1640} y={420} r={46} text="Fe" />
				<Particle x={1640 - 200 * (1 - nIn)} y={420 - 30 * (1 - nIn)} r={20} color={NEUTRON} text="n" size={18} opacity={prog(f, an - 10, 10)} />
			</FrameSvg>
			<Lbl x={LAD12.x - 100} y={LAD12.y0 + 40} at={hs} color={PURPLE.ink} size={26} anchor="middle">1 and 25 M☉</Lbl>
			<HandTag x={96} y={760} text="Heavier star, hotter core, heavier elements," at={hs} size={50} color={INK} />
			<HandTag x={96} y={840} text="until iron says stop. Past iron, add neutrons." at={is} size={50} color={INK} />
		</>
	);
};
