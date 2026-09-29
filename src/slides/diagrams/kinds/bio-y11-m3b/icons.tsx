// Glossy diorama icons for the bio-y11-m3b kinds (evolution, fossils,
// ecology, sampling). Every icon is centred on (0, 0), about 80 units across
// at scale 1, sits on a soft contact shadow and takes its fills from
// GlossDefs (`${id}-ball-<ECO key>`). Names this set doesn't draw fall back to
// the merged bio-y12-m7 icon set (bacterium, mosquito, person, plant, globe,
// drop, …), so a kind must render <EcoGloss id={ID} /> to give both sets
// their fills.
//
// These are stylised teaching pictures, not to scale; any feature that
// matters (a mark on a beetle, a toxin in a plant) is named by the kind that
// uses the icon.

import type {ReactNode} from 'react';
import {GLOSS as M7_GLOSS} from '../bio-y12-m7/shared';
import {Icon as M7Icon, type IconName as M7IconName} from '../bio-y12-m7/icons';
import {ECO, ECO_GLOSS, GlossDefs, shade, type EcoKey} from './shared';

export type EcoIconName =
	| 'fish' | 'moth' | 'eel' | 'shrub' | 'seeds' | 'tree' | 'fern' | 'grass' | 'flower' | 'moss'
	| 'shell' | 'trilobite' | 'leafFossil' | 'fishFossil' | 'feather' | 'tooth' | 'bird'
	| 'beetle' | 'bean' | 'snail' | 'barnacle' | 'limpet' | 'mussel' | 'algae' | 'anemone' | 'paramecium' | 'coral'
	| 'thermometer' | 'lightMeter' | 'phProbe' | 'quadrat' | 'tape' | 'moistureMeter'
	| 'dna' | 'limb' | 'molecule' | 'rain' | 'sun' | 'calendar' | 'pond' | 'weir' | 'map' | 'tally' | 'variety' | 'rock' | 'basket' | 'loaf' | 'kangaroo' | 'dingo';

export type AnyIconName = EcoIconName | M7IconName;

const ECO_NAMES = new Set<string>([
	'fish', 'moth', 'eel', 'shrub', 'seeds', 'tree', 'fern', 'grass', 'flower', 'moss',
	'shell', 'trilobite', 'leafFossil', 'fishFossil', 'feather', 'tooth', 'bird',
	'beetle', 'bean', 'snail', 'barnacle', 'limpet', 'mussel', 'algae', 'anemone', 'paramecium', 'coral',
	'thermometer', 'lightMeter', 'phProbe', 'quadrat', 'tape', 'moistureMeter',
	'dna', 'limb', 'molecule', 'rain', 'sun', 'calendar', 'pond', 'weir', 'map', 'tally', 'variety', 'rock', 'basket', 'loaf', 'kangaroo', 'dingo',
]);

export type EcoIconOpts = {
	/** overall tint override (ECO key). */
	tone?: EcoKey;
	/** beetle / bean / fish: carries a paint mark (amber dot). */
	marked?: boolean;
	/** greyed out (dead, absent, excluded). */
	dead?: boolean;
};

/** GlossDefs for both icon sets. */
export const EcoGloss = ({id}: {id: string}) => <GlossDefs id={id} colors={{...M7_GLOSS, ...ECO_GLOSS}} />;

const g = (id: string, name: EcoKey) => `url(#${id}-ball-${name})`;
const edge = (name: EcoKey, a = -0.35) => shade(ECO[name], a);
const Shadow = ({rx = 32, y = 36}: {rx?: number; y?: number}) => <ellipse cx={0} cy={y} rx={rx} ry={rx * 0.22} fill="rgba(40,36,30,0.22)" />;
const Mk = ({x, y, r = 6}: {x: number; y: number; r?: number}) => <circle cx={x} cy={y} r={r} fill={ECO.marked} stroke="#8a5a10" strokeWidth={1.2} />;

