import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, bondN, DirArrow, EndTag, Fade, FONT_HAND, GreyTag, Hand, Heading, Helicase, HBonds, INK, INK_SOFT, ladderGeom, Ladder, mix, NEUT, NEWC, ORIG,
	Overlay, Polymerase, prog, pulse, S, Scribble, StrandKey, StrandRow, Tick, tilesOf, TileSpec,
} from './shared';
import {Enter} from './shared';
import {Tile} from './dna';

// ---------- 4. Direction: antiparallel ----------
const AT = 'ATCGAGT';
const AB = 'TAGCTCA';
const Car: React.FC<{x: number; y: number; flip?: boolean; color: string; o?: number}> = ({x, y, flip, color, o = 1}) => (
	<g transform={`translate(${x},${y}) scale(${flip ? -1 : 1},1)`} opacity={o}>
		<rect x={-52} y={-16} width={104} height={34} rx={12} fill={color} stroke={INK} strokeWidth={4} />
		<path d="M-30,-16 L-16,-42 L22,-42 L36,-16" fill="#fffdf8" stroke={INK} strokeWidth={4} strokeLinejoin="round" />
		<circle cx={-28} cy={20} r={13} fill={INK} /><circle cx={28} cy={20} r={13} fill={INK} />
		<rect x={44} y={-8} width={10} height={9} rx={3} fill={AMBER} />
	</g>
);

export const SceneAntiparallel: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('antiparallel'), {
		joins: 'Each sugar joins', side: 'one particular side', startEnd: 'start end', arrow: 'like an arrow', five: "the 5' end", fiveP: 'five prime', three: "the 3' end", threeP: 'three prime',
		opp: 'point in opposite directions', run1: "one runs 5' to 3'", partner: "its partner 3' to 5'", anti: 'We call them antiparallel', lanes: 'like the two lanes of a road',
	});
	const X = 360, P = 190, Y = 400;
	const g = ladderGeom({x: X, y: Y, pitch: P, n: 7});
	const topHot = prog(f, c.startEnd, 14) * (1 - prog(f, c.opp, 14));
	const botHot = prog(f, c.opp, 14);
	const hot = '#d08a1e';
	const yA1 = Y - 56, yA2 = g.yBot + 72;
	const drive = (t0: number, dur: number) => prog(f, t0, dur);
	const x1 = X - 100, x2 = X + 6 * P + 100;
	return (
		<>
			<Heading items={[[2, 'A strand has a direction']]} size={66} />
			<Hand at={c.joins} out={c.startEnd - 8} x={96} y={186} size={46} color={INK_SOFT}>each sugar joins the next phosphate on the same side</Hand>
			<Overlay>
				<Ladder x={X} y={Y} n={7} pitch={P} top={tilesOf(AT)} bot={tilesOf(AB)} topColor={mix(NEUT, hot, topHot)} botColor={mix(NEUT, hot, botHot)}
					glowS={i => pulse(f, c.joins + i * 7, 22)} glowL={i => pulse(f, c.joins + 8 + i * 7, 22)} />
				{/* top arrow: start to finish */}
				<DirArrow x1={x1} x2={x2} y={yA1} at={c.arrow - 14} color={hot} dur={30} />
				<g opacity={prog(f, c.startEnd + 10, 12)}>
					<text x={x1} y={yA1 - 22} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 46}} fill={AMBER_INK}>start</text>
				</g>
				<g opacity={prog(f, c.startEnd + 24, 12)}>
					<text x={x2} y={yA1 - 22} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 46}} fill={AMBER_INK}>finish</text>
				</g>
				<EndTag x={230} y={Y + 14} t="5'" at={c.five} color={INK} size={66} />
				<EndTag x={1650} y={Y + 14} t="3'" at={c.three} color={INK} size={66} />
				<Scribble cx={228} cy={Y - 6} rx={46} ry={44} at={c.five + 8} color={AMBER} seed={2} />
				<Scribble cx={1650} cy={Y - 6} rx={46} ry={44} at={c.three + 8} color={AMBER} seed={5} />
				<EndTag x={230} y={Y + 62} t="five prime" at={c.fiveP} color={INK_SOFT} size={32} />
				<EndTag x={1650} y={Y + 62} t="three prime" at={c.threeP} color={INK_SOFT} size={32} />
				{/* bottom arrow: the other way */}
				<DirArrow x1={x2} x2={x1} y={yA2} at={c.opp + 6} color={hot} dur={34} />
				<EndTag x={230} y={g.yBot + 14} t="3'" at={c.opp + 20} color={INK} size={66} />
				<EndTag x={1650} y={g.yBot + 14} t="5'" at={c.opp + 20} color={INK} size={66} />
				<Scribble cx={1650} cy={g.yBot - 6} rx={46} ry={44} at={c.run1 + 30} color={AMBER} seed={7} />
				{/* cars on the two arrows */}
				<Car x={x1 + (x2 - x1) * drive(c.lanes, 90)} y={yA1 - 36} color="#d9a21b" o={prog(f, c.lanes - 4, 8)} />
				<Car x={x2 - (x2 - x1) * drive(c.lanes + 6, 90)} y={yA2 + 34} color="#3b6fa8" flip o={prog(f, c.lanes + 2, 8)} />
			</Overlay>
			<Enter at={c.anti} style={{position: 'absolute', left: 0, right: 0, top: 176, display: 'flex', justifyContent: 'center'}}>
				<span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 96, color: AMBER_INK}}>antiparallel</span>
			</Enter>
			<Hand at={c.lanes + 20} x={430} y={g.yBot + 150} size={54}>side by side, opposite ways</Hand>
		</>
	);
};

