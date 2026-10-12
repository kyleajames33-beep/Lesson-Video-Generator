import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {Callout} from '../../kit';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, Arrow, Bracket, Cross, CurveGraph, DrawPath, Dots, Enter, Fade, FONT_DISPLAY, FONT_HAND, GreyTag, Hand, Heading, INK, INK_SOFT, Label, O2, Overlay, PArt, PL, PSeq, prog,
	Rail, RoundPlate, Say, S, TEAL, TEAL_INK, TestStick, TractPair, tt, Vessel, vis, YELLOW, along, pathOf, TP,
} from './shared';

// ---------- 5. Implantation ----------
const IPL = {x: 420, y: 215, w: 1160};
const im = (tx: number, ty: number): [number, number] => [IPL.x + tx * 1.45, IPL.y + ty * 1.45];
export const SceneImplantation: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('implantation'), {
		attach: 'reaches the lining', grow: 'outer cells grow', closes: 'closes over it', impl: 'This is implantation', preg: 'A pregnancy begins', food: 'food and oxygen', egg: 'as well as what the egg carried', plac: 'As the placenta forms', blood: "mother's blood",
		notfert: 'Implantation is not fertilisation', week: 'about a week later', uterus: 'in the uterus', ready: "if the lining isn't ready", cant: "can't attach", nop: 'no pregnancy begins',
	});
	const A = 1 - prog(f, c.notfert - 6, 16);
	// phase B and C: tract inset with pins, then thin lining and a bounce
	const bIn = prog(f, c.notfert, 20);
	const grow = prog(f, c.ready - 4, 40);
	const p: TP = {x: interpolate(grow, [0, 1], [96, 510]), y: interpolate(grow, [0, 1], [300, 250]), w: interpolate(grow, [0, 1], [540, 900])};
	const m = tt(p);
	const pin1 = m(40, 88), pin2 = m(450, 205);
	const thin = prog(f, c.ready + 8, 30);
	const lineOut = 1 - prog(f, c.ready - 8, 14);
	const bAt = c.cant - 40;
	const bt = prog(f, bAt, 40);
	const bounce = prog(f, c.cant + 18, 22);
	const start = m(470, 120), hit = m(452, 188), away = m(520, 100);
	const bx = bt < 1 ? start[0] + (hit[0] - start[0]) * bt : hit[0] + (away[0] - hit[0]) * bounce;
	const by = bt < 1 ? start[1] + (hit[1] - start[1]) * bt : hit[1] + (away[1] - hit[1]) * bounce - Math.sin(Math.PI * bounce) * 30;
	const r = Math.max(10, (p.w / 1000) * 15);
	const food: [number, number][][] = [
		[im(200, 285), im(262, 285), im(318, 288)], [im(560, 262), im(500, 280), im(465, 292)], [im(300, 230), im(335, 250), im(350, 268)],
		[im(520, 330), im(470, 320), im(450, 312)], [im(250, 335), im(320, 325), im(340, 308)],
	];
	const swap = vis(f, c.plac - 6);
	return (
		<>
			<Heading items={[[0, 'The blastocyst reaches the lining'], [c.notfert, 'Not the same as fertilisation'], [c.ready, 'If the lining is not ready']]} size={72} />
			<div style={{position: 'absolute', inset: 0, opacity: A}}>
				<PSeq arts={[PL.im1, PL.im2, PL.im3]} x={IPL.x} y={IPL.y} w={IPL.w} at={[c.grow + 20, c.closes + 6]} dur={26} />
				<Overlay>
					<Fade at={c.attach + 6} out={c.grow + 30}><Callout from={im(330, 70)} to={im(30, 35)} at={c.attach + 6} text="blastocyst" color={INK} size={54} /></Fade>
					<Fade at={c.attach + 16} out={c.grow + 30}><Callout from={im(150, 200)} to={im(20, 140)} at={c.attach + 16} text="lining" color={INK} size={54} /></Fade>
					{[345, 395, 445].map((tx, i) => <Fade key={tx} at={c.grow + i * 4} out={c.closes}><Arrow x1={im(tx, 176)[0]} y1={im(tx, 176)[1]} x2={im(tx, 224)[0]} y2={im(tx, 224)[1]} at={c.grow + i * 4} color={TEAL} width={9} dur={18} head={18} /></Fade>)}
					{/* food and oxygen come from the lining around the embryo */}
					{food.map((pts, i) => <Dots key={i} pts={pts} at={c.food + i * 10} n={3} period={56} color={i % 2 ? O2 : AMBER} r={9} end={c.plac} />)}
				</Overlay>
				<Hand at={c.impl} x={440} y={230} size={120} color={INK}>implantation</Hand>
				<Hand at={c.preg} x={440} y={364} size={64}>a pregnancy begins here</Hand>
				<Overlay><Arrow x1={900} y1={420} x2={950} y2={540} at={c.preg + 20} color={AMBER} width={8} dur={16} head={20} /></Overlay>
				<Say at={c.food} out={c.plac - 6} x={1070} y={228} w={500} size={34} weight={700}>Food and oxygen come from the lining around the embryo.</Say>
				<Hand at={c.egg} out={c.plac - 6} x={1070} y={346} w={500} size={48}>as well as what the egg carried</Hand>
				<Say at={c.plac} x={1070} y={228} w={500} size={34} weight={700}>Once the placenta forms, they come from its mother's blood.</Say>
				<div style={{display: 'none'}}>{swap}</div>
			</div>
			{/* split card: two pins and a week between them */}
			<div style={{position: 'absolute', inset: 0, opacity: bIn}}>
				<TractPair p={p} thin={thin} />
				<Overlay>
					<circle cx={pin1[0]} cy={pin1[1]} r={r} fill={TEAL} stroke="#fff" strokeWidth={3} opacity={prog(f, c.notfert + 10, 12)} />
					<circle cx={pin2[0]} cy={pin2[1]} r={r} fill={AMBER} stroke="#fff" strokeWidth={3} opacity={prog(f, c.week + 10, 12) * lineOut} />
					<g opacity={lineOut}>
						<DrawPath d="M780,500 L1790,500" at={c.notfert + 10} dur={30} color={INK_SOFT} width={6} />
						<circle cx={820} cy={500} r={22} fill={TEAL} opacity={prog(f, c.notfert + 20, 12)} />
						<circle cx={1750} cy={500} r={22} fill={AMBER} opacity={prog(f, c.week + 20, 12)} />
						<Bracket x1={820} x2={1750} y={440} at={c.week} down />
					</g>
					<Label x={1285} y={410} at={c.week + 14} text="about a week" size={64} color={AMBER_INK} out={c.ready - 8} />
					<Label x={820} y={590} at={c.notfert + 20} text="fertilisation" size={58} color={TEAL_INK} anchor="start" out={c.ready - 8} />
					<Label x={1750} y={590} at={c.week + 20} text="implantation" size={58} color={AMBER_INK} anchor="end" out={c.ready - 8} />
					<Label x={820} y={640} at={c.notfert + 24} text="in the oviduct" size={40} color={INK} anchor="start" font="body" weight={600} out={c.ready - 8} />
					<Label x={1750} y={640} at={c.uterus} text="in the uterus" size={40} color={INK} anchor="end" font="body" weight={600} out={c.ready - 8} />
					{/* the blastocyst that cannot attach */}
					<g opacity={prog(f, bAt, 10) * (1 - prog(f, c.nop + 80, 14))}>
						<circle cx={bx} cy={by} r={r} fill="#eef2f8" stroke="#6f7fa8" strokeWidth={5} />
						<circle cx={bx + r * 0.3} cy={by + r * 0.35} r={r * 0.32} fill="#f3dcc2" />
					</g>
					<Cross x={hit[0]} y={hit[1] + 8} s={1.1} at={c.cant + 14} />
				</Overlay>
				<Hand at={c.nop} x={510} y={790} size={66} w={900}><div style={{textAlign: 'center'}}>no attachment, no pregnancy</div></Hand>
			</div>
			<Rail upTo={3} newAt={c.attach} />
		</>
	);
};

