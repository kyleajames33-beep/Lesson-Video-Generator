// M7 B03 scenes 6 to 11: entry adaptations (the chain as a grey strip with "enter" lit teal; the rod's fimbriae
// gripping surface molecules; the COVID-19 spike fitting one receptor in a row, then the virus inside); compare and
// hold on (the compare strip, then the pull back to millimetres and the scolex anchored between two gut walls);
// transmission adaptations (four quarters, "leave" lit amber: influenza and coughed droplets, the feeding mosquito's
// injection path ending in the dermis, the tapeworm cycle through pork cysts, TMV on secateurs); two jobs (thumbnails
// sorted to the enter and leave stations); break the link (three rows with controls and break marks, the pump losing
// its handle, the TB row where scrubbing misses); memory.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {MistakeChip, Overlay} from '../bio-m5-b13/shared';
import {CardBox, CurveArrow} from '../bio-m6-b01/parts';
import {SizeRuler} from '../bio-m7-b01/parts';
import {S} from './common';
import {
	AMBER, AMBER_INK, BreakMark, CTag, Chain, CrossChip, DROP, Drift, Droplets, DrawPath, FEAT, Fit, GREYT, GREY_INK, GTag, GripTicks, GutWall, HChip, HostCircle,
	INK, INK_SOFT, KindTag, Membrane, MiniBurst, Molecules, PLATES, Pl, Receptors, Ring, Rod, Sx, TEAL, Tg, clamp01, fitW, kOf, lerp, prog, ptOf, pulse, smooth, stX,
	tw, vis,
} from './parts';
import type {RKind} from './parts';

/** The route chain as a small grey strip along the top, one station lit. */
const Strip: React.FC<{lit: 0 | 2; o?: number}> = ({lit, o = 1}) => (
	<g transform="translate(960,112) scale(0.42) translate(-960,-560)" opacity={o}>
		<Chain lx={330} rx={1590} y={560} r={90} labels={0} grey={0.6} stLit={lit === 0 ? [1, 0, 0] : [0, 0, 1]} stY={560} glyphO={0.6} />
	</g>
);

