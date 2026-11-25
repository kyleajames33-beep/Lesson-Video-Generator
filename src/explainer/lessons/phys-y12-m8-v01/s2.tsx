// Scenes 7 to 12: why so few neutrons (two mass bars, n ⇄ p conversions, a decaying neutron and the live n : p tally),
// the wait for nuclei (a particle-box run of protons and neutrons whose deuterium breaks up until it is cool enough,
// beside a nucleus builder), a quarter helium (sixteen discs regrouping, a mass pie), nuclei but not atoms and the
// clearing fog (particle-box runs of nuclei and free electrons; a zig-zag photon path that straightens), and the cosmic
// timeline with the live cooling dial and the memory aid.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading, kf} from '../../math/studio';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {LPlate} from '../../physics/light/plates';
import {Packet} from '../../physics/light/photo';
import {Nucleus, Particle} from '../../physics/light/massenergy';
import {runBox} from '../../sims/particle-box';
import {lazy} from '../../sims';
import {BoxParticles, GALAXY, LogTimeline, MassPie, Readout, ZigZag, logPos} from '../../physics/atom/universe';
import {B, BIND_RATIO, B_D, B_H, DM_N_PCT, HEAD, HEAD_SIZE, HE_BY_NUMBER, HE_FRAC, N_HALF_MIN, YEAR, cap, cue, dialT, dur, ePeakMeV} from './common';
import {AMBER, GLOW, GREY, INK, Lbl, NAVY, NEUTRON, RED, ROSE, SLATE, eFmt, fx, sci, tFmt} from './parts';
import {Thermo, ThermoTick} from './s1';

// ---------- 7. why so few neutrons ----------
export const S07: React.FC = () => {
	const id = 'neutron-scarcity';
	const f = useCurrentFrame();
	const sm = cue(id, 'slightly more mass'), cv = cue(id, 'conversions between the two favoured protons'), mi = cue(id, 'minutes'), pr = cap(id, cue(id, 'seven protons'));
	const dec = prog(f, mi, 40);
	const nN = dec > 0.5 ? 7 : 8, nP = 56 - nN;
	const thick = 5 + 9 * prog(f, cv + 10, 30);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<g opacity={prog(f, sm, 14)}>
					<rect x={160} y={400} width={120} height={400} rx={8} fill={ROSE.soft} stroke={ROSE.stroke} strokeWidth={4} />
					<rect x={330} y={388} width={120} height={412} rx={8} fill="#e7e3dc" stroke={NEUTRON} strokeWidth={4} />
					<line x1={150} y1={400} x2={470} y2={400} stroke={GREY.stroke} strokeWidth={2.5} strokeDasharray="8 6" />
				</g>
				<g opacity={prog(f, cv, 14)}>
					<Particle x={640} y={400} r={34} color={NEUTRON} text="n" />
					<Particle x={960} y={400} r={34} color={ROSE.stroke} text="p" />
					<line x1={690} y1={384} x2={900} y2={384} stroke={INK} strokeWidth={thick} /><path d={`M912,384 l-24,-14 v28 z`} fill={INK} />
					<line x1={910} y1={424} x2={700} y2={424} stroke={INK} strokeWidth={4} /><path d={`M688,424 l20,-11 v22 z`} fill={INK} />
				</g>
				{f >= mi ? <g>
					<circle cx={800} cy={640} r={40} fill={dec < 0.5 ? NEUTRON : ROSE.stroke} stroke="#fff" strokeWidth={3} />
					<text x={800} y={652} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 32, fill: '#fff'}}>{dec < 0.5 ? 'n' : 'p'}</text>
					{dec > 0.5 ? <Particle x={800 + 260 * (dec - 0.5) * 2} y={640 - 80 * (dec - 0.5) * 2} r={14} color={NAVY.stroke} /> : null}
				</g> : null}
			</FrameSvg>
			<Lbl x={220} y={840} at={sm} color={ROSE.ink} size={30} anchor="middle">p</Lbl>
			<Lbl x={390} y={840} at={sm} color={GREY.ink} size={30} anchor="middle">n</Lbl>
			<Lbl x={150} y={890} at={sm + 6} color={GREY.ink} size={28}>{`neutron: about ${fx(DM_N_PCT, 2)}% more mass (gap drawn larger)`}</Lbl>
			<HandTag x={160} y={340} text="heavier, so fewer" at={sm + 20} size={34} color={GREY.ink} />
			<Lbl x={800} y={330} at={cv} color={INK} size={32} anchor="middle">n ⇄ p</Lbl>
			<Lbl x={620} y={740} at={mi} color={GREY.ink} size={28}>free neutron → proton + electron (+ antineutrino)</Lbl>
			<Lbl x={620} y={782} at={mi + 6} color={GREY.ink} size={28}>{`half-life ≈ ${fx(N_HALF_MIN)} min`}</Lbl>
			<HandTag x={0} y={0} at={mi + 4} color={GREY.stroke} marks={[{kind: 'circle', cx: 800, cy: 640, rx: 60, ry: 58}]} />
			<HandTag x={880} y={560} text="decay tips it further" at={mi + 40} size={34} color={NAVY.ink} />
			<Readout x={1260} y={190} label="photons" value="> 10⁹ per p or n" color={AMBER.ink} w={420} size={40} />
			<Readout x={1260} y={320} label="protons (model)" value={`${nP}`} color={ROSE.ink} w={420} size={44} />
			<Readout x={1260} y={450} label="neutrons (model)" value={`${nN}`} color={GREY.ink} w={420} size={44} />
			<Readout x={1260} y={580} label="electrons (model)" value={`${nP}`} color={NAVY.ink} w={420} size={44} />
			<div style={{position: 'absolute', left: 1260, top: 740}}><Row at={0} size={52}>{f >= pr ? <AnswerBox at={pr}>{`n : p ≈ 1 : ${fx(nP / nN)}`}</AnswerBox> : <span>{`n : p ≈ 1 : ${fx(nP / nN)}`}</span>}</Row></div>
		</>
	);
};

