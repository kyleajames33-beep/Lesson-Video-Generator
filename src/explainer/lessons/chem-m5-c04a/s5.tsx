import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, DrawPath, Enter, FONT_DISPLAY, FONT_HAND, HandText, INK, INK_SOFT, prog} from '../../kit';
import {cues} from '../../cues';
import {Bars, ColourStrip, Dial, FWD, Fade, Gauge, LockBoxIcon, NetBar, Overlay, Pill, PlungerIcon, DropperIcon, RxnChip, SvgText, Syringe, TEAL, WrongChip} from './parts';
import type {Piece} from './parts';
import {Title, shade, BX} from './board';
import {DEEP, NOC, NO_INK, NO2C, NO2_INK, O2C, O2_INK, PALE, kf, sc} from './common';
import {attemptGroups} from './s4';

const NO_L: Piece[] = [{t: '2NO(g)', color: NO_INK, dot: NOC}, {t: '+'}, {t: 'O_2(g)', color: O2_INK, dot: O2C}];
const NO_R: Piece[] = [{t: '2NO_2(g)', color: NO2_INK, dot: NO2C}];
const HotPill: React.FC<{at: number; y?: number}> = ({at, y = 440}) => <Pill x={96} y={y} w={520} text="hot cylinder: no N₂O₄" at={at} color={INK_SOFT} size={36} h={58} />;