const draw = (id: string, name: EcoIconName, frame: number, o: EcoIconOpts): ReactNode => {
	const t = (k: EcoKey) => (o.dead ? 'grey' : o.tone ?? k);
	switch (name) {
		case 'fish': {
			const k = t('fish');
			const wag = Math.sin(frame / 7) * 4;
			return (
				<g>
					<Shadow rx={30} y={30} />
					<path d={`M 22 0 L 38 ${-14 + wag} L 38 ${14 + wag} Z`} fill={g(id, k)} stroke={edge(k)} />
					<ellipse cx={-4} cy={0} rx={30} ry={15} fill={g(id, k)} stroke={edge(k)} />
					<path d="M -6 -14 q 8 -10 18 -2" fill={g(id, k)} stroke={edge(k)} />
					<circle cx={-22} cy={-3} r={3.2} fill="#1a1a1a" />
					{o.marked && <Mk x={4} y={-6} />}
				</g>
			);
		}
		case 'moth': {
			const k = t('moth');
			const f = 0.85 + Math.sin(frame / 5) * 0.12;
			return (
				<g>
					<Shadow rx={30} y={32} />
					<path d={`M 0 -4 C -18 ${-30 * f} -40 ${-22 * f} -38 -2 C -36 10 -16 10 0 4 Z`} fill={g(id, k)} stroke={edge(k)} />
					<path d={`M 0 -4 C 18 ${-30 * f} 40 ${-22 * f} 38 -2 C 36 10 16 10 0 4 Z`} fill={g(id, k)} stroke={edge(k)} />
					<path d="M 0 2 C -12 10 -24 22 -16 26 C -8 28 -2 16 0 8 Z" fill={g(id, k)} stroke={edge(k)} opacity={0.9} />
					<path d="M 0 2 C 12 10 24 22 16 26 C 8 28 2 16 0 8 Z" fill={g(id, k)} stroke={edge(k)} opacity={0.9} />
					<ellipse cx={0} cy={4} rx={4.5} ry={16} fill={shade(ECO.moth, -0.25)} />
					<path d="M -2 -10 q -8 -12 -14 -14 M 2 -10 q 8 -12 14 -14" stroke={shade(ECO.moth, -0.35)} strokeWidth={1.6} fill="none" />
				</g>
			);
		}
		case 'eel': {
			const k = t('eel');
			const p = frame / 9;
			const pts = Array.from({length: 9}, (_, i) => `${-40 + i * 10},${Math.sin(p + i * 0.8) * 7}`).join(' L ');
			return (
				<g>
					<Shadow rx={36} y={26} />
					<path d={`M ${pts}`} fill="none" stroke={edge(k)} strokeWidth={13} strokeLinecap="round" />
					<path d={`M ${pts}`} fill="none" stroke={ECO[k]} strokeWidth={10} strokeLinecap="round" />
					<circle cx={-38} cy={Math.sin(p) * 7 - 2} r={2} fill="#1a1a1a" />
				</g>
			);
		}
		case 'shrub': {
			const k = t('leaf');
			return (
				<g>
					<Shadow rx={32} y={36} />
					<path d="M 0 36 L 0 6 M 0 18 L -14 2 M 0 14 L 14 -2" stroke={shade(ECO.wood, -0.1)} strokeWidth={4} fill="none" />
					{[[-18, -2, 14], [16, -8, 14], [0, -18, 16], [-4, 4, 12], [22, 8, 10], [-24, 14, 10]].map(([x, y, r], i) => (
						<circle key={i} cx={x} cy={y} r={r} fill={g(id, k)} stroke={edge(k)} />
					))}
				</g>
			);
		}
		case 'seeds': {
			const k = t('seed');
			return (
				<g>
					<Shadow rx={32} y={32} />
					{[[-18, 14], [0, 16], [18, 14], [-10, -2], [10, -2], [0, -16]].map(([x, y], i) => (
						<ellipse key={i} cx={x} cy={y} rx={11} ry={13} fill={g(id, k)} stroke={edge(k)} />
					))}
				</g>
			);
		}
		case 'tree': {
			const k = t('leaf');
			return (
				<g>
					<Shadow rx={30} y={38} />
					<rect x={-5} y={0} width={10} height={38} rx={3} fill={g(id, 'wood')} />
					<circle cx={0} cy={-14} r={24} fill={g(id, k)} stroke={edge(k)} />
					<circle cx={-18} cy={0} r={15} fill={g(id, k)} stroke={edge(k)} />
					<circle cx={18} cy={-2} r={15} fill={g(id, k)} stroke={edge(k)} />
				</g>
			);
		}
		case 'fern': {
			const k = t('fern');
			return (
				<g>
					<Shadow rx={32} y={34} />
					{[-40, -15, 15, 40].map((a, i) => (
						<g key={i} transform={`translate(0,34) rotate(${a})`}>
							<path d="M 0 0 Q 4 -30 0 -58" stroke={edge(k)} strokeWidth={2.5} fill="none" />
							{Array.from({length: 6}, (_, j) => (
								<g key={j}>
									<ellipse cx={-6} cy={-10 - j * 8} rx={7 - j * 0.6} ry={3} fill={g(id, k)} transform={`rotate(-25 -6 ${-10 - j * 8})`} />
									<ellipse cx={7} cy={-10 - j * 8} rx={7 - j * 0.6} ry={3} fill={g(id, k)} transform={`rotate(25 7 ${-10 - j * 8})`} />
								</g>
							))}
						</g>
					))}
				</g>
			);
		}
		case 'grass': {
			const k = t('grass');
			return (
				<g>
					<Shadow rx={30} y={34} />
					{[-22, -14, -6, 2, 10, 18, 24].map((x, i) => (
						<path key={i} d={`M ${x} 34 Q ${x + (i % 2 ? 6 : -6)} 0 ${x + (i % 2 ? 12 : -10)} ${-26 + (i % 3) * 8}`} stroke={edge(k, -0.15)} strokeWidth={4} fill="none" strokeLinecap="round" />
					))}
				</g>
			);
		}
		case 'moss': {
			const k = t('moss');
			return (
				<g>
					<Shadow rx={32} y={30} />
					{Array.from({length: 11}, (_, i) => (
						<circle key={i} cx={-28 + i * 5.6} cy={20 - Math.sin(i * 0.9) * 6 - (i % 3) * 3} r={9} fill={g(id, k)} stroke={edge(k)} strokeWidth={0.8} />
					))}
				</g>
			);
		}
		case 'flower': {
			const k = t('flower');
			return (
				<g>
					<Shadow rx={22} y={38} />
					<path d="M 0 38 L 0 -4" stroke={shade(ECO.leaf, -0.2)} strokeWidth={4} />
					<ellipse cx={10} cy={18} rx={12} ry={5} fill={g(id, 'leaf')} transform="rotate(-25 10 18)" />
					{Array.from({length: 6}, (_, i) => {
						const a = (i / 6) * Math.PI * 2;
						return <ellipse key={i} cx={Math.cos(a) * 13} cy={-18 + Math.sin(a) * 13} rx={10} ry={7} fill={g(id, k)} stroke={edge(k)} transform={`rotate(${(a * 180) / Math.PI} ${Math.cos(a) * 13} ${-18 + Math.sin(a) * 13})`} />;
					})}
					<circle cx={0} cy={-18} r={7} fill={g(id, 'sun')} />
				</g>
			);
		}
		case 'shell': {
			const k = t('shell');
			return (
				<g>
					<Shadow rx={30} y={28} />
					<path d="M 0 24 L -32 -6 A 34 30 0 0 1 32 -6 Z" fill={g(id, k)} stroke={edge(k)} strokeWidth={1.2} />
					{[-24, -12, 0, 12, 24].map((x, i) => <line key={i} x1={0} y1={24} x2={x} y2={-18 + Math.abs(x) * 0.4} stroke={edge(k, -0.2)} strokeWidth={1.4} />)}
				</g>
			);
		}
		case 'trilobite': {
			const k = t('fossil');
			return (
				<g>
					<Shadow rx={26} y={34} />
					<path d="M 0 -30 C 24 -30 28 -14 26 -6 L 20 30 C 10 36 -10 36 -20 30 L -26 -6 C -28 -14 -24 -30 0 -30 Z" fill={g(id, k)} stroke={edge(k)} />
					<line x1={-8} y1={-16} x2={-8} y2={30} stroke={edge(k, -0.15)} strokeWidth={1.4} />
					<line x1={8} y1={-16} x2={8} y2={30} stroke={edge(k, -0.15)} strokeWidth={1.4} />
					{Array.from({length: 7}, (_, i) => <line key={i} x1={-22} y1={-6 + i * 5.5} x2={22} y2={-6 + i * 5.5} stroke={edge(k, -0.15)} strokeWidth={1} />)}
					<path d="M -26 -8 C -14 -14 14 -14 26 -8" fill="none" stroke={edge(k, -0.2)} strokeWidth={1.4} />
				</g>
			);
		}
		case 'leafFossil': {
			const k = t('fossil');
			return (
				<g>
					<Shadow rx={30} y={28} />
					<path d="M -34 10 C -18 -26 20 -30 34 -10 C 18 22 -16 26 -34 10 Z" fill={g(id, k)} stroke={edge(k)} />
					<path d="M -34 10 C -10 0 12 -8 34 -10" stroke={edge(k, -0.2)} strokeWidth={1.5} fill="none" />
					{[-18, -6, 6, 18].map((x, i) => <path key={i} d={`M ${x} ${4 - x * 0.25} l 6 -12 M ${x} ${4 - x * 0.25} l 8 8`} stroke={edge(k, -0.15)} strokeWidth={1} />)}
				</g>
			);
		}
		case 'fishFossil': {
			const k = t('fossil');
			return (
				<g>
					<Shadow rx={32} y={26} />
					<ellipse cx={-4} cy={0} rx={30} ry={13} fill={g(id, k)} stroke={edge(k)} />
					<path d="M 22 0 L 38 -12 L 38 12 Z" fill={g(id, k)} stroke={edge(k)} />
					<line x1={-30} y1={0} x2={26} y2={0} stroke={edge(k, -0.2)} strokeWidth={1.6} />
					{Array.from({length: 8}, (_, i) => <line key={i} x1={-22 + i * 6} y1={-9} x2={-22 + i * 6} y2={9} stroke={edge(k, -0.2)} strokeWidth={1} />)}
					<circle cx={-24} cy={-3} r={2.5} fill={edge(k, -0.3)} />
				</g>
			);
		}
		case 'feather': {
			const k = t('bird');
			return (
				<g>
					<Shadow rx={24} y={36} />
					<path d="M 0 36 L 0 -34" stroke={edge(k, -0.2)} strokeWidth={2} />
					<path d="M 0 -34 C 18 -24 20 6 2 24 L 0 24 C -18 8 -18 -22 0 -34 Z" fill={g(id, k)} stroke={edge(k)} />
					{Array.from({length: 6}, (_, i) => <path key={i} d={`M 0 ${-24 + i * 8} l ${i % 2 ? 12 : -12} -6`} stroke={edge(k, -0.15)} strokeWidth={1} />)}
				</g>
			);
		}
		case 'tooth': {
			const k = t('bone');
			return (
				<g>
					<Shadow rx={20} y={34} />
					<path d="M -14 -26 C -10 -34 10 -34 14 -26 L 8 30 L 0 20 L -8 30 Z" fill={g(id, k)} stroke={edge(k)} />
				</g>
			);
		}
		case 'bird': {
			const k = t('bird');
			return (
				<g>
					<Shadow rx={26} y={36} />
					<ellipse cx={0} cy={6} rx={24} ry={17} fill={g(id, k)} stroke={edge(k)} />
					<circle cx={18} cy={-14} r={11} fill={g(id, k)} stroke={edge(k)} />
					<path d="M 28 -14 L 38 -10 L 28 -8 Z" fill={ECO.sun} />
					<circle cx={21} cy={-16} r={2} fill="#1a1a1a" />
					<path d="M -6 0 C -18 -6 -26 4 -34 -2 C -26 14 -10 12 -2 8 Z" fill={g(id, k)} stroke={edge(k)} />
					<path d="M -4 22 L -6 34 M 6 22 L 6 34" stroke={shade(ECO.sun, -0.3)} strokeWidth={2} />
				</g>
			);
		}
		case 'beetle': {
			const k = t('beetle');
			return (
				<g>
					<Shadow rx={24} y={30} />
					{[-10, 0, 10].map((y, i) => <path key={i} d={`M -14 ${y} l -12 ${4 + i * 2} M 14 ${y} l 12 ${4 + i * 2}`} stroke={edge(k, -0.2)} strokeWidth={2} />)}
					<ellipse cx={0} cy={4} rx={16} ry={22} fill={g(id, k)} stroke={edge(k)} />
					<line x1={0} y1={-10} x2={0} y2={26} stroke={edge(k, -0.2)} strokeWidth={1.4} />
					<circle cx={0} cy={-20} r={8} fill={g(id, k)} stroke={edge(k)} />
					{o.marked && <Mk x={-6} y={6} r={5.5} />}
				</g>
			);
		}
		case 'bean': {
			const k = o.marked ? 'marked' : t('bean');
			return (
				<g>
					<Shadow rx={20} y={16} />
					<path d="M -18 -2 C -18 -16 18 -16 18 -2 C 18 12 6 8 0 6 C -6 8 -18 12 -18 -2 Z" fill={g(id, k)} stroke={edge(k)} />
				</g>
			);
		}
		case 'snail': {
			const k = t('snail');
			return (
				<g>
					<Shadow rx={28} y={30} />
					<path d="M -30 28 C -30 20 30 20 34 28 Z" fill={g(id, 'limpet')} />
					<circle cx={2} cy={6} r={20} fill={g(id, k)} stroke={edge(k)} />
					<path d="M 2 6 m -12 0 a 12 12 0 1 1 12 12 a 6 6 0 1 1 -6 -6" fill="none" stroke={edge(k, -0.15)} strokeWidth={2} />
					<path d="M 30 26 L 34 8 M 26 26 L 28 10" stroke={shade(ECO.limpet, -0.3)} strokeWidth={2} />
				</g>
			);
		}
		case 'barnacle': {
			const k = t('barnacle');
			return (
				<g>
					<Shadow rx={24} y={28} />
					<path d="M -22 28 L -10 -10 L 10 -10 L 22 28 Z" fill={g(id, k)} stroke={edge(k)} />
					<line x1={-4} y1={-10} x2={-10} y2={28} stroke={edge(k, -0.15)} />
					<line x1={4} y1={-10} x2={10} y2={28} stroke={edge(k, -0.15)} />
					<path d="M -8 -10 L 0 -4 L 8 -10" stroke={edge(k, -0.25)} strokeWidth={2} fill="none" />
				</g>
			);
		}
		case 'limpet': {
			const k = t('limpet');
			return (
				<g>
					<Shadow rx={28} y={26} />
					<path d="M -30 24 C -20 -2 -6 -14 4 -14 C 14 -10 24 4 30 24 Z" fill={g(id, k)} stroke={edge(k)} />
					{[-16, -6, 6, 16].map((x, i) => <line key={i} x1={4} y1={-14} x2={x * 1.6} y2={24} stroke={edge(k, -0.12)} strokeWidth={1} />)}
				</g>
			);
		}
		case 'mussel': {
			const k = t('mussel');
			return (
				<g>
					<Shadow rx={26} y={28} />
					<path d="M -8 26 C -28 4 -22 -28 0 -30 C 18 -24 18 8 -8 26 Z" fill={g(id, k)} stroke={edge(k, -0.2)} />
					<path d="M 8 28 C 26 8 30 -22 12 -26" fill="none" stroke={edge(k, -0.2)} strokeWidth={2} />
				</g>
			);
		}
		case 'algae': {
			const k = t('algae');
			return (
				<g>
					<Shadow rx={26} y={34} />
					{[-14, 0, 14].map((x, i) => (
						<path key={i} d={`M ${x} 34 C ${x - 14} 10 ${x + 14} -6 ${x + (i - 1) * 6} -30`} stroke={ECO[k]} strokeWidth={9} fill="none" strokeLinecap="round" />
					))}
				</g>
			);
		}
		case 'anemone': {
			const k = t('anemone');
			return (
				<g>
					<Shadow rx={24} y={32} />
					<path d="M -16 32 L -12 0 L 12 0 L 16 32 Z" fill={g(id, k)} stroke={edge(k)} />
					{Array.from({length: 9}, (_, i) => {
						const a = -Math.PI + (i / 8) * Math.PI;
						const s = Math.sin(frame / 12 + i) * 3;
						return <path key={i} d={`M 0 0 q ${Math.cos(a) * 14} ${-12 + s} ${Math.cos(a) * 24} ${-20 + Math.sin(a) * 6}`} stroke={ECO[k]} strokeWidth={5} fill="none" strokeLinecap="round" />;
					})}
				</g>
			);
		}
		case 'coral': {
			const k = t('anemone');
			return (
				<g>
					<Shadow rx={28} y={34} />
					<path d="M 0 34 L 0 -4 M 0 8 L -18 -14 M 0 2 L 18 -20 M -18 -14 L -26 -30 M -18 -14 L -8 -30 M 18 -20 L 26 -32" stroke={ECO[k]} strokeWidth={8} strokeLinecap="round" fill="none" />
				</g>
			);
		}
		case 'paramecium': {
			const k = t('protist');
			return (
				<g>
					<Shadow rx={30} y={24} />
					{Array.from({length: 18}, (_, i) => {
						const a = (i / 18) * Math.PI * 2;
						const w = Math.sin(frame / 4 + i) * 2;
						return <line key={i} x1={Math.cos(a) * 34} y1={Math.sin(a) * 16} x2={Math.cos(a) * (40 + w)} y2={Math.sin(a) * (21 + w)} stroke={edge(k)} strokeWidth={1.2} />;
					})}
					<path d="M -34 0 C -34 -18 30 -20 34 -4 C 36 12 -6 8 -12 14 C -22 18 -34 12 -34 0 Z" fill={g(id, k)} stroke={edge(k)} />
					<ellipse cx={0} cy={-2} rx={8} ry={5} fill={shade(ECO.protist, -0.25)} />
				</g>
			);
		}
		case 'thermometer':
			return (
				<g>
					<Shadow rx={16} y={38} />
					<rect x={-7} y={-36} width={14} height={60} rx={7} fill="#f4f6f8" stroke="#8a96a0" strokeWidth={1.5} />
					<circle cx={0} cy={26} r={11} fill={g(id, 'red')} stroke={edge('red')} />
					<rect x={-3} y={-14 + Math.sin(frame / 30) * 2} width={6} height={40} rx={3} fill={ECO.red} />
					{[-28, -20, -12, -4, 4].map((y, i) => <line key={i} x1={7} y1={y} x2={13} y2={y} stroke="#8a96a0" strokeWidth={1.4} />)}
				</g>
			);
		case 'lightMeter':
			return (
				<g>
					<Shadow rx={26} y={36} />
					<rect x={-24} y={-18} width={48} height={50} rx={8} fill={g(id, 'metal')} stroke={edge('metal')} />
					<rect x={-17} y={-10} width={34} height={18} rx={3} fill="#1f2a2e" />
					<text x={0} y={5} textAnchor="middle" fill="#8ff0a8" fontSize={11} fontWeight={800}>lux</text>
					<circle cx={0} cy={-26} r={10} fill="#f7f3d8" stroke="#8a96a0" strokeWidth={1.4} />
					{Array.from({length: 6}, (_, i) => {
						const a = (i / 6) * Math.PI * 2 + frame / 60;
						return <line key={i} x1={Math.cos(a) * 13} y1={-26 + Math.sin(a) * 13} x2={Math.cos(a) * 18} y2={-26 + Math.sin(a) * 18} stroke={ECO.sun} strokeWidth={2} />;
					})}
				</g>
			);
		case 'phProbe':
			return (
				<g>
					<Shadow rx={18} y={38} />
					<rect x={-14} y={-38} width={28} height={30} rx={6} fill={g(id, 'metal')} stroke={edge('metal')} />
					<rect x={-9} y={-32} width={18} height={11} rx={2} fill="#1f2a2e" />
					<text x={0} y={-23} textAnchor="middle" fill="#8ff0a8" fontSize={9} fontWeight={800}>pH</text>
					<rect x={-4} y={-8} width={8} height={36} rx={3} fill="#e8eef2" stroke="#8a96a0" />
					<circle cx={0} cy={30} r={5} fill={g(id, 'water')} />
				</g>
			);
		case 'moistureMeter':
			return (
				<g>
					<Shadow rx={20} y={38} />
					<rect x={-16} y={-36} width={32} height={30} rx={6} fill={g(id, 'metal')} stroke={edge('metal')} />
					<path d="M -8 -26 a 8 8 0 0 1 16 0" fill="none" stroke="#1f2a2e" strokeWidth={2} />
					<line x1={0} y1={-26} x2={5 + Math.sin(frame / 40) * 2} y2={-31} stroke={ECO.red} strokeWidth={2} />
					<line x1={-6} y1={-6} x2={-6} y2={34} stroke="#8a96a0" strokeWidth={3} />
					<line x1={6} y1={-6} x2={6} y2={34} stroke="#8a96a0" strokeWidth={3} />
				</g>
			);
		case 'quadrat':
			return (
				<g>
					<Shadow rx={36} y={24} />
					<path d="M -30 20 L 30 20 L 38 -8 L -22 -8 Z" fill="rgba(141,187,69,0.25)" stroke="#e8e4da" strokeWidth={5} strokeLinejoin="round" />
					<path d="M -30 20 L 30 20 L 38 -8 L -22 -8 Z" fill="none" stroke="#8a7a60" strokeWidth={1.4} />
					{[0.25, 0.5, 0.75].map((f, i) => (
						<g key={i}>
							<line x1={-30 + 60 * f} y1={20} x2={-22 + 60 * f} y2={-8} stroke="#8a7a60" strokeWidth={0.8} />
							<line x1={-30 + 8 * f} y1={20 - 28 * f} x2={30 + 8 * f} y2={20 - 28 * f} stroke="#8a7a60" strokeWidth={0.8} />
						</g>
					))}
				</g>
			);
		case 'tape':
			return (
				<g>
					<Shadow rx={34} y={26} />
					<path d="M -36 22 L 36 -6" stroke="#f0d44a" strokeWidth={6} />
					{Array.from({length: 7}, (_, i) => <line key={i} x1={-32 + i * 11} y1={20.5 - i * 4.3} x2={-32 + i * 11} y2={14.5 - i * 4.3} stroke="#6a5a1a" strokeWidth={1.2} />)}
					<circle cx={-38} cy={22} r={9} fill={g(id, 'metal')} stroke={edge('metal')} />
				</g>
			);
		case 'dna': {
			const ph = frame / 30;
			return (
				<g>
					<Shadow rx={26} y={38} />
					{Array.from({length: 9}, (_, i) => {
						const y = -32 + i * 8;
						const x = Math.sin(ph + i * 0.7) * 16;
						return (
							<g key={i}>
								<line x1={-x} y1={y} x2={x} y2={y} stroke="#b8c4cc" strokeWidth={2} />
								<circle cx={x} cy={y} r={4} fill={g(id, 'dna1')} />
								<circle cx={-x} cy={y} r={4} fill={g(id, 'dna2')} />
							</g>
						);
					})}
				</g>
			);
		}
		case 'limb': {
			const k = t('bone');
			return (
				<g>
					<Shadow rx={26} y={36} />
					<rect x={-6} y={-38} width={12} height={30} rx={6} fill={g(id, k)} stroke={edge(k)} />
					<rect x={-12} y={-6} width={8} height={24} rx={4} fill={g(id, k)} stroke={edge(k)} transform="rotate(-8 -8 6)" />
					<rect x={4} y={-6} width={8} height={24} rx={4} fill={g(id, k)} stroke={edge(k)} transform="rotate(8 8 6)" />
					{[-16, -8, 0, 8, 16].map((x, i) => <rect key={i} x={x - 3} y={20} width={6} height={14} rx={3} fill={g(id, k)} stroke={edge(k)} transform={`rotate(${x} ${x} 20)`} />)}
				</g>
			);
		}
		case 'molecule':
			return (
				<g>
					<Shadow rx={30} y={30} />
					{[[-24, 8], [-8, 8], [8, 8]].map(([x, y], i) => <circle key={i} cx={x} cy={y} r={9} fill={g(id, 'sun')} stroke={edge('sun')} />)}
					<path d="M 18 -6 l 14 0 l 6 12 l -6 12 l -14 0 l -6 -12 Z" fill={g(id, 'dna1')} stroke={edge('dna1')} />
					<circle cx={25} cy={-18} r={8} fill={g(id, 'dna2')} stroke={edge('dna2')} />
				</g>
			);
		case 'rain':
			return (
				<g>
					<Shadow rx={26} y={38} />
					<circle cx={-12} cy={-14} r={14} fill={g(id, 'grey')} />
					<circle cx={8} cy={-20} r={17} fill={g(id, 'grey')} />
					<circle cx={22} cy={-10} r={11} fill={g(id, 'grey')} />
					<rect x={-22} y={-12} width={50} height={12} rx={6} fill={g(id, 'grey')} />
					{[-14, 0, 14].map((x, i) => {
						const y = ((frame * 1.4 + i * 9) % 30) + 4;
						return <line key={i} x1={x} y1={y} x2={x - 3} y2={y + 8} stroke={ECO.water} strokeWidth={3} strokeLinecap="round" />;
					})}
				</g>
			);
		case 'sun':
			return (
				<g>
					<Shadow rx={22} y={38} />
					{Array.from({length: 10}, (_, i) => {
						const a = (i / 10) * Math.PI * 2 + frame / 90;
						return <line key={i} x1={Math.cos(a) * 24} y1={Math.sin(a) * 24} x2={Math.cos(a) * 34} y2={Math.sin(a) * 34} stroke={ECO.sun} strokeWidth={4} strokeLinecap="round" />;
					})}
					<circle r={19} fill={g(id, 'sun')} stroke={edge('sun')} />
				</g>
			);
		case 'calendar':
			return (
				<g>
					<Shadow rx={28} y={36} />
					<circle r={32} fill="#fbf8f0" stroke="#b8ae98" strokeWidth={2} />
					{Array.from({length: 6}, (_, i) => {
						const a0 = (i / 6) * Math.PI * 2 - Math.PI / 2;
						const a1 = ((i + 1) / 6) * Math.PI * 2 - Math.PI / 2;
						const cols: EcoKey[] = ['water', 'leaf', 'sun', 'seed', 'flower', 'sea'];
						return (
							<path key={i} d={`M 0 0 L ${Math.cos(a0) * 28} ${Math.sin(a0) * 28} A 28 28 0 0 1 ${Math.cos(a1) * 28} ${Math.sin(a1) * 28} Z`} fill={ECO[cols[i]]} opacity={0.75} stroke="#fff" strokeWidth={1.5} />
						);
					})}
					<circle r={6} fill="#fff" />
				</g>
			);
		case 'pond':
			return (
				<g>
					<Shadow rx={36} y={24} />
					<ellipse cx={0} cy={10} rx={38} ry={16} fill={g(id, 'water')} stroke={edge('water')} />
					<path d={`M -20 ${8 + Math.sin(frame / 20) * 2} q 10 -4 20 0 q 10 4 20 0`} stroke="#ffffff" strokeOpacity={0.7} strokeWidth={2} fill="none" />
				</g>
			);
		case 'weir':
			return (
				<g>
					<Shadow rx={36} y={26} />
					<path d="M -38 20 C -20 10 20 10 38 20" stroke={ECO.water} strokeWidth={14} fill="none" />
					{[-24, -12, 0, 12, 24].map((x, i) => <circle key={i} cx={x} cy={12 - (i % 2) * 4} r={7} fill={g(id, 'rock')} stroke={edge('rock')} />)}
				</g>
			);
		case 'map':
			return (
				<g>
					<Shadow rx={30} y={34} />
					<path d="M -32 -26 L -10 -32 L 10 -26 L 32 -32 L 32 26 L 10 32 L -10 26 L -32 32 Z" fill="#fbf8f0" stroke="#b8ae98" strokeWidth={1.5} />
					<line x1={-10} y1={-32} x2={-10} y2={26} stroke="#d8d0bc" />
					<line x1={10} y1={-26} x2={10} y2={32} stroke="#d8d0bc" />
					{[[-20, -8], [-16, 10], [18, -12], [22, 4], [0, 14]].map(([x, y], i) => <circle key={i} cx={x} cy={y} r={4.5} fill={g(id, 'leaf')} />)}
				</g>
			);
		case 'tally':
			return (
				<g>
					<Shadow rx={30} y={34} />
					<rect x={-30} y={-30} width={60} height={60} rx={6} fill="#fbf8f0" stroke="#b8ae98" strokeWidth={1.5} />
					{[-18, -9, 0, 9].map((x, i) => <line key={i} x1={x} y1={-16} x2={x} y2={16} stroke="#3a3a3a" strokeWidth={3} strokeLinecap="round" />)}
					<line x1={-24} y1={10} x2={16} y2={-10} stroke="#3a3a3a" strokeWidth={3} strokeLinecap="round" />
				</g>
			);
		case 'variety':
			return (
				<g>
					<Shadow rx={32} y={34} />
					{([[-20, 12, 'leaf'], [0, 16, 'flower'], [20, 12, 'sea'], [-10, -8, 'seed'], [12, -8, 'moth'], [0, -26, 'fish']] as [number, number, EcoKey][]).map(([x, y, c], i) => (
						<circle key={i} cx={x} cy={y} r={10} fill={g(id, c)} stroke={edge(c)} />
					))}
				</g>
			);
		case 'rock':
			return (
				<g>
					<Shadow rx={32} y={30} />
					<path d="M -32 28 L -26 -8 L -6 -22 L 18 -18 L 32 4 L 28 28 Z" fill={g(id, 'rock')} stroke={edge('rock')} />
				</g>
			);
		case 'basket':
			return (
				<g>
					<Shadow rx={36} y={22} />
					<path d="M -38 -2 C -30 22 30 22 38 -2 Z" fill={g(id, 'wood')} stroke={edge('wood')} />
					{[-24, -12, 0, 12, 24].map((x, i) => <path key={i} d={`M ${x} 0 q 2 10 ${x * 0.1} 16`} stroke={edge('wood', -0.15)} strokeWidth={1.2} fill="none" />)}
					{[[-18, -8], [-4, -12], [10, -9], [22, -6], [4, -2], [-12, -2]].map(([x, y], i) => <ellipse key={i} cx={x} cy={y} rx={8} ry={5} fill={g(id, 'moth')} stroke={edge('moth')} />)}
				</g>
			);
		case 'loaf':
			return (
				<g>
					<Shadow rx={34} y={24} />
					<ellipse cx={0} cy={6} rx={34} ry={16} fill={g(id, 'seed')} stroke={edge('seed')} />
					<ellipse cx={0} cy={0} rx={30} ry={12} fill={g(id, 'shell')} stroke={edge('shell')} />
					{[-14, 0, 14].map((x, i) => <path key={i} d={`M ${x - 5} -4 l 10 6`} stroke={edge('seed', -0.1)} strokeWidth={2} />)}
				</g>
			);
		case 'kangaroo': {
			const k = t('moth');
			return (
				<g>
					<Shadow rx={30} y={36} />
					<path d="M -10 24 C -20 30 -26 34 -32 36" stroke={edge(k)} strokeWidth={7} strokeLinecap="round" fill="none" />
					<ellipse cx={0} cy={8} rx={15} ry={22} fill={g(id, k)} stroke={edge(k)} transform="rotate(-18 0 8)" />
					<path d="M -4 26 L 14 34 L 22 34" stroke={edge(k)} strokeWidth={6} strokeLinecap="round" fill="none" />
					<path d="M 8 -2 L 16 6" stroke={edge(k)} strokeWidth={4} strokeLinecap="round" />
					<ellipse cx={10} cy={-18} rx={9} ry={7} fill={g(id, k)} stroke={edge(k)} transform="rotate(20 10 -18)" />
					<path d="M 4 -24 L 2 -36 L 8 -26 M 8 -24 L 10 -36 L 13 -25" fill={g(id, k)} stroke={edge(k)} />
					<circle cx={14} cy={-19} r={1.6} fill="#1a1a1a" />
				</g>
			);
		}
		case 'dingo': {
			const k = t('seed');
			return (
				<g>
					<Shadow rx={32} y={36} />
					<path d="M 24 2 C 34 -4 38 -12 40 -18" stroke={edge(k)} strokeWidth={6} strokeLinecap="round" fill="none" />
					{[-20, -10, 12, 20].map((x, i) => <path key={i} d={`M ${x} 8 L ${x + (i % 2 ? 2 : -2)} 34`} stroke={edge(k)} strokeWidth={5} strokeLinecap="round" />)}
					<ellipse cx={0} cy={2} rx={26} ry={12} fill={g(id, k)} stroke={edge(k)} />
					<path d="M -22 -2 L -34 -14 L -46 -10 L -44 -4 L -30 0 Z" fill={g(id, k)} stroke={edge(k)} />
					<path d="M -32 -12 L -30 -24 L -26 -12 Z M -26 -10 L -22 -22 L -20 -10 Z" fill={g(id, k)} stroke={edge(k)} />
					<circle cx={-36} cy={-10} r={1.6} fill="#1a1a1a" />
				</g>
			);
		}
		default:
			return null;
	}
};

/** Place an icon at (x, y), scaled by s. Falls back to the bio-y12-m7 set. */
export const EcoIcon = ({id, name, x, y, s = 1, frame, opacity = 1, opts = {}}: {id: string; name: AnyIconName; x: number; y: number; s?: number; frame: number; opacity?: number; opts?: EcoIconOpts}) => {
	if (!ECO_NAMES.has(name)) return <M7Icon id={id} name={name as M7IconName} x={x} y={y} s={s} frame={frame} opacity={opts.dead ? opacity * 0.45 : opacity} />;
	return (
		<g transform={`translate(${x},${y}) scale(${s})`} opacity={opacity}>
			{draw(id, name as EcoIconName, frame, opts)}
		</g>
	);
};
