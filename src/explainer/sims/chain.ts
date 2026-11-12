// A branching chain: each event releases a few particles, and each of those has a chance
// of causing another event (a fission chain; also any spread where one case causes
// others). Plain TypeScript, no React. Seeded, so the same config always gives the same
// chain. The multiplication factor k is the average number of new events each event
// causes: below 1 the chain dies away, at 1 it holds steady, above 1 it grows.

export type ChainConfig = {
	seed: number;
	/** Number of generations to run. */
	generations: number;
	/** Events in the first generation (default 1). */
	start?: number;
	/** Average number of particles each event releases (default 2.5: each event releases 2 or 3). */
	released?: number;
	/**
	 * The chance that one released particle causes a new event (the rest escape or are
	 * absorbed). One number, or one per generation (the last is kept for later generations),
	 * so that control rods can go in or come out part-way through.
	 */
	chance: number | readonly number[];
	/** Events are followed one by one, with parents, until this many are in the tree (default 400); after that only totals are kept. */
	treeLimit?: number;
	/** Stop if a generation passes this many events (default 1e7). */
	cap?: number;
};
export type ChainNode = {generation: number; /** Position in its generation, from 0. */ index: number; /** Index, in the previous generation, of the event that caused it (-1 for the first generation). */ parent: number};
export type ChainRun = {
	config: ChainConfig;
	/** Events in each generation (index 0 is the first generation). */
	events: number[];
	/** Particles released by each generation, and how many of them went on to cause an event. */
	releasedBy: number[];
	/** What the average rule predicts: start x k x k x ... */
	expected: number[];
	/** The multiplication factor used for the step out of each generation: released x chance. */
	k: number[];
	/** Every event followed individually (the early generations). */
	tree: ChainNode[];
	/** Number of generations the tree covers completely. */
	treeGenerations: number;
};

const mulberry = (seed: number) => {
	let a = seed >>> 0;
	return () => {
		a = (a + 0x6d2b79f5) >>> 0;
		let t = a;
		t = Math.imul(t ^ (t >>> 15), t | 1);
		t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
		return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
	};
};
/** The multiplication factor: particles released per event x the chance each causes another event. */
export const multiplication = (released: number, chance: number) => released * chance;
/** Events in generation n (counting from 1) when every event causes exactly k more on average: start x k^(n - 1). */
export const chainSize = (start: number, k: number, generation: number) => start * k ** (generation - 1);

/** Run the chain. Deterministic for a given seed. */
export const runChain = (config: ChainConfig): ChainRun => {
	const rand = mulberry(config.seed), nu = config.released ?? 2.5, lo = Math.floor(nu), frac = nu - lo, limit = config.treeLimit ?? 400, cap = config.cap ?? 1e7;
	const chanceAt = (g: number) => (typeof config.chance === 'number' ? config.chance : config.chance[Math.min(g, config.chance.length - 1)]);
	const normal = () => Math.sqrt(-2 * Math.log(1 - rand())) * Math.cos(2 * Math.PI * rand());
	/** How many of n independent tries succeed, each with chance p. Exact for small n; a normal approximation for large n. */
	const binomial = (n: number, p: number) => {
		if (n > 4000) return Math.max(0, Math.min(n, Math.round(n * p + Math.sqrt(n * p * (1 - p)) * normal())));
		let hits = 0;
		for (let i = 0; i < n; i++) if (rand() < p) hits++;
		return hits;
	};
	const start = Math.max(0, Math.round(config.start ?? 1));
	const events = [start], releasedBy: number[] = [], expected = [start], k: number[] = [], tree: ChainNode[] = [];
	let tracked: number | null = start <= limit ? start : null, treeGenerations = tracked === null ? 0 : 1;
	for (let i = 0; tracked !== null && i < start; i++) tree.push({generation: 0, index: i, parent: -1});
	for (let g = 0; g < config.generations - 1; g++) {
		const p = chanceAt(g), now = events[g];
		let released = 0, next = 0;
		if (tracked !== null) {
			// Follow each event: how many particles it releases, and which of them cause a new event.
			const children: ChainNode[] = [];
			for (let i = 0; i < now; i++) {
				const count = lo + (rand() < frac ? 1 : 0);
				released += count;
				for (let j = 0; j < count; j++) if (rand() < p) children.push({generation: g + 1, index: children.length, parent: i});
			}
			next = children.length;
			if (tree.length + next <= limit) { tree.push(...children); treeGenerations = g + 2; tracked = next; } else tracked = null;
		} else {
			released = lo * now + binomial(now, frac);
			next = binomial(released, p);
		}
		releasedBy.push(released); k.push(nu * p); expected.push(expected[g] * nu * p); events.push(next);
		if (next > cap) break;
	}
	return {config, events, releasedBy, expected, k, tree, treeGenerations};
};
