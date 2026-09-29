// SectionsDiagram (bio11m2Sections) — what microscope sections of leaf, stem
// and root show, and what each structure does.
//
// celery    A celery stalk stands in red dye; the dye climbs in strands. At
//           `cut` a cross-section appears: discrete red dots (stained xylem)
//           near the outer edge, with the phloem beside each one unstained.
// leaf      A leaf cross-section: waxy cuticle, upper epidermis, palisade
//           mesophyll, spongy mesophyll with air spaces, a vein (xylem above
//           phloem) and the lower epidermis with a stoma between guard cells.
//           At `gas` CO₂ diffuses in through the stoma and O₂ and water vapour
//           diffuse out.
// stemroot  A stem section (ring of vascular bundles, xylem towards the centre,
//           phloem towards the outside) and a root section (central xylem star
//           with phloem between its arms, root hairs on the epidermis). At
//           `stain` the xylem goes red; at `water` soil water moves into a root
//           hair and across to the xylem.
// Tags point at parts on their beats. All text from props. Hold: gases and
// water keep moving; the celery dye glints.

import type {ReactNode} from 'react';
import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idlePulse} from '../../diorama';
import {COL, GLOSS, GlossDefs, H, Notes, Tag, Title, Token, W, clamp, fadeAt, mix, popAt, type Note, type Tone} from './shared';

type Anchor =
	| 'stalk' | 'dots' | 'phloemC'
	| 'cuticle' | 'upper' | 'palisade' | 'spongy' | 'airspace' | 'stoma' | 'guard' | 'vein' | 'veinX' | 'veinP'
	| 'stem' | 'xylemS' | 'phloemS' | 'root' | 'xylemR' | 'phloemR' | 'roothair';
export type SectionsProps = {
	mode?: 'celery' | 'leaf' | 'stemroot';
	title?: string;
	at?: number;
	rise?: number;
	cut?: number;
	gas?: number;
	stain?: number;
	water?: number;
	headings?: {text: string; at: number}[];
	tags?: {text: string; at: number; anchor: Anchor; x?: number; y?: number; tone?: Tone}[];
	notes?: Note[];
	delay?: number;
};

const ID = 'b11m2sec';
const OFF = 1e9;

