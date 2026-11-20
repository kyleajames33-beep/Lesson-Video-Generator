// Y11 Chem M1 V16 scenes 7 to 12: the crimson prediction, two metals and one colour (lithium and strontium side by
// side, their swatches merging, calcium close, "crimson" and "scarlet"), sodium masking potassium (contamination
// sources, a cross-fade most of the way from the lilac flame to the sodium flame), no colour and no amount
// (magnesium's ultraviolet, one copper flame at two strengths), the spectroscope (a chance-engine run sends each
// flame's photons to its own place on the strip, so lithium and strontium come apart) and the memory card.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {runTrials, trialsShown} from '../../sims/chance';
import type {ChanceRun, TrialPace} from '../../sims/chance';
import {FLAME_N, MODEL_TAG, MT, SCOPE, SRC_LINES, dur, hold, ph, sc} from './common';
import type {Line, Metal} from './common';
import {
	Bottle, Bracket, Burner, Chip, Countdown, DARK_BAND, Framed, GREEN_S, GREEN_T, Heading, INK, Ladder, NAVY_S, OText, PAPER, PenArrow, Photon, Plate, RED_T, Rich,
	Strip, Swatch, Sx, TEAL_T, richW, TERRA_S, TERRA_T, TickMark, VArrow, WireLoop, Write, clamp01, dipPt, flamePt, lerp, nmColor, nmInk, prog, span, sxOf,
} from './parts';
import type {BottleG, BurnerG, LadderG, StripG} from './parts';

const edge = (g: BurnerG): [number, number] => flamePt(g, FLAME_N.cx + 40, FLAME_N.edge);

// ---------- a spectrum strip with lines and bands (v10's strip: 700 nm at the left, 400 nm at the right) ----------
export const SpecStrip: React.FC<{id: string; g: StripG; lines: Line[]; at?: number[]; labels?: boolean; glow?: number[]}> = ({id, g, lines, at, labels = true, glow}) => {
	const f = useCurrentFrame();
	return (
		<g>
			<Strip id={id} g={g} />
			{lines.map((l, i) => {
				const v = at ? prog(f, at[i], 8) : 1;
				if (v <= 0.005) return null;
				const lh = labels ? g.h - 44 : g.h - 16;
				const gl = glow?.[i] ?? 0;
				if (l.band) {
					const xa = sxOf(g, l.nm + l.band / 2), xb = sxOf(g, l.nm - l.band / 2);
					return (
						<g key={i} opacity={v}>
							<defs><linearGradient id={`${id}b${i}`} x1={xa} x2={xb} y1={0} y2={0} gradientUnits="userSpaceOnUse">{[0, 0.5, 1].map(t => <stop key={t} offset={t} stopColor={nmColor(l.nm + l.band! / 2 - t * l.band!)} />)}</linearGradient></defs>
							<rect x={xa} y={g.y + 8} width={xb - xa} height={lh} rx={6} fill={`url(#${id}b${i})`} opacity={0.75 + 0.25 * gl} />
						</g>
					);
				}
				const x = sxOf(g, l.nm), c = nmColor(l.nm);
				return (
					<g key={i} opacity={v}>
						<rect x={x - 15} y={g.y + 8} width={30} height={lh} rx={4} fill={c} opacity={0.3 + 0.3 * gl} />
						<rect x={x - 5} y={g.y + 8} width={10} height={lh} rx={3} fill={c} />
					</g>
				);
			})}
			{labels ? lines.map((l, i) => <Sx key={'t' + i} x={sxOf(g, l.nm)} y={g.y + g.h - 12} text={l.band ? `${l.nm - l.band / 2} to ${l.nm + l.band / 2}` : `${Math.round(l.nm)}`} size={30} color="#ffffff" anchor="middle" weight={800} at={-1000} opacity={at ? prog(f, at[i], 8) : 1} />) : null}
			{labels ? <Sx x={g.x + g.w - 14} anchor="end" y={g.y + g.h - 12} text="nm" size={30} color="#ffffff" weight={800} at={-1000} /> : null}
		</g>
	);
};