// ---------- 8. the wait for nuclei ----------
const DB = {x: 96, y: 260, w: 820, h: 540};
const RUN8 = lazy(() => {
	const id = 'deuterium-wait';
	const st = cue(id, 'one proton stuck to one neutron'), sv = cue(id, 'survive'), he = cap(id, cue(id, 'helium'));
	return runBox({seed: 37, frames: dur(id), w: DB.w, h: DB.h, speed: 4.5,
		temperature: [[0, 1], [sv, 1], [sv + 45, 0.3]],
		species: [{id: 'p', r: 18}, {id: 'n', r: 18}, {id: 'd', r: 26, mass: 2}, {id: 'he', r: 34, mass: 4}],
		initial: [{species: 'p', count: 21}, {species: 'n', count: 3}],
		reactions: [{from: ['p', 'n'], to: ['d'], ea: 0, activeFrom: st}, {from: ['d'], to: ['p', 'n'], ea: 3, rate: 60, activeFrom: st}, {from: ['d', 'd'], to: ['he'], ea: 0, activeFrom: he}],
	});
});
export const S08: React.FC = () => {
	const id = 'deuterium-wait';
	const f = useCurrentFrame();
	const st = cue(id, 'one proton stuck to one neutron'), pn = cue(id, 'proton or neutron'), sm = cue(id, 'smashed each deuterium nucleus'), sv = cue(id, 'survive'), he = cap(id, cue(id, 'helium'));
	const t = f / 30;
	const snap = prog(f, st, 16), split = prog(f, sm + 24, 14) * (1 - prog(f, sv, 10));
	const hold2 = prog(f, sv + 10, 16), fuse = prog(f, he, 30);
	const pkt = kf(f, [[sm, 0], [sm + 24, 1]], false);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<rect x={DB.x} y={DB.y} width={DB.w} height={DB.h} rx={14} fill="none" stroke="rgba(60,45,20,0.3)" strokeWidth={3} />
				{Array.from({length: 10}, (_, i) => <Packet key={i} x={DB.x + 40 + ((i * 131 + t * 46) % (DB.w - 80))} y={DB.y + 40 + ((i * 89) % (DB.h - 80))} deg={(i * 61) % 360} len={34} color={AMBER.stroke} opacity={0.7 * prog(f, pn, 14)} />)}
				<BoxParticles run={RUN8()} f={f} x={DB.x} y={DB.y} draw={{
					p: (x, y, k) => <Particle key={k} x={x} y={y} r={18} color={ROSE.stroke} text="p" size={18} />,
					n: (x, y, k) => <Particle key={k} x={x} y={y} r={18} color={NEUTRON} text="n" size={18} />,
					d: (x, y, k) => <g key={k}><Particle x={x - 13} y={y} r={18} color={ROSE.stroke} /><Particle x={x + 13} y={y} r={18} color={NEUTRON} /></g>,
					he: (x, y, k) => <Nucleus key={k} cx={x} cy={y} p={2} n={2} r={15} proton={ROSE.stroke} neutron={NEUTRON} />,
				}} />
				<g opacity={prog(f, st, 12)}>
					{!(f >= sv) ? <g>
						<Particle x={1080 + 75 * snap - 60 * split} y={420 - 40 * split} r={34} color={ROSE.stroke} text="p" />
						<Particle x={1300 - 75 * snap + 60 * split} y={420 + 40 * split} r={34} color={NEUTRON} text="n" />
						{f >= sm && f < sm + 40 ? <Packet x={1360 - 160 * pkt} y={300 + 100 * pkt} deg={145} len={60} color={AMBER.stroke} label="γ" size={28} /> : null}
					</g> : null}
					{f >= sv ? <g opacity={1 - fuse}>
						<Particle x={1110 + 40 * fuse} y={420} r={34} color={ROSE.stroke} text="p" opacity={hold2} /><Particle x={1170 + 40 * fuse} y={420} r={34} color={NEUTRON} text="n" opacity={hold2} />
						<Particle x={1110 + 40 * fuse} y={600} r={34} color={ROSE.stroke} text="p" opacity={prog(f, he - 20, 12)} /><Particle x={1170 + 40 * fuse} y={600} r={34} color={NEUTRON} text="n" opacity={prog(f, he - 20, 12)} />
					</g> : null}
					{fuse > 0.001 ? <g opacity={fuse}>
						<path d="M1230,510 H1330" stroke={INK} strokeWidth={5} /><path d="M1346,510 l-20,-11 v22 z" fill={INK} />
						<Nucleus cx={1430} cy={510} p={2} n={2} r={26} proton={ROSE.stroke} neutron={NEUTRON} />
					</g> : null}
				</g>
				<Thermo level={0.75 - 0.4 * prog(f, sv, 40)} />
				<ThermoTick u={0.36} text="~10⁹ K" o={prog(f, sv, 12)} />
			</FrameSvg>
			<Lbl x={1190} y={340} at={st + 10} out={sv} color={INK} size={32} anchor="middle">²H (deuterium)</Lbl>
			<Lbl x={DB.x} y={DB.y - 24} at={pn} color={AMBER.ink} size={30}>{'> 10⁹ photons per p or n (model box: a few drawn)'}</Lbl>
			<HandTag x={1010} y={600} text={`binding: ${fx(B_D, 1)} MeV`} at={sm + 30} out={sv} size={34} color={SLATE.ink} marks={[{kind: 'cross', cx: 1190, cy: 420, size: 70}]} />
			<HandTag x={1100} y={250} text="the rare energetic tail" at={sm + 6} out={sv} size={32} color={AMBER.ink} />
			<HandTag x={0} y={0} at={sv + 6} color={RED.stroke} marks={[{kind: 'circle', cx: 1702, cy: 664, rx: 56, ry: 30}]} />
			<Lbl x={1640} y={860} at={sv + 6} color={GREY.ink} size={30} anchor="end">~3 min</Lbl>
			<Lbl x={1430} y={600} at={he + 20} color={INK} size={34} anchor="middle">⁴He</Lbl>
			<Lbl x={DB.x} y={DB.y + DB.h + 44} at={he + 10} color={INK} size={32}>nucleosynthesis: making nuclei</Lbl>
		</>
	);
};

