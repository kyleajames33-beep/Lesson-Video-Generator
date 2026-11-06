import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {
	AMBER_INK, Arrow, Coin, Col, DrawPath, FONT_DISPLAY, FONT_HAND, GreyTag, Hand, Heading, INK, INK_SOFT, lerp, Overlay, Pill, prog, S,
	MiniBar, PImg, P_CELL, PL, SvgPlate,
} from './shared';
import {usePNuc} from '../bio-m5-b05a/pnuc';
import {usePlates} from '../bio-m5-b05a/cd';

// Quality fix (6 Nov 2026): the audit rejected the small coded diagrams in empty frames. The cells are the painted cell
// plate (uniform scale, its own aspect) and the chromosomes are the painted single plates (MiniBar), all enlarged to
// fill the frame. Fertilisation uses the painted sperm and egg. No rows of tiny bars: the "almost never match" gametes
// carry a count and a colour key (which parent each chromosome came from), not 23 drawn chromosomes.
const CELL_AR = 1438 / 1477;
/** Painted cell of radius rx (uniform scale). */
const Cell: React.FC<{cx: number; cy: number; rx: number; o?: number}> = ({cx, cy, rx, o = 1}) => <PImg p={P_CELL} x={cx - rx} y={cy - rx * CELL_AR} w={2 * rx} h={2 * rx * CELL_AR} o={o} />;
/** A colour key strip: which parent each of a gamete's chromosomes came from (not drawn chromosomes). */
const Key: React.FC<{x: number; y: number; mix: Col[]; o?: number; cw?: number}> = ({x, y, mix, o = 1, cw = 12}) => (
	<g opacity={o}>{mix.map((cc, j) => <rect key={j} x={x - (mix.length * cw) / 2 + j * cw} y={y} width={cw - 3} height={18} rx={3} fill={cc === 'P' ? '#c27aac' : '#55b3a6'} />)}</g>
);

export const TrackStrip: React.FC<{at: number}> = ({at}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 14);
	const box: React.CSSProperties = {fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 24, color: INK_SOFT, background: '#fffdf8', border: '2.5px solid #d8cdb6', borderRadius: 12, padding: '4px 14px', whiteSpace: 'nowrap'};
	return (
		<div style={{position: 'absolute', left: 96, top: 910, display: 'flex', gap: 14, opacity: p}}>
			<span style={box}>after division 1: 2 chromosomes in each of 2 cells</span>
			<span style={box}>after division 2: 2 in each of 4 cells</span>
		</div>
	);
};

// ---------- 11. How many combinations ----------
const SX = (col: number) => 745 + col * 185;
const SY = (row: number) => 300 + row * 212;
const SR = 82;
const SlotCell: React.FC<{cx: number; cy: number; l: Col; s: Col; m?: Col; mO?: number; o?: number; scale?: number}> = ({cx, cy, l, s, m, mO = 1, o = 1, scale = 1}) => (
	<g opacity={o} transform={`translate(${cx},${cy}) scale(${scale})`}>
		<Cell cx={0} cy={0} rx={SR} />
		<MiniBar x={m ? -22 : -11} y={0} h={74} col={l} w={13} />
		<MiniBar x={m ? 0 : 11} y={8} h={50} col={s} w={13} />
		{m ? <MiniBar x={22} y={4} h={60} col={m} w={13} o={mO} /> : null}
	</g>
);
const fmt = (n: number) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
const MIX1 = Array.from({length: 23}, (_, j) => (j * 7 % 3 === 0 ? 'T' : 'P')) as Col[];
const MIX2 = MIX1.map((c, j) => (j % 2 === 0 ? (c === 'P' ? 'T' : 'P') : c)) as Col[];

