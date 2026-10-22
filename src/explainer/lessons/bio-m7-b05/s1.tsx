// M7 B05 scenes 1 to 6: the hook (the boot-cleaning station, a soil band with specks, the healthy and dying banksias
// side by side); the attacker (the sporangium and zoospores, a crossed "it's a fungus" chip, spores swimming to the
// root tip and settling, hyphae entering, the dying banksia with a water arrow that fades halfway, the station as a
// fomite); defending without moving cells (the young root cells cut away, walls traced in turn, the ladder's first
// two rungs); barriers (the root inset bar from thin young walls to toughened older walls, bark, entry where two cells
// meet, the weak point behind the tip); switched-on defences (masked regions of the aligned defended plate revealed
// in place: the callose plug, thickened walls, chemical deposits); the firebreak (the dead ring revealed, living cells
// beyond it, a signal pulse up the healthy banksia, timing).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Heading, Overlay} from '../bio-m5-b13/shared';
import {S} from './common';
import {
	AMBER, AMBER_INK, BanksiaPair, CTag, ClockMark, CrossChip, DROP, DrawPath, FEAT, GREEN, GREY_INK, GTag, Glow, LAD, Ladder, PLATES, Pl, PlateClip, RootBar, Ring,
	SignalPulse, SoilBand, SwimPath, Sx, TEAL, TERRA, clamp01, ellD, fitW, lerp, plH, prog, ptOf, pulse, rectD, rungY, smooth, vis,
} from './parts';
import type {Pt, Rung} from './parts';

export const HEAD = 'How does a banksia defend itself?';

// ---------- 1. Hook ----------
const K1 = cues(S('hook'), {stations: 'boot-cleaning stations', soil: 'in the soil', forty: 'about 40 per cent', cope: 'cope with it far better', how: 'So how does a plant', dies: 'another dies'});
const SOIL_Y = 880;
const BK = {lx: 1180, rx: 1600, w: 380};
/** Banksia centre so its root crown sits at the soil line. */
const bkCy = (w: number, soilTop: number) => {
	const p = PLATES.banksiaOk;
	const h = plH(p, w);
	return soilTop - ((1380 - p.box[1]) / (p.box[3] - p.box[1])) * h + h / 2;
};
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const sh = smooth(prog(f, K1.how, 28));
	return (
		<>
			<Heading text={HEAD} at={K1.how + 10} size={58} />
			<Overlay>
				<SoilBand x0={60} x1={1860} y0={SOIL_Y} y1={1010} at={K1.soil} specksAt={K1.soil + 10} />
				<CTag x={110} y={918} text="Phytophthora cinnamomi" at={K1.soil + 24} color={AMBER_INK} size={34} />
				<Pl p={PLATES.station} cx={lerp(400, 170, sh)} cy={lerp(520, 330, sh)} w={lerp(520, 200, sh)} o={prog(f, 0, 16)} />
				<GTag x={140} y={796} text="bush track, south-west WA" at={K1.stations} out={K1.how} />
				<GTag x={700} y={300} text="about 40% of the region's native species: susceptible" at={K1.forty} out={K1.how + 30} />
				<BanksiaPair lx={BK.lx} rx={BK.rx} cy={bkCy(BK.w, SOIL_Y)} w={BK.w} okAt={K1.cope} sickT={prog(f, K1.dies, 24)} />
			</Overlay>
		</>
	);
};

