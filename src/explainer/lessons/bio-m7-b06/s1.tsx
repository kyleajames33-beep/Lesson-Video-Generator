// M7 B06 scenes 1 to 6: the hook (Metchnikoff's starfish larva, the thorn ringed, the aligned partner with cells
// crowded round it, a grey "no antibodies" chip, then the skin and splinter block); animals send cells (b05 callback
// thumbnail, a coded vessel channel with neutrophils drifting, bending up to the splinter); the barriers (the strip's
// top rung, the shedding skin and the airway lining, flakes and trapped microbes ringed, cilia arrows, then the
// chemical barrier chips); the splinter gets through (barrier plates shrink into the top rung, the breach traced, a
// zoom box opening onto the dermis close-up, the innate bracket); the alarm (mast cell, histamine, wider then leaky
// vessel revealed in place on the aligned inflamed plate); four signs, one purpose (the low-zoom pair crossfades to
// inflamed, a cause list one row per cue, a crossed "just symptoms" chip, teal delivery arrows).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Heading, Overlay} from '../bio-m5-b13/shared';
import {S} from './common';
import {FEAT, PLATES} from './assets';
import {CL, HEAD, stripAt} from './board';
import {ResponseStrip, stripRects} from './strip';
import {
	AMBER, AMBER_INK, CTag, Channel, Closeup, DROP, DrawPath, Flow, GREY_INK, GTag, Gloss, INK_SOFT, Leak, MistakeChip, PlainArrow, Pl, PlateB, RED_V, Ring,
	Spread, Sx, TEAL, TERRA, ZoomBox, along, cP, clamp01, lerp, plH, polyLen, prog, ptOf, quad, smooth, vis,
} from './parts';
import type {Pt} from './parts';

// ---------- 1. Hook ----------
const K1 = cues(S('hook'), {thorn: 'a rose thorn', morning: 'By the next morning', anti: 'makes no antibodies', splinter: 'a splinter carries', what: 'what happens first'});
const LV = {cx: 600, cy: 610, w: 720};
export const SK1 = {cx: 1260, cy: 610, w: 860};
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const sh = smooth(prog(f, K1.splinter, 26));
	const lv = {cx: lerp(LV.cx, 250, sh), cy: lerp(LV.cy, 390, sh), w: lerp(LV.w, 290, sh)};
	const lp = (uv: Pt) => ptOf(PLATES.larva, LV.cx, LV.cy, LV.w, uv);
	const tip = lp(FEAT.thornTip), cl = lp(FEAT.cluster);
	const x = prog(f, K1.morning + 6, 20);
	const skO = prog(f, K1.splinter + 6, 18);
	const sp = (uv: Pt) => ptOf(PLATES.skin, SK1.cx, SK1.cy, SK1.w, uv);
	const shaft = sp([700, 660]);
	return (
		<>
			<Heading text={HEAD} at={K1.what + 6} size={58} />
			<Overlay>
				<Pl p={PLATES.larva} cx={lv.cx} cy={lv.cy} w={lv.w} o={prog(f, 0, 16) * (x < 1 ? 1 : 0)} />
				<Pl p={PLATES.larvaCells} cx={lv.cx} cy={lv.cy} w={lv.w} o={x} />
				<GTag x={1030} y={300} text="starfish larva, about 1 mm long" at={10} out={K1.splinter} />
				<GTag x={1030} y={360} text="Metchnikoff, 1882" at={20} out={K1.splinter} />
				<Ring cx={tip[0]} cy={tip[1]} rx={70} ry={60} at={K1.thorn + 4} out={K1.morning + 6} />
				<Ring cx={cl[0]} cy={cl[1]} rx={110} ry={95} at={K1.morning + 30} out={K1.splinter} color={TEAL} />
				<CTag x={1030} y={470} text="moving cells gather at the thorn" at={K1.morning + 34} color={TEAL} size={32} dim={prog(f, K1.anti, 10)} out={K1.splinter} />
				<GTag x={1030} y={600} text="no antibodies" at={K1.anti + 4} out={K1.splinter} size={30} />
				<Gloss x={1034} y={700} text="antibodies: proteins aimed at one pathogen (next video)" at={K1.anti + 18} out={K1.splinter} size={26} />
				<Pl p={PLATES.skin} cx={SK1.cx} cy={SK1.cy} w={SK1.w} o={skO} />
				<GTag x={SK1.cx} y={1012} text="skin, cut section" at={K1.splinter + 20} anchor="middle" />
				<Ring cx={shaft[0]} cy={shaft[1]} rx={250} ry={190} at={K1.splinter + 28} color={AMBER} />
			</Overlay>
		</>
	);
};

