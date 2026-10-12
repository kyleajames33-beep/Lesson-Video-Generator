// G01 scenes 11 to 14: attempt, feedback, decision rule, key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Countdown, DrawPath, Enter, FONT_DISPLAY, FONT_HAND, HandText, INK, INK_SOFT, Mark, Plate, prog} from '../../kit';
import {cues} from '../../cues';
import type {CueScene} from '../../cues';
import {BAD, DG, HEAT, SPREAD, kf, sc, Heading} from './common';
import {AnswerBox, ClockCal, DgIcon, Fade, FireIcon, GFormula, GivensCard, GuideBar, HeatIcon, LeafIcon, Overlay, Panel, Pill, SpreadIcon, Sub, SvgText, T, TEAL, Tube} from './parts';
import * as A from './assets';

// ---------- 8. Attempt ----------
const K12 = cues(sc('attempt'), {turn: 'your turn', hyd: 'hydrogen burns', eq: 'two h two', dh: 'delta h is', tds: 'minus ninety-eight', gas: 'three gas molecules', tube: 'a sealed tube', years: 'for years', one: 'one', two: 'if the gases did react', three: "why doesn't the unchanged tube", pause: 'pause'});
const QUESTIONS: [string, string, number][] = [
	['1', 'Work out ΔG for the equation as written.', K12.one],
	['2', 'If the gases did react, would you end up with a mixture of reactants and products, or nearly all products? Give a reason.', K12.two],
	['3', "Why doesn't the unchanged tube contradict your answer to question 2?", K12.three],
];
export const SceneAttempt: React.FC = () => {
	const f = useCurrentFrame();
	const scene = sc('attempt') as CueScene & {responseHold?: {startFrame: number; endFrame: number}};
	const hold = scene.responseHold ?? {startFrame: K12.pause + 60, endFrame: K12.pause + 1350};
	return (
		<>
			<Heading text="Your turn: a new reaction" at={K12.turn} size={62} />
			<Enter at={K12.eq - 20} style={{position: 'absolute', left: 96, top: 190}}><Sub text="2H_2(g) + O_2(g) → 2H_2O(l)" size={44} /></Enter>
			<GivensCard x={96} y={268} w={640} titleAt={K12.dh - 6} title="As written: 2 mol of water" rows={[
				{sym: 'H', value: '−572', unit: 'kJ', at: K12.dh},
				{sym: 'S', value: '−98', unit: 'kJ', at: K12.tds - 10, note: 'at 25 °C'},
			]} />
			<Panel x={96} y={510} w={640} at={K12.gas}><GFormula size={50} /></Panel>
			<GuideBar x={96} y={625} w={720} at={K12.gas + 20} s={0.95} splitR={0.6} lab={33} twoLine />
			<Overlay>
				<Tube x={860} y={190} w={600} h={160} q={0} opacity={prog(f, K12.tube, 14)} />
				<SvgText x={860} y={392} text="sealed tube, room temperature" size={46} color={INK} at={K12.tube + 8} />
				<ClockCal cx={1550} cy={270} r={62} at={K12.years} />
				<Countdown start={hold.startFrame} end={hold.endFrame} x={1730} y={640} r={56} />
			</Overlay>
			{QUESTIONS.map(([n, q, at], i) => (
				<Enter key={n} at={at} style={{position: 'absolute', left: 860, top: [450, 530, 710][i], width: 780}}>
					<div style={{display: 'flex', gap: 20, alignItems: 'flex-start'}}>
						<div style={{flex: 'none', width: 52, height: 52, borderRadius: 999, background: TEAL, color: '#fff', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 30, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 2}}>{n}</div>
						<div style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 33, color: INK, lineHeight: 1.2}}>{q}</div>
					</div>
				</Enter>
			))}
			<Enter at={K12.pause} style={{position: 'absolute', left: 860, top: 850}}>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, color: INK_SOFT}}>Pause the video if you need more time.</div>
			</Enter>
		</>
	);
};

