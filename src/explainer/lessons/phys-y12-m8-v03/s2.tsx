// Scenes 7 to 11: the other thermometers (O, G and M strips with the painted stars; feature bars on a shared temperature
// axis), seven classes (the class strip O to M with swatches, ranges and subclasses; an alphabet reordered into a
// thermometer), same stuff, different temperature (Payne; equal composition bars), classifying a star (working layout
// with the feature bars and a 7000 K marker) and the memory aid (the three atom panels).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading} from '../../math/studio';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {LPlate, SUN} from '../../physics/light/plates';
import {STAR_BLUE, STAR_RED, STAR_WHITE} from '../../physics/light/stars';
import {SpectrumStrip, nmX} from '../../physics/light/spectrum';
import {CLASSES, CLASS_RANGE_TEXT, CLASS_SWATCH} from '../../physics/atom/stellar';
import {ClassStrip} from '../phys-y12-m7-v04/parts';
import {CA_H, CA_ION, CA_K, COMP, HE1A, HE1B, HE2, HE_ION, HEAD, HEAD_SIZE, H_ION, H_LINES, TIO, W_T, cap, cue} from './common';
import {AtomPanel, FeatureBars, GREY, Givens, INK, Lbl, NAVY, NEUTRON, RED, ROSE, Strip, VIOLET, fx, sci} from './parts';
import type {FeatBox, Feature} from './parts';

const BLUE_F = '#2f7fc4', TIO_C = '#c4582f';
/** The feature list (He II, He I, H hump, Ca II, TiO) with their approximate temperature ranges. */
export const feats = (at: readonly number[], grey: readonly boolean[] = []): Feature[] => [
	{name: 'He II', hot: 40000, cool: 30000, color: BLUE_F, at: at[0], grey: grey[0]},
	{name: 'He I', hot: 30000, cool: 10000, color: '#6f93e8', at: at[1], grey: grey[1]},
	{name: 'H', hot: 30000, cool: 3500, color: RED.stroke, at: at[2], hump: true, grey: grey[2]},
	{name: 'Ca II', hot: 6000, cool: 4000, color: VIOLET.stroke, at: at[3], grey: grey[3]},
	{name: 'TiO', hot: 3500, cool: 3000, color: TIO_C, at: at[4], grey: grey[4]},
];
/** TiO band heads drawn as dark bands with sharp blue edges, fading redwards. */
const Bands: React.FC<{s: {x: number; y: number; w: number; h: number; nm0?: number; nm1?: number}; o?: number}> = ({s, o = 1}) => <g opacity={o}>{TIO.map(nm => { const x = nmX(s, nm); return <g key={nm}><rect x={x} y={s.y} width={4} height={s.h} fill="#14110f" opacity={0.85} /><rect x={x + 4} y={s.y} width={26} height={s.h} fill="#14110f" opacity={0.45} /></g>; })}</g>;

