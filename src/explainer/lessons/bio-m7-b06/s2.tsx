// M7 B06 scenes 7 to 12: calling the phagocytes (gradient rings round the bacteria, a neutrophil inset, the stuck and
// squeezing neutrophils revealed in place, a dotted path up the gradient, a clock on the "hours" rung); eating the
// bacteria (neutrophil and macrophage at true relative size, then the four aligned engulf states with a step counter;
// the move of the rod inside is masked so it never appears twice); holding the bacteria back (the contained plate, pus
// ringed, a signal line leaving the vessel, the set-point gauge); alerting the adaptive cells (the amber rung, the
// dendritic cell, a dotted lymph path to the lymph node, pieces shown to a T cell); two speeds (the strip enlarged with
// a time axis, a crossed "innate is weak" chip, the hand-on arrow); the memory aid beside each rung.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Overlay} from '../bio-m5-b13/shared';
import {S} from './common';
import {FEAT, PLATES} from './assets';
import {CL, stripAt} from './board';
import {ResponseStrip, stripRects} from './strip';
import type {StripProps} from './strip';
import {CL6} from './s1';
import {
	ALL_IN, AMBER, AMBER_INK, CTag, ClockMark, Closeup, DrawPath, Engulf, GREY_INK, GTag, Gauge, Gloss, Gradient, INK_SOFT, MistakeChip, Pl, PlainArrow, PlateB,
	RED_V, Ring, Steps, Sx, TEAL, TERRA, Travel, cP, clamp01, lerp, prog, ptOf, pulse, quad, smooth,
} from './parts';
import type {Pt} from './parts';

// ---------- 7. Calling the phagocytes ----------
const K7 = cues(S('neutrophils'), {signal: 'signal chemicals that', neut: 'Neutrophils, white', stick: 'stick to the vessel wall', squeeze: 'squeeze out between', crawl: 'crawl towards the stronger', hours: 'within hours'});
export const SceneNeutrophils: React.FC = () => {
	const f = useCurrentFrame();
	const m = smooth(prog(f, 0, 24));
	const cl = {cx: lerp(CL6.cx, CL.cx, m), cy: lerp(CL6.cy, CL.cy, m), w: lerp(CL6.w, CL.w, m)};
	const c = cP(CL.cx, CL.cy, CL.w);
	const bac = c(FEAT.bact), stick = c(FEAT.nStick), sq = c(FEAT.nSqueeze);
	const strip = stripAt(7, [{}, {}, {lit: prog(f, 6, 12)}]);
	const R2 = stripRects(strip)[2];
	const st = {...ALL_IN, stick: prog(f, K7.stick + 4, 16), squeeze: prog(f, K7.squeeze + 4, 16), tissue: prog(f, K7.crawl + 4, 18)};
	const path: Pt[] = [sq, c([1120, 1120]), c([1240, 900]), c([1200, 760]), bac];
	return (
		<Overlay>
			<ResponseStrip {...strip} />
			<Closeup cx={cl.cx} cy={cl.cy} w={cl.w} st={st} id="b06-s7" />
			<Gradient x={bac[0]} y={bac[1]} at={K7.signal + 6} r0={36} dr={52} n={8} clip={[CL.cx - CL.w / 2 + 6, CL.cy - CL.w / 2 + 6, CL.cx + CL.w / 2 - 6, CL.cy + CL.w / 2 - 6]} id="b06-s7g" />
			<CTag x={1130} y={220} text="strongest near the bacteria" at={K7.signal + 14} color={TEAL} size={28} maxW={240} dim={prog(f, K7.neut, 10)} />
			<GTag x={1130} y={320} text="chemokines" at={K7.signal + 30} size={22} />
			<Pl p={PLATES.neutrophil} cx={170} cy={470} w={180} o={prog(f, K7.neut + 4, 14)} dim={prog(f, K7.stick + 10, 12) * 0.5} />
			<CTag x={40} y={580} text="neutrophil: white blood cell in the blood" at={K7.neut + 10} color={TEAL} size={26} maxW={250} dim={prog(f, K7.stick, 10)} />
			<Ring cx={stick[0]} cy={stick[1]} rx={66} ry={46} at={K7.stick + 10} out={K7.squeeze} color={TEAL} />
			<CTag x={1130} y={390} text="stick (only near the infection)" at={K7.stick + 10} color={TEAL} size={28} maxW={240} dim={prog(f, K7.squeeze, 10)} />
			<Ring cx={sq[0]} cy={sq[1]} rx={56} ry={70} at={K7.squeeze + 10} out={K7.crawl} color={TEAL} />
			<CTag x={1130} y={520} text="squeeze out" at={K7.squeeze + 10} color={TEAL} size={28} dim={prog(f, K7.crawl, 10)} />
			<Travel pts={quadPath(path)} at={K7.crawl + 4} go={K7.crawl + 4} dur={56} color={TEAL} width={6}>
				<circle r={11} fill={TEAL} opacity={0.85} />
			</Travel>
			<CTag x={1130} y={610} text="follow the signal" at={K7.crawl + 12} color={TEAL} size={28} />
			<ClockMark x={R2.x + R2.w - 38} y={R2.y + R2.h / 2} r={26} at={K7.hours + 4} />
			<GTag x={330} y={1012} text="small vessel" at={-100} size={22} />
		</Overlay>
	);
};
/** A smooth path through waypoints (midpoint quadratics). */
export const quadPath = (pts: Pt[]): Pt[] => {
	const out: Pt[] = [pts[0]];
	for (let i = 1; i < pts.length - 1; i++) {
		const a: Pt = [(pts[i - 1][0] + pts[i][0]) / 2, (pts[i - 1][1] + pts[i][1]) / 2];
		const b: Pt = [(pts[i][0] + pts[i + 1][0]) / 2, (pts[i][1] + pts[i + 1][1]) / 2];
		out.push(...quad(i === 1 ? pts[0] : a, pts[i], b, 8).slice(1));
	}
	out.push(pts[pts.length - 1]);
	return out;
};

