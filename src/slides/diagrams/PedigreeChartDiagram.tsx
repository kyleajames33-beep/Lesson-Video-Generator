// PedigreeChartDiagram — a 3-generation family pedigree in the diorama family.
// Squares = male, circles = female; a filled shape = affected. A horizontal
// line joins a mating pair; a vertical drop from the pair connects to a
// sibship line above the offspring. Fixed, clean teaching example (not
// data-driven).
//
//   Gen I:   ■──○        (affected father × unaffected mother)
//   Gen II:  ○  ■──○  □   (3 children; the affected son and his unaffected mate)
//   Gen III:    □  ●       (2 grandchildren, one affected)
//
// Affected in every generation (I father, II son, III daughter), the
// autosomal-dominant pattern the scene's narration describes. (The legacy
// comment drew the Gen II mate as affected; the code never did.)
//
// Each generation stands on its own stone shelf; symbols are glossy painted
// tokens (affected in the subject accent, unaffected in white). A generation
// lands, then the lines that lead to the next draw on. In the hold the
// affected tokens breathe gently: they carry the pattern the scene is about.
//
// Beat plan (frames after the card appears):
//   0    shelves + generation labels
//   8+   generation I, lines, generation II, lines, generation III
//   ~110 legend

import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {FONT_DISPLAY, TOK} from '../../styles/tokens';
import {useAccent} from '../../styles/theme';
import {STONE, idlePulse} from './diorama';
import {clamp, shade} from './kinds/restyle-generic/paint';
import {buildStart, sceneTimingFor} from './kinds/restyle-generic/sceneSync';

type Sym = {x: number; y: number; sex: 'm' | 'f'; affected: boolean; start: number};

const ID = 'pedigree';