// ---------- 6. Getting in: entry adaptations ----------
const K6 = cues(S('entry-adaptations'), {built: 'how are pathogens built', getting: 'getting in', fimb: 'have fimbriae', threads: 'hair-like threads', grip: 'that grip molecules', washed: 'washed away', viruses: 'Viruses have', receptor: 'fit receptor', covid: 'The COVID-19', binds: 'binds a receptor', inside: 'get inside'});
const MEM_Y = 690;
const ROD = {cx: 480, w: 560};
const rodK = ROD.w / (PLATES.rod.box[2] - PLATES.rod.box[0]);
const rodCy0 = 430, rodCy1 = MEM_Y - 28 - (1400 - (PLATES.rod.box[1] + PLATES.rod.box[3]) / 2) * rodK;
const VIR = {cx: 1400, w: 300};
const spikePt = (cy: number) => ptOf(PLATES.covid, VIR.cx, cy, VIR.w, FEAT.spike);
const vCy0 = 440, vCy1 = MEM_Y - 22 - (spikePt(0)[1] - 0);
const MATCH_X = spikePt(0)[0];
const RECEPTORS: {x: number; k: RKind}[] = [{x: 1060, k: 'square'}, {x: 1160, k: 'tri'}, {x: 1260, k: 'fork'}, {x: MATCH_X, k: 'cup'}, {x: 1570, k: 'square'}, {x: 1680, k: 'tri'}, {x: 1790, k: 'fork'}];
export const SceneEntry: React.FC = () => {
	const f = useCurrentFrame();
	const settle = smooth(prog(f, K6.grip, 26));
	const rcy = lerp(rodCy0, rodCy1, settle);
	const tips = FEAT.threads.map(t => ptOf(PLATES.rod, ROD.cx, rcy, ROD.w, t));
	const molXs = [190, tips[0][0], tips[1][0], tips[2][0], 640, 760, 850];
	const bind = smooth(prog(f, K6.binds, 24));
	const vcy = lerp(vCy0, vCy1, bind);
	const inside = prog(f, K6.inside, 18);
	const leftDim = prog(f, K6.viruses, 14);
	return (
		<Overlay>
			<Strip lit={2} o={prog(f, 0, 14)} />
			<GTag x={960} y={168} text="enter" at={K6.getting} size={24} anchor="middle" />
			{/* left: fimbriae */}
			<g opacity={1 - 0.45 * leftDim}>
				<Membrane x0={80} x1={900} y={MEM_Y} at={K6.fimb} />
				<Molecules xs={molXs} y={MEM_Y} at={K6.fimb + 8} lit={[0, settle, settle, settle]} />
				<Rod id="m7b03-rod6" cx={ROD.cx} cy={rcy} w={ROD.w} o={prog(f, K6.fimb, 14)} />
				<Ring cx={tips[1][0]} cy={tips[1][1] - 20} rx={220} ry={70} at={K6.threads} out={K6.grip} color={AMBER} />
				<GripTicks a={tips.map(t => [t[0], t[1] - 2] as [number, number])} b={tips.map(t => [t[0], MEM_Y - 34] as [number, number])} at={K6.grip + 22} />
				<GTag x={100} y={MEM_Y + 30} text="host cell surface" at={K6.fimb + 10} size={24} />
			</g>
			<CTag x={90} y={200} text="fimbriae: short threads that grip host cells" at={K6.fimb + 4} color={TEAL} size={32} maxW={800} dim={leftDim} />
			<CTag x={90} y={900} text="grip: not washed away by mucus or urine" at={K6.washed} color={TEAL} size={30} maxW={800} dim={leftDim} />
			<KindTag x={760} y={990} kind="entry" at={K6.grip + 30} />
			{/* right: a spike fits one receptor */}
			<Membrane x0={1000} x1={1860} y={MEM_Y} at={K6.viruses} />
			<Receptors items={RECEPTORS} y={MEM_Y} at={K6.receptor} match={3} glow={pulse(f, K6.binds + 16, 50) + (f > K6.binds + 40 ? 0.6 : 0)} />
			<Pl p={PLATES.covid} cx={VIR.cx} cy={vcy} w={VIR.w} o={prog(f, K6.viruses, 14) * (1 - inside)} />
			<Pl p={PLATES.covid} cx={MATCH_X} cy={MEM_Y + 130} w={170} o={inside} />
			<GTag x={1600} y={300} text="COVID-19 virus" at={K6.covid} size={24} />
			<GTag x={1020} y={MEM_Y + 30} text="host cell surface" at={K6.viruses + 10} out={K6.inside} size={24} />
			<CTag x={1000} y={200} text="receptor: a molecule on a host cell that a pathogen binds" at={K6.receptor + 6} color={TEAL} size={30} maxW={820} />
			<CTag x={1000} y={900} text="spike fits one receptor: only some cells" at={K6.binds + 10} out={K6.inside} color={TEAL} size={30} maxW={600} />
			<CTag x={1000} y={900} text="then into the cell" at={K6.inside + 6} color={TEAL} size={30} maxW={600} />
			<KindTag x={1700} y={990} kind="entry" at={K6.binds + 30} />
			{void K6.built}{void INK}{void GREYT}
		</Overlay>
	);
};

