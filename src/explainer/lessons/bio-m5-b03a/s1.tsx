import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Callout} from '../../kit';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, Arrow, Bracket, Cam, Cross, DrawPath, Dots, Egg, EggDot, Enter, Fade, FONT_DISPLAY, FONT_HAND, Hand, Heading, INK, INK_SOFT, Label, Overlay,
	PArt, PL, Pill, prog, Rail, RoundPlate, S, Scribble, Sperm, SPERM_BLUE, Strip1, TEAL, TEAL_INK, TestStick, Trail, TractPair, tt, vis, along, pathOf, TR, ROSE, PURPLE, EGG_LINE, Say,
} from './shared';

// ---------- 1. Hook: the pregnancy test ----------
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('hook'), {
		test: 'pregnancy test', detect: 'detect the embryo itself', chem: 'chemical that the embryo makes', sends: 'sends out', q: "So here's the question", sperm: 'A sperm has just joined', next: 'What has to happen next', msg: 'send a message',
	});
	const E = {x: 180, y: 430, d: 300};
	const ec: [number, number] = [E.x + E.d / 2, E.y + E.d / 2];
	const path: [number, number][] = [[ec[0] + 130, ec[1] - 40], [640, 400], [940, 370], [1290, 400], [1500, 500], [1544, 586]];
	const arrive = c.sends + 36;
	return (
		<>
			<Heading items={[[c.test - 6, 'A home pregnancy test'], [c.q, 'A sperm has joined an egg. What happens next?']]} size={76} />
			<Hand at={c.msg} x={96} y={196} size={54}>And why would a tiny embryo send a message?</Hand>
			<div style={{position: 'absolute', inset: 0, opacity: prog(f, c.detect - 4, 18)}}>
				<RoundPlate a={PL.cl5} x={E.x} y={E.y} d={E.d} ring={INK_SOFT} />
			</div>
			<Enter at={c.detect + 20} style={{position: 'absolute', left: 120, top: 750, width: 420}}>
				<div style={{textAlign: 'center', fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, color: INK, lineHeight: 1.05}}>embryo:<br />the earliest form of the baby</div>
			</Enter>
			<Overlay>
				<g opacity={prog(f, c.test, 14)}><TestStick x={1000} y={520} w={700} line={prog(f, arrive, 24)} /></g>
				<Fade at={c.detect + 4} out={c.chem - 6}>
					<Arrow x1={560} y1={640} x2={980} y2={640} at={c.detect + 4} color={INK_SOFT} width={7} dash="14 12" dur={24} head={22} />
					<Cross x={770} y={640} s={1.5} at={c.detect + 30} />
				</Fade>
				<path d={pathOf(path)} fill="none" stroke={TEAL} strokeWidth={3} strokeDasharray="3 12" strokeLinecap="round" opacity={0.5 * prog(f, c.chem, 16)} />
				<Dots pts={path} at={c.chem} n={7} period={78} color={TEAL} r={11} end={c.sends + 30} />
			</Overlay>
			<Pill at={c.next + 6} x={1040} y={780} size={44}>fertilisation is not yet a pregnancy</Pill>
		</>
	);
};

