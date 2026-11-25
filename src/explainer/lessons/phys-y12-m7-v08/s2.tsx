// Scenes 6 to 10: half or cos squared (the two-filter stage with end-on views: random E before the first filter,
// a fixed E after it), a chain of three filters (the site's worked chain on the painted bench with rail bars, the
// middle filter taken out and put back, E arrows turning to each axis), investigating Malus's law (painted bench,
// protractor, light sensor and data logger; the table; sensor reading against cos²θ through the origin), what
// polarisation says about light (the judgement board with transverse and longitudinal particle strips from the waves
// engine) and the memory aid.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Mark, prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading} from '../../math/studio';
import {MemoryCard} from '../../shared/scenes';
import {INK} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {LPlate} from '../../physics/light/plates';
import {polarGeom} from '../../physics/light/polar';
import type {PolarAt} from '../../physics/light/polar';
import {displacement} from '../../sims/waves';
import type {Wave} from '../../sims/waves';
import {Givens} from '../phys-y12-m6-v01/parts';
import {C1, C2, C2_SLIP, C3, C3_NOMID, HEAD, HEAD_SIZE, I0, INV_C2, INV_DEG, INV_GRAD, INV_LUX, cap, cos2, cue} from './common';
import {Arc, BarLabels, EArrow, EBLUE, EndOn, GREY, Lbl, NAVY, ORANGE, SLATE, Stage, Strip, fx, randDeg} from './parts';
import type {Bar, Pt} from './parts';
import {ST2} from './s1';

// ---------- 6. half, or cos squared? ----------
export const S06: React.FC = () => {
	const id = 'half-or-cos-squared';
	const f = useCurrentFrame();
	const trap = cue(id, "Here's the trap"), nosingle = cue(id, 'no single angle theta'), halve = cue(id, 'You just halve it'), gives = cue(id, 'gives a half, times cos squared theta'), filt = cap(id, cue(id, "Don't use cos squared on the first filter"));
	const g = polarGeom(ST2);
	const th = 50;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<Stage b={ST2} axes={[0, th]} bars={[{x: 480, v: 1}, {x: 820, v: 0.5, o: prog(f, halve, 12)}, {x: 1135, v: 0.5 * cos2(th), o: prog(f, gives, 12)}]} barH={90} insetY={240} insetR={52} />
				<EndOn c={[480, 760]} r={90} deg={randDeg(f)} len={70} opacity={prog(f, trap, 12)} />
				<EndOn c={[820, 760]} r={90} deg={0} len={70 * Math.sin(f / 5)} opacity={prog(f, halve, 12)} />
				{f >= gives ? <Arc c={[ST2.holders[1], 240]} r={70} a0={90} a1={90 - th} opacity={prog(f, gives, 12)} width={5} /> : null}
			</FrameSvg>
			<Lbl x={300} y={200} at={trap} color={ORANGE.ink} size={30}>I₀ (unpolarised) in</Lbl>
			<Lbl x={820} y={g.railY - 140} at={halve} color={ORANGE.ink} size={28} anchor="middle">½I₀</Lbl>
			<Lbl x={1135} y={g.railY - 100} at={gives} color={ORANGE.ink} size={28} anchor="middle">½I₀ cos²θ</Lbl>
			<Lbl x={ST2.holders[1] + 70} y={200} at={gives} color={NAVY.ink} size={30}>θ</Lbl>
			<CrossedChip x={ST2.holders[0] - 120} y={140} at={nosingle} crossAt={nosingle + 24} size={28}>θ = ?</CrossedChip>
			<HandTag x={200} y={910} text="no single θ: halve" at={halve + 10} size={30} color={ORANGE.ink} />
			<HandTag x={760} y={910} text="now cos²θ" at={gives + 16} size={30} color={ORANGE.ink} />
			<Lbl x={480} y={652} at={trap} color={EBLUE.ink} size={26} anchor="middle">E: every direction</Lbl>
			<Lbl x={820} y={652} at={halve} color={EBLUE.ink} size={26} anchor="middle">E: one direction</Lbl>
			<div style={{position: 'absolute', left: 1400, top: 610}}><Row at={gives} size={52}><AnswerBox at={gives + 10}><span style={{whiteSpace: 'nowrap'}}>I = ½ I₀ cos²θ</span></AnswerBox></Row></div>
			<HandTag x={1420} y={740} text="½: first filter   cos²θ: second" at={gives + 24} size={28} color={ORANGE.ink} marks={[{kind: 'underline', x1: 1450, x2: 1500, y: 700}]} />
			<CrossedChip x={1400} y={790} at={filt} crossAt={filt + 14} size={28} caption="unpolarised: halve first">first filter: I₀ cos²θ</CrossedChip>
			<Strip x={1400} y={480} at={trap} size={30}>Malus: polarised light only</Strip>
		</>
	);
};

