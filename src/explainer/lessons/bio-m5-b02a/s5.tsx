import React, {useMemo} from 'react';
import {useCurrentFrame} from 'remotion';
import {Countdown, rng} from '../../kit';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, ART, Art, artH, BLUE, Body, Chip, CORAL, Dial, DrawPath, EggDot, Enter, FONT_DISPLAY, FONT_HAND, GREEN, HandText, INK, INK_SOFT, EGG_LINE, Label,
	Note, Overlay, Parent, RED, S, Shield, SPERM, Trail, WATER_LINE, prog,
} from './shared';

// ---------- shared three-case board ----------
const FY = 200, FH = 600;
const CX = [96, 656, 1216];
const CW = [520, 520, 608];
const TITLES = ['Desert lizard', 'Sea turtle on a beach', 'Oysters and a dugong'];

const Badge: React.FC<{n: number}> = ({n}) => (
	<div style={{width: 54, height: 54, borderRadius: 999, background: AMBER, color: '#fff', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 30, display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none'}}>{n}</div>
);

const Frame: React.FC<{i: number; at: number; h?: number; children?: React.ReactNode}> = ({i, at, h = FH, children}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 16);
	return (
		<div style={{position: 'absolute', left: CX[i], top: FY, width: CW[i], height: h, opacity: p, transform: `translateY(${(1 - p) * 18}px)`, background: '#fffdf8', borderRadius: 24, boxShadow: '0 18px 40px rgba(60,45,20,0.10), 0 2px 6px rgba(60,45,20,0.06)', border: '1.5px solid rgba(60,45,20,0.08)', boxSizing: 'border-box'}}>
			<div style={{display: 'flex', alignItems: 'center', gap: 16, padding: '20px 24px 0'}}>
				<Badge n={i + 1} />
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, color: INK, lineHeight: 1}}>{TITLES[i]}</div>
			</div>
			{children}
		</div>
	);
};

const L1 = {x: CX[0] + 40, y: FY + 90, w: 440};
const L2 = {x: CX[1] + 40, y: FY + 90, w: 440};
const OY = {x: CX[2] + 24, y: FY + 100, w: 250};
const DU = {x: CX[2] + 296, y: FY + 120, w: 290};

const Arts: React.FC<{show: [number, number, number]}> = ({show}) => {
	const f = useCurrentFrame();
	return (
		<>
			<Art a={ART.lizard} x={L1.x} y={L1.y} w={L1.w} style={{opacity: prog(f, show[0], 16)}} />
			<Art a={ART.turtle} x={L2.x} y={L2.y} w={L2.w} style={{opacity: prog(f, show[1], 16)}} />
			<Art a={ART.oyster} x={OY.x} y={OY.y} w={OY.w} style={{opacity: prog(f, show[2], 16)}} />
			<Art a={ART.dugong} x={DU.x} y={DU.y} w={DU.w} style={{opacity: prog(f, show[2] + 10, 16)}} />
		</>
	);
};

const Txt: React.FC<{x: number; y: number; w: number; at: number; size?: number; color?: string; weight?: number; children: React.ReactNode}> = ({x, y, w, at, size = 29, color = INK, weight = 600, children}) => (
	<Enter at={at} style={{position: 'absolute', left: x, top: y, width: w}}><Body size={size} weight={weight} color={color}>{children}</Body></Enter>
);

