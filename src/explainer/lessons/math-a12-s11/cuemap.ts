// Every cue phrase for math-a12-s11, resolved once at load against the measured word timings (a missing phrase
// throws here, before any scene renders). Repeated words name their occurrence: [phrase, n].
import {cue} from './common';

const C = <K extends string>(id: string, map: Record<K, string | [string, number]>): Record<K, number> => {
	const out = {} as Record<K, number>;
	for (const [k, v] of Object.entries(map) as [K, string | [string, number]][]) out[k] = Array.isArray(v) ? cue(id, v[0], v[1]) : cue(id, v);
	return out;
};

export const K1 = C('scene-01', {snapper: 'This snapper', perch: 'This golden perch', five: 'Five looks', but: 'But snapper', vary: 'vary', half: 'and a half', compared: 'compared', ruler: 'common ruler', then: "Then we'll", catch: 'each catch'});
export const K2 = C('scene-02', {ruler: 'The ruler is', snapper: 'For the snapper', five: ['five over four', 1], sig1: ['sigmas', 1], perch: 'For the perch', four: 'four over two', sig2: ['sigmas', 2], count: 'That count', subtract: 'Subtract the mean', deviation: ['standard deviation', 2], tells: 'It tells you', negative: 'A negative zed', above: 'means above', both: 'Both catches', further: 'further out', last: ['two five', 2]});
export const K3 = C('scene-03', {here: "Here's what", subtracting: 'Subtracting the mean', zero: ['zero', 1], dividing: 'Dividing by sigma', one: ['one', 1], both: 'Do that to both', same: 'same curve', its: "It's the standard", written: 'written capital', any: 'Any other normal', non: 'non-standard', marks: 'The value marks', change: "don't change", area: 'The area beyond'});
export const K4 = C('scene-04', {zed: 'Zed scores also', alex: 'Alex scored', blake: 'Blake scored', ten: 'deviation ten', higher: 'higher mark', but: "But Alex's", one: ['which is one', 1], blakes: "Blake's is", three: 'one point three', so: 'So Blake', deviations: 'standard deviations', justify: 'To justify'});
export const K5 = C('scene-05', {now: 'Now the areas', every: 'Every normal curve', table: 'This table gives', left: ['to the left', 1], zeds: 'positive zeds', for125: 'For one point two five', row: 'down to the row', column: 'the column for', entry: 'The entry is', four: ['four four', 1], thats: "That's the area", beyond: 'area beyond the snapper', six: ['zero five six', 1], at16: 'At one point six', gives: ['table gives', 2], eight: ['four eight', 1], under: 'Under these normal', eighteen: 'in eighteen', further: 'Further out means', catch: 'unusual catch'});
export const K6 = C('scene-06', {no: 'This table has no', drink: 'A drink-bottle', bottle: 'A bottle with', minus: ['minus one point two five', 1], area: 'The area below', matches: 'matches the area', snapper: "the snapper's tail", so: "So it's", about: 'about ten point six', any: 'Any negative zed', flip: 'flip to the other'});
export const K7 = C('scene-07', {middle: 'For a middle', bolts: 'Bolts are normal', pass: 'pass between', five: 'fifty point five', zed: 'Zed is plus', each: 'each tail is', middle2: 'The middle is', tails: 'both tails', so: 'So about'});
export const K8 = C('scene-08', {zed: 'Zed scores also', check: 'A quality check', its: 'Its zed score', five: ['two five', 1], table: 'The table gives', tail: 'the tail below', six: ['zero six', 1], if: 'If the machine', low: 'that low', so: 'So finding'});
export const K9 = C('scene-09', {here: "Here's a way", looks: 'This table looks', right: 'For a right tail', minus: 'one minus', negative: 'For a negative', mirror: 'mirror tail', side: 'other side'});
export const K10 = C('scene-10', {your: 'Your turn', compare: 'Compare the two', pause: 'Pause here'});
export const K11 = C('scene-11', {english: 'In English', five: ['one point five', 1], maths: 'In Maths', one: 'one point one', bigger: 'One point five is bigger', cohort: 'the cohort', choosing: 'Choosing Maths', two: 'The two marks', spreads: 'spreads'});
export const K12 = C('scene-12', {last: 'Last one', use: 'Use the table', pause: 'Pause here'});
export const K13 = C('scene-13', {variance: 'The variance is', three: 'sigma is three', zed: ['Zed is', 1], five: ['one point five', 1], table: 'The table gives', right: 'the right tail', eight: ['six eight', 1], wrong: 'A zed of', divides: 'That divides', sigma: ['by sigma', 1]});
export const K14 = C('scene-14', {so: 'So a zed score', compares: 'compares results', turns: 'turns any', next: 'Next', company: 'The company wants', sigma: 'sigma stays', where: 'Where must', mean: 'the mean'});
export const K15 = C('scene-15', {here: 'Here are the key', pause: 'Pause the video'});
