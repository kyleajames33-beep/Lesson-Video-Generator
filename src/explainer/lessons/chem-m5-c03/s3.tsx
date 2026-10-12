import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, DrawPath, Enter, FONT_DISPLAY, FONT_HAND, HandText, INK, INK_SOFT, Mark, prog, scribbleEllipse} from '../../kit';
import {cues} from '../../cues';
import {BARS, Bars, BathTint, CobaltTube, FWD, Fade, HeatIcon, IRON_SP, IronKey, IronTube, LENS, MiniBars, NetArrowH, Overlay, Pill, RxnChip, SlotRings, SpeciesLens, StageTable, SvgText, TEAL, Thermometer, coW, ghostTrain, slotXY} from './parts';
import type {TRow} from './parts';
import {CLC, CLC_INK, COBLUE, COBLUE_INK, ChemH, ChemSvg, FE_INK, HEAT, Heading, PINK, PINK_INK, RED_INK, SCN_INK, kf, sc} from './common';
import {Tally, BoardTube, lensTint} from './s1';
import {CO_BLUEC, CO_PINKC, CO_PURPLEC} from './parts';

const HEADS = [{text: 'Fe^3+', color: FE_INK}, {text: 'SCN^-', color: SCN_INK}, {text: 'FeSCN^2+', color: RED_INK}];
const CHIP_L = [{t: 'Fe^3+', color: FE_INK}, {t: '+'}, {t: 'SCN^-', color: SCN_INK}];
const CHIP_R = [{t: 'FeSCN^2+', color: RED_INK}];

