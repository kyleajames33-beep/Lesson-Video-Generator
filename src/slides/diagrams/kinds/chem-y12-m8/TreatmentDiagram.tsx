// TreatmentDiagram — drinking-water treatment (Chem Y12 M8 L10), three modes:
//
//   train   the five-stage treatment train in order: coagulation, flocculation,
//           sedimentation, filtration, disinfection. Particles destabilise and
//           clump, settle, are strained; disinfection (last) reduces pathogens.
//           Amber: chlorination is only the final stage.
//           beats [order, stage names, clump, settle, strain, disinfect, barriers, key]
//   coag    alum chemistry: Al₂(SO₄)₃ → 2Al³⁺ + 3SO₄²⁻; Al³⁺ + 3H₂O → Al(OH)₃ + 3H⁺;
//           the Al(OH)₃ colloid adsorbs and destabilises particles (amber), gentle
//           mixing grows flocs, flocs settle; microbes are not the target.
//           beats [particles, alum, hydrolysis, equation, adsorb, flocculate, settle, note]
//   filter  a filter bed: activated carbon over sand over gravel. Sand and gravel
//           trap particles; carbon adsorbs dissolved organics; organics left in
//           would react with chlorine to form disinfection by-products, so they are
//           removed first (amber).
//           beats [sand+gravel, carbon, organics, by-products, remove first]
//
// Beats are frames after `delay`, from voiceover word positions. Deterministic.

import type {ReactNode} from 'react';
import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, ELEMENT_COLORS, idleBob, idlePulse} from '../../diorama';
import {Arrow, Beaker, Mark, clamp, ease, hash01, pop, ramp, shade} from './shared';
import {Bacterium, Dot, Tag, WATER, mix, wander} from './water-parts';

export type TreatmentMode = 'train' | 'coag' | 'filter';
export type TreatmentProps = {
	delay?: number;
	mode?: TreatmentMode;
	/** Frames after `delay`; meaning depends on the mode (see file header). */
	beats?: number[];
};

const DEFAULT_BEATS: Record<TreatmentMode, number[]> = {
	train: [154, 244, 327, 417, 475, 516, 590, 853],
	coag: [47, 208, 308, 331, 461, 598, 706, 767],
	filter: [94, 204, 459, 518, 591],
};

const W = 760;
const H = 530;
const RAW = '#b89a6a'; // turbid raw water tint
const CL = ELEMENT_COLORS.Cl;
const ORG = '#7b4f9e'; // dissolved organic matter (symbolic marker)

type ModeArgs = {id: string; frame: number; fps: number; b: number[]; accent: string};

/** A small glass tank; children clipped inside. */
const MiniTank = ({id, cx, base, w, h, tint = 0, children, stroke = WATER.glass, strokeW = 3}: {id: string; cx: number; base: number; w: number; h: number; tint?: number; children?: ReactNode; stroke?: string; strokeW?: number}) => {
	const x = cx - w / 2, y = base - h;
	const surf = y + 16;
	const col = mix('#8cc8ea', RAW, tint);
	return (
		<g>
			<defs>
				<clipPath id={`${id}-clip`}>
					<rect x={x + 3} y={surf} width={w - 6} height={base - surf - 3} rx={8} />
				</clipPath>
			</defs>
			<ellipse cx={cx + 6} cy={base + 4} rx={w * 0.52} ry={7} fill="rgba(40,36,30,0.2)" />
			<rect x={x} y={y} width={w} height={h} rx={10} fill="rgba(235,244,250,0.55)" />
			<rect x={x + 3} y={surf} width={w - 6} height={base - surf - 3} rx={8} fill={col} opacity={0.5} />
			<g clipPath={`url(#${id}-clip)`}>{children}</g>
			<line x1={x + 3} y1={surf} x2={x + w - 3} y2={surf} stroke="#ffffff" strokeWidth={2} />
			<rect x={x} y={y} width={w} height={h} rx={10} fill="none" stroke={stroke} strokeWidth={strokeW} />
			<rect x={x + 8} y={y + 12} width={5} height={h - 30} rx={2.5} fill="#ffffff" opacity={0.45} />
		</g>
	);
};

/** A fluffy white Al(OH)₃ floc blob. */
const Blob = ({x, y, r = 13, opacity = 1, seed = 0}: {x: number; y: number; r?: number; opacity?: number; seed?: number}) => (
	<g opacity={opacity}>
		{[0, 1, 2, 3, 4].map((k) => {
			const a = (k / 5) * Math.PI * 2 + seed;
			return <circle key={k} cx={x + Math.cos(a) * r * 0.45} cy={y + Math.sin(a) * r * 0.4} r={r * 0.62} fill="#fbfbf7" stroke="#d9d6cc" strokeWidth={1} opacity={0.92} />;
		})}
	</g>
);

