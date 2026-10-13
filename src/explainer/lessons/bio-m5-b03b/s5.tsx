import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Countdown, HandText} from '../../kit';
import {cues} from '../../cues';
import {Helix} from '../bio-m5-b01/shared';
import {
	AMBER, AMBER_INK, AnimalIcon, Arrow, BarnIcon, BASE, BeadDot, CoverBag, Enter, FONT_DISPLAY, FONT_HAND, Forceps, GAIN, GREYC, HARM, Heading, HerdGrid, INK, INK_SOFT, NoteCard, Overlay, ORANGE, ORDER, PArt, PL, plateMap, PollenFlow, PoolLegend, poolColor, POLLEN, prog, RowGlyph, S, Scorecard, Scribble, SlideIn, Straw, Tag, Tick, VAR, WELF_INK, Wisp, WrongChip, COST_INK, Germ, Line, Pill,
} from './shared';

const FRAME = {y: 250, h: 690, w: 840, x: [96, 984]};
const Frame: React.FC<{i: number; at: number; title: string; badge: string}> = ({i, at, title, badge}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 16);
	return (
		<div style={{position: 'absolute', left: FRAME.x[i], top: FRAME.y, width: FRAME.w, height: FRAME.h, opacity: p, transform: `translateY(${(1 - p) * 18}px)`, background: '#fffdf8', borderRadius: 24, boxShadow: '0 18px 40px rgba(60,45,20,0.10), 0 2px 6px rgba(60,45,20,0.06)', border: '1.5px solid rgba(60,45,20,0.08)', boxSizing: 'border-box'}}>
			<div style={{display: 'flex', alignItems: 'center', gap: 16, padding: '14px 22px 0'}}>
				<div style={{width: 54, height: 54, borderRadius: 999, background: AMBER, color: '#fff', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 30, display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none'}}>{badge}</div>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, color: INK, lineHeight: 1}}>{title}</div>
			</div>
		</div>
	);
};
const Note: React.FC<{x: number; y: number; w: number; at: number; size?: number; children: React.ReactNode; color?: string}> = ({x, y, w, at, size = 30, children, color = INK}) => (
	<Enter at={at} style={{position: 'absolute', left: x, top: y, width: w}}>
		<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: size + 8, color, lineHeight: 1.05}}>{children}</div>
	</Enter>
);
const Demand: React.FC<{x: number; y: number; w: number; at: number; children: React.ReactNode}> = ({x, y, w, at, children}) => (
	<Enter at={at} style={{position: 'absolute', left: x, top: y, width: w}}>
		<div style={{borderLeft: `8px solid ${AMBER}`, paddingLeft: 18, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 29, lineHeight: 1.22, color: AMBER_INK}}>{children}</div>
	</Enter>
);

