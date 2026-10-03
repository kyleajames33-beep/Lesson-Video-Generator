// Pure source checks and scoped HCl/NaOH illustration. No media or renderer APIs.
export const CONDUCTOMETRIC_LAMBDA = Object.freeze({H: 350, OH: 198, Cl: 76, Na: 50});
export const NEUTRALISATION_AMOUNT_RULE = 'use balanced reaction ratios';
export const CONDUCTOMETRIC_DESCRIPTION = 'HCl titrated with NaOH: relative conductivity falls to an equivalence-point minimum, then rises in this idealised model. Major ions are shown; water equilibrium and transport mechanisms are omitted.';

const finite = (value, label, minimum = 0) => {
  if (!Number.isFinite(value) || value < minimum) throw new Error(`${label} must be finite and at least ${minimum}`);
};
export function createConductometricModel({lambda = CONDUCTOMETRIC_LAMBDA, units = 10, vAcid = 25, vPerUnit = 0.25} = {}) {
  if (!Number.isInteger(units) || units < 1 || units > 80) throw new Error('Conductometric illustration requires 1 to 80 whole acid units');
  finite(vAcid, 'Acid volume', Number.MIN_VALUE);
  finite(vPerUnit, 'Volume per base unit', Number.MIN_VALUE);
  if (!lambda || ['H', 'OH', 'Cl', 'Na'].some((ion) => !Number.isFinite(lambda[ion]) || lambda[ion] <= 0)) throw new Error('Ionic conductivity values must be finite and positive');
  const values = {...lambda};
  const preSlope = (values.Na - values.H) * vAcid - vPerUnit * units * (values.H + values.Cl);
  const postSlope = (values.Na + values.OH) * vAcid - vPerUnit * units * (values.Cl - values.OH);
  // This component annotates a minimum, so unsupported slope regimes fail explicitly.
  if (![preSlope, postSlope, vAcid + 2 * units * vPerUnit].every(Number.isFinite) || preSlope >= 0 || postSlope <= 0) {
    throw new Error('Parameters do not support the annotated HCl/NaOH minimum');
  }
  const ions = (added) => {
    finite(added, 'Added base units');
    if (added > 2 * units) throw new Error('Added base exceeds the illustrated range');
    return {H: Math.max(0, units - added), Cl: units, Na: added, OH: Math.max(0, added - units)};
  };
  const signal = (added) => {
    const counts = ions(added);
    const value = Object.keys(counts).reduce((sum, ion) => sum + values[ion] * counts[ion], 0) / (vAcid + added * vPerUnit);
    if (!Number.isFinite(value) || value <= 0) throw new Error('Conductivity signal is outside the finite positive range');
    return value;
  };
  const maximum = Math.max(signal(0), signal(2 * units));
  return {ions, signal, maximum, equivalenceUnits: units, totalUnits: 2 * units};
}

export function conductometricAddedAt(frame, units, {runAt, epAt, endAt}) {
  finite(frame, 'Frame', -Number.MAX_VALUE);
  if (![runAt, epAt, endAt].every(Number.isFinite) || runAt < 0 || !(runAt < epAt && epAt < endAt)) throw new Error('Conductometric run, equivalence and end cues must be ordered');
  if (!Number.isInteger(units) || units < 1 || units > 80) throw new Error('Invalid acid units');
  if (frame <= runAt) return 0;
  if (frame < epAt) return units * (frame - runAt) / (epAt - runAt);
  if (frame < endAt) return units + units * (frame - epAt) / (endAt - epAt);
  return 2 * units;
}
export function conductometricIonArrival(ion, index, units, cues) {
  // Reuse the same timing validation as graph progress.
  conductometricAddedAt(cues.runAt, units, cues);
  if (!['Na', 'OH'].includes(ion) || !Number.isInteger(index) || index < 0 || index >= (ion === 'Na' ? 2 * units : units)) throw new Error('Invalid added-ion index');
  const before = ion === 'Na' && index < units;
  const step = before ? index + 1 : ion === 'Na' ? index - units + 1 : index + 1;
  return before ? cues.runAt + step * (cues.epAt - cues.runAt) / units : cues.epAt + step * (cues.endAt - cues.epAt) / units;
}

