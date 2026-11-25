// Scenes 6 to 10: the split ring gives DC out (the end-on split ring with its gap at the brushes when the coil's emf
// is zero; the trace's negative halves flip up), what the rings do not change (three shared rows and the one that
// differs), turning faster (a speed slider; peak and frequency both scale), the power-station generator (the painted
// station and a coded cutaway: a turning electromagnet inside fixed coils) and the memory card.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading, kf} from '../../math/studio';
import {INK} from '../../shared/tokens';
import {MemoryCard} from '../../shared/scenes';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {Plate} from '../../physics/electromagnetism/bench';
import {Arrow2} from '../../physics/electromagnetism/magnetic';
import {Lead, Slider} from '../../physics/electromagnetism/plates';
import {RingCloseUp, Scope, StatorRing, modelGeom} from '../../physics/electromagnetism/motor';
import type {MCam} from '../../physics/electromagnetism/motor';
import {GRID, HEAD, HEAD_SIZE, SPEEDS, cap, cue, slipOut, splitOut} from './common';
import {AMBER, COPPER_INK, CardRect, FLUX, GREY, Gen, Lbl, MiniTrace, NAVY, ORANGE, ROSE, Ring, STATION_V1, fx, scopeIns} from './parts';

// ---------- 6. split ring: DC out ----------
const G6: MCam = {cx: 930, cy: 430, k: 95};
const SC6 = {x: 1260, y: 320, w: 600};
export const S06: React.FC = () => {
	const id = 'split-ring';
	const f = useCurrentFrame();
	const motor = cue(id, 'the same part you met in the motor'), every = cue(id, 'Every half turn, the halves swap brushes'), gap = cue(id, 'And the gap passes the brushes'), rev = cue(id, 'about to reverse'), flip = cue(id, "So as the coil's emf flips"), sign = cue(id, 'the output never changes sign'), puls = cue(id, 'called pulsating DC'), inside = cue(id, 'Inside the coil, the current still alternates'), way = cap(id, cue(id, 'sees it flowing one way'));
	const alpha = 2 * f;
	const a = ((alpha % 360) + 360) % 360;
	const atGap = Math.min(Math.abs(a), Math.abs(a - 180), Math.abs(a - 360)) < 12;
	const g = modelGeom(G6, alpha, 'split');
	const ins = scopeIns(SC6);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<CardRect x={96} y={230} w={560} h={560} />
				<RingCloseUp cx={376} cy={500} r={150} alpha={alpha} currentColor={ORANGE.stroke} current={atGap ? 0 : 1} ringColors={['#c8742c', '#6e4126']} />
				{atGap && f >= gap ? <circle cx={376} cy={500} r={215} fill="none" stroke={ROSE.stroke} strokeWidth={5} strokeDasharray="10 8" /> : null}
				<Gen c={G6} alpha={alpha} ring="split" normal={1} drive={1} t={f} />
				<Lead pts={[g.br.L, [g.br.L[0], 860], [ins.a[0], 860], ins.a]} width={5} color="#c0392b" />
				<Lead pts={[g.br.R, [g.br.R[0], 890], [ins.b[0], 890], ins.b]} width={5} color={INK} />
				<Scope p={SC6} fn={splitOut} grow={prog(f, sign, 70)} ghost={f >= sign ? slipOut : undefined} span={2} />
			</FrameSvg>
			<Lbl x={376} y={830} at={motor} color={COPPER_INK} size={30} anchor="middle">split-ring commutator (as in the motor)</Lbl>
			<Lbl x={376} y={290} at={rev} color={ROSE.ink} size={34} anchor="middle">{atGap ? 'ε = 0 at the swap' : 'swap when ε = 0'}</Lbl>
			<HandTag x={700} y={200} text="halves swap brushes" at={every} out={flip} size={34} color={COPPER_INK} />
			<HandTag x={700} y={200} text="flip with the emf" at={flip + 6} out={inside} size={36} color={COPPER_INK} />
			<div style={{position: 'absolute', left: 700, top: 730, width: 1150}}>
				<Row at={puls - 10} size={44}><AnswerBox at={puls}><span style={{whiteSpace: 'nowrap'}}>pulsating DC: one direction, rising and falling</span></AnswerBox></Row>
			</div>
			<Lbl x={SC6.x + 20} y={SC6.y - 30} at={sign} color={ROSE.ink} size={28}>dashed: what the coil makes</Lbl>
			<CrossedChip x={700} y={180} at={inside} crossAt={inside + 40} size={30} caption="the coil's emf still alternates">the coil's current is one way</CrossedChip>
			<HandTag x={1260} y={900} text="outside: always one way" at={way} size={34} color={ORANGE.ink} />
		</>
	);
};