// ---------- 7. the other thermometers ----------
const FB7: FeatBox = {x: 1040, w: 740, y: 300, row: 80, h: 44};
const SO = {x: 220, y: 300, w: 620, h: 56}, SG = {x: 220, y: 470, w: 620, h: 56, nm0: 350}, SM = {x: 220, y: 640, w: 620, h: 56};
export const S07: React.FC = () => {
	const id = 'other-features';
	const f = useCurrentFrame();
	const hh = cue(id, 'Helium holds its electrons more tightly'), os = cue(id, 'the O stars'), sun = cue(id, 'like the Sun'), bd = cue(id, 'broad dark bands'), ef = cap(id, cue(id, 'Each feature is like a thermometer'));
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<LPlate spec={STAR_BLUE} p={{x: 96, y: 280, w: 100}} /><SpectrumStrip s={SO} kind="absorption" lines={[...H_LINES, HE2]} strengths={[0.25, 0.25, 0.25, 0.25, prog(f, os, 14)]} lineW={6} />
				<LPlate spec={SUN} p={{x: 96, y: 450, w: 100}} /><SpectrumStrip s={SG} kind="absorption" lines={[CA_K, CA_H, ...H_LINES]} strengths={[prog(f, sun, 14), prog(f, sun, 14), 0.45, 0.45, 0.45, 0.45]} lineW={7} axis ticks={[400, 500, 600, 700]} />
				<LPlate spec={STAR_RED} p={{x: 96, y: 620, w: 100}} /><SpectrumStrip s={SM} kind="continuous" lineW={6} /><Bands s={SM} o={prog(f, bd, 14)} />
				{([[SO, os], [SG, sun], [SM, bd]] as const).map(([g, at], i) => { const p = f >= at && f < at + 40 ? Math.sin(((f - at) / 40) * Math.PI) : 0; return p > 0 ? <rect key={i} x={g.x - 6} y={g.y - 6} width={g.w + 12} height={g.h + 12} fill="none" stroke={INK} strokeWidth={3 + 4 * p} /> : null; })}
				<FeatureBars b={FB7} f={f} feats={feats([os, os + 24, ef, sun, bd])} axisAt={hh} />
			</FrameSvg>
			<Chip x={96} y={168} at={hh} size={28} color={INK}>{`remove an electron: He ${fx(HE_ION, 1)} eV, H ${fx(H_ION, 1)} eV`}</Chip>
			<HandTag x={760} y={190} text="holds on tight" at={hh + 30} size={32} color={BLUE_F} />
			<Lbl x={SO.x} y={SO.y - 20} at={os} color={BLUE_F} size={26}>O star: He II at 468.6 nm, weak H</Lbl>
			<Lbl x={SG.x} y={SG.y - 20} at={sun} color={VIOLET.ink} size={26}>G star: Ca II H and K (393.4, 396.8 nm)</Lbl>
			<Lbl x={SM.x} y={SM.y - 20} at={bd} color={TIO_C} size={26}>M star: titanium oxide (TiO) bands</Lbl>
			<HandTag x={1440} y={FB7.y + 3 * FB7.row + 70} text="lets go easily" at={sun + 20} size={30} color={VIOLET.ink} />
			<Lbl x={FB7.x + FB7.w} y={FB7.y + 4 * FB7.row - 14} at={bd + 10} color={GREY.ink} size={26} anchor="end">approximate</Lbl>
			<HandTag x={1240} y={FB7.y + 4 * FB7.row + 24} text="molecules: cool only" at={bd + 20} out={ef} size={30} color={TIO_C} />
			<Lbl x={96} y={760} at={os + 24} color={GREY.ink} size={26}>{`He I (${HE1A}, ${HE1B} nm): B stars; calcium ionises at ${fx(CA_ION, 2)} eV`}</Lbl>
			<HandTag x={96} y={860} text="each feature: its own range" at={ef + 10} size={36} color={INK} marks={[{kind: 'brace', x: FB7.x - 120, y1: FB7.y, y2: FB7.y + 5 * FB7.row - 30, facing: 'left'}]} />
		</>
	);
};

