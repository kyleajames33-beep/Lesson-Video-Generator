// Scenes 1 to 6: the hook (last time's trip board: 12 ly in Earth's frame, 7.2 ly for the ship; squashed or measured?),
// length contraction and proper length (the data-sheet equation under the same board), where it comes from (a marker
// beacon on the painted space station times the passing ship: proper time in the station frame, gamma t0 in the ship
// frame), measuring a moving length (end marks on the station deck: simultaneous, late, and replayed in the ship frame),
// nothing is crushed (no force, an unstrained lattice, full length on board, reciprocal rulers, yet the ink outline is
// really shorter) and only along the motion (two rings on two spacecraft meeting head-on).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Countdown, Mark, prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading, kf} from '../../math/studio';
import {Chip, CrossedChip, Row, AnswerBox} from '../../physics/projectile/board';
import {Disc, EARTH, LPlate} from '../../physics/light/plates';
import type {Place} from '../../physics/light/plates';
import {LightClock, SHIP, Ship} from '../../physics/light/frames';
import {STAR_WHITE} from '../../physics/light/stars';
import {ClockDial, SPACE_STATION, ShipOutline, outlineExtent} from '../../physics/light/relativity';
import {HANDOFF13, M7V13FinalFrame} from '../phys-y12-m7-v13/s3';
import {D_SHIP, G_TRIP, HEAD, HEAD_SIZE, L0, TRIP_LY, T_EARTH, T_SHIP, cap, cue, g} from './common';
import {AMBER, Beacon, GREY, INK, Lbl, ORANGE, Ring, Ruler, SLATE, Strip, TEAL, VArrow, VIOLET, deckOf, fx} from './parts';

const H = HANDOFF13;

// ---------- the trip board (last time's final frame, redrawn so its parts can move) ----------
export const TripBoard: React.FC<{f: number; extra?: number; pulse?: {lo?: number; earth?: number; ship?: number}; shipLabel?: string; o?: number}> = ({f, extra = 0, pulse = {}, shipLabel = `${fx(0.8, 1)} × ${fx(T_SHIP)} = ${fx(D_SHIP, 1)} ly (ship frame?)`, o = 1}) => {
	const dx = -H.slide - extra;
	const L = H.star.cx - H.earth.cx, l = L * (D_SHIP / TRIP_LY);
	const pl = pulse.lo ?? 0;
	return (
		<div style={{position: 'absolute', inset: 0, opacity: o}}>
			<FrameSvg>
				<Disc spec={EARTH} cx={H.earth.cx + dx} cy={H.earth.cy} d={H.earth.d} />
				<Disc spec={STAR_WHITE} cx={H.star.cx + dx} cy={H.star.cy} d={H.star.d} />
				<Ship p={H.ship} />
				<line x1={H.earth.cx + dx} y1={H.by} x2={H.star.cx + dx} y2={H.by} stroke={INK} strokeWidth={4 + 3 * pl} />
				<line x1={H.earth.cx + dx} y1={H.by - 14} x2={H.earth.cx + dx} y2={H.by + 14} stroke={INK} strokeWidth={4} />
				<line x1={H.star.cx + dx} y1={H.by - 14} x2={H.star.cx + dx} y2={H.by + 14} stroke={INK} strokeWidth={4} />
				<line x1={H.earth.cx + dx} y1={H.ty} x2={H.earth.cx + dx + l} y2={H.ty} stroke={TEAL.stroke} strokeWidth={5} />
				<line x1={H.earth.cx + dx} y1={H.ty - 14} x2={H.earth.cx + dx} y2={H.ty + 14} stroke={TEAL.stroke} strokeWidth={5} />
				<line x1={H.earth.cx + dx + l} y1={H.ty - 14} x2={H.earth.cx + dx + l} y2={H.ty + 14} stroke={TEAL.stroke} strokeWidth={5} />
				<VArrow a={[H.star.cx - 40 + dx, 330]} b={[H.star.cx - 240 + dx, 330]} />
				<ClockDial cx={H.earth.cx + dx + 150} cy={H.earth.cy - 120} r={28} t={f / 30} color={INK} ring={pulse.earth ?? 0} />
				<ClockDial cx={H.ship.x + H.ship.w / 2} cy={H.ship.y - 50} r={28} t={f / 30 / G_TRIP} color={TEAL.stroke} ring={pulse.ship ?? 0} />
			</FrameSvg>
			<Lbl x={H.earth.cx + dx + 190} y={H.earth.cy - 120} at={-60} color={INK} size={30}>{`Earth frame: ${fx(T_EARTH)} yr`}</Lbl>
			<Lbl x={H.ship.x + H.ship.w / 2 + 40} y={H.ship.y - 50} at={-60} color={TEAL.ink} size={30}>{`ship's clock: ${fx(T_SHIP)} yr`}</Lbl>
			<Lbl x={(H.earth.cx + H.star.cx) / 2 + dx} y={H.by - 30} at={-60} color={INK} size={32} anchor="middle">{`${TRIP_LY} ly (Earth frame)`}</Lbl>
			<Lbl x={H.earth.cx + dx + l / 2} y={H.ty + 46} at={-60} color={TEAL.ink} size={32} anchor="middle">{shipLabel}</Lbl>
			<Lbl x={H.star.cx - 140 + dx} y={290} at={-60} color={ORANGE.ink} size={28} anchor="middle">star approaching at 0.8c</Lbl>
			<Lbl x={96} y={800} at={-60} color={INK} size={26}>not to scale</Lbl>
		</div>
	);
};
const pz = (f: number, at: number, len = 30) => (f < at ? 0 : Math.sin(Math.PI * Math.min(1, (f - at) / len)));

