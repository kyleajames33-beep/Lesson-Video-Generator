// Source-only constraints for intentionally limited teaching diagrams.
const seriesKinds = new Set(['battery', 'resistor', 'lamp', 'switch', 'ammeter']);
export function validateSeriesCircuit(components, showCurrent = false) {
  if (!Array.isArray(components) || components.length === 0 || components.length > 16) throw new Error('Series circuit requires 1 to 16 components');
  for (const component of components) {
    if (component?.kind === 'voltmeter') throw new Error('This series-loop model cannot represent a voltmeter across two nodes. Use a parallel-branch model.');
    if (!seriesKinds.has(component?.kind)) throw new Error(`Unsupported series component: ${component?.kind}`);
  }
  if (showCurrent) {
    if (components.filter((component) => component.kind === 'battery').length !== 1) throw new Error('Current illustration requires exactly one battery');
    if (!components.some((component) => component.kind === 'resistor' || component.kind === 'lamp')) throw new Error('Current illustration requires a load; it does not model short circuits');
  }
}
export function conventionalCurrentPosition(timeSeconds, offset = 0) {
  // The battery's long positive plate is at decreasing loop parameter.
  // External conventional current leaves that terminal in the decreasing direction.
  return ((offset - timeSeconds * 0.085) % 1 + 1) % 1;
}
export function circuitMotion(frame, delay = 0, showCurrent = false) {
  const progress = (start, end) => Math.max(0, Math.min(1, (frame - delay - start) / (end - start)));
  return {switchAngle: showCurrent ? -28 + 28 * progress(64, 74) : -28,
    currentOn: showCurrent ? progress(76, 90) : 0};
}
export function validateShellOccupancy(electrons) {
  if (!Array.isArray(electrons)) throw new Error('Shell occupancy requires an electron array');
  const counts = [0, 0, 0];
  for (const electron of electrons) {
    if (!electron || !Number.isInteger(electron.shell) || electron.shell < 1 || electron.shell > 3) throw new Error('Shell diagram supports shell numbers 1 to 3');
    counts[electron.shell - 1]++;
  }
  if (counts.some((count, index) => count > 2 * (index + 1) ** 2)) throw new Error('Electron count exceeds the shell capacity 2n²');
  return counts;
}
export function shellElectronAngle(electrons, index) {
  const shell = electrons[index].shell;
  const indices = electrons.flatMap((electron, position) => electron.shell === shell ? [position] : []);
  return 2 * Math.PI * indices.indexOf(index) / indices.length;
}
