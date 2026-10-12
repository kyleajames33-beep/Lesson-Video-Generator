import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER_INK, DrawPath, Enter, FONT_DISPLAY, FONT_HAND, HandText, INK, INK_SOFT, prog, scribbleEllipse} from '../../kit';
import {cues} from '../../cues';
import {Bars, BARS, ColourStrip, FlaskThumb, FWD, Fade, IRON_SP, IronKey, IronTube, LENS, NetArrowH, Overlay, Pill, RxnChip, SlotRings, SpeciesLens, StageTable, SvgText, TEAL, ghostTrain, ironW} from './parts';
import type {TRow} from './parts';
import {ChemH, ChemSvg, FE, FE_INK, Heading, IRON_TINT_DEEP, IRON_TINT_PALE, RED, RED_INK, SCN, SCN_INK, hexMix, kf, sc} from './common';

export const lensTint = (t: number) => hexMix(IRON_TINT_PALE, IRON_TINT_DEEP, t);
/** Live tallies of the three ions above the lens. */
export const Tally: React.FC<{counts: (f: number) => number[]; at: number; y?: number}> = ({counts, at, y = 336}) => {
	const f = useCurrentFrame();
	const c = counts(f).map(Math.round);
	return (
		<>
			<ChemSvg x={118} y={y} text={`${c[0]} Fe^3+`} size={40} color={FE_INK} at={at} />
			<ChemSvg x={318} y={y} text={`${c[1]} SCN^-`} size={40} color={SCN_INK} at={at} />
			<ChemSvg x={508} y={y} text={`${c[2]} FeSCN^2+`} size={40} color={RED_INK} at={at} />
		</>
	);
};
/** Painted iron tube on the right edge of the iron board. */
export const BoardTube: React.FC<{t: number; at: number; label?: string}> = ({t, at, label}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 16);
	const h = 520;
	return (
		<>
			<IronTube x={1700} y={175} h={h} t={t} opacity={o} />
			{label ? <div style={{position: 'absolute', left: 1640, top: 175 + h + 8, width: 270, textAlign: 'center', fontFamily: FONT_HAND, fontWeight: 700, fontSize: 32, color: INK_SOFT, opacity: o}}>{label}</div> : null}
			<div style={{position: 'absolute', left: 1700 + ironW(h) / 2 - 3, top: 175 + h - 4, width: 0, height: 0}} />
		</>
	);
};
const CHIP_L = [{t: 'Fe^3+', color: FE_INK}, {t: '+'}, {t: 'SCN^-', color: SCN_INK}];
const CHIP_R = [{t: 'FeSCN^2+', color: RED_INK}];

