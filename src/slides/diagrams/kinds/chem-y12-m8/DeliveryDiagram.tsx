// DeliveryDiagram: how a drug gets where it is needed (Chem Y12 M8 L14).
//
// Modes:
//   like: "like dissolves like": watery blood plasma (polar) on one
//               plinth, a lipid cell membrane (non-polar) on the other, and a
//               drug molecule between them whose polar groups (−OH, −COOH) face
//               the plasma and whose hydrocarbon-rich tail faces the lipid. A
//               good drug is a compromise: it must do both (concept-like).
//   firstpass: a swallowed dose is absorbed from the gut and passes through
//               the liver BEFORE general circulation; much of it is
//               metabolised there, so less active drug reaches the body
//               (legacy view; opt in to reviewed labels below). Codeine → morphine
//               (concept-firstpass). No percentages: the scene gives none.
//
// Beats are frames after `delay`, placed where the voiceover says the words.

import {useCurrentFrame} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, ELEMENT_COLORS, Molecule, idleBob, idlePulse} from '../../diorama';
import {Arrow, Beaker, GlossDefs, Pill, ease, hash01, ramp, shade, textW} from './shared';
import {Bilayer} from './drug-parts';
import {validateSafetyMedicineDiagram} from '../../safety-medicine-models.mjs';

type Mode = 'like' | 'firstpass';

export type DeliveryProps = {
	delay?: number;
	mode?: Mode;
	/** Frames after `delay`; meaning depends on mode (see DEFAULT_BEATS). */
	beats?: number[];
	/** firstpass: the prodrug pair named in the scene. */
	prodrug?: string;
	activeDrug?: string;
	/** Source-reviewed model labels; does not alter existing narration. */
	reviewedSafetyMedicine?: boolean;
};

const W = 760;
const H = 530;
const LIPID = '#9a7433'; // non-polar / lipid ink
const PLASMA = 'rgba(236,208,120,0.38)'; // blood plasma is straw-yellow

const DEFAULT_BEATS: Record<Mode, number[]> = {
	// plasma, membrane, polar groups, non-polar region, compromise, good drug
	like: [111, 161, 317, 501, 685, 792],
	// dose swallowed, to the liver first, metabolised, lower bioavailability, prodrug, codeine → morphine
	firstpass: [24, 141, 224, 390, 424, 611],
};