// ---------- 9. a quarter helium ----------
const ROWX = (i: number) => 140 + i * 88;
const HE_C = {x: 260, y: 640};
export const S09: React.FC = () => {
	const id = 'helium-count';
	const f = useCurrentFrame();
	const tn = cue(id, 'two neutrons and fourteen protons'), nu = cue(id, 'nuclei'), fs = cue(id, 'four of the sixteen units of mass'), tf = cue(id, 'twenty-five per cent helium by mass'), tr = cue(id, 'tiny traces'), li = cap(id, cue(id, 'locked in'));
	const g = prog(f, nu, 36);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				{Array.from({length: 16}, (_, i) => {
					const isHe = i < 4, a = i * 1.57 + 0.4;
					const x0 = ROWX(i), y0 = 320;
					const x1 = isHe ? HE_C.x + 30 * Math.cos(a) : ROWX(i) + 20, y1 = isHe ? HE_C.y + 30 * Math.sin(a) : 320;
					return <Particle key={i} x={x0 + (x1 - x0) * g} y={y0 + (y1 - y0) * g} r={isHe ? 34 - 6 * g : 34} color={i < 2 ? NEUTRON : ROSE.stroke} text={g > 0.9 ? undefined : i < 2 ? 'n' : 'p'} />;
				})}
				<rect x={HE_C.x - 110} y={HE_C.y - 110} width={220} height={220} rx={16} fill="none" stroke={GREY.stroke} strokeWidth={3} strokeDasharray="12 8" />
				<MassPie cx={1380} cy={640} r={160} share={HE_FRAC} a="#8a6f78" b={ROSE.stroke} fill={prog(f, fs, 30)} />
			</FrameSvg>
			<HandTag x={0} y={0} at={tn} color={GREY.stroke} marks={[{kind: 'circle', cx: (ROWX(0) + ROWX(1)) / 2, cy: 320, rx: 110, ry: 56}]} />
			<HandTag x={0} y={0} at={tn + 10} color={ROSE.stroke} marks={[{kind: 'circle', cx: (ROWX(2) + ROWX(15)) / 2, cy: 320, rx: 640, ry: 62}]} />
			<Lbl x={140} y={420} at={tn + 6} color={INK} size={40}>n : p = 1 : 7 → 2 : 14</Lbl>
			<Lbl x={140} y={240} at={0} color={INK} size={32}>16 particles from the first minutes</Lbl>
			<Lbl x={HE_C.x} y={HE_C.y - 130} at={0} color={GREY.ink} size={28} anchor="middle">helium-4 nucleus</Lbl>
			<Lbl x={1380} y={860} at={0} out={tf - 6} color={GREY.ink} size={28} anchor="middle">share of the mass</Lbl>
			<Lbl x={HE_C.x} y={HE_C.y + 100} at={nu + 30} color={INK} size={34} anchor="middle">one ⁴He</Lbl>
			{Array.from({length: 12}, (_, k) => <Lbl key={k} x={ROWX(k + 4) + 20} y={400} at={nu + 30 + k} color={ROSE.ink} size={28} anchor="middle">¹H</Lbl>)}
			<Lbl x={1380} y={440} at={fs} out={tf} color={INK} size={32} anchor="middle">⁴He: 4/16 | ¹H: 12/16</Lbl>
			<div style={{position: 'absolute', left: 1140, top: 840}}><Row at={tf - 6} size={44}><AnswerBox at={tf}>{`${fx(HE_FRAC * 100)}% helium, ${fx((1 - HE_FRAC) * 100)}% hydrogen`}</AnswerBox></Row></div>
			<HandTag x={1170} y={440} text="by mass, not by number" at={tf + 14} size={34} color={INK} />
			<CrossedChip x={520} y={520} at={tf + 30} crossAt={tf + 48} out={li} size={28} caption="that counts nuclei, not mass">{`helium = 1 nucleus in 13, so ${fx(HE_BY_NUMBER * 100)}%?`}</CrossedChip>
			<Chip x={520} y={680} at={tr} size={30} color={INK}>²H, ³He, ⁷Li (traces)</Chip>
			<Lbl x={520} y={790} at={li} color={GREY.ink} size={30}>~20 min: fusion ends (too cool, too thin)</Lbl>
			<Lbl x={520} y={834} at={li + 8} color={GREY.ink} size={28}>next time: does the Universe show this number?</Lbl>
		</>
	);
};

