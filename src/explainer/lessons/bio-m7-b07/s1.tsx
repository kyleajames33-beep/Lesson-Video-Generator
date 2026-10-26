// M7 B07 scenes 1 to 6: the hook (the splinter bacterium with three kinds of antigen patch, a crossed "design an
// antibody to order?" chip, a grid of B cells with different receptor tips, two picked out as the bacterium drifts
// across); into the lymph node (b06's strip with its amber rung, a dendritic cell and drained bacteria arriving, the
// follicles ringed, a B cell zoomed out of one); antigens (patches ringed, each kind pulsed, a zoom inset onto one
// small part); the antibody's shape (receptor = antibody, stem, binding tips, matching patches seated in both tips);
// one cell, one shape (the painted cell crossfades to its bare partner as coded receptors replace the painted ones,
// three more shapes, the gene shuffle, a field of cells); selection (the fitting cells bind, the go-ahead signal).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Heading, Overlay} from '../bio-m5-b13/shared';
import {ResponseStrip} from '../bio-m7-b06/strip';
import {S} from './common';
import {FEAT, PLATES} from './assets';
import {HEAD, strip7} from './board';
import {
	AMBER, AMBER_INK, BCell, Bact, CTag, DrawPath, Flow, GREY_INK, GTag, Gloss, MistakeChip, Patch, Pl, PlainArrow, PlateB, Ring, Shuffle, Sx, TEAL, Travel, Y_INK,
	Yg, ZoomBox, clamp01, lerp, patchSites, prog, ptOf, pulse, recSites, rng, smooth, vis,
} from './parts';
import type {Kind, Pt} from './parts';

// ---------- 1. Hook ----------
const K1 = cues(S('hook'), {design: 'So how does it design', burnet: 'Frank Macfarlane Burnet', anything: 'design anything', right: 'The right cells', picks: 'picks them out', clonal: 'clonal selection', bcells: 'how B cells target'});
const GRID_K: Kind[] = ['wave', 'step', 'twin', 'wave', 'step', 'tri', 'round', 'twin', 'twin', 'wave', 'step', 'twin'];
const gridPt = (i: number): Pt => [1010 + (i % 4) * 215, 330 + Math.floor(i / 4) * 205];
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const mv = smooth(prog(f, K1.picks - 10, 50));
	const bx = lerp(380, 1330, mv), by = lerp(470, 880, mv), bw = lerp(520, 300, mv);
	const pick = prog(f, K1.picks + 20, 14);
	return (
		<>
			<Heading text={HEAD} at={K1.clonal} size={58} />
			<Overlay>
				<Bact cx={bx} cy={by} w={bw} id="b07-s1-b" o={prog(f, 0, 16)} />
				<GTag x={120} y={620} text="the splinter's bacteria, from b06" at={12} out={K1.picks} />
				<MistakeChip x={120} y={700} text="design an antibody to order?" at={K1.design + 6} cross={K1.anything + 6} size={30} />
				<GTag x={120} y={790} text="Burnet, Walter and Eliza Hall Institute, Melbourne, 1957" at={K1.burnet + 6} size={22} />
				{GRID_K.map((k, i) => {
					const [x, y] = gridPt(i);
					const fit = k === 'tri' || k === 'round';
					return <BCell key={i} cx={x} cy={y} w={160} k={k} o={prog(f, K1.right + i * 3, 12)} glow={fit ? pick : 0} lit={fit ? pick : 0} grey={fit ? 0 : pick * 0.8} recL={330} />;
				})}
				<GTag x={1010 - 80} y={200} text="B cells, each with its own receptor shape (model)" at={K1.right + 20} size={22} />
				<CTag x={1080} y={1000} text="picked out" at={K1.picks + 26} color={TEAL} size={30} />
				<Gloss x={100} y={200} text="B cells: white blood cells that make antibodies" at={K1.bcells + 4} />
			</Overlay>
		</>
	);
};

