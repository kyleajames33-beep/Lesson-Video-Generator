// M7 B08 scenes 1 to 6: the hook (a virus coated with antibodies, a second virus slipping into an airway cell while
// antibodies stop at the membrane, a row of identical cells: which is infected?); a virus gets in (the airway lining,
// a zoom onto one cell, the spike docking, the aligned infected partner, new viruses leaving); cells display pieces
// (a protein chain cut into pieces that travel to cups on the rim; grey own pieces, red virus pieces); the T cell's
// receptor (forks of one shape, no binding to free virus, seated over a cup and its piece together); finding the
// right T cells (a dendritic cell with red pieces, the fitting T cells light, clone, helper and cytotoxic kinds);
// helper T cells coordinate (go-ahead to a B cell, cytokines to a cytotoxic T cell and to a macrophage).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Heading, Overlay} from '../bio-m5-b13/shared';
import {ResponseStrip, stepRect} from '../bio-m7-b06/strip';
import {S} from './common';
import {FEAT, PLATES} from './assets';
import {HEAD, strip8} from './board';
import {
	AMBER, AMBER_INK, AirCell, CTag, Cup, Dots, DrawPath, Flow, Fork, GREY_INK, GTag, Gloss, MistakeChip, Outline, PlainArrow, PlateB, Pl, Ring, TCell, TClone, TEAL,
	VRED, Yg, ZoomBox, clamp01, cupSites, cupSize, lerp, prog, ptOf, seatFor, smooth, vis,
} from './parts';
import type {Pt} from './parts';

const DEG = Math.PI / 180;
/** A T cell centre that puts its fork at angle `a` (radians) at stem point p, for a cell of box width w. */
export const tCentreFor = (p: Pt, a: number, w: number): Pt => {
	const r = FEAT.tR * (w / (PLATES.helper.box[2] - PLATES.helper.box[0]));
	return [p[0] - Math.cos(a) * r, p[1] - Math.sin(a) * r];
};
/** Fork angles (degrees) starting at `a0` degrees, six around the cell. */
export const anglesFrom = (a0: number) => [0, 60, 120, 180, 240, 300].map(d => a0 + d);

// ---------- 1. Hook ----------
const K1 = cues(S('hook'), {gets: 'It gets into', billions: 'among billions', y1973: 'In 1973', tcells: 'involves T cells'});
const AC1 = {cx: 1180, cy: 540, w: 330};
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const top = ptOf(PLATES.cell, AC1.cx, AC1.cy, AC1.w, [1010, 470]);
	const leftEdge = ptOf(PLATES.cell, AC1.cx, AC1.cy, AC1.w, [762, 1000])[0];
	const inU = smooth(prog(f, K1.gets + 4, 30));
	const row = smooth(prog(f, K1.billions, 30));
	const leftO = 1 - prog(f, K1.billions, 16);
	const slot = (i: number): Pt => [760 + i * 130, 540];
	return (
		<>
			<Heading text={HEAD} at={K1.tcells + 6} size={58} />
			<Overlay>
				<g opacity={leftO}>
					<Pl p={PLATES.virus} cx={360} cy={450} w={340} o={prog(f, 0, 16)} />
					{[0, 60, 120, 180, 240, 300].map((d, i) => {
						const a = (d + 20) * DEG;
						return <Yg key={i} x={360 + Math.cos(a) * 250} y={450 + Math.sin(a) * 250} ang={a + Math.PI} L={70} k="tri" o={prog(f, 10 + i * 4, 10)} />;
					})}
					<GTag x={150} y={700} text="antibodies bind viruses outside cells, b07" at={20} size={22} />
					{[0, 1, 2].map(i => {
						const u = smooth(prog(f, K1.gets + 20 + i * 6, 40));
						return <Yg key={'d' + i} x={lerp(760, leftEdge - 70, u)} y={430 + i * 110} ang={0} L={60} k="tri" o={prog(f, K1.gets + 20 + i * 6, 8)} />;
					})}
					<CTag x={700} y={860} text="antibodies can't get in" at={K1.gets + 50} color={AMBER_INK} size={30} />
				</g>
				<Pl p={PLATES.virus} cx={lerp(980, top[0], inU)} cy={lerp(260, top[1] + 40 * inU, inU)} w={70} o={prog(f, K1.gets, 8) * (1 - prog(f, K1.gets + 36, 12)) * leftO} />
				{Array.from({length: 8}, (_, i) => {
					const s = slot(i);
					if (i === 3) return <AirCell key={i} cx={lerp(AC1.cx, s[0], row)} cy={lerp(AC1.cy, s[1], row)} w={lerp(AC1.w, 120, row)} o={prog(f, 0, 16)} />;
					return <AirCell key={i} cx={s[0]} cy={s[1]} w={120} o={prog(f, K1.billions + 10 + i * 3, 10)} />;
				})}
				<Ring cx={slot(5)[0]} cy={slot(5)[1]} rx={58} ry={130} at={K1.billions + 40} color={GREY_INK} width={3} />
				<GTag x={880} y={800} text="which one is infected?" at={K1.billions + 44} size={24} />
				<GTag x={120} y={980} text="Doherty and Zinkernagel, John Curtin School of Medical Research, ANU, 1973; Nobel Prize 1996" at={K1.y1973 + 6} size={22} />
			</Overlay>
		</>
	);
};