// ---------- 10a. Feedback, item one ----------
const K1 = cues(sc('feedback-one'), {one: 'One count the gases', three: 'three particles on the left', two: 'two on the right', dbl: 'A squeeze doubles', fwd: 'forward reaction depends', gains: 'gains more', right: 'goes right', dark: 'The colour darkens at once', twice: 'twice as crowded', keeps: 'keeps darkening', nothing: 'than is used up', notfade: 'does not fade', makes: 'makes the brown gas', ifsaid: 'If you said', check: 'check which side'});
const SK = {x0: 130, y0: 955, base: 905};
export const SceneFeedbackOne: React.FC = () => {
	const f = useCurrentFrame();
	const vol = kf(f, [[K1.dbl, 1], [K1.dbl + 60, 0.5]]);
	const shift = kf(f, [[K1.keeps, 0], [K1.keeps + 90, 1]]);
	const no = 8 - 2 * shift, o2 = 4 - shift, no2 = 8 + 2 * shift;
	const conc = no2 / vol;
	const t = conc / 24;
	const fwd = kf(f, [[K1.fwd, 30], [K1.gains + 20, 110]]);
	const rev = kf(f, [[K1.fwd, 30], [K1.gains + 20, 60]]);
	return (
		<>
			<Title text="Item 1: squeeze the cylinder" size={62} />
			<Syringe x={96} y={190} w={900} vol={vol} cyl groups={attemptGroups(no, o2, no2)} tint={shade(t)} seed={11} />
			<RxnChip x={1020} y={60} at={-100} left={NO_L} right={NO_R} size={38} words={false} fwdLit={K1.right} revLit={-100} fwdTag={{text: 'shift right', at: K1.right, color: FWD}} />
			<Overlay>
				<ColourStrip x={260} y={395} w={560} from={PALE} to={DEEP} t={t} at={-100} label="colour" h={40} mark={1 / 3} />
				<Fade at={K1.dark}><SvgText x={260} y={480} text="darker at once" size={34} color={NO2_INK} anchor="start" at={K1.dark} /></Fade>
				<HotPill at={-100} y={510} />
				<Fade at={K1.one}>
					<SvgText x={96} y={612} text="Count only the gases:" size={46} color={TEAL} at={K1.one} />
					<SvgText x={96} y={662} text="3 on the left, 2 on the right" size={44} color={TEAL} at={K1.three} />
				</Fade>
				<Bars fwd={fwd} rev={rev} at={K1.dbl} scale={2.6} fwdLabel="" revLabel="" x0={BX} />
				<Fade at={K1.three}><SvgText x={1190} y={770} text="3 particles" size={38} color={FWD} at={K1.three} /></Fade>
				<Fade at={K1.two}><SvgText x={1390} y={770} text="2 particles" size={38} color={AMBER_INK} at={K1.two} /></Fade>
				<Pill x={1190} y={850} w={640} text="in this simple model (one-step reactions)" at={K1.gains} color={INK_SOFT} size={30} h={54} />
				<Fade at={K1.gains}><SvgText x={1190} y={820} text="forward gains more" size={38} color={FWD} at={K1.gains} /></Fade>
				<NetBar xc={930} y={300} gap={fwd - rev} at={K1.right - 20} scale={4.5} lines={[{text: 'net reaction', at: K1.right}, {text: 'goes right', at: K1.right + 8}]} />
				{/* colour over time: the cylinder keeps darkening, the syringe faded back */}
				<Fade at={K1.dark}>
					<path d={`M${SK.x0},${SK.y0} L${SK.x0},715 M${SK.x0},${SK.y0} L${SK.x0 + 520},${SK.y0}`} stroke={INK} strokeWidth={4} fill="none" strokeLinecap="round" />
					<path d={`M${SK.x0},${SK.base} L${SK.x0 + 520},${SK.base}`} stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="8 8" />
					<SvgText x={SK.x0 + 520} y={SK.base + 36} text="start" size={30} color={INK_SOFT} anchor="end" at={K1.dark} hand={false} weight={600} />
					<SvgText x={SK.x0 + 8} y={745} text="colour over time" size={30} color={INK_SOFT} at={K1.dark} hand={false} weight={600} />
				</Fade>
				<DrawPath d={`M${SK.x0},${SK.base} L${SK.x0 + 120},${SK.base} L${SK.x0 + 120},${SK.base - 70}`} at={K1.dark} dur={24} color={NO2C} width={9} />
				<DrawPath d={`M${SK.x0 + 120},${SK.base - 70} Q${SK.x0 + 300},${SK.base - 90} ${SK.x0 + 500},${SK.base - 150}`} at={K1.keeps} dur={60} color={NO2C} width={9} />
				<Fade at={K1.keeps}><SvgText x={SK.x0 + 500} y={SK.base - 190} text="cylinder: keeps darkening" size={32} color={NO2_INK} anchor="end" at={K1.keeps} hand={false} weight={700} /></Fade>
				<DrawPath d={`M${SK.x0 + 120},${SK.base - 70} Q${SK.x0 + 300},${SK.base - 70} ${SK.x0 + 500},${SK.base - 25}`} at={K1.notfade} dur={50} color={INK_SOFT} width={6} dash="12 9" />
				<Fade at={K1.notfade}><SvgText x={SK.x0 + 500} y={SK.base + 4} text="syringe: fades" size={30} color={INK_SOFT} anchor="end" at={K1.notfade + 20} hand={false} weight={700} /></Fade>
				<Fade at={K1.makes}><SvgText x={720} y={940} text="the shift makes the brown gas" size={40} color={NO2_INK} at={K1.makes} /></Fade>
				<WrongChip at={K1.ifsaid} out={K1.check - 6} x={960} y={600} chip="the brown always fades" fix="Check which side this shift favours." w={640} />
				<WrongChip at={K1.check + 10} out={99999} x={960} y={600} chip="shifts toward more gas particles" fix="A squeeze helps the reaction that depends on more." w={760} />
			</Overlay>
			<div style={{display: 'none'}}>{AMBER}{FONT_HAND}{K1.twice}{K1.nothing}</div>
		</>
	);
};

