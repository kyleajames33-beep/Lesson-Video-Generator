// Exact values with square roots (kit-needs trigonometry item 7; t01, t04, t08, t11, t12, w03, w04).
// ExactFraction (math/algebra.tsx) takes rational values only. A SurdValue is (sum of coef × √rad) / den with
// integer coefficients and radicands; simplifySurd extracts square factors, collects like surds and cancels the
// common factor, so √3/2, 2√3/3 and (1 − √3)/2 are always written in lowest terms. surdText gives the plain string
// for readouts and chips; ExactSurd draws the built-up fraction with a root sign and vinculum.
import React from 'react';
import {FONT_DISPLAY, INK} from '../../kit';
import {RoleKey, roleInk} from './roles';

const MINUS = '−';
/** coef × √rad. rad = 1 is a rational term. */
export type SurdTerm = {coef: number; rad: number};
/** (sum of terms) / den. */
export type SurdValue = {terms: readonly SurdTerm[]; den: number};

const gcd = (a: number, b: number): number => {
	a = Math.abs(a); b = Math.abs(b);
	while (b) [a, b] = [b, a % b];
	return a;
};
const assertInt = (n: number, what: string) => {
	if (!Number.isSafeInteger(n)) throw new RangeError(`exact-surd: ${what} must be a safe integer (got ${n})`);
};

/** Largest s with s² dividing n, and the square-free rest: n = s² × r. */
export const squareSplit = (n: number): {s: number; r: number} => {
	assertInt(n, 'radicand');
	if (n < 0) throw new RangeError('exact-surd: radicand must not be negative');
	if (n === 0) return {s: 0, r: 1};
	let s = 1, r = n;
	for (let k = 2; k * k <= r; k++) while (r % (k * k) === 0) {r /= k * k; s *= k;}
	return {s, r};
};

/** Lowest terms: square factors out, like surds collected, zero terms dropped, common factor cancelled, den > 0. */
export const simplifySurd = (v: SurdValue): SurdValue => {
	assertInt(v.den, 'denominator');
	if (v.den === 0) throw new RangeError('exact-surd: zero denominator');
	const byRad = new Map<number, number>();
	for (const t of v.terms) {
		assertInt(t.coef, 'coefficient');
		const {s, r} = squareSplit(t.rad);
		if (s === 0) continue;
		byRad.set(r, (byRad.get(r) ?? 0) + t.coef * s);
	}
	let terms = [...byRad.entries()].filter(([, c]) => c !== 0).sort((a, b) => a[0] - b[0]).map(([rad, coef]) => ({coef, rad}));
	let den = v.den;
	if (!terms.length) return {terms: [], den: 1};
	let g = Math.abs(den);
	for (const t of terms) g = gcd(g, t.coef);
	if (den < 0) g = -g;
	terms = terms.map(t => ({coef: t.coef / g, rad: t.rad}));
	den /= g;
	return {terms, den};
};

/** Build and simplify: surd(1, 3, 2) is √3/2; surdOf([[1, 1], [-1, 3]], 2) is (1 − √3)/2. */
export const surd = (coef: number, rad = 1, den = 1): SurdValue => simplifySurd({terms: [{coef, rad}], den});
export const surdOf = (terms: readonly (readonly [number, number])[], den = 1): SurdValue => simplifySurd({terms: terms.map(([coef, rad]) => ({coef, rad})), den});
/** a / (k√r) with the root moved to the top: 2/√3 = 2√3/3. `num` may be a whole SurdValue. */
export const rationalise = (num: SurdValue | number, denCoef: number, denRad: number): SurdValue => {
	const n = typeof num === 'number' ? surd(num) : num;
	const {s, r} = squareSplit(denRad);
	// n / (denCoef × s × √r) = n √r / (denCoef × s × r × n.den)
	const terms = n.terms.map(t => {
		const q = squareSplit(t.rad);
		return {coef: t.coef * q.s, rad: q.r * r};
	});
	return simplifySurd({terms, den: denCoef * s * r * n.den});
};
export const surdNumber = (v: SurdValue): number => v.terms.reduce((a, t) => a + t.coef * Math.sqrt(t.rad), 0) / v.den;

