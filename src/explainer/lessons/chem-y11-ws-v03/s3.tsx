// Y11 Chem WS V03 scenes 11 to 16: two HSC-style attempts (the whole card with its picture from the first frame; ring
// full from "Pause here", 10 s countdown), brief feedback (navy givens strip, answers framed in green with ticks, one
// red crossed slip), the conclusion and handoff (four steps, then the data sheet grows into chem-y11-m1-v11's opening
// frame: the periodic table with P, Cl and Fe, the s, p, d, f chips and the Next chip) and the key notes with the
// framed memory card, cross-fading back to that final frame at the end.
import React from 'react';
import {Freeze, useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Givens, QTag} from '../chem-y11-m1-v01/s3';
import {A1, CHECK, CRU_LIDW, GLASSES, SALT_WG, dur, hold, sc} from './common';
import {
	BalanceW, Bracket, Card, Chip, Fade, Framed, GOLD_T, GREEN_S, GoldMark, INK, NAVY_T, NumberLine, PauseHoldR, PenArrow, PenCross, Plate, PTable, RED_T, Rich, ROSE_T, SVG, Sx, TEAL_S, TEAL_T, Tag,
	TickMark, VIOLET_S, VIOLET_T, Dot, balW, lerp, nx, prog, smooth,
} from './parts';
import type {NL, PTG, Seg} from './parts';
import {DataSheetCard, CARD1} from './s2';
import {FBlock, Letter, QCell, WS_NEXT, WS_PT, WsV03FinalFrame, wsSym} from './opening';

const Q: React.FC<{lines: string[]; y0?: number; lh?: number; x?: number; size?: number}> = ({lines, y0 = 290, lh = 54, x = 140, size = 38}) => <>{lines.map((t, i) => <Rich key={i} x={x} y={y0 + i * lh} segs={[{t}]} size={size} weight={700} />)}</>;
const Ans: React.FC<{x?: number; y: number; segs: Seg[]; at: number; size?: number}> = ({x = 120, y, segs, at, size = 38}) => <Framed x={x} y={y} segs={segs} at={at} size={size} stroke={GREEN_S} />;

// ---------- 11. attempt 1 ----------
const K11 = cues(sc('attempt-1'), {turn: 'Your turn', pause: 'Pause here'});
export const SceneAttempt1: React.FC = () => {
	const ww = 500, wh = (ww / SALT_WG.box[2]) * SALT_WG.box[3];
	return (
		<SVG>
			<Sx x={96} y={150} text="Your turn" size={60} color={INK} hand weight={700} at={-1000} />
			<QTag />
			<Card h={700} />
			<Q y0={270} lines={['A sand and salt mixture was made to contain', 'exactly 70.0% salt by mass. Two students separated', 'samples of it three times each.']} />
			<rect x={128} y={404} width={760} height={164} rx={14} fill="#eef2fa" stroke="rgba(36,64,122,0.45)" strokeWidth={3} />
			<Q y0={446} size={34} lh={50} lines={['Salt recovered (% of mixture):', 'Student P:   69.6,   69.8,   69.5', 'Student Q:   74.1,   73.9,   74.2']} />
			<Q y0={630} lines={['(a)  Compare the accuracy and the precision of the', "       two students' results.", '(b)  Describe ONE step that ensures the balance gives', '       accurate readings.']} />
			<Sx x={140} y={858} text="(3 marks)" size={34} color={INK} weight={700} at={-1000} />
			<Plate p={SALT_WG} x={1290} y={300} h={wh} />
			<PauseHoldR h={hold('attempt-1')} at={K11.pause} x={140} y={936} cx={1550} cy={680} />
			{void K11.turn}
		</SVG>
	);
};

