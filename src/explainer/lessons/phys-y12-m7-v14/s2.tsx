// Scenes 7 to 11: the worked passing spacecraft (an ink outline over the unscaled ship plate shortens with a speed
// slider; the height bracket and the on-board ruler never change), the docking bay (the outline shrinks to fit 80 m),
// the muons in their own frame (two atmosphere columns: Earth's 15 km and the muon frame's contracted 1.5 km rising to
// a held muon), one effect per frame and the memory aid.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading, kf} from '../../math/studio';
import {AnswerBox, Bracket, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {MemoryCard} from '../../shared/scenes';
import {LPlate} from '../../physics/light/plates';
import type {Place} from '../../physics/light/plates';
import {AtmosColumn, ClockDial, SPACE_STATION, ShipOutline, outlineExtent} from '../../physics/light/relativity';
import {Slider} from '../phys-y12-m7-v04/parts';
import {ATM_KM, ATM_MU_KM, B_BAY, B_MU, B_SHIP, G_BAY, G_MU, G_SHIP, G_TRIP, HEAD, HEAD_SIZE, INV_G2, L0, LIFE_E, LIFE_MU, L_BAY, L_SHIP, L_SLIP, SC_B, SC_G, SC_L, SC_L0, SLIDER, SURV, TAU0_US, TAU_DIL_US, TRIP_E_US, T_EARTH, T_MU_US, T_SHIP, cap, cue, g} from './common';
import {GREY, Givens, INK, Lbl, ORANGE, Ruler, SLATE, Strip, TEAL, VIOLET, deckOf, fx} from './parts';

// ---------- 7. worked example: a passing spacecraft ----------
const ST7: Place = {x: 980, y: 660, w: 840};
const SH7: Place = {x: 1060, y: 420, w: 700};
export const S07: React.FC = () => {
	const id = 'worked-ship';
	const f = useCurrentFrame();
	const gm = cue(id, 'Gamma at zero point eight c is one point six seven'), me = cue(id, 'metres', 2), un = cue(id, 'unchanged'), st = cap(id, cue(id, 'still one hundred metres long'));
	const sweep: [number, number][] = [[un, 0], ...SLIDER.slice(1).map((b, i) => [un + 14 * (i + 1), b] as [number, number])];
	const b = f < me ? 0 : f < un ? B_SHIP : f < st ? kf(f, sweep) : kf(f, [[st, SLIDER[SLIDER.length - 1]], [st + 20, B_SHIP]]);
	const k = f < me ? 1 : 1 / g(b);
	const full = outlineExtent(SH7, 1), ex = outlineExtent(SH7, k);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<Strip x={96} y={168} at={2} size={32}>{"Find the ship's length measured by the station."}</Strip>
			<Strip x={96} y={236} at={6} size={36}>{'l = l₀√(1 − v²/c²) = l₀ / γ'}</Strip>
			<Givens x={96} y={312} w={800} at={10} size={30} lines={[`l₀ = ${L0} m (proper: ship's rest frame)`, `v = ${fx(B_SHIP, 2)}c`]} />
			<FrameSvg>
				<LPlate spec={SPACE_STATION} p={ST7} />
				<ShipOutline p={SH7} k={k} color={INK} plateOpacity={f < me ? 1 : 0.35} />
				<Ruler x0={full.x0} x1={full.x1} y={SH7.y - 50} color={TEAL.stroke} label={`on board: ${L0} m`} opacity={prog(f, st, 12)} up />
				<Bracket x1={ex.x1 + 30} y1={ex.top} x2={ex.x1 + 30} y2={ex.bot} color={INK} at={un} />
				<Slider x={1060} y={860} w={700} v0={0} v1={1} v={b} ticks={[0, 0.5, 0.8, 1]} fmt={x => `${x}c`} color={ORANGE.stroke} label="speed" opacity={prog(f, un, 12)} />
			</FrameSvg>
			<Lbl x={ex.x1 + 44} y={(ex.top + ex.bot) / 2} at={un} color={INK} size={28}>height: unchanged</Lbl>
			<Lbl x={(ex.x0 + ex.x1) / 2} y={SH7.y - 10} at={me} out={st} color={INK} size={32} anchor="middle">{`l = ${fx(L0 / g(b), 1)} m`}</Lbl>
			<Lbl x={980} y={250} at={un} color={ORANGE.ink} size={52}>{`v = ${fx(b, 2)}c`}</Lbl>
			<Lbl x={1400} y={250} at={un} color={VIOLET.ink} size={52}>{`γ = ${fx(g(b), 2)}`}</Lbl>
			<Lbl x={96} y={830} at={me} color={GREY.ink} size={26}>ink outline: measured by the station; faded plate: rest shape</Lbl>
			<div style={{position: 'absolute', left: 96, top: 470, display: 'flex', flexDirection: 'column', gap: 12, width: 860}}>
				<Row at={gm} size={48}><span style={{color: VIOLET.ink}}>{`γ = 1 / √(1 − ${fx(B_SHIP, 2)}²) = ${fx(G_SHIP, 2)}`}</span></Row>
				<Row at={me - 6} size={56}><AnswerBox at={me}>{`l = ${L0} / ${fx(G_SHIP, 2)} = ${fx(L_SHIP)} m`}</AnswerBox></Row>
			</div>
			<CrossedChip x={96} y={680} at={me + 20} crossAt={me + 36} size={32} caption="moving lengths are shorter">{`l = ${L0} × ${fx(G_SHIP, 2)} = ${fx(L_SLIP)} m`}</CrossedChip>
			<HandTag x={96} y={900} text="only along v" at={un + 20} size={38} color={VIOLET.ink} />
		</>
	);
};

