// Every cue phrase for math-a12-d18, resolved once at load against the measured word timings (a missing phrase
// throws here, before any scene renders). Repeated words name their occurrence: [phrase, n].
import {cue} from './common';

const C = <K extends string>(id: string, map: Record<K, string | [string, number]>): Record<K, number> => {
	const out = {} as Record<K, number>;
	for (const [k, v] of Object.entries(map) as [K, string | [string, number]][]) out[k] = Array.isArray(v) ? cue(id, v[0], v[1]) : cue(id, v);
	return out;
};

export const K1 = C('scene-01', {forty: 'Forty metres', wall: 'stone wall', above: 'from above', five: 'Five metres', metres: ['square metres', 1], fifteen: 'Fifteen out', again: 'fifty again', square: 'A square pen', eight: 'seventy-eight', but: 'But ten out', hundred: ['two hundred', 1], so: 'So the square', how: 'How do we'});
export const K2 = C('scene-02', {naming: 'naming', let: 'Let x', covers: 'fence covers', xs: ['covers x', 1], ys: ['y and x', 1], forty: 'equals forty', constraint: "That's the constraint", area: 'The area is', but: 'But y changes', cant: "can't differentiate", use: 'Use the constraint', yeq: ['y equals forty', 2], aeq: 'A equals x', which: 'which is forty', squared: 'x squared', now: 'Now the area'});
export const K3 = C('scene-03', {which: 'Which values', xpos: 'x has to', ypos: 'And y has', forty: 'Forty minus two', twenty: ['less than twenty', 1], domain: 'So the domain', neither: 'neither end', collapses: 'collapses', nearZero: 'Near zero', nearTwenty: 'near twenty', area: 'The area gets', limit: 'a limit', reaches: 'reaches', stating: 'Stating the domain', count: 'points count', compare: 'what we compare'});
export const K4 = C('scene-04', {now: 'Now the calculus', aprime: 'A prime of x', ten: ['equals ten', 1], inside: 'inside the domain', earlier: 'Earlier in', here: 'Here the ends', compare: 'So compare ten', aOf10: 'A of ten', only: "there's only one", rises: 'rises to', falls: 'then falls', makes: 'That makes', maximum: ['global maximum', 2], answer: 'Now answer', pen: ['The pen is', 1], metres: ['square metres', 1], why: "here's why", along: ['Each metre along', 1], out: ['each metre out', 1], because: 'because there are', so: 'So the best'});
export const K5 = C('scene-05', {second: 'a second problem', open: 'An open box', squares: 'Equal squares', up: 'fold up', height: 'The height', each: 'Each side of the base', way: 'each way', volume: 'So the volume', domain: 'For the domain', cut: 'cut anything', base: ['leave a base', 1], twelve: 'less than twelve'});
export const K6 = C('scene-06', {expand: 'Expand first', v: ['V is four', 1], vp: 'So V prime', take: 'Take out twelve', get: 'to get twelve', twelve: ['minus twelve', 1], isnt: "Twelve isn't", reject: 'reject it', at4: 'At x equals four', four: 'twenty-four', near: 'Near both ends', greatest: 'greatest volume', cut: 'Cut four-centimetre', cm: 'cubic centimetres'});
export const K7 = C('scene-07', {steps: 'five short steps', draw: ['Draw it', 1], link: ['link it', 1], limit: ['limit it', 1], solve: ['solve it', 1], say: ['say it', 1], draw2: 'Draw the shape', link2: 'Link them', limit2: 'Limit x', solve2: 'Solve with', say2: 'Then say', units: ['with units', 1]});
export const K8 = C('scene-08', {pause: 'Pause here'});
export const K9 = C('scene-09', {with: 'With x out', xy: 'x y is fifty', y: 'so y is', fencing: ['the fencing is', 1], gt: 'greater than zero', deriv: 'Its derivative', five: ['equals five', 1], near: 'Near zero', least: 'gives the least', thats: "That's five", twenty: 'twenty metres of', alone: 'five alone'});
export const K10 = C('scene-10', {pause: 'Pause here'});
export const K11 = C('scene-11', {vol: 'The volume is', shorter: 'the shorter side', five: ['zero and five', 1], deriv: 'The derivative is', two: ['minus two', 3], twenty: ['Twenty over three is', 1], reject: 'reject it', v2: 'V of two', cm: 'cubic centimetres', would: 'would make', negative: 'negative'});
export const K12 = C('scene-12', {so: 'So the constraint', next: 'Next', car: 'thousand dollar car', fifteen: 'fifteen percent', how: 'How fast', worth: "what's it worth", years: ['eight years', 1]});
export const K13 = C('scene-13', {pause: 'Pause the video'});