// ---------- 7. Attempt ----------
export const SceneAttempt: React.FC = () => {
	const f = useCurrentFrame();
	const scene = S('attempt');
	const c = cues(scene, {
		turn: 'Your turn', one: 'a sheep farmer', ram: 'one champion ram', ewe: 'on every ewe', ten: 'for ten years', same: 'do the same', give: 'Give one benefit',
		two: 'a breeder wants wheat', selfp: 'pollinate themselves', places: 'She places pollen', paddock: 'in the paddock', assume: "Assume Q's pollen", notres: 'are not resistant', suggest: 'Suggest why', pause: 'Pause here to answer',
	});
	const hold = scene.responseHold!;
	const X1 = FRAME.x[0], X2 = FRAME.x[1], Y = FRAME.y;
	return (
		<>
			<div style={{position: 'absolute', left: 96, top: 92}}><HandText text="Your turn: two situations" at={c.turn} size={76} cps={30} /></div>
			<Enter at={c.pause} style={{position: 'absolute', left: 96, top: 176}}><span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 58, color: AMBER_INK, lineHeight: 1}}>Pause here to answer.</span></Enter>
			<Overlay><Countdown start={hold.startFrame} end={hold.endFrame} x={1500} y={130} r={44} /></Overlay>
			<Frame i={0} at={c.one - 14} title="A sheep flock" badge="1" />
			<Frame i={1} at={c.two - 14} title="Two wheat varieties" badge="2" />
			{/* 1: the ram's straws go to every farm */}
			<Overlay>
				<g opacity={prog(f, c.ram, 14)}>
					<AnimalIcon x={X1 + 640} y={Y + 190} s={1.3} kind="sheep" />
					<Straw x={X1 + 640} y={Y + 60} w={110} rot={-10} frost={1} />
				</g>
				{[0, 1, 2, 3, 4].map(i => (
					<g key={i} opacity={prog(f, c.ewe + i * 6, 12)}>
						<BarnIcon x={X1 + 470 + i * 80} y={Y + 330} s={0.8} />
						<AnimalIcon x={X1 + 470 + i * 80} y={Y + 286} s={0.5} kind="sheep" />
					</g>
				))}
				<g opacity={prog(f, c.same, 12)}>{[0, 1, 2, 3, 4].map(i => <Straw key={i} x={X1 + 470 + i * 80} y={Y + 372} w={44} rot={0} />)}</g>
			</Overlay>
			<Note x={X1 + 30} y={Y + 80} w={400} at={c.ram} size={28}>one champion ram</Note>
			<Note x={X1 + 30} y={Y + 140} w={400} at={c.ewe} size={28}>every ewe</Note>
			<Note x={X1 + 30} y={Y + 200} w={400} at={c.ten} size={28}>ten years</Note>
			<Note x={X1 + 30} y={Y + 260} w={400} at={c.same} size={28}>farms that buy her lambs do the same</Note>
			<Demand x={X1 + 30} y={Y + 470} w={780} at={c.give}>Give one benefit, one risk to the flock over those ten years, and one change that keeps the benefit and lowers that risk.</Demand>
			{/* 2: P and Q */}
			<SlideIn at={c.two}><PArt a={PL.floret} x={X2 + 30} y={Y + 84} w={230} /></SlideIn>
			<SlideIn at={c.two + 10}><PArt a={PL.ear} x={X2 + 310} y={Y + 84} w={130} /></SlideIn>
			<Overlay>
				<PollenFlow pts={[[X2 + 400, Y + 160], [X2 + 300, Y + 190], [X2 + 150, Y + 190]]} at={c.places} n={6} per={8} dur={40} color="#3b6fa8" />
			</Overlay>
			<Note x={X2 + 20} y={Y + 372} w={260} at={c.selfp} size={26} color={GAIN}>P: pollinates itself</Note>
			<Note x={X2 + 300} y={Y + 372} w={180} at={c.two + 20} size={26} color="#3b6fa8">Q: rust resistant</Note>
			<Note x={X2 + 490} y={Y + 80} w={330} at={c.places} size={26}>places Q pollen on P's open flowers</Note>
			<Note x={X2 + 490} y={Y + 170} w={330} at={c.paddock} size={26}>plants left in the paddock</Note>
			<Note x={X2 + 490} y={Y + 260} w={330} at={c.assume} size={26}>Assume: Q's pollen is healthy and its seeds are resistant</Note>
			<Note x={X2 + 490} y={Y + 390} w={330} at={c.notres} size={26}>many seedlings are not resistant</Note>
			<Demand x={X2 + 30} y={Y + 520} w={780} at={c.suggest}>Suggest why, and name two steps she should add.</Demand>
		</>
	);
};

