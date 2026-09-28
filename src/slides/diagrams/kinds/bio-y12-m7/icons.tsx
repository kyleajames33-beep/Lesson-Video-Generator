// Glossy diorama icons for the bio-y12-m7 kinds. Every icon is centred on
// (0, 0), about 80 units across at scale 1, sits on a soft contact shadow and
// is drawn from GlossDefs fills (`${id}-ball-<PAL key>`), so any kind that
// renders <GlossDefs id={ID} colors={GLOSS} /> can place any icon.
//
// These are stylised teaching pictures, not to scale; the feature each one
// shows (spikes, pili, capsule, RNA ring, misfolded protein, …) is named in the
// kind that uses it.

import type {ReactNode} from 'react';
import {PAL, shade} from './shared';

export type IconName =
	| 'virus' | 'bacterium' | 'fungus' | 'protozoan' | 'worm' | 'tick' | 'prion' | 'viroid'
	| 'mosquito' | 'person' | 'sickPerson' | 'cell' | 'plant' | 'drop' | 'air' | 'dish'
	| 'syringe' | 'liver' | 'rbc' | 'pill' | 'fomite' | 'net' | 'spray' | 'fan' | 'mask' | 'sheep' | 'fly' | 'globe' | 'none';

export type IconOpts = {
	/** bacterium: draw pili / fimbriae. */
	pili?: boolean;
	/** bacterium: draw the slimy capsule halo. */
	capsule?: boolean;
	/** worm: hooks at the head end. */
	hooks?: boolean;
	/** dish: number of colonies drawn (deterministic layout). */
	colonies?: number;
	/** dish: confluent lawn. */
	lawn?: boolean;
	/** globe: where cases are. */
	globe?: 'some' | 'regionZero' | 'none';
	/** fly: sterile (radiation badge). */
	sterile?: boolean;
	/** overall tint override (PAL key). */
	tone?: keyof typeof PAL;
};

const g = (id: string, name: keyof typeof PAL) => `url(#${id}-ball-${name})`;
const edge = (name: keyof typeof PAL, a = -0.35) => shade(PAL[name], a);

const Shadow = ({rx = 34, y = 36}: {rx?: number; y?: number}) => <ellipse cx={0} cy={y} rx={rx} ry={rx * 0.22} fill="rgba(40,36,30,0.22)" />;

/** Deterministic pseudo-random in [0,1) from an integer. */
export const hash01 = (n: number) => {
	const x = Math.sin(n * 12.9898 + 78.233) * 43758.5453;
	return x - Math.floor(x);
};