// ---------- 7. a chain of three filters ----------
const ST3: PolarAt = {x: 96, y: 420, w: 1728, g: 0.82, src: 280, holders: [640, 1000, 1360], sensor: 1690, source: 'lamp'};
const BX3 = [470, 830, 1190, 1540];
export const S07: React.FC = () => {
	const id = 'three-filter-chain';
	const f = useCurrentFrame();
	const meets = cue(id, 'meets three filters'), w40 = cue(id, 'forty watts per square metre'), t30 = cue(id, 'which is thirty'), tt = cue(id, 'twenty-two point five'), take = cue(id, 'take the middle filter out'), ten = cue(id, 'is only ten'), added = cue(id, 'Adding a filter let more light through'), resets = cap(id, cue(id, 'resets the polarisation'));
	const out = prog(f, take, 20) * (1 - prog(f, resets, 20));
	const mid = 1 - out;
	const v = (x: number) => x / I0;
	const third = mid > 0.5 ? C3 : C3_NOMID;
	const bars: Bar[] = [
		{x: BX3[0], v: 1, label: fx(I0, 0), o: prog(f, meets, 12)},
		{x: BX3[1], v: v(C1), label: fx(C1, 0), o: prog(f, w40, 12)},
		{x: BX3[2], v: mid > 0.5 ? v(C2) : v(C1), label: mid > 0.5 ? fx(C2, 0) : fx(C1, 0), o: prog(f, t30, 12)},
		{x: BX3[3], v: f < take ? v(C3) : v(third), label: f < take ? fx(C3, 1) : mid > 0.5 ? fx(C3, 1) : fx(C3_NOMID, 0), o: prog(f, tt, 12)},
	];
	const eo = prog(f, resets, 16);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<Stage b={ST3} axes={[0, 30, 60]} holdersO={[1, mid, 1]} bars={bars} barH={150} insets={0} />
				{[[0, 0], [1, 30], [2, 60]].map(([i, a]) => <g key={i}>
					<circle cx={ST3.holders[i] + 0} cy={205} r={40} fill="#9b978f" stroke="#5c5a55" strokeWidth={3} opacity={(i === 1 ? mid : 1) * prog(f, meets, 12)} />
					<line x1={ST3.holders[i] - 34 * Math.sin((a * Math.PI) / 180)} y1={205 + 34 * Math.cos((a * Math.PI) / 180)} x2={ST3.holders[i] + 34 * Math.sin((a * Math.PI) / 180)} y2={205 - 34 * Math.cos((a * Math.PI) / 180)} stroke={NAVY.stroke} strokeWidth={5} opacity={(i === 1 ? mid : 1) * prog(f, meets, 12)} />
				</g>)}
				{eo > 0.001 ? [[BX3[1], 0], [BX3[2], 30], [BX3[3], 60]].map(([x, a]) => <g key={x} opacity={eo}><circle cx={x} cy={205} r={34} fill="#cfe1f3" stroke="rgba(60,45,20,0.25)" strokeWidth={2} /><EArrow cx={x} cy={205} len={26} deg={a * Math.min(1, eo * 1.2)} color={EBLUE.stroke} width={5} head={12} /></g>) : null}
			</FrameSvg>
			<BarLabels b={ST3} bars={bars} barH={150} at={meets} size={30} />
			{[['0°', 0], ['30°', 1], ['60°', 2]].map(([t, i]) => <Lbl key={t as string} x={ST3.holders[i as number] + 52} y={215} at={meets} color={NAVY.ink} size={28}>{t}</Lbl>)}
			<Strip x={96} y={610} at={0} size={32}>Find the intensity after each filter.</Strip>
			<Givens x={96} y={680} w={900} at={4} size={28} lines={[`I₀ = ${fx(I0, 0)} W m⁻² (unpolarised); axes 0°, 30°, 60° from vertical; ideal filters`]} />
			<div style={{position: 'absolute', left: 96, top: 760, display: 'flex', flexDirection: 'column', gap: 6, width: 960}}>
				<Row at={w40} ageAt={tt} size={40} oldSize={30}><span style={{whiteSpace: 'nowrap'}}>{`I₁ = ½ × ${fx(I0, 0)} = ${fx(C1, 0)} W m⁻²`}</span></Row>
				<Row at={t30} ageAt={tt} size={40} oldSize={30}><span style={{whiteSpace: 'nowrap'}}>{`I₂ = ${fx(C1, 0)} cos²30° = ${fx(C1, 0)} × ${fx(cos2(30), 2)} = ${fx(C2, 0)} W m⁻²`}</span></Row>
				<Row at={tt - 6} size={48}><AnswerBox at={tt}><span style={{whiteSpace: 'nowrap', color: ORANGE.ink}}>{`I₃ = ${fx(C2, 0)} cos²30° = ${fx(C3, 1)} W m⁻²`}</span></AnswerBox></Row>
			</div>
			<CrossedChip x={1100} y={610} at={t30 + 20} crossAt={t30 + 36} size={28} caption="intensity: cos², not cos">{`${fx(C1, 0)} cos 30° = ${fx(C2_SLIP, 1)} W m⁻²`}</CrossedChip>
			<div style={{position: 'absolute', left: 1100, top: 740}}><Row at={ten - 6} size={44}><AnswerBox at={ten}><span style={{whiteSpace: 'nowrap', color: ORANGE.ink}}>{`I₃′ = ${fx(C1, 0)} cos²60° = ${fx(C3_NOMID, 0)} W m⁻²`}</span></AnswerBox></Row></div>
			<Lbl x={1110} y={720} at={take} color={GREY.ink} size={26}>middle filter out: 60° from the first</Lbl>
			<HandTag x={1100} y={860} text="more filters, more light!" at={added} size={32} color={ORANGE.ink} />
			<Chip x={1100} y={890} at={resets} size={26} w={720} color={EBLUE.ink} border={EBLUE.stroke}>each filter: output polarised along its own axis</Chip>
		</>
	);
};