// ---------- 8a. Feedback, item one ----------
export const SceneFeedbackOne: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('feedback-one'), {
		one: 'One, the benefit', traits: 'traits spreading quickly', lower: 'lower cost', risk: 'The strongest risk', narrow: 'narrow gene pool', ten: 'after ten years', disease: 'so one disease', harmful: 'harmful allele he carries', reach: 'can reach them all', using: 'Using semen from several', keeps: 'keeps the benefit', notwork: 'might not work', cost1: 'cost of one dose', tenyr: 'what ten years',
	});
	const per = 5;
	const refill = c.using + 10;
	const colorOf = (i: number) => (f >= refill + i * 3 ? BASE[i] : poolColor(i, f, c.narrow, per));
	const colors = Array.from({length: 24}, (_, i) => colorOf(i));
	const grey = (i: number) => (colorOf(i) === ORANGE ? prog(f, c.disease + i * 2, 10) * (1 - prog(f, c.using, 14)) : 0);
	const yr = Math.min(10, Math.max(0, ((f - c.narrow) / (per * 21)) * 10));
	const TX = 150, TW = 640;
	return (
		<>
			<Heading items={[[c.one - 4, 'Item one: the ram, over ten years']]} size={64} />
			<Overlay>
				<HerdGrid x={96} y={220} kind="sheep" color={colorOf} grey={grey} />
				<PoolLegend x={110} y={690} colors={colors} label="alleles in the flock" />
				{/* ten-year strip */}
				<g opacity={prog(f, c.narrow - 10, 14)}>
					<line x1={TX} x2={TX + TW} y1={790} y2={790} stroke={INK} strokeWidth={6} strokeLinecap="round" />
					{Array.from({length: 11}, (_, i) => <line key={i} x1={TX + (i * TW) / 10} x2={TX + (i * TW) / 10} y1={778} y2={802} stroke={INK_SOFT} strokeWidth={4} />)}
					<circle cx={TX + (yr * TW) / 10} cy={790} r={14} fill={AMBER} stroke={AMBER_INK} strokeWidth={4} />
					<text x={TX} y={850} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 38}} fill={INK_SOFT}>ten years of one ram</text>
				</g>
			</Overlay>
			<NoteCard x={1000} y={200} w={830} at={c.one} color={GAIN} glyph="gain" title="benefit" size={27}>the champion's traits spread quickly, usually at a lower cost than a ram on every farm</NoteCard>
			<NoteCard x={1000} y={360} w={830} at={c.risk} color={VAR} glyph="variety" title="risk" size={27}>a narrow gene pool: one disease, or one harmful allele he carries, can reach them all</NoteCard>
			<NoteCard x={1000} y={520} w={830} at={c.using} color={AMBER_INK} title="change" size={27}>semen from several unrelated good rams keeps the benefit and lowers that risk</NoteCard>
			<WrongChip at={c.notwork} x={1000} y={690} text="the semen might not work" size={36} />
			<Tag at={c.cost1} x={1000} y={756} text="a cost of one dose, not ten years of one ram" color={INK_SOFT} size={32} />
			<Tag at={c.tenyr + 20} x={1000} y={830} text="another valid risk is accepted if your change answers it" color={INK_SOFT} size={34} w={830} />
		</>
	);
};

// ---------- 8b. Feedback, item two ----------
export const SceneFeedbackTwo: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('feedback-two'), {
		two: 'Two, some seeds', own: "P's own pollen", blown: 'pollen blown in', still: 'the anthers were still there', remove: "remove P's anthers", before: 'before they release pollen', cover: 'cover the flowers with a bag', addq: "adding Q's pollen", qfail: "Q's pollen failed", healthy: 'the question says it is healthy', arrived: 'which pollen arrived',
	});
	const F = {x: 96, y: 200, w: 600};
	const m = plateMap(PL.floret, F.x, F.y, F.w);
	const A = [m(1037, 527), m(1259, 370), m(1476, 495)];
	const st = m(1255, 540);
	const t0 = c.remove + 4, slot = 36;
	const gone = (i: number) => prog(f, t0 + i * slot + 10, 10);
	const own = (i: number) => A.map((a, k) => k === i ? a : null);
	void own;
	const bag = prog(f, c.cover, 36);
	const wt = (f - (c.cover + 40)) / 40;
	return (
		<>
			<Heading items={[[c.two - 4, 'Item two: which pollen arrived?']]} size={64} />
			<PArt a={PL.floret} x={F.x} y={F.y} w={F.w} />
			<Overlay>
				{/* P's own pollen, then pollen from elsewhere */}
				{A.map((a, i) => <PollenFlow key={i} pts={[[a[0], a[1] + 40], [(a[0] + st[0]) / 2, a[1] + 120], [st[0], st[1]]]} at={c.own + i * 8} n={3} per={9} dur={36} />)}
				<PollenFlow pts={[[800, 300], [600, 380], [st[0] + 10, st[1]]]} at={c.blown + 10} n={4} per={10} dur={50} color={GREYC} />
				<Wisp x={760} y={260} o={prog(f, c.blown, 10) * (1 - prog(f, c.blown + 70, 10))} s={0.8} />
				<g opacity={prog(f, c.own, 10) * (1 - prog(f, c.remove, 10))}><text x={F.x + 300} y={F.y + 735} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 34}} fill="#a9830a">P's own pollen</text></g>
				<g opacity={prog(f, c.blown + 20, 10) * (1 - prog(f, c.remove, 10))}><text x={720} y={420} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 34}} fill={GREYC}>pollen from elsewhere</text></g>
				{/* the repair: anthers out, then Q's pollen, then the bag */}
				{A.map((a, i) => (
					<g key={i} opacity={gone(i)}>
						<ellipse cx={a[0]} cy={a[1]} rx={50} ry={96} fill="#f6f1e7" fillOpacity={0.92} />
						<ellipse cx={a[0]} cy={a[1]} rx={50} ry={96} fill="none" stroke={INK_SOFT} strokeWidth={4} strokeDasharray="10 10" />
					</g>
				))}
				{f >= c.remove && f < t0 + 3 * slot ? <Forceps x={A[Math.min(2, Math.max(0, Math.floor((f - t0) / slot)))][0]} y={A[Math.min(2, Math.max(0, Math.floor((f - t0) / slot)))][1] - 40} s={0.7} open={0.6} rot={-35} /> : null}
				<PollenFlow pts={[[780, 360], [600, 430], [st[0] + 6, st[1] + 4]]} at={c.addq} n={6} per={7} dur={44} color="#3b6fa8" />
				<CoverBag x={150} y={170} w={520} h={690} p={bag} />
				<Wisp x={780 - Math.sin(Math.min(1, Math.max(0, wt)) * Math.PI) * 60} y={300} o={wt > 0 ? 1 : 0} s={0.8} />
			</Overlay>
			<Tag at={c.remove} x={780} y={196} text="1 remove P's anthers: no pollen of its own" color={GAIN} size={42} w={1000} />
			<Tag at={c.cover} x={780} y={520} text="2 cover with a bag: no pollen from elsewhere" color={VAR} size={42} w={1000} />
			<WrongChip at={c.qfail} x={780} y={660} text="Q's pollen failed" size={42} />
			<Tag at={c.healthy} x={780} y={740} text="assumed: Q's pollen is healthy and its seeds are resistant" color={AMBER_INK} size={38} w={1000} />
			<Tag at={c.arrived} x={780} y={850} text="the problem is which pollen arrived" color={INK} size={46} w={1000} />
		</>
	);
};

