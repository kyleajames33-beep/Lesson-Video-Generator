// Scenes 6 to 10: cool and thin in front (the painted lamp, the painted vapour cell with the cool-gas particle box
// inside, sodium's two levels, the dark pair matched to the bright pair, re-emission in all directions, then the Sun),
// reflected sunlight (Sun, Moon and the painted paper sheet feeding the painted spectroscope; both strips the Sun's),
// the three rules with the memory card, the investigation (three painted sources on a bench, the spectroscope moving,
// the scale view, the results table, the safety chip) and attempt 1 (the discharge tube with the reference card).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading, kf} from '../../math/studio';
import {MemoryCard, QuestionScene, Accent} from '../../shared/scenes';
import {INK} from '../../shared/tokens';
import {Chip, CrossedChip} from '../../physics/projectile/board';
import {Arrow} from '../../physics/light/em';
import {EnergyLadder, LightPath, SpectrumStrip, nmX} from '../../physics/light/spectrum';
import {ANCHOR, Disc, LAMP, LPlate, MOON, PAPER_SHEET, SPECTRO, SUN, TUBE, VCELL, anchorAt, placeByAnchor} from '../../physics/light/plates';
import {ACCENT, HE_CARD, H_CARD, H_LINES, NA_LINES, NE_CARD, SUN_LINES, UNKNOWN, HE_LINES, NE_LINES, cap, cue, hold} from './common';
import {BoxDots, Connectors, EHT, GREY, LIGHT, LIGHT_INK, Lbl, NAVY, ROSE, StripRow, coolGas, ehtSwitch} from './parts';

type Pt = [number, number];
const SUN_STR = [0.6, 0.5, 0.6, 0.8, 0.6, 0.5, 0.9, 0.9, 0.9];