// ---------- 2. Into the lymph node ----------
const K2 = cues(S('lymph-node'), {dend: 'dendritic cells carried', drain: 'also drain there', lymph: 'packed with lymphocytes', bcells: 'kind, B cells'});
export const ND = {cx: 640, cy: 590, w: 740};
export const SceneLymphNode: React.FC = () => {
	const f = useCurrentFrame();
	const np = (uv: Pt) => ptOf(PLATES.node, ND.cx, ND.cy, ND.w, uv);
	const e0 = np(FEAT.nodeIn[0]), e1 = np(FEAT.nodeIn[1]), c = np(FEAT.nodeC);
	const fol = FEAT.follicles.map(np);
	const zoomF = fol[0];
	return (
		<>
			<Heading text={HEAD} at={-100} size={58} out={0} />
			<Overlay>
				<ResponseStrip {...strip7(0)} o={prog(f, 0, 16)} />
				<Pl p={PLATES.node} cx={ND.cx} cy={ND.cy} w={ND.w} o={prog(f, 4, 16)} />
				<Travel pts={[[60, 200], [170, 220], e0]} at={K2.dend} go={K2.dend + 4} dur={46} color={TEAL} o={1 - prog(f, K2.lymph, 12) * 0.7}>
					<PlateB p={PLATES.dendritic} cx={0} cy={0} w={90} />
				</Travel>
				<GTag x={40} y={250} text="b06" at={K2.dend + 10} out={K2.lymph} />
				<Flow a={[[40, 120], [300, 90]]} b={[e0, e1]} at={K2.drain + 4} out={K2.bcells} n={14} period={60} r={5} />
				<Travel pts={[[40, 110], e0, c]} at={K2.drain + 6} go={K2.drain + 6} dur={60} color={AMBER} o={1 - prog(f, K2.lymph + 10, 12)}>
					<PlateB p={PLATES.bact} cx={0} cy={0} w={60} />
				</Travel>
				<Travel pts={[[300, 80], e1, [c[0] + 40, c[1] - 60]]} at={K2.drain + 14} go={K2.drain + 14} dur={60} color={AMBER} o={1 - prog(f, K2.lymph + 10, 12)}>
					<PlateB p={PLATES.bact} cx={0} cy={0} w={60} />
				</Travel>
				<CTag x={1040} y={210} text="bacteria and their molecules arrive" at={K2.drain + 12} color={AMBER_INK} size={28} maxW={340} dim={prog(f, K2.lymph, 10)} />
				{fol.slice(0, 4).map((q, i) => <Ring key={i} cx={q[0]} cy={q[1]} rx={58} ry={54} at={K2.lymph + 6 + i * 5} out={K2.bcells + 20} color={TEAL} seed={i + 2} />)}
				<CTag x={1040} y={330} text="lymphocytes: white blood cells of the adaptive response" at={K2.lymph + 12} color={TEAL} size={28} maxW={340} dim={prog(f, K2.bcells, 10)} />
				<ZoomBox x0={zoomF[0] - 50} y0={zoomF[1] - 50} x1={zoomF[0] + 50} y1={zoomF[1] + 50} at={K2.bcells} />
				{f >= K2.bcells + 8 ? <PlainArrow x1={zoomF[0] + 54} y1={zoomF[1] + 30} x2={1110} y2={620} at={K2.bcells + 8} color={INKS} width={3} /> : null}
				<Pl p={PLATES.bcell} cx={1230} cy={720} w={300} o={prog(f, K2.bcells + 14, 14)} />
				<CTag x={1160} y={890} text="B cell" at={K2.bcells + 20} color={TEAL} size={32} />
			</Overlay>
		</>
	);
};
const INKS = '#6b6f73';