// ---------- 5. Taking a substance away ----------
const K7 = cues(sc('removal'), {fresh: 'fresh tube', drops: 'few drops', silver: 'silver nitrate', lock: 'lock thiocyanate', white: 'white solid', four: 'four of the ten', six: 'six are left', slows: 'slows', tenths: 'six tenths', eighteen: 'eighteen', splitting: 'Splitting', untouched: 'untouched', stays: 'stays at thirty', reverse: 'Now reverse', splitFaster: 'split faster', fades: 'fades', left: 'shift is to the left', toward: 'toward what', part: 'part of the way'});
export const SceneRemoval: React.FC = () => {
	const f = useCurrentFrame();
	const REMOVED = [6, 7, 8, 9];
	const counts = (t: number) => [10, t < K7.white + 6 ? 10 : 6, 10];
	const pr = kf(f, [[K7.splitFaster, 0], [K7.part + 40, 1]]);
	const fwd = f < K7.reverse ? kf(f, [[K7.slows, 30], [K7.eighteen + 10, 18]]) : 18 + 8 * pr;
	const rev = 30 - 4 * pr;
	const tubeT = f < K7.fades - 10 ? 0.35 : 0.35 - 0.35 * prog(f, K7.fades - 10, 120);
	const gapNow = fwd - rev;
	const ghosts = [...ghostTrain(K7.fresh, K7.slows, 34, 'join', [0, 4, 8, 2, 10, 6]), ...ghostTrain(K7.fresh + 17, K7.slows, 34, 'split', [5, 9, 7, 11]), ...ghostTrain(K7.slows, K7.reverse, 44, 'join', [0, 4, 8, 2]), ...ghostTrain(K7.slows, K7.reverse, 34, 'split', [5, 9, 7, 11]), ...ghostTrain(K7.reverse, 2400, 60, 'join', [0, 4, 8]), ...ghostTrain(K7.reverse + 10, 2400, 20, 'split', [5, 9, 7, 11, 3, 1, 6])];
	const rows: TRow[] = [
		{label: 'at equilibrium', at: -100, cells: [['10', -100], ['10', -100], ['10', -100], ['30', -100], ['30', -100]], gap: ['0', -100]},
		{label: 'just after taking out', at: K7.four, cells: [['10', K7.four], ['6', K7.six], ['10', K7.six + 8], ['18', K7.eighteen + 8], ['30', K7.stays + 4]], gap: ['-12', K7.reverse + 8]},
		{label: 'settles, about', at: K7.part - 20, color: TEAL, cells: [['11.5', K7.part], ['7.5', K7.part + 8], ['8.5', K7.part + 16], ['26', K7.part + 24], ['26', K7.part + 24]], gap: ['0', K7.part + 40]},
	];
	const xr = BARS.x0 + BARS.gx + BARS.w / 2;
	const LAD = {x: 770, y0: 690, unit: 38, v0: 5};
	const ly = (v: number) => LAD.y0 - (v - LAD.v0) * LAD.unit;
	const recover = prog(f, K7.part, 40);
	const curV = f < K7.part ? 6 : 6 + 1.5 * recover;
	return (
		<>
			<Heading text="Taking a substance away" at={4} />
			<BoardTube t={tubeT} at={-100} label={f >= K7.fades ? 'paler' : 'fresh tube'} />
			<Overlay>
				<SpeciesLens cx={LENS.cx} cy={LENS.cy} r={LENS.r} counts={counts} species={IRON_SP} ghosts={ghosts} tint={lensTint(tubeT)} seed={7} />
				{/* the four thiocyanate ions that get locked away turn into white specks and sink */}
				{REMOVED.map((idx, k) => {
					const t0 = K7.white;
					const u = Math.max(0, Math.min(1, (f - t0) / 50));
					if (f < K7.lock) return null;
					const p0 = slotXY(7, 1, idx, Math.min(f, t0), LENS.cx, LENS.cy, LENS.r);
					if (f < t0 + 6) return null;
					const px = LENS.cx - 54 + k * 36, py = LENS.cy + LENS.r * 0.74 - (k % 2) * 14;
					const x = p0.x + (px - p0.x) * u, y = p0.y + (py - p0.y) * u * u;
					return <rect key={idx} x={x - 11} y={y - 9} width={22} height={18} rx={4} fill="#ffffff" stroke={SCN_INK} strokeWidth={3} transform={`rotate(${k * 17} ${x} ${y})`} />;
				})}
				<SlotRings cx={LENS.cx} cy={LENS.cy} r={LENS.r} type={1} slots={REMOVED} at={K7.lock} out={K7.white + 6} seed={7} color={SCN_INK} />
								<IronKey x={110} y={868} at={-100} counts={counts} countsAt={-100} />
				<Fade at={K7.white + 40}><SvgText x={LENS.cx} y={LENS.cy + LENS.r - 30} text="white solid" size={30} color={INK_SOFT} anchor="middle" at={K7.white + 40} hand={false} weight={700} /></Fade>
				{/* a few drops of silver nitrate */}
				<Fade at={K7.drops} out={K7.white + 60}>
					<path d={`M${LENS.cx - 14},206 L${LENS.cx - 14},250 L${LENS.cx},276 L${LENS.cx + 14},250 L${LENS.cx + 14},206 Z`} fill="#fffdf8" stroke={INK} strokeWidth={4} strokeLinejoin="round" />
					{[0, 1, 2].map(i => { const u = ((f - K7.silver) / 36 + i * 0.33) % 1; return f >= K7.silver ? <circle key={i} cx={LENS.cx} cy={290 + u * 60} r={9} fill="#cfd6df" stroke={INK} strokeWidth={3} opacity={1 - u * u} /> : null; })}
					<SvgText x={LENS.cx + 44} y={236} text="few drops of silver nitrate," size={34} color={INK_SOFT} at={K7.drops} hand={false} weight={600} /><SvgText x={LENS.cx + 44} y={278} text="so the volume hardly changes" size={34} color={AMBER_INK} at={K7.drops + 10} hand={false} weight={600} />
				</Fade>
				<Bars fwd={fwd} rev={rev} at={-100} scale={6.2} fwdLabel={f >= K7.part + 40 ? '26' : undefined} revLabel={f >= K7.part + 40 ? '26' : undefined} />
				<Fade at={K7.tenths} out={K7.reverse - 10}><SvgText x={890} y={500} text="30 × 6/10" size={54} color={FWD} anchor="middle" at={K7.tenths} /></Fade>
				<Fade at={K7.eighteen} out={K7.reverse - 10}><SvgText x={890} y={566} text="= 18" size={62} color={FWD} anchor="middle" at={K7.eighteen} /></Fade>
				<Fade at={K7.untouched} out={K7.reverse}><DrawPath d={scribbleEllipse(xr, BARS.base - 30 * 6.2 - 40, 92, 48, 6)} at={K7.untouched} dur={20} color={AMBER_INK} width={6} /></Fade>
				<NetArrowH gap={gapNow} at={K7.reverse} zeroAt={K7.part + 60} lines={[{text: 'more split', at: K7.splitFaster}, {text: 'than join', at: K7.splitFaster + 8}]} />
				<Pill x={96} y={190} w={600} text="the response" at={K7.reverse} out={K7.part + 60} color={TEAL} size={34} h={56} />
				{/* the thiocyanate ladder: 10, then 6, then about 7.5, never back to 10 */}
				<Fade at={K7.reverse + 10}>
					<ChemSvg x={LAD.x - 60} y={734} text="thiocyanate, SCN^- (units)" size={30} color={SCN_INK} hand={false} at={K7.reverse + 10} />
					<path d={`M${LAD.x},${ly(5)} L${LAD.x},${ly(11)}`} stroke={INK} strokeWidth={5} strokeLinecap="round" />
					{[6, 7.5, 10].map(v => <g key={v}><path d={`M${LAD.x - 12},${ly(v)} L${LAD.x + 12},${ly(v)}`} stroke={INK} strokeWidth={4} /><SvgText x={LAD.x - 24} y={ly(v) + 12} text={String(v)} size={34} color={INK_SOFT} anchor="end" hand={false} /></g>)}
					<circle cx={LAD.x} cy={ly(10)} r={13} fill="#9097a0" stroke={INK} strokeWidth={3} opacity={0.5} />
					<circle cx={LAD.x} cy={ly(curV)} r={14} fill="#9097a0" stroke={INK} strokeWidth={4} />
					<SvgText x={LAD.x + 40} y={ly(6) + 12} text="took out 4: down to 6" size={30} color={SCN_INK} hand={false} at={K7.reverse + 14} />
				</Fade>
				<Fade at={K7.part}>
					<path d={`M${LAD.x + 20},${ly(6) - 10} Q${LAD.x + 40},${ly(6.8)} ${LAD.x + 20},${ly(7.4) + 6}`} fill="none" stroke={TEAL} strokeWidth={5} strokeLinecap="round" />
					<SvgText x={LAD.x + 56} y={ly(7.5) + 12} text="back to about 7.5" size={30} color={TEAL} hand={false} at={K7.part + 10} />
				</Fade>
				<Fade at={K7.part + 30}>
					<path d={`M${LAD.x},${ly(10)} L${LAD.x + 230},${ly(10)}`} stroke={RED_INK} strokeWidth={5} strokeDasharray="12 9" />
					<SvgText x={LAD.x + 30} y={ly(10) - 12} text="not back to 10" size={34} color={RED_INK} at={K7.part + 36} />
				</Fade>
				<StageTable rows={rows} at={-100} heads={HEADS} gapAt={-100} />
			</Overlay>
			<RxnChip x={1020} y={92} at={-100} left={CHIP_L} right={CHIP_R} size={38} fwdLit={-100} revLit={-100} fwdWordAt={-100} revWordAt={-100} words={false} fwdTag={undefined} revTag={f >= K7.left ? {text: 'shift left', at: K7.left, color: AMBER_INK} : undefined} />
			<Overlay>
				<SvgText x={1020} y={286} text="toward what we took away, and only part of the way" size={30} color={AMBER_INK} at={K7.toward} hand={false} weight={600} />
			</Overlay>
		</>
	);
};
void AMBER; void Enter; void FONT_DISPLAY; void FONT_HAND; void HandText; void IronTube; void IronKey;