const termText = (t: SurdTerm, first: boolean): string => {
	const a = Math.abs(t.coef);
	const body = t.rad === 1 ? String(a) : `${a === 1 ? '' : a}√${t.rad}`;
	const sign = t.coef < 0 ? (first ? MINUS : ` ${MINUS} `) : first ? '' : ' + ';
	return sign + body;
};
/** Plain text in lowest terms: "√3/2", "2√3/3", "(1 − √3)/2", "−√2/2", "0". */
export const surdText = (input: SurdValue): string => {
	const v = simplifySurd(input);
	if (!v.terms.length) return '0';
	if (v.den === 1) return v.terms.map((t, i) => termText(t, i === 0)).join('');
	if (v.terms.length === 1) return termText(v.terms[0], true) + '/' + v.den;
	return `(${v.terms.map((t, i) => termText(t, i === 0)).join('')})/${v.den}`;
};

/** Root sign with a vinculum over the radicand (inherits the font size). */
export const Radical: React.FC<{children: React.ReactNode; color?: string}> = ({children, color}) => (
	<span style={{display: 'inline-flex', alignItems: 'flex-start', whiteSpace: 'pre', color}}>
		<span style={{marginRight: '-0.04em'}}>√</span>
		<span style={{borderTop: '0.065em solid currentColor', marginTop: '0.14em', paddingTop: '0.02em', paddingRight: '0.06em', lineHeight: 1.05}}>{children}</span>
	</span>
);

const TermNode: React.FC<{t: SurdTerm; first: boolean; radColor?: string}> = ({t, first, radColor}) => {
	const a = Math.abs(t.coef);
	const sign = t.coef < 0 ? (first ? MINUS : ` ${MINUS} `) : first ? '' : ' + ';
	return (
		<span style={{whiteSpace: 'pre'}}>
			{sign}
			{t.rad === 1 ? String(a) : <>{a === 1 ? '' : a}<Radical color={radColor}>{t.rad}</Radical></>}
		</span>
	);
};

/**
 * An exact value written in lowest terms as a built-up fraction. Inherits the font size unless `size` is given.
 * `role` colours the whole value; `rootRole` colours only the root parts (the √3 blue in w03, say).
 */
export const ExactSurd: React.FC<{value: SurdValue; size?: number; role?: RoleKey; rootRole?: RoleKey; weight?: number; style?: React.CSSProperties}> = ({value, size, role, rootRole, weight, style}) => {
	const v = simplifySurd(value);
	const color = role ? roleInk(role) : undefined;
	const rc = rootRole ? roleInk(rootRole) : undefined;
	const base: React.CSSProperties = {fontFamily: FONT_DISPLAY, fontWeight: weight, fontSize: size, color, whiteSpace: 'pre', ...style};
	if (!v.terms.length) return <span style={base}>0</span>;
	const numer = v.terms.map((t, i) => <TermNode key={i} t={i === 0 && v.den !== 1 && v.terms.length === 1 ? {coef: Math.abs(t.coef), rad: t.rad} : t} first={i === 0} radColor={rc} />);
	if (v.den === 1) return <span style={base}>{numer}</span>;
	const lead = v.terms.length === 1 && v.terms[0].coef < 0 ? MINUS : '';
	return (
		<span style={{...base, display: 'inline-flex', alignItems: 'center'}}>
			{lead ? <span style={{marginRight: '0.08em'}}>{lead}</span> : null}
			<span style={{display: 'inline-flex', flexDirection: 'column', alignItems: 'stretch', textAlign: 'center', verticalAlign: 'middle', lineHeight: 1.12, margin: '0 0.06em'}}>
				<span style={{padding: '0 0.16em 0.04em'}}>{numer}</span>
				<span style={{height: '0.06em', minHeight: 3, background: color ?? INK, borderRadius: 2}} />
				<span style={{padding: '0.04em 0.16em 0'}}>{v.den}</span>
			</span>
		</span>
	);
};

// Module-load self check: the formatter must reproduce the kit-needs examples exactly.
const SELF: [SurdValue, string][] = [[surd(1, 3, 2), '√3/2'], [rationalise(2, 1, 3), '2√3/3'], [surdOf([[1, 1], [-1, 3]], 2), '(1 − √3)/2'], [surd(1, 72), '6√2'], [surd(-2, 8, 4), '−√2']];
for (const [v, s] of SELF) if (surdText(v) !== s) throw new Error(`exact-surd self check: got ${surdText(v)}, expected ${s}`);
