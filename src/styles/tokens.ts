// Design tokens for HSCScience lesson videos.
// Source: docs/design-canvas-reference/system.jsx (TOK).
// See docs/visual-design-handbook.md for usage rules.

export const TOK = {
	// Stage
	bg: '#0a0f0d',
	bgLift: '#0f1614',
	rule: 'rgba(232,239,233,0.08)',

	// Ink
	ink: '#e8efe9',
	inkDim: '#8a9590',
	inkMute: '#4a554f',

	// Subject — Chemistry (primary subject in current lesson set)
	chem1: '#1f8a6f',
	chem2: '#6fd9b8',
	chem3: '#0d3a2f',

	// Subject — other (locked in for system completeness)
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
