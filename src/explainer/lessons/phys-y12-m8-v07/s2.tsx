// Scenes 7 to 12: what the ratio meant (two q/m bars to scale, a fork: huge charge or tiny mass?), Millikan's balanced
// drop (the painted plates, atomiser and supply; a magnified gap where the painted drop falls, slows, hangs or rises as
// the live voltage slider moves; live V, E, qE and mg readouts), one drop's charge (working layout), charge comes in
// packets (drops landing on a |q| axis in clusters at multiples of e), combine the two (the balance display fills in)
// and the memory aid.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, MarkSpan, SceneHeading} from '../../math/studio';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {LPlate} from '../../physics/light/plates';
import {FieldLines, Lead, OilDrop, PlatePair, Slider, Supply, supplyPts} from '../../physics/electromagnetism/plates';
import {ATOMISER, ChargeAxis, MILLIKAN, qX} from '../../physics/atom/electron';
import type {AxisG} from '../../physics/atom/electron';
import {Readout} from '../../physics/atom/universe';
import {D_D, D_E, D_M, D_N, D_Q, D_V, E_CH, G, HEAD, HEAD_SIZE, MASS_RATIO, MG, M_E, M_E_CALC, Q_M, Q_M_P, Q_M_SHOWN, cap, cue, qE_at} from './common';
import {AMBER, BLUE, BalancePlate, GREY, Givens, INK, Lbl, NAVY, PURPLE, RED, Strip, TEAL, balanceAt, fx, sci} from './parts';

// ---------- 7. what the ratio meant ----------
export const S07: React.FC = () => {
	const id = 'ratio-meaning';
	const f = useCurrentFrame();
	const eh = cue(id, 'about eighteen hundred times bigger'), hc = cue(id, 'either a huge charge'), tm = cue(id, 'or a tiny mass'), ta = cue(id, 'Thomson argued for a tiny mass'), it = cap(id, cue(id, 'measure the charge itself'));
	const L = 1300, x0 = 400;
	const g1 = prog(f, eh, 30);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<rect x={x0} y={230} width={L * g1} height={60} rx={8} fill={NAVY.soft} stroke={NAVY.stroke} strokeWidth={3} />
				<rect x={x0} y={340} width={Math.max(4, (L * Q_M_P) / Q_M) * g1} height={60} rx={2} fill={GREY.soft} stroke={GREY.stroke} strokeWidth={3} />
				<line x1={x0} y1={210} x2={x0} y2={420} stroke={INK} strokeWidth={4} />
				{f >= hc ? <g opacity={prog(f, hc, 12)} stroke={INK} strokeWidth={5} fill="none"><path d="M960,560 L960,600 L640,680" /><path d="M960,600 L1280,680" opacity={prog(f, tm, 12)} /></g> : null}
				{f >= hc ? <circle cx={960} cy={540} r={18} fill={NAVY.stroke} opacity={prog(f, hc, 12)} /> : null}
				{f >= it ? <g opacity={prog(f, it, 12)}><path d="M560,800 Q500,870 380,880" fill="none" stroke={INK} strokeWidth={4} /><path d="M380,880 l18,-14 l2,22 z" fill={INK} /></g> : null}
			</FrameSvg>
			<Lbl x={x0 - 20} y={270} at={eh} color={NAVY.ink} size={28} anchor="end">cathode-ray particle</Lbl>
			<Lbl x={x0 + 20} y={270} at={eh + 20} color={NAVY.ink} size={30}>{`q/m = ${sci(Q_M, 2)} C kg⁻¹`}</Lbl>
			<Lbl x={x0 - 20} y={380} at={eh} color={GREY.ink} size={28} anchor="end">hydrogen ion</Lbl>
			<Lbl x={x0 + 24} y={380} at={eh + 20} color={GREY.ink} size={30}>{`q/m = ${sci(Q_M_P, 2)} C kg⁻¹ (drawn to scale: a sliver)`}</Lbl>
			<HandTag x={1220} y={470} text={`≈ ${fx(Math.round(MASS_RATIO / 10) * 10)} × (about 1800)`} at={eh + 30} size={34} color={INK} marks={[{kind: 'brace', x: x0 + L + 20, y1: 230, y2: 400, facing: 'right'}]} />
			<Lbl x={x0} y={460} at={eh + 30} color={GREY.ink} size={26}>modern values</Lbl>
			<Lbl x={960} y={500} at={hc} color={NAVY.ink} size={28} anchor="middle">cathode-ray particle</Lbl>
			<HandTag x={1020} y={560} text="huge q or tiny m?" at={hc + 20} out={ta} size={32} color={NAVY.ink} />
			<Chip x={480} y={700} at={hc} size={34} color={INK}>huge q?</Chip>
			<Chip x={1200} y={700} at={tm} size={34} color={INK}>tiny m?</Chip>
			<HandTag x={0} y={0} at={ta} color={NAVY.stroke} marks={[{kind: 'circle', cx: 1280, cy: 728, rx: 120, ry: 50}]} />
			<Chip x={1120} y={800} at={ta + 10} size={30} color={NAVY.ink}>Thomson: tiny mass → electron</Chip>
			<Chip x={420} y={790} at={it} size={28} color={INK}>measure q directly</Chip>
			<Chip x={96} y={860} at={it + 10} size={28} color={INK}>experiment 2</Chip>
		</>
	);
};

