import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, DrawPath, Enter, FONT_DISPLAY, FONT_HAND, HandText, INK, INK_SOFT, Mark, prog, scribbleEllipse} from '../../kit';
import {cues} from '../../cues';
import {Bars, BARS, ColourKey, EqRR, FWD, Fade, LENS, Overlay, ParticleLens, Pill, StageTable, SvgText, TEAL, ghostTrain} from './parts';
import {Heading, NAVY, VIOLET, GREEN_INK, fwdAt as fwdModel, kf, revAt as revModel, sc, xAt} from './common';

const Body: React.FC<{children: React.ReactNode; size?: number; color?: string; weight?: number}> = ({children, size = 36, color = INK, weight = 500}) => (
	<div style={{fontFamily: FONT_DISPLAY, fontSize: size, fontWeight: weight, color, lineHeight: 1.25}}>{children}</div>
);

// ---------- 8. Feedback ----------
const K9 = cues(sc('feedback'), {fwdZero: ['forward rate', 1], zero: ['zero', 1], onlyRev: 'Only the reverse', meet: 'meet and', rises: ['rises', 1], c12: '0.12', c20: '0.20', c08: ['0.08', 1], same: 'same mixture', flask: 'flask size', rates: 'rates change', falls: ['falls', 1], rises2: ['rises', 2], fastest: 'faster one', still: 'still going', said1: ['If you said', 1], said2: ['If you said', 2], said3: ['If you said', 3], stops: 'reaction stops'});
const RP = {x0: 700, scale: 2, base: 640};
const U0 = K9.rates, U1 = K9.rates + 460;
const uOf = (f: number) => kf(f, [[U0, 0], [U1, 7]], false);
const PX0 = 1220, PW = 620, PBASE = 640, PSCALE = 1.95;
const px = (u: number) => PX0 + (u / 7) * PW;
const py = (v: number) => PBASE - v * PSCALE;
const polyTo = (fn: (u: number) => number, u1: number) => {
	let d = '';
	for (let u = 0; u <= u1 + 1e-6; u += 0.05) d += `${u === 0 ? 'M' : 'L'}${px(u).toFixed(1)},${py(fn(u)).toFixed(1)} `;
	return d;
};
export const SceneFeedback: React.FC = () => {
	const f = useCurrentFrame();
	const rewindAt = U0 - 36;
	const counts = (t: number) => {
		if (t < rewindAt) return {n: kf(t, [[K9.rises, 0], [K9.same, 12]], false), v: kf(t, [[K9.rises, 20], [K9.same, 8]], false)};
		if (t < U0) return {n: kf(t, [[rewindAt, 12], [U0, 0]], false), v: kf(t, [[rewindAt, 8], [U0, 20]], false)};
		const x = xAt('p', uOf(t));
		return {n: 100 * (0.2 - x), v: 100 * x};
	};
	const u = uOf(f);
	const replay = f >= U0;
	const fwdV = replay ? fwdModel('p', u) : 0;
	const revV = replay ? revModel('p', u) : 187.5;
	const ghosts = [...ghostTrain(K9.meet, K9.rises + 40, 14, 'join', [0, 3, 5, 2, 6]), ...ghostTrain(K9.still, 2200, 34, 'split', [0, 2, 4, 6, 1, 3]), ...ghostTrain(K9.still + 17, 2200, 34, 'join', [5, 7, 9, 8])];
	const fwdLabel = f < K9.zero ? '' : f < K9.rates ? '0' : f < K9.still ? '' : '30';
	const revLabel = f < K9.onlyRev ? '' : f < K9.still ? 'high' : '30';
	const gOn = prog(f, K9.rates, 14);
	const wrong = [
		{at: K9.said1, out: K9.said2 - 4, chip: 'reverse is zero', fix: 'No PCl5 here, so the forward rate is zero.'},
		{at: K9.said2, out: K9.said3 - 4, chip: 'forward falls, reverse rises', fix: 'The side that is full starts high.'},
		{at: K9.said3, out: 99999, chip: 'the reaction stops', fix: 'Concentrations stop changing. Rates stay equal and above zero.'},
	];
	return (
		<>
			<Heading text="Same flask, other start" at={4} />
			<Overlay>
				<ParticleLens cx={400} cy={560} r={215} counts={counts} ghosts={ghosts} seed={13} rScale={0.9} />
				<ColourKey x={170} y={850} at={-100} scale={false} />
				<Fade at={K9.same} out={K9.rates - 30}><SvgText x={160} y={310} text="same mixture as before: 12, 8, 8" size={40} color={TEAL} at={K9.same} /></Fade>
				<Pill x={96} y={886} w={600} text="same total, flask size, temperature" at={K9.flask} color={TEAL} size={36} h={54} />
				{/* rate bars on the taller axis */}
				<Bars x0={RP.x0} scale={RP.scale} fwd={fwdV} rev={revV} at={K9.fwdZero - 6} fwdLabel={fwdLabel} revLabel={revLabel} />
				<Fade at={K9.fwdZero} out={K9.rates}><DrawPath d={scribbleEllipse(RP.x0 + BARS.w / 2, RP.base - 24, 96, 44, 6)} at={K9.fwdZero} dur={20} color={AMBER_INK} width={6} /></Fade>
				{/* live rate graph, first run ghosted */}
				<g opacity={gOn}>
					<path d={`M${PX0},${PBASE - 400} L${PX0},${PBASE} L${PX0 + PW + 14},${PBASE}`} fill="none" stroke={INK} strokeWidth={5} strokeLinecap="round" />
					<text x={PX0} y={PBASE - 414} fill={INK_SOFT} style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 26}}>rate (made-up units)</text>
					<text x={PX0 + PW + 22} y={PBASE + 12} fill={INK_SOFT} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40}}>time</text>
					<path d={polyTo(u0 => fwdModel('r', u0), 7)} fill="none" stroke={FWD} strokeWidth={4} strokeDasharray="9 9" opacity={0.4} />
					<path d={polyTo(u0 => revModel('r', u0), 7)} fill="none" stroke={AMBER} strokeWidth={4} strokeDasharray="9 9" opacity={0.55} />
					<text x={PX0 + PW - 10} y={py(95)} textAnchor="end" fill={INK_SOFT} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 36}}>first run (faint)</text>
				</g>
				{replay ? (
					<g>
						<path d={polyTo(u0 => revModel('p', u0), u)} fill="none" stroke={AMBER} strokeWidth={9} strokeLinecap="round" />
						<path d={polyTo(u0 => fwdModel('p', u0), u)} fill="none" stroke={FWD} strokeWidth={9} strokeLinecap="round" />
						<circle cx={px(u)} cy={py(revV)} r={11} fill={AMBER} stroke={INK} strokeWidth={2} />
						<circle cx={px(u)} cy={py(fwdV)} r={11} fill={FWD} stroke="#fffdf8" strokeWidth={3} />
					</g>
				) : null}
				<Fade at={K9.fastest} out={K9.still - 4}><SvgText x={px(0.3) + 24} y={py(180) + 8} text="faster at the start" size={42} color={AMBER_INK} at={K9.fastest} /></Fade>
				<Fade at={K9.still}>
					<path d={`M${PX0},${py(30)} L${PX0 + PW},${py(30)}`} stroke={TEAL} strokeWidth={4} strokeDasharray="10 9" />
					<SvgText x={1500} y={py(30) - 40} text="30: both still going" size={44} color={TEAL} at={K9.still} />
				</Fade>
				{/* wrong answers */}
				{wrong.map((w, i) => (
					<Fade key={i} at={w.at} out={w.out}>
						<rect x={760} y={782} width={520} height={62} rx={31} fill="#fffdf8" stroke="#c4432f" strokeWidth={3} />
						<text x={1020} y={824} textAnchor="middle" fill="#c4432f" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42}}>{w.chip}</text>
						<Mark x={1316} y={814} at={w.at + 20} kind="cross" size={44} />
						<SvgText x={760} y={904} text={w.fix} size={40} color={INK} at={w.at + 50} />
					</Fade>
				))}
			</Overlay>
		</>
	);
};