// ---------- 8. investigating Malus's law ----------
const SB8: PolarAt = {x: 96, y: 470, w: 980, g: 0.8, src: 230, holders: [520, 780], sensor: 1020, source: 'lamp'};
const PROTRACTOR = {src: 'assets/physics/phys-y11-protractor-v1.png', W: 1600, H: 1000, box: [144, 153, 1456, 845] as const};
const LOGGER = {src: 'assets/physics/phys-y11-data-logger-v1.png', W: 1400, H: 900, box: [126, 101, 1274, 799] as const};
const GP8 = {x: 1200, y: 520, w: 560, h: 340};
export const S08: React.FC = () => {
	const id = 'investigation';
	const f = useCurrentFrame();
	const test = cue(id, "To test Malus's law"), steps = cue(id, 'fifteen degree steps'), bg = cue(id, 'subtracting the background'), plot = cue(id, 'plot the intensity against cos squared theta'), origin = cue(id, 'through the origin'), mx = cap(id, cue(id, 'its gradient is I max'));
	const g = polarGeom(SB8);
	const k = f < steps ? -1 : Math.min(6, Math.floor((f - steps) / 10));
	const ang = k < 0 ? 0 : INV_DEG[k];
	const X = (c: number) => GP8.x + c * GP8.w, Y = (r: number) => GP8.y + GP8.h - (r / 500) * GP8.h;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<Stage b={SB8} axes={[0, ang]} insets={0} />
				<LPlate spec={PROTRACTOR} p={{x: SB8.holders[1] - 90, y: g.railY + 6, w: 180}} opacity={prog(f, test, 12)} />
				<LPlate spec={LOGGER} p={{x: 1130, y: 200, w: 300}} opacity={prog(f, test, 12)} />
				<line x1={SB8.sensor as number} y1={g.beamY - 30} x2={1140} y2={300} stroke={INK} strokeWidth={3} opacity={prog(f, test, 12)} />
				<g opacity={prog(f, plot, 12)}>
					<line x1={GP8.x} y1={GP8.y + GP8.h} x2={GP8.x + GP8.w} y2={GP8.y + GP8.h} stroke={INK} strokeWidth={3} />
					<line x1={GP8.x} y1={GP8.y} x2={GP8.x} y2={GP8.y + GP8.h} stroke={INK} strokeWidth={3} />
					{INV_C2.map((c, i) => <circle key={i} cx={X(c)} cy={Y(INV_LUX[i])} r={9} fill={ORANGE.stroke} stroke={INK} strokeWidth={2} opacity={prog(f, plot + 6 + i * 5, 8)} />)}
				</g>
				{f >= origin ? <line x1={X(0)} y1={Y(0)} x2={X(1)} y2={Y(INV_GRAD)} stroke={NAVY.stroke} strokeWidth={4} opacity={prog(f, origin, 12)} strokeDasharray={`${700 * prog(f, origin, 20)} 800`} /> : null}
				{f >= mx ? <path d={`M${X(0.5)},${Y(INV_GRAD * 0.5)} H${X(1)} V${Y(INV_GRAD)}`} fill="none" stroke={NAVY.stroke} strokeWidth={3} strokeDasharray="8 6" opacity={prog(f, mx, 12)} /> : null}
			</FrameSvg>
			<Lbl x={SB8.src} y={g.railY + 100} at={test} color={INK} size={26} anchor="middle">lamp</Lbl>
			<Lbl x={SB8.holders[0]} y={g.railY + 100} at={test} color={INK} size={26} anchor="middle">polariser</Lbl>
			<Lbl x={SB8.holders[1]} y={g.railY + 150} at={test} color={INK} size={26} anchor="middle">analyser on a protractor</Lbl>
			<Lbl x={(SB8.sensor as number) + 20} y={g.railY + 150} at={test} color={INK} size={26} anchor="middle">light sensor</Lbl>
			<Lbl x={1450} y={300} at={steps} color={NAVY.ink} size={40}>{k < 0 ? '' : `θ = ${ang}°: ${INV_LUX[k]} lux`}</Lbl>
			<Lbl x={1450} y={250} at={test} color={INK} size={26}>data logger</Lbl>
			<div style={{position: 'absolute', left: 96, top: 700, width: 1000, fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 28, color: INK, opacity: prog(f, steps, 12)}}>
				<div style={{display: 'grid', gridTemplateColumns: '2.6fr repeat(7, 1fr)', borderBottom: `3px solid ${INK}`, padding: '4px 6px'}}><span>θ</span>{INV_DEG.map(d => <span key={d}>{`${d}°`}</span>)}</div>
				<div style={{display: 'grid', gridTemplateColumns: '2.6fr repeat(7, 1fr)', padding: '4px 6px'}}><span>reading (lux)</span>{INV_LUX.map((r, i) => <span key={i} style={{opacity: i <= k ? 1 : 0}}>{r}</span>)}</div>
				<div style={{display: 'grid', gridTemplateColumns: '2.6fr repeat(7, 1fr)', padding: '4px 6px', color: NAVY.ink, opacity: prog(f, plot, 12)}}><span>cos²θ</span>{INV_C2.map((c, i) => <span key={i}>{fx(c, 2)}</span>)}</div>
			</div>
			<Lbl x={96} y={890} at={steps} color={GREY.ink} size={26}>illustrative, background subtracted</Lbl>
			<Chip x={560} y={862} at={bg} size={26} w={540} color={INK}>lamp off: background reading subtracted</Chip>
			<Lbl x={GP8.x + GP8.w / 2} y={GP8.y + GP8.h + 40} at={plot} color={NAVY.ink} size={28} anchor="middle">cos²θ (0 to 1)</Lbl>
			<Lbl x={GP8.x - 10} y={GP8.y - 20} at={plot} color={ORANGE.ink} size={26}>sensor reading (lux), ∝ intensity for this lamp</Lbl>
			<HandTag x={GP8.x + 60} y={GP8.y + GP8.h - 30} text="straight + through 0: Malus holds" at={origin + 10} size={28} color={NAVY.ink} marks={[{kind: 'circle', cx: GP8.x, cy: GP8.y + GP8.h, rx: 26, ry: 26}]} />
			<div style={{position: 'absolute', left: 1200, top: 900}}><Row at={mx} size={30}><AnswerBox at={mx}><span style={{whiteSpace: 'nowrap'}}>{`gradient ≈ ${Math.round(INV_GRAD / 10) * 10} lux: the maximum reading (I_max)`}</span></AnswerBox></Row></div>
		</>
	);
};