// ---------- 8. Millikan's balanced drop ----------
export const APP = {x: 96, y: 470, w: 620};
const ATM = {x: 70, y: 300, w: 300};
const SUP8 = {x: 96, y: 760, w: 260};
export const GAP = {x1: 830, x2: 1290, yTop: 260, yBot: 660};
const DROP_X = 1060;
/** Voltage timeline (V) for the scene: 0 → 300 → 600 → held → off (0) → overshoot 900 → 600. */
const vAt = (f: number, av: number, of: number) => (f < av ? 0 : f < av + 24 ? 300 : f < of ? 600 : f < of + 50 ? 0 : f < of + 80 ? 900 : 600);
export const S08: React.FC = () => {
	const id = 'millikan-balance';
	const f = useCurrentFrame();
	const sp = cue(id, 'He sprayed tiny oil drops'), fh = cue(id, 'fell through a hole in the top plate'), av = cue(id, 'He adjusted the voltage'), hg = cue(id, 'The drop hangs still'), mg = cue(id, 'so q E equals m g'), of = cap(id, cue(id, 'with the voltage off'));
	const V = vAt(f, av, of);
	let y = GAP.yTop + 40;
	for (let k = fh; k < f; k++) { const vk = vAt(k, av, of); y += 0.9 * (1 - qE_at(vk) / MG); y = Math.min(GAP.yBot - 60, Math.max(GAP.yTop + 40, y)); }
	const net = 1 - qE_at(V) / MG;
	const sP = supplyPts(SUP8);
	const lit = V / 900;
	const fE = (qE_at(V) / MG) * 120, fG = 120;
	const mist = f >= sp ? Array.from({length: 10}, (_, i) => ((f - sp) / 70 + i / 10) % 1) : [];
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<LPlate spec={MILLIKAN} p={APP} />
				<LPlate spec={ATOMISER} p={ATM} />
				{mist.map((u, i) => <circle key={i} cx={ATM.x + 290 + 70 * u + 8 * Math.sin(i)} cy={ATM.y + 70 + 120 * u} r={4} fill="#e8c34a" opacity={1 - u} />)}
				<Lead pts={[sP.pos, [sP.pos[0], 905], [780, 905], [780, 690], [306, 690], [306, 622]]} />
				<Lead pts={[sP.neg, [sP.neg[0], 930], [800, 930], [800, 700], [475, 700], [475, 618]]} />
				<Supply at={SUP8} reading={`${V} V`} />
				<Slider x={420} y={820} w={300} value={V / 900} color={RED.stroke} label="V" ticks={[[0, '0'], [1 / 3, '300'], [2 / 3, '600'], [1, '900']]} />
				<rect x={GAP.x1 - 30} y={GAP.yTop - 70} width={GAP.x2 - GAP.x1 + 60} height={GAP.yBot - GAP.yTop + 140} rx={18} fill="none" stroke="rgba(60,45,20,0.25)" strokeWidth={3} />
				<PlatePair g={GAP} thick={18} />
				<FieldLines g={GAP} step={92} color={BLUE.stroke} width={3} opacity={lit} />
				{f >= fh ? <g>
					<OilDrop cx={DROP_X} cy={y} d={40} />
					<text x={DROP_X + 32} y={y + 10} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 30, fill: NAVY.ink}}>−</text>
					{f >= av ? <g>
						{fE > 4 ? <g><line x1={DROP_X - 50} y1={y} x2={DROP_X - 50} y2={y - fE} stroke={AMBER.stroke} strokeWidth={7} /><path d="M0,0 L-11,18 L11,18 z" transform={`translate(${DROP_X - 50} ${y - fE - 16})`} fill={AMBER.stroke} /></g> : null}
						<line x1={DROP_X - 90} y1={y} x2={DROP_X - 90} y2={y + fG} stroke={PURPLE.stroke} strokeWidth={7} /><path d="M0,0 L-11,-18 L11,-18 z" transform={`translate(${DROP_X - 90} ${y + fG + 16})`} fill={PURPLE.stroke} />
						{Math.abs(net) > 0.02 ? <g><line x1={DROP_X + 70} y1={y} x2={DROP_X + 70} y2={y + 90 * net} stroke={TEAL.stroke} strokeWidth={5} /><path d={net > 0 ? 'M0,0 L-9,-14 L9,-14 z' : 'M0,0 L-9,14 L9,14 z'} transform={`translate(${DROP_X + 70} ${y + 90 * net + (net > 0 ? 10 : -10)})`} fill={TEAL.stroke} /></g> : null}
					</g> : null}
				</g> : null}
			</FrameSvg>
			<Lbl x={APP.x} y={APP.y + 250} at={0} color={INK} size={26}>Millikan, 1909 to 1913</Lbl>
			<Lbl x={GAP.x1 - 20} y={GAP.yTop - 90} at={0} color={GREY.ink} size={26}>between the plates (magnified); + plate on top</Lbl>
			<HandTag x={ATM.x + 300} y={ATM.y - 10} text="charged by the spray" at={sp + 20} out={av} size={30} color={GREY.ink} />
			<Lbl x={DROP_X + 110} y={GAP.yTop + 60} at={av} color={TEAL.ink} size={28}>{V === 0 ? 'falls' : V === 300 ? 'falls slower' : V === 600 ? 'held' : 'rises'}</Lbl>
			<Readout x={1360} y={180} label="V" value={`${V} V`} color={RED.ink} w={460} size={40} />
			<Readout x={1360} y={290} label="E = V/d" value={V ? `${sci(V / D_D, 1)} V m⁻¹` : '0'} color={BLUE.ink} w={460} size={40} />
			<Readout x={1360} y={400} label="qE (up)" value={V ? `${sci(qE_at(V), 2)} N` : '0'} color={AMBER.ink} w={460} size={40} />
			<Readout x={1360} y={510} label="mg (down)" value={`${sci(MG, 2)} N`} color={PURPLE.ink} w={460} size={40} />
			<HandTag x={1360} y={680} text="up = down" at={hg + 10} out={of} size={36} color={AMBER.ink} />
			<div style={{position: 'absolute', left: 1360, top: 730}}><Row at={mg - 6} size={52}><AnswerBox at={mg}>qE = mg</AnswerBox></Row></div>
			<Lbl x={1360} y={860} at={of + 10} color={TEAL.ink} size={28}>falling speed → mass</Lbl>
			<HandTag x={830} y={760} text="too much: it rises" at={of + 54} size={32} color={RED.ink} />
		</>
	);
};

