import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, Countdown, DrawPath, Enter, FONT_DISPLAY, FONT_HAND, HandText, INK, INK_SOFT, Plate, prog, scribbleEllipse} from '../../kit';
import {cues} from '../../cues';
import {BARS, Bars, ColourStrip, FWD, Fade, LENS, MiniBars, NetArrowH, Overlay, Pill, RxnChip, SlotRings, SpeciesLens, SvgText, TEAL, WrongChip, ghostTrain} from './parts';
import type {Species} from './parts';
import {ChemH, HEAT, Heading, ICE, N2O4C, N2O4_INK, NO2C, NO2_INK, hexMix, kf, sc} from './common';
import {FLASK_EQ, HAVE} from './assets';

const NO2_SP: Species[] = [{color: N2O4C, r: 19}, {color: NO2C, r: 12}];
const PALE_TINT = '#faf6ea', BROWN_TINT = '#e6c08a';
const brownTint = (n: number, nMax = 11) => hexMix(PALE_TINT, BROWN_TINT, Math.max(0, Math.min(1, n / nMax)));
const CHIP_L = [{t: 'N_2O_4(g)', color: N2O4_INK, dot: N2O4C}];
const CHIP_R = [{t: '2NO_2(g)', color: NO2_INK, dot: NO2C}];

// ---------- 10. Attempt ----------
const KA = cues(sc('attempt'), {turn: 'Your turn', sealed: 'sealed tube', colourless: 'colourless', brown: 'brown', delta: 'delta H', plus: 'plus fifty-seven', starts: 'starts at equilibrium', one: 'One', two: 'Two instead', pause: 'Pause'});
export const SceneAttempt: React.FC = () => {
	const f = useCurrentFrame();
	const scene = sc('attempt') as ReturnType<typeof sc> & {responseHold?: {startFrame: number; endFrame: number}};
	const hold = scene.responseHold ?? {startFrame: KA.pause + 60, endFrame: KA.pause + 1800};
	const counts = () => [5, 11];
	const ghosts = [...ghostTrain(KA.turn + 20, 3500, 40, 'join', [0, 2, 4, 1]), ...ghostTrain(KA.turn + 40, 3500, 40, 'split', [3, 5, 6, 8])];
	return (
		<>
			<Heading text="Your turn: a different system" at={KA.turn} />
			<Overlay>
				<SpeciesLens cx={400} cy={590} r={225} counts={counts} species={NO2_SP} rxn={[1, 1, 0]} ghosts={ghosts} reveal={prog(f, 12, 20)} tint={brownTint(11)} seed={11} />
				<Fade at={KA.sealed}>
					<rect x={330} y={332} width={140} height={34} rx={8} fill="#8a6a50" stroke={INK} strokeWidth={4} />
					<SvgText x={400} y={316} text="sealed" size={40} color={INK_SOFT} anchor="middle" at={KA.sealed} />
				</Fade>
				<circle cx={140} cy={880} r={15} fill={N2O4C} stroke={INK} strokeWidth={3} opacity={prog(f, KA.colourless, 12)} />
				<ChemSvgLite x={168} y={892} t="N_2O_4: colourless" at={KA.colourless} color={N2O4_INK} />
				<circle cx={140} cy={938} r={12} fill={NO2C} stroke={INK} strokeWidth={3} opacity={prog(f, KA.brown, 12)} />
				<ChemSvgLite x={168} y={950} t="NO_2: brown" at={KA.brown} color={NO2_INK} />
				<Pill x={96} y={190} w={800} text="sealed, warm water, steady temperature, at equilibrium" at={KA.starts} color={TEAL} size={30} h={56} />
				<Countdown start={hold.startFrame} end={hold.endFrame} x={1740} y={850} r={48} />
			</Overlay>
			<RxnChip x={900} y={120} at={KA.turn + 10} left={CHIP_L} right={CHIP_R} size={44} fwdLit={KA.turn + 10} revLit={KA.turn + 10} words={false} />
			<Enter at={KA.delta} style={{position: 'absolute', left: 900, top: 306}}>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 48, color: HEAT}}>delta H = +57 kJ per mole of N<sub style={{fontSize: 32}}>2</sub>O<sub style={{fontSize: 32}}>4</sub> <span style={{fontSize: 38, color: INK_SOFT}}>(forward takes in heat)</span></div>
			</Enter>
			<Enter at={KA.one} style={{position: 'absolute', left: 900, top: 384, width: 930}}>
				<div style={{display: 'flex', gap: 20, alignItems: 'flex-start'}}>
					<div style={{flex: 'none', width: 52, height: 52, borderRadius: 999, background: TEAL, color: '#fff', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 30, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 4}}>1</div>
					<div style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 32, color: INK, lineHeight: 1.22}}>A chemical removes some <ChemH text="NO_2" size={32} color={NO2_INK} />, without changing the size or temperature of the tube. Which rate changes straight away? Which way does the net reaction go? What happens to the colour straight away, and then once the mixture has settled again?</div>
				</div>
			</Enter>
			<Enter at={KA.two} style={{position: 'absolute', left: 900, top: 656, width: 930}}>
				<div style={{display: 'flex', gap: 20, alignItems: 'flex-start'}}>
					<div style={{flex: 'none', width: 52, height: 52, borderRadius: 999, background: TEAL, color: '#fff', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 30, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 4}}>2</div>
					<div style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 32, color: INK, lineHeight: 1.22}}>Instead, the original tube is moved into ice water. Which way does it shift, and what happens to the colour?</div>
				</div>
			</Enter>
			<Enter at={KA.pause} style={{position: 'absolute', left: 900, top: 820}}>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 58, color: AMBER_INK}}>Pause here to answer.</div>
			</Enter>
		</>
	);
};
/** Small chemistry text helper in SVG for the key lines. */
const ChemSvgLite: React.FC<{x: number; y: number; t: string; at: number; color: string}> = ({x, y, t, at, color}) => <SvgText x={x} y={y} text={t} size={36} color={color} at={at} hand={false} weight={600} />;

