// G01 scenes 8 to 10: photosynthesis as the reverse, the leaf, memory aid and sign table.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {DrawPath, Enter, FONT_DISPLAY, FONT_HAND, HandText, INK, INK_SOFT, Mark, prog} from '../../kit';
import {cues} from '../../cues';
import {BAD, DG, HEAT, LIGHT, RESP, SPREAD, kf, sc, Heading} from './common';
import {AnswerBox, FireIcon, Fade, GFormula, GivensCard, LeafIcon, LevelDiagram, Overlay, Panel, Pill, ReactionBox, StageTabs, Sub, SvgText, T, TEAL} from './parts';

const EQ_PHOTO = '6CO_2(g) + 6H_2O(l) → C_6H_12O_6(s) + 6O_2(g)';
const EQ_BURN = 'C_6H_12O_6(s) + 6O_2(g) → 6CO_2(g) + 6H_2O(l)';

// ---------- 6a. Photosynthesis: the reverse ----------
const K8 = cues(sc('photo-reverse'), {back: 'run it backwards', flips: 'flips', dh: 'plus two thousand eight hundred and three', energy: 'energy has to go in', light: 'is light', twelve: 'twelve particles', seven: 'seven', settles: 'settles into a crystal', falls: 'entropy falls', tds: 'minus seventy-eight', eqn: 'delta g equals', neg: 'minus negative', adds: 'minus a negative adds', e81: 'eighty-one', own: 'run on its own', any: 'at any temperature'});
export const ScenePhotoReverse: React.FC = () => {
	const f = useCurrentFrame();
	const q = 1 - prog(f, K8.twelve + 10, 130);
	const BX = 730, BY = 300, BW = 1100, BH = 520;
	return (
		<>
			<Heading text="Photosynthesis: burning in reverse" at={4} size={62} />
			<Enter at={2} out={K8.flips} style={{position: 'absolute', left: 96, top: 190}}><Sub text={EQ_BURN} size={40} /></Enter>
			<Enter at={K8.flips} style={{position: 'absolute', left: 96, top: 190}}><Sub text={EQ_PHOTO} size={40} /></Enter>
			<Overlay>
				<Fade at={K8.flips}>
					<DrawPath d="M110,820 C170,765 240,805 205,862" at={K8.flips} dur={22} color={BAD} width={7} />
					<DrawPath d="M183,854 L207,868 L225,842" at={K8.flips + 18} dur={8} color={BAD} width={7} />
					<SvgText x={262} y={846} text="every sign flips" size={60} color={BAD} at={K8.flips + 14} />
				</Fade>
			</Overlay>
			<GivensCard x={96} y={270} w={600} titleAt={-100} out={K8.dh - 12} rows={[
				{sym: 'H', value: '−2803', unit: 'kJ/mol', at: -100, color: '#a79d93'},
				{sym: 'S', value: '+78', unit: 'kJ/mol', at: -100, color: '#a79d93'},
			]} />
			<GivensCard x={96} y={270} w={600} titleAt={K8.dh - 8} rows={[
				{sym: 'H', value: '+2803', unit: 'kJ/mol', at: K8.dh, note: 'heat term'},
				{sym: 'S', value: '−78', unit: 'kJ/mol', at: K8.tds, note: 'about, at 25 °C'},
			]} />
			<Panel x={96} y={590} w={600} at={0}><GFormula size={50} /></Panel>
			<StageTabs x={900} y={196} labels={['energy in', 'packing', 'ΔG']} stageAt={[K8.dh, K8.twelve, K8.eqn]} w={860} />
			<Overlay>
				<Fade at={K8.dh} out={K8.twelve - 4}>
					<LevelDiagram x={730} y={270} w={1000} h={560} dir="up" t={{levels: K8.dh + 4, arrow: K8.energy, heat: 0}} value="ΔH = +2803 kJ/mol" startLabel="reactants" endLabel="products" light lightAt={K8.light - 6} />
					<SvgText x={1200} y={890} text="energy has to go in" size={46} color={HEAT} anchor="middle" at={K8.energy} />
				</Fade>
				<Fade at={K8.twelve - 6} out={K8.eqn - 4}>
					<ReactionBox x={BX} y={BY} w={BW} h={BH} q={q} ms={2.5} />
					<SvgText x={BX + BW / 2} y={BY - 18} text="12 particles become 7: crystal and 6 O_2" size={42} color={SPREAD} anchor="middle" at={K8.twelve} />
					<Pill x={BX + 40} y={BY + BH + 22} w={420} text="12 particles to 7" at={K8.seven} color={SPREAD} size={46} h={66} />
					<Pill x={BX + 500} y={BY + BH + 22} w={400} text="more packed" at={K8.falls} color={SPREAD} size={46} h={66} />
				</Fade>
			</Overlay>
			<Enter at={K8.eqn} style={{position: 'absolute', left: 760, top: 290}}>
				<span style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 70, color: INK, whiteSpace: 'pre'}}>
					ΔG = <span style={{color: HEAT}}>(+2803)</span> − <span style={{color: SPREAD, position: 'relative', marginLeft: 12}}>(−78)
						<span style={{position: 'absolute', inset: '-6px -10px', border: `5px solid ${BAD}`, borderRadius: 40, opacity: prog(f, K8.neg, 12)}} />
					</span>
				</span>
			</Enter>
			<Enter at={K8.adds} style={{position: 'absolute', left: 770, top: 392}}><T size={52} color={BAD} hand>minus a negative adds</T></Enter>
			<AnswerBox x={760} y={470} at={K8.e81} text="= +2881 kJ/mol" size={88} />
			<Enter at={K8.e81 + 30} style={{position: 'absolute', left: 770, top: 612}}>
				<T size={34} color={HEAT} weight={700}>ΔH = +2803 is the heat term</T>
				<T size={34} color={DG} weight={800}>ΔG = +2881 is the result</T>
			</Enter>
			<Overlay>
				<Fade at={K8.own}>
					<SvgText x={770} y={810} text="can it run on its own?" size={58} color={INK} at={K8.own} />
					<Mark x={1290} y={796} at={K8.own + 20} kind="cross" size={70} />
				</Fade>
				<SvgText x={770} y={880} text="ΔG is positive at every temperature" size={52} color={BAD} at={K8.any} />
			</Overlay>
		</>
	);
};

