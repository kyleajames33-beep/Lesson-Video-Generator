// Scenes 7 to 12: the classical prediction (standing waves in the box from the waves engine, an equal amber share
// each, the pattern count; the dashed classical curve following the measured one at long wavelengths and running off
// the top), the ultraviolet catastrophe (the shaded runaway area and a 330 K inset that still diverges), Planck's
// packets (the jiggling wall charges and an energy ladder with equal steps), why big packets fix the curve (packet
// bars against the thermal band; the high-frequency packet locked), what Wien and Planck did not claim (the three-row
// card) and the memory aid.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading, kf} from '../../math/studio';
import {MemoryCard} from '../../shared/scenes';
import {Chip, CrossedChip} from '../../physics/projectile/board';
import {BBPlot, Cavity, Heater, Ladder, PacketBar, StandingPattern, ThermalBand, bbX, bbY} from '../../physics/light/thermal';
import {classicalRadiance, planck} from '../../sims/blackbody';
import {B, H_PLANCK, HEAD, HEAD_SIZE, MODE_FACTOR, T_COOL, T_HOT, T_SUN, T_TEA, cap, cue} from './common';
import {AMBER, CLASSICAL, GREY, INK, Lattice, Lbl, NAVY, SLATE, Strip, TCOL, bbG, glowFor, sci} from './parts';

const G7 = bbG(1000, 300, 820, 440, 100, 2000);
const CB7 = {x: 120, y: 240, w: 600, h: 520};

// ---------- 7. the classical prediction ----------
export const S07: React.FC = () => {
	const id = 'classical-prediction';
	const f = useCurrentFrame();
	const pic = cue(id, 'Picture the radiation inside the hot box'), sw = cue(id, 'as standing waves'), share = cue(id, 'same average share of thermal energy'), far = cue(id, 'shorter waves fit in far more ways'), halve = cue(id, 'Halve the wavelength'), eight = cue(id, 'eight times as many patterns'), long = cue(id, 'matched the measured curve at long wavelengths'), limit = cap(id, cue(id, 'without any limit'));
	const n = f < sw ? 0 : f < far ? (f < sw + 24 ? 1 : 2) : Math.min(10, 2 + Math.floor((f - far) / 8));
	const lane = (CB7.h - 60) / 10;
	const t = f / 30;
	const cl = f < long ? 0 : kf(f, [[long, 0], [long + 30, 0.55], [limit, 0.6], [limit + 24, 1]]);
	const stack = prog(f, eight, 20);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<Cavity x={CB7.x} y={CB7.y} w={CB7.w} h={CB7.h} opacity={prog(f, pic, 12)}>
					{Array.from({length: n}, (_, i) => <StandingPattern key={i} x0={CB7.x + 22} x1={CB7.x + CB7.w - 22} y={CB7.y + 50 + i * lane} n={i + 1} amp={lane * 0.38} t={t} color={NAVY.stroke} width={3.5} />)}
				</Cavity>
				{f >= share ? Array.from({length: n}, (_, i) => <rect key={i} x={CB7.x + CB7.w + 24 + stack * (120 - 0)} y={stack > 0.001 ? 760 - (i + 1) * 30 * stack - (1 - stack) * (760 - (CB7.y + 38 + i * lane)) : CB7.y + 38 + i * lane} width={60} height={24} rx={4} fill={AMBER.stroke} opacity={prog(f, share + i * 2, 10)} />) : null}
				<BBPlot g={G7} curves={[{T: T_SUN, color: TCOL[5800], width: 6}]} ticks={[500, 1000, 1500, 2000]} shade={1} band={1} classical={{T: T_SUN, draw: cl, color: CLASSICAL}} axes={1} />
			</FrameSvg>
			<Lbl x={CB7.x} y={CB7.y - 30} at={pic} color={INK} size={28}>inside the hot box</Lbl>
			<Lbl x={CB7.x} y={CB7.y + CB7.h + 60} at={sw} color={INK} size={44}>{`patterns: ${n}`}</Lbl>
			<Lbl x={CB7.x} y={CB7.y + CB7.h + 130} at={sw + 10} color={GREY.ink} size={26}>Year 11: standing waves fit whole half-wavelengths</Lbl>
			<HandTag x={CB7.x + CB7.w + 20} y={CB7.y - 10} text="equal share each" at={share + 10} size={30} color={GREY.ink} />
			<Lbl x={CB7.x + 380} y={CB7.y + CB7.h + 60} at={halve} color={AMBER.ink} size={44}>{`halve λ: × ${MODE_FACTOR}`}</Lbl>
			<HandTag x={CB7.x + 680} y={CB7.y + CB7.h + 66} text="in a 3D box" at={halve + 10} size={28} color={GREY.ink} marks={[{kind: 'circle', cx: CB7.x + 610, cy: CB7.y + CB7.h + 58, rx: 50, ry: 32}]} />
			<Lbl x={CB7.x + CB7.w + 174} y={430} at={eight} color={AMBER.ink} size={26} anchor="middle">energy at short λ</Lbl>
			<Lbl x={G7.x + G7.w - 10} y={G7.y + G7.h - 24} at={long} color={GREY.ink} size={26} anchor="end">compressed scale</Lbl>
			<Lbl x={bbX(G7, 1300)} y={bbY(G7, 0.5) - 40} at={long + 10} color={CLASSICAL} size={28}>classical: Rayleigh-Jeans</Lbl>
			<Lbl x={G7.x + G7.w / 2} y={G7.y + G7.h + 90} at={long} color={INK} size={28} anchor="middle">wavelength λ (nm)</Lbl>
			<HandTag x={bbX(G7, 300)} y={G7.y - 40} text="no limit: → ∞" at={limit} size={32} color={SLATE.ink} />
		</>
	);
};