// ---------- 7. prediction ----------
const K7 = cues(sc('prediction'), {quick: 'Quick prediction', unknown: 'An unknown', crimson: 'crimson-red flame', which: 'Which metal', think: 'Have a think'});
export const G7: BurnerG = {cx: 900, bottom: 920, h: 600};
const B7: BottleG = {cx: 520, bottom: 920, h: 330};
export const ScenePrediction: React.FC = () => {
	const h = hold('prediction');
	const e = edge(G7);
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<Heading text="Quick prediction" at={0} />
			<Burner g={G7} states={[['li', -1000]]} />
			<Bottle g={B7} lines={['?']} size={60} />
			<WireLoop pts={[[0, e[0], e[1]]]} at={-1000} hot={-1000} s={1.3} />
			<Chip x={96} y={200} segs={[{t: 'crimson-red flame: which metal?'}]} at={-1000} size={44} color={INK} />
			<Swatch x={1180} y={330} w={170} h={170} fill={MT.Li.fill} />
			<Write x={1380} y={432} text="crimson-red" at={K7.crimson} size={42} color={MT.Li.ink} />
			<Countdown start={h.startFrame} end={h.endFrame} x={1460} y={700} r={64} ringFrom={K7.think} />
			{void K7.quick}{void K7.unknown}{void K7.which}
		</svg>
	);
};

// ---------- 8. two metals, one colour ----------
const K8 = cues(sc('overlap'), {said: 'If you said', right: 'might be right', strontium: 'But strontium', similar: 'very similar', eye: 'By eye', reliably: "can't reliably", apart: 'tell them apart', calcium: "Calcium's", close: 'close as well', colours: 'Colours are hard', crimson: "person's crimson", scarlet: 'scarlet', alone: 'a colour alone', more: 'more than one'});
const G8L: BurnerG = {cx: 250, bottom: 900, h: 560}, G8S: BurnerG = {cx: 590, bottom: 900, h: 560}, G8C: BurnerG = {cx: 900, bottom: 900, h: 380};
export const SceneOverlap: React.FC = () => {
	const f = useCurrentFrame();
	const mv = span(f, K8.strontium - 6, K8.strontium + 20);
	const gL: BurnerG = {cx: lerp(G7.cx, G8L.cx, mv), bottom: lerp(G7.bottom, G8L.bottom, mv), h: lerp(G7.h, G8L.h, mv)};
	const meet = span(f, K8.apart, K8.apart + 26);
	const sx1 = lerp(1190, 1420, meet), sx2 = lerp(1650, 1420, meet);
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<Heading text="Two metals, one colour?" at={K8.said} />
			<Bottle g={B7} lines={['?']} size={60} out={0} />
			<Burner g={gL} states={[['li', -1000]]} />
			<Burner g={G8S} states={[['sr', -1000]]} at={K8.strontium} />
			<Burner g={G8C} states={[['ca', -1000]]} at={K8.close} />
			<OText x={G8L.cx} y={944} text="lithium" size={38} fill={MT.Li.fill} anchor="middle" at={K8.strontium + 16} />
			<OText x={G8S.cx} y={944} text="strontium" size={38} fill={MT.Sr.fill} anchor="middle" at={K8.strontium + 16} />
			<OText x={G8C.cx} y={944} text="calcium" size={38} fill={MT.Ca.fill} anchor="middle" at={K8.close + 6} />
			<Write x={G8C.cx} y={490} text="close" at={K8.close + 8} size={42} color={MT.Ca.ink} anchor="middle" />
			<Chip x={96} y={190} segs={[{t: 'Li^{+} ?'}]} at={K8.said + 20} size={52} color={INK} />
			{/* the swatches merge */}
			<Swatch x={sx1 - 100} y={270} w={200} h={200} fill={MT.Li.fill} o={prog(f, K8.similar, 10)} />
			<Swatch x={sx2 - 100} y={270} w={200} h={200} fill={MT.Sr.fill} o={prog(f, K8.similar, 10) * (1 - 0.45 * meet)} />
			<OText x={lerp(1190, 1340, meet)} y={250} text="Li^{+}?" size={44} fill={MT.Li.fill} anchor="middle" at={K8.similar + 4} />
			<OText x={lerp(1650, 1500, meet)} y={250} text="Sr^{2+}?" size={44} fill={MT.Sr.fill} anchor="middle" at={K8.similar + 8} />
			<Write x={1290} y={620} text="crimson" at={K8.crimson} size={42} color={MT.Li.ink} anchor="middle" />
			<Write x={1550} y={620} text="scarlet" at={K8.scarlet} size={42} color={MT.Sr.ink} anchor="middle" />
			<Write x={1420} y={540} text="very similar reds" at={K8.similar + 16} size={44} color={INK} anchor="middle" />
			<Framed x={1420} y={760} segs={[{t: 'Li^{+} or Sr^{2+}', c: GREEN_T}]} at={K8.reliably} size={52} stroke={GREEN_S} anchor="middle" />
			<Chip x={1420} y={830} segs={[{t: 'limit 1: similar colours overlap'}]} at={K8.more} size={38} color={TERRA_T} anchor="middle" />
			{void K8.eye}{void K8.calcium}{void K8.colours}{void K8.alone}{void TERRA_S}
		</svg>
	);
};