// ---------- 9. Attempt ----------
export const SceneAttempt: React.FC = () => {
	const scene = S('attempt');
	const c = cues(scene, {
		turn: 'Your turn', one: 'One', c1: 'a lizard lives', q1: 'Would you expect', two: 'Two', c2: 'a sea turtle lays', q2: 'Where did the sperm', three: ['three', 2], c3: 'oysters release',
		c3b: 'A storm kills', c3c: 'adults survive in both', q3: 'Which would recover', pause: 'Pause the video',
	});
	const hold = scene.responseHold ?? {startFrame: 1193, endFrame: 2243};
	const T = FY + 330;
	return (
		<>
			<div style={{position: 'absolute', left: 96, top: 92}}><HandText text="Your turn: three situations" at={c.turn} size={76} cps={30} /></div>
			<Frame i={0} at={c.one} />
			<Frame i={1} at={c.two} />
			<Frame i={2} at={c.three} />
			<Arts show={[c.one + 6, c.two + 6, c.three + 6]} />
			<Txt x={CX[0] + 28} y={T} w={464} at={c.c1}>A hot, dry desert. There is no standing water.</Txt>
			<Txt x={CX[0] + 28} y={T + 92} w={464} at={c.q1} size={32} weight={800} color={AMBER_INK}>External or internal fertilisation? Why?</Txt>
			<Txt x={CX[1] + 28} y={T} w={464} at={c.c2}>She lays her eggs in a sand nest on a beach.</Txt>
			<Txt x={CX[1] + 28} y={T + 92} w={464} at={c.q2} size={32} weight={800} color={AMBER_INK}>Where did the sperm and egg meet?</Txt>
			<Txt x={CX[2] + 28} y={FY + 296} w={552} at={c.c3}>Oysters release millions of eggs into the sea. A dugong has one calf and cares for it for a long time.</Txt>
			<Txt x={CX[2] + 28} y={FY + 296 + 112} w={552} at={c.c3b}>A storm kills nine in every ten of the young alive in both. <span style={{color: GREEN, fontWeight: 800}}>The adults survive in both.</span></Txt>
			<Txt x={CX[2] + 28} y={FY + 296 + 112 + 112} w={552} at={c.q3} size={32} weight={800} color={AMBER_INK}>Which recovers more slowly? Why?</Txt>
			<Enter at={c.pause} style={{position: 'absolute', left: 96, top: 850}}>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, color: INK_SOFT}}>Pause the video if you would like more time.</div>
			</Enter>
			<Overlay><Countdown start={hold.startFrame} end={hold.endFrame} x={1740} y={890} r={50} /></Overlay>
		</>
	);
};

// ---------- 10. Feedback ----------
const Stamp: React.FC<{i: number; at: number; text: string; color: string; x?: number; y?: number; size?: number}> = ({i, at, text, color, x, y, size = 34}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 12);
	const pop = 1;
	return (
		<div style={{position: 'absolute', left: CX[i] + (x ?? 120), top: FY + (y ?? 410), transform: `rotate(-5deg) scale(${pop})`, opacity: p, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, letterSpacing: 2, color, border: `5px solid ${color}`, borderRadius: 14, padding: '6px 16px', background: '#fffdf8', whiteSpace: 'nowrap'}}>{text}</div>
	);
};
const FBH = 560;
const Reason: React.FC<{i: number; at: number; at2: number; main: string; extra: string; color: string}> = ({i, at, at2, main, extra, color}) => (
	<div style={{position: 'absolute', left: CX[i], top: FY + FBH + 14, width: CW[i]}}>
		<Enter at={at}>
			<div style={{background: '#fffdf8', borderRadius: 18, padding: '10px 18px', border: `3px solid ${color}`, boxSizing: 'border-box'}}>
				<Body size={25} weight={600}>{main}</Body>
				<Enter at={at2}><Body size={25} weight={700} color={AMBER_INK} style={{marginTop: 6}}>{extra}</Body></Enter>
			</div>
		</Enter>
	</div>
);