// ---------- 3. Antigens ----------
const K3 = cues(S('antigens'), {antigens: 'recognise antigens', protein: 'a protein or', surface: 'on the surface', many: 'many different antigens', part: 'just one small'});
export const BA = {cx: 700, cy: 560, w: 1000};
export const SceneAntigens: React.FC = () => {
	const f = useCurrentFrame();
	const sites = patchSites(BA.cx, BA.cy, BA.w);
	const kinds: Kind[] = ['tri', 'round', 'square'];
	const ki = Math.floor((f - K3.many - 6) / 22);
	const glowKind = f >= K3.many + 6 && ki < 3 ? kinds[ki] : undefined;
	const glow = glowKind ? pulse(f, K3.many + 6 + ki * 22, 22) : 0;
	const inset: Pt = [1180, 230];
	const src = sites[2];
	const zo = prog(f, K3.part + 6, 14);
	return (
		<Overlay>
			<ResponseStrip {...strip7(0)} />
			<Pl p={PLATES.node} cx={150} cy={250} w={190} dim={0.7} />
			<Bact cx={BA.cx} cy={BA.cy} w={BA.w} id="b07-s3-b" glowKind={glowKind} glow={glow} />
			<GTag x={220} y={1010} text="model: antigens drawn far larger than real" at={10} size={22} />
			<CTag x={300} y={170} text="antigen: a molecule the immune system can recognise" at={K3.antigens + 8} color={TEAL} size={30} maxW={880} dim={prog(f, K3.surface, 10)} />
			<Gloss x={304} y={262} text="antigen: antibody generator" at={K3.antigens + 30} color={GREY_INK} size={24} />
			{[0, 2, 4, 6, 8].map((i, j) => <Ring key={i} cx={sites[i].p[0]} cy={sites[i].p[1]} rx={46} ry={46} at={K3.surface + 4 + j * 4} out={K3.many} color={TEAL} seed={i + 1} width={4} />)}
			<CTag x={220} y={840} text="on the surface" at={K3.surface + 8} color={TEAL} size={30} out={K3.many} />
			<CTag x={220} y={840} text="one bacterium: many antigens" at={K3.many + 8} color={TEAL} size={30} dim={prog(f, K3.part, 10)} />
			{zo > 0.01 ? (
				<g opacity={zo}>
					<DrawPath d={`M${src.p[0]},${src.p[1] - 30} L${inset[0] - 110},${inset[1] + 40}`} at={K3.part + 6} dur={12} color="#6b6f73" width={3} dash="8 7" />
					<circle cx={inset[0]} cy={inset[1]} r={120} fill="#fffdf8" stroke="#6b6f73" strokeWidth={3} />
					<ellipse cx={inset[0]} cy={inset[1] + 50} rx={88} ry={48} fill="#e8b48f" stroke="#3a2a1a" strokeWidth={2} />
					<ellipse cx={inset[0] - 30} cy={inset[1] + 40} rx={30} ry={18} fill="#d99b70" opacity={0.6} />
					<Patch x={inset[0]} y={inset[1] + 8} ang={-Math.PI / 2} k="tri" s={70} outline={prog(f, K3.part + 22, 12)} />
				</g>
			) : null}
			<CTag x={760} y={840} text="binds one small part" at={K3.part + 20} color={TEAL} size={30} />
			<GTag x={1080} y={370} text="epitope" at={K3.part + 30} size={22} />
		</Overlay>
	);
};

