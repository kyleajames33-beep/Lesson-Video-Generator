// Y11 Chem M1 V16 scenes 13 to 18: two HSC-style attempts (whole card with a neutral picture: the burner's blue flame
// and unlabelled bottles; ring from "Pause here", 10 s countdown), brief feedback (navy givens strip, green framed
// answers, one red crossed slip), the handoff (the final frame: a shell atom with one electron drop and its photon,
// the nucleus enlarged with a red burst and "?", and the "Next" box) and the key notes with the memory card, which
// cross-fade back to the handoff's final frame.
import React from 'react';
import {Freeze, useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Givens, QTag} from '../chem-y11-m1-v01/s3';
import {MT, dur, hold, sc} from './common';
import {
	AMB_T, Bottle, Burner, Burst, Card, Chip, Electron, Fade, Framed, GREEN_S, GREEN_T, Heading, INK, NAVY_S, NAVY_T, Nucleus, OText, PAPER, PauseHoldR, Photon, RED_T,
	Rich, Sx, Write, Ladder, VArrow, clamp01, lerp, nmInk, prog, richW, smooth, span,
} from './parts';
import type {Seg} from './parts';
import {GLI, GSR, M12, SpecStrip} from './s2';

const Q: React.FC<{lines: string[]; y0?: number; lh?: number}> = ({lines, y0 = 290, lh = 58}) => <>{lines.map((t, i) => <Rich key={i} x={140} y={y0 + i * lh} segs={[{t}]} size={38} weight={700} />)}</>;
const LI = MT.Li.lines ?? [], SR = MT.Sr.lines ?? [];

// ---------- 13. attempt 1 ----------
const K13 = cues(sc('attempt-1'), {pause: 'Pause here'});
export const SceneAttempt1: React.FC = () => (
	<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
		<Heading text="Your turn" at={0} />
		<QTag />
		<Card h={700} />
		<Q lines={['A student carries out flame tests on two unlabelled', 'solutions, each containing one metal ion.', 'Solution A gives a crimson flame.', 'Solution B gives a lilac flame.', '(a) Identify the metal ion or ions that could be present', '      in each solution.', '(b) Explain why the result for solution A does not identify', '      its metal ion with certainty, and suggest a method', '      to confirm it.   (3 marks)']} y0={262} lh={58} />
		<Burner g={{cx: 1400, bottom: 860, h: 520}} states={[['blue', -1000]]} />
		<Bottle g={{cx: 1620, bottom: 860, h: 270}} lines={['A']} size={52} />
		<Bottle g={{cx: 1750, bottom: 860, h: 270}} lines={['B']} size={52} />
		<PauseHoldR h={hold('attempt-1')} at={K13.pause} x={140} y={936} cx={1060} cy={790} />
	</svg>
);

