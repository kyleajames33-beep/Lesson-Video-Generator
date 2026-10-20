import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {
	AMBER_INK, Arrow, CELL_FILL, CELL_LINE, Coin, Col, DrawPath, FONT_DISPLAY, FONT_HAND, GreyTag, Hand, Heading, INK, INK_SOFT, lerp, Overlay, Pill, prog, S,
} from './shared';
import {HCell, HChrom} from '../bio-m5-b05a/cd';

// Revision 7: the combination models are the clean coded diagram (outline cells, large chromosomes). No rows of tiny bars:
// the "almost never match" gametes and the fertilisation gametes carry a count and a colour key (which parent each
// chromosome came from), not 23 drawn chromosomes.
const MiniBar: React.FC<{x: number; y: number; h?: number; col: Col; o?: number; w?: number}> = ({x, y, h = 40, col, o = 1, w = 10}) => (o > 0.01 ? <HChrom x={x} y={y + h * 0.08} len={h} w={Math.max(9, w * 1.1)} col={col} o={o} disc={0.9} /> : null);
const Cell: React.FC<{cx: number; cy: number; rx: number; ry?: number; o?: number}> = ({cx, cy, rx, ry, o = 1}) => <HCell cx={cx} cy={cy} rx={rx} ry={ry} o={o} sw={3.5} />;
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
const SX = (col: number) => 760 + col * 165;
const SY = (row: number) => 290 + row * 200;
const SlotCell: React.FC<{cx: number; cy: number; l: Col; s: Col; m?: Col; mO?: number; o?: number; scale?: number}> = ({cx, cy, l, s, m, mO = 1, o = 1, scale = 1}) => (
	<g opacity={o} transform={`translate(${cx},${cy}) scale(${scale})`}>
		<HCell cx={0} cy={0} rx={68} sw={4} />
		<MiniBar x={m ? -22 : -10} y={0} h={70} col={l} w={11} />
		<MiniBar x={m ? 0 : 12} y={6} h={46} col={s} w={11} />
		{m ? <MiniBar x={22} y={3} h={56} col={m} w={11} o={mO} /> : null}
	</g>
);
const fmt = (n: number) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
const MIX1 = Array.from({length: 23}, (_, j) => (j * 7 % 3 === 0 ? 'T' : 'P')) as Col[];
const MIX2 = MIX1.map((c, j) => (j % 2 === 0 ? (c === 'P' ? 'T' : 'P') : c)) as Col[];