// ---------- 8. seven classes (and 9, Payne) ----------
const CY = (i: number) => 230 + 84 * i;
const CX = {x: 330, w: 740, h: 56};
const PLATES8 = {0: STAR_BLUE, 2: STAR_WHITE, 6: STAR_RED} as const;
const ClassBoard: React.FC<{f: number; g2?: number; alpha?: number; tp?: number; plates?: boolean}> = ({f, g2 = 1e9, alpha = 1e9, tp = 1e9, plates = true}) => (
	<g>
		{CLASSES.map((c, i) => <g key={c}>
			<text x={150} y={CY(i) + 44} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 46, fill: INK}}>{c}</text>
			<circle cx={235} cy={CY(i) + 28} r={24} fill={CLASS_SWATCH[c]} stroke={INK} strokeWidth={3} />
			<ClassStrip x={CX.x} y={CY(i)} w={CX.w} h={CX.h} i={i} />
			<text x={CX.x + CX.w + 24} y={CY(i) + 38} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 28, fill: INK}}>{CLASS_RANGE_TEXT[c]}</text>
		</g>)}
		{plates ? Object.entries(PLATES8).map(([i, spec]) => <LPlate key={i} spec={spec} p={{x: 1580, y: CY(+i) - 20, w: 96}} />) : null}
		{f >= g2 ? <g opacity={prog(f, g2, 14)}>
			{Array.from({length: 10}, (_, k) => <g key={k}><line x1={CX.x + 30 + k * 70} y1={CY(4) - 4} x2={CX.x + 30 + k * 70} y2={CY(4) + 14} stroke={INK} strokeWidth={3} /><text x={CX.x + 30 + k * 70} y={CY(4) - 10} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 26, fill: k === 2 ? RED.ink : INK}}>{`G${k}`}</text></g>)}
			<LPlate spec={SUN} p={{x: 1580, y: CY(4) - 20, w: 96}} />
		</g> : null}
		{f >= alpha ? <text x={CX.x} y={880} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 32, fill: GREY.ink}} opacity={prog(f, alpha, 12) * (1 - prog(f, tp, 14))}>first: A B C D ... (sorted by hydrogen-line strength)</text> : null}
		{f >= tp ? <text x={CX.x} y={880} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 32, fill: RED.ink}} opacity={prog(f, tp, 14)}>later: O B A F G K M (a sequence of temperature)</text> : null}
	</g>
);
export const S08: React.FC = () => {
	const id = 'classes';
	const f = useCurrentFrame();
	const hc = cue(id, 'from hottest to coolest'), rd = cue(id, 'look red'), g2 = cue(id, 'a G2 star'), al = cue(id, 'began as an alphabet'), tp = cap(id, cue(id, 'a sequence of temperature'));
	const pulse = f >= rd && f < rd + 40 ? Math.sin(((f - rd) / 40) * Math.PI) : 0;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<ClassBoard f={f} g2={g2} alpha={al} tp={tp} />
				<g opacity={prog(f, hc, 14)}><line x1={CX.x} y1={196} x2={CX.x + CX.w} y2={196} stroke={NAVY.stroke} strokeWidth={5} /><path d={`M${CX.x - 4},196 l20,-11 v22 z M${CX.x + CX.w + 4},196 l-20,-11 v22 z`} fill={NAVY.stroke} /></g>
				{pulse > 0 ? <g><circle cx={235} cy={CY(0) + 28} r={24 + 10 * pulse} fill="none" stroke={INK} strokeWidth={4} /><circle cx={235} cy={CY(6) + 28} r={24 + 10 * pulse} fill="none" stroke={INK} strokeWidth={4} /></g> : null}
			</FrameSvg>
			<Lbl x={CX.x} y={176} at={hc} color={NAVY.ink} size={26}>hotter</Lbl>
			<Lbl x={CX.x + CX.w} y={176} at={hc} color={NAVY.ink} size={26} anchor="end">cooler</Lbl>
			<HandTag x={CX.x + CX.w + 24} y={CY(4) + 90} text="10 steps each" at={g2 + 16} size={30} color={INK} />
			<HandTag x={0} y={0} at={g2 + 20} color={RED.stroke} marks={[{kind: 'circle', cx: CX.x + 170, cy: CY(4) - 16, rx: 40, ry: 26}]} />
			<Lbl x={1700} y={CY(4) + 40} at={g2 + 10} color={INK} size={26}>the Sun</Lbl>
			<Lbl x={CX.x + CX.w + 24} y={830} at={0} color={GREY.ink} size={26}>ranges approximate</Lbl>
			<HandTag x={1100} y={930} text="an alphabet first, a thermometer later" at={tp + 6} size={32} color={RED.ink} />
		</>
	);
};
const CompBar: React.FC<{x: number; y: number; w: number}> = ({x, y, w}) => (
	<g>
		<rect x={x} y={y} width={(w * COMP.h) / 100} height={60} fill={ROSE.soft} stroke={INK} strokeWidth={3} />
		<rect x={x + (w * COMP.h) / 100} y={y} width={(w * COMP.he) / 100} height={60} fill={NEUTRON} stroke={INK} strokeWidth={3} />
		<rect x={x + (w * (COMP.h + COMP.he)) / 100} y={y} width={(w * COMP.other) / 100} height={60} fill={INK} />
		<text x={x + 16} y={y + 40} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 28, fill: ROSE.ink}}>{`H ≈ ${COMP.h}%`}</text>
		<text x={x + (w * COMP.h) / 100 + 10} y={y + 40} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 28, fill: '#ffffff'}}>{`He ≈ ${COMP.he}%`}</text>
	</g>
);
const PS = {x: 300, w: 640, h: 100};
export const S09: React.FC = () => {
	const id = 'payne';
	const f = useCurrentFrame();
	const tn = cue(id, 'temperature, not composition'), hh = cue(id, 'mostly hydrogen and helium'), sp = cap(id, cue(id, 'completely different spectra'));
	const flash = f >= sp ? 0.5 + 0.5 * Math.sin(((f - sp) / 10) * Math.PI) : 0;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				{([[2, 'A', 360, STAR_WHITE], [6, 'M', 620, STAR_RED]] as const).map(([i, c, y, spec]) => <g key={c}>
					<text x={130} y={y + 56} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 52, fill: INK}}>{c}</text>
					<circle cx={220} cy={y + 40} r={28} fill={CLASS_SWATCH[c]} stroke={INK} strokeWidth={3} />
					<ClassStrip x={PS.x} y={y} w={PS.w} h={PS.h} i={i} />
					<LPlate spec={spec} p={{x: PS.x + PS.w + 30, y: y - 20, w: 140}} />
					{flash > 0 ? <rect x={PS.x - 8} y={y - 8} width={PS.w + 16} height={PS.h + 16} fill="none" stroke={RED.stroke} strokeWidth={3 + 4 * flash} /> : null}
				</g>)}
				{[370, 630].map(y => <rect key={y} x={1180} y={y} width={620} height={60} fill="none" stroke={GREY.stroke} strokeWidth={3} strokeDasharray="10 7" />)}
				{f >= hh ? <g opacity={prog(f, hh, 14)}><CompBar x={1180} y={370} w={620} /><CompBar x={1180} y={630} w={620} /></g> : null}
			</FrameSvg>
			<Lbl x={96} y={250} at={0} color={INK} size={36}>Cecilia Payne, 1925</Lbl>
			<Lbl x={1180} y={300} at={0} out={hh} color={GREY.ink} size={28}>composition: the same?</Lbl>
			<Chip x={600} y={170} at={tn} size={30} color={INK}>spectral class = temperature, not composition</Chip>
			<Lbl x={PS.x} y={340} at={0} color={INK} size={28}>A star: strong hydrogen lines</Lbl>
			<Lbl x={PS.x} y={600} at={0} color={INK} size={28}>M star: titanium oxide bands</Lbl>
			<Lbl x={1180} y={352} at={hh} color={INK} size={28}>A star (by mass)</Lbl>
			<Lbl x={1180} y={612} at={hh} color={INK} size={28}>M star (by mass)</Lbl>
			<Lbl x={1180} y={730} at={hh + 6} color={GREY.ink} size={26}>{`everything else ≈ ${COMP.other}%`}</Lbl>
			<HandTag x={1480} y={540} text="same mix" at={hh + 20} size={34} color={INK} marks={[{kind: 'brace', x: 1810, y1: 370, y2: 690, facing: 'right'}]} />
			<HandTag x={96} y={820} text="same stuff, different T" at={sp + 6} size={40} color={RED.ink} />
		</>
	);
};