// ---------- 2. Animals can send cells ----------
const K2 = cues(S('send-cells'), {banksia: 'a banksia had', animals: 'Animals can do', carry: 'carry defending cells', send: 'send them to where', getin: 'it has to get in'});
const SK2 = {cx: 1300, cy: 460, w: 640};
export const SceneSendCells: React.FC = () => {
	const f = useCurrentFrame();
	const m = smooth(prog(f, 0, 24));
	const sk = {cx: lerp(SK1.cx, SK2.cx, m), cy: lerp(SK1.cy, SK2.cy, m), w: lerp(SK1.w, SK2.w, m)};
	const tip = ptOf(PLATES.skin, SK2.cx, SK2.cy, SK2.w, FEAT.tip);
	const bottom = SK2.cy + plH(PLATES.skin, SK2.w) / 2;
	const y = 930;
	const run: Pt[] = quad([60, y], [500, y], [1000, y], 8);
	const bend: Pt[] = quad([1000, y], [tip[0], y], [tip[0], bottom + 20], 12).slice(1);
	const full = [...run, ...bend];
	const L1 = polyLen(run) / polyLen(full);
	const grey = prog(f, K2.getin, 16);
	const sendT = K2.send + 8;
	return (
		<>
			<Heading text={HEAD} at={-100} size={58} out={0} />
			<Overlay>
				<Pl p={PLATES.skin} cx={sk.cx} cy={sk.cy} w={sk.w} dim={grey * 0.6} />
				<Pl p={PLATES.rootDef} cx={270} cy={330} w={360} o={prog(f, K2.banksia, 16)} dim={grey} />
				<GTag x={90} y={480} text="b05: each plant cell defends itself where it is" at={K2.banksia + 10} size={22} />
				<Channel pts={run} at={K2.carry} dur={24} grey={grey} />
				<Channel pts={full} at={K2.send} dur={30} grey={grey} />
				{[0, 1, 2].map(i => {
					const cyc = (t: number) => ((((t - K2.carry) / 200 + i / 3) % 1) + 1) % 1 * L1;
					const u0 = cyc(sendT);
					const u = f < sendT ? cyc(f) : lerp(u0, 0.97 - i * 0.035, smooth(prog(f, sendT, 50)));
					const q = along(full, u).p;
					const o = prog(f, K2.carry + 10 + i * 6, 10);
					return o > 0.01 ? <PlateB key={i} p={PLATES.neutrophil} cx={q[0]} cy={q[1]} w={34} o={o} filter={grey > 0.3 ? 'grayscale(0.8)' : undefined} /> : null;
				})}
				<CTag x={100} y={985} text="animals: cells travel in the blood" at={K2.carry + 14} color={RED_V} size={30} out={K2.send} />
				<CTag x={tip[0] - 470} y={bottom + 70} text="sent to the site" at={K2.send + 20} color={RED_V} size={30} dim={grey} />
			</Overlay>
		</>
	);
};

