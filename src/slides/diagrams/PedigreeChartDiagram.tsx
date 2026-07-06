// PedigreeChartDiagram — a 3-generation family pedigree. Squares = male,
// circles = female; a filled shape = affected. A horizontal line joins a
// mating pair; a vertical drop from the pair connects to a sibship line above
// the offspring. Fixed, clean teaching example (not data-driven).
//
//   Gen I:   ■──○        (affected father × unaffected mother)
//   Gen II:  ○  ■──●  □   (3 children; one mated pair, one affected daughter)
//   Gen III:    □  ●       (2 grandchildren, one affected)
//
// Beat plan (frames @ 30fps):
//   0    generation labels fade in
//   10+  symbols pop in generation by generation
//   40+  connecting lines draw in

import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK} from '../../styles/tokens';
import {useAccent} from '../../styles/theme';

const clampOpts = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};

type Sym = {x: number; y: number; sex: 'm' | 'f'; affected: boolean; start: number};

export const PedigreeChartDiagram = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const theme = useAccent();

	const R = 24;
	const G1 = 110, G2 = 250, G3 = 380;

	// Generation I — founding couple.
	const I_father = {x: 250, y: G1, sex: 'm' as const, affected: true, start: 10};
	const I_mother = {x: 360, y: G1, sex: 'f' as const, affected: false, start: 14};

	// Generation II — three children of the founders.
	const II_a = {x: 175, y: G2, sex: 'f' as const, affected: false, start: 24};
	const II_b = {x: 305, y: G2, sex: 'm' as const, affected: true, start: 28}; // mates in
	const II_spouse = {x: 415, y: G2, sex: 'f' as const, affected: false, start: 32};
	const II_c = {x: 545, y: G2, sex: 'm' as const, affected: false, start: 36};

	// Generation III — children of II_b × II_spouse.
	const III_a = {x: 305, y: G3, sex: 'm' as const, affected: false, start: 46};
	const III_b = {x: 415, y: G3, sex: 'f' as const, affected: true, start: 50};

	const symbols: Sym[] = [I_father, I_mother, II_a, II_b, II_spouse, II_c, III_a, III_b];

	const lineDraw = (d: number) => interpolate(frame, [d, d + 14], [0, 1], clampOpts);
	const labelOp = interpolate(frame, [0, 12], [0, 1], clampOpts);

	const renderSym = (s: Sym, key: string) => {
		const pop = Math.max(0, spring({frame: frame - s.start, fps, config: {damping: 14, stiffness: 220, mass: 0.7}}));
		const fill = s.affected ? theme.accent : TOK.bgLift;
		const stroke = s.affected ? theme.accent : TOK.inkDim;
		return (
			<g key={key} transform={`translate(${s.x} ${s.y}) scale(${pop})`}
				opacity={interpolate(pop, [0, 0.3], [0, 1], {extrapolateRight: 'clamp'})}>
				{s.sex === 'm' ? (
					<rect x={-R} y={-R} width={2 * R} height={2 * R} rx={3} fill={fill} stroke={stroke} strokeWidth={3.5} />
				) : (
					<circle cx={0} cy={0} r={R} fill={fill} stroke={stroke} strokeWidth={3.5} />
				)}
			</g>
		);
	};

	return (
		<svg viewBox="0 0 720 470" role="img" aria-label="Three-generation family pedigree chart" style={{width: '100%'}}>
			{/* generation labels */}
			<g opacity={labelOp} fontWeight={800} fontSize={22} fill={TOK.inkDim}>
				<text x={40} y={G1 + 8} textAnchor="middle">I</text>
				<text x={40} y={G2 + 8} textAnchor="middle">II</text>
				<text x={40} y={G3 + 8} textAnchor="middle">III</text>
			</g>

			{/* --- connecting lines (drawn under symbols) --- */}
			{/* Gen I mating line */}
			<line x1={I_father.x + R} y1={G1} x2={I_mother.x - R} y2={G1} stroke={TOK.inkDim} strokeWidth={3} opacity={lineDraw(38)} />
			{/* Gen I drop + sibship line to Gen II (II_a, II_b, II_c) */}
			<g opacity={lineDraw(42)}>
				<line x1={(I_father.x + I_mother.x) / 2} y1={G1} x2={(I_father.x + I_mother.x) / 2} y2={(G1 + G2) / 2} stroke={TOK.inkDim} strokeWidth={3} />
				<line x1={II_a.x} y1={(G1 + G2) / 2} x2={II_c.x} y2={(G1 + G2) / 2} stroke={TOK.inkDim} strokeWidth={3} />
				<line x1={II_a.x} y1={(G1 + G2) / 2} x2={II_a.x} y2={G2 - R} stroke={TOK.inkDim} strokeWidth={3} />
				<line x1={II_b.x} y1={(G1 + G2) / 2} x2={II_b.x} y2={G2 - R} stroke={TOK.inkDim} strokeWidth={3} />
				<line x1={II_c.x} y1={(G1 + G2) / 2} x2={II_c.x} y2={G2 - R} stroke={TOK.inkDim} strokeWidth={3} />
			</g>
			{/* Gen II mating line (II_b × II_spouse) */}
			<line x1={II_b.x + R} y1={G2} x2={II_spouse.x - R} y2={G2} stroke={TOK.inkDim} strokeWidth={3} opacity={lineDraw(50)} />
			{/* Gen II drop + sibship to Gen III */}
			<g opacity={lineDraw(54)}>
				<line x1={(II_b.x + II_spouse.x) / 2} y1={G2} x2={(II_b.x + II_spouse.x) / 2} y2={(G2 + G3) / 2} stroke={TOK.inkDim} strokeWidth={3} />
				<line x1={III_a.x} y1={(G2 + G3) / 2} x2={III_b.x} y2={(G2 + G3) / 2} stroke={TOK.inkDim} strokeWidth={3} />
				<line x1={III_a.x} y1={(G2 + G3) / 2} x2={III_a.x} y2={G3 - R} stroke={TOK.inkDim} strokeWidth={3} />
				<line x1={III_b.x} y1={(G2 + G3) / 2} x2={III_b.x} y2={G3 - R} stroke={TOK.inkDim} strokeWidth={3} />
			</g>

			{/* symbols */}
			{symbols.map((s, i) => renderSym(s, `s${i}`))}

			{/* legend */}
			<g opacity={interpolate(frame, [62, 76], [0, 1], clampOpts)} fontSize={17} fontWeight={600} fill={TOK.inkDim}>
				<rect x={150} y={440} width={20} height={20} rx={2} fill={TOK.bgLift} stroke={TOK.inkDim} strokeWidth={2.5} />
				<text x={178} y={456}>male</text>
				<circle cx={272} cy={450} r={10} fill={TOK.bgLift} stroke={TOK.inkDim} strokeWidth={2.5} />
				<text x={288} y={456}>female</text>
				<rect x={392} y={440} width={20} height={20} rx={2} fill={theme.accent} stroke={theme.accent} strokeWidth={2.5} />
				<text x={420} y={456}>affected</text>
			</g>
		</svg>
	);
};