// ---------- 5. Why one strand is a template ----------
const TT = 'ATCG';
const TB = 'TAGC';
export const SceneTemplate: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('template'), {
		fixes: 'one strand fixes the order', tA: 'A T', tT: 'T C', tC: 'C G', tG: 'G its', sT: 'read T', sA: 'T A', sG: 'A G', sC: 'G C', info: 'holds the information', template: 'it is called a template',
		weak: 'hydrogen bonds are weak', pull: 'pulled apart', backbone: 'without breaking either backbone', cov: 'strong covalent bonds', electrons: 'share electrons', hold: 'hold together',
	});
	const X = 330, P = 250, Y = 400;
	const g = ladderGeom({x: X, y: Y, pitch: P, n: 4});
	const pullP = prog(f, c.pull - 6, 40) * (1 - prog(f, 1040, 32));
	const sayAt = [c.tA, c.tT, c.tC, c.tG];
	const fillAt = [c.sT, c.sA, c.sG, c.sC];
	const top: TileSpec[] = TT.split('').map((l, i) => ({l, glow: pulse(f, sayAt[i], 24) + pulse(f, c.template + 6, 40) * 0.5}));
	const bot: TileSpec[] = TB.split('').map((l, i) => {
		const erased = f >= c.fixes + i * 4 && f < fillAt[i];
		const p = prog(f, fillAt[i], 14);
		if (erased) return {l: '?', tone: 'ghost', o: prog(f, c.fixes + i * 4, 10)};
		return {l, dy: f >= fillAt[i] ? (1 - p) * 50 : 0, o: f >= fillAt[i] ? p : 1, glow: pulse(f, fillAt[i] + 8, 24)};
	});
	const weak = prog(f, c.weak, 10) * (1 - prog(f, c.cov - 20, 12));
	const covHot = prog(f, c.cov, 10);
	const thick = 10 + 8 * covHot;
	return (
		<>
			<Heading items={[[2, 'Why can one strand rebuild the other?']]} size={64} />
			<Overlay>
				<Ladder x={X} y={Y} n={4} pitch={P} top={top} bot={bot} bond={i => (f >= fillAt[i] ? 1 : f >= c.fixes + i * 4 ? 0 : 1)} bondColor={() => (weak > 0.1 ? '#d08a1e' : '#6b5a45')} open={() => pullP} openDist={120} thick={thick}
					glowS={i => covHot * pulse(f, c.cov + 10 + i * 8, 26)} glowL={i => covHot * pulse(f, c.cov + 14 + i * 8, 26)} />
				<g opacity={1 - prog(f, c.weak - 20, 12)}>
					{TB.split('').map((_, i) => <Tick key={i} x={g.colX(i) + 78} y={(g.topFace + g.botFace) / 2 + 3} at={fillAt[i] + 16} s={0.85} />)}
					<Scribble cx={X + 1.5 * P} cy={Y + 62} rx={440} ry={60} at={c.template + 6} color={AMBER} seed={3} />
				</g>
			</Overlay>
			<Hand at={c.template + 14} x={1180} y={250} size={54} w={700}>template: a pattern to copy from</Hand>
			<Hand at={c.weak} out={c.cov - 6} x={1180} y={420} size={54} w={700} color={INK}>hydrogen bonds: weak</Hand>
			<Hand at={c.backbone} out={c.cov - 6} x={1180} y={500} size={44} w={700} color={INK_SOFT}>backbones stay whole</Hand>
			<Hand at={c.cov} x={1180} y={420} size={54} w={700} color={INK}>covalent bond: strong, atoms share electrons</Hand>
			<Hand at={c.hold} x={1180} y={640} size={62} w={720} color={AMBER_INK}>weak bonds break, strong bonds hold</Hand>
		</>
	);
};

