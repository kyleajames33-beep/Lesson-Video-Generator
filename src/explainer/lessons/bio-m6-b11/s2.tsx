// M6 B11 scenes 6 to 10: a proposed use, the malaria gene drive (half-and-half inheritance on a chromosome diagram
// panel and an offspring row, the drive's editor cutting the other homologue and the band copying across, nearly all
// offspring); crashing a population (one-copy and two-copy females, the population line, the lab cage, the mosquito
// thumbnail placed on the "works in animals" rung); what could go wrong (resistance, bigger wild populations,
// ecological effects, borders, reversal, one chip bright at a time); need, feasibility and fairness with "could, if";
// memory.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Heading, Overlay, Sx} from '../bio-m5-b13/shared';
import {GreyCross, TickG, Tg} from '../bio-m6-b07/parts';
import {CurveArrow} from '../bio-m6-b01/parts';
import {S} from './common';
import {HeadStrip, TopThumb} from './s1';
import {
	AMBER, AMBER_INK, Arr, BorderMap, CARD, CasGlyph, DriveMark, EDGE, Eggs, GREYT, GREY_INK, Homolog, INK, INK_SOFT, Ladder, MarkText, Nick, Pill, PLATES, Pl, PopLine,
	StopMark, bandY, lerp, prog, rungSlot, smooth, tw, vis,
} from './parts';

/** The mosquito thumbnail on the "works in animals" rung (scenes 7 to 9). */
export const DriveThumb: React.FC<{t?: number; o?: number; from?: [number, number]; fromW?: number}> = ({t = 1, o = 1, from = [1200, 300], fromW = 200}) => {
	const [sx, sy] = rungSlot(2);
	const k = smooth(t);
	return <Pl p={PLATES.mosquito} cx={lerp(from[0], sx, k)} cy={lerp(from[1], sy + 4, k)} w={lerp(fromW, 110, k)} o={o} />;
};
const LadderBack: React.FC<{o?: number; mosquito?: boolean; lit?: number}> = ({o = 0.4, mosquito = false, lit = -1}) => (
	<g opacity={o}>
		<Ladder lit={lit} />
		<TopThumb />
		{mosquito ? <DriveThumb /> : null}
	</g>
);

// ---------- 6. A proposed use: a gene drive ----------
const K6 = cues(S('gene-drive'), {malaria: 'Malaria', half: 'about half', gamete: 'each gamete', drive: 'A gene drive', code: 'its own CRISPR editor', cells: 'cells that make gametes', cuts: 'cuts the matching spot', copy: 'copying the drive across', all: 'nearly all'});
const HA = 900, HB = 1020, HY = 440, HH = 260;
const CARRY_HALF = [0, 2, 5, 7];
export const SceneDrive: React.FC = () => {
	const f = useCurrentFrame();
	const by = bandY(HY, HH);
	const rowA = vis(f, K6.half + 10, K6.drive, 12);
	const rowB = prog(f, K6.all, 12);
	const mv = smooth(prog(f, K6.cuts, 22));
	return (
		<>
			<Heading text="A proposed use: a gene drive" at={4} size={60} />
			<Overlay>
				<LadderBack o={0.35} />
				<Pl p={PLATES.mosquito} cx={1580} cy={330} w={330} o={prog(f, 6, 14) * (1 - prog(f, K6.drive - 20, 14))} />
				<Tg x={1580} y={545} text="malaria: spread by certain mosquitoes" at={10} out={K6.half} anchor="middle" size={36} />
				{/* the chromosome diagram panel */}
				<Homolog x={HA} y={HY} h={HH} band={prog(f, K6.half + 6, 12)} o={prog(f, K6.half - 6, 12)} />
				<Homolog x={HB} y={HY} h={HH} band={prog(f, K6.copy + 6, 20)} o={prog(f, K6.half - 6, 12)} />
				<Sx x={HA - 40} y={by + 10} text="one copy" size={30} color={GREY_INK} hand anchor="end" opacity={vis(f, K6.half + 14, K6.code, 12)} />
				<CasGlyph x={lerp(HA, HB, mv)} y={by} o={prog(f, K6.code + 6, 12) * (1 - prog(f, K6.copy + 20, 12))} s={1.1} />
				<Nick x={HB} y={by} s={20} o={vis(f, K6.cuts + 22, K6.copy + 10, 8)} />
				<CurveArrow a={[HA + 28, by - 18]} b={[HB - 28, by - 18]} at={K6.copy} out={K6.all} bow={-50} color={AMBER} width={5} />
				<Sx x={1150} y={390} text="gene drive" size={56} color={INK} weight={800} at={K6.drive} />
				<Tg x={1150} y={450} text="an allele that copies itself across" at={K6.drive + 14} out={K6.copy} size={38} />
				{/* offspring: about half, then nearly all */}
				{Array.from({length: 8}, (_, k) => {
					const x = 720 + k * 150;
					const oA = rowA * prog(f, K6.half + 10 + k * 3, 8);
					const oB = rowB * prog(f, K6.all + k * 3, 8);
					const o = Math.max(oA, oB);
					const carry = oB > 0.01 ? 1 : CARRY_HALF.includes(k) ? 1 : 0;
					return (
						<g key={k} opacity={o}>
							<Pl p={PLATES.mosquito} cx={x} cy={780} w={100} />
							<DriveMark x={x} y={862} carry={carry} />
						</g>
					);
				})}
				<Tg x={1245} y={950} text="about half the offspring" at={K6.half + 30} out={K6.drive} anchor="middle" size={38} />
				<Tg x={1245} y={950} text="nearly all offspring" at={K6.all + 26} anchor="middle" size={38} />
				{void K6.malaria}{void K6.gamete}{void K6.cells}{void AMBER}
			</Overlay>
		</>
	);
};