// ---------- 14. feedback 1 ----------
const K14 = cues(sc('feedback-1'), {b: 'Solution B is', a: 'Solution A could', crimson: 'similar crimson', confirm: 'To confirm', compare: 'compare its lines', writing: 'Writing just', slip: 'the slip', cant: "colour can't"});
export const SceneFeedback1: React.FC = () => (
	<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
		<Heading text="Your turn" at={-1000} />
		<Givens segs={[{t: 'A: crimson flame     |     B: lilac flame     |     one metal ion each'}]} />
		<Burner g={{cx: 210, bottom: 800, h: 460}} states={[['li', -1000]]} />
		<Burner g={{cx: 480, bottom: 800, h: 460}} states={[['k', -1000]]} />
		<Sx x={210} y={850} text="A" size={44} color={INK} anchor="middle" weight={800} at={-1000} />
		<Sx x={480} y={850} text="B" size={44} color={INK} anchor="middle" weight={800} at={-1000} />
		<Framed x={700} y={360} segs={[{t: 'B: ', c: GREEN_T}, {t: 'K^{+}', c: MT.K.ink}]} at={K14.b} size={44} stroke={GREEN_S} />
		<Framed x={700} y={470} segs={[{t: 'A: ', c: GREEN_T}, {t: 'Li^{+}', c: MT.Li.ink}, {t: ' or ', c: GREEN_T}, {t: 'Sr^{2+}', c: MT.Sr.ink}]} at={K14.crimson} size={44} stroke={GREEN_S} />
		<Rich x={700} y={545} segs={[{t: 'similar colours: can\'t be separated by eye'}]} size={34} at={K14.crimson + 12} />
		<Rich x={700} y={640} segs={[{t: 'confirm: ', c: GREEN_T}, {t: 'spectroscope;'}]} size={38} at={K14.confirm} />
		<Rich x={700} y={692} segs={[{t: 'compare lines with known samples'}]} size={38} at={K14.compare} />
		<Fade at={K14.compare}>
			<SpecStrip id="v16f1a" g={{x: 1440, y: 590, w: 380, h: 64}} lines={LI} labels={false} />
			<SpecStrip id="v16f1b" g={{x: 1440, y: 670, w: 380, h: 64}} lines={SR} labels={false} />
			<OText x={1430} y={636} text="Li^{+}" size={34} fill={MT.Li.fill} anchor="end" at={-1000} />
			<OText x={1430} y={716} text="Sr^{2+}" size={34} fill={MT.Sr.fill} anchor="end" at={-1000} />
		</Fade>
		<Chip x={700} y={790} segs={[{t: 'A is lithium'}]} at={K14.writing} size={44} color={RED_T} strike={K14.slip} />
		<Write x={1050} y={840} text="Li^{+} or Sr^{2+}" at={K14.cant} size={42} color={RED_T} />
	</svg>
);

// ---------- 15. attempt 2 ----------
const K15 = cues(sc('attempt-2'), {pause: 'Pause here'});
export const SceneAttempt2: React.FC = () => (
	<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
		<Heading text="Last one" at={0} />
		<QTag />
		<Card h={700} />
		<Q lines={['A student carries out a flame test on a solution of', 'potassium chloride but observes a yellow-orange flame', 'instead of a lilac flame.', '(a) Identify the most likely cause of this result.', '(b) Explain why the student should not conclude that', '      potassium ions are absent.   (2 marks)']} y0={290} lh={60} />
		<Burner g={{cx: 1420, bottom: 860, h: 540}} states={[['blue', -1000]]} />
		<Bottle g={{cx: 1690, bottom: 860, h: 320}} lines={['KCl', '(aq)']} size={38} />
		<PauseHoldR h={hold('attempt-2')} at={K15.pause} x={140} y={936} cx={1000} cy={760} />
	</svg>
);

// ---------- 16. feedback 2 ----------
const K16 = cues(sc('feedback-2'), {cause: 'likely cause', contam: 'sodium contamination', dirty: 'dirty loop', swamps: 'swamps', hidden: 'there but hidden', clean: 'Clean the loop', again: 'test again', concluding: 'Concluding', trap: 'trap'});
export const SceneFeedback2: React.FC = () => (
	<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
		<Heading text="Last one" at={-1000} />
		<Givens segs={[{t: 'KCl solution     |     flame seen: yellow-orange, not lilac'}]} />
		<Burner g={{cx: 330, bottom: 840, h: 540}} states={[['k', -1000], ['na', -1000, 1, 0.75], ['k', K16.again, 24]]} />
		<Sx x={330} y={892} text="before cleaning" size={34} color={INK} anchor="middle" weight={800} at={-1000} out={K16.again} />
		<Sx x={330} y={892} text="clean loop: lilac" size={34} color={MT.K.ink} anchor="middle" weight={800} at={K16.again + 14} />
		<Framed x={700} y={370} segs={[{t: '(a) sodium contamination', c: GREEN_T}]} at={K16.contam} size={44} stroke={GREEN_S} tick={false} />
		<Rich x={700} y={436} segs={[{t: 'from a dirty loop or glassware'}]} size={34} at={K16.dirty} />
		<Framed x={700} y={550} segs={[{t: '(b) masked, not absent', c: GREEN_T}]} at={K16.hidden} size={44} stroke={GREEN_S} />
		<Rich x={700} y={616} segs={[{t: 'Na^{+}', c: MT.Na.ink}, {t: ' yellow-orange swamps '}, {t: 'K^{+}', c: MT.K.ink}, {t: ' lilac'}]} size={34} at={K16.swamps} />
		<Rich x={700} y={706} segs={[{t: 'fix: ', c: GREEN_T}, {t: 'clean until the blank shows no colour,'}]} size={38} at={K16.clean} />
		<Rich x={700} y={756} segs={[{t: 'then test again'}]} size={38} at={K16.again} />
		<Chip x={700} y={820} segs={[{t: 'potassium is absent'}]} at={K16.concluding} size={44} color={RED_T} strike={K16.trap} />
		<Write x={1260} y={872} text="masked, not absent" at={K16.trap + 4} size={42} color={RED_T} />
		{void K16.cause}
	</svg>
);