// ---------- 7. Compare, and holding on ----------
const K7 = cues(S('compare-and-hold'), {both: 'both grip molecules', diff: 'The difference', bact: 'the bacterium can multiply', virus: 'the virus has to get', bigger: 'Bigger pathogens', pork: 'The pork', ring: 'ring of hooks', suckers: 'four suckers', anchor: 'anchor it', swept: 'swept out'});
const SC = {cx: 960, cy: 560, w: 312};
export const SceneCompare: React.FC = () => {
	const f = useCurrentFrame();
	const gone = prog(f, K7.bigger + 20, 20);
	const greyC = prog(f, K7.bigger, 14);
	const cmpO = 1 - gone;
	const sk = kOf(PLATES.scolex, SC.w);
	const crown = ptOf(PLATES.scolex, SC.cx, SC.cy, SC.w, FEAT.crown.c);
	const sucks = FEAT.suckers.map(s => ptOf(PLATES.scolex, SC.cx, SC.cy, SC.w, s));
	const sr = FEAT.suckerR * sk;
	const wl = SC.cx - SC.w / 2 - 40, wr = SC.cx + SC.w / 2 + 40;
	const scO = prog(f, K7.pork - 10, 16);
	const sp = Math.max(pulse(f, K7.suckers, 40), 0);
	const cell = (x: number, w: number, y: number, text: string, at: number, color: string) => {
		const o = prog(f, at, 12);
		return o > 0.01 ? (
			<g opacity={o}>
				<rect x={x} y={y} width={w} height={84} rx={18} fill={greyC > 0.5 ? '#f3f2ee' : '#fffaf0'} stroke={greyC > 0.5 ? GREYT : color} strokeWidth={3} />
				<Sx x={x + w / 2} y={y + 56} text={text} size={38} color={greyC > 0.5 ? GREY_INK : INK} hand anchor="middle" at={-100} />
			</g>
		) : null;
	};
	return (
		<Overlay>
			<g opacity={cmpO} transform={`translate(960,400) scale(${lerp(1, 0.7, smooth(prog(f, K7.bigger, 30)))}) translate(-960,-400)`}>
				{/* the two halves, small */}
				<Membrane x0={250} x1={800} y={380} at={-100} h={40} />
				<Rod id="m7b03-rod7" cx={520} cy={300} w={250} />
				<Rod id="m7b03-rod7b" cx={340} cy={330} w={140} o={prog(f, K7.bact + 14, 14)} />
				<Rod id="m7b03-rod7c" cx={690} cy={330} w={140} o={prog(f, K7.bact + 26, 14)} />
				<Membrane x0={1120} x1={1670} y={300} at={-100} h={40} />
				<Pl p={PLATES.covid} cx={1395} cy={lerp(240, 400, smooth(prog(f, K7.virus, 24)))} w={lerp(150, 120, smooth(prog(f, K7.virus, 24)))} />
				{cell(200, 1520, 500, 'same: a surface structure binds host cell molecules', K7.both, TEAL)}
				{cell(200, 740, 600, 'bacterium: stays on and multiplies', K7.bact, AMBER)}
				{cell(980, 740, 600, 'virus: enters the cell', K7.virus, AMBER)}
			</g>
			{/* the pull back to millimetres and the scolex */}
			<SizeRuler x={120} y={985} states={[{at: -100, len: 60, label: 'thousandths of a mm'}, {at: K7.bigger + 10, len: 220, label: 'millimetres'}]} />
			<GutWall x={wl} y0={250} y1={760} at={K7.anchor} side={1} />
			<GutWall x={wr} y0={250} y1={760} at={K7.anchor} side={-1} />
			<Pl p={PLATES.scolex} cx={SC.cx} cy={SC.cy} w={SC.w} o={scO} />
			<Ring cx={crown[0]} cy={crown[1]} rx={FEAT.crown.r * sk * 1.25} ry={FEAT.crown.r * sk * 1.1} at={K7.ring} color={AMBER} />
			{sucks.map((p, i) => <circle key={i} cx={p[0]} cy={p[1]} r={sr * (1 + 0.15 * sp)} fill="none" stroke={AMBER} strokeWidth={5} opacity={prog(f, K7.suckers + i * 4, 8) * (1 - 0.6 * prog(f, K7.anchor + 30, 14))} />)}
			<GripTicks a={[[sucks[0][0] - sr, sucks[0][1]], [sucks[2][0] - sr, sucks[2][1]], [sucks[1][0] + sr, sucks[1][1]], [sucks[3][0] + sr, sucks[3][1]]]}
				b={[[wl + 6, sucks[0][1]], [wl + 6, sucks[2][1]], [wr - 6, sucks[1][1]], [wr - 6, sucks[3][1]]]} at={K7.anchor + 16} />
			<Tg x={1260} y={360} text="hooks and suckers" at={K7.suckers + 6} out={K7.swept} size={42} />
			<CTag x={1250} y={470} text="entry: holds on at the gut wall" at={K7.anchor + 10} color={TEAL} size={34} maxW={620} />
			<Tg x={1260} y={640} text="anchored: not swept out" at={K7.swept} size={42} />
			<GTag x={180} y={300} text="pork tapeworm head (scolex)" at={K7.pork} size={24} />
			<Pl p={PLATES.tapeworm} cx={1680} cy={900} w={300} o={prog(f, K7.pork + 20, 14)} dim={0.3} />
			{void K7.diff}{void clamp01}
		</Overlay>
	);
};