// ---------- 3. Barriers ----------
const K3 = cues(S('barriers'), {skin: 'Your skin is the main wall', flaking: 'keep flaking away', airways: 'The airways', traps: 'traps microbes', beat: 'beat and sweep', acid: 'Stomach acid', lyso: 'and lysozyme'});
export const EP = {cx: 330, cy: 380, w: 500};
export const AW = {cx: 330, cy: 740, w: 520};
export const SceneBarriers: React.FC = () => {
	const f = useCurrentFrame();
	const ep = (uv: Pt) => ptOf(PLATES.epi, EP.cx, EP.cy, EP.w, uv);
	const aw = (uv: Pt) => ptOf(PLATES.airway, AW.cx, AW.cy, AW.w, uv);
	const flakes = FEAT.flakes.map(ep);
	const chem = prog(f, K3.acid, 10);
	const strip = stripAt(3, [
		{at: 0, labelAt: 12, lit: prog(f, 18, 12)},
		{at: 4, label: undefined}, {at: 8, label: undefined}, {at: 12, label: undefined},
	]);
	const mt = FEAT.mucusTop;
	return (
		<Overlay>
			<ResponseStrip {...strip} />
			<Sx x={90} y={186} text="physical barriers" size={26} color={GREY_INK} weight={700} at={K3.skin} />
			<Pl p={PLATES.epi} cx={EP.cx} cy={EP.cy} w={EP.w} o={prog(f, K3.skin, 16)} />
			<GTag x={610} y={214} text="skin's outer layers" at={K3.skin + 10} />
			{flakes.slice(0, 2).map((q, i) => <Ring key={i} cx={q[0]} cy={q[1]} rx={70} ry={46} at={K3.flaking + 4 + i * 6} out={K3.airways} seed={i + 2} />)}
			<Flow a={flakes} b={flakes.map(q => [q[0] + 90, q[1] - 110] as Pt)} at={K3.flaking + 8} out={K3.airways + 20} n={9} period={70} r={5} color="#7a8f3a" stroke="#4a5a1a" />
			<CTag x={610} y={290} text="dead cells flake off, microbes go too" at={K3.flaking + 12} color={TEAL} size={30} dim={prog(f, K3.airways, 10)} maxW={760} />
			<Pl p={PLATES.airway} cx={AW.cx} cy={AW.cy} w={AW.w} o={prog(f, K3.airways, 16)} />
			{FEAT.trapped.map((t, i) => { const q = aw(t); return <Ring key={i} cx={q[0]} cy={q[1]} rx={30} ry={24} at={K3.traps + 6 + i * 5} out={K3.acid} seed={i + 5} color={TEAL} width={4} />; })}
			<CTag x={610} y={620} text="mucus traps" at={K3.traps + 8} color={TEAL} size={30} dim={prog(f, K3.beat, 10)} />
			{f >= K3.beat ? [0, 1, 2].map(i => {
				const a = aw([FEAT.mucusX[0] + i * 460, mt - 40]), b = aw([FEAT.mucusX[0] + i * 460 + 300, mt - 40]);
				const sh = ((f - K3.beat) % 40) / 40 * 18;
				return <PlainArrow key={i} x1={a[0] + sh} y1={a[1]} x2={b[0] + sh} y2={b[1]} at={K3.beat + 4 + i * 6} color={TEAL} width={5} out={K3.acid + 30} />;
			}) : null}
			<CTag x={610} y={700} text="swept up to the throat" at={K3.beat + 14} color={TEAL} size={30} dim={chem} />
			<Gloss x={614} y={810} text="cilia: tiny beating hair-like parts of cells" at={K3.beat + 24} dim={chem} />
			<Sx x={90} y={940} text="chemical barriers" size={26} color={GREY_INK} weight={700} at={K3.acid} />
			<CTag x={90} y={958} text="stomach acid: kills many swallowed microbes" at={K3.acid + 6} color={TEAL} size={30} dim={prog(f, K3.lyso, 10)} />
			<CTag x={760} y={958} text="lysozyme: breaks down many bacterial walls" at={K3.lyso + 6} color={TEAL} size={30} />
			<Gloss x={764} y={1052} text="an enzyme in tears and saliva" at={K3.lyso + 20} />
		</Overlay>
	);
};

