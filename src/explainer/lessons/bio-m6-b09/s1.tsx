// M6 B09 scenes 1 to 4: three products and one question (bread, merino wool, insulin; only insulin's strip takes an
// inserted segment); lane 1, yeast's process (sugar in, carbon dioxide bubbles out and into the crumb's holes, the
// yeast's strip unchanged); the definition (yoghurt and washing-powder enzymes count; "DNA changed?" crossed); lane 2,
// selective breeding (the finest-wool sheep bred, one ring from each parent, the fine-wool allele bar rising over
// three generations from computed values, no new ring).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Heading, Overlay, Sx} from '../bio-m5-b13/shared';
import {GTag} from '../bio-m6-b01/parts';
import {Brace, ScribbleRing, Tg} from '../bio-m6-b07/parts';
import {DrawPath} from '../../kit';
import {Term} from '../bio-m6-b03/parts';
import {S} from './common';
import {
	AMBER, AMBER_INK, AlleleRing, BIO_INK, Box, Bubble, Enzyme, FillBar, GREYT, GREY_INK, GreyTick, INK, INK_SOFT, LCX, LaneCard, Lane1, Lane2, PLATES, Pl, Strip, StripRings,
	Sugar, clamp01, crumbPt, lerp, prog, smooth, stripX, vis,
} from './parts';
import {rungX} from '../bio-m6-b01/parts';

// ---------- 1. Hook ----------
const K1 = cues(S('hook'), {loaf: 'A loaf of bread', merino: "a merino's fine wool", vial: 'a vial of human insulin', bio: 'biotechnology', change: "change an organism's DNA", thousands: 'thousands of years', so: 'So what counts', what: ['change', 2]});
const H = [{x: 420, w: 400}, {x: 960, w: 400}, {x: 1500, w: 150}];
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const glow = vis(f, K1.thousands, K1.so, 14);
	return (
		<>
			<Heading text="What does it change?" at={K1.what} size={64} />
			<Overlay>
				<Pl p={PLATES.bread} cx={H[0].x} cy={420} w={H[0].w} o={prog(f, K1.loaf, 16)} glow={glow} />
				<Pl p={PLATES.sheep} cx={H[1].x} cy={420} w={H[1].w} o={prog(f, K1.merino, 16)} />
				<Pl p={PLATES.vial} cx={H[2].x} cy={420} w={H[2].w} o={prog(f, K1.vial, 16)} />
				<Brace x1={230} x2={1690} y={628} at={K1.bio} down />
				<Sx x={960} y={680} text="biotechnology" size={42} color={AMBER_INK} hand anchor="middle" at={K1.bio + 6} out={K1.what} />
				{H.map((h, i) => (
					<g key={i}>
						<Strip cx={h.x} y={735} n={8} pitch={28} gap={30} draw={prog(f, K1.change + i * 8, 22, x => x)} o={f >= K1.change + i * 8 ? 1 : 0} ins={i === 2 ? prog(f, K1.change + 40, 14) : 0} i0={3} i1={4} />
						{i < 2 ? <GreyTick x={h.x + 150} y={748} o={prog(f, K1.change + 30 + i * 8, 12)} /> : null}
					</g>
				))}
				<GTag x={H[0].x} y={815} text="thousands of years ago" at={K1.thousands + 6} out={K1.so} size={28} anchor="middle" />
			</Overlay>
		</>
	);
};

