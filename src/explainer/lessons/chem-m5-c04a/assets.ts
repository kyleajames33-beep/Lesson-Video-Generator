/**
 * C4a plates. README for Claude:
 * - HAVE lists the plate files that exist in public/assets/chemistry/. A plate not in HAVE is NOT in ASSETS
 *   (the slim bundler fails on missing files) and its scene draws a coded stand-in instead.
 * - The painted syringe barrel (c4a-syringe-barrel-v1.png) is used as the glass over a coded gas tint. Remove it
 *   from HAVE to fall back to a coded glass barrel (see Syringe in parts.tsx).
 * - The plunger plate (c4a-syringe-plunger-v1.png) is NOT used: the plunger must slide from half to double
 *   volume, and the painted rod would leave the frame, so the plunger is always coded (rod, thumb pad, dark seal)
 *   in the same grey glass and dark rubber colours. It is listed here only so the file is not lost.
 * - The cylinder in the attempt is always coded (a steel-grey barrel and piston). No NO2 plate by design.
 * - Reused: the C2 flask plate (the sealed flask thumbnail in scene 1).
 */
const A = 'assets/chemistry/';
export const BARREL = A + 'c4a-syringe-barrel-v1.png';
export const PLUNGER = A + 'c4a-syringe-plunger-v1.png';
export const FLASK_EQ = A + 'c2-flask-equilibrium-v1.png';

export const HAVE = new Set<string>([BARREL, FLASK_EQ]);
const ALL = [BARREL, FLASK_EQ];
export const ASSETS: string[] = ALL.filter(a => HAVE.has(a));