// ---------- 9. one drop's charge ----------
const GAP9 = {x1: 120, x2: 540, yTop: 370, yBot: 600};
export const S09: React.FC = () => {
	const id = 'drop-charge';
	const me = cue(id, 'volts per metre'), co = cue(id, 'three point two zero times ten to the minus nineteen coulombs'), ne = cap(id, cue(id, 'and the drop is negative'));
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<Strip x={96} y={168} at={2} size={34} w={1060}>{"Find the drop's charge."}</Strip>
			<Strip x={96} y={240} at={6} size={30} w={1060}>qE = mg,  E = V/d</Strip>
			<Givens x={1200} y={168} w={620} at={4} size={30} lines={[`drop: m = ${sci(D_M, 2)} kg, g = ${G} m s⁻²`, `plates: V = ${D_V} V, d = 1.0 cm = 0.010 m`]} />
			<FrameSvg>
				<PlatePair g={GAP9} thick={14} signStep={130} />
				<FieldLines g={GAP9} step={80} color={BLUE.stroke} width={2.5} />
				<OilDrop cx={320} cy={500} d={40} />
				<line x1={290} y1={500} x2={290} y2={430} stroke={AMBER.stroke} strokeWidth={6} /><path d="M0,0 L-10,16 L10,16 z" transform="translate(290 416)" fill={AMBER.stroke} />
				<line x1={350} y1={500} x2={350} y2={570} stroke={PURPLE.stroke} strokeWidth={6} /><path d="M0,0 L-10,-16 L10,-16 z" transform="translate(350 584)" fill={PURPLE.stroke} />
			</FrameSvg>
			<Lbl x={120} y={662} at={0} color={INK} size={28}>held still at 600 V</Lbl>
			<Lbl x={120} y={700} at={0} color={GREY.ink} size={26}>field down (+ plate on top), force up</Lbl>
			<FrameSvg><LPlate spec={MILLIKAN} p={{x: 110, y: 740, w: 420}} /></FrameSvg>
			<Chip x={600} y={330} at={4} size={28} color={INK}>find the size of q, then its sign</Chip>
			<div style={{position: 'absolute', left: 600, top: 420, display: 'flex', flexDirection: 'column', gap: 18, width: 1220}}>
				<Row at={me - 6} ageAt={co} size={44}>{`E = V/d = ${D_V} / 0.010 = ${sci(D_E, 1)} V m⁻¹`}</Row>
				<Row at={co - 6} ageAt={ne} size={40}>{`|q| = mg/E = (${sci(D_M, 2)})(${G}) / (${sci(D_E, 1)}) = ${sci(D_Q, 2)} C`}</Row>
				<Row at={ne - 6} size={48}><AnswerBox at={ne}>field down, force up → q = <MarkSpan kind="circle" at={ne + 16} color={NAVY.stroke}>−</MarkSpan>{sci(D_Q, 2)} C</AnswerBox></Row>
			</div>
			<HandTag x={1500} y={330} text="cm → m" at={me + 10} out={ne} size={32} color={RED.ink} />
			<HandTag x={600} y={800} text="size, then sign" at={ne + 20} size={34} color={NAVY.ink} />
			<Lbl x={1100} y={860} at={co + 20} color={GREY.ink} size={26}>{`(${sci(D_Q, 2)}) / (${sci(E_CH, 3)}) = ${fx(D_N, 2)} e`}</Lbl>
		</>
	);
};

