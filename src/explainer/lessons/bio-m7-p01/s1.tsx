// M7 P01 (Biology practical) scenes 1 to 4: the hook (eight clear cups under letters, a secret starter outline that
// fades, three rounds of pour arcs, indicator drops and every cup turning pink in place; "starter: ?" and the crossed
// first-pink chip); the model (epidemic gloss, the model card's four rows, b03's route chips with direct contact
// lit); the marker (water and base cups look the same; the indicator drop leaves water clear and turns base pink; a
// share of base poured into a third cup turns it pink too); the method (variables card, then the secret base drop,
// a pour all in and half back, the saved samples dropped into the well plate, and the contact sheet's round 1 column).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Heading, Overlay} from '../bio-m5-b13/shared';
import {S} from './common';
import {
	AMBER_INK, Bench, CTag, ContactSheet, Cup, CupRow, Dropper, FallDrop, GREEN, GREYT, GREY_INK, GTag, INK, INK_SOFT, LET, LetterChip, MistakeChip, PAIRS, PINK, PourArc, QUESTION, ROW, RZ,
	Rail, RowBox, Sx, TEAL, WText, WellPlate, clamp01, cupH, cupX, dropTip, prog, smooth, vis, wellPt,
} from './parts';
import type {Pt, RowG, WellG} from './parts';

const rim = (g: RowG, i: number, dx = 0): Pt => [cupX(g, i) + dx, g.y - cupH(g.w) * 0.3];

// ---------- 1. Hook ----------
const K1 = cues(S('hook'), {eight: 'Eight students', one: 'One cup is', share: 'They share liquid', three: 'three times', drop: 'a drop of indicator', all: 'all eight turn', who: 'So who started', cant: "you can't tell", lets: "Let's design"});
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const rounds = [K1.share + 6, K1.share + 40, K1.three + 6];
	const dTip = dropTip(640, 330, 150);
	return (
		<>
			<Heading text={QUESTION} at={K1.who} size={54} />
			<Overlay>
				<Bench o={prog(f, 0, 16)} />
				<CupRow at={K1.eight} pink={i => prog(f, K1.all + i * 5, 12)} outline={i => (i === 3 ? vis(f, K1.one, K1.one + 30, 8) : 0)} />
				<GTag x={cupX(ROW, 3) - 70} y={680} text="secret starter" at={K1.one + 4} out={K1.one + 40} size={22} />
				{rounds.map((at, r) => PAIRS[r].map((p, i) => (i < p ? <PourArc key={r + '-' + i} a={rim(ROW, i)} b={rim(ROW, p)} at={at + i * 2} dur={12} hold={6} bow={-60 - 20 * r} /> : null)))}
				{rounds.map((at, r) => <GTag key={'r' + r} x={1000} y={290} text={`round ${r + 1}`} at={at} out={rounds[r + 1] ?? at + 40} size={22} />)}
				<Dropper cx={640} cy={330} h={150} o={vis(f, K1.drop, K1.all + 50, 12)} />
				{LET.map((_, i) => <FallDrop key={i} a={[dTip[0], dTip[1] + 10]} b={rim(ROW, i)} at={K1.drop + 8 + i * 4} dur={14} color="#f4d9e8" />)}
				<CTag x={cupX(ROW, 2)} y={700} text="starter: ?" at={K1.who} color={AMBER_INK} size={44} />
				<MistakeChip x={RZ.x} y={500} text="the first pink cup you see is the starter" at={K1.cant - 10} cross={K1.cant + 20} size={22} />
				{void K1.lets}
			</Overlay>
		</>
	);
};

