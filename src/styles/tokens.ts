// Design tokens for HSCScience lesson videos.
// Source: docs/design-canvas-reference/system.jsx (TOK).
// See docs/visual-design-handbook.md for usage rules.

export const TOK = {
	// Stage
	bg: '#f7f7f5',
	bgLift: '#ffffff',
	rule: 'rgba(0,0,0,0.08)',

	// Ink
	ink: '#1a1a1a',
	inkDim: '#5a5a5a',
	inkMute: '#9a9a9a',

	// Subject — Chemistry (deep teal-green). accent / accent2 / soft tint.
	chem1: '#0d6b52',
	chem2: '#148a6f',
	chem3: '#e8f5f0',

	// Subject — Biology (blue). accent / accent2 / soft tint.
	bio1: '#1f6fb2',
	bio2: '#3a8ad9',
	bio3: '#e9f2fb',

	// Subject — Physics (orange). accent / accent2 / soft tint.
	phys1: '#c2410c',
	phys2: '#e07a3a',
	phys3: '#fdf0e8',

	// Subject — Mathematics (purple). accent / accent2 / soft tint.
	math1: '#6d28d9',
	math2: '#9b6dd9',
	math3: '#f2ebfb',

	// Back-compat single-hue subject keys (used by subjectColor()).
	bio: '#3a8ad9',
	phys: '#e07a3a',
	math: '#9b6dd9',

	// Universal accent — reserved for the single most important thing on screen
	amber: '#f0a830',
	amberDim: '#7a5418',
} as const;

export const FONT_DISPLAY = '"Inter Tight", -apple-system, system-ui, sans-serif';
export const FONT_MONO = '"JetBrains Mono", ui-monospace, monospace';
export const FONT_HAND = '"Caveat", "Kalam", cursive';

// Type scale (1080p frame). See visual-design-handbook.md "Type scale".
export const TYPE = {
	hero: {fontSize: 220, fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 0.9},
	display: {fontSize: 208, fontWeight: 840, letterSpacing: '-0.045em', lineHeight: 0.92},
	h1: {fontSize: 88, fontWeight: 820, letterSpacing: '-0.04em', lineHeight: 0.98},
	h2: {fontSize: 82, fontWeight: 800, letterSpacing: '-0.035em', lineHeight: 0.98},
	h3: {fontSize: 76, fontWeight: 800, letterSpacing: '-0.035em', lineHeight: 1.02},
	h4: {fontSize: 68, fontWeight: 800, letterSpacing: '-0.035em', lineHeight: 1.02},
	title: {fontSize: 96, fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1},
	section: {fontSize: 56, fontWeight: 700, lineHeight: 1.05},
	subhead: {fontSize: 58, fontWeight: 760, letterSpacing: '-0.025em', lineHeight: 1.08},
	bodyLarge: {fontSize: 34, fontWeight: 600, lineHeight: 1.28},
	body: {fontSize: 28, fontWeight: 400, lineHeight: 1.45},
	bodySmall: {fontSize: 25, fontWeight: 400, lineHeight: 1.42},
	callout: {fontSize: 30, fontWeight: 500, lineHeight: 1.3},
	math: {fontSize: 38, fontWeight: 600, lineHeight: 1.2, letterSpacing: '-0.035em'},
	mathFinal: {fontSize: 40, fontWeight: 760, lineHeight: 1.2, letterSpacing: '-0.035em'},
	cardTitle: {fontSize: 46, fontWeight: 760, lineHeight: 1.05, letterSpacing: '-0.025em'},
	cardBody: {fontSize: 29, fontWeight: 400, lineHeight: 1.34},
	mono: {fontSize: 22, fontFamily: FONT_MONO, letterSpacing: '0.15em'},
} as const;

// Motion principles. Eases match the gold-standard handbook.
export const MOTION = {
	easeReveal: 'cubic-bezier(.2,.7,.3,1)',
	easeEntry: 'cubic-bezier(.34,1.56,.64,1)',
	wordStaggerFrames: 2, // 60ms @ 30fps — between sibling words
	blockStaggerFrames: 4, // 120ms @ 30fps — between sibling blocks
	revealFrames: 12, // 400ms @ 30fps — single reveal duration
	holdBodyFrames: 75, // 2.5s @ 30fps — minimum hold for 28px body line
	holdEquationFrames: 120, // 4s @ 30fps — minimum hold for an equation
	holdRecapItemFrames: 90, // 3s @ 30fps — minimum hold for a recap item
} as const;

export type SubjectKey = 'chem' | 'bio' | 'phys' | 'math';

export const subjectColor = (key: SubjectKey): string => {
	switch (key) {
		case 'chem':
			return TOK.chem1;
		case 'bio':
			return TOK.bio;
		case 'phys':
			return TOK.phys;
		case 'math':
			return TOK.math;
	}
};