// ---------- 7. what the rings don't change ----------
const IC = {slip: {cx: 300, cy: 400, k: 70} as MCam, split: {cx: 650, cy: 400, k: 70} as MCam};
export const S07: React.FC = () => {
	const id = 'what-rings-dont-change';
	const f = useCurrentFrame();
	const three = cue(id, "Three things don't depend on the rings"), fluxR = cue(id, 'the flux through the coil reverses'), cur = cue(id, 'the current in the coil alternates'), torque = cue(id, 'Third, the torque'), lenz = cue(id, "By Lenz's law, that force opposes"), harder = cue(id, 'harder to turn when a load is connected'), energy = cue(id, 'the work becomes the electrical energy'), rings = cap(id, cue(id, 'The rings only decide'));
	const alpha = 2 * f;
	const thick = 1 + prog(f, harder, 14);
	const rows: [number, React.ReactNode, string][] = [
		[fluxR, 'flux through the coil: reverses every ½ turn', FLUX],
		[cur, 'current in the coil: alternates', ROSE.ink],
		[torque, 'torque from the load current: opposes the turning', AMBER.ink],
	];
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<Gen c={IC.slip} alpha={alpha} ring="slip" drive={1} t={f * thick} />
				<Gen c={IC.split} alpha={alpha} ring="split" drive={1} t={f * thick} />
				{f >= torque ? <g opacity={prog(f, torque, 12)}>
					{[IC.slip, IC.split].map((c, i) => <g key={i}>
						<Arrow2 from={[c.cx + 130, c.cy - 150]} to={[c.cx + 60, c.cy - 175]} color={AMBER.stroke} width={6 * thick} head={20} />
					</g>)}
				</g> : null}
				{f >= energy ? <g opacity={prog(f, energy, 12)}>
					{[IC.slip, IC.split].map((c, i) => <g key={i}>
						<rect x={c.cx - 120} y={640} width={90} height={110} fill={AMBER.stroke} rx={6} />
						<Arrow2 from={[c.cx - 20, 700]} to={[c.cx + 30, 700]} color={INK} width={4} head={14} />
						<rect x={c.cx + 40} y={640} width={90} height={110} fill={ORANGE.stroke} rx={6} />
					</g>)}
				</g> : null}
			</FrameSvg>
			<Lbl x={IC.slip.cx} y={210} at={0} color={GREY.ink} size={30} anchor="middle">slip rings</Lbl>
			<Lbl x={IC.split.cx} y={210} at={0} color={COPPER_INK} size={30} anchor="middle">split ring</Lbl>
			<HandTag x={260} y={600} text="fights the drive" at={lenz} out={energy} size={34} color={AMBER.ink} />
			<HandTag x={260} y={600} text="load connected: harder to turn" at={harder + 30} out={energy} size={32} color={AMBER.ink} />
			<Lbl x={IC.slip.cx - 75} y={800} at={energy} color={AMBER.ink} size={26} anchor="middle">work by drive</Lbl>
			<Lbl x={IC.slip.cx + 85} y={800} at={energy} color={ORANGE.ink} size={26} anchor="middle">electrical</Lbl>
			<Lbl x={IC.split.cx - 75} y={800} at={energy} color={AMBER.ink} size={26} anchor="middle">work by drive</Lbl>
			<Lbl x={IC.split.cx + 85} y={800} at={energy} color={ORANGE.ink} size={26} anchor="middle">electrical</Lbl>
			<Chip x={940} y={180} at={three} size={32} w={880}>same in both generators</Chip>
			{rows.map(([at, text, color], i) => <Chip key={i} x={940} y={270 + i * 110} at={at} size={32} w={880} color={color}>✓ ✓&nbsp; {text}</Chip>)}
			<div style={{position: 'absolute', left: 940, top: 640, width: 900}}>
				<Row at={rings} size={36} style={{whiteSpace: 'normal'}}><AnswerBox at={rings + 6}><span style={{color: ORANGE.ink}}>current in the outside circuit: AC (slip rings) or one way (split ring)</span></AnswerBox></Row>
			</div>
			<HandTag x={940} y={880} text="the only difference" at={rings + 16} size={36} color={NAVY.ink} />
		</>
	);
};