// ---------- 8. Eating the bacteria ----------
const K8 = cues(S('phagocytosis'), {macro: 'called macrophages', phago: 'are phagocytes', receptors: 'Receptors on a', bind: 'bind molecules found', wrap: 'wraps its membrane', inside: 'pulls it inside', lyso: 'Then lysosomes'});
export const EG = {cx: 760, cy: 550, w: 1000};
export const SceneEngulf: React.FC = () => {
	const f = useCurrentFrame();
	const m = smooth(prog(f, 0, 24));
	const strip = stripAt(8);
	const setAt = K8.receptors - 14;
	const pairO = prog(f, 0, 14) * (1 - prog(f, setAt, 14));
	const setO = prog(f, setAt + 6, 14);
	const e = (uv: Pt) => ptOf(PLATES.before, EG.cx, EG.cy, EG.w, uv);
	const contact = e(FEAT.contact), rodIn = e(FEAT.rodIn);
	const step = f < K8.bind ? 0 : f < K8.wrap ? 1 : f < K8.inside ? 2 : f < K8.lyso ? 3 : 4;
	const t1 = prog(f, K8.wrap + 6, 6), t2 = clamp01((f - K8.inside - 6) / 22), t3 = prog(f, K8.lyso + 14, 6);
	const NW = 230, MW = (NW * 20) / 12;
	return (
		<Overlay>
			<ResponseStrip {...strip} />
			<Closeup cx={lerp(CL.cx, 130, m)} cy={lerp(CL.cy, 230, m)} w={lerp(CL.w, 170, m)} st={ALL_IN} id="b06-s8" o={1 - prog(f, setAt, 12) * 0.55} />
			<g opacity={pairO}>
				<PlateB p={PLATES.neutrophil} cx={470} cy={560} w={NW} o={prog(f, 4, 14)} />
				<PlateB p={PLATES.macrophage} cx={880} cy={560} w={MW} o={prog(f, K8.macro, 14)} />
			</g>
			<GTag x={470} y={700} text="neutrophil, about 12 µm" at={10} out={setAt} anchor="middle" size={22} />
			<GTag x={880} y={770} text="macrophage, about 20 µm" at={K8.macro + 10} out={setAt} anchor="middle" size={22} />
			{f >= K8.phago && f < setAt + 14 ? <g opacity={1 - prog(f, setAt, 12)}><DrawPath d="M330,840 Q330,870 360,870 L1040,870 Q1070,870 1070,840" at={K8.phago + 2} dur={16} color={TEAL} width={5} /></g> : null}
			<CTag x={400} y={895} text="phagocyte: a cell that engulfs and digests" at={K8.phago + 10} color={TEAL} size={30} out={setAt} />
			<Engulf cx={EG.cx} cy={EG.cy} w={EG.w} t1={t1} t2={t2} t3={t3} id="b06-s8e" o={setO} />
			<GTag x={1240} y={170} text="bacterium drawn larger than real" at={setAt + 10} anchor="end" size={22} />
			<Steps x={460} y={1010} n={4} lit={step} at={setAt + 10} gap={170} />
			<Ring cx={contact[0]} cy={contact[1]} rx={70} ry={64} at={K8.bind + 4} out={K8.wrap} color={TEAL} />
			{f >= K8.bind + 10 && f < K8.wrap + 6 ? [0, 1, 2].map(i => <DrawPath key={i} d={`M${contact[0] - 14},${contact[1] - 34 + i * 34} L${contact[0] + 14},${contact[1] - 34 + i * 34}`} at={K8.bind + 10 + i * 4} dur={6} color={TEAL} width={6} />) : null}
			<CTag x={160} y={880} text="1  bind: fits molecules common to bacteria" at={K8.bind + 8} color={TEAL} size={30} out={K8.wrap} />
			<GTag x={820} y={886} text="PAMPs" at={K8.bind + 24} out={K8.wrap} size={22} />
			<CTag x={160} y={880} text="2  wrap" at={K8.wrap + 8} color={TEAL} size={30} out={K8.inside} />
			<CTag x={160} y={880} text="3  sealed inside" at={K8.inside + 12} color={TEAL} size={30} out={K8.lyso} />
			<GTag x={430} y={886} text="phagosome" at={K8.inside + 26} out={K8.lyso} size={22} />
			<Ring cx={rodIn[0]} cy={rodIn[1]} rx={140} ry={112} at={K8.lyso + 22} color={AMBER} />
			<CTag x={160} y={880} text="4  enzymes digest it" at={K8.lyso + 20} color={TEAL} size={30} />
			<Gloss x={560} y={922} text="lysosome: sac of digestive enzymes" at={K8.lyso + 30} />
		</Overlay>
	);
};