// ---------- 8. the ultraviolet catastrophe ----------
const G8 = bbG(320, 260, 1160, 520, 100, 2000);
export const S08: React.FC = () => {
	const id = 'uv-catastrophe';
	const f = useCurrentFrame();
	const cat = cue(id, 'ultraviolet catastrophe'), energy = cue(id, 'infinite total energy'), tea = cue(id, 'a warm cup of tea'), pk = cue(id, 'always peak and then fall'), missing = cap(id, cue(id, 'Something basic was missing'));
	const area = Array.from({length: 120}, (_, i) => { const nm = 100 + i * 16; return [bbX(G8, nm), bbY(G8, Math.pow(classicalRadiance(nm * 1e-9, T_SUN) / G8.ref, G8.pow ?? 1))]; });
	const TI = {x: 1540, y: 300, w: 280, h: 200};
	const tRef = planck(B / T_TEA, T_TEA);
	const tea1 = Array.from({length: 80}, (_, i) => { const nm = 1000 + i * 400; return `${i ? 'L' : 'M'}${TI.x + (i / 79) * TI.w},${TI.y + TI.h - Math.min(1.05, planck(nm * 1e-9, T_TEA) / tRef) * TI.h}`; }).join(' ');
	const tea2 = Array.from({length: 80}, (_, i) => { const nm = 1000 + i * 400; return `${i ? 'L' : 'M'}${TI.x + (i / 79) * TI.w},${TI.y + TI.h - Math.min(1.1, classicalRadiance(nm * 1e-9, T_TEA) / tRef) * TI.h}`; }).join(' ');
	const pulse = f >= pk ? 0.6 + 0.4 * Math.cos(((f - pk) / 20) * Math.PI * 2) : 1;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				{f >= energy ? <path d={`M${area.map(p => p.join(',')).join(' L')} L${G8.x + G8.w},${G8.y + G8.h} L${G8.x},${G8.y + G8.h} Z`} fill={CLASSICAL} opacity={0.22 * prog(f, energy, 14)} /> : null}
				<BBPlot g={G8} curves={[{T: T_SUN, color: TCOL[5800], width: 6, opacity: pulse}]} ticks={[500, 1000, 1500, 2000]} shade={1} band={1} classical={{T: T_SUN, draw: 1, color: CLASSICAL}} />
				{f >= tea ? <g opacity={prog(f, tea, 12)}>
					<rect x={TI.x - 20} y={TI.y - 20} width={TI.w + 40} height={TI.h + 60} rx={12} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
					<line x1={TI.x} y1={TI.y + TI.h} x2={TI.x + TI.w} y2={TI.y + TI.h} stroke={INK} strokeWidth={3} />
					<path d={tea1} fill="none" stroke={TCOL[330]} strokeWidth={4} />
					<path d={tea2} fill="none" stroke={CLASSICAL} strokeWidth={4} strokeDasharray="10 8" />
				</g> : null}
				{f >= missing ? <ellipse cx={bbX(G8, 300)} cy={G8.y + 120} rx={110} ry={150} fill="none" stroke={SLATE.stroke} strokeWidth={5} opacity={prog(f, missing, 10)} /> : null}
			</FrameSvg>
			<div style={{position: 'absolute', left: G8.x + 40, top: G8.y + 160, transform: `rotate(-8deg) scale(${1 + 0.3 * (1 - prog(f, cat, 10))})`, border: `5px solid ${SLATE.stroke}`, borderRadius: 10, padding: '6px 18px', fontFamily: 'Inter Tight', fontWeight: 900, fontSize: 40, color: SLATE.ink, opacity: prog(f, cat, 10), background: '#fffdf8'}}>ultraviolet catastrophe</div>
			<Lbl x={G8.x + G8.w + 30} y={G8.y + G8.h + 10} at={0} color={INK} size={28}>λ (nm)</Lbl>
			<Lbl x={bbX(G8, 1300)} y={bbY(G8, 0.75)} at={0} color={CLASSICAL} size={28}>classical (dashed)</Lbl>
			<HandTag x={G8.x + 40} y={G8.y + G8.h - 60} text="total energy → ∞" at={energy + 10} size={32} color={SLATE.ink} />
			<Lbl x={TI.x - 10} y={TI.y - 34} at={tea} color={INK} size={26}>{`about ${T_TEA} K (own scale)`}</Lbl>
			<Lbl x={TI.x - 10} y={TI.y + TI.h + 66} at={tea + 10} color={CLASSICAL} size={26}>classical: still diverges</Lbl>
			<HandTag x={bbX(G8, 800)} y={bbY(G8, 1) - 40} text="measured: always peaks and falls" at={pk + 6} size={30} color={AMBER.ink} />
			<Chip x={1520} y={640} at={missing} size={28} w={300} color={INK}>long λ: classical works ✓</Chip>
			<Chip x={1520} y={720} at={missing + 4} size={28} w={300} color={SLATE.ink} border={SLATE.stroke}>short λ: classical fails ✗</Chip>
			<Chip x={96} y={876} at={cat + 20} size={26} w={1400} color={INK}>Ultraviolet catastrophe: the failure of classical wave theory to predict the correct intensity of black-body radiation at short wavelengths; resolved by Planck's quantum hypothesis.</Chip>
		</>
	);
};