// ---------- 8. turn it faster ----------
const G8: MCam = {cx: 520, cy: 420, k: 120};
const SC8 = {x: 1080, y: 300, w: 760};
export const S08: React.FC = () => {
	const id = 'turn-faster';
	const f = useCurrentFrame();
	const what = cue(id, 'What if the coil turns faster'), bigger = cue(id, 'the peak emf gets bigger'), up = cue(id, 'the frequency goes up'), twice = cue(id, 'Turn it twice as fast'), freq = cap(id, cue(id, 'at twice the frequency'));
	const sp = kf(f, [[0, 1], [what + 10, 1], [what + 40, 1.5], [twice, 1.5], [twice + 30, 2]]);
	const step = SPEEDS.reduce((a, s) => (Math.abs(s.s - sp) < Math.abs(a.s - sp) ? s : a));
	const alpha = (() => { let a = 0; for (let g = 1; g <= f; g++) a += 3 * kf(g, [[0, 1], [what + 10, 1], [what + 40, 1.5], [twice, 1.5], [twice + 30, 2]]); return a; })();
	const g = modelGeom(G8, alpha, 'slip');
	const ins = scopeIns(SC8);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<Gen c={G8} alpha={alpha} ring="slip" drive={1} t={f * sp} />
				<Lead pts={[g.br.L, [g.br.L[0], 860], [ins.a[0], 860], ins.a]} width={5} color="#c0392b" />
				<Lead pts={[g.br.R, [g.br.R[0], 890], [ins.b[0], 890], ins.b]} width={5} color={INK} />
				<Slider x={200} y={720} w={560} value={(sp - 1)} color={NAVY.stroke} label="speed" ticks={[[0, '× 1'], [0.5, '× 1.5'], [1, '× 2']]} size={30} />
				<Scope p={SC8} fn={u => slipOut(u * sp)} amp={0.42 * sp} span={2} ghost={f >= what ? slipOut : undefined} ghostAmp={0.42} />
			</FrameSvg>
			<div style={{position: 'absolute', left: 1080, top: 740, width: 800, opacity: prog(f, what, 12)}}>
				<Row at={what} size={46}>speed × {fx(step.s, step.s % 1 ? 1 : 0)}</Row>
				<Row at={what + 6} size={44}><span style={{color: ROSE.ink}}>peak × {fx(step.peak, step.peak % 1 ? 1 : 0)}</span>, frequency × {fx(step.freq, step.freq % 1 ? 1 : 0)}</Row>
			</div>
			<HandTag x={1080} y={250} text="peaks rise" at={bigger} out={up} size={34} color={ROSE.ink} />
			<HandTag x={1080} y={250} text="cycles crowd closer" at={up + 6} out={freq} size={34} color={ROSE.ink} />
			<Chip x={1080} y={180} at={freq} size={34} w={760} color={INK} border={INK}>twice as fast: × 2 peak, × 2 frequency</Chip>
			<Chip x={96} y={840} at={freq + 10} size={28} w={860} color={GREY.ink} border={GREY.stroke}>more turns, stronger B, bigger A: peak only</Chip>
			<Lbl x={SC8.x + 420} y={SC8.y - 40} at={what + 10} color={INK} size={28}>dashed: × 1</Lbl>
		</>
	);
};

