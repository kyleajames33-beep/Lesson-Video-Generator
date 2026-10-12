/**
 * C3 plates. README for Claude:
 * - HAVE lists the plate files that exist in public/assets/chemistry/. A plate not in HAVE is NOT in ASSETS
 *   (the slim bundler fails on missing files) and its scene draws a coded stand-in instead (clean test tubes
 *   with the right liquid colours, see IronTube and CobaltTube in parts.tsx).
 * - The five painted tube plates (iron thiocyanate pair, cobalt triple) were written to public/ at 18:35 on
 *   12 Oct, so they are in HAVE and used. Remove a name from HAVE to fall back to its coded stand-in.
 * - Stand-in colours: iron(III) pale yellow, thiocyanate colourless, FeSCN2+ blood red; cobalt pink to blue through
 *   purple; NO2 brown tint (the NO2 tube is always coded, there is no NO2 plate by design).
 * - Reused: the C2 flask plate (the "sealed P C L five flask" thumbnail in scene 1 and the closing flask).
 */
const A = 'assets/chemistry/';
export const IRON_START = A + 'c3-iron-tube-start-v1.png';
export const IRON_DEEP = A + 'c3-iron-tube-deep-v1.png';
export const CO_PINK = A + 'c3-cobalt-tube-pink-v1.png';
export const CO_PURPLE = A + 'c3-cobalt-tube-purple-v1.png';
export const CO_BLUE = A + 'c3-cobalt-tube-blue-v1.png';
export const FLASK_EQ = A + 'c2-flask-equilibrium-v1.png';

export const HAVE = new Set<string>([IRON_START, IRON_DEEP, CO_PINK, CO_PURPLE, CO_BLUE, FLASK_EQ]);
const ALL = [IRON_START, IRON_DEEP, CO_PINK, CO_PURPLE, CO_BLUE, FLASK_EQ];
export const ASSETS: string[] = ALL.filter(a => HAVE.has(a));
export const haveIron = () => HAVE.has(IRON_START) && HAVE.has(IRON_DEEP);
export const haveCobalt = () => HAVE.has(CO_PINK) && HAVE.has(CO_PURPLE) && HAVE.has(CO_BLUE);
