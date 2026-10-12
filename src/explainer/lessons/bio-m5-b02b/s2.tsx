import React, {useMemo} from 'react';
import {useCurrentFrame} from 'remotion';
import {rng} from '../../kit';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, ANTHERS, along, Arrow, ART, Art, artH, BeeIcon, BLUE, Droplet, DrawPath, Enter, EGG_BOX, Fade, FEMALE, FL, fp, fullKey, GOLD, Heading, INK, INK_SOFT, Label,
	mapper, MALE, NameKey, Note, Overlay, pathOf, POLLEN, prog, S, Scribble, SeqStrip, SpermDot, Specks, TEAL, TUBE_BOX, WATER_LINE,
} from './shared';

// ---------- 3. Pollination ----------
export const ScenePollination: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('pollination'), {
		step: 'The first step', moves: 'Pollen moves', carriers: 'use carriers', bee: 'A bee visits', sticks: 'pollen sticks', rubs: 'rubs off', wind: 'use the wind', water: 'use water',
		arrived: 'look at what', still: 'still in the pollen grain', egg: 'the egg is still', not: 'is not fertilisation', place: 'right place',
	});
	const BEE = {x: 110, y: 200, w: 520};
	const bm = mapper(ART.bee, BEE.x, BEE.y, BEE.w);
	const FS = {x: 720, y: 230, w: 440};
	const fsm = mapper(ART.flower, FS.x, FS.y, FS.w);
	const GR = {x: 1250, y: 190, w: 300};
	const carriersOut = c.arrived - 6;
	const cOut = 1 - prog(f, carriersOut, 14);
	const mainIn = prog(f, c.arrived + 4, 16);
	const stigmaS = fsm(470, 135);
	const flightP = prog(f, c.rubs, 46);
	const beeFrom: [number, number] = [bm(500, 260)[0], bm(500, 260)[1]];
	const beePos: [number, number] = [beeFrom[0] + (stigmaS[0] + 40 - beeFrom[0]) * flightP, beeFrom[1] + (stigmaS[1] - 30 - beeFrom[1]) * flightP - Math.sin(flightP * Math.PI) * 90];
	const drop = (i: number): [number, number] => {
		const t = prog(f, c.rubs + 40 + i * 6, 22);
		return [stigmaS[0] - 20 + i * 18, stigmaS[1] - 40 + 40 * t];
	};
	const cloud = useMemo(() => { const r = rng(14); return Array.from({length: 46}, () => ({x: r() * 330, y: r() * 360, sp: 0.8 + r() * 1.2, ph: r() * 6})); }, []);
	const windP = f - c.wind;
	const fpS = fp(470, 128);
	const grains: [number, number][] = [[-22, 6], [-8, -4], [8, 4], [22, -2]].map(([dx, dy]) => [fpS[0] + dx, fpS[1] + dy - 6]);
	const eggP = fp(EGG_BOX[0], EGG_BOX[1]);
	return (
		<>
			<Heading items={[[c.step, 'Step 1: pollination']]} size={76} />
			<div style={{opacity: cOut}}>
				<Enter at={c.carriers} style={{position: 'absolute', left: 900, top: 96}}><Note size={40}>plants can't walk: they use carriers</Note></Enter>
				<Art a={ART.bee} x={BEE.x} y={BEE.y} w={BEE.w} style={{opacity: prog(f, c.bee, 18)}} />
				<Art a={ART.flower} x={FS.x} y={FS.y} w={FS.w} style={{opacity: prog(f, c.moves, 18)}} />
				<Art a={ART.grass} x={GR.x} y={GR.y} w={GR.w} style={{opacity: prog(f, c.wind, 18)}} />
				<Overlay>
					<Arrow x1={fsm(600, 310)[0]} y1={fsm(600, 310)[1] - 30} x2={stigmaS[0] + 24} y2={stigmaS[1] + 4} at={c.moves + 14} color={AMBER_INK} width={6} />
					<Label x={FS.x + FS.w / 2} y={FS.y + artH(ART.flower, FS.w) + 50} at={c.moves + 20} text="anther to stigma" size={44} color={AMBER_INK} />
					<Scribble cx={bm(690, 430)[0]} cy={bm(690, 430)[1]} rx={44} ry={56} at={c.sticks} color={AMBER} seed={4} width={6} />
					<Fade at={c.bee + 30}><Label x={BEE.x + 250} y={BEE.y + artH(ART.bee, BEE.w) + 50} at={c.bee + 30} text="carries pollen" size={50} color={AMBER_INK} /></Fade>
					{flightP > 0 && flightP < 1 ? <BeeIcon x={beePos[0]} y={beePos[1]} s={0.95} rot={flightP * 14} /> : null}
					<Specks pts={[0, 1, 2].map(drop)} o={prog(f, c.rubs + 40, 4)} r={6} />
					{/* wind */}
					{[0, 1, 2].map(i => <DrawPath key={i} d={`M1190,${300 + i * 110} q36,-26 72,0 t72,0 t72,0`} at={c.wind + i * 8} dur={26} color={WATER_LINE} width={6} />)}
					{windP > 20 ? cloud.map((d, i) => {
						const t = ((windP * d.sp * 1.4 + d.ph * 60) % 420) / 420;
						return <circle key={i} cx={1190 + t * 380} cy={250 + d.y + Math.sin(t * 9 + d.ph) * 12} r={4.5} fill={POLLEN} stroke={AMBER_INK} strokeWidth={1} opacity={Math.sin(t * Math.PI)} />;
					}) : null}
					<Fade at={c.wind + 30}><Label x={1400} y={GR.y + artH(ART.grass, GR.w) + 50} at={c.wind + 30} text="carries pollen" size={50} color={AMBER_INK} /></Fade>
					{/* water */}
					<g opacity={prog(f, c.water, 14)}>
						{[0, 1, 2].map(i => <path key={i} d={`M1620,${470 + i * 44} q28,-22 56,0 t56,0 t56,0`} fill="none" stroke={WATER_LINE} strokeWidth={7} strokeLinecap="round" />)}
						{[0, 1, 2, 3].map(i => <circle key={i} cx={1650 + i * 50} cy={452 + Math.sin(f / 9 + i * 1.7) * 6} r={7} fill={POLLEN} stroke={AMBER_INK} strokeWidth={1.4} />)}
						<text x={1730} y={660} textAnchor="middle" style={{fontFamily: "'Caveat', cursive", fontWeight: 700, fontSize: 50}} fill={AMBER_INK}>carries pollen</text>
					</g>
				</Overlay>
			</div>
			{/* main flower with the name key: the pollen has arrived, nothing more */}
			<div style={{opacity: mainIn}}>
				<Art a={ART.flower} x={FL.x} y={FL.y} w={FL.w} />
				<Overlay>
					<Specks pts={grains} r={7} />
					<Scribble cx={fpS[0]} cy={fpS[1]} rx={50} ry={32} at={c.arrived + 14} color={AMBER} seed={9} width={5} />
					<Scribble cx={eggP[0]} cy={eggP[1] - 4} rx={30} ry={30} at={c.egg} color={FEMALE} seed={3} width={5} />
					<g opacity={prog(f, c.egg + 20, 14)}>
						<path d={`M1500,${fpS[1]} q30,0 30,30 L1530,${(fpS[1] + eggP[1]) / 2 - 20} q0,25 25,25 q-25,0 -25,25 L1530,${eggP[1] - 30} q0,30 -30,30`} fill="none" stroke={AMBER_INK} strokeWidth={5} strokeLinecap="round" />
					</g>
					<Fade at={c.egg + 26}><Label x={1560} y={(fpS[1] + eggP[1]) / 2 + 60} at={c.egg + 26} text="still far apart" size={46} color={AMBER_INK} anchor="start" /></Fade>
					{/* the grain: sperm cells not formed yet */}
					<g opacity={prog(f, c.still, 14)} transform="translate(1700,215)">
						<circle r={60} fill={POLLEN} stroke={AMBER_INK} strokeWidth={5} />
						<circle r={22} fill="#fff6d6" stroke={AMBER_INK} strokeWidth={3} />
					</g>
					<Fade at={c.still}><Label x={1700} y={310} at={c.still} text="still in the grain" size={42} color={MALE} /></Fade>
					{/* pollination = arrival */}
					<g opacity={prog(f, c.not, 14)}>
						<text x={1500} y={640} style={{fontFamily: "'Caveat', cursive", fontWeight: 700, fontSize: 40}} fill={AMBER_INK}>pollination = arrival</text>
						<text x={1500} y={710} style={{fontFamily: "'Caveat', cursive", fontWeight: 700, fontSize: 40}} fill={INK_SOFT}>pollination = seed</text>
					</g>
				</Overlay>
				<Overlay>
					<MarkSet at={c.not + 10} />
				</Overlay>
			</div>
			<NameKey items={fullKey(c.arrived + 8)} />
			<SeqStrip items={[{k: 'land', at: c.arrived + 30}]} />
		</>
	);
};
import {Mark} from '../../kit';
const MarkSet: React.FC<{at: number}> = ({at}) => (
	<>
		<Mark x={1868} y={624} at={at} kind="tick" size={44} />
		<Mark x={1868} y={694} at={at + 14} kind="cross" size={44} />
	</>
);