// ---------- 1. Hook ----------
const K1 = cues(sc('hook'), {tube: 'test tube', fe: ['iron three plus', 1], scn: ['thiocyanate', 1], red: ['a red ion', 1], hour: 'sat for an hour', joining: 'joining', splitting: 'splitting', equal: 'equal rates', dyn: 'dynamic equilibrium', sealed: 'sealed flask', escape: 'escape', drop: 'Now we drop', crystals: 'crystals', add: 'add more iron', watch: 'Watch the', colour: 'colour', deepens: 'deepens', how: 'how does', change: 'when we change', way: 'which way'});
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const deep = kf(f, [[K1.colour + 6, 0], [K1.deepens + 60, 1]]);
	const push = 1 + 0.07 * prog(f, 0, 900);
	const TX = 910, TY = 200, TH = 700;
	const tw = ironW(TH);
	const cx = TX + tw * 0.5;
	// crystals fall into the tube mouth, then dissolve in the liquid
	const crystals = [0, 1, 2, 3, 4].map(i => {
		const t0 = K1.crystals + i * 9;
		const u = (f - t0) / 40;
		return {i, u, x: cx + (i - 2) * 9, y: 130 + Math.max(0, Math.min(1, u)) * 330};
	});
	const cards: {y: number; at: number; t: string; sw: string; name: string; hollow?: boolean; color: string}[] = [
		{y: 205, at: K1.fe, t: 'Fe^3+', sw: FE, name: 'iron three plus ions, pale yellow', color: FE_INK},
		{y: 311, at: K1.scn, t: 'SCN^-', sw: '#ffffff', name: 'thiocyanate ions, colourless', hollow: true, color: SCN_INK},
		{y: 417, at: K1.red, t: 'FeSCN^2+', sw: RED, name: 'the red ion', color: RED_INK},
	];
	return (
		<>
			<Heading text="What does an equilibrium do when we disturb it?" at={6} size={64} />
			{cards.map((c, i) => (
				<Enter key={i} at={c.at} style={{position: 'absolute', left: 96, top: c.y, width: 740}}>
					<div style={{display: 'flex', alignItems: 'center', gap: 22, background: '#fffdf8', borderRadius: 20, padding: '12px 24px', boxShadow: '0 12px 28px rgba(60,45,20,0.10)', border: '1.5px solid rgba(60,45,20,0.08)'}}>
						<div style={{flex: 'none', width: 46, height: 46, borderRadius: 999, background: c.sw, border: `4px solid ${INK}`}} />
						<div style={{flex: 'none', width: 190}}><ChemH text={c.t} size={50} color={c.color} /></div>
						<div style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 30, color: INK, lineHeight: 1.15}}>{c.name}</div>
					</div>
				</Enter>
			))}
			<RxnChip x={96} y={540} at={K1.red + 20} left={CHIP_L} right={CHIP_R} size={50} fwdLit={K1.joining} revLit={K1.splitting} fwdWordAt={K1.joining} revWordAt={K1.splitting} />
			{[['How does a settled mixture', K1.how, 730], ['respond when we change it?', K1.change, 796], ['Which way does it go?', K1.way, 862]].map(([t, at, y]) => (
				<div key={t as string} style={{position: 'absolute', left: 96, top: y as number}}><HandText text={t as string} at={at as number} size={54} color={TEAL} cps={24} /></div>
			))}
			<div style={{position: 'absolute', left: 0, top: 0, width: 1920, height: 1080, transformOrigin: `${cx}px ${TY + TH * 0.55}px`, transform: `scale(${push})`}}>
				<IronTube x={TX} y={TY} h={TH} t={deep} opacity={prog(f, K1.tube - 20, 20)} />
				<Overlay>
					{crystals.map(c => {
						const live = c.u > 0 && c.u < 1.35;
						const inLiquid = c.u > 0.95;
						return live ? <rect key={c.i} x={c.x - 9} y={c.y} width={18} height={18} rx={3} fill={FE} stroke={FE_INK} strokeWidth={3} opacity={inLiquid ? Math.max(0, 1 - (c.u - 0.95) * 2.6) : 1} transform={`rotate(${c.i * 25} ${c.x} ${c.y})`} /> : null;
					})}
					<Fade at={K1.add}><ChemSvg x={1280} y={300} text="add more Fe^3+" size={60} color={FE_INK} hand={false} at={K1.add} weight={700} /><SvgText x={1280} y={356} text="a few crystals, dissolved" size={40} color={INK_SOFT} at={K1.add + 10} /></Fade>
				</Overlay>
			</div>
			<Overlay>
				<Fade at={K1.hour} out={K1.sealed - 10}>
					<circle cx={1330} cy={330} r={58} fill="#fffdf8" stroke={INK} strokeWidth={6} />
					<path d="M1330,330 L1330,288 M1330,330 L1360,346" stroke={INK} strokeWidth={6} strokeLinecap="round" />
					<SvgText x={1330} y={430} text="an hour" size={46} color={INK_SOFT} anchor="middle" />
					<SvgText x={1330} y={480} text="same pale red" size={46} color={INK_SOFT} anchor="middle" />
				</Fade>
				<Pill x={1180} y={560} w={330} text="equal rates" at={K1.equal} out={K1.sealed - 10} color={TEAL} size={42} h={60} />
				<Pill x={1180} y={640} w={440} text="dynamic equilibrium" at={K1.dyn} out={K1.sealed - 10} color={TEAL} size={42} h={60} />
				<ColourStrip x={1280} y={560} w={520} from={'#f1c9b6'} to={'#a8242c'} t={deep} at={K1.watch} label="" mark={0} h={44} />
				<SvgText x={1280} y={640} text="before" size={40} color={INK_SOFT} at={K1.watch} />
				<SvgText x={1800} y={640} text="after" size={40} color={RED_INK} anchor="end" at={K1.deepens} />
				<Fade at={K1.deepens}><SvgText x={1540} y={760} text="the colour deepens" size={64} color={RED_INK} anchor="middle" at={K1.deepens} /></Fade>
			</Overlay>
			<FlaskThumb x={1330} y={190} w={520} at={K1.sealed} out={K1.escape + 24} />
		</>
	);
};

