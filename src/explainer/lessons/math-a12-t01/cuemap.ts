// Every cue phrase for math-a12-t01, resolved once at load against the measured word timings (a missing phrase
// throws here, before any scene renders). Repeated words name their occurrence: [phrase, n].
import {cue} from './common';

const C = <K extends string>(id: string, map: Record<K, string | [string, number]>): Record<K, number> => {
	const out = {} as Record<K, number>;
	for (const [k, v] of Object.entries(map) as [K, string | [string, number]][]) out[k] = Array.isArray(v) ? cue(id, v[0], v[1]) : cue(id, v);
	return out;
};

export const K1 = C('scene-01', {meaning: 'give it a meaning', swell: "It's the swell", time: 'x is the time', y: 'and y is', now: 'Now change', one: 'plus one', second: "That's a second buoy", curve: 'The curve gets', look: 'look at the peak', bracket: 'The bracket says', right: 'moved right', each: 'Each part', take: 'take them one'});
export const K2 = C('scene-02', {start: 'Start outside', two: 'multiplied by two', big: 'twice as big', peaks: 'Peaks at one', axis: 'stay put', dil: 'This is a vertical', amp: 'The amplitude, the', two2: 'is now two', what: 'What if', flips: 'flips over', still: 'The amplitude is still', neg: 'be negative'});
export const K3 = C('scene-03', {add: 'Now add one', tide: 'the tide', unit: 'one unit', mid: 'Its middle line', one: 'y equals one', shape: 'The shape', high: 'The highest', low: 'the lowest', three: 'to three'});
export const K4 = C('scene-04', {surp: 'Now the surprising', buoy: 'The second buoy', later: 'little later', its: 'Its height now', ago: 'seconds ago', that: 'cos of x', peaked: 'peaked where', now: 'Now the inside', x3: 'x equals pi over three', every: 'Everything happens', slides: 'slides right', trans: "That's a horizontal", minus: 'The minus sign', right: 'to the right', plus: 'A plus sign'});
export const K5 = C('scene-05', {what: 'What about', choppy: 'A choppy', in: 'In y equals', x: 'fast as x', one: 'One full cycle', pi1: 'reaches pi', so: 'So the period', halves: 'halves to pi', sq: 'The graph is squashed', dil: 'a horizontal dilation', for: 'For sine', half: 'A half inside', long: 'a long', ground: 'groundswell'});
export const K6 = C('scene-06', {when: "When there's", here: "Here's y", tempt: "It's tempting", but: 'But the inside', at: 'which is at', factor: 'Factor out', get: 'you get', so: 'So squash', then: 'then slide left', sliding: 'Sliding left', wrong: 'which is wrong', truth: 'the true curve'});
export const K7 = C('scene-07', {same: 'The same rules', repeats: 'Tan x repeats', tan2: 'tan two x', p2: 'pi over two', asym: 'The asymptotes', move: 'move with the squash', four: 'to pi over four', every: 'every pi over two', no: 'And tan has no', range: 'Its range', amp: 'no amplitude', num: 'A number in front', not: 'not called'});
export const K8 = C('scene-08', {lets: "Let's put", range: 'and range', factor: 'Factor the inside', four1: 'x minus pi over four', squash: 'So squash', pi: 'period is pi', slide: 'Slide right', stretch: 'Stretch vertically', three: 'amplitude is three', then: 'Then shift', one: 'equals minus one', rng: 'The range runs', two: 'to two', sketch: 'To sketch', period: 'quarter period', at: 'At pi over four', four2: 'is minus four'});
export const K9 = C('scene-09', {try: 'Try this', each: 'each step', here: "Here's a way", out: 'Outside the bracket', says: 'what it says', times: 'times minus three', then: 'then minus one', inside: 'Inside the bracket', opp: 'the opposite', two: 'times two', once: "once you've", right: 'slides right'});
export const K10 = C('scene-10', {your: 'Your turn', pause: 'Pause here'});
export const K11 = C('scene-11', {two: 'is two', three: 'over three', factor: 'Factor the inside', six1: 'minus pi over six', right: 'right by pi', mid: 'The midline', six2: 'to six', slid: 'Sliding right', three2: 'out the three'});
export const K12 = C('scene-12', {last: 'Last one', pause: 'Pause here'});
export const K13 = C('scene-13', {inside: 'Inside x over', two: 'factor of two', out: 'Outside plus', unit: 'one unit', tan: 'Tan repeats', pi: 'two pi', range: 'The range', four: 'Four pi', tanEnd: 'for tan'});
export const K14 = C('scene-14', {so: 'So outside', next: 'Next', here: "Here's a city's", twelve: 'twelve plus', where: 'where the whole', on: 'On which days', thirteen: 'thirteen hours', one: 'every one'});
export const K15 = C('scene-15', {here: 'Here are', pause: 'Pause the video'});