// ---------- 1. hook ----------
export const S01: React.FC = () => {
	const id = 'hook';
	const f = useCurrentFrame();
	const tw = cue(id, 'twelve light years away'), fif = cue(id, 'fifteen years'), nine = cue(id, 'nine years'), rush = cue(id, 'the star rushes towards it'), sev = cue(id, 'seven point two light years'), ops = cue(id, 'one point six seven'), pred = cue(id, 'prediction'), not = cue(id, 'Nothing is pushed or squashed'), cr = cap(id, cue(id, 'crushed'));
	if (f < 1) return <M7V13FinalFrame />;
	const extra = 50 * prog(f, rush, 60);
	const dx = -H.slide - extra, L = H.star.cx - H.earth.cx, l = L * (D_SHIP / TRIP_LY);
	const tickAt = Math.max(not, pred + 92);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<TripBoard f={f} extra={extra} pulse={{lo: pz(f, tw), earth: pz(f, fif), ship: pz(f, nine)}} shipLabel={f < sev ? `${fx(0.8, 1)} × ${fx(T_SHIP)} = ${fx(D_SHIP, 1)} ly (ship frame?)` : `${fx(0.8, 1)} × ${fx(T_SHIP)} = ${fx(D_SHIP, 1)} ly (ship frame)`} />
			<Chip x={96} y={860} at={-60} out={4} size={30} w={1728} color={INK} border={INK}>Next: why can a moving distance be shorter without an object being crushed?</Chip>
			<FrameSvg>
				<Countdown start={pred} end={pred + 90} x={1700} y={840} r={40} />
				{f >= tickAt ? <Mark x={1120} y={870} at={tickAt} kind="tick" color={INK} size={34} /> : null}
			</FrameSvg>
			<Lbl x={H.earth.cx + dx + l + 40} y={H.ty} at={ops} color={VIOLET.ink} size={34}>{`${TRIP_LY} / ${fx(G_TRIP, 2)} = ${fx(D_SHIP, 1)}`}</Lbl>
			<Chip x={420} y={820} at={pred} size={30} color={INK}>squashed by a force</Chip>
			<Chip x={760} y={820} at={pred + 6} size={30} color={INK}>measured differently in each frame</Chip>
			<HandTag x={0} y={0} at={tickAt} color={SLATE.stroke} marks={[{kind: 'cross', cx: 560, cy: 846, size: 46}]} />
			<HandTag x={H.earth.cx + dx + l / 2 - 60} y={H.ty + 100} text="shorter, not squashed" at={not + 10} size={36} color={TEAL.ink} marks={[{kind: 'circle', cx: H.earth.cx + dx + l / 2, cy: H.ty + 40, rx: 280, ry: 44}]} />
			<HandTag x={0} y={0} at={cr} color={INK} marks={[{kind: 'underline', x1: 740, x2: 1245, y: 152}]} />
		</>
	);
};

