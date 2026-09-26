// NewSubstanceDiagram — "a compound is a brand-new substance" as three plinths.
//
// Reactant + reactant → product, each on its own plinth with a particle model
// (a close-packed metal lattice, drifting diatomic gas molecules, or an
// alternating ionic lattice) and property tags underneath. At the "none of it
// survives" beat, each reactant's hallmark property (e.g. "reactive", "toxic")
// slides across to the product column and is struck out in amber: the old
// properties do not carry over into the compound.
//
// Config-driven: any three species (model 'metal' | 'diatomic' | 'ionic'),
// any tags, any "lost" properties. Defaults = Chem Y11 M1 L2 "formula" scene
// (Na + Cl₂ → NaCl).
//
// Beats (frames after `delay`): each species has `at` (model + name appear),
// each tag its own `at`, each lost property its own `at` (it launches, slides
// for 30 frames, then the amber strike draws).

import type {ReactElement} from 'react';
import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, ELEMENT_COLORS, Molecule, idleBob, idlePulse} from '../../diorama';
import {clamp, fadeAt, popAt, shade} from './shared';

export type NSModel = 'metal' | 'diatomic' | 'ionic';
export type NSTag = {text: string; at?: number};
export type NSSpecies = {
	name: string;
	formula?: string;
	model: NSModel;
	/** metal/diatomic: [element]; ionic: [cation, anion]. */
	atoms: string[];
	tags?: NSTag[];
	at?: number;
};
export type NSLost = {text: string; from: number; at: number};
export type NewSubstanceProps = {
	title?: string;
	species?: NSSpecies[];
	lost?: NSLost[];
	delay?: number;
};

const DEFAULT_SPECIES: NSSpecies[] = [
	{name: 'Sodium', formula: 'Na', model: 'metal', atoms: ['Na'], at: 30, tags: [{text: 'soft metal', at: 141}, {text: 'violently reactive', at: 187}]},
	{name: 'Chlorine', formula: 'Cl₂', model: 'diatomic', atoms: ['Cl'], at: 205, tags: [{text: 'green gas', at: 225}, {text: 'toxic', at: 242}]},
	{name: 'Sodium chloride', formula: 'NaCl', model: 'ionic', atoms: ['Na', 'Cl'], at: 270, tags: [{text: 'safe table salt', at: 360}, {text: 'melts at 801 °C', at: 427}]},
];
const DEFAULT_LOST: NSLost[] = [
	{text: 'reactive', from: 0, at: 485},
	{text: 'toxic', from: 1, at: 541},
];

const ID = 'c11new';
const W = 760;
const H = 530;
const XS = [130, 380, 630];
const PY = 252; // plinth top centre
const RX = 106;
const NAME_Y = 344;
const FORM_Y = 369;
const TAG_Y0 = 404;
const TAG_DY = 38;
const TAG_SIZE = 17;
const TAG_H = 31;

const tagW = (t: string) => t.length * TAG_SIZE * 0.56 + 28;

const Tag = ({x, y, text, color, fill = TOK.bgLift, opacity = 1, dash, textColor}: {x: number; y: number; text: string; color: string; fill?: string; opacity?: number; dash?: string; textColor?: string}) => {
	const w = tagW(text);
	return (
		<g opacity={opacity}>
			<rect x={x - w / 2} y={y - TAG_H / 2} width={w} height={TAG_H} rx={TAG_H / 2} fill={fill} stroke={color} strokeWidth={2.5} strokeDasharray={dash} />
			<text x={x} y={y + TAG_SIZE * 0.36} textAnchor="middle" fill={textColor ?? color} fontSize={TAG_SIZE} fontWeight={800}>
				{text}
			</text>
		</g>
	);
};

const col = (el: string) => ELEMENT_COLORS[el] ?? '#9a9a9a';

/** Close-packed metal lattice: 3 hex-packed rows of labelled atoms. */
const MetalModel = ({cx, frame, fps, at, el}: {cx: number; frame: number; fps: number; at: number; el: string}) => {
	const r = 17;
	const dx = 34;
	const rows = [5, 6, 5];
	const out: ReactElement[] = [];
	let k = 0;
	rows.forEach((n, row) => {
		const y = PY - 22 - (rows.length - 1 - row) * dx * 0.86;
		for (let c = 0; c < n; c++) {
			const x = cx + (c - (n - 1) / 2) * dx;
			const pop = popAt(frame, fps, at + k * 2);
			const bob = idleBob(frame, k, 0.9);
			out.push(
				<g key={k} transform={`translate(${x},${y + bob}) scale(${Math.min(1.1, pop)})`} opacity={Math.min(1, pop * 1.5)}>
					<circle r={r} fill={`url(#${ID}-atom-${el})`} stroke={shade(col(el), -0.35)} strokeWidth={1} />
					<text y={6} textAnchor="middle" fill="#ffffff" fontSize={16} fontWeight={800} stroke={shade(col(el), -0.45)} strokeWidth={3} paintOrder="stroke">{el}</text>
				</g>,
			);
			k++;
		}
	});
	return <g>{out}</g>;
};