// ---------- 2. A virus gets in ----------
const K2 = cues(S('virus-enters'), {lands: 'A virus lands', protein: 'A protein on', fits: 'fits a molecule', airway: 'an airway cell', getsin: 'gets in', takes: 'takes over the', next: 'infect the cells next', touch: 'touch it'});
const LN = {cx: 680, cy: 560, w: 1100};
export const CELL2 = {cx: 640, cy: 600, w: 480};
export const SceneVirusEnters: React.FC = () => {
	const f = useCurrentFrame();
	const lp = (uv: Pt) => ptOf(PLATES.airway, LN.cx, LN.cy, LN.w, uv);
	const zc = lp(FEAT.liningCell);
	const open = smooth(prog(f, K2.protein + 12, 26));
	const cw = lerp(90, CELL2.w, open), ccx = lerp(zc[0], CELL2.cx, open), ccy = lerp(zc[1], CELL2.cy, open);
	const cp = (uv: Pt) => ptOf(PLATES.cell, CELL2.cx, CELL2.cy, CELL2.w, uv);
	const dock = cp([1010, 420]), inside = cp([1010, 800]);
	const goIn = smooth(prog(f, K2.getsin, 24));
	const apex = [cp([900, 330]), cp([1100, 320]), cp([1010, 280])];
	const nb: Pt = [870, 640];
	const right = cp([1262, 900]);
	return (
		<Overlay>
			<ResponseStrip {...strip8(0)} o={prog(f, 0, 16)} />
			<Pl p={PLATES.airway} cx={LN.cx} cy={LN.cy} w={LN.w} o={prog(f, 0, 14) * (1 - prog(f, K2.protein + 26, 14))} />
			<Flow a={FEAT.mucus.map(m => [lp(m)[0] - 40, 150] as Pt)} b={FEAT.mucus.map(lp)} at={K2.lands + 4} out={K2.protein + 20} n={8} period={40} r={8} color={VRED} stroke="#6a1a1a" loop={false} spread={30} />
			<GTag x={120} y={940} text="virus drawn far larger than real" at={K2.lands + 10} size={22} out={K2.takes} />
			<GTag x={520} y={940} text="b06: mucus and cilia" at={K2.lands + 20} size={22} out={K2.protein + 20} />
			<ZoomBox x0={zc[0] - 50} y0={zc[1] - 100} x1={zc[0] + 50} y1={zc[1] + 100} at={K2.protein} out={K2.protein + 30} />
			{f >= K2.protein + 12 ? <AirCell cx={ccx} cy={ccy} w={cw} inf={prog(f, K2.takes + 4, 20)} /> : null}
			<Pl p={PLATES.virus} cx={lerp(dock[0], inside[0], goIn)} cy={lerp(dock[1] - 60 * (1 - prog(f, K2.fits, 16)), inside[1], goIn)} w={lerp(110, 70, goIn)} o={prog(f, K2.fits - 4, 10) * (1 - prog(f, K2.getsin + 16, 10))} />
			<CTag x={990} y={250} text="spike fits a molecule on the cell" at={K2.airway} color={TEAL} size={28} maxW={380} dim={prog(f, K2.takes, 10)} />
			<GTag x={990} y={340} text="b03" at={K2.airway + 12} size={22} out={K2.takes} />
			<CTag x={990} y={420} text="the cell makes new viruses" at={K2.takes + 14} color={VRED} size={28} maxW={380} dim={prog(f, K2.touch, 10)} />
			<Outline x={nb[0]} y={nb[1]} w={150} h={540} o={prog(f, K2.next, 14)} />
			<Flow a={apex} b={[[nb[0] - 30, nb[1] - 220], [nb[0] + 10, nb[1] - 240], [nb[0] - 10, nb[1] - 200]]} at={K2.next + 4} n={9} period={50} r={8} color={VRED} stroke="#6a1a1a" loop={false} spread={20} />
			{[0, 1, 2].map(i => {
				const u = smooth(prog(f, K2.touch - 30 + i * 6, 30));
				return <Yg key={i} x={lerp(1320, right[0] + 30, u)} y={right[1] - 120 + i * 120} ang={Math.PI} L={60} k="tri" o={prog(f, K2.touch - 30 + i * 6, 8)} />;
			})}
			<CTag x={990} y={860} text="antibodies: outside only" at={K2.touch + 4} color={AMBER_INK} size={28} />
		</Overlay>
	);
};