// ---------- 8. Getting out: transmission adaptations ----------
const K8 = cues(S('transmission-adaptations'), {out: 'getting out', flu: 'Influenza multiplies', lining: 'airway lining', cough: 'triggers coughing', plas: 'Plasmodium ends', sal: 'salivary glands', skin: 'into the skin', tape: "The tapeworm's eggs", faeces: 'leave in faeces', cysts: 'cysts in pig muscle', under: 'undercooked pork', tmv: 'tobacco mosaic virus', coat: 'a coat so tough', tools: 'pruning tools', plant: 'from plant to plant'});
const Q = [{x: 60, y: 200, w: 880, h: 420}, {x: 980, y: 200, w: 880, h: 420}, {x: 60, y: 645, w: 880, h: 415}, {x: 980, y: 645, w: 880, h: 415}];
const LU = {cx: 230, cy: 420, w: 300};
const FD = {cx: 1240, cy: 412, w: fitW(PLATES.feeding, 430, 400)};
export const SceneTransmission: React.FC = () => {
	const f = useCurrentFrame();
	const starts = [K8.flu, K8.plas, K8.tape, K8.tmv];
	const dimOf = (i: number) => (i < 3 ? prog(f, starts[i + 1], 14) : 0);
	const qo = (i: number) => prog(f, starts[i] - 6, 12);
	const air = ptOf(PLATES.lungs, LU.cx, LU.cy, LU.w, FEAT.airway);
	const fp = (u: [number, number]) => ptOf(PLATES.feeding, FD.cx, FD.cy, FD.w, u);
	const head = fp(FEAT.head), gl = fp(FEAT.glands), sIn = fp(FEAT.skinIn), tip = fp(FEAT.tip), cap = fp(FEAT.capillary);
	const fk = kOf(PLATES.feeding, FD.w);
	const wig = prog(f, K8.skin + 36, 30);
	const zq = smooth(vis(f, K8.skin - 16, K8.tape, 20));
	const wx = lerp(tip[0], cap[0], wig), wy = lerp(tip[1], cap[1], wig);
	const PK = {cx: 680, cy: 830, w: 300};
	const cysts = FEAT.cysts.slice(0, 4).map(c => ptOf(PLATES.pork, PK.cx, PK.cy, PK.w, c));
	const pkK = kOf(PLATES.pork, PK.w);
	return (
		<Overlay>
			<Strip lit={0} o={prog(f, 0, 14)} />
			<GTag x={960} y={168} text="leave" at={K8.out} size={24} anchor="middle" />
			{Q.map((q, i) => <CardBox key={i} x={q.x} y={q.y} w={q.w} h={q.h} at={starts[i] - 8} fill="#fffdf8" />)}
			{/* 1. influenza */}
			<g opacity={qo(0) * (1 - 0.55 * dimOf(0))}>
				<Pl p={PLATES.lungs} cx={LU.cx} cy={LU.cy} w={fitW(PLATES.lungs, LU.w, 360)} />
				<Pl p={PLATES.flu} cx={air[0]} cy={air[1]} w={56} o={prog(f, K8.flu + 10, 12)} />
				<Ring cx={air[0]} cy={air[1]} rx={52} ry={66} at={K8.lining} color={AMBER} />
				<HostCircle x={520} y={440} r={56} o={prog(f, K8.cough - 6, 12)} />
				<Droplets sx={560} sy={428} ground={560} range={170} at={K8.cough + 4} bursts={3} gap={50} s={0.85} />
				<line x1={500} x2={740} y1={562} y2={562} stroke={INK_SOFT} strokeWidth={2.5} opacity={prog(f, K8.cough, 12)} />
			</g>
			<Tg x={420} y={262} text="multiplies in the airway lining" at={K8.lining} out={K8.cough + 20} size={34} />
			<Tg x={420} y={262} text="triggers coughing: droplets out" at={K8.cough + 20} size={34} color={dimOf(0) > 0.5 ? GREY_INK : AMBER_INK} />
			<KindTag x={740} y={575 - 50} kind="transmission" at={K8.cough + 30} dim={dimOf(0)} />
			{/* 2. Plasmodium in the mosquito's saliva */}
			<defs><clipPath id="m7b03-q2"><rect x={Q[1].x + 4} y={Q[1].y + 4} width={474} height={Q[1].h - 8} rx={18} /></clipPath></defs>
			<g opacity={qo(1) * (1 - 0.55 * dimOf(1))} clipPath="url(#m7b03-q2)">
				<g transform={`translate(${lerp(tip[0], 1220, zq)},${lerp(tip[1], 400, zq)}) scale(${1 + 1.7 * zq}) translate(${-tip[0]},${-tip[1]})`}>
				<Pl p={PLATES.feeding} cx={FD.cx} cy={FD.cy} w={FD.w} />
				<Ring cx={gl[0]} cy={gl[1]} rx={150 * fk} ry={120 * fk} at={K8.sal} color={AMBER} />
				{f >= K8.skin ? <DrawPath d={`M${head[0]},${head[1]} L${sIn[0]},${sIn[1]} L${tip[0]},${tip[1]}`} at={K8.skin} dur={30} color={AMBER_INK} width={4} dash="3 7" /> : null}
				{f >= K8.skin + 30 ? (
					<g opacity={prog(f, K8.skin + 30, 8)}>
						<circle cx={tip[0]} cy={tip[1]} r={7} fill={AMBER} opacity={1 - wig * 0.6} />
						<path d={`M${wx - 9},${wy} q3,-6 6,0 q3,6 6,0 q3,-6 6,0`} fill="none" stroke="#5a2d82" strokeWidth={3.2} strokeLinecap="round" />
					</g>
				) : null}
				</g>
			</g>
			<GTag x={1000} y={580} text="zoom: skin section" at={K8.skin} out={K8.tape} size={20} />
			<GTag x={1470} y={262} text="salivary glands" at={K8.sal + 6} out={K8.skin - 16} size={24} />
			{f >= K8.sal + 6 && f < K8.skin - 16 ? <line x1={1470} y1={280} x2={gl[0] + 30} y2={gl[1] - 10} stroke={GREYT} strokeWidth={2} /> : null}
			<CTag x={1470} y={420} text="injected under the skin's surface" at={K8.skin + 20} color={AMBER_INK} size={30} maxW={360} dim={dimOf(1)} />
			<KindTag x={1660} y={575 - 50} kind="transmission" at={K8.skin + 30} dim={dimOf(1)} />
			{/* 3. the pork tapeworm cycle */}
			<g opacity={qo(2) * (1 - 0.55 * dimOf(2))}>
				<Pl p={PLATES.tapeworm} cx={200} cy={790} w={fitW(PLATES.tapeworm, 230, 130)} />
				<CurveArrow a={[320, 770]} b={[528, 770]} at={K8.faeces} bow={-60} color={INK_SOFT} width={4} />
				<Sx x={424} y={712} text="eggs in faeces" size={28} color={INK_SOFT} hand anchor="middle" at={K8.faeces + 6} />
				<Pl p={PLATES.pork} cx={PK.cx} cy={PK.cy} w={PK.w} o={prog(f, K8.cysts, 14)} />
				{cysts.map((c, i) => <Ring key={i} cx={c[0]} cy={c[1]} rx={46 * pkK * 2.2} ry={34 * pkK * 2.2} at={K8.cysts + 14 + i * 5} out={K8.under} color={AMBER} seed={i + 2} />)}
				<CurveArrow a={[560, 910]} b={[290, 870]} at={K8.under} bow={70} color={AMBER_INK} width={4} />
				<Sx x={424} y={968} text="undercooked pork eaten" size={28} color={AMBER_INK} hand anchor="middle" at={K8.under + 8} />
			</g>
			<GTag x={680} y={950} text="cysts in pork" at={K8.cysts + 10} out={K8.under} size={24} anchor="middle" />
			<CTag x={80} y={995} text="eggs and cysts: carried to a new host" at={K8.under + 24} color={AMBER_INK} size={28} maxW={600} dim={dimOf(2)} />
			<KindTag x={740} y={995} kind="transmission" at={K8.under + 34} dim={dimOf(2)} />
			{/* 4. tobacco mosaic virus on tools */}
			<g opacity={qo(3)}>
				<Pl p={PLATES.tmv} cx={1420} cy={720} w={300} o={prog(f, K8.tmv, 12)} />
				<Ring cx={1420} cy={720} rx={176} ry={30} at={K8.coat} color={AMBER} />
				<Pl p={PLATES.leafSick} cx={1110} cy={860} w={fitW(PLATES.leafSick, 220, 140)} o={prog(f, K8.tmv + 10, 12)} />
				<Pl p={PLATES.secateurs} cx={1420} cy={880} w={fitW(PLATES.secateurs, 250, 170)} o={prog(f, K8.tools, 12)} />
				<Pl p={PLATES.leafOk} cx={1730} cy={860} w={fitW(PLATES.leafOk, 220, 140)} o={prog(f, K8.tools + 10, 12)} />
				<CurveArrow a={[1180, 820]} b={[1340, 830]} at={K8.plant} bow={-50} color={AMBER_INK} width={4} />
				<CurveArrow a={[1500, 830]} b={[1660, 820]} at={K8.plant + 14} bow={-50} color={AMBER_INK} width={4} />
			</g>
			<Tg x={1420} y={688} text="tough coat: survives on tools" at={K8.coat + 6} size={32} anchor="middle" />
			<CTag x={1000} y={995} text="carried on tools" at={K8.plant + 20} color={AMBER_INK} size={28} />
			<KindTag x={1660} y={995} kind="transmission" at={K8.plant + 30} />
			{void K8.out}{void TEAL}{void DROP}{void vis}
		</Overlay>
	);
};

