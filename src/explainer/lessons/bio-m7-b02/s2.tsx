// M7 B02 scenes 6 to 10: what Pasteur showed (the three flask states in a row with IV, DV and controls; question 1
// ticked; "Pasteur proved germs cause disease?" crossed; the bay passes to Koch); Koch's find it and grow it (tissue
// fields, the same rod ringed, healthy tissue with none, loop to the serum slope, pure culture); give it and find it
// again (guinea pig crossfades to unwell, the same bacterium recovered), then the bays shrink and each step is named:
// association, causation, confirmation; where the postulates struggle (gaps on the steps they break, DNA evidence);
// and the memory line with both questions.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {FONT_HAND} from '../../kit';
import {MistakeChip, Overlay} from '../bio-m5-b13/shared';
import {S} from './common';
import {MF, PasteurBay} from './s1';
import {
	AMBER, AMBER_INK, BAY_Y, Banner, ClockTag, DnaStrip, DrawPath, EDGE, FLK, Flask, GREYT, GREY_INK, GTag, GreyCross, HostCircle, INK, KOCH_ALL, KochBays, KochCard,
	PLATES, PasteurCard, Pl, Ring, STEPS, STEP_W, STEP_X, Sx, Tg, bayBottom, bayCx, clamp01, fitW, fpt, lerp, prog, pulse, smooth, tw, vis,
} from './parts';
import type {KochT} from './parts';

export const KochBay: React.FC<{o?: number}> = ({o = 1}) => (o <= 0.01 ? null : (
	<rect x={360} y={BAY_Y - 12} width={1480} height={850} rx={24} fill="none" stroke={EDGE} strokeWidth={2.5} opacity={o} />
));
/** A bright label that turns small and grey once `next` lands. */
const Step: React.FC<{x: number; y: number; text: string; at: number; next?: number; size?: number; anchor?: 'start' | 'middle'; color?: string}> = ({x, y, text, at, next, size = 38, anchor = 'start', color = AMBER_INK}) => {
	const f = useCurrentFrame();
	const g = next === undefined ? 0 : prog(f, next, 12);
	return (
		<>
			<Sx x={x} y={y} text={text} size={size} color={color} hand anchor={anchor} at={at} opacity={1 - g} />
			<Sx x={x} y={y} text={text} size={size * 0.8} color={GREY_INK} weight={600} anchor={anchor} at={next ?? 1e9} opacity={g} />
		</>
	);
};

// ---------- 6. What Pasteur showed, and what he didn't ----------
const K6 = cues(S('what-pasteur-showed'), {iv: 'independent variable', dv: 'dependent variable', kept: 'kept the same', microbes: 'come from other', boiling: 'boiling, sterilising', link: 'link any particular', koch: 'That was'});
export const SceneShowed: React.FC = () => {
	const f = useCurrentFrame();
	const k = 0.26, by = 620;
	const A = 290, B = 760, C = 1130;
	const open: [number, number][] = [fpt(A, by, k, FLK.tip), fpt(B, by, k, FLK.straightTop), fpt(C, by, k, FLK.stubTop)];
	const toKoch = prog(f, K6.koch, 20);
	return (
		<Overlay>
			<Banner lit={[1 - toKoch, toKoch]} tick1={K6.microbes + 6} dash2={K6.link + 10} pulse2={pulse(f, K6.link, 50)} />
			<PasteurBay o={1 - 0.7 * toKoch} />
			<KochCard o={1} />
			{f >= K6.koch ? <rect x={1590} y={BAY_Y} width={250} height={360} rx={20} fill="none" stroke={AMBER} strokeWidth={4} opacity={toKoch} /> : null}
			<g opacity={1 - 0.6 * toKoch}>
				<Flask p={PLATES.swan} bx={A} by={by} k={k} />
				<Flask p={PLATES.straightCloudy} bx={B} by={by} k={k} />
				<Flask p={PLATES.brokenCloudy} bx={C} by={by} k={k} />
				<GTag x={A + 100} y={720} text="intact neck" at={-100} size={22} anchor="middle" />
				<GTag x={B} y={720} text="straight neck" at={-100} size={22} anchor="middle" />
				<GTag x={C} y={720} text="neck broken" at={-100} size={22} anchor="middle" />
				<g opacity={vis(f, K6.iv, K6.dv, 10)}>{open.map(([x, y], i) => <Ring key={i} cx={x} cy={y} rx={34} ry={34} at={K6.iv + 6 + i * 6} color={AMBER} seed={i + 1} />)}</g>
				<g opacity={vis(f, K6.dv, K6.kept, 10)}>{[A, B, C].map((x, i) => <Ring key={i} cx={x} cy={by + 20} rx={96} ry={70} at={K6.dv + 6 + i * 6} color={AMBER} seed={i + 4} />)}</g>
				<Step x={130} y={815} text="IV: can particles reach the broth?" at={K6.iv} next={K6.dv} />
				<Step x={130} y={875} text="DV: growth (cloudiness)" at={K6.dv} next={K6.kept} />
				<Step x={130} y={935} text="controlled: broth, boiling, air" at={K6.kept} next={K6.microbes} />
				<GTag x={980} y={800} text="boil" at={K6.boiling} size={22} />
				<GTag x={1100} y={800} text="sterilise" at={K6.boiling + 14} size={22} />
				<GTag x={1290} y={800} text="cover" at={K6.boiling + 30} size={22} />
			</g>
			<MistakeChip x={960} y={900} text="Pasteur proved germs cause disease?" at={K6.link} cross={K6.link + 30} size={28} />
			{void INK}{void GREYT}
		</Overlay>
	);
};