// ---------- 3. Cells display pieces ----------
const K3 = cues(S('display-pieces'), {cuts: 'cuts up some', held: 'held in display', own: 'its own proteins', vpieces: 'displays virus pieces', antigen: 'antigen presentation'});
export const H3 = {cx: 420, cy: 600, w: 440};
export const I3 = {cx: 960, cy: 600, w: 440};
export const RED_CUPS = [1, 3, 6, 8, 10];
export const SceneDisplay: React.FC = () => {
	const f = useCurrentFrame();
	const hs = cupSites(H3.cx, H3.cy, H3.w);
	const chain: Pt[] = Array.from({length: 6}, (_, j) => ptOf(PLATES.cell, H3.cx, H3.cy, H3.w, [880 + j * 50, 980 + (j % 2) * 30]));
	const cupsO = prog(f, K3.held + 4, 14);
	const own = vis(f, K3.own, K3.vpieces, 14);
	return (
		<Overlay>
			<ResponseStrip {...strip8(0)} />
			<AirCell cx={H3.cx} cy={H3.cy} w={H3.w} o={prog(f, 0, 14)} cups={{o: cupsO, glowIdx: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], glow: own * (0.5 + 0.5 * Math.sin(f / 6))}} />
			<AirCell cx={I3.cx} cy={I3.cy} w={I3.w} inf={1} o={prog(f, 4, 14)} cups={{o: prog(f, K3.vpieces + 4, 14), red: RED_CUPS, glowIdx: RED_CUPS, glow: vis(f, K3.vpieces + 10, K3.antigen, 14)}} />
			{f >= K3.cuts && f < K3.held + 20 ? chain.map((c, j) => {
				const u = smooth(prog(f, K3.cuts + 24 + j * 4, 30));
				const e = hs[j % 5].p;
				const x = lerp(c[0], e[0], u), y = lerp(c[1], e[1], u);
				const brk = prog(f, K3.cuts + 12, 10);
				return <line key={j} x1={x - 11} y1={y} x2={x + 11 + (1 - brk) * 14} y2={y} stroke="#6b6f73" strokeWidth={8} strokeLinecap="round" opacity={prog(f, K3.cuts, 10) * (1 - prog(f, K3.held + 6, 10))} />;
			}) : null}
			<GTag x={120} y={1010} text="model" at={K3.cuts + 10} out={K3.held} size={22} />
			<CTag x={90} y={150} text="display molecule" at={K3.held + 12} color={TEAL} size={30} dim={prog(f, K3.own, 10)} out={K3.antigen} />
			<Gloss x={380} y={192} text="MHC" at={K3.held + 26} color={GREY_INK} out={K3.antigen} />
			<GTag x={700} y={150} text="model: drawn far larger than real" at={K3.held + 20} size={22} />
			<CTag x={180} y={1000} text="own pieces: healthy" at={K3.own + 8} color={GREY_INK} size={30} dim={prog(f, K3.vpieces, 10)} />
			<CTag x={760} y={1000} text="virus pieces: infected" at={K3.vpieces + 14} color={VRED} size={30} dim={prog(f, K3.antigen, 10)} />
			<CTag x={90} y={150} text="antigen presentation: displaying pieces on the cell surface" at={K3.antigen + 10} color={TEAL} size={30} maxW={1200} />
		</Overlay>
	);
};