// ---------- 9. Holding the bacteria back ----------
const K9 = cues(S('holding'), {pus: 'as pus', spreads: 'If an infection', raise: 'raise the', speed: 'speed up some', clears: 'clears a small'});
export const SceneHolding: React.FC = () => {
	const f = useCurrentFrame();
	const m = smooth(prog(f, 0, 24));
	const c = cP(CL.cx, CL.cy, CL.w);
	const pus = c(FEAT.pus);
	const vl = c([300, 1240]);
	const strip = stripAt(9);
	return (
		<Overlay>
			<ResponseStrip {...strip} />
			<Closeup cx={lerp(130, CL.cx, m)} cy={lerp(230, CL.cy, m)} w={lerp(170, CL.w, m)} st={{...ALL_IN, contained: prog(f, 16, 24)}} id="b06-s9" />
			<Ring cx={pus[0]} cy={pus[1]} rx={120} ry={90} at={44} out={K9.spreads} color={AMBER} />
			<CTag x={1130} y={220} text="pus: dead neutrophils, bacteria, fluid" at={K9.pus + 6} color={AMBER_INK} size={28} maxW={240} dim={prog(f, K9.spreads, 10)} />
			{f >= K9.spreads + 4 ? <DrawPath d={`M${vl[0] + 10},${vl[1]} L${70},${vl[1]} Q${40},${vl[1]} ${40},${vl[1] - 30} L${40},-20`} at={K9.spreads + 4} dur={30} color={RED_V} width={6} dash="14 10" /> : null}
			<GTag x={60} y={vl[1] + 30} text="signals in the blood" at={K9.spreads + 16} size={22} />
			<Gauge x={1290} y={420} at={K9.raise - 4} riseAt={K9.raise + 6} dim={prog(f, K9.clears, 12)} />
			<CTag x={1130} y={660} text="fever: the brain raises the set point" at={K9.raise + 16} color={TERRA} size={28} maxW={240} dim={prog(f, K9.clears, 10)} />
			<Gloss x={1134} y={800} text="can speed some reactions" at={K9.speed + 8} size={24} color={GREY_INK} />
			{FEAT.freeRods.map((r, i) => { const q = c(r); return <Ring key={i} cx={q[0]} cy={q[1]} rx={34} ry={30} at={K9.clears + 8 + i * 6} color={TEAL} seed={i + 3} />; })}
			<CTag x={1130} y={860} text="often cleared here" at={K9.clears + 14} color={TEAL} size={30} maxW={240} />
		</Overlay>
	);
};

