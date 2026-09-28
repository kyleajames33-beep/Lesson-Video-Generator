// FertiliseDiagram — external vs internal fertilisation.
//
// External: a pool on a stone plinth; eggs and sperm are released in large
// numbers and drift; only a few eggs are reached (they get a ring = zygote),
// many drift away or are lost. It only works in water and with timing.
// Internal: gametes meet inside the female: few gametes, but protected, so a
// larger share succeed, and it works on dry land.
// No success rates are given in the scenes, so no numbers are printed; the
// share of ringed eggs is only a picture of "low" vs "higher".
//
// mode 'external' (one pool) or 'compare' (pool vs internal, side by side),
// plus the bird trap chip ("fertilisation ≠ development").

import {useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idlePulse} from '../../diorama';
import {CORAL, GlossDefs, Pill, fadeAt, hash01, popAt} from './shared';

export type FertiliseProps = {
	mode?: 'external' | 'compare';
	at?: Record<string, number>;
	delay?: number;
};

const ID = 'b12m5fer';
const W = 760, H = 530;

export const FertiliseDiagram = ({mode = 'external', at = {}, delay = 62}: FertiliseProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();

	const pool = (cx: number, cy: number, rx: number, nEggs: number, hitEvery: number, tRelease: number, tMeet: number, seed: number) => {
		const ry = rx * 0.34;
		return (
			<DioramaPlinth id={`${ID}${seed}`} cx={cx} cy={cy} rx={rx}>
				<ellipse cx={cx} cy={cy - 2} rx={rx * 0.9} ry={ry * 0.85} fill="#bcd9ee" opacity={0.85} />
				{Array.from({length: nEggs}, (_, k) => {
					const p = popAt(frame, fps, tRelease + k * 2);
					const a = hash01(k + seed) * Math.PI * 2, r = Math.sqrt(hash01(k * 3 + seed)) * 0.82;
					const drift = Math.sin(frame / 40 + k) * 4;
					const x = cx + Math.cos(a) * rx * 0.85 * r + drift, y = cy - 4 + Math.sin(a) * ry * 0.75 * r;
					const hit = k % hitEvery === 0 && frame > tMeet + k * 3;
					return (
						<g key={k} opacity={Math.min(1, p)}>
							<circle cx={x} cy={y} r={7} fill={`url(#${ID}-g-egg)`} stroke="rgba(0,0,0,0.2)" />
							{hit && <circle cx={x} cy={y} r={10} fill="none" stroke={theme.accent} strokeWidth={2.5} />}
						</g>
					);
				})}
				{Array.from({length: nEggs * 2}, (_, k) => {
					if (frame < tRelease + 20) return null;
					const t = ((frame - tRelease + k * 13) % 120) / 120;
					const a = hash01(k * 5 + seed) * Math.PI * 2;
					const x = cx + Math.cos(a) * rx * 0.8 * t, y = cy - 4 + Math.sin(a) * ry * 0.7 * t;
					return <line key={`s${k}`} x1={x} y1={y} x2={x - Math.cos(a) * 7} y2={y - Math.sin(a) * 7} stroke={theme.accent} strokeWidth={2} opacity={1 - t} />;
				})}
			</DioramaPlinth>
		);
	};

	if (mode === 'external') {
		const tOut = at.outside ?? 20, tMany = at.many ?? 120, tLow = at.low ?? 250, tMiss = at.miss ?? 350, tWater = at.water ?? 500, tTime = at.timing ?? 600, tEx = at.examples ?? 800;
		return (
			<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="External fertilisation: many gametes released in water, low success per gamete" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
				<DioramaDefs id={ID} />
				<GlossDefs id={ID} colors={{egg: CORAL}} />
				<text x={380} y={40} textAnchor="middle" fill={TOK.ink} fontSize={19} fontWeight={800} opacity={fadeAt(frame, tOut)}>gametes meet outside the body, in water</text>
				{pool(380, 250, 300, 36, 9, tMany, tLow, 1)}
				<g opacity={fadeAt(frame, tMany)}>
					<Pill x={170} y={96} text="huge numbers released" color={theme.accent} fill={theme.soft} size={15} />
				</g>
				<g opacity={fadeAt(frame, tLow + 40)}>
					<Pill x={560} y={96} text="few eggs reached: low success per gamete" color={TOK.amberInk} fill="#fff8ea" size={15} strokeWidth={2 + idlePulse(frame)} />
				</g>
				<g opacity={fadeAt(frame, tMiss)}>
					<text x={380} y={396} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={800}>most sperm never reach an egg; many eggs are eaten</text>
				</g>
				<g opacity={popAt(frame, fps, tWater)}>
					<Pill x={250} y={440} text="needs water (gametes dry out)" color={theme.accent} size={15} />
				</g>
				<g opacity={popAt(frame, fps, tTime)}>
					<Pill x={530} y={440} text="needs synchronised spawning" color={theme.accent} size={15} />
				</g>
				<text x={380} y={H - 12} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={800} opacity={fadeAt(frame, tEx)}>fish, amphibians, many marine invertebrates</text>
			</svg>
		);
	}

	const tIn = at.inside ?? 20, tProt = at.protection ?? 100, tHigh = at.higher ?? 200, tLand = at.land ?? 300, tCost = at.cost ?? 450, tEx = at.examples ?? 600, tTrap = at.trap ?? 700, tBird = at.birds ?? 800;
	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Internal fertilisation: fewer gametes, more protection, works on land" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={{egg: CORAL, body: '#f1d9cc'}} />
			<text x={190} y={44} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={800}>external</text>
			<g opacity={0.9}>{pool(190, 220, 160, 22, 7, -200, -100, 2)}</g>
			<text x={190} y={316} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={800}>many gametes, low success, needs water</text>
			<text x={570} y={44} textAnchor="middle" fill={TOK.ink} fontSize={17} fontWeight={800} opacity={fadeAt(frame, tIn)}>internal</text>
			<g opacity={fadeAt(frame, tIn)}>
				<DioramaPlinth id={`${ID}in`} cx={570} cy={220} rx={160}>
					{/* the female body: a protected chamber on dry land */}
					<ellipse cx={570} cy={170} rx={110} ry={62} fill={`url(#${ID}-g-body)`} stroke="#c99b8a" strokeWidth={3} />
					{[0, 1, 2].map((k) => {
						const x = 530 + k * 40, y = 170 + (k - 1) * 8;
						const hit = frame > tHigh + k * 10;
						return (
							<g key={k}>
								<circle cx={x} cy={y} r={9} fill={`url(#${ID}-g-egg)`} stroke="rgba(0,0,0,0.2)" />
								{hit && k < 2 && <circle cx={x} cy={y} r={13} fill="none" stroke={theme.accent} strokeWidth={2.5} />}
							</g>
						);
					})}
				</DioramaPlinth>
			</g>
			<g opacity={fadeAt(frame, tProt)}>
				<text x={570} y={316} textAnchor="middle" fill={theme.accent} fontSize={15} fontWeight={800}>fewer gametes, protected: higher success</text>
			</g>
			<g opacity={popAt(frame, fps, tLand)}>
				<Pill x={570} y={356} text="works on dry land" color={theme.accent} fill={theme.soft} size={15} />
			</g>
			<g opacity={popAt(frame, fps, tCost)}>
				<Pill x={570} y={394} text="cost: mating, fewer offspring, more investment" color={TOK.inkDim} size={15} />
			</g>
			<text x={570} y={432} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={800} opacity={fadeAt(frame, tEx)}>reptiles, birds, mammals</text>
			<g opacity={popAt(frame, fps, tTrap)}>
				<rect x={120} y={452} width={520} height={60} rx={14} fill="#fff8ea" stroke={TOK.amber} strokeWidth={2 + (frame > tBird ? idlePulse(frame) * 1.5 : 0)} />
				<text x={380} y={476} textAnchor="middle" fill={TOK.amberInk} fontSize={16} fontWeight={800}>fertilisation ≠ development</text>
				<text x={380} y={500} textAnchor="middle" fill={TOK.ink} fontSize={15} fontWeight={800} opacity={fadeAt(frame, tBird)}>birds: internal fertilisation, embryo develops in an egg outside</text>
			</g>
		</svg>
	);
};