// ---------- 4. The T cell's receptor ----------
const K4 = cues(S('t-cell-receptor'), {random: 'made at random', free: 'bind a free', fits: 'only fits a', clue: 'found the clue', checks: 'checks the display'});
const TC4 = {cx: 330, cy: 470, w: 300};
const IC4 = {cx: 980, cy: 560, w: 380};
export const SceneReceptor: React.FC = () => {
	const f = useCurrentFrame();
	const slide = smooth(prog(f, K4.fits, 26));
	const icx = lerp(1500, IC4.cx, slide);
	const site = cupSites(icx, IC4.cy, IC4.w)[2];
	const cs = cupSize(IC4.w);
	const seat = seatFor(site.p[0], site.p[1], site.a, cs);
	const target = tCentreFor(seat.p, seat.a, TC4.w);
	const mv = smooth(prog(f, K4.fits + 20, 28));
	const tc: Pt = [lerp(TC4.cx, target[0], mv), lerp(TC4.cy, target[1], mv)];
	const seated = prog(f, K4.fits + 46, 8);
	const vu = clamp01((f - K4.free) / 80);
	const check = prog(f, K4.checks + 4, 12);
	return (
		<Overlay>
			<ResponseStrip {...strip8(0)} />
			<TCell cx={tc[0]} cy={tc[1]} w={TC4.w} o={prog(f, 0, 14)} angles={anglesFrom(seat.a / DEG)} skip={seated > 0.5 ? 0 : -1} lit={check} />
			{seated > 0.01 ? <Fork x={seat.p[0]} y={seat.p[1]} ang={seat.a} s={cs} o={seated} lit={check} /> : null}
			{[{x: 640, n: 1}, {x: 900, n: 2}, {x: 1160, n: 3}].map((c, i) => <TCell key={i} cx={c.x} cy={470} w={200} notch={c.n} o={vis(f, K4.random + 6 + i * 8, K4.free - 6, 14)} />)}
			<GTag x={640} y={640} text="as B cells, b07" at={K4.random + 30} out={K4.free - 6} size={22} />
			<CTag x={90} y={150} text="T cells: lymphocytes, mature in the thymus" at={10} color={TEAL} size={30} maxW={900} dim={prog(f, K4.random, 10)} out={K4.clue} />
			<GTag x={90} y={230} text="model: receptors drawn far larger than real" at={24} size={22} out={K4.clue} />
			{f >= K4.free ? <Pl p={PLATES.virus} cx={lerp(900, 80, vu)} cy={lerp(300, 200, vu) + Math.sin(vu * 6) * 10} w={110} o={Math.min(1, vu * 6, (1 - vu) * 6)} /> : null}
			<MistakeChip x={90} y={760} text="T cells bind free virus" at={K4.free + 6} cross={K4.free + 26} size={30} />
			<AirCell cx={icx} cy={IC4.cy} w={IC4.w} inf={1} o={prog(f, K4.fits, 12)} cups={{red: [2, 6, 8], outlineIdx: 2, outline: check}} />
			<CTag x={90} y={850} text="fits a displayed piece" at={K4.fits + 50} color={TEAL} size={30} dim={prog(f, K4.checks, 10)} />
			<GTag x={90} y={150} text="Doherty and Zinkernagel, 1973" at={K4.clue + 6} size={24} />
			<GTag x={90} y={205} text="virus + the cell's own display molecule" at={K4.clue + 20} size={22} />
			<CTag x={90} y={940} text="cup + piece, together" at={K4.checks + 10} color={TEAL} size={30} />
		</Overlay>
	);
};

