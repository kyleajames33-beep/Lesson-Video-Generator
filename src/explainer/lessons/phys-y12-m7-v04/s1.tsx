// Scenes 1 to 5: the hook (last time's two stars with painted stars beside their strips; the feature board; the
// prediction and the redshift), three things to read (an absorption strip with position, width, strength and background
// marked; reference strips matching the lines), temperature (three painted stars with their continuum curves, the
// molecular bands and ionised helium, the hydrogen-strength hump, the class strip), why motion shifts the lines (the
// waves engine's moving source with the vT bracket, the derivation and the H-alpha velocity slider) and reading a speed
// (the site's calcium example in the task, equation and givens layout).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Countdown, Mark, prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading, kf} from '../../math/studio';
import {INK} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {Arrow} from '../../physics/light/em';
import {SpectrumStrip, nmX} from '../../physics/light/spectrum';
import {Disc, SUN} from '../../physics/light/plates';
import {STAR_BLUE, STAR_RED, STAR_WHITE} from '../../physics/light/stars';
import {MovingSourceFronts} from '../../physics/light/wavefronts';
import {planck} from '../../sims/blackbody';
import {M7V03FinalFrame} from '../phys-y12-m7-v03/s3';
import {CA_DL, CA_LINES, CA_OBS, CA_REST, CA_V, HA, HEAD, HEAD_SIZE, H_LINES, H_PEAK_T, NA_LINES, SHIFT, SLIDE_V, cap, cue, holdIf, shiftNm} from './common';
import {APPROACH, CLASSES, ClassStrip, Connectors, FeatureBoard, GREY, Lbl, NAVY, ORANGE, PropChips, RECEDE, ROSE, Slider, Strip, StripRow, fx, hStrength, sci, sgn} from './parts';

type Pt = [number, number];
/** The feature board's place in the teaching scenes (top right). */
export const FB = {x: 1232, y: 170, s: 0.98};