// ---------- 2a. Where the meeting happens ----------
const MP = {x: 340, y: 300, w: 1240};
export const SceneMeeting: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('meeting'), {
		human: 'in a human', ovary: 'ovary', rel: 'releases an egg', tube: 'the oviduct', uterus: 'the uterus', fert: 'Fertilisation usually', meet: 'sperm and egg meet',
	});
	const m = tt(MP);
	const egg = TR.eggPath.map(p => m(p[0], p[1]));
	const eggT = prog(f, c.rel, 96);
	const [ex, ey] = along(egg, eggT);
	const fp = m(TR.fert[0], TR.fert[1]);
	const sperm = [...TR.tube].reverse().slice(0, 7).map(p => m(p[0], p[1]));
	const sd = pathOf(sperm);
	const plateIn = prog(f, 0, 22);
	return (
		<>
			<Heading items={[[0, 'Where it happens, in a human'], [c.fert, 'Fertilisation: the sperm meets the egg']]} size={72} />
			<Cam keys={[[0, 1, 960, 540], [560, 1.05, 900, 580]]}>
				<div style={{position: 'absolute', inset: 0, opacity: plateIn}}><TractPair p={MP} /></div>
				<Overlay>
					<Callout from={m(190, 252)} to={m(30, 335)} at={c.ovary} text="ovary" color={INK} size={54} />
					<Callout from={m(190, 20)} to={m(150, 88)} at={c.tube} text="oviduct" sub="tube to uterus" color={INK} size={54} />
					<Callout from={m(640, 300)} to={m(790, 420)} at={c.uterus} text="uterus" sub="where the baby will grow" color={INK} size={54} />
					{eggT > 0 ? <EggDot x={ex} y={ey} r={15} o={prog(f, c.rel, 8)} /> : null}
					<Scribble cx={fp[0]} cy={fp[1]} rx={72} ry={64} at={c.fert} color={AMBER} seed={5} width={7} />
					<Trail d={sd} at={c.fert + 6} dur={70} color={SPERM_BLUE} width={7} />
					<Label x={fp[0] - 92} y={fp[1] + 14} at={c.fert + 24} text="fertilisation" size={56} color={AMBER_INK} anchor="end" />
				</Overlay>
			</Cam>
			<Rail upTo={1} newAt={c.meet} />
			<div style={{display: 'none'}}>{c.human}</div>
		</>
	);
};

// ---------- the sperm and egg close-up field (gametes + zygote) ----------
const FLD = {x: 560, y: 215, w: 1264, h: 650};
const SY = 540;
const EGGC: [number, number] = [1440, 540];
const Field: React.FC<{children?: React.ReactNode}> = ({children}) => (
	<div style={{position: 'absolute', left: FLD.x, top: FLD.y, width: FLD.w, height: FLD.h, borderRadius: 30, background: '#fbf6ec', border: `5px solid ${INK}`, boxSizing: 'border-box', boxShadow: '0 18px 40px rgba(60,45,20,0.10)'}}>{children}</div>
);

