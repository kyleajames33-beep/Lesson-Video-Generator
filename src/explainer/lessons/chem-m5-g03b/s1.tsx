import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, DrawPath, FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {cues} from '../../cues';
import {Chip, Fade, Overlay, Ring, Sx, Tag, TEAL, Tick, tw} from '../chem-m5-c06/parts';
import {CROSS} from '../chem-m5-c06/common';
import {KeyNotesBoard} from '../chem-m5-c06a/s4';
import {Heading, sc} from './common';
import {FIVE, FiveCard, cardY} from '../chem-m5-g03a/board';

// Revision 2 (16 Oct): G03b is the "all five types" video. The five-card board is imported from G03a (unchanged there).
const GLOW = '#f6d77a';

/** Small sub-chip inside the type 3 card (card coordinates). `lit` lights it in pen colour. */
const SubChip: React.FC<{x: number; y: number; text: string; at: number; lit?: number; size?: number}> = ({x, y, text, at, lit = 0, size = 26}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12);
	if (o <= 0.01) return null;
	const w = tw(text, size, true) + 36, h = size + 16;
	return (
		<g opacity={o} transform={`translate(0,${-6 * lit})`}>
			<rect x={x} y={y} width={w} height={h} rx={h / 2} fill={lit > 0.05 ? GLOW : '#fffdf8'} fillOpacity={lit > 0.05 ? 0.5 + 0.3 * lit : 1} stroke={lit > 0.05 ? AMBER_INK : TEAL} strokeWidth={2.5 + 1.5 * lit} />
			<Sx x={x + w / 2} y={y + h / 2 + size * 0.32} text={text} size={size} color={lit > 0.05 ? AMBER_INK : TEAL} anchor="middle" hand at={at} />
		</g>
	);
};
export const subChipW = (text: string, size = 26) => tw(text, size, true) + 36;

// ---------- 1. Hook: five types, and where each is taught ----------
const H = 'hook-board';
const KH = cues(sc(H), {three: 'three types', five: 'five in all', t1: 'Type one', t2: 'Type two', ice: 'an ICE table', first: 'first C6 video', t3: 'Type three', ps: 'perfect square', tiny: 'a tiny K', second: 'second C6 video', today: 'And today', huge: 'a huge K', t4: 'Type four', compare: 'compare Q', qv: 'the Q video', t5: 'Type five', added: 'was added', today2: ['today', 2]});
const HOOK: Record<number, {title: string; titleAt: number; method?: {text: string; at: number}; tag: {text: string; at: number}; tick?: number}> = {
	1: {title: 'Given: settled concentrations. Find: K.', titleAt: KH.t1, tag: {text: 'C6a', at: KH.first}, tick: KH.first + 8},
	2: {title: 'Given: a start + one equilibrium value.', titleAt: KH.t2, method: {text: 'Do: ICE table (I initial, C change, E equilibrium), then K', at: KH.ice}, tag: {text: 'C6a', at: KH.first}, tick: KH.first + 14},
	3: {title: 'Given: K + a start. Find: the concentrations (x).', titleAt: KH.t3, method: {text: 'using:', at: KH.ps - 8}, tag: {text: 'C6b', at: KH.second}, tick: KH.second + 8},
	4: {title: 'Given: a mixture + K.', titleAt: KH.t4, method: {text: 'Do: Q against K, so the direction', at: KH.compare}, tag: {text: 'C8, the Q video', at: KH.qv}, tick: KH.qv + 8},
	5: {title: 'Given: an old equilibrium + something added + a new value.', titleAt: KH.t5, method: {text: 'Find: how much was added (y)', at: KH.added}, tag: {text: 'today', at: KH.today2}},
};
export const SceneHookB3: React.FC = () => {
	const f = useCurrentFrame();
	const P = (a: number, d = 12) => prog(f, a, d);
	const W = 1728;
	const dimDone = 0.35 * P(KH.t5, 16);
	const hugeLit = P(KH.huge);
	// sub-chips on the type 3 card, after "using:"
	const cx0 = 110 + tw('using:', 29) + 22;
	const c1 = cx0, c2 = c1 + subChipW('perfect square') + 14, c3 = c2 + subChipW('tiny K') + 14;
	return (
		<>
			<Heading text="What you are given and asked decides the type" at={4} size={56} />
			<Overlay>
				{[1, 2, 3, 4, 5].map((n, i) => {
					const c = HOOK[n];
					const at = i < 3 ? KH.three + i * 6 : KH.five + (i - 3) * 6;
					return (
						<FiveCard key={n} n={n} x={96} y={cardY(i)} w={W} at={at} title={c.title} titleAt={c.titleAt}
							method={c.method} tag={c.tag} tick={c.tick}
							lit={n === 5 ? P(KH.added) : 0} dim={n === 1 || n === 2 || n === 4 ? dimDone : 0}>
							{n === 3 ? (
								<>
									<SubChip x={c1} y={72} text="perfect square" at={KH.ps} />
									<SubChip x={c2} y={72} text="tiny K" at={KH.tiny} />
									<SubChip x={c3} y={72} text="huge K" at={KH.huge} lit={hugeLit} />
									<Sx x={c3 + subChipW('huge K') + 16} y={103} text="today" size={32} color={AMBER_INK} hand at={KH.huge + 8} />
								</>
							) : null}
						</FiveCard>
					);
				})}
				<Fade at={KH.five}>
					<Sx x={96} y={950} text="3 types from the C6 videos + 2 more in HSC questions = 5" size={40} color={INK_SOFT} hand at={KH.five} />
				</Fade>
				<Tag x={1250} y={912} w={574} text="new today: huge K and type 5" at={KH.today2 + 6} size={28} color={AMBER_INK} />
			</Overlay>
		</>
	);
};