// ---------- 9. Keep the two jobs apart ----------
const K9 = cues(S('two-jobs'), {apart: 'two jobs apart', entry: 'An entry adaptation', holds: 'holds it where', hooks: 'fimbriae or hooks', trans: 'A transmission adaptation', across: 'out and across', riding: 'riding in mosquito', name: 'Name the feature', what: 'what it does', link: 'link it to'});
const C9 = {lx: 300, rx: 1620, y: 330, r: 80};
/** A thumbnail that slides from (x0, y0) to (x1, y1) from `at`. */
const Slide: React.FC<{at: number; from: [number, number]; to: [number, number]; children: (x: number, y: number) => React.ReactNode}> = ({at, from, to, children}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12);
	if (o <= 0.01) return null;
	const m = smooth(prog(f, at, 26));
	return <g opacity={o}>{children(lerp(from[0], to[0], m), lerp(from[1], to[1], m))}</g>;
};
export const SceneTwoJobs: React.FC = () => {
	const f = useCurrentFrame();
	const sx = stX(C9.lx, C9.rx, C9.r);
	const chipDim = prog(f, K9.name - 10, 12);
	const steps = [{t: 'feature', at: K9.name, x: 240}, {t: 'what it does', at: K9.what, x: 660}, {t: 'how it gets in or across', at: K9.link, x: 1180}];
	const mw = tw('hooks help the tapeworm spread', 30) + 48;
	return (
		<Overlay>
			<Chain {...C9} st={[1, 1, 1]} stLit={[prog(f, K9.trans, 10), 0, prog(f, K9.entry, 10)]} glyphO={0.7} labels={0.7} />
			<CTag x={sx[2]} y={525} text="entry: gets in, holds on" at={K9.entry + 4} color={TEAL} size={36} anchor="middle" dim={chipDim} />
			<CTag x={sx[0]} y={525} text="transmission: gets out and across" at={K9.trans + 4} color={AMBER_INK} size={36} anchor="middle" dim={chipDim} />
			<Slide at={K9.holds} from={[2100, 690]} to={[1250, 690]}>{(x, y) => <Rod id="m7b03-rod9" cx={x} cy={y} w={180} />}</Slide>
			<Slide at={K9.holds + 10} from={[2100, 690]} to={[1450, 690]}>{(x, y) => <Pl p={PLATES.covid} cx={x} cy={y} w={110} />}</Slide>
			<Slide at={K9.hooks + 10} from={[2100, 690]} to={[1630, 690]}>{(x, y) => <Pl p={PLATES.scolex} cx={x} cy={y} w={fitW(PLATES.scolex, 120, 150)} />}</Slide>
			<Slide at={K9.across} from={[-200, 690]} to={[150, 690]}>{(x, y) => <MiniBurst x={x} y={y} s={1.3} />}</Slide>
			<Slide at={K9.across + 10} from={[-200, 690]} to={[340, 690]}>{(x, y) => <Pl p={PLATES.feeding} cx={x} cy={y} w={fitW(PLATES.feeding, 160, 150)} />}</Slide>
			<Slide at={K9.across + 20} from={[-200, 690]} to={[540, 690]}>{(x, y) => <Pl p={PLATES.pork} cx={x} cy={y} w={fitW(PLATES.pork, 160, 120)} />}</Slide>
			<Slide at={K9.across + 30} from={[-200, 690]} to={[730, 690]}>{(x, y) => <Pl p={PLATES.secateurs} cx={x} cy={y} w={fitW(PLATES.secateurs, 150, 110)} />}</Slide>
			<MistakeChip x={1440 - mw / 2} y={782} text="hooks help the tapeworm spread" at={K9.hooks + 30} cross={K9.trans - 6} size={30} />
			<GTag x={1440} y={852} text="hooks keep it in: entry" at={K9.trans} size={24} anchor="middle" />
			{steps.map((s, i) => (
				<g key={s.t}>
					<HChip x={s.x} y={920} text={s.t} at={s.at} size={40} />
					{i < 2 ? <CurveArrow a={[s.x + tw(s.t, 40, true) + 60, 950]} b={[steps[i + 1].x - 14, 950]} at={steps[i + 1].at - 4} bow={0} color={INK_SOFT} width={4} /> : null}
				</g>
			))}
			{void K9.apart}{void K9.riding}{void GREYT}{void clamp01}{void Fit}
		</Overlay>
	);
};