// ---------- 1. hook ----------
const SX = 420, SH = 70, ROWS = [300, 470, 640];
export const S01: React.FC = () => {
	const id = 'hook';
	const f = useCurrentFrame();
	const both = cue(id, 'Both of these stars show hydrogen'), along = cue(id, 'along'), broad = cue(id, 'broader'), hot = cue(id, 'how hot'), pred = cue(id, 'Make your prediction'), longer = cue(id, 'Longer'), red = cap(id, cue(id, "That's called a redshift"));
	const h = holdIf(id);
	if (f < 1) return <M7V03FinalFrame />;
	const sw = kf(f, [[hot, 1140], [hot + 30, 720]]);
	const S = ROWS.map(y => ({x: SX, y, w: sw, h: SH}));
	const sx = kf(f, [[both, -120], [both + 22, 130]]);
	const pa = f >= along && f < along + 60 ? 1 : 0, pb = f >= broad && f < broad + 60 ? 1 : 0;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<StripRow s={S[0]} kind="emission" lines={H_LINES} grey />
				<StripRow s={S[1]} kind="absorption" lines={H_LINES} shift={SHIFT} lineW={7} />
				<StripRow s={S[2]} kind="absorption" lines={H_LINES} broaden={10} lineW={7} axis ticks={[400, 500, 600, 700]} />
				<Connectors a={S[0]} b={S[1]} lines={H_LINES} lean={SHIFT} color={pa ? ROSE.stroke : INK} />
				{pb ? <rect x={SX - 8} y={ROWS[2] - 8} width={sw + 16} height={SH + 16} fill="none" stroke={INK} strokeWidth={6} /> : null}
				<Disc spec={SUN} cx={sx} cy={ROWS[1] + SH / 2} d={140} />
				<Disc spec={STAR_WHITE} cx={sx} cy={ROWS[2] + SH / 2} d={140} />
				{f >= longer ? <Arrow from={[SX + sw * 0.35, ROWS[1] + SH + 30]} to={[SX + sw - 20, ROWS[1] + SH + 30]} color={ROSE.stroke} width={6} head={22} opacity={prog(f, longer, 12)} /> : null}
				{f >= longer ? <ellipse cx={SX + sw / 2} cy={ROWS[1] + SH / 2} rx={sw / 2 + 26} ry={58} fill="none" stroke={ROSE.stroke} strokeWidth={5} opacity={prog(f, longer + 14, 12)} /> : null}
				{f >= longer ? <Mark x={330} y={915} at={longer} kind="tick" color={INK} size={34} /> : null}
				{h ? <Countdown start={h.startFrame} end={h.endFrame} x={1720} y={830} r={46} ringFrom={h.startFrame - 30} /> : null}
			</FrameSvg>
			<Chip x={96} y={890} at={-60} out={1} size={30} w={1728} color={INK} border={INK}>Next: what can stellar spectra tell us beyond chemical identity?</Chip>
			<Lbl x={SX - 20} y={ROWS[0] + 46} at={-60} color={GREY.ink} size={30} anchor="end">laboratory hydrogen</Lbl>
			<Lbl x={SX - 20} y={ROWS[1] + 46} at={-60} color={INK} size={30} anchor="end">star A</Lbl>
			<Lbl x={SX - 20} y={ROWS[2] + 46} at={-60} color={INK} size={30} anchor="end">star B</Lbl>
			<Lbl x={SX + sw} y={ROWS[2] + SH + 80} at={-60} color={INK} size={26} anchor="end">wavelength (nm)</Lbl>
			<Chip x={SX} y={190} at={-60} size={30} w={460} color={INK}>✓ composition: hydrogen</Chip>
			<Chip x={SX + 1140 + 30} y={ROWS[1] + 6} at={-60} out={hot} size={32} w={230} color={INK}>shifted?</Chip>
			<Lbl x={SX + 1140 + 40} y={ROWS[1] + 110} at={-60} out={hot} color={GREY.ink} size={26}>exaggerated</Lbl>
			<Chip x={SX + 1140 + 30} y={ROWS[2] + 6} at={-60} out={hot} size={32} w={230} color={INK}>broader?</Chip>
			<HandTag x={SX + 240} y={ROWS[1] - 26} text="slid along" at={along + 6} out={hot} size={34} color={ROSE.ink} />
			<HandTag x={SX + 240} y={ROWS[2] - 26} text="fatter lines" at={broad + 6} out={hot} size={34} color={INK} />
			<FeatureBoard x={FB.x} y={FB.y} scale={FB.s} e={{}} at={hot} />
			<PropChips x={FB.x} y={480} at={hot + 20} />
			<Chip x={96} y={890} at={pred} size={32} w={220} color={INK}>longer</Chip>
			<Chip x={340} y={890} at={pred + 6} size={32} w={220} color={INK}>shorter</Chip>
			<HandTag x={SX + sw * 0.35} y={ROWS[1] + SH + 76} text="redshift: moving away" at={longer + 16} size={34} color={ROSE.ink} />
			<Lbl x={SX + sw * 0.35} y={ROWS[2] + SH + 130} at={red} color={GREY.ink} size={26}>(towards 750 nm)</Lbl>
		</>
	);
};