// ---------- 10b. Feedback, item two ----------
const K2 = cues(sc('feedback-two'), {two: 'Two Argon', nopart: 'takes no part', vol: 'volume has not changed', each: 'exactly as crowded', fav: 'does not favour', nothing: 'nothing shifts', same: 'colour stays the same', ifsaid: 'If you said', sep: 'separate the total'});
export const SceneFeedbackTwo: React.FC = () => {
	const f = useCurrentFrame();
	const argonN = kf(f, [[K2.nopart, 0], [K2.nopart + 70, 14]], false);
	const pR = 1 + argonN / 14;
	return (
		<>
			<Title text="Item 2: argon at a fixed volume" size={62} />
			<Syringe x={96} y={190} w={900} vol={1} cyl groups={attemptGroups(8, 4, 8)} tint={shade(1 / 3)} lock={prog(f, K2.two, 14)} inlet={prog(f, K2.two, 14)} argon={argonN} argonAt={K2.nopart} seed={12} />
			<Overlay>
				<Gauge x={1300} y={330} r={80} value={pR} at={K2.nopart} />
				<Fade at={K2.nopart}><SvgText x={1300} y={500} text="argon takes no part" size={36} color={INK_SOFT} anchor="middle" at={K2.nopart} /></Fade>
				<Dial x={96} y={420} w={280} label="NO" value={8} text="same" color={NO_INK} at={K2.vol} ring={f >= K2.each} />
				<Dial x={400} y={420} w={280} label="O_2" value={4} text="same" color={O2_INK} at={K2.vol + 8} ring={f >= K2.each} />
				<Dial x={704} y={420} w={280} label="NO_2" value={8} text="same" color={NO2_INK} at={K2.vol + 16} ring={f >= K2.each} />
				<Fade at={K2.vol}><SvgText x={96} y={650} text="volume not changed: each gas is as crowded as before" size={34} color={INK} at={K2.vol} hand={false} weight={600} /></Fade>
				<ColourStrip x={260} y={720} w={560} from={PALE} to={DEEP} t={1 / 3} at={K2.same - 20} label="colour" h={40} mark={1 / 3} />
				<Fade at={K2.fav}><SvgText x={96} y={912} text="no change in crowding, no direction favoured" size={40} color={TEAL} at={K2.fav} /></Fade>
				<Fade at={K2.nothing}><SvgText x={96} y={962} text="nothing shifts, colour stays the same" size={44} color={TEAL} at={K2.nothing} /></Fade>
				<HotPill at={-100} y={790} />
				<WrongChip at={K2.ifsaid} out={99999} x={1020} y={620} chip="pressure doubled, so it shifts right" fix="total pressure up, crowding unchanged" w={780} />
			</Overlay>
			<div style={{display: 'none'}}>{K2.sep}</div>
		</>
	);
};

// ---------- 11. Decision rule ----------
const K3 = cues(sc('decision-rule'), {ask: 'ask first', more: 'more or less crowded', vol: 'If the volume changed', count: 'count the gas particles', sq: 'A squeeze shifts', exp: 'an expansion', equal: 'equal counts', react: 'If you added a reacting', iron: 'iron tube', inert: 'If you added only an inert', nothing: 'nothing is more crowded', next: 'Next', cat: 'catalyst'});
export const SceneDecision: React.FC = () => {
	const f = useCurrentFrame();
	const cards = [
		{y: 190, at: K3.ask, n: '1', q: 'Did the volume change?', a: 'Then the gases got more or less crowded. Count the gas particles: a squeeze shifts toward fewer, an expansion toward more, equal counts no shift.'},
		{y: 420, at: K3.react, n: '2', q: 'Did you add a reacting gas in a fixed box?', a: 'Then one rate changes, as in the iron tube.'},
		{y: 650, at: K3.inert, n: '3', q: 'Did you add only an inert gas in a fixed box?', a: 'Then nothing is more crowded, so nothing shifts.'},
	];
	return (
		<>
			<Title text="When a question changes the pressure" size={62} />
			{cards.map((c, i) => (
				<Enter key={i} at={c.at - 6} style={{position: 'absolute', left: 96, top: c.y, width: 1220}}>
					<div style={{display: 'flex', alignItems: 'center', gap: 26, background: '#fffdf8', borderRadius: 24, padding: '20px 30px', boxShadow: '0 14px 32px rgba(60,45,20,0.10)', border: '1.5px solid rgba(60,45,20,0.08)', minHeight: 150}}>
						<div style={{flex: 'none', width: 62, height: 62, borderRadius: 999, background: TEAL, color: '#fff', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 36, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{c.n}</div>
						<div>
							<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 54, color: INK, lineHeight: 1}}>{c.q}</div>
							<div style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 32, color: INK_SOFT, marginTop: 6, lineHeight: 1.2}}>{c.a}</div>
						</div>
					</div>
				</Enter>
			))}
			<Overlay>
				<PlungerIcon x={1480} y={290} at={K3.vol} s={1.3} push />
				<DropperIcon x={1500} y={490} at={K3.react} s={1.5} />
				<LockBoxIcon x={1450} y={780} at={K3.inert} s={1.3} />
				<Fade at={K3.next}>
					<circle cx={1600} cy={900} r={30} fill="#c9b79a" stroke={INK} strokeWidth={5} />
					<path d="M1558,858 l-14,-14 M1642,858 l14,-14 M1600,846 l0,-20" stroke={AMBER} strokeWidth={6} strokeLinecap="round" />
					<SvgText x={1500} y={968} text="Next: catalysts" size={52} color={TEAL} anchor="middle" at={K3.next} />
				</Fade>
			</Overlay>
			<div style={{display: 'none'}}>{K3.more}{K3.count}{K3.sq}{K3.exp}{K3.equal}{K3.iron}{K3.nothing}{K3.cat}{f}</div>
		</>
	);
};