// ---------- 9. what polarisation says about light ----------
const ROWS9 = {x: 96, w: 1180};
export const S09: React.FC = () => {
	const id = 'significance';
	const f = useCurrentFrame();
	const how = cue(id, 'So how important was polarisation'), tw = cue(id, 'It showed that light is a transverse wave'), ruled = cue(id, 'ruled out light as a longitudinal wave'), maxw = cue(id, "fitted Maxwell's picture"), couldnt = cue(id, "couldn't say what was oscillating"), wrong = cue(id, 'turned out to be wrong'), made = cap(id, cue(id, 'not what light is made of'));
	const w: Wave = {amplitude: 22, wavelength: 160, period: 1.4};
	const t = f / 30;
	const row = (y: number) => ({position: 'absolute' as const, left: ROWS9.x, top: y, width: ROWS9.w, minHeight: 120, padding: '14px 22px', background: '#fffdf8', border: '2.5px solid rgba(60,45,20,0.25)', borderRadius: 14, fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 34, color: INK, opacity: prog(f, 2, 12), boxSizing: 'border-box' as const});
	const txt = (at: number) => ({opacity: prog(f, at, 12)});
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<div style={row(190)}><div style={{fontSize: 28, color: GREY.ink}}>establishes</div><div style={txt(tw)}>light is a transverse wave</div></div>
			<div style={row(340)}><div style={{fontSize: 28, color: GREY.ink}}>rules out</div><div style={txt(ruled)}>longitudinal waves; a simple particle stream</div></div>
			<div style={row(490)}><div style={{fontSize: 28, color: GREY.ink}}>does not settle</div><div style={{...txt(couldnt), color: GREY.ink}}>what oscillates (aether, later rejected); the photon question</div></div>
			<FrameSvg>
				<g opacity={prog(f, how, 12)}>
					<rect x={1320} y={190} width={500} height={130} rx={12} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
					{Array.from({length: 20}, (_, i) => { const x0 = 1340 + i * 23; return <circle key={i} cx={x0} cy={255 - displacement(w, x0, t)} r={6} fill={EBLUE.stroke} />; })}
					<rect x={1320} y={350} width={500} height={130} rx={12} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
					{Array.from({length: 20}, (_, i) => { const x0 = 1340 + i * 23; return [0, 1, 2].map(k => <circle key={`${i}-${k}`} cx={x0 + displacement(w, x0, t)} cy={385 + k * 30} r={5} fill={GREY.stroke} />); })}
				</g>
				{f >= tw ? <Mark x={1230} y={260} at={tw} kind="tick" color={INK} size={34} /> : null}
				{f >= ruled ? <Mark x={1790} y={415} at={ruled + 10} kind="cross" color={SLATE.stroke} size={34} /> : null}
				{f >= maxw ? <g opacity={prog(f, maxw, 12)}>
					<rect x={1320} y={680} width={500} height={160} rx={12} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
					<path d={Array.from({length: 61}, (_, i) => { const x = 1350 + i * 7; return `${i ? 'L' : 'M'}${x},${760 - 50 * Math.sin((2 * Math.PI * (x - 1350)) / 140 - f / 8)}`; }).join(' ')} fill="none" stroke={EBLUE.stroke} strokeWidth={4} />
					{[0, 1, 2, 3, 4, 5].map(i => { const x = 1360 + i * 70; const e = 50 * Math.sin((2 * Math.PI * (x - 1350)) / 140 - f / 8); return <EArrow key={i} cx={x} cy={760 - e / 2} len={e / 2} deg={0} color={EBLUE.stroke} width={3} head={9} single />; })}
					<line x1={1340} y1={760} x2={1800} y2={760} stroke={INK} strokeWidth={2} />
				</g> : null}
			</FrameSvg>
			<Lbl x={1340} y={180} at={how} color={EBLUE.ink} size={26}>light: across the travel</Lbl>
			<Lbl x={1340} y={340} at={how} color={GREY.ink} size={26}>sound: along the travel</Lbl>
			<Lbl x={1340} y={670} at={maxw} color={EBLUE.ink} size={26}>Maxwell: E across the beam</Lbl>
			<HandTag x={1340} y={890} text="across the beam" at={maxw + 10} size={30} color={EBLUE.ink} />
			<HandTag x={96} y={660} text="what oscillates? not settled" at={wrong} size={30} color={GREY.ink} />
			<div style={{position: 'absolute', left: 96, top: 760}}><Row at={made - 6} size={40}><AnswerBox at={made}><span>highly significant, but narrow: the wave's geometry</span></AnswerBox></Row></div>
		</>
	);
};

