/** Idealised projectile: metres, seconds, and upward-positive velocity. */
export type ProjectileModel = {
	vx0: number;
	vy0: number;
	g: number;
};

export const PILOT_MODEL: ProjectileModel = {vx0: 16, vy0: 12, g: 10};

export const flightTime = (model: ProjectileModel) => {
	if (![model.vx0, model.vy0, model.g].every(n => Number.isFinite(n) && n > 0)) {
		throw new Error('This kit supports positive vx0, vy0 and g, with landing at launch height.');
	}
	return 2 * model.vy0 / model.g;
};

export const projectileState = (model: ProjectileModel, time: number) => {
	const t = Math.max(0, Math.min(flightTime(model), time));
	return {
		t,
		x: model.vx0 * t,
		y: model.vy0 * t - 0.5 * model.g * t * t,
		vx: model.vx0,
		vy: model.vy0 - model.g * t,
	};
};
