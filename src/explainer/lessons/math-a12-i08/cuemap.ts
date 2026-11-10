// Every cue phrase for math-a12-i08, resolved once at load against the measured word timings (a missing phrase
// throws here, before any scene renders). Repeated words name their occurrence: [phrase, n].
import {cue} from './common';

const C = <K extends string>(id: string, map: Record<K, string | [string, number]>): Record<K, number> => {
	const out = {} as Record<K, number>;
	for (const [k, v] of Object.entries(map) as [K, string | [string, number]][]) out[k] = Array.isArray(v) ? cue(id, v[0], v[1]) : cue(id, v);
	return out;
};

export const K1 = C('scene-01', {meaning: "Let's give it a meaning", shop: 'A shopping centre', fort: 'For t hours', net: 'at a net rate', hour: 'cars an hour', noon: 'After noon', negative: 'is negative', arrive: 'than arrive', shaded: 'The shaded signed area', aofx: 'is A of x', integral: 'the integral from zero', counts: 'It counts', weuse: 'We use t inside', moving: 'the moving end', think: 'Think for a moment', fastest: 'fastest', fullest: 'fullest'});
export const K2 = C('scene-02', {lets: "Let's track A", one: 'Up to one', half1: ['half', 1], two: 'Up to two', four: 'of two is four', three: 'Up to three', half2: ['half', 2], past: 'Past three', subtract: 'subtract', afour: 'A of four', six: 'A of six', zero: 'back to zero', plot: 'Plot these', hill: 'like a hill'});
export const K3 = C('scene-03', {now: 'Now compare', start: 'At the start', climbs: 'climbs fastest', three: 'At three', flat: 'A is flat', noon: "That's noon", fullest: 'fullest', after: 'After that', falls: 'A falls', one: 'At x equals one', grad2: 'gradient two', there2: 'there is two', looks: 'It looks like', every: 'every x'});
export const K4 = C('scene-04', {why: "Here's why", call: 'Call the graph', move: 'Move the end', plush: 'x plus h', gains: 'A gains', width: 'with width h', height: 'Its height', grows: 'A grows by', divide: 'Divide by h', chord: ['is about f of x', 2], first: 'first principles', atone: 'At x equals one', half: 'a half', sevenfive: 'one point seven five', tenth: 'a tenth', ninefive: 'one point nine five', shrinks: 'h shrinks', flatter: 'gets flatter', exactly: 'becomes exactly'});
export const K5 = C('scene-05', {so: 'So differentiating', words: 'In words', iff: 'If f is a rate', rate: 'grows at that rate', car: 'For the car park', check: 'Check it here', trap: 'The trapezium from', width: 'width x', soA: 'So A of x', squared: 'half x squared', deriv: 'Its derivative', with: 'started with', prim: 'So A is a primitive'});
export const K6 = C('scene-06', {is: 'Is this only', tryc: 'Try a curve', shade: 'Shade under', x: 'up to x', app: 'a graphing application', plots: 'plots A of x', watch: 'Watch the gradient', traces: 'It traces', allow: 'strips allow', tryit: 'Try it in', prim: 'And a primitive', matches: 'matches the plotted', edge: 'The edge-strip', only: 'It only needed'});
export const K7 = C('scene-07', {what: 'What if', every: 'Every value', trap: 'the trapezium from', cars: 'two hundred and fifty', slides: 'slides down', half: 'by two and a half', none: 'none of its', atx: 'At x equals two', one: 'still one', diff: 'A different start', plusc: 'plus C'});
export const K8 = C('scene-08', {now: 'Now the big', take: 'Take any primitive', any2: 'Any two primitives', soF: 'so F of x', start: 'At the start', zero: 'is zero because', soFb: 'So F of b', cancel: 'constants cancel', leaves: 'that leaves', ftc: "That's the Fundamental", cont: 'For a continuous', anyF: 'for any primitive', write: 'We write it', brackets: 'square brackets'});
export const K9 = C('scene-09', {now: 'Now check', trolley: "The trolley's", prim1: 'A primitive of x squared', eight: 'eight thirds', about: "That's about", rain: "The rain gauge's", cos: 'A primitive of cos', one: 'exactly one', bath: "And the bath's", ninety: 'Ninety-six', thirty2: ['thirty-two', 2], so: 'So instead', two: 'two values'});
export const K10 = C('scene-10', {here: "Here's the pair", diff: 'Differentiate the area', integ: 'Integrate the rate', works: 'second works'});
export const K11 = C('scene-11', {pause: 'Pause here'});
export const K12 = C('scene-12', {zero: 'is zero', because: 'because from', grad: 'For the gradient', soA: 'so A prime', at2: 'At two', three: 'which is three', wrong: 'is wrong', height: 'reading the height'});
export const K13 = C('scene-13', {pause: 'Pause here'});
export const K14 = C('scene-14', {prim: 'A primitive of', cubed: 'is x cubed', so: 'So the integral', six: 'or twenty-six', any: 'Any primitive', add: 'Add five', wrong: 'is wrong', forgets: 'It forgets'});
export const K15 = C('scene-15', {so: 'So the area', next: 'Next', heres: "Here's one", third: 'One third', go: 'signs go'});
export const K16 = C('scene-16', {pause: 'Pause the video'});