// ---------- 6. cool and thin in front: dark lines ----------
const LP6 = {x: 96, y: 300, w: 230};
const COIL6 = anchorAt(LAMP, LP6, ANCHOR.lampCoil[0], ANCHOR.lampCoil[1]);
const AXY = COIL6[1];
const CELL6 = placeByAnchor(VCELL, 711, ANCHOR.cellAxisY, 430, AXY, 380);
const SL6: Pt = [1000, AXY];
const SP6 = placeByAnchor(SPECTRO, ANCHOR.spectroSlit[0], ANCHOR.spectroSlit[1], SL6[0], SL6[1], 400);
const AB6 = {x: 300, y: 620, w: 1300, h: 80};
const EM6 = {x: 300, y: 770, w: 1300, h: 60};
export const S06: React.FC = () => {
	const id = 'absorption';
	const f = useCurrentFrame();
	const low = cue(id, 'Cool atoms sit in their lowest energy level'), up = cue(id, 'electrons jumping up'), lines = cue(id, "sodium's bright yellow lines"), alld = cue(id, 'given out again, but in all directions'), dark = cue(id, 'the line looks dark'), sun = cue(id, 'The Sun works the same way'), fr = cap(id, cue(id, 'Joseph von Fraunhofer'));
	const toSun = prog(f, sun, 24);
	const s6 = CELL6.w / (VCELL.box[2] - VCELL.box[0]);
	const win = {x: CELL6.x + (740 - VCELL.box[0]) * s6, y: CELL6.y + (180 - VCELL.box[1]) * s6};
	const cellC: Pt = [win.x + 90, AXY];
	const jump = prog(f, up, 20);
	return (
		<>
			<SceneHeading text="How do different sources produce different spectral patterns?" at={-200} size={48} />
			<FrameSvg>
				<g opacity={1 - toSun}><LPlate spec={LAMP} p={LP6} /></g>
				{toSun > 0.001 ? <g opacity={toSun}>
					<Disc spec={SUN} cx={210} cy={AXY} d={230} />
					<path d={`M${210 + 70},${AXY - 100} A110,110 0 0 1 ${210 + 70},${AXY + 100}`} fill="none" stroke={INK} strokeWidth={0} />
				</g> : null}
				<LightPath pts={[[COIL6[0] + 40, AXY], SL6]} color={LIGHT} width={6} />
				<g opacity={1 - toSun}>
					<LPlate spec={VCELL} p={CELL6} />
					<BoxDots run={coolGas()} x={win.x + 6} y={win.y + 4} scale={0.58} color="#e3b400" />
				</g>
				{f >= alld && f < sun ? <g opacity={prog(f, alld, 12) * (1 - prog(f, dark + 30, 14))}>{Array.from({length: 8}, (_, i) => { const a = (i * Math.PI) / 4 + 0.3; return <Arrow key={i} from={cellC} to={[cellC[0] + 120 * Math.cos(a), cellC[1] + 120 * Math.sin(a)]} color={ROSE.stroke} width={4} head={14} />; })}<Arrow from={cellC} to={[cellC[0] + 170, cellC[1]]} color={ROSE.stroke} width={4} head={14} /></g> : null}
				<LPlate spec={SPECTRO} p={SP6} />
				<g opacity={prog(f, low, 14) * (1 - toSun)}>
					<EnergyLadder x={1500} w={260} top={250 - 73} bot={470} levels={[1, 2]} color={NAVY.stroke} electron={{from: 1, to: 2, u: jump, color: ROSE.stroke}} />
					{f >= up && jump < 1 ? <path d={`M1360,${400} q20,-14 40,0 t40,0 t40,0`} fill="none" stroke="#e6b800" strokeWidth={5} opacity={1 - jump} /> : null}
				</g>
				<SpectrumStrip s={AB6} kind="absorption" lines={toSun > 0.5 ? SUN_LINES : NA_LINES} strengths={toSun > 0.5 ? SUN_STR : undefined} reveal={prog(f, 6, 30)} lineW={toSun > 0.5 ? 5 : 8} />
				{f >= lines && f < sun ? <g opacity={prog(f, lines, 14) * (1 - prog(f, sun - 10, 12))}>
					<SpectrumStrip s={{...EM6, x: kf(f, [[lines, 1920], [lines + 30, EM6.x]])}} kind="emission" lines={NA_LINES} lineW={8} />
					<Connectors a={AB6} b={EM6} lines={[589.3]} opacity={prog(f, lines + 34, 12)} />
					<path d={`M${nmX(AB6, 589.3) + 30},${AB6.y + AB6.h + 6} h16 V${EM6.y} h-16`} fill="none" stroke={INK} strokeWidth={4} opacity={prog(f, lines + 40, 12)} />
				</g> : null}
				{toSun > 0.001 ? <g opacity={toSun}>
					<path d={`M${210 + 135},${AXY - 120} A160,160 0 0 1 ${210 + 135},${AXY + 120}`} fill="none" stroke={LIGHT} strokeWidth={6} strokeDasharray="10 8" />
				</g> : null}
			</FrameSvg>
			<Lbl x={CELL6.x + CELL6.w / 2} y={AXY - 120} at={0} out={sun} color={GREY.ink} size={28} anchor="middle">cool sodium vapour</Lbl>
			<Lbl x={SL6[0] + 200} y={AXY + 130} at={0} color={INK} size={26} anchor="middle">spectroscope</Lbl>
			<HandTag x={1500} y={520} text="cool: bottom level" at={low + 16} out={sun} size={32} color={NAVY.ink} />
			<Lbl x={1500} y={230} at={low} out={sun} color={NAVY.ink} size={26}>sodium's lowest two levels</Lbl>
			<Lbl x={AB6.x + AB6.w} y={AB6.y - 18} at={lines} out={sun} color={INK} size={26} anchor="end">dark pair at 589.0 and 589.6 nm</Lbl>
			<Lbl x={EM6.x - 16} y={EM6.y + 40} at={lines + 20} out={sun} color={INK} size={26} anchor="end">sodium (bright)</Lbl>
			<HandTag x={nmX(AB6, 589.3) + 60} y={EM6.y - 30} text="same places" at={lines + 44} out={sun} size={34} color={INK} />
			<Lbl x={cellC[0] - 40} y={AXY + 150} at={dark} out={sun} color={ROSE.ink} size={30}>dark, not empty</Lbl>
			<Lbl x={210} y={AXY + 150} at={sun + 10} color={INK} size={26} anchor="middle">hot dense layers</Lbl>
			<Lbl x={400} y={AXY - 150} at={sun + 20} color={LIGHT_INK} size={26}>cooler gas above</Lbl>
			<Chip x={300} y={860} at={fr} size={32} w={420} color={INK}>Fraunhofer lines</Chip>
		</>
	);
};

