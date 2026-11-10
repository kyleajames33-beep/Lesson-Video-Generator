// Every cue phrase for math-a12-i06, resolved once at load against the measured word timings (a missing phrase
// throws here, before any scene renders). Repeated words name their occurrence: [phrase, n].
import {cue} from './common';

const C = <K extends string>(id: string, map: Record<K, string | [string, number]>): Record<K, number> => {
	const out = {} as Record<K, number>;
	for (const [k, v] of Object.entries(map) as [K, string | [string, number]][]) out[k] = Array.isArray(v) ? cue(id, v[0], v[1]) : cue(id, v);
	return out;
};

export const K1 = C('scene-01', {meaning: "Let's give the curve", storm: 'A storm', rate: 'is the rain rate', start: 'At the start', one: 'one centimetre an hour', by: 'By pi over two', stopped: 'has stopped', how: 'So how much', keeps: 'The rate keeps', multiply: 'multiply rate', but: 'But adding up'});
export const K2 = C('scene-02', {take: 'Take one thin', width: 'with width delta', means: 'Delta x just means', over: 'Over that short', hardly: 'hardly changes', call: 'Call the rate', so: 'So the rain', graph: 'On the graph', area: 'its area', cm: 'Centimetres per hour', each: "So each rectangle's", change: "That's the change"});
export const K3 = C('scene-03', {now: 'Now add up', sign: 'This sign', sum: 'The sum of f', estimates: 'estimates the total', four: 'With four strips', total: 'the total is about', falls: 'The rate falls', above: 'reaches above', over: 'overestimate', height: 'The height can come', right: 'Use the right ends', under: 'sits under', gives: 'That gives about', underest: 'underestimate', between: 'in between'});
export const K4 = C('scene-04', {make: 'So make the strips', dx: 'Delta x is the whole', so: 'So delta x equals', eight: 'Double n to eight', sixteen: 'Sixteen strips', thirty: 'thirty-two gives', mean: 'Meanwhile, the right', why: "Here's why", shrinks: 'shrinks', both: 'Both estimates', later: 'A later video'});
export const K5 = C('scene-05', {every: 'Every estimate', so: 'So the total change', region: 'this region', works: 'That works when', cont: 'This curve is also', inf: 'Informally', paper: 'off the paper', jump: 'would jump', lift: 'have to lift', topic: 'In this topic'});
export const K6 = C('scene-06', {flat: 'Rectangles have flat', join: 'So join the top', each: 'Each strip becomes', area: 'Its area is', avg: "That's the average", four: 'With just four', closer: "That's closer", bends: 'the curve bends', under: 'sits just under'});
export const K7 = C('scene-07', {lets: "Let's compare", trolley: "A trolley's speed", est: 'Estimate how far', speed: 'Speed times time', dx: 'Delta x is two', half: ['a half', 1], heights: 'The heights at', four: 'and four.', left: 'Left rectangles use', lsum: 'one point seven five', right: 'Right rectangles use', rsum: 'three point seven five', trap: 'The trapezia take', tsum: 'two point seven five'});
export const K8 = C('scene-08', {now: 'Now refine all', eight: 'At eight strips', sixteen: 'At sixteen strips', settle: 'All three settle', look: 'Now look at the errors', halve: 'roughly halve', quarter: 'drops to about a quarter', bends: 'This curve bends', fastest: 'improve fastest', tryit: 'Try it yourself'});
export const K9 = C('scene-09', {here: "Here's one line", strip: 'Strip equals', add: 'Add the strips', each: 'Each strip is', sum: 'the sum estimates', thinner: 'thinner strips make'});
export const K10 = C('scene-10', {pause: 'Pause here'});
export const K11 = C('scene-11', {dx: 'Delta x is a half', heights: 'The left heights', add: 'which add to', times: 'Times the width', falls: 'The rate falls', over: "That's an overestimate", wrong: 'Twenty-eight point five is', forgot: 'It forgot'});
export const K12 = C('scene-12', {pause: 'Pause here'});
export const K13 = C('scene-13', {each: 'Each trapezium', first: 'The first is', second: 'The second is', so: 'So the estimate', wrong: 'Twenty metres is', uses: 'It uses one'});
export const K14 = C('scene-14', {so: 'So thin strips', but: 'But every rate', bath: "Here's a bath", net: 'Its net flow', after: 'After six minutes', hangs: 'hangs below', what: 'What does a strip'});
export const K15 = C('scene-15', {pause: 'Pause the video'});