// ---------- 2. The attacker: a water mould ----------
const K2 = cues(S('water-mould'), {fungus: 'looks like a fungus', mould: 'a water mould', swimming: 'swimming spores', chem: 'chemicals leaking', settle: 'settle just behind', hyphae: 'threads called hyphae', kill: 'The threads kill', less: 'less water reaches', dies: 'dies back', boots: 'Soil on boots'});
const RT = {cx: 1100, cy: 560, w: 500};
const BS = {cx: 960, cy: 560, w: 420};
export const SceneMould: React.FC = () => {
	const f = useCurrentFrame();
	const rp = (uv: Pt) => ptOf(PLATES.rootTip, RT.cx, RT.cy, RT.w, uv);
	const bp = (uv: Pt) => ptOf(PLATES.banksiaSick, BS.cx, BS.cy, BS.w, uv);
	const sp = rp(FEAT.spores);
	const to: Pt[] = [[-60, -90], [-20, -40], [30, -70], [-70, 10], [10, 0], [60, -10], [-40, 60], [20, 70], [70, 55], [-10, 120]].map(([dx, dy]) => [sp[0] + dx * 0.9, sp[1] + dy * 0.9]);
	const from: Pt[] = [[640, 980], [1500, 1000], [1700, 600], [560, 300], [1560, 240], [700, 760]];
	const plO = vis(f, K2.chem, K2.kill, 16);
	const sickO = prog(f, K2.kill + 6, 18);
	const stemTop = bp([1000, 700]), stemMid = bp([1000, 1080]), stemBot = bp([1000, 1460]);
	return (
		<>
			<Heading text={HEAD} at={-100} size={58} out={0} />
			<Overlay>
				<Pl p={PLATES.zoospores} cx={380} cy={420} w={480} o={vis(f, 0, K2.kill, 16)} />
				<GTag x={110} y={176} text="water mould (oomycete): not a fungus" at={K2.mould} out={K2.kill} />
				<CrossChip x={110} y={630} text="it's a fungus" at={K2.fungus} cross={K2.mould + 4} caption="cellulose walls: a different group" out={K2.swimming} />
				<GTag x={620} y={250} text="zoospores" at={K2.swimming + 6} out={K2.kill} />
				<Pl p={PLATES.rootTip} cx={RT.cx} cy={RT.cy} w={RT.w} o={plO} />
				<SwimPath from={from} to={to} at={K2.chem + 6} o={vis(f, K2.chem, K2.kill, 16)} />
				<CTag x={1400} y={290} text="swim to root chemicals" at={K2.chem + 20} color={AMBER_INK} size={32} dim={prog(f, K2.hyphae, 10)} out={K2.kill} />
				<Ring cx={sp[0]} cy={sp[1]} rx={100} ry={110} at={K2.settle} out={K2.hyphae} />
				{FEAT.tubes.map((t, i) => {
					const q = rp(t);
					return <Ring key={i} cx={q[0]} cy={q[1]} rx={26} ry={26} at={K2.hyphae + 8 + i * 6} out={K2.kill} color={TERRA} seed={i + 4} />;
				})}
				<CTag x={1400} y={700} text="hyphae grow in" at={K2.hyphae + 10} color={TERRA} size={32} out={K2.kill} />
				<Pl p={PLATES.banksiaSick} cx={BS.cx} cy={BS.cy} w={BS.w} o={sickO} />
				{(() => { const q = bp(FEAT.sickRoots); return <Ring cx={q[0]} cy={q[1]} rx={110} ry={70} at={K2.kill + 16} out={K2.dies} color={TERRA} />; })()}
				{f >= K2.less ? (
					<g>
						<DrawPath d={`M${stemBot[0]},${stemBot[1]} L${stemMid[0]},${stemMid[1]}`} at={K2.less} dur={14} color={DROP} width={8} />
						<g opacity={0.3}><DrawPath d={`M${stemMid[0]},${stemMid[1]} L${stemTop[0]},${stemTop[1]}`} at={K2.less + 14} dur={14} color={DROP} width={8} dash="6 10" /></g>
					</g>
				) : null}
				<CTag x={1220} y={560} text="roots die: less water up" at={K2.less + 10} color={DROP} size={32} dim={prog(f, K2.boots, 10)} />
				{FEAT.sickLeaves.map((uv, i) => { const q = bp(uv); return <Ring key={i} cx={q[0]} cy={q[1]} rx={80} ry={90} at={K2.dies + i * 8} color={AMBER} seed={i + 7} />; })}
				<Glow x={170} y={330} r={130} o={pulse(f, K2.boots + 10, 50)} />
				<Pl p={PLATES.station} cx={170} cy={330} w={200} o={prog(f, K2.boots, 14)} />
				<GTag x={80} y={450} text="soil carries it: fomites" at={K2.boots + 10} />
			</Overlay>
		</>
	);
};