// ---------- 2. Using a process: yeast and bread ----------
const K2 = cues(S('yeast-process'), {yeast: 'Yeast is a single-celled', mixed: 'Mixed into dough', sugar: 'break down sugar', co2: 'releasing carbon dioxide', rise: 'rise', ethanol: 'a little ethanol', people: 'People were baking', pasteur: 'Louis Pasteur', making: 'Making bread', dna: "the yeast's DNA", use: 'We just use'});
const Y = {x: 850, y: 430, w: 420};
const BR = {x: 1460, y: 455, w: 600};
const SUG = [[640, 300], [600, 420], [660, 540], [700, 360], [620, 600]];
const CELLS: [number, number][] = [[800, 450], [950, 480], [900, 330]];
export const SceneYeast: React.FC = () => {
	const f = useCurrentFrame();
	const ws = 1 - prog(f, K2.making, 18);
	const [hx, hy] = crumbPt(BR.x, BR.y, BR.w);
	return (
		<>
			<Heading text="Using a process: yeast" at={4} size={60} />
			<Overlay>
				<LaneCard i={0} active={1} o={prog(f, 2, 14)} />
				<Lane1 plates={prog(f, K2.making + 6, 16)} strip={prog(f, K2.dna, 22, x => x)} tick={prog(f, K2.dna + 22, 12)} />
				<g opacity={ws}>
					<Pl p={PLATES.yeast} cx={Y.x} cy={Y.y} w={Y.w} o={prog(f, K2.yeast, 16)} />
					{/* sugar into the cells */}
					{SUG.map(([sx, sy], k) => {
						const t0 = K2.sugar + k * 6;
						const t = smooth(prog(f, t0, 30, x => x));
						const [cx, cy] = CELLS[k % 3];
						return <Sugar key={k} x={lerp(sx, cx, t)} y={lerp(sy, cy, t)} o={prog(f, K2.mixed, 12) * (1 - prog(f, t0 + 26, 8))} />;
					})}
					{/* carbon dioxide bubbles out of the cells, then into the crumb's holes */}
					{Array.from({length: 9}, (_, k) => {
						const [cx, cy] = CELLS[k % 3];
						const t0 = K2.co2 + k * 7;
						const out = smooth(prog(f, t0, 26, x => x));
						const drift = smooth(prog(f, K2.rise + 10 + k * 4, 50, x => x));
						const ox = cx + 60 + (k % 3) * 30 + out * 70, oy = cy - 50 + Math.floor(k / 3) * 40 - out * 30;
						const tx = hx + ((k % 3) - 1) * 46, ty = hy + (Math.floor(k / 3) - 1) * 40;
						return <Bubble key={k} x={lerp(ox, tx, drift)} y={lerp(oy, ty, drift)} r={lerp(11, 8, drift)} o={prog(f, t0, 10) * (1 - prog(f, K2.rise + 70 + k * 4, 14))} />;
					})}
					<Tg x={Y.x} y={690} text="sugar → carbon dioxide + ethanol" at={K2.co2 + 10} out={K2.rise} anchor="middle" size={38} />
					<Pl p={PLATES.bread} cx={BR.x} cy={BR.y} w={BR.w} o={prog(f, K2.rise - 6, 16)} />
					<ScribbleRing cx={hx} cy={hy} rx={100} ry={86} at={K2.rise + 8} out={K2.making} seed={4} />
					<Tg x={BR.x} y={780} text="carbon dioxide bubbles make the holes" at={K2.rise + 20} out={K2.making} anchor="middle" size={38} />
					<GTag x={Y.x} y={740} text="1850s and 60s: living yeast does it" at={K2.pasteur} out={K2.making} size={28} anchor="middle" />
				</g>
				<Term x={570} y={640} term="fermentation" gloss="using a microbe's process" at={K2.use} size={50} />
				{void K2.ethanol}{void K2.people}
			</Overlay>
		</>
	);
};

// ---------- 3. What biotechnology means ----------
const K3 = cues(S('definition'), {heart: "That's the heart", bio: 'Biotechnology is using', purpose: 'on purpose', yoghurt: 'yoghurt', washing: 'washing powders', nothing: 'Nothing in that definition', changed: 'changed', old: 'thousands of years old'});
export const SceneDefinition: React.FC = () => {
	const f = useCurrentFrame();
	const away = prog(f, 0, 20);
	return (
		<>
			<Heading text="What biotechnology means" at={4} size={60} />
			<Overlay>
				<g opacity={1 - away} transform={`translate(${-120 * away},0)`}>
					<LaneCard i={0} />
					<Lane1 />
				</g>
				<Sx x={140} y={330} text="Biotechnology:" size={64} color={INK} weight={800} at={K3.bio} />
				<Sx x={140} y={418} text="using living things, their cells or their processes," size={54} color={BIO_INK} hand at={K3.bio + 30} />
				<Sx x={140} y={490} text="on purpose, to make a product or solve a problem." size={54} color={BIO_INK} hand at={K3.purpose} />
				{/* yoghurt */}
				<Pl p={PLATES.milk} cx={420} cy={730} w={240} o={prog(f, K3.yoghurt - 6, 14)} />
				<Pl p={PLATES.bact} cx={545} cy={655} w={110} o={prog(f, K3.yoghurt + 4, 14)} />
				<Tg x={430} y={900} text="bacteria: milk → yoghurt" at={K3.yoghurt + 8} out={K3.washing} anchor="middle" size={40} />
				{/* enzymes for washing powders */}
				<Enzyme x={1000} y={740} s={1.4} o={prog(f, K3.washing - 6, 14)} />
				<Box x={1170} y={740} s={1.25} o={prog(f, K3.washing, 14)} />
				<Tg x={1090} y={900} text="microbe enzymes: industry" at={K3.washing + 8} out={K3.nothing} anchor="middle" size={40} />
				<Sx x={1580} y={760} text="DNA changed?" size={58} color={INK} hand anchor="middle" at={K3.nothing + 10} />
				<DrawPath d="M1420,742 C1520,736 1640,748 1745,738" at={K3.changed} dur={14} color={GREYT} width={7} />
				<Tg x={1580} y={880} text="old methods count too" at={K3.old + 10} anchor="middle" size={40} />
				{void K3.heart}{void INK_SOFT}{void GREY_INK}
			</Overlay>
		</>
	);
};