/** Diatomic gas: molecules drifting in a loose cloud above the plinth. */
const GasModel = ({cx, frame, at, el}: {cx: number; frame: number; at: number; el: string}) => {
	// Two staggered rows, spaced so drifting molecules never touch.
	const seeds = [
		[-45, -146, 0.3], [45, -146, 1.4], [-70, -74, 2.2], [0, -74, 3.1], [70, -74, 4.0],
	];
	const t = frame - at;
	const show = fadeAt(frame, at, 14);
	return (
		<g opacity={show}>
			<ellipse cx={cx} cy={PY - 78} rx={RX * 0.92} ry={82} fill={col(el)} opacity={0.1} />
			{seeds.map(([x, y, ph], i) => {
				const mx = x + Math.sin(t / 23 + ph) * 5 + Math.sin(t / 41 + ph * 2) * 3;
				const my = y + Math.cos(t / 29 + ph * 1.3) * 6;
				const rot = Math.sin(t / 37 + ph) * 30;
				return (
					<g key={i} transform={`translate(${cx + mx},${PY + my}) rotate(${rot})`}>
						<Molecule id={ID} atoms={[el, el]} x={0} y={0} r={15} />
					</g>
				);
			})}
		</g>
	);
};

/** Ionic lattice: alternating small cations and large anions, charges marked. */
const IonicModel = ({cx, frame, fps, at, cat, an}: {cx: number; frame: number; fps: number; at: number; cat: string; an: string}) => {
	const d = 36;
	const cols = 5;
	const rows = 3;
	const out: ReactElement[] = [];
	let k = 0;
	for (let row = 0; row < rows; row++) {
		for (let c = 0; c < cols; c++) {
			const isCat = (row + c) % 2 === 0;
			const el = isCat ? cat : an;
			const r = isCat ? 11 : 18;
			const x = cx + (c - (cols - 1) / 2) * d;
			const y = PY - 24 - (rows - 1 - row) * d * 0.92;
			const pop = popAt(frame, fps, at + k * 2);
			const bob = idleBob(frame, k + 30, 0.7);
			out.push(
				<g key={k} transform={`translate(${x},${y + bob}) scale(${Math.min(1.1, pop)})`} opacity={Math.min(1, pop * 1.5)}>
					<circle r={r} fill={`url(#${ID}-atom-${el})`} stroke={shade(col(el), -0.35)} strokeWidth={1} />
					<text y={isCat ? 5.5 : 6.5} textAnchor="middle" fill="#ffffff" fontSize={isCat ? 16 : 20} fontWeight={900} stroke={shade(col(el), -0.45)} strokeWidth={2.5} paintOrder="stroke">{isCat ? '+' : '−'}</text>
				</g>,
			);
			k++;
		}
	}
	return <g>{out}</g>;
};