// ---------- 6b. Photosynthesis: what holds a leaf away from equilibrium ----------
const K9 = cues(sc('photo-leaf'), {how: 'how does a leaf', open: 'open system', sun: 'sunlight keeps supplying', co2: 'carbon dioxide keeps arriving', o2: 'oxygen leaves', cut: 'cut off the light', stops: 'stops', resp: 'respiration', sep: 'a separate process', dark: 'in the dark', constant: 'constant light input'});
const Flow: React.FC<{x0: number; y0: number; x1: number; y1: number; at: number; color: string; live: number; seed?: number; n?: number}> = ({x0, y0, x1, y1, at, color, live, seed = 0, n = 3}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 14);
	return (
		<g opacity={o}>
			<path d={`M${x0},${y0} L${x1},${y1}`} stroke={color} strokeWidth={6} strokeLinecap="round" opacity={0.3 + 0.7 * live} />
			<path d={`M${x1 - 20 * Math.sign(x1 - x0 || 1) - 8 * Math.sign(y1 - y0)},${y1 - 20 * Math.sign(y1 - y0) + 12 * Math.sign(x1 - x0)} L${x1},${y1} L${x1 - 20 * Math.sign(x1 - x0 || 1) + 8 * Math.sign(y1 - y0)},${y1 - 20 * Math.sign(y1 - y0) - 12 * Math.sign(x1 - x0)}`} fill="none" stroke={color} strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" opacity={0.3 + 0.7 * live} />
			{Array.from({length: n}, (_, i) => {
				const u = (((f - at) * 0.012 * live + i / n + seed) % 1 + 1) % 1;
				return <circle key={i} cx={x0 + (x1 - x0) * u} cy={y0 + (y1 - y0) * u} r={10} fill={color} stroke={INK} strokeWidth={2} opacity={live * Math.min(1, u * 6, (1 - u) * 6)} />;
			})}
		</g>
	);
};
export const ScenePhotoLeaf: React.FC = () => {
	const f = useCurrentFrame();
	const live = 1 - prog(f, K9.cut, 22);
	return (
		<>
			<Heading text="What keeps the leaf going?" at={4} />
			<Overlay>
				<Fade at={K9.open}><ellipse cx={960} cy={470} rx={470} ry={235} fill="none" stroke={INK_SOFT} strokeWidth={5} strokeDasharray="30 24" /></Fade>
				<Pill x={810} y={196} w={300} text="open system" at={K9.open} color={INK} size={44} h={62} />
				<path d="M700,540 C740,330 980,290 1230,350 C1210,520 1000,650 700,540 Z" transform="translate(0,-40)" fill="#7fbf5a" stroke={INK} strokeWidth={5} strokeLinejoin="round" />
				<path d="M700,540 C860,470 1060,420 1220,360" transform="translate(0,-40)" fill="none" stroke={INK} strokeWidth={4} strokeLinecap="round" />
				{[0, 1, 2].map(i => <path key={i} d={`M${860 + i * 100},${422 - i * 22} l${30 + i * 8},${60 - i * 8}`} stroke={INK} strokeWidth={3} strokeLinecap="round" opacity={0.6} />)}
				{/* sunlight in */}
				<Fade at={K9.sun}>
					<circle cx={1560} cy={250} r={46} fill={LIGHT} stroke={INK} strokeWidth={3} opacity={0.35 + 0.65 * live} />
					{Array.from({length: 10}, (_, i) => <path key={i} d={`M${1560 + Math.cos(i * 0.6283) * 58},${250 + Math.sin(i * 0.6283) * 58} L${1560 + Math.cos(i * 0.6283) * 78},${250 + Math.sin(i * 0.6283) * 78}`} stroke={LIGHT} strokeWidth={6} strokeLinecap="round" opacity={live} />)}
				</Fade>
				{[0, 1, 2].map(i => <Flow key={i} x0={1500 - i * 36} y0={290 + i * 24} x1={1150 - i * 50} y1={340 + i * 30} at={K9.sun + i * 8} color={LIGHT} live={live} seed={i * 0.2} n={2} />)}
				<SvgText x={1640} y={360} text="sunlight" size={46} color="#8a6500" at={K9.sun + 10} opacity={0.4 + 0.6 * live} />
				{/* gases */}
				<Flow x0={330} y0={410} x1={660} y1={440} at={K9.co2} color="#6b6358" live={live} n={3} />
				<SvgText x={300} y={380} text="CO_2 in" size={48} color={INK} at={K9.co2 + 10} />
				<Flow x0={1260} y0={400} x1={1590} y1={380} at={K9.o2} color={SPREAD} live={live} seed={0.3} n={3} />
				<SvgText x={1500} y={440} text="O_2 out" size={48} color={SPREAD} at={K9.o2 + 10} />
				{/* going / stopped tag */}
				<Pill x={96} y={196} w={520} text="photosynthesis: going" at={K9.sun} out={K9.stops} color={TEAL} size={44} h={62} />
				<Pill x={96} y={196} w={560} text="photosynthesis: stopped" at={K9.stops} color="#8a857c" size={44} h={62} />
				{/* respiration: a separate pair of arrows */}
				<Flow x0={640} y0={770} x1={820} y1={770} at={K9.resp} color={RESP} live={1} n={2} />
				<Flow x0={1100} y0={770} x1={1280} y1={770} at={K9.resp + 6} color={RESP} live={1} n={2} seed={0.4} />
				<SvgText x={730} y={735} text="O_2 in" size={40} color={RESP} anchor="middle" at={K9.resp + 8} />
				<SvgText x={1190} y={735} text="CO_2 out" size={40} color={RESP} anchor="middle" at={K9.resp + 14} />
				<SvgText x={960} y={840} text="respiration: a separate process, in light and dark" size={44} color={RESP} anchor="middle" at={K9.sep} />
			</Overlay>
			<div style={{position: 'absolute', left: 96, top: 870}}><HandText text="constant light input = photosynthesis going" at={K9.constant} size={60} color={TEAL} cps={22} /></div>
			<span style={{display: 'none'}}>{K9.how}{K9.dark}</span>
		</>
	);
};