// ---------- 9. Feedback ----------
const K13 = cues(sc('feedback'), {sub: 'which is minus', neg: 'minus the negative', e474: ['four hundred and seventy-four', 1], outw: 'heat released outweighs', lost: 'lost spreading', own: 'run on its own', hund: 'hundreds of kilojoules below zero', rev: 'the reverse is negligible', water: 'nearly all water', tube: "tube doesn't contradict", fast: 'how fast', if670: 'six hundred and seventy', mix: 'a mixture because', cmp: 'compare the sizes', h572: ['five hundred and seventy-two', 2], e98: ['ninety-eight', 2], wins: 'heat wins', eqm: 'tube must be at equilibrium', dyn: 'dynamic equilibrium', neither: 'is neither'});
const WRONG: {at: number; out: number; chip: string; w: number; fix: string}[] = [
	{at: K13.if670, out: K13.mix - 4, chip: '−670', w: 220, fix: 'sign slip: minus a negative adds'},
	{at: K13.mix, out: K13.eqm - 4, chip: 'a mixture, because entropy opposes', w: 640, fix: 'compare sizes: heat 572, entropy 98'},
	{at: K13.eqm, out: 99999, chip: 'at equilibrium, nothing changes', w: 640, fix: 'dynamic equilibrium needs both rates equal. This tube: neither.'},
];
export const SceneFeedback: React.FC = () => {
	const f = useCurrentFrame();
	const q = prog(f, K13.water, 100);
	const S = 0.34;
	const top = 215, bot = top + 572 * S, back = bot - 98 * S;
	return (
		<>
			<Heading text="Check your working" at={4} />
			<Enter at={K13.sub} style={{position: 'absolute', left: 96, top: 190}}>
				<span style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 62, color: INK, whiteSpace: 'pre'}}>ΔG = <span style={{color: HEAT}}>(−572)</span> − <span style={{color: SPREAD, position: 'relative'}}>(−98)
					<span style={{position: 'absolute', inset: '-6px -12px', border: `5px solid ${BAD}`, borderRadius: 40, opacity: prog(f, K13.neg, 12)}} />
				</span></span>
			</Enter>
			<Enter at={K13.neg + 16} style={{position: 'absolute', left: 104, top: 282}}><T size={46} color={BAD} hand>minus a negative adds</T></Enter>
			<AnswerBox x={96} y={350} at={K13.e474} text="= −474 kJ" size={84} />
			<GuideBar x={96} y={520} w={800} at={K13.hund - 10} s={0.95} splitR={0.6} lab={34} twoLine marker markerAt={K13.hund + 10} />
			<Overlay>
				{/* bars: heat out, spreading pushes back, net drop */}
				<Fade at={K13.outw}>
					<DrawPath d={`M1030,${top} L1030,${bot}`} at={K13.outw} dur={30} color={HEAT} width={26} />
					<SvgText x={1030} y={top - 14} text="heat out" size={38} color={HEAT} anchor="middle" at={K13.outw + 10} />
				</Fade>
				<Fade at={K13.lost}>
					<DrawPath d={`M1130,${bot} L1130,${back}`} at={K13.lost} dur={16} color={SPREAD} width={26} />
					<SvgText x={1130} y={bot + 40} text="spreading lost" size={38} color={SPREAD} anchor="middle" at={K13.lost + 8} />
				</Fade>
				<Fade at={K13.own}>
					<DrawPath d={`M1260,${top} L1260,${back}`} at={K13.own} dur={26} color={DG} width={10} dash="2 0" />
					<SvgText x={1290} y={(top + back) / 2 + 12} text="net drop 474" size={46} color={DG} at={K13.own + 10} />
				</Fade>
				<Fade at={K13.cmp}>
					<SvgText x={1000} y={top + 120} text="572" size={44} color={HEAT} anchor="end" at={K13.h572} hand={false} weight={800} />
					<SvgText x={1160} y={bot - 12} text="98" size={44} color={SPREAD} at={K13.e98} hand={false} weight={800} />
				</Fade>
				{/* if they reacted */}
				<SvgText x={960} y={498} text="if the gases did react" size={40} color={INK_SOFT} at={K13.water - 30} />
				<Tube x={960} y={510} w={560} h={130} q={q} opacity={prog(f, K13.water - 30, 14)} />
				<Fade at={K13.water + 60}>
					<SvgText x={1545} y={560} text="nearly all water" size={40} color={TEAL} at={K13.water + 60} />
					<SvgText x={1545} y={608} text="not a mixture" size={40} color={BAD} at={K13.water + 80} />
				</Fade>
				{/* the real tube */}
				<SvgText x={960} y={690} text="the real tube" size={40} color={INK_SOFT} at={K13.tube} />
				<Tube x={960} y={702} w={560} h={130} q={0} opacity={prog(f, K13.tube, 14)} />
				<ClockCal cx={1600} cy={767} r={50} at={K13.fast} />
				{/* wrong-answer chips */}
				{WRONG.map((w, i) => (
					<Fade key={i} at={w.at} out={w.out}>
						<rect x={96} y={858} width={w.w} height={62} rx={31} fill="#fffdf8" stroke={BAD} strokeWidth={3} />
						<text x={96 + w.w / 2} y={900} textAnchor="middle" fill={BAD} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42}}>{w.chip}</text>
						<Mark x={96 + w.w + 38} y={890} at={w.at + 14} kind="cross" size={42} />
						<SvgText x={96 + w.w + 90} y={902} text={w.fix} size={42} color={INK} at={w.at + 36} />
					</Fade>
				))}
			</Overlay>
			<Plate src={A.FLASK_EQ} natural={A.FLASK_NAT} crop={A.FLASK_CROP} width={46} style={{left: 1800, top: 500, opacity: prog(f, K13.water + 20, 14)}} />
			<Overlay><Fade at={K13.water + 70}><Mark x={1823} y={570} at={K13.water + 74} kind="cross" size={64} /></Fade></Overlay>
			<span style={{display: 'none'}}>{K13.rev}{K13.neither}{K13.wins}{K13.dyn}</span>
		</>
	);
};

