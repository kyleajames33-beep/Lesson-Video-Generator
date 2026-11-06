// M6 B08 exam-card pictures (6 Nov quality fix). Each draws only the givens of its question, never the answer:
// item 1, skinks on an island, a cyclone, and the ten survivors; item 2, a small isolated possum population, a large
// one, and the planned move of ten possums. Drawn in local coordinates around (0, 0); the scene places and scales them.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {PlateB, Sx} from '../bio-m5-b13/shared';
import {qPt} from '../bio-m6-b01/parts';
import {PLATES} from './assets';
import {AMBER_INK, INK, INK_SOFT, clamp01, prog, smooth} from './parts';
import {DrawPath, rng} from '../../kit';

// island plate at w 1100: height 1100 * 443 / 1560 = 312 (box centred at 0, 0)
const SK = (() => {
	const r = rng(41);
	return Array.from({length: 20}, (_, i) => {
		const c = i % 5, w = Math.floor(i / 5);
		return [-360 + c * 175 + (w % 2 ? 50 : 0) + (r() - 0.5) * 30, -96 + w * 46 + (r() - 0.5) * 8, r() < 0.5 ? 1 : -1] as [number, number, number];
	});
})();
const SURV = [0, 3, 6, 7, 9, 11, 14, 15, 17, 18];
if (SURV.length !== 10) throw new Error('B08 item 1 picture: exactly 10 survivors');

/** Item 1 givens: about 500 skinks on an island (20 drawn), a cyclone, ten survivors left. */
export const SkinkIsland: React.FC<{island: number; cyclone: number; ten: number; o?: number; tags?: number}> = ({island, cyclone, ten, o = 1, tags = 1}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const storm = clamp01(prog(f, cyclone, 14) - prog(f, ten, 20));
	const kill = smooth(prog(f, cyclone + 20, 30));
	const spin = (f - cyclone) * 4;
	return (
		<g opacity={o}>
			<PlateB p={PLATES.island} cx={0} cy={0} w={1100} o={prog(f, island - 10, 14)} />
			{SK.map(([x, y, d], i) => {
				const lives = SURV.includes(i);
				const op = prog(f, island + i * 1.5, 8) * (lives ? 1 : 1 - kill);
				if (op <= 0.01) return null;
				return (
					<g key={i} transform={`translate(${x},${y}) scale(${d},1)`}>
						<PlateB p={PLATES.skink} cx={0} cy={0} w={160} o={op} filter={`drop-shadow(0 0 4px rgba(255,253,248,0.95))${!lives && kill > 0.05 ? ` grayscale(${kill})` : ''}`} />
					</g>
				);
			})}
			{/* cyclone: a coded storm symbol over the island */}
			{storm > 0.01 ? (
				<g opacity={storm} transform={`translate(300,-170) rotate(${spin})`}>
					{[0, 120, 240].map(a => (
						<path key={a} transform={`rotate(${a})`} d="M0,0 C44,-14 104,-14 140,-76" fill="none" stroke="#5f7f9c" strokeWidth={13} strokeLinecap="round" />
					))}
					<circle r={22} fill="none" stroke="#5f7f9c" strokeWidth={11} />
				</g>
			) : null}
			<g opacity={tags}>
				<Sx x={-520} y={-190} text="500 skinks" size={56} color={INK} hand at={island + 10} out={ten} />
				<Sx x={300} y={-330} text="cyclone" size={44} color="#5f7f9c" hand anchor="middle" at={cyclone + 6} out={ten} />
				<Sx x={-520} y={-190} text="10 survivors" size={60} color={AMBER_INK} hand at={ten + 8} />
			</g>
		</g>
	);
};

/** Item 2 givens: a small isolated population (30), a large population, and the plan to bring in 10 possums. */
const SMALL: [number, number][] = [[-560, -40], [-470, -50], [-380, -36], [-515, 4], [-425, 0]];
const LARGE: [number, number][] = Array.from({length: 12}, (_, i) => [150 + (i % 4) * 120 + (Math.floor(i / 4) % 2 ? 50 : 0), -70 + Math.floor(i / 4) * 52]);
export const PossumPlan: React.FC<{small: number; team: number; bring: number; o?: number}> = ({small, team, bring, o = 1}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const a: [number, number] = [160, -150], b: [number, number] = [-420, -140];
	return (
		<g opacity={o}>
			<PlateB p={PLATES.island} cx={-470} cy={0} w={440} o={prog(f, small - 6, 14)} />
			{SMALL.map(([x, y], i) => <PlateB key={i} p={PLATES.possum} cx={x} cy={y} w={84} o={prog(f, small + 6 + i * 3, 8)} />)}
			<Sx x={-470} y={150} text="30 possums, isolated" size={52} color={INK} hand anchor="middle" at={small + 20} />
			<Sx x={-470} y={204} text="lost much variation" size={42} color={INK_SOFT} hand anchor="middle" at={small + 110} />
			<PlateB p={PLATES.island} cx={330} cy={0} w={820} o={prog(f, team - 6, 14)} />
			{LARGE.map(([x, y], i) => <PlateB key={i} p={PLATES.possum} cx={x} cy={y} w={80} o={prog(f, team + 4 + i * 1.5, 8)} />)}
			<Sx x={330} y={196} text="large population, same species" size={52} color={INK} hand anchor="middle" at={team + 20} />
			<DrawPath d={`M${a[0]},${a[1]} Q${(a[0] + b[0]) / 2},${(a[1] + b[1]) / 2 - 150} ${b[0]},${b[1]}`} at={bring} dur={22} color={INK_SOFT} width={4} />
			{[0, 1, 2].map(k => {
				const t = smooth(prog(f, bring + 10 + k * 8, 40));
				const [x, y] = qPt(a, b, -150, t);
				return <PlateB key={k} p={PLATES.possum} cx={x} cy={y - 24} w={64} o={prog(f, bring + 10 + k * 8, 6)} />;
			})}
			<Sx x={-130} y={-300} text="bring in 10 possums" size={56} color={AMBER_INK} hand anchor="middle" at={bring + 12} />
		</g>
	);
};