// ---------- 10. nuclei, not atoms (and 11, the fog clears) ----------
const PB = {x: 96, y: 250, w: 960, h: 560};
const ZZ: readonly (readonly [number, number])[] = [[120, 700], [260, 380], [380, 640], [520, 330], [640, 720], [780, 420], [900, 640], [1030, 360]];
const plasmaDraw = {
	H: (x: number, y: number, k: number) => <Particle key={k} x={x} y={y} r={20} color={ROSE.stroke} text="H" size={20} />,
	He: (x: number, y: number, k: number) => <Nucleus key={k} cx={x} cy={y} p={2} n={2} r={11} proton={ROSE.stroke} neutron={NEUTRON} />,
	e: (x: number, y: number, k: number) => <Particle key={k} x={x} y={y} r={9} color={NAVY.stroke} />,
	A: (x: number, y: number, k: number) => <g key={k}><circle cx={x} cy={y} r={30} fill="none" stroke={NAVY.stroke} strokeWidth={2.5} /><Particle x={x} y={y} r={20} color={ROSE.stroke} text="H" size={20} /><circle cx={x + 30} cy={y} r={8} fill={NAVY.stroke} /></g>,
	B: (x: number, y: number, k: number) => <g key={k}><circle cx={x} cy={y} r={32} fill="none" stroke={NAVY.stroke} strokeWidth={2.5} /><Nucleus cx={x} cy={y} p={2} n={2} r={10} proton={ROSE.stroke} neutron={NEUTRON} /><circle cx={x + 32} cy={y} r={7} fill={NAVY.stroke} /><circle cx={x - 32} cy={y} r={7} fill={NAVY.stroke} /></g>,
};
const PLASMA_SPECIES = [{id: 'H', r: 20}, {id: 'He', r: 24, mass: 4}, {id: 'e', r: 9, mass: 0.2}, {id: 'A', r: 30}, {id: 'B', r: 32, mass: 4}];
const RUN10 = lazy(() => runBox({seed: 52, frames: dur('plasma'), w: PB.w, h: PB.h, speed: 4, species: PLASMA_SPECIES,
	initial: [{species: 'H', count: 12}, {species: 'He', count: 2}, {species: 'e', count: 16}],
	reactions: [{from: ['H', 'e'], to: ['A'], ea: 0}, {from: ['A'], to: ['H', 'e'], ea: 0.5, rate: 6}]}));