// ---------- 6. The message: hCG keeps the corpus luteum going ----------
const SLOT_T: TP = {x: 1250, y: 236, w: 560};
const SLOT_E = {x: 1250, y: 600, w: 560};
const EMB: [number, number] = [SLOT_E.x + 0.488 * SLOT_E.w, SLOT_E.y + 0.448 * ((SLOT_E.w * 500) / 1427)];
const FOLL: [number, number] = [SLOT_T.x + 0.358 * SLOT_T.w, SLOT_T.y + 0.635 * ((SLOT_T.w * 222) / 444)];
const VP: [number, number][] = [[EMB[0] + 30, EMB[1] - 60], [1700, 580], [1730, 470], [1600, 420], [FOLL[0] + 34, FOLL[1] + 6]];
export const SceneHcg: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('hcg'), {
		short: 'short-lived', month: 'In a month with no pregnancy', breaks: 'breaks down', two: 'about two weeks', falls: 'Progesterone falls', shed: 'the lining is shed', period: "That's a period", happened: 'If that happened now', ends: 'the pregnancy would end',
		sends: 'the embryo sends a message', implanting: 'Once it is implanting', hcg: 'a hormone called hCG', carries: 'The blood carries hCG', ovary: 'to the ovary', tells: 'tells the corpus luteum', keep: 'keep working', flowing: 'So progesterone keeps flowing', stays: 'the lining stays',
		acts: 'hCG acts on the corpus luteum', prog: 'Progesterone acts on the lining', test: 'pregnancy test detects',
	});
	const phaseAB = vis(f, 0, c.acts - 26);
	const thin = prog(f, c.shed, 26);
	const g = prog(f, c.happened + 12, 40) * (1 - prog(f, c.sends - 6, 20));
	const emberIn = prog(f, c.happened - 4, 16);
	const toOvary = prog(f, c.sends - 4, 16);
	const lutealGlow = prog(f, c.tells, 20);
	const ck = prog(f, c.acts - 30, 40);
	const gx = interpolate(ck, [0, 1], [96, 1170]), gy = interpolate(ck, [0, 1], [250, 640]), gs = interpolate(ck, [0, 1], [1, 0.62]);
	const keepGlow = prog(f, c.stays, 16);
	return (
		<>
			<Heading items={[[0, 'The corpus luteum is short-lived'], [c.sends, 'The embryo sends a message'], [c.acts, 'hCG and progesterone: two jobs']]} size={70} />
			<Overlay>
				<CurveGraph x={gx} y={gy} s={gs} labels={ck < 0.3} axesAt={4} ovAt={10} riseAt={12} riseDur={50} markAt={c.two} markText="about 2 weeks after ovulation" fallAt={c.breaks} fallText="no pregnancy" onAt={c.keep} onText="hCG: carries on" />
			</Overlay>
			{/* right side insets */}
			<div style={{position: 'absolute', inset: 0, opacity: phaseAB}}>
				<div style={{position: 'absolute', inset: 0, opacity: 1 - toOvary}}><TractPair p={SLOT_T} thin={thin} /></div>
				<div style={{position: 'absolute', inset: 0, opacity: toOvary}}><PArt a={PL.ovary} x={SLOT_T.x} y={SLOT_T.y} w={SLOT_T.w} style={{borderRadius: 16}} /></div>
				<div style={{position: 'absolute', inset: 0, opacity: emberIn}}>
					<PArt a={PL.im3crop} x={SLOT_E.x} y={SLOT_E.y} w={SLOT_E.w} style={{filter: `grayscale(${g}) opacity(${1 - 0.45 * g})`}} />
				</div>
				<GreyTag at={c.shed + 12} out={c.sends - 6} x={SLOT_T.x} y={SLOT_T.y + 300} text="lining shed" />
				<GreyTag at={c.ends} out={c.sends - 6} x={SLOT_E.x} y={SLOT_E.y + 206} text="pregnancy ends" />
				<Overlay>
					<g opacity={toOvary}>
						<circle cx={FOLL[0]} cy={FOLL[1]} r={40} fill="#f2c81f" opacity={0.6 * lutealGlow} />
						<circle cx={FOLL[0]} cy={FOLL[1]} r={42} fill="none" stroke={YELLOW} strokeWidth={8} opacity={lutealGlow} />
						<Vessel pts={VP} at={c.carries - 6} dur={40} width={11} />
						<Dots pts={VP} at={c.carries} n={7} period={70} color={TEAL} r={10} end={c.keep + 30} />
						<Label x={1766} y={540} at={c.hcg} text="hCG" size={64} color={TEAL_INK} />
					</g>
					<g opacity={emberIn * (1 - prog(f, c.acts - 26, 12))}>
						{f >= c.implanting ? <circle cx={EMB[0]} cy={EMB[1]} r={52 + 10 * Math.sin(f / 6)} fill="none" stroke={TEAL} strokeWidth={7} opacity={0.7 * prog(f, c.implanting, 14)} /> : null}
					</g>
					<Label x={SLOT_E.x + 210} y={SLOT_E.y - 22} at={c.sends} text="embryo" size={44} color={TEAL_INK} out={c.acts - 26} />
					<Label x={SLOT_T.x + 280} y={SLOT_T.y - 18} at={c.sends + 6} text="ovary, with the corpus luteum" size={40} color={INK} out={c.acts - 26} />
				</Overlay>
				<Hand at={c.stays} out={c.acts - 26} x={SLOT_E.x - 8} y={SLOT_E.y + 206} size={46} color={TEAL_INK}><div style={{opacity: keepGlow}}>the lining stays thick</div></Hand>
			</div>
			{/* two jobs: hCG acts on the corpus luteum, progesterone acts on the lining */}
			<Chain f={f} a={c.acts - 14} b={c.acts} cc={c.prog} />
			<Fade at={c.test} out={c.test + 400}><g /></Fade>
			<Enter at={c.test - 20} style={{position: 'absolute', left: 96, top: 640}}>
				<svg width={420} height={120}><TestStick x={0} y={0} w={400} line={1} /></svg>
			</Enter>
			<Hand at={c.test} x={96} y={778} size={50} w={560}>this is what a test detects</Hand>
			<Overlay><Arrow x1={300} y1={640} x2={262} y2={588} at={c.test + 10} color={TEAL} width={7} dur={18} head={18} /></Overlay>
			<Rail upTo={4} newAt={c.sends} />
		</>
	);
};