// ---------- 10. Decision rule and handoff ----------
const K14 = cues(sc('decision-rule'), {ask: 'ask three questions', q1: 'heat going out or in', q2: 'spreading out or packing in', q3: 'combine them', end: 'one way to the end', pos: 'very positive', fed: 'needs energy fed in', sun: 'sunlight in a leaf', fire: 'a fire does not', speed: 'the speed', dist: 'disturb'});
export const SceneDecision: React.FC = () => {
	const f = useCurrentFrame();
	const shake = f >= K14.dist + 10 && f < K14.dist + 60 ? Math.sin((f - K14.dist) * 1.7) * 9 * (1 - (f - K14.dist - 10) / 50) : 0;
	const cards = [
		{t: 'Is heat going out or in?', at: K14.q1, icon: <HeatIcon cx={0} cy={0} at={K14.q1 + 4} s={0.9} />},
		{t: 'Is it spreading out or packing in?', at: K14.q2, icon: <SpreadIcon cx={0} cy={0} p={prog(f, K14.q2, 40)} s={0.9} />},
		{t: 'Combine them in ΔG', at: K14.q3, icon: <DgIcon cx={0} cy={0} s={0.85} />},
	];
	return (
		<>
			<Heading text="Three questions to ask" at={K14.ask} />
			{cards.map((c, i) => (
				<Panel key={i} x={96} y={210 + i * 150} w={860} at={c.at} pad="14px 26px">
					<div style={{display: 'flex', alignItems: 'center', gap: 26}}>
						<svg width={90} height={90} viewBox="-45 -45 90 90" style={{overflow: 'visible', flex: 'none'}}>{c.icon}</svg>
						<div style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 40, color: INK}}><span style={{color: TEAL, marginRight: 14}}>{i + 1}</span>{c.t}</div>
					</div>
				</Panel>
			))}
			<Panel x={1020} y={210} w={800} at={K14.end} border={HEAT} pad="14px 26px">
				<div style={{display: 'flex', alignItems: 'center', gap: 22}}>
					<svg width={80} height={90} viewBox="-40 -50 80 100" style={{flex: 'none'}}><FireIcon cx={0} cy={0} /></svg>
					<div><T size={30} color={INK_SOFT} weight={800} style={{letterSpacing: 1.5, textTransform: 'uppercase'}}>very negative ΔG</T><T size={40}>runs to completion</T></div>
				</div>
			</Panel>
			<Panel x={1020} y={380} w={800} at={K14.pos} border={TEAL} pad="14px 26px">
				<div style={{display: 'flex', alignItems: 'center', gap: 22}}>
					<svg width={80} height={90} viewBox="-40 -50 80 100" style={{flex: 'none'}}><LeafIcon cx={0} cy={0} /></svg>
					<div><T size={30} color={INK_SOFT} weight={800} style={{letterSpacing: 1.5, textTransform: 'uppercase'}}>very positive ΔG</T><T size={38}>needs energy fed in all the time, like sunlight in a leaf</T></div>
				</div>
			</Panel>
			<Overlay>
				<Pill x={1020} y={600} w={640} text="ΔG never tells you the speed" at={K14.speed} color={BAD} size={46} h={70} />
				<Pill x={1020} y={820} w={620} text="Next: what a flask does when disturbed" at={K14.dist} color={INK} size={40} h={64} />
			</Overlay>
			<Plate src={A.FLASK_EQ} natural={A.FLASK_NAT} crop={A.FLASK_CROP} width={110} style={{left: 1700 + shake, top: 590, opacity: prog(f, K14.dist, 14)}} />
			<span style={{display: 'none'}}>{K14.fed}{K14.sun}{K14.fire}</span>
		</>
	);
};

