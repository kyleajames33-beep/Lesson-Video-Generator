// Every cue phrase for math-a12-t04, resolved once at load against the measured word timings (a missing phrase
// throws here, before any scene renders). Repeated words name their occurrence: [phrase, n].
import {cue} from './common';

const C = <K extends string>(id: string, map: Record<K, string | [string, number]>): Record<K, number> => {
	const out = {} as Record<K, number>;
	for (const [k, v] of Object.entries(map) as [K, string | [string, number]][]) out[k] = Array.isArray(v) ? cue(id, v[0], v[1]) : cue(id, v);
	return out;
};

export const K1 = C('scene-01', {here: "Here's a phone's", text: 'A text message', kilo: 'a kilobyte', photo: 'a photo', film: 'a film', but: 'But on this', zero: 'onto zero', left: 'near the left', only: 'Only the whole', when: 'When does', place: 'own place'});
export const K2 = C('scene-02', {trouble: 'The trouble', kb: 'A kilobyte', mb: 'a megabyte', gb: 'a gigabyte', tb: 'a terabyte', each: 'Each name', one: 'One factor', magnitude: ['magnitude', 1], eight: 'more than eight', on: 'On an ordinary', biggest: 'the biggest', everything: 'everything', zero: 'against zero'});
export const K3 = C('scene-03', {so: 'So space', ten3: 'Ten to the three', ten6: 'ten to the six', soon: 'and so on', taking: "That's taking", value: 'each value', now: 'Now every', times: 'multiplying by ten', because: 'because log', equal: 'Equal steps', not: 'not equal differences', scale: 'a logarithmic scale', kilo: 'Kilobyte megabyte', three: 'three steps apart', every: ['every file', 1], place: 'own place'});
export const K4 = C('scene-04', {compare: 'Compare two', bright: 'The brightness', thousand: 'seven thousand', on: 'On a log scale', spread: 'spread out', but: 'But the heights', three: 'two three', adds: 'A log scale adds', heights: 'heights are compared', use: 'So use a log', sense: 'makes sense'});
export const K5 = C('scene-05', {dec: 'Decibels are', sound: 'The sound level', intensity: 'I is the intensity', nought: 'I nought is ten', hearing: 'threshold of hearing', multiply: 'Multiply the intensity', decibels: 'ten decibels', factory: 'a factory', ninety: 'ninety five', eighty: 'eighty five', reading: 'has a reading', isnt: "isn't twelve", ten: 'Ten decibels more', times: 'times the intensity', rise: 'three decibel rise', two: 'about two'});
export const K6 = C('scene-06', {library: 'A library', cafe: 'a café is', how: 'How many', divide: 'Divide each', lib: "the library's", nought1: ['I nought', 1], cafes: "the café's", nought2: ['I nought', 2], them: 'Divide them', cancels: 'nought cancels', four1: 'ten to the four', intense: 'as intense', quick: 'A quicker', forty: 'is forty', four2: 'is four'});
export const K7 = C('scene-07', {same: 'the same way', simp: 'In a simplified', m: 'M is log', where: 'where A is', amp: 'the amplitude', ea: 'Earthquake A is', eb: 'Earthquake B', tall: 'as tall', its: 'Its magnitude', seven: 'six point seven', fifty: 'Fifty times the wiggle', scale: 'on the scale'});
export const K8 = C('scene-08', {dilute: 'For dilute', lower: 'a lower pH', each: 'Each step', ph4: 'at pH four', m4: 'ten to the minus four', ph7: 'and pH seven', m7: 'ten to the minus seven', so: 'So pH four', thousand: 'a thousand times', three: 'only three'});
export const K9 = C('scene-09', {star: 'Star magnitudes', diff: 'The difference', so: 'So brighter', smaller: 'smaller magnitudes', five: 'and five magnitudes', hundred: ['a hundred', 1], mag1: 'A magnitude one', star6: 'six star'});
export const K10 = C('scene-10', {here: "Here's one", each: 'Each one', ratio: 'a ratio', turn: 'To turn', power: 'the power', db: 'Decibels divide', eq: 'Earthquakes divide', ph: 'pH divide', flips: 'direction flips', stars: 'Stars divide', five: 'two point five'});
export const K11 = C('scene-11', {your: 'Your turn', pause: 'Pause here'});
export const K12 = C('scene-12', {dec: 'thirty decibels', divide: 'Divide by ten', three: ['three', 1], ratio: 'So the ratio', intense: 'as intense', one: 'One and a half', ordinary: 'were ordinary'});
export const K13 = C('scene-13', {last: 'Last one', pause: 'Pause here'});
export const K14 = C('scene-14', {setA: 'Set A', five: 'Five point three', thousand: 'four thousand', ten: 'powers of ten', setB: 'Set B', diff: 'by differences', ratio: "It's the ratio", million: 'a million to', two: 'factor of two'});
export const K15 = C('scene-15', {so: 'So a log', end: "That's the end", next: 'Next a new', cos: "Here's cos", rect: 'thin rectangles', what: 'What happens', thinner: ['thinner', 1]});
export const K16 = C('scene-16', {here: 'Here are', pause: 'Pause the video'});