// ---------- 8. worked example: just fitting a docking bay ----------
export const S08: React.FC = () => {
	const id = 'worked-docking';
	const f = useCurrentFrame();
	const bay = cue(id, 'a docking bay of that length'), gb = cue(id, 'Gamma must be one hundred over eighty'), rg = cue(id, 'Rearrange gamma'), om = cue(id, 'one minus zero point six four'), cc = cap(id, cue(id, 'zero point six c'));
	const k = kf(f, [[0, 1 / G_SHIP], [cc, 1 / G_SHIP], [cc + 24, 1 / G_BAY]]);
	const d7 = deckOf(ST7), full = outlineExtent(SH7, 1), ex = outlineExtent(SH7, k);
	const bw = (full.x1 - full.x0) * (L_BAY / L0), bx0 = (full.x0 + full.x1) / 2 - bw / 2;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<Strip x={96} y={168} at={-30} size={30}>{`last example: γ = ${fx(G_SHIP, 2)}, l = ${fx(L_SHIP)} m`}</Strip>
			<Strip x={96} y={236} at={4} size={32}>{`Find v so the station measures l = ${L_BAY} m.`}</Strip>
			<FrameSvg>
				<LPlate spec={SPACE_STATION} p={ST7} />
				<ShipOutline p={SH7} k={k} color={INK} plateOpacity={0.35} />
				{f >= bay ? <g opacity={prog(f, bay, 12)}><rect x={bx0} y={d7.y - 16} width={bw} height={16} fill="none" stroke={TEAL.stroke} strokeWidth={4} /></g> : null}
				<Bracket x1={bx0} y1={800} x2={bx0 + bw} y2={800} color={TEAL.stroke} at={bay} label={`${L_BAY} m bay (proper, station frame)`} size={28} ly={838} />
			</FrameSvg>
			<Lbl x={(ex.x0 + ex.x1) / 2} y={SH7.y - 30} at={0} color={INK} size={30} anchor="middle">{`l = ${fx(L0 * k)} m`}</Lbl>
			<div style={{position: 'absolute', left: 96, top: 330, display: 'flex', flexDirection: 'column', gap: 14, width: 860}}>
				<Row at={gb} ageAt={om} size={46}><span style={{color: VIOLET.ink}}>{`γ = l₀ / l = ${L0} / ${L_BAY} = ${fx(G_BAY, 2)}`}</span></Row>
				<Row at={rg} ageAt={om} size={44}>{'1 − v²/c² = 1/γ² → v = c√(1 − 1/γ²)'}</Row>
				<Row at={om - 10} ageAt={cc} size={40}>{`v = c√(1 − 1/${fx(G_BAY, 2)}²) = c√(1 − ${fx(INV_G2, 2)}) = c√${fx(1 - INV_G2, 2)}`}</Row>
				<Row at={cc - 6} size={56}><AnswerBox at={cc}>{`v = ${fx(B_BAY, 2)}c`}</AnswerBox></Row>
			</div>
			<HandTag x={bx0 + bw + 20} y={SH7.y - 20} text="just fits" at={cc + 20} size={38} color={ORANGE.ink} />
			<Chip x={96} y={860} at={cc + 10} size={28} color={GREY.ink}>{`check: l₀ = ${SC_L0} m, l = ${SC_L} m: γ = ${fx(SC_G, 2)}, v = ${fx(SC_B, 2)}c`}</Chip>
		</>
	);
};

