// Scenes 6 to 10: a spinning star (the painted Sun turning with its approaching edge tinted blue and receding edge red,
// three sub-profiles summing into one broad profile, the spin slider, the worked half-width, the pole-on view), dense or
// thin (the particle-box engine's dense and thin gases with collision flashes, a wobbling energy ladder, the dwarf and
// giant strips), telling the clues apart (the rotation and pressure profiles, the feature board moving to the centre),
// the memory aid, and attempt 1 (the white star with only the rest position marked).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading, kf} from '../../math/studio';
import {Accent, MemoryCard, QuestionScene} from '../../shared/scenes';
import {INK} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {Arrow} from '../../physics/light/em';
import {EnergyLadder, SpectrumStrip, nmX} from '../../physics/light/spectrum';
import {Disc, SUN} from '../../physics/light/plates';
import {LineProfile, STAR_WHITE, gaussDip, lorentzDip, rotDip} from '../../physics/light/stars';
import {ParticleBoxView} from '../../sims/views';
import {collisionRateAt} from '../../sims/particle-box';
import {ACCENT, HA, HEAD, HEAD_SIZE, H_LINES, ROT_HW, ROT_V, ROT_WHOLE, SPIN_V, cap, cue, hold, shiftNm} from './common';
import {APPROACH, FeatureBoard, GREY, Lbl, NAVY, ORANGE, RECEDE, ROSE, Slider, fx, denseGas, thinGas} from './parts';
import {FB} from './s1';

type Pt = [number, number];
/** A narrow line that broadens into a rotation dish of half-width hw (nm). */
const spinDip = (c: number, hw: number) => { const u = Math.min(1, hw / 0.08); const g = gaussDip(c, 0.025, 0.85), r = rotDip(c, Math.max(0.03, hw), 0.6); return (x: number) => Math.max(g(x) * (1 - u), r(x) * u); };