export const SceneFeedback: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('feedback'), {
		v1: 'One, internal', w1: 'gametes would dry out', x1: 'If you said external', v2: 'Two, inside', x2: 'If you said outside', v3: 'Three, the dugong', after: 'After the storm',
		slow: 'climbs back slowly', oy: 'Each oyster adds', x3: 'If you said oysters', few: 'Having few young',
	});
	const lh = artH(ART.lizard, L1.w);
	const th = artH(ART.turtle, L2.w);
	const lp = (fx: number, fy: number): [number, number] => [L1.x + fx * L1.w, L1.y + fy * lh];
	const tp = (fx: number, fy: number): [number, number] => [L2.x + fx * L2.w, L2.y + fy * th];
	const [a0, a1] = [lp(0.78, 0.5), lp(0.4, 0.45)];
	const [t0, t1] = [tp(0.74, 0.58), tp(0.42, 0.42)];
	const sealSlow = prog(f, c.slow, 200) * 0.3;
	const oysterFast = prog(f, c.oy, 40) * 0.92;
	return (
		<>
			<div style={{position: 'absolute', left: 96, top: 92}}><HandText text="Here is how it works" at={4} size={76} cps={30} /></div>
			{[0, 1, 2].map(i => <Frame key={i} i={i} at={0} h={FBH} />)}
			<Arts show={[0, 0, 0]} />
			<Overlay>
				{/* 1: sperm placed inside the lizard */}
				<g opacity={prog(f, c.v1, 12)}>
					<path d={`M${a0[0]},${a0[1]} C${a0[0] - 60},${a0[1] + 6} ${a1[0] + 60},${a1[1] - 6} ${a1[0]},${a1[1]}`} fill="none" stroke="#f0a3b0" strokeWidth={14} strokeLinecap="round" opacity={0.55} />
					<ellipse cx={a1[0] - 6} cy={a1[1]} rx={12} ry={9} fill="#fff6e8" stroke={EGG_LINE} strokeWidth={3} />
				</g>
				<Trail d={`M${a0[0]},${a0[1]} C${a0[0] - 60},${a0[1] + 6} ${a1[0] + 60},${a1[1] - 6} ${a1[0] + 10},${a1[1]}`} at={c.w1 - 30} dur={40} width={5} arrow={[a1[0] + 10, a1[1], 180]} />
				{/* 2: sperm placed inside the turtle before the eggs are laid */}
				<g opacity={prog(f, c.v2, 12)}>
					<path d={`M${t0[0]},${t0[1]} C${t0[0] - 50},${t0[1] - 20} ${t1[0] + 50},${t1[1] + 20} ${t1[0]},${t1[1]}`} fill="none" stroke="#f0a3b0" strokeWidth={14} strokeLinecap="round" opacity={0.55} />
					<ellipse cx={t1[0] - 6} cy={t1[1]} rx={12} ry={9} fill="#fff6e8" stroke={EGG_LINE} strokeWidth={3} />
				</g>
				<Trail d={`M${t0[0]},${t0[1]} C${t0[0] - 50},${t0[1] - 20} ${t1[0] + 50},${t1[1] + 20} ${t1[0] + 10},${t1[1]}`} at={c.v2 + 20} dur={44} width={5} arrow={[t1[0] + 10, t1[1], 180]} />
				<Label x={tp(0.5, 1)[0]} y={L2.y + th + 50} at={c.v2 + 40} text="inside her, before laying" size={40} color={SPERM} />
			</Overlay>
			<Txt x={CX[0] + 28} y={FY + 330} w={464} at={c.v1} size={30} weight={700} color={INK_SOFT}>No standing water</Txt>
			{/* 3: the seesaw story as two dials */}
			<Overlay>
				<g opacity={prog(f, c.v3, 14)}>
					<rect x={CX[2] + 28} y={FY + 290} width={552} height={56} rx={16} fill="#fdecea" stroke={RED} strokeWidth={3} />
					<rect x={CX[2] + 28} y={FY + 358} width={552} height={56} rx={16} fill="#e7f3ea" stroke={GREEN} strokeWidth={3} />
				</g>
				<Label x={CX[2] + 304} y={FY + 328} at={c.v3} text="storm: 9 in 10 young die in both" size={38} color={RED} />
				<Label x={CX[2] + 304} y={FY + 396} at={c.v3 + 8} text="the adults survive in both" size={38} color={GREEN} />
				<Dial x={CX[2] + 120} y={FY + 462} r={36} p={prog(f, c.after, 10) * 0.02 + sealSlow} color={AMBER_INK} o={prog(f, c.after, 14)} />
				<Dial x={CX[2] + 488} y={FY + 462} r={36} p={prog(f, c.after, 10) * 0.02 + oysterFast} color={GREEN} o={prog(f, c.after, 14)} />
				<Label x={CX[2] + 120} y={FY + 538} at={c.slow} text="dugong: slow" size={36} color={AMBER_INK} />
				<Label x={CX[2] + 488} y={FY + 538} at={c.oy} text="oyster: fast" size={36} color={GREEN} />
			</Overlay>
			<Stamp i={0} at={c.v1} text="INTERNAL" color={BLUE} x={150} y={400} />
			<Stamp i={1} at={c.v2} text="INSIDE, BEFORE LAYING" color={BLUE} x={60} y={400} size={30} />
			<Stamp i={2} at={c.v3} text="DUGONG" color={CORAL} x={196} y={434} size={28} />
			<Reason i={0} at={c.w1 - 40} at2={c.x1} color={BLUE} main="No water, so gametes would dry out: the sperm goes inside the moist female." extra="Laying eggs is where the young grow, not where fertilisation happened." />
			<Reason i={1} at={c.v2 + 30} at2={c.x2} color={BLUE} main="Sperm and egg met inside her, before the eggs were laid." extra="Eggs on a beach is the same slip: the nest is where the young grow." />
			<Reason i={2} at={c.after} at2={c.few} color={CORAL} main="Each dugong adds about one calf, so recovery is slow. Each oyster adds millions of eggs again." extra="Few young per parent slows recovery, not lost eggs." />
		</>
	);
};