// ---------- 17. handoff: from electrons to the nucleus (final frame; chem-y11-m1-v17 opens on it) ----------
const K17 = cues(sc('handoff'), {everything: 'Everything in', outside: 'outside the nucleus', electrons: 'as electrons', but: 'But some atoms', inside: 'inside the nucleus', radiation: 'give out radiation', so: 'So what radiation', human: 'human-made'});
export const ATOM17 = {cx: 400, cy: 610, R: 210};
export const NUC17 = {cx: 1330, cy: 590, r: 34};
export const NEXT17 = ['Next: what radiation do unstable isotopes give off,', "and does it matter if they're natural or human-made?"];
export const SceneHandoff: React.FC = () => {
	const f = useCurrentFrame();
	const {cx, cy, R} = ATOM17;
	// the outer electron starts excited (outside the outer ring) and drops back on "Everything in"
	const drop = span(f, K17.everything + 6, K17.everything + 20);
	const ang = -Math.PI * 0.28;
	const r0 = R * 1.32, r1 = R;
	const er = lerp(r0, r1, drop);
	const ex = cx + er * Math.cos(ang), ey = cy + er * Math.sin(ang);
	const zoom = span(f, K17.inside, K17.inside + 30);
	const chipO = prog(f, K17.human, 14);
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<Heading text="Flame tests: what can a colour tell you?" at={-1000} />
			{/* the shell atom (sodium: 11 protons, 12 neutrons) */}
			<circle cx={cx} cy={cy} r={R * 1.32} fill="none" stroke={INK} strokeWidth={2.5} strokeDasharray="10 9" opacity={0.75} />
			{[0.42, 0.7, 1].map((k, i) => <circle key={i} cx={cx} cy={cy} r={R * k} fill="none" stroke={INK} strokeWidth={3} />)}
			<Nucleus cx={cx} cy={cy} p={11} n={12} r={11} />
			{Array.from({length: 10}, (_, i) => { const k = i < 2 ? 0.42 : 0.7, n = i < 2 ? 2 : 8, j = i < 2 ? i : i - 2, a = (j / n) * Math.PI * 2 + (i < 2 ? 0.4 : 0.15); return <circle key={i} cx={cx + R * k * Math.cos(a)} cy={cy + R * k * Math.sin(a)} r={10} fill="#2f6fd0" stroke="#1f4f9e" strokeWidth={2} />; })}
			<Electron x={ex} y={ey} r={13} />
			{f >= K17.everything + 6 ? <line x1={cx + r0 * Math.cos(ang)} y1={cy + r0 * Math.sin(ang)} x2={cx + (r1 + 18) * Math.cos(ang)} y2={cy + (r1 + 18) * Math.sin(ang)} stroke={INK} strokeWidth={5} strokeLinecap="round" opacity={drop} /> : null}
			<Photon a={[cx + R * 1.05, cy - R * 0.62]} b={[cx + R * 1.75, cy - R * 1.25]} at={K17.everything + 18} dur={20} color={nmInk(589)} width={6} stay />
			<Write x={cx - R} y={cy - R * 1.45} text="electrons: outside" at={K17.outside} out={K17.but} size={42} color="#1f4f9e" />
			{/* while the narration recalls the energy levels: a ladder at the right, one drop and its photon (cleared before the push) */}
			<g opacity={prog(f, K17.electrons, 12) * (1 - prog(f, K17.but + 20, 14))}>
				<Ladder g={{x0: 1150, x1: 1450, ys: [800, 640, 560, 500]}} />
				<VArrow x={1250} y0={568} y1={792} at={K17.electrons + 10} color={nmInk(589)} width={7} />
				<Photon a={[1270, 680]} b={[1560, 600]} at={K17.electrons + 20} dur={22} color={nmInk(589)} width={6} stay />
				<Sx x={1150} y={460} text="energy levels" size={34} color={INK} weight={800} at={-1000} />
			</g>
			<Sx x={96} y={900} text="flame colours: electrons outside the nucleus" size={34} color={INK} weight={800} at={K17.electrons} />
			{/* the push to the nucleus */}
			{zoom > 0.005 ? (
				<g>
					<line x1={cx + 18} y1={cy - 18} x2={NUC17.cx - 230 * zoom} y2={NUC17.cy - 230 * zoom} stroke={INK} strokeWidth={2.5} strokeDasharray="8 8" />
					<line x1={cx + 18} y1={cy + 18} x2={NUC17.cx - 230 * zoom} y2={NUC17.cy + 230 * zoom} stroke={INK} strokeWidth={2.5} strokeDasharray="8 8" />
					<circle cx={NUC17.cx} cy={NUC17.cy} r={250 * zoom} fill={PAPER} stroke={INK} strokeWidth={4} />
					<g transform={`translate(${NUC17.cx},${NUC17.cy}) scale(${zoom}) translate(${-NUC17.cx},${-NUC17.cy})`}>
						<Nucleus cx={NUC17.cx} cy={NUC17.cy} p={11} n={12} r={NUC17.r} />
					</g>
				</g>
			) : null}
			<Burst cx={NUC17.cx + 250} cy={NUC17.cy - 200} r={80} at={K17.radiation} />
			<Sx x={NUC17.cx + 250} y={NUC17.cy - 176} text="?" size={72} color={INK} anchor="middle" weight={800} at={K17.radiation + 4} />
			<Sx x={NUC17.cx} y={900} text="radiation: changes inside the nucleus" size={34} color={INK} anchor="middle" weight={800} at={K17.radiation + 8} />
			{chipO > 0.005 ? (
				<g opacity={chipO}>
					<rect x={96} y={180} width={1100} height={124} rx={22} fill={PAPER} stroke={NAVY_S} strokeWidth={4} />
					{NEXT17.map((t, i) => <Sx key={i} x={124} y={232 + i * 52} text={t} size={38} color={NAVY_T} weight={700} at={-1000} />)}
				</g>
			) : null}
			{void K17.so}{void clamp01}{void smooth}
		</svg>
	);
};

