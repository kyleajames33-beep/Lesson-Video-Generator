// Maths studio colour roles. One colour per lesson role, fixed for the whole video
// (maths-visual-standard.md item 4). Every `ink` passes 4.5:1 on paper (#f6f1e7)
// and on the card white (#fffdf8); `stroke` is for lines, `soft` for tints only.
import React, {createContext, useContext} from 'react';
import {INK} from '../../kit';

export type RoleKey = 'k' | 'a' | 'b' | 'answer' | 'mistake' | 'gradient' | 'height' | 'inner';
export type RoleColours = {ink: string; stroke: string; soft: string};

export const MATH_AMBER = '#9c5a00';
export const MATH_BLUE = '#1f6fb2';
export const MATH_TEAL = '#13767a';
export const MATH_ANSWER = '#287347';
export const MATH_MISTAKE = '#b8322a';
export const MATH_GRADIENT = '#6b4fa0';
export const MATH_INNER = '#8a8378';

export const MATH_ROLES: Record<RoleKey, RoleColours> = {
	k: {ink: MATH_AMBER, stroke: '#d18f1f', soft: '#f8e8c8'},
	a: {ink: MATH_BLUE, stroke: MATH_BLUE, soft: '#dceaf7'},
	b: {ink: MATH_TEAL, stroke: '#1f8a8f', soft: '#d6eeee'},
	answer: {ink: MATH_ANSWER, stroke: '#2e7d4f', soft: '#dcefe2'},
	mistake: {ink: MATH_MISTAKE, stroke: MATH_MISTAKE, soft: '#f7dcd8'},
	gradient: {ink: MATH_GRADIENT, stroke: MATH_GRADIENT, soft: '#e7e0f2'},
	height: {ink: INK, stroke: INK, soft: '#ebe4d6'},
	inner: {ink: '#6b6358', stroke: MATH_INNER, soft: '#efe9de'},
};
/** Non-role curve colour for a third named curve (d04). 5.4:1 on paper, 5.8:1 on card white. */
export const MATH_CURVE_OLIVE = '#5d6b2a';
/** Sign-chart and rider direction colours (d09): increasing teal, decreasing amber (role inks). */
export const MATH_UP = MATH_TEAL;
export const MATH_DOWN = MATH_AMBER;
/** Excluded values, domain gaps and open circles: muted grey ring (never bridged). */
export const MATH_EXCLUDED = '#8a8378';
/** Tint fills for the paired derivative panel (above and below the f′ axis). */
export const MATH_UP_SOFT = '#d6eeee';
export const MATH_DOWN_SOFT = '#f8e8c8';

export const roleInk = (r?: RoleKey, fallback = INK) => (r ? MATH_ROLES[r].ink : fallback);
export const roleStroke = (r?: RoleKey, fallback = INK) => (r ? MATH_ROLES[r].stroke : fallback);

/** Switch role colours off (question cards before feedback) or on for a subtree. */
const RolesOnContext = createContext(true);
export const RolesOn: React.FC<{on: boolean; children: React.ReactNode}> = ({on, children}) => <RolesOnContext.Provider value={on}>{children}</RolesOnContext.Provider>;

/** A symbol in its role colour: <Role r="a">2</Role>. Colour is never the only carrier: label the role in words nearby. */
export const Role: React.FC<{r: RoleKey; children: React.ReactNode; weight?: number; style?: React.CSSProperties}> = ({r, children, weight, style}) => {
	const on = useContext(RolesOnContext);
	return <span style={{color: on ? MATH_ROLES[r].ink : 'inherit', fontWeight: weight, ...style}}>{children}</span>;
};

/** Raised power that keeps the line height stable: e<Pow>2x</Pow>. */
export const Pow: React.FC<{children: React.ReactNode; scale?: number}> = ({children, scale = 0.66}) => (
	<span style={{fontSize: `${scale}em`, position: 'relative', top: '-0.82em', marginLeft: '0.04em', whiteSpace: 'pre'}}>{children}</span>
);

/** Dashed grey slot for the inner expression (the power ax + b). */
export const InnerSlot: React.FC<{children: React.ReactNode; on?: boolean}> = ({children, on = true}) => (
	<span style={{border: on ? `0.07em dashed ${MATH_INNER}` : '0.07em dashed transparent', borderRadius: '0.25em', padding: '0 0.12em', margin: '0 0.02em'}}>{children}</span>
);