// ---------- 2. length contraction and proper length ----------
export const S02: React.FC = () => {
	const id = 'contraction-proper-length';
	const f = useCurrentFrame();
	const ds = cue(id, 'On your data sheet'), gm = cue(id, 'gamma', 2), pl = cue(id, 'the proper length'), len = cue(id, 'twelve light years is the proper length'), lg = cap(id, cue(id, 'always the longest'));
	const dx = -H.slide - 50, L = H.star.cx - H.earth.cx, l = L * (D_SHIP / TRIP_LY);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<TripBoard f={f} extra={50} shipLabel={`${fx(0.8, 1)} × ${fx(T_SHIP)} = ${fx(D_SHIP, 1)} ly (ship frame)`} o={1} />
			<Lbl x={H.earth.cx + dx + 170} y={H.by - 80} at={len} color={TEAL.ink} size={34}>{`l₀ = ${TRIP_LY} ly (proper)`}</Lbl>
			<Lbl x={H.earth.cx + dx + l + 30} y={H.ty + 10} at={len + 10} color={INK} size={34}>{`l = ${fx(D_SHIP, 1)} ly`}</Lbl>
			<Strip x={96} y={770} at={ds} size={48}>{'l = l₀√(1 − v²/c²)'}<span style={{color: VIOLET.ink, opacity: prog(f, gm, 12)}}>{' = l₀ / γ'}</span></Strip>
			<Lbl x={640} y={806} at={ds + 10} color={INK} size={28}>data sheet</Lbl>
			<Chip x={96} y={872} at={pl} size={28} w={1728} color={TEAL.ink} border={TEAL.stroke}>Proper length (L₀): The length of an object measured in the frame where the object is at rest, always the maximum measured length.</Chip>
			<Chip x={1320} y={774} at={lg} size={34} color={INK}>γ ≥ 1 → l ≤ l₀</Chip>
			<HandTag x={1020} y={H.by - 80} text="proper = longest" at={lg + 8} size={36} color={TEAL.ink} marks={[{kind: 'brace', x: H.star.cx + dx + 30, y1: H.by - 40, y2: H.by + 40, facing: 'right'}]} />
		</>
	);
};

// ---------- 3. where it comes from ----------
const ST3: Place = {x: 160, y: 700, w: 1600};
const D3 = deckOf(ST3);
const BX = 960;
const SH3W = 720, SH3Y = 450;
const K3 = 1 / g(0.6);
export const S03: React.FC = () => {
	const id = 'derivation';
	const f = useCurrentFrame();
	const n1 = cue(id, 'the nose passes the beacon'), n2 = cue(id, 'then the tail passes'), same = cue(id, 'both at the same place'), st = cue(id, "The station's length for the ship"), sw = cue(id, "In the ship's frame"), own = cue(id, "the ship's own length"), gm = cue(id, 'gamma', 3), dil = cap(id, cue(id, 'dilation'));
	const swap = f >= sw;
	// station frame: the ship (measured contracted, outline K3) moves right so its outline nose is at the beacon at n1 and its tail at n2
	const e0 = outlineExtent({x: 0, y: SH3Y, w: SH3W}, K3);
	const speed = (e0.x1 - e0.x0) / Math.max(1, n2 - n1);
	const px = BX - e0.x1 + (f - n1) * speed;
	// ship frame: the ship (full rest length) held still; the beacon slides from nose to tail at the same speed
	const hold: Place = {x: 520, y: SH3Y, w: SH3W};
	const full = outlineExtent(hold, 1);
	const bx = swap ? Math.max(full.x0, full.x1 + 40 - Math.max(0, f - sw - 20) * speed) : BX;
	const stX = swap ? ST3.x + (bx - BX) : ST3.x;
	const flash = (at: number) => (f >= at && f < at + 24 ? 1 - (f - at) / 24 : 0);
	const tickT = Math.min(1, Math.max(0, (f - sw - 20) / ((full.x1 - full.x0) / speed)));
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<LPlate spec={SPACE_STATION} p={{...ST3, x: stX}} />
				<Beacon x={bx} deckY={D3.y} flash={swap ? 0 : Math.max(flash(n1), flash(n2))} />
				<ClockDial cx={bx} cy={D3.y + 70} r={28} t={swap ? 0 : f / 30} color={INK} />
				{!swap ? <ShipOutline p={{x: px, y: SH3Y, w: SH3W}} k={K3} color={INK} plateOpacity={0.35} /> : <Ship p={hold} />}
				{swap ? <g opacity={prog(f, sw + 10, 12)}>
					<ClockDial cx={full.x1} cy={SH3Y - 30} r={30} t={f / 30} color={TEAL.stroke} />
					<ClockDial cx={full.x0} cy={SH3Y - 30} r={30} t={f / 30} color={TEAL.stroke} />
					<line x1={full.x1} y1={SH3Y + 260} x2={full.x1 - (full.x1 - full.x0) * tickT} y2={SH3Y + 260} stroke={TEAL.stroke} strokeWidth={6} />
				</g> : null}
			</FrameSvg>
			<Lbl x={bx + 30} y={D3.y - 110} at={n1} out={sw} color={INK} size={30}>{f < n2 ? 'event 1: nose' : 'events 1 and 2: same place'}</Lbl>
			<Lbl x={bx + 50} y={D3.y + 74} at={same} out={sw} color={INK} size={32}>t₀ (beacon's clock)</Lbl>
			<Lbl x={96} y={890} at={n1} out={sw} color={GREY.ink} size={26}>station frame: ship measured shorter (ink outline); faded plate shows its rest shape</Lbl>
			<Lbl x={full.x1 - 60} y={SH3Y - 80} at={sw + 10} color={TEAL.ink} size={28} anchor="end">t = γt₀ (nose to tail)</Lbl>
			<Lbl x={96} y={890} at={sw + 10} color={TEAL.ink} size={28}>{"ship frame: the beacon slides along the hull, nose to tail"}</Lbl>
			<div style={{position: 'absolute', left: 96, top: 170, display: 'flex', flexDirection: 'column', gap: 10, width: 1700}}>
				<Row at={st} ageAt={gm} size={44}>{'station frame: l = vt₀'}</Row>
				<Row at={own} ageAt={gm} size={44}><span style={{color: TEAL.ink}}>{'ship frame: l₀ = vt = vγt₀'}</span></Row>
				<Row at={gm - 6} size={52}><AnswerBox at={gm}>{'l / l₀ = 1/γ → l = l₀ / γ'}</AnswerBox></Row>
			</div>
			<HandTag x={1000} y={330} text="same γ: contraction and dilation come together" at={dil} size={32} color={VIOLET.ink} />
		</>
	);
};