// ---------- 2. The model ----------
const K2 = cues(S('the-model'), {epidemic: 'An epidemic is', model: 'This is a model', cup: 'Each cup is', contact: 'is a contact', base: 'sodium carbonate solution', test: 'the indicator is'});
const MROWS = [
	{a: 'cup', b: 'a person', k: 'cup' as const},
	{a: 'mixing with a partner', b: 'a contact (direct)', k: 'contact' as const},
	{a: 'dilute base (sodium carbonate)', b: 'a pathogen', k: 'base' as const},
	{a: 'indicator', b: 'the test', k: 'test' as const},
];
export const SceneModel: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<>
			<Heading text={QUESTION} at={-200} size={54} />
			<Overlay>
				<Rail lit={0} at={4} />
				<Bench />
				<CupRow at={-100} outline={i => (i === 3 ? vis(f, K2.base, K2.base + 50, 10) : 0)} />
				<g opacity={prog(f, K2.contact, 12)}>
					{['leave', 'travel', 'enter'].map((t, i) => (
						<g key={t}>
							<rect x={110 + i * 190} y={290} width={160} height={46} rx={23} fill="#fffdf8" stroke={GREYT} strokeWidth={2} />
							<Sx x={190 + i * 190} y={321} text={t} size={24} color={GREY_INK} weight={700} anchor="middle" at={-100} />
						</g>
					))}
					<rect x={680} y={290} width={210} height={46} rx={23} fill="#fff3d9" stroke={AMBER_INK} strokeWidth={3} />
					<Sx x={785} y={321} text="direct contact" size={24} color={AMBER_INK} weight={700} anchor="middle" at={-100} />
					<GTag x={910} y={292} text="b03" at={-100} size={20} />
				</g>
				<CTag x={110} y={760} text="epidemic: a rise in cases above what's expected in a population" at={K2.epidemic} color={TEAL} size={30} maxW={1100} dim={prog(f, K2.cup, 10)} />
				<Sx x={RZ.x} y={280} text="model: a simplified version" size={30} color={INK} weight={800} at={K2.model} />
				<Sx x={RZ.x} y={318} text="of something real" size={30} color={INK} weight={800} at={K2.model} />
				<Sx x={RZ.x + 10} y={372} text="in the model" size={22} color={GREY_INK} weight={700} at={K2.cup} />
				<Sx x={RZ.x + 300} y={372} text="stands for" size={22} color={GREY_INK} weight={700} at={K2.cup} />
				{MROWS.map((r, i) => {
					const at = K2[r.k];
					const dim = i < 2 ? prog(f, K2.base + 20, 12) : 0;
					const y = 390 + i * 130;
					return (
						<g key={r.a} opacity={1 - 0.45 * dim}>
							<RowBox x={RZ.x} y={y} w={RZ.w} h={116} at={at} color={dim > 0.5 ? GREYT : AMBER_INK} />
							<WText x={RZ.x + 20} y={y + 46} text={r.a} size={28} maxW={260} color={dim > 0.5 ? GREY_INK : INK} hand weight={700} at={at} />
							<WText x={RZ.x + 300} y={y + 46} text={r.b} size={28} maxW={250} color={dim > 0.5 ? GREY_INK : AMBER_INK} hand weight={700} at={at + 8} />
						</g>
					);
				})}
				<Dropper cx={1150} cy={380} h={130} o={prog(f, K2.test, 12)} />
				{void GREEN}{void INK_SOFT}{void PINK}{void clamp01}
			</Overlay>
		</>
	);
};

// ---------- 3. The marker ----------
const K3 = cues(S('the-marker'), {invisible: 'stay invisible until', pheno: 'Phenolphthalein is', colourless: 'stays colourless in', pinkb: 'turns pink in', enough: 'received enough base', clear: 'stays clear'});
const CW = {cx: 330, cy: 560, w: 200}, CB = {cx: 680, cy: 560, w: 200}, C3 = {cx: 1040, cy: 600, w: 160};
export const SceneMarker: React.FC = () => {
	const f = useCurrentFrame();
	const dTip = dropTip(1120, 330, 160);
	const top = (c: {cx: number; cy: number; w: number}): Pt => [c.cx, c.cy - cupH(c.w) * 0.3];
	return (
		<>
			<Heading text={QUESTION} at={-200} size={54} />
			<Overlay>
				<Rail lit={1} at={4} />
				<Bench />
				<Cup {...CW} o={prog(f, 0, 14)} />
				<Cup {...CB} o={prog(f, 4, 14)} pink={prog(f, K3.pinkb + 20, 14)} />
				<Sx x={CW.cx} y={720} text="water" size={26} color={GREY_INK} weight={700} anchor="middle" at={6} />
				<Sx x={CB.cx} y={720} text="dilute base" size={26} color={GREY_INK} weight={700} anchor="middle" at={10} />
				<GTag x={330} y={300} text="both look the same" at={14} out={K3.pheno} size={24} />
				<GTag x={330} y={344} text="like an infection with no signs yet" at={K3.invisible + 10} out={K3.pheno} size={22} />
				<Dropper cx={1120} cy={330} h={160} o={prog(f, K3.pheno, 12)} />
				<FallDrop a={dTip} b={top(CW)} at={K3.colourless} dur={18} color="#f4d9e8" />
				<FallDrop a={dTip} b={top(CB)} at={K3.pinkb + 2} dur={18} color="#f4d9e8" />
				<Cup {...C3} o={prog(f, K3.enough - 6, 12)} pink={prog(f, K3.enough + 44, 14)} />
				<PourArc a={top(CB)} b={top(C3)} at={K3.enough + 4} dur={14} hold={8} width={5} color="#b8d2e6" />
				<FallDrop a={dTip} b={top(C3)} at={K3.enough + 30} dur={14} color="#f4d9e8" />
				<CTag x={110} y={780} text="water: stays colourless" at={K3.colourless + 16} color={INK_SOFT} size={30} dim={vis(f, K3.pinkb, K3.clear, 10)} />
				<CTag x={560} y={780} text="base: pink" at={K3.pinkb + 30} color={PINK} size={30} />
				<CTag x={RZ.x} y={280} text="indicator: a chemical that changes colour" at={K3.pheno + 6} color={TEAL} size={30} maxW={540} />
				<GTag x={RZ.x} y={400} text="phenolphthalein" at={K3.pheno + 16} size={22} />
				<GTag x={RZ.x} y={446} text="pink above about pH 8 to 10" at={K3.pinkb + 30} size={22} />
				<CTag x={RZ.x} y={540} text="even a share of the base shows up" at={K3.enough + 50} color={PINK} size={30} maxW={540} dim={prog(f, K3.clear, 10)} />
			</Overlay>
		</>
	);
};