// ---------- 12. feedback 1 ----------
const K12 = cues(sc('feedback-1'), {both: 'Both sets', agree: 'agree closely', ps: "P's are", seventy: 'seventy point zero', qs: "Q's are all", four: 'four percentage', something: 'something added', dry: 'fully dry', check: 'To check the', zero: 'zero it', known: 'known value', saying: 'Saying Q', slip: 'classic slip', thats: "That's precision", accuracy: 'not accuracy'});
const G1: NL = {x0: 200, x1: 1720, v0: 68, v1: 76, y: 420};
export const SceneFeedback1: React.FC = () => {
	const qm = (A1.Q[0] + A1.Q[1] + A1.Q[2]) / 3;
	return (
		<SVG>
			<Sx x={96} y={150} text="Your turn" size={60} color={INK} hand weight={700} at={-1000} />
			<Givens segs={[{t: 'made to be 70.0% salt   |   P: 69.6, 69.8, 69.5   |   Q: 74.1, 73.9, 74.2'}]} />
			<NumberLine g={G1} minor={0.5} />
			<GoldMark g={G1} v={A1.target} label="made to be 70.0%" top={322} size={34} />
			{A1.P.map((v, i) => <Dot key={'p' + i} g={G1} v={v} at={K12.both + i * 5} color={TEAL_S} r={14} />)}
			{A1.Q.map((v, i) => <Dot key={'q' + i} g={G1} v={v} at={K12.both + 16 + i * 5} color="#3d5a9a" r={14} />)}
			<Sx x={nx(G1, 69.5) - 30} y={G1.y - 24} text="P" size={38} color={TEAL_T} anchor="end" weight={800} at={K12.both} />
			<Sx x={nx(G1, 73.9) - 30} y={G1.y - 24} text="Q" size={38} color={NAVY_T} anchor="end" weight={800} at={K12.both + 16} />
			<Bracket a={[nx(G1, 69.8) + 16, G1.y - 28]} b={[nx(G1, 69.5) - 16, G1.y - 28]} at={K12.agree} color={VIOLET_S} depth={14} />
			<Bracket a={[nx(G1, 74.2) + 16, G1.y - 28]} b={[nx(G1, 73.9) - 16, G1.y - 28]} at={K12.agree + 4} color={VIOLET_S} depth={14} />
			<Sx x={nx(G1, 70.3) + 40} y={366} text="both spread 0.3: both precise" size={34} color={VIOLET_T} weight={800} at={K12.agree + 8} />
			<Bracket a={[nx(G1, A1.target), G1.y + 84]} b={[nx(G1, qm), G1.y + 84]} at={K12.four} color={ROSE_T} depth={-16} />
			<Rich x={(nx(G1, A1.target) + nx(G1, qm)) / 2} y={G1.y + 150} segs={[{t: '≈ 4 percentage points high'}]} size={38} anchor="middle" at={K12.four + 6} />
			<Tag x={nx(G1, qm) + 40} y={G1.y + 150} text="shifted" at={K12.four + 14} color={ROSE_T} />
			<Ans y={656} segs={[{t: '(a)  both '}, {t: 'precise', c: VIOLET_T}, {t: ': each within 0.3'}]} at={K12.both + 20} />
			<Ans y={730} segs={[{t: '       P '}, {t: 'accurate', c: TEAL_T}, {t: '; Q not: ≈ 4 points high every run'}]} at={K12.ps + 6} />
			<Tag x={1340} y={730} text="salt not fully dry?" at={K12.something} color={INK} />
			<Ans y={804} segs={[{t: '(b)  zero it, then weigh a known check mass'}]} at={K12.zero} />
			<Chip x={120} y={840} segs={[{t: 'Q is accurate: the readings agree.'}]} at={K12.saying} size={34} color={RED_T} strike={K12.slip} />
			<Tag x={820} y={880} text="that's precision" at={K12.thats} color={RED_T} />
			{void K12.seventy}{void K12.qs}{void K12.dry}{void K12.check}{void K12.known}{void K12.accuracy}
		</SVG>
	);
};