// ---------- 4. measuring a moving length ----------
const TRACK_Y = 760, SH4: Place = {x: 300, y: 470, w: 760};
const K4 = 0.8;
const Marker: React.FC<{x: number; at: number; f: number; color: string}> = ({x, at, f, color}) => {
	if (f < at) return null;
	const u = Math.min(1, (f - at) / 14);
	const y = 620 + (TRACK_Y - 620) * u;
	return <g><path d={`M${x - 12},${y - 22} L${x + 12},${y - 22} L${x},${y} Z`} fill={color} />{u >= 1 ? <line x1={x} y1={TRACK_Y} x2={x} y2={TRACK_Y + 26} stroke={color} strokeWidth={5} /> : null}</g>;
};
export const S04: React.FC = () => {
	const id = 'measure-moving-length';
	const f = useCurrentFrame();
	const mb = cue(id, 'mark both ends at the same time'), mn = cue(id, 'Mark the nose, wait, then mark the tail'), dis = cue(id, "don't agree on which distant events happen at the same time"), ans = cap(id, cue(id, 'answer'));
	const phase = f < mn ? 0 : f < dis ? 1 : f < ans ? 2 : 3;
	const t0 = [0, mn, dis, ans][phase];
	const v = phase === 0 ? 2.5 : 6;
	const shipP: Place = {...SH4, x: SH4.x + (phase === 0 ? (f - t0) * v : phase === 1 ? Math.min(f - t0, 70) * v : 0)};
	const exF = outlineExtent(SH4, 1);
	const trackShift = phase === 2 ? -(f - t0) * v : 0;
	// phase 0: both marks at mb + 20; phase 1: nose at mn + 10, tail at mn + 60; phase 2: nose first, tail later (ship frame)
	const m0 = mb + 20, ex0 = outlineExtent({...SH4, x: SH4.x + (m0 - 0) * 2.5}, K4);
	const nB = mn + 10, tB = mn + 60, exN = outlineExtent({...SH4, x: SH4.x + 10 * 6}, K4), exT = outlineExtent({...SH4, x: SH4.x + 60 * 6}, K4);
	const nC = dis + 20, tC = dis + 70;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<line x1={96} y1={TRACK_Y} x2={1824} y2={TRACK_Y} stroke={INK} strokeWidth={6} />
				{Array.from({length: 40}, (_, i) => { const x = 96 + ((((i * 48 + trackShift) % 1728) + 1728) % 1728); return <line key={i} x1={x} y1={TRACK_Y} x2={x} y2={TRACK_Y + 14} stroke={INK} strokeWidth={2.5} />; })}
				{phase < 2 ? <ShipOutline p={shipP} k={K4} color={INK} plateOpacity={0.35} /> : phase === 2 ? <Ship p={SH4} /> : null}
				{phase === 0 && f >= m0 ? <g><Marker x={ex0.x1} at={m0} f={f} color={INK} /><Marker x={ex0.x0} at={m0} f={f} color={INK} /></g> : null}
				{phase === 0 && f >= m0 + 16 ? <Ruler x0={ex0.x0} x1={ex0.x1} y={TRACK_Y + 70} color={INK} label="l" /> : null}
				{phase === 1 ? <g><Marker x={exN.x1} at={nB} f={f} color={SLATE.stroke} /><Marker x={exT.x0} at={tB} f={f} color={SLATE.stroke} />{f >= tB + 16 ? <Ruler x0={exT.x0} x1={exN.x1} y={TRACK_Y + 70} color={SLATE.stroke} label="wrong length" /> : null}</g> : null}
				{phase === 2 ? <g>
					<Marker x={exF.x1} at={nC} f={f} color={TEAL.stroke} /><Marker x={exF.x0} at={tC} f={f} color={TEAL.stroke} />
					<ClockDial cx={exF.x1} cy={SH4.y - 50} r={28} t={(Math.min(f, nC) - dis) / 30} color={TEAL.stroke} />
					<ClockDial cx={exF.x0} cy={SH4.y - 50} r={28} t={(Math.min(f, tC) - dis) / 30} color={TEAL.stroke} />
				</g> : null}
				{phase === 3 ? <g>
					<Ruler x0={300} x1={300 + (exF.x1 - exF.x0) * K4} y={500} color={INK} label="station frame: l" />
					<Ruler x0={300} x1={300 + (exF.x1 - exF.x0)} y={640} color={TEAL.stroke} label="ship frame: l₀" />
					<Mark x={1260} y={500} at={ans + 6} kind="tick" color={INK} size={34} />
					<Mark x={1260} y={640} at={ans + 12} kind="tick" color={INK} size={34} />
				</g> : null}
			</FrameSvg>
			<Lbl x={96} y={250} at={mb} out={mn} color={INK} size={34}>station frame: mark nose and tail together</Lbl>
			<HandTag x={1200} y={880} text="same time (station frame)" at={m0 + 20} out={mn} size={34} color={INK} />
			<Lbl x={96} y={250} at={mn} out={dis} color={SLATE.ink} size={34}>mark the nose, wait, then the tail</Lbl>
			<HandTag x={1200} y={880} text="not simultaneous: wrong length" at={tB + 20} out={dis} size={34} color={SLATE.ink} marks={[{kind: 'cross', cx: (exT.x0 + exN.x1) / 2, cy: TRACK_Y + 70, size: 44}]} />
			<Lbl x={96} y={250} at={dis} out={ans} color={TEAL.ink} size={34}>ship frame: the ship is still, the station deck slides</Lbl>
			<Lbl x={exF.x1 + 40} y={SH4.y - 50} at={nC} out={ans} color={TEAL.ink} size={30}>nose mark first</Lbl>
			<Lbl x={exF.x0 - 40} y={SH4.y - 50} at={tC} out={ans} color={TEAL.ink} size={30} anchor="end">tail mark later</Lbl>
			<HandTag x={1100} y={880} text="simultaneous in one frame, not in the other" at={tC + 10} out={ans} size={32} color={TEAL.ink} />
			<HandTag x={1320} y={575} text="both correct" at={ans + 16} size={40} color={INK} />
		</>
	);
};