// ---------- 9. sodium gets everywhere ----------
const K9 = cues(sc('contamination'), {second: 'second problem', everywhere: 'almost everywhere', dust: 'dust', skin: 'skin', tap: 'tap water', glass: 'glassware', bright: 'very bright', trace: 'tiny trace', swamp: 'swamp a weaker', lilac: 'pale lilac', mixture: 'In a mixture', win: 'tends to win', thats: "That's why", matter: 'really matter'});
export const G9: BurnerG = {cx: 900, bottom: 930, h: 680};
const SRC9: [string, number, number][] = [['dust', 330, 0], ['skin', 450, 1], ['tap water', 570, 2], ['glassware', 690, 3]];
export const SceneContamination: React.FC = () => {
	const f = useCurrentFrame();
	const e = edge(G9);
	const at = [K9.dust, K9.skin, K9.tap, K9.glass];
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<Heading text="Sodium gets everywhere" at={0} />
			<Burner g={G9} states={[['k', -1000], ['na', K9.swamp, 36, 0.82]]} />
			<WireLoop pts={[[0, e[0], e[1]]]} at={-1000} hot={-1000} s={1.3} />
			<Write x={96} y={252} text="sodium compounds:" at={K9.everywhere} size={42} color={MT.Na.ink} />
			{SRC9.map(([t, y, i]) => (
				<g key={t}>
					<Sx x={140} y={y} text={t} size={44} color={INK} weight={800} at={at[i]} />
					<PenArrow a={[150 + t.length * 24, y - 14]} b={[e[0] - 30, e[1] + (i - 1.5) * 14]} at={at[i] + 6} color={INK} bend={0.06 * (i - 1.5)} width={4} />
					{/* sodium specks drifting onto the loop */}
					{[0, 1, 2].map(k => {
						const p = clamp01((f - at[i] - 10 - k * 8) / 34);
						if (p <= 0) return null;
						const x = lerp(160 + t.length * 24, e[0] - 8, p), y2 = lerp(y - 12, e[1] + (k - 1) * 8, p);
						return <circle key={k} cx={x} cy={y2} r={6} fill={MT.Na.fill} stroke={INK} strokeWidth={1.5} />;
					})}
				</g>
			))}
			<Sx x={1170} y={238} text="sodium present" size={34} color={INK} weight={800} at={-1000} />
			<rect x={1170} y={254} width={560} height={76} rx={14} fill={PAPER} stroke={INK} strokeWidth={4} />
			<Sx x={1192} y={310} text="?" size={48} color={INK} weight={800} at={-1000} out={K9.trace} />
			<Sx x={1192} y={310} text="a trace" size={48} color={MT.Na.ink} weight={800} at={K9.trace} />
			<Write x={1170} y={410} text="a trace is enough" at={K9.swamp + 10} size={42} color={MT.Na.ink} />
			<Write x={1170} y={480} text="potassium: pale lilac" at={12} out={K9.lilac} size={42} color={MT.K.ink} />
			<Write x={1170} y={480} text="lilac hidden" at={K9.lilac + 8} size={42} color={MT.K.ink} />
			<Chip x={96} y={790} segs={[{t: 'mixtures: strongest colour wins'}]} at={K9.win} size={38} color={INK} />
			{/* the method steps that guard against it */}
			<Sx x={1170} y={580} text="1  clean loop, blank first" size={34} color={INK} weight={800} at={K9.thats} />
			<Sx x={1170} y={650} text="4  clean between tests" size={34} color={INK} weight={800} at={K9.thats + 6} />
			<TickMark x={1650} y={570} at={K9.matter - 10} color={TEAL_T} />
			<TickMark x={1580} y={640} at={K9.matter - 4} color={TEAL_T} />
			<Chip x={1094} y={720} segs={[{t: 'limit 2: contamination and masking'}]} at={K9.thats + 10} size={38} color={TERRA_T} />
			<Sx x={1094} y={936} text="blue cobalt glass can filter out sodium's yellow" size={30} color={INK} weight={700} at={K9.matter - 6} />
			{void K9.second}{void K9.bright}{void K9.mixture}
		</svg>
	);
};