// ---------- 4. The antibody's shape ----------
const K4 = cues(S('antibody-shape'), {receptors: 'using receptors', each: 'each receptor is', stem: 'Its stem', tips: 'The tips of', fits: 'fits one small', both: 'Both tips are'});
const BC4 = {cx: 280, cy: 560, w: 420};
const AB = {cx: 880, cy: 540, w: 560};
/** A free-standing receptor cup at a tip (screen), opening along `a` (radians). */
const TipCup: React.FC<{p: Pt; a: number; k: Kind; s: number; o: number}> = ({p, a, k, s, o}) => {
	if (o <= 0.01) return null;
	void k;
	return (
		<g opacity={o}>
			<g transform={`translate(${p[0]},${p[1]}) rotate(${(a * 180) / Math.PI + 90})`}>
				<path d={`M${-s},0 L${-s},${-0.9 * s} L${-0.62 * s},${-0.9 * s} L0,${-0.05 * s} L${0.62 * s},${-0.9 * s} L${s},${-0.9 * s} L${s},0 Z`} fill="#cfd0f0" stroke={Y_INK} strokeWidth={3} strokeLinejoin="round" />
			</g>
		</g>
	);
};
export const SceneAntibodyShape: React.FC = () => {
	const f = useCurrentFrame();
	const sites = recSites(BC4.cx, BC4.cy, BC4.w);
	const kk = BC4.w / (PLATES.bcell.box[2] - PLATES.bcell.box[0]);
	const tipOf = (i: number): Pt => [sites[i].p[0] + Math.cos(sites[i].a) * 280 * kk, sites[i].p[1] + Math.sin(sites[i].a) * 280 * kk];
	const r1 = tipOf(1);
	const abO = prog(f, K4.each + 14, 16);
	const tips = FEAT.tips.map(([u, v, d]) => ({p: ptOf(PLATES.antibody, AB.cx, AB.cy, AB.w, [u, v]), a: (d * Math.PI) / 180}));
	const stem = ptOf(PLATES.antibody, AB.cx, AB.cy, AB.w, FEAT.stem);
	const s = 40;
	const seat = (i: number, at: number) => {
		const u = smooth(prog(f, at, 24));
		const t = tips[i];
		const d = s * 0.96 + (1 - u) * 150;
		return {x: t.p[0] + Math.cos(t.a) * d, y: t.p[1] + Math.sin(t.a) * d, o: prog(f, at, 8)};
	};
	const p0 = seat(0, K4.fits + 10), p1 = seat(1, K4.both + 8);
	return (
		<Overlay>
			<ResponseStrip {...strip7(0)} />
			<Pl p={PLATES.bcell} cx={BC4.cx} cy={BC4.cy} w={BC4.w} o={prog(f, 0, 14)} dim={prog(f, K4.stem, 14) * 0.5} />
			{[1, 2, 4].map((i, j) => { const q = tipOf(i); return <Ring key={i} cx={q[0]} cy={q[1]} rx={40} ry={40} at={K4.receptors + 6 + j * 5} out={K4.each + 14} color={TEAL} seed={i} />; })}
			<CTag x={80} y={830} text="receptors" at={K4.receptors + 10} color={TEAL} size={30} dim={prog(f, K4.each, 10)} />
			<ZoomBox x0={r1[0] - 46} y0={r1[1] - 46} x1={r1[0] + 46} y1={r1[1] + 46} at={K4.each + 2} out={K4.stem} />
			{f >= K4.each + 8 ? <PlainArrow x1={r1[0] + 50} y1={r1[1]} x2={AB.cx - 300} y2={AB.cy - 140} at={K4.each + 8} color={INKS} width={3} out={K4.stem} /> : null}
			<Pl p={PLATES.antibody} cx={AB.cx} cy={AB.cy} w={AB.w} o={abO} />
			<CTag x={560} y={870} text="receptor = antibody held in the membrane" at={K4.each + 20} color={TEAL} size={30} out={K4.tips} />
			<Ring cx={stem[0]} cy={stem[1]} rx={90} ry={150} at={K4.stem + 6} out={K4.tips} color={AMBER} />
			<CTag x={1190} y={640} text="constant region: same in many antibodies" at={K4.stem + 10} color={AMBER_INK} size={26} maxW={210} dim={prog(f, K4.tips, 10)} />
			{tips.map((t, i) => <Ring key={i} cx={t.p[0]} cy={t.p[1]} rx={70} ry={60} at={K4.tips + 6 + i * 6} out={K4.fits} color={TEAL} seed={i + 5} />)}
			<CTag x={1190} y={250} text="variable region: the binding sites" at={K4.tips + 12} color={TEAL} size={26} maxW={210} dim={prog(f, K4.fits, 10)} />
			{tips.map((t, i) => <TipCup key={i} p={t.p} a={t.a} k="tri" s={s} o={prog(f, K4.fits + 2 + i * 4, 10)} />)}
			<Patch x={p0.x} y={p0.y} ang={tips[0].a + Math.PI} k="tri" s={s * 1.0} o={p0.o} />
			<Patch x={p1.x} y={p1.y} ang={tips[1].a + Math.PI} k="tri" s={s * 1.0} o={p1.o} />
			<CTag x={560} y={870} text="fits one shape" at={K4.fits + 16} color={TEAL} size={30} out={K4.both} />
			<CTag x={560} y={870} text="two identical binding sites" at={K4.both + 14} color={TEAL} size={30} />
			<GTag x={560} y={950} text="model: shapes simplified" at={K4.fits + 20} size={22} />
		</Overlay>
	);
};