export const SceneCombinations: React.FC = () => {
	const f = useCurrentFrame();
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
		return <MiniBar x={lerp(from[0], to[0], t)} y={lerp(from[1], to[1], t)} h={h} col={col} w={11} />;
	};
	return (
		<>
			<Heading items={[[0, 'How many combinations?']]} size={60} />
			<Overlay>
				{/* two pairs and their coins */}
				<g opacity={prog(f, c.how + 20, 14)}>
					<HChrom x={175} y={300} len={96} w={16} col="P" />
					<HChrom x={225} y={300} len={96} w={16} col="T" />
					<HChrom x={175} y={530} len={64} w={16} col="P" />
					<HChrom x={225} y={530} len={64} w={16} col="T" />
				</g>
				{!coin1b ? <Coin x={200} y={205} from={c.dir} to={c.dir + 34} face="P" o={prog(f, c.dir - 8, 8)} /> : <Coin x={200} y={205} from={c.own} to={c.own + 36} face="T" o={coinOut} />}
				{!coin1b ? <Coin x={200} y={440} from={c.goes} to={c.goes + 34} face="P" o={prog(f, c.goes - 8, 8)} /> : <Coin x={200} y={440} from={c.own + 10} to={c.own + 46} face="P" o={coinOut} />}
				{/* gamete 1 and gamete 2 */}
				<Cell cx={470} cy={330} rx={96} ry={110} o={prog(f, c.goes, 14)} />
				<Cell cx={470} cy={610} rx={96} ry={110} o={prog(f, c.own + 30, 14)} />
				{bar([175, 300], [446, 330], c.goes + 18, 'P', 70)}
				{bar([175, 530], [498, 352], c.gam, 'P', 46)}
				{bar([225, 300], [446, 610], c.own + 36, 'T', 70)}
				{bar([175, 530], [498, 632], c.own + 50, 'P', 46)}
				{/* the grid of mini gametes */}
				{slots4.map((sl, i) => {
					const p = prog(f, slotsAt(i), 14);
					return <SlotCell key={i} cx={SX(sl.col)} cy={SY(sl.row)} l={sl.l} s={sl.s} m={third > 0.01 ? 'P' : undefined} mO={third} o={p} scale={0.7 + 0.3 * p} />;
				})}
				{slots4.map((sl, i) => <SlotCell key={'n' + i} cx={SX(sl.col + 2)} cy={SY(sl.row)} l={sl.l} s={sl.s} m="T" o={grow} scale={0.7 + 0.3 * grow} />)}
				{/* the third pair arrives */}
				<g opacity={third}>
					<HChrom x={175} y={760} len={80} w={16} col="P" />
					<HChrom x={225} y={760} len={80} w={16} col="T" />
				</g>
			</Overlay>
			<Hand at={c.dir} out={c.tt} x={240} y={168} size={28} w={380} color={INK_SOFT}>coin: which partner goes?</Hand>
			<Hand at={c.mult} x={96} y={372} size={40} w={260} color={AMBER_INK}>2 ways</Hand>
			<Hand at={c.mult + 8} x={96} y={578} size={40} w={260} color={AMBER_INK}>2 ways</Hand>
			<Hand at={c.npairs + 8} x={96} y={822} size={40} w={300} color={AMBER_INK}>and a third pair</Hand>
			{slots4.map((sl, i) => (
				<Hand key={i} at={slotsAt(i) + 8} out={c.npairs - 4} x={SX(sl.col) - 100} y={SY(sl.row) + 74} size={26} w={200} color={INK_SOFT}><span style={{display: 'block', textAlign: 'center', fontFamily: FONT_DISPLAY, fontWeight: 600}}>{`gamete ${i + 1}`}</span></Hand>
			))}
			<Hand at={c.is4} out={c.npairs - 4} x={1160} y={300} size={150} color={AMBER_INK}>4</Hand>
			<Hand at={c.pow - 20} x={1330} y={200} size={130} color={AMBER_INK}>8</Hand>
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
					<Cell cx={1480} cy={640} rx={104} ry={96} />
					<Cell cx={1720} cy={640} rx={104} ry={96} />
					{[1480, 1720].map((x, g) => <text key={g} x={x} y={652} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 52}} fill={INK}>23</text>)}
					<Key x={1480} y={748} mix={MIX1.slice(0, 12)} cw={15} />
					<Key x={1720} y={748} mix={MIX2.slice(0, 12)} cw={15} />
				</g>
			</Overlay>
			<Hand at={c.never} x={1380} y={800} size={44} color={AMBER_INK}>almost never match</Hand>
			<TrackStrip at={c.how} />
		</>
	);
};