// ---------- 5. Finding the right T cells ----------
const K5 = cues(S('find-t-cells'), {dend: 'dendritic cells carried', displayed: 'and displayed them', few: 'Only the few', selected: 'are selected', divide: 'divide into clones', helper: 'helper T cells', cyto: 'cytotoxic T cells'});
const ROW5 = [1, 0, 2, 3, 0, 1];
export const SceneFindT: React.FC = () => {
	const f = useCurrentFrame();
	const nodeIn = smooth(prog(f, K5.dend, 24));
	const DC = {cx: 520, cy: 470, w: 560};
	const dp = (uv: Pt) => ptOf(PLATES.dendritic, DC.cx, DC.cy, DC.w, uv);
	const body = dp([1010, 1000]);
	const lit = prog(f, K5.few + 20, 12);
	const div = smooth(prog(f, K5.divide, 24));
	const dO = prog(f, K5.dend + 6, 14) * (1 - prog(f, K5.divide, 16));
	const rowX = (i: number) => 300 + i * 170;
	const home: Pt[] = [[420, 400], [420, 760]];
	const strip = strip8(0, [
		{at: K5.displayed + 4, lit: prog(f, K5.displayed + 8, 10)},
		{at: K5.selected + 4, lit: prog(f, K5.selected + 8, 10)},
		{at: K5.divide + 10, lit: prog(f, K5.divide + 14, 10)},
	]);
	const killer = prog(f, K5.cyto + 6, 16);
	return (
		<Overlay>
			<ResponseStrip {...strip} />
			<Pl p={PLATES.node} cx={lerp(640, 160, nodeIn)} cy={lerp(560, 250, nodeIn)} w={lerp(700, 200, nodeIn)} o={prog(f, 0, 14)} dim={nodeIn * 0.7} />
			<g opacity={dO}>
				<Pl p={PLATES.dendritic} cx={DC.cx} cy={DC.cy} w={DC.w} />
				{FEAT.dArms.map((uv, i) => {
					const q = dp(uv);
					return <Cup key={i} x={q[0]} y={q[1]} ang={Math.atan2(q[1] - body[1], q[0] - body[0])} s={18} red o={prog(f, K5.dend + 16 + i * 3, 10)} />;
				})}
			</g>
			<GTag x={300} y={180} text="b06: pieces of the pathogen" at={K5.dend + 20} out={K5.divide} size={22} />
			{ROW5.map((n, i) => {
				const fit = n === 0;
				const hi = fit ? (i === 1 ? 0 : 1) : -1;
				const p: Pt = hi >= 0 ? [lerp(rowX(i), home[hi][0], div), lerp(860, home[hi][1], div)] : [rowX(i), 860];
				const o = prog(f, K5.few + i * 3, 10) * (fit ? 1 : 1 - prog(f, K5.divide, 14));
				const isK = hi === 1;
				return <TCell key={i} cx={p[0]} cy={p[1]} w={lerp(120, 130, div)} notch={n} o={o} lit={fit ? lit : 0} glow={fit ? lit * (1 - div) : 0} grey={fit ? 0 : lit * 0.85} killer={isK ? killer : 0} ring={hi === 0 ? 'teal' : hi === 1 ? 'amber' : undefined} ringO={hi === 0 ? prog(f, K5.helper + 4, 12) : killer} forks={1 - div * 0.7} />;
			})}
			<CTag x={880} y={660} text="only fitting T cells" at={K5.few + 24} color={TEAL} size={28} dim={prog(f, K5.divide, 10)} out={K5.divide + 20} />
			<TClone x={home[0][0]} y={home[0][1]} at={K5.divide + 20} dx={140} h={240} w={64} ring="teal" ringO={prog(f, K5.helper + 4, 12)} />
			<TClone x={home[1][0]} y={home[1][1]} at={K5.divide + 26} dx={140} h={240} w={64} killer={killer} ring="amber" ringO={killer} />
			<GTag x={760} y={180} text="clonal selection, as in b07" at={K5.divide + 20} size={22} />
			<GTag x={760} y={230} text="several days" at={K5.divide + 30} size={22} />
			<CTag x={860} y={330} text="helper T cells" at={K5.helper + 6} color={TEAL} size={32} />
			<CTag x={860} y={700} text="cytotoxic T cells" at={K5.cyto + 8} color={AMBER_INK} size={32} />
			<Gloss x={864} y={420} text="CD4" at={K5.cyto + 34} color={GREY_INK} />
			<Gloss x={864} y={790} text="CD8" at={K5.cyto + 40} color={GREY_INK} />
		</Overlay>
	);
};

