/**
 * M6 C03 plates. README for Claude:
 * - Calorimeter (`m6-foam-cup-calorimeter-v1.png`, 2000 px square), alpha box 569,160 to 1430,1840 (PIL, alpha > 20,
 *   measured 20 Oct). Natural points: probe tip 1000,170; lid 580..1420 x, 720..975 y; cutaway window 840..1340 x,
 *   980..1250 y (liquid 1050..1230); walls about x 640 and 1360 at y 1300. CAL_G holds these as fractions of the box.
 * - The lid can be lifted by drawing the plate twice, clipped above and below natural y 976 (the gap between the lid
 *   rim and the top of the window).
 * - Beaker plate from the C01 set (spout at the upper left; mirrored when it pours to the right).
 */
import {BEAKER, mk} from '../chem-m6-c01/assets';
import type {PDef} from '../chem-m6-c01/assets';

export {BEAKER};
export const CAL = mk('m6-foam-cup-calorimeter-v1.png', [2000, 2000], [569, 160, 1430, 1840]);
const U = (x: number) => (x - 569) / 861, V = (y: number) => (y - 160) / 1680;
export const CAL_G = {probe: [U(1000), V(170)] as [number, number], win: [U(1090), V(1130)] as [number, number], winR: [250 / 861, 130 / 1680] as [number, number], cutV: V(976), lidL: [U(600), V(880)] as [number, number], lidR: [U(1410), V(880)] as [number, number], wallL: [U(650), V(1320)] as [number, number], wallR: [U(1355), V(1320)] as [number, number], mouth: [U(1000), V(960)] as [number, number]};
const LIST: PDef[] = [CAL, BEAKER];
export const ASSETS: string[] = [...new Set(LIST.map(p => p.src))];