export const NewSubstanceDiagram = ({
	title = 'New bonds, new structure, new properties',
	species = DEFAULT_SPECIES,
	lost = DEFAULT_LOST,
	delay = 62,
}: NewSubstanceProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const elements = Array.from(new Set(species.flatMap((s) => s.atoms)));
	const sp = species.slice(0, 3);
	const lostY = TAG_Y0 + TAG_DY * 2 + 4;

	// Product-column slots for the lost (struck-out) properties, side by side.
	const gap = 12;
	const totalW = lost.reduce((a, l) => a + tagW(l.text), 0) + gap * Math.max(0, lost.length - 1);
	let acc = XS[2] - totalW / 2;
	const lostX = lost.map((l) => {
		const x = acc + tagW(l.text) / 2;
		acc += tagW(l.text) + gap;
		return x;
	});

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="A compound has new properties: its elements' properties do not survive" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} elements={elements} />

			{title && (
				<text x={W / 2} y={36} textAnchor="middle" fill={TOK.ink} fontSize={26} fontWeight={800} opacity={fadeAt(frame, 0)}>
					{title}
				</text>
			)}

			{/* Plinths (all present from the start) */}
			{sp.map((s, i) => (
				<g key={`p${i}`} opacity={fadeAt(frame, 2 + i * 4)}>
					<DioramaPlinth id={ID} cx={XS[i]} cy={PY} rx={RX} />
				</g>
			))}

			{/* Operators */}
			<text x={(XS[0] + XS[1]) / 2} y={PY - 50} textAnchor="middle" fill={TOK.inkDim} fontSize={44} fontWeight={700} opacity={fadeAt(frame, sp[1]?.at ?? 0)}>+</text>
			<text x={(XS[1] + XS[2]) / 2} y={PY - 50} textAnchor="middle" fill={TOK.inkDim} fontSize={44} fontWeight={700} opacity={fadeAt(frame, sp[2]?.at ?? 0)}>→</text>

			{/* Particle models */}
			{sp.map((s, i) => {
				const at = s.at ?? 10 + i * 60;
				if (s.model === 'metal') return <MetalModel key={`m${i}`} cx={XS[i]} frame={frame} fps={fps} at={at} el={s.atoms[0]} />;
				if (s.model === 'diatomic') return <GasModel key={`m${i}`} cx={XS[i]} frame={frame} at={at} el={s.atoms[0]} />;
				return <IonicModel key={`m${i}`} cx={XS[i]} frame={frame} fps={fps} at={at} cat={s.atoms[0]} an={s.atoms[1] ?? s.atoms[0]} />;
			})}

			{/* Names, formulas, tags */}
			{sp.map((s, i) => {
				const at = s.at ?? 10 + i * 60;
				return (
					<g key={`n${i}`}>
						<g opacity={fadeAt(frame, at + 6)}>
							<text x={XS[i]} y={NAME_Y} textAnchor="middle" fill={TOK.ink} fontSize={25} fontWeight={800}>{s.name}</text>
							{s.formula && (
								<text x={XS[i]} y={FORM_Y} textAnchor="middle" fill={theme.accent} fontSize={21} fontWeight={800}>{s.formula}</text>
							)}
						</g>
						{(s.tags ?? []).map((t, k) => {
							const tAt = t.at ?? at + 20 + k * 20;
							const p = popAt(frame, fps, tAt);
							const y = TAG_Y0 + k * TAG_DY;
							return (
								<g key={k} transform={`translate(${XS[i]},${y}) scale(${0.7 + 0.3 * Math.min(1, p)}) translate(${-XS[i]},${-y})`}>
									<Tag x={XS[i]} y={y} text={t.text} color={theme.accent} opacity={Math.min(1, p * 1.5)} />
								</g>
							);
						})}
					</g>
				);
			})}

			{/* Lost properties: slide from their reactant to the product, then struck out */}
			{lost.map((l, k) => {
				const src = XS[l.from] ?? XS[0];
				const appear = fadeAt(frame, l.at, 8);
				const move = interpolate(frame, [l.at + 8, l.at + 38], [0, 1], {...clamp, easing: (x) => 1 - Math.pow(1 - x, 3)});
				const strike = interpolate(frame, [l.at + 40, l.at + 52], [0, 1], clamp);
				const x = src + (lostX[k] - src) * move;
				const lift = 0;
				const w = tagW(l.text);
				const dim = interpolate(strike, [0, 1], [1, 0.8]);
				const settled = frame > l.at + 52;
				const pulse = settled ? idlePulse(frame, 60) : 0;
				return (
					<g key={`l${k}`} opacity={appear}>
						<g opacity={dim}>
							<Tag x={x} y={lostY - lift} text={l.text} color={TOK.inkMute} dash="5 4" textColor={TOK.inkDim} />
						</g>
						<line
							opacity={strike > 0 ? 1 : 0}
							x1={x - w / 2 + 6}
							y1={lostY - lift + 1}
							x2={x - w / 2 + 6 + (w - 12) * strike}
							y2={lostY - lift + 1}
							stroke={TOK.amber}
							strokeWidth={4 + pulse * 1.2}
							strokeLinecap="round"
						/>
					</g>
				);
			})}
			{lost.length > 0 && (
				<text
					x={lostX[0] - tagW(lost[0].text) / 2 - 10}
					y={lostY + 6}
					textAnchor="end"
					fill={TOK.amberInk}
					fontSize={17}
					fontWeight={800}
					opacity={fadeAt(frame, Math.max(...lost.map((l) => l.at)) + 54)}
				>
					no longer:
				</text>
			)}
		</svg>
	);
};