// ---------- 6. Copying steps ----------
export const CT = 'ATCGGTAC';
export const CB = 'TAGCCATG';
export const X0 = 480, PIT = 170, N = 8;
export const Y_U = 220, Y_L = 540;
export const colX = (i: number) => X0 + i * PIT;
export const OLD_BOT0 = Y_U + 242, OLD_BOT1 = Y_L + 242;
const STRETCH: {cols: number[]; at: number}[] = [{cols: [0, 1], at: 0}, {cols: [4, 5, 6], at: 1}, {cols: [2, 3], at: 2}, {cols: [7], at: 3}];

const Chip: React.FC<{x: number; at: number; t: string; on: boolean}> = ({x, at, t, on}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 14);
	return (
		<div style={{position: 'absolute', left: x, top: 874, opacity: p, transform: `translateY(${(1 - p) * 16}px)`, background: on ? '#fff3d6' : '#fffdf8', border: `4px solid ${on ? AMBER : 'rgba(60,45,20,0.15)'}`, borderRadius: 999, padding: '0 28px 6px', fontFamily: FONT_HAND, fontWeight: 700, fontSize: 50, color: on ? AMBER_INK : INK_SOFT, whiteSpace: 'nowrap', boxShadow: '0 8px 18px rgba(60,45,20,0.08)'}}>{t}</div>
	);
};