export const SceneCombinations: React.FC = () => {
	const f = useCurrentFrame();
	usePNuc();
	usePlates([P_CELL.src]);
	const c = cues(S('combinations'), {
		how: 'How many', dir: 'direction decides', goes: 'partner goes', gam: 'particular gamete', own: 'each pair decides', mult: 'choices multiply', tt: 'two times two', is4: 'is 4', npairs: 'With n pairs', pow: 'power n', p23: '23 pairs', big: ['2 to the power', 2], more: 'more than 8', match: 'So two gametes', never: 'almost never',
	});
	const slotsAt = (i: number) => c.tt + i * 8;
	const slots4 = [{col: 0, row: 0, l: 'P' as Col, s: 'P' as Col}, {col: 0, row: 1, l: 'T' as Col, s: 'T' as Col}, {col: 1, row: 0, l: 'P' as Col, s: 'T' as Col}, {col: 1, row: 1, l: 'T' as Col, s: 'P' as Col}];
	const grow = prog(f, c.npairs + 24, 24);
	const third = prog(f, c.npairs + 4, 18);
	const tick = Math.round(8388608 * prog(f, c.big, 60));
	const coin1b = f >= c.own;
	// the coins (which partner goes) are tagged while they flip and fade once the choices multiply
	const coinOut = 1 - prog(f, c.tt, 14);
	const bar = (from: [number, number], to: [number, number], at: number, col: Col, h: number) => {
		const t = prog(f, at, 26);
		if (t <= 0) return null;
		return <MiniBar x={lerp(from[0], to[0], t)} y={lerp(from[1], to[1], t)} h={lerp(h * 1.5, h, t)} col={col} w={lerp(20, 14, t)} />;
	};
	return (
		<>
			<Heading items={[[0, 'How many combinations?']]} size={60} />
			<Overlay>
				{/* two pairs and their coins */}
				<g opacity={prog(f, c.how + 20, 14)}>
					<MiniBar x={165} y={300} h={124} col="P" w={20} />
					<MiniBar x={235} y={300} h={124} col="T" w={20} />
					<MiniBar x={165} y={530} h={84} col="P" w={20} />
					<MiniBar x={235} y={530} h={84} col="T" w={20} />
				</g>
				{!coin1b ? <Coin x={200} y={205} from={c.dir} to={c.dir + 34} face="P" o={prog(f, c.dir - 8, 8)} /> : <Coin x={200} y={205} from={c.own} to={c.own + 36} face="T" o={coinOut} />}
				{!coin1b ? <Coin x={200} y={440} from={c.goes} to={c.goes + 34} face="P" o={prog(f, c.goes - 8, 8)} /> : <Coin x={200} y={440} from={c.own + 10} to={c.own + 46} face="P" o={coinOut} />}
				{/* gamete 1 and gamete 2 */}
				<Cell cx={480} cy={320} rx={118} o={prog(f, c.goes, 14)} />
				<Cell cx={480} cy={600} rx={118} o={prog(f, c.own + 30, 14)} />
				{bar([165, 300], [455, 320], c.goes + 18, 'P', 84)}
				{bar([165, 530], [505, 338], c.gam, 'P', 56)}
				{bar([235, 300], [455, 600], c.own + 36, 'T', 84)}
				{bar([165, 530], [505, 618], c.own + 50, 'P', 56)}
				{/* the grid of mini gametes */}
				{slots4.map((sl, i) => {
					const p = prog(f, slotsAt(i), 14);
					return <SlotCell key={i} cx={SX(sl.col)} cy={SY(sl.row)} l={sl.l} s={sl.s} m={third > 0.01 ? 'P' : undefined} mO={third} o={p} scale={0.7 + 0.3 * p} />;
				})}
				{slots4.map((sl, i) => <SlotCell key={'n' + i} cx={SX(sl.col + 2)} cy={SY(sl.row)} l={sl.l} s={sl.s} m="T" o={grow} scale={0.7 + 0.3 * grow} />)}
				{/* the third pair arrives */}
				<g opacity={third}>
					<MiniBar x={165} y={760} h={104} col="P" w={20} />
					<MiniBar x={235} y={760} h={104} col="T" w={20} />
				</g>
			</Overlay>
			<Hand at={c.dir} out={c.tt} x={240} y={168} size={28} w={380} color={INK_SOFT}>coin: which partner goes?</Hand>
			<Hand at={c.mult} x={96} y={372} size={40} w={260} color={AMBER_INK}>2 ways</Hand>
			<Hand at={c.mult + 8} x={96} y={578} size={40} w={260} color={AMBER_INK}>2 ways</Hand>
			<Hand at={c.npairs + 8} x={96} y={822} size={40} w={300} color={AMBER_INK}>and a third pair</Hand>
			{slots4.map((sl, i) => (
				<Hand key={i} at={slotsAt(i) + 8} out={c.npairs - 4} x={SX(sl.col) - 100} y={SY(sl.row) + SR - 2} size={28} w={200} color={INK_SOFT}><span style={{display: 'block', textAlign: 'center', fontFamily: FONT_DISPLAY, fontWeight: 600}}>{`gamete ${i + 1}`}</span></Hand>
			))}
			<Hand at={c.is4} out={c.npairs - 4} x={1160} y={300} size={150} color={AMBER_INK}>4</Hand>
			<Hand at={c.pow - 20} x={1430} y={210} size={130} color={AMBER_INK}>8</Hand>
			<Hand at={c.tt + 30} out={c.npairs + 10} x={1330} y={500} size={36} w={520} color={INK_SOFT}>{'line-up 1: A B D, a b d'}</Hand>
			<Hand at={c.tt + 44} out={c.npairs + 10} x={1330} y={548} size={36} w={520} color={INK_SOFT}>{'line-up 2: A B d, a b D'}</Hand>
			<Hand at={c.pow - 6} x={700} y={640} size={92}><span>2 × 2 × … = 2<sup style={{fontSize: '0.62em'}}>n</sup></span></Hand>
			<Pill at={c.npairs + 4} out={c.p23 + 20} x={700} y={755} size={44}>n = number of pairs</Pill>
			<Pill at={c.p23 + 24} out={c.big} x={700} y={755} size={44}>n = 23</Pill>
			<div style={{position: 'absolute', left: 700, top: 745, opacity: prog(f, c.big, 10), fontFamily: FONT_HAND, fontWeight: 700, fontSize: 84, color: INK, whiteSpace: 'nowrap'}}>2<sup style={{fontSize: '0.6em'}}>23</sup> = <span style={{color: AMBER_INK}}>{fmt(tick)}</span></div>
			<Pill at={c.more} x={700} y={836} size={40}>more than 8 million</Pill>
			<GreyTag at={c.more + 20} x={1330} y={890} text="crossing over adds even more" size={26} />
			<Overlay>
				<g opacity={prog(f, c.match, 14)}>
					<Cell cx={1490} cy={640} rx={108} />
					<Cell cx={1730} cy={640} rx={108} />
					{[1490, 1730].map((x, g) => <text key={g} x={x} y={658} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 52}} fill={INK}>23</text>)}
					<Key x={1490} y={756} mix={MIX1.slice(0, 12)} cw={16} />
					<Key x={1730} y={756} mix={MIX2.slice(0, 12)} cw={16} />
				</g>
			</Overlay>
			<Hand at={c.never} x={1400} y={800} size={48} color={AMBER_INK}>almost never match</Hand>
			<TrackStrip at={c.how} />
		</>
	);
};

