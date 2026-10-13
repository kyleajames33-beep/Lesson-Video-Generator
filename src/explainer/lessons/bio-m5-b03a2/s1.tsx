import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Callout} from '../../kit';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, Brain, DrawPath, Dots, EggDot, EggMark, Enter, Fade, FONT_DISPLAY, FONT_HAND, Hand, Heading, INK, INK_SOFT, Label, MilkGland, Overlay, Pill, PIT, prog, PROLACTIN, S, Scribble,
	SLATE, SLATE_INK, TractPair, TR, tt, TEAL, TEAL_INK, VIOLET, along, pathOf, traceD, Vein, VIOLET_INK,
} from './shared';

// ---------- 1. Hook ----------
const HP = {x: 420, y: 300, w: 1080};
const MONTHS = 9;
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('hook'), {
		placenta: 'the placenta', egg: 'an egg is released', month: 'about once a month', q: 'So what stops', nine: 'nine months', labour: 'why does labour', stronger: 'only get stronger',
		milk: 'make milk and move it', two: 'Two of the answers',
	});
	const m = tt(HP);
	const path = TR.eggPath.map(p => m(p[0], p[1]));
	const eggAt = [c.egg, c.egg + 36, c.egg + 72];
	const bx = (i: number) => HP.x + i * 106;
	const SY = 896;
	const recapOut = c.egg - 24;
	const grey = prog(f, c.placenta + 10, 14);
	const light = prog(f, c.placenta, 14);
	const pillStyle = (col: string, o = 1): React.CSSProperties => ({fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 28, color: INK, background: '#fffdf8', border: `3px solid ${col}`, borderRadius: 999, padding: '2px 18px', whiteSpace: 'nowrap', opacity: o});
	return (
		<>
			<Heading items={[[c.q, 'What holds a pregnancy steady, then makes labour build?']]} size={76} />
			<Enter at={4} out={recapOut} style={{position: 'absolute', left: 96, top: 200}}>
				<div style={{display: 'flex', alignItems: 'center', gap: 10, opacity: 0.8}}>
					<span style={pillStyle(TEAL)}>embryo</span>
					<span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 30, color: TEAL_INK}}>hCG</span>
					<span style={pillStyle('#b9b3a8', 1 - 0.4 * grey)}>corpus luteum</span>
					<span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 30, color: AMBER_INK}}>progesterone</span>
					<span style={pillStyle(AMBER)}>lining</span>
					<span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 30, color: INK_SOFT}}>then</span>
					<span style={{...pillStyle(TEAL, 0.35 + 0.65 * light), boxShadow: light > 0.5 ? '0 0 0 5px rgba(42,157,143,0.25)' : undefined}}>placenta</span>
				</div>
			</Enter>
			<div style={{position: 'absolute', inset: 0, opacity: prog(f, 20, 24)}}><TractPair p={HP} /></div>
			<Overlay>
				{eggAt.map((a, i) => {
					const t = prog(f, a, 66);
					if (f < a || t >= 1) return null;
					const [ex, ey] = along(path, t);
					return <EggMark key={i} x={ex} y={ey} r={15} o={Math.min(1, t * 6) * Math.min(1, (1 - t) * 6)} />;
				})}
				{Array.from({length: MONTHS}, (_, i) => {
					const at = i < 3 ? c.month - 10 + i * 6 : c.nine + (i - 3) * 8;
					const lit = i < 3 ? prog(f, eggAt[i] + 20, 10) : 0;
					return (
						<g key={i} opacity={prog(f, at, 12)}>
							<rect x={bx(i)} y={SY} width={100} height={44} rx={8} fill={lit > 0.5 ? '#fbe3a7' : '#fffdf8'} stroke={INK_SOFT} strokeWidth={3} />
							<text x={bx(i) + 50} y={SY + 32} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 24}} fill={INK_SOFT}>{`month ${i + 1}`}</text>
						</g>
					);
				})}
				<g opacity={prog(f, c.nine + 40, 14)}><path d={`M${bx(0)},${SY + 60} L${bx(8) + 100},${SY + 60}`} stroke={AMBER} strokeWidth={6} strokeLinecap="round" /><text x={bx(8) + 100} y={SY + 108} textAnchor="end" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 38}} fill={AMBER_INK}>about nine months</text></g>
				<DrawPath d={traceD(1580, 640, 280, 100, 'grow', 4)} at={c.labour} dur={70} color={VIOLET_INK} width={5} />
				<Label x={1720} y={700} at={c.stronger} text="contractions" size={42} color={VIOLET_INK} />
				<g opacity={prog(f, c.milk, 14)}>
					<MilkGland x={1540} y={720} s={0.4} fill={0.7} draw={prog(f, c.milk, 24)} idp="hk" />
					<circle cx={1810} cy={770} r={13} fill={PROLACTIN} stroke="#fff" strokeWidth={2} /><circle cx={1850} cy={810} r={13} fill={VIOLET} stroke="#fff" strokeWidth={2} />
				</g>
			</Overlay>
			<Hand at={c.nine} x={470} y={580} size={250} color={AMBER}>?</Hand>
			<Pill at={c.two + 24} x={1400} y={940} size={42}>two loops, then two jobs</Pill>
		</>
	);
};