// ─────────────────────────────────────────────────────────────── like
const LikeMode = ({frame, beats, id, accent, reviewedSafetyMedicine}: {frame: number; beats: number[]; id: string; accent: string; reviewedSafetyMedicine: boolean}) => {
	const [tPlasma, tMem, tPolar, tNon, tComp, tGood] = beats;
	const polarIn = ramp(frame, tPolar, 16);
	const nonIn = ramp(frame, tNon, 16);
	const compIn = ramp(frame, tComp, 16);
	// After "a good drug", the molecule shuttles gently between the two sides.
	const shuttle = frame >= tGood ? Math.sin(((frame - tGood) / 90) * Math.PI * 2) * 34 * Math.min(1, (frame - tGood) / 30) : 0;
	const mx = 0 + shuttle;
	const my = idleBob(frame, 3, 2);

	// Drug molecule (ball-and-stick), coordinates relative to its centre (380, 292).
	type A = {el: string; x: number; y: number};
	const atoms: A[] = [
		{el: 'O', x: -76, y: -26}, // C=O of −COOH
		{el: 'O', x: -84, y: 18}, // −OH of −COOH
		{el: 'H', x: -104, y: 28},
		{el: 'C', x: -58, y: 2}, // COOH carbon
		{el: 'C', x: -30, y: -14},
		{el: 'C', x: -2, y: 2},
		{el: 'O', x: -2, y: 34}, // −OH on the chain
		{el: 'H', x: 16, y: 46},
		{el: 'C', x: 26, y: -14},
		{el: 'C', x: 54, y: 2},
		{el: 'C', x: 82, y: -14},
		{el: 'H', x: 100, y: -30},
		{el: 'H', x: 100, y: 0},
		{el: 'H', x: 82, y: -38},
	];
	const bonds: [number, number][] = [[0, 3], [1, 3], [1, 2], [3, 4], [4, 5], [5, 6], [6, 7], [5, 8], [8, 9], [9, 10], [10, 11], [10, 12], [10, 13]];
	const CX = 380 + mx, CY = 292 + my;
	const rad = (el: string) => (el === 'H' ? 8 : 12);

	const waters = Array.from({length: 7}, (_, i) => ({
		x: 108 + (i % 4) * 38 + (Math.floor(i / 4) % 2) * 19 + idleBob(frame, i, 3),
		y: 262 + Math.floor(i / 4) * 44 + idleBob(frame + 50, i + 3, 3),
	}));

	return (
		<g>
			<g opacity={compIn}>
				<Pill x={W / 2} y={40} text={reviewedSafetyMedicine ? 'Simple affinity model: aqueous and lipid interactions' : 'A good drug: dissolves in plasma AND crosses membranes'} padX={reviewedSafetyMedicine ? 12 + (textW('A good drug: dissolves in plasma AND crosses membranes', 19) - textW('Simple affinity model: aqueous and lipid interactions', 19)) / 2 : 12} color={TOK.amber} textColor={TOK.amberInk} size={19} strokeWidth={2 + idlePulse(frame) * 1.5} />
			</g>

			{reviewedSafetyMedicine && <text x={W / 2} y={72} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={700}>Polarity alone cannot establish solubility or absorption</text>}
			{/* Plasma */}
			<g opacity={ramp(frame, 0, 16)}>
				<text x={165} y={112} textAnchor="middle" fill={TOK.ink} fontSize={23} fontWeight={800}>Blood plasma</text>
			</g>
			<g opacity={ramp(frame, tPlasma, 16)}>
				<text x={165} y={138} textAnchor="middle" fill={accent} fontSize={18} fontWeight={800}>aqueous, polar</text>
			</g>
			<DioramaPlinth id={`${id}a`} cx={165} cy={386} rx={130}>
				<Beaker cx={165} baseY={386} w={190} h={210} level={0.8} liquid={PLASMA}>
					{waters.map((w, i) => (
						<Molecule key={i} id={id} atoms={['O', 'H', 'H']} x={w.x} y={w.y} r={11} />
					))}
				</Beaker>
			</DioramaPlinth>

			{/* Membrane */}
			<g opacity={ramp(frame, 0, 16)}>
				<text x={605} y={112} textAnchor="middle" fill={TOK.ink} fontSize={23} fontWeight={800}>Cell membrane</text>
			</g>
			<g opacity={ramp(frame, tMem, 16)}>
				<text x={605} y={138} textAnchor="middle" fill={LIPID} fontSize={18} fontWeight={800}>{reviewedSafetyMedicine ? 'non-polar interior' : 'lipid, non-polar'}</text>
			</g>
			<DioramaPlinth id={`${id}b`} cx={605} cy={386} rx={130}>
				<g transform={`translate(0, ${idleBob(frame, 9, 1)})`}>
					<rect x={515} y={214} width={180} height={146} rx={10} fill="rgba(240,214,150,0.28)" />
					<Bilayer c={287} a0={522} a1={690} thick={140} vertical={false} />
				</g>
			</DioramaPlinth>

			{/* Region glows */}
			<ellipse cx={CX - 58} cy={CY + 6} rx={62} ry={54} fill={accent} opacity={0.16 * polarIn} />
			<ellipse cx={CX + 54} cy={CY - 12} rx={58} ry={40} fill={LIPID} opacity={0.16 * nonIn} />

			{/* Drug molecule */}
			<g opacity={ramp(frame, 0, 16)}>
				{bonds.map(([a, b], i) => (
					<line key={i} x1={CX + atoms[a].x} y1={CY + atoms[a].y} x2={CX + atoms[b].x} y2={CY + atoms[b].y} stroke="#6b6b6b" strokeWidth={5} strokeLinecap="round" />
				))}
				{atoms.map((a, i) => (
					<circle key={i} cx={CX + a.x} cy={CY + a.y} r={rad(a.el)} fill={`url(#${id}-atom-${a.el})`} stroke={shade(ELEMENT_COLORS[a.el], -0.35)} strokeWidth={1} />
				))}
			</g>
			<g opacity={polarIn}>
				<text x={CX - 64} y={CY - 58} textAnchor="middle" fill={accent} fontSize={18} fontWeight={800}>polar</text>
				<text x={CX - 64} y={CY + 84} textAnchor="middle" fill={accent} fontSize={17} fontWeight={800}>−COOH, −OH</text>
			</g>
			<g opacity={nonIn}>
				<text x={CX + 60} y={CY - 58} textAnchor="middle" fill={LIPID} fontSize={18} fontWeight={800}>non-polar</text>
			</g>

			{reviewedSafetyMedicine && <text x={W / 2} y={521} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={700} opacity={compIn}>pH, formulation and measured data also matter</text>}
			{/* What each region prefers */}
			<g opacity={polarIn}>
				<text x={165} y={470} textAnchor="middle" fill={accent} fontSize={17} fontWeight={800}>polar groups, H-bonding</text>
				<text x={165} y={494} textAnchor="middle" fill={TOK.ink} fontSize={17} fontWeight={700}>{reviewedSafetyMedicine ? '→ aqueous affinity' : '→ dissolve in plasma'}</text>
			</g>
			<g opacity={nonIn}>
				<text x={605} y={470} textAnchor="middle" fill={LIPID} fontSize={17} fontWeight={800}>hydrocarbon-rich regions</text>
				<text x={605} y={494} textAnchor="middle" fill={TOK.ink} fontSize={17} fontWeight={700}>→ favour the lipid</text>
			</g>
			<g opacity={compIn}>
				<Arrow x1={330} y1={446} x2={272} y2={446} color={TOK.amber} width={3.5} head={12} />
				<Arrow x1={430} y1={446} x2={488} y2={446} color={TOK.amber} width={3.5} head={12} />
				<text x={380} y={452} textAnchor="middle" fill={TOK.amberInk} fontSize={17} fontWeight={800}>{reviewedSafetyMedicine ? 'affinity' : 'both'}</text>
			</g>
		</g>
	);
};