// ---------- 12. Key notes ----------
const NOTES = [
	'Squeezing a gas mixture at a steady temperature makes every gas more crowded at once. The reaction that depends on more gas particles gains more, so the shift goes toward the side with fewer gas particles (fewer moles of gas). Expanding does the opposite.',
	'Count only gases, using the numbers in the balanced equation. If both sides have the same number of gas particles, changing the volume causes no shift. Pure solids and pure liquids do not count.',
	'A squeeze shows up in two steps: every concentration changes at once, then the net reaction runs until the rates match. It only partly cancels the change.',
	'The coloured gas darkens at once when squeezed. After that it fades part of the way back if the shift uses it up, darkens further if the shift makes it, and stays the same if nothing shifts.',
	'Adding an inert gas in a fixed volume raises the total pressure but changes no reacting concentration, so it favours neither direction and nothing shifts.',
];
export const SceneNotes: React.FC = () => (
	<>
		<div style={{position: 'absolute', left: 96, top: 70}}><HandText text="Key notes: what to write in your book" at={2} size={62} cps={40} /></div>
		<div style={{position: 'absolute', left: 120, top: 150, width: 1690}}>
			{NOTES.map((n, i) => (
				<Enter key={i} at={14 + i * 10} style={{display: 'flex', gap: 22, marginBottom: 12}}>
					<div style={{flex: 'none', width: 16, height: 16, marginTop: 12, borderRadius: 999, background: AMBER}} />
					<div style={{fontFamily: FONT_DISPLAY, fontSize: 29, fontWeight: 500, color: INK, lineHeight: 1.2}}>{n}</div>
				</Enter>
			))}
		</div>
		<Enter at={70} style={{position: 'absolute', left: 96, top: 740, width: 1730}}>
			<div style={{background: '#fffdf8', border: `4px solid ${TEAL}`, borderRadius: 22, padding: '10px 30px 12px', boxShadow: '0 12px 28px rgba(60,45,20,0.10)'}}>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 36, color: INK_SOFT}}>Memory aid</div>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 54, color: INK, lineHeight: 1.05}}>Squeeze it and the shift goes to <span style={{color: FWD}}>fewer gas particles</span>. Argon in a fixed box does <span style={{color: AMBER_INK}}>not shift</span> it.</div>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 28, color: TEAL, marginTop: 6}}>gases only, temperature steady. Squeeze: volume changes. Argon: volume fixed.</div>
			</div>
		</Enter>
		<Enter at={90} style={{position: 'absolute', left: 1130, top: 96}}>
			<div style={{fontFamily: FONT_HAND, fontSize: 38, fontWeight: 700, color: AMBER_INK}}>Pause the video if you need more time to copy.</div>
		</Enter>
	</>
);
void Bars; void kf; void DEEP;