// ---------- 10. Alerting the adaptive cells ----------
const K10 = cues(S('alert-adaptive'), {second: 'second defence', dend: 'Dendritic cells', travel: 'travel along lymph', organ: 'a small organ', show: 'show pieces', adaptive: 'the adaptive response'});
const NODE = {cx: 980, cy: 560, w: 500};
export const SceneAlert: React.FC = () => {
	const f = useCurrentFrame();
	const strip = stripAt(9, [{}, {}, {}, {label: 'days: adaptive', at: -100, labelAt: K10.second + 4, lit: prog(f, K10.second + 4, 12)}]);
	const mv = smooth(prog(f, K10.travel, 26));
	const cl = {cx: lerp(CL.cx, 160, mv), cy: lerp(CL.cy, 560, mv), w: lerp(CL.w, 220, mv)};
	const dd = {cx: lerp(700, 160, mv), cy: lerp(560, 560, mv), w: lerp(520, 150, mv)};
	const dRod = ptOf(PLATES.dendritic, 700, 560, 520, FEAT.dRod);
	const np = (uv: Pt) => ptOf(PLATES.node, NODE.cx, NODE.cy, NODE.w, uv);
	const entry = np(FEAT.nodeIn[0]);
	const nodeO = prog(f, K10.travel + 10, 16);
	const path: Pt[] = quadPath([[250, 560], [430, 420], [entry[0] - 30, entry[1] - 10], entry]);
	const inside: Pt = np([900, 1000]);
	const showO = prog(f, K10.show, 14);
	const tc: Pt = [inside[0] + 120, inside[1] + 10];
	const R3 = stripRects(strip)[3];
	return (
		<Overlay>
			<ResponseStrip {...strip} />
			<Closeup cx={cl.cx} cy={cl.cy} w={cl.w} st={{...ALL_IN, contained: 1}} id="b06-s10" o={1 - 0.7 * prog(f, K10.dend, 14)} dim={prog(f, K10.dend, 14) * 0.8} />
			<Pl p={PLATES.dendritic} cx={dd.cx} cy={dd.cy} w={dd.w} o={prog(f, K10.dend + 4, 16) * (1 - prog(f, K10.show, 14) * 0.5)} />
			<Ring cx={dRod[0]} cy={dRod[1]} rx={50} ry={46} at={K10.dend + 20} out={K10.travel} color={AMBER} />
			<CTag x={330} y={1000} text="dendritic cell: phagocyte with branching arms" at={K10.dend + 14} color={TEAL} size={28} dim={prog(f, K10.organ, 10)} out={K10.show} />
			<Pl p={PLATES.node} cx={NODE.cx} cy={NODE.cy} w={NODE.w} o={nodeO} />
			<Travel pts={path} at={K10.travel + 14} go={K10.travel + 20} dur={54} color={TEAL} o={1 - prog(f, K10.show + 20, 12) * 0.6}>
				<PlateB p={PLATES.dendritic} cx={0} cy={0} w={86} o={1 - prog(f, K10.travel + 72, 8)} />
			</Travel>
			<Gloss x={300} y={360} text="lymph: fluid drained from tissues" at={K10.travel + 24} dim={prog(f, K10.organ, 10)} />
			<Ring cx={NODE.cx} cy={NODE.cy} rx={290} ry={300} at={K10.organ + 4} out={K10.show} color={TEAL} />
			<CTag x={NODE.cx - 90} y={860} text="lymph node" at={K10.organ + 8} color={TEAL} size={30} dim={prog(f, K10.show, 10)} />
			{showO > 0.01 ? (
				<g opacity={showO}>
					<circle cx={inside[0] + 50} cy={inside[1]} r={130} fill="#fffdf8" opacity={0.82} />
					<PlateB p={PLATES.dendritic} cx={inside[0]} cy={inside[1]} w={150} />
					<PlateB p={PLATES.tcell} cx={tc[0]} cy={tc[1]} w={64} />
					{[[-18, -30], [14, -36], [30, -8]].map(([dx, dy], i) => <path key={i} d={`M${inside[0] + dx},${inside[1] + dy - 9} L${inside[0] + dx + 9},${inside[1] + dy + 7} L${inside[0] + dx - 9},${inside[1] + dy + 7} Z`} fill={AMBER} stroke="#7a4a10" strokeWidth={1.5} opacity={prog(f, K10.show + 8 + i * 4, 8)} />)}
					<PlainArrow x1={inside[0] + 40} y1={inside[1] - 4} x2={tc[0] - 38} y2={tc[1]} at={K10.show + 20} color={TEAL} width={5} />
				</g>
			) : null}
			<CTag x={NODE.cx - 160} y={860} text="shows pieces to T cells" at={K10.show + 24} color={TEAL} size={30} />
			<CTag x={1420} y={R3.y + R3.h + 24} text="adaptive: aimed at one pathogen; days to build" at={K10.adaptive + 10} color={AMBER_INK} size={26} maxW={420} />
		</Overlay>
	);
};

