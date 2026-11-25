// Scenes 7 to 12: what the null result does and does not prove (a small schematic whose arm shrinks "just enough" and
// the evidence ledger), Einstein's two postulates (the postulate card above the ship and Earth frames), why light speed
// has to be the same (the three-step chain and the closed cabin whose "c − v?" readout fails), a direct test with moving
// sources (the beam pipe with timing gates and a pion-speed slider), the price (each frame's c = distance / time) and
// the memory aid.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Mark, prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading, kf} from '../../math/studio';
import {AnswerBox, Chip, CrossedChip} from '../../physics/projectile/board';
import {MemoryCard} from '../../shared/scenes';
import {CARD} from '../../shared/tokens';
import {Disc, EARTH} from '../../physics/light/plates';
import type {Place} from '../../physics/light/plates';
import {Packet} from '../../physics/light/photo';
import {FrameBadge, FringeStrip, Interferometer, Ship, shipGeom} from '../../physics/light/frames';
import {Slider} from '../phys-y12-m7-v04/parts';
import {DT_MEAS, HEAD, HEAD_SIZE, PION_B, cap, cue, dtGal} from './common';
import {AMBER, CabinBox, GREEN, GREY, INK, Lbl, Ledger, ORANGE, SLATE, TEAL, VArrow, fx} from './parts';

// ---------- 7. what the null result does and doesn't prove ----------
export const S07: React.FC = () => {
	const id = 'null-result-limits';
	const f = useCurrentFrame();
	const strong = cue(id, 'strong evidence against a still aether'), cant = cue(id, "can't prove the aether doesn't exist"), arm = cue(id, 'the arm along the motion shrinking by just the right amount'), added = cue(id, 'added just to explain this one result'), test = cap(id, cue(id, 'separate test'));
	const shrink = kf(f, [[arm, 0], [arm + 40, 0.14]]);
	const c: [number, number] = [470, 560], L = 260;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<Interferometer c={c} L={L} out={1} back={1} shrink={shrink} beam={AMBER.stroke} />
				<FringeStrip x={980} y={780} w={840} h={80} fringes={7} />
				<line x1={980 + (3 / 7) * 840} y1={766} x2={980 + (3 / 7) * 840} y2={874} stroke={INK} strokeWidth={4} />
			</FrameSvg>
			<Lbl x={980} y={920} at={0} color={GREY.ink} size={28}>fringes: expected shift 0.4, observed ≈ 0</Lbl>
			<Lbl x={140} y={250} at={0} color={INK} size={30}>Michelson-Morley: no shift at any angle</Lbl>
			<Ledger x={980} y={220} w={840} title="Michelson-Morley null result" rows={[
				{at: strong, text: 'against a stationary aether: clear prediction, sensitive test, no shift', mark: 'tick'},
				{at: cant, text: 'does not prove: no aether at all', mark: 'caution', color: GREY.ink},
				{at: arm + 10, text: 'rescue (Lorentz, FitzGerald): arm shrinks just enough', color: GREY.ink},
			]} />
			<Lbl x={c[0] + L * 0.4} y={c[1] + 70} at={arm + 20} color={GREY.ink} size={26}>shrink exaggerated</Lbl>
			<HandTag x={c[0] - 40} y={c[1] + 150} text="made to fit" at={added + 6} size={34} color={GREY.ink} marks={[{kind: 'underline', x1: c[0] + 10, x2: c[0] + L * (1 - 0.14), y: c[1] + 24}]} />
			<Chip x={980} y={640} at={test} size={30} color={GREY.ink} border={GREY.stroke}>no independent evidence for an aether</Chip>
		</>
	);
};