// ---------- 6. a spinning star ----------
const ST6: Pt = [290, 400], D6 = 300;
const BIG6 = {x: 620, y: 240, w: 540, h: 170};
export const S06: React.FC = () => {
	const id = 'rotation';
	const f = useCurrentFrame();
	const bsh = cue(id, 'blueshifted'), rsh = cue(id, 'redshifted'), mid = cue(id, 'The middle'), smear = cue(id, 'smeared out'), angle = cue(id, 'Seen from the same angle'), faster = cue(id, 'the faster the star spins'), way = cue(id, 'each way'), tip = cue(id, 'tip the star'), narrow = cap(id, cue(id, 'leaves the lines narrow'));
	const R = D6 / 2;
	const pole = prog(f, tip, 40);
	const ry = R * (0.22 + 0.73 * pole);
	const tint = 1 - pole;
	const vEq = f < faster ? ROT_V : kf(f, [[faster, ROT_V], [faster + 12, SPIN_V[0]], [faster + 40, SPIN_V[0]], [faster + 52, SPIN_V[1]], [faster + 80, SPIN_V[1]], [faster + 92, SPIN_V[2]], [faster + 120, SPIN_V[2]], [faster + 132, SPIN_V[3]], [way - 30, SPIN_V[3]], [way, ROT_V]]);
	const hw = shiftNm(HA, vEq) * (1 - pole);
	const subs: [number, number, string][] = [[-ROT_HW, bsh, APPROACH], [0, mid, INK], [ROT_HW, rsh, RECEDE]];
	const slide = prog(f, smear, 30);
	const spin = f * 0.35;
	const arcPath = (a0: number, a1: number) => `M${ST6[0] + R * Math.cos(a0)},${ST6[1] + ry * Math.sin(a0)} A${R},${Math.max(1, ry)} 0 0,1 ${ST6[0] + R * Math.cos(a1)},${ST6[1] + ry * Math.sin(a1)}`;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<defs><clipPath id="v04-disc"><circle cx={ST6[0]} cy={ST6[1]} r={R * 0.96} /></clipPath></defs>
				<Disc spec={SUN} cx={ST6[0]} cy={ST6[1]} d={D6} spin={spin} />
				{tint > 0.001 ? <g clipPath="url(#v04-disc)" opacity={tint}>
					<rect x={ST6[0] - R} y={ST6[1] - R} width={R * 0.55} height={2 * R} fill={APPROACH} opacity={prog(f, bsh, 14) * 0.4} />
					<rect x={ST6[0] + R * 0.45} y={ST6[1] - R} width={R * 0.55} height={2 * R} fill={RECEDE} opacity={prog(f, rsh, 14) * 0.4} />
				</g> : null}
				<path d={arcPath(Math.PI, 2 * Math.PI)} fill="none" stroke={NAVY.stroke} strokeWidth={4} strokeDasharray="10 8" opacity={0.8} />
				<path d={arcPath(0, Math.PI)} fill="none" stroke={NAVY.stroke} strokeWidth={5} />
				<Arrow from={[ST6[0] - 30, ST6[1] + ry]} to={[ST6[0] + 30, ST6[1] + ry]} color={NAVY.stroke} width={6} head={20} />
				{f >= tip ? <circle cx={ST6[0]} cy={ST6[1]} r={30} fill="none" stroke={NAVY.stroke} strokeWidth={5} opacity={prog(f, tip + 30, 12)} /> : null}
				{subs.map(([off, at, c], i) => {
					if (f < at) return null;
					const bx0 = ST6[0] - 180 + i * 125, by0 = 600;
					const bx = bx0 + (BIG6.x + (BIG6.w - 110) / 2 - bx0) * slide, by = by0 + (BIG6.y + 40 - by0) * slide;
					return <g key={i} opacity={prog(f, at, 12) * (1 - prog(f, smear + 24, 10))}>
						<rect x={bx - 4} y={by - 8} width={118} height={86} rx={8} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2} />
						<LineProfile x={bx} y={by} w={110} h={60} x0={HA - 0.6} x1={HA + 0.6} dip={gaussDip(HA + off, 0.03, 0.85)} color={c} width={4} axis={false} />
					</g>;
				})}
				{f >= smear ? <g opacity={prog(f, smear + 20, 14)}>
					<rect x={BIG6.x - 10} y={BIG6.y - 20} width={BIG6.w + 20} height={BIG6.h + 60} rx={12} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
					<LineProfile x={BIG6.x} y={BIG6.y} w={BIG6.w} h={BIG6.h} x0={HA - 0.6} x1={HA + 0.6} dip={spinDip(HA, hw)} />
					<line x1={BIG6.x + BIG6.w / 2} y1={BIG6.y - 10} x2={BIG6.x + BIG6.w / 2} y2={BIG6.y + BIG6.h + 14} stroke={GREY.stroke} strokeWidth={3} strokeDasharray="6 6" />
				</g> : null}
				<Slider x={640} y={510} w={480} v0={0} v1={150} v={vEq / 1000} ticks={[0, 50, 100, 150]} label="equator speed (km s⁻¹)" opacity={prog(f, faster, 12)} />
			</FrameSvg>
			<Lbl x={ST6[0] - R - 10} y={ST6[1] - R - 20} at={bsh} out={tip + 20} color={APPROACH} size={28}>edge towards us</Lbl>
			<Lbl x={ST6[0] + R + 10} y={ST6[1] - R - 20} at={rsh} out={tip + 20} color={RECEDE} size={28} anchor="end">edge away</Lbl>
			<Lbl x={ST6[0]} y={ST6[1] + R + 40} at={bsh} out={tip} color={GREY.ink} size={26} anchor="middle">tints: blue towards us, red away</Lbl>
			<Lbl x={ST6[0]} y={180} at={0} color={INK} size={28} anchor="middle">a spinning star</Lbl>
			<HandTag x={BIG6.x} y={BIG6.y - 46} text="rotational broadening" at={smear + 24} size={34} color={INK} />
			<Lbl x={BIG6.x + BIG6.w} y={BIG6.y + BIG6.h + 40} at={smear + 20} color={INK} size={26} anchor="end">656.3 nm line (profile)</Lbl>
			<HandTag x={ST6[0] + R - 10} y={ST6[1] + R - 10} text="side-on" at={angle} out={tip} size={34} color={NAVY.ink} />
			<Lbl x={640} y={600} at={faster} color={NAVY.ink} size={52}>{`v_eq = ${fx(vEq / 1000, 0)} km s⁻¹`}</Lbl>
			<Lbl x={640} y={672} at={faster} color={INK} size={44}>{`half-width = ${hw < 0.005 ? '0' : fx(hw, 2) + ' nm'}`}</Lbl>
			<div style={{position: 'absolute', left: 96, top: 730, display: 'flex', flexDirection: 'column', gap: 12, width: 1110}}>
				<Row at={way - 6} ageAt={tip} size={44} oldSize={34}><span style={{whiteSpace: 'nowrap'}}>{`Δλ = (v / c) λ = (1.00 × 10⁵) / (3.00 × 10⁸) × ${fx(HA, 1)}`}</span></Row>
				<Row at={way} size={60}><AnswerBox at={way + 6}><span style={{whiteSpace: 'nowrap', color: ORANGE.ink}}>{`= ${fx(ROT_HW, 2)} nm each side`}</span></AnswerBox><span style={{fontSize: 28, color: GREY.ink, fontWeight: 700}}>{'  illustrative'}</span></Row>
			</div>
			<CrossedChip x={FB.x} y={520} at={way + 30} crossAt={way + 46} size={30} w={560} caption={`each side: ${fx(ROT_WHOLE, 2)} nm in all`}>{`${fx(ROT_HW, 2)} nm is the whole spread`}</CrossedChip>
			<HandTag x={ST6[0] - 40} y={ST6[1] + R + 90} text="spin across our view: no shift" at={tip + 36} size={32} color={NAVY.ink} anchor="middle" />
			<FeatureBoard x={FB.x} y={FB.y} scale={FB.s} e={{comp: -60, temp: -60, vel: -60, rot: narrow}} />
		</>
	);
};

