// Small coded objects that stand on a StepsDiagram plinth. Each icon is drawn
// centred on x = 0 with its base at y = 0 (the plinth top), about 90 wide and
// up to 100 tall, so the kind can place and scale it. Lane-local helpers.

import {TOK} from '../../../../styles/tokens';
import {Beaker, Flask, hash01} from './shared';

export type StepIconName =
	| 'dissolve' | 'precipitate' | 'filter' | 'dry' | 'weigh'
	| 'discovery' | 'preclinical' | 'people' | 'approved';

const LIQ = 'rgba(120,190,235,0.32)';
const WHITE_PPT = '#f3f2ee';

const Person = ({x, y, s = 1, color}: {x: number; y: number; s?: number; color: string}) => (
	<g transform={`translate(${x},${y}) scale(${s})`}>
		<path d="M -11 0 Q -11 -24 0 -24 Q 11 -24 11 0 Z" fill={color} stroke="rgba(0,0,0,0.25)" strokeWidth={1} />
		<circle cx={0} cy={-31} r={7.5} fill="#e9c9a8" stroke="rgba(0,0,0,0.25)" strokeWidth={1} />
	</g>
);

/** frame: for gentle motion inside the icon (bubbles, heat shimmer). count: people icon crowd size. */
export const StepIcon = ({name, frame, count = 3, accent}: {name: StepIconName; frame: number; count?: number; accent: string}) => {
	switch (name) {
		case 'dissolve':
			return (
				<Beaker cx={0} baseY={0} w={70} h={84} level={0.62} liquid={LIQ}>
					{[0, 1, 2, 3, 4].map((i) => {
						const a = frame / 22 + i * 1.3;
						return <circle key={i} cx={Math.cos(a) * 18} cy={-24 + Math.sin(a) * 8 - i * 2} r={3.2} fill={accent} opacity={0.55} />;
					})}
				</Beaker>
			);
		case 'precipitate':
			return (
				<g>
					<Beaker cx={0} baseY={0} w={70} h={84} level={0.62} liquid={LIQ}>
						{Array.from({length: 14}, (_, i) => (
							<circle key={i} cx={-26 + hash01(i + 3) * 52} cy={-5 - hash01(i + 40) * 9} r={3.4} fill={WHITE_PPT} stroke="#c9c6bd" strokeWidth={0.8} />
						))}
					</Beaker>
					{/* dropping pipette with a falling drop */}
					<rect x={18} y={-128} width={9} height={34} rx={3} fill="#ffffff" stroke="rgba(70,90,110,0.55)" strokeWidth={2} />
					<ellipse cx={22.5} cy={-132} rx={9} ry={7} fill="#d96a5a" />
					<circle cx={22.5} cy={-90 + ((frame * 1.4) % 40)} r={3.2} fill="rgba(120,190,235,0.9)" />
				</g>
			);
		case 'filter':
			return (
				<g>
					<Flask cx={0} baseY={0} w={70} h={56} level={0.35} liquid={LIQ} />
					{/* funnel with folded ashless paper and white solid */}
					<path d="M -40 -96 L 40 -96 L 7 -58 L 7 -40 L -7 -40 L -7 -58 Z" fill="rgba(255,255,255,0.55)" stroke="rgba(70,90,110,0.6)" strokeWidth={2.5} strokeLinejoin="round" />
					<path d="M -32 -93 L 32 -93 L 4 -62 L -4 -62 Z" fill="#f7f4ea" stroke="#d8d2c2" strokeWidth={1.2} />
					<path d="M -14 -72 Q 0 -80 14 -72 L 5 -63 L -5 -63 Z" fill={WHITE_PPT} stroke="#c9c6bd" strokeWidth={1} />
					<circle cx={0} cy={-36 + ((frame * 0.9) % 18)} r={2.6} fill="rgba(120,190,235,0.9)" />
				</g>
			);
		case 'dry': {
			const glow = 0.55 + 0.25 * Math.sin(frame / 9);
			return (
				<g>
					<rect x={-42} y={-78} width={84} height={78} rx={9} fill="#e6e3dc" stroke="#9c978d" strokeWidth={2.5} />
					<rect x={-32} y={-66} width={64} height={46} rx={5} fill="#3b2d24" />
					<rect x={-32} y={-66} width={64} height={46} rx={5} fill="#f08a3a" opacity={glow * 0.55} />
					{/* crucible inside */}
					<path d="M -13 -34 L 13 -34 L 9 -24 L -9 -24 Z" fill="#f4f1ea" stroke="#b7b1a4" strokeWidth={1.2} />
					{[-16, 0, 16].map((dx, i) => (
						<path key={i} d={`M ${dx} -40 q 4 -6 0 -12 q -4 -6 0 -12`} fill="none" stroke="#ffd9a8" strokeWidth={2} opacity={0.4 + 0.4 * Math.sin(frame / 7 + i)} />
					))}
					<circle cx={30} cy={-10} r={3.5} fill="#e0433a" />
				</g>
			);
		}
		case 'weigh':
			return (
				<g>
					<path d="M -44 0 L -38 -30 L 38 -30 L 44 0 Z" fill="#e8e5de" stroke="#9c978d" strokeWidth={2.5} strokeLinejoin="round" />
					<rect x={-26} y={-24} width={52} height={17} rx={3} fill="#22313a" />
					<text x={0} y={-11} textAnchor="middle" fill="#7fe3b8" fontSize={13} fontWeight={800} fontFamily="monospace">g</text>
					<ellipse cx={0} cy={-34} rx={34} ry={6} fill="#cfcac0" stroke="#9c978d" strokeWidth={2} />
					<path d="M -14 -38 L 14 -38 L 10 -50 L -10 -50 Z" fill="#f4f1ea" stroke="#b7b1a4" strokeWidth={1.2} />
					<ellipse cx={0} cy={-49} rx={8} ry={2.5} fill={WHITE_PPT} />
				</g>
			);
		case 'discovery':
			return (
				<g>
					<Flask cx={-8} baseY={0} w={62} h={76} level={0.45} liquid="rgba(90,170,140,0.45)" />
					{/* magnifying glass */}
					<circle cx={24} cy={-60} r={16} fill="rgba(210,235,250,0.55)" stroke="#6f6a61" strokeWidth={4} />
					<line x1={35} y1={-48} x2={48} y2={-34} stroke="#6f6a61" strokeWidth={6} strokeLinecap="round" />
				</g>
			);
		case 'preclinical':
			return (
				<g>
					<ellipse cx={-14} cy={-6} rx={32} ry={9} fill="rgba(255,255,255,0.7)" stroke="rgba(70,90,110,0.55)" strokeWidth={2} />
					<ellipse cx={-14} cy={-9} rx={27} ry={6} fill="#f1e2a8" />
					{[[-24, -9], [-10, -11], [-4, -8], [-18, -7]].map(([x, y], i) => (
						<circle key={i} cx={x} cy={y} r={2.6} fill="#c9933a" />
					))}
					<rect x={16} y={-74} width={16} height={70} rx={8} fill="rgba(255,255,255,0.55)" stroke="rgba(70,90,110,0.55)" strokeWidth={2} />
					<rect x={18.5} y={-40} width={11} height={33} rx={5} fill="rgba(90,170,140,0.5)" />
				</g>
			);
		case 'people': {
			const n = Math.max(1, Math.min(9, count));
			const cols = n <= 2 ? n : n <= 4 ? 2 : 3;
			const rows = Math.ceil(n / cols);
			return (
				<g>
					{Array.from({length: n}, (_, i) => {
						const r = Math.floor(i / cols), c = i % cols;
						const inRow = Math.min(cols, n - r * cols);
						const x = (c - (inRow - 1) / 2) * 24 + (r % 2) * 4;
						const y = -(rows - 1 - r) * 16;
						const s = 0.78 + r * 0.08;
						return <Person key={i} x={x} y={y} s={s} color={i % 2 ? accent : '#5b87c9'} />;
					})}
				</g>
			);
		}
		case 'approved':
			return (
				<g>
					<rect x={-30} y={-84} width={60} height={78} rx={5} fill="#ffffff" stroke="#b9b4aa" strokeWidth={2} />
					{[0, 1, 2, 3].map((i) => (
						<line key={i} x1={-20} x2={i === 3 ? 4 : 20} y1={-70 + i * 12} y2={-70 + i * 12} stroke="#cfcac0" strokeWidth={3} strokeLinecap="round" />
					))}
					<circle cx={14} cy={-20} r={17} fill="none" stroke={accent} strokeWidth={3.5} />
					<path d="M 6 -20 L 12 -13 L 23 -27" fill="none" stroke={accent} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
				</g>
			);
		default:
			return <circle r={20} fill={TOK.inkMute} />;
	}
};