// ---------- 11. Two speeds, working together ----------
const K11 = cues(S('two-speeds'), {fast: 'fast and broad', practice: 'better with practice', slow: 'slow the first time', together: 'work together', hold: 'hold the bacteria back'});
export const BIG = {x: 620, y: 170, w: 520, rh: 150, gap: 56, size: 40};
export const bigStrip = (n: number, over: Parameters<typeof stripAt>[1] = []): StripProps => stripAt(n, over, BIG);
export const SceneTwoSpeeds: React.FC = () => {
	const f = useCurrentFrame();
	const m = smooth(prog(f, 0, 26));
	const strip = bigStrip(11, [{}, {}, {}, {lit: 1}]);
	const R = stripRects(strip);
	const brPulse = pulse(f, K11.fast, 40);
	const tick = (i: number) => R[i].y + R[i].h / 2;
	const axX = BIG.x - 200;
	const a0: Pt = [R[2].x - 10, tick(2)], a1: Pt = [R[3].x - 12, tick(3) - 10];
	const ctrl: Pt = [R[2].x - 150, (a0[1] + a1[1]) / 2];
	const mid: Pt = [(a0[0] + 2 * ctrl[0] + a1[0]) / 4, (a0[1] + 2 * ctrl[1] + a1[1]) / 4];
	return (
		<Overlay>
			<g opacity={m}>
				<ResponseStrip {...strip} bracket={{from: 0, to: 2, at: -100, label: 'innate', lit: 1, pulse: brPulse}} />
			</g>
			<DrawPath d={`M${axX},${tick(1) - 30} L${axX},${tick(3) + 30}`} at={14} dur={18} color={GREY_INK} width={3} />
			{[1, 2, 3].map(i => (
				<g key={i}>
					<line x1={axX - 12} x2={axX + 12} y1={tick(i)} y2={tick(i)} stroke={GREY_INK} strokeWidth={3} opacity={prog(f, 18 + i * 4, 8)} />
					<Sx x={axX - 22} y={tick(i) + 9} text={['', 'minutes', 'hours', 'days'][i]} size={28} color={GREY_INK} weight={600} anchor="end" at={18 + i * 4} />
				</g>
			))}
			<CTag x={1250} y={250} text="fast, broad" at={K11.fast + 8} color={TEAL} size={34} dim={prog(f, K11.slow, 10)} />
			<GTag x={1250} y={330} text="same response every time" at={K11.practice + 6} size={24} />
			<CTag x={1250} y={R[3].y + 50} text="slow at first, specific" at={K11.slow + 8} color={AMBER_INK} size={34} dim={prog(f, K11.hold, 10)} />
			<MistakeChip x={BIG.x} y={1000} text="innate is weak; adaptive does the real work" at={K11.together} cross={K11.together + 16} size={30} />
			{f >= K11.hold ? (
				<g>
					<DrawPath d={`M${a0[0]},${a0[1]} Q${ctrl[0]},${ctrl[1]} ${a1[0]},${a1[1]}`} at={K11.hold + 4} dur={20} color={TEAL} width={7} />
					<path d={`M${a1[0] - 26},${a1[1] - 8} L${a1[0]},${a1[1]} L${a1[0] - 14},${a1[1] - 24}`} fill="none" stroke={TEAL} strokeWidth={7} strokeLinecap="round" strokeLinejoin="round" opacity={prog(f, K11.hold + 22, 6)} />
					<PlateB p={PLATES.dendritic} cx={mid[0]} cy={mid[1]} w={70} o={prog(f, K11.hold + 16, 10)} />
				</g>
			) : null}
			<CTag x={1250} y={R[3].y - 40} text="holds back, then shows the target" at={K11.hold + 20} color={TEAL} size={28} maxW={420} />
			{void INK_SOFT}{void Gloss}{void TERRA}
		</Overlay>
	);
};

// ---------- 12. Memory ----------
const K12 = cues(S('memory'), {block: 'block, alarm', alarm: 'alarm, eat', eat: 'eat, alert', alert: 'alert. Barriers', b: 'Barriers block', a: 'inflammation raises', e: 'phagocytes eat', d: 'dendritic cells alert'});
export const SceneMemory: React.FC = () => {
	const f = useCurrentFrame();
	const pulses = [K12.b, K12.a, K12.e, K12.d].map(t => pulse(f, t, 40));
	const strip = bigStrip(11, pulses.map(p => ({pulse: p})));
	const R = stripRects(strip);
	const words = [{w: 'block', at: K12.block}, {w: 'alarm', at: K12.alarm + 4}, {w: 'eat', at: K12.eat + 4}, {w: 'alert', at: K12.alert}];
	return (
		<Overlay>
			<ResponseStrip {...strip} />
			{words.map((wd, i) => <Sx key={i} x={1270} y={R[i].y + R[i].h / 2 + 24} text={wd.w} size={70} color={i === 3 ? AMBER_INK : TEAL} hand weight={700} at={wd.at} />)}
			{void Ring}{void TEAL}{void AMBER}
		</Overlay>
	);
};