export const SectionsDiagram = ({mode = 'leaf', title, at = 0, rise = OFF, cut = OFF, gas = OFF, stain = OFF, water = OFF, headings = [], tags = [], notes = [], delay = 62}: SectionsProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const top = title ? 48 : 8;
	const on = Math.min(1, popAt(frame, fps, at) * 1.3);
	const anchors: Partial<Record<Anchor, {x: number; y: number}>> = {};
	let body: ReactNode = null;

	if (mode === 'celery') {
		const bx = 170;
		const bBot = top + 400;
		const riseT = interpolate(frame, [rise, rise + 120], [0, 1], clamp);
		const stalkTop = top + 60;
		const cutOn = fadeAt(frame, cut, 18);
		const sx = 530;
		const sy = top + 230;
		const bundles = Array.from({length: 9}, (_, k) => {
			const th = Math.PI * (0.08 + (k / 8) * 0.84);
			return {x: sx - Math.cos(th) * 138, y: sy + Math.sin(th) * 62 - 34};
		});
		anchors.stalk = {x: bx + 10, y: top + 200};
		anchors.dots = bundles[4];
		anchors.phloemC = {x: bundles[6].x + 3, y: bundles[6].y + 14};
		body = (
			<g opacity={on}>
				<DioramaPlinth id={`${ID}b`} cx={bx} cy={bBot + 8} rx={110} />
				<rect x={bx - 60} y={bBot - 120} width={120} height={120} fill="#e98a8a" opacity={0.75} />
				<path d={`M ${bx - 60} ${bBot - 150} L ${bx - 60} ${bBot} L ${bx + 60} ${bBot} L ${bx + 60} ${bBot - 150}`} fill="none" stroke="#8fa9b6" strokeWidth={3} />
				<path d={`M ${bx - 22} ${bBot - 10} L ${bx - 26} ${stalkTop + 40} Q ${bx} ${stalkTop + 30} ${bx + 26} ${stalkTop + 40} L ${bx + 22} ${bBot - 10} Z`} fill="#b9dc8a" stroke="#6f9a3a" strokeWidth={2} />
				{[-14, -5, 5, 14].map((dx, k) => (
					<line key={k} x1={bx + dx} y1={bBot - 12} x2={bx + dx * 1.1} y2={bBot - 12 - riseT * (bBot - stalkTop - 60)} stroke={COL.dye} strokeWidth={3} strokeLinecap="round" opacity={0.85} />
				))}
				{[-1, 0, 1].map((s) => <ellipse key={s} cx={bx + s * 26} cy={stalkTop + 22 - Math.abs(s) * -6} rx={22} ry={14} fill={COL.leaf} stroke={COL.leafDark} strokeWidth={1.3} />)}
				<g opacity={cutOn}>
					<DioramaPlinth id={`${ID}s`} cx={sx} cy={sy + 110} rx={170} />
					<path d={`M ${sx - 165} ${sy - 30} Q ${sx} ${sy + 150} ${sx + 165} ${sy - 30} Q ${sx + 120} ${sy - 10} ${sx + 70} ${sy - 18} Q ${sx} ${sy - 30} ${sx - 70} ${sy - 18} Q ${sx - 120} ${sy - 10} ${sx - 165} ${sy - 30} Z`} fill="#d9eec0" stroke="#6f9a3a" strokeWidth={2.5} />
					{bundles.map((p, k) => (
						<g key={k}>
							<ellipse cx={p.x} cy={p.y + 13} rx={10} ry={6} fill="#f4f7e8" stroke="#9fbf7a" strokeWidth={1} />
							<circle cx={p.x} cy={p.y} r={8} fill={COL.dye} opacity={0.75 + 0.25 * idlePulse(frame + k * 5)} />
						</g>
					))}
				</g>
			</g>
		);
	}

	if (mode === 'leaf') {
		const x0 = 40;
		const x1 = 720;
		const y0 = top + 60;
		const cutH = 10;
		const epiH = 26;
		const palH = 90;
		const spH = 100;
		const yUE = y0 + cutH;
		const yPal = yUE + epiH;
		const ySp = yPal + palH;
		const yLE = ySp + spH;
		const stX = 470;
		const veinX = 230;
		const gasOn = fadeAt(frame, gas, 14);
		anchors.cuticle = {x: 620, y: y0 + 4};
		anchors.upper = {x: 640, y: yUE + 13};
		anchors.palisade = {x: 120, y: yPal + 45};
		anchors.spongy = {x: 640, y: ySp + 40};
		anchors.airspace = {x: 520, y: ySp + 60};
		anchors.stoma = {x: stX, y: yLE + 14};
		anchors.guard = {x: stX + 20, y: yLE + 14};
		anchors.vein = {x: veinX, y: ySp + 30};
		anchors.veinX = {x: veinX, y: ySp + 10};
		anchors.veinP = {x: veinX, y: ySp + 52};
		body = (
			<g opacity={on}>
				<g transform={`translate(0 ${yLE + 50}) scale(1 0.45) translate(0 ${-(yLE + 50)})`}>
					<DioramaPlinth id={`${ID}l`} cx={(x0 + x1) / 2} cy={yLE + 50} rx={(x1 - x0) / 2 + 20} />
				</g>
				<rect x={x0} y={y0} width={x1 - x0} height={yLE + epiH - y0} fill="#f3f8ea" />
				<rect x={x0} y={y0} width={x1 - x0} height={cutH} fill="#f0e6a0" opacity={0.9} />
				{Array.from({length: 17}, (_, k) => <rect key={`ue${k}`} x={x0 + k * 40} y={yUE} width={40} height={epiH} fill="#eef5ea" stroke="#9fbf7a" strokeWidth={1.2} />)}
				{Array.from({length: 23}, (_, k) => (
					<g key={`p${k}`}>
						<rect x={x0 + 4 + k * 29.5} y={yPal + 3} width={25} height={palH - 6} rx={8} fill="#dff0c8" stroke={COL.leafDark} strokeWidth={1.1} />
						{[0, 1, 2, 3].map((j) => <ellipse key={j} cx={x0 + 16.5 + k * 29.5 + (j % 2 ? 4 : -4)} cy={yPal + 16 + j * 19} rx={4} ry={3} fill={`url(#${ID}-ball-chloro)`} />)}
					</g>
				))}
				{Array.from({length: 14}, (_, k) => {
					const x = x0 + 30 + k * 49;
					if (Math.abs(x - veinX) < 50 || Math.abs(x - stX) < 30) return null;
					return <ellipse key={`s${k}`} cx={x} cy={ySp + (k % 2 ? 30 : 68)} rx={22} ry={18} fill="#e3f1cf" stroke={COL.leafDark} strokeWidth={1.1} />;
				})}
				{/* vein */}
				<circle cx={veinX} cy={ySp + 32} r={40} fill="#f4efe0" stroke="#b8a070" strokeWidth={1.5} />
				{[-16, 0, 16].map((dx) => <circle key={dx} cx={veinX + dx} cy={ySp + 18} r={7} fill={mix('#ffffff', COL.xylem, 0.55)} stroke={COL.lignin} strokeWidth={2} />)}
				{[-12, 4, 18].map((dx) => <circle key={dx} cx={veinX + dx - 3} cy={ySp + 50} r={5} fill="#f6d9a8" stroke="#c8943a" strokeWidth={1} />)}
				{/* lower epidermis + stoma */}
				{Array.from({length: 17}, (_, k) => {
					const x = x0 + k * 40;
					if (Math.abs(x + 20 - stX) < 34) return null;
					return <rect key={`le${k}`} x={x} y={yLE} width={40} height={epiH} fill="#eef5ea" stroke="#9fbf7a" strokeWidth={1.2} />;
				})}
				{[-1, 1].map((s) => <ellipse key={s} cx={stX + s * 14} cy={yLE + 13} rx={11} ry={13} fill={`url(#${ID}-ball-leaf)`} stroke={COL.leafDark} strokeWidth={1.2} />)}
				{gasOn > 0 && [0, 1, 2].map((k) => {
					const t = ((frame * 0.01 + k / 3) % 1);
					return (
						<g key={k} opacity={gasOn}>
							<Token id={ID} name="co2" x={stX - 40 + t * 40} y={yLE + 90 - t * 110} r={12} label="CO₂" size={9} opacity={Math.sin(t * Math.PI)} />
							<Token id={ID} name="o2" x={stX + 20 + t * 50} y={yLE - 20 + t * 110} r={11} label="O₂" size={9} opacity={Math.sin(t * Math.PI)} />
							<Token id={ID} name="water" x={stX + 5 + t * 10} y={yLE - 10 + ((t + 0.5) % 1) * 110} r={11} label="H₂O" size={8} opacity={Math.sin(((t + 0.5) % 1) * Math.PI)} />
						</g>
					);
				})}
			</g>
		);
	}

	if (mode === 'stemroot') {
		const s = {x: 200, y: top + 210, r: 130};
		const r = {x: 560, y: top + 210, r: 120};
		const st = fadeAt(frame, stain, 20);
		const xylCol = mix('#e9dfc9', COL.dye, st * 0.85);
		const wOn = fadeAt(frame, water, 14);
		anchors.stem = {x: s.x, y: s.y - s.r};
		anchors.xylemS = {x: s.x + Math.cos(-0.3) * s.r * 0.6, y: s.y + Math.sin(-0.3) * s.r * 0.6};
		anchors.phloemS = {x: s.x + Math.cos(0.5) * s.r * 0.82, y: s.y + Math.sin(0.5) * s.r * 0.82};
		anchors.root = {x: r.x, y: r.y - r.r};
		anchors.xylemR = {x: r.x + 16, y: r.y - 16};
		anchors.phloemR = {x: r.x + 22, y: r.y + 22};
		anchors.roothair = {x: r.x + r.r + 30, y: r.y + 20};
		body = (
			<g opacity={on}>
				<DioramaPlinth id={`${ID}s`} cx={s.x} cy={s.y + s.r * 0.72} rx={s.r + 20} />
				<DioramaPlinth id={`${ID}r`} cx={r.x} cy={r.y + r.r * 0.72} rx={r.r + 30} />
				{/* stem */}
				<circle cx={s.x} cy={s.y} r={s.r} fill="#e7f3d6" stroke="#6f9a3a" strokeWidth={4} />
				{Array.from({length: 8}, (_, k) => {
					const th = (k / 8) * Math.PI * 2 - 0.3;
					const bx = s.x + Math.cos(th) * s.r * 0.66;
					const by = s.y + Math.sin(th) * s.r * 0.66;
					const deg = (th * 180) / Math.PI;
					return (
						<g key={k} transform={`rotate(${deg + 90} ${bx} ${by})`}>
							<ellipse cx={bx} cy={by} rx={16} ry={26} fill="#f4efe0" stroke="#b8a070" strokeWidth={1.2} />
							<ellipse cx={bx} cy={by - 12} rx={11} ry={8} fill="#f6d9a8" stroke="#c8943a" strokeWidth={1} />
							<ellipse cx={bx} cy={by + 8} rx={11} ry={12} fill={xylCol} stroke={COL.lignin} strokeWidth={1.5} />
						</g>
					);
				})}
				{/* root */}
				<circle cx={r.x} cy={r.y} r={r.r} fill="#f3ead6" stroke="#b8a070" strokeWidth={4} />
				{Array.from({length: 7}, (_, k) => {
					const th = -0.9 + k * 0.3;
					return <line key={k} x1={r.x + Math.cos(th) * r.r} y1={r.y + Math.sin(th) * r.r} x2={r.x + Math.cos(th) * (r.r + 40)} y2={r.y + Math.sin(th) * (r.r + 40)} stroke="#b8a070" strokeWidth={4} strokeLinecap="round" />;
				})}
				<circle cx={r.x} cy={r.y} r={48} fill="#f4efe0" stroke="#8a7a50" strokeWidth={2} />
				<path d={`M ${r.x - 38} ${r.y} L ${r.x + 38} ${r.y} M ${r.x} ${r.y - 38} L ${r.x} ${r.y + 38}`} stroke={xylCol} strokeWidth={16} strokeLinecap="round" />
				<path d={`M ${r.x - 38} ${r.y} L ${r.x + 38} ${r.y} M ${r.x} ${r.y - 38} L ${r.x} ${r.y + 38}`} stroke={COL.lignin} strokeWidth={1.5} fill="none" opacity={0.5} />
				{[[1, 1], [1, -1], [-1, 1], [-1, -1]].map(([a, b], k) => <ellipse key={k} cx={r.x + a * 22} cy={r.y + b * 22} rx={9} ry={9} fill="#f6d9a8" stroke="#c8943a" strokeWidth={1} />)}
				{wOn > 0 && Array.from({length: 5}, (_, k) => {
					const t = ((frame * 0.009 + k / 5) % 1);
					const th = -0.3;
					const R0 = r.r + 60;
					const Rt = R0 - t * (R0 - 20);
					return <circle key={k} cx={r.x + Math.cos(th) * Rt} cy={r.y + Math.sin(th) * Rt} r={5} fill={`url(#${ID}-ball-water)`} opacity={wOn * Math.min(1, Math.sin(t * Math.PI) * 3)} />;
				})}
			</g>
		);
	}

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={title ?? 'Plant sections'} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={GLOSS} />
			{title && <Title text={title} opacity={fadeAt(frame, 0)} />}
			{body}
			{headings.map((h, i) => (
				<text key={i} x={mode === 'stemroot' ? (i === 0 ? 200 : 560) : mode === 'celery' ? (i === 0 ? 170 : 530) : W / 2} y={top + 22} textAnchor="middle" fill={theme.accent} fontSize={21} fontWeight={800} opacity={fadeAt(frame, h.at)}>{h.text}</text>
			))}
			{tags.map((t, i) => {
				const a = anchors[t.anchor];
				if (!a) return null;
				return <Tag key={i} frame={frame} fps={fps} at={t.at} x={t.x ?? a.x} y={t.y ?? a.y + 60} text={t.text} tone={t.tone} accent={theme.accent} tx={a.x} ty={a.y} size={18} />;
			})}
			<Notes frame={frame} notes={notes} />
		</svg>
	);
};