// ---------- 4. Choosing the parents: selective breeding ----------
const K4 = cues(S('selective-breeding'), {wool: 'Now the wool', finest: 'finest wool', sb: 'selective breeding', touched: 'No one touched', mix: 'a normal mix', which: 'which alleles', common: 'more common', slow: 'slow', exists: 'already exists'});
const FLOCK = Array.from({length: 12}, (_, i) => [1080 + (i % 4) * 200, 330 + Math.floor(i / 4) * 105] as [number, number]);
const KEEP = [1, 6, 11];
// fine-wool allele frequency over three generations when only the finest breed (computed, illustrative: p' = 2p / (1 + p))
const GEN = [0.3];
for (let g = 1; g < 3; g++) GEN.push((2 * GEN[g - 1]) / (1 + GEN[g - 1]));
if (!(GEN[0] < GEN[1] && GEN[1] < GEN[2] && GEN[2] < 1)) throw new Error('B09 breeding bars must rise');
const WX = 1400;
const PY = [340, 455], OY = 610;
export const SceneBreeding: React.FC = () => {
	const f = useCurrentFrame();
	const flockO = vis(f, K4.wool, K4.touched, 14);
	const strips = prog(f, K4.touched + 6, 14);
	const x0 = stripX(WX);
	const fly = smooth(prog(f, K4.mix + 6, 26, x => x));
	return (
		<>
			<Heading text="Choosing the parents" at={4} size={60} />
			<Overlay>
				<LaneCard i={0} />
				<Lane1 dim={1} />
				<LaneCard i={1} active={1} o={prog(f, 2, 14)} />
				<Lane2 sheep={prog(f, K4.wool, 16)} strip={prog(f, K4.slow, 22, x => x)} rings={prog(f, K4.slow + 16, 12)} tick={0} />
				{/* the flock: only the finest-wool sheep breed */}
				<g opacity={flockO}>
					{FLOCK.map(([x, y], i) => <Pl key={i} p={PLATES.sheep} cx={x} cy={y} w={110} o={prog(f, K4.wool + i, 10)} dim={KEEP.includes(i) ? 0 : 0.8 * prog(f, K4.finest, 14)} glow={KEEP.includes(i) ? prog(f, K4.finest, 14) : 0} />)}
				</g>
				<Tg x={WX} y={640} text="breed only these" at={K4.finest + 10} out={K4.sb} anchor="middle" size={40} />
				<Sx x={1000} y={660} text="selective breeding:" size={48} color={INK} weight={800} at={K4.sb} out={K4.touched} />
				<Sx x={1000} y={720} text="choosing which animals or plants breed" size={40} color={BIO_INK} hand at={K4.sb + 10} out={K4.touched} />
				{/* parents and a lamb: one ring from each parent */}
				<g opacity={strips}>
					{PY.map(y => <Strip key={y} cx={WX} y={y} />)}
					<StripRings cx={WX} y={PY[0]} kinds={['a', 'b']} />
					<StripRings cx={WX} y={PY[1]} kinds={['b', 'b']} />
					<Sx x={1225} y={PY[0] + 26} text="parent" size={30} color={GREY_INK} hand anchor="end" />
					<Sx x={1225} y={PY[1] + 26} text="parent" size={30} color={GREY_INK} hand anchor="end" />
				</g>
				<g opacity={prog(f, K4.mix - 4, 12)}>
					<Strip cx={WX} y={OY} />
					<Sx x={1225} y={OY + 26} text="lamb" size={30} color={GREY_INK} hand anchor="end" />
				</g>
				{f >= K4.mix + 6 ? (
					<g>
						<AlleleRing x={rungX(x0, 2)} y={lerp(PY[0], OY, fly) - 22} r={11} kind="a" glow={1 - fly} />
						<AlleleRing x={rungX(x0, 7)} y={lerp(PY[1], OY, fly) - 22} r={11} kind="b" glow={1 - fly} />
					</g>
				) : null}
				<g opacity={vis(f, K4.mix + 34, K4.which, 12)}><GreyTick x={1270} y={690} text="no DNA changed" /></g>
				{/* the flock's fine-wool allele bar over three generations */}
				<Tg x={1250} y={745} text="fine-wool alleles" at={K4.which + 6} size={40} />
				{GEN.map((p, g) => {
					const at = K4.which + 14 + g * 40;
					return (
						<g key={g} opacity={prog(f, at, 12)}>
							<Sx x={1225} y={796 + g * 52} text={`generation ${g + 1}`} size={26} color={GREY_INK} hand anchor="end" />
							<FillBar x={1250} y={774 + g * 52} w={420} h={28} p={p * prog(f, at, 24)} />
						</g>
					);
				})}
				{/* no new alleles: an empty ring slot */}
				<g opacity={prog(f, K4.exists, 12)}>
					<circle cx={1600} cy={OY - 22} r={13} fill="none" stroke={GREYT} strokeWidth={3} strokeDasharray="5 5" />
					<Sx x={1600} y={OY - 48} text="?" size={34} color={GREY_INK} weight={800} anchor="middle" />
				</g>
				<Tg x={1630} y={612} text="no new alleles" at={K4.exists + 6} size={36} />
				{void K4.common}{void LCX}{void clamp01}{void INK_SOFT}{void AMBER}
			</Overlay>
		</>
	);
};