// ---------- 11. Memory ----------
export const SceneMemory: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('memory'), {
		ways: 'two ways', ext: 'External', water: 'water and numbers', lots: 'lots of eggs', timing: 'good timing', int: 'Internal', mate: 'a mate', prot: 'protection', rem: 'And remember',
		meet: 'where they meet', grow: 'not where the young grow', next: 'Next',
	});
	const cloud = useMemo(() => { const r = rng(61); return Array.from({length: 46}, () => ({x: 1480 + r() * 300, y: 250 + r() * 130, r: 5 + r() * 4})); }, []);
	return (
		<>
			<div style={{position: 'absolute', left: 96, top: 92}}><HandText text="What to remember" at={4} size={84} cps={30} /></div>
			<div style={{position: 'absolute', left: 110, top: 240, display: 'flex', gap: 26, alignItems: 'baseline', whiteSpace: 'nowrap'}}>
				<HandText text="External:" at={c.ext} size={112} cps={14} color={BLUE} />
				<HandText text="water and numbers." at={c.water} size={112} cps={14} />
			</div>
			<Chip x={140} y={382} at={c.timing} text="and good timing" size={46} color={AMBER_INK} />
			<div style={{position: 'absolute', left: 110, top: 480, display: 'flex', gap: 26, alignItems: 'baseline', whiteSpace: 'nowrap'}}>
				<HandText text="Internal:" at={c.int} size={112} cps={14} color={AMBER_INK} />
				<HandText text="a mate and protection." at={c.mate} size={112} cps={14} />
			</div>
			<Overlay>
				{[0, 1].map(i => <DrawPath key={i} d={`M1450,${236 + i * 30} q30,-22 60,0 t60,0 t60,0 t60,0 t60,0`} at={c.water + i * 8} dur={24} color={WATER_LINE} width={6} />)}
				{cloud.map((d, i) => <EggDot key={i} x={d.x} y={d.y + 40} r={d.r} o={prog(f, c.lots + (i % 14), 8)} />)}
				<Parent x={1500} y={600} s={1} color="#e8cdb0" o={prog(f, c.mate, 12)} />
				<Parent x={1640} y={600} s={1} color="#c9d6e6" flip o={prog(f, c.mate + 8, 12)} />
				<Shield x={1760} y={590} s={1.4} o={prog(f, c.prot, 12)} />
				<DrawPath d="M110,806 L1010,806" at={c.rem} dur={30} color={AMBER} width={6} />
			</Overlay>
			<div style={{position: 'absolute', left: 110, top: 690, whiteSpace: 'nowrap'}}>
				<HandText text="where they meet, not where it grows" at={c.meet} size={84} cps={20} color={GREEN} />
			</div>
			<Art a={ART.henNest} x={1450} y={700} w={330} style={{opacity: prog(f, c.grow, 16)}} />
			<Enter at={c.next} style={{position: 'absolute', right: 96, top: 98}}>
				<div style={{background: '#fffdf8', borderRadius: 999, padding: '10px 28px', boxShadow: '0 10px 24px rgba(60,45,20,0.1)'}}>
					<span style={{fontFamily: FONT_HAND, fontSize: 42, fontWeight: 700, color: INK}}>Next: plants, fungi and microbes</span>
				</div>
			</Enter>
		</>
	);
};

// ---------- 12. Key notes ----------
const NOTES = [
	'Fertilisation is the joining of a sperm and an egg to make a zygote, the first cell of a new individual.',
	'External fertilisation happens outside the bodies, usually in water (for example corals, frogs, salmon). It needs water, good timing and huge numbers of eggs, and the parents usually give little care.',
	'Internal fertilisation happens inside the female. It protects the gametes, so far fewer eggs are needed (males still make plenty of sperm). It suits life on land. Mammals and birds usually have few young and give more parental investment.',
	'Fertilisation is where the gametes meet, not where the young develop (a hen fertilises internally, then lays the egg). Few young per parent means slow recovery after a bad year, because each adult adds only a few young.',
];
export const SceneNotes: React.FC = () => (
	<>
		<div style={{position: 'absolute', left: 96, top: 92}}><HandText text="Key notes: what to write in your book" at={2} size={72} cps={40} /></div>
		<div style={{position: 'absolute', left: 120, top: 220, width: 1680}}>
			{NOTES.map((n, i) => (
				<Enter key={i} at={14 + i * 10} style={{display: 'flex', gap: 22, marginBottom: 14}}>
					<div style={{flex: 'none', width: 16, height: 16, marginTop: 13, borderRadius: 999, background: AMBER}} />
					<Body size={34}>{n}</Body>
				</Enter>
			))}
			<Enter at={60} style={{marginTop: 18, background: '#fffdf8', border: `4px solid ${AMBER}`, borderRadius: 24, padding: '14px 30px', width: 'fit-content'}}>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 64, color: AMBER_INK, lineHeight: 1.1}}>External: water and numbers.</div>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 64, color: BLUE, lineHeight: 1.1}}>Internal: a mate and protection.</div>
			</Enter>
		</div>
	</>
);
