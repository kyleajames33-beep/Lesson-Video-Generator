import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Callout} from '../../kit';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, Brain, Circled, CREAM_LINE, DrawPath, Dots, Enter, FONT_DISPLAY, FONT_HAND, Hand, Heading, INK, INK_SOFT, Label, LoopIcon, MAGENTA, MAGENTA_INK, MilkGland, NIPPLE, JUNCT, SAC_LABEL, Overlay, PArt, PL, Pill, PIT, prog, PROLACTIN, S, Say,
	SACS, SLATE_INK, Vein, VIOLET, VIOLET_INK, gm, pathOf, along, Scribble, Cross,
} from './shared';

// ---------- 5. The Explain answer ----------
const Clause: React.FC<{at: number; children: React.ReactNode}> = ({at, children}) => (
	<Enter at={at} dy={14}><div style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 34, color: INK, lineHeight: 1.25, marginBottom: 20}}>{children}</div></Enter>
);
const AnswerCard: React.FC<{x: number; at: number; title: string; k: 'neg' | 'pos'; lit: number; children: React.ReactNode}> = ({x, at, title, k, lit, children}) => {
	const f = useCurrentFrame();
	return (
		<Enter at={at} style={{position: 'absolute', left: x, top: 306, width: 830}}>
			<div style={{height: 580, borderRadius: 26, background: '#fffdf8', border: '1.5px solid rgba(60,45,20,0.10)', boxShadow: '0 18px 40px rgba(60,45,20,0.10)', boxSizing: 'border-box', padding: '22px 34px'}}>
				<div style={{display: 'flex', alignItems: 'center', gap: 20, marginBottom: 22}}>
					<svg width={76} height={76} viewBox="0 0 76 76"><LoopIcon k={k} cx={38} cy={38} r={32} o={0.2 + 0.8 * prog(f, lit, 14)} /></svg>
					<span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 62, color: INK, lineHeight: 1}}>{title}</span>
				</div>
				{children}
			</div>
		</Enter>
	);
};
export const SceneExplain: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('explain-answer'), {
		here: 'Here is an Explain answer', first: 'First, the negative feedback', during: 'During pregnancy', thisN: 'This is negative feedback', bec1: ['because', 1], nofoll: 'so no follicles mature',
		second: 'Second, the positive feedback', birth: 'At birth', thisP: 'This is positive feedback', bec2: ['because', 2], more: 'which stretch the cervix more', cont: 'It continues until',
	});
	void f;
	return (
		<>
			<Heading items={[[0, 'Write the answer one stage at a time']]} size={70} />
			<Enter at={c.here + 20} style={{position: 'absolute', left: 96, top: 190, width: 1728}}>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 34, color: AMBER_INK, lineHeight: 1.2}}>Explain how negative and positive feedback are both used in the hormonal control of pregnancy and birth.</div>
			</Enter>
			<AnswerCard x={96} at={c.first} title="Pregnancy: negative feedback" k="neg" lit={c.thisN}>
				<Clause at={c.during}>During pregnancy, the corpus luteum and then the placenta keep progesterone high.</Clause>
				<Clause at={c.thisN}>This is negative feedback, <Circled at={c.bec1}>because</Circled> high progesterone reduces the pituitary's release of FSH and LH,</Clause>
				<Clause at={c.nofoll}>so no follicles mature and no egg is released.</Clause>
			</AnswerCard>
			<AnswerCard x={994} at={c.second} title="Birth: positive feedback" k="pos" lit={c.thisP}>
				<Clause at={c.birth}>At birth, the baby's head stretches the cervix, which makes the pituitary release oxytocin.</Clause>
				<Clause at={c.thisP}>This is positive feedback, <Circled at={c.bec2}>because</Circled> oxytocin strengthens the contractions, which stretch the cervix more and release more oxytocin.</Clause>
				<Clause at={c.cont}>It continues until the baby is born, when the stretch stops.</Clause>
			</AnswerCard>
		</>
	);
};

