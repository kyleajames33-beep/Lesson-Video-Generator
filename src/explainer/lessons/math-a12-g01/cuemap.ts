// Every cue phrase for math-a12-g01, resolved once at load against the measured word timings (a missing phrase
// throws here, before any scene renders). Repeated words name their occurrence: [phrase, n].
import {cue} from './common';

const C = <K extends string>(id: string, map: Record<K, string | [string, number]>): Record<K, number> => {
	const out = {} as Record<K, number>;
	for (const [k, v] of Object.entries(map) as [K, string | [string, number]][]) out[k] = Array.isArray(v) ? cue(id, v[0], v[1]) : cue(id, v);
	return out;
};

export const K1 = C('scene-01', {practice: 'This is a practice', questions: 'The questions mix', here: "Here's the first", skate: "A skate bowl's", board: 'A skateboard rests', find: 'Find the equation', diff: 'If you differentiate', two: 'two x-values', one: ['minus one', 1], but: "But there's no", so: 'So how do', keep: 'answers to keep'});
export const K2 = C('scene-02', {start: 'Start with', imagine: 'Imagine working', one: 'one number', last: 'The last thing', structure: 'outer structure', here: 'Here are three', which: 'Which rule does', think: 'Think for three', f1: 'For x cubed', r1: 'product rule', f2: 'For sine of', r2: 'chain rule', f3: 'For sine x over', r3: 'quotient rule', same: 'Same pieces', rules: 'different rules'});
export const K3 = C('scene-03', {next: 'Next the domain', before: 'Before you', log: 'A log needs', fraction: 'A fraction', tan: 'And tan', asym: 'its asymptotes', why: 'Why does', an: 'An x-value outside', it: 'produces it', so: 'So the domain picks'});
export const K4 = C('scene-04', {back: 'Back to the', fn: 'The function is', last: 'so the last step', means: 'That means', deriv: 'The derivative is', x: ['over x', 1], domain: 'The domain is', input: 'positive input', write: 'Write that'});
export const K5 = C('scene-05', {tangent: 'The tangent has', set: 'so set two', mult: 'Multiply through', fact: 'That factorises', one: 'or minus one', check: 'Now check', minus: "Minus one isn't", rej: 'reject it', at: 'At x equals three', height: 'the height of', so: 'So the tangent is', tidy: 'Tidy it up', three: ['six natural log three', 2]});
export const K6 = C('scene-06', {here: "Here's a different", torch: 'A torch at', find: "Find the beam's", isnt: "torch isn't", slip: 'common slip', yx: 'y equals x', but: 'But that line', comp: 'completely', instead: 'Instead call', a: ['x equals a', 1], point: 'The point is', grad: 'the gradient there', so: 'So the tangent is', now: 'Now make it', put: 'Put x and y', divide: 'divide both', one: 'a equals one', beam: 'So the beam', ex: ['equals e x', 1]});
export const K7 = C('scene-07', {last: 'The last kind', coaster: 'A coaster track', find: 'Find a and b', two: 'two things', eqs: 'two equations', on: 'on the curve', three1: ['minus three', 1], flat: 'is flat there', three2: ['minus three', 2], sub: 'Subtract the', a0: 'a is zero', b: 'b is minus', curve: ['The curve is', 2], track: 'the coaster track', deriv: 'Its derivative', grad: 'The gradient goes', max: 'local maximum', using: 'Using only one', family: 'whole family'});
export const K8 = C('scene-08', {here: "Here's the whole", last: 'Last step suggests', domain: 'The domain picks', and: 'And if the point', a: ['like a', 1], try: 'Try the first', last2: ['The last step', 1], allowed: 'is allowed'});
export const K9 = C('scene-09', {your: 'Your turn', pause: 'Pause here'});
export const K10 = C('scene-10', {chain: 'By the chain', domain: 'The domain needs', two: ['above two', 1], setting: 'Setting the', pm: 'plus or minus', one: 'One minus root', outside: 'outside the domain', so: 'So x equals', five: ['root five', 3], keep: 'Keeping both'});
export const K11 = C('scene-11', {last: 'Last one', pause: 'Pause here'});
export const K12 = C('scene-12', {zero: 'Zero one', name: 'name the touching', a: ['equals a', 1], tangent: 'The tangent is', put: 'Put in zero', ln2: 'natural log a is two', sq: ['e squared', 1], y: ['The tangent is y', 2], grad: 'The gradient at', domain: ['the domain', 1]});
export const K13 = C('scene-13', {so: 'So for any', last: 'the last step', domain: 'write the domain', answer: "answer what's asked", next: 'Next the same', here: "Here's a rate", amount: 'an amount', fn: 'a function', area: 'an area', est: 'an estimate', which: ['fits which', 1]});
export const K14 = C('scene-14', {here: 'Here are', pause: 'Pause the video'});