// ---------- 10. Break the link ----------
const K10 = cues(S('break-the-link'), {direct: 'Direct contact', barriers: 'barriers and distance', indirect: 'Indirect contact', treat: 'treat the carrier', vectors: 'Vectors', bednets: 'bed nets', snow: 'Snow had', handle: "pump's handle", off: 'taken off', broke: 'broke the water link', wrong: 'Get the route wrong', scrub: 'scrubbing surfaces', tbair: 'tuberculosis in the air'});
const RY = [260, 470, 680];
const RL = {lx: 150, rx: 770, r: 46};
const Row: React.FC<{y: number; at: number; label: string; o?: number}> = ({y, at, label, o = 1}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 14) * o;
	if (p <= 0.01) return null;
	return (
		<g opacity={p}>
			<Chain lx={RL.lx} rx={RL.rx} y={y} r={RL.r} labels={0} st={[0, 0, 0]} glyphO={0.8} />
			<Sx x={RL.lx - RL.r} y={y - 66} text={label} size={28} color={GREY_INK} weight={700} at={-100} />
		</g>
	);
};
export const SceneBreak: React.FC = () => {
	const f = useCurrentFrame();
	const lit = [K10.barriers, K10.treat, K10.bednets, K10.wrong];
	const dimAt = (i: number) => prog(f, lit[i + 1] ?? 1e9, 12);
	const swap = prog(f, K10.off, 24);
	const grow = smooth(prog(f, K10.snow, 20));
	const pw = fitW(PLATES.pump, lerp(70, 110, grow), lerp(100, 150, grow));
	return (
		<Overlay>
			<Row y={RY[0]} at={0} label="direct contact" />
			<Row y={RY[1]} at={6} label="indirect contact" />
			<Row y={RY[2]} at={12} label="vector" />
			{/* lane contents */}
			<Pl p={PLATES.handle} cx={300} cy={RY[1]} w={fitW(PLATES.handle, 90, 80)} o={prog(f, 10, 12)} />
			<Pl p={PLATES.pump} cx={455} cy={RY[1]} w={pw} o={prog(f, 12, 12) * (1 - swap)} />
			{swap > 0.01 ? <Pl p={PLATES.pump} cx={455} cy={RY[1]} w={pw} o={0.5 * (1 - prog(f, K10.off + 30, 30))} dim={1} /> : null}
			<Pl p={PLATES.pumpNo} cx={455} cy={RY[1]} w={pw} o={swap} />
			<Pl p={PLATES.chicken} cx={610} cy={RY[1]} w={fitW(PLATES.chicken, 100, 80)} o={prog(f, 14, 12)} />
			<Pl p={PLATES.anoph} cx={460} cy={RY[2]} w={fitW(PLATES.anoph, 140, 100)} o={prog(f, 16, 12)} />
			{/* controls */}
			<g opacity={1 - 0.45 * dimAt(0)}>
				<Fit p={PLATES.gloves} cx={930} cy={RY[0]} mw={150} mh={110} o={prog(f, K10.barriers, 12)} />
				<Fit p={PLATES.mask} cx={1100} cy={RY[0]} mw={150} mh={100} o={prog(f, K10.barriers + 10, 12)} />
			</g>
			<HChip x={1220} y={RY[0] - 29} text="barriers and distance" at={K10.barriers + 6} size={32} dim={dimAt(0)} />
			<BreakMark x={330} y={RY[0]} at={K10.barriers + 12} />
			<g opacity={1 - 0.45 * dimAt(1)}><Fit p={PLATES.sink} cx={980} cy={RY[1]} mw={170} mh={130} o={prog(f, K10.treat, 12)} /></g>
			<HChip x={1110} y={RY[1] - 29} text="treat the carrier: water, food, surfaces, air" at={K10.treat + 6} size={30} dim={dimAt(1)} />
			<BreakMark x={690} y={RY[1]} at={K10.treat + 12} pulseAt={K10.broke} />
			<g opacity={1 - 0.45 * dimAt(2)}><Fit p={PLATES.bednet} cx={980} cy={RY[2]} mw={160} mh={170} o={prog(f, K10.bednets, 12)} /></g>
			<HChip x={1110} y={RY[2] - 29} text="break it at the vector" at={K10.bednets + 6} size={32} dim={dimAt(2)} />
			<BreakMark x={640} y={RY[2]} at={K10.bednets + 12} />
			<GTag x={455} y={RY[1] + 84} text="Snow: the water link" at={K10.off + 10} out={K10.wrong} size={24} anchor="middle" />
			{/* getting the route wrong: tuberculosis in the air */}
			<Row y={890} at={K10.wrong} label="tuberculosis: air" />
			<Drift sx={RL.lx + 110} sy={860} x1={RL.rx - 30} band={22} at={K10.wrong + 6} n={18} period={120} />
			<CrossChip x={930} y={850} text="scrub surfaces" at={K10.scrub} cross={K10.tbair + 8} caption="air route: ventilate instead" size={32} />
			{f >= K10.scrub + 10 ? <CurveArrow a={[925, 880]} b={[640, 918]} at={K10.scrub + 10} bow={30} color={GREYT} width={3.5} /> : null}
			{void K10.direct}{void K10.indirect}{void K10.vectors}{void K10.handle}{void AMBER}{void INK}
		</Overlay>
	);
};

