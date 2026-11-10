// Every cue phrase for math-a12-i10, resolved once at load against the measured word timings (a missing phrase
// throws here, before any scene renders). Repeated words name their occurrence: [phrase, n].
import {cue} from './common';

const C = <K extends string>(id: string, map: Record<K, string | [string, number]>): Record<K, number> => {
	const out = {} as Record<K, number>;
	for (const [k, v] of Object.entries(map) as [K, string | [string, number]][]) out[k] = Array.isArray(v) ? cue(id, v[0], v[1]) : cue(id, v);
	return out;
};

export const K1 = C('scene-01', {last: 'Last video ended', picture: 'Picture sine t', seconds: 'over two pi seconds', first: 'For the first half', up2: 'rises two floors', second: 'For the second half', down: 'comes back down two', ends: 'It ends where', zero: 'is zero. But' , but: 'But it still', area4: 'has area four', arch: 'for each arch', keeps: 'The integral keeps', doesnt: "the area doesn't", so: 'So how do signed'});
export const K2 = C('scene-02', {start: 'Start with the easy', when: 'When the curve stays', every: 'every strip has', same: 'the same number', take: 'Take y equals', earlier: 'Earlier, we found', trap: "this trapezium's area", now: 'Now with a primitive', ten: 'which is ten', same2: 'Same number, because'});
export const K3 = C('scene-03', {now: 'Now a region', take: 'Take y equals', on: 'On this stretch', every: 'every strip adds', prim: 'A primitive is', at2: 'At two', so: 'So the integral is', thirds: ['minus sixteen thirds', 2], but: 'But an area', strip: "A strip's area", length: 'the length is', area: 'So the area is', removed: 'sign removed', sixteen: ['sixteen thirds', 3], write: 'We write it', minus: 'or as minus the integral'});
export const K4 = C('scene-04', {what: 'What happens when', stretch: 'Stretch the same', crosses: 'It crosses at two', from: 'from two to three', piece: 'That piece has', seven: 'seven thirds', whole: 'Now the whole integral', minus3: 'is minus three', and: 'And minus three is', so: 'So the integral is the area', lift: "That's the lift's", but: "But it's not the area", forarea: 'For the area', take: 'take each piece', sum: 'Sixteen thirds plus', tt: 'twenty-three thirds'});
export const K5 = C('scene-05', {often: "Often there's", find: 'Find the area bounded', first: 'First, find where', fact: 'It factorises', zeros: 'so the zeros are', three: 'one and three', split: 'They split', test: 'Test a value', at0: 'At zero', at2: 'At two', at4: 'At four', pos4: ['positive', 2], now: 'Now integrate each', answers: 'The answers are', make: 'Make each one', four: 'the area is four', single: 'The single integral', only: 'is only four thirds', middle: 'the middle piece'});
export const K6 = C('scene-06', {same: 'The same method', take: 'Take y equals', meets: 'It meets the axis', so: 'so x is the natural', about: 'about zero point six', at0: 'At zero', at1: 'At one', with: 'With the primitive', first: 'the first piece is one', second: 'The second is', make: 'Make the first', area: 'The area is e', about2: 'about zero point four', keep: 'Keep the log'});
export const K7 = C('scene-07', {this: 'This difference', take: 'Take the car', its: 'Its integral is', disp: "That's the displacement", but: 'But the car stops', reverses: 'then reverses', forward: 'Forward from zero', m36: 'thirty-six metres', from6: 'From six to eight', minus4: 'is minus four', back: 'four metres back', total: 'The total distance', forty: 'which is forty', dispis: 'Displacement is the', dist: 'Distance is the area'});
export const K8 = C('scene-08', {here: "Here's a way", zeros: 'Find the zeros', split: 'split', flip: 'flip the negatives', add: 'then add', integral: 'The integral keeps', area: 'The area makes', positive: 'piece positive'});
export const K9 = C('scene-09', {pause: 'Pause here'});
export const K10 = C('scene-10', {zeros: 'The zeros are', from02: 'From zero to two', m43: 'minus four thirds', from24: 'From two to four', t20: 'twenty thirds', make: 'Make both', sum: 'Four thirds plus', eight: 'which is eight', wrong: 'is wrong', signed: "That's the signed"});
export const K11 = C('scene-11', {pause: 'Pause here'});
export const K12 = C('scene-12', {int: 'The integral counts', two: 'which is two', total: 'The total area', eight: 'which is eight', wrong: 'Eight for the integral', treats: 'It treats'});
export const K13 = C('scene-13', {so: 'So the integral', every: 'Every region', heres: "Here's a different", region: 'the region between', our: 'Our strips stood', here: "Here, they'd", sideways: 'lie sideways', how: 'So how do we'});
export const K14 = C('scene-14', {pause: 'Pause the video'});