// ---------- 5. nothing is crushed, yet it's real ----------
const SH5: Place = {x: 280, y: 380, w: 980};
const ST5: Place = {x: 160, y: 740, w: 1600};
export const S05: React.FC = () => {
	const id = 'not-crushed';
	const f = useCurrentFrame();
	const np = cue(id, 'Nothing pushes on the ship'), na = cue(id, 'no atoms are squeezed'), er = cue(id, 'every ruler gives the full length'), rc = cue(id, "it's reciprocal"), cb = cue(id, "They can't both be squashed"), rs = cue(id, 'the ship really is shorter'), sq = cap(id, cue(id, 'squeezed', 2));
	const full = outlineExtent(SH5, 1);
	const d5 = deckOf(ST5);
	const swapO = f >= rc && f < rs ? prog(f, rc, 16) : 0;
	const stShift = -160 * swapO;
	const stRuler = 1 - 0.4 * prog(f, rc + 10, 30) * (f < rs ? 1 : 0);
	const out = f >= rs;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<LPlate spec={SPACE_STATION} p={{...ST5, x: ST5.x + stShift}} />
				{out ? <ShipOutline p={SH5} k={1 / g(0.8)} color={INK} plateOpacity={0.35} opacity={prog(f, rs, 14)} /> : <Ship p={SH5} />}
				<g opacity={1 - prog(f, np + 30, 20)}><VArrow a={[120, 530]} b={[full.x0 - 10, 530]} color={AMBER.stroke} /></g>
				<line x1={full.x0 + 30} y1={540} x2={1480} y2={330} stroke={GREY.stroke} strokeWidth={2} strokeDasharray="8 6" opacity={prog(f, na, 12)} />
				{f >= na ? <g opacity={prog(f, na, 12)}>
					<circle cx={1600} cy={300} r={140} fill="#fffdf8" stroke={TEAL.stroke} strokeWidth={4} />
					{Array.from({length: 49}, (_, i) => { const x = 1600 + ((i % 7) - 3) * 34, y = 300 + (Math.floor(i / 7) - 3) * 34; return Math.hypot(x - 1600, y - 300) < 125 ? <circle key={i} cx={x} cy={y} r={7} fill={SLATE.stroke} /> : null; })}
				</g> : null}
				<Ruler x0={full.x0} x1={full.x1} y={SH5.y - 30} color={TEAL.stroke} label={`l₀ = ${L0} m (on board)`} opacity={prog(f, er, 12) * (out ? 0 : 1)} up />
				<Ruler x0={d5.x0 + stShift} x1={d5.x0 + stShift + (d5.x1 - d5.x0) * stRuler} y={d5.y - 22} color={INK} opacity={swapO} />
				{f >= cb && f < rs ? <g opacity={prog(f, cb, 12)}>
					<Ruler x0={1380} x1={1560} y={600} color={INK} label="" />
					<Ruler x0={1600} x1={1780} y={600} color={TEAL.stroke} label="" />
				</g> : null}
			</FrameSvg>
			<Lbl x={120} y={490} at={0} out={np + 30} color={AMBER.ink} size={34}>F?</Lbl>
			<HandTag x={0} y={0} at={np + 6} out={np + 40} color={SLATE.stroke} marks={[{kind: 'cross', cx: 190, cy: 530, size: 50}]} />
			<Lbl x={96} y={250} at={np + 10} color={INK} size={32}>no force acts on the ship</Lbl>
			<HandTag x={1460} y={470} text="no strain" at={na + 14} size={36} color={TEAL.ink} />
			<Lbl x={1600} y={170} at={na} color={TEAL.ink} size={28} anchor="middle">hull atoms (zoom)</Lbl>
			<HandTag x={96} y={310} text="the ship measures the station's ruler shorter" at={rc + 20} out={rs} size={32} color={INK} />
			<Lbl x={1580} y={660} at={cb} out={rs} color={INK} size={26} anchor="middle">ship (station frame) | station (ship frame)</Lbl>
			<Lbl x={1580} y={540} at={cb + 6} out={rs} color={SLATE.ink} size={48} anchor="middle">?</Lbl>
			<HandTag x={full.x1 - 200} y={SH5.y - 40} text="measured in this frame" at={rs + 10} size={32} color={INK} />
			<Lbl x={96} y={300} at={rs + 6} color={GREY.ink} size={26}>ink outline: length measured from the station; faded plate: the ship's rest shape</Lbl>
			<CrossedChip x={1100} y={800} at={sq} crossAt={sq + 10} size={28} caption="relativity: no squeeze">aether rescue: a physical squeeze</CrossedChip>
			<HandTag x={96} y={880} text="no squeeze, no force, still real" at={sq + 16} size={36} color={INK} />
		</>
	);
};

