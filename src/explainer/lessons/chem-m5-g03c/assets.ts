/**
 * G03c/G03d plates (all existing; no new art). README for Claude:
 * - Q1 (FeO + CO): the G03a painted sealed vessel; its dark lump stands for the iron(II) oxide, and coded
 *   grey metal flecks appear on it when the iron forms. Coded CO and CO2 particles move in its glass.
 * - Q2 (methanol, about 230 C): the C8 painted steel pressure vessel with its gauge.
 * - Q3 (NOCl) and Q4 (NO2 + SO2): the C6 painted round flask pair (colourless and brown, aligned). Q3 adds a
 *   coded orange-yellow tint and NOCl particles over the bulb; Q4 crossfades to the brown plate.
 * - G03d handoff: the C8 painted hot thermometer.
 * Everything else (trap strip, ICE tables, working lines, decision boards) is abstract and coded.
 */
import {CARBON_PLATE} from '../chem-m5-g03a/assets';
import {NO2_BROWN, NO2_COLOURLESS} from '../chem-m5-c06/assets';
import {PL8, VESSEL} from '../chem-m5-c08/assets';

export {CARBON_PLATE, NO2_BROWN, NO2_COLOURLESS, VESSEL};
export const THERMO = PL8.thermo;
export const ASSETS_C: string[] = [CARBON_PLATE, VESSEL];
export const ASSETS_D: string[] = [NO2_COLOURLESS, NO2_BROWN, PL8.thermo.src];