// ---------- 11. Feedback ----------
const KF = cues(sc('feedback'), {one: 'Nitrogen dioxide', making: 'making', revDrops: 'reverse rate drops', fwdSame: 'does not change', fwdFaster: 'Forward is faster', goesFwd: 'goes forward', fades: 'brown fades', atOnce: 'at once', returns: 'returns', paler: 'paler than before', two: 'Two the forward', cooling: 'cooling removes', hard: 'hard collisions', slows: 'slows it more', revWins: 'Reverse wins', toward: 'toward N two O four', muchPaler: 'much paler', s1: ['If you said', 1], s2: ['If you said', 2], s3: ['If you said', 3]});
export const SceneFeedback: React.FC = () => {
	const f = useCurrentFrame();
	const q1 = f < KF.two - 10;
	// Q1: NO2 removed. Q2: ice water.
	const no2 = f < KF.two - 10
		? kf(f, [[KF.one, 11], [KF.making, 11], [KF.revDrops - 20, 7], [KF.returns, 7], [KF.returns + 50, 9]], false)
		: kf(f, [[KF.two - 10, 9], [KF.two + 20, 11], [KF.revWins, 11], [KF.muchPaler + 20, 5]], false);
	const n2o4 = f < KF.two - 10 ? kf(f, [[KF.one, 5], [KF.returns, 5], [KF.returns + 50, 4]], false) : kf(f, [[KF.two - 10, 4], [KF.two + 20, 5], [KF.revWins, 5], [KF.muchPaler + 20, 8]], false);
	const counts = () => [Math.round(n2o4), Math.round(no2)];
	const tintN = f < KF.two - 10
		? kf(f, [[KF.fades - 10, 11], [KF.fades + 20, 4.5], [KF.returns, 4.5], [KF.returns + 50, 7.5]])
		: kf(f, [[KF.two - 10, 7.5], [KF.two + 20, 11], [KF.revWins, 11], [KF.muchPaler + 40, 3]]);
	// bars (no numbers: the values are made-up and the question did not give any)
	const fwd = f < KF.two - 10 ? 30 : kf(f, [[KF.cooling, 30], [KF.slows + 30, 20]]);
	const rev = f < KF.two - 10 ? kf(f, [[KF.revDrops - 6, 30], [KF.revDrops + 30, 18], [KF.returns, 18], [KF.returns + 80, 24]]) : kf(f, [[KF.cooling, 30], [KF.slows + 30, 26]]);
	const ghosts = [...ghostTrain(KF.one, 4000, 44, 'join', [0, 2, 4, 1]), ...ghostTrain(KF.one + 22, 4000, 44, 'split', [3, 5, 6, 8])];
	const tubeColor = brownTint(tintN);
	const gap = fwd - rev;
	const fresh = f >= KF.two - 10;
	const ringEllipse = scribbleEllipse(BARS.x0 + BARS.gx + BARS.w / 2, BARS.base - 30 * 6.2 - 40, 92, 48, 8);
	return (
		<>
			<Heading text={fresh ? 'Part 2: ice water' : 'Part 1: removing NO2'} at={4} />
			<Overlay>
				<SpeciesLens cx={400} cy={590} r={225} counts={counts} species={NO2_SP} rxn={[1, 1, 0]} ghosts={ghosts} tint={tubeColor} seed={11} />
				<ColourStrip x={260} y={196} w={380} from={PALE_TINT} to={BROWN_TINT} t={Math.max(0, Math.min(1, tintN / 11))} at={4} label="colour" mark={1} />
				{/* removal arrow and fading brown */}
				<Fade at={KF.making} out={KF.fwdFaster}>
					<path d="M400,300 L400,355" stroke={NO2_INK} strokeWidth={7} strokeLinecap="round" />
					<SvgText x={440} y={334} text="remove NO_2" size={38} color={NO2_INK} at={KF.making} hand={false} weight={700} />
				</Fade>
				<Fade at={KF.atOnce} out={KF.returns - 10}><SvgText x={400} y={850} text="brown fades at once" size={42} color={NO2_INK} anchor="middle" at={KF.atOnce} /></Fade>
				<Fade at={KF.returns} out={KF.two - 10}>
					<SvgText x={400} y={850} text="partly returns, still paler" size={42} color={NO2_INK} anchor="middle" at={KF.returns} />
				</Fade>
				<Fade at={KF.paler} out={KF.two - 10}><path d={`M${260 + 380},${196 - 8} L${260 + 380},${196 + 42}`} stroke={INK_SOFT} strokeWidth={3} /><SvgText x={640} y={262} text="original colour never regained" size={28} color={INK_SOFT} anchor="end" at={KF.paler} hand={false} weight={600} /></Fade>
				{/* Q2: ice */}
				<Fade at={KF.cooling} out={9999}>
					{[0, 1, 2].map(i => <rect key={i} x={150 + i * 70} y={820 + (i % 2) * 8} width={52} height={52} rx={10} fill="#e9f6fc" stroke={ICE} strokeWidth={4} transform={`rotate(${i * 10 - 10} ${176 + i * 70} ${846})`} />)}
					<SvgText x={400} y={920} text="ice water" size={40} color={ICE} anchor="middle" at={KF.cooling} />
				</Fade>
				<Fade at={KF.muchPaler}><SvgText x={450} y={284} text="much paler" size={44} color={NO2_INK} anchor="middle" at={KF.muchPaler} /></Fade>
				{/* bars */}
				<Bars fwd={fwd} rev={rev} at={KF.making} scale={6.2} fwdLabel="" revLabel="" />
				<Fade at={KF.revDrops} out={KF.two - 10}>
					<DrawPath d={ringEllipse} at={KF.revDrops} dur={20} color={AMBER_INK} width={6} />
					<SvgText x={BARS.x0 + BARS.gx + BARS.w / 2} y={BARS.base - 30 * 6.2 - 112} text="reverse drops" size={40} color={AMBER_INK} anchor="middle" at={KF.revDrops + 6} />
				</Fade>
				<Fade at={KF.fwdSame} out={KF.two - 10}><SvgText x={BARS.x0 + BARS.w / 2 - 20} y={BARS.base - 30 * 6.2 - 70} text="forward unchanged" size={32} color={FWD} anchor="middle" at={KF.fwdSame} /></Fade>
				<Fade at={KF.slows}><SvgText x={BARS.x0 + BARS.w / 2} y={BARS.base - 30 * 6.2 - 70} text="forward drops more" size={36} color={FWD} anchor="middle" at={KF.slows} /></Fade>
				<g opacity={prog(f, KF.fwdFaster, 12) * (q1 ? 1 : 0)}><NetArrowH gap={Math.max(gap, 0) || 0.01} at={KF.fwdFaster} lines={[{text: 'net reaction', at: KF.goesFwd}, {text: 'goes forward', at: KF.goesFwd + 8}]} /></g>
				<g opacity={prog(f, KF.revWins, 12) * (fresh ? 1 : 0)}><NetArrowH gap={-Math.abs(gap) || -0.01} at={KF.revWins} lines={[{text: 'net reaction', at: KF.revWins}, {text: 'toward N_2O_4', at: KF.toward}]} /></g>
				{/* wrong answers */}
				<WrongChip at={KF.s1} out={KF.s2 - 4} x={760} y={800} chip="back to exactly the same" fix="The shift only partly cancels the change." />
				<WrongChip at={KF.s2} out={KF.s3 - 4} x={760} y={800} chip="forward rate dropped" fix="Check which reaction uses NO_2: the reverse one." />
				<WrongChip at={KF.s3} out={99999} x={760} y={800} chip="only the forward slows" fix="Both slow, but the heat-absorbing one slows more." w={600} />
			</Overlay>
			<RxnChip x={1000} y={92} at={4} left={[{t: 'N_2O_4(g)', color: N2O4_INK, dot: N2O4C}, {t: '+', at: KF.toward}, {t: 'heat', color: HEAT, at: KF.toward}]} right={CHIP_R} size={34} fwdLit={KF.goesFwd} revLit={KF.revWins} words={false} fwdTag={fresh ? undefined : {text: 'shift right', at: KF.goesFwd, color: FWD}} revTag={fresh ? {text: 'shift left', at: KF.revWins, color: AMBER_INK} : undefined} />
		</>
	);
};
void AMBER; void Plate; void MiniBars; void SlotRings; void LENS; void HandText;

