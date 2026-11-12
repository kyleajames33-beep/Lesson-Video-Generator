// Every cue phrase for math-a12-i11, resolved once at load against the measured word timings (a missing phrase
// throws here, before any scene renders). Repeated words name their occurrence: [phrase, n].
import {cue} from './common';

const C = <K extends string>(id: string, map: Record<K, string | [string, number]>): Record<K, number> => {
	const out = {} as Record<K, number>;
	for (const [k, v] of Object.entries(map) as [K, string | [string, number]][]) out[k] = Array.isArray(v) ? cue(id, v[0], v[1]) : cue(id, v);
	return out;
};

export const K1 = C('scene-01', {beach: 'beach entry', deep: "The deep end's", catch: "Here's the catch", so: "So we can't", but: 'But water settles', sideways: 'sideways instead', how: 'So how do'});
export const K2 = C('scene-02', {each: 'Each strip has', its: 'Its length', so: ["So each strip's", 1], add: 'Add them up', thinner: 'make them thinner', one: ['y equals one', 1], limits: 'The limits are', write: 'write x in terms', iff: 'If y is', area: ['So the area', 1], thats: "That's e to", one2: ['minus one', 1], about: 'about one point'});
export const K3 = C('scene-03', {graphs: 'The graphs of', reflecting: 'Reflecting swaps', reflect: 'reflect our region', curve: 'The curve becomes', yaxis: 'The y-axis becomes', region: ['And the region', 1], one: ['zero to one', 1], thats: "That's the integral", so: "So the pool's", its: "It's the same", up: 'stand up'});
export const K4 = C('scene-04', {concrete: 'concrete under the sloping', draw: 'Draw the rectangle', e: ['which is e', 1], curve: 'The curve splits', piece: 'The piece against', other: 'The other piece', so: ['So its area', 1], one: ['exactly one', 1], ramp: "The ramp's", we: 'We found'});
export const K5 = C('scene-05', {when1: ['When the curve', 1], when2: ["When it's", 1], take: 'Take x equals', from1: 'From zero to two', thirds1: ['sixteen thirds', 1], own: 'On its own', from2: 'From two to three', thirds2: ['seven thirds', 1], so: 'So just like', positive: ['piece positive', 1], thirds3: 'twenty-three thirds', numbers: 'The numbers match', x: 'in y equals x'});
export const K6 = C('scene-06', {sideways: 'For sideways', reflecting: 'And reflecting', area: 'keeps the area'});
export const K7 = C('scene-07', {find: 'Find the area', log: 'Log base two of x is', so: ['so x is', 1], from: 'From an earlier', area: ['So the area', 1], seven: ['seven over', 1], about: 'about ten'});
export const K8 = C('scene-08', {pause: 'Pause here'});
export const K9 = C('scene-09', {meets: 'meets the y-axis', three: ['y equals three', 1], from1: 'From zero to three', from2: 'From three to four', make: 'Make both', nineteen: 'nineteen thirds', eight: 'Eight thirds', subtract: 'left subtract'});
export const K10 = C('scene-10', {pause: 'Pause here'});
export const K11 = C('scene-11', {meets: 'meets the x-axis', three: ['y is three', 1], rect: 'The rectangle', piece: 'The piece against', so: ['So the area', 1], about: 'about thirteen', seven: ['seven over', 3], thats: "That's the region", axis: ['not the x-axis', 1]});
export const K12 = C('scene-12', {next: ['Next', 1], heres: "Here's x cubed", the: 'The two shaded', out: ['it out', 1]});
export const K13 = C('scene-13', {pause: 'Pause the video'});