// ---------- 12. Fertilisation and continuity ----------
// Quality fix (6 Nov 2026): the painted sperm swims into the painted egg; the fertilised egg carries the two sets as a
// count card (23 + 23), not 46 drawn bars. The generation ring is three painted cells.
const EGG = {cx: 760, cy: 440, w: 470};
const Count: React.FC<{x: number; y: number; n: string; col: string; o?: number; sub?: string}> = ({x, y, n, col, o = 1, sub}) => (
	<g opacity={o}>
		<text x={x} y={y} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 76}} fill={col}>{n}</text>
		{sub ? <text x={x} y={y + 40} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 32}} fill={INK_SOFT}>{sub}</text> : null}
	</g>
);
export const SceneFertilisation: React.FC = () => {
	const f = useCurrentFrame();
	usePNuc();
	usePlates([P_CELL.src, PL.egg.src, PL.sperm.src]);
	const c = cues(S('fertilisation'), {
		fert: 'Fertilisation joins', joins: 'joins', p23: '23 plus 23', makes: 'makes 46', again: 'again', halves: 'Meiosis halves', restores: 'fertilisation restores', stays: 'stays the same', gen: 'every generation',
	});
	const m = prog(f, c.joins + 6, 56);
	// the sperm's head is at the plate's right end: it swims right, into the egg's left side
	const sx = lerp(250, 470, m);
	const gmo = 1 - prog(f, c.joins + 44, 14);
	const z = prog(f, c.joins + 40, 20);
	const ring = [[1500, 390], [1360, 650], [1640, 650]];
	return (
		<>
			<Heading items={[[0, 'Fertilisation restores the number']]} size={60} />
			<Overlay>
				<SvgPlate a={PL.egg} cx={EGG.cx} cy={EGG.cy} w={EGG.w} o={prog(f, 0, 14)} />
				<SvgPlate a={PL.sperm} cx={sx} cy={EGG.cy - 10} w={320} o={prog(f, 0, 14) * gmo} />
				<Count x={sx + 40} y={EGG.cy - 60} n="23" col="#7e3a69" sub="sperm: one set" o={gmo} />
				<Count x={EGG.cx + 260} y={EGG.cy - 150} n="23" col="#1f7a6f" sub="egg: one set" o={gmo} />
				<g opacity={z}>
					<rect x={EGG.cx - 150} y={EGG.cy - 62} width={300} height={124} rx={26} fill="#fffdf8" stroke={AMBER_INK} strokeWidth={4} opacity={0.94} />
					<text x={EGG.cx} y={EGG.cy + 10} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 64}}><tspan fill="#7e3a69">23</tspan><tspan fill={INK}> + </tspan><tspan fill="#1f7a6f">23</tspan></text>
					<text x={EGG.cx} y={EGG.cy + 48} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 28}} fill={INK_SOFT}>two sets: matching pairs</text>
				</g>
				<g opacity={prog(f, c.p23 + 14, 14)}>
					<Arrow x1={EGG.cx} y1={650} x2={EGG.cx} y2={700} at={c.makes - 20} color={INK_SOFT} width={5} />
				</g>
				{/* the ring of generations: painted cells */}
				{ring.map((p, i) => {
					const a = [c.halves, c.restores, c.stays][i];
					const q = prog(f, a, 14);
					return (
						<g key={i} opacity={q}>
							<Cell cx={p[0]} cy={p[1]} rx={78} />
							<circle cx={p[0]} cy={p[1]} r={34} fill="#fffdf8" stroke={INK} strokeWidth={3} opacity={0.94} />
							<text x={p[0]} y={p[1] + 14} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40}} fill={INK}>46</text>
						</g>
					);
				})}
				<DrawPath d="M1575,430 C1640,490 1660,540 1655,568" at={c.restores + 6} dur={26} color={AMBER_INK} width={6} />
				<DrawPath d="M1570,700 C1520,730 1470,730 1430,705" at={c.stays + 4} dur={26} color={AMBER_INK} width={6} />
				<DrawPath d="M1320,575 C1320,510 1370,455 1420,430" at={c.gen} dur={26} color={AMBER_INK} width={6} />
				<g opacity={prog(f, c.restores + 28, 6)}><path d="M1643,544 L1655,570 L1669,546" fill="none" stroke={AMBER_INK} strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" /></g>
				<g opacity={prog(f, c.stays + 28, 6)}><path d="M1452,688 L1428,705 L1452,722" fill="none" stroke={AMBER_INK} strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" /></g>
				<g opacity={prog(f, c.gen + 24, 6)}><path d="M1392,436 L1420,430 L1408,458" fill="none" stroke={AMBER_INK} strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" /></g>
			</Overlay>
			<Hand at={c.fert + 20} out={c.joins + 30} x={EGG.cx - 450} y={160} size={48} w={900} color={AMBER_INK}><span style={{display: 'block', textAlign: 'center'}}>each gamete brings one set</span></Hand>
			<Hand at={c.joins + 40} x={EGG.cx - 450} y={160} size={44} w={900} color={INK_SOFT}><span style={{display: 'block', textAlign: 'center'}}>fertilised egg</span></Hand>
			<Hand at={c.p23} x={EGG.cx - 260} y={710} size={80} w={520} color={INK}><span style={{display: 'block', textAlign: 'center'}}>23 + 23 = 46</span></Hand>
			<Hand at={c.again + 6} x={96} y={830} size={38} w={1100} color={INK_SOFT}>now plum and teal mean the cell's two sets: one from each gamete</Hand>
			<Hand at={c.halves} x={1230} y={170} size={46} w={640} color={AMBER_INK}>meiosis halves</Hand>
			<Hand at={c.restores} x={1230} y={226} size={46} w={640} color={AMBER_INK}>fertilisation restores</Hand>
			<Hand at={c.stays + 14} x={1230} y={770} size={40} w={640} color={AMBER_INK}>the number stays the same in every generation</Hand>
			<TrackStrip at={0} />
		</>
	);
};