/** Two green balls: a Cl₂ molecule. */
const Cl2 = ({x, y, r = 9}: {x: number; y: number; r?: number}) => (
	<g>
		{[-1, 1].map((k) => (
			<g key={k}>
				<circle cx={x + k * r * 0.8} cy={y} r={r} fill={CL} stroke={shade(CL, -0.35)} strokeWidth={1} />
				<circle cx={x + k * r * 0.8 - r * 0.3} cy={y - r * 0.35} r={r * 0.3} fill="#ffffff" opacity={0.55} />
			</g>
		))}
	</g>
);

// ───────────────────────────────────────────── train (concept-train) ──
const TrainMode = ({id, frame, fps, b, accent}: ModeArgs) => {
	const [tOrder, tNames, tClump, tSettle, tStrain, tDis, tBar, tKey] = b;
	const xs = [84, 232, 380, 528, 676];
	const TW = 112, TH = 132, BASE = 284;
	const names = ['Coagulation', 'Flocculation', 'Sedimentation', 'Filtration', 'Disinfection'];
	const subs = [['particles', 'destabilised'], ['clumps', 'grow'], ['clumps', 'settle'], ['leftovers', 'strained'], ['pathogens', 'reduced']];
	const stageT = [tClump, tClump + 20, tSettle, tStrain, tDis];
	const key = ramp(frame, tKey, 16);
	const surf = BASE - TH + 16;
	const bot = BASE - 6;
	return (
		<>
			{/* raw → drinking water */}
			<g opacity={ramp(frame, tOrder, 16)}>
				<text x={28} y={36} fill={TOK.inkDim} fontSize={18} fontWeight={800}>raw water</text>
				<Arrow x1={130} y1={30} x2={596} y2={30} color={TOK.inkMute} width={3} head={11} progress={ramp(frame, tOrder, 40)} />
				<text x={732} y={36} textAnchor="end" fill={accent} fontSize={18} fontWeight={800} opacity={ramp(frame, tOrder + 30, 14)}>drinking water</text>
			</g>
			{xs.map((cx, i) => {
				const nameOn = Math.min(1, pop(frame, fps, tNames + i * 14));
				const p = ease(interpolate(frame, [stageT[i], stageT[i] + 50], [0, 1], clamp));
				const isDis = i === 4;
				const tint = [0.75, 0.6, 0.35 - 0.2 * p, 0.12 - 0.1 * p, 0][i] * (i < 2 ? 1 : 1);
				return (
					<g key={i}>
						<g opacity={nameOn} transform={`translate(0,${(1 - nameOn) * 10})`}>
							<circle cx={cx} cy={76} r={15} fill={isDis && key > 0.5 ? TOK.amber : accent} />
							<text x={cx} y={82} textAnchor="middle" fill="#ffffff" fontSize={17} fontWeight={800}>{i + 1}</text>
							<text x={cx} y={116} textAnchor="middle" fill={TOK.ink} fontSize={17} fontWeight={800}>{names[i]}</text>
						</g>
						{i < 4 && (
							<g opacity={ramp(frame, 0)}>
								<rect x={cx + TW / 2 - 2} y={surf + 6} width={xs[i + 1] - cx - TW + 4} height={12} fill="#9aa3ab" />
								<rect x={cx + TW / 2 - 2} y={surf + 8} width={xs[i + 1] - cx - TW + 4} height={3} fill="#cfd5da" />
							</g>
						)}
						<DioramaPlinth id={`${id}-p${i}`} cx={cx} cy={BASE + 2} rx={64} />
						<MiniTank id={`${id}-t${i}`} cx={cx} base={BASE} w={TW} h={TH} tint={tint} stroke={isDis && key > 0.5 ? TOK.amber : WATER.glass} strokeW={isDis && key > 0.5 ? 3 + idlePulse(frame) * 1.5 : 3}>
							{/* filtration: gravel + sand bed */}
							{i === 3 && (
								<>
									<rect x={cx - TW / 2} y={bot - 30} width={TW} height={34} fill="#9a958c" />
									{Array.from({length: 9}, (_, k) => <ellipse key={k} cx={cx - 48 + k * 12} cy={bot - 12 + (k % 2) * 6} rx={6} ry={4} fill="#b8b2a6" stroke="#857f74" strokeWidth={0.8} />)}
									<rect x={cx - TW / 2} y={bot - 62} width={TW} height={32} fill={WATER.sand} />
									{Array.from({length: 14}, (_, k) => <circle key={k} cx={cx - 50 + k * 7.5} cy={bot - 52 + (k % 3) * 8} r={1.6} fill={WATER.sandDark} />)}
								</>
							)}
							{/* particles */}
							{Array.from({length: 14}, (_, k) => {
								const w = wander(k, frame, cx - 44, cx + 44, surf + 8, bot - 8, 0.5, 10 + i);
								let x = w.x, y = w.y, r = 3.6;
								if (i === 0) {
									// destabilised: drift into pairs
									const mate = wander(k - (k % 2), frame, cx - 44, cx + 44, surf + 8, bot - 8, 0.5, 10 + i);
									x = w.x + (mate.x + (k % 2) * 7 - w.x) * p; y = w.y + (mate.y - w.y) * p;
								}
								if (i === 1) {
									// clumps grow: gather into 3 flocs
									const f = {x: cx + [-26, 24, -4][k % 3] + idleBob(frame, k % 3, 3), y: [surf + 34, surf + 50, bot - 26][k % 3] + idleBob(frame, (k % 3) + 4, 3)};
									const a = (k / 14) * Math.PI * 6;
									x = w.x + (f.x + Math.cos(a) * 9 - w.x) * p; y = w.y + (f.y + Math.sin(a) * 7 - w.y) * p; r = 3.6 + p * 0.6;
								}
								if (i === 2) {
									// clumps settle to the floor
									const sx = cx - 44 + (k / 13) * 88;
									x = w.x + (sx - w.x) * p; y = w.y + (bot - 5 - (k % 3) * 5 - w.y) * p;
								}
								if (i === 3) {
									// what's left is strained into the top of the sand
									if (k > 5) return null;
									const sx = cx - 40 + k * 16;
									x = w.x + (sx - w.x) * p; y = w.y + (bot - 60 + (k % 2) * 4 - w.y) * p;
								}
								if (i === 4) return null;
								return <Dot key={k} x={x} y={y} r={r} color={WATER.silt} />;
							})}
							{/* microbes: present until disinfection */}
							{Array.from({length: 3}, (_, k) => {
								const w = wander(k, frame, cx - 40, cx + 40, surf + 14, bot - (i === 3 ? 70 : 14), 0.6, 60 + i);
								const kill = isDis ? p : 0;
								return <Bacterium key={k} x={w.x} y={w.y} angle={k * 60 + frame * 0.4} s={0.9} opacity={1 - kill * 0.85} />;
							})}
							{/* chlorine drops in the last tank */}
							{isDis &&
								Array.from({length: 4}, (_, k) => {
									const y = surf - 20 + ((frame * 1.2 + k * 22) % 88);
									return <circle key={k} cx={cx + 20} cy={y} r={3.4} fill={CL} opacity={ramp(frame, tDis - 10, 14)} />;
								})}
						</MiniTank>
						{isDis && (
							<g opacity={ramp(frame, tDis - 10, 14)}>
								<rect x={cx + 11} y={surf - 44} width={18} height={24} rx={4} fill="#e6eef3" stroke="#8d949b" strokeWidth={1.5} />
								<text x={cx - 6} y={surf - 26} textAnchor="end" fill={TOK.ink} fontSize={16} fontWeight={800}>Cl₂</text>
							</g>
						)}
						{i === 0 && (
							<g opacity={ramp(frame, tClump - 20, 14)}>
								<rect x={cx + 11} y={surf - 44} width={18} height={24} rx={4} fill="#e6eef3" stroke="#8d949b" strokeWidth={1.5} />
								{[0, 1].map((k) => <circle key={k} cx={cx + 20} cy={surf - 14 + ((frame + k * 20) % 30)} r={3} fill="#f4f4ef" stroke="#c9c6bb" strokeWidth={1} />)}
								<text x={cx - 6} y={surf - 26} textAnchor="end" fill={TOK.ink} fontSize={16} fontWeight={800}>alum</text>
							</g>
						)}
						{i === 1 && (
							<g opacity={ramp(frame, tClump, 14)}>
								<line x1={cx} y1={surf - 24} x2={cx} y2={bot - 30} stroke="#6f777f" strokeWidth={3} />
								<rect x={cx - 18 * Math.abs(Math.cos(frame / 22))} y={bot - 44} width={36 * Math.abs(Math.cos(frame / 22)) + 2} height={22} rx={3} fill="#8d949b" />
							</g>
						)}
						<g opacity={ramp(frame, stageT[i], 16)}>
							<text x={cx} y={340} textAnchor="middle" fill={isDis && key > 0.5 ? TOK.amberInk : TOK.ink} fontSize={17} fontWeight={800}>{subs[i][0]}</text>
							<text x={cx} y={361} textAnchor="middle" fill={isDis && key > 0.5 ? TOK.amberInk : TOK.inkDim} fontSize={17} fontWeight={700}>{subs[i][1]}</text>
						</g>
					</g>
				);
			})}
			{/* multi-barrier bracket */}
			<g opacity={ramp(frame, tBar, 16)}>
				<path d="M 30 384 L 30 396 L 730 396 L 730 384" fill="none" stroke={accent} strokeWidth={2.5} />
				<text x={W / 2} y={424} textAnchor="middle" fill={accent} fontSize={19} fontWeight={800}>Multi-barrier: each stage targets a different risk</text>
			</g>
			<g opacity={key}>
				<rect x={W / 2 - 300} y={452} width={600} height={62} rx={16} fill="#ffffff" stroke={TOK.amber} strokeWidth={2.5 + idlePulse(frame) * 1.5} />
				<text x={W / 2} y={478} textAnchor="middle" fill={TOK.amberInk} fontSize={20} fontWeight={800}>Not “just adding chlorine”</text>
				<text x={W / 2} y={503} textAnchor="middle" fill={TOK.ink} fontSize={18} fontWeight={700}>Chlorination is only the final stage</text>
			</g>
		</>
	);
};