// ---------- 13. attempt 2 ----------
const K13 = cues(sc('attempt-2'), {pause: 'Pause here'});
const SRC = [
	{k: 'A', l1: 'Chemistry data handbook,', l2: 'university press, 2022', c: NAVY_T},
	{k: 'B', l1: 'Anonymous comment under', l2: 'an online video, no date', c: INK},
	{k: 'C', l1: "Salt supplier's safety", l2: 'data sheet, 2023', c: '#a8421c'},
];
const SrcCard: React.FC<{x: number; y: number; w: number; s: typeof SRC[number]}> = ({x, y, w, s}) => (
	<g>
		<rect x={x} y={y} width={w} height={136} rx={14} fill="#fffdf8" stroke={INK} strokeWidth={3} />
		<rect x={x} y={y} width={64} height={136} rx={14} fill={s.c} />
		<Sx x={x + 32} y={y + 84} text={s.k} size={44} color="#ffffff" anchor="middle" weight={800} at={-1000} />
		<Sx x={x + 86} y={y + 56} text={s.l1} size={34} color={INK} weight={700} at={-1000} />
		<Sx x={x + 86} y={y + 102} text={s.l2} size={34} color={INK} weight={700} at={-1000} />
	</g>
);
export const SceneAttempt2: React.FC = () => (
	<SVG>
		<Sx x={96} y={150} text="Last one" size={60} color={INK} hand weight={700} at={-1000} />
		<QTag />
		<Card h={700} />
		<Q y0={280} lines={['A student needs a value for the solubility', 'of sodium chloride in water, and finds', 'three sources (A, B and C).']} />
		<Q y0={480} lines={['(a)  Choose the TWO most reliable sources', '       and justify your choice.', '(b)  State FOUR pieces of information a', '       reference list entry should include.']} />
		<Sx x={140} y={760} text="(3 marks)" size={34} color={INK} weight={700} at={-1000} />
		{SRC.map((s, i) => <SrcCard key={s.k} x={1150} y={230 + i * 160} w={630} s={s} />)}
		<PauseHoldR h={hold('attempt-2')} at={K13.pause} x={140} y={936} cx={1000} cy={790} />
	</SVG>
);

// ---------- 14. feedback 2 ----------
const K14 = cues(sc('feedback-2'), {ac: 'A and C', named: 'named, accountable', dated: 'are dated', inform: 'to inform', checked: 'checked against', comment: 'The comment has', nodate: ['no date', 1], noway: 'no way to', entry: 'reference list entry', author: 'the author,', year: 'the year,', title: 'the title', publisher: 'the publisher', choosing: 'Choosing the', slip: 'classic slip', popular: 'Popular', reliable: 'as reliable'});
const COLX = [520, 700, 880];
const ROWS: {lead: string; key: 'named' | 'inform' | 'dated' | 'checked'; bx: 'comment' | 'noway' | 'nodate'}[] = [
	{lead: 'who', key: 'named', bx: 'comment'}, {lead: 'why', key: 'inform', bx: 'noway'}, {lead: 'when', key: 'dated', bx: 'nodate'}, {lead: 'agree', key: 'checked', bx: 'noway'},
];
const RY = [404, 488, 572, 656];
export const SceneFeedback2: React.FC = () => (
	<SVG>
		<Sx x={96} y={150} text="Last one" size={60} color={INK} hand weight={700} at={-1000} />
		<Givens segs={[{t: 'A  handbook, 2022   |   B  anonymous comment, no date   |   C  supplier\'s safety data sheet, 2023'}]} />
		<rect x={110} y={292} width={880} height={410} rx={16} fill="#fffdf8" stroke={INK} strokeWidth={3} />
		{['A', 'B', 'C'].map((k, j) => <Chip key={k} x={COLX[j]} y={306} segs={[{t: k}]} at={-1000} size={40} color={j === 1 ? INK : NAVY_T} anchor="middle" />)}
		{ROWS.map((r, i) => (
			<g key={r.lead}>
				<Sx x={150} y={RY[i] + 16} text={r.lead} size={48} color={NAVY_T} hand weight={700} at={-1000} />
				<TickMark x={COLX[0]} y={RY[i]} at={K14[r.key]} s={1.4} color={TEAL_S} />
				<TickMark x={COLX[2]} y={RY[i]} at={K14[r.key] + 4} s={1.4} color={TEAL_S} />
				<PenCross x={COLX[1]} y={RY[i]} at={K14[r.bx] + (i === 3 ? 8 : 0)} s={22} />
			</g>
		))}
		<Ans x={1040} y={380} segs={[{t: '(a)  A and C'}]} at={K14.ac + 2} size={52} />
		{([['named, accountable authors', K14.named], ['dated', K14.dated], ['written to inform', K14.inform], ['can be checked against each other', K14.checked]] as [string, number][]).map(([t, a], i) => <Rich key={i} x={1050} y={480 + i * 58} segs={[{t}]} size={38} weight={700} at={a} />)}
		<Ans y={790} segs={[{t: '(b)  author, year, title, publisher or where to find it'}]} at={K14.author} size={40} />
		<Chip x={120} y={836} segs={[{t: 'B: lots of people liked it'}]} at={K14.choosing} size={36} color={RED_T} strike={K14.slip} />
		<Tag x={700} y={884} text="popular ≠ reliable" at={K14.popular} color={RED_T} />
		{void K14.entry}{void K14.year}{void K14.title}{void K14.publisher}{void K14.reliable}
	</SVG>
);