// ---------- 10. classify a star ----------
const FB10: FeatBox = {x: 1140, w: 660, y: 470, row: 62, h: 34};
export const S10: React.FC = () => {
	const id = 'worked-classify';
	const f = useCurrentFrame();
	const nh = cue(id, "there's no ionised helium and no molecular bands"), kv = cue(id, 'kelvin'), sb = cue(id, 'Strong but not the strongest hydrogen'), ag = cap(id, cue(id, 'agree'));
	const greyed = f >= nh;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<Strip x={96} y={168} at={2} size={34}>Classify the star.</Strip>
			<Givens x={96} y={244} w={960} at={6} size={30} lines={['λmax = 414 nm', 'lines: H fairly strong; some metal lines; no He II; no TiO', 'b = 2.898 × 10⁻³ m K']} />
			<FrameSvg>
				<FeatureBars b={FB10} f={f} feats={feats([-30, -30, -30, -30, -30], [greyed, false, false, false, greyed])} marker={{T: W_T, at: sb}} size={24} />
			</FrameSvg>
			<HandTag x={0} y={0} at={nh + 10} color={GREY.stroke} marks={[{kind: 'cross', cx: 1180, cy: FB10.y + 17, size: 40}, {kind: 'cross', cx: 1780, cy: FB10.y + 4 * FB10.row + 17, size: 40}]} />
			<div style={{position: 'absolute', left: 96, top: 470, display: 'flex', flexDirection: 'column', gap: 16, width: 980}}>
				<Row at={kv - 6} size={44}>T = (2.898 × 10⁻³) / (4.14 × 10⁻⁷) = <AnswerBox at={ag} tick={false}>{`${sci(W_T, 1)} K`}</AnswerBox></Row>
			</div>
			<HandTag x={96} y={580} text="nm → m first" at={kv + 16} size={32} color={RED.ink} />
			<CrossedChip x={96} y={660} at={sb + 30} crossAt={sb + 48} size={28} caption="H alone can't decide">strong hydrogen → class A</CrossedChip>
			<div style={{position: 'absolute', left: 96, top: 800, display: 'flex', alignItems: 'center', gap: 20}}><Row at={ag - 6} size={48}><AnswerBox at={ag}>class F (6000 to 7500 K)</AnswerBox></Row><div style={{width: 60, height: 60, borderRadius: 30, background: CLASS_SWATCH.F, border: `3px solid ${INK}`, opacity: prog(f, ag, 12)}} /></div>
			<Lbl x={760} y={834} at={ag + 10} color={INK} size={30}>curve and lines agree</Lbl>
			<Lbl x={FB10.x - 100} y={FB10.y - 34} at={sb} color={RED.ink} size={28}>{`marker: ${fx(Math.round(W_T / 100) * 100).replace(/(\d)(?=(\d{3})+$)/g, '$1 ')} K`}</Lbl>
		</>
	);
};