export const PedigreeChartDiagram = ({delay}: {delay?: number}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const start = buildStart(delay, sceneTimingFor('pedigree', 'pedigree'));
	const f = frame - start;

	const R = 25;
	const G1 = 100, G2 = 240, G3 = 380;

	// Generation I: founding couple.
	const I_father = {x: 250, y: G1, sex: 'm' as const, affected: true, start: 8};
	const I_mother = {x: 360, y: G1, sex: 'f' as const, affected: false, start: 13};

	// Generation II: three children of the founders, plus one mate.
	const II_a = {x: 175, y: G2, sex: 'f' as const, affected: false, start: 40};
	const II_b = {x: 305, y: G2, sex: 'm' as const, affected: true, start: 45}; // mates in
	const II_spouse = {x: 415, y: G2, sex: 'f' as const, affected: false, start: 50};
	const II_c = {x: 545, y: G2, sex: 'm' as const, affected: false, start: 55};

	// Generation III: children of II_b × II_spouse.
	const III_a = {x: 305, y: G3, sex: 'm' as const, affected: false, start: 90};
	const III_b = {x: 415, y: G3, sex: 'f' as const, affected: true, start: 95};

	const symbols: Sym[] = [I_father, I_mother, II_a, II_b, II_spouse, II_c, III_a, III_b];

	const lineDraw = (d: number) => interpolate(f, [d, d + 14], [0, 1], clamp);
	const hold = interpolate(f, [120, 150], [0, 1], clamp);
	const line = {stroke: TOK.inkDim, strokeWidth: 3, strokeLinecap: 'round' as const};

	const renderSym = (s: Sym, key: string, i: number) => {
		const pop = Math.max(0, spring({frame: f - s.start, fps, config: {damping: 13, stiffness: 220, mass: 0.7}}));
		const breathe = s.affected ? 1 + 0.06 * idlePulse(frame + i * 11, 64) * hold : 1;
		const fill = s.affected ? `url(#${ID}-aff)` : `url(#${ID}-unaff)`;
		const stroke = s.affected ? shade(theme.accent, -0.2) : TOK.inkDim;
		return (
			<g key={key} transform={`translate(${s.x} ${s.y}) scale(${pop * breathe})`} opacity={interpolate(pop, [0, 0.3], [0, 1], clamp)}>
				{/* contact shadow on the shelf */}
				<ellipse cx={3} cy={R + 3} rx={R * 0.95} ry={4} fill={STONE.shadow} />
				{s.sex === 'm' ? (
					<rect x={-R} y={-R} width={2 * R} height={2 * R} rx={5} fill={fill} stroke={stroke} strokeWidth={3} />
				) : (
					<circle cx={0} cy={0} r={R} fill={fill} stroke={stroke} strokeWidth={3} />
				)}
				{/* gloss */}
				<ellipse cx={-R * 0.35} cy={-R * 0.45} rx={R * 0.38} ry={R * 0.2} fill="#ffffff" opacity={s.affected ? 0.35 : 0.8} />
			</g>
		);
	};

	const shelf = (y: number, x0: number, x1: number, o: number) => (
		<g opacity={o}>
			<rect x={x0} y={y + R + 4} width={x1 - x0} height={12} rx={6} fill={STONE.top} stroke={STONE.topEdge} strokeWidth={1.5} />
			<rect x={x0 + 4} y={y + R + 14} width={x1 - x0 - 8} height={6} rx={3} fill={STONE.sideDark} opacity={0.6} />
		</g>
	);

	return (
		<svg viewBox="0 0 720 490" role="img" aria-label="Three-generation family pedigree chart" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<defs>
				<radialGradient id={`${ID}-aff`} cx="35%" cy="30%" r="80%">
					<stop offset="0%" stopColor={shade(theme.accent2, 0.15)} />
					<stop offset="70%" stopColor={theme.accent} />
					<stop offset="100%" stopColor={shade(theme.accent, -0.15)} />
				</radialGradient>
				<radialGradient id={`${ID}-unaff`} cx="35%" cy="30%" r="80%">
					<stop offset="0%" stopColor="#ffffff" />
					<stop offset="100%" stopColor="#e9e7e2" />
				</radialGradient>
			</defs>

			{/* generation labels + shelves */}
			<g fontWeight={800} fontSize={22} fill={TOK.inkDim} opacity={interpolate(f, [0, 12], [0, 1], clamp)}>
				<text x={52} y={G1 + 8} textAnchor="middle">I</text>
				<text x={52} y={G2 + 8} textAnchor="middle">II</text>
				<text x={52} y={G3 + 8} textAnchor="middle">III</text>
			</g>
			{shelf(G1, 200, 410, interpolate(f, [0, 12], [0, 1], clamp))}
			{shelf(G2, 125, 595, interpolate(f, [30, 42], [0, 1], clamp))}
			{shelf(G3, 255, 465, interpolate(f, [80, 92], [0, 1], clamp))}

			{/* connecting lines (drawn under symbols) */}
			<line x1={I_father.x + R} y1={G1} x2={I_mother.x - R} y2={G1} {...line} opacity={lineDraw(20)} />
			<g opacity={lineDraw(26)}>
				<line x1={(I_father.x + I_mother.x) / 2} y1={G1} x2={(I_father.x + I_mother.x) / 2} y2={(G1 + G2) / 2} {...line} />
				<line x1={II_a.x} y1={(G1 + G2) / 2} x2={II_c.x} y2={(G1 + G2) / 2} {...line} />
				<line x1={II_a.x} y1={(G1 + G2) / 2} x2={II_a.x} y2={G2 - R} {...line} />
				<line x1={II_b.x} y1={(G1 + G2) / 2} x2={II_b.x} y2={G2 - R} {...line} />
				<line x1={II_c.x} y1={(G1 + G2) / 2} x2={II_c.x} y2={G2 - R} {...line} />
			</g>
			<line x1={II_b.x + R} y1={G2} x2={II_spouse.x - R} y2={G2} {...line} opacity={lineDraw(66)} />
			<g opacity={lineDraw(72)}>
				<line x1={(II_b.x + II_spouse.x) / 2} y1={G2} x2={(II_b.x + II_spouse.x) / 2} y2={(G2 + G3) / 2} {...line} />
				<line x1={III_a.x} y1={(G2 + G3) / 2} x2={III_b.x} y2={(G2 + G3) / 2} {...line} />
				<line x1={III_a.x} y1={(G2 + G3) / 2} x2={III_a.x} y2={G3 - R} {...line} />
				<line x1={III_b.x} y1={(G2 + G3) / 2} x2={III_b.x} y2={G3 - R} {...line} />
			</g>

			{symbols.map((s, i) => renderSym(s, `s${i}`, i))}

			{/* legend */}
			<g opacity={interpolate(f, [110, 124], [0, 1], clamp)} fontSize={18} fontWeight={650} fill={TOK.inkDim}>
				<rect x={150} y={452} width={22} height={22} rx={3} fill={`url(#${ID}-unaff)`} stroke={TOK.inkDim} strokeWidth={2.5} />
				<text x={181} y={469}>male</text>
				<circle cx={280} cy={463} r={11} fill={`url(#${ID}-unaff)`} stroke={TOK.inkDim} strokeWidth={2.5} />
				<text x={298} y={469}>female</text>
				<rect x={400} y={452} width={22} height={22} rx={3} fill={`url(#${ID}-aff)`} stroke={shade(theme.accent, -0.2)} strokeWidth={2.5} />
				<text x={431} y={469}>affected</text>
			</g>
		</svg>
	);
};