// ---------- 15. conclusion and handoff (ends exactly on chem-y11-m1-v11's first frame) ----------
const K15 = cues(sc('conclusion-handoff'), {follow: 'follow the plan', check: 'check our safety', set: 'set up the', judge: 'judge accuracy', choose: 'choose reliable', take: 'take what we', ack: 'acknowledge them', one: 'One of those', ds: 'the data sheet', table: 'periodic table', back: 'go back inside', atoms: 'its atoms', how: 'How does', s: 's p d f', p: 'p d f', d: 'd f notation', f: 'f notation', atom: 'an atom'});
const COL3 = {x: 900, y: 280};
const BAL15 = balW(470, 560 - (891 * 380) / 1270, 380);
export const SceneHandoff: React.FC = () => {
	const f = useCurrentFrame();
	const D = dur('conclusion-handoff');
	const SWITCH = D - 40;
	if (f >= SWITCH) return <SVG><WsV03FinalFrame /></SVG>;
	const leave = 1 - prog(f, K15.ds + 4, 18);
	const g0: PTG = {x: COL3.x + 54, y: COL3.y + 120, cw: 24, ch: 22};
	const gm = smooth(prog(f, K15.ds + 12, 46));
	const g: PTG = {x: lerp(g0.x, WS_PT.x, gm), y: lerp(g0.y, WS_PT.y, gm), cw: lerp(g0.cw, WS_PT.cw, gm), ch: lerp(g0.ch, WS_PT.ch, gm)};
	const syms = prog(f, K15.table + 6, 16);
	const cardO = 1 - prog(f, K15.ds + 6, 14);
	const chH = 110, chW = (chH / CHECK.box[3]) * CHECK.box[2];
	const gh = (340 / GLASSES.box[2]) * GLASSES.box[3];
	const steps: {x: number; head: Seg; l: string[]; at: number}[] = [
		{x: 96, head: {t: 'safe:', c: '#287347'}, l: ['follow, and', 'check as you go'], at: K15.follow},
		{x: 470, head: {t: 'accurate:', c: TEAL_T}, l: ['zero, check mass,', 'accepted value'], at: K15.set},
		{x: 900, head: {t: 'sourced:', c: NAVY_T}, l: ['who, why, when,', 'does it agree?'], at: K15.choose},
		{x: 1474, head: {t: 'acknowledged', c: INK}, l: ['author, year,', 'title, publisher'], at: K15.ack},
	];
	return (
		<SVG>
			<g opacity={leave}>
				<Rich x={96} y={150} segs={[{t: 'Who, why, when, and does it agree?', c: NAVY_T}]} size={46} hand weight={700} />
				<Plate p={GLASSES} x={96} y={380} h={gh} />
				<BalanceW g={BAL15} text="10.00 g" size={40} />
				<Plate p={CHECK} x={BAL15.pan[0] - chW / 2} y={BAL15.pan[1] - chH + 12} h={chH} />
				<rect x={1474} y={280} width={350} height={280} rx={14} fill="#fffdf8" stroke={INK} strokeWidth={3.5} />
				<Sx x={1496} y={330} text="References" size={34} color={INK} hand weight={700} at={-1000} />
				{['[Author]. ([year]).', '[Title].', '[Publisher]. [URL]'].map((t, i) => <Sx key={i} x={1496} y={392 + i * 52} text={t} size={32} color={INK} weight={700} at={-1000} />)}
				{steps.map((s, i) => (
					<g key={i}>
						<Rich x={s.x} y={660} segs={[s.head]} size={42} at={s.at} />
						{s.l.map((t, j) => <Rich key={j} x={s.x} y={716 + j * 50} segs={[{t}]} size={36} at={s.at + 6 + j * 6} />)}
					</g>
				))}
				{[[380, 456], [800, 888], [1360, 1462]].map(([a, b], i) => <PenArrow key={i} a={[a, 700]} b={[b, 700]} at={steps[i + 1].at - 4} color={INK} bend={0} />)}
			</g>
			{/* the data sheet: its card fades, its table grows into the final frame's table */}
			{cardO > 0.005 ? <g opacity={cardO * leave + (1 - leave) * cardO}><DataSheetCard x={COL3.x} y={COL3.y} /></g> : null}
			<PTable g={g} plain zSize={0} o={f >= K15.ds + 6 ? 1 - syms : 0} />
			<PTable g={WS_PT} symFor={wsSym} o={syms} />
			<Fade at={K15.table + 10} d={16}><FBlock /></Fade>
			{[15, 17, 26].map((z, i) => <Fade key={z} at={K15.atoms + i * 8} d={12}><QCell z={z} /></Fade>)}
			{(['s', 'p', 'd', 'f'] as const).map((t, i) => <Letter key={t} x={1790} y={300 + i * 96} t={t} size={44} at={[K15.s, K15.p, K15.d, K15.f][i]} />)}
			<Chip x={960} y={872} segs={[{t: WS_NEXT}]} at={K15.how} size={44} color="#24407a" anchor="middle" />
			{void K15.check}{void K15.judge}{void K15.take}{void K15.one}{void K15.back}{void K15.atom}{void CARD1}{void GOLD_T}
		</SVG>
	);
};