// ---------- 6. Helper T cells coordinate ----------
const K6 = cues(S('helper-t-cells'), {mainly: 'mainly coordinate', bcell: 'on a B cell', cyto: 'called cytokines', multiply: 'cytotoxic T cells multiply', macro: 'make macrophages'});
const BC6 = {cx: 300, cy: 500, w: 300};
export const SceneHelper: React.FC = () => {
	const f = useCurrentFrame();
	const k = BC6.w / (PLATES.bare.box[2] - PLATES.bare.box[0]);
	const bc = ptOf(PLATES.bare, BC6.cx, BC6.cy, BC6.w, FEAT.bC);
	const bcups = [0, 60, 120, 180, 240, 300].map(d => ({p: [bc[0] + Math.cos(d * DEG) * FEAT.bR * k, bc[1] + Math.sin(d * DEG) * FEAT.bR * k] as Pt, a: d * DEG}));
	const cs = 20;
	const seat = seatFor(bcups[0].p[0], bcups[0].p[1], 0, cs);
	const HW = 200;
	const target = tCentreFor(seat.p, Math.PI, HW);
	const mv = smooth(prog(f, K6.bcell + 10, 28));
	const hc: Pt = [lerp(700, target[0], mv), lerp(470, target[1], mv)];
	const seated = prog(f, K6.bcell + 38, 8);
	const KC: Pt = [1110, 470];
	const strip = strip8(3, [{}, {}, {}, {at: K6.cyto + 10, lit: prog(f, K6.cyto + 14, 10)}], {}, [{}, {lit: prog(f, K6.cyto + 14, 10)}]);
	const tR = stepRect(strip, 3, 3, 1), bR = stepRect(strip, 3, 1, 0);
	return (
		<Overlay>
			<ResponseStrip {...strip} />
			{f >= K6.cyto + 20 ? <PlainArrow x1={tR.x + 4} y1={tR.y + tR.h / 2} x2={bR.x + bR.w - 6} y2={bR.y + bR.h / 2 + 4} at={K6.cyto + 20} color={TEAL} width={4} /> : null}
			<MistakeChip x={80} y={170} text="helper T cells are the main killers of infected cells" at={K6.mainly} cross={K6.mainly + 20} size={28} />
			<PlateB p={PLATES.bare} cx={BC6.cx} cy={BC6.cy} w={BC6.w} o={prog(f, K6.bcell, 14)} />
			{bcups.map((c, i) => <Cup key={i} x={c.p[0]} y={c.p[1]} ang={c.a} s={cs} red o={prog(f, K6.bcell + 6 + i * 2, 10)} />)}
			<TCell cx={hc[0]} cy={hc[1]} w={HW} ring="teal" o={prog(f, 0, 14)} angles={anglesFrom(180)} skip={seated > 0.5 ? 0 : -1} />
			{seated > 0.01 ? <Fork x={seat.p[0]} y={seat.p[1]} ang={Math.PI} s={cs} o={seated} lit={1} /> : null}
			<GTag x={90} y={730} text="b07: the B cell takes the antigen in" at={K6.bcell + 14} size={22} out={K6.multiply} />
			<CTag x={90} y={800} text="same pieces, matching helper" at={K6.bcell + 46} color={TEAL} size={28} dim={prog(f, K6.cyto, 10)} />
			<Dots a={hc} b={bc} at={K6.cyto + 4} out={K6.multiply} />
			<CTag x={560} y={640} text="cytokines: signal chemicals" at={K6.cyto + 10} color={TEAL} size={28} dim={prog(f, K6.multiply, 10)} />
			<TCell cx={KC[0]} cy={KC[1]} w={150} killer={1} ring="amber" o={prog(f, K6.multiply - 20, 14)} forks={0.6} />
			<Dots a={hc} b={KC} at={K6.multiply + 4} out={K6.macro + 10} color={TEAL} />
			<TClone x={KC[0]} y={KC[1]} at={K6.multiply + 24} dx={110} h={180} w={60} killer={1} ring="amber" levels={1} />
			<CTag x={960} y={640} text="killers multiply" at={K6.multiply + 20} color={AMBER_INK} size={28} dim={prog(f, K6.macro, 10)} />
			<Pl p={PLATES.macrophage} cx={1090} cy={850} w={260} o={prog(f, K6.macro - 6, 14)} glow={prog(f, K6.macro + 30, 14)} />
			<Dots a={hc} b={[1060, 820]} at={K6.macro + 4} />
			<CTag x={560} y={960} text="macrophages: better at destroying" at={K6.macro + 20} color={TEAL} size={28} />
			{void Ring}{void DrawPath}{void AMBER}{void VRED}
		</Overlay>
	);
};