// ---------- 7. reflected sunlight ----------
const SUN7: Pt = [260, 330], MOON7: Pt = [960, 280];
const PAP7 = {x: 620, y: 640, w: 380};
const SL7: Pt = [1160, 560];
const SP7 = placeByAnchor(SPECTRO, ANCHOR.spectroSlit[0], ANCHOR.spectroSlit[1], SL7[0], SL7[1], 360);
const STA = {x: 1300, y: 220, w: 520, h: 56}, STB = {x: 1300, y: 340, w: 520, h: 56};
export const S07: React.FC = () => {
	const id = 'reflected-sunlight';
	const f = useCurrentFrame();
	const same = cue(id, 'same dark lines'), pat = cue(id, "carries the Sun's pattern"), never = cue(id, 'Never point a spectroscope at the Sun'), inst = cap(id, cue(id, 'or a cloud instead'));
	const pc: Pt = [PAP7.x + PAP7.w / 2, PAP7.y + 20];
	return (
		<>
			<SceneHeading text="How do different sources produce different spectral patterns?" at={-200} size={48} />
			<FrameSvg>
				<Disc spec={SUN} cx={SUN7[0]} cy={SUN7[1]} d={220} />
				<Disc spec={MOON} cx={MOON7[0]} cy={MOON7[1]} d={170} />
				<LPlate spec={PAPER_SHEET} p={PAP7} />
				<LightPath pts={[[SUN7[0] + 110, SUN7[1] - 10], [MOON7[0] - 85, MOON7[1]], SL7]} color={LIGHT} width={5} draw={prog(f, 4, 40)} />
				<LightPath pts={[[SUN7[0] + 80, SUN7[1] + 80], pc, SL7]} color={LIGHT} width={5} draw={prog(f, 20, 40)} />
				<LPlate spec={SPECTRO} p={SP7} />
				<g opacity={prog(f, same, 14)}>
					<SpectrumStrip s={STA} kind="absorption" lines={SUN_LINES} strengths={SUN_STR} lineW={4} />
					<SpectrumStrip s={STB} kind="absorption" lines={SUN_LINES} strengths={SUN_STR} lineW={4} />
					<Connectors a={STA} b={STB} lines={SUN_LINES} opacity={prog(f, same + 20, 12)} />
				</g>
				{f >= pat ? <Arrow from={[SUN7[0] + 120, SUN7[1] - 40]} to={[MOON7[0] - 100, MOON7[1] - 30]} color={LIGHT} width={4} head={18} dash="8 7" opacity={prog(f, pat, 12)} /> : null}
			</FrameSvg>
			<Lbl x={SUN7[0]} y={SUN7[1] + 150} at={0} color={INK} size={26} anchor="middle">Sun</Lbl>
			<Lbl x={MOON7[0]} y={MOON7[1] + 120} at={0} color={INK} size={26} anchor="middle">Moon</Lbl>
			<Lbl x={PAP7.x + PAP7.w / 2} y={PAP7.y + 110} at={0} color={INK} size={26} anchor="middle">white paper</Lbl>
			<Lbl x={STA.x} y={STA.y - 16} at={same} color={INK} size={26}>moonlight</Lbl>
			<Lbl x={STB.x} y={STB.y - 16} at={same} color={INK} size={26}>light from white paper</Lbl>
			<HandTag x={STB.x} y={STB.y + 110} text="the Sun's own lines" at={same + 20} size={34} color={INK} />
			<HandTag x={MOON7[0] - 300} y={MOON7[1] - 120} text="just sent back" at={pat + 10} size={32} color={LIGHT_INK} />
			<Lbl x={96} y={930} at={0} color={GREY.ink} size={26}>not to scale</Lbl>
			<CrossedChip x={96} y={760} at={pat} crossAt={pat + 16} size={28}>moonlight = the Moon's own emission spectrum</CrossedChip>
			<CrossedChip x={1100} y={700} at={never} crossAt={never + 14} size={30}>aim at the Sun</CrossedChip>
			<Lbl x={1100} y={800} at={never + 20} color="#b8322a" size={30}>never look at the Sun through it</Lbl>
			<Chip x={1100} y={840} at={inst} size={28} w={720} color={INK}>✓ use reflected light: white paper or a cloud</Chip>
		</>
	);
};