// ---------- 2b. Built for the job ----------
export const SceneGametes: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('gametes'), {
		tail: 'tail to swim', mito: 'many mitochondria', acro: 'the acrosome', enz: 'holds enzymes', egg: 'The egg is large', food: 'store of food', swim: 'cannot swim', moves: 'moves it along',
	});
	const mp = {x: 96, y: 330, w: 420};
	const m = tt(mp);
	const fp = m(TR.fert[0], TR.fert[1]);
	const zoom = prog(f, 0, 34);
	const sx = 960;
	const sp = f / 5;
	const push = prog(f, c.moves, 70) * 56;
	const eggX = EGGC[0] + push;
	const wall = (y0: number, dir: number) => {
		const pts: string[] = [];
		for (let i = 0; i <= 40; i++) { const x = 1160 + i * 16; pts.push(`${i ? 'L' : 'M'}${x},${y0 + dir * Math.sin(i / 3 - f / 6) * 6}`); }
		return pts.join(' ');
	};
	const wallO = prog(f, c.swim, 14);
	return (
		<>
			<Heading items={[[0, 'Built for the job']]} size={72} />
			<div style={{position: 'absolute', inset: 0, opacity: prog(f, 0, 12)}}><TractPair p={mp} /></div>
			<Overlay>
				<Scribble cx={fp[0]} cy={fp[1]} rx={26} ry={22} at={0} color={AMBER} seed={5} width={5} />
				<g opacity={zoom * 0.7}>
					<path d={`M${fp[0] + 22},${fp[1] - 16} L${FLD.x},${FLD.y + 20}`} stroke={INK_SOFT} strokeWidth={4} strokeDasharray="4 12" strokeLinecap="round" />
					<path d={`M${fp[0] + 22},${fp[1] + 18} L${FLD.x},${FLD.y + FLD.h - 20}`} stroke={INK_SOFT} strokeWidth={4} strokeDasharray="4 12" strokeLinecap="round" />
				</g>
			</Overlay>
			<div style={{position: 'absolute', inset: 0, transformOrigin: `${fp[0]}px ${fp[1]}px`, transform: `scale(${0.12 + 0.88 * zoom})`, opacity: Math.min(1, zoom * 3)}}>
				<Field />
				<Overlay>
					<Sperm x={sx} y={SY} s={0.9} phase={sp} />
					<Egg x={eggX} y={EGGC[1]} r={230} />
					{/* oviduct walls nudge the egg along */}
					<g opacity={wallO}>
						<path d={wall(268, 1)} fill="none" stroke={ROSE} strokeWidth={22} strokeLinecap="round" opacity={0.75} />
						<path d={wall(812, -1)} fill="none" stroke={ROSE} strokeWidth={22} strokeLinecap="round" opacity={0.75} />
						<Label x={1690} y={252} at={c.swim} text="oviduct wall" size={36} color={ROSE} />
					</g>
					<Callout from={[690, SY - 16]} to={[590, 340]} at={c.tail} text="tail: swims" color={SPERM_BLUE} size={54} />
					<Callout from={[866, SY - 14]} to={[690, 760]} at={c.mito} text="mitochondria: energy" color="#a9560e" size={54} />
					<Callout from={[sx + 30, SY - 24]} to={[870, 340]} at={c.acro} text="acrosome: enzymes" color={TEAL_INK} size={54} />
					<Callout from={[eggX + 70, SY + 50]} to={[eggX + 130, 335]} at={c.food} text="food store" color={AMBER_INK} size={54} />
					<Bracket x1={eggX - 230} x2={eggX + 230} y={810} at={c.egg} />
					<Label x={eggX} y={850} at={c.egg + 10} text="much larger than the sperm" size={46} color={INK} />
					{/* energy sparks round the midpiece */}
					{f >= c.mito ? [0, 1, 2, 3].map(i => {
						const ph = ((f - c.mito) / 22 + i / 4) % 1;
						return <path key={i} d={`M${sx - 100 + i * 20},${SY - 20 - ph * 34} l6,-12 l6,12`} fill="none" stroke="#f0a830" strokeWidth={5} strokeLinecap="round" opacity={Math.sin(ph * Math.PI)} />;
					}) : null}
					{/* enzyme dots seep from the acrosome */}
					<Dots pts={[[sx + 46, SY - 6], [sx + 100, SY - 40], [sx + 150, SY - 20]]} at={c.enz} n={4} period={50} color={TEAL} r={7} />
					{f >= c.mito - 2 ? <Scribble cx={sx - 78} cy={SY} rx={64} ry={34} at={c.mito} color={AMBER} seed={2} width={6} /> : null}
					{f >= c.acro ? <Scribble cx={sx + 22} cy={SY} rx={36} ry={40} at={c.acro} color={TEAL} seed={6} width={6} /> : null}
				</Overlay>
			</div>
			<Rail upTo={1} />
		</>
	);
};