// ---------- 18. key notes ----------
type NP = {t: string; c?: string} | {ion: string; fill: string};
const NOTE_SIZE = 34;
const NoteLine: React.FC<{x: number; y: number; parts: NP[]}> = ({x, y, parts}) => {
	let cx = x;
	return (
		<>
			{parts.map((p, i) => {
				const x0 = cx;
				if ('ion' in p) { cx += richW([{t: p.ion}], NOTE_SIZE, false, 800); return <OText key={i} x={x0} y={y} text={p.ion} size={NOTE_SIZE} fill={p.fill} stroke={3} />; }
				cx += richW([{t: p.t}], NOTE_SIZE, false, 700);
				return <Rich key={i} x={x0} y={y} segs={[{t: p.t, c: p.c}] as Seg[]} size={NOTE_SIZE} weight={700} />;
			})}
		</>
	);
};
const io = (m: string): NP => ({ion: MT[m].ion, fill: MT[m].fill});
export const NOTES: NP[][][] = [
	[[{t: "Heat lifts a metal's electrons; as they drop back,"}], [{t: "they emit that metal's colours."}]],
	[[{t: 'Method', c: '#12827b'}, {t: ': clean loop, blank first, blue flame,'}], [{t: 'record at once, clean and repeat.'}]],
	[[io('Li'), {t: ' crimson, '}, io('Na'), {t: ' yellow-orange, '}, io('K'), {t: ' lilac,'}], [io('Ca'), {t: ' orange-red, '}, io('Ba'), {t: ' green, '}, io('Cu'), {t: ' blue-green.'}]],
	[[{t: 'A colour suggests the metal, not the compound,'}], [{t: 'and not the amount.'}]],
	[[{t: 'Limits', c: '#a8431f'}, {t: ': '}, io('Li'), {t: ' and '}, io('Sr'), {t: ' look alike; sodium masks;'}], [{t: 'a spectroscope confirms.'}]],
];
export const SceneNotes: React.FC = () => {
	const f = useCurrentFrame();
	const D = dur('key-notes');
	const outA = D - 46;
	let y = 300;
	const rows = NOTES.map((lines, i) => {
		const y0 = y;
		y += lines.length * 48 + 22;
		return (
			<Fade key={i} at={i * 3}>
				<circle cx={112} cy={y0 - 12} r={8} fill={INK} />
				{lines.map((l, k) => <NoteLine key={k} x={140} y={y0 + k * 48} parts={l} />)}
			</Fade>
		);
	});
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<Fade at={-1000} out={outA} d={18}>
				<Write x={96} y={150} text="Key notes: what to write in your book" at={2} size={60} color={INK} cps={40} />
				<Write x={96} y={214} text="Pause the video if you need more time to copy." at={4} size={38} color={AMB_T} />
				{rows}
				<Fade at={6}>
					<rect x={96} y={846} width={1728} height={60} rx={14} fill={PAPER} stroke={GREEN_S} strokeWidth={4} />
					<Sx x={120} y={886} text="Follow your school's risk assessment: safety glasses, hair tied back, hot loop, wash hands." size={30} color={INK} weight={700} at={-1000} />
					<rect x={1220} y={262} width={604} height={440} rx={22} fill={PAPER} stroke={NAVY_S} strokeWidth={5} />
					<Sx x={1250} y={306} text="memory aid" size={30} color={INK} hand at={-1000} />
					<Sx x={1260} y={392} text="Colour suggests;" size={50} color={RED_T} hand at={-1000} />
					<Sx x={1260} y={458} text="spectrum confirms." size={50} color={INK} hand at={-1000} />
					<OText x={1250} y={548} text="Li^{+}" size={34} fill={MT.Li.fill} at={-1000} />
					<SpecStrip id="v16n1" g={{x: 1350, y: 506, w: 450, h: 64}} lines={LI} labels={false} />
					<OText x={1236} y={634} text="Sr^{2+}" size={34} fill={MT.Sr.fill} at={-1000} />
					<SpecStrip id="v16n2" g={{x: 1350, y: 592, w: 450, h: 64}} lines={SR} labels={false} />
				</Fade>
			</Fade>
			{/* cross-fade back to the handoff's final frame */}
			{f >= outA ? <Fade at={outA + 4} d={18}><Freeze frame={dur('handoff') - 1}><SceneHandoff /></Freeze></Fade> : null}
			{void GLI}{void GSR}{void M12}
		</svg>
	);
};