const RUN11 = lazy(() => {
	const id = 'recombination';
	const at2 = cue(id, 'atoms', 2);
	return runBox({seed: 52, frames: dur(id), w: PB.w, h: PB.h, speed: 4, species: PLASMA_SPECIES, temperature: [[0, 1], [at2, 0.35]],
		initial: [{species: 'H', count: 12}, {species: 'He', count: 2}, {species: 'e', count: 16}],
		reactions: [{from: ['H', 'e'], to: ['A'], ea: 0}, {from: ['He', 'e'], to: ['B'], ea: 0, activeFrom: at2}, {from: ['A'], to: ['H', 'e'], ea: 0.5, rate: 6, until: at2}]});
});
/** The plasma inset: an electron settles near a nucleus and a photon knocks it off (or bounces off when `stays`). */
const KnockInset: React.FC<{f: number; at: number; stays?: boolean}> = ({f, at, stays = false}) => {
	const u = prog(f, at, 24), hit = prog(f, at + 24, 20);
	const ex = 1440 + 60 - 60 * u + (stays ? 0 : 180 * hit), ey = 330 - (stays ? 0 : 90 * hit);
	return (
		<g opacity={prog(f, at - 10, 10)}>
			<rect x={1120} y={230} width={520} height={210} rx={14} fill="#fffdf8" stroke="rgba(60,45,20,0.3)" strokeWidth={3} />
			<Particle x={1380} y={330} r={26} color={ROSE.stroke} text="H" size={22} />
			<Particle x={ex} y={ey} r={11} color={NAVY.stroke} />
			<Packet x={1170 + 200 * Math.min(1, (f - at - 4) / 20) - (stays ? 160 * hit : 0)} y={360 - (stays ? 60 * hit : 0)} deg={stays ? 200 : -10} len={50} color={AMBER.stroke} opacity={f >= at + 4 ? 1 : 0} />
		</g>
	);
};
export const S10: React.FC = () => {
	const id = 'plasma';
	const f = useCurrentFrame();
	const nn = cue(id, 'Nuclei, but not atoms'), ph = cue(id, 'photon'), ts = cue(id, 'thirteen point six electron volts'), tg = cue(id, 'together'), fe = cue(id, 'free electrons scatter light'), yr = cap(id, cue(id, 'years'));
	const bx = 1120;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<rect x={PB.x} y={PB.y} width={PB.w} height={PB.h} rx={14} fill="none" stroke="rgba(60,45,20,0.3)" strokeWidth={3} />
				<BoxParticles run={RUN10()} f={f} x={PB.x} y={PB.y} draw={plasmaDraw} />
				<KnockInset f={f} at={ph} />
				<g opacity={prog(f, ts, 14)}>
					<rect x={bx} y={540} width={520} height={46} rx={6} fill={SLATE.soft} stroke={SLATE.stroke} strokeWidth={3} />
					<rect x={bx} y={640} width={4} height={46} fill={NAVY.stroke} />
				</g>
				<ZigZag pts={ZZ} draw={prog(f, fe, 50)} color={AMBER.stroke} width={5} />
				<rect x={PB.x} y={PB.y} width={PB.w} height={PB.h} rx={14} fill={GLOW} opacity={0.32 * prog(f, yr, 30)} />
				<Thermo level={0.62} />
			</FrameSvg>
			<Chip x={96} y={168} at={nn} size={32} color={INK}>nuclei ✓</Chip>
			<Chip x={300} y={168} at={nn + 6} size={32} color={SLATE.ink}>atoms ✗</Chip>
			<HandTag x={1130} y={480} text="knocked off again" at={ph + 50} out={ts} size={32} color={NAVY.ink} marks={[{kind: 'circle', cx: 1580, cy: 250, rx: 40, ry: 36}]} />
			<Lbl x={bx} y={520} at={ts} color={SLATE.ink} size={28}>{`hold ²H together: ${fx(B_D, 1)} MeV`}</Lbl>
			<Lbl x={bx} y={720} at={ts + 6} color={NAVY.ink} size={28}>{`hold an electron: ${fx(B_H, 1)} eV (too small to see here)`}</Lbl>
			<HandTag x={bx} y={780} text={`× about ${fx(Math.round(BIND_RATIO / 1e4) * 1e4).replace(/(\d)(?=(\d{3})+$)/g, '$1 ')}`} at={ts + 20} size={34} color={SLATE.ink} />
			<Chip x={540} y={168} at={tg} size={30} color={INK}>plasma: hot gas of nuclei and free electrons</Chip>
			<HandTag x={PB.x + 10} y={PB.y + PB.h + 46} text="photons bounce from electron to electron" at={fe + 30} out={yr} size={32} color={AMBER.ink} />
			<Lbl x={PB.x} y={PB.y + PB.h + 46} at={yr + 10} color={INK} size={32}>{"opaque: light can't travel far"}</Lbl>
		</>
	);
};
export const S11: React.FC = () => {
	const id = 'recombination';
	const f = useCurrentFrame();
	const tw = cue(id, 'too weak to keep breaking atoms apart'), at2 = cue(id, 'atoms', 2), rc = cue(id, 'recombination'), ls = cue(id, 'light stopped scattering'), tr = cap(id, cue(id, 'transparent'));
	const clear = prog(f, tr, 30);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<rect x={PB.x} y={PB.y} width={PB.w} height={PB.h} rx={14} fill="none" stroke="rgba(60,45,20,0.3)" strokeWidth={3} />
				<BoxParticles run={RUN11()} f={f} x={PB.x} y={PB.y} draw={plasmaDraw} />
				<KnockInset f={f} at={tw} stays />
				<ZigZag pts={ZZ} straight={prog(f, ls, 40)} color={AMBER.stroke} width={5} />
				{f >= tr ? [300, 450, 600, 750].map((y, i) => <Packet key={i} x={PB.x + 60 + (PB.w + 700) * prog(f, tr + 6 * i, 60)} y={y} deg={0} len={50} color={AMBER.stroke} />) : null}
				<rect x={PB.x} y={PB.y} width={PB.w} height={PB.h} rx={14} fill={GLOW} opacity={0.32 * (1 - clear)} />
				<Thermo level={0.62 - 0.44 * prog(f, 0, 60)} />
				<ThermoTick u={0.18} text="~3000 K" o={prog(f, 10, 12)} />
			</FrameSvg>
			<Lbl x={1640} y={880} at={10} color={GREY.ink} size={30} anchor="end">~380 000 years</Lbl>
			<HandTag x={1120} y={500} text="3000 K: glows orange" at={30} out={at2} size={32} color={RED.ink} />
			<HandTag x={1130} y={480} text="electrons stay put" at={at2 + 20} size={32} color={NAVY.ink} />
			<Lbl x={PB.x + 10} y={PB.y - 24} at={at2} color={NAVY.ink} size={30}>H atom, He atom: electrons joined to nuclei</Lbl>
			<Chip x={1120} y={560} at={rc} size={30} w={540} color={INK}>recombination: electrons join nuclei → neutral atoms</Chip>
			<Lbl x={PB.x} y={PB.y + PB.h + 46} at={tr + 10} color={INK} size={32}>transparent: light travels freely</Lbl>
		</>
	);
};