// ---------- 9. Memory and handoff ----------
const FULLCARD = {
	gain: [{at: 0, text: 'proven bull, many farms, faster progress'}, {at: 0, text: 'a new variety with both traits'}, {at: 0, text: 'uniform, quick'}],
	variety: [{at: 0, text: 'narrower gene pool: shared weakness'}, {at: 0, text: 'one variety everywhere: shared weakness'}, {at: 0, text: 'one weakness'}],
	cost: [{at: 0, text: 'usually less than a bull on every farm'}, {at: 0, text: 'years of hand work'}, {at: 0, text: 'not covered here', grey: true}],
	welfare: [{at: 0, text: 'chasing one trait can harm another'}, {at: 0, text: 'not an animal issue', grey: true}, {at: 0, text: 'not covered here', grey: true}],
};
export const SceneMemory: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('memory'), {
		rem: 'Remember', pick: 'picking a few parents', speeds: 'speeds up the gain', risks: 'risks the variety', four: 'four things', gain: ['gain', 2], variety: ['variety', 2], cost: 'cost', welfare: 'welfare', then: 'say when it is worth it', next: 'Next time', dna: 'copies its DNA', clone: 'every clone',
	});
	const word = (text: string, k: 'gain' | 'variety' | 'cost' | 'welfare', at: number, color: string) => (
		<Enter at={at} dy={10} style={{display: 'flex', alignItems: 'center', gap: 8}}>
			<RowGlyph k={k} size={42} /><span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 56, color, lineHeight: 1}}>{text}</span>
		</Enter>
	);
	return (
		<>
			<Scorecard x={96} y={150} s={0.8} at={4} colW={420} titles={[{text: 'insemination'}, {text: 'pollination'}, {text: 'copying'}]} cells={FULLCARD} />
			<Enter at={c.pick} style={{position: 'absolute', left: 96, top: 612}}>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 66, color: AMBER_INK, lineHeight: 1, display: 'flex', alignItems: 'center', gap: 14, whiteSpace: 'nowrap'}}>
					<span>Pick few parents:</span>
					<Enter at={c.speeds} dy={0} style={{display: 'flex', alignItems: 'center', gap: 6}}><span>gain speed</span><RowGlyph k="gain" size={46} /></Enter><span>,</span>
					<Enter at={c.risks} dy={0} style={{display: 'flex', alignItems: 'center', gap: 6}}><span>risk variety</span><RowGlyph k="variety" size={46} /></Enter>
				</div>
			</Enter>
			<Enter at={c.pick + 20} style={{position: 'absolute', left: 96, top: 700, width: 1200}}>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 27, color: INK_SOFT, lineHeight: 1.2}}>few parents, used widely. Speed means faster improvement than leaving mating to chance.</div>
			</Enter>
			<div style={{position: 'absolute', left: 96, top: 770, display: 'flex', alignItems: 'center', gap: 26}}>
				{word('gain', 'gain', c.gain, GAIN)}{word('variety', 'variety', c.variety, VAR)}{word('cost', 'cost', c.cost, COST_INK)}{word('welfare', 'welfare', c.welfare, WELF_INK)}
				<Enter at={c.then} dy={10}><span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 54, color: INK, whiteSpace: 'nowrap'}}>...then say when it is worth it</span></Enter>
			</div>
			<SlideIn at={c.rem + 60} dx={60}>
				<PArt a={PL.bunch} x={1420} y={170} w={170} />
				<PArt a={PL.plantation} x={1330} y={380} w={500} />
			</SlideIn>
			<Tag at={c.rem + 90} x={1330} y={560} text="one clone, one weakness" color={HARM} size={42} />
			<SlideIn at={c.next} dy={30}>
				<Overlay>
					<rect x={1300} y={622} width={540} height={130} rx={26} fill="#fffdf8" stroke={VAR} strokeWidth={4} />
					<Helix x={1330} y={650} w={170} h={80} at={c.next + 6} turns={2} />
					<text x={1520} y={684} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40}} fill={VAR}>Next: how a cell</text>
					<text x={1520} y={730} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40}} fill={VAR}>copies its DNA</text>
				</Overlay>
			</SlideIn>
		</>
	);
};