// ───────────────────────────────────────────── coag (concept-coagulation) ──
const CoagMode = ({id, frame, b}: ModeArgs) => {
	const [tPart, tAlum, tHyd, tEq, tAds, tFloc, tSed, tNote] = b;
	const xs = [140, 380, 620];
	const BW = 158, BH = 172, BASE = 318;
	const top = BASE - BH;
	const lvl = 0.8;
	const surf = BASE - BH * lvl;
	const hyd = ease(interpolate(frame, [tHyd, tHyd + 50], [0, 1], clamp));
	const ads = ease(interpolate(frame, [tAds, tAds + 60], [0, 1], clamp));
	const floc = ease(interpolate(frame, [tFloc, tFloc + 70], [0, 1], clamp));
	const sed = ease(interpolate(frame, [tSed, tSed + 70], [0, 1], clamp));
	const adsKey = ramp(frame, tAds, 16);
	const note = ramp(frame, tNote, 16);
	const blobs = [0, 1, 2, 3].map((j) => ({j}));
	const BLOB_AT = [{dx: -38, dy: 44}, {dx: 36, dy: 38}, {dx: -30, dy: 100}, {dx: 40, dy: 104}];
	const blobPos = (j: number, bx: number) => ({x: bx + BLOB_AT[j].dx + idleBob(frame, j, 3), y: surf + BLOB_AT[j].dy + idleBob(frame, j + 5, 3)});
	const FLOC_AT = [{dx: -44, dy: 44}, {dx: 42, dy: 52}, {dx: -36, dy: 106}];
	const names = [
		{t: 0, title: 'Coagulation', sub: 'Al(OH)₃ adsorbs particles'},
		{t: tFloc, title: 'Flocculation', sub: 'gentle mixing: flocs grow'},
		{t: tSed, title: 'Sedimentation', sub: 'flocs settle out'},
	];
	return (
		<>
			{/* equations */}
			<text x={W / 2} y={34} textAnchor="middle" fill={TOK.ink} fontSize={23} fontWeight={800} opacity={ramp(frame, tAlum, 16)}>
				Alum: Al₂(SO₄)₃ → 2Al³⁺ + 3SO₄²⁻
			</text>
			<g opacity={ramp(frame, tEq, 16)}>
				<text x={352} y={74} textAnchor="end" fill={TOK.ink} fontSize={25} fontWeight={800}>Al³⁺ + 3H₂O →</text>
				<text x={414} y={74} textAnchor="middle" fill={adsKey > 0.5 ? TOK.amberInk : TOK.ink} fontSize={25} fontWeight={800}>Al(OH)₃</text>
				<text x={466} y={74} fill={TOK.ink} fontSize={25} fontWeight={800}>+ 3H⁺</text>
				<text x={414} y={98} textAnchor="middle" fill={adsKey > 0.5 ? TOK.amberInk : TOK.inkDim} fontSize={16} fontWeight={800}>colloid</text>
			</g>

			{xs.map((bx, bi) => {
				const on = bi === 0 ? 1 : ramp(frame, names[bi].t - 20, 20);
				return (
					<g key={bi}>
						{bi > 0 && <Arrow x1={xs[bi - 1] + BW / 2 + 8} y1={BASE - 80} x2={bx - BW / 2 - 8} y2={BASE - 80} color={TOK.inkMute} width={3} head={11} progress={ramp(frame, names[bi].t - 20, 16)} />}
						<g opacity={0.35 + 0.65 * on}>
							<DioramaPlinth id={`${id}-p${bi}`} cx={bx} cy={BASE} rx={92} />
							<Beaker cx={bx} baseY={BASE} w={BW} h={BH} level={lvl} liquid={bi === 2 ? `rgba(140,200,234,${0.3 + 0.0 * sed})` : 'rgba(184,154,106,0.32)'}>
								{bi === 0 && (
									<>
										{/* Al³⁺ ions dropping in, then hydrolysing into Al(OH)₃ colloid */}
										{blobs.map(({j}) => {
											const p = blobPos(j, bx);
											const drop = ease(interpolate(frame, [tAlum + j * 8, tAlum + j * 8 + 30], [0, 1], clamp));
											const y = top + (p.y - top) * drop;
											return (
												<g key={j}>
													<circle cx={p.x} cy={y} r={7} fill="#c9c3d6" stroke="#8f879e" strokeWidth={1} opacity={(frame >= tAlum + j * 8 ? 1 : 0) * (1 - hyd)} />
													<Blob x={p.x} y={p.y} r={12 + 8 * hyd} seed={j} opacity={hyd} />
													{j === 1 && adsKey > 0 && <circle cx={p.x} cy={p.y} r={30 + idlePulse(frame) * 2} fill="none" stroke={TOK.amber} strokeWidth={2.5} opacity={adsKey} />}
												</g>
											);
										})}
										{Array.from({length: 16}, (_, k) => {
											const w = wander(k, frame, bx - 64, bx + 64, surf + 10, BASE - 12, 0.9, 20);
											const bp = blobPos(k % 4, bx);
											const a = (Math.floor(k / 4) / 4) * Math.PI * 2 + (k % 4);
											const tx = bp.x + Math.cos(a) * 17, ty = bp.y + Math.sin(a) * 14;
											return <Dot key={k} x={w.x + (tx - w.x) * ads} y={w.y + (ty - w.y) * ads} r={3.6} color={WATER.silt} opacity={ramp(frame, tPart - 30, 14)} />;
										})}
									</>
								)}
								{bi === 1 &&
									[0, 1, 2].map((f) => {
										const p = {x: bx + FLOC_AT[f].dx + idleBob(frame, f, 4), y: surf + FLOC_AT[f].dy + idleBob(frame, f + 3, 3)};
										return (
											<g key={f} opacity={floc}>
												<Blob x={p.x} y={p.y} r={14 + 10 * floc} seed={f} />
												{Array.from({length: 7}, (_, k) => {
													const a = k * 0.9 + f;
													const rr = (6 + (k % 3) * 5) * (0.6 + 0.4 * floc);
													return <Dot key={k} x={p.x + Math.cos(a) * rr} y={p.y + Math.sin(a) * rr * 0.85} r={3.4} color={WATER.silt} />;
												})}
											</g>
										);
									})}
								{bi === 1 && (
									<g opacity={ramp(frame, tFloc - 10, 14)}>
										<line x1={bx + 20} y1={top - 12} x2={bx + 20} y2={BASE - 50} stroke="#6f777f" strokeWidth={3} />
										<rect x={bx + 20 - 16 * Math.abs(Math.cos(frame / 26))} y={BASE - 62} width={32 * Math.abs(Math.cos(frame / 26)) + 2} height={24} rx={3} fill="#8d949b" />
									</g>
								)}
								{bi === 2 &&
									[0, 1, 2].map((f) => {
										const p = {x: bx + FLOC_AT[f].dx, y: surf + FLOC_AT[f].dy};
										const fx = bx - 42 + f * 42;
										const x = p.x + (fx - p.x) * sed;
										const y = p.y + (BASE - 22 - p.y) * sed;
										return (
											<g key={f} opacity={ramp(frame, tSed - 20, 16)}>
												<Blob x={x} y={y} r={22 - 4 * sed} seed={f} />
												{Array.from({length: 7}, (_, k) => {
													const a = k * 0.9 + f;
													const rr = 6 + (k % 3) * 5;
													return <Dot key={k} x={x + Math.cos(a) * rr} y={y + Math.sin(a) * rr * (0.85 - 0.4 * sed)} r={3.4} color={WATER.silt} />;
												})}
											</g>
										);
									})}
								{/* microbes: not the target of coagulation */}
								{Array.from({length: 3}, (_, k) => {
									const w = wander(k, frame, bx - 60, bx + 60, surf + 12, BASE - 50, 0.6, 70 + bi);
									return <Bacterium key={`m${k}`} x={w.x} y={w.y} angle={k * 70 + frame * 0.4} s={bi === 2 ? 1 + note * 0.15 * idlePulse(frame) : 1} opacity={bi === 0 ? ramp(frame, tPart - 30, 14) : on} />;
								})}
							</Beaker>
						</g>
						<g opacity={bi === 0 ? ramp(frame, tAlum, 16) : on}>
							<text x={bx} y={396} textAnchor="middle" fill={TOK.ink} fontSize={20} fontWeight={800}>{bi + 1} {names[bi].title}</text>
							<text x={bx} y={420} textAnchor="middle" fill={bi === 0 ? (adsKey > 0.5 ? TOK.amberInk : TOK.inkDim) : TOK.inkDim} fontSize={16} fontWeight={bi === 0 && adsKey > 0.5 ? 800 : 700} opacity={bi === 0 ? adsKey : 1}>
								{names[bi].sub}
							</text>
						</g>
					</g>
				);
			})}
			{/* alum dosing */}
			<g opacity={ramp(frame, tAlum - 10, 14) * (1 - ramp(frame, tHyd + 60, 20))}>
				<text x={xs[0] - 34} y={top - 14} textAnchor="end" fill={TOK.ink} fontSize={18} fontWeight={800}>Al³⁺</text>
				<Arrow x1={xs[0] - 26} y1={top - 34} x2={xs[0] - 6} y2={top + 16} color={TOK.inkMute} width={2.5} head={9} />
			</g>
			<g opacity={ramp(frame, tPart, 16) * (1 - ramp(frame, tAlum - 14, 14))}>
				<text x={xs[0] + 94} y={top - 6} fill={TOK.inkDim} fontSize={17} fontWeight={800}>tiny, stable particles</text>
			</g>
			<g opacity={note}>
				<Bacterium x={W / 2 - 250} y={482} s={1.2} angle={-15} />
				<text x={W / 2 + 12} y={489} textAnchor="middle" fill={TOK.ink} fontSize={19} fontWeight={800}>
					Coagulation removes particles, not mainly microbes
				</text>
			</g>
		</>
	);
};