// ---------- 12. Fertilisation and continuity ----------
/** One set of 23: a count in the gamete's set colour (no drawn bars). */
const SetBars: React.FC<{cx: number; cy: number; col: Col; o?: number; scale?: number}> = ({cx, cy, col, o = 1}) => (
	<g opacity={o}>
		<text x={cx} y={cy + 26} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 80}} fill={col === 'P' ? '#7e3a69' : '#1f7a6f'}>23</text>
		<text x={cx} y={cy + 66} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 30}} fill={INK_SOFT}>one set</text>
	</g>
);
export const SceneFertilisation: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('fertilisation'), {
		fert: 'Fertilisation joins', joins: 'joins', p23: '23 plus 23', makes: 'makes 46', again: 'again', halves: 'Meiosis halves', restores: 'fertilisation restores', stays: 'stays the same', gen: 'every generation',
	});
	const m = prog(f, c.joins + 6, 56);
	const gx1 = lerp(430, 700, m), gx2 = lerp(1010, 700, m);
	const gmo = 1 - prog(f, c.joins + 44, 14);
	const z = prog(f, c.joins + 40, 20);
	const ring = [[1500, 390], [1360, 650], [1640, 650]];
	return (
		<>
			<Heading items={[[0, 'Fertilisation restores the number']]} size={60} />
			<Overlay>
				<g opacity={gmo}>
					<Cell cx={gx1} cy={430} rx={150} ry={120} />
					<Cell cx={gx2} cy={430} rx={150} ry={120} />
					<SetBars cx={gx1} cy={430} col="P" />
					<SetBars cx={gx2} cy={430} col="T" />
				</g>
				<g opacity={z}>
					<Cell cx={700} cy={430} rx={270} ry={175} />
					<text x={700} y={452} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 80}}><tspan fill="#7e3a69">23</tspan><tspan fill={INK}> + </tspan><tspan fill="#1f7a6f">23</tspan></text>
					<text x={700} y={510} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 32}} fill={INK_SOFT}>two sets: matching pairs</text>
				</g>
				<g opacity={prog(f, c.p23 + 14, 14)}>
					<Arrow x1={700} y1={625} x2={700} y2={680} at={c.makes - 20} color={INK_SOFT} width={5} />
				</g>
				{/* the ring of generations */}
				{ring.map((p, i) => {
					const a = [c.halves, c.restores, c.stays][i];
					const q = prog(f, a, 14);
					return (
						<g key={i} opacity={q}>
							<circle cx={p[0]} cy={p[1]} r={64} fill={CELL_FILL} stroke={CELL_LINE} strokeWidth={5} />
							<text x={p[0]} y={p[1] + 16} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 48}} fill={INK}>46</text>
						</g>
					);
				})}
				<DrawPath d="M1555,430 C1620,490 1640,550 1640,580" at={c.restores + 6} dur={26} color={AMBER_INK} width={6} />
				<DrawPath d="M1590,680 C1540,720 1470,720 1420,690" at={c.stays + 4} dur={26} color={AMBER_INK} width={6} />
				<DrawPath d="M1330,590 C1330,520 1380,470 1440,440" at={c.gen} dur={26} color={AMBER_INK} width={6} />
				<g opacity={prog(f, c.restores + 28, 6)}><path d="M1630,556 L1640,582 L1654,558" fill="none" stroke={AMBER_INK} strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" /></g>
				<g opacity={prog(f, c.stays + 28, 6)}><path d="M1440,672 L1418,690 L1442,708" fill="none" stroke={AMBER_INK} strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" /></g>
				<g opacity={prog(f, c.gen + 24, 6)}><path d="M1414,444 L1442,438 L1430,466" fill="none" stroke={AMBER_INK} strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" /></g>
			</Overlay>
			<Hand at={c.fert + 20} out={c.joins + 30} x={560} y={600} size={48} w={900} color={AMBER_INK}><span style={{display: 'block', textAlign: 'center'}}>each gamete brings one set</span></Hand>
			<Hand at={c.p23} x={520} y={690} size={74} w={360} color={INK}><span style={{display: 'block', textAlign: 'center'}}>23 + 23 = 46</span></Hand>
			<Hand at={c.again + 6} x={96} y={795} size={36} w={1000} color={INK_SOFT}>now plum and teal mean the cell's two sets: one from each gamete</Hand>
			<Hand at={c.halves} x={1230} y={170} size={46} w={640} color={AMBER_INK}>meiosis halves</Hand>
			<Hand at={c.restores} x={1230} y={226} size={46} w={640} color={AMBER_INK}>fertilisation restores</Hand>
			<Hand at={c.stays + 14} x={1230} y={760} size={40} w={640} color={AMBER_INK}>the number stays the same in every generation</Hand>
			<TrackStrip at={0} />
		</>
	);
};