// ---------- 7. Crashing a population ----------
const K7 = cues(S('population-crash'), {need: 'female mosquitoes need', one: 'Females with one copy', two: 'females with two copies', spreads: 'As the drive spreads', crash: 'population can crash', cages: 'lab cages', every: 'reached every mosquito', collapsed: 'collapsed within', released: 'no gene drive has been released'});
export const SceneCrash: React.FC = () => {
	const f = useCurrentFrame();
	const mv = prog(f, K7.released, 30);
	const lit = f >= K7.released + 20;
	return (
		<>
			<Heading text="Crashing a population" at={4} size={60} />
			<Overlay>
				<LadderBack o={0.35 + 0.55 * prog(f, K7.released, 14)} lit={lit ? 2 : -1} />
				<Homolog x={790} y={300} h={170} w={34} band={1} o={prog(f, 4, 12)} />
				<Homolog x={850} y={300} h={170} w={34} band={0} o={prog(f, 4, 12)} />
				<Sx x={900} y={268} text="drive sits inside" size={28} color={GREY_INK} hand at={K7.need} />
				<Sx x={900} y={302} text="a female fertility gene" size={28} color={GREY_INK} hand at={K7.need} />
				{/* one copy: still lays eggs; two copies: cannot */}
				<Pl p={PLATES.mosquito} cx={1260} cy={300} w={190} o={prog(f, K7.one, 12)} />
				<DriveThumb t={mv} o={prog(f, K7.released, 8)} from={[1580, 720]} fromW={120} />
				<DriveMark x={1235} y={420} carry={1} o={prog(f, K7.one + 6, 10)} />
				<DriveMark x={1290} y={420} carry={0} o={prog(f, K7.one + 6, 10)} />
				<Sx x={1262} y={470} text="one copy: lays eggs" size={30} color={GREY_INK} hand anchor="middle" at={K7.one + 8} />
				<Eggs x={1390} y={360} o={prog(f, K7.one + 16, 10)} />
				<Pl p={PLATES.mosquito} cx={1620} cy={300} w={190} o={prog(f, K7.two, 12)} />
				<DriveMark x={1595} y={420} carry={1} o={prog(f, K7.two + 6, 10)} />
				<DriveMark x={1650} y={420} carry={1} o={prog(f, K7.two + 6, 10)} />
				<Sx x={1622} y={470} text="two copies: no eggs" size={30} color={GREY_INK} hand anchor="middle" at={K7.two + 8} />
				<Eggs x={1750} y={360} o={prog(f, K7.two + 10, 10)} grey={prog(f, K7.two + 20, 10)} />
				<GreyCross x={1750} y={360} at={K7.two + 24} s={24} />
				{/* the population line and the cage */}
				<PopLine x={760} y={590} w={520} h={250} draw={prog(f, K7.spreads, K7.crash - K7.spreads + 40, x => x)} o={prog(f, K7.spreads - 10, 12)} />
				<Pl p={PLATES.cage} cx={1580} cy={720} w={290} o={prog(f, K7.cages, 14)} />
				<Tg x={1250} y={990} text="small lab cages: collapse in 7 to 11 generations" at={K7.cages + 10} out={K7.released} anchor="middle" size={36} />
				<Tg x={1250} y={990} text="not released in the wild" at={K7.released + 24} anchor="middle" size={40} />
				{void K7.every}{void K7.collapsed}
			</Overlay>
		</>
	);
};

