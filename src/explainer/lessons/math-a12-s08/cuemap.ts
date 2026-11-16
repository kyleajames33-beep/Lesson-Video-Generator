// Every cue phrase for math-a12-s08, resolved once at load against the measured word timings (a missing phrase
// throws here, before any scene renders). Repeated words name their occurrence: [phrase, n].
import {cue} from './common';

const C = <K extends string>(id: string, map: Record<K, string | [string, number]>): Record<K, number> => {
	const out = {} as Record<K, number>;
	for (const [k, v] of Object.entries(map) as [K, string | [string, number]][]) out[k] = Array.isArray(v) ? cue(id, v[0], v[1]) : cue(id, v);
	return out;
};

export const K1 = C('scene-01', {last: 'Last video', train: "The train's", where: 'Where does it', middle: 'Right in the middle', three: ['at three', 1], because: 'because the two', but: 'But most densities', think: 'Think of a', shuffle: 'on shuffle', song: 'Song lengths', how: 'How long is', build: "We'll build", four: 'zero to four', taller: "It's taller", where2: 'Where exactly', spread: 'how spread out', disc: 'In a discrete', add: 'values to add'});
export const K2 = C('scene-02', {so: "So let's make", cut: 'Cut the interval', each: "Each strip's area", strip: 'in the strip', treat: 'So treat each', values: 'Values further out', now: "Now it's a discrete", five: 'six two five', eight: 'With eight strips', sixteen: 'With sixteen', four: 'six six four', as: 'As the strips', so2: 'So the expected', dx: 'f of x dx'});
export const K3 = C('scene-03', {lets: "Let's evaluate", multiply: 'Multiply x by', its: 'Its integral from', thats: "That's sixty-four", thirds: ['eight thirds', 1], beam: 'The beam levels', and: 'And the strip sums', number: 'exactly this number', met: "You've met this", cookie: "It's the cookie", median: 'the median of', three: 'point eight three', like: 'Like a discrete', take: 'Take many values'});
export const K4 = C('scene-04', {does: 'Does this agree', train: 'For the train', so: 'So we integrate', thats: "That's twenty-five", middle: 'the middle', integral: 'The integral and', any: 'For any uniform', midpoint: 'the midpoint'});
export const K5 = C('scene-05', {now: 'Now, spread', var: 'The variance is still', weight: 'So we weight', and: 'And the quicker', exp: 'Expanding the square', int: 'The integral of f', that: 'That means', so: 'So the variance is', squared: ['minus mu squared', 2]});
export const K6 = C('scene-06', {for: 'For x over eight', thats: "That's one eighth", eight: ['which is eight', 1], subtract: 'Subtract mu squared', ninths: ['eight ninths', 1], quick: "Here's a quick", e2: 'E of X squared, eight', so: 'So sigma is', four: 'nine four', it: 'It measures', uniform: 'For a uniform from', train: 'For the train', thirds: 'four thirds'});
export const K7 = C('scene-07', {now: 'Now the playlist', suppose: 'Suppose song lengths', is: 'It is a density', never: "It's never negative", one: 'six is one', but: 'But E of X', no: 'No rule in this', func: 'sine function', so: 'So write the', then: 'Then say that', app: 'The app gives four', curve: 'of the curve', var: 'For the variance', app2: 'The app gives about', seconds: 'fifty-two seconds', shuffle: 'Shuffle sixty songs', four: 'near four', rough: 'So as a rough', show: 'Show the limits'});
export const K8 = C('scene-08', {here: "Here's a way", sum: 'Sum becomes', p: 'P of x becomes', one: 'continuous one'});
export const K9 = C('scene-09', {your: 'Your turn', find: 'Find E of X', pause: 'Pause here'});
export const K10 = C('scene-10', {e: 'E of X is', thirds: 'two thirds', e2: 'E of X squared', half: ['a half', 1], so: 'So the variance', eighteenth: 'one eighteenth', an: 'An expected value', one: 'always gives one'});
export const K11 = C('scene-11', {last: 'Last one', write: 'Write the integrals', pause: 'Pause here'});
export const K12 = C('scene-12', {e: 'E of X is', dx: 'cos x dx', var: 'The variance is', squared: ['mu squared', 1], app: 'The app gives', two: 'one four two', squaring: 'Squaring the whole', only: 'Only x is', variance: 'negative variance'});
export const K13 = C('scene-13', {so: 'So the expected', every: 'Every density so far', next: 'Next', here: 'Here are a thousand', target: 'the target', why: 'Why that shape', and: 'And when can'});
export const K14 = C('scene-14', {here: 'Here are the key', pause: 'Pause the video'});