// ---------- 10. no colour, no amount ----------
const K10 = cues(sc('no-colour'), {some: 'Some metals', mg: 'Magnesium compounds', uv: 'mostly ultraviolet', see: "can't see", stays: 'stays blue', says: 'says nothing', much: 'how much', faint: 'A faint colour', dilute: 'dilute solution', dip: 'poor dip'});
const G10: BurnerG = {cx: 440, bottom: 900, h: 460};
const B10: BottleG = {cx: 150, bottom: 900, h: 300};
const L10: LadderG = {x0: 600, x1: 820, ys: [800, 640, 560, 510]};
const S10: StripG = {x: 960, y: 220, w: 640, h: 100};
const UVZ = {x: 1612, y: 220, w: 200, h: 100};
export const SceneNoColour: React.FC = () => {
	const f = useCurrentFrame();
	const e = edge(G10), d = dipPt(B10);
	const rest: [number, number] = [d[0] + 30, d[1] - 120];
	const keys: [number, number, number][] = [[0, rest[0], rest[1]], [K10.mg - 10, rest[0], rest[1]], [K10.mg + 4, d[0], d[1]], [K10.mg + 12, d[0], d[1] - 60], [K10.mg + 40, e[0], e[1]]];
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<Heading text="What a flame can't tell you" at={0} />
			<Burner g={G10} states={[['k', -1000], ['blue', 0, 14]]} />
			<Bottle g={B10} lines={['MgCl_2', '(aq)']} size={34} />
			<WireLoop pts={keys} at={-1000} hot={K10.mg + 40} s={1.1} />
			<Write x={300} y={402} text="stays blue" at={K10.stays} size={42} color={NAVY_S} anchor="middle" />
			{/* the ladder: a drop gives an invisible photon */}
			<Ladder g={L10} />
			<Sx x={L10.x0} y={L10.ys[3] - 26} text="energy levels" size={30} color={INK} weight={800} at={-1000} />
			<VArrow x={700} y0={L10.ys[3] + 8} y1={L10.ys[0] - 8} at={K10.uv} color="#5a6470" width={7} dashed />
			<Photon a={[730, 640]} b={[UVZ.x + 60, UVZ.y + UVZ.h - 8]} at={K10.uv + 10} dur={36} color="#5a6470" dashed fadeAt={K10.says} />
			<Strip id="v16s10" g={S10} rainbow={1} />
			<rect x={UVZ.x} y={UVZ.y} width={UVZ.w} height={UVZ.h} rx={10} fill="#e9ecef" stroke="#5a6470" strokeWidth={3} strokeDasharray="10 7" />
			<Sx x={UVZ.x + UVZ.w / 2} y={UVZ.y + 64} text="UV" size={40} color="#5a6470" anchor="middle" weight={800} at={-1000} />
			<Sx x={S10.x} y={S10.y - 14} text="what the eye can see" size={30} color={INK} weight={700} at={-1000} />
			<Write x={1000} y={400} text="ultraviolet: invisible" at={K10.see} size={42} color="#4f5862" />
			<Chip x={96} y={200} segs={[{t: 'limit 3: some metals show no colour'}]} at={K10.see + 8} size={38} color={TERRA_T} />
			{/* one copper flame at two strengths */}
			<Burner g={{cx: 1180, bottom: 900, h: 380}} states={[['blue', -1000], ['cu', -1000, 1, 1]]} at={K10.says} />
			<Burner g={{cx: 1520, bottom: 900, h: 380}} states={[['blue', -1000], ['cu', -1000, 1, 0.3]]} at={K10.says + 6} />
			<Sx x={1180} y={944} text="bright" size={34} color={INK} anchor="middle" weight={800} at={K10.says + 10} />
			<Sx x={1520} y={944} text="faint" size={34} color={INK} anchor="middle" weight={800} at={K10.says + 14} />
			<Write x={1350} y={490} text="brightness ≠ amount" at={K10.much} size={42} color={INK} anchor="middle" />
			<Chip x={96} y={274} segs={[{t: 'limit 4: no amount'}]} at={K10.faint} size={38} color={TERRA_T} />
			{void K10.some}{void K10.dilute}{void K10.dip}{void nmInk}
		</svg>
	);
};