// ---------- 9. Planck's packets ----------
const G9 = bbG(1380, 620, 440, 230, 100, 2000);
export const S09: React.FC = () => {
	const id = 'planck-packets';
	const f = useCurrentFrame();
	const fix = cue(id, 'Max Planck found the fix'), vib = cue(id, 'the vibrating charges in the walls'), whole = cue(id, 'whole packets, called quanta'), ehf = cue(id, 'E equals h f'), hval = cue(id, 'six point six two six'), none = cue(id, 'hold no packets'), nhf = cap(id, cue(id, 'E equals n h f'));
	const at = f < none ? 0 : kf(f, [[none + 10, 0], [none + 22, 1], [none + 34, 1], [none + 46, 2], [none + 58, 2], [none + 70, 3]]);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<rect x={96} y={200} width={520} height={700} rx={10} fill="#d8d2c6" opacity={prog(f, 2, 12)} />
				<Lattice cx={356} cy={550} r={300} jiggle={f >= vib ? 1.3 : 0.5} color={NAVY.stroke} opacity={prog(f, 2, 12)} />
				<Ladder x={740} base={860} step={95} rungs={6} w={240} at={at} color={AMBER.stroke} marker={NAVY.stroke} opacity={0.35 + 0.65 * prog(f, whole, 14)} />
				{f >= nhf ? <path d={`M1000,860 h20 V${860 - 95} h-20`} fill="none" stroke={AMBER.stroke} strokeWidth={5} opacity={prog(f, nhf, 10)} /> : null}
				<BBPlot g={G9} curves={[{T: T_SUN, color: TCOL[5800], width: 4}]} ticks={[1000, 2000]} shade={1} band={0} classical={{T: T_SUN, draw: 1, color: CLASSICAL}} />
			</FrameSvg>
			<Lbl x={110} y={185} at={2} color={INK} size={26}>a wall of the hot box, close up</Lbl>
			<HandTag x={180} y={940} text="oscillators" at={vib + 10} size={32} color={NAVY.ink} />
			<Lbl x={740} y={330} at={whole} color={AMBER.ink} size={28}>an oscillator's energy</Lbl>
			{Array.from({length: 4}, (_, n) => <Lbl key={n} x={1000} y={860 - n * 95 + 10} at={n === 0 ? whole : none + 10 + n * 24} color={INK} size={28}>{`n = ${n}`}</Lbl>)}
			<HandTag x={760} y={250} text="quanta: packets of energy" at={whole + 16} size={30} color={AMBER.ink} />
			<Strip x={1100} y={200} at={ehf} size={48}>E = hf (one packet)</Strip>
			<Chip x={1100} y={300} at={hval} size={30} w={600} color={INK} border={INK}>{`h = ${sci(H_PLANCK, 3)} J s (data sheet)`}</Chip>
			<Strip x={1100} y={400} at={nhf} size={44}>E = nhf (n = 0, 1, 2, 3, ...)</Strip>
			<Lbl x={1050} y={812} at={nhf} color={AMBER.ink} size={30}>hf</Lbl>
			<HandTag x={1100} y={530} text="0, 1, 2, 3 packets: never 1½" at={none + 30} size={30} color={AMBER.ink} />
			<Lbl x={1100} y={590} at={fix} color={GREY.ink} size={28}>Max Planck, 1900</Lbl>
		</>
	);
};