// ---------- 6. only along the motion ----------
export const S06: React.FC = () => {
	const id = 'perpendicular';
	const f = useCurrentFrame();
	const ra = cue(id, "Lengths at right angles don't change"), ea = cue(id, "each ship would say the other's ring is smaller"), cb = cue(id, "They can't both be right"), ap = cap(id, cue(id, 'apart'));
	const close = kf(f, [[0, 0], [cb, 0.55], [cb + 40, 1]]);
	const W = 600, y = 360;
	const lp: Place = {x: 60 + 300 * close, y, w: W}, rp: Place = {x: 1260 - 300 * close, y, w: W};
	const s = W / (SHIP.box[2] - SHIP.box[0]);
	const noseL = lp.x + (1767 - SHIP.box[0]) * s, noseR = rp.x + rp.w - (1767 - SHIP.box[0]) * s;
	const midY = y + (418 - SHIP.box[1]) * s;
	const Box: React.FC<{x: number; title: string; color: string; other: string}> = ({x, color, other}) => (
		<g>
			<rect x={x} y={640} width={760} height={200} rx={14} fill="#fffdf8" stroke={GREY.stroke} strokeWidth={3} />
			<Ring cx={x + 600} cy={746} d={170} color={color} />
			<Ring cx={x + 600} cy={746} d={96} color={other} />
			<circle cx={x + 600} cy={746 - 48} r={9} fill={AMBER.stroke} />
		</g>
	);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<line x1={60} y1={midY} x2={1860} y2={midY} stroke={GREY.stroke} strokeWidth={3} strokeDasharray="14 10" />
				<Ship p={lp} />
				<LPlate spec={SHIP} p={rp} flip />
				<Ring cx={noseL + 30} cy={midY} d={200} color={TEAL.stroke} />
				<Ring cx={noseR - 30} cy={midY} d={200} color={INK} />
				<VArrow a={[lp.x + 40, y - 40]} b={[lp.x + 200, y - 40]} />
				<VArrow a={[rp.x + rp.w - 40, y - 40]} b={[rp.x + rp.w - 200, y - 40]} />
				{f >= ea ? <g opacity={prog(f, ea, 14)}><Box x={96} title="" color={TEAL.stroke} other={INK} /><Box x={1064} title="" color={INK} other={TEAL.stroke} /></g> : null}
				{f >= ap ? <g opacity={prog(f, ap, 12)}><rect x={1480} y={170} width={300} height={150} rx={12} fill="#fffdf8" stroke={INK} strokeWidth={3} /><LightClock x={1560} y={300} h={100} w={70} pulse={AMBER.stroke} u={0.5} /></g> : null}
			</FrameSvg>
			<Lbl x={lp.x + 60} y={y - 80} at={0} color={TEAL.ink} size={30}>teal ship</Lbl>
			<Lbl x={rp.x + rp.w - 60} y={y - 80} at={0} color={INK} size={30} anchor="end">ink ship</Lbl>
			<Lbl x={noseL + 30} y={midY + 140} at={0} color={TEAL.ink} size={28} anchor="middle">ring</Lbl>
			<Lbl x={noseR - 30} y={midY + 140} at={0} color={INK} size={28} anchor="middle">ring</Lbl>
			<Strip x={96} y={168} at={2} size={32}>Two identical rings, one on each ship, flying straight at each other.</Strip>
			<HandTag x={760} y={300} text="only along v" at={ra + 6} size={38} color={ORANGE.ink} />
			<Chip x={110} y={660} at={ea} out={cb + 30} size={26} w={440} color={TEAL.ink} bg="#fffdf8">{"teal ship's view: the ink ring is smaller and passes inside; paint marks the ink ring"}</Chip>
			<Chip x={1078} y={660} at={ea + 10} out={cb + 30} size={26} w={440} color={INK} bg="#fffdf8">{"ink ship's view: the teal ring is smaller and passes inside; paint marks the teal ring"}</Chip>
			<HandTag x={0} y={0} at={cb} color={SLATE.stroke} marks={[{kind: 'cross', cx: 696, cy: 746, size: 110}, {kind: 'cross', cx: 1664, cy: 746, size: 110}]} />
			<HandTag x={680} y={900} text="same size: no sideways contraction" at={cb + 46} size={36} color={INK} />
			<Lbl x={1630} y={240} at={ap} color={INK} size={26}>d unchanged</Lbl>
			<HandTag x={0} y={0} at={ap + 6} color={INK} marks={[{kind: 'circle', cx: 1630, cy: 245, rx: 140, ry: 70}]} />
		</>
	);
};