// ---------- 8. Einstein's two postulates ----------
const ShipEarth: React.FC<{f: number; ship: Place; earth: {cx: number; cy: number; d: number}; o?: number; rates?: [number, number]}> = ({f, ship, earth, o = 1, rates = [1, 1]}) => (
	<g opacity={o}>
		<Ship p={ship} />
		<Disc spec={EARTH} cx={earth.cx} cy={earth.cy} d={earth.d} />
		<FrameBadge x={ship.x + 20} y={ship.y - 40} color={TEAL.stroke} label="ship frame" t={(f / 30) * rates[0]} scale={0.8} size={34} />
		<FrameBadge x={earth.cx + earth.d / 2 + 20} y={earth.cy} color={INK} label="Earth frame" t={(f / 30) * rates[1]} scale={0.8} size={34} />
	</g>
);
const Card: React.FC<{f: number; y: number; rows: readonly {at: number; text: string; sub: string; flash?: number}[]}> = ({f, y, rows}) => (
	<div style={{position: 'absolute', left: 96, top: y, width: 1728, background: CARD, border: `4px solid ${INK}`, borderRadius: 20, padding: '18px 30px 22px'}}>
		{rows.map((r, i) => {
			const o = prog(f, r.at, 14);
			const fl = r.flash !== undefined && f >= r.flash && f < r.flash + 40 ? Math.sin((Math.PI * (f - r.flash)) / 40) : 0;
			return <div key={i} style={{opacity: o, marginTop: i ? 16 : 0, padding: '4px 10px', borderRadius: 10, background: fl > 0 ? `rgba(138,131,120,${0.3 * fl})` : 'transparent'}}>
				<div style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 40, color: INK, lineHeight: 1.2}}>{r.text}</div>
				<div style={{fontFamily: 'Inter Tight', fontWeight: 700, fontSize: 28, color: GREY.ink}}>{r.sub}</div>
			</div>;
		})}
	</div>
);
const SH8: Place = {x: 980, y: 720, w: 560}, EA8 = {cx: 360, cy: 820, d: 150};
export const S08: React.FC = () => {
	const id = 'postulates';
	const f = useCurrentFrame();
	const two = cue(id, 'two postulates, starting assumptions'), p1 = cue(id, 'the laws of physics are the same in all inertial frames'), obs = cap(id, cue(id, 'observer'));
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<Lbl x={96} y={190} at={0} color={INK} size={32}>Einstein, 1905</Lbl>
			<div style={{opacity: prog(f, two, 14)}}>
				<Card f={f} y={240} rows={[
					{at: p1, text: '1. The laws of physics are the same in all inertial frames.', sub: '(syllabus: all inertial frames of reference are equivalent)'},
					{at: obs - 4, text: '2. The speed of light in a vacuum, c, is the same for all inertial observers, whatever the motion of the source or observer.', sub: '(syllabus: an absolute constant)'},
				]} />
			</div>
			<HandTag x={0} y={0} at={obs + 14} color={AMBER.stroke} marks={[{kind: 'underline', x1: 760, x2: 1400, y: 470}]} />
			<FrameSvg><ShipEarth f={f} ship={SH8} earth={EA8} o={prog(f, 4, 14)} /></FrameSvg>
		</>
	);
};

// ---------- 9. why light speed has to be the same ----------
const BOX = [{x: 96, w: 540}, {x: 690, w: 540}, {x: 1284, w: 540}];
export const S09: React.FC = () => {
	const id = 'why-same-c';
	const f = useCurrentFrame();
	const mx = cue(id, "Maxwell's equations are laws of physics"), same = cue(id, 'every inertial frame has the same laws'), calc = cue(id, 'calculates the same speed for light'), cab = cue(id, 'measure light inside a closed cabin'), fail = cue(id, 'fail'), pr = cap(id, cue(id, 'predict'));
	const by = 190, bh = 170;
	const pulse = 240 + 560 * (((f - cab) / 50) % 1);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			{[[mx, "Maxwell's equations = laws of physics → c = 1/√(μ₀ε₀)", INK], [same, 'postulate 1: same laws in every inertial frame', INK], [calc, 'same c for every inertial observer', AMBER.ink]].map(([a, t, c], i) => {
				const fl = i === 1 && f >= fail && f < fail + 40 ? Math.sin((Math.PI * (f - fail)) / 40) : 0;
				return <div key={i} style={{position: 'absolute', left: BOX[i].x, top: by, width: BOX[i].w, height: bh, boxSizing: 'border-box', opacity: prog(f, a as number, 14), background: fl > 0 ? `rgba(138,131,120,${0.35 * fl})` : CARD, border: `4px solid ${INK}`, borderRadius: 18, padding: '16px 20px', fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 36, color: c as string, lineHeight: 1.2}}>{t as string}</div>;
			})}
			<FrameSvg>
				<VArrow a={[BOX[0].x + BOX[0].w + 4, by + bh / 2]} b={[BOX[1].x - 6, by + bh / 2]} color={INK} width={5} opacity={prog(f, same, 12)} />
				<VArrow a={[BOX[1].x + BOX[1].w + 4, by + bh / 2]} b={[BOX[2].x - 6, by + bh / 2]} color={INK} width={5} opacity={prog(f, calc, 12)} />
				<g opacity={prog(f, same, 14)}>
					<FrameBadge x={760} y={760} color={TEAL.stroke} label="ship frame" t={f / 30} scale={0.85} size={32} />
					<FrameBadge x={760} y={860} color={INK} label="Earth frame" t={f / 30} scale={0.85} size={32} />
					<VArrow a={[900, 720]} b={[930, by + bh + 14]} color={TEAL.stroke} width={4} />
					<VArrow a={[1060, 830]} b={[1000, by + bh + 14]} color={INK} width={4} />
				</g>
				<CabinBox x={150} y={470} w={560} h={200} opacity={prog(f, cab, 14)}>
					{f >= cab ? <Packet x={Math.min(680, pulse)} y={570} len={60} color={AMBER.stroke} /> : null}
				</CabinBox>
			</FrameSvg>
			<Lbl x={150} y={450} at={cab} color={INK} size={28}>closed cabin</Lbl>
			<Lbl x={180} y={730} at={cab + 20} color={INK} size={44}>c − v?</Lbl>
			<HandTag x={0} y={0} at={fail} color={SLATE.stroke} marks={[{kind: 'cross', cx: 245, cy: 716, size: 70}]} />
			<HandTag x={330} y={740} text="would reveal your speed" at={fail + 10} size={32} color={SLATE.ink} />
			<Chip x={1284} y={420} at={pr} size={34} color={INK} border={INK}>null result</Chip>
			<HandTag x={1284} y={540} text="consistent" at={pr + 10} size={36} color={GREEN.ink} />
			<FrameSvg>{f >= pr + 16 ? <Mark x={1500} y={540} at={pr + 16} kind="tick" color={GREEN.stroke} size={40} /> : null}</FrameSvg>
		</>
	);
};