// ---------- 2a. What gets an egg started (FSH and LH) ----------
const FP = {x: 240, y: 400, w: 1100};
export const SceneFshLh: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('fsh-lh'), {
		pit: 'hormones from the pituitary', gland: 'a small gland', fsh: 'FSH makes', hold: 'the small sac', grow: 'grow', surge: 'a surge of LH', rise: 'a sudden rise', release: 'release its egg',
		ovul: 'which is called ovulation', cl: 'becomes the corpus luteum', prog: 'which makes progesterone',
	});
	const m = tt(FP);
	const fol = m(TR.follicle[0], TR.follicle[1]);
	const route: [number, number][] = [[PIT[0] - 16, PIT[1] + 26], [1500, 330], [1000, 310], [620, 350], [470, 450], [fol[0] + 6, fol[1] - 20]];
	const eggPath = TR.eggPath.map(p => m(p[0], p[1]));
	const grow = prog(f, c.fsh, c.grow - c.fsh + 10);
	const gone = prog(f, c.release, 14);
	const r = (16 + 24 * grow) * (1 + 0.08 * Math.sin(f / 5)) * (1 - gone);
	const [ex, ey] = along(eggPath, prog(f, c.release + 8, 80));
	const clp = prog(f, c.cl, 16);
	const colX = 1370, colW = 500;
	return (
		<>
			<Heading items={[[0, 'What gets an egg started']]} size={72} />
			<div style={{position: 'absolute', inset: 0, opacity: prog(f, 0, 20)}}><TractPair p={FP} /></div>
			<Overlay>
				<Brain at={c.pit - 24} />
				<Vein d={pathOf(route)} at={c.pit - 6} dur={40} o={0.8} />
				<Dots pts={route} at={c.pit} n={7} period={90} color={SLATE} r={11} end={c.release} />
				<Scribble cx={PIT[0]} cy={PIT[1]} rx={46} ry={34} at={c.gland} color={AMBER} seed={4} width={6} />
				<Callout from={[PIT[0] - 40, PIT[1] + 4]} to={[1480, 205]} at={c.gland} text="pituitary" sub="a small gland at the base of the brain" color={SLATE_INK} align="right" size={52} />
				<circle cx={fol[0]} cy={fol[1]} r={r} fill="none" stroke={SLATE} strokeWidth={6} opacity={prog(f, c.fsh, 10)} />
				<circle cx={fol[0]} cy={fol[1]} r={38} fill="#f2c81f" opacity={0.55 * clp} />
				{f >= c.release + 8 && f < c.release + 90 ? <EggMark x={ex} y={ey} r={14} o={Math.min(1, prog(f, c.release + 8, 8))} /> : null}
				<Fade at={c.hold} out={c.surge - 8}><Callout from={[fol[0] - 10, fol[1] + 10]} to={[110, 800]} at={c.hold} text="follicle" sub="the sac that holds an egg" color={INK} size={54} /></Fade>
				<Dots pts={[[fol[0], fol[1]], [330, 540], [290, 470]]} at={c.prog} n={3} period={50} color={AMBER} r={9} />
				<g opacity={prog(f, c.surge - 10, 14)}>
					<DrawPath d="M1400,640 L1400,900 L1850,900" at={c.surge - 10} dur={20} color={INK} width={5} />
					<text x={1380} y={770} textAnchor="middle" transform="rotate(-90,1380,770)" style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 28}} fill={INK_SOFT}>LH level</text>
					<DrawPath d="M1410,880 L1520,880 C1570,880 1580,870 1610,690 C1640,870 1660,880 1720,880 L1840,880" at={c.surge + 4} dur={36} color={SLATE} width={8} />
				</g>
				<Label x={1625} y={672} at={c.rise} text="surge: a sudden rise" size={42} color={SLATE_INK} />
			</Overlay>
			<Hand at={c.fsh} out={c.surge - 8} x={colX} y={440} w={colW} size={52} color={SLATE_INK}>FSH: the follicle grows</Hand>
			<Hand at={c.ovul} out={c.cl - 8} x={colX} y={430} w={colW} size={50} color={INK}>ovulation: the egg is released</Hand>
			<Hand at={c.ovul + 40} out={c.cl - 8} x={colX} y={540} w={colW} size={50} color={SLATE_INK}>LH: the egg is released</Hand>
			<Hand at={c.cl} x={colX} y={440} w={colW} size={50} color={AMBER_INK}>corpus luteum</Hand>
			<Hand at={c.prog} x={colX} y={500} w={colW} size={50} color={AMBER_INK}>makes progesterone</Hand>
		</>
	);
};