// ---------- 9. the muons in their own frame ----------
const CE = {x: 260, y: 250, w: 220, h: 600}, CM = {x: 1080, y: 250, w: 220, h: 600};
const MuonColumns: React.FC<{f: number; rise: number; muonFrame: number; earthClock?: boolean}> = ({f, rise, muonFrame, earthClock = true}) => (
	<g>
		<AtmosColumn x={CE.x} y={CE.y} w={CE.w} h={CE.h} f={f} decayPx={CE.h / LIFE_E} speed={6} n={16} dot={SLATE.stroke} />
		{earthClock ? <g><circle cx={CE.x + CE.w + 40} cy={CE.y + 60 + ((f * 2) % (CE.h - 100))} r={12} fill={SLATE.stroke} /><ClockDial cx={CE.x + CE.w + 90} cy={CE.y + 60 + ((f * 2) % (CE.h - 100))} r={24} t={f / 30 / G_MU} color={INK} /></g> : null}
		{muonFrame > 0.001 ? <g opacity={muonFrame}>
			<AtmosColumn x={CM.x} y={CM.y} w={CM.w} h={CM.h} f={f} decayPx={1e6} hold dot={SLATE.stroke} n={6} rise={rise * (1 - 1 / G_MU)} />
			<ClockDial cx={CM.x + CM.w + 60} cy={CM.y + 30} r={28} t={f / 30} color={TEAL.stroke} />
		</g> : null}
	</g>
);
export const S09: React.FC = () => {
	const id = 'muons-own-frame';
	const f = useCurrentFrame();
	const trip = cue(id, 'some last the whole fifty microsecond trip'), mf = cue(id, "Now take the muon's frame"), ru = cue(id, 'The atmosphere rushes up'), km = cue(id, 'kilometres', 2), five = cue(id, 'about five microseconds'), ct = cap(id, cue(id, 'counts'));
	const rise = kf(f, [[ru, 0], [ru + 60, 1]]);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg><MuonColumns f={f} rise={rise} muonFrame={prog(f, mf, 16)} /></FrameSvg>
			<Lbl x={CE.x} y={CE.y - 40} at={0} color={INK} size={34}>Earth frame</Lbl>
			<Lbl x={CE.x - 20} y={CE.y + CE.h / 2} at={0} color={INK} size={30} anchor="end">{`${ATM_KM} km`}</Lbl>
			<Lbl x={CE.x + CE.w + 130} y={CE.y + 120} at={0} color={INK} size={28}>{`mean lifetime ${fx(TAU_DIL_US)} μs (dilated)`}</Lbl>
			<Lbl x={CE.x + CE.w + 130} y={CE.y + 170} at={trip} color={INK} size={28}>{`trip: ${ATM_KM} km / ${B_MU}c = ${fx(TRIP_E_US)} μs`}</Lbl>
			<Lbl x={CM.x} y={CM.y - 40} at={mf} color={TEAL.ink} size={34}>muon frame</Lbl>
			<Lbl x={CM.x + CM.w + 100} y={CM.y + 30} at={mf + 6} color={TEAL.ink} size={28}>{`${fx(TAU0_US, 1)} μs (its own)`}</Lbl>
			<Lbl x={CM.x + CM.w + 30} y={CM.y + 120} at={ru} color={ORANGE.ink} size={28}>{`atmosphere rushes up at ${B_MU}c`}</Lbl>
			<Lbl x={CM.x + CM.w + 30} y={CM.y + 200} at={km} color={INK} size={32}>{`${ATM_KM} km / ${fx(G_MU, 1)} = ${fx(ATM_MU_KM, 1)} km`}</Lbl>
			<Lbl x={CM.x + CM.w + 30} y={CM.y + 260} at={five} color={INK} size={32}>{`${fx(ATM_MU_KM, 1)} km / ${B_MU}c = ${fx(T_MU_US, 1)} μs`}</Lbl>
			<Lbl x={CM.x + CM.w + 30} y={CM.y + 310} at={five + 10} color={INK} size={32}>{`= ${fx(LIFE_MU, 1)} × ${fx(TAU0_US, 1)} μs`}</Lbl>
			<Lbl x={CE.x + CE.w + 130} y={CE.y + 230} at={ct} color={INK} size={32}>{`${fx(TRIP_E_US)} μs / ${fx(TAU_DIL_US)} μs = ${fx(LIFE_E, 1)} lifetimes`}</Lbl>
			<Strip x={600} y={720} at={ct} size={34}>{`same detector count: ≈ 1 in ${fx(1 / SURV)}`}</Strip>
			<Lbl x={600} y={820} at={ct + 6} color={GREY.ink} size={26}>{`ideal model: constant ${B_MU}c, no energy loss`}</Lbl>
			<HandTag x={600} y={890} text="same count in both frames" at={ct + 12} size={34} color={SLATE.ink} />
		</>
	);
};