// ───────────────────────────────────────────── filter (concept-filtration) ──
const FilterMode = ({id, frame, b, accent}: ModeArgs) => {
	const [tSand, tCarbon, tOrg, tDbp, tFirst] = b;
	const X0 = 50, X1 = 226, TOP = 76, BASE = 424;
	const yCarbon = 176, ySand = 250, yGravel = 330, yDrain = 392;
	const cx = (X0 + X1) / 2;
	const carbonOn = ramp(frame, tCarbon - 10, 16);
	const first = ramp(frame, tFirst, 16);
	// falling items: particles (trapped in sand/gravel from tSand) and organics (caught by carbon from tCarbon)
	const items: {x: number; y: number; kind: 'p' | 'o'; op: number}[] = [];
	const add = (kind: 'p' | 'o', n: number, start: number, gap: number, seed: number) => {
		for (let k = 0; k < n; k++) {
			const emit = start + k * gap;
			if (frame < emit) continue;
			const x = X0 + 18 + hash01(seed + k * 7) * (X1 - X0 - 36);
			const speed = 1.5;
			let y = TOP + 22 + (frame - emit) * speed;
			let op = 1;
			const arriveCarbon = emit + (yCarbon - TOP - 22) / speed;
			if (kind === 'p') {
				const stop = ySand + 6 + hash01(seed + k * 3) * (yGravel - ySand + 30);
				y = Math.min(y, stop);
			} else if (arriveCarbon > tCarbon) {
				const stop = yCarbon + 8 + hash01(seed + k * 3) * (ySand - yCarbon - 18);
				y = Math.min(y, stop);
			} else if (y > BASE - 16) {
				op = 1 - ramp(y, BASE - 16, 20);
				y = Math.min(y, BASE - 6);
			}
			items.push({x: x + (y < yCarbon ? Math.sin(frame / 14 + k) * 3 : 0), y, kind, op});
		}
	};
	add('p', 22, 0, 13, 3);
	add('o', 20, 20, 16, 11);
	const clip = `${id}-col`;
	return (
		<>
			{/* legend */}
			<g opacity={ramp(frame, 0)}>
				<Dot x={60} y={30} r={6} color={WATER.silt} />
				<text x={74} y={37} fill={TOK.ink} fontSize={19} fontWeight={800}>particles</text>
				<Dot x={200} y={30} r={6} color={ORG} />
				<text x={214} y={37} fill={TOK.ink} fontSize={19} fontWeight={800}>dissolved organics</text>
			</g>

			<DioramaPlinth id={`${id}-p`} cx={cx + 6} cy={BASE + 4} rx={120} />
			<defs>
				<clipPath id={clip}>
					<rect x={X0 + 3} y={TOP + 20} width={X1 - X0 - 6} height={BASE - TOP - 23} rx={10} />
				</clipPath>
			</defs>
			<ellipse cx={cx + 8} cy={BASE + 5} rx={(X1 - X0) * 0.55} ry={8} fill="rgba(40,36,30,0.2)" />
			<rect x={X0} y={TOP} width={X1 - X0} height={BASE - TOP} rx={12} fill="rgba(235,244,250,0.6)" />
			<g clipPath={`url(#${clip})`}>
				<rect x={X0} y={TOP + 20} width={X1 - X0} height={yCarbon - TOP - 20} fill="#8cc8ea" opacity={0.45} />
				{/* activated carbon */}
				<rect x={X0} y={yCarbon} width={X1 - X0} height={ySand - yCarbon} fill="#3a3a3c" opacity={0.25 + 0.75 * carbonOn} />
				{Array.from({length: 26}, (_, k) => (
					<rect key={k} x={X0 + 8 + (k % 9) * 19 + hash01(k) * 6} y={yCarbon + 8 + Math.floor(k / 9) * 22 + hash01(k + 3) * 6} width={11} height={8} rx={2} fill="#1f1f21" transform={`rotate(${hash01(k + 5) * 60} ${X0 + 14 + (k % 9) * 19} ${yCarbon + 12 + Math.floor(k / 9) * 22})`} opacity={0.3 + 0.7 * carbonOn} />
				))}
				{/* sand */}
				<rect x={X0} y={ySand} width={X1 - X0} height={yGravel - ySand} fill={WATER.sand} />
				{Array.from({length: 40}, (_, k) => <circle key={k} cx={X0 + 6 + (k % 13) * 13.5 + hash01(k) * 4} cy={ySand + 8 + Math.floor(k / 13) * 22 + hash01(k + 2) * 8} r={2} fill={WATER.sandDark} />)}
				{/* gravel */}
				<rect x={X0} y={yGravel} width={X1 - X0} height={yDrain - yGravel} fill="#a39d92" />
				{Array.from({length: 18}, (_, k) => <ellipse key={k} cx={X0 + 12 + (k % 7) * 25 + hash01(k) * 6} cy={yGravel + 12 + Math.floor(k / 7) * 20} rx={10} ry={7} fill="#c0baae" stroke="#857f74" strokeWidth={1} />)}
				<rect x={X0} y={yDrain} width={X1 - X0} height={BASE - yDrain} fill="#8cc8ea" opacity={0.5} />
				{items.map((it, k) => (
					<Dot key={k} x={it.x} y={it.y} r={it.kind === 'p' ? 4.6 : 3.8} color={it.kind === 'p' ? WATER.silt : ORG} opacity={it.op} />
				))}
			</g>
			<line x1={X0 + 3} y1={TOP + 20} x2={X1 - 3} y2={TOP + 20} stroke="#ffffff" strokeWidth={2} />
			<rect x={X0} y={TOP} width={X1 - X0} height={BASE - TOP} rx={12} fill="none" stroke={WATER.glass} strokeWidth={3} />
			<rect x={X0 + 8} y={TOP + 14} width={6} height={BASE - TOP - 40} rx={3} fill="#ffffff" opacity={0.45} />
			<Arrow x1={cx} y1={TOP - 22} x2={cx} y2={TOP + 12} color={WATER.cleanDeep} width={4} head={11} opacity={ramp(frame, 0)} />

			{/* layer labels */}
			<g opacity={carbonOn}>
				<line x1={X1 + 4} y1={(yCarbon + ySand) / 2} x2={X1 + 18} y2={(yCarbon + ySand) / 2} stroke={TOK.inkMute} strokeWidth={2} />
				<text x={X1 + 24} y={(yCarbon + ySand) / 2 - 4} fill={TOK.ink} fontSize={19} fontWeight={800}>Activated carbon</text>
				<text x={X1 + 24} y={(yCarbon + ySand) / 2 + 18} fill={TOK.inkDim} fontSize={16} fontWeight={700}>adsorbs organics</text>
			</g>
			<g opacity={ramp(frame, tSand - 10, 16)}>
				<path d={`M ${X1 + 8} ${ySand + 4} L ${X1 + 16} ${ySand + 4} L ${X1 + 16} ${yDrain - 4} L ${X1 + 8} ${yDrain - 4}`} fill="none" stroke={TOK.inkMute} strokeWidth={2} />
				<text x={X1 + 24} y={(ySand + yDrain) / 2 - 4} fill={TOK.ink} fontSize={19} fontWeight={800}>Sand + gravel</text>
				<text x={X1 + 24} y={(ySand + yDrain) / 2 + 18} fill={TOK.inkDim} fontSize={16} fontWeight={700}>trap particles</text>
			</g>

			{/* why it matters: organics + chlorine */}
			<g opacity={ramp(frame, tOrg, 16)}>
				<rect x={450} y={84} width={296} height={128} rx={16} fill="#ffffff" stroke={TOK.rule} strokeWidth={2} />
				<text x={598} y={114} textAnchor="middle" fill={TOK.ink} fontSize={18} fontWeight={800}>Organics left in the water</text>
				{[0, 1, 2].map((k) => <Dot key={k} x={478 + (k % 2) * 12} y={158 + (k === 2 ? 12 : 0) + idleBob(frame, k, 1)} r={5} color={ORG} />)}
				<g opacity={ramp(frame, tDbp, 16)}>
					<text x={510} y={170} textAnchor="middle" fill={TOK.ink} fontSize={20} fontWeight={800}>+</text>
					<Cl2 x={540} y={163} />
					<text x={540} y={196} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={700}>chlorine</text>
					<text x={572} y={170} textAnchor="middle" fill={TOK.ink} fontSize={20} fontWeight={800}>→</text>
					<text x={590} y={160} fill={TOK.ink} fontSize={17} fontWeight={800}>disinfection</text>
					<text x={590} y={181} fill={TOK.ink} fontSize={17} fontWeight={800}>by-products</text>
					<Mark x={722} y={164} ok={false} size={13} />
				</g>
			</g>
			<g opacity={first}>
				<rect x={450} y={228} width={296} height={110} rx={16} fill="#ffffff" stroke={TOK.rule} strokeWidth={2} />
				<text x={598} y={258} textAnchor="middle" fill={TOK.ink} fontSize={18} fontWeight={800}>Organics removed first</text>
				<Cl2 x={500} y={296} />
				<text x={532} y={303} textAnchor="middle" fill={TOK.ink} fontSize={20} fontWeight={800}>→</text>
				<text x={552} y={293} fill={TOK.ink} fontSize={17} fontWeight={800}>fewer</text>
				<text x={552} y={314} fill={TOK.ink} fontSize={17} fontWeight={800}>by-products</text>
				<Mark x={722} y={298} ok size={13} color={accent} />
				<Tag x={598} y={396} lines={['Remove organics', 'before chlorination']} color={TOK.amber} textColor={TOK.amberInk} subColor={TOK.amberInk} size={21} strokeWidth={2.5 + idlePulse(frame) * 1.5} />
			</g>
		</>
	);
};

export const TreatmentDiagram = ({delay = 62, mode = 'train', beats}: TreatmentProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const b = beats && beats.length >= DEFAULT_BEATS[mode].length ? beats : DEFAULT_BEATS[mode];
	const id = `c12m8tr${mode}`;
	const args: ModeArgs = {id, frame, fps, b, accent: theme.accent};
	const labels: Record<TreatmentMode, string> = {
		train: 'Water treatment train: coagulation, flocculation, sedimentation, filtration, then disinfection as the final stage',
		coag: 'Alum provides Al³⁺, which hydrolyses to an Al(OH)₃ colloid that adsorbs particles; flocs grow and settle',
		filter: 'Filter bed: activated carbon adsorbs dissolved organics, sand and gravel trap particles; removing organics before chlorination means fewer by-products',
	};
	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={labels[mode]} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={id} elements={[]} />
			{mode === 'train' && <TrainMode {...args} />}
			{mode === 'coag' && <CoagMode {...args} />}
			{mode === 'filter' && <FilterMode {...args} />}
		</svg>
	);
};