// ---------- 9. power-station generators ----------
export const S09: React.FC = () => {
	const id = 'power-station';
	const f = useCurrentFrame();
	const turb = cue(id, 'A turbine spins a large electromagnet'), rev = cue(id, 'keeps reversing'), brushes = cue(id, 'never passes through sliding brushes'), grid = cue(id, 'On a fifty hertz grid'), min = cap(id, cue(id, 'three thousand revolutions per minute'));
	const fd = 90 + 3 * Math.max(0, f - turb);
	const cx = 1330, cy = 520;
	const pulse = Math.floor((((fd % 360) + 360) % 360) / 60) % 6;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<Plate spec={STATION_V1} p={{x: 96, y: 380, w: 620}} />
				<g opacity={prog(f, turb, 16)}>
					<StatorRing cx={cx} cy={cy} r={220} n={6} fieldDeg={fd} fieldColor={FLUX} pulse={f >= rev ? pulse : -1} />
					<g transform={`rotate(${-fd} ${cx} ${cy})`}>
						<rect x={cx - 150} y={cy - 46} width={300} height={92} rx={18} fill="#e9e4da" stroke={INK} strokeWidth={4} />
						<text x={cx + 105} y={cy + 16} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 44, fill: INK}}>N</text>
						<text x={cx - 105} y={cy + 16} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 44, fill: INK}}>S</text>
					</g>
					<path d={`M${cx - 70},${cy + 300} A80,40 0 1 1 ${cx + 70},${cy + 300}`} fill="none" stroke={AMBER.stroke} strokeWidth={8} strokeDasharray="20 10" />
				</g>
				{f >= rev ? <MiniTrace x={1640} y={720} w={200} h={110} kind="sine" /> : null}
				<Ring cx={cx} cy={cy} rx={300} ry={300} at={brushes + 6} color={GREY.stroke} />
			</FrameSvg>
			<Lbl x={cx} y={cy + 380} at={turb + 10} color={AMBER.ink} size={30} anchor="middle">turbine turns the magnet</Lbl>
			<HandTag x={900} y={200} text="magnet turns, coils stay" at={turb + 20} size={36} color={FLUX} />
			<Lbl x={1640} y={700} at={rev} color={ROSE.ink} size={28}>AC in the coils</Lbl>
			<Chip x={96} y={190} at={brushes} size={30} w={760} color={GREY.ink} border={GREY.stroke}>output coils fixed: no heavy current through brushes</Chip>
			<div style={{position: 'absolute', left: 96, top: 800, display: 'flex', flexDirection: 'column', gap: 10, width: 900}}>
				<Row at={grid} size={36}>{GRID.hz} Hz → {GRID.perSecond} turns each second ({GRID.poles}-pole)</Row>
				<Row at={min - 20} size={44}><AnswerBox at={min}><span style={{whiteSpace: 'nowrap'}}>= {String(GRID.rpm)} revolutions per minute</span></AnswerBox></Row>
			</div>
		</>
	);
};

// ---------- 10. a way to remember ----------
export const S10: React.FC = () => {
	const id = 'memory-aid';
	const f = useCurrentFrame();
	const keep = cue(id, 'Slip rings keep it'), flips = cue(id, 'Split ring flips it'), way = cap(id, cue(id, 'so the output stays one way'));
	const alpha = 2 * f;
	const pl = f >= keep && f < keep + 40 ? 1 : 0, pr = f >= flips && f < flips + 40 ? 1 : 0;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<CardRect x={150} y={470} w={760} h={460} />
				<CardRect x={1010} y={470} w={760} h={460} />
				{pl ? <rect x={150} y={470} width={760} height={460} rx={16} fill="none" stroke={GREY.stroke} strokeWidth={7} /> : null}
				{pr ? <rect x={1010} y={470} width={760} height={460} rx={16} fill="none" stroke={COPPER_INK} strokeWidth={7} /> : null}
				<RingCloseUp cx={530} cy={620} r={100} alpha={alpha} slip currentColor={ORANGE.stroke} leads={false} />
				<RingCloseUp cx={1390} cy={620} r={100} alpha={alpha} currentColor={ORANGE.stroke} ringColors={['#c8742c', '#6e4126']} leads={false} />
				<MiniTrace x={250} y={770} w={560} h={130} kind="sine" />
				<MiniTrace x={1110} y={770} w={560} h={130} kind="humps" ghost />
			</FrameSvg>
			<div style={{position: 'absolute', left: 360, top: 176, width: 1200}}>
				<MemoryCard at={way} main={<><span style={{color: GREY.ink}}>Slip rings keep it.</span> <span style={{color: COPPER_INK}}>Split ring flips it.</span></>} />
			</div>
			<Lbl x={530} y={500} at={keep} color={GREY.ink} size={30} anchor="middle">slip rings: AC out</Lbl>
			<Lbl x={1390} y={500} at={flips} color={COPPER_INK} size={30} anchor="middle">split ring: one-way humps</Lbl>
		</>
	);
};