// ---------- 7. dense or thin? ----------
const DB = {x: 96, y: 200}, TB = {x: 760, y: 200};
const PD = {x: 96, y: 470, w: 380, h: 70}, PT = {x: 760, y: 470, w: 380, h: 70};
const DW = {x: 300, y: 640, w: 880, h: 50}, GI = {x: 300, y: 790, w: 880, h: 50};
export const S07: React.FC = () => {
	const id = 'density';
	const f = useCurrentFrame();
	const coll = cue(id, 'atoms collide very often'), dis = cue(id, "disturbs an atom's energy levels"), brd = cue(id, 'broadens'), dwarf = cue(id, 'A dwarf star'), giant = cue(id, 'A giant star'), sharp = cue(id, 'sharp'), ident = cap(id, cue(id, 'identical'));
	const wob = prog(f, dis, 12) * Math.sin(f * 0.9) * 10;
	const rD = collisionRateAt(denseGas(), f), rT = collisionRateAt(thinGas(), f);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<ParticleBoxView run={denseGas()} x={DB.x} y={DB.y} looks={{a: {tone: 'violet'}}} opacity={prog(f, 4, 12)} />
			<ParticleBoxView run={thinGas()} x={TB.x} y={TB.y} looks={{a: {tone: 'violet'}}} opacity={prog(f, 4, 12)} />
			<FrameSvg>
				{f >= dis ? <g opacity={prog(f, dis, 12)}>
					<rect x={540} y={200} width={170} height={220} rx={12} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
					<EnergyLadder x={575} w={110} top={170 + wob} bot={560 - wob * 0.5} levels={[1, 2, 3]} color={NAVY.stroke} />
				</g> : null}
				{f >= brd ? <LineProfile x={PD.x} y={PD.y} w={PD.w} h={PD.h} x0={-1} x1={1} dip={lorentzDip(0, 0.18, 0.8)} opacity={prog(f, brd, 14)} /> : null}
				{f >= brd ? <path d={`M${PD.x + 110},${PD.y + PD.h + 34} v12 H${PD.x + 270} v-12`} stroke={INK} strokeWidth={4} fill="none" opacity={prog(f, brd + 16, 12)} /> : null}
				{f >= sharp ? <LineProfile x={PT.x} y={PT.y} w={PT.w} h={PT.h} x0={-1} x1={1} dip={lorentzDip(0, 0.025, 0.85)} opacity={prog(f, sharp, 14)} /> : null}
				{f >= dwarf ? <g opacity={prog(f, dwarf, 14)}><Disc spec={SUN} cx={170} cy={DW.y + 25} d={90} /><SpectrumStrip s={DW} kind="absorption" lines={H_LINES} broaden={14} lineW={8} /></g> : null}
				{f >= giant ? <g opacity={prog(f, giant, 14)}><circle cx={170} cy={GI.y + 25} r={100} fill="none" stroke="#e0a030" strokeWidth={4} /><SpectrumStrip s={GI} kind="absorption" lines={H_LINES} lineW={6} axis ticks={[400, 500, 600, 700]} /></g> : null}
			</FrameSvg>
			<Lbl x={DB.x} y={DB.y - 24} at={0} color={INK} size={30}>dense atmosphere (model)</Lbl>
			<Lbl x={TB.x} y={TB.y - 24} at={0} color={INK} size={30}>thin atmosphere (model)</Lbl>
			<Lbl x={DB.x} y={DB.y + 250} at={coll} out={brd} color={AMBER_INK} size={28}>{`collisions: ${Math.round(rD)} per second`}</Lbl>
			<Lbl x={TB.x} y={TB.y + 250} at={coll} out={sharp} color={AMBER_INK} size={28}>{`collisions: ${Math.round(rT)} per second`}</Lbl>
			<Lbl x={625} y={450} at={dis} color={NAVY.ink} size={26} anchor="middle">levels jostled</Lbl>
			<HandTag x={DB.x + 20} y={DB.y + 290} text="crowded: bumped levels" at={dis + 20} out={brd} size={32} color={INK} />
			<HandTag x={PD.x + PD.w + 16} y={PD.y + 30} text="pressure broadening" at={brd + 10} out={giant} size={32} color={INK} />
			<HandTag x={TB.x + 20} y={TB.y + 290} text="roomy: sharp" at={sharp + 10} size={32} color={INK} />
			<Lbl x={DW.x + DW.w + 20} y={DW.y + 30} at={dwarf} color={INK} size={28}>dwarf: dense</Lbl>
			<Lbl x={DW.x + DW.w + 20} y={DW.y + 64} at={dwarf} color={INK} size={28}>atmosphere</Lbl>
			<Lbl x={GI.x + GI.w + 20} y={GI.y + 30} at={giant} color={INK} size={28}>giant: thin</Lbl>
			<Lbl x={GI.x + GI.w + 20} y={GI.y + 64} at={giant} color={INK} size={28}>atmosphere</Lbl>
			<Lbl x={170} y={GI.y + 150} at={giant} color={GREY.ink} size={26} anchor="middle">not to scale</Lbl>
			<Chip x={300} y={890} at={ident} size={28} color={NAVY.ink} border={NAVY.stroke}>same temperature, same lines, different widths</Chip>
			<FeatureBoard x={FB.x} y={FB.y} scale={FB.s} e={{comp: -60, temp: -60, vel: -60, rot: -60, dens: ident}} />
		</>
	);
};
const AMBER_INK = '#9c5a00';