// ---------- 12. Decision rule and handoff ----------
const KD = cues(sc('decision-rule'), {ask: 'ask what', conc: 'a concentration', temp: 'the temperature', which: 'which rate', that: 'that way', part: 'part of the way', match: 'match', next: 'Next', squeeze: 'squeezing', cat: 'catalyst'});
export const SceneDecision: React.FC = () => {
	const f = useCurrentFrame();
	const shake = f >= KD.squeeze && f < KD.squeeze + 50 ? Math.sin((f - KD.squeeze) * 1.7) * 7 * (1 - (f - KD.squeeze) / 50) : 0;
	const cards = [
		{y: 190, at: KD.ask, n: '1', q: 'What did the change touch?', a: 'a concentration, or the temperature'},
		{y: 380, at: KD.which, n: '2', q: 'Which rate is now faster?', a: 'the net reaction goes that way'},
		{y: 570, at: KD.that, n: '3', q: 'How far does it go?', a: 'only part of the way, until the rates match'},
	];
	const pW = 200, pH = (1460 / 544) * pW;
	return (
		<>
			<Heading text="Predicting a shift" at={4} />
			{cards.map((c, i) => (
				<Enter key={i} at={c.at - 6} style={{position: 'absolute', left: 96, top: c.y, width: 1100}}>
					<div style={{display: 'flex', alignItems: 'center', gap: 28, background: '#fffdf8', borderRadius: 24, padding: '22px 30px', boxShadow: '0 14px 32px rgba(60,45,20,0.10)', border: '1.5px solid rgba(60,45,20,0.08)', minHeight: 130}}>
						<div style={{flex: 'none', width: 62, height: 62, borderRadius: 999, background: TEAL, color: '#fff', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 36, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{c.n}</div>
						<div>
							<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 58, color: INK, lineHeight: 1}}>{c.q}</div>
							<div style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 34, color: INK_SOFT, marginTop: 6}}>{c.a}</div>
						</div>
					</div>
				</Enter>
			))}
			<Overlay>
				{/* icons: dropper and thermometer, rate bars, short arrow */}
				<Fade at={KD.conc}>
					<path d="M1010,226 L1010,262 L1024,284 L1038,262 L1038,226 Z" fill="#fffdf8" stroke={INK} strokeWidth={4} strokeLinejoin="round" />
					<circle cx={1024} cy={310} r={7} fill={FWD} />
				</Fade>
				<Fade at={KD.temp}>
					<rect x={1110} y={222} width={20} height={70} rx={10} fill="#fffdf8" stroke={INK} strokeWidth={4} />
					<circle cx={1120} cy={300} r={16} fill={HEAT} stroke={INK} strokeWidth={4} />
					<rect x={1115} y={250} width={10} height={44} rx={5} fill={HEAT} />
				</Fade>
				<Fade at={KD.which}>
					<rect x={1030} y={452} width={34} height={40} fill="#bcd6ee" stroke={FWD} strokeWidth={4} rx={3} />
					<rect x={1080} y={472} width={34} height={20} fill="#f6dfae" stroke={AMBER} strokeWidth={4} rx={3} />
				</Fade>
				<Fade at={KD.part}>
					<path d="M1130,648 L1030,648 M1054,630 L1028,648 M1054,666 L1028,648" fill="none" stroke={TEAL} strokeWidth={7} strokeLinecap="round" strokeLinejoin="round" />
					<path d="M1000,628 L1000,668" stroke={INK_SOFT} strokeWidth={4} strokeDasharray="6 6" />
				</Fade>
			</Overlay>
			{HAVE.has(FLASK_EQ) ? (
				<div style={{position: 'absolute', left: 1420 + shake, top: 270, opacity: prog(f, KD.part + 20, 20)}}>
					<Plate src={FLASK_EQ} natural={[1024, 1792]} crop={[240, 150, 544, 1460]} width={pW} style={{left: 0, top: 0}} />
				</div>
			) : null}
			<Overlay>
				<g opacity={prog(f, KD.squeeze, 14)} transform={`translate(0,${Math.min(1, Math.max(0, (f - KD.squeeze) / 40)) * 70})`}>
					<rect x={1450} y={190} width={140} height={20} rx={8} fill={INK_SOFT} stroke={INK} strokeWidth={3} />
					<rect x={1514} y={120} width={12} height={72} fill={INK_SOFT} stroke={INK} strokeWidth={3} />
					<rect x={1470} y={102} width={100} height={20} rx={8} fill={INK} />
				</g>
			</Overlay>
			<Enter at={KD.next} style={{position: 'absolute', left: 1230, top: 800, width: 620}}>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 48, color: TEAL, lineHeight: 1.05}}>Next: pressure, volume and catalysts</div>
			</Enter>
		</>
	);
};

