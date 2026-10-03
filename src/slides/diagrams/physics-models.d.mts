export type SeriesComponentKind = 'battery' | 'resistor' | 'lamp' | 'switch' | 'ammeter';
export function validateSeriesCircuit(components: {kind: string; label?: string}[], showCurrent?: boolean): void;
export function conventionalCurrentPosition(timeSeconds: number, offset?: number): number;
export function circuitMotion(frame: number, delay?: number, showCurrent?: boolean): {switchAngle: number; currentOn: number};
export function validateShellOccupancy(electrons: {label: string; shell: number}[]): number[];
export function shellElectronAngle(electrons: {label: string; shell: number}[], index: number): number;
