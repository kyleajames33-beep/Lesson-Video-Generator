// Explainer simulations. Read README.md in this folder first.
export * from './particle-box';
export * from './field-motion';
export * from './views';
export * from './chance';
export * from './chance-views';
export * from './waves';
export * from './waves-views';
export * from './titration';
export * from './titration-views';
export * from './circuits';
export * from './circuits-views';
export * from './series-views';
export * from './population';
export * from './population-views';
export * from './heating';
export * from './heating-views';
export * from './energy-profile';
export * from './energy-profile-views';
export * from './magnetic-field';
export * from './magnetic-field-views';
export * from './induction';
export * from './induction-views';
export * from './blackbody';
export * from './photoelectric';
export * from './relativity';
export * from './modern-views';
export * from './beam';
export * from './collisions';
export * from './chain';
export * from './mechanics-views';

/** Compute a run the first time a scene needs it, not when the file is loaded: const run = lazy(() => runBox({...})). */
export const lazy = <T,>(make: () => T) => { let value: T | undefined; return () => (value ??= make()); };