// ---------- 3. Defending without moving cells ----------
const K3 = cues(S('no-moving-cells'), {cant: "can't send defenders", immune: 'no circulating immune cells', every: 'every cell has to', always: 'always there', switch: 'switch on only'});
export const CE = {cx: 620, cy: 590, w: 1060};
export const SceneNoCells: React.FC = () => {
	const f = useCurrentFrame();
	const cp = (uv: Pt) => ptOf(PLATES.cellsEntry, CE.cx, CE.cy, CE.w, uv);
	const rungs: Rung[] = [
		{at: K3.always - 6, label: 'always there', labelAt: K3.always},
		{at: K3.switch - 6, label: 'switched on after detection', labelAt: K3.switch},
		{at: K3.switch + 20},
	];
	return (
		<Overlay>
			<Pl p={PLATES.cellsEntry} cx={CE.cx} cy={CE.cy} w={CE.w} o={prog(f, 0, 18)} />
			<GTag x={90} y={950} text="young root cells, cut away" at={10} />
			<GTag x={90} y={180} text="no immune cells travel to the site" at={K3.immune} size={28} />
			{FEAT.cells.map(([x0, y0, x1, y1], i) => {
				const a = cp([x0, y0]), b = cp([x1, y1]);
				const at = K3.every + i * 12;
				const o = vis(f, at, at + 60, 10);
				return o > 0.01 ? <g key={i} opacity={o}><DrawPath d={`M${a[0] + 10},${a[1]} L${b[0] - 10},${a[1]} Q${b[0]},${a[1]} ${b[0]},${a[1] + 10} L${b[0]},${b[1] - 10} Q${b[0]},${b[1]} ${b[0] - 10},${b[1]} L${a[0] + 10},${b[1]} Q${a[0]},${b[1]} ${a[0]},${b[1] - 10} L${a[0]},${a[1] + 10} Q${a[0]},${a[1]} ${a[0] + 10},${a[1]}`} at={at} dur={14} color={TEAL} width={5} /></g> : null;
			})}
			<Ladder rungs={rungs} railAt={K3.always - 10} />
		</Overlay>
	);
};

// ---------- 4. Barriers: always there ----------
const K4 = cues(S('barriers'), {barriers: 'are barriers', ages: 'As a root ages', lignin: 'lignin and other waterproof', bark: 'older roots and stems', pushes: 'pushes in where', young: 'young part of the root', settle: 'where the spores settle'});
const C4 = {cx: 520, cy: 520, w: 820};
export const SceneBarriers: React.FC = () => {
	const f = useCurrentFrame();
	const cp = (uv: Pt) => ptOf(PLATES.cellsEntry, C4.cx, C4.cy, C4.w, uv);
	const en = cp(FEAT.entry);
	const en2 = cp([FEAT.entry[0], FEAT.entry[1] + 120]);
	const BKS = {cx: 1110, cy: 470, w: 200};
	const bk = ptOf(PLATES.banksiaOk, BKS.cx, BKS.cy, BKS.w, FEAT.bark);
	const RI = {cx: 1150, cy: 470, w: 220};
	const yz = ptOf(PLATES.rootTip, RI.cx, RI.cy, RI.w, FEAT.spores);
	const rungs: Rung[] = [
		{at: -100, label: 'barriers: always there', labelAt: -100, lit: prog(f, K4.barriers, 12)},
		{at: -100, label: 'switched on after detection', labelAt: -100},
		{at: -100},
	];
	return (
		<Overlay>
			<Ladder rungs={rungs} />
			<Pl p={PLATES.cellsEntry} cx={C4.cx} cy={C4.cy} w={C4.w} />
			<RootBar x={120} y={860} w={780} at={K4.ages} lignin={K4.lignin} />
			<GTag x={120} y={918} text="young: thin walls" at={K4.ages + 12} />
			<GTag x={900} y={918} text="older: toughened" at={K4.ages + 20} anchor="end" />
			<GTag x={120} y={176} text="lignin, suberin: tough waterproof wall materials" at={K4.lignin + 6} out={K4.pushes} />
			<Pl p={PLATES.banksiaOk} cx={BKS.cx} cy={BKS.cy} w={BKS.w} o={vis(f, K4.bark, K4.young, 14)} />
			<Ring cx={bk[0]} cy={bk[1]} rx={30} ry={46} at={K4.bark + 14} out={K4.young} color={TEAL} />
			<CTag x={990} y={640} text="bark on older parts" at={K4.bark + 16} color={TEAL} size={30} out={K4.young} />
			<Ring cx={en[0]} cy={en[1]} rx={46} ry={46} at={K4.pushes + 6} out={K4.young + 20} />
			{f >= K4.pushes + 16 ? <DrawPath d={`M${en[0]},${en[1] + 20} L${en2[0]},${en2[1]}`} at={K4.pushes + 16} dur={12} color={AMBER} width={5} /> : null}
			<CTag x={990} y={250} text="enters where cells meet" at={K4.pushes + 10} color={AMBER_INK} size={30} dim={prog(f, K4.young, 10)} />
			<Pl p={PLATES.rootTip} cx={RI.cx} cy={RI.cy} w={RI.w} o={prog(f, K4.young, 14)} />
			<Ring cx={yz[0]} cy={yz[1]} rx={52} ry={70} at={K4.young + 14} color={AMBER} />
			<CTag x={990} y={650} text="weak point: thin walls, no bark" at={K4.young + 20} color={AMBER_INK} size={30} maxW={440} />
			{void K4.settle}
		</Overlay>
	);
};