// ---------- 10. Key notes ----------
const NOTES = [
	'Artificial insemination: semen from a chosen male is collected, divided, usually frozen and placed in the female\'s tract during heat, before ovulation. One male\'s alleles spread widely and cheaply.',
	'Artificial pollination: remove the seed parent\'s anthers, put chosen pollen on its stigma, cover the flowers and keep plants with wanted traits.',
	'Cloning (such as potato tubers) gives identical plants quickly, with shared weaknesses.',
	'Few parents used widely narrow the gene pool, so one disease or harmful allele can spread. Frozen semen, heritage breeds and outcrossing protect variety.',
	'Evaluate: make a judgement using criteria. Use gain (with evidence), variety, cost and (for animals) welfare. Give a judgement, reasons from each criterion, a weighing, and when it would change.',
];
export const SceneNotes: React.FC = () => (
	<>
		<div style={{position: 'absolute', left: 96, top: 92}}><HandText text="Key notes: what to write in your book" at={2} size={68} cps={40} /></div>
		<Enter at={110} style={{position: 'absolute', left: 1180, top: 96}}>
			<div style={{fontFamily: FONT_HAND, fontSize: 40, fontWeight: 700, color: AMBER_INK}}>Pause the video if you need more time to copy.</div>
		</Enter>
		<div style={{position: 'absolute', left: 110, top: 190, width: 1700}}>
			{NOTES.map((n, i) => (
				<Enter key={i} at={34 + i * 12} style={{display: 'flex', gap: 20, marginBottom: 18}}>
					<div style={{flex: 'none', width: 16, height: 16, marginTop: 11, borderRadius: 999, background: AMBER}} />
					<div style={{fontFamily: FONT_DISPLAY, fontWeight: 500, fontSize: 36, color: INK, lineHeight: 1.22}}>{n}</div>
				</Enter>
			))}
			<Enter at={100} style={{marginTop: 10, background: '#fffdf8', border: `4px solid ${AMBER}`, borderRadius: 24, padding: '10px 30px', width: 'fit-content'}}>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 62, color: AMBER_INK, lineHeight: 1.1}}>Pick few parents: gain speed, risk variety.</div>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 500, fontSize: 26, color: INK, marginTop: 4}}>Few parents, used widely. Speed means faster improvement than leaving mating to chance.</div>
			</Enter>
		</div>
	</>
);