// ---------- 10. a direct test with moving sources ----------
const PIPE = {x: 160, y: 380, w: 1600, h: 80};
const GATES = [600, 1320];
export const S10: React.FC = () => {
	const id = 'moving-source-test';
	const f = useCurrentFrame();
	const pions = cue(id, 'particles called pions'), gam = cue(id, 'gave off gamma rays straight ahead'), two = cue(id, 'almost two c'), th = cap(id, cue(id, 'thousand'));
	const st = (i: number) => pions + 20 + i * 24;
	const b = kf(f, [[st(0), PION_B[0]], [st(1), PION_B[1]], [st(2), PION_B[2]], [st(3), PION_B[3]]]);
	const tt = f / 30;
	const gal = 1 + b;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<rect x={PIPE.x} y={PIPE.y} width={PIPE.w} height={PIPE.h} rx={40} fill="#f3efe7" stroke={INK} strokeWidth={4} />
				{GATES.map((g, i) => <g key={i}><line x1={g} y1={PIPE.y - 50} x2={g} y2={PIPE.y + PIPE.h + 50} stroke={INK} strokeWidth={8} /></g>)}
				{Array.from({length: 6}, (_, i) => { const x = PIPE.x + 60 + ((tt * 260 + i * 22) % 360); return <circle key={i} cx={x} cy={PIPE.y + PIPE.h / 2 + ((i % 3) - 1) * 14} r={8} fill={GREY.stroke} />; })}
				{f >= gam ? Array.from({length: 5}, (_, i) => { const x = PIPE.x + 420 + ((tt * 420 + i * 230) % 1150); return <line key={i} x1={x} y1={PIPE.y + PIPE.h / 2} x2={x + 50} y2={PIPE.y + PIPE.h / 2} stroke={AMBER.stroke} strokeWidth={6} strokeLinecap="round" opacity={prog(f, gam, 10)} />; }) : null}
				<Slider x={300} y={590} w={700} v0={0} v1={1} v={b} label="pion speed v (as a fraction of c)" color={GREY.stroke} />
			</FrameSvg>
			<Lbl x={PIPE.x} y={PIPE.y - 60} at={0} color={INK} size={30}>CERN, 1964</Lbl>
			<Lbl x={(GATES[0] + GATES[1]) / 2} y={PIPE.y - 60} at={0} color={INK} size={28} anchor="middle">gates 30 m apart (illustrative)</Lbl>
			<Lbl x={PIPE.x + 40} y={PIPE.y + PIPE.h + 50} at={0} color={GREY.ink} size={28}>π⁰ particles</Lbl>
			<Lbl x={1060} y={600} at={pions + 20} color={GREY.ink} size={44}>{`v = ${b > 0.999 ? '0.99975' : fx(b, 2)}c`}</Lbl>
			<Lbl x={300} y={720} at={pions + 20} color={GREY.ink} size={40}>{`Galilean: c + v = ${fx(gal, 2)}c, Δt = ${fx(dtGal(b), 1)} ns`}</Lbl>
			<Lbl x={300} y={800} at={pions + 20} color={AMBER.ink} size={40}>{`measured: c, Δt = ${fx(DT_MEAS, 0)} ns`}</Lbl>
			<HandTag x={0} y={0} at={th + 8} color={AMBER.stroke} marks={[{kind: 'circle', cx: 560, cy: 790, rx: 290, ry: 44}]} />
			<CrossedChip x={1180} y={180} at={two} crossAt={two + 16} size={32}>0.999c + c ≈ 2c?</CrossedChip>
			<Chip x={300} y={860} at={th} size={32} color={INK} border={INK}><AnswerBox at={th}>measured speed = c (within about 1 part in 10⁴)</AnswerBox></Chip>
			<Lbl x={1360} y={300} at={gam} color={AMBER.ink} size={30}>gamma rays</Lbl>
			<Chip x={1260} y={660} at={th + 10} size={28} color={GREEN.ink} border={GREEN.stroke}>postulate 2: moving-source test ✓</Chip>
		</>
	);
};

