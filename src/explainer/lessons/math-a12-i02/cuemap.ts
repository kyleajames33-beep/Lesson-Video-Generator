// Every cue phrase for math-a12-i02, resolved once at load against the measured word timings (a missing phrase
// throws here, before any scene renders). Repeated words name their occurrence: [phrase, n].
import {cue} from './common';

const C = <K extends string>(id: string, map: Record<K, string | [string, number]>): Record<K, number> => {
	const out = {} as Record<K, number>;
	for (const [k, v] of Object.entries(map) as [K, string | [string, number]][]) out[k] = Array.isArray(v) ? cue(id, v[0], v[1]) : cue(id, v);
	return out;
};

export const K1 = C('scene-01', {expanding: 'Expanding works', one: ['plus one', 2], C: ['plus C', 1], jar: 'this jar', fed: "after it's fed", hour: 'centimetres per hour', fast: 'Fast at first', expand: 'to expand', how: 'So how far', these: 'like these'});
export const K2 = C('scene-02', {power: 'The power rule', first: 'One over x cubed', rw: 'is x to the minus three', raise: 'Raise the power', that1: "That's minus one", zero1: ['side of zero', 1], c2: 'x to the three on two becomes', that2: "That's two fifths", pos: 'or positive', c3: 'And a fraction', splits: 'splits into', prim: 'Its primitive', zero2: ['side of zero', 2]});
export const K3 = C('scene-03', {now: 'Now the bracket', guess: 'and guess', check: 'Check by differentiating', outside: 'differentiate the outside', two: 'which is two', so: 'So the guess', watch: 'Watch its gradient', twice: 'exactly twice', want: 'we want', halve: 'So halve', six: 'over six', sq: 'exactly two x plus one squared', rule: 'reverse chain rule'});
export const K4 = C('scene-04', {but: 'But expanding', expandB: 'Expand the bracket', sixth: ['one sixth', 1], plus: ['one sixth', 2], graph: 'On the graph', apart: 'gap apart', both: 'So both', diff: 'the difference'});
export const K5 = C('scene-05', {any: 'any bracket', diffing: 'Differentiating a x', a: 'the inner rate a', so: 'So the primitive', integral: 'The integral of', one: ['not minus one', 1]});
export const K5A = C('scene-05a', {now: 'Now the starter', half1: ['a half', 1], raise: 'Raise the power', then: 'Then divide', three: 'Three over two', C: ['plus C', 1], at0: 'At t equals zero', half2: 'C is minus one', after: 'After six hours', so: 'So it has risen', cm: 'six centimetres'});
export const K6 = C('scene-06', {same: 'The same idea', find: 'Find the integral', inside: 'The inside is', outside: 'sitting outside', guess: 'So guess', diff: 'Differentiating gives', that: "That's two x", integrand: 'exactly the integrand', general: 'In general', one: 'n not minus one'});
export const K7 = C('scene-07', {what: 'What if', integral: 'The integral of x', here: 'Here x is half', eight1: ['over eight', 1], missing: 'A missing number', but: 'But with no x', cant: "can't be done", two: "Two x isn't", check: 'Check it', eight2: 'not eight', instead: 'expand instead'});
export const K8 = C('scene-08', {one: 'One more worked', find: 'Find the integral', first: 'First rewrite', half1: ['a half', 1], inside: 'The inside is', number: 'missing number', raising: 'Raising the power', then: 'Then take half', C: 'plus C', always: 'always positive', x: 'every real x', diff: 'Differentiating back', exactly: 'integrand exactly'});
export const K9 = C('scene-09', {rule: 'rule of thumb', fix: 'Fix a missing', ifout: 'out by a constant', ifneeds: 'If it needs', instead: 'algebra instead'});
export const K10 = C('scene-10', {pause: 'Pause here'});
export const K11 = C('scene-11', {rewrite: 'Rewrite it', four: 'minus four', raise: 'Raise the power', two: 'inner rate two', six: 'Six over minus', so: 'So the answer', C: 'plus C', forget: 'Forgetting the two', integrand: 'twice the integrand'});
export const K12 = C('scene-12', {pause: 'Pause here'});
export const K13 = C('scene-13', {inside: 'The inside is', we: 'We have x', number: 'missing number', so: 'So the answer', thats: "That's x cubed", C: 'plus C', integrating: 'Integrating the two', factor: 'factor by factor'});
export const K14 = C('scene-14', {so: 'So algebra', next: 'Next', e: 'e to the three x', appear: 'appear'});
export const K15 = C('scene-15', {pause: 'Pause the video'});