// ---------- 2. three things to read ----------
const ST2 = {x: 380, y: 260, w: 806, h: 200};
const LINES2 = [...CA_LINES, 410.2, 434.0, 486.1, ...NA_LINES, 656.3];
const STR2 = [0.9, 0.85, 0.5, 0.55, 0.7, 0.8, 0.8, 0.95];
const REF2 = [{n: 'hydrogen', l: H_LINES, y: 620}, {n: 'sodium', l: NA_LINES, y: 700}, {n: 'calcium', l: CA_LINES, y: 780}];
export const S02: React.FC = () => {
	const id = 'three-features';
	const f = useCurrentFrame();
	const where = cue(id, 'Where the lines sit'), wide = cue(id, 'how wide they are'), strong = cue(id, 'how strong they are'), bg = cue(id, 'background'), dark = cue(id, 'Which wavelengths are dark'), comp = cap(id, cue(id, 'composition'));
	const xH = nmX(ST2, 656.3), xB = nmX(ST2, 486.1), xN = nmX(ST2, 589.3);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<Disc spec={SUN} cx={200} cy={ST2.y + ST2.h / 2} d={270} />
				<line x1={340} y1={ST2.y + ST2.h / 2} x2={ST2.x - 8} y2={ST2.y + ST2.h / 2} stroke={INK} strokeWidth={3} strokeDasharray="8 7" />
				<SpectrumStrip s={ST2} kind="absorption" lines={LINES2} strengths={STR2} lineW={10} axis ticks={[400, 500, 600, 700]} />
				{f >= where ? <g opacity={prog(f, where, 12)}><line x1={xH} y1={ST2.y + ST2.h + 50} x2={xH} y2={ST2.y + ST2.h + 110} stroke={ROSE.stroke} strokeWidth={5} /><circle cx={xH} cy={ST2.y + ST2.h + 50} r={8} fill={ROSE.stroke} /></g> : null}
				{f >= where ? <ellipse cx={xH} cy={ST2.y + ST2.h / 2} rx={26} ry={68} fill="none" stroke={INK} strokeWidth={4} opacity={prog(f, where + 12, 12)} /> : null}
				{f >= wide ? <path d={`M${xB - 12},${ST2.y - 18} v-14 M${xB - 12},${ST2.y - 25} H${xB + 12} M${xB + 12},${ST2.y - 18} v-14`} stroke={ROSE.stroke} strokeWidth={5} fill="none" opacity={prog(f, wide, 12)} /> : null}
				{f >= strong ? <g opacity={prog(f, strong, 12)}><rect x={xN + 40} y={ST2.y} width={18} height={ST2.h} fill="none" stroke={ROSE.stroke} strokeWidth={3} /><rect x={xN + 40} y={ST2.y + ST2.h * 0.1} width={18} height={ST2.h * 0.9} fill={ROSE.stroke} /></g> : null}
				{f >= bg ? <path d={`M${nmX(ST2, 500)},${ST2.y - 18} v-14 H${nmX(ST2, 580)} v14`} stroke={ORANGE.stroke} strokeWidth={5} fill="none" opacity={prog(f, bg, 12)} /> : null}
				{REF2.map((r, i) => {
					const s = {x: kf(f, [[dark + i * 8, 1920], [dark + i * 8 + 26, ST2.x]]), y: r.y, w: ST2.w, h: 56};
					return f >= dark ? <g key={r.n}>
						<StripRow s={s} kind="emission" lines={r.l} />
						{s.x <= ST2.x + 1 ? <Connectors a={ST2} b={s} lines={r.l} marks={f >= comp ? r.l.map(() => 'tick') : []} opacity={0.6 * prog(f, dark + 40, 12)} /> : null}
					</g> : null;
				})}
			</FrameSvg>
			<Lbl x={96} y={575} at={0} color={INK} size={28}>a star's absorption spectrum (line strengths schematic)</Lbl>
			<Lbl x={200} y={ST2.y + ST2.h / 2 + 170} at={0} color={INK} size={26} anchor="middle">a star (the Sun)</Lbl>
			<HandTag x={xH - 20} y={ST2.y + ST2.h + 140} text="where" at={where + 8} size={36} color={ROSE.ink} anchor="end" />
			<HandTag x={xB} y={ST2.y - 50} text="how wide" at={wide + 8} size={34} color={ROSE.ink} anchor="middle" />
			<HandTag x={xN + 70} y={ST2.y + ST2.h + 40} text="how strong" at={strong + 8} size={34} color={ROSE.ink} />
			<Lbl x={nmX(ST2, 540)} y={ST2.y - 50} at={bg + 6} color={ORANGE.ink} size={28} anchor="middle">background colour</Lbl>
			{REF2.map(r => <Lbl key={r.n} x={ST2.x + ST2.w + 16} y={r.y + 34} at={dark + 30} color={INK} size={28}>{r.n}</Lbl>)}
			<Lbl x={96} y={890} at={comp} color={INK} size={36}>dark lines match the references: chemical composition</Lbl>
			<FeatureBoard x={FB.x} y={FB.y} scale={FB.s} e={{comp}} />
		</>
	);
};

