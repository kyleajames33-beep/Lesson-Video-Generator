// Every cue phrase for math-a12-i01, resolved once at load against the measured word timings (a missing phrase
// throws here, before any scene renders). Repeated words name their occurrence: [phrase, n].
import {cue} from './common';

const C = <K extends string>(id: string, map: Record<K, string | [string, number]>): Record<K, number> => {
	const out = {} as Record<K, number>;
	for (const [k, v] of Object.entries(map) as [K, string | [string, number]][]) out[k] = Array.isArray(v) ? cue(id, v[0], v[1]) : cue(id, v);
	return out;
};

export const K1 = C('scene-01', {plant: 'plant stand', three: 'Three bean', week: 'per week', so: "So each tip's", shelves: 'different shelves', up: 'slid up', fact: 'Now one fact', sixty: 'sixty-six', weeks: 'four weeks', which: 'Which shelf', how: 'And how does'});
export const K2 = C('scene-02', {name: 'the name', primitive: 'a primitive of f', so: 'So x squared', tip: "each tip's height", backwards: 'backwards', diff: 'Differentiating takes', finding: 'Finding a primitive starts', from: 'come from'});
export const K3 = C('scene-03', {why: 'Why do', adding: 'Adding a constant', anywhere: 'anywhere', every: 'At every x', zero: 'is zero', soif: 'So if capital', also: 'also a primitive', write: 'We write', family: 'and the family', C: ['plus C', 1]});
export const K4 = C('scene-04', {take: 'Take any two', gap: 'the gap between', two: 'For two of', up: 'all the way up', their: 'Their gradients', everywhere: ['zero everywhere', 1], func: 'A function whose', never: 'never rises', so: 'So over an', constant: 'stays constant', means: 'That means', covers: 'covers every'});
export const K5 = C('scene-05', {reverse: 'Reverse the power', diff: 'Differentiating multiplies', undo: 'To undo it', try: 'Try x squared', raising: 'Raising the power', but: 'But x cubed', big: 'too big', divide: 'divide by three', over: ['x cubed over three', 1], sq1: 'to x squared', watch: 'Watch its gradient', every: 'At every x', sq2: 'height of x squared', general: 'In general', cancels: 'cancels', zero: "isn't zero", above: 'above zero', except: 'except minus one'});
export const K6 = C('scene-06', {deriv: 'The derivative of a sum', soif: 'So if F', g: ['f plus g', 2], k: 'And k times', f: ['times f', 2], notation: 'the notation', integral: 'The integral of f', C: ['plus C', 1], integrand: 'integrand', dx: 'd x says', variable: 'variable', indefinite: 'indefinite integral', integration: 'called integration', so: 'So the integral'});
export const K7 = C('scene-07', {find: 'Find the integral', work: 'Work term by', three: 'Three x squared becomes', cubed: ['which is x cubed', 1], four: 'Four x is', squared: 'which is two x squared', minus: 'Minus five is', x: 'becomes minus five x', add: 'Add one C', constant: 'single constant', check: 'check by differentiating', deriv: 'The derivative is', exactly: 'integrand exactly'});
export const K8 = C('scene-08', {gradient: 'has gradient', point: 'the point one', find: 'Find its equation', integrate: 'Integrate first', C: ['plus C', 1], family: 'whole family', picks: 'The point picks', sub: 'Substitute', five: 'y equals five', eq: 'Five equals one', one: ['one plus C', 1], four: 'C is four', curve: 'The curve is', fact: 'A fact like', condition: 'initial condition'});
export const K8A = C('scene-08a', {back: 'Back to the', each: "Each tip's", tip: "The tip that's", has: 'has sixteen', so: ['so C is', 1], fifty: ['is fifty', 1], started: ['It started', 1], middle: 'middle shelf', isnt: "C isn't sixty-six", got: 'got to', where: 'C is where'});
export const K9 = C('scene-09', {idea: 'idea to keep', shape: ['fixes the shape', 1], height: 'fixes the height', plant: 'For the plant', reading: 'one reading', find: 'To find the shape', raise: 'raise the power', add: 'add C', check: 'back to check'});
export const K10 = C('scene-10', {pause: 'Pause here'});
export const K11 = C('scene-11', {four: ['two x to the four', 1], cubed: 'minus two x cubed', x: 'becomes five x', answer: 'So the answer', C: ['plus C', 1], diff: 'Differentiating gives', matches: 'matches', without: 'Without the C', them: 'all of them'});
export const K12 = C('scene-12', {pause: 'Pause here'});
export const K13 = C('scene-13', {first: 'Integrate first', C: ['plus C', 1], use: 'use the point', at: 'At x equals', six: 'six plus C', nine: 'must equal nine', three: 'C is three', fx: ['f of x is', 2], isnt: "C isn't", slide: 'the slide'});
export const K14 = C('scene-14', {so: 'So a family', next: 'Next', bracket: 'the integral of two', expand: 'could expand', shortcut: 'shortcut'});
export const K15 = C('scene-15', {pause: 'Pause the video'});
