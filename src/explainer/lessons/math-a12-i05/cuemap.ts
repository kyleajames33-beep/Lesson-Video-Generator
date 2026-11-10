// Every cue phrase for math-a12-i05, resolved once at load against the measured word timings (a missing phrase
// throws here, before any scene renders). Repeated words name their occurrence: [phrase, n].
import {cue} from './common';

const C = <K extends string>(id: string, map: Record<K, string | [string, number]>): Record<K, number> => {
	const out = {} as Record<K, number>;
	for (const [k, v] of Object.entries(map) as [K, string | [string, number]][]) out[k] = Array.isArray(v) ? cue(id, v[0], v[1]) : cue(id, v);
	return out;
};

export const K1 = C('scene-01', {home: "A home's", sunset: 'again at sunset', energy: 'The energy', fastest: 'fastest at noon', grad: 'Its gradient is the power', prim: 'a primitive of a sine', which: 'So which curve', cos: 'Cos x is the obvious', test: 'Test it at', one: 'is one there', climbing: 'climbing', but: 'But cos x', minus: 'gradient minus one', wrong: 'wrong sign', where: 'So where does'});
export const K2 = C('scene-02', {check: 'Check another', at: 'At three pi', one: 'gradient one', every: 'Everywhere', turn: 'So turn cos', down: ['upside down', 1], flipping: 'Flipping a curve', slope: 'every slope', climbs: 'climbs from zero', falls: 'falls from pi', watch: 'Watch the gradient', exactly: ['exactly', 2], diff: 'Differentiate back', so: 'So the integral', C: 'plus C'});
export const K3 = C('scene-03', {easier: 'Cos x is the easier', rules: 'From the derivative rules', at0: 'At zero', at2: 'At pi over two', so: 'So the integral', C: 'plus C', nominus: 'no minus sign', both: 'Both rules', radians: ['radians', 2]});
export const K4 = C('scene-04', {third: 'The third rule', earlier: 'In an earlier video', so: 'So the integral', look: 'Look at the graphs', never: 'never less than one', climbs: 'tan x climbs', at4: 'At pi over four', two: ['is two', 1], sec: 'and sec squared of pi', but: 'But tan x has', zero: 'wherever cos x is zero', piece: 'one piece at a time'});
export const K5 = C('scene-05', {now: 'Now put an inside', find: 'Find the integral', tryit: 'Try sine five', graph: 'On the graph', squashed: 'squashed sideways', every: 'every slope', its: 'Its derivative is', need: 'We need fifteen', answer: 'So the answer', C: 'plus C', diff: 'Differentiate back', same: "It's the same cause", linear: 'A linear inside'});
export const K5A = C('scene-05a', {back: 'Back to the solar', power: 'their power is', inner: 'The inner rate', energy: 'The energy is', C: 'plus C', sunrise: 'At sunrise', cIs: 'so C is', noon: 'By noon', sunset: 'By sunset', half: "Half the day's"});
export const K6 = C('scene-06', {next: 'Next, the integral', inside: 'The inside has rate', matches: 'matches it', answer: 'So the answer', C: 'plus C', check: 'Check:', slide: 'is a slide', keep: 'Keep the asymptotes', where: "They're where", thats: "That's at", there: 'from there'});
export const K7 = C('scene-07', {what: 'What if the inside', find: 'Find the integral', inside: 'The inside is', front: 'out the front', minus: 'And minus sine', so: 'So this is the chain', answer: 'the answer is', C: 'plus C', diff: 'Differentiate back', inner: 'The inner derivative', cos: 'Cos of x squared, on', it: "can't integrate it"});
export const K8 = C('scene-08', {same: 'The same reverse', find: 'Find the integral', inside: 'The inside is x cubed', answer: ['So the answer', 1], C1: ['plus C', 1], harder: 'Now a harder-looking', inside2: 'The inside is sine', answer2: ['so the answer', 2], C2: ['plus C', 2], what: 'What about the asymptotes', tan: 'Tan needs', but: 'But sine x stays', never: 'it never gets there', every: 'works for every x'});
export const K9 = C('scene-09', {here: "Here's a way", diff: 'Differentiating moves', sin: ['sine,', 1], cos: ['cos,', 1], msin: ['minus sine,', 1], mcos: ['minus cos,', 1], back: 'back to sine', integ: 'Integrating moves', fromSin: 'One step back from sine', fromCos: 'One step back from cos', sec: 'Sec squared'});
export const K10 = C('scene-10', {pause: 'Pause here'});
export const K11 = C('scene-11', {sine: 'Sine three x has', need: 'We need six', so: 'So the answer', C: 'plus C', diff: 'Differentiate back', wrong: 'Eighteen sine', mult: 'It multiplies'});
export const K12 = C('scene-12', {pause: 'Pause here'});
export const K13 = C('scene-13', {inside: 'The inside is', step: 'One step back', so: 'So the answer', C: 'plus C', diff: 'Differentiate back', wrong: ['Two cos of', 2], sign: 'has a minus sign'});
export const K14 = C('scene-14', {so: 'So each trig', last: "That's the last", next: 'Next, a new', here: "Here's cos x", rects: 'thin rectangles', add: 'add them up', thinner: 'thinner and thinner'});
export const K15 = C('scene-15', {pause: 'Pause the video'});