// ---------- 6. The principle ----------
const K8 = cues(sc('principle'), {term: "Le Chatelier's principle", shifts: 'shifts in the direction', partly: 'partly cancels', rates: 'what the rates do', one: 'alters one rate', close: 'close in', adding: 'adding a substance', away: 'away from it', removing: 'removing a substance', toward: ['toward it', 1]});
const Card: React.FC<{x: number; y: number; w: number; h: number; at: number; children: React.ReactNode}> = ({x, y, w, h, at, children}) => (
	<Enter at={at} style={{position: 'absolute', left: x, top: y, width: w, height: h}}>
		<div style={{width: w, height: h, background: '#fffdf8', borderRadius: 24, border: '1.5px solid rgba(60,45,20,0.08)', boxShadow: '0 18px 40px rgba(60,45,20,0.10)', position: 'relative'}}>{children}</div>
	</Enter>
);
export const ScenePrinciple: React.FC = () => {
	const f = useCurrentFrame();
	const barJump = kf(f, [[K8.one, 30], [K8.one + 30, 52]]);
	return (
		<>
			<Heading text="The pattern has a name" at={4} />
			<div style={{position: 'absolute', left: 96, top: 188}}><HandText text="Le Chatelier's principle" at={K8.term} size={104} color={TEAL} cps={18} /></div>
			<div style={{position: 'absolute', left: 100, top: 310, width: 1500, opacity: prog(f, K8.partly - 40, 14), fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 44, color: INK, lineHeight: 1.2}}>
				A disturbed equilibrium <span style={{color: TEAL}}>shifts to partly cancel</span> the change.
			</div>
			<RxnChip x={96} y={410} at={K8.rates - 20} left={CHIP_L} right={CHIP_R} size={44} fwdLit={K8.adding} revLit={K8.removing} words={false} />
			<Enter at={K8.rates} style={{position: 'absolute', left: 790, top: 416, width: 470}}>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, color: INK, lineHeight: 1.1, position: 'relative', display: 'inline-block'}}>
					In these examples, it is what the rates do
					<svg width="100%" height={14} viewBox="0 0 100 14" preserveAspectRatio="none" style={{position: 'absolute', left: 0, bottom: -12}}><DrawPath d="M2,8 Q50,0 98,8" at={K8.rates + 20} dur={16} color={AMBER} width={6} /></svg>
				</div>
			</Enter>
			<Enter at={K8.one} style={{position: 'absolute', left: 1290, top: 410}}>
				<MiniBars fw={Math.min(96, (barJump / 52) * 96)} rv={56} w={180} />
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 34, color: INK_SOFT, textAlign: 'center', width: 180, marginTop: 4}}>one rate jumps</div>
			</Enter>
			<Overlay>
				{/* only partly: the cancelling arrow stops short of the start line */}
				<Fade at={K8.partly}>
					<path d="M1570,430 L1570,540" stroke={INK_SOFT} strokeWidth={4} strokeDasharray="8 7" />
					<SvgText x={1570} y={414} text="start" size={32} color={INK_SOFT} anchor="middle" at={K8.partly} />
					<path d="M1850,486 L1660,486 M1684,466 L1658,486 L1684,506" fill="none" stroke={TEAL} strokeWidth={8} strokeLinecap="round" strokeLinejoin="round" />
					<SvgText x={1720} y={580} text="stops short" size={36} color={TEAL} anchor="middle" at={K8.partly + 14} />
				</Fade>
			</Overlay>
			<Card x={96} y={600} w={800} h={330} at={K8.adding}>
				<div style={{position: 'absolute', left: 26, top: 22, opacity: 1}}><IronTube x={0} y={0} h={280} t={1} /></div>
				<div style={{position: 'absolute', left: 150, top: 24}}>
					<HandText text="add" at={K8.adding} size={64} color={INK} cps={26} />{' '}<ChemH text="Fe^3+" size={64} color={FE_INK} hand />
				</div>
				<Enter at={K8.away} style={{position: 'absolute', left: 150, top: 124}}>
					<svg width={120} height={60} viewBox="0 0 120 60"><path d="M4,30 L100,30 M80,12 L102,30 L80,48" fill="none" stroke={FWD} strokeWidth={9} strokeLinecap="round" strokeLinejoin="round" /></svg>
				</Enter>
				<Enter at={K8.away} style={{position: 'absolute', left: 290, top: 126}}>
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 60, color: FWD}}>shift right</div>
				</Enter>
				<Enter at={K8.away + 10} style={{position: 'absolute', left: 150, top: 214, width: 600}}>
					<div style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 34, color: INK_SOFT, lineHeight: 1.2}}>away from the substance we added; the red deepens</div>
				</Enter>
			</Card>
			<Card x={960} y={600} w={800} h={330} at={K8.removing}>
				<div style={{position: 'absolute', left: 26, top: 22}}><IronTube x={0} y={0} h={280} t={0} /></div>
				<div style={{position: 'absolute', left: 150, top: 24}}>
					<HandText text="remove" at={K8.removing} size={64} color={INK} cps={26} />{' '}<ChemH text="SCN^-" size={64} color={SCN_INK} hand />
				</div>
				<Enter at={K8.toward} style={{position: 'absolute', left: 150, top: 124}}>
					<svg width={120} height={60} viewBox="0 0 120 60"><path d="M116,30 L20,30 M40,12 L18,30 M40,48 L18,30" fill="none" stroke={AMBER} strokeWidth={9} strokeLinecap="round" strokeLinejoin="round" /></svg>
				</Enter>
				<Enter at={K8.toward} style={{position: 'absolute', left: 290, top: 126}}>
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 60, color: AMBER_INK}}>shift left</div>
				</Enter>
				<Enter at={K8.toward + 10} style={{position: 'absolute', left: 150, top: 214, width: 600}}>
					<div style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 34, color: INK_SOFT, lineHeight: 1.2}}>toward what we took away; the red fades</div>
				</Enter>
			</Card>
		</>
	);
};
void CLC; void COBLUE; void COBLUE_INK; void PINK; void PINK_INK; void CO_BLUEC; void CO_PINKC; void CO_PURPLEC; void HEAT;