// ---------- 8. telling the clues apart ----------
const PR = {x: 120, y: 250, w: 480, h: 230}, PP = {x: 700, y: 250, w: 480, h: 230};
export const S08: React.FC = () => {
	const id = 'separating-clues';
	const f = useCurrentFrame();
	const shape = cue(id, 'By the shape'), dish = cue(id, 'dish-shaped'), core = cue(id, 'narrow core'), side = cue(id, 'stretching out on each side'), put = cue(id, 'Put it together'), pos = cue(id, 'Position tells you'), wid = cue(id, 'Width tells you'), str = cap(id, cue(id, 'Strength and colour tell you'));
	const mv = prog(f, put, 30);
	const bx = FB.x + (420 - FB.x) * mv, by = FB.y + (330 - FB.y) * mv, bs = FB.s + (1.75 - FB.s) * mv;
	const pulse = f >= str ? 2 : f >= wid ? 1 : f >= pos ? 0 : -1;
	const pairO = 1 - prog(f, put, 16);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<g opacity={pairO}>
					<LineProfile x={PR.x} y={PR.y} w={PR.w} h={PR.h} x0={-1} x1={1} dip={rotDip(0, 0.45, 0.6)} opacity={prog(f, 2, 14)} draw={prog(f, 2, 30)} width={f >= dish && f < core ? 8 : 5} />
					<LineProfile x={PP.x} y={PP.y} w={PP.w} h={PP.h} x0={-1} x1={1} dip={lorentzDip(0, 0.06, 0.9)} opacity={prog(f, 2, 14)} draw={prog(f, 2, 30)} width={f >= core && f < put ? 8 : 5} wing={{color: NAVY.stroke, opacity: prog(f, side, 14)}} />
					{f >= side ? <ellipse cx={PP.x + PP.w * 0.82} cy={PP.y + 18} rx={60} ry={28} fill="none" stroke={INK} strokeWidth={4} opacity={prog(f, side + 10, 12)} /> : null}
				</g>
			</FrameSvg>
			<Lbl x={PR.x} y={PR.y - 40} at={2} out={put} color={INK} size={34}>spin</Lbl>
			<Lbl x={PP.x} y={PP.y - 40} at={2} out={put} color={INK} size={34}>collisions</Lbl>
			<Lbl x={PR.x} y={PR.y + PR.h + 70} at={2} out={put} color={GREY.ink} size={26}>line profiles (schematic)</Lbl>
			<Chip x={96} y={700} at={shape} out={put} size={34} color={INK}>tell them apart by the shape</Chip>
			<HandTag x={PR.x + PR.w / 2} y={PR.y + PR.h + 40} text="dish" at={dish + 10} out={put} size={36} color={INK} anchor="middle" />
			<HandTag x={PP.x + PP.w * 0.82} y={PP.y + PP.h + 40} text="long wings" at={side + 10} out={put} size={36} color={INK} anchor="middle" />
			<Lbl x={96} y={600} at={dish} out={put} color={INK} size={32}>spin: rounded dip, steep edges, no long tails</Lbl>
			<Lbl x={96} y={660} at={core} out={put} color={INK} size={32}>collisions: narrow core, long faint wings</Lbl>
			<FeatureBoard x={bx} y={by} scale={bs} e={{comp: -60, temp: -60, vel: -60, rot: -60, dens: -60}} pulse={pulse} full={mv > 0.5} />
		</>
	);
};