// ─────────────────────────────────────────────────────────────── firstpass
const GUT = 120, LIV = 375, CIRC = 630, PY = 290;

const FirstPassMode = ({frame, beats, id, accent, prodrug, activeDrug, reviewedSafetyMedicine}: {frame: number; beats: number[]; id: string; accent: string; prodrug: string; activeDrug: string; reviewedSafetyMedicine: boolean}) => {
	const [tDose, tLiver, tMetab, tBio, tPro, tPair] = beats;
	const GREY = '#9c9890';

	const LRX = 82, LRY = 44; // circulation loop
	// Path gut → liver → circulation loop entry (polyline), lengths in px.
	const pts = [
		{x: GUT, y: 250}, {x: GUT + 76, y: 262}, {x: LIV - 100, y: 262}, {x: LIV, y: 252},
		{x: LIV + 100, y: 262}, {x: CIRC - LRX, y: 252},
	];
	const segLen = pts.slice(1).map((p, i) => Math.hypot(p.x - pts[i].x, p.y - pts[i].y));
	const total = segLen.reduce((a, b) => a + b, 0);
	const at = (d: number) => {
		let rem = d;
		for (let i = 0; i < segLen.length; i++) {
			if (rem <= segLen[i]) {
				const u = rem / segLen[i];
				return {x: pts[i].x + (pts[i + 1].x - pts[i].x) * u, y: pts[i].y + (pts[i + 1].y - pts[i].y) * u};
			}
			rem -= segLen[i];
		}
		return pts[pts.length - 1];
	};
	const liverD = segLen[0] + segLen[1] + segLen[2];
	const speed = 2.4;
	const period = 16;

	const particles = [];
	const nSpawn = Math.max(0, Math.floor((frame - tLiver) / period) + 1);
	for (let k = Math.max(0, nSpawn - 40); k < nSpawn; k++) {
		const t0 = tLiver + k * period;
		const d = (frame - t0) * speed;
		if (d < 0) continue;
		const survives = hash01(k * 7 + 3) < 0.28;
		let x: number, y: number, col = accent, op = 1;
		if (d <= liverD) {
			({x, y} = at(d));
		} else if (!survives) {
			// metabolised in the liver: turns grey and fades inside the organ
			const u = Math.min(1, (d - liverD) / 70);
			const j = hash01(k * 13 + 1);
			x = LIV + (j - 0.5) * 70 * u;
			y = 252 + (hash01(k * 5 + 2) - 0.5) * 30 * u + u * 8;
			col = GREY;
			op = 1 - Math.max(0, (d - liverD - 60) / 60);
			if (op <= 0) continue;
		} else if (d <= total) {
			({x, y} = at(d));
		} else {
			// one lap of the circulation loop, then fade
			const a = Math.PI + (d - total) / 70;
			x = CIRC + LRX * Math.cos(a);
			y = 252 + LRY * Math.sin(a);
			op = 1 - Math.max(0, (a - Math.PI - 5.4) / 1.2);
			if (op <= 0) continue;
		}
		const inLiver = d > liverD - 40 && d <= liverD + 10 && !survives ? (d - (liverD - 40)) / 50 : 0;
		particles.push(
			<g key={k} opacity={op}>
				<circle cx={x} cy={y} r={8} fill={`url(#${id}-g-${col === GREY || inLiver > 0.5 ? 'grey' : 'drug'})`} stroke="#ffffff" strokeWidth={1} />
			</g>,
		);
	}

	const dropT = ease(ramp(frame, tDose, 30));
	const doseY = 84 + dropT * 170;
	const doseOp = 1 - ramp(frame, tDose + 30, 14);
	const liverGlow = frame >= tLiver ? 0.55 + 0.45 * idlePulse(frame) : 0;

	return (
		<g>
			{/* swallowed dose */}
			<g opacity={ramp(frame, 0, 14) * doseOp}>
				<text x={GUT} y={40} textAnchor="middle" fill={TOK.ink} fontSize={20} fontWeight={800}>swallowed dose</text>
			</g>
			<g opacity={doseOp} transform={`translate(${GUT}, ${doseY}) rotate(${-20 + dropT * 40})`}>
				<rect x={-26} y={-12} width={52} height={24} rx={12} fill={`url(#${id}-g-drug)`} stroke={shade('#1f9477', -0.3)} />
				<rect x={0} y={-12} width={26} height={24} rx={12} fill="#f4f1ea" stroke="#b9b3a6" />
				<rect x={0} y={-12} width={10} height={24} fill="#f4f1ea" />
			</g>

			{reviewedSafetyMedicine && <g opacity={ramp(frame, tLiver, 16)}>
				<text x={430} y={52} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={700}>Parent-drug view: metabolites and their effects are not shown</text>
				<text x={430} y={78} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={700}>Presystemic metabolism can occur in gut wall and liver</text>
				<text x={430} y={101} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={700}>Metabolism changes molecules; it does not always inactivate them</text>
			</g>}
			{/* amber: liver comes first */}
			<g opacity={ramp(frame, tLiver, 16)}>
				<Pill x={372} y={130} text={reviewedSafetyMedicine ? 'Illustrative oral route: gut → liver → circulation' : 'reaches the liver BEFORE general circulation'} padX={reviewedSafetyMedicine ? 12 + (textW('reaches the liver BEFORE general circulation', 18) - textW('Illustrative oral route: gut → liver → circulation', 18)) / 2 : 12} color={TOK.amber} textColor={TOK.amberInk} size={18} strokeWidth={2 + idlePulse(frame) * 1.5} />
			</g>

			{/* Plinths + organs */}
			<g transform="translate(0,12)">
			<DioramaPlinth id={`${id}g`} cx={GUT} cy={PY} rx={100}>
				<g transform={`translate(${GUT},262) scale(1.25) translate(${-GUT},-262)`}>
				<path
					d={`M ${GUT - 52} 206 C ${GUT - 80} 226 ${GUT - 10} 234 ${GUT - 30} 250 C ${GUT - 60} 270 ${GUT + 20} 282 ${GUT} 262 C ${GUT - 16} 244 ${GUT + 60} 232 ${GUT + 40} 256 C ${GUT + 24} 276 ${GUT + 70} 286 ${GUT + 62} 262`}
					fill="none" stroke="#e7a3a0" strokeWidth={16} strokeLinecap="round" />
				<path
					d={`M ${GUT - 52} 206 C ${GUT - 80} 226 ${GUT - 10} 234 ${GUT - 30} 250 C ${GUT - 60} 270 ${GUT + 20} 282 ${GUT} 262 C ${GUT - 16} 244 ${GUT + 60} 232 ${GUT + 40} 256 C ${GUT + 24} 276 ${GUT + 70} 286 ${GUT + 62} 262`}
					fill="none" stroke="#f6d0cd" strokeWidth={5} strokeLinecap="round" opacity={0.8} />
				</g>
			</DioramaPlinth>
			<DioramaPlinth id={`${id}l`} cx={LIV} cy={PY} rx={100}>
				<g transform={`translate(${LIV},262) scale(1.2) translate(${-LIV},-262)`}>
				<path
					d={`M ${LIV - 82} 250 C ${LIV - 90} 214 ${LIV - 30} 204 ${LIV + 10} 212 C ${LIV + 50} 218 ${LIV + 90} 214 ${LIV + 84} 236 C ${LIV + 78} 258 ${LIV + 30} 262 ${LIV - 4} 284 C ${LIV - 30} 300 ${LIV - 74} 284 ${LIV - 82} 250 Z`}
					fill={`url(#${id}-g-liver)`} stroke={frame >= tLiver ? TOK.amber : '#5e2219'} strokeWidth={frame >= tLiver ? 3 + liverGlow * 2 : 1.5} />
				</g>
			</DioramaPlinth>
			<DioramaPlinth id={`${id}c`} cx={CIRC} cy={PY} rx={100}>
				<ellipse cx={CIRC} cy={252} rx={LRX} ry={LRY} fill="none" stroke="#b8322a" strokeWidth={13} opacity={0.9} />
				<ellipse cx={CIRC} cy={252} rx={LRX} ry={LRY} fill="none" stroke="#e7766c" strokeWidth={4} opacity={0.7} />
			</DioramaPlinth>
			{/* vessels */}
			<path d={`M ${GUT + 76} 262 L ${LIV - 100} 262`} stroke="#c9564c" strokeWidth={12} strokeLinecap="round" opacity={0.35} />
			<path d={`M ${LIV + 100} 262 L ${CIRC - LRX} 256`} stroke="#c9564c" strokeWidth={12} strokeLinecap="round" opacity={0.35} />

			{/* drug in the gut after the dose dissolves */}
			<g opacity={ramp(frame, tDose + 30, 16) * (1 - ramp(frame, tLiver + 40, 30))}>
				{Array.from({length: 6}, (_, i) => (
					<circle key={i} cx={GUT - 40 + i * 16 + idleBob(frame, i, 3)} cy={244 + (i % 2) * 14 + idleBob(frame + 20, i, 3)} r={7} fill={`url(#${id}-g-drug)`} stroke="#ffffff" strokeWidth={1} />
				))}
			</g>
			{particles}
			</g>

			{/* Station labels */}
			<g opacity={ramp(frame, 0, 16)}>
				<text x={GUT} y={384} textAnchor="middle" fill={TOK.ink} fontSize={22} fontWeight={800}>Gut</text>
				<text x={LIV} y={384} textAnchor="middle" fill={TOK.ink} fontSize={22} fontWeight={800}>Liver</text>
				<text x={CIRC} y={384} textAnchor="middle" fill={TOK.ink} fontSize={22} fontWeight={800}>General circulation</text>
			</g>
			<g opacity={ramp(frame, tLiver, 14)}>
				<text x={GUT} y={406} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={700}>{reviewedSafetyMedicine ? 'absorbed parent' : 'absorbed'}</text>
			</g>
			<g opacity={ramp(frame, tMetab, 14)}>
				<text x={LIV} y={406} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={700}>{reviewedSafetyMedicine ? 'presystemic' : 'a large fraction'}</text>
				<text x={LIV} y={425} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={700}>{reviewedSafetyMedicine ? 'metabolism varies' : 'metabolised'}</text>
			</g>
			<g opacity={ramp(frame, tBio, 14)}>
				<text x={CIRC} y={406} textAnchor="middle" fill={accent} fontSize={17} fontWeight={800}>{reviewedSafetyMedicine ? 'unchanged parent may fall' : 'less active drug'}</text>
				<text x={CIRC} y={425} textAnchor="middle" fill={accent} fontSize={reviewedSafetyMedicine ? 16 : 17} fontWeight={800}>{reviewedSafetyMedicine ? 'oral bioavailability may fall' : 'lower oral bioavailability'}</text>
			</g>

			{/* Prodrug strip */}
			<g opacity={ramp(frame, tPro, 16)}>
				<rect x={40} y={442} width={680} height={80} rx={16} fill="#ffffff" stroke={TOK.cardBorder} strokeWidth={2} />
				<text x={W / 2} y={472} textAnchor="middle" fill={TOK.ink} fontSize={19} fontWeight={800}>{reviewedSafetyMedicine ? 'Codeine has activity; morphine also contributes' : 'Prodrug: given inactive, activated in the body'}</text>
			</g>
			<g opacity={ramp(frame, tPair, 16)}>
				<circle cx={250} cy={500} r={10} fill={`url(#${id}-g-grey)`} stroke="#77736b" />
				<text x={268} y={507} fill={TOK.inkDim} fontSize={19} fontWeight={800}>{prodrug}</text>
				<Arrow x1={362} y1={500} x2={420} y2={500} color={TOK.inkDim} width={3} head={11} progress={ramp(frame, tPair + 6, 18)} />
				<circle cx={446} cy={500} r={10} fill={`url(#${id}-g-drug)`} stroke={shade('#1f9477', -0.3)} opacity={ramp(frame, tPair + 20, 12)} />
				<text x={464} y={507} fill={accent} fontSize={19} fontWeight={800} opacity={ramp(frame, tPair + 20, 12)}>{activeDrug}</text>
			</g>
		</g>
	);
};