// ---------- 4. Method ----------
const K4 = cues(S('method'), {starts: 'Everyone starts with', secretly: 'secretly makes one', partner: 'find a new', pours: 'pours all your', half: 'pours half back', before: 'Before round one', well: 'well plate', record: 'record each partner', keep: 'Keep volumes', only: 'only the contacts'});
const R4: RowG = {x0: 150, dx: 140, y: 400, w: 96};
const W4: WellG = {cx: 700, cy: 770, w: 560};
const VARS = [
	{h: 'aim', t: 'trace how an infection spreads through contacts, and find the source'},
	{h: 'changes', t: 'who meets whom, each round'},
	{h: 'measured', t: 'which cups and samples test pink, at each time'},
	{h: 'kept the same', t: 'volume, base strength, the pour, drops per well, indicator'},
];
export const SceneMethod: React.FC = () => {
	const f = useCurrentFrame();
	const shrink = smooth(prog(f, K4.partner - 10, 20));
	const slide = smooth(prog(f, K4.partner, 16)) * (1 - smooth(prog(f, K4.half + 30, 16)));
	const others = [[2, 3], [4, 5], [6, 7]];
	const vLit = (k: number) => (k === 3 ? vis(f, K4.keep, 1e9, 10) : k === 1 ? vis(f, K4.only, 1e9, 10) : 0);
	const s = 1 - 0.45 * shrink;
	return (
		<>
			<Heading text={QUESTION} at={-200} size={54} />
			<Overlay>
				<Rail lit={2} at={4} />
				<Bench />
				<CupRow g={R4} at={K4.starts} dx={i => (i === 0 ? 40 * slide : i === 1 ? -40 * slide : 0)} />
				<GTag x={110} y={470} text="10 mL each" at={K4.starts + 20} out={K4.partner} size={22} />
				<GTag x={1060} y={270} text="teacher" at={K4.secretly} out={K4.partner} size={22} />
				<FallDrop a={[1110, 300]} b={[cupX(R4, 3), R4.y - 20]} at={K4.secretly + 10} dur={26} color="#dbe9f2" />
				<GTag x={cupX(R4, 3) - 60} y={500} text="nobody knows which" at={K4.secretly + 30} out={K4.partner} size={20} />
				<PourArc a={rim(R4, 0, 40)} b={rim(R4, 1, -40)} at={K4.pours} dur={16} hold={10} bow={-80} />
				<PourArc a={rim(R4, 1, -40)} b={rim(R4, 0, 40)} at={K4.half} dur={14} hold={8} bow={-40} width={4} />
				{others.map(([a, b], i) => <g key={i}><PourArc a={rim(R4, a)} b={rim(R4, b)} at={K4.half + 30 + i * 8} dur={8} hold={2} /><PourArc a={rim(R4, b)} b={rim(R4, a)} at={K4.half + 42 + i * 8} dur={8} hold={2} width={4} bow={-35} /></g>)}
				<CTag x={110} y={480} text="all in, swirl, half back: both now share the mixture" at={K4.half + 10} color={AMBER_INK} size={26} maxW={980} dim={prog(f, K4.well, 10)} out={K4.well + 20} />
				<WellPlate g={W4} id="p01-m" at={K4.well - 20} labels letters size={18} />
				{LET.map((_, i) => <FallDrop key={i} a={[cupX(R4, i), R4.y + 50]} b={wellPt(W4, i, 0)} at={K4.well + 10 + i * 5} dur={16} color="#dbe9f2" r={7} />)}
				<CTag x={1000} y={600} text="a saved sample for each time" at={K4.well + 30} color={AMBER_INK} size={26} maxW={240} />
				<g transform={`translate(${RZ.x},${lerp4(250, 250, shrink)}) scale(${s})`}>
					{VARS.map((v, k) => {
						const y = k * 110;
						const on = vLit(k) > 0.5;
						const o = prog(f, 4 + k * 26, 12);
						const fresh = vis(f, 4 + k * 26, K4.partner - 10, 10);
						const bright = on || fresh > 0.5;
						return o > 0.01 ? (
							<g key={v.h} opacity={o}>
								<Sx x={0} y={y + 30} text={v.h} size={28} color={bright ? (on ? AMBER_INK : GREEN) : GREY_INK} weight={800} at={-100} />
								<WText x={0} y={y + 66} text={v.t} size={24} maxW={RZ.w} color={bright ? INK : GREY_INK} weight={600} at={-100} />
							</g>
						) : null;
					})}
				</g>
				<ContactSheet g={{cx: 1575, cy: 760, w: 420}} at={K4.record - 6} colAt={[K4.record + 10, 1e9, 1e9]} />
				<CTag x={1000} y={880} text="who met whom, each round" at={K4.record + 30} color={AMBER_INK} size={26} maxW={260} />
				{void K4.before}{void LetterChip}{void clamp01}
			</Overlay>
		</>
	);
};
const lerp4 = (a: number, b: number, t: number) => a + (b - a) * t;