// ---------- 7. Memory aid and sign table ----------
const K10 = cues(sc('aid'), {agree: 'two terms agree', out: 'heat out', spread: 'spread out', own: 'run on its own', heatIn: 'heat in', packed: 'packed in', fed: 'fed in all the time', dis: 'if the two disagree', work: 'work out delta g'});
type Row = {a: string; b: string; c: string; at: number; lit: boolean; icon?: 'fire' | 'leaf'};
export const SceneAid: React.FC = () => {
	const f = useCurrentFrame();
	const rows: Row[] = [
		{a: 'negative: heat out', b: 'entropy up: spread out', c: 'always negative: can run on its own', at: K10.out, lit: true, icon: 'fire'},
		{a: 'positive: heat in', b: 'entropy down: packed in', c: 'always positive: needs energy fed in', at: K10.heatIn, lit: true, icon: 'leaf'},
		{a: 'negative: heat out', b: 'entropy down: packed in', c: 'work out ΔG: sizes and temperature matter', at: K10.dis, lit: false},
		{a: 'positive: heat in', b: 'entropy up: spread out', c: 'work out ΔG: sizes and temperature matter', at: K10.dis + 14, lit: false},
	];
	const cell = (w: number): React.CSSProperties => ({width: w, fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 31, lineHeight: 1.15, padding: '0 14px'});
	return (
		<>
			<Heading text="A way to hold onto this" at={4} />
			<div style={{position: 'absolute', left: 96, top: 190, width: 1728, opacity: prog(f, 8, 12)}}>
				<div style={{display: 'flex', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 24, letterSpacing: 2, color: INK_SOFT, textTransform: 'uppercase', padding: '0 0 8px 0'}}>
					<div style={{width: 380, padding: '0 14px'}}><span style={{color: HEAT}}>ΔH</span> sign</div>
					<div style={{width: 400, padding: '0 14px'}}><span style={{color: SPREAD}}>entropy</span> change</div>
					<div style={{width: 760, padding: '0 14px'}}>what <span style={{color: INK}}>ΔG</span> does</div>
				</div>
				{rows.map((r, i) => (
					<Enter key={i} at={r.at} dy={10} style={{display: 'flex', alignItems: 'center', height: 96, marginBottom: 10, borderRadius: 16, background: r.lit ? '#e2f1ea' : '#efe9dc', border: `3px solid ${r.lit ? TEAL : '#d6ccb8'}`}}>
						<div style={{...cell(380), color: r.lit ? HEAT : INK_SOFT}}>{r.a}</div>
						<div style={{...cell(400), color: r.lit ? SPREAD : INK_SOFT}}>{r.b}</div>
						<div style={{...cell(700), color: r.lit ? INK : INK_SOFT, fontWeight: r.lit ? 700 : 500}}>{r.c}</div>
						{r.icon ? <svg width={90} height={90} viewBox="-45 -50 90 100" style={{marginLeft: 'auto', marginRight: 18}}>{r.icon === 'fire' ? <FireIcon cx={0} cy={0} /> : <LeafIcon cx={0} cy={0} />}</svg> : null}
					</Enter>
				))}
			</div>
			<Panel x={96} y={690} w={1728} at={K10.out - 20} border={TEAL} pad="12px 30px">
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 36, color: INK_SOFT}}>Memory aid <span style={{color: TEAL}}>when both terms agree</span></div>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 56, color: INK, lineHeight: 1.08, opacity: prog(f, K10.out, 12)}}><span style={{color: HEAT}}>Heat out</span> and <span style={{color: SPREAD}}>spread out</span>: it can run on its own.</div>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 56, color: INK, lineHeight: 1.08, opacity: prog(f, K10.heatIn, 12)}}><span style={{color: HEAT}}>Heat in</span> and <span style={{color: SPREAD}}>packed in</span>: it needs energy fed in all the time.</div>
			</Panel>
			<span style={{display: 'none'}}>{K10.agree}{K10.spread}{K10.own}{K10.packed}{K10.fed}{K10.work}</span>
		</>
	);
};
void DG;
