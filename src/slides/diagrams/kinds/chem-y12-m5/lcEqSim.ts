// Private helper (lane C): a real equilibrium model for concentration–time
// graphs of A ⇌ 2B (e.g. N₂O₄ ⇌ 2NO₂).
//
// Mass-action kinetics: rate = kf[A] − kr[B]², d[A]/dt = −rate, d[B]/dt = +2·rate,
// with Kc = kf / kr = [B]² / [A] at equilibrium. Integrated with RK4 at a
// small fixed step, so every curve relaxes to the exact equilibrium that a
// fixed Kc demands. Kc changes only when a temperature ramp is applied.

export type SimEvent =
	| {t: number; type: 'add'; dA?: number; dB?: number}
	| {t: number; type: 'scale'; factor: number} // volume change: every gas concentration × factor
	| {t: number; type: 'temp'; kc: number; over: number}; // Kc ramps linearly to a new value (no jump)

export type SimResult = {t: Float64Array; A: Float64Array; B: Float64Array; kc: Float64Array};

export const simulate = ({A0, B0, kc, kf = 1.2, tEnd, n = 800, events = []}: {A0: number; B0: number; kc: number; kf?: number; tEnd: number; n?: number; events?: SimEvent[]}): SimResult => {
	const dt = tEnd / n;
	const t = new Float64Array(n + 1), A = new Float64Array(n + 1), B = new Float64Array(n + 1), K = new Float64Array(n + 1);
	let a = A0, b = B0;
	const done = new Set<number>();
	const kcAt = (time: number) => {
		let k = kc;
		for (const e of events) {
			if (e.type === 'temp' && time > e.t) k = k + (e.kc - k) * Math.min(1, (time - e.t) / e.over);
		}
		return k;
	};
	const f = (x: number, y: number, time: number) => {
		const k = kcAt(time);
		const r = kf * x - (kf / k) * y * y;
		return [-r, 2 * r];
	};
	for (let i = 0; i <= n; i++) {
		const time = i * dt;
		events.forEach((e, j) => {
			if (done.has(j) || time < e.t) return;
			done.add(j);
			if (e.type === 'add') {
				a += e.dA ?? 0;
				b += e.dB ?? 0;
			} else if (e.type === 'scale') {
				a *= e.factor;
				b *= e.factor;
			}
		});
		t[i] = time;
		A[i] = a;
		B[i] = b;
		K[i] = kcAt(time);
		// RK4 step
		const [k1a, k1b] = f(a, b, time);
		const [k2a, k2b] = f(a + (dt / 2) * k1a, b + (dt / 2) * k1b, time + dt / 2);
		const [k3a, k3b] = f(a + (dt / 2) * k2a, b + (dt / 2) * k2b, time + dt / 2);
		const [k4a, k4b] = f(a + dt * k3a, b + dt * k3b, time + dt);
		a += (dt / 6) * (k1a + 2 * k2a + 2 * k3a + k4a);
		b += (dt / 6) * (k1b + 2 * k2b + 2 * k3b + k4b);
	}
	return {t, A, B, kc: K};
};

/** Exact equilibrium of A ⇌ 2B from (a, b): solve (b + 2y)² = Kc (a − y) for y. */
export const exactEq = (a: number, b: number, kc: number) => {
	// 4y² + (4b + Kc) y + (b² − Kc a) = 0
	const qa = 4, qb = 4 * b + kc, qc = b * b - kc * a;
	const disc = Math.sqrt(qb * qb - 4 * qa * qc);
	const y = (-qb + disc) / (2 * qa);
	return {A: a - y, B: b + 2 * y};
};

/** First index after `from` where both concentrations have stopped changing (relative drift < tol per step). */
export const flatAfter = (r: SimResult, from: number, tol = 0.0009) => {
	for (let i = from + 2; i < r.t.length - 1; i++) {
		const dA = Math.abs(r.A[i + 1] - r.A[i]), dB = Math.abs(r.B[i + 1] - r.B[i]);
		if (dA < tol * Math.max(0.05, r.A[i]) && dB < tol * Math.max(0.05, r.B[i])) return i;
	}
	return r.t.length - 1;
};