// ---------- 4. A splinter gets through ----------
const K4 = cues(S('splinter'), {breaks: 'breaks straight through', pushes: 'pushes bacteria into', barriers: 'With the barriers', innate: 'innate immune system'});
export const SK4 = {cx: 700, cy: 600, w: 880};
export const SceneSplinter: React.FC = () => {
	const f = useCurrentFrame();
	const shrink = smooth(prog(f, 0, 20));
	const R0 = stripRects(stripAt(4))[0];
	const sp = (uv: Pt) => ptOf(PLATES.skin, SK4.cx, SK4.cy, SK4.w, uv);
	const tip = sp(FEAT.tip);
	const zb = 95;
	const open = smooth(prog(f, K4.pushes + 16, 30));
	const cw = lerp(zb * 2, CL.w, open);
	const ccx = lerp(tip[0], CL.cx, open), ccy = lerp(tip[1], CL.cy, open);
	const breach = FEAT.breach.map(sp);
	const bact = cP(CL.cx, CL.cy, CL.w)(FEAT.bact);
	const strip = stripAt(4, [
		{thumbAt: 10, pulse: Math.max(0, Math.sin(clamp01((f - K4.barriers) / 30) * Math.PI))},
		{label: 'minutes: inflammation', labelAt: K4.innate + 4},
		{label: 'hours: phagocytes', labelAt: K4.innate + 12},
	], {bracket: {from: 0, to: 2, at: K4.innate + 6, label: 'innate', lit: 1}});
	return (
		<Overlay>
			<ResponseStrip {...strip} />
			<Pl p={PLATES.epi} cx={lerp(330, R0.x + 60, shrink)} cy={lerp(380, R0.y + 54, shrink)} w={lerp(500, 80, shrink)} o={1 - prog(f, 10, 10)} />
			<Pl p={PLATES.airway} cx={lerp(330, R0.x + 150, shrink)} cy={lerp(740, R0.y + 54, shrink)} w={lerp(520, 80, shrink)} o={1 - prog(f, 10, 10)} />
			<Pl p={PLATES.skin} cx={SK4.cx} cy={SK4.cy} w={SK4.w} o={prog(f, 6, 16) * (1 - prog(f, K4.pushes + 30, 16))} />
			{f >= K4.breaks ? <g opacity={1 - prog(f, K4.pushes + 20, 10)}><DrawPath d={breach.map((p, i) => `${i ? 'L' : 'M'}${p[0]},${p[1]}`).join(' ')} at={K4.breaks + 4} dur={18} color={TERRA} width={7} /></g> : null}
			<CTag x={1130} y={250} text="barrier broken" at={K4.breaks + 14} color={TERRA} size={30} dim={prog(f, K4.pushes + 30, 10)} out={K4.innate} />
			<ZoomBox x0={tip[0] - zb} y0={tip[1] - zb} x1={tip[0] + zb} y1={tip[1] + zb} at={K4.pushes} out={K4.pushes + 40} />
			{f >= K4.pushes + 16 ? <Closeup cx={ccx} cy={ccy} w={cw} st={{}} id="b06-s4" o={prog(f, K4.pushes + 16, 8)} /> : null}
			<GTag x={330} y={1012} text="close-up under the splinter tip, about 0.15 mm across" at={K4.pushes + 46} size={22} />
			<Ring cx={bact[0]} cy={bact[1]} rx={86} ry={92} at={K4.pushes + 52} color={AMBER} />
			<CTag x={1130} y={330} text="bacteria in living tissue" at={K4.pushes + 56} color={AMBER_INK} size={28} maxW={240} dim={prog(f, K4.innate, 10)} />
			<CTag x={1420} y={770} text="innate: born with it, same response to many pathogens (barriers included)" at={K4.innate + 20} color={TEAL} size={26} maxW={420} />
		</Overlay>
	);
};

// ---------- 5. Raising the alarm ----------
const K5 = cues(S('alarm'), {damaged: 'Damaged cells raise', mast: 'Mast cells', hist: 'called histamine', widen: 'vessels widen', leaky: 'walls leaky'});
/** Screen points of the vessel's upper wall (the leak crosses here) on the close-up at (cx, cy, w). */
export const wallTop = (cx: number, cy: number, w: number) => [[500, 1205], [800, 1265], [1100, 1335], [1400, 1395]].map(p => cP(cx, cy, w)(p as Pt));
export const SceneAlarm: React.FC = () => {
	const f = useCurrentFrame();
	const c = cP(CL.cx, CL.cy, CL.w);
	const mast = c(FEAT.mastC);
	const torn = FEAT.torn.map(c);
	const vessel = FEAT.vessel.map(c);
	const wall = wallTop(CL.cx, CL.cy, CL.w);
	const strip = stripAt(4, [{}, {lit: prog(f, 4, 12)}]);
	const st = {mast: prog(f, K5.hist + 4, 20), vessel: prog(f, K5.widen + 4, 22), fluid: prog(f, K5.leaky + 4, 26)};
	return (
		<Overlay>
			<ResponseStrip {...strip} />
			<Closeup cx={CL.cx} cy={CL.cy} w={CL.w} st={st} id="b06-s5" />
			<Spread from={torn} at={K5.damaged + 4} out={K5.hist} n={20} dist={170} />
			<CTag x={1130} y={220} text="alarm signals" at={K5.damaged + 10} color={AMBER_INK} size={28} dim={prog(f, K5.mast, 10)} />
			<Ring cx={mast[0]} cy={mast[1]} rx={86} ry={84} at={K5.mast + 4} out={K5.widen} color={TEAL} />
			<Pl p={PLATES.mast} cx={170} cy={560} w={200} o={prog(f, K5.mast + 6, 14)} dim={prog(f, K5.widen, 12) * 0.6} />
			<CTag x={40} y={680} text="mast cell: sits beside small vessels" at={K5.mast + 12} color={TEAL} size={26} maxW={250} dim={prog(f, K5.widen, 10)} />
			<Flow a={[mast]} b={vessel.slice(1, 3)} at={K5.hist + 10} out={K5.leaky + 40} n={12} period={50} r={6} />
			<CTag x={1130} y={320} text="histamine" at={K5.hist + 8} color={AMBER_INK} size={30} dim={prog(f, K5.widen, 10)} />
			<CTag x={1130} y={420} text="wider: more blood" at={K5.widen + 10} color={RED_V} size={30} maxW={240} dim={prog(f, K5.leaky, 10)} />
			<Leak a={wall} b={wall.map(p => [p[0] + 20, p[1] - 140] as Pt)} at={K5.leaky + 10} />
			<CTag x={1130} y={520} text="leaky: fluid and proteins seep out" at={K5.leaky + 12} color={DROP} size={30} maxW={240} />
			<GTag x={330} y={1012} text="small vessel" at={K5.widen + 16} size={22} />
		</Overlay>
	);
};