// ---------- 5. One cell, one shape ----------
const K5 = cues(S('one-shape'), {all: 'all the receptors', diff: 'different B cells have', shuffles: 'shuffles pieces', billions: 'billions of B', most: 'Most will never'});
const ROW5: {k: Kind; x: number}[] = [{k: 'tri', x: 230}, {k: 'round', x: 540}, {k: 'square', x: 850}, {k: 'wave', x: 1160}];
export const SceneOneShape: React.FC = () => {
	const f = useCurrentFrame();
	const bare = prog(f, K5.all + 4, 18);
	const fieldT = smooth(prog(f, K5.billions, 26));
	const rowO = 1 - fieldT;
	const R = rng(12);
	const field = Array.from({length: 40}, (_, i) => ({x: 150 + (i % 10) * 125 + (Math.floor(i / 10) % 2) * 40, y: 300 + Math.floor(i / 10) * 140, k: (['tri', 'round', 'square', 'wave', 'step', 'twin'] as Kind[])[Math.floor(R() * 6)], keep: R() < 0.12}));
	const most = prog(f, K5.most + 4, 18);
	return (
		<Overlay>
			<ResponseStrip {...strip7(0)} />
			<g opacity={rowO}>
				<BCell cx={ROW5[0].x} cy={400} w={230} k="tri" painted={1 - bare} o={prog(f, 0, 14)} recL={380} />
				{ROW5.slice(1).map((c, i) => <BCell key={i} cx={c.x} cy={400} w={230} k={c.k} o={prog(f, K5.diff + 6 + i * 8, 14)} recL={380} />)}
				<Shuffle x={150} y={760} at={K5.shuffles} runs={[{at: K5.shuffles + 6, pick: [3, 1, 2], to: [540, 560]}, {at: K5.shuffles + 66, pick: [1, 4, 0], to: [1160, 560]}]} />
			</g>
			<CTag x={80} y={180} text="one cell: one receptor shape" at={K5.all + 14} color={TEAL} size={30} dim={prog(f, K5.diff, 10)} out={K5.billions} />
			<GTag x={600} y={186} text="model: receptors drawn far larger than real" at={K5.all + 26} size={22} out={K5.billions} />
			<CTag x={760} y={880} text="random shuffling of receptor genes" at={K5.shuffles + 12} color={TEAL} size={30} dim={prog(f, K5.billions, 10)} out={K5.billions + 10} />
			<Gloss x={764} y={980} text="while B cells develop, in the bone marrow" at={K5.shuffles + 30} out={K5.billions + 10} />
			{fieldT > 0.01 ? field.map((c, i) => <BCell key={i} cx={c.x} cy={c.y} w={96} k={c.k} o={fieldT * prog(f, K5.billions + 6 + i, 8)} grey={c.keep ? 0 : most * 0.9} recL={340} />) : null}
			<GTag x={150} y={920} text="millions of shapes, before any infection" at={K5.billions + 20} size={24} />
			{void vis}{void clamp01}{void Sx}{void AMBER}
		</Overlay>
	);
};

