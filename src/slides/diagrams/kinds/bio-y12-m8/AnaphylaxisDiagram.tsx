// AnaphylaxisDiagram — three cut-away models on stone plinths: a blood vessel,
// an airway and the heart, each with a gauge under it. Histamine floods in:
// the vessel dilates and the blood-pressure gauge falls (it reads from the
// vessel's width); the airway wall swells and its muscle constricts, so the
// airflow gauge falls (it reads from the lumen's width). Then intramuscular
// adrenaline arrives: alpha receptors constrict the vessel (pressure back up),
// beta receptors open the airway and strengthen the heartbeat.
//
// Beats are frames after `delay`. Hold: the heart keeps beating, histamine
// drifts, the adrenaline tag breathes.

import {useCurrentFrame} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {COL, GlossDefs, Note, NoteLine, Pill, ease, fadeAt, hash01} from './shared';

export type AnaphylaxisProps = {
	floodAt: number;
	dilateAt: number;
	swellAt: number;
	constrictAt: number;
	adrenalineAt: number;
	alphaAt: number;
	betaAt: number;
	notes?: Note[];
	delay?: number;
};

const ID = 'b12m8ana';
const W = 760;
const H = 530;
const Y0 = 200;

export const AnaphylaxisDiagram = ({floodAt, dilateAt, swellAt, constrictAt, adrenalineAt, alphaAt, betaAt, notes = [], delay = 62}: AnaphylaxisProps) => {
	const frame = useCurrentFrame() - delay;

	const dil = ease(frame, dilateAt, dilateAt + 60) * (1 - ease(frame, alphaAt, alphaAt + 70));
	const swell = ease(frame, swellAt, swellAt + 60) * (1 - ease(frame, betaAt, betaAt + 80));
	const con = ease(frame, constrictAt, constrictAt + 60) * (1 - ease(frame, betaAt, betaAt + 80));
	const strong = ease(frame, betaAt, betaAt + 40);
	const adr = fadeAt(frame, adrenalineAt, 14);

	// vessel: lumen radius grows with dilation; pressure falls as it widens
	const vR = 40 + 22 * dil;
	const pressure = 1 - 0.7 * dil;
	// airway: wall thickens (swelling) and muscle squeezes the lumen
	const wall = 12 + 10 * swell;
	const aR = 40 - 26 * Math.max(con, swell * 0.4);
	const airflow = Math.max(0.08, (aR - 14) / 26);

	const gauge = (x: number, v: number, label: string, low: string) => (
		<g>
			<text x={x} y={Y0 + 156} textAnchor="middle" fill={TOK.ink} fontSize={16} fontWeight={800}>{label}</text>
			<rect x={x - 80} y={Y0 + 166} width={160} height={14} rx={7} fill="#e6e3dd" stroke="#cfcac1" />
			<rect x={x - 80} y={Y0 + 166} width={160 * Math.max(0.03, v)} height={14} rx={7} fill={v < 0.5 ? COL.red : COL.green} />
			<text x={x} y={Y0 + 202} textAnchor="middle" fill={COL.red} fontSize={15} fontWeight={800} opacity={v < 0.5 ? 1 : 0}>{low}</text>
		</g>
	);

	const hist = (cx: number, seed: number) =>
		Array.from({length: 7}, (_, k) => {
			const o = fadeAt(frame, floodAt + k * 5, 12) * (1 - 0.6 * ease(frame, alphaAt, alphaAt + 120));
			const a = hash01(k * 3 + seed) * Math.PI * 2;
			const r = 78 + hash01(k * 5 + seed) * 16;
			return <circle key={k} cx={cx + Math.cos(a) * r + idleBob(frame, k + seed, 3)} cy={Y0 + Math.sin(a) * r * 0.8 + idleBob(frame, k + seed + 9, 3)} r={5} fill={`url(#${ID}-g-hist)`} opacity={o} />;
		});

	// heart beat: period 26 frames, amplitude grows after beta
	const beat = Math.max(0, Math.sin((frame / 26) * Math.PI * 2)) ** 3;
	const hs = 1 + beat * (0.04 + 0.08 * strong);

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Anaphylaxis: vasodilation drops blood pressure and the airway closes; adrenaline reverses both" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={{hist: COL.violet, heart: '#d9483b'}} />
			<g opacity={fadeAt(frame, 0, 16)}>
				{/* vessel */}
				<DioramaPlinth id={`${ID}v`} cx={130} cy={Y0 + 66} rx={104} />
				<ellipse cx={130} cy={Y0} rx={vR + 14} ry={(vR + 14) * 0.92} fill="#e79a8f" stroke="#b5584c" strokeWidth={2} />
				<ellipse cx={130} cy={Y0} rx={vR} ry={vR * 0.92} fill="#8f1f1b" />
				<text x={130} y={Y0 - 88} textAnchor="middle" fill={TOK.ink} fontSize={18} fontWeight={800}>blood vessel</text>
				<text x={130} y={Y0 + 4} textAnchor="middle" fill="#ffd9d4" fontSize={14} fontWeight={800}>{dil > 0.5 ? 'dilated' : ''}</text>
				{hist(130, 1)}
				{gauge(130, pressure, 'blood pressure', 'shock: organs not perfused')}

				{/* airway */}
				<DioramaPlinth id={`${ID}a`} cx={380} cy={Y0 + 66} rx={104} />
				<circle cx={380} cy={Y0} r={aR + wall + 10} fill="#f3c6cf" stroke="#c98894" strokeWidth={2} />
				<circle cx={380} cy={Y0} r={aR + wall} fill="none" stroke="#b86a7a" strokeWidth={4 + 6 * con} strokeDasharray="6 5" />
				<circle cx={380} cy={Y0} r={aR} fill="#fdf6f0" stroke="#c98894" strokeWidth={1.5} />
				<text x={380} y={Y0 - 88} textAnchor="middle" fill={TOK.ink} fontSize={18} fontWeight={800}>airway</text>
				{hist(380, 7)}
				{gauge(380, airflow, 'airflow', 'swelling + bronchoconstriction')}

				{/* heart */}
				<DioramaPlinth id={`${ID}h`} cx={630} cy={Y0 + 66} rx={104} />
				<g transform={`translate(630 ${Y0 + 4}) scale(${hs})`}>
					<path d="M 0 40 C -60 0, -52 -48, -18 -44 C -6 -42, 0 -32, 0 -26 C 0 -32, 6 -42, 18 -44 C 52 -48, 60 0, 0 40 Z" fill={`url(#${ID}-g-heart)`} stroke="#8a2a22" strokeWidth={2} />
				</g>
				<text x={630} y={Y0 - 88} textAnchor="middle" fill={TOK.ink} fontSize={18} fontWeight={800}>heart</text>
				<text x={630} y={Y0 + 156} textAnchor="middle" fill={COL.green} fontSize={16} fontWeight={800} opacity={strong}>stronger heartbeat</text>
			</g>

			{/* histamine banner */}
			<g opacity={fadeAt(frame, floodAt, 12) * (1 - adr)}>
				<Pill x={W / 2} y={30} text="histamine floods the whole body" color={COL.violet} size={18} />
			</g>

			{/* adrenaline */}
			<g opacity={adr}>
				<Pill x={W / 2} y={30} text="intramuscular adrenaline" color={TOK.amberInk} fill="#fff7e8" size={18} strokeWidth={2 + idlePulse(frame, 50) * 1.5} />
				<text x={130} y={Y0 + 228} textAnchor="middle" fill={TOK.amberInk} fontSize={15} fontWeight={800} opacity={fadeAt(frame, alphaAt, 12)}>alpha: vasoconstriction</text>
				<text x={380} y={Y0 + 228} textAnchor="middle" fill={TOK.amberInk} fontSize={15} fontWeight={800} opacity={fadeAt(frame, betaAt, 12)}>beta: bronchodilation</text>
				<text x={630} y={Y0 + 228} textAnchor="middle" fill={TOK.amberInk} fontSize={15} fontWeight={800} opacity={fadeAt(frame, betaAt + 20, 12)}>beta: stronger beat</text>
			</g>

			{notes.map((nt, k) => (
				<NoteLine key={k} note={nt} x={W / 2} y={H - 8 - (notes.length - 1 - k) * 24} frame={frame} size={18} />
			))}
		</svg>
	);
};
