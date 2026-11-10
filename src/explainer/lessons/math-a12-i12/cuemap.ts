// Every cue phrase for math-a12-i12, resolved once at load against the measured word timings (a missing phrase
// throws here, before any scene renders). Repeated words name their occurrence: [phrase, n].
import {cue} from './common';

const C = <K extends string>(id: string, map: Record<K, string | [string, number]>): Record<K, number> => {
	const out = {} as Record<K, number>;
	for (const [k, v] of Object.entries(map) as [K, string | [string, number]][]) out[k] = Array.isArray(v) ? cue(id, v[0], v[1]) : cue(id, v);
	return out;
};

export const K1 = C('scene-01', {last: 'Last video', now: 'Now picture', path: 'garden path', along: 'Along two metres', mound: 'a mound at one end', net: 'The net soil', no: 'No rule in this', yet: 'Yet its value', zero: 'is exactly zero', soil: 'The soil cut', fills: 'exactly fills', look: 'Look at the graph', what: 'What do you notice'});
export const K2 = C('scene-02', {turn: 'Turn the graph', lands: 'lands on itself', odd: "That's what an odd", alg: 'In algebra', here: 'Here minus x', flips: 'the sign flips', pair: 'Now pair each', same: 'They have the same', above: 'one is above', every: 'So every pair', zero: 'the integral is zero', check: 'Check it on', prim: 'The primitive', zero2: 'which is zero'});
export const K3 = C('scene-03', {even: 'Even functions do', mirror: 'a mirror image', cos: 'Cos x is even', foot: 'A stone', now: 'Now each strip', left: 'so the left half', means: 'That means the', forcos: 'For cos x', two: 'or two', arch: "So the arch's"});
export const K4 = C('scene-04', {most: 'Most functions', find: 'Find the integral', xcubed: 'The x cubed part', zero: 'so it gives zero', three: 'Three x squared is', sixteen: ['sixteen', 1], prims: 'Primitives agree', two: 'Two conditions', interval: 'The interval must', zeroans: 'And a zero answer', soil: 'The soil still', area: 'the area between'});
export const K5 = C('scene-05', {if: "If there's no", each: "Each trapezium's", now: 'Now add four', inside: 'Each inside height', twice: 'counted twice', ends: 'The two end heights', once: 'counted once', gives: 'That gives the trapezoidal', h: 'Here h is', nplus: 'n strips need'});
export const K6 = C('scene-06', {use: 'Use the trapezoidal', five: 'Five values means', so: 'So h is', heights: 'The heights at', put: 'Put them in', thats: "That's sixty-seven", about: 'about one point'});
export const K7 = C('scene-07', {this: 'This one does', int: 'The integral of one', so: 'So the estimate', why: "Here's why", bends: 'bends upwards', when: 'When a curve is', down: 'Concave down', if: 'If the bending'});
export const K8 = C('scene-08', {third: 'The third check', type: 'Type in', returns: 'it returns', many: 'Many tools', ask: 'Ask for the indefinite', get: 'you might get', so: 'So read the answer', course: 'write it the course', tool: 'A tool is a check'});
export const K9 = C('scene-09', {tools: 'Tools also reach', ask: 'Ask for the primitive', long: 'this long answer', check: 'we can still check', every: 'every term cancels', value: 'And its value', when: 'When different'});
export const K10 = C('scene-10', {here: "Here's a way", odd: 'Odd cancels', only: 'but only from', and: 'And for the', ends: 'ends once'});
export const K11 = C('scene-11', {pause: 'Pause here'});
export const K12 = C('scene-12', {test: 'Test x squared', swap: 'Swap in', odd: "so it's odd", three: 'Three is even', answer: 'The answer is six', zero: 'Zero is wrong', only: 'Only the odd part'});
export const K13 = C('scene-13', {pause: 'Pause here'});
export const K14 = C('scene-14', {five: 'Five readings make', end: 'The end readings', inside: 'The inside readings', so: 'So half the opening', which: 'which is five point', even: 'The arch is even', about: 'about ten point', wrong: 'is wrong', forgets: 'It forgets'});
export const K15 = C('scene-15', {so: 'So symmetry', next: 'Next we put', heres: "Here's the power", how: 'How much energy'});
export const K16 = C('scene-16', {pause: 'Pause the video'});