// ---------- 7. Koch: find it, grow it ----------
const K7 = cues(S('koch-find-grow'), {y1882: 'In 1882', seven: 'one in seven', first: 'First, he looked', looked: 'looked at tissue', same: 'same thin', healthy: 'in healthy tissue', second: 'Second, he grew', pure: 'pure culture', weeks: 'took weeks'});
export const SceneFindGrow: React.FC = () => {
	const f = useCurrentFrame();
	const t: KochT = {...KOCH_ALL, bays: 0, find: K7.looked, field: K7.looked + 8, rods: K7.same + 8, cases: K7.looked + 24, healthy: K7.healthy, grow: K7.second + 12, loop: K7.second, pure: K7.pure + 6, give: 1e9, gp: 1e9, sick: 1e9, again: 1e9, eq: 1e9};
	return (
		<Overlay>
			<Banner lit={[0, 1]} />
			<PasteurCard />
			<KochBay />
			<KochBays t={t} lit={[vis(f, K7.looked, K7.second, 10), prog(f, K7.second, 10), 0, 0]} />
			<GTag x={400} y={740} text="Koch, 1882: tuberculosis" at={K7.y1882 + 4} out={K7.first} size={28} />
			{Array.from({length: 7}, (_, i) => <circle key={i} cx={830 + i * 38} cy={762} r={13} fill={i === 3 ? AMBER : '#e4e1da'} stroke={i === 3 ? AMBER_INK : GREYT} strokeWidth={2} opacity={vis(f, K7.seven + i * 2, K7.first, 10)} />)}
			<GTag x={1110} y={740} text="Koch: about 1 in 7 of all deaths" at={K7.seven + 10} out={K7.first} size={28} />
			<GTag x={392} y={712} text="TB cases" at={K7.looked + 30} size={22} />
			<GTag x={540} y={712} text="healthy tissue: none" at={K7.healthy + 6} size={22} />
			<Tg x={400} y={850} text="same rod in every case" at={K7.same + 10} out={K7.pure} size={44} />
			<Tg x={400} y={850} text="pure culture: only one kind of microbe" at={K7.pure + 6} size={44} />
			<ClockTag x={820} y={940} text="weeks" at={K7.weeks} />
		</Overlay>
	);
};