// ---------- 10. charge comes in packets ----------
const AX: AxisG = {x0: 200, x1: 1700, y: 760, qMax: 10};
const DROPS = [3.2, 1.6, 4.81, 3.21, 6.41, 1.61, 8.01, 4.8, 9.61, 3.19, 6.4, 1.6, 8.0, 4.82] as const;
export const S10: React.FC = () => {
	const id = 'charge-packets';
	const f = useCurrentFrame();
	const da = cue(id, 'drop after drop'), wm = cue(id, 'whole-number multiples'), ep = cue(id, 'one point six zero two times ten to the minus nineteen coulombs'), th = cue(id, 'our drop carried exactly two of them'), cp = cue(id, 'Charge comes in packets'), el = cap(id, cue(id, 'the charge on one electron'));
	const step = Math.max(6, (wm - da) / DROPS.length);
	const e = E_CH / 1e-19;
	const pulse = f >= th && f < th + 40 ? Math.sin(((f - th) / 40) * Math.PI) : 0;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<LPlate spec={MILLIKAN} p={{x: 96, y: 180, w: 300}} />
				<ChargeAxis g={AX} e={e} lines={prog(f, wm, 16)} title="|q| (× 10⁻¹⁹ C)" labelColor={NAVY.ink} />
				{DROPS.map((q, i) => {
					const at = da + i * step, u = prog(f, at, 14), k = DROPS.slice(0, i).filter(d => Math.abs(d - q) < 0.1).length;
					return u > 0.001 ? <circle key={i} cx={qX(AX, q)} cy={AX.y - 20 - 26 * k - 300 * (1 - u)} r={11} fill="#e8c34a" stroke={INK} strokeWidth={2.5} opacity={u} /> : null;
				})}
				{pulse > 0 ? <circle cx={qX(AX, 3.2)} cy={AX.y - 20} r={20 + 12 * pulse} fill="none" stroke={NAVY.stroke} strokeWidth={5} /> : null}
				{f >= el ? <circle cx={1500} cy={300} r={16} fill={NAVY.stroke} opacity={prog(f, el, 12)} /> : null}
			</FrameSvg>
			<Lbl x={AX.x0} y={AX.y + 110} at={da} color={GREY.ink} size={26}>illustrative values; each dot is one drop</Lbl>
			<Chip x={500} y={190} at={ep} size={34} color={NAVY.ink}>{`e = ${sci(E_CH, 3)} C`}</Chip>
			<div style={{position: 'absolute', left: 500, top: 290}}><Row at={th - 6} size={44}><AnswerBox at={th}>{`(${sci(D_Q, 2)}) / (${sci(E_CH, 3)}) = ${fx(D_N, 2)}`}</AnswerBox></Row></div>
			<HandTag x={1100} y={330} text="2 extra electrons" at={th + 20} out={el} size={34} color={NAVY.ink} />
			<CrossedChip x={qX(AX, 1.5 * e) - 60} y={830} at={cp} crossAt={cp + 14} size={28} caption="whole packets only">1.5e</CrossedChip>
			<Lbl x={1100} y={890} at={cp + 20} color={INK} size={28}>charge is quantised: whole packets only</Lbl>
			<Lbl x={1530} y={310} at={el} color={NAVY.ink} size={30}>electron: charge −e</Lbl>
			<HandTag x={0} y={0} at={el + 10} color={NAVY.stroke} marks={[{kind: 'circle', cx: qX(AX, e), cy: AX.y - 312, rx: 40, ry: 26}]} />
		</>
	);
};