// ---------- 9. a way to remember ----------
export const S09: React.FC = () => {
	const id = 'memory-aid';
	const f = useCurrentFrame();
	const w = cue(id, 'Where tells you what'), wd = cue(id, 'Width tells you spin'), hot = cap(id, cue(id, 'how hot')), three = cue(id, 'Where how wide how strong');
	const cols: [string, string, number, string][] = [['where', 'what and how fast', w, ROSE.ink], ['how wide', 'spin or squeeze', wd, NAVY.ink], ['how strong', 'how hot', hot, ORANGE.ink]];
	const lit = f >= hot ? 2 : f >= wd ? 1 : f >= w ? 0 : -1;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<div style={{position: 'absolute', left: 300, top: 180, width: 1320}}>
				<MemoryCard at={three} main={<>Where: what and how fast. Width: spin or squeeze. Strength and colour: how hot.</>} />
			</div>
			{cols.map(([h, s, at, c], i) => (
				<div key={h} style={{position: 'absolute', left: 160 + i * 560, top: 560, width: 500, padding: '18px 22px', borderRadius: 18, background: lit === i ? '#f6ead2' : '#fffdf8', border: `4px solid ${lit === i ? c : 'rgba(60,45,20,0.2)'}`, opacity: prog(f, 2 + i * 6, 12)}}>
					<div style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 60, color: c}}>{h}</div>
					<div style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 40, color: INK, opacity: prog(f, at, 12)}}>{s}</div>
				</div>
			))}
		</>
	);
};

// ---------- 10. attempt 1 ----------
export const Q1: React.FC<{u?: boolean}> = ({u = false}) => <>The H-alpha line of hydrogen has a rest wavelength of {u ? <u>656.3 nm</u> : '656.3 nm'}. In the spectrum of a star it is observed at {u ? <u>655.6 nm</u> : '655.6 nm'}. Calculate the star's radial velocity and state whether the star is approaching or receding.</>;
/** Attempt 1 picture: the white star and a strip with only the rest position marked; `obs` adds the observed line. */
export const StarStripPic: React.FC<{w?: number; h?: number; obs?: number; arrow?: number}> = ({w = 678, h = 560, obs = 0, arrow = 0}) => {
	const s = {x: 60, y: h - 220, w: w - 120, h: 70, nm0: 653.3, nm1: 659.3};
	const xr = nmX(s, 656.3), xo = nmX(s, 655.6);
	return (
		<svg width={w} height={h} style={{overflow: 'visible'}}>
			<rect x={10} y={20} width={w - 28} height={h - 40} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
			<Disc spec={STAR_WHITE} cx={w / 2} cy={170} d={200} />
			<SpectrumStrip s={s} kind="emission" lines={obs > 0.001 ? [655.6] : []} lineW={10} opacity={1} />
			<line x1={xr} y1={s.y - 14} x2={xr} y2={s.y + s.h + 14} stroke={GREY.stroke} strokeWidth={4} strokeDasharray="8 6" />
			<text x={xr} y={s.y + s.h + 50} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 28, fill: GREY.ink}}>656.3 nm (rest)</text>
			{arrow > 0.001 ? <g opacity={arrow}><Arrow from={[xr, s.y - 26]} to={[xo, s.y - 26]} color={ROSE.stroke} width={5} head={14} /><text x={(xr + xo) / 2} y={s.y - 44} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 30, fill: ROSE.ink}}>−0.7 nm</text></g> : null}
			<text x={s.x} y={s.y - 16} style={{fontFamily: 'Inter Tight', fontWeight: 700, fontSize: 26, fill: INK}}>H-alpha region of the star's spectrum</text>
		</svg>
	);
};
export const S10: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Your turn" pauseAt={cue('attempt-1', 'Pause here')} hold={hold('attempt-1')} size={38} marks={3} picture={<StarStripPic />}><Q1 /></QuestionScene></Accent>;