// ---------- 9. Memory and handoff ----------
const K10 = cues(sc('memory'), {story: 'in order', one: 'Start from one side', falls: 'its rate falls', rises: 'its rate rises', equal: 'rates are equal', neither: 'neither rate', disturb: 'disturb', next: 'Next'});
const MiniIcon: React.FC<{fw: number; rv: number; color?: string}> = ({fw, rv, color = INK}) => (
	<svg width={150} height={110} viewBox="0 0 150 110" style={{overflow: 'visible'}}>
		<path d="M8,100 L142,100" stroke={color} strokeWidth={4} strokeLinecap="round" />
		<rect x={22} y={100 - fw} width={44} height={fw} fill="#bcd6ee" stroke={FWD} strokeWidth={4} rx={3} />
		<rect x={84} y={Math.min(96, 100 - rv)} width={44} height={Math.max(4, rv)} fill="#f6dfae" stroke={AMBER} strokeWidth={4} rx={3} />
	</svg>
);
const STEPS: {text: string; at: number; fw: number; rv: number; color: string}[] = [];
export const SceneMemory: React.FC = () => {
	const f = useCurrentFrame();
	const steps = [
		{text: 'Start from one side only', at: K10.one, fw: 100, rv: 0, color: FWD},
		{text: 'That rate falls as it is used up', at: K10.falls, fw: 62, rv: 24, color: FWD},
		{text: 'The other rate rises as it builds up', at: K10.rises, fw: 52, rv: 50, color: AMBER_INK},
		{text: 'Rates equal: concentrations steady', at: K10.equal, fw: 48, rv: 48, color: TEAL},
		{text: 'Neither rate is zero', at: K10.neither, fw: 48, rv: 48, color: TEAL},
	];
	void STEPS;
	const counts = () => ({n: 12, v: 8});
	const dist = f >= K10.disturb && f < K10.disturb + 40 ? Math.sin((f - K10.disturb) * 1.6) * 12 * (1 - (f - K10.disturb) / 40) : 0;
	const ghosts = [...ghostTrain(10, 1000, 34, 'split', [0, 3, 6, 9]), ...ghostTrain(27, 1000, 34, 'join', [1, 4, 7, 10])];
	return (
		<>
			<Heading text="Tell the story in order" at={4} />
			{steps.map((s, i) => {
				const p = prog(f, s.at, 14);
				return (
					<div key={i} style={{position: 'absolute', left: 96, top: 215 + i * 132, width: 1100, height: 120, opacity: p, transform: `translateX(${(1 - p) * -24}px)`}}>
						<div style={{position: 'absolute', left: 0, top: 30, width: 58, height: 58, borderRadius: 999, background: TEAL, color: '#fff', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 32, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{i + 1}</div>
						<div style={{position: 'absolute', left: 92, top: 4}}><MiniIcon fw={s.fw} rv={s.rv} /></div>
						<div style={{position: 'absolute', left: 280, top: 26}}><HandText text={s.text} at={s.at + 4} size={58} cps={30} color={s.color} /></div>
					</div>
				);
			})}
			<div style={{position: 'absolute', left: 0, top: dist}} />
			<Overlay>
				<g transform={`translate(${dist},${-Math.abs(dist) * 0.4})`}>
					<ParticleLens cx={1610} cy={480} r={190} counts={counts} ghosts={ghosts} seed={21} rScale={0.85} reveal={prog(f, K10.equal - 10, 20)} />
				</g>
				<Fade at={K10.equal}><SvgText x={1610} y={730} text="steady, both ways" size={42} color={TEAL} anchor="middle" at={K10.equal} /></Fade>
			</Overlay>
			<Enter at={K10.disturb} style={{position: 'absolute', right: 70, top: 800}}>
				<div style={{background: '#fffdf8', borderRadius: 999, padding: '10px 28px', boxShadow: '0 10px 24px rgba(60,45,20,0.1)'}}>
					<span style={{fontFamily: FONT_HAND, fontSize: 42, fontWeight: 700, color: INK}}>Next: what a flask does when disturbed</span>
				</div>
			</Enter>
		</>
	);
};

// ---------- 10. Key notes ----------
const NOTES = [
	'If a reversible reaction starts with only reactants, the forward rate starts at its highest and the reverse rate starts at zero.',
	'As reactants are used up, the forward rate falls. As products build up, the reverse rate rises.',
	'In a closed system at steady temperature, the rates become equal and not zero, so the concentrations stop changing. This is dynamic equilibrium.',
	'Equal rates do not mean equal amounts. The reactions have not stopped.',
	'Starting from only products, the reverse rate starts highest and the forward rate starts at zero. The rates still become equal.',
];
export const SceneNotes: React.FC = () => (
	<>
		<div style={{position: 'absolute', left: 96, top: 92}}><HandText text="Key notes: what to write in your book" at={2} size={66} cps={40} /></div>
		<div style={{position: 'absolute', left: 120, top: 200, width: 1680}}>
			{NOTES.map((n, i) => (
				<Enter key={i} at={14 + i * 10} style={{display: 'flex', gap: 22, marginBottom: 20}}>
					<div style={{flex: 'none', width: 16, height: 16, marginTop: 15, borderRadius: 999, background: AMBER}} />
					<Body size={35}>{n}</Body>
				</Enter>
			))}
		</div>
		<Enter at={70} style={{position: 'absolute', left: 96, top: 770, width: 1740}}>
			<div style={{background: '#fffdf8', border: `4px solid ${TEAL}`, borderRadius: 22, padding: '14px 30px', boxShadow: '0 12px 28px rgba(60,45,20,0.10)'}}>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, color: INK_SOFT}}>Memory aid</div>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 62, color: INK, lineHeight: 1.05}}>The <span style={{color: FWD}}>faster</span> rate <span style={{color: FWD}}>falls</span>, the slower rate <span style={{color: AMBER_INK}}>rises</span>, they meet and stay <span style={{color: TEAL}}>level</span>.</div>
			</div>
		</Enter>
		<Enter at={90} style={{position: 'absolute', left: 96, top: 960}}>
			<div style={{fontFamily: FONT_HAND, fontSize: 42, fontWeight: 700, color: AMBER_INK}}>Pause the video if you need more time to copy.</div>
		</Enter>
	</>
);
