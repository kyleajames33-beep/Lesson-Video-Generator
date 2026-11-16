// Every cue phrase for math-a12-s05, resolved once at load against the measured word timings (a missing phrase
// throws here, before any scene renders). Repeated words name their occurrence: [phrase, n].
import {cue} from './common';

const C = <K extends string>(id: string, map: Record<K, string | [string, number]>): Record<K, number> => {
	const out = {} as Record<K, number>;
	for (const [k, v] of Object.entries(map) as [K, string | [string, number]][]) out[k] = Array.isArray(v) ? cue(id, v[0], v[1]) : cue(id, v);
	return out;
};

export const K1 = C('scene-01', {last: 'Last video', lets: "Let's give", parcel: 'A parcel tracker', x: 'X is the arrival', f: 'F of x is the chance', climbs: 'F climbs slowly', steeply: 'and steeply', compare: 'Compare two strips', from1: ['From zero point five', 1], r1: 'zero point zero one two', from2: 'From two point five', r2: 'zero point zero five seven', so: 'So the same', five: 'five times', steep: 'Steep means', closely: 'packed closely', how: 'So how do'});
export const K2 = C('scene-02', {divide: 'Divide the rise', per: ['per hour', 1], make: 'Make the strip', thinner: 'thinner and', becomes: 'that becomes', define: 'So we define', prime: 'F prime of x', here: 'Here, f of x', two: 'two x over nine', zero: 'zero everywhere', at: 'At one point five', third: 'gradient one third', hour: ['per hour', 2], isnt: "A density isn't", rope: "like a rope's", high: 'A high density'});
export const K3 = C('scene-03', {here: "Here's why", go: 'Go back', divide: 'Divide each', heights: 'The heights become', second: ['per second', 1], now: 'Now each', add: 'the areas add', three: 'Three point five is', can: 'A density can', area: 'is the area'});
export const K4 = C('scene-04', {so: 'So for a density', for: 'For the density models', prim: 'F is a primitive', area: 'the area under f from c', thats: "That's exactly", parcel: 'For the parcel', onetwo: 'from one to two', four: 'four ninths', third: ['one third', 1], chance: "That's the chance", same: 'the same one third', since: 'And since single'});
export const K5 = C('scene-05', {every: 'Every density', first: 'First', never: 'is never negative', because: 'because F never', second: 'Second', total: 'the total area', if1: ['If X lives', 1], if2: 'If X can be', check: 'Check two x', its: "It's never negative", tri: 'a triangle', half: 'half of three', one: ['which is one', 1]});
export const K6 = C('scene-06', {these: 'These two', second: "A second courier's", density: 'has density k', their: 'Their stop', find: 'Find k', total: 'The total area', graph: 'The graph is', eight: 'is eight k', integ: 'Integrating gives', so: 'So eight k', eighth: 'one eighth', pos: 'It has to be positive'});
export const K7 = C('scene-07', {now: 'Now find', integ: 'Integrate four', thats: "That's one eighth", seven: 'seven sixteenths', just: 'Just under half', first: 'first hour', fits: 'That fits', zero: 'highest at zero'});
export const K8 = C('scene-08', {we: 'We can also', area: 'the area under f', so: 'So F of x is', t: ['The letter t', 1], dummy: 'a dummy variable', here: 'Here, that gives', check: 'Check the ends', f0: 'F of zero', f4: 'F of four', one: ['which is one', 1], f1: 'And F of one', seven: 'seven sixteenths'});
export const K9 = C('scene-09', {going: 'Going the other', diff: ['Differentiate', 1], a: 'A variable has', first: 'First check', f0: 'F of zero', f2: 'F of two', expand: 'Expand it', diff2: ['differentiate', 2], dens: 'The density is', both: 'Both factors', positive: 'are positive', and: 'And f is zero', flat: 'the flat pieces', zero: 'gradient zero'});
export const K10 = C('scene-10', {here: "Here's a picture", think: 'Think of', F: 'F is the chance', f: 'and f is how fast', diff: 'Differentiate F', integ: 'Integrate f', and: 'And by the end', one: 'exactly one'});
export const K11 = C('scene-11', {your: 'Your turn', find: 'Find k', pause: 'Pause here'});
export const K12 = C('scene-12', {total: 'The total area', four: 'four k', so: 'So k is', then: 'Then the probability', thats: "That's one quarter", five: 'five eighths', wrong: 'Three quarters is wrong', height: "That's the height", area: 'not an area'});
export const K13 = C('scene-13', {last: 'Last one', find: 'Find its', pause: 'Pause here'});
export const K14 = C('scene-14', {diff: 'Differentiate the middle', four: 'Four minus two x', two: 'two minus x', never: "It's never negative", outside: 'Outside that', zero: 'gradient zero', saying: 'Saying f is one', deriv: 'The derivative', one: 'not one'});
export const K15 = C('scene-15', {so: 'So the density', next: 'Next', here: "Here's the density", where: 'Where is X', likely: 'most likely', and: "And where's", side: 'each side'});
export const K16 = C('scene-16', {here: 'Here are the key', pause: 'Pause the video'});
