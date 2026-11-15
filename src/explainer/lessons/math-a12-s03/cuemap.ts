// Every cue phrase for math-a12-s03, resolved once at load against the measured word timings (a missing phrase
// throws here, before any scene renders). Repeated words name their occurrence: [phrase, n].
import {cue} from './common';

const C = <K extends string>(id: string, map: Record<K, string | [string, number]>): Record<K, number> => {
	const out = {} as Record<K, number>;
	for (const [k, v] of Object.entries(map) as [K, string | [string, number]][]) out[k] = Array.isArray(v) ? cue(id, v[0], v[1]) : cue(id, v);
	return out;
};

export const K1 = C('scene-01', {last: 'Last video', six: 'Six equal', five: ['point five', 1], thats: "That's the expected", never: 'can never', now: 'Now a lopsided', vet: 'A vet clinic', visits: 'three visits', p1: 'zero point one', p3: 'zero point three', p4: 'zero point four', p2: 'and zero point two', where: 'Where does', what: 'What does', how: 'how spread'});
export const K2 = C('scene-02', {here: "Here's what", picture: 'Picture many', starts: 'This run starts', first: 'high at first', ten: 'After ten', thousand: 'After a thousand', seven: 'one point seven', another: 'Another run', so: 'So the expected', no: 'No cat makes', isnt: "It isn't a", centre: "It's the centre", write: 'We write', mu: 'letter mu', dist: 'for the distribution'});
export const K3 = C('scene-03', {where: 'Where does', die: 'For a fair', ordinary: 'ordinary average', arent: "visits aren't", imagine: 'Imagine a thousand', hundred: 'About a hundred', three: 'three hundred make', four: 'four hundred make', two: 'two hundred make', seventeen: "That's seventeen", seven: 'average is one', dividing: 'Dividing each', sum: 'the sum of', beam: 'And the beam', bars: 'heavier bars'});
export const K4 = C('scene-04', {now: 'Now, spread', natural: 'A natural idea', these: 'These signed', three: 'and one point three', weight: 'Weight each', zero: 'exactly zero', luck: "That's not bad", mu: 'Mu is the', right: 'on the right', square: 'So we square', variance: "That's the variance", expected: "It's an expected", mu2: ['from mu', 2]});
export const K5 = C('scene-05', {here: 'Here it is', squared: 'The squared deviations', weight: 'Weight them', one: 'point eight one', but: 'But squaring', x: 'X counts visits', root: 'take the square', sd: 'The standard deviation', nine: 'point nine', measures: 'It measures', here2: 'Here, the values', six: 'two point six'});
export const K6 = C('scene-06', {faster: "There's a faster", expand: 'Expand the square', squared: 'plus mu squared', weight: 'Weight each part', middle: 'The middle part', mu: 'which is mu', last: 'The last has', one: 'which is one', left: "What's left", minus: ['minus mu squared', 2], for: 'For our', answer: 'same answer', careful: 'Be careful', not: 'not the probabilities', isnt: "it isn't the"});
export const K7 = C('scene-07', {here: "Here's how", insurer: 'A pet insurer', p02: 'zero point zero two chance', p05: 'zero point zero five chance', otherwise: 'otherwise nothing', expected: 'The expected payout', dollars: 'ten dollars', beam: 'On the beam', so: 'So in the long', before: "before the insurer's", sd: 'But the standard', d2: 'thirty-four dollars', one: 'One policy', either: 'either way', need: 'need many', over: 'takes over'});
export const K8 = C('scene-08', {here: "Here's a way", mean: 'Mean of the', square: 'Square the values', never: 'can never'});
export const K9 = C('scene-09', {your: 'Your turn', pause: 'Pause here'});
export const K10 = C('scene-10', {e: 'E of X is', six: 'one point six', ex2: 'E of X squared', two: 'three point two,', so: 'So the variance', four: 'six four', wrong: ['Three point two minus', 2], subtract: 'You subtract'});
export const K11 = C('scene-11', {last: 'Last one', pause: 'Pause here'});
export const K12 = C('scene-12', {use: 'Use both', add: 'The probabilities add', eight: 'point eight', exp: 'And the expected', one: 'two point one', take: 'Take away', b: ['b is zero', 2], a: 'a is zero', wrong: 'A and b both', only: 'uses only', two: 'two point two'});
export const K13 = C('scene-13', {so: 'So the expected', variance: 'The variance is', sigma: 'and sigma', every: 'Every sum', next: 'Next, a new', what: 'What if', interval: 'an interval', then: 'Then the bars', thinner: ['thinner', 1], thinner2: ['thinner', 2], no: "there's no"});
export const K14 = C('scene-14', {here: 'Here are the key', pause: 'Pause the video'});
