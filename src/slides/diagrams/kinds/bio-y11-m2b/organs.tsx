// Organ and body icons for the bio-y11-m2b lane: stylised, glossy, drawn in
// SVG so they stand on a stone plinth like the painted diorama objects. Each
// icon is centred on (0, 0), about 90 units wide at s = 1, with its contact
// shadow at y ≈ 38. They are teaching glyphs, not anatomy plates: the shapes
// are recognisable, and every name the student must learn is a label in the
// kind that uses them, never baked in here.
//
// Fills use the GlossDefs gradients `${id}-g-${PAL key}`, so a kind must render
// <GlossDefs id={id} colors={GLOSS} /> once.

import type {ReactNode} from 'react';
import {PAL, shade} from './shared';

export type OrganName =
	| 'lungs' | 'heart' | 'stomach' | 'intestine' | 'largeIntestine' | 'liver' | 'pancreas' | 'kidney' | 'bladder'
	| 'muscle' | 'brain' | 'pituitary' | 'thyroid' | 'adrenal' | 'skin' | 'cell' | 'blood' | 'mouth' | 'oesophagus' | 'anus'
	| 'artery' | 'capillary' | 'vein' | 'glomerulus' | 'tubule' | 'dialyser' | 'source' | 'thermometer' | 'person' | 'amoeba' | 'bodyBlock' | 'none';

const g = (id: string, k: keyof typeof PAL) => `url(#${id}-g-${k})`;
const ed = (k: keyof typeof PAL, a = -0.35) => shade(PAL[k], a);
const Shadow = ({rx = 36, y = 38}: {rx?: number; y?: number}) => <ellipse cx={0} cy={y} rx={rx} ry={rx * 0.2} fill="rgba(40,36,30,0.22)" />;