// ---------- 11. combine the two ----------
const BAL11 = {x: 1240, y: 520, w: 560};
export const S11: React.FC = () => {
	const id = 'combine';
	const f = useCurrentFrame();
	const ms = cue(id, 'leaves the mass'), kg = cue(id, 'nine point one zero times ten to the minus thirty one kilograms'), at = cap(id, cue(id, 'the lightest part of the atom'));
	const bg = balanceAt(BAL11), [d0x, d0y] = bg.at(398, 432), [d1x, d1y] = bg.at(862, 524);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<Chip x={96} y={190} at={2} size={32} color={INK}>{`experiment 1: Thomson → e/m = ${sci(Q_M_SHOWN, 2)} C kg⁻¹`}</Chip>
			<Chip x={96} y={270} at={8} size={32} color={INK}>{`experiment 2: Millikan → e = ${sci(E_CH, 3)} C`}</Chip>
			<FrameSvg>
				<BalancePlate p={BAL11} text={f >= kg + 10 ? sci(M_E_CALC, 2) : '? kg'} size={f >= kg + 10 ? 28 : 34} />
				{f >= at ? <g opacity={prog(f, at, 12)}><rect x={96} y={820} width={1100} height={30} rx={6} fill={GREY.soft} stroke={GREY.stroke} strokeWidth={2} /><rect x={96} y={820} width={Math.max(3, 1100 / MASS_RATIO)} height={30} fill={NAVY.stroke} /></g> : null}
			</FrameSvg>
			<div style={{position: 'absolute', left: 96, top: 400, display: 'flex', flexDirection: 'column', gap: 18, width: 1100}}>
				<Row at={ms - 6} ageAt={kg} size={52}>m = e ÷ (e/m)</Row>
				<Row at={kg - 6} size={44}><AnswerBox at={kg}>{`m = (${sci(E_CH, 3)}) / (${sci(Q_M_SHOWN, 2)}) = ${sci(M_E_CALC, 2)} kg`}</AnswerBox></Row>
			</div>
			<HandTag x={0} y={0} at={kg + 16} color={INK} marks={[{kind: 'circle', cx: (d0x + d1x) / 2, cy: (d0y + d1y) / 2, rx: (d1x - d0x) / 2 + 24, ry: (d1y - d0y) / 2 + 20}]} />
			<Lbl x={BAL11.x + BAL11.w / 2} y={BAL11.y - 30} at={kg + 10} color={INK} size={28} anchor="middle">{`display: ${sci(M_E_CALC, 2)} kg`}</Lbl>
			<Lbl x={96} y={650} at={kg + 20} color={GREY.ink} size={28}>{`data sheet: ${sci(M_E, 3)} kg`}</Lbl>
			<HandTag x={96} y={730} text="two experiments, one mass" at={kg + 30} size={36} color={INK} />
			<Lbl x={96} y={800} at={at} color={NAVY.ink} size={28}>electron (a speck)</Lbl>
			<Lbl x={1196} y={800} at={at} color={INK} size={28} anchor="end">{`proton: ${fx(MASS_RATIO, 1)} × heavier`}</Lbl>
		</>
	);
};