// ---------- 8. What could go wrong ----------
const K8 = cues(S('unknowns'), {q: 'gene drives will wipe out malaria', partly: 'Partly', mech: 'mechanism works', need: 'need is huge', but: 'But a mosquito', resist: 'resistance could', bigger: 'far bigger', eat: 'animals that eat them', borders: 'across borders', who: 'who decides', back: 'call back'});
const UX = 1250, UY = 640;
const CLOUD = Array.from({length: 28}, (_, i) => {
	const a = i * 2.39996, r = 40 + 190 * Math.sqrt((i + 0.5) / 28);
	return [UX + 130 + Math.cos(a) * r * 1.25, UY + Math.sin(a) * r * 0.8] as [number, number];
});
export const SceneUnknowns: React.FC = () => {
	const f = useCurrentFrame();
	const tick = 1 - 0.6 * prog(f, K8.but, 12);
	const seg = (a: number, b?: number) => vis(f, a, b, 12);
	const rO = seg(K8.resist - 10, K8.eat), bO = seg(K8.bigger, K8.eat), eO = seg(K8.eat, K8.borders), mO = seg(K8.borders, K8.back), kO = seg(K8.back);
	const by = bandY(UY, 230);
	const bounce = Math.abs(Math.sin((f - K8.resist) / 7)) * 40 * prog(f, K8.resist + 10, 10);
	return (
		<>
			<Heading text="What could go wrong?" at={4} size={60} />
			<Overlay>
				<LadderBack o={0.35} mosquito />
				<HeadStrip x={720} y={200} w={860} text="will wipe out malaria" mosquito q={1} lit={1} slide={prog(f, K8.q - 10, 16)} />
				<g opacity={tick}>
					<TickG x={750} y={390} at={K8.mech} s={36} />
					<Sx x={790} y={402} text="mechanism works in cages" size={36} color={INK} hand at={K8.mech + 4} />
					<TickG x={1330} y={390} at={K8.need} s={36} />
					<Sx x={1370} y={402} text="huge need" size={36} color={INK} hand at={K8.need + 4} />
				</g>
				{/* resistance: the changed cut site cannot be cut */}
				<g opacity={rO * (1 - 0.6 * bO)}>
					<Homolog x={UX - 70} y={UY} h={230} band={1} />
					<Homolog x={UX + 50} y={UY} h={230} band={0} changed={prog(f, K8.resist - 6, 10)} />
					<CasGlyph x={UX + 50 + 60} y={by - 20 - bounce} s={1.3} />
					<Sx x={UX + 50} y={UY + 160} text="cut site changed" size={28} color={GREY_INK} hand anchor="middle" />
				</g>
				{/* far bigger wild populations */}
				<g opacity={bO}>
					<Pl p={PLATES.cage} cx={900} cy={UY} w={150} />
					{CLOUD.map(([x, y], i) => <Pl key={i} p={PLATES.mosquito} cx={x} cy={y} w={42} o={prog(f, K8.bigger + i, 8)} />)}
				</g>
				{/* ecological effects */}
				<g opacity={eO}>
					<Pl p={PLATES.mosquito} cx={UX} cy={UY - 90} w={170} />
					<Arr a={[UX - 70, UY - 30]} b={[UX - 210, UY + 60]} at={K8.eat + 6} />
					<Arr a={[UX + 70, UY - 30]} b={[UX + 210, UY + 60]} at={K8.eat + 12} />
					<Pl p={PLATES.finch} cx={UX - 290} cy={UY + 110} w={130} o={prog(f, K8.eat + 10, 12)} />
					<Pl p={PLATES.frog} cx={UX + 330} cy={UY + 120} w={250} o={prog(f, K8.eat + 16, 12)} />
					<Sx x={UX - 120} y={UY + 4} text="?" size={48} color={GREY_INK} weight={800} anchor="middle" at={K8.eat + 20} />
					<Sx x={UX + 120} y={UY + 4} text="?" size={48} color={GREY_INK} weight={800} anchor="middle" at={K8.eat + 24} />
				</g>
				<BorderMap cx={UX} cy={UY} t={prog(f, K8.borders + 6, 60, x => x)} o={mO} />
				{/* hard to call back */}
				<g opacity={kO}>
					<Arr a={[UX - 220, UY - 30]} b={[UX + 200, UY - 30]} at={K8.back} color={AMBER_INK} width={6} />
					<path d={`M${UX + 200},${UY + 30} C${UX + 120},${UY + 80} ${UX + 10},${UY + 80} ${UX - 40},${UY + 60}`} fill="none" stroke={GREYT} strokeWidth={5} strokeDasharray="10 8" opacity={prog(f, K8.back + 10, 10)} />
					<StopMark x={UX - 70} y={UY + 56} o={prog(f, K8.back + 18, 8)} />
					<Sx x={UX} y={UY - 56} text="release" size={30} color={GREY_INK} hand anchor="middle" />
					<Sx x={UX + 80} y={UY + 120} text="call back?" size={30} color={GREY_INK} hand anchor="middle" opacity={prog(f, K8.back + 14, 10)} />
				</g>
				<Pill x={UX} y={870} text="resistance" anchor="middle" o={seg(K8.resist, K8.eat)} size={38} />
				<Pill x={UX} y={870} text="ecological effects" anchor="middle" o={seg(K8.eat + 10, K8.borders)} size={38} />
				<Pill x={UX} y={870} text="crosses borders: who decides?" anchor="middle" o={seg(K8.who - 10, K8.back)} size={38} />
				<Pill x={UX} y={870} text="hard to reverse" anchor="middle" o={seg(K8.back + 10)} size={38} />
				{void K8.partly}{void CARD}{void EDGE}{void INK_SOFT}
			</Overlay>
		</>
	);
};

