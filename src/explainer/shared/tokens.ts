// One place for the explainer look: type sizes, named colours and card styling.
// New lessons and every part in src/explainer/shared and src/explainer/sims take their
// numbers from here, so the build gate (maths-visual-standard.md) is met by default.
// Finished lessons keep their own values; do not refactor them onto this file.
//
// scripts/explainer-shared.test.mjs checks that every `ink` below passes 4.5:1 on the
// paper and on the card white, so text in these colours is always readable.

export const PAPER = '#f6f1e7';
export const CARD = '#fffdf8';
export const INK = '#26231f';
export const INK_SOFT = '#6b6358';
export const RULE = 'rgba(60,45,20,0.14)';
export const CARD_BORDER = 'rgba(60,45,20,0.10)';
export const CARD_SHADOW = '0 14px 32px rgba(60,45,20,0.10), 0 2px 6px rgba(60,45,20,0.06)';
export const TRACK = '#ede4d3';

export const FRAME = {w: 1920, h: 1080, margin: 96, headingTop: 92, contentTop: 190} as const;

/**
 * Type sizes in px at 1920 x 1080. The names say what the text is for, so a builder
 * picks a purpose, not a number.
 */
export const TYPE = {
	heading: 60,   // scene heading, hand font
	answer: 84,    // framed final answer
	working: 52,   // the current line of working, and live readout numbers
	current: 44,   // smallest size allowed for the line being explained
	body: 38,      // sentences on cards, key-note bullets
	support: 30,   // earlier lines kept for reference, readout labels
	label: 28,     // card titles, axis titles, units beside a number
	min: 26,       // nothing a student must read goes below this
	hand: 42,      // hand-written tags
	handSmall: 34,
} as const;

/** Use for any computed size: keeps text readable however a layout scales it. */
export const readable = (size: number) => Math.max(TYPE.min, size);

export type Tone = {ink: string; stroke: string; soft: string};
/**
 * Named tones. `ink` is for text, `stroke` for lines and particle fills, `soft` for tints.
 * Give each idea in a lesson one tone and keep it for the whole video (standard item 4).
 */
export const TONES = {
	amber: {ink: '#9c5a00', stroke: '#d18f1f', soft: '#f8e8c8'},
	blue: {ink: '#1f6fb2', stroke: '#2f7fc4', soft: '#dceaf7'},
	teal: {ink: '#13767a', stroke: '#1f8a8f', soft: '#d6eeee'},
	green: {ink: '#287347', stroke: '#2e7d4f', soft: '#dcefe2'},
	red: {ink: '#b8322a', stroke: '#c8443a', soft: '#f7dcd8'},
	violet: {ink: '#6b4fa0', stroke: '#7d62b3', soft: '#e7e0f2'},
	olive: {ink: '#5d6b2a', stroke: '#75853a', soft: '#e9ecd3'},
	warm: {ink: '#a8421c', stroke: '#c4582f', soft: '#f8e0d2'},
	cool: {ink: '#335f9e', stroke: '#3f6fb0', soft: '#dbe6f5'},
	grey: {ink: '#6b6358', stroke: '#8a8378', soft: '#efe9de'},
	ink: {ink: INK, stroke: INK, soft: '#ebe4d6'},
} as const satisfies Record<string, Tone>;
export type ToneName = keyof typeof TONES;
export const tone = (t: ToneName | Tone): Tone => (typeof t === 'string' ? TONES[t] : t);

/** Fixed meanings used in every subject. */
export const ANSWER = TONES.green;
export const MISTAKE = TONES.red;

/** Subject accents (header label, bullets, question-card edge). */
export const SUBJECT_ACCENT = {chemistry: '#0d6b52', biology: '#1f6fb2', physics: '#a8421c', maths: '#8a5a12'} as const;

const channel = (v: number) => { const c = v / 255; return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4; };
export const luminance = (hex: string) => { const n = parseInt(hex.slice(1), 16); return 0.2126 * channel((n >> 16) & 255) + 0.7152 * channel((n >> 8) & 255) + 0.0722 * channel(n & 255); };
/** WCAG contrast ratio between two solid hex colours. */
export const contrast = (a: string, b: string) => { const la = luminance(a), lb = luminance(b); return (Math.max(la, lb) + 0.05) / (Math.min(la, lb) + 0.05); };
export const rgba = (hex: string, alpha: number) => { const n = parseInt(hex.slice(1), 16); return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${alpha})`; };
