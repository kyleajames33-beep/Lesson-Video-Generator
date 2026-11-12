// Every cue phrase for math-a12-f03, resolved once at load against the measured word timings (a missing phrase
// throws here, before any scene renders). Repeated words name their occurrence: [phrase, n].
import {cue} from './common';

const C = <K extends string>(id: string, map: Record<K, string | [string, number]>): Record<K, number> => {
	const out = {} as Record<K, number>;
	for (const [k, v] of Object.entries(map) as [K, string | [string, number]][]) out[k] = Array.isArray(v) ? cue(id, v[0], v[1]) : cue(id, v);
	return out;
};

export const K1 = C('scene-01', {last: 'Last video ended', one: 'one tin on top', how: 'How many tins', adding: 'Adding fifteen', time: 'one at a time', slip: 'slip', famous: "There's a famous", line: 'in one line', but: 'But a trick', so: 'So why does', every: 'for every arithmetic'});
export const K2 = C('scene-02', {pair: 'Pair the top row', s1: ['sixteen', 1], now: 'Now pair the second', s2: ['sixteen', 2], every: 'Every pair gives', up: 'goes up by one', down: 'goes down by one', heres: "Here's the picture", copy: 'Copy the pyramid', turn: 'turn it upside', fit: 'fit it against', row: 'Every row now holds', fifteen: 'there are fifteen rows', shape: 'the shape holds', thats: "That's two hundred", pyr: 'The pyramid is exactly', that: 'that', t120: ['twenty', 1]});
export const K3 = C('scene-03', {same: 'The same thing', write: 'Write the sum forwards', last: 'up to the last term', then: 'Then write the same', back: 'backwards underneath', col: 'In each column', up: 'goes up by d', down: 'goes down by d', every: 'so every column', n1: ['a sub n', 2], there: 'There are n columns', two: 'two lots of S', halve: 'Halve it', n2: ['a sub n', 4], words: 'In words'});
export const K4 = C('scene-04', {often: "Often you don't", but: 'But you do know', swap: 'Swap that in', bracket: 'the bracket becomes', so: 'So S sub n is also', d: ['lots of d', 3], same: "It's the same sum", test: 'Test it on the pyramid', with: 'With a and d', its: "it's fifteen over two", seven: "That's seven and a half", again: 'again', use: 'Use the first form', second: 'and the second when'});
export const K5 = C('scene-05', {find: 'Find the sum', here: 'Here a is three', dont: "We don't know", second: 'use the second form', thats: "That's ten", nineteen: 'Nineteen fours is', so: "so it's ten times", twenty: ['eight hundred and twenty', 1], check: 'Check with the first', t20: 'The twentieth term', and: 'and ten times three'});
export const K6 = C('scene-06', {now: 'Now, the sum', its: "It's arithmetic", first: 'The first term is fifty', how: 'But how many', not: 'Not one hundred', minus: 'two hundred minus fifty', f51: ['fifty-one', 1], so: 'So the sum is', thats: "That's one hundred", f75: 'seventy-five'});
export const K7 = C('scene-07', {some: 'Sometimes n', how: 'How many terms', here: 'Here a is four', so: 'so S sub n', set: 'Set that above', its: 'Its positive root', five: ['five', 5], but: 'But n must be', check: 'Check both sides', t13: 'Thirteen terms', f42: 'forty-two', f14: 'fourteen terms make', e11: 'eleven', because: 'Because every term'});
export const K8 = C('scene-08', {heres: "Here's a surprise", how: 'How many terms', here: 'Here a is eleven', so: 'so S sub n', set: 'Set that equal', roots: 'two roots', eight: 'eight', both: 'Both are whole', four: 'Four terms make', next: 'The next four terms', add: 'they add to zero', again: 'again', when: 'When the terms go', check: 'check every root'});
export const K9 = C('scene-09', {heres: "Here's the short", an: 'An arithmetic sum', its: "It's guaranteed", because: 'because their terms', other: 'Other lists', for: 'For one, plus two', gives: 'it gives seven', seven: ['seven', 2]});
export const K10 = C('scene-10', {your: 'Your turn', pause: 'Pause here'});
export const K11 = C('scene-11', {here: 'Here a is five', t30: 'The thirtieth term', n92: ['ninety-two', 1], so: 'So the sum is', f55: 'fifty-five', wrong: 'Fifteen hundred', uses: 'It uses thirty', t29: ['twenty-nine', 2]});
export const K12 = C('scene-12', {last: 'Last one', pause: 'Pause here'});
export const K13 = C('scene-13', {here: 'Here a is two', sq: ['squared', 1], two: 'Two n squared is', ten: ['ten', 1], tenTerms: 'Ten terms make', so: 'So the answer', wrong: 'Ten is wrong', over: 'over'});
export const K14 = C('scene-14', {so: 'So pairing', next: 'Next, real situations', crew: 'A volunteer crew', fifty: 'fifty seedlings', eighty: 'eighty on the second', h110: 'a hundred and ten', thirty: 'thirty more each', after: 'After twelve days', more: 'more or less', seedlings: ['seedlings', 2]});
export const K15 = C('scene-15', {here: 'Here are the key', pause: 'Pause the video'});