// ---------- 6. Selection ----------
const K6 = cues(S('selection'), {meet: 'meet huge numbers', few: 'Only the few', sel: 'the selection', tell: 'tell a B cell', helper: 'helper T cell', alerted: 'dendritic cells alerted', next: 'The next video'});
export const ROW6: Kind[] = ['wave', 'step', 'tri', 'twin', 'wave', 'round', 'step', 'twin'];
export const row6X = (i: number) => 130 + i * 160;
export const SceneSelection: React.FC = () => {
	const f = useCurrentFrame();
	const lock = smooth(prog(f, K6.few + 6, 24));
	const drift = smooth(prog(f, 0, K6.few));
	const bx = lerp(100, 690, drift), by = 430;
	const sites = patchSites(bx, by, 380);
	const cellY = (i: number) => (ROW6[i] === 'tri' || ROW6[i] === 'round' ? lerp(820, 690, lock) : 820);
	const triX = row6X(2), rndX = row6X(5);
	const strip = strip7(0, [{at: K6.few + 10, lit: prog(f, K6.few + 14, 10)}, {at: K6.helper + 8, lit: prog(f, K6.helper + 12, 10)}]);
	const tcell: Pt = [triX - 150, 560];
	const bindTo = (cx: number, k: Kind) => {
		const top = recSites(cx, cellY(ROW6.indexOf(k)), 170).reduce((a, b) => (b.p[1] < a.p[1] ? b : a));
		const tgt = sites.filter(s => s.k === k).reduce((a, b) => (Math.hypot(b.p[0] - cx, b.p[1] - 690) < Math.hypot(a.p[0] - cx, a.p[1] - 690) ? b : a));
		return {a: top.p, b: tgt.p};
	};
	const bt = bindTo(triX, 'tri'), br = bindTo(rndX, 'round');
	return (
		<Overlay>
			<ResponseStrip {...strip} />
			<Bact cx={bx} cy={by} w={380} id="b07-s6-b" glowKind={lock > 0.5 ? (f % 60 < 30 ? 'tri' : 'round') : undefined} glow={lock * 0.8} />
			{ROW6.map((k, i) => {
				const fit = k === 'tri' || k === 'round';
				return <BCell key={i} cx={row6X(i)} cy={cellY(i)} w={170} k={k} o={prog(f, i * 3, 12)} lit={fit ? lock : 0} glow={fit ? lock : 0} grey={fit ? 0 : lock * 0.85} recL={330} />;
			})}
			{lock > 0.6 ? [bt, br].map((b, i) => <DrawPath key={i} d={`M${b.a[0]},${b.a[1]} L${b.b[0]},${b.b[1]}`} at={K6.few + 26 + i * 4} dur={10} color={TEAL} width={4} dash="4 8" />) : null}
			<CTag x={1060} y={600} text="only fitting cells bind" at={K6.few + 20} color={TEAL} size={28} maxW={300} dim={prog(f, K6.tell, 10)} />
			<MistakeChip x={100} y={180} text="antigen tells the cell what to make" at={K6.tell} cross={K6.tell + 18} size={30} />
			<Gloss x={104} y={272} text="the shape already existed" at={K6.tell + 26} color={GREY_INK} />
			<PlateB p={PLATES.tcell} cx={tcell[0]} cy={tcell[1]} w={86} o={prog(f, K6.helper + 2, 12)} />
			<PlainArrow x1={tcell[0] + 40} y1={tcell[1] + 20} x2={triX - 70} y2={cellY(2) - 40} at={K6.helper + 8} color={AMBER} width={5} />
			<CTag x={60} y={960} text="go-ahead signal" at={K6.helper + 10} color={AMBER_INK} size={30} />
			<Gloss x={340} y={995} text="helper T cell: next video" at={K6.helper + 22} />
			<PlateB p={PLATES.dendritic} cx={tcell[0] - 100} cy={tcell[1] - 30} w={110} o={vis(f, K6.alerted, K6.next + 20, 14)} />
			<GTag x={tcell[0] - 140} y={tcell[1] + 40} text="b06" at={K6.alerted + 6} out={K6.next + 20} size={22} />
			<GTag x={rndX - 120} y={900} text="this clone does the same" at={K6.helper + 30} size={22} />
			{void Flow}{void Pl}{void K6.meet}{void K6.sel}
		</Overlay>
	);
};