// ─────────────────────────────────────────────────────────────── root
export const DeliveryDiagram = (props: DeliveryProps) => {
	validateSafetyMedicineDiagram({type: 'diorama', kind: 'chem12m8Delivery', props});
	const {delay = 62, mode = 'like', beats, prodrug = 'codeine', activeDrug = 'morphine', reviewedSafetyMedicine = false} = props;
	const frame = useCurrentFrame() - delay;
	const theme = useAccent();
	const b = beats && beats.length >= DEFAULT_BEATS[mode].length ? beats : DEFAULT_BEATS[mode];
	const id = `c12m8del${mode}`;
	const aria =
		mode === 'like'
			? 'Like dissolves like: blood plasma is aqueous and polar, the cell membrane is lipid and non-polar. A drug molecule has polar groups (-OH, -COOH) that dissolve in plasma and a hydrocarbon-rich region that favours the lipid; a good drug must do both.'
			: `First-pass metabolism: a swallowed dose is absorbed from the gut and reaches the liver before general circulation; a large fraction is metabolised, so less active drug reaches the body. A prodrug is given inactive and activated in the body, e.g. ${prodrug} to ${activeDrug}.`;
	const reviewedAria = mode === 'like'
		? 'Simple affinity model: polar groups can favour aqueous interactions and hydrocarbon-rich regions can favour the lipid interior. Structural polarity alone does not establish solubility or absorption; pH, formulation and measured data also matter.'
		: 'Illustrative oral parent-drug route through gut and liver. Presystemic metabolism may reduce unchanged parent reaching general circulation; the amount varies. Fading particles represent loss of parent identity, not destruction of all drug activity. Metabolites and their effects are not shown. Codeine has activity and its metabolite morphine contributes to effects.';
	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={reviewedSafetyMedicine ? reviewedAria : aria} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={id} elements={['O', 'H', 'C']} />
			<GlossDefs id={id} colors={{drug: '#1f9477', grey: '#9c9890', liver: '#8e3b2e'}} />
			{mode === 'like' ? (
				<LikeMode frame={frame} beats={b} id={id} accent={theme.accent} reviewedSafetyMedicine={reviewedSafetyMedicine} />
			) : (
				<FirstPassMode frame={frame} beats={b} id={id} accent={theme.accent} prodrug={prodrug} activeDrug={activeDrug} reviewedSafetyMedicine={reviewedSafetyMedicine} />
			)}
		</svg>
	);
};
