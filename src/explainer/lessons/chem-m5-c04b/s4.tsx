import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, DrawPath, Enter, FONT_DISPLAY, FONT_HAND, HandText, INK, INK_SOFT, Mark, prog} from '../../kit';
import {cues} from '../../cues';
import {Arrow, Crumple, Curve, Fade, FWD, GasTube, GraphAxes, Overlay, Plunger, Ring, Seesaw, SvgText, TEAL, Thermo, Dropper, mkG, smooth} from './parts';
import {H2_INK, HI_INK, I2C, I2_INK, METAL_DARK, Heading, kf, sc, tubeColour} from './common';

// ---------- 5. A catalyst added at equilibrium ----------
const G1 = mkG(900, 210, 880, 220, 6, 15);
const G2 = mkG(900, 570, 880, 220, 6, 2.5);
const KE = cues(sc('catalyst-at-equilibrium'), {add: 'add the catalyst', settled: 'already settled', fifth: 'Both rates are a fifth', steady: 'amounts are steady', makes: 'The catalyst makes both', bigger: 'ten times bigger', two: 'two and two', stillEq: 'still equal', noChange: 'amounts do not change', moment: 'moment of the change', resp: 'no response', ahead: 'neither rate pulls ahead'});
const TC = 1.5;
export const SceneCatEq: React.FC = () => {
	const f = useCurrentFrame();
	const clock = kf(f, [[KE.fifth, 0], [KE.makes, TC], [KE.bigger, TC], [KE.noChange + 30, 6]], false);
	const rate = (t: number) => (t < TC ? 0.2 : 2);
	const drop = kf(f, [[KE.makes, 230], [KE.makes + 26, 372]], false);
	const dropped = f >= KE.makes;
	return (
		<>
			<Heading text="A catalyst added at equilibrium" at={4} size={64} />
			<Overlay>
				<GasTube x={96} y={310} w={540} h={140} counts={{h: 2, i: 2, hi: 14}} seed={5} reveal={prog(f, 4, 20)} />
				<SvgText x={96} y={286} text="a tube that has already settled" size={42} color={INK_SOFT} at={KE.settled} />
				<Crumple x={366} y={dropped ? drop : 230} s={66} rot={dropped ? (drop - 230) * 0.3 : 0} opacity={f >= KE.add ? 1 : 0} />
				<Fade at={KE.add} out={KE.makes}><SvgText x={450} y={236} text="metal catalyst" size={42} color={METAL_DARK} at={KE.add} /></Fade>
				<Ring cx={366} cy={372} rx={70} ry={50} at={KE.makes + 24} out={KE.makes + 80} color={METAL_DARK} seed={4} />
				{/* two panels */}
				<GraphAxes g={G1} at={KE.settled} xTicks={[]} xLabel="" yLabel="concentration (units)" yTicks={[0, 5, 10, 15]} />
				<GraphAxes g={G2} at={KE.fifth - 20} yLabel="" xTicks={[0, 2, 4, 6]} yTicks={[0, 1, 2]} />
				<Curve g={G1} fn={() => 14} upTo={clock} color="#3d424a" width={8} />
				<Curve g={G1} fn={() => 2} upTo={clock} color="#9aa0a6" width={12} />
				<Curve g={G1} fn={() => 2} upTo={clock} color={I2C} width={5} />
				<Curve g={G2} fn={rate} upTo={clock} color={FWD} width={12} />
				<Curve g={G2} fn={rate} upTo={clock} color={AMBER} width={5} />
				<Fade at={KE.steady}>
					<SvgText x={G1.px(6) - 6} y={G1.py(14) - 14} text="HI 14" size={40} color={HI_INK} anchor="end" at={KE.steady} />
					<SvgText x={G1.px(6) - 6} y={G1.py(2) - 28} text="H_2 and I_2: 2 each" size={40} color={I2_INK} anchor="end" at={KE.steady} />
				</Fade>
				<Fade at={KE.fifth}>
					{/* upright beside the axis, clear of the dashed "catalyst added" line */}
						<text x={G2.x - 62} y={G2.y + G2.h / 2} textAnchor="middle" transform={`rotate(-90 ${G2.x - 62} ${G2.y + G2.h / 2})`} fill={INK_SOFT} style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 28}}>rate (units per tick)</text>
					<SvgText x={G2.px(0) + 14} y={G2.py(0.2) - 20} text="0.2" size={44} color={FWD} at={KE.fifth} />
				</Fade>
				<Fade at={KE.two}>
					<SvgText x={G2.px(6) - 6} y={G2.py(2) - 18} text="2 and 2" size={44} color={FWD} anchor="end" at={KE.two} />
				</Fade>
				<Fade at={KE.stillEq}><SvgText x={G2.px(3.4)} y={G2.py(1.55)} text="still equal" size={52} color={TEAL} anchor="middle" at={KE.stillEq} /></Fade>
				<path d={`M${G1.px(TC)},${G1.y} L${G1.px(TC)},${G2.y + G2.h}`} stroke={METAL_DARK} strokeWidth={4} strokeDasharray="10 8" opacity={prog(f, KE.makes, 10)} />
				<SvgText x={G1.px(TC) + 10} y={G1.y + 40} text="catalyst added" size={38} color={METAL_DARK} at={KE.makes} />
				<Fade at={KE.noChange}><Ring cx={G1.px(4)} cy={G1.py(8.3)} rx={150} ry={64} at={KE.noChange} color={TEAL} seed={5} /><SvgText x={G1.px(4)} y={G1.py(8.3) + 10} text="no change" size={56} color={TEAL} anchor="middle" at={KE.noChange + 6} /></Fade>
				{/* the two beats */}
				<Fade at={KE.moment}>
					<path d={`M${G2.px(TC) - 36},${G2.y - 40} L${G2.px(TC) - 36},${G2.y - 52} L${G2.px(TC) + 36},${G2.y - 52} L${G2.px(TC) + 36},${G2.y - 40}`} fill="none" stroke={INK} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />
					<SvgText x={G2.px(TC) + 40} y={G2.y - 66} text="the moment of the change" size={42} color={INK} anchor="end" at={KE.moment} />
				</Fade>
				<Fade at={KE.resp}>
					<path d={`M${G2.px(2.4)},${G2.y - 40} L${G2.px(2.4)},${G2.y - 52} L${G2.px(5.9)},${G2.y - 52} L${G2.px(5.9)},${G2.y - 40}`} fill="none" stroke={INK_SOFT} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />
					<SvgText x={G2.px(2.4)} y={G2.y - 66} text="the response: none" size={42} color={INK_SOFT} at={KE.resp} />
					<Mark x={G2.px(5.3)} y={G2.y - 52} at={KE.resp + 10} kind="cross" size={30} />
				</Fade>
				<Fade at={KE.ahead}><SvgText x={G2.px(3.4)} y={G2.py(0.95)} text="neither rate pulls ahead" size={34} anchor="middle" color={INK} hand={false} weight={600} at={KE.ahead} /></Fade>
			</Overlay>
			{/* left notes */}
			<Enter at={KE.fifth} style={{position: 'absolute', left: 96, top: 520, width: 600}}>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, color: INK_SOFT}}>before the catalyst</div>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 36, color: INK}}>forward 0.2, reverse 0.2</div>
			</Enter>
			<Enter at={KE.bigger} style={{position: 'absolute', left: 96, top: 650, width: 600}}>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, color: METAL_DARK}}>after the catalyst, 0.2 x 10</div>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 36, color: INK}}>forward 2, reverse 2</div>
			</Enter>
			<Enter at={KE.noChange} style={{position: 'absolute', left: 96, top: 780, width: 640}}>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 52, color: TEAL}}>equal rates, so the amounts do not change</div>
			</Enter>
		</>
	);
};