// ---------- 3. how hot is it? ----------
const STARS3 = [{spec: STAR_RED, T: 3500, name: 'cool star', x: 230}, {spec: SUN, T: 5800, name: 'the Sun', x: 580}, {spec: STAR_BLUE, T: 15000, name: 'hot star', x: 930}];
const shape = (T: number) => { const ns = Array.from({length: 38}, (_, i) => 380 + i * 10); const v = ns.map(n => planck(n * 1e-9, T)); const m = Math.max(...v); return ns.map((n, i) => [n, v[i] / m] as const); };
const G3 = {x: 150, y: 712, w: 620, h: 74};
const tX = (T: number) => G3.x + ((Math.log10(T) - Math.log10(2500)) / (Math.log10(40000) - Math.log10(2500))) * G3.w;
export const S03: React.FC = () => {
	const id = 'temperature';
	const f = useCurrentFrame();
	const col = cue(id, 'colour of the continuous spectrum'), white = cue(id, 'blue-white'), second = cue(id, 'Second, which lines are strong'), mol = cue(id, 'molecules survive'), he = cue(id, 'ionised helium'), tenK = cue(id, 'ten thousand kelvin'), little = cue(id, 'little hydrogen'), coolest = cap(id, cue(id, 'coolest'));
	const curveO = prog(f, col, 14) * (1 - prog(f, tenK, 14) * 0.6);
	const hump = Array.from({length: 80}, (_, i) => { const T = 2500 * Math.pow(16, i / 79); return `${i ? 'L' : 'M'}${tX(T)},${G3.y + G3.h - G3.h * hStrength(T)}`; }).join(' ');
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				{STARS3.map(s => <Disc key={s.name} spec={s.spec} cx={s.x} cy={295} d={230} />)}
				{curveO > 0.001 ? STARS3.map(s => { const p = shape(s.T); const bx = s.x - 140, by = 455, bw = 280, bh = 90; return <g key={s.name} opacity={curveO}>
					<line x1={bx} y1={by + bh} x2={bx + bw} y2={by + bh} stroke={INK} strokeWidth={2.5} />
					<path d={p.map(([n, v], i) => `${i ? 'L' : 'M'}${bx + ((n - 380) / 370) * bw},${by + bh - bh * v}`).join(' ')} fill="none" stroke={ORANGE.stroke} strokeWidth={5} />
				</g>; }) : null}
				{f >= mol ? <g opacity={prog(f, mol, 12)}><SpectrumStrip s={{x: 90, y: 580, w: 280, h: 52}} kind="absorption" lines={[476, 517, 545, 590, 616, 662, 705]} lineW={14} strengths={[0.6, 0.7, 0.6, 0.7, 0.8, 0.8, 0.7]} profile={nm => 0.3 + 0.7 * (nm - 380) / 370} /></g> : null}
				{f >= he ? <g opacity={prog(f, he, 12)}><SpectrumStrip s={{x: 790, y: 580, w: 280, h: 52}} kind="absorption" lines={[468.6, 656.3, 486.1, 434.0, 410.2]} strengths={[0.9, 0.2, 0.2, 0.2, 0.2]} lineW={5} profile={nm => 1 - 0.6 * (nm - 380) / 370} /></g> : null}
				{f >= tenK ? <g opacity={prog(f, tenK, 14)}>
					<line x1={G3.x} y1={G3.y + G3.h} x2={G3.x + G3.w} y2={G3.y + G3.h} stroke={INK} strokeWidth={3} />
					<line x1={G3.x} y1={G3.y + G3.h} x2={G3.x} y2={G3.y - 10} stroke={INK} strokeWidth={3} />
					<path d={hump} fill="none" stroke={NAVY.stroke} strokeWidth={5} />
					{[3000, 10000, 30000].map(T => <g key={T}><line x1={tX(T)} y1={G3.y + G3.h} x2={tX(T)} y2={G3.y + G3.h + 10} stroke={INK} strokeWidth={3} /><text x={tX(T)} y={G3.y + G3.h + 38} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 700, fontSize: 26, fill: INK}}>{T.toLocaleString('en-AU').replace(',', ' ')}</text></g>)}
					<circle cx={tX(H_PEAK_T)} cy={G3.y} r={9} fill={NAVY.stroke} />
				</g> : null}
				{f >= coolest ? <g opacity={prog(f, coolest, 14)}>
					{CLASSES.map((c, i) => <g key={c}><ClassStrip x={96 + i * 156} y={860} w={140} h={30} i={i} /><text x={96 + i * 156 + 70} y={852} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 30, fill: INK}}>{c}</text></g>)}
				</g> : null}
				{f >= coolest ? <Arrow from={[620, 905]} to={[150, 905]} color={NAVY.stroke} width={5} head={18} opacity={prog(f, coolest + 10, 12)} /> : null}
				{f >= coolest ? <Arrow from={[640, 905]} to={[1110, 905]} color={NAVY.stroke} width={5} head={18} opacity={prog(f, coolest + 10, 12)} /> : null}
			</FrameSvg>
			{STARS3.map(s => <Lbl key={s.name} x={s.x} y={436} at={0} color={INK} size={28} anchor="middle">{s.name}</Lbl>)}
			<Lbl x={580} y={575} at={col} out={tenK} color={GREY.ink} size={26} anchor="middle">brightness, 380 to 750 nm (schematic)</Lbl>
			<HandTag x={90} y={664} text="redder = cooler" at={white} out={mol} size={32} color={ORANGE.ink} />
			<HandTag x={1070} y={664} text="bluer = hotter" at={white + 10} out={he} size={32} color={BLUE_INK} anchor="end" />
			<Lbl x={580} y={620} at={white + 20} out={tenK} color={GREY.ink} size={26} anchor="middle">exact peak law: a later video</Lbl>
			<Lbl x={580} y={664} at={second} out={tenK} color={INK} size={28} anchor="middle">second clue: which lines are strong</Lbl>
			<HandTag x={90} y={664} text="molecular bands" at={mol + 10} out={tenK} size={32} color={INK} />
			<HandTag x={1070} y={664} text="ionised helium" at={he + 10} out={tenK} size={32} color={INK} anchor="end" />
			<Lbl x={G3.x} y={G3.y - 30} at={tenK} color={NAVY.ink} size={28}>hydrogen line strength (schematic)</Lbl>
			<Lbl x={G3.x + G3.w + 20} y={G3.y + G3.h + 2} at={tenK} color={INK} size={26}>temperature (K)</Lbl>
			<Lbl x={tX(H_PEAK_T) + 18} y={G3.y + 6} at={tenK + 10} color={NAVY.ink} size={28}>strongest near 10 000 K</Lbl>
			<CrossedChip x={820} y={640} at={little - 10} crossAt={little + 10} size={28} w={390} caption="temperature sets which lines are strong">weak hydrogen lines = little hydrogen</CrossedChip>
			<Lbl x={160} y={938} at={coolest + 10} color={NAVY.ink} size={28}>hotter</Lbl>
			<Lbl x={1100} y={938} at={coolest + 10} color={NAVY.ink} size={28} anchor="end">cooler</Lbl>
			<Lbl x={1190} y={878} at={coolest} color={INK} size={28}>spectral classes</Lbl>
			<FeatureBoard x={FB.x} y={FB.y} scale={FB.s} e={{comp: -60, temp: coolest}} />
		</>
	);
};
const BLUE_INK = '#1f6fb2';

