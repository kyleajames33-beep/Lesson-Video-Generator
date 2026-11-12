// Every cue phrase for math-a12-i13, resolved once at load against the measured word timings (a missing phrase
// throws here, before any scene renders). Repeated words name their occurrence: [phrase, n].
import {cue} from './common';

const C = <K extends string>(id: string, map: Record<K, string | [string, number]>): Record<K, number> => {
	const out = {} as Record<K, number>;
	for (const [k, v] of Object.entries(map) as [K, string | [string, number]][]) out[k] = Array.isArray(v) ? cue(id, v[0], v[1]) : cue(id, v);
	return out;
};

export const K1 = C('scene-01', {power: 'Power is how', peaks: 'peaks at', so: 'So how much', guess: 'A quick guess', less: ['or less', 1]});
export const K2 = C('scene-02', {less: 'Less because', take: 'Take a thin', over: 'Over that strip', hours: ['kilowatt hours', 1], area: "the strip's area", add: 'Add every strip', thats: "That's the definite", same: 'The same idea', adds: 'adds up', units: "The area's units", across: ['units across', 1]});
export const K3 = C('scene-03', {inside: 'The inside is', gives: 'That gives', at12: 'At twelve', at0: 'At zero', so: ['So the energy', 2], hours: ['kilowatt hours', 1], less: "That's less", domain: 'Notice the domain', after: 'After eight', model: 'So the model', twelve: ['zero to twelve', 2]});
export const K4 = C('scene-04', {factory: 'A factory', rate: "That's a rate", raising: 'Raising production', primitive: 'The primitive is', dollars: ['thousand dollars', 1], per: ['Dollars per item', 2], but: 'But integrating', that: ["That isn't", 1], so: 'So integrate'});
export const K5 = C('scene-05', {water: 'Water moves', after: 'After day four', integral: 'The integral from', started: 'started with', but: 'But the water', mega: ['twenty megalitres', 1], decides: 'question decides', if1: ['If it asks', 1], if2: ['If it asks', 2]});
export const K6 = C('scene-06', {drainage: 'A drainage', water: ['The water is', 1], what: 'What area', put: 'Put the y-axis', right: 'right half', cut: 'Cut it into', at: 'At height', so: 'So integrate', one: ['to one', 1], channel: 'The channel is even', double: 'double it', metre: 'square metre'});
export const K7 = C('scene-07', {holds: 'it holds', forty: 'which is forty', check: 'A check', rect: 'The two by one', thirds: ['four thirds', 2], surprise: "here's a surprise", double: 'Double the depth', nearly: 'nearly triples', because: 'because the channel', up: 'higher up'});
export const K8 = C('scene-08', {steps: 'the steps', check: "Here's the check", units: ['Units up', 1], iff: 'If those', take: 'take the interval', integ: 'integrate, and', answer: 'answer in the'});
export const K9 = C('scene-09', {pause: 'Pause here'});
export const K10 = C('scene-10', {six: ['zero to six', 1], prim: 'The primitive is', at: 'At six', kg: ['thirty-six kilograms', 1], wrong: 'Fifty-four', seconds: ['six seconds', 1]});
export const K11 = C('scene-11', {pause: 'Pause here'});
export const K12 = C('scene-12', {third: ['one third', 1], integ: 'Integrate from', eight: 'Eight to the', cm: ['square centimetres', 1], four: 'Four square', axis: ['the x-axis', 1]});
export const K13 = C('scene-13', {long: 'as long as', next: 'Next', heres: "Here's a robot", down: 'slowing down'});
export const K14 = C('scene-14', {pause: 'Pause the video'});