// ---------- 11. Key notes (quiet) ----------
const NOTES: React.ReactNode[] = [
	<>Enthalpy change (<b>ΔH</b>) is the heat a reaction gives out (negative) or takes in (positive). Entropy (<b>S</b>) measures how spread out the particles and energy are.</>,
	<><b>ΔG = ΔH − TΔS</b>, with T in kelvin (always positive). A negative ΔG means the reaction is spontaneous (it can run on its own). A positive ΔG means it needs energy fed in.</>,
	<>A non-equilibrium system has a net change still going, with no steady balance.</>,
	<>Burning glucose: ΔH is negative and entropy increases, so ΔG is very negative and the reaction runs essentially to completion. Work out both ΔH and TΔS, because entropy can fall (hydrogen burning) and the heat term can still win.</>,
	<>Photosynthesis is that combustion reversed: ΔH is positive and entropy decreases, so ΔG is large and positive. It runs only while light keeps supplying energy to an open system.</>,
	<>ΔG shows where a change is heading, not how fast it gets there.</>,
];
export const SceneNotes: React.FC = () => (
	<>
		<div style={{position: 'absolute', left: 96, top: 92}}><HandText text="Key notes: what to write in your book" at={2} size={62} cps={40} /></div>
		<div style={{position: 'absolute', left: 110, top: 190, width: 1700}}>
			{NOTES.map((n, i) => (
				<Enter key={i} at={14 + i * 10} style={{display: 'flex', gap: 20, marginBottom: 18}}>
					<div style={{flex: 'none', width: 14, height: 14, marginTop: 14, borderRadius: 999, background: TEAL}} />
					<div style={{fontFamily: FONT_DISPLAY, fontSize: 33, fontWeight: 500, color: INK, lineHeight: 1.22}}>{n}</div>
				</Enter>
			))}
		</div>
		<Enter at={80} style={{position: 'absolute', left: 96, top: 770, width: 1728}}>
			<div style={{background: '#fffdf8', border: `4px solid ${TEAL}`, borderRadius: 22, padding: '10px 30px', boxShadow: '0 12px 28px rgba(60,45,20,0.10)'}}>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 34, color: INK_SOFT}}>Memory aid <span style={{color: TEAL}}>when both terms agree</span></div>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 52, color: INK, lineHeight: 1.1}}><span style={{color: HEAT}}>Heat out</span> and <span style={{color: SPREAD}}>spread out</span>: it can run on its own.<br /><span style={{color: HEAT}}>Heat in</span> and <span style={{color: SPREAD}}>packed in</span>: it needs energy fed in all the time.</div>
			</div>
		</Enter>
	</>
);
void kf; void DG;