// ---------- 6. Four signs, one purpose ----------
const K6 = cues(S('four-signs'), {see: 'you can see it', red: 'red and warm', swell: 'makes it swell', pain: 'set off pain nerves', failing: 'the body failing', deliver: 'deliver defending cells'});
export const SK6 = {cx: 470, cy: 410, w: 640};
export const CL6 = {cx: 1150, cy: 340, w: 400};
export const SceneFourSigns: React.FC = () => {
	const f = useCurrentFrame();
	const m = smooth(prog(f, 0, 24));
	const cl = {cx: lerp(CL.cx, CL6.cx, m), cy: lerp(CL.cy, CL6.cy, m), w: lerp(CL.w, CL6.w, m)};
	const sp = (uv: Pt) => ptOf(PLATES.skin, SK6.cx, SK6.cy, SK6.w, uv);
	const red = sp(FEAT.red), raised = sp(FEAT.raised);
	const hot = prog(f, K6.see + 4, 24);
	const strip = stripAt(5);
	const bright = prog(f, K6.deliver, 14);
	const c = cP(CL6.cx, CL6.cy, CL6.w);
	const ves = [c([700, 1330]), c([1100, 1420])];
	const bac = c(FEAT.bact);
	const rows = [
		{at: K6.red, text: 'red, warm  ←  more blood (wider vessels)', next: K6.swell},
		{at: K6.swell, text: 'swollen  ←  fluid leaked (leaky vessels)', next: K6.pain},
		{at: K6.pain, text: 'pain  ←  chemicals and pressure', next: K6.failing},
	];
	return (
		<Overlay>
			<ResponseStrip {...strip} />
			<Closeup cx={cl.cx} cy={cl.cy} w={cl.w} st={{mast: 1, vessel: 1, fluid: 1}} id="b06-s6" dim={(1 - bright) * prog(f, 10, 14) * 0.7} />
			<Pl p={PLATES.skin} cx={SK6.cx} cy={SK6.cy} w={SK6.w} o={prog(f, 0, 16) * (hot < 1 ? 1 : 0)} />
			<Pl p={PLATES.skinHot} cx={SK6.cx} cy={SK6.cy} w={SK6.w} o={hot} />
			<CTag x={150} y={712} text="inflammation" at={K6.see + 10} color={TERRA} size={34} />
			<Ring cx={red[0]} cy={red[1]} rx={150} ry={110} at={K6.red + 4} out={K6.swell} color={TERRA} />
			<Ring cx={raised[0]} cy={raised[1] - 6} rx={140} ry={44} at={K6.swell + 4} out={K6.pain} color={DROP} />
			{rows.map((r, i) => {
				const o = prog(f, r.at + 6, 12);
				if (o <= 0.01) return null;
				const on = f < r.next;
				return <Sx key={i} x={160} y={820 + i * 62} text={r.text} size={36} color={on ? INK_SOFT : GREY_INK} hand weight={700} at={r.at + 6} opacity={on ? 1 : 0.7} />;
			})}
			<GTag x={760} y={922} text="e.g. prostaglandins, bradykinin" at={K6.pain + 20} size={22} />
			<MistakeChip x={160} y={990} text="inflammation = just symptoms" at={K6.failing} cross={K6.failing + 16} size={30} />
			{[0, 1].map(i => <PlainArrow key={i} x1={ves[i][0]} y1={ves[i][1] - 20} x2={lerp(ves[i][0], bac[0], 0.8)} y2={lerp(ves[i][1], bac[1], 0.75)} at={K6.deliver + 8 + i * 8} color={TEAL} width={6} />)}
			<CTag x={960} y={560} text="purpose: brings cells and proteins" at={K6.deliver + 14} color={TEAL} size={30} maxW={420} />
			<GTag x={960} y={660} text="proteins include complement" at={K6.deliver + 30} size={22} />
			{void vis}{void Gloss}{void Leak}{void AMBER}
		</Overlay>
	);
};