// ---------- 16. key notes (cross-fades back to the final frame at the end) ----------
const NOTES: Seg[][][] = [
	[[{t: 'Follow the safety controls; check them as you go.'}]],
	[[{t: 'Accurate: ', c: TEAL_T}, {t: 'close to the accepted value.'}], [{t: 'Precise: ', c: VIOLET_T}, {t: 'repeats agree closely.'}]],
	[[{t: 'For accuracy: zero, check mass, cool first.'}]],
	[[{t: 'Agreeing results can all be shifted.'}], [{t: "Repeats won't fix it; a new method will."}]],
	[[{t: 'Sources: who, why, when, does it agree?', c: NAVY_T}], [{t: 'Cite author, year, title, publisher.'}]],
];
export const SceneNotes: React.FC = () => {
	const f = useCurrentFrame();
	const D = dur('key-notes');
	const back = prog(f, D - 40, 30);
	let y = 300;
	const rows = NOTES.map((lines, i) => {
		const y0 = y;
		y += lines.length * 46 + 24;
		return (
			<Fade key={i} at={i * 3}>
				<circle cx={112} cy={y0 - 12} r={8} fill="#e8a33d" />
				{lines.map((l, kk) => <Rich key={kk} x={140} y={y0 + kk * 46} segs={l} size={36} weight={700} />)}
			</Fade>
		);
	});
	const ch = 300, cw = (ch / CRU_LIDW.box[3]) * CRU_LIDW.box[2];
	return (
		<>
			<SVG>
				<g opacity={1 - back}>
					<Sx x={96} y={150} text="Key notes: what to write in your book" size={60} color={INK} hand weight={700} at={-1000} />
					<Sx x={96} y={214} text="Pause the video if you need more time to copy." size={38} color={GOLD_T} weight={700} at={-1000} />
					{rows}
					<Fade at={6}>
						<rect x={1080} y={280} width={744} height={600} rx={22} fill="#fffdf8" stroke={NAVY_T} strokeWidth={5} />
						<Sx x={1110} y={324} text="memory aid" size={30} color={INK} hand at={-1000} />
						<Rich x={1112} y={404} segs={[{t: 'Who, why, when,', c: NAVY_T}]} size={52} hand weight={700} />
						<Rich x={1112} y={472} segs={[{t: 'and does it agree?', c: NAVY_T}]} size={52} hand weight={700} />
						<Plate p={CRU_LIDW} x={1452 - cw / 2} y={540} h={ch} />
					</Fade>
				</g>
			</SVG>
			{back > 0.005 ? <div style={{position: 'absolute', inset: 0, opacity: back}}><Freeze frame={dur('conclusion-handoff') - 1}><SceneHandoff /></Freeze></div> : null}
		</>
	);
};
void GoldMark;