export function heatLedgerModel(props = {}) {
  const scaleMax = props.scaleMax ?? 60;
  finite(scaleMax, 'Ledger scale', Number.MIN_VALUE);
  const markerRange = props.markerRange ?? [40, 62];
  if (!Array.isArray(markerRange) || markerRange.length !== 2 || !markerRange.every(Number.isFinite) || markerRange[0] < 0 || markerRange[1] <= markerRange[0]) throw new Error('Ledger marker range must be increasing nonnegative magnitudes');
  if (props.reference && props.floor) throw new Error('Use one ledger reference, not both reference and legacy floor');
  const reference = props.reference ?? props.floor ?? null;
  const text = (value, label) => {if (typeof value !== 'string' || !value.trim()) throw new Error(`${label} needs text`);};
  if (reference) {finite(reference.value, 'Reference magnitude'); text(reference.label, 'Reference');}
  if (props.markers !== undefined) {
    if (!Array.isArray(props.markers) || !props.markers.length || props.markers.length > 8 || props.steps?.length) throw new Error('Ledger markers need one nonempty marker-only mode');
    for (const marker of props.markers) {
      finite(marker.value, 'Marker magnitude'); text(marker.label, 'Marker');
      if (marker.value < markerRange[0] || marker.value > markerRange[1]) throw new Error('Ledger marker outside displayed range');
    }
    if (reference && (reference.value < markerRange[0] || reference.value > markerRange[1])) throw new Error('Ledger reference outside displayed range');
    return {scaleMax, markerRange, reference, blocks: []};
  }
  if (!Array.isArray(props.steps) || !props.steps.length || props.steps.length > 5) throw new Error('Ledger needs one to five steps');
  let level = 0;
  const blocks = props.steps.map((step) => {
    finite(step.value, 'Ledger magnitude'); text(step.label, 'Ledger step');
    if (!['release', 'cost', 'net'].includes(step.kind)) throw new Error('Unsupported ledger step kind');
    let top, bottom;
    if (step.kind === 'release') {top = level; bottom = level + step.value; level = bottom;}
    else if (step.kind === 'cost') {bottom = level; top = level - step.value; level = top;}
    else {
      if (Math.abs(step.value - level) > 1e-8 * Math.max(1, level)) throw new Error('Ledger net does not equal the supplied release/cost balance');
      top = 0; bottom = step.value;
    }
    if (top < 0 || bottom < 0 || top > scaleMax || bottom > scaleMax) throw new Error('Ledger supports nonnegative release-depth blocks within its scale');
    return {s: step, top, bottom};
  });
  if (reference && reference.value > scaleMax) throw new Error('Ledger reference outside displayed scale');
  return {scaleMax, markerRange, reference, blocks};
}