// ---------- 13. Key notes ----------
const NOTES = [
	"Le Chatelier's principle: when an equilibrium is disturbed, the mixture shifts in the direction that partly cancels the disturbance.",
	'Adding a dissolved substance, or a gas in a fixed-size container, that is in the equation speeds up the reaction that uses it, so the shift goes away from it. Removing it slows that reaction, so the shift goes toward it.',
	'Heating speeds up both reactions but helps the one that takes in heat (endothermic) more. Cooling slows both but slows the endothermic one more. If the forward reaction gives out heat, heating favours the reverse reaction.',
	'A change shows up in two steps: first the rates change (one rate for a concentration change, both rates for a temperature change), then the net reaction runs until the rates match. The disturbance is only partly cancelled.',
];
export const SceneNotes: React.FC = () => (
	<>
		<div style={{position: 'absolute', left: 96, top: 84}}><HandText text="Key notes: what to write in your book" at={2} size={64} cps={40} /></div>
		<div style={{position: 'absolute', left: 120, top: 178, width: 1690}}>
			{NOTES.map((n, i) => (
				<Enter key={i} at={14 + i * 10} style={{display: 'flex', gap: 22, marginBottom: 20}}>
					<div style={{flex: 'none', width: 16, height: 16, marginTop: 13, borderRadius: 999, background: AMBER}} />
					<div style={{fontFamily: FONT_DISPLAY, fontSize: 33, fontWeight: 500, color: INK, lineHeight: 1.22}}>{n}</div>
				</Enter>
			))}
		</div>
		<Enter at={70} style={{position: 'absolute', left: 96, top: 700, width: 1730}}>
			<div style={{background: '#fffdf8', border: `4px solid ${TEAL}`, borderRadius: 22, padding: '12px 30px 14px', boxShadow: '0 12px 28px rgba(60,45,20,0.10)'}}>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 38, color: INK_SOFT}}>Memory aid</div>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 56, color: INK, lineHeight: 1.05}}>Treat <span style={{color: HEAT}}>heat</span> like a chemical. Add it and the shift goes <span style={{color: FWD}}>away from</span> it. Take it away and the shift goes <span style={{color: AMBER_INK}}>toward</span> it. It only partly cancels the change.</div>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 28, color: TEAL, marginTop: 8}}>for a dissolved substance, a gas in a fixed-size container, or heat</div>
			</div>
		</Enter>
		<Enter at={90} style={{position: 'absolute', left: 96, top: 960}}>
			<div style={{fontFamily: FONT_HAND, fontSize: 40, fontWeight: 700, color: AMBER_INK}}>Pause the video if you need more time to copy.</div>
		</Enter>
	</>
);
void hexMix;