// ---------- 6. Which rates change, and by how much ----------
const KW = cues(sc('which-rates-change'), {adding: 'Adding a reacting substance', one: 'changed one rate', heating: 'Heating', squeezing: 'squeezing a gas', both: 'changed both rates', diff: 'different factors', ahead: 'pulled ahead', shifted: 'shifted', takes: 'takes in heat', ridge: 'higher ridge', sqEq: 'Squeezing hydrogen and iodine', raised: 'raised both rates', nothing: 'nothing shifted', cat: 'A catalyst lowers', ridges: 'both ridges', same: 'same height', rise: 'both rates rise', factor: ['by the same factor', 2], pulls: 'nothing pulls ahead'});
const Bars2: React.FC<{x: number; base: number; before: [number, number]; after: [number, number]; atB: number; atA: number; label: string; labelAt: number; tag?: string; tagAt?: number; tagColor?: string; hi?: 'f' | 'r' | null; hiAt?: number; eqAt?: number; labelSize?: number}> = ({x, base, before, after, atB, atA, label, labelAt, tag, tagAt = 0, tagColor = INK, hi, hiAt = 0, eqAt, labelSize = 36}) => {
	const f = useCurrentFrame();
	const u = smooth((f - atA) / 24);
	const hf = before[0] + (after[0] - before[0]) * u, hr = before[1] + (after[1] - before[1]) * u;
	const o = prog(f, atB, 12);
	return (
		<g opacity={o}>
			<SvgText x={x} y={base - 196} text={label} size={labelSize} color={INK} hand={false} weight={600} at={labelAt} />
			<path d={`M${x - 14},${base} L${x + 330},${base}`} stroke={INK} strokeWidth={4} strokeLinecap="round" />
			<rect x={x} y={base - before[0]} width={44} height={before[0]} fill="#bcd6ee" stroke={FWD} strokeWidth={3.5} rx={4} opacity={0.55} />
			<rect x={x + 62} y={base - before[1]} width={44} height={before[1]} fill="#f6dfae" stroke={AMBER} strokeWidth={3.5} rx={4} opacity={0.55} />
			<path d={`M${x + 128},${base - 40} L${x + 164},${base - 40} M${x + 152},${base - 52} L${x + 164},${base - 40} L${x + 152},${base - 28}`} stroke={INK_SOFT} strokeWidth={5} strokeLinecap="round" fill="none" opacity={prog(f, atA, 10)} />
			<g opacity={prog(f, atA - 4, 10)}>
				<rect x={x + 180} y={base - hf} width={44} height={hf} fill="#bcd6ee" stroke={FWD} strokeWidth={4.5} rx={4} />
				<rect x={x + 242} y={base - hr} width={44} height={hr} fill="#f6dfae" stroke={AMBER} strokeWidth={4.5} rx={4} />
			</g>
			{hi && f >= hiAt ? <Ring cx={x + 202 + (hi === 'r' ? 62 : 0)} cy={base - (hi === 'r' ? hr : hf) + 6} rx={46} ry={hi === 'r' ? 70 : 60} at={hiAt} color={TEAL} seed={4} /> : null}
			{tag ? <Fade at={tagAt}><SvgText x={x + 300} y={base - 70} text={tag} size={60} color={tagColor} at={tagAt} /></Fade> : null}
			{eqAt !== undefined ? <Fade at={eqAt}><path d={`M${x + 170},${base - hf - 14} L${x + 296},${base - hf - 14}`} stroke={TEAL} strokeWidth={6} strokeDasharray="4 10" strokeLinecap="round" /><SvgText x={x + 233} y={base - hf - 30} text="equal" size={44} color={TEAL} anchor="middle" at={eqAt} /></Fade> : null}
		</g>
	);
};
export const SceneWhich: React.FC = () => {
	const f = useCurrentFrame();
	const row = (title: string, at: number, y: number, color = INK) => <SvgText x={96} y={y} text={title} size={52} color={color} at={at} />;
	return (
		<>
			<Heading text="Which rates change, and by how much?" at={4} size={60} />
			<Overlay>
				{/* row 1 */}
				{row('Add a reacting substance', KW.adding, 262)}
				<Dropper x={650} y={290} s={1.1} at={KW.adding} />
				<Bars2 x={700} base={400} before={[40, 40]} after={[110, 40]} atB={KW.adding} atA={KW.one} label="" labelAt={KW.adding} />
				<Fade at={KW.one}><SvgText x={1090} y={316} text="one rate changes" size={46} color={INK_SOFT} at={KW.one} /></Fade>
				{/* row 2 */}
				{row('Different factors', KW.heating, 500)}
				<Bars2 x={560} base={690} before={[40, 40]} after={[70, 118]} atB={KW.heating} atA={KW.both} label="heat" labelAt={KW.heating} hi="r" hiAt={KW.diff} />
				<Thermo x={500} y={610} s={0.9} at={KW.heating} />
				<Bars2 x={1010} base={690} before={[40, 40]} after={[120, 70]} atB={KW.squeezing} atA={KW.both + 6} label="squeeze: unequal gas counts" labelAt={KW.squeezing} hi="f" hiAt={KW.diff + 8} />
				<Plunger x={950} y={600} s={0.8} at={KW.squeezing} />
				{/* small profile: the climb that takes in heat has the higher ridge */}
				<Fade at={KW.takes}>
					<path d="M96,664 C150,664 160,568 216,568 C272,568 270,628 330,628" fill="none" stroke={INK} strokeWidth={6} strokeLinecap="round" />
					<Arrow x1={118} y1={652} x2={190} y2={580} at={KW.takes} color={AMBER_INK} width={6} />
					<SvgText x={96} y={722} text="the climb that takes in heat" size={34} color={AMBER_INK} hand={false} weight={600} at={KW.takes + 6} />
				</Fade>
				<Ring cx={216} cy={564} rx={74} ry={34} at={KW.ridge} out={KW.sqEq} color={TEAL} seed={6} />
				<SvgText x={310} y={548} text="higher ridge" size={40} color={TEAL} at={KW.ridge} />
				<Fade at={KW.shifted}>
					<Arrow x1={1560} y1={262} x2={1760} y2={262} at={KW.shifted} color={FWD} width={9} />
					<SvgText x={1660} y={316} text="shifts" size={52} color={FWD} anchor="middle" at={KW.shifted + 6} />
					<Arrow x1={1560} y1={560} x2={1760} y2={560} at={KW.shifted + 10} color={FWD} width={9} />
					<SvgText x={1660} y={614} text="shifts" size={52} color={FWD} anchor="middle" at={KW.shifted + 16} />
				</Fade>
				{/* row 3 */}
				{row('Same factor', KW.sqEq, 800, TEAL)}
				<Bars2 x={560} base={960} before={[40, 40]} after={[160, 160]} atB={KW.sqEq} atA={KW.raised} label="squeeze: equal gas counts" labelAt={KW.sqEq} tag="x4" tagAt={KW.raised + 10} tagColor={INK} />
				<Plunger x={500} y={880} s={0.8} at={KW.sqEq} down={1} />
				<Bars2 x={1010} base={960} before={[15, 15]} after={[150, 150]} atB={KW.cat} atA={KW.rise} label="catalyst" labelAt={KW.cat} tag="x10" tagAt={KW.factor} tagColor={METAL_DARK} eqAt={KW.pulls} />
				<Crumple x={1168} y={762} s={52} opacity={prog(f, KW.cat, 12)} />
				<Fade at={KW.nothing}>
					<path d="M1560,880 L1760,880" stroke={TEAL} strokeWidth={9} strokeLinecap="round" />
					<SvgText x={1660} y={934} text="no shift" size={52} color={TEAL} anchor="middle" at={KW.nothing + 6} />
				</Fade>
			</Overlay>
		</>
	);
};