// ---------- 5. Decision board: You see / You do, one row per type ----------
const D = 'decision-board';
const KD = cues(sc(D), {given: "you're given", asked: "you're asked", r1: 'Settled concentrations', intoK: 'put them into K', r2: 'A start and one', ice: 'an ICE table', erow: 'the E row first', r3: 'K and a start', callx: 'call the change x', look: 'look for a perfect', test: 'test any shortcut', r4: 'A mixture and K', workq: 'work out Q', r5: 'Something added', yin: 'y in the initial', kun: 'K unchanged', moles: 'answer in moles', next: 'Next', trap: 'a trap'});
/** Small coded checklist icon. */
const Checklist: React.FC<{x: number; y: number; at: number}> = ({x, y, at}) => (
	<Fade at={at}>
		<rect x={x} y={y} width={70} height={86} rx={10} fill="#fffdf8" stroke={INK} strokeWidth={3} />
		{[0, 1, 2].map(k => (
			<g key={k}>
				<DrawPath d={`M${x + 12},${y + 22 + k * 24} l6,7 l10,-12`} at={at + 8 + k * 8} dur={8} color="#2f8a5b" width={4} />
				<path d={`M${x + 34},${y + 22 + k * 24} L${x + 60},${y + 22 + k * 24}`} stroke={INK_SOFT} strokeWidth={4} strokeLinecap="round" />
			</g>
		))}
	</Fade>
);
/** Small coded check-ruler icon: the start bar, a sliver taken off, the dashed 5 per cent line, then a tick. */
const RulerIcon: React.FC<{x: number; y: number; at: number}> = ({x, y, at}) => (
	<Fade at={at}>
		<rect x={x} y={y} width={150} height={20} rx={10} fill="#8a4fc4" opacity={0.75} stroke={INK} strokeWidth={2} />
		<rect x={x} y={y - 4} width={5} height={28} fill={AMBER} stroke={AMBER_INK} strokeWidth={1.5} />
		<path d={`M${x + 7.5},${y - 14} L${x + 7.5},${y + 30}`} stroke={TEAL} strokeWidth={3} strokeDasharray="5 4" />
		<Tick x={x + 182} y={y + 8} at={at + 10} s={30} />
	</Fade>
);
type DRow = {see: string[]; do: {text: string; at: number; size?: number}[]; slip: string; seeAt: number; slipAt: number; extra?: React.ReactNode};
const SEE_X = 176, DO_X = 940, LH = 38, RX = 96, RW = 1728;
const ROW_H = [108, 146, 184, 108, 146];
const ROW_GAP = 10, ROW_Y0 = 224;
const rowY = (i: number) => ROW_Y0 + ROW_H.slice(0, i).reduce((a, b) => a + b + ROW_GAP, 0);
export const SceneDecisionB3: React.FC = () => {
	const f = useCurrentFrame();
	const P = (a: number, d = 12) => prog(f, a, d);
	const open = P(2, 26);
	const R: DRow[] = [
		{see: ['at equilibrium, the vessel contains ...; calculate K'], do: [{text: 'concentrations into K (divide moles by V first)', at: KD.intoK}], slip: 'moles in K', seeAt: KD.r1, slipAt: KD.intoK + 30},
		{see: ['initially ...; at equilibrium, [X] was found', 'to be ...; calculate K'], do: [{text: 'ICE table: measured value into the E row first,', at: KD.ice}, {text: 'Change = E − I, then K', at: KD.erow}], slip: 'measured value used as the change', seeAt: KD.r2, slipAt: KD.erow + 30},
		{see: ['K = ...; initially ...; calculate the', 'equilibrium concentrations'], do: [{text: 'call the change x', at: KD.callx}, {text: 'Shortcuts: perfect square (square root), tiny K (drop x),', at: KD.look, size: 26}, {text: 'huge K (go to products, x is what is left). Test it.', at: KD.look + 30, size: 26}], slip: 'untested shortcut; (2x)^{2} taken as 2x^{2}', seeAt: KD.r3, slipAt: KD.test + 30},
		{see: ['a mixture contains ...; is it at equilibrium?', 'which way will it shift?'], do: [{text: 'work out Q; Q below K: forward; Q above K: reverse', at: KD.workq}], slip: 'Q called K', seeAt: KD.r4, slipAt: KD.workq + 30},
		{see: ['... was added; when equilibrium was', 're-established ...; how much was added?'], do: [{text: 'old equilibrium + y in the I row; new value into E first;', at: KD.yin, size: 26}, {text: 'K unchanged; y × V for moles', at: KD.kun}], slip: 'forgot the added substance is used up; forgot the volume', seeAt: KD.r5, slipAt: KD.moles + 30},
	];
	const starts = [KD.r1, KD.r2, KD.r3, KD.r4, KD.r5, KD.next];
	return (
		<>
			<Heading text="What you are given and asked decides the type" at={4} size={50} />
			<Overlay>
				{/* column headers */}
				<Sx x={SEE_X} y={206} text="You see" size={42} color={AMBER_INK} hand at={KD.given} />
				<Tag x={SEE_X + 170} y={170} w={250} text="typical wording" at={KD.r1} size={26} color={AMBER_INK} />
				<Sx x={DO_X} y={206} text="You do" size={42} color={TEAL} hand at={KD.asked} />
				{R.map((r, i) => {
					const y = cardY(i) + (rowY(i) - cardY(i)) * open;
					const h = 130 + (ROW_H[i] - 130) * open;
					const lit = P(starts[i]) * (1 - P(starts[i + 1]));
					const doLines = r.do.length;
					return (
						<g key={i}>
							<rect x={RX} y={y} width={RW} height={h} rx={20} fill="#fffdf8" stroke={lit > 0.05 ? TEAL : 'rgba(60,45,20,0.18)'} strokeWidth={3 + 2 * lit} />
							{lit > 0.02 ? <rect x={RX + 5} y={y + 5} width={RW - 10} height={h - 10} rx={16} fill={GLOW} opacity={0.2 * lit} /> : null}
							<circle cx={RX + 40} cy={y + h / 2} r={26} fill={TEAL} />
							<text x={RX + 40} y={y + h / 2 + 11} textAnchor="middle" fill="#fffdf8" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 30}}>{i + 1}</text>
							{/* the card's short title, before the board opens out */}
							<g opacity={1 - open}>
								<text x={RX + 90} y={y + h / 2 + 14} fill={INK} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40}}>{FIVE[i].title}</text>
							</g>
							<path d={`M${DO_X - 26},${y + 16} L${DO_X - 26},${y + h - 16}`} stroke="rgba(60,45,20,0.14)" strokeWidth={2.5} opacity={open} />
							{r.see.map((s, k) => <Sx key={k} x={SEE_X} y={y + 44 + k * LH} text={s} size={30} color={AMBER_INK} hand at={r.seeAt + k * 8} />)}
							{r.do.map((d, k) => <Sx key={k} x={DO_X} y={y + 44 + k * LH} text={d.text} size={d.size ?? 28} color={TEAL} weight={600} at={d.at} />)}
							<Sx x={DO_X} y={y + 44 + doLines * LH} text={'slip: ' + r.slip} size={28} color={INK_SOFT} hand at={r.slipAt} />
							{i === 2 ? <RulerIcon x={1560} y={y + 32} at={KD.test} /> : null}
						</g>
					);
				})}
				{/* E row first (row 2), y x V for moles (row 5) */}
				<Ring cx={DO_X + tw('ICE table: measured value into the ', 28) + tw('E row first', 28) / 2} cy={rowY(1) + 34} rx={tw('E row first', 28) / 2 + 18} ry={26} at={KD.erow} out={KD.r3} color={AMBER} seed={4} width={4} />
				<Ring cx={DO_X + tw('K unchanged; ', 28) + tw('y × V for moles', 28) / 2} cy={rowY(4) + 44 + LH - 10} rx={tw('y × V for moles', 28) / 2 + 18} ry={26} at={KD.moles} out={KD.next + 30} color={AMBER} seed={6} width={4} />
				<Chip x={96} y={976} w={980} text="Next: practice questions, each with a trap" size={40} at={KD.next + 4} color={TEAL} />
				<Checklist x={1110} y={964} at={KD.trap} />
			</Overlay>
		</>
	);
};
void CROSS;

// ---------- 6. Key notes: one line per type ----------
const NOTES = [
	'Type 1, settled concentrations: put them into K (divide moles by the volume first).',
	'Type 2, a start and one equilibrium value: ICE table, the measured value in the E row first, then K.',
	'Type 3, K and a start: call the change x; use a perfect square, a tiny K or a huge K, then test the shortcut (under about 5 per cent of the start).',
	'Type 4, a mixture and K: work out Q and compare. Q below K: forward. Q above K: reverse.',
	'Type 5, an amount added: old equilibrium plus y in the I row, the new value in the E row first, K unchanged; solve for y, then multiply by the volume for moles.',
];
export const SceneNotesG3b: React.FC = () => (
	<KeyNotesBoard notes={NOTES} aids={['What you are given and what you are asked decide the method.', 'Test it or don\'t use it. Adding changes Q, not K.']} tag="same temperature, equation as written; 5 per cent is a rule of thumb" aidTop={660} />
);
void INK;