// ---------- the gland placement shared by the two milk scenes ----------
const GX = 330, GY = 250, GS = 1.15;
const g = gm(GX, GY, GS);
const SAC_S = SACS.map(s => g(s[0], s[1]));
const NIP = g(NIPPLE[0], NIPPLE[1]);
const JUNC = g(JUNCT[0], JUNCT[1]);
const BLOODP: [number, number][] = [[PIT[0] - 20, PIT[1] + 30], [1450, 330], [1000, 280], [750, 300]];

// ---------- 6a. Milk: two hormones, two jobs ----------
export const SceneMilkJobs: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('milk-jobs'), {
		more: 'One more hormone job', feed: 'feeding the baby', prol: 'Prolactin makes the breast', milk: 'produce milk', oxy: 'Oxytocin makes tiny', cells: 'tiny muscle cells', sq: 'squeeze', out: 'pushes the milk out',
	});
	const fill = 0.1 + 0.9 * prog(f, c.prol + 24, c.milk - c.prol + 40);
	const cres = prog(f, c.cells, 20);
	const sqz = f > c.sq ? 0.5 + 0.5 * Math.sin((f - c.sq) / 3.5) : 0;
	const duct: [number, number][] = [JUNC, NIP];
	return (
		<>
			<Heading items={[[0, 'Milk: two hormones, two jobs']]} size={72} />
			<Hand at={c.more + 10} out={c.prol - 8} x={330} y={196} size={60} color={AMBER_INK}>after the birth: feeding the baby</Hand>
			<Overlay>
				<Brain at={0} />
				<MilkGland x={GX} y={GY} s={GS} fill={fill} crescent={cres} squeeze={sqz} draw={prog(f, c.feed, 30)} idp="mj" />
				<Vein d={pathOf(BLOODP)} at={c.prol - 10} dur={36} o={0.6} />
				<Dots pts={BLOODP} at={c.prol + 4} n={6} period={80} color={PROLACTIN} r={11} end={c.milk} />
				<Dots pts={BLOODP} at={c.sq - 14} n={6} period={80} color={VIOLET} r={11} end={c.out} />
				<Dots pts={duct} at={c.sq + 12} n={7} period={50} color="#e8c66a" r={8} end={c.out + 60} />
				{SAC_S.map((p, i) => <circle key={i} cx={p[0]} cy={p[1]} r={0} />)}
			</Overlay>
			<Hand at={c.prol} x={1200} y={540} size={54} color={PROLACTIN}>prolactin: makes milk</Hand>
			<Hand at={c.out} x={1200} y={630} size={54} color={VIOLET_INK}>oxytocin: squeezes the milk out</Hand>
			<Overlay>
				<Label x={SAC_S[SAC_LABEL][0]} y={SAC_S[SAC_LABEL][1] - 100} at={c.cells + 20} text="muscle cells" size={36} color={VIOLET_INK} />
			</Overlay>
			<div style={{display: 'none'}}>{[AMBER, FONT_HAND, INK, SLATE_INK, along, Callout, Scribble, Cross, Say, Pill, MAGENTA, CREAM_LINE, INK_SOFT, Enter, DrawPath].length}</div>
		</>
	);
};