// ---------- 9. Need, feasibility, fairness ----------
const K9 = cues(S('three-questions'), {three: 'three questions', need: 'Need', feas: 'Feasibility', fair: 'Fairness', not: 'Not it will', could: 'it could', gd: 'Gene drives could reduce', ifw: 'if field trials'});
const QCOLS = [
	{x: 690, head: 'need', q: ['how big is', 'the problem?']},
	{x: 1070, head: 'feasibility', q: ['safe, at scale,', 'outside a trial?']},
	{x: 1450, head: 'fairness', q: ['who will', 'actually get it?']},
];
export const SceneThree: React.FC = () => {
	const f = useCurrentFrame();
	const ats = [K9.need, K9.feas, K9.fair];
	const dim = 1 - 0.6 * prog(f, K9.not, 12);
	return (
		<>
			<Heading text="Need, feasibility, fairness" at={4} size={60} />
			<Overlay>
				<LadderBack o={0.3} mosquito />
				{QCOLS.map((c, i) => (
					<g key={i} opacity={prog(f, ats[i], 12)}>
						<rect x={c.x} y={240} width={340} height={260} rx={22} fill={CARD} stroke={dim > 0.7 ? AMBER : EDGE} strokeWidth={3.5} />
						<Sx x={c.x + 170} y={315} text={c.head} size={50} color={dim > 0.7 ? INK : GREY_INK} weight={800} anchor="middle" />
						{c.q.map((t, k) => <Sx key={k} x={c.x + 170} y={385 + k * 40} text={t} size={30} color={GREY_INK} hand anchor="middle" />)}
					</g>
				))}
				<Sx x={690} y={630} text="it will" size={48} color={GREY_INK} hand at={K9.not} />
				<line x1={684} y1={614} x2={684 + tw('it will', 48, true)} y2={614} stroke={GREYT} strokeWidth={5} strokeLinecap="round" opacity={prog(f, K9.not + 12, 8)} />
				<Sx x={900} y={630} text="it could ... if ..." size={52} color={AMBER_INK} hand at={K9.could} />
				<MarkText x={690} y={760} size={42} at={K9.gd} parts={[{t: 'Gene drives '}, {t: 'could', mark: K9.gd + 20}, {t: ' reduce malaria in some regions,'}]} />
				<MarkText x={690} y={820} size={42} at={K9.gd + 20} parts={[{t: 'if', mark: K9.ifw}, {t: " field trials show they're safe and communities agree."}]} />
				{void K9.three}{void dim}
			</Overlay>
		</>
	);
};

// ---------- 10. Memory ----------
const K10 = cues(S('memory'), {two: 'Two things', adv: 'Advanced', striking: 'a striking lab result', need: 'need feasibility and fairness'});
export const SceneMemory: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<>
			<Heading text="Two things to hold on to" at={4} size={60} />
			<Overlay>
				<Sx x={160} y={420} text="Advanced isn't the same as proven." size={72} color={INK} hand at={K10.adv} />
				<Sx x={160} y={490} text="a lab result is a reason to keep testing" size={36} color={GREY_INK} hand at={K10.striking + 10} />
				<Pl p={PLATES.cage} cx={1640} cy={400} w={230} o={prog(f, K10.adv + 14, 12)} />
				<Sx x={160} y={720} text="Need, feasibility, fairness." size={72} color={INK} hand at={K10.need} />
				{[0, 1, 2].map(k => (
					<g key={k} opacity={prog(f, K10.need + 10 + k * 6, 10)}>
						<rect x={1300 + k * 140} y={630} width={110} height={130} rx={14} fill={CARD} stroke={AMBER} strokeWidth={3.5} />
						<rect x={1300 + k * 140} y={630} width={110} height={30} rx={12} fill="#fff3d9" stroke={AMBER} strokeWidth={3.5} />
						{[0, 1, 2].map(j => <line key={j} x1={1318 + k * 140} y1={686 + j * 22} x2={1392 + k * 140} y2={686 + j * 22} stroke={GREYT} strokeWidth={4} strokeLinecap="round" />)}
					</g>
				))}
				{void K10.two}
			</Overlay>
		</>
	);
};