// ---------- 4. why motion shifts the lines ----------
const SB4 = {x: 96, y: 170, w: 1090, h: 400};
const Y4 = 370, OBS_X = 150;
const HS4 = {x: 96, y: 620, w: 1090, h: 70, nm0: 652.3, nm1: 660.3};
const Clip4: React.FC<{children: React.ReactNode}> = ({children}) => <g><defs><clipPath id="v04-dop-pair"><rect x={SB4.x} y={SB4.y} width={SB4.w} height={SB4.h} /></clipPath></defs><g clipPath="url(#v04-dop-pair)">{children}</g></g>;
export const S04: React.FC = () => {
	const id = 'doppler';
	const f = useCurrentFrame();
	const e1 = cue(id, 'sends out one crest'), e2 = cue(id, 'one period later'), vt = cue(id, 'v times T'), str = cue(id, 'stretched by v T'), per = cue(id, 'the period is the wavelength divided by c'), vc = cue(id, 'equals v over c'), red = cue(id, 'a redshift'), blue = cue(id, 'blueshift'), much = cap(id, cue(id, 'much less than c'));
	const P = Math.max(36, Math.min(60, e2 - e1));
	const cm = 130 / P, vs = 0.3 * cm;
	const x0 = 380;
	/** Crests leave every P frames from s0, so one leaves exactly at e1 (the star starts moving then). */
	const nPre = Math.max(0, Math.floor((e1 - 8) / P)), s0 = e1 - nPre * P;
	const xAt = (t: number) => (t <= e1 ? x0 : t <= blue ? x0 + vs * (t - e1) : x0 + vs * (blue - e1) - vs * (t - blue));
	const sx = xAt(f);
	const leftCol = f < red ? '#6d8296' : f < blue + 10 ? RECEDE : APPROACH;
	const fronts = (box: {x: number; y: number; w: number; h: number}, c: string, key: string) => f >= s0 ? <MovingSourceFronts key={key} pos={tt => [xAt(s0 + tt), Y4] as Pt} t={f - s0} speed={cm} period={P} maxR={1200} color={c} box={box} id={`dop-${key}`} width={4} /> : null;
	const pair = [e1, e1 + P].filter(t => f >= t && f < red).map((t, i) => <circle key={i} cx={xAt(t)} cy={Y4} r={(f - t) * cm} fill="none" stroke={INK} strokeWidth={6} />);
	// The two newest crests that have passed the star on the observer side: their left-most points.
	const ks = Math.floor((f - e1) / P);
	const leftOf = (k: number) => xAt(e1 + k * P) - (f - (e1 + k * P)) * cm;
	const a = leftOf(ks - 2), b = leftOf(ks - 1);
	const showGap = f >= vt + 10 && f < red && ks >= 2;
	const v = f < red ? 0 : kf(f, [[red, 0], [red + 20, SLIDE_V[0]], [red + 70, SLIDE_V[0]], [red + 90, SLIDE_V[1]], [blue, SLIDE_V[1]], [blue + 24, SLIDE_V[2]]]);
	const dl = shiftNm(HA, v);
	const sO = prog(f, 8, 14);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<rect x={SB4.x} y={SB4.y} width={SB4.w} height={SB4.h} rx={14} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
				{fronts({x: SB4.x, y: SB4.y, w: Math.max(0, sx - SB4.x), h: SB4.h}, leftCol, 'l')}
				{fronts({x: sx, y: SB4.y, w: Math.max(0, SB4.x + SB4.w - sx), h: SB4.h}, '#6d8296', 'r')}
				<Clip4>{pair}</Clip4>
				<line x1={OBS_X} y1={Y4 - 40} x2={OBS_X} y2={Y4 + 40} stroke={INK} strokeWidth={6} />
				{f >= e2 && f < red ? <g opacity={prog(f, e2, 12)}>
					<circle cx={xAt(e1)} cy={Y4} r={30} fill="none" stroke={GREY.stroke} strokeWidth={3} strokeDasharray="6 6" />
					<path d={`M${xAt(e1)},${Y4 + 70} v-14 M${xAt(e1)},${Y4 + 63} H${xAt(e2)} M${xAt(e2)},${Y4 + 70} v-14`} stroke={ROSE.stroke} strokeWidth={5} fill="none" />
				</g> : null}
				{showGap ? <path d={`M${a},${SB4.y + 40} v-14 M${a},${SB4.y + 33} H${b} M${b},${SB4.y + 40} v-14`} stroke={INK} strokeWidth={4} fill="none" opacity={prog(f, vt + 10, 12)} /> : null}
				<Disc spec={STAR_WHITE} cx={sx} cy={Y4} d={60} />
				{f >= e1 ? <Arrow from={[sx + 40, Y4 - 50]} to={[sx + 110, Y4 - 50]} color={NAVY.stroke} width={5} head={16} opacity={f < blue ? 1 : 0} /> : null}
				{f >= blue ? <Arrow from={[sx - 40, Y4 - 50]} to={[sx - 110, Y4 - 50]} color={NAVY.stroke} width={5} head={16} /> : null}
				<g opacity={sO}>
					<SpectrumStrip s={HS4} kind="emission" lines={[HA]} shift={(HA + dl) / HA} lineW={10} axis ticks={[653, 655, 657, 659]} />
					<line x1={nmX(HS4, HA)} y1={HS4.y - 14} x2={nmX(HS4, HA)} y2={HS4.y + HS4.h + 14} stroke={GREY.stroke} strokeWidth={4} strokeDasharray="8 6" />
					{Math.abs(dl) > 0.05 ? <Arrow from={[nmX(HS4, HA), HS4.y - 24]} to={[nmX(HS4, HA + dl), HS4.y - 24]} color={ROSE.stroke} width={5} head={14} /> : null}
					<Slider x={96} y={790} w={600} v0={-400} v1={700} v={v / 1000} ticks={[-300, 0, 300, 600]} fmt={t => (t > 0 ? `+${t}` : `${t}`.replace('-', '−'))} label="v (km s⁻¹, + = away)" />
				</g>
			</FrameSvg>
			<Lbl x={OBS_X} y={Y4 + 70} at={0} color={INK} size={26} anchor="middle">observer</Lbl>
			<Lbl x={SB4.x + SB4.w - 16} y={SB4.y + 30} at={4} color={GREY.ink} size={26} anchor="end">model wave, slowed; speed exaggerated</Lbl>
			<Lbl x={SB4.x + SB4.w - 16} y={SB4.y + SB4.h - 24} at={4} out={e1} color={INK} size={28} anchor="end">a star at rest: crests evenly spaced</Lbl>
			<Chip x={xAt(e2) - 80} y={Y4 + 90} at={e2} out={red} size={28} color={NAVY.ink} border={NAVY.stroke}>one period T</Chip>
			<Lbl x={(xAt(e1) + xAt(e2)) / 2} y={Y4 + 40} at={e2 + 10} out={red} color={ROSE.ink} size={34} anchor="middle">vT</Lbl>
			{showGap ? <Lbl x={(a + b) / 2} y={SB4.y + 70} at={vt + 14} color={INK} size={30} anchor="middle">λ + vT</Lbl> : null}
			<HandTag x={SB4.x + 30} y={SB4.y + 110} text="stretched" at={vt + 20} out={red} size={34} color={INK} />
			<Strip x={FB.x} y={520} at={str} size={44}>Δλ = vT</Strip>
			<Strip x={FB.x} y={600} at={per} size={44}>T = λ / c</Strip>
			<Strip x={FB.x} y={680} at={vc} size={44}>Δλ = v λ / c</Strip>
			<div style={{position: 'absolute', left: FB.x, top: 770}}><Row at={vc + 8} size={60}><AnswerBox at={vc + 14}><span style={{whiteSpace: 'nowrap'}}>Δλ / λ = v / c</span></AnswerBox></Row></div>
			<HandTag x={FB.x} y={910} text="stretch per wave = vT" at={vc + 24} size={32} color={ROSE.ink} />
			<Lbl x={HS4.x} y={HS4.y - 50} at={8} color={INK} size={28}>H-alpha (rest 656.3 nm, grey dashed)</Lbl>
			<Lbl x={760} y={790} at={8} color={NAVY.ink} size={52}>{`v = ${sgn(v / 1000, 0)} km s⁻¹`}</Lbl>
			<Lbl x={96} y={900} at={8} color={ROSE.ink} size={52}>{`Δλ = ${sgn(dl, 2)} nm`}</Lbl>
			<Lbl x={560} y={900} at={8} color={INK} size={52}>{`λ_obs = ${fx(HA + dl, 2)} nm`}</Lbl>
			<Chip x={SB4.x + 20} y={SB4.y + 310} at={much} size={30} color={NAVY.ink} border={NAVY.stroke}>v ≪ c; radial (line-of-sight) motion only</Chip>
			<HandTag x={SB4.x + 20} y={SB4.y + 340} at={much + 10} marks={[{kind: 'circle', cx: SB4.x + 108, cy: SB4.y + 336, rx: 80, ry: 30}]} color={NAVY.stroke} />
			<FeatureBoard x={FB.x} y={FB.y} scale={FB.s} e={{comp: -60, temp: -60}} />
		</>
	);
};