const draw = (id: string, name: OrganName, frame: number, hot?: boolean): ReactNode => {
	switch (name) {
		case 'lungs': {
			const br = 1 + 0.03 * Math.sin(frame / 22);
			return (
				<g>
					<Shadow rx={40} />
					<path d="M -5 -40 L -5 -14 M 5 -40 L 5 -14" stroke="#c9ccd1" strokeWidth={7} strokeLinecap="round" />
					<g transform={`scale(${br})`}>
						<path d="M -8 -18 C -22 -30 -44 -22 -44 6 C -44 26 -36 36 -20 36 C -10 36 -8 26 -8 14 Z" fill={g(id, 'lung')} stroke={ed('lung')} strokeWidth={1.4} />
						<path d="M 8 -18 C 22 -30 44 -22 44 6 C 44 26 36 36 20 36 C 10 36 8 26 8 14 Z" fill={g(id, 'lung')} stroke={ed('lung')} strokeWidth={1.4} />
					</g>
					<path d="M -5 -14 L -18 0 M 5 -14 L 18 0 M -18 0 L -26 12 M -18 0 L -14 16 M 18 0 L 26 12 M 18 0 L 14 16" stroke="#b9bcc2" strokeWidth={3} strokeLinecap="round" fill="none" />
				</g>
			);
		}
		case 'heart': {
			const b = 1 + 0.05 * Math.max(0, Math.sin(frame / 5)) * (Math.sin(frame / 20) > 0.6 ? 1 : 0.3);
			return (
				<g>
					<Shadow rx={30} />
					<g transform={`scale(${b})`}>
						<path d="M 0 34 C -34 10 -40 -12 -28 -24 C -18 -34 -4 -30 0 -18 C 4 -30 18 -34 28 -24 C 40 -12 34 10 0 34 Z" fill={g(id, 'heart')} stroke={ed('heart')} strokeWidth={1.5} />
						<path d="M -6 -22 C -6 -36 -2 -40 4 -42 M 8 -24 C 10 -34 16 -38 22 -38" stroke={PAL.deoxy} strokeWidth={6} strokeLinecap="round" fill="none" />
					</g>
				</g>
			);
		}
		case 'stomach':
			return (
				<g>
					<Shadow rx={34} />
					<path d="M -8 -40 L -8 -26 C -8 -18 -30 -20 -34 0 C -38 22 -18 36 6 32 C 30 28 38 12 30 -2 C 24 -12 12 -8 8 -18 L 8 -40 Z" fill={g(id, 'stomach')} stroke={ed('stomach')} strokeWidth={1.5} />
					<path d="M -20 8 C -10 18 8 18 20 8" stroke={ed('stomach', -0.15)} strokeWidth={2} fill="none" opacity={0.7} />
					<path d="M 30 -2 C 36 -6 40 -4 42 2" stroke={ed('stomach')} strokeWidth={5} fill="none" strokeLinecap="round" />
				</g>
			);
		case 'intestine': {
			// a coiled small intestine with a few villus bumps
			const d = 'M -30 -26 C 30 -30 34 -14 0 -12 C -34 -10 -36 6 0 4 C 36 2 36 20 0 20 C -30 20 -34 34 -6 34';
			return (
				<g>
					<Shadow rx={36} />
					<path d={d} stroke={ed('gut', -0.25)} strokeWidth={17} fill="none" strokeLinecap="round" />
					<path d={d} stroke={PAL.gut} strokeWidth={13} fill="none" strokeLinecap="round" />
					<path d={d} stroke="#ffffff" strokeOpacity={0.35} strokeWidth={4} fill="none" strokeLinecap="round" transform="translate(-2,-3)" />
				</g>
			);
		}
		case 'largeIntestine': {
			const d = 'M -30 30 L -30 -24 C -30 -32 -24 -34 -16 -34 L 20 -34 C 28 -34 32 -30 32 -22 L 32 20 C 32 28 26 30 16 30 L 6 30 L 6 40';
			return (
				<g>
					<Shadow rx={38} y={42} />
					<path d={d} stroke={ed('gut', -0.3)} strokeWidth={20} fill="none" strokeLinecap="round" strokeLinejoin="round" />
					<path d={d} stroke={shade(PAL.gut, -0.06)} strokeWidth={15} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="10 3" />
				</g>
			);
		}
		case 'liver':
			return (
				<g>
					<Shadow rx={42} />
					<path d="M -44 -6 C -44 -26 -10 -30 20 -26 C 40 -24 46 -16 42 -6 C 36 8 14 26 -8 30 C -30 34 -44 18 -44 -6 Z" fill={g(id, 'liver')} stroke={ed('liver')} strokeWidth={1.5} />
					<path d="M 4 -26 C 2 -8 -2 10 -8 28" stroke={ed('liver', -0.1)} strokeWidth={2} fill="none" opacity={0.7} />
				</g>
			);
		case 'pancreas':
			return (
				<g>
					<Shadow rx={42} y={26} />
					<path d="M -44 8 C -46 -8 -30 -14 -16 -8 C 0 -2 18 -12 34 -12 C 44 -12 46 -2 38 4 C 24 12 4 10 -10 16 C -26 22 -42 22 -44 8 Z" fill={g(id, 'pancreas')} stroke={ed('pancreas')} strokeWidth={1.5} />
					{[-30, -14, 4, 22].map((x, k) => <circle key={k} cx={x} cy={4 - (k % 2) * 6} r={3.2} fill={ed('pancreas', -0.12)} opacity={0.8} />)}
				</g>
			);
		case 'kidney':
			return (
				<g>
					<Shadow rx={30} />
					<path d="M 4 -36 C -22 -38 -34 -14 -30 6 C -26 28 -6 38 10 32 C 22 28 18 14 10 8 C 4 2 4 -6 12 -12 C 22 -20 24 -34 4 -36 Z" fill={g(id, 'kidney')} stroke={ed('kidney')} strokeWidth={1.5} />
					<path d="M 10 -2 L 30 -6 M 12 6 L 30 10 M 8 16 L 16 40" stroke={PAL.deoxy} strokeWidth={4} strokeLinecap="round" />
					<path d="M 10 -2 L 30 -6" stroke={PAL.blood} strokeWidth={4} strokeLinecap="round" />
					<path d="M 8 16 L 16 40" stroke="#e0c24a" strokeWidth={4} strokeLinecap="round" />
				</g>
			);
		case 'bladder':
			return (
				<g>
					<Shadow rx={30} />
					<path d="M -16 -40 C -18 -30 -14 -22 -10 -16 M 16 -40 C 18 -30 14 -22 10 -16" stroke={shade(PAL.kidney, 0.25)} strokeWidth={5} strokeLinecap="round" fill="none" />
					<path d="M -28 -6 C -30 18 -14 32 0 32 C 14 32 30 18 28 -6 C 26 -20 -26 -20 -28 -6 Z" fill="#f3d6cf" stroke={shade('#f3d6cf', -0.35)} strokeWidth={1.4} />
					<clipPath id={`${id}-bd`}><path d="M -28 -6 C -30 18 -14 32 0 32 C 14 32 30 18 28 -6 C 26 -20 -26 -20 -28 -6 Z" /></clipPath>
					<rect x={-32} y={4 + Math.sin(frame / 20) * 1.5} width={64} height={30} fill="#e9cf5a" opacity={0.75} clipPath={`url(#${id}-bd)`} />
					<path d="M -6 32 L -4 40 L 4 40 L 6 32" fill="#f3d6cf" stroke={shade('#f3d6cf', -0.35)} />
				</g>
			);
		case 'muscle':
			return (
				<g>
					<Shadow rx={40} />
					<path d="M -46 0 C -30 -26 30 -26 46 0 C 30 26 -30 26 -46 0 Z" fill={g(id, 'muscle')} stroke={ed('muscle')} strokeWidth={1.5} />
					{[-14, -5, 5, 14].map((y, k) => <path key={k} d={`M -34 ${y} C -12 ${y * 1.3} 12 ${y * 1.3} 34 ${y}`} stroke={ed('muscle', -0.1)} strokeWidth={1.4} fill="none" opacity={0.7} />)}
					<path d="M -46 0 L -54 0 M 46 0 L 54 0" stroke="#efe6d2" strokeWidth={7} strokeLinecap="round" />
				</g>
			);
		case 'brain':
			return (
				<g>
					<Shadow rx={40} />
					<path d="M -40 8 C -46 -18 -26 -38 0 -36 C 28 -38 46 -18 40 8 C 36 22 20 24 10 20 L 6 30 L -4 30 L -6 20 C -20 26 -36 22 -40 8 Z" fill={g(id, 'brain')} stroke={ed('brain')} strokeWidth={1.5} />
					<path d="M -26 -16 C -16 -26 -6 -12 4 -22 C 14 -30 22 -16 30 -20 M -30 0 C -18 -8 -8 4 4 -4 C 16 -12 26 2 34 -4" stroke={ed('brain', -0.15)} strokeWidth={2} fill="none" />
					{hot && <circle cx={0} cy={14} r={7} fill={PAL.adrenal} stroke="#fff" strokeWidth={1.5} />}
				</g>
			);
		case 'pituitary':
			return (
				<g>
					<Shadow rx={22} y={30} />
					<path d="M 0 -34 L 0 -6" stroke={ed('gland', -0.1)} strokeWidth={6} strokeLinecap="round" />
					<ellipse cx={0} cy={8} rx={22} ry={18} fill={g(id, 'gland')} stroke={ed('gland')} strokeWidth={1.5} />
				</g>
			);
		case 'thyroid':
			return (
				<g>
					<Shadow rx={34} y={32} />
					<rect x={-6} y={-40} width={12} height={70} rx={6} fill="#dcd6cc" stroke="#b9b2a6" />
					<path d="M -4 6 C -10 -26 -36 -26 -34 2 C -32 26 -12 24 -4 14 Z" fill={g(id, 'thyroid')} stroke={ed('thyroid')} strokeWidth={1.4} />
					<path d="M 4 6 C 10 -26 36 -26 34 2 C 32 26 12 24 4 14 Z" fill={g(id, 'thyroid')} stroke={ed('thyroid')} strokeWidth={1.4} />
					<rect x={-8} y={4} width={16} height={9} rx={4} fill={g(id, 'thyroid')} />
				</g>
			);
		case 'adrenal':
			return (
				<g>
					<Shadow rx={28} />
					<path d="M 2 -12 C -20 -14 -28 4 -24 18 C -20 32 -4 38 8 32 C 18 28 16 16 10 12 C 6 6 8 0 12 -4 C 18 -10 16 -12 2 -12 Z" fill={g(id, 'kidney')} stroke={ed('kidney')} strokeWidth={1.3} />
					<path d="M -22 -10 C -18 -34 10 -38 18 -18 C 10 -12 -8 -16 -22 -10 Z" fill={g(id, 'adrenal')} stroke={ed('adrenal')} strokeWidth={1.4} />
				</g>
			);
		case 'skin':
			return (
				<g>
					<Shadow rx={44} />
					<rect x={-44} y={-24} width={88} height={56} rx={6} fill={g(id, 'skin')} stroke={ed('skin')} />
					<rect x={-44} y={-24} width={88} height={10} rx={4} fill={shade(PAL.skin, -0.1)} />
					<path d="M -18 -14 L -18 8 C -18 16 -8 16 -8 8 C -8 2 -14 2 -14 8" stroke="#6aa5c8" strokeWidth={3} fill="none" />
					<path d="M -40 20 C -20 12 0 26 20 16 C 30 12 36 18 42 16" stroke={PAL.blood} strokeWidth={4} fill="none" />
					<circle cx={-18} cy={-28 - ((frame / 3) % 14)} r={3.5} fill={PAL.water} opacity={0.8 - ((frame / 3) % 14) / 20} />
				</g>
			);
		case 'cell':
			return (
				<g>
					<Shadow rx={34} />
					<path d="M -38 0 C -38 -24 -18 -32 2 -30 C 26 -30 40 -16 38 4 C 36 24 18 32 -2 32 C -24 32 -38 22 -38 0 Z" fill={g(id, 'cell')} stroke={ed('cell')} strokeWidth={1.4} />
					<circle cx={-4} cy={-2} r={11} fill={g(id, 'nucleus')} stroke={ed('nucleus')} />
					<ellipse cx={18} cy={12} rx={7} ry={4} fill={PAL.muscle} opacity={0.75} />
					<ellipse cx={-20} cy={16} rx={6} ry={3.5} fill={PAL.muscle} opacity={0.75} />
				</g>
			);
		case 'blood': {
			const off = (frame * 0.8) % 30;
			return (
				<g>
					<Shadow rx={44} />
					<rect x={-46} y={-16} width={92} height={36} rx={18} fill={shade(PAL.blood, 0.25)} stroke={ed('blood')} strokeWidth={2} />
					<clipPath id={`${id}-bl`}><rect x={-44} y={-14} width={88} height={32} rx={16} /></clipPath>
					<g clipPath={`url(#${id}-bl)`}>
						{[-60, -30, 0, 30, 60].map((x, k) => (
							<ellipse key={k} cx={x + off} cy={2 + (k % 2 ? -5 : 5)} rx={9} ry={6} fill={g(id, 'blood')} stroke={ed('blood')} strokeWidth={0.8} />
						))}
					</g>
				</g>
			);
		}
		case 'mouth':
			return (
				<g>
					<Shadow rx={36} />
					<path d="M -38 -8 C -24 -30 24 -30 38 -8 C 24 -2 -24 -2 -38 -8 Z" fill="#d86a6a" stroke="#9c3d3d" strokeWidth={1.4} />
					<path d="M -38 4 C -24 30 24 30 38 4 C 24 10 -24 10 -38 4 Z" fill="#d86a6a" stroke="#9c3d3d" strokeWidth={1.4} />
					{[-24, -12, 0, 12, 24].map((x, k) => (
						<g key={k}>
							<rect x={x - 5} y={-7} width={10} height={9} rx={2} fill="#fbf8f0" stroke="#cfc8b8" />
							<rect x={x - 5} y={2} width={10} height={8} rx={2} fill="#fbf8f0" stroke="#cfc8b8" />
						</g>
					))}
				</g>
			);
		case 'oesophagus':
			return (
				<g>
					<Shadow rx={20} />
					<rect x={-10} y={-40} width={20} height={76} rx={10} fill={g(id, 'gut')} stroke={ed('gut')} strokeWidth={1.4} />
					<ellipse cx={0} cy={-28 + ((frame * 1.2) % 60)} rx={9} ry={7} fill="#c9a26a" opacity={0.9} />
				</g>
			);
		case 'anus':
			return (
				<g>
					<Shadow rx={24} />
					<rect x={-14} y={-40} width={28} height={60} rx={12} fill={shade(PAL.gut, -0.06)} stroke={ed('gut')} strokeWidth={1.4} />
					<path d="M -16 20 L 16 20" stroke={ed('gut', -0.2)} strokeWidth={5} strokeLinecap="round" />
					<ellipse cx={0} cy={-6 + ((frame * 0.5) % 24)} rx={8} ry={6} fill="#8a6a4a" />
				</g>
			);
		case 'artery':
			return (
				<g>
					<Shadow rx={34} />
					<circle cy={-4} r={34} fill="#f1dccd" stroke="#b77a66" strokeWidth={1.5} />
					<circle cy={-4} r={30} fill="#d98a80" />
					<circle cy={-4} r={13} fill={g(id, 'blood')} />
				</g>
			);
		case 'capillary':
			return (
				<g>
					<Shadow rx={22} />
					<circle cy={-4} r={20} fill="#e7b9a8" stroke="#b77a66" strokeWidth={1.2} />
					<circle cy={-4} r={17} fill={g(id, 'blood')} />
				</g>
			);
		case 'vein':
			return (
				<g>
					<Shadow rx={38} />
					<ellipse cy={-4} rx={38} ry={32} fill="#f1dccd" stroke="#b77a66" strokeWidth={1.5} />
					<ellipse cy={-4} rx={33} ry={27} fill={g(id, 'deoxy')} />
					<path d="M -32 -8 Q -10 -22 0 -6 Q -12 4 -32 2 Z M 32 -8 Q 10 -22 0 -6 Q 12 4 32 2 Z" fill="#f3d6cf" />
				</g>
			);
		case 'glomerulus':
			return (
				<g>
					<Shadow rx={34} />
					<circle cy={-4} r={34} fill="#fbf1dc" stroke="#d9b877" strokeWidth={6} />
					{Array.from({length: 6}, (_, i) => {
						const a = (i / 6) * Math.PI * 2 + frame / 300;
						return <circle key={i} cx={Math.cos(a) * 10} cy={-4 + Math.sin(a) * 9} r={9} fill="none" stroke={PAL.blood} strokeWidth={4.5} />;
					})}
				</g>
			);
		case 'tubule':
			return (
				<g>
					<Shadow rx={40} />
					<path d="M -40 -20 L 20 -20 C 36 -20 36 4 20 4 L -20 4 C -36 4 -36 26 -20 26 L 40 26" stroke="#d9b877" strokeWidth={14} fill="none" strokeLinecap="round" />
					<path d="M -40 -20 L 20 -20 C 36 -20 36 4 20 4 L -20 4 C -36 4 -36 26 -20 26 L 40 26" stroke="#fbf1dc" strokeWidth={9} fill="none" strokeLinecap="round" />
					<circle cx={-10 + ((frame * 0.6) % 30)} cy={-20} r={3.5} fill={PAL.glucose} />
				</g>
			);
		case 'dialyser':
			return (
				<g>
					<Shadow rx={40} />
					<rect x={-40} y={-34} width={52} height={70} rx={6} fill={g(id, 'machine')} stroke={shade(PAL.machine, -0.35)} strokeWidth={1.4} />
					<rect x={-34} y={-26} width={40} height={16} rx={3} fill="#1d2a36" />
					<text x={-14} y={-14} textAnchor="middle" fill="#7fe0c0" fontSize={10} fontWeight={800}>{'~~~'}</text>
					<rect x={20} y={-30} width={16} height={60} rx={8} fill={g(id, 'glass')} stroke="#8fb4c8" strokeWidth={1.4} />
					{[0, 1, 2, 3].map((k) => <line key={k} x1={24 + k * 3} y1={-26} x2={24 + k * 3} y2={26} stroke={PAL.blood} strokeWidth={1.4} opacity={0.8} />)}
					<path d="M 28 -30 C 28 -44 -10 -44 -10 -36" stroke={PAL.blood} strokeWidth={3} fill="none" />
				</g>
			);
		case 'source':
			return (
				<g>
					<Shadow rx={30} />
					<rect x={-26} y={-36} width={52} height={68} rx={4} fill="#ffffff" stroke="#b9b2a6" strokeWidth={1.5} />
					<path d="M 12 -36 L 26 -22 L 12 -22 Z" fill="#e7e2d8" stroke="#b9b2a6" />
					{[-20, -10, 0, 10, 20].map((y, k) => <line key={k} x1={-18} y1={y} x2={k === 4 ? 4 : 18} y2={y} stroke="#b9b2a6" strokeWidth={3} strokeLinecap="round" />)}
				</g>
			);
		case 'thermometer':
			return (
				<g>
					<Shadow rx={20} />
					<rect x={-9} y={-42} width={18} height={62} rx={9} fill="#ffffff" stroke="#9aa0a6" strokeWidth={1.5} />
					<rect x={-4} y={-20} width={8} height={40} rx={4} fill={PAL.blood} />
					<circle cx={0} cy={26} r={13} fill={g(id, 'blood')} stroke={ed('blood')} />
				</g>
			);
		case 'person':
			return (
				<g>
					<Shadow rx={26} />
					<circle cx={0} cy={-26} r={12} fill={g(id, 'skin')} stroke={ed('skin')} />
					<path d="M -20 30 L -20 0 C -20 -10 -12 -12 0 -12 C 12 -12 20 -10 20 0 L 20 30 Z" fill={g(id, 'machine')} stroke={shade(PAL.machine, -0.35)} />
				</g>
			);
		case 'amoeba': {
			const w = Math.sin(frame / 18) * 3;
			return (
				<g>
					<Shadow rx={24} y={26} />
					<path d={`M -22 ${-4 + w} C -22 -20 -6 -22 4 -18 C 16 -26 26 -12 22 0 C 28 12 14 ${22 - w} 0 18 C -14 24 -24 12 -22 ${-4 + w} Z`} fill={g(id, 'glass')} stroke="#7fb0c8" strokeWidth={1.4} />
					<circle cx={-2} cy={0} r={6} fill={g(id, 'nucleus')} />
				</g>
			);
		}
		case 'bodyBlock':
			return (
				<g>
					<Shadow rx={46} />
					<rect x={-44} y={-36} width={88} height={72} rx={10} fill={g(id, 'skin')} stroke={ed('skin')} strokeWidth={1.4} />
				</g>
			);
		case 'none':
		default:
			return null;
	}
};

/** An organ icon at (x, y), scaled by s. `hot` adds the icon's own highlight (brain: hypothalamus dot). */
export const Organ = ({id, name, x, y, s = 1, frame, hot, opacity = 1}: {
	id: string; name: OrganName; x: number; y: number; s?: number; frame: number; hot?: boolean; opacity?: number;
}) => (
	<g transform={`translate(${x},${y}) scale(${s})`} opacity={opacity}>
		{draw(id, name, frame, hot)}
	</g>
);