// ---------- 5. Switched on after detection ----------
const K5 = cues(S('switched-on'), {detects: 'Once a cell detects', callose: 'lays down callose', sugar: 'a plug made of', lignin: 'adds more lignin', anti: 'antimicrobial chemicals', phyto: 'such as phytoalexins'});
const CD = {cx: 640, cy: 560, w: 1060};
/** The defended plate revealed in place over the entry plate: the plug, then the walls around (with a hole where
 * the dead ring is), then (scene 6) the dead ring itself. */
export const Defended: React.FC<{cx: number; cy: number; w: number; plug: number; walls: number; ring: number; id: string}> = ({cx, cy, w, plug, walls, ring, id}) => {
	const [px, py] = FEAT.plug, [rx, ry] = FEAT.ring;
	return (
		<g>
			<PlateClip p={PLATES.cellsDef} cx={cx} cy={cy} w={w} id={id + '-walls'} clip={rectD(760, 680, 1340, 1005) + ' ' + ellD(rx, ry - 10, 168, 162)} o={walls} />
			<PlateClip p={PLATES.cellsDef} cx={cx} cy={cy} w={w} id={id + '-ring'} clip={ellD(rx, ry - 10, 168, 162)} o={ring} />
			<PlateClip p={PLATES.cellsDef} cx={cx} cy={cy} w={w} id={id + '-plug'} clip={ellD(px - 2, py + 14, 44, 58)} o={plug} />
		</g>
	);
};
export const SceneSwitched: React.FC = () => {
	const f = useCurrentFrame();
	const cp = (uv: Pt) => ptOf(PLATES.cellsDef, CD.cx, CD.cy, CD.w, uv);
	const plug = cp(FEAT.plug);
	const m = smooth(prog(f, 0, 24));
	const rungs: Rung[] = [
		{at: -100, label: 'barriers: always there', labelAt: -100, lit: 1},
		{at: -100, label: 'switched on after detection', labelAt: -100, lit: prog(f, K5.detects, 12)},
		{at: -100},
	];
	return (
		<Overlay>
			<Ladder rungs={rungs} />
			<Pl p={PLATES.cellsEntry} cx={lerp(520, CD.cx, m)} cy={lerp(520, CD.cy, m)} w={lerp(820, CD.w, m)} />
			<Defended cx={CD.cx} cy={CD.cy} w={CD.w} plug={prog(f, K5.callose + 6, 18)} walls={prog(f, K5.lignin + 4, 24)} ring={0} id="b05-s5" />
			<Ring cx={plug[0]} cy={plug[1]} rx={44} ry={40} at={K5.callose + 14} out={K5.lignin} color={TEAL} />
			<CTag x={110} y={935} text="callose: a plug made of a sugar chain" at={K5.sugar} color={TEAL} size={32} dim={prog(f, K5.lignin, 10)} out={K5.anti} />
			<GTag x={110} y={140} text="nearby walls thicken" at={K5.lignin + 14} />
			{FEAT.golden.map((g, i) => { const q = cp(g); return <Ring key={i} cx={q[0]} cy={q[1]} rx={58} ry={64} at={K5.anti + 10 + i * 8} color={AMBER} seed={i + 2} />; })}
			<CTag x={110} y={935} text="phytoalexins: antimicrobial chemicals made after an attack" at={K5.anti + 8} color={TEAL} size={32} maxW={1200} />
			<GTag x={110} y={1000} text="also phenolics" at={K5.phyto + 10} />
		</Overlay>
	);
};