// ---------- 11. a way to remember ----------
const PAN11 = [{x: 96, title: 'cool', spec: STAR_RED}, {x: 700, title: '~10 000 K', spec: STAR_WHITE}, {x: 1304, title: 'very hot', spec: STAR_BLUE}] as const;
export const S11: React.FC = () => {
	const id = 'memory-aid';
	const f = useCurrentFrame();
	const tl = cue(id, 'Too cool to lift'), kp = cap(id, cue(id, 'too hot to keep'));
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				{PAN11.map((p, i) => <g key={i}>
					<AtomPanel x={p.x} y={220} w={520} h={330} title={p.title} e={i === 0 ? [1, 1, 1, 1, 1, 1] : i === 1 ? [1, 1, 2, 1, 1, 2] : f >= kp ? [0, 0, 0, 0, 0, 1] : [1, 2, 1, 1, 2, 1]} escape={i === 2 ? prog(f, kp, 24) : 0} hi2={i === 0 && f >= tl} />
					<LPlate spec={p.spec} p={{x: p.x + 420, y: 228, w: 86}} />
				</g>)}
			</FrameSvg>
			<HandTag x={96} y={680} text="Hydrogen peaks in the middle:" at={tl} size={60} color={INK} />
			<HandTag x={96} y={780} text="too cool to lift, too hot to keep." at={kp} size={60} color={INK} />
		</>
	);
};