// ---------- 6b. Milk: the trigger and the hold-back ----------
const PLT = {x: 1560, y: 480, w: 280};
const PLH = (PLT.w * 1439) / 1143;
const NERVEM: [number, number][] = [[NIP[0] + 30, NIP[1]], [1300, 560], [1500, 470], [1600, 330]];
const FROM_PL: [number, number][] = [[PLT.x + 10, 640], [1350, 700], [1000, 690], [770, 620]];
export const SceneMilkTrigger: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('milk-trigger'), {
		suckles: 'when the baby suckles', nerve: 'nerve signals from the nipple', pit: 'the pituitary releases them', plenty: 'Plenty of milk', during: 'during pregnancy', hold: 'hold it back',
		placenta: 'When the placenta leaves', fall: 'those levels fall', prod: 'milk production',
	});
	const down = prog(f, c.during, 20);
	const up = prog(f, c.fall + 10, 80);
	const fill = 0.8 - 0.7 * down + 0.7 * up;
	const wash = 1 - prog(f, c.placenta + 10, 24);
	const band = prog(f, c.during + 20, 14) * (1 - prog(f, c.fall + 20, 30));
	const pulse = Math.sin(Math.PI * prog(f, c.pit, 26));
	return (
		<>
			<Heading items={[[0, 'What starts the milk, and what holds it back']]} size={70} />
			<Overlay>
				<Brain at={0} pulse={pulse} />
				<MilkGland x={GX} y={GY} s={GS} fill={fill} crescent={0} draw={1} idp="mt" />
				<DrawPath d={pathOf(NERVEM)} at={c.nerve} dur={40} color={AMBER_INK} width={5} dash="12 10" />
				<Dots pts={NERVEM} at={c.suckles + 8} n={3} period={70} color={AMBER} r={11} end={c.nerve + 70} />
				<Vein d={pathOf(BLOODP)} at={c.pit - 4} dur={30} o={0.6} />
				<Dots pts={BLOODP} at={c.pit} n={4} period={80} color={PROLACTIN} r={11} end={c.plenty - 20} />
				<Dots pts={BLOODP} at={c.pit + 26} n={4} period={80} color={VIOLET} r={11} end={c.plenty - 20} />
				{/* the hold-back band across the gland's entrance */}
				<g opacity={band}>
					{Array.from({length: 9}, (_, i) => <circle key={i} cx={760 + (i % 2) * 22 + Math.sin(f / 9 + i) * 3} cy={470 + i * 20} r={9} fill={i % 2 ? MAGENTA : AMBER} stroke="#fff" strokeWidth={2} />)}
				</g>
				<Dots pts={FROM_PL} at={c.during + 4} n={4} period={90} color={AMBER} r={9} end={c.hold} />
				<Dots pts={FROM_PL} at={c.during + 30} n={4} period={90} color={MAGENTA} r={9} end={c.hold} />
			</Overlay>
			<Enter at={c.during} style={{position: 'absolute', inset: 0}}>
				<PArt a={PL.fetus} x={PLT.x} y={PLT.y} w={PLT.w} />
				<Overlay><ellipse cx={PLT.x + 0.78 * PLT.w} cy={PLT.y + 0.37 * PLH} rx={0.17 * PLT.w} ry={0.22 * PLH} fill={MAGENTA} opacity={0.35 * wash} /></Overlay>
			</Enter>
			<Pill at={c.hold - 10} out={c.fall + 20} x={820} y={420} size={44}>held back</Pill>
			<Overlay>
				<g opacity={prog(f, c.during + 10, 12)}>
					<circle cx={1566} cy={424} r={9} fill={AMBER} stroke="#fff" strokeWidth={2} />
					<text x={1586} y={433} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 34}} fill={AMBER_INK}>progesterone</text>
					<circle cx={1566} cy={462} r={9} fill={MAGENTA} stroke="#fff" strokeWidth={2} />
					<text x={1586} y={471} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 34}} fill={MAGENTA_INK}>oestrogen</text>
				</g>
			</Overlay>
			<Hand at={c.fall} x={1130} y={700} w={420} size={40} color={AMBER_INK}>levels fall, milk production increases</Hand>
			<Label2 />
			<div style={{display: 'none'}}>{[AMBER, FONT_HAND, INK, SLATE_INK, along, Callout, Scribble, Cross, Say, MAGENTA_INK, CREAM_LINE, INK_SOFT, c.prod].length}</div>
		</>
	);
};
const Label2: React.FC = () => null;