// ---------- 10. why big packets fix the curve ----------
const G10 = bbG(1100, 300, 720, 420, 100, 2000);
export const S10: React.FC = () => {
	const id = 'packets-fix-curve';
	const f = useCurrentFrame();
	const jig = cue(id, 'hands out energy in small random amounts'), low = cue(id, 'At low frequencies a packet is small'), right = cue(id, 'about right'), huge = cue(id, 'one packet is huge'), out = cue(id, 'frozen out'), every = cap(id, cue(id, 'matched the measurements at every wavelength'));
	const BASE = 860, BAND = {y: 700, h: 50};
	const fillLow = f < right ? 0 : 0.5 + 0.5 * Math.sin(((f - right) / 18) * Math.PI);
	const lock = prog(f, out, 14);
	const blocks = Array.from({length: 8}, (_, i) => { const k = Math.floor(f / 6) + i * 7; const h = 10 + ((k * 37) % 40); return {x: 140 + i * 105, h}; });
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<ThermalBand x={110} w={900} y={BAND.y} h={BAND.h} opacity={prog(f, 2, 12)} />
				{f >= jig ? blocks.map((b, i) => <rect key={i} x={b.x} y={BASE - b.h} width={60} height={b.h} rx={4} fill="#8a8378" opacity={0.7 * prog(f, jig, 12)} />) : null}
				<PacketBar x={300} base={BAND.y - 10} h={90} fill={fillLow} color={AMBER.stroke} opacity={prog(f, low, 12)} />
				<PacketBar x={720} base={BAND.y - 10} h={460} fill={0} locked={lock} color={AMBER.stroke} opacity={prog(f, huge, 12)} />
				<BBPlot g={G10} curves={[{T: T_SUN, color: TCOL[5800], width: f >= every ? 8 : 5}]} ticks={[500, 1000, 1500, 2000]} shade={1} band={1} classical={{T: T_SUN, draw: 1, color: CLASSICAL, opacity: 1 - 0.85 * lock}} />
				{f >= every ? <rect x={G10.x} y={G10.y} width={bbX(G10, 400) - G10.x} height={G10.h} fill={AMBER.stroke} opacity={0.12 * prog(f, every, 12)} /> : null}
			</FrameSvg>
			<Lbl x={120} y={BAND.y + BAND.h + 34} at={2} color={GREY.ink} size={28}>{`typical thermal energy at ${T_SUN} K`}</Lbl>
			<Lbl x={300} y={BAND.y - 120} at={low} color={AMBER.ink} size={28} anchor="middle">long λ (low f)</Lbl>
			<Lbl x={720} y={BAND.y - 490} at={huge} color={AMBER.ink} size={28} anchor="middle">short λ (high f)</Lbl>
			<Lbl x={300} y={BAND.y - 160} at={right} color={INK} size={26} anchor="middle">affordable: shared as classical predicts</Lbl>
			<HandTag x={800} y={BAND.y - 300} text="too big to afford" at={out} size={32} color={AMBER.ink} marks={[{kind: 'circle', cx: 720, cy: BAND.y - 240, rx: 60, ry: 60}]} />
			<Lbl x={800} y={BAND.y - 220} at={out + 10} color={GREY.ink} size={28}>frozen out (n = 0)</Lbl>
			<Lbl x={G10.x + G10.w - 10} y={G10.y + G10.h - 24} at={2} color={GREY.ink} size={26} anchor="end">compressed scale</Lbl>
			<Lbl x={bbX(G10, 900)} y={G10.y - 20} at={every} color={AMBER.ink} size={30}>{"Planck's formula = measurement"}</Lbl>
			<Lbl x={G10.x + G10.w / 2} y={G10.y + G10.h + 90} at={2} color={INK} size={28} anchor="middle">wavelength λ (nm)</Lbl>
		</>
	);
};