// ---------- 4. The pollen tube ----------
export const ScenePollenTube: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('pollen-tube'), {
		inside: 'inside the flower', lands: 'lands on the sticky', water: 'takes in water', grows: 'grows a thin tube', tube: 'the pollen tube', guided: 'guided by chemical', form: 'sperm cells form',
		travel: 'travel along it', swim: 'swim', reaches: 'reaches the ovule', opening: 'small opening', releases: 'releases the sperm', solves: 'tube solves', carries: 'carries the sperm',
	});
	const tp = TUBE_BOX.map(([x, y]) => fp(x, y));
	const lin = (t: number) => t;
	const tubeP = prog(f, c.grows, c.reaches - c.grows, lin);
	const tip = along(tp, tubeP);
	const GP = {x: 1530, y: 160, w: 300};
	const gm = mapper(ART.grain, GP.x, GP.y, GP.w);
	const grain = gm(349, 150);
	const OV = {x: 1545, y: 400, w: 280};
	const om = mapper(ART.ovule, OV.x, OV.y, OV.w);
	const panelOut = 1 - prog(f, c.reaches + 6, 14);
	const ovIn = prog(f, c.reaches + 8, 16);
	const split = prog(f, c.form + 20, 20);
	const dotT = (i: number) => Math.max(0, Math.min(tubeP - 0.05 - i * 0.07, prog(f, c.travel, c.reaches - c.travel + 30, lin)));
	const sig = useMemo(() => { const r = rng(21); return Array.from({length: 9}, () => ({o: r(), s: 0.5 + r() * 0.6})); }, []);
	const eggS = fp(EGG_BOX[0], EGG_BOX[1]);
	const spill = prog(f, c.releases, 24);
	const eggO = om(287, 173);
	const openO = om(290, 40);
	const tubeIn = prog(f, c.opening - 10, 24);
	return (
		<>
			<Heading items={[[c.inside, 'The pollen tube']]} size={76} />
			<Art a={ART.flower} x={FL.x} y={FL.y} w={FL.w} />
			<Overlay>
				{/* chemical signals drifting up the channel from the ovule */}
				{f >= c.guided ? sig.map((d, i) => {
					const t = ((f - c.guided) * 0.012 * d.s + d.o) % 1;
					const p = along([...tp].reverse(), t);
					return <circle key={i} cx={p[0] + (i % 2 ? 7 : -7)} cy={p[1]} r={6} fill={TEAL} opacity={0.75 * prog(f, c.guided, 10) * (1 - prog(f, c.reaches, 12))} />;
				}) : null}
				<path d={pathOf(tp)} fill="none" stroke="#8a5a0c" strokeWidth={13} strokeLinecap="round" strokeLinejoin="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - tubeP} opacity={tubeP > 0 ? 1 : 0} />
				<path d={pathOf(tp)} fill="none" stroke={GOLD} strokeWidth={8} strokeLinecap="round" strokeLinejoin="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - tubeP} opacity={tubeP > 0 ? 1 : 0} />
				<circle cx={tip[0]} cy={tip[1]} r={8} fill={GOLD} stroke="#8a5a0c" strokeWidth={3} opacity={prog(f, c.grows, 6) * (1 - prog(f, c.reaches + 30, 10))} />
				{/* grains on the stigma and the sperm cells inside the tube */}
				<circle cx={fp(470, 128)[0]} cy={fp(470, 128)[1] - 4} r={11 + 4 * prog(f, c.water, 30)} fill={POLLEN} stroke={AMBER_INK} strokeWidth={3} />
				{[0, 1].map(i => {
					const p = along(tp, dotT(i));
					return f >= c.travel ? <SpermDot key={i} x={p[0]} y={p[1]} s={0.7} rot={90} o={1 - prog(f, c.releases, 4)} /> : null;
				})}
				<Fade at={c.tube + 4} out={c.tube + 120}><Callout2 from={fp(466, 360)} to={[800, 430]} at={c.tube + 4} text="pollen tube" /></Fade>
				{/* spill beside the egg in the main flower */}
				{f >= c.releases ? [0, 1].map(i => <SpermDot key={i} x={eggS[0] + (i ? 40 : -40) * spill} y={eggS[1] - 20 + 6 * spill} s={0.7} rot={i ? 20 : 160} />) : null}
				<Scribble cx={fp(527, 672)[0]} cy={fp(527, 672)[1]} rx={32} ry={32} at={c.opening} color={AMBER} seed={6} width={5} />
			</Overlay>
			{/* right-hand zoom panel: pollen grain, then the ovule close-up */}
			<div style={{opacity: panelOut}}>
				<Art a={ART.grain} x={GP.x} y={GP.y} w={GP.w} style={{opacity: prog(f, c.lands, 14)}} />
				<Overlay>
					<Label x={GP.x + GP.w / 2} y={GP.y - 18} at={c.lands} text="grain on the stigma" size={38} color={INK_SOFT} font="body" weight={600} />
					{[0, 1, 2].map(i => {
						const t = prog(f, c.water + i * 10, 34);
						return <g key={i} opacity={prog(f, c.water + i * 10, 6) * (1 - t)} transform={`translate(${grain[0] - 130 + 130 * t + i * 8},${grain[1] - 70 + 70 * t - i * 26}) scale(0.5)`}><DropIcon /></g>;
					})}
					<g opacity={prog(f, c.form, 12)}>
						{split < 0.05 ? <circle cx={grain[0]} cy={grain[1]} r={26} fill="#fff6d6" stroke={AMBER_INK} strokeWidth={3} /> : null}
						{split >= 0.05 ? [-1, 1].map(i => <SpermDot key={i} x={grain[0] + i * 18 * split} y={grain[1]} s={0.55} rot={i < 0 ? 180 : 0} />) : null}
					</g>
					<Fade at={c.form + 30}><Label x={GP.x + GP.w / 2} y={GP.y + artH(ART.grain, GP.w) + 40} at={c.form + 30} text="two sperm cells form" size={42} color={BLUE} /></Fade>
				</Overlay>
			</div>
			<div style={{opacity: ovIn}}>
				<Overlay><rect x={OV.x - 24} y={OV.y - 28} width={OV.w + 48} height={artH(ART.ovule, OV.w) + 56} rx={26} fill="#fffdf8" stroke="rgba(60,45,20,0.12)" strokeWidth={2} /></Overlay>
				<Art a={ART.ovule} x={OV.x} y={OV.y} w={OV.w} />
				<Overlay>
					<path d={`M${openO[0]},${OV.y - 18} L${openO[0]},${openO[1] + 6}`} stroke="#8a5a0c" strokeWidth={13} strokeLinecap="round" opacity={tubeIn} />
					<path d={`M${openO[0]},${OV.y - 18} L${openO[0]},${openO[1] + 6}`} stroke={GOLD} strokeWidth={8} strokeLinecap="round" opacity={tubeIn} />
					<Scribble cx={eggO[0]} cy={eggO[1]} rx={46} ry={40} at={c.releases + 20} color={FEMALE} seed={8} width={5} />
					{f >= c.releases ? [0, 1].map(i => <SpermDot key={i} x={openO[0] + (i ? 42 : -42) * spill} y={openO[1] + 50 + 36 * spill} s={0.8} rot={i ? 40 : 140} />) : null}
				</Overlay>
			</div>
			<NameKey items={fullKey(-20, [{text: 'pollen tube', color: GOLD, at: c.tube + 40}])} />
			<SeqStrip items={[{k: 'land', at: -20}, {k: 'tube', at: c.tube + 30}]} />
			<Enter at={c.solves} style={{position: 'absolute', left: 96, top: 800}}>
				<Note size={44}>the tube carries the sperm to the egg</Note>
			</Enter>
		</>
	);
};

const DropIcon: React.FC = () => <Droplet x={0} y={0} />;
import {Callout} from '../../kit';
const Callout2: React.FC<{from: [number, number]; to: [number, number]; at: number; text: string}> = ({from, to, at, text}) => <Callout from={from} to={to} at={at} text={text} color={AMBER_INK} align="right" size={52} />;
void [ANTHERS, AMBER, INK, MALE, SeqStrip];
