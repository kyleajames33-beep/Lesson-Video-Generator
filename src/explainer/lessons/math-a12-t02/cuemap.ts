// Every cue phrase for math-a12-t02, resolved once at load against the measured word timings (a missing phrase
// throws here, before any scene renders). Repeated words name their occurrence: [phrase, n].
import {cue} from './common';

const C = <K extends string>(id: string, map: Record<K, string | [string, number]>): Record<K, number> => {
	const out = {} as Record<K, number>;
	for (const [k, v] of Object.entries(map) as [K, string | [string, number]][]) out[k] = Array.isArray(v) ? cue(id, v[0], v[1]) : cue(id, v);
	return out;
};

export const K1 = C('scene-01', {here: "Here's the city's", between: 'Between zero', twice: 'cross twice', oct: 'late October', feb: 'late February', calc: "A calculator's", third: 'a third', graph: 'The graph answers', every: 'Every solution', inside: 'inside the stated'});
export const K2 = C('scene-02', {first: 'First, make', twelve: 'Twelve plus', take: 'take twelve', two: 'two sine of the bracket equals one', divide: 'Divide by two', half: 'equals a half', sliding: 'Sliding both', squash: 'then squashing', values: 'same x values', now: 'Now the question'});
export const K3 = C('scene-03', {call: 'Call the inside', six1: 'x minus pi over six', when: 'When x runs', six2: 'eleven pi over six', window: "That's the window", sine: 'Sine u is', six3: 'five pi over six', next: 'The next ones', outside: 'outside the window', undo: 'Now undo', x: 'x is u plus', pi3: 'x is pi over three', pi: ['or pi', 1], sixth: 'a sixth of', same: "That's the same slide"});
export const K4 = C('scene-04', {number: 'A number multiplying', solve: 'Solve two sine', divide: 'Divide by two', two: 'root three over two', let: 'Let u equal', four: 'zero to four pi', cycles: "That's two full", first: 'In the first cycle', three1: 'two pi over three', add: 'Add two pi', three2: 'eight pi over three', halve: 'Halve them all', three3: 'four pi over three', stop: 'Stop at two', answers: 'half the answers'});
export const K5 = C('scene-05', {here: "Here's why", rises: 'rises through', once1: ['values once', 1], falls: 'falls through', once2: ['it once', 1], so: 'So a line', unless: 'unless an end', raise: 'Raise the line', cycle: 'once per cycle', raise2: 'Raise it to', all: 'at all', count: 'So count the cycles', sits: 'line sits'});
export const K6 = C('scene-06', {but: 'But watch', solve: 'Solve two cos', included: 'ends included', cos: 'Cos of the bracket', window: 'The window for u', four2: 'seven pi over four', cosu: 'Cos u is', also: 'but also at', ends: 'ends of the window', so: 'So x is zero', pi: 'and two pi', three: "That's three solutions", because: 'because both ends'});
export const K7 = C('scene-07', {graphs: 'Graphs also', which: 'For which values', pi: ['two pi', 1], slide: 'Slide a level', starts: 'The curve starts', one: 'at minus one', same: 'the same date', rises: 'It rises to', falls: 'falls to minus two', b1: 'Between minus one', b2: 'Between minus two', too: 'twice too', but: 'But at exactly', exact: 'exactly minus one', hits: 'hits both ends', two: 'at two or', touches: 'only touches', so: 'So k is', last: ['minus one and two', 1]});
export const K8 = C('scene-08', {tan: 'Tan works', solve: 'Solve tan', pi1: 'zero to pi', let: 'Let u equal', pi2: 'zero to two pi', repeats: 'Tan repeats', four1: 'pi over four, and', four2: 'five pi over four', halve: 'Halve them', eight: 'five pi over eight', asym: 'The asymptotes', never: 'never solutions', there: 'defined there'});
export const K9 = C('scene-09', {you: 'You can check', plot: 'Plot both', first: 'For the first', match: 'which match', pi: ['three and pi', 1], ineq: 'The graph answers', above: 'The curve is above', so: 'so two sine', pi2: ['three to pi', 1], app: 'The app gives', expect: 'to expect'});
export const K10 = C('scene-10', {here: "Here's the rule", do: 'Do to the domain', x1: ['you do to x', 1], two: 'is two x', double: 'double the endpoints', it: "If it's", both: 'from both', then: 'Then find', undo: 'undo the steps', x2: 'back to x'});
export const K11 = C('scene-11', {your: 'Your turn', pause: 'Pause here'});
export const K12 = C('scene-12', {cos: 'Cos of the bracket', two1: 'three over two', win: 'The u-window', three: 'five pi over three', cosu: 'Cos u is', six: 'minus pi over six', add: 'Add pi over three', two2: 'or pi over two', thirteen: 'Thirteen pi', domain: 'outside the domain'});
export const K13 = C('scene-13', {last: 'Last one', pause: 'Pause here'});
export const K14 = C('scene-14', {let: 'Let u equal', halve: 'Halve the endpoints', pi1: 'minus pi to pi', tan: 'Tan u is', three1: 'pi over three, and', earlier: 'one period earlier', three2: 'minus two pi over three', double: 'Double them', three3: 'four pi over three', stop: 'Stopping at', neg: 'the negative one'});
export const K15 = C('scene-15', {so: 'So the graph', next: 'Next', at: 'At a harbour', reads: 'board reads', high: 'at high tide', one: 'one and a half', low: 'at low tide', six: 'six hours later', if: 'If the tide', time: 'at any time'});
export const K16 = C('scene-16', {here: 'Here are', pause: 'Pause the video'});