// ---------- 11. what Wien and Planck did not claim ----------
export const S11: React.FC = () => {
	const id = 'claims-limits';
	const f = useCurrentFrame();
	const two = cue(id, 'Two warnings'), alone = cue(id, "Wien's law alone"), wl = cue(id, 'especially the fall at short wavelengths'), pq = cue(id, 'Planck quantised the vibrating charges'), notl = cue(id, 'not light itself'), ein = cue(id, 'Einstein in 1905'), head = cap(id, cue(id, "that's where we're heading"));
	const row = (y: number) => ({position: 'absolute' as const, left: 96, top: y, width: 1300, minHeight: 130, padding: '14px 24px', background: '#fffdf8', border: '2.5px solid rgba(60,45,20,0.25)', borderRadius: 14, fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 36, color: INK, opacity: prog(f, two, 12), boxSizing: 'border-box' as const});
	const o = (at: number) => ({opacity: prog(f, at, 12)});
	const g = bbG(1450, 260, 380, 260, 100, 2000);
	const pulse = f >= wl ? 0.25 + 0.2 * Math.sin(((f - wl) / 16) * Math.PI) : 0;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<div style={row(190)}><div style={o(alone)}>{"Wien's law (1893): found with classical physics; peak position only"}</div><div style={{...o(wl), fontSize: 30, color: AMBER.ink}}>packets needed for: the whole shape, the short-λ fall</div></div>
			<div style={row(370)}><div style={o(pq)}>{"Planck (1900): the oscillators' energy comes in packets"}</div></div>
			<div style={row(550)}><div style={o(ein)}>Einstein (1905): light itself comes in packets</div></div>
			<FrameSvg>
				<BBPlot g={g} curves={[{T: T_SUN, color: TCOL[5800], width: 4}]} ticks={[1000, 2000]} shade={1} band={0} />
				{pulse > 0.001 ? <rect x={g.x} y={g.y} width={bbX(g, 450) - g.x} height={g.h} fill={AMBER.stroke} opacity={pulse} /> : null}
				{f >= head ? <path d={`M1180,${640} H1440`} stroke={AMBER.stroke} strokeWidth={6} opacity={prog(f, head, 10)} /> : null}
				{f >= head ? <path d="M1440,640 l-20,-12 v24 z" fill={AMBER.stroke} opacity={prog(f, head, 10)} /> : null}
			</FrameSvg>
			<CrossedChip x={96} y={720} at={notl - 20} crossAt={notl} size={30} caption="emitters, not light">Planck: light is made of photons</CrossedChip>
			<Chip x={1460} y={616} at={head} size={28} w={200} color={INK}>next video</Chip>
		</>
	);
};

// ---------- 12. a way to remember ----------
const G12 = bbG(300, 470, 900, 400, 100, 2000);
export const S12: React.FC = () => {
	const id = 'memory-aid';
	const f = useCurrentFrame();
	const way = cue(id, "Here's a way to hold it together"), hot = cue(id, 'Hotter means shorter and higher'), afford = cap(id, cue(id, 'hard to afford'));
	const T = kf(f, [[hot, T_COOL], [hot + 50, T_HOT]]);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<div style={{position: 'absolute', left: 300, top: 170, width: 1320}}>
				<MemoryCard at={way} main={<><span style={{color: '#1f6fb2'}}>Hotter means shorter and higher.</span> <span style={{color: AMBER.ink}}>Big packets are hard to afford.</span></>} />
			</div>
			<FrameSvg>
				<BBPlot g={G12} curves={[{T: T_COOL, color: TCOL[3500], width: 4}, {T: T_SUN, color: TCOL[5800], width: 4}, {T, color: '#1f6fb2', width: 6}]} ticks={[500, 1000, 1500, 2000]} shade={1} band={1} />
				<Heater p={{x: 96, y: 480, w: 180}} glow={0.9} color={glowFor(T)} />
				<PacketBar x={1400} base={880} h={80} fill={1} color={AMBER.stroke} opacity={prog(f, afford, 12)} />
				<PacketBar x={1600} base={880} h={300} locked={1} color={AMBER.stroke} opacity={prog(f, afford, 12)} />
				<ThermalBand x={1320} w={380} y={760} h={40} opacity={prog(f, afford, 12)} />
			</FrameSvg>
			<Lbl x={G12.x + 20} y={G12.y + 10} at={4} color={GREY.ink} size={26}>compressed scale</Lbl>
			<Lbl x={1260} y={520} at={hot} color={'#1f6fb2'} size={44}>{`T = ${Math.round(T / 100) * 100} K`}</Lbl>
		</>
	);
};