// ---------- 11. Memory ----------
const K11 = cues(S('memory'), {name: 'name the route', every: 'Every control measure', mask: 'A mask breaks', water: 'clean water', bednet: 'a bed net'});
export const SceneMemory: React.FC = () => {
	const f = useCurrentFrame();
	const pairs = [
		{x: 420, at: K11.mask, p: PLATES.mask, mw: 230, mh: 150, label: 'droplets'},
		{x: 960, at: K11.water, p: PLATES.pumpNo, mw: 150, mh: 220, label: 'water'},
		{x: 1500, at: K11.bednet, p: PLATES.bednet, mw: 200, mh: 220, label: 'mosquito'},
	];
	return (
		<Overlay>
			<GTag x={960} y={150} text="name the route first: the control follows" at={K11.name + 6} out={K11.every} size={28} anchor="middle" />
			<Sx x={960} y={330} text="Every control measure breaks a link." size={80} color={AMBER_INK} hand anchor="middle" at={K11.every} />
			{pairs.map((q, i) => {
				const o = prog(f, q.at, 14);
				if (o <= 0.01) return null;
				const ly = 800;
				return (
					<g key={i} opacity={o}>
						<Fit p={q.p} cx={q.x} cy={590} mw={q.mw} mh={q.mh} />
						<rect x={q.x - 170} y={ly - 26} width={340} height={52} fill="#efe6d4" />
						<line x1={q.x - 170} x2={q.x + 170} y1={ly - 26} y2={ly - 26} stroke={INK_SOFT} strokeWidth={3} />
						<line x1={q.x - 170} x2={q.x + 170} y1={ly + 26} y2={ly + 26} stroke={INK_SOFT} strokeWidth={3} />
						{i === 0 ? [0, 1, 2, 3].map(k => <circle key={k} cx={q.x - 120 + k * 30} cy={ly - 6 + (k % 2) * 12} r={6} fill={DROP} />) : null}
						{i === 1 ? [0, 1, 2].map(k => <path key={k} d={`M${q.x - 120 + k * 34},${ly - 12} q8,12 0,22 q-8,-10 0,-22 Z`} fill={DROP} />) : null}
						{i === 2 ? <Pl p={PLATES.anoph} cx={q.x - 90} cy={ly} w={90} /> : null}
						<BreakMark x={q.x + 60} y={ly} h={90} at={q.at + 12} />
						<Sx x={q.x} y={ly + 70} text={q.label} size={30} color={GREY_INK} weight={700} anchor="middle" at={-100} />
					</g>
				);
			})}
			{void INK}{void TEAL}{void vis}
		</Overlay>
	);
};
