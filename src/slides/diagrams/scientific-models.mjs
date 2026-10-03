// Pure teaching-model state. No media APIs or rendering dependencies.
export const clampUnit = (value) => Math.max(0, Math.min(1, value));

export function temperatureRate(value, optimum = 40, zero = 60) {
  if (![value, optimum, zero].every(Number.isFinite) || zero <= optimum) throw new Error('Temperature model requires zeroAt > optimum');
  return value <= optimum ? 2 ** ((value - optimum) / 10) : Math.max(0, 1 - ((value - optimum) / (zero - optimum)) ** 2);
}
export function phRate(value, optimum = 7) {
  if (![value, optimum].every(Number.isFinite)) throw new Error('Invalid pH model');
  return Math.exp(-(((value - optimum) / 1.5) ** 2));
}
export function substrateRate(value, enzymeAmount = 1) {
  if (![value, enzymeAmount].every(Number.isFinite) || value < 0 || enzymeAmount <= 0) throw new Error('Invalid substrate model');
  return enzymeAmount * value / (1.6 + value);
}
export function enzymeInsetState(factor, value, optimum = factor === 'ph' ? 7 : 40, zero = 60, denaturationModel = false) {
  if (factor === 'substrate') {
    const busy = substrateRate(value);
    return {warp: 0, bound: busy, label: busy > 0.8 ? 'sites busy much of the time' : 'more substrate: rate rises'};
  }
  const rate = factor === 'ph' ? phRate(value, optimum) : temperatureRate(value, optimum, zero);
  if (factor === 'ph') return {warp: 0, bound: rate, label: rate > 0.8 ? 'near optimum pH' : 'pH can alter charge/activity'};
  if (value <= optimum) return {warp: 0, bound: rate, label: value < optimum - 6 ? 'lower rate in this model' : 'near the assay peak'};
  return {warp: denaturationModel ? clampUnit(1 - rate) : 0, bound: rate,
    label: denaturationModel ? 'assumed: heat denaturation' : 'lower activity; cause not shown'};
}

export function forkProcessingTimes({leading = 300, lagging = 500, primers = 700, processing, ligase = 760, rule = 900} = {}) {
  const complete = Math.max(leading + 140, lagging + 2 * 70 + 60);
  const replace = Math.max(complete + 10, primers + 20, processing ?? ligase - 50);
  const seal = Math.max(ligase, replace + 40);
  return {replace, seal, rule: Math.max(rule, seal + 40)};
}

export const complementaryBase = (base) => {
  const partner = {A: 'T', T: 'A', G: 'C', C: 'G'}[base];
  if (!partner) throw new Error(`Invalid DNA base: ${base}`);
  return partner;
};
export function dnaSequence(sequence, max = 12) {
  const clean = sequence.toUpperCase();
  if (!/^[ATGC]+$/u.test(clean) || clean.length < 2 || clean.length > max) throw new Error(`DNA sequence must contain 2 to ${max} A/T/G/C bases`);
  return clean.split('');
}
export function handDnaSchedule(xs, travelFrames = 200) {
  if (!Number.isFinite(travelFrames) || travelFrames <= 0 || xs.length < 2) throw new Error('Invalid DNA travel/geometry');
  const pass = (x) => 30 + (x - 40) / (770 - 40) * travelFrames;
  const leading = xs.map((x) => pass(x + 70 + 12));
  const lagging = xs.map((_, index) => {
    const last = Math.min(xs.length - 1, Math.floor(index / 3) * 3 + 2);
    return pass(xs[last] + 70 + 12) + 4 + (last - index) * 6;
  });
  const complete = Math.max(...leading, ...lagging) + 6;
  // Fragment boundaries stay open until a separate, explicitly simplified processing beat.
  const processing = complete + 12;
  const joined = processing + 24;
  return {leading, lagging, processing, joined, end: joined + 10};
}
export function newDnaBondAt(arrivals, index, processing, lagging = false) {
  const basesReady = Math.max(arrivals[index], arrivals[index + 1]);
  return lagging && Math.floor(index / 3) !== Math.floor((index + 1) / 3)
    ? Math.max(basesReady + 6, processing) : basesReady;
}