export function validateQuantitativeDiagram(diagram, {requireCues = true} = {}) {
  const kinds = ['chem11m4Calorimetry', 'chem11m4EnergyLadder', 'chem12m6Conductometric', 'chem12m6HeatLedger'];
  if (diagram?.type !== 'diorama' || !kinds.includes(diagram.kind)) return [];
  const props = diagram.props ?? {}, missing = [];
  if (!props || typeof props !== 'object' || Array.isArray(props)) throw new Error('Quantitative diagram props must be an object');
  const cue = (value, label, required = true) => {
    if (value === undefined) {if (required) missing.push(label); return;}
    finite(value, label);
  };
  cue(props.delay, 'delay', false);
  cue(diagram.delay, 'diagram delay', false);
  const timed = (value, label) => {
    if (!value || typeof value !== 'object' || Array.isArray(value)) throw new Error(`${label} must be a timed object`);
    cue(value.at, `${label}.at`);
  };
  const note = (value, label) => {
    timed(value, label);
    if (typeof value.text !== 'string') throw new Error(`${label} needs text`);
  };
  if (diagram.kind === 'chem12m6HeatLedger') {
    heatLedgerModel(props);
    for (const key of ['reference', 'floor']) if (props[key] !== undefined) timed(props[key], key);
    if (props.formula) note(props.formula, 'formula');
    for (const key of ['steps', 'markers']) (props[key] ?? []).forEach((item, index) => timed(item, `${key}[${index}]`));
  }
  if (diagram.kind === 'chem11m4Calorimetry') {
    const mode = props.mode ?? 'combustion';
    if (!['combustion', 'neutralisation'].includes(mode)) throw new Error('Unsupported calorimetry mode');
    if (props.cards !== undefined) {
      if (!Array.isArray(props.cards) || !props.cards.length) throw new Error('Custom calorimetry cards cannot be empty');
      props.cards.forEach((card, i) => {timed(card, `cards[${i}]`); if (typeof card.title !== 'string' || typeof card.eq !== 'string') throw new Error('Calorimetry cards need title and equation text');});
    }
    if (props.beats !== undefined) {
      if (!Array.isArray(props.beats) || props.beats.length !== (mode === 'combustion' ? 1 : 2)) throw new Error('Calorimetry beats do not match the mode');
      props.beats.forEach((beat, i) => {finite(beat, `beats[${i}]`);});
      if (mode === 'neutralisation' && props.beats[1] < props.beats[0]) throw new Error('Temperature rise cannot precede pouring');
    }
    if (props.note !== undefined) note(props.note, 'note');
  }
  if (diagram.kind === 'chem12m6Conductometric') {
    createConductometricModel(props);
    const defaults = {barsAt: 70, beakerAt: 220, runAt: 380, epAt: 590, endAt: 770, minAt: 800};
    const cues = {...defaults, ...props};
    Object.keys(defaults).forEach((key) => {finite(cues[key], key);});
    conductometricAddedAt(cues.runAt, props.units ?? 10, cues);
    if (cues.minAt < cues.epAt) throw new Error('Minimum annotation cannot precede equivalence');
    if (props.note !== undefined) note(props.note, 'note');
  }
  if (diagram.kind === 'chem11m4EnergyLadder') {
    if (!Array.isArray(props.panels) || !props.panels.length) throw new Error('Energy ladder needs panels');
    cue(props.headerAt, 'headerAt', false);
    props.panels.forEach((panel, pi) => {
      if (!Array.isArray(panel?.levels) || !panel.levels.length) throw new Error('Energy ladder needs levels');
      const keys = new Set();
      panel.levels.forEach((level, li) => {
        if (!level || typeof level.key !== 'string' || !level.key || keys.has(level.key) || !Number.isFinite(level.e) || level.e < 0 || level.e > 1) throw new Error('Energy ladder levels need unique keys and finite qualitative energy from 0 to 1');
        keys.add(level.key);
        cue(level.at, `panels[${pi}].levels[${li}].at`, false);
      });
      if (panel.arrows !== undefined && !Array.isArray(panel.arrows)) throw new Error('Energy ladder arrows must be an array');
      (panel.arrows ?? []).forEach((arrow, ai) => {
        timed(arrow, `panels[${pi}].arrows[${ai}]`);
        if (!keys.has(arrow.from) || !keys.has(arrow.to) || arrow.from === arrow.to) throw new Error('Energy arrow must join distinct existing levels');
      });
      for (const key of ['heat', 'zero']) if (panel[key] !== undefined) timed(panel[key], `panels[${pi}].${key}`);
      if (panel.note !== undefined) note(panel.note, `panels[${pi}].note`);
      if (panel.heat && !['in', 'out'].includes(panel.heat.dir)) throw new Error('Heat direction must be in or out');
      if (panel.zero && (!Number.isFinite(panel.zero.e) || panel.zero.e < 0 || panel.zero.e > 1)) throw new Error('Energy reference must be finite and from 0 to 1');
    });
    if (props.steps !== undefined && !Array.isArray(props.steps)) throw new Error('Energy ladder steps must be an array');
    (props.steps ?? []).forEach((step, i) => note(step, `steps[${i}]`));
  }
  if (requireCues && missing.length) throw new Error(`Missing quantitative reveal cues: ${missing.join(', ')}`);
  return missing;
}