/** Embryo, hCG, corpus luteum, progesterone, lining. */
const Chain: React.FC<{f: number; a: number; b: number; cc: number}> = ({a, b, cc}) => {
	const f = useCurrentFrame();
	return (
		<>
			<Enter at={a} style={{position: 'absolute', left: 130, top: 270}}><RoundPlate a={PL.cl5} x={0} y={0} d={230} ring={TEAL} /></Enter>
			<Enter at={b} style={{position: 'absolute', left: 760, top: 300}}>
				<div style={{width: 320, height: 160, borderRadius: 26, overflow: 'hidden', position: 'relative', border: `6px solid ${YELLOW}`}}><PArt a={PL.ovary} x={0} y={0} w={320} /></div>
			</Enter>
			<Enter at={cc} style={{position: 'absolute', left: 1450, top: 255}}>
				<div style={{width: 200, height: 224, borderRadius: 26, overflow: 'hidden', position: 'relative', border: `6px solid ${AMBER}`}}><PArt a={PL.uterus} x={0} y={0} w={200} /></div>
			</Enter>
			<Overlay>
				<Arrow x1={400} y1={386} x2={740} y2={386} at={b} color={TEAL} width={10} dur={22} head={26} />
				<Arrow x1={1100} y1={386} x2={1430} y2={386} at={cc} color={AMBER} width={10} dur={22} head={26} />
				<Label x={570} y={340} at={b + 10} text="hCG" size={72} color={TEAL_INK} />
				<Label x={1265} y={340} at={cc + 10} text="progesterone" size={64} color={AMBER_INK} />
				<Label x={245} y={548} at={a + 6} text="embryo" size={46} color={TEAL_INK} />
				<Label x={920} y={518} at={b + 6} text="corpus luteum" size={46} color="#a9760a" />
				<Label x={1550} y={548} at={cc + 6} text="lining" size={46} color={INK} />
			</Overlay>
			<div style={{display: 'none'}}>{[f, FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, AMBER, Cross, DrawPath, PSeq, Say, along, pathOf, TEAL, O2, Rail, Heading, tt, interpolate].length}</div>
		</>
	);
};
