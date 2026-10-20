// HSC exam skills series: shared colours, layout zones and small helpers (one visual system for s01 to s08).
// Colour key (s01 design): amber highlighter for verbs, ink pen for content words and givens, teal square brackets
// for constraint phrases, green marker ticks, red lost-mark tags. Subject badges use the subject accents.
import {AMBER, AMBER_INK, DrawPath, INK, INK_SOFT, PAPER_DEEP, prog} from '../../kit';

export {AMBER, AMBER_INK, DrawPath, INK, INK_SOFT, PAPER_DEEP, prog};
export const HI = '#f6d77a';            // highlighter fill
export const HI_EDGE = '#e9b93c';
export const PEN = '#2c4a7c';           // pen underlines (blue-black ink)
export const TEAL = '#16867a', TEAL_SOFT = '#d5eeea';
export const GREEN = '#2f8a5b';
export const RED = '#c4432f', RED_SOFT = '#fbe6e1';
export const GREY = '#9a948a', GREY_INK = '#6f695f', GREY_FILL = '#eceae4';
export const CARD = '#fffefb';
export const RULE = '#cfdff0', MARGIN = '#ecb7b0';
export const CAUSE = '#dcebf8', CAUSE_EDGE = '#6f9bc8';
export const SUBJECT_COLOUR: Record<'Chemistry' | 'Biology', string> = {Chemistry: '#0d6b52', Biology: '#1f6fb2'};
/** Eyebrow accent for the shared series (neither subject colour). */
export const SKILLS_ACCENT = '#8a5a12';

/** Layout zones (1920 x 1080), fixed across the series so cards, boxes and the strip never jump between scenes. */
export const ZONE = {
	strip: {x: 40, y: 262, w: 262},
	card: {x: 330, y: 96, w: 1500},
	box: {x: 330, w: 970},
	side: {x: 1340, w: 490},
} as const;

export const clamp01 = (v: number) => Math.max(0, Math.min(1, v));
export const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
export const smooth = (u: number) => (u <= 0 ? 0 : u >= 1 ? 1 : u * u * (3 - 2 * u));
/** Visible 0..1 between at and out (frames), eased. */
export const vis = (f: number, at: number, out?: number, d = 12) => prog(f, at, d) * (out === undefined ? 1 : 1 - prog(f, out, d));
/** One soft pulse (0..1..0) starting at `at`. */
export const pulse = (f: number, at: number, len = 30) => (f < at ? 0 : Math.max(0, Math.sin(clamp01((f - at) / len) * Math.PI)));