// ---------- 2a. The tube at equilibrium ----------
const K2 = cues(sc('tube-equilibrium'), {scale: 'made-up scale', both: 'Both rates', thirty: 'thirty', steady: 'steady', tenUnits: 'ten units', thio: ['thiocyanate', 1], redIon: ['red ion', 1], joining: 'Joining', fwd: 'forward reaction', splitting: 'splitting', rev: ['reverse', 1]});
export const SceneTubeEq: React.FC = () => {
	const f = useCurrentFrame();
	const counts = () => [10, 10, 10];
	const bar = kf(f, [[K2.both, 0], [K2.thirty + 10, 30]]);
	const ghosts = [...ghostTrain(K2.both, 1500, 34, 'join', [0, 4, 8, 2, 10, 6, 1, 3]), ...ghostTrain(K2.both + 17, 1500, 34, 'split', [5, 9, 7, 11])];
	const rows: TRow[] = [{label: 'at equilibrium', at: K2.tenUnits - 6, cells: [['10', K2.tenUnits + 6], ['10', K2.thio], ['10', K2.redIon], ['30', K2.thirty + 8], ['30', K2.thirty + 16]], gap: ['0', K2.steady + 6]}];
	const yy = (v: number) => BARS.base - v * 6.2;
	const lockO = prog(f, K2.steady, 14);
	return (
		<>
			<Heading text="The tube at equilibrium" at={4} />
			<BoardTube t={0} at={4} label="pale red, steady" />
			<Overlay>
				<SpeciesLens cx={LENS.cx} cy={LENS.cy} r={LENS.r} counts={counts} species={IRON_SP} ghosts={ghosts} reveal={prog(f, 6, 24)} tint={lensTint(0)} />
								<IronKey x={110} y={868} at={4} counts={counts} countsAt={K2.tenUnits} />
				<Pill x={700} y={236} w={600} text="made-up numbers to show the pattern" at={K2.scale} color={INK_SOFT} size={32} h={56} />
				<Bars fwd={bar} rev={bar} at={K2.both - 8} scale={6.2} fwdLabel={f >= K2.thirty ? '30' : ''} revLabel={f >= K2.thirty ? '30' : ''} />
				<g opacity={lockO}>
					<path d={`M${BARS.x0 + BARS.w},${yy(30)} L${BARS.x0 + BARS.gx},${yy(30)}`} stroke={TEAL} strokeWidth={6} strokeDasharray="10 8" />
					<text x={BARS.x0 + (BARS.gx + BARS.w) / 2} y={yy(30) - 80} textAnchor="middle" fill={TEAL} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 56}}>equal</text>
				</g>
				<NetArrowH gap={0} at={K2.steady - 6} zeroAt={K2.steady} />
				<StageTable rows={rows} at={K2.tenUnits - 12} heads={[{text: 'Fe^3+', color: FE_INK}, {text: 'SCN^-', color: SCN_INK}, {text: 'FeSCN^2+', color: RED_INK}]} />
			</Overlay>
			<RxnChip x={1020} y={92} at={K2.scale - 40} left={CHIP_L} right={CHIP_R} size={38} fwdLit={K2.fwd} revLit={K2.rev} fwdWordAt={K2.joining} revWordAt={K2.splitting} />
		</>
	);
};

