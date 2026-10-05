// Narrow, source-reviewed opt-ins. Omitted/false flags leave legacy behaviour
// unchanged. These checks delimit the examples; they do not identify unknowns.
const curveTypes = ['SA-SB', 'WA-SB', 'SA-WB', 'WA-WB'];
const flameSamples = [
  ['Li⁺', '#d3143a', 'crimson'], ['Na⁺', '#ffb300', 'yellow'],
  ['K⁺', '#c39ae6', 'lilac'], ['Ca²⁺', '#e2572b', 'brick red'],
  ['Ba²⁺', '#9bd45a', 'pale green'], ['Cu²⁺', '#1fb5a0', 'blue-green'],
];
function object(value, label) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) throw new Error(`${label} must be an object`);
}
function finite(value, label, minimum = 0, maximum = 100000) {
  if (typeof value !== 'number' || !Number.isFinite(value) || value < minimum || value > maximum) {
    throw new Error(`${label} must be finite in [${minimum}, ${maximum}]`);
  }
}
function positive(value, label, maximum) {
  finite(value, label, 0, maximum);
  if (value === 0) throw new Error(`${label} must be positive`);
}
function label(value, name) {
  if (typeof value !== 'string' || !value.trim()) throw new Error(`${name} must be a nonempty string`);
}
function keys(value, allowed, name) {
  object(value, name);
  for (const key of Object.keys(value)) {
    if (!allowed.includes(key)) throw new Error(`Unsupported reviewed ${name} property: ${key}`);
  }
}
function beats(value, count, name) {
  if (value === undefined) return;
  if (!Array.isArray(value) || value.length !== count) throw new Error(`${name} requires ${count} ordered beats`);
  Array.from(value).forEach((beat, index) => {
    finite(beat, `${name} beat ${index}`);
    if (index && beat < value[index - 1]) throw new Error(`${name} requires ordered beats`);
  });
}
export function validateAnalyticalDiagram(diagram) {
  const props = diagram?.props;
  if (!props || !Object.hasOwn(props, 'reviewedAnalytical')) return;
  if (typeof props.reviewedAnalytical !== 'boolean') throw new Error('reviewedAnalytical must be boolean');
  if (!props.reviewedAnalytical) return;
  for (const [key, value] of Object.entries(props)) {
    if (key !== 'reviewedAnalytical' && /^reviewed[A-Z]/u.test(key) && value !== undefined && value !== false) {
      throw new Error('Analytical and other reviewed opt-ins cannot be combined');
    }
  }
  if (diagram.type !== 'diorama') throw new Error('Reviewed analytical examples require a diorama');
  const passiveFlags = Object.keys(props).filter(key => /^reviewed[A-Z]/u.test(key) && props[key] === false);
  const common = ['delay', 'reviewedAnalytical', ...passiveFlags];
  finite(props.delay === undefined ? 62 : props.delay, 'delay');
  if (diagram.kind === 'chem12m8TubeTests') {
    keys(props, [...common, 'mode', 'beats'], 'tube-test');
    const mode = props.mode === undefined ? 'anion' : props.mode;
    if (!['anion', 'cation'].includes(mode)) throw new Error('Unsupported reviewed tube-test mode');
    beats(props.beats, mode === 'anion' ? 9 : 13, 'Tube tests');
    return;
  }
  if (diagram.kind === 'chem12m8FlameTests') {
    keys(props, [...common, 'ions', 'beats'], 'flame-test');
    if (props.ions !== undefined) {
      if (!Array.isArray(props.ions) || props.ions.length !== flameSamples.length) throw new Error('Reviewed flame tests require the six known-ion samples');
      Array.from(props.ions).forEach((sample, index) => {
        keys(sample, ['ion', 'color', 'name'], 'flame sample');
        if ([sample.ion, sample.color, sample.name].some((value, part) => value !== flameSamples[index][part])) {
          throw new Error('Reviewed flame tests require the six known-ion samples in their original order and colours');
        }
      });
    }
    beats(props.beats, 10, 'Flame tests');
    return;
  }
  if (diagram.kind !== 'chem12m6TitrationCurve') throw new Error('Unsupported reviewed analytical diagram');
  keys(props, [...common, 'series', 'ca', 'va', 'cb', 'pKa', 'pKb', 'vMax', 'apparatus', 'markers', 'epDots', 'grid', 'jumpRead', 'bands', 'wrongPins'], 'titration');
  if (Object.hasOwn(props, 'jumpRead')) throw new Error('Reviewed titration rejects jumpRead: equivalence pH comes from charge balance, never averaged jump bounds');
  const {ca = 0.1, va = 25, cb = 0.1, pKa = 4.74, pKb = 4.75, vMax = 50} = props;
  positive(ca, 'ca (ideal dilute mol/L)', 0.2);
  positive(cb, 'cb (ideal dilute mol/L)', 0.2);
  positive(va, 'va (mL)', 1000);
  positive(vMax, 'vMax (mL)', 1000);
  finite(pKa, 'pKa', 0, 14);
  finite(pKb, 'pKb', 0, 14);
  const vEq = ca * va / cb, fraction = vEq / vMax;
  if (!Number.isFinite(vEq) || !(fraction > 0.06 && fraction < 0.94)) throw new Error('Reviewed equivalence volume must lie inside the animated range (6% to 94%)');
  for (const key of ['apparatus', 'epDots', 'grid']) {
    if (Object.hasOwn(props, key) && typeof props[key] !== 'boolean') throw new Error(`${key} must be boolean`);
  }
  if (!Array.isArray(props.series) || props.series.length < 1 || props.series.length > 4) throw new Error('Reviewed titration requires one to four series');
  Array.from(props.series).forEach((series, index) => {
    keys(series, ['type', 'label', 'at', 'dur', 'epLabel'], 'series');
    if (!curveTypes.includes(series.type)) throw new Error('Unsupported reviewed titration curve type');
    label(series.label, 'Series label');
    finite(series.at, `Series ${index} at`);
    positive(series.dur === undefined ? 110 : series.dur, `Series ${index} duration`, 100000);
    if (series.epLabel !== undefined) label(series.epLabel, 'Equivalence label');
  });
  if (props.grid && (props.series.length !== 4 || new Set(props.series.map(series => series.type)).size !== 4)) {
    throw new Error('Reviewed four-type grid requires all four distinct curve types');
  }
  const markers = props.markers === undefined ? {} : props.markers;
  keys(markers, ['epAt', 'halfAt', 'pKaAt', 'bufferAt'], 'markers');
  for (const [key, value] of Object.entries(markers)) finite(value, key);
  if (Object.keys(markers).length && (props.series.length !== 1 || props.grid)) throw new Error('Reviewed reading markers require one non-grid curve');
  if (props.apparatus && (props.series.length !== 1 || props.grid)) throw new Error('Reviewed apparatus requires one non-grid curve');
  if (Object.hasOwn(markers, 'pKaAt') && !Object.hasOwn(markers, 'halfAt')) throw new Error('Reviewed pKa marker requires halfAt');
  if (['halfAt', 'pKaAt', 'bufferAt'].some(key => Object.hasOwn(markers, key))) {
    if (props.series[0].type !== 'WA-SB') throw new Error('Reviewed half-equivalence and buffer markers require a monoprotic weak acid and strong base');
    const ka = 10 ** -pKa, halfConcentration = ca * va / (va + vEq / 2);
    if ((ka + 1e-14 / ka) / halfConcentration > 0.01) throw new Error('Reviewed pH approximately pKa requires a sufficiently concentrated weak-acid buffer');
  }
  for (const key of ['bands', 'wrongPins']) {
    if (props[key] !== undefined && !Array.isArray(props[key])) throw new Error(`${key} must be an array`);
  }
  const bands = props.bands ?? [], pins = props.wrongPins ?? [];
  if (props.apparatus && bands.length) throw new Error('Reviewed indicator bands require the graph-only layout');
  if (pins.length) throw new Error('Reviewed titration rejects wrong pins without a separately reviewed answer model');
  if ((bands.length || pins.length) && (props.series.length !== 1 || props.grid)) throw new Error('Reviewed bands and pins require one non-grid curve');
  Array.from(bands).forEach(band => {
    object(band, 'Band');
    if (Object.hasOwn(band, 'wrong')) throw new Error('Reviewed indicator bands reject wrong flags; transition ranges alone do not establish suitability');
    keys(band, ['lo', 'hi', 'label', 'color', 'at'], 'band');
    finite(band.lo, 'Band low pH', 0, 14); finite(band.hi, 'Band high pH', 0, 14);
    if (band.lo >= band.hi) throw new Error('Indicator band low pH must be below high pH');
    finite(band.at, 'Band at'); label(band.label, 'Band label'); label(band.color, 'Band colour');
  });

}