// ---------- 10. one effect per frame ----------
export const S10: React.FC = () => {
	const id = 'one-effect-per-frame';
	const f = useCurrentFrame();
	const ed = cue(id, "Earth's frame uses time dilation"), ml = cue(id, "The muon's frame uses length contraction"), kp = cue(id, 'Keep every distance and time you combine from the same frame'), sto = cap(id, cue(id, 'stories'));
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg><MuonColumns f={f} rise={1} muonFrame={1} /></FrameSvg>
			<Lbl x={CE.x} y={CE.y - 40} at={-30} color={INK} size={34}>Earth frame</Lbl>
			<Lbl x={CM.x} y={CM.y - 40} at={-30} color={TEAL.ink} size={34}>muon frame</Lbl>
			<Chip x={CE.x + CE.w + 30} y={CE.y} at={ed} size={28} w={520} color={INK}>{`time dilated (muon's clock moves): ${fx(TAU_DIL_US)} μs; length ${ATM_KM} km (proper)`}</Chip>
			<Chip x={CM.x + CM.w + 30} y={CM.y} at={ml} size={28} w={500} color={TEAL.ink} border={TEAL.stroke}>{`length contracted (atmosphere moves): ${fx(ATM_MU_KM, 1)} km; time ${fx(TAU0_US, 1)} μs (proper)`}</Chip>
			<Strip x={CE.x + CE.w + 30} y={CE.y + 160} at={kp + 20} size={32}>{`${ATM_KM} km with ${fx(TRIP_E_US)} μs`}</Strip>
			<Strip x={CM.x + CM.w + 30} y={CM.y + 160} at={kp + 26} size={32} border={TEAL.stroke}>{`${fx(ATM_MU_KM, 1)} km with ${fx(T_MU_US, 1)} μs`}</Strip>
			<Strip x={CE.x + CE.w + 30} y={CE.y + 320} at={-30} size={30}>{`${fx(TRIP_E_US)} μs ÷ ${fx(TAU_DIL_US)} μs = ${fx(LIFE_E, 1)} lifetimes`}</Strip>
			<Strip x={CM.x + CM.w + 30} y={CM.y + 320} at={-30} size={30} border={TEAL.stroke}>{`${fx(T_MU_US, 1)} μs ÷ ${fx(TAU0_US, 1)} μs = ${fx(LIFE_MU, 1)} lifetimes`}</Strip>
			<CrossedChip x={600} y={720} at={kp} crossAt={kp + 14} size={30} caption="mixes two frames">{`${fx(ATM_MU_KM, 1)} km (muon frame) with ${fx(TAU_DIL_US)} μs (Earth frame)`}</CrossedChip>
			<Lbl x={CE.x + CE.w + 30} y={CE.y + 260} at={sto} color={VIOLET.ink} size={34}>{`γ = ${fx(G_MU, 1)}`}</Lbl>
			<Lbl x={CM.x + CM.w + 30} y={CM.y + 260} at={sto} color={VIOLET.ink} size={34}>{`γ = ${fx(G_MU, 1)}`}</Lbl>
		</>
	);
};

// ---------- 11. a way to remember ----------
export const S11: React.FC = () => {
	const id = 'memory-aid';
	const f = useCurrentFrame();
	const pl = cue(id, 'Proper length is the longest'), sh = cue(id, 'shortest'), bb = cap(id, cue(id, 'Both belong to the frame'));
	const sp: Place = {x: 200, y: 440, w: 560};
	const full = outlineExtent(sp, 1);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<div style={{position: 'absolute', left: 300, top: 160, width: 1320}}>
				<MemoryCard at={pl - 10} main={<><span style={{color: TEAL.ink}}>Proper length is the longest.</span> <span style={{color: TEAL.ink}}>Proper time is the shortest.</span></>} />
			</div>
			<FrameSvg>
				<ShipOutline p={sp} k={1 / G_SHIP} color={INK} plateOpacity={0.35} />
				<Ruler x0={full.x0} x1={full.x1} y={sp.y - 20} color={TEAL.stroke} label={`${L0} m (at rest)`} opacity={prog(f, pl, 12)} up />
				<ClockDial cx={1150} cy={560} r={60} t={f / 30 / G_TRIP} color={TEAL.stroke} opacity={prog(f, sh, 12)} />
				<ClockDial cx={1500} cy={560} r={60} t={f / 30} color={INK} opacity={prog(f, sh, 12)} />
			</FrameSvg>
			<Lbl x={(full.x0 + full.x1) / 2} y={sp.y + 230} at={pl} color={INK} size={30} anchor="middle">{`moving: ${fx(L_SHIP)} m`}</Lbl>
			<Lbl x={1150} y={670} at={sh} color={TEAL.ink} size={30} anchor="middle">{`ship's clock: ${fx(T_SHIP)} yr`}</Lbl>
			<Lbl x={1500} y={670} at={sh} color={INK} size={30} anchor="middle">{`Earth: ${fx(T_EARTH)} yr`}</Lbl>
			<HandTag x={700} y={860} text="proper = measured at rest" at={bb} size={40} color={TEAL.ink} />
		</>
	);
};