// ---------- 7. Memory aid ----------
const KMA = cues(sc('memory-aid'), {shortcut: 'Here is a shortcut', speed: 'changes the speed', dest: 'not the destination', tells: 'It tells you', soon: 'how soon', never: 'never what the mixture is'});
export const SceneAid: React.FC = () => {
	const f = useCurrentFrame();
	const sA = 2;
	return (
		<>
			<div style={{position: 'absolute', left: 120, top: 150}}><HandText text="A catalyst changes the speed," at={KMA.speed - 30} size={112} cps={24} color={INK} /></div>
			<div style={{position: 'absolute', left: 120, top: 282}}><HandText text="not the destination." at={KMA.dest - 4} size={112} cps={20} color={TEAL} /></div>
			<Enter at={KMA.tells} style={{position: 'absolute', left: 120, top: 440, width: 1500}}>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 34, color: INK_SOFT}}>same temperature, closed system. Speed: forward and reverse together.</div>
			</Enter>
			<Overlay>
				<GasTube x={250} y={560} w={90} h={250} counts={{h: 0, i: 0, hi: 0}} tintI={9 - 7 * prog(f, KMA.soon + 120, 60)} dots={false} clamps={false} />
				<GasTube x={380} y={560} w={90} h={250} counts={{h: 0, i: 0, hi: 0}} tintI={9 - 7 * prog(f, KMA.soon, 12)} heavy dots={false} clamps={false} />
				<SvgText x={295} y={860} text="slow" size={44} color={INK_SOFT} anchor="middle" at={KMA.soon - 6} />
				<SvgText x={425} y={860} text="fast" size={44} color={METAL_DARK} anchor="middle" at={KMA.soon - 6} />
				<Arrow x1={500} y1={640} x2={880} y2={690} at={KMA.soon} color={METAL_DARK} width={8} />
				<SvgText x={690} y={650} text="arrives soon" size={46} color={METAL_DARK} anchor="middle" at={KMA.soon + 8} />
				<Arrow x1={500} y1={780} x2={880} y2={730} at={KMA.soon + 24} color={INK_SOFT} width={8} />
				<SvgText x={690} y={810} text="arrives later" size={46} color={INK_SOFT} anchor="middle" at={KMA.soon + 32} />
				<Fade at={KMA.dest}>
					<circle cx={1030} cy={710} r={120} fill={tubeColour(sA)} stroke={INK} strokeWidth={6} />
				</Fade>
				<Fade at={KMA.never}>
					<SvgText x={1030} y={880} text="the same pale mixture" size={46} color={I2_INK} anchor="middle" at={KMA.never} />
					<Ring cx={1030} cy={710} rx={148} ry={148} at={KMA.never} color={TEAL} seed={5} />
				</Fade>
				<Fade at={KMA.dest + 10}>
					<path d="M1350,880 L1350,600" stroke={INK} strokeWidth={9} strokeLinecap="round" />
					<path d="M1350,620 L1560,620 L1590,650 L1560,680 L1350,680 Z" fill="#fffdf8" stroke={INK} strokeWidth={6} strokeLinejoin="round" />
					<SvgText x={1366} y={664} text="destination" size={44} color={TEAL} at={KMA.dest + 14} />
				</Fade>
			</Overlay>
		</>
	);
};
void DrawPath; void H2_INK; void I2C; void Seesaw; void AMBER;
