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

/** Compute a run the first time a scene needs it, not when the file is loaded: const run = lazy(() => runBox({...})). */
export const lazy = <T,>(make: () => T) => { let value: T | undefined; return () => (value ??= make()); };