// ---------- 12. a way to remember ----------
export const S12: React.FC = () => {
	const id = 'memory-aid';
	const f = useCurrentFrame();
	const cr = cue(id, 'Cathode rays showed the particle exists'), tr = cue(id, 'Thomson found its ratio'), mc = cue(id, 'Millikan found its charge'), dm = cap(id, cue(id, 'dividing gives its mass'));
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<Chip x={96} y={220} at={cr} size={36} color={INK}>Cathode rays: it exists</Chip>
			<Chip x={680} y={220} at={tr} size={36} color={TEAL.ink}>Thomson: the ratio e/m</Chip>
			<Chip x={1260} y={220} at={mc} size={36} color={NAVY.ink}>Millikan: the charge e</Chip>
			<FrameSvg>{f >= dm ? <g opacity={prog(f, dm, 12)} stroke={INK} strokeWidth={5} fill="none"><path d="M900,300 Q1100,420 1300,300" /><path d="M1100,360 L1100,410" /><path d="M1100,420 l-12,-20 h24 z" fill={INK} /></g> : null}</FrameSvg>
			<Chip x={1000} y={430} at={dm} size={36} color={INK}>÷ → mₑ</Chip>
			<HandTag x={96} y={620} text="Cathode rays: it exists. Thomson: the ratio." at={cr + 10} size={54} color={INK} />
			<HandTag x={96} y={720} text="Millikan: the charge. Divide for the mass." at={mc} size={54} color={INK} />
		</>
	);
};