export const SceneCopySteps: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('copy-steps'), {
		first: 'First', helicase: 'called helicase', unwind: 'unwinds the helix', breaks: 'breaks the hydrogen bonds', fork: 'replication fork', orig: 'Each original strand', second: 'Second', loose: 'loose nucleotides',
		pair: 'pair with the exposed bases', aT: 'A with T', cG: 'C with G', third: 'Third', poly: 'DNA polymerase', joins: 'joins each new nucleotide', covalent: 'covalent bonds', build: 'building the new backbone',
	});
	const frontAt = (i: number) => c.unwind + i * 14;
	const open = (i: number) => prog(f, frontAt(i), 26);
	const fr = Math.max(0, Math.min(N, (f - c.unwind) / 14));
	const origP = prog(f, c.orig, 18);
	const cOld = mix(NEUT, ORIG, origP);
	// landing frames for the new tiles (bottom row first, top row 4 frames later)
	const landOf = (col: number, row: 0 | 1) => {
		const base = [c.pair + 4, c.aT + 6, c.cG + 4, c.cG + 28];
		const s = STRETCH.findIndex(s => s.cols.includes(col));
		const idx = STRETCH[s].cols.indexOf(col);
		return base[s] + idx * 8 + row * 4;
	};
	const newTiles = (letters: string, row: 0 | 1, face: 'down' | 'up'): (TileSpec | null)[] => letters.split('').map((l, i) => {
		const land = landOf(i, row);
		const appear = i === 7 ? c.pair + 70 : c.loose + 6 + i * 4 + row * 2;
		const p = prog(f, land, 14);
		const hov = prog(f, appear, 20);
		const sgn = face === 'up' ? 1 : -1;
		const ex = row === 0 ? 260 : -260;
		const bob = Math.sin((f + i * 11) / 9) * 8;
		const dx = (1 - p) * ((1 - hov) * ex + Math.sin((f + i * 7) / 15) * 14);
		const dy = (1 - p) * (sgn * (40 + 8 * (1 - hov)) + bob);
		return {l, o: Math.max(0, Math.min(1, hov * 1.2)) , dx, dy, glow: pulse(f, land + 10, 22) + (letters === CB && (l === 'A' || l === 'T') ? pulse(f, c.aT + 18, 30) * 0.7 : 0) + (l === 'C' || l === 'G' ? pulse(f, c.cG + 18, 30) * 0.7 : 0)};
	});
	const unitOf = (row: 0 | 1) => (i: number) => prog(f, landOf(i, row) + 2, 10);
	const bondOf = (row: 0 | 1) => (i: number) => prog(f, landOf(i, row) + 6, 12);
	const jT = (a: number) => c.joins + a * 15;
	const linkNewTop = (i: number) => prog(f, jT(i), 12);
	const linkNewBot = (i: number) => prog(f, jT(i - 1), 12);
	const polyX = X0 - 60 + Math.max(0, Math.min(1, (f - c.joins) / 110)) * (7 * PIT + 120);
	const polyO = prog(f, c.poly, 12) * (1 - prog(f, c.build + 40, 14));
	// wrong tile: a T tries the slot opposite a C, does not fit, and drifts away
	const wp = (f - (c.pair + 20)) / 60;
	const slotY = OLD_BOT0 - 26;
	const wIn = Math.min(1, Math.max(0, wp) / 0.45), wOut = Math.max(0, (wp - 0.6) / 0.4);
	const wrongX = colX(7) + 340 * (1 - wIn) + 340 * wOut;
	const wrongY = slotY + 70 * (1 - wIn) + 12 + 70 * wOut;
	const wrongO = wp > 0 && wp < 1 ? Math.min(1, wp * 8) * (1 - Math.max(0, wp - 0.85) / 0.15) : 0;
	const wob = wp > 0.42 && wp < 0.6 ? Math.sin(f * 2) * 5 : 0;
	const oldBotDy = (i: number) => (OLD_BOT1 - OLD_BOT0) * open(i);
	return (
		<>
			<Heading items={[[2, 'Copying DNA: three steps']]} size={64} />
			<Overlay>
				{/* old top strand and its partner bonds */}
				<StrandRow x={X0} y={Y_U} n={N} pitch={PIT} face="down" dir={1} color={cOld} tiles={tilesOf(CT)} />
				{/* original bonds stretching apart */}
				{CT.split('').map((l, i) => <HBonds key={i} x={colX(i)} y1={Y_U + 98} y2={OLD_BOT0 - 98 + oldBotDy(i)} n={bondN(l)} p={1} o={1 - Math.min(1, open(i) * 2.2)} />)}
				{/* new bonds */}
				{CT.split('').map((l, i) => <HBonds key={'u' + i} x={colX(i)} y1={Y_U + 98} y2={OLD_BOT0 - 98} n={bondN(l)} p={bondOf(0)(i)} />)}
				{CB.split('').map((l, i) => <HBonds key={'l' + i} x={colX(i)} y1={Y_L + 98} y2={OLD_BOT1 - 98} n={bondN(l)} p={bondOf(1)(i)} />)}
				{/* new bottom strand (partner of the top template) */}
				<StrandRow x={X0} y={OLD_BOT0} n={N} pitch={PIT} face="up" dir={-1} color={NEWC} tiles={newTiles(CB, 0, 'up')} unit={unitOf(0)} link={linkNewBot} glowL={i => pulse(f, jT(i - 1) + 6, 26)} />
				{/* new top strand (partner of the bottom template) */}
				<StrandRow x={X0} y={Y_L} n={N} pitch={PIT} face="down" dir={1} color={NEWC} tiles={newTiles(CT, 1, 'down')} unit={unitOf(1)} link={linkNewTop} glowL={i => pulse(f, jT(i) + 6, 26)} />
				{/* old bottom strand moves down as the fork opens */}
				<StrandRow x={X0} y={OLD_BOT0} n={N} pitch={PIT} face="up" dir={-1} color={cOld} tiles={tilesOf(CB)} dyOf={oldBotDy} />
				{/* wrong tile bumps off */}
				<g opacity={wrongO}><Tile x={wrongX + wob} y={wrongY} face="up" l="T" tone="grey" /></g>
				{/* helicase and the fork */}
				<Helicase x={X0 - 70 + fr * PIT - 40} y={(Y_U + 98 + OLD_BOT0 - 98 + (OLD_BOT1 - OLD_BOT0) * open(Math.max(0, Math.min(N - 1, Math.round(fr - 1.4))))) / 2} s={0.75} label={false} o={prog(f, c.helicase, 12) * (1 - prog(f, c.second - 20, 14))} />
				<Fade at={c.fork} out={c.orig + 10}><Scribble cx={colX(7) + 10} cy={(Y_U + 98 + OLD_BOT0 - 98 + 160) / 2} rx={130} ry={150} at={c.fork + 4} color={AMBER_INK} seed={4} /></Fade>
				{/* polymerase clamps */}
				<Polymerase x={polyX} y={OLD_BOT0 - 8} s={0.55} o={polyO} label={false} />
				<Polymerase x={polyX} y={Y_L + 8} s={0.55} o={polyO} label={false} />
			</Overlay>
			<Hand at={c.fork} out={c.orig + 10} x={1420} y={106} size={56}>replication fork</Hand>
			<Hand at={c.orig + 14} x={170} y={Y_U - 14} size={46} color={ORIG}>original</Hand>
			<Hand at={c.orig + 18} x={170} y={OLD_BOT1 - 28} size={46} color={ORIG}>original</Hand>
			<Hand at={c.pair + 70} x={170} y={OLD_BOT0 - 36} size={46} color={NEWC}>new</Hand>
			<Hand at={c.pair + 74} x={170} y={Y_L - 10} size={46} color={NEWC}>new</Hand>
			<GreyTag at={c.pair + 44} out={c.pair + 100} x={900} y={112} text="does not fit, so it does not join (usually)" size={34} />
			<Hand at={c.poly + 10} out={c.build + 50} x={1000} y={106} size={50} color="#7b4fb3">DNA polymerase</Hand>
			<Hand at={c.helicase} out={c.second - 20} x={1000} y={106} size={50} color={AMBER_INK}>helicase unwinds</Hand>
			<Chip x={700} at={c.first + 6} t="1 separate" on={f < c.second} />
			<Chip x={970} at={c.second + 6} t="2 pair" on={f >= c.second && f < c.third} />
			<Chip x={1190} at={c.third + 6} t="3 join" on={f >= c.third} />
			<StrandKey at={c.orig + 20} />
		</>
	);
};