// ---------- 11. the fix: look at the lines (chance-engine run through the spectroscope) ----------
const K11 = cues(sc('spectroscope'), {how: 'how do chemists', spread: 'They spread', scope: 'with a spectroscope', small: 'a small instrument', prism: 'like the prism', then: 'Then you see', li: 'Lithium shows', strong: 'one strong red', sr: 'Strontium shows', blue: 'a blue line', each: "Each metal's", finger: 'its fingerprint', cant: "the colour can't"});
export const GLI: StripG = {x: 880, y: 236, w: 900, h: 120};
export const GSR: StripG = {x: 880, y: 590, w: 900, h: 120};
const LI = MT.Li.lines ?? [], SR = MT.Sr.lines ?? [];
const run = (m: Metal, seed: number): ChanceRun => runTrials({seed, trials: 80, experiment: {kind: 'weighted', outcomes: (m.lines ?? []).map(l => ({label: `${l.nm}`, weight: l.weight}))}});
const RLI = run(MT.Li, 11), RSR = run(MT.Sr, 23);
const PLI: TrialPace = {at: K11.then, slow: 3, every: 16, until: K11.sr - 6};
const PSR: TrialPace = {at: K11.sr, slow: 3, every: 10, until: K11.each};
const starts = (r: ChanceRun, p: TrialPace) => { const out: number[] = []; let s = 0; for (let fr = 0; fr <= dur('spectroscope'); fr++) { const n = trialsShown(r, fr, p); while (s < n) { out.push(fr); s++; } } return out; };
const SLI = starts(RLI, PLI), SSR = starts(RSR, PSR);
const FLY = 14;
const SCW = 420, SCH = ph(SCOPE, SCW), SCX = 300, SCY = 560 - SCH / 2;
const EYE: [number, number] = [SCX + SCW - 10, 560], SLIT: [number, number] = [SCX + 12, 560];
const tally = (r: ChanceRun, st: number[], f: number, n: number) => { const c = Array(n).fill(0); st.forEach((t, k) => { if (t + FLY <= f) c[r.outcome[k]]++; }); return c; };
const firstLand = (r: ChanceRun, st: number[], n: number) => Array.from({length: n}, (_, i) => { const k = Array.from(r.outcome).indexOf(i); return k < 0 || k >= st.length ? 1e9 : st[k] + FLY; });
const Tallies: React.FC<{g: StripG; ls: Line[]; counts: number[]; base: number; maxH: number}> = ({g, ls, counts, base, maxH}) => (
	<g>
		<line x1={g.x} x2={g.x + g.w} y1={base} y2={base} stroke={INK} strokeWidth={4} strokeLinecap="round" />
		{ls.map((l, i) => {
			const x = sxOf(g, l.nm), hh = (counts[i] / 80) * maxH * 1.6;
			return (
				<g key={i}>
					<line x1={x} x2={x} y1={g.y + g.h} y2={base} stroke={nmInk(l.nm)} strokeWidth={2} strokeDasharray="4 6" />
					{counts[i] > 0 ? <rect x={x - 24} y={base - Math.min(maxH, hh)} width={48} height={Math.min(maxH, hh)} rx={6} fill={nmColor(l.nm)} stroke={INK} strokeWidth={2} /> : null}
					{counts[i] > 0 ? <Sx x={x + 32} y={base - 8} text={`${counts[i]}`} size={30} color={INK} weight={800} at={-1000} /> : null}
				</g>
			);
		})}
	</g>
);
export const SceneSpectroscope: React.FC = () => {
	const f = useCurrentFrame();
	const cLi = tally(RLI, SLI, f, LI.length), cSr = tally(RSR, SSR, f, SR.length);
	const fLi = firstLand(RLI, SLI, LI.length), fSr = firstLand(RSR, SSR, SR.length);
	const liOn = f < K11.sr ? 1 : 0.35, srOn = f >= K11.sr ? 1 : 0.35;
	const gLi: BurnerG = {cx: 170, bottom: 520, h: 330}, gSr: BurnerG = {cx: 170, bottom: 930, h: 330};
	const tLi = flamePt(gLi, FLAME_N.cx, 330), tSr = flamePt(gSr, FLAME_N.cx, 330);
	const flying = (r: ChanceRun, st: number[], g: StripG, ls: Line[], key: string) => st.map((t, k) => (f >= t && f < t + FLY + 2 ? <Photon key={key + k} a={EYE} b={[sxOf(g, ls[r.outcome[k]].nm), g.y + 10]} at={t} dur={FLY} color={nmInk(ls[r.outcome[k]].nm)} width={4} amp={7} /> : null));
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<Heading text="The fix: look at the lines" at={0} />
			<Burner g={gLi} states={[['li', -1000]]} />
			<Burner g={gSr} states={[['sr', -1000]]} />
			<OText x={250} y={250} text="lithium" size={34} fill={MT.Li.fill} at={-1000} />
			<OText x={250} y={660} text="strontium" size={34} fill={MT.Sr.fill} at={-1000} />
			{/* beams into the slit */}
			<line x1={tLi[0] + 30} y1={tLi[1]} x2={SLIT[0]} y2={SLIT[1] - 6} stroke={MT.Li.fill} strokeWidth={8} strokeLinecap="round" opacity={prog(f, K11.spread, 12) * liOn} />
			<line x1={tSr[0] + 30} y1={tSr[1]} x2={SLIT[0]} y2={SLIT[1] + 6} stroke={MT.Sr.fill} strokeWidth={8} strokeLinecap="round" opacity={prog(f, K11.spread, 12) * srOn} />
			<Plate p={SCOPE} x={SCX} y={SCY} h={SCH} />
			<Write x={SCX + 280} y={SCY - 56} text="spectroscope" at={K11.scope} size={42} color={INK} anchor="middle" />
			<Sx x={SCX + 280} y={SCY - 16} text="spreads light into its colours" size={30} color={INK} anchor="middle" weight={700} at={K11.small} />
			{/* the two strips */}
			<OText x={GLI.x} y={GLI.y - 16} text="lithium flame" size={34} fill={MT.Li.fill} at={-1000} />
			<SpecStrip id="v16li" g={GLI} lines={LI} at={fLi.map(t => t - 4)} />
			<Tallies g={GLI} ls={LI} counts={cLi} base={500} maxH={110} />
			<OText x={GSR.x} y={GSR.y - 16} text="strontium flame" size={34} fill={MT.Sr.fill} at={-1000} />
			<SpecStrip id="v16sr" g={GSR} lines={SR} at={fSr.map(t => t - 4)} />
			<Tallies g={GSR} ls={SR} counts={cSr} base={860} maxH={110} />
			{flying(RLI, SLI, GLI, LI, 'l')}
			{flying(RSR, SSR, GSR, SR, 's')}
			<Write x={1150} y={460} text="one strong line" at={K11.strong} size={42} color={RED_T} />
			<PenArrow a={[1140, 448]} b={[sxOf(GLI, 670.8) + 30, 430]} at={K11.strong + 10} color={RED_T} bend={0.2} />
			<Write x={1350} y={566} text="and a blue one" at={K11.blue} size={42} color="#1f4f9e" />
			<PenArrow a={[1640, 556]} b={[sxOf(GSR, 460.7), GSR.y + 6]} at={K11.blue + 10} color="#1f4f9e" bend={-0.3} />
			<Bracket a={[1808, GLI.y]} b={[1808, GSR.y + GSR.h]} at={K11.finger} color={INK} depth={-24} />
			<Write x={1824} y={150} text="same colour, different lines" at={K11.cant - 4} size={42} color={INK} anchor="end" />
			<Chip x={300} y={862} segs={[{t: 'more tests for metal ions: Year 12'}]} at={K11.finger + 20} size={30} color={INK} />
			<Sx x={300} y={792} text={MODEL_TAG} size={30} color={INK} weight={700} at={K11.li} />
			<Sx x={880} y={938} text={SRC_LINES} size={26} color={INK} weight={700} at={-1000} />
			{void K11.how}{void K11.prism}{void K11.then}{void K11.each}{void DARK_BAND}
		</svg>
	);
};