const draw = (id: string, name: IconName, frame: number, o: IconOpts): ReactNode => {
	switch (name) {
		case 'virus': {
			const spikes = Array.from({length: 12}, (_, k) => (k / 12) * Math.PI * 2 + frame / 240);
			return (
				<g>
					<Shadow rx={28} y={34} />
					{spikes.map((a, k) => (
						<g key={k}>
							<line x1={Math.cos(a) * 20} y1={Math.sin(a) * 20} x2={Math.cos(a) * 31} y2={Math.sin(a) * 31} stroke={edge('virus', -0.2)} strokeWidth={3} />
							<circle cx={Math.cos(a) * 32} cy={Math.sin(a) * 32} r={4.2} fill={g(id, 'virus')} stroke={edge('virus')} strokeWidth={0.8} />
						</g>
					))}
					<circle r={23} fill={g(id, 'virus')} stroke={edge('virus')} strokeWidth={1} />
				</g>
			);
		}
		case 'bacterium':
			return (
				<g>
					<Shadow rx={40} y={30} />
					{o.capsule && <rect x={-50} y={-26} width={100} height={52} rx={26} fill={PAL.bacterium} opacity={0.18} stroke={PAL.bacterium} strokeOpacity={0.5} strokeWidth={2} strokeDasharray="5 4" />}
					{o.pili &&
						Array.from({length: 14}, (_, k) => {
							const a = (k / 14) * Math.PI * 2;
							const x = Math.cos(a) * 36;
							const y = Math.sin(a) * 16;
							const wig = Math.sin(frame / 14 + k) * 2;
							return <path key={k} d={`M ${x} ${y} q ${Math.cos(a) * 6 + wig} ${Math.sin(a) * 6} ${Math.cos(a) * 12} ${Math.sin(a) * 12}`} stroke={edge('bacterium', -0.2)} strokeWidth={1.8} fill="none" strokeLinecap="round" />;
						})}
					<rect x={-40} y={-17} width={80} height={34} rx={17} fill={g(id, 'bacterium')} stroke={edge('bacterium')} strokeWidth={1} />
					<path d="M -22 -2 q 10 -8 20 0 t 20 0" stroke={edge('bacterium', -0.2)} strokeWidth={2} fill="none" opacity={0.6} />
				</g>
			);
		case 'fungus':
			return (
				<g>
					<Shadow rx={36} y={34} />
					<path d="M -34 30 C -20 18 -10 22 0 12 M 0 30 L 0 -10 M 0 12 C 10 22 22 18 34 30 M -16 22 L -22 -2 M 16 22 L 24 0" stroke={edge('fungus', -0.1)} strokeWidth={3.5} fill="none" strokeLinecap="round" />
					{[[0, -18, 11], [-22, -8, 8], [24, -6, 8]].map(([x, y, r], k) => (
						<circle key={k} cx={x} cy={y} r={r} fill={g(id, 'fungus')} stroke={edge('fungus')} strokeWidth={1} />
					))}
				</g>
			);
		case 'protozoan':
			return (
				<g>
					<Shadow rx={34} y={32} />
					<path d={`M -30 0 C -34 -22 -8 -30 6 -24 C 22 -30 36 -14 30 2 C 38 14 22 30 4 24 C -12 32 -32 22 -30 0 Z`} fill={g(id, 'protozoan')} stroke={edge('protozoan')} strokeWidth={1} transform={`rotate(${Math.sin(frame / 40) * 4})`} />
					<circle cx={4} cy={0} r={9} fill={shade(PAL.protozoan, -0.2)} opacity={0.8} />
				</g>
			);
		case 'worm': {
			const pts = Array.from({length: 9}, (_, k) => ({x: -36 + k * 9, y: Math.sin(k * 0.9 + frame / 18) * 7}));
			const d = pts.map((p, k) => `${k ? 'L' : 'M'} ${p.x} ${p.y}`).join(' ');
			return (
				<g>
					<Shadow rx={38} y={30} />
					<path d={d} stroke={edge('worm', -0.15)} strokeWidth={15} strokeLinecap="round" strokeLinejoin="round" fill="none" />
					<path d={d} stroke={PAL.worm} strokeWidth={11} strokeLinecap="round" strokeLinejoin="round" fill="none" />
					<path d={d} stroke="#ffffff" strokeOpacity={0.45} strokeWidth={3} strokeLinecap="round" fill="none" transform="translate(-1,-3)" />
					{o.hooks && (
						<g transform={`translate(${pts[8].x + 6}, ${pts[8].y})`}>
							{[-1, 1].map((s) => <path key={s} d={`M 0 ${s * 3} q 6 ${s * 2} 5 ${s * 8}`} stroke={edge('worm', -0.45)} strokeWidth={2.2} fill="none" />)}
						</g>
					)}
				</g>
			);
		}
		case 'tick':
			return (
				<g>
					<Shadow rx={28} y={30} />
					{[-1, 1].map((s) => [-12, -4, 4, 12].map((y, k) => <path key={`${s}${k}`} d={`M ${s * 10} ${y} q ${s * 14} ${-6} ${s * 22} ${y * 0.6 + 8}`} stroke="#5a3a2a" strokeWidth={2.5} fill="none" strokeLinecap="round" />))}
					<ellipse cx={0} cy={2} rx={16} ry={20} fill={g(id, 'dead')} stroke="#5a3a2a" strokeWidth={1} />
					<circle cx={0} cy={-20} r={6} fill="#5a3a2a" />
				</g>
			);
		case 'prion':
			// A misfolded protein: a tangled ribbon (flat β-sheet zig-zags).
			return (
				<g>
					<Shadow rx={30} y={32} />
					<path d="M -30 -8 L -18 -22 L -8 -6 L 4 -22 L 14 -6 L 26 -20 C 36 -4 20 6 8 4 L -4 18 L -16 4 L -26 18 C -34 12 -34 4 -30 -8 Z" fill={g(id, 'prion')} stroke={edge('prion')} strokeWidth={1.2} strokeLinejoin="round" transform={`rotate(${Math.sin(frame / 50) * 3})`} />
				</g>
			);
		case 'viroid':
			// A tiny closed ring of RNA, no protein coat.
			return (
				<g transform={`rotate(${frame / 3})`}>
					<Shadow rx={26} y={32} />
					<circle r={22} fill="none" stroke={edge('rna', -0.15)} strokeWidth={9} />
					<circle r={22} fill="none" stroke={PAL.rna} strokeWidth={6} />
					{Array.from({length: 18}, (_, k) => {
						const a = (k / 18) * Math.PI * 2;
						return <line key={k} x1={Math.cos(a) * 17} y1={Math.sin(a) * 17} x2={Math.cos(a) * 12} y2={Math.sin(a) * 12} stroke={PAL.rna} strokeWidth={2} />;
					})}
				</g>
			);
		case 'mosquito': {
			const flap = Math.sin(frame / 1.6) * 0.35 + 0.65;
			return (
				<g>
					<Shadow rx={30} y={34} />
					<ellipse cx={-6} cy={-16} rx={20} ry={7 * flap} fill="#dfe8ef" opacity={0.75} stroke="#9aa6b0" transform="rotate(-25 -6 -16)" />
					<ellipse cx={8} cy={-16} rx={20} ry={7 * flap} fill="#dfe8ef" opacity={0.75} stroke="#9aa6b0" transform="rotate(20 8 -16)" />
					{[-10, -2, 6].map((x, k) => (
						<g key={k}>
							<path d={`M ${x} 2 L ${x - 10} 16 L ${x - 14} 30`} stroke={PAL.mosquito} strokeWidth={1.8} fill="none" />
							<path d={`M ${x + 2} 2 L ${x + 12} 16 L ${x + 16} 30`} stroke={PAL.mosquito} strokeWidth={1.8} fill="none" />
						</g>
					))}
					<ellipse cx={-14} cy={0} rx={18} ry={5} fill={g(id, 'mosquito')} transform="rotate(-8 -14 0)" />
					<circle cx={8} cy={-2} r={6} fill={g(id, 'mosquito')} />
					<circle cx={15} cy={-4} r={4.2} fill={g(id, 'mosquito')} />
					<line x1={18} y1={-3} x2={34} y2={4} stroke={PAL.mosquito} strokeWidth={1.8} />
				</g>
			);
		}
		case 'person':
		case 'sickPerson': {
			const tone = o.tone ?? (name === 'sickPerson' ? 'sick' : 'person');
			return (
				<g>
					<Shadow rx={24} y={36} />
					<path d="M -20 36 C -22 8 -14 -2 0 -2 C 14 -2 22 8 20 36 Z" fill={g(id, tone)} stroke={edge(tone)} strokeWidth={1} />
					<circle cx={0} cy={-18} r={14} fill={g(id, tone)} stroke={edge(tone)} strokeWidth={1} />
				</g>
			);
		}
		case 'cell':
			return (
				<g>
					<Shadow rx={34} y={34} />
					<circle r={32} fill={g(id, o.tone ?? 'cell')} stroke={edge(o.tone ?? 'cell')} strokeWidth={1.2} />
					<circle cx={4} cy={2} r={11} fill={g(id, 'nucleus')} stroke={edge('nucleus')} strokeWidth={1} />
				</g>
			);
		case 'plant':
			return (
				<g>
					<Shadow rx={30} y={36} />
					<path d="M 0 36 L 0 -8" stroke={shade(PAL.plant, -0.2)} strokeWidth={4} />
					{[[-1, 16], [1, 4], [-1, -8], [1, -20]].map(([s, y], k) => (
						<path key={k} d={`M 0 ${y} q ${s * 12} -14 ${s * 28} -8 q ${-s * 10} 12 ${-s * 28} 8 Z`} fill={g(id, o.tone ?? 'plant')} stroke={edge(o.tone ?? 'plant')} strokeWidth={1} />
					))}
				</g>
			);
		case 'drop':
			return (
				<g>
					<Shadow rx={22} y={34} />
					<path d="M 0 -30 C 12 -12 22 0 22 12 C 22 26 12 32 0 32 C -12 32 -22 26 -22 12 C -22 0 -12 -12 0 -30 Z" fill={g(id, 'water')} stroke={edge('water')} strokeWidth={1} />
				</g>
			);
		case 'air':
			return (
				<g>
					{[-16, 0, 16].map((y, k) => (
						<path key={k} d={`M -32 ${y} q 16 -10 32 0 t 26 -2 q 8 -10 0 -14`} stroke={PAL.water} strokeWidth={3.5} fill="none" strokeLinecap="round" opacity={0.8} transform={`translate(${Math.sin(frame / 20 + k) * 3},0)`} />
					))}
					{[[-20, 26], [4, 30], [22, 24]].map(([x, y], k) => <circle key={k} cx={x} cy={y} r={3} fill={g(id, 'water')} />)}
				</g>
			);
		case 'fomite':
			// A door handle: a contaminated object.
			return (
				<g>
					<Shadow rx={30} y={34} />
					<rect x={-8} y={-34} width={16} height={64} rx={4} fill="#c8ccd2" stroke="#8a9098" />
					<rect x={-4} y={-8} width={38} height={12} rx={6} fill="#dfe3e8" stroke="#8a9098" />
					{[[22, -12], [10, 10], [-2, -22]].map(([x, y], k) => <circle key={k} cx={x} cy={y} r={3.5} fill={g(id, 'bacterium')} />)}
				</g>
			);
		case 'dish': {
			const n = o.colonies ?? 0;
			return (
				<g>
					<Shadow rx={42} y={20} />
					<ellipse cx={0} cy={4} rx={42} ry={16} fill="#cfd8de" />
					<ellipse cx={0} cy={0} rx={40} ry={15} fill={PAL.agar} stroke="#b9c3ca" strokeWidth={2} />
					{o.lawn && <ellipse cx={0} cy={0} rx={35} ry={12.5} fill="#f6f1e2" opacity={0.95} />}
					{!o.lawn &&
						Array.from({length: n}, (_, k) => {
							const r = Math.sqrt(hash01(k * 3 + 1)) * 0.9;
							const a = hash01(k * 7 + 2) * Math.PI * 2;
							return <circle key={k} cx={Math.cos(a) * r * 35} cy={Math.sin(a) * r * 12.5} r={n > 150 ? 1.1 : 1.8} fill="#fbf8ee" stroke="#c8b98a" strokeWidth={0.4} />;
						})}
					<ellipse cx={0} cy={-2} rx={40} ry={15} fill="none" stroke="#ffffff" strokeOpacity={0.6} strokeWidth={1.5} />
				</g>
			);
		}
		case 'syringe':
			return (
				<g transform="rotate(-30)">
					<Shadow rx={30} y={30} />
					<rect x={-30} y={-7} width={46} height={14} rx={3} fill={PAL.glass} stroke="#8aa0ad" />
					<rect x={-26} y={-5} width={24} height={10} fill={PAL.bacterium} opacity={0.5} />
					<line x1={16} y1={0} x2={36} y2={0} stroke="#8a9098" strokeWidth={2} />
					<rect x={-40} y={-3} width={10} height={6} fill="#8aa0ad" />
					<rect x={-44} y={-9} width={4} height={18} fill="#8aa0ad" />
				</g>
			);
		case 'liver':
			return (
				<g>
					<Shadow rx={36} y={30} />
					<path d="M -36 -6 C -34 -24 -2 -26 18 -20 C 34 -16 40 -4 30 6 C 18 18 -6 24 -22 20 C -34 16 -38 6 -36 -6 Z" fill={g(id, 'dead')} stroke={edge('dead')} strokeWidth={1} />
					<path d="M 6 -20 C 2 -6 4 6 10 16" stroke={edge('dead', -0.2)} strokeWidth={1.5} fill="none" />
				</g>
			);
		case 'rbc':
			return (
				<g>
					<Shadow rx={30} y={24} />
					{[[-14, 4], [16, -4]].map(([x, y], k) => (
						<g key={k}>
							<ellipse cx={x} cy={y} rx={20} ry={16} fill={g(id, 'blood')} stroke={edge('blood')} strokeWidth={1} />
							<ellipse cx={x} cy={y} rx={9} ry={7} fill={shade(PAL.blood, -0.12)} />
						</g>
					))}
				</g>
			);
		case 'pill':
			return (
				<g transform="rotate(-25)">
					<Shadow rx={26} y={26} />
					<rect x={-28} y={-11} width={56} height={22} rx={11} fill="#ffffff" stroke="#b0b0b0" />
					<path d="M 0 -11 L 17 -11 A 11 11 0 0 1 17 11 L 0 11 Z" fill={g(id, 'antibody')} />
				</g>
			);
		case 'net':
			return (
				<g>
					<Shadow rx={34} y={34} />
					<path d="M -32 30 L -24 -26 Q 0 -36 24 -26 L 32 30 Z" fill="#ffffff" opacity={0.55} stroke="#9aa6b0" />
					{Array.from({length: 6}, (_, k) => <line key={`v${k}`} x1={-24 + k * 10} y1={-28} x2={-32 + k * 13} y2={30} stroke="#9aa6b0" strokeWidth={0.8} />)}
					{Array.from({length: 6}, (_, k) => <line key={`h${k}`} x1={-26 - k} y1={-18 + k * 9} x2={26 + k} y2={-18 + k * 9} stroke="#9aa6b0" strokeWidth={0.8} />)}
				</g>
			);
		case 'spray':
			return (
				<g>
					<Shadow rx={22} y={34} />
					<rect x={-12} y={-14} width={24} height={48} rx={6} fill={g(id, 'grey')} stroke="#7a7a7a" />
					<rect x={-6} y={-24} width={12} height={10} fill="#6a6a6a" />
					{[0, 1, 2].map((k) => <circle key={k} cx={14 + k * 8} cy={-22 - k * 3} r={2.2} fill={PAL.grey} opacity={0.7} />)}
				</g>
			);
		case 'fan':
			return (
				<g>
					<Shadow rx={26} y={34} />
					<line x1={0} y1={0} x2={0} y2={34} stroke="#7a7a7a" strokeWidth={4} />
					<circle r={26} fill="#eef2f5" stroke="#9aa6b0" strokeWidth={2} />
					<g transform={`rotate(${frame * 6})`}>
						{[0, 120, 240].map((a) => <ellipse key={a} cx={0} cy={-12} rx={6} ry={12} fill={PAL.water} opacity={0.8} transform={`rotate(${a})`} />)}
					</g>
					<circle r={4} fill="#7a7a7a" />
				</g>
			);
		case 'mask':
			return (
				<g>
					<Shadow rx={30} y={26} />
					<path d="M -30 -10 Q 0 -22 30 -10 L 26 12 Q 0 26 -26 12 Z" fill="#dfeefa" stroke="#8aa8c4" strokeWidth={1.5} />
					{[-4, 4, 12].map((y) => <path key={y} d={`M -24 ${y - 4} Q 0 ${y + 4 - 8} 24 ${y - 4}`} stroke="#8aa8c4" fill="none" strokeWidth={1} />)}
					<path d="M -30 -10 L -40 -4 M 30 -10 L 40 -4" stroke="#8aa8c4" strokeWidth={1.5} />
				</g>
			);
		case 'sheep':
			return (
				<g>
					<Shadow rx={32} y={32} />
					{[-14, 14].map((x) => <line key={x} x1={x} y1={10} x2={x} y2={30} stroke="#4a4a4a" strokeWidth={4} />)}
					{[[-16, -4], [0, -10], [16, -4], [-8, 8], [10, 8]].map(([x, y], k) => <circle key={k} cx={x} cy={y} r={13} fill="#f4f1ea" stroke="#c9c4b8" />)}
					<ellipse cx={30} cy={-8} rx={9} ry={11} fill="#4a4a4a" />
				</g>
			);
		case 'fly': {
			const flap = Math.sin(frame / 1.8) * 0.3 + 0.7;
			return (
				<g>
					<Shadow rx={28} y={32} />
					<ellipse cx={-10} cy={-16} rx={16} ry={8 * flap} fill="#dfe8ef" opacity={0.8} stroke="#9aa6b0" transform="rotate(-30 -10 -16)" />
					<ellipse cx={10} cy={-16} rx={16} ry={8 * flap} fill="#dfe8ef" opacity={0.8} stroke="#9aa6b0" transform="rotate(30 10 -16)" />
					{[-1, 1].map((s) => [-6, 2, 10].map((y, k) => <path key={`${s}${k}`} d={`M ${s * 8} ${y} l ${s * 12} 8 l ${s * 4} 12`} stroke={PAL.mosquito} strokeWidth={2} fill="none" />))}
					<ellipse cx={0} cy={6} rx={11} ry={16} fill={g(id, 'mosquito')} />
					<circle cx={0} cy={-12} r={9} fill={g(id, 'mosquito')} />
					<circle cx={-5} cy={-14} r={3.5} fill="#b3261e" />
					<circle cx={5} cy={-14} r={3.5} fill="#b3261e" />
					{o.sterile && (
						<g transform="translate(20,18)">
							<circle r={10} fill="#ffe08a" stroke="#7a5418" strokeWidth={1.5} />
							{[0, 120, 240].map((a) => <path key={a} d="M 0 0 L 7 -3 A 7.6 7.6 0 0 1 7 3 Z" fill="#1a1a1a" transform={`rotate(${a - 90})`} />)}
							<circle r={1.8} fill="#1a1a1a" />
						</g>
					)}
				</g>
			);
		}
		case 'globe': {
			const pts = [[-20, -12], [6, -20], [18, -4], [-8, 4], [10, 14], [-22, 10], [24, 8], [-2, -8], [-14, 20], [4, 24]];
			const zeroRegion = (x: number, y: number) => x < 2 && y < 6;
			const shown = o.globe === 'none' ? [] : pts.filter(([x, y], k) => (o.globe === 'regionZero' ? !zeroRegion(x, y) : k % 2 === 0));
			return (
				<g>
					<Shadow rx={32} y={36} />
					<circle r={32} fill={g(id, 'water')} stroke={edge('water')} strokeWidth={1} />
					<path d="M -24 -16 C -14 -26 -2 -22 0 -12 C 2 -2 -12 2 -20 -2 C -28 -6 -28 -12 -24 -16 Z M 6 4 C 14 -2 26 2 26 12 C 24 22 12 26 6 18 C 2 12 2 8 6 4 Z M 8 -24 C 14 -26 20 -20 16 -14 C 12 -10 6 -16 8 -24 Z" fill={g(id, 'plant')} opacity={0.9} />
					{o.globe === 'regionZero' && <path d="M -26 -18 C -14 -30 0 -24 2 -12 C 4 0 -12 6 -22 0 C -30 -6 -30 -12 -26 -18 Z" fill="none" stroke="#ffffff" strokeWidth={2.5} strokeDasharray="4 3" />}
					{shown.map(([x, y], k) => <circle key={k} cx={x} cy={y} r={3.6} fill={PAL.stop} stroke="#ffffff" strokeWidth={1} opacity={0.75 + 0.25 * Math.sin(frame / 12 + k)} />)}
				</g>
			);
		}
		default:
			return null;
	}
};

/** Place an icon at (x, y), scaled by s. */
export const Icon = ({id, name, x, y, s = 1, frame, opacity = 1, opts = {}}: {id: string; name: IconName; x: number; y: number; s?: number; frame: number; opacity?: number; opts?: IconOpts}) => (
	<g transform={`translate(${x},${y}) scale(${s})`} opacity={opacity}>
		{draw(id, name, frame, opts)}
	</g>
);