// ---------- 8. Give it, find it again, and why all four ----------
const K8 = cues(S('koch-give-find-again'), {third: 'Third, he gave', healthyGP: 'healthy guinea pigs', developed: 'developed tuberculosis', fourth: 'Fourth, he recovered', same: 'the same bacterium', why: 'Why all four', only: 'only shows', might: 'might have moved', after: 'after the disease', giving: 'Giving the pure', causes: 'microbe causes it', rules: 'rules out'});
export const SHRINK = 0.72;
export const SceneGiveAgain: React.FC = () => {
	const f = useCurrentFrame();
	const t: KochT = {...KOCH_ALL, give: K8.third, gp: K8.healthyGP, sick: K8.developed, again: K8.fourth + 10, eq: K8.same + 6};
	const sh = smooth(prog(f, K8.why, 30));
	const s = lerp(1, SHRINK, sh);
	const ly = bayBottom(SHRINK) + 48;
	const hc = {x: bayCx(0, SHRINK) - 20, y: 820};
	const inT = smooth(prog(f, K8.after + 6, 30));
	return (
		<Overlay>
			<Banner lit={[0, 1]} />
			<PasteurCard />
			<KochBay />
			<KochBays t={t} s={s} ringO={1 - 0.6 * sh} showCases={1 - sh}
				lit={[vis(f, K8.only, K8.giving, 10), 0, Math.max(vis(f, K8.third, K8.fourth, 10), vis(f, K8.causes, K8.rules, 10)), Math.max(vis(f, K8.fourth, K8.why, 10), prog(f, K8.rules, 10))]} />
			<GTag x={1110} y={740} text="healthy host: now has TB" at={K8.developed + 10} out={K8.fourth} size={28} />
			<GTag x={1470} y={740} text="same bacterium" at={K8.same + 16} out={K8.why} size={28} />
			<Step x={bayCx(0, SHRINK)} y={ly} text="association only" at={K8.only} next={K8.giving} anchor="middle" size={40} />
			<Sx x={bayCx(0, SHRINK)} y={ly + 44} text="(correlation)" size={26} color={GREY_INK} weight={600} anchor="middle" at={K8.only + 20} />
			<g opacity={vis(f, K8.might, K8.giving, 12)}>
				<HostCircle x={hc.x} y={hc.y} r={60} ill={prog(f, K8.might + 4, 14)} />
				{f >= K8.after + 6 ? <Pl p={PLATES.tb} cx={lerp(hc.x + 200, hc.x, inT)} cy={lerp(hc.y - 80, hc.y, inT)} w={56} /> : null}
				<GTag x={hc.x + 80} y={hc.y + 40} text="came in later?" at={K8.after + 14} size={26} />
			</g>
			<Step x={bayCx(2, SHRINK)} y={ly} text="causation" at={K8.causes} next={K8.rules} anchor="middle" size={44} />
			<Step x={bayCx(3, SHRINK)} y={ly} text="confirmation" at={K8.rules} anchor="middle" size={40} />
			{void STEPS}{void STEP_X}{void STEP_W}
		</Overlay>
	);
};

// ---------- 9. Where the postulates struggle ----------
const K9 = cues(S('limits'), {postulates: 'postulates', viruses: 'Viruses', leprosy: 'leprosy', carry: 'carry a pathogen', breaks: 'breaks the first', deliberately: 'deliberately infecting', today: 'Today, scientists', dna: 'DNA instead'});
const TOP9 = 236;
/** A grey gap over bay i of the shrunk strip (StepCheck). */
const Gap: React.FC<{i: number; at: number; s?: number; top?: number}> = ({i, at, s = SHRINK, top = TOP9}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12);
	if (o <= 0.01) return null;
	const x = bayCx(i, s) - (STEP_W * s) / 2, w = STEP_W * s, h = 495 * s;
	return (
		<g opacity={o}>
			<rect x={x} y={top} width={w} height={h} rx={14} fill="#eceeef" opacity={0.55} stroke={GREYT} strokeWidth={3} strokeDasharray="10 8" />
			<DrawPath d={`M${x + w / 2 - 30},${top + h / 2} l60,0`} at={at + 4} dur={10} color={GREYT} width={9} />
		</g>
	);
};
export const SceneLimits: React.FC = () => {
	const f = useCurrentFrame();
	const fx = bayCx(0, SHRINK), gx = bayCx(1, SHRINK), vx = bayCx(2, SHRINK);
	const y0 = 700;
	return (
		<Overlay>
			<Banner lit={[0, 1]} />
			<PasteurCard />
			<KochBay />
			<Sx x={bayCx(0, SHRINK) - (STEP_W * SHRINK) / 2} y={TOP9 - 10} text="Koch's postulates" size={32} color={INK} hand at={K9.postulates} />
			<KochBays t={KOCH_ALL} s={SHRINK} top={TOP9} dim={0.4} showCases={0} />
			{/* grow it: viruses, then the leprosy bacterium */}
			<Gap i={1} at={K9.viruses + 6} />
			<g opacity={vis(f, K9.viruses, K9.leprosy, 12)}>
				<Pl p={PLATES.cell} cx={gx} cy={y0} w={170} />
				<Pl p={PLATES.virus} cx={gx + 50} cy={y0 - 40} w={56} />
			</g>
			<GTag x={gx} y={y0 + 110} text="viruses: need living cells" at={K9.viruses + 10} out={K9.leprosy} size={26} anchor="middle" />
			<Pl p={PLATES.agar} cx={gx} cy={y0} w={160} o={vis(f, K9.leprosy, K9.today, 12)} />
			<GTag x={gx} y={y0 + 110} text="leprosy bacterium: no culture on its own" at={K9.leprosy + 6} out={K9.carry} size={26} anchor="middle" />
			{/* find it: healthy carriers */}
			<Gap i={0} at={K9.breaks} />
			<g opacity={vis(f, K9.carry, K9.today, 12)}>
				<HostCircle x={fx} y={y0} r={62} />
				<Pl p={PLATES.tb} cx={fx} cy={y0} w={60} />
			</g>
			<GTag x={fx} y={y0 + 110} text="healthy carriers" at={K9.carry + 6} out={K9.deliberately} size={26} anchor="middle" />
			{/* give it: ethics */}
			<Gap i={2} at={K9.deliberately + 6} />
			<g opacity={vis(f, K9.deliberately, K9.today, 12)}>
				<HostCircle x={vx} y={y0} r={62} label="healthy person" />
				<GreyCross x={vx} y={y0} at={K9.deliberately + 16} s={40} />
			</g>
			<GTag x={vx} y={y0 + 140} text="ethics: human-only diseases" at={K9.deliberately + 10} out={K9.today} size={26} anchor="middle" />
			{/* DNA evidence */}
			<g opacity={prog(f, K9.today, 12)}>
				<HostCircle x={fx - 20} y={y0 + 10} r={56} ill={1} />
				<Pl p={PLATES.tb} cx={fx - 20} cy={y0 + 10} w={52} />
				<DnaStrip x={fx + 60} y={y0 - 5} w={170} draw={prog(f, K9.dna - 10, 20)} />
				<DnaStrip x={fx + 260} y={y0 - 5} w={170} draw={prog(f, K9.dna + 4, 20)} />
				{f >= K9.dna + 26 ? <DrawPath d={`M${fx + 450},${y0 + 10} l14,16 l28,-32`} at={K9.dna + 26} dur={12} color={AMBER_INK} width={7} /> : null}
			</g>
			<GTag x={fx + 60} y={y0 + 60} text="DNA evidence instead of culture" at={K9.dna + 10} size={28} />
			{void clamp01}{void fitW}
		</Overlay>
	);
};