// ---------- 11. the price ----------
const SH11: Place = {x: 960, y: 330, w: 760}, EA11 = {cx: 300, cy: 560, d: 240};
export const S11: React.FC = () => {
	const id = 'the-price';
	const f = useCurrentFrame();
	const dt = cue(id, 'Speed is distance over time'), same = cue(id, 'the same speed for the same pulse of light'), dis = cue(id, 'disagree about distances or times'), str = cap(id, cue(id, 'strange'));
	const sg = shipGeom(SH11);
	const glow = prog(f, dis, 14);
	const rates: [number, number] = f >= str ? [0.6, 1] : [1, 1];
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<ShipEarth f={f} ship={SH11} earth={EA11} rates={rates} />
				<Packet x={560 + ((f * 4) % 340)} y={500} len={70} color={AMBER.stroke} />
			</FrameSvg>
			{[[EA11.cx - 120, 800, INK], [SH11.x + 60, 680, TEAL.ink]].map(([x, y, c], i) => (
				<div key={i} style={{position: 'absolute', left: x as number, top: y as number, opacity: prog(f, dt, 14), fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 44, color: c as string}}>
					<span style={{background: f >= same && f < same + 50 ? 'rgba(209,143,31,0.3)' : 'transparent', borderRadius: 8, padding: '0 6px'}}>c</span> = <span style={{background: `rgba(209,143,31,${0.35 * glow})`, borderRadius: 8, padding: '0 6px'}}>distance</span> / <span style={{background: `rgba(209,143,31,${0.35 * glow})`, borderRadius: 8, padding: '0 6px'}}>time</span>
				</div>
			))}
			<HandTag x={EA11.cx + 190} y={900} text="?" at={dis + 6} size={44} color={INK} marks={[{kind: 'circle', cx: EA11.cx + 190, cy: 830, rx: 160, ry: 40}]} />
			<HandTag x={SH11.x + 430} y={780} text="?" at={dis + 12} size={44} color={TEAL.ink} marks={[{kind: 'circle', cx: SH11.x + 430, cy: 710, rx: 160, ry: 40}]} />
			<HandTag x={SH11.x + 20} y={240} text="next: time" at={str + 6} size={36} color={TEAL.ink} />
			<Lbl x={sg.nose[0] - 200} y={sg.nose[1] + 140} at={0} color={ORANGE.ink} size={30}>moving relative to Earth</Lbl>
		</>
	);
};

// ---------- 12. a way to remember ----------
export const S12: React.FC = () => {
	const id = 'memory-aid';
	const f = useCurrentFrame();
	const laws = cue(id, 'Same laws'), light = cue(id, 'light'), all = cap(id, cue(id, 'they all get the same speed of light'));
	const SH: Place = {x: 1160, y: 640, w: 640}, EA = {cx: 900, cy: 760, d: 200};
	const p1 = f >= laws && f < laws + 30 ? 1.06 : 1, p2 = f >= light && f < light + 30 ? 1.06 : 1;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<div style={{position: 'absolute', left: 500, top: 170, width: 920}}>
				<MemoryCard at={laws - 10} main={<><span style={{color: TEAL.ink}}>Same laws,</span> <span style={{color: AMBER.ink}}>same light.</span></>} sub="Every inertial frame has the same laws, so all get the same speed of light." />
			</div>
			<div style={{position: 'absolute', left: 96, top: 470, width: 640, background: CARD, border: `3px solid ${INK}`, borderRadius: 16, padding: '12px 20px', fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 30, color: INK, lineHeight: 1.25}}>
				<div style={{transform: `scale(${p1})`, transformOrigin: 'left center'}}>1. Same laws in every inertial frame.</div>
				<div style={{marginTop: 10, transform: `scale(${p2})`, transformOrigin: 'left center'}}>2. Same c for every inertial observer.</div>
			</div>
			<FrameSvg>
				<ShipEarth f={f} ship={SH} earth={EA} />
				<VArrow a={[SH.x + 120, SH.y - 70]} b={[1150, 470]} color={TEAL.stroke} width={4} opacity={prog(f, all, 12)} />
				<VArrow a={[EA.cx + 160, EA.cy - 40]} b={[1060, 490]} color={INK} width={4} opacity={prog(f, all, 12)} />
			</FrameSvg>
			<Lbl x={1100} y={460} at={all} color={AMBER.ink} size={60} anchor="middle">c</Lbl>
		</>
	);
};