// ---------- 7a. A reaction that takes in heat (cobalt) ----------
const K9 = cues(sc('heat-cobalt'), {different: 'different kind', pink: ['pink cobalt', 1], pink2: ['pink cobalt', 2], chloride: ['chloride ions', 2], blue: ['blue ion', 1], water: ['plus water', 1], takes: 'takes in heat', endo: 'endothermic', gives: 'gives out', exo: 'exothermic', room: 'room temperature', purple: 'purple'});
export const COBALT_L = [{t: '[Co(H_2O)_6]^2+', color: PINK_INK, dot: CO_PINKC, cap: 'pink ion'}, {t: '+'}, {t: '4Cl^-', color: CLC_INK, cap: 'chloride'}];
export const COBALT_R = [{t: '[CoCl_4]^2-', color: COBLUE_INK, dot: CO_BLUEC, cap: 'blue ion'}, {t: '+'}, {t: '6H_2O', color: INK_SOFT, cap: 'water'}];
export const SceneHeatCobalt: React.FC = () => {
	const f = useCurrentFrame();
	const TH = 700;
	const s = 1;
	const cobaltL = COBALT_L.map((p, i) => ({...p, at: [K9.pink2, undefined, K9.chloride][i]}));
	const cobaltR = COBALT_R.map((p, i) => ({...p, at: [K9.blue, undefined, K9.water][i]}));
	return (
		<>
			<Heading text="A reaction that takes in heat" at={4} />
			<CobaltTube x={96} y={200} h={TH} s={s} opacity={prog(f, K9.different, 22)} />
			<Overlay>
				<Thermometer x={500} y={260} h={560} temp={20} at={K9.room} />
				<Fade at={K9.pink}><SvgText x={96} y={192} text="pink cobalt ions in chloride" size={32} color={PINK_INK} at={K9.pink} hand={false} weight={600} /></Fade>
			</Overlay>
			<RxnChip x={620} y={196} at={K9.pink2 - 20} left={cobaltL} right={cobaltR} size={40} fwdLit={K9.takes} revLit={K9.gives} fwdTag={{text: 'takes in heat', at: K9.takes, icon: 'in'}} revTag={{text: 'gives out heat', at: K9.gives, icon: 'out'}} words={false} capPad={34} />
			<Enter at={K9.endo} style={{position: 'absolute', left: 640, top: 470, width: 560}}>
				<div style={{background: '#fffdf8', borderRadius: 22, padding: '18px 110px 18px 26px', border: `3px solid ${HEAT}`, boxShadow: '0 12px 28px rgba(60,45,20,0.10)'}}>
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 56, color: HEAT}}>endothermic</div>
					<div style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 32, color: INK, lineHeight: 1.2}}>takes in heat from the surroundings</div>
				</div>
			</Enter>
			<Enter at={K9.exo} style={{position: 'absolute', left: 1240, top: 470, width: 560}}>
				<div style={{background: '#fffdf8', borderRadius: 22, padding: '18px 110px 18px 26px', border: `3px solid ${HEAT}`, boxShadow: '0 12px 28px rgba(60,45,20,0.10)'}}>
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 56, color: HEAT}}>exothermic</div>
					<div style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 32, color: INK, lineHeight: 1.2}}>gives out the same amount of heat</div>
				</div>
			</Enter>
			<Overlay>
				<HeatIcon x={1140} y={548} dir="in" at={K9.endo + 10} size={0.5} />
				<HeatIcon x={1740} y={582} dir="out" at={K9.exo + 10} size={0.5} />
				<defs><linearGradient id="co-strip" x1="0" x2="1"><stop offset="0" stopColor={CO_PINKC} /><stop offset="0.5" stopColor={CO_PURPLEC} /><stop offset="1" stopColor={CO_BLUEC} /></linearGradient></defs>
				<g opacity={prog(f, K9.room - 10, 14)}>
					<rect x={700} y={740} width={1040} height={44} rx={22} fill="url(#co-strip)" stroke={INK} strokeWidth={4} />
					<circle cx={1220} cy={762} r={34} fill={CO_PURPLEC} stroke={INK} strokeWidth={5} opacity={prog(f, K9.purple, 14)} />
					<text x={700} y={830} fill={PINK_INK} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40}}>mostly pink ion</text>
					<text x={1220} y={830} textAnchor="middle" fill={INK_SOFT} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40}} opacity={prog(f, K9.purple, 14)}>room temperature: a mix, purple</text>
					<text x={1740} y={830} textAnchor="end" fill={COBLUE_INK} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40}}>mostly blue ion</text>
				</g>
			</Overlay>
		</>
	);
};
void INK; void PINK;

