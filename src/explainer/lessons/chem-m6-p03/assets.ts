/**
 * M6 P03 plates. README for Claude:
 * - Alpha boxes (PIL, alpha > 20) measured 22 Oct from the real files.
 * - pH meter with probe in a beaker (C04 set): FullMeter (C07) puts an amber readout on its screen (METER_G corners);
 *   Meter (C05) shows the body only, cropped (METER_CROP), with a coded probe on a coded cable that moves on an arc.
 * - New (brief 96): pH probe in an electrode holder (2000 px, box 458,200..1544,1800). The glass bulb centre is
 *   natural 1114,1455 (tip 1114,1500); the cable leaves at the upper left, ending near 460,700. Space under the bulb
 *   for a beaker to slide in (HOLD_N).
 * - New (brief 96): buffer bottle (2000 px, box 625,275..1374,1725), blank label band about 640..1360 x, 1060..1440 y
 *   (BUF_N): the coloured band and its pH are coded.
 * - New (brief 96): folded lab tissue (2000 px, box 350,524..1649,1477).
 * - Indicator paper and chart (C05 set, 2048 px): only the chart card is shown (crop CHART_CROP); six swatches, centres
 *   natural x 680 + 209.6 i, y 1081. The plate's own strip is cropped out; the test strip is coded.
 * - Wash bottle: nozzle tip natural about 1450,420.
 */
import {AMMONIA, BEAKER, mk} from '../chem-m6-c01/assets';
import type {PDef} from '../chem-m6-c01/assets';
import {PHMETER} from '../chem-m6-c04/assets';
import {BEAKER_LIQ, METER_CROP, METER_G} from '../chem-m6-c05/assets';
import {GLASSES, WASH} from '../chem-m6-p02/assets';

export {AMMONIA, BEAKER, BEAKER_LIQ, GLASSES, METER_CROP, METER_G, PHMETER, WASH};
export type {PDef};
const N2 = [2000, 2000] as [number, number];
export const HOLDER = mk('m6-ph-probe-holder-v1.png', N2, [458, 200, 1544, 1800]);
export const HOLD_N = {bulb: [1114, 1455] as [number, number], tip: [1114, 1500] as [number, number], cable: [470, 700] as [number, number], collar: [1114, 600] as [number, number]};
export const BUFFER = mk('m6-buffer-bottle-v1.png', N2, [625, 275, 1374, 1725]);
export const BUF_N = {x0: 640, x1: 1360, y0: 1080, y1: 1420};
export const TISSUE = mk('m6-lab-tissue-v1.png', N2, [350, 524, 1649, 1477]);
export const CHART = mk('m6-indicator-paper-chart-v1.png', [2048, 2048], [165, 457, 1883, 1591]);
export const CHART_CROP: [number, number, number, number] = [520, 810, 1890, 1350];
export const SWATCH = (i: number): [number, number] => [680 + 209.6 * i, 1081];
export const WASH_N = {nozzle: [1450, 420] as [number, number]};
const LIST: PDef[] = [PHMETER, BEAKER, HOLDER, BUFFER, TISSUE, CHART, WASH, GLASSES, AMMONIA];
export const ASSETS: string[] = [...new Set(LIST.map(p => p.src))];
