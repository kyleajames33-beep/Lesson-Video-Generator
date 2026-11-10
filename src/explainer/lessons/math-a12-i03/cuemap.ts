// Every cue phrase for math-a12-i03, resolved once at load against the measured word timings (a missing phrase
// throws here, before any scene renders). Repeated words name their occurrence: [phrase, n].
import {cue} from './common';

const C = <K extends string>(id: string, map: Record<K, string | [string, number]>): Record<K, number> => {
	const out = {} as Record<K, number>;
	for (const [k, v] of Object.entries(map) as [K, string | [string, number]][]) out[k] = Array.isArray(v) ? cue(id, v[0], v[1]) : cue(id, v);
	return out;
};

export const K1 = C('scene-01', {phone: 'A phone on', fills: 'fills quickly', rate: 'Its charging rate', hour: 'percent per hour', level: 'Its battery level', power: 'The power rule', exponent: 'in the exponent', guess: 'So guess', big: 'three times too big', base: 'And what about', why: 'Why does'});
export const K2 = C('scene-02', {start: 'Start with', height: 'equals its height', prim: 'primitive of itself', C: ['plus C', 1], slide: 'Slide e', there: 'still there'});
export const K3 = C('scene-03', {chain: 'By the chain rule', graph: 'On the graph', every: 'Everywhere on this', divide: 'divide by three', third: 'A third of', watch: 'Watch the gradient', lands: 'It lands'});
export const K4 = C('scene-04', {any: 'any linear exponent', diff: 'Differentiating e', integral: 'The integral of e', needs: 'This needs', constant: 'the exponent is constant', two: 'So two e', minus: 'And e to the minus x', check: 'Check the sign', back: 'differentiates back'});
export const K4A = C('scene-04a', {now: 'Now the phone', divide: 'so divide by', level: 'The battery level', C: 'plus C', minus: 'A minus sign', yes: 'Yes', climbs: 'That term climbs', rises: 'the level rises'});
export const K5 = C('scene-05', {take: 'Take two x', exp: 'The exponent is x squared', there: 'right there', diff: 'Differentiating e', integral: 'So the integral', general: 'In general', remember: 'And remember', half: 'gives half', but: 'But e to the x squared', rules: 'these rules'});
export const K6 = C('scene-06', {diff: 'Differentiating a', why: "Here's why", is: 'a to the x is e', linear: 'So its exponent is linear', divide: 'Divide by it', positive: 'for a positive', two: 'So two to the x integrates', e: 'And when a is e'});
export const K7 = C('scene-07', {but: 'But one base', zero: 'is zero', watch: 'Watch the base', flattens: 'The curve flattens', nothing: "there's nothing", integral: 'The integral of one', look: 'And look at', straightens: 'it straightens'});
export const K8 = C('scene-08', {drug: "A drug's amount", at0: ['At t equals zero', 1], find: 'Find A', integrate: 'Integrate by', cancel: 'The minus halves cancel', C: ['plus C', 1], use: 'Now use the condition', one: 'C is one', so: 'So A equals', grows: 'As t grows', mg: 'one milligram'});
export const K8A = C('scene-08a', {phone: 'The phone works', forty: 'forty percent', hundred: 'C is a hundred', heads: 'It heads for', slowly: 'more and more slowly'});
export const K9 = C('scene-09', {find: 'Find the integral', expand: 'Expand it', sq: 'Squaring e', each: 'Now each term', e2: 'e to the two x divides', two: 'Two e to the x has', one: 'And one becomes', so: 'So the answer'});
export const K10 = C('scene-10', {pattern: "Here's the pattern", divide: 'Divide by the inner rate', ln: 'by the natural log', check: 'differentiate back'});
export const K11 = C('scene-11', {pause: 'Pause here'});
export const K12 = C('scene-12', {exp: 'The exponent is', div: 'Divide by two', four: 'Four over two', diff: 'Differentiating multiplies', leaving: 'Leaving it', big: 'twice too big'});
export const K13 = C('scene-13', {pause: 'Pause here'});
export const K14 = C('scene-14', {three: 'Three to the x has', e: 'e to the minus two x divides', with: 'With one C', mult: 'Multiplying by'});
export const K15 = C('scene-15', {next: 'Next', rule: 'The rule would give', what: 'So what is'});
export const K16 = C('scene-16', {pause: 'Pause the video'});