// ---------- 6. The firebreak ----------
const K6 = cues(S('firebreak'), {hr: 'the hypersensitive response', cells: 'Cells at and around', kill: 'kill themselves', feeds: 'feeds on living cells', ring: 'a ring of dead', signal: 'A signal can', time: 'arrives in time'});
const BH = {cx: 640, cy: 560, w: 440};
export const SceneFirebreak: React.FC = () => {
	const f = useCurrentFrame();
	const cp = (uv: Pt) => ptOf(PLATES.cellsDef, CD.cx, CD.cy, CD.w, uv);
	const plug = cp(FEAT.plug);
	const cellsO = 1 - prog(f, K6.signal - 4, 18);
	const bp = (uv: Pt) => ptOf(PLATES.banksiaOk, BH.cx, BH.cy, BH.w, uv);
	const live = prog(f, K6.feeds, 16) * cellsO;
	const rungs: Rung[] = [
		{at: -100, label: 'barriers: always there', labelAt: -100, lit: 1},
		{at: -100, label: 'switched on after detection', labelAt: -100, lit: 1},
		{at: -100, label: 'firebreak: cells die', labelAt: K6.hr, lit: prog(f, K6.cells, 12)},
	];
	return (
		<Overlay>
			<Ladder rungs={rungs} />
			<g opacity={cellsO}>
				<Pl p={PLATES.cellsEntry} cx={CD.cx} cy={CD.cy} w={CD.w} />
				<Defended cx={CD.cx} cy={CD.cy} w={CD.w} plug={1} walls={1} ring={prog(f, K6.cells + 6, 24)} id="b05-s6" />
			</g>
			{live > 0.01 ? (
				<g opacity={live}>
					{[[600, 1080], [1500, 1080], [1560, 820]].map((uv, i) => { const q = cp(uv as Pt); return <ellipse key={i} cx={q[0]} cy={q[1]} rx={70} ry={50} fill={GREEN} opacity={0.18} />; })}
				</g>
			) : null}
			<Ring cx={plug[0]} cy={plug[1] + 30} rx={90} ry={80} at={K6.ring} out={K6.signal} color={TERRA} />
			<CTag x={110} y={935} text="cells die on purpose" at={K6.kill} color={TERRA} size={32} out={K6.feeds} />
			<CTag x={110} y={935} text="nothing living to feed on" at={K6.feeds + 6} color={GREEN} size={32} out={K6.signal} />
			<Pl p={PLATES.banksiaOk} cx={BH.cx} cy={BH.cy} w={BH.w} o={prog(f, K6.signal, 18)} />
			<SignalPulse pts={FEAT.signal.map(bp)} at={K6.signal + 14} dur={60} ends={FEAT.leaves.map(bp)} />
			<GTag x={940} y={420} text="signal: prepares the whole plant" at={K6.signal + 30} />
			<GTag x={940} y={480} text="salicylic acid in many plants" at={K6.signal + 50} size={22} />
			<ClockMark x={LAD.x + 40} y={rungY(2) + LAD.rh + 80} at={K6.time} />
			<CTag x={LAD.x + 90} y={rungY(2) + LAD.rh + 56} text="timing matters" at={K6.time + 6} color={AMBER_INK} size={32} />
			{void clamp01}{void fitW}{void GREY_INK}{void Sx}
		</Overlay>
	);
};
