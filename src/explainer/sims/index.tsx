// Explainer simulations. Read README.md in this folder first.
export * from './particle-box';
export * from './field-motion';
export * from './views';

/** Compute a run the first time a scene needs it, not when the file is loaded: const run = lazy(() => runBox({...})). */
export const lazy = <T,>(make: () => T) => { let value: T | undefined; return () => (value ??= make()); };