// ---------- 8. three rules ----------
const R8 = [530, 670, 810];
const ST8 = (i: number) => ({x: 820, y: R8[i] - 30, w: 900, h: 60});
export const S08: React.FC = () => {
	const id = 'three-rules';
	const f = useCurrentFrame();
	const hd = cue(id, 'Hot and dense, all colours'), ht = cue(id, 'Hot and thin, bright lines'), pl = cap(id, cue(id, 'in the same places'));
	const hi = (at: number) => (f >= at && f < at + 40 ? 1 : 0);
	return (
		<>
			<SceneHeading text="How do different sources produce different spectral patterns?" at={-200} size={48} />
			<FrameSvg>
				<LPlate spec={LAMP} p={{x: 180, y: R8[0] - 55, w: 95}} />
				<LPlate spec={TUBE} p={{x: 210, y: R8[1] - 60, w: 52}} />
				<LPlate spec={LAMP} p={{x: 120, y: R8[2] - 55, w: 95}} />
				<LPlate spec={VCELL} p={{x: 230, y: R8[2] - 40, w: 130}} />
				<SpectrumStrip s={ST8(0)} kind="continuous" />
				<SpectrumStrip s={ST8(1)} kind="emission" lines={H_LINES} />
				<SpectrumStrip s={ST8(2)} kind="absorption" lines={H_LINES} />
				{[hd, ht, pl].map((at, i) => hi(at) ? <rect key={i} x={ST8(i).x - 8} y={ST8(i).y - 8} width={ST8(i).w + 16} height={ST8(i).h + 16} fill="none" stroke={INK} strokeWidth={5} /> : null)}
				{f >= pl ? <Connectors a={ST8(1)} b={ST8(2)} lines={H_LINES} opacity={prog(f, pl, 12)} /> : null}
			</FrameSvg>
			<Lbl x={400} y={R8[0] + 10} at={0} color={INK} size={30}>hot and dense →</Lbl>
			<Lbl x={400} y={R8[1] + 10} at={0} color={INK} size={30}>hot and thin →</Lbl>
			<Lbl x={400} y={R8[2] + 10} at={0} color={INK} size={30}>cool and thin in front →</Lbl>
			<div style={{position: 'absolute', left: 300, top: 160, width: 1320}}>
				<MemoryCard at={hd} main={<>Hot and dense: all colours. Hot and thin: bright lines. Cool and thin in front: dark lines, same places.</>} />
			</div>
		</>
	);
};