// ---------- 12. the sequence, and a way to remember ----------
const TL = {x0: 200, x1: 1520, y: 380, lo: -6, hi: 16.5};
const TIMES = {q: 1e-6, pa: 1, nf: 180, yr: 3.8e5 * YEAR, st: 2e8 * YEAR};
export const S12: React.FC = () => {
	const id = 'timeline-memory-aid';
	const f = useCurrentFrame();
	const q = cue(id, 'Quarks become protons and neutrons'), pa = cue(id, 'pairs annihilate'), nf = cue(id, 'nuclei at a few minutes'), yr = cue(id, 'years'), tcp = cue(id, 'too cool to make pairs'), tcn = cue(id, 'too cool to break nuclei'), at = cap(id, cue(id, 'break atoms'));
	const L = Math.log10;
	const lt = kf(f, [[q, L(TIMES.q)], [pa, L(TIMES.q)], [pa + 30, L(TIMES.pa)], [nf, L(TIMES.pa)], [nf + 30, L(TIMES.nf)], [yr - 30, L(TIMES.nf)], [yr, L(TIMES.yr)]]);
	const t = 10 ** lt, T = dialT(t), E = ePeakMeV(T), lam = B / T;
	const X = (s: number) => logPos(s, TL.lo, TL.hi, TL.x0, TL.x1);
	const stars = yr + 40;
	const state = f >= at ? 'atoms' : f >= tcn ? 'nuclei' : 'pairs';
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<LogTimeline x0={TL.x0} x1={TL.x1} y={TL.y} lo={TL.lo} hi={TL.hi} f={f} size={30} title="time after the Big Bang (log scale)" ringColor={RED.stroke}
					ticks={[{t: 1e-6, label: '10⁻⁶ s'}, {t: 1, label: '1 s'}, {t: 3600, label: '1 hour'}, {t: YEAR, label: '1 year'}, {t: 1e6 * YEAR, label: '10⁶ years'}]}
					markers={[
						{t: TIMES.q, label: 'p and n', sub: '~10⁻⁶ s, ~10¹² K', at: q, ring: f >= q + 6 && f < tcp},
						{t: TIMES.pa, label: 'e⁺e⁻ annihilate', sub: 'seconds, ~10¹⁰ to 10⁹ K', at: pa, ring: f >= pa + 30 && f < tcp, up: false},
						{t: TIMES.nf, label: 'H and He nuclei', sub: '3 to 20 min, ~10⁹ K', at: nf, ring: f >= nf + 30},
						{t: TIMES.yr, label: 'neutral atoms', sub: '~380 000 yr, ~3000 K', at: yr, ring: f >= yr + 6},
						{t: TIMES.st, label: 'first stars', sub: '~200 million yr', at: stars, up: false},
					]} />
				<g opacity={prog(f, q - 10, 12)}>
					<circle cx={X(t)} cy={TL.y} r={20} fill={RED.stroke} stroke="#fffdf8" strokeWidth={4} />
					<line x1={X(t)} y1={TL.y + 20} x2={X(t)} y2={TL.y + 60} stroke={RED.stroke} strokeWidth={4} />
				</g>
				<LPlate spec={GALAXY} p={{x: X(TIMES.st) - 20, y: 170, w: 240}} opacity={prog(f, stars, 16)} />
				<g opacity={prog(f, q, 12)}>
					<rect x={1300} y={660} width={340} height={240} rx={14} fill="#fffdf8" stroke="rgba(60,45,20,0.3)" strokeWidth={3} />
					{state === 'pairs' ? [0, 1, 2].map(i => <g key={i}><Particle x={1340 + i * 100} y={730} r={16} color={NAVY.stroke} /><circle cx={1376 + i * 100} cy={730} r={15} fill="#fffdf8" stroke={ROSE.stroke} strokeWidth={4} /><Packet x={1360 + i * 100} y={830} deg={i * 60} len={40} color={AMBER.stroke} /></g>) : null}
					{state === 'nuclei' ? <g><Nucleus cx={1400} cy={780} p={2} n={2} r={18} proton={ROSE.stroke} neutron={NEUTRON} /><Particle x={1500} y={760} r={20} color={ROSE.stroke} text="H" size={18} /><Particle x={1560} y={830} r={10} color={NAVY.stroke} /></g> : null}
					{state === 'atoms' ? <g><circle cx={1470} cy={780} r={56} fill="none" stroke={NAVY.stroke} strokeWidth={3} /><Particle x={1470} y={780} r={26} color={ROSE.stroke} text="H" size={22} /><circle cx={1526} cy={780} r={11} fill={NAVY.stroke} /></g> : null}
				</g>
			</FrameSvg>
			<Readout x={140} y={500} label="T" value={`≈ ${sci(T, 1)} K`} color={RED.ink} w={300} opacity={prog(f, q, 12)} />
			<Readout x={470} y={500} label="peak photon energy" value={eFmt(E)} color={AMBER.ink} w={330} opacity={prog(f, q, 12)} />
			<Readout x={830} y={500} label="peak λ" value={lam < 1e-7 ? `${sci(lam, 1)} m` : `${fx(lam * 1e9)} nm`} color={AMBER.ink} w={330} opacity={prog(f, q, 12)} />
			<Readout x={1190} y={500} label="time" value={tFmt(t)} color={GREY.ink} w={330} opacity={prog(f, q, 12)} />
			<HandTag x={470} y={660} text="MeV to eV" at={nf + 20} size={34} color={RED.ink} />
			<HandTag x={1560} y={470} text="the galaxy from the start" at={stars + 16} size={32} color={INK} />
			<Lbl x={1470} y={640} at={q} color={INK} size={28} anchor="middle">{`now: ${state}`}</Lbl>
			<HandTag x={96} y={760} text="Too cool to make pairs, then too cool to break nuclei," at={tcp} size={48} color={INK} />
			<HandTag x={96} y={840} text="then too cool to break atoms." at={at} size={48} color={INK} />
		</>
	);
};
