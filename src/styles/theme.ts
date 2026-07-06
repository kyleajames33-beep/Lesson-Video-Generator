// Subject theming. The whole video system was first built for Chemistry with
// TOK.chem1/chem2 hard-wired as the accent. To support multiple subjects
// (Biology = blue, Physics = orange, …) without prop-drilling a colour through
// every slide and diagram, we resolve a SubjectTheme once per lesson and expose
// it via React context. Generic slides / shared chrome / generic diagrams read
// `useAccent()`; chemistry-specific diagrams keep TOK.chem* directly (they only
// ever appear in chemistry lessons).
//
// Backward-compatible: themeFor('Chemistry') (and the context default) return
// the original chem palette, so existing chemistry renders are unchanged.

import {createContext, useContext} from 'react';
import {TOK} from './tokens';

export type SubjectTheme = {
	/** Primary accent — the deep hue. Replaces TOK.chem1. */
	accent: string;
	/** Secondary accent — the lighter hue. Replaces TOK.chem2. */
	accent2: string;
	/** Very light tint for soft backgrounds. Replaces TOK.chem3. */
	soft: string;
	/**
	 * Dark muted "R,G,B" triplet for translucent card/glow backgrounds — used
	 * as `rgba(${cardTint}, alpha)`. Replaces the hardcoded `rgba(13,58,47,…)`
	 * (dark chem green) in the visual-stage / marginalia / lab-footage cards.
	 */
	cardTint: string;
};

const CHEM: SubjectTheme = {accent: TOK.chem1, accent2: TOK.chem2, soft: TOK.chem3, cardTint: '13,58,47'};

const THEMES: Record<string, SubjectTheme> = {
	chemistry: CHEM,
	biology: {accent: TOK.bio1, accent2: TOK.bio2, soft: TOK.bio3, cardTint: '16,40,68'},
	physics: {accent: TOK.phys1, accent2: TOK.phys2, soft: TOK.phys3, cardTint: '70,38,14'},
	mathematics: {accent: TOK.math1, accent2: TOK.math2, soft: TOK.math3, cardTint: '48,28,78'},
	maths: {accent: TOK.math1, accent2: TOK.math2, soft: TOK.math3, cardTint: '48,28,78'},
};

/** Resolve a subject string (e.g. "Biology") to its theme. Falls back to chem. */
export const themeFor = (subject?: string): SubjectTheme =>
	THEMES[(subject ?? '').trim().toLowerCase()] ?? CHEM;

/** Accent context — provided once per lesson in LessonVideo. */
export const AccentContext = createContext<SubjectTheme>(CHEM);

/** Read the active subject accent inside any slide / diagram / shared component. */
export const useAccent = (): SubjectTheme => useContext(AccentContext);