// ---------- 9. doing the investigation ----------
const BENCH9 = 520;
const SRC9: Pt[] = [[220, BENCH9], [720, BENCH9], [1280, BENCH9]];
const EHT9 = {x: 800, y: 380, w: 240};
const VIEW9 = {x: 300, y: 600, w: 900, h: 60, nm0: 400, nm1: 700};
export const S09: React.FC = () => {
	const id = 'investigation';
	const f = useCurrentFrame();
	const scale = cue(id, 'wavelength scale'), rec = cue(id, 'record'), ref = cue(id, 'match them to reference spectra'), chg = cap(id, cue(id, 'before a tube is changed'));
	const stage = f < rec + 40 ? 0 : f < rec + 110 ? 1 : 2;
	const sx = kf(f, [[rec + 40, SRC9[0][0] + 110], [rec + 60, SRC9[1][0] + 90], [rec + 110, SRC9[1][0] + 90], [rec + 130, SRC9[2][0] + 200]]);
	const spP = placeByAnchor(SPECTRO, ANCHOR.spectroSlit[0], ANCHOR.spectroSlit[1], sx, BENCH9 - 70, 220);
	const sw = ehtSwitch(EHT9.x, EHT9.y, EHT9.w);
	const kinds = ['continuous', 'emission', 'absorption'] as const;
	const rows = [['filament lamp', 'continuous', 'none'], ['hydrogen tube', 'bright lines', '410, 434, 486, 656'], ['sunlight off paper', 'dark lines', '486, 589, 656, ...']];
	return (
		<>
			<SceneHeading text="How do different sources produce different spectral patterns?" at={-200} size={48} />
			<FrameSvg>
				<line x1={96} y1={BENCH9} x2={1820} y2={BENCH9} stroke="#8a8378" strokeWidth={5} />
				<LPlate spec={LAMP} p={{x: SRC9[0][0] - 90, y: BENCH9 - 210, w: 180}} />
				<LPlate spec={TUBE} p={{x: SRC9[1][0] - 50, y: BENCH9 - 250, w: 105}} />
				<EHT x={EHT9.x} y={EHT9.y} w={EHT9.w} />
				<LPlate spec={PAPER_SHEET} p={{x: SRC9[2][0] - 160, y: BENCH9 - 40, w: 320}} />
				<line x1={SRC9[2][0] - 360} y1={200} x2={SRC9[2][0] - 20} y2={BENCH9 - 30} stroke={LIGHT} strokeWidth={5} />
				<LPlate spec={SPECTRO} p={spP} />
				<SpectrumStrip s={VIEW9} kind={kinds[stage]} lines={stage === 1 ? H_LINES : SUN_LINES} strengths={stage === 2 ? SUN_STR : undefined} axis={f >= scale} ticks={[400, 450, 500, 550, 600, 650, 700]} opacity={prog(f, 6, 14)} />
				{f >= chg ? <ellipse cx={sw[0]} cy={sw[1]} rx={34} ry={30} fill="none" stroke="#c8443a" strokeWidth={5} opacity={prog(f, chg + 10, 12)} /> : null}
				{f >= ref ? <g opacity={prog(f, ref, 14)}>
					<StripRow s={{x: 1460, y: 620, w: 360, h: 34}} kind="emission" lines={H_LINES} name="H" size={26} />
					<StripRow s={{x: 1460, y: 680, w: 360, h: 34}} kind="emission" lines={NA_LINES} name="Na" size={26} />
					<StripRow s={{x: 1460, y: 740, w: 360, h: 34}} kind="emission" lines={NE_LINES} name="Ne" size={26} />
					<StripRow s={{x: 1460, y: 800, w: 360, h: 34}} kind="emission" lines={HE_LINES} name="He" size={26} />
				</g> : null}
			</FrameSvg>
			<Lbl x={SRC9[2][0] - 340} y={190} at={0} color={LIGHT_INK} size={26}>sunlight</Lbl>
			<Lbl x={VIEW9.x} y={VIEW9.y - 16} at={6} color={INK} size={26}>view through the spectroscope</Lbl>
			<HandTag x={VIEW9.x + VIEW9.w + 20} y={VIEW9.y + 30} text="read where the lines sit" at={rec + 6} size={30} color={NAVY.ink} />
			<div style={{position: 'absolute', left: 96, top: 740, width: 1300, fontFamily: 'Inter Tight', fontWeight: 700, fontSize: 30, color: INK, opacity: prog(f, rec, 12)}}>
				<div style={{display: 'flex', gap: 20, borderBottom: `3px solid ${INK}`, fontWeight: 800}}><span style={{width: 330}}>source</span><span style={{width: 260}}>type</span><span>line positions (nm)</span></div>
				{rows.map((r, i) => <div key={i} style={{display: 'flex', gap: 20, opacity: prog(f, rec + 30 + 70 * i, 12)}}><span style={{width: 330}}>{r[0]}</span><span style={{width: 260}}>{r[1]}</span><span>{r[2]}</span></div>)}
			</div>
			<Chip x={1100} y={180} at={chg} size={28} w={720} color={INK}>EHT: switch off before changing tubes; tubes get hot</Chip>
			<HandTag x={sw[0] - 20} y={sw[1] + 80} text="switch off first" at={chg + 16} size={32} color="#b8322a" />
		</>
	);
};

// ---------- 10. attempt 1 ----------
export const Q1: React.FC<{u?: boolean}> = ({u = false}) => <>The emission spectrum of an unknown gas in a discharge tube has bright lines at {u ? <u>447 nm, 502 nm, 588 nm, 668 nm and 707 nm</u> : '447 nm, 502 nm, 588 nm, 668 nm and 707 nm'}. Using the reference spectra shown, identify the gas and justify your answer.</>;
/** The reference card: hydrogen, helium, sodium and neon strips with their printed values, and the unknown strip. */
export const RefCard: React.FC<{w?: number; h?: number}> = ({w = 678, h = 560}) => {
	const sx = 150, sw = w - sx - 40, rows: [string, readonly number[], string][] = [['unknown', UNKNOWN, '447, 502, 588, 668, 707'], ['hydrogen', H_LINES, H_CARD.join(', ')], ['helium', HE_LINES, HE_CARD.join(', ')], ['sodium', NA_LINES, '589.0, 589.6'], ['neon', NE_LINES, NE_CARD.join(', ')]];
	return (
		<svg width={w} height={h} style={{overflow: 'visible'}}>
			<rect x={10} y={20} width={w - 28} height={h - 40} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
			{rows.map(([n, l, v], i) => <StripRow key={n} s={{x: sx, y: 50 + i * 96, w: sw, h: 32}} kind="emission" lines={l} name={n} values={`${v} nm`} size={26} />)}
		</svg>
	);
};
export const S10: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Your turn" pauseAt={cue('attempt-1', 'Pause here')} hold={hold('attempt-1')} size={38} marks={2} picture={<RefCard />}><Q1 /></QuestionScene></Accent>;