// ---------- 2c. The joining ----------
export const SceneZygote: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('zygote'), {
		reach: 'reaches the egg', brk: 'break down', outer: 'outer layer', get: 'can get in', nuc: 'the nuclei', tog: 'come together', set: 'One set of chromosomes', plus: 'plus one set', full: 'a full two sets', one: 'one new cell', zyg: 'the zygote',
	});
	const approach = prog(f, c.reach, 70);
	const enter = prog(f, c.get - 24, 56);
	const headX = 960 + 215 * approach + 150 * enter;
	const gap = prog(f, c.brk, 40) * (1 - prog(f, c.nuc + 30, 30));
	const spermVis = 1 - prog(f, c.nuc, 20);
	const nucOn = prog(f, c.nuc, 16);
	const nucX = 1330 + 76 * prog(f, c.tog, 40);
	const merged = prog(f, c.set + 40, 30);
	const sy = SY;
	const bars = (x: number, color: string) => [-30, 0, 30].map((dx, i) => <Strip1 key={i} x={x + dx} y={0} h={[44, 64, 84][i]} color={color} />);
	return (
		<>
			<Heading items={[[0, 'The sperm gets in'], [c.nuc, 'The two nuclei come together'], [c.one, 'One new cell: the zygote']]} size={72} />
			<Field />
			<Overlay>
				<Egg x={EGGC[0]} y={EGGC[1]} r={230} gap={gap} nuc={1 - merged} />
				<g opacity={merged}>
					<circle cx={EGGC[0]} cy={EGGC[1]} r={64} fill="#b48ad2" stroke="#6c3f92" strokeWidth={6} />
					<circle cx={EGGC[0] - 14} cy={EGGC[1] - 8} r={20} fill="#6c3f92" opacity={0.7} />
					<circle cx={EGGC[0] + 16} cy={EGGC[1] + 10} r={16} fill="#6c3f92" opacity={0.7} />
				</g>
				<Sperm x={headX} y={sy} s={0.9 - 0.34 * enter - 0.26 * prog(f, c.get + 50, 50)} phase={f / 5} tailO={1 - prog(f, c.nuc - 24, 22)} o={spermVis} />
				<g opacity={nucOn * (1 - merged)}>
					<circle cx={nucX} cy={sy} r={30} fill={SPERM_BLUE} stroke="#27466d" strokeWidth={5} />
				</g>
				<Dots pts={[[1130, sy - 10], [1190, sy - 60], [1240, sy - 30]]} at={c.brk} n={4} period={46} color={TEAL} r={7} end={c.get} />
				<Fade at={c.outer} out={c.set - 8}><Callout from={[1290, 392]} to={[1010, 340]} at={c.outer} text="outer layer" color={INK} size={54} align="right" /></Fade>
				<Callout from={[EGGC[0] + 150, EGGC[1] + 120]} to={[1760, 800]} at={c.zyg} text="zygote" color={AMBER_INK} size={60} align="right" />
			</Overlay>
			{/* one set plus one set */}
			<Enter at={c.set - 6} style={{position: 'absolute', left: 590, top: 236}}>
				<div style={{width: 600, height: 250, background: '#fffdf8', borderRadius: 22, border: '1.5px solid rgba(60,45,20,0.08)', boxShadow: '0 18px 40px rgba(60,45,20,0.10)'}}>
					<div style={{padding: '12px 22px 0', fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 28, color: INK_SOFT}}>from the earlier videos</div>
				</div>
			</Enter>
			<Overlay>
				<g opacity={prog(f, c.set, 14)} transform="translate(0,0)">
					<g transform="translate(680,372)">{bars(0, SPERM_BLUE)}</g>
					<text x={760} y={388} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 64}} fill={INK} opacity={prog(f, c.plus, 10)}>+</text>
					<g transform="translate(840,372)" opacity={prog(f, c.plus, 12)}>{bars(0, EGG_LINE)}</g>
					<text x={930} y={388} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 64}} fill={INK} opacity={prog(f, c.full - 10, 10)}>=</text>
					<g transform="translate(1070,372)" opacity={prog(f, c.full - 8, 12)}>{bars(-36, SPERM_BLUE)}{bars(36, EGG_LINE)}</g>
					<text x={620} y={462} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44}} fill={AMBER_INK} opacity={prog(f, c.full, 12)}>one set + one set = a full two sets</text>
				</g>
			</Overlay>
			<Rail upTo={1} />
			<div style={{display: 'none'}}>{[PURPLE, TEAL_INK, along, PArt, TractPair, vis, AMBER, DrawPath, INK, Say, EggDot, Egg].length}</div>
		</>
	);
};