// ---------- 12. one line to remember ----------
const K12 = cues(sc('memory-line'), {rule: 'the rule', clue: 'a clue', evidence: 'the evidence', colour: 'Colour suggests', spectrum: 'spectrum confirms'});
export const M12 = {li: {x: 900, y: 236, w: 900, h: 100} as StripG, sr: {x: 900, y: 410, w: 900, h: 100} as StripG};
export const MemoryCard: React.FC<{x: number; y: number; w: number; h: number; size: number; atA?: number; atB?: number; rule?: number}> = ({x, y, w, h, size, atA = -1000, atB = -1000, rule}) => {
	const f = useCurrentFrame();
	const wA = richW([{t: 'Colour suggests; '}], size, true, 700);
	return (
		<g>
			<rect x={x} y={y} width={w} height={h} rx={22} fill={PAPER} stroke={NAVY_S} strokeWidth={5} />
			<Sx x={x + 30} y={y + 46} text="memory aid" size={30} color={INK} hand at={-1000} />
			{atA < -100 ? <Sx x={x + 40} y={y + h - 54} text="Colour suggests;" size={size} color={RED_T} hand at={-1000} /> : <Write x={x + 40} y={y + h - 54} text="Colour suggests;" at={atA} size={size} color={RED_T} />}
			{atB < -100 ? <Sx x={x + 40 + wA} y={y + h - 54} text="spectrum confirms." size={size} color={INK} hand at={-1000} /> : <Write x={x + 40 + wA} y={y + h - 54} text="spectrum confirms." at={atB} size={size} color={INK} />}
			{rule !== undefined ? <Write x={x + 40} y={y + 112} text="the rule to keep: a flame colour is a clue; the line pattern is the evidence" at={rule} size={38} color={INK} cps={60} /> : null}
			{void f}
		</g>
	);
};
export const SceneMemoryLine: React.FC = () => (
	<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
		<Heading text="One line to remember" at={0} />
		<Burner g={{cx: 220, bottom: 920, h: 600}} states={[['li', -1000]]} />
		<Write x={380} y={420} text="a clue" at={K12.clue} size={42} color={MT.Li.ink} />
		<OText x={M12.li.x} y={M12.li.y - 14} text="lithium" size={34} fill={MT.Li.fill} at={-1000} />
		<SpecStrip id="v16m1" g={M12.li} lines={LI} />
		<OText x={M12.sr.x} y={M12.sr.y - 14} text="strontium" size={34} fill={MT.Sr.fill} at={-1000} />
		<SpecStrip id="v16m2" g={M12.sr} lines={SR} />
		<Write x={1350} y={570} text="the evidence" at={K12.evidence} size={42} color={INK} anchor="middle" />
		<MemoryCard x={430} y={600} w={1394} h={290} size={64} atA={K12.colour} atB={K12.spectrum} rule={K12.rule} />
		{void K12.rule}{void Rich}{void TickMark}{void GREEN_S}
	</svg>
);