// ---------- 10. Memory ----------
const K10 = cues(S('memory'), {find1: 'find it', grow: 'grow it', give: 'give it', again: 'find it again', two: 'two different questions', pasteur: 'Pasteur showed', koch: 'Koch showed'});
export const SceneMemory: React.FC = () => {
	const f = useCurrentFrame();
	const a = [K10.find1, K10.grow, K10.give, K10.again];
	const lit = a.map((at, i) => vis(f, at, a[i + 1] ?? K10.two, 8));
	const s = 0.66, cx = 1290, top = 225;
	const both = prog(f, K10.two, 12);
	const pf = pulse(f, K10.pasteur, 50), pk = pulse(f, K10.koch, 50);
	const parts = ['find it,', 'grow it,', 'give it,', 'find it again'];
	const size = 76;
	const ws = parts.map(p => tw(p + ' ', size, true) * 1.02);
	const total = ws.reduce((x, y) => x + y, 0);
	let x0 = 960 - total / 2;
	const gpx = cx - 1100 * s + 1290 * s, gpy = top - BAY_Y * s + 545 * s;
	return (
		<Overlay>
			<Banner lit={[both, both]} />
			<rect x={96} y={BAY_Y + 20} width={620} height={520} rx={24} fill="none" stroke={pf > 0.05 ? AMBER : EDGE} strokeWidth={2.5 + 4 * pf} />
			{pf > 0.01 ? <ellipse cx={330} cy={480} rx={200} ry={200} fill={AMBER} opacity={0.18 * pf} /> : null}
			<Flask p={PLATES.brokenCloudy} bx={300} by={520} k={0.3} />
			<Flask p={PLATES.swan} bx={520} by={540} k={0.2} />
			<KochBays t={KOCH_ALL} s={s} cx={cx} top={top} lit={lit} showCases={0} />
			{pk > 0.01 ? <ellipse cx={gpx} cy={gpy} rx={140} ry={100} fill="none" stroke={AMBER} strokeWidth={5} opacity={pk} /> : null}
			<text x={960} y={880} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: size, whiteSpace: 'pre'}} fill={AMBER_INK}>
				{parts.map((p, i) => <tspan key={i} opacity={prog(f, a[i], 10)}>{(i ? ' ' : '') + p}</tspan>)}
			</text>
			{void ws}{void total}{void x0}
			{void INK}{void fitW}{void MF}
		</Overlay>
	);
};