// ---------- 7b. Warming it ----------
const K10 = cues(sc('warming'), {warm: 'we warm', bath: 'hot water bath', noConc: 'no concentration changes', rates: 'changes the rates', energy: 'enough energy', common: 'much more common', needs: 'needs more energy', gains: 'gains the most', both: 'both rates go up', more: ['goes up more', 1]});
const BIG = {x: 96, y: 200, h: 700};
export const SceneWarming: React.FC = () => {
	const f = useCurrentFrame();
	const temp = kf(f, [[K10.warm, 20], [K10.bath + 90, 70]]);
	const bath = prog(f, K10.bath, 40);
	const fwd = f < K10.more ? kf(f, [[K10.both, 30], [K10.both + 30, 38]]) : kf(f, [[K10.more, 38], [K10.more + 40, 50]]);
	const rev = kf(f, [[K10.both, 30], [K10.both + 30, 38]]);
	const CX = 790, CY = 380, CW = 380;
	// collision strip: slow bumps do nothing, hard bumps react
	const slow = f >= K10.energy && f < K10.common;
	const fast = f >= K10.common;
	const period = fast ? 44 : 100;
	const t0 = fast ? K10.common : K10.energy;
	const u = ((f - t0) % period) / period;
	const approach = Math.min(1, u / 0.5);
	const ease = approach * approach * (3 - 2 * approach);
	const hit = u >= 0.5;
	const ax = CX - 125 + 85 * ease, bx = CX + 125 - 85 * ease;
	const bounce = slow && hit ? Math.min(1, (u - 0.5) / 0.35) : 0;
	const merged = fast && hit;
	const mu = Math.min(1, (u - 0.5) / 0.5);
	const ghost = (x: number, y: number, r: number, c: string) => <circle cx={x} cy={y} r={r} fill={c} stroke={INK} strokeWidth={4} />;
	const xr = BARS.x0 + BARS.gx + BARS.w / 2;
	const top = (v: number) => BARS.base - v * 6.2;
	return (
		<>
			<Heading text="Warming it" at={4} />
			<CobaltTube x={BIG.x} y={BIG.y} h={BIG.h} s={1} />
			<BathTint x={BIG.x} y={BIG.y} h={BIG.h} kind="hot" amount={bath} />
			<Overlay>
				<Thermometer x={500} y={260} h={560} temp={temp} at={-100} />
				<Pill x={620} y={186} w={470} text="no concentration changes" at={K10.noConc} out={K10.rates + 60} color={TEAL} size={36} h={58} />
				<Fade at={K10.noConc} out={K10.rates + 60}>
					<DrawPath d={scribbleEllipse(BIG.x + coW(BIG.h) * 0.49, BIG.y + BIG.h * 0.6, 110, 250, 3)} at={K10.noConc} dur={26} color={TEAL} width={6} />
				</Fade>
				{/* collision strip card */}
				<g opacity={prog(f, K10.energy - 20, 16)}>
					<rect x={CX - CW / 2} y={CY - 160} width={CW} height={330} rx={26} fill="#fffdf8" stroke="rgba(60,45,20,0.15)" strokeWidth={2.5} />
					<text x={CX} y={CY - 112} textAnchor="middle" fill={INK} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44}}>a collision</text>
					{!merged ? <>{ghost(ax - (slow && hit ? 60 * bounce : 0), CY, 36, CO_PINKC)}{ghost(bx + (slow && hit ? 60 * bounce : 0), CY, 22, '#6cb58a')}</> : null}
					{merged ? <g opacity={1 - mu * mu}><circle cx={CX} cy={CY} r={22 + 90 * mu} fill="none" stroke={HEAT} strokeWidth={7} opacity={1 - mu} />{ghost(CX + 140 * mu, CY, 38, CO_BLUEC)}</g> : null}
					<text x={CX} y={CY + 108} textAnchor="middle" fill={slow ? INK_SOFT : HEAT} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42}}>{slow ? 'slow: no reaction' : fast ? 'hard: reaction' : ''}</text>
					<text x={CX} y={CY + 150} textAnchor="middle" fill={INK_SOFT} style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 26}}>{f >= K10.needs ? 'forward needs a hard bump' : ''}</text>
				</g>
				<Bars fwd={fwd} rev={rev} at={K10.rates - 30} scale={6.2} />
							</Overlay>
			<Overlay>
				<Fade at={K10.more}>
					<path d={`M${BARS.x0 - 40},${top(30)} L${BARS.x0 - 40},${top(50) + 10}`} stroke={FWD} strokeWidth={9} strokeLinecap="round" />
					<path d={`M${BARS.x0 - 62},${top(50) + 34} L${BARS.x0 - 40},${top(50)} L${BARS.x0 - 18},${top(50) + 34}`} fill="none" stroke={FWD} strokeWidth={9} strokeLinecap="round" strokeLinejoin="round" />
					<SvgText x={BARS.x0 - 60} y={top(40) + 12} text="gains more" size={30} color={FWD} anchor="end" at={K10.more + 6} />
					<path d={`M${xr + 90},${top(30)} L${xr + 90},${top(38) + 8}`} stroke={AMBER} strokeWidth={9} strokeLinecap="round" />
					<path d={`M${xr + 68},${top(38) + 30} L${xr + 90},${top(38)} L${xr + 112},${top(38) + 30}`} fill="none" stroke={AMBER} strokeWidth={9} strokeLinecap="round" strokeLinejoin="round" />
					<SvgText x={xr + 120} y={top(34) + 14} text="gains less" size={38} color={AMBER_INK} at={K10.more + 12} />
				</Fade>
				<Fade at={K10.gains}>
					<SvgText x={1130} y={216} text="heating helps the heat-absorbing reaction most" size={32} color={HEAT} at={K10.gains} hand={false} weight={600} />
				</Fade>
			</Overlay>
		</>
	);
};
void Mark; void LENS; void NetArrowH; void StageTable; void SlotRings; void SpeciesLens; void IRON_SP; void BoardTube; void RED_INK;