// ---------- 2b. The moment of the change ----------
const K3 = cues(sc('moment-of-change'), {add: 'we add', seven: 'seven units', solid: 'as solid', meet: ['to meet', 1], speeds: 'speeds up', seventeen: 'seventeen', fiftyOne: 'fifty-one', splitting: 'Splitting', stays: 'stays', nothing: 'nothing has reacted', match: 'no longer match'});
export const SceneMoment: React.FC = () => {
	const f = useCurrentFrame();
	const counts = (t: number) => [kf(t, [[K3.seven, 10], [K3.seven + 42, 17]], false), 10, 10];
	const fwd = kf(f, [[K3.seventeen, 30], [K3.fiftyOne + 10, 51]]);
	const ghosts = [...ghostTrain(K3.seven + 50, K3.speeds, 34, 'join', [0, 4, 8, 2]), ...ghostTrain(K3.speeds, 1500, 20, 'join', [0, 4, 8, 2, 10, 6, 1, 3]), ...ghostTrain(K3.seven + 55, 1500, 34, 'split', [5, 9, 7, 11])];
	const rows: TRow[] = [
		{label: 'at equilibrium', at: -100, cells: [['10', -100], ['10', -100], ['10', -100], ['30', -100], ['30', -100]], gap: ['0', -100]},
		{label: 'just after adding', at: K3.seven, cells: [['17', K3.seven + 30], ['10', K3.seven + 40], ['10', K3.seven + 46], ['51', K3.fiftyOne + 8], ['30', K3.stays + 4]], gap: ['21', K3.match + 6]},
	];
	const xr = BARS.x0 + BARS.gx + BARS.w / 2;
	return (
		<>
			<Heading text="The moment of the change" at={4} />
			<BoardTube t={0} at={-100} label="colour unchanged" />
			<Overlay>
				<SpeciesLens cx={LENS.cx} cy={LENS.cy} r={LENS.r} counts={counts} species={IRON_SP} ghosts={ghosts} tint={lensTint(0)} />
								<IronKey x={110} y={868} at={-100} counts={counts} countsAt={-100} />
				<SlotRings cx={LENS.cx} cy={LENS.cy} r={LENS.r} type={0} slots={[10, 11, 12, 13, 14, 15, 16]} at={K3.seven + 20} out={K3.meet} />
				<Fade at={K3.seven}>
					<path d={`M${LENS.cx},262 L${LENS.cx},338 M${LENS.cx - 20},316 L${LENS.cx},340 L${LENS.cx + 20},316`} fill="none" stroke={FE_INK} strokeWidth={7} strokeLinecap="round" strokeLinejoin="round" />
					<ChemSvg x={LENS.cx + 34} y={314} text="+ 7 Fe^3+" size={46} color={FE_INK} at={K3.seven} />
				</Fade>
				<Pill x={96} y={190} w={780} text="added as solid, so the volume hardly changes" at={K3.solid} out={K3.nothing - 30} color={AMBER_INK} size={34} h={56} />
				<Pill x={96} y={190} w={900} text="the instant after adding, before the reaction responds" at={K3.nothing} color={TEAL} size={34} h={56} />
				<Bars fwd={fwd} rev={30} at={-100} scale={6.2} bracketAt={K3.match} />
				<SvgText x={890} y={500} text="30 × 17/10" size={54} color={FWD} anchor="middle" at={K3.seventeen} />
				<SvgText x={890} y={566} text="= 51" size={62} color={FWD} anchor="middle" at={K3.fiftyOne} />
				<Fade at={K3.stays}><DrawPath d={scribbleEllipse(xr, BARS.base - 30 * 6.2 - 40, 92, 48, 6)} at={K3.stays} dur={20} color={AMBER_INK} width={6} /></Fade>
				<Fade at={K3.stays}><SvgText x={xr} y={BARS.base - 30 * 6.2 - 110} text="not touched" size={38} color={AMBER_INK} anchor="middle" at={K3.stays + 4} /></Fade>
				<StageTable rows={rows} at={-100} heads={[{text: 'Fe^3+', color: FE_INK}, {text: 'SCN^-', color: SCN_INK}, {text: 'FeSCN^2+', color: RED_INK}]} gapAt={K3.match} />
			</Overlay>
			<RxnChip x={1020} y={92} at={-100} left={CHIP_L} right={CHIP_R} size={38} fwdLit={-100} revLit={-100} fwdWordAt={-100} revWordAt={-100} />
		</>
	);
};
void FWD; void NetArrowH; void FE; void SCN; void RED; void Enter; void FONT_DISPLAY; void INK; void StageTable;