// ---------- 5. reading a speed ----------
const Z5 = {x: 760, y: 380, w: 420, h: 60, nm0: 392.4, nm1: 395.1};
const R5 = {x: 760, y: 360, w: 420, h: 40}, O5 = {x: 760, y: 440, w: 420, h: 40};
const STAR5 = [393.3, 396.8, 410.2, 434.0, 486.1, 589.0, 589.6, 656.3];
export const S05: React.FC = () => {
	const id = 'radial-velocity';
	const f = useCurrentFrame();
	const nm = cue(id, 'nought point nine nanometres'), spd = cue(id, 'The speed is c times'), six = cue(id, 'six point nine times ten to the five'), chk = cue(id, "here's the check"), elem = cap(id, cue(id, 'different element'));
	const zO = 1 - prog(f, chk, 14);
	const fac = CA_OBS / CA_REST;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<Strip x={96} y={180} at={0} size={34}>Find the star's radial velocity.</Strip>
			<Strip x={96} y={262} at={6} size={44}>Δλ / λ₀ = v / c</Strip>
			<div style={{position: 'absolute', left: 96, top: 350, width: 640, background: NAVY.soft, border: `3px solid ${NAVY.stroke}`, borderRadius: 14, padding: '6px 22px 10px', opacity: prog(f, 10, 12)}}>
				{[`λ₀ = ${fx(CA_REST, 1)} nm (calcium, at rest)`, `λ_obs = ${fx(CA_OBS, 1)} nm`, 'c = 3.00 × 10⁸ m s⁻¹'].map(t => <div key={t} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 32, color: NAVY.ink}}>{t}</div>)}
			</div>
			<FrameSvg>
				<g opacity={zO * prog(f, 14, 12)}>
					<SpectrumStrip s={Z5} kind="absorption" lines={[CA_OBS]} lineW={10} axis ticks={[393, 394, 395]} profile={() => 0.7} />
					<line x1={nmX(Z5, CA_REST)} y1={Z5.y - 12} x2={nmX(Z5, CA_REST)} y2={Z5.y + Z5.h + 12} stroke={GREY.stroke} strokeWidth={4} strokeDasharray="8 6" />
					<rect x={nmX(Z5, CA_OBS) - 6} y={Z5.y} width={12} height={Z5.h} fill={ROSE.stroke} />
					{f >= nm ? <Arrow from={[nmX(Z5, CA_REST), Z5.y - 22]} to={[nmX(Z5, CA_OBS), Z5.y - 22]} color={ROSE.stroke} width={5} head={14} opacity={prog(f, nm, 12)} /> : null}
				</g>
				{f >= chk ? <g opacity={prog(f, chk + 6, 14)}>
					<StripRow s={R5} kind="absorption" lines={STAR5} lineW={5} grey />
					<StripRow s={O5} kind="absorption" lines={STAR5} shift={fac} lineW={5} />
					<Connectors a={R5} b={O5} lines={STAR5} lean={fac} opacity={prog(f, elem - 20, 12)} color={NAVY.stroke} />
				</g> : null}
			</FrameSvg>
			<Lbl x={Z5.x} y={Z5.y - 56} at={14} out={chk} color={INK} size={28}>rest (grey dashed) and observed (rose)</Lbl>
			<HandTag x={Z5.x + Z5.w} y={Z5.y + Z5.h + 70} text="+0.9 nm: longer" at={nm + 10} out={chk} size={34} color={ROSE.ink} anchor="end" />
			<Lbl x={R5.x - 12} y={R5.y + 30} at={chk + 6} color={GREY.ink} size={26} anchor="end">at rest</Lbl>
			<Lbl x={O5.x - 12} y={O5.y + 30} at={chk + 6} color={INK} size={26} anchor="end">the star</Lbl>
			<div style={{position: 'absolute', left: 96, top: 540, display: 'flex', flexDirection: 'column', gap: 14, width: 1100}}>
				<Row at={nm} ageAt={spd} size={52} oldSize={36}><span style={{whiteSpace: 'nowrap'}}>{`Δλ = ${fx(CA_OBS, 1)} − ${fx(CA_REST, 1)} = +${fx(CA_DL, 1)} nm`}<span style={{color: ROSE.ink}}>{'   longer: receding'}</span></span></Row>
				<Row at={spd} ageAt={six} size={44} oldSize={36}><span style={{whiteSpace: 'nowrap'}}>{`v = c Δλ / λ₀ = (3.00 × 10⁸ × ${fx(CA_DL, 1)}) / ${fx(CA_REST, 1)}`}</span></Row>
				<Row at={six - 8} size={60}><AnswerBox at={six}><span style={{whiteSpace: 'nowrap', color: ORANGE.ink}}>{`v = ${sci(CA_V, 1)} m s⁻¹ (away)`}</span></AnswerBox></Row>
			</div>
			<CrossedChip x={FB.x} y={520} at={six + 30} crossAt={six + 46} size={30} w={560} caption="longer λ: receding">+0.9 nm → moving towards us</CrossedChip>
			<HandTag x={FB.x} y={720} text="same fraction for every line" at={elem} size={32} color={NAVY.ink} />
			<FeatureBoard x={FB.x} y={FB.y} scale={FB.s} e={{comp: -60, temp: -60, vel: elem}} />
		</>
	);
};