// ---------- 10. a way to remember ----------
export const S10: React.FC = () => {
	const id = 'memory-aid';
	const f = useCurrentFrame();
	const way = cue(id, "Here's a way to remember it"), field = cue(id, 'Cos for the field'), light = cue(id, 'cos squared for the light'), half = cap(id, cue(id, 'just half'));
	const pulse = (at: number) => (f < at ? 1 : 1 + 0.12 * Math.sin(Math.min(1, (f - at) / 20) * Math.PI));
	const C: Pt = [420, 700];
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<div style={{position: 'absolute', left: 300, top: 170, width: 1320}}>
				<MemoryCard at={way} main={<>Cos for the field, cos² for the light. First filter on unpolarised light: half.</>} />
			</div>
			<FrameSvg><EndOn c={C} r={200} deg={40} len={160} filter={{axis: 0}} comps={{axis: 0, across: 0.6}} /></FrameSvg>
			{[['E = E_max cos θ', field, EBLUE.ink, 470], ['I = I_max cos²θ', light, ORANGE.ink, 600], ['unpolarised → ½I₀', half, INK, 730]].map(([t, at, c, y]) => (
				<div key={t as string} style={{position: 'absolute', left: 900, top: y as number, fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 52, color: c as string, transform: `scale(${pulse(at as number)})`, transformOrigin: 'left center', opacity: prog(f, 4, 12)}}>{t as string}</div>
			))}
		</>
	);
};
