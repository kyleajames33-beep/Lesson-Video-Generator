import React, {useMemo} from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {Callout, Mark, rng} from '../../kit';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, ART, Art, artH, BLUE, Body, Card, Chip, DrawPath, Droplet, EGG, EGG_LINE, EggDot, Enter, FONT_HAND, GREEN, Heading, INK, INK_SOFT, Label,
	Note, Overlay, Parent, RED, S, Scribble, SharkIcon, Shield, SPERM, SpermDot, Trail, WATER, WATER_LINE, prog,
} from './shared';

// ---------- 5. Internal fertilisation ----------
export const SceneInternal: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('internal'), {
		int: 'internal fertilisation', male: 'The male places', inside: "inside the female's body", fert: 'is fertilised there', moist: 'moist, protected', dry: "can't dry out", eaten: "can't be eaten",
		short: 'short distance', almost: 'Almost every egg', fewer: 'far fewer eggs', males: 'Males still make', matters: 'The number that matters', way: 'the way mammals', land: 'dry land', sharks: 'like sharks',
		cost: 'The cost', find: 'find each other', time: 'takes time',
	});
	const PX = 780, PW = 1000, PY = 300;
	const ph = artH(ART.lizard, PW);
	const L = (fx: number, fy: number): [number, number] => [PX + fx * PW, PY + fy * ph];
	const [tx0, ty0] = L(0.78, 0.5), [tx1, ty1] = L(0.58, 0.49), [tx2, ty2] = L(0.4, 0.45), [ex, ey] = L(0.33, 0.44);
	const mini = useMemo(() => { const r = rng(31); return Array.from({length: 46}, (_, i) => ({x: 120 + r() * 480, y: 290 + r() * 150, keep: i < 3})); }, []);
	const dimField = 1 - 0.72 * prog(f, c.almost, 16);
	const walk = prog(f, c.find, 50);
	const sperm = useMemo(() => { const r = rng(8); return Array.from({length: 22}, () => ({x: 230 + r() * 150, y: 600 + r() * 90, a: r() * 360})); }, []);
	return (
		<>
			<Heading size={80} items={[[6, 'The second way'], [c.int, 'Internal fertilisation']]} />
			{/* the lizard and the inside of the female */}
			<Art a={ART.lizard} x={PX} y={PY} w={PW} style={{opacity: prog(f, c.male - 20, 18)}} />
			<Overlay>
				<g opacity={prog(f, c.inside, 14) * (1 - 0.0)}>
					<path d={`M${tx0},${ty0} C${tx1},${ty1 + 20} ${tx2},${ty2 - 20} ${ex},${ey}`} fill="none" stroke="#f0a3b0" strokeWidth={26} strokeLinecap="round" opacity={0.55} />
					<path d={`M${tx0},${ty0} C${tx1},${ty1 + 20} ${tx2},${ty2 - 20} ${ex},${ey}`} fill="none" stroke="#c4586b" strokeWidth={4} strokeLinecap="round" strokeDasharray="10 8" />
					<ellipse cx={ex - 8} cy={ey} rx={22} ry={17} fill="#fff6e8" stroke={EGG_LINE} strokeWidth={4} />
				</g>
				<Label x={1560} y={360} at={c.inside} text="inside the female" size={46} color="#c4586b" />
				<Trail d={`M${tx0},${ty0} C${tx1},${ty1 + 20} ${tx2},${ty2 - 20} ${ex + 18},${ey}`} at={c.male + 10} dur={70} arrow={[ex + 18, ey, 180]} />
				<Callout from={[ex - 30, ey]} to={[760, 600]} at={c.fert} text="fertilised here" color={GREEN} align="right" size={44} />
				<Scribble cx={(tx1 + ex) / 2} cy={(ty1 + ey) / 2} rx={150} ry={50} at={c.short} seed={13} />
				<Callout from={[(tx1 + ex) / 2 + 40, (ty1 + ey) / 2 - 40]} to={[1420, 420]} at={c.short + 8} text="only a short swim" color={AMBER_INK} size={44} />
				{/* shark */}
				<g opacity={prog(f, c.sharks, 12)}><SharkIcon x={1640} y={235} s={0.8} /></g>
				<Label x={1640} y={290} at={c.sharks} text="sharks too" size={40} color={INK_SOFT} />
				{/* the mini loss field from scene 4, dimmed */}
				<rect x={96} y={260} width={560} height={200} rx={22} fill={WATER} stroke={WATER_LINE} strokeWidth={3} opacity={prog(f, c.moist, 16)} />
				<g opacity={prog(f, c.moist, 16)}>
					{mini.map((d, i) => <EggDot key={i} x={d.x - 40 + 20} y={d.y - 20} r={7} o={d.keep ? 1 : dimField} />)}
				</g>
				<g opacity={prog(f, c.fewer, 12)}>
					{[0, 1, 2].map(i => <EggDot key={i} x={200 + i * 120} y={360} r={26} />)}
				</g>
				<Label x={376} y={256} at={c.moist} text="external: huge numbers" size={38} color={INK_SOFT} />
				<Label x={376} y={496} at={c.fewer} text="far fewer eggs needed" size={48} color={EGG_LINE} />
				{/* males */}
				<Parent x={150} y={645} s={1.3} color="#c9d6e6" o={prog(f, c.males, 12)} />
				{sperm.map((s, i) => <SpermDot key={i} x={s.x + 60} y={s.y} s={0.7} rot={s.a} o={prog(f, c.males + 6 + i * 2, 8)} />)}
				<Label x={150} y={740} at={c.males} text="males still make plenty of sperm" size={42} color={SPERM} anchor="start" />
				<Label x={150} y={790} at={c.matters} text="the number that differs: eggs" size={46} color={EGG_LINE} anchor="start" />
				{/* the cost */}
				<Parent x={interpolate(walk, [0, 1], [160, 330])} y={890} s={0.9} color="#e8cdb0" o={prog(f, c.cost, 12)} />
				<Parent x={interpolate(walk, [0, 1], [640, 480])} y={890} s={0.9} color="#c9d6e6" flip o={prog(f, c.cost, 12)} />
				<Label x={410} y={950} at={c.time} text="find, mate: time and energy" size={42} color={RED} />
			</Overlay>
			{/* the conditions for the gametes */}
			<Chip x={780} y={850} at={c.dry} text="can't dry out" size={42} color={BLUE} />
			<Chip x={1130} y={850} at={c.eaten} text="can't be eaten" size={42} color={GREEN} />
			<Chip x={800} y={218} at={c.way} text="mammals, birds, reptiles" size={44} color={AMBER_INK} />
			<Chip x={1500} y={850} at={c.land} text="dry land" size={42} color={AMBER_INK} />
		</>
	);
};

// ---------- 6. The trap ----------
export const SceneTrap: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('trap'), {
		trap: 'a trap', hen: 'A hen', lays: 'lays an egg', shell: 'hard shell', outside: 'outside her body', q: 'So is that', no: 'No', reach: 'has to reach', inside: 'inside the hen',
		before: 'before the shell', forms: 'shell forms', fert: 'Fertilisation is', where: 'where the sperm', grows2: 'not where', grows: 'where the young one', sohen: 'So a hen', internal: 'fertilises internally', chick: 'chick develops',
		seal: 'A seal', sealboth: 'both inside', frog: 'a frog', frogboth: 'both outside', two: 'Two different questions',
	});
	const A = 1 - prog(f, c.fert - 8, 16);
	const nestP = prog(f, c.hen, 16) * (1 - prog(f, c.reach - 6, 14));
	const cutP = prog(f, c.reach - 6, 14);
	const HX = 190, HY = 290, HW = 560;
	const hh = artH(ART.hen, HW);
	const P = (fx: number, fy: number): [number, number] => [HX + fx * HW, HY + fy * hh];
	const [yx, yy] = P(0.34, 0.31);
	const [s0x, s0y] = P(0.8, 0.62);
	const rows = [
		{art: ART.henNest, w: 250, at: c.sohen, m: ['inside her', c.internal], g: ['outside her (the chick)', c.chick], tint: AMBER},
		{art: ART.seal, w: 250, at: c.seal, m: ['inside her', c.sealboth], g: ['inside her', c.sealboth + 12], tint: BLUE},
		{art: ART.frog, w: 250, at: c.frog, m: ['outside the body', c.frogboth], g: ['outside the body', c.frogboth + 12], tint: BLUE},
	];
	const RY = (i: number) => 330 + i * 200;
	return (
		<>
			<Heading size={80} items={[[6, 'Here is a trap'], [c.fert, 'Two different questions']]} />
			<div style={{position: 'absolute', inset: 0, opacity: A}}>
				<Art a={ART.henNest} x={170} y={290} w={720} style={{opacity: nestP}} />
				<Art a={ART.hen} x={HX} y={HY} w={HW} style={{opacity: cutP}} />
				<Overlay>
					<Label x={640} y={820} at={c.outside} text="egg laid outside her body" size={50} color={AMBER_INK} out={c.reach - 6} />
					<g opacity={cutP}>
						<Trail d={`M${s0x},${s0y} C${P(0.7, 0.72)[0]},${P(0.7, 0.72)[1]} ${P(0.6, 0.5)[0]},${P(0.6, 0.6)[1]} ${P(0.5, 0.6)[0]},${P(0.5, 0.6)[1]} S${P(0.4, 0.5)[0]},${P(0.4, 0.45)[1]} ${yx + 14},${yy + 14}`} at={c.reach + 4} dur={60} arrow={[yx + 14, yy + 14, 215]} />
						<ellipse cx={yx} cy={yy} rx={0} ry={0} />
						<ellipse cx={yx} cy={yy} rx={50} ry={60} fill="none" stroke={INK} strokeWidth={6} opacity={prog(f, c.forms, 16)} strokeDasharray="1 0" />
					</g>
					<Label x={yx - 20} y={yy - 80} at={c.forms} text="then the shell forms" size={44} color={AMBER_INK} />
				</Overlay>
				<Card x={1000} y={300} w={800} at={c.q} pad="18px 30px">
					<Body size={46} weight={700}>A hen lays a hard-shelled egg outside her body.</Body>
					<Body size={46} weight={800} color={AMBER_INK} style={{marginTop: 10}}>So is that external fertilisation?</Body>
				</Card>
				<Enter at={c.no} style={{position: 'absolute', left: 1000, top: 545}}>
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 130, color: RED, transform: 'rotate(-4deg)', lineHeight: 1}}>No.</div>
				</Enter>
				<Chip x={1000} y={680} at={c.inside} text="sperm meets egg inside the hen" size={50} color={SPERM} />
				<Chip x={1000} y={780} at={c.before} text="then the shell forms" size={50} color={AMBER_INK} />
			</div>
			{/* the grid */}
			<div style={{position: 'absolute', inset: 0, opacity: prog(f, c.fert, 16)}}>
				<Enter at={c.fert} style={{position: 'absolute', left: 520, top: 235}}><div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 50, color: SPERM}}>Where do the gametes meet?</div></Enter>
				<Enter at={c.fert} style={{position: 'absolute', left: 1180, top: 235}}><div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 50, color: GREEN}}>Where does the young grow?</div></Enter>
				<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
					<DrawPath d="M520,292 L1000,292" at={c.where} dur={16} color={SPERM} width={7} />
					<DrawPath d="M1180,292 L1700,292" at={c.grows} dur={16} color={GREEN} width={7} />
				</svg>
			</div>
			{rows.map((r, i) => (
				<React.Fragment key={i}>
					<Card x={96} y={RY(i)} w={1728} h={176} at={c.fert + 6 + i * 6} pad="0">{null}</Card>
					<Enter at={c.fert + 16 + i * 6} out={r.m[1] as number} style={{position: 'absolute', left: 560, top: RY(i) + 40}}><div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 90, color: '#d8cdb8'}}>?</div></Enter>
					<Enter at={c.fert + 16 + i * 6} out={r.g[1] as number} style={{position: 'absolute', left: 1220, top: RY(i) + 40}}><div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 90, color: '#d8cdb8'}}>?</div></Enter>
					<Art a={r.art} x={120} y={RY(i) + (176 - artH(r.art, r.w)) / 2} w={r.w} style={{opacity: prog(f, r.at, 14)}} />
					<Enter at={r.m[1] as number} style={{position: 'absolute', left: 520, top: RY(i) + 56}}>
						<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 64, color: String(r.m[0]).startsWith('in') ? AMBER_INK : BLUE, whiteSpace: 'nowrap'}}>{r.m[0]}</div>
					</Enter>
					<Enter at={r.g[1] as number} style={{position: 'absolute', left: 1180, top: RY(i) + 56}}>
						<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 64, color: String(r.g[0]).startsWith('in') ? AMBER_INK : BLUE, whiteSpace: 'nowrap'}}>{r.g[0]}</div>
					</Enter>
				</React.Fragment>
			))}
			<Overlay>
				<rect x={90} y={RY(0) - 6} width={1740} height={188} rx={30} fill="none" stroke={AMBER} strokeWidth={7} strokeDasharray="1" opacity={prog(f, c.two, 10)} />
				<Label x={120} y={RY(0) - 14} at={c.two} text="the trap: egg laid outside, but fertilised inside" size={44} color={AMBER_INK} anchor="start" />
			</Overlay>
		</>
	);
};

// ---------- 7. Why numbers and care trade off ----------
export const SceneNumbersCare: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('numbers-care'), {
		limited: 'limited supply', mb: 'In mammals and birds', prot: 'so she can protect', surv: 'Protected young survive', worth: 'worth more', salmon: 'A salmon spends', thousands: 'thousands of eggs',
		nothing: 'nothing left', seal: 'A seal spends', pup: 'single pup', milk: 'feeds with milk', pi: 'called parental investment', usual: 'usual pattern', many: 'many eggs and little care', or: ['or', 2],
		reptiles: 'Some reptiles', trend: 'trend, not a rule', water: 'suits animals',
	});
	const BX = 96, BY = 235, BW = 900;
	const split = prog(f, c.salmon, 20);
	const toSeal = prog(f, c.seal, 40);
	const toSalmonAgain = prog(f, c.many, 30);
	const toSealAgain = prog(f, c.or, 30);
	// fraction of energy going to eggs
	const eggFrac = interpolate(split, [0, 1], [0.5, 0.9]) + (0.12 - 0.9) * toSeal + (0.9 - 0.12) * toSalmonAgain + (0.12 - 0.9) * toSealAgain;
	const eggF = f < c.salmon ? 0.5 : eggFrac;
	// seesaw tilt in degrees (positive = right side down)
	const tilt = interpolate(prog(f, c.thousands, 26), [0, 1], [0, -6]) + 12 * prog(f, c.pup, 26) - 12 * toSalmonAgain + 12 * toSealAgain;
	const PXC = 960, PYC = 836, HL = 440;
	const yAt = (x: number) => PYC + (x - PXC) * Math.tan((tilt * Math.PI) / 180);
	const eggPile = useMemo(() => { const r = rng(14); return Array.from({length: 38}, (_, i) => ({dx: -90 + (i % 10) * 20 + (r() - 0.5) * 6, dy: -Math.floor(i / 10) * 18 - 14})); }, []);
	const strip = 1 - prog(f, c.salmon - 8, 16);
	const cardAt = [c.mb, c.surv, c.worth];
	return (
		<>
			<Heading size={80} items={[[6, 'A fixed supply of energy'], [c.salmon, 'Eggs or care'], [c.reptiles, 'A trend, not a rule']]} />
			{/* the energy bar */}
			<Overlay>
				<g opacity={prog(f, c.limited, 14)}>
					<rect x={BX} y={BY} width={BW} height={64} rx={20} fill={AMBER} stroke={AMBER_INK} strokeWidth={4} opacity={f < c.salmon ? 1 : 0} />
					<g opacity={f >= c.salmon ? 1 : 0}>
						<rect x={BX} y={BY} width={BW * eggF} height={64} rx={20} fill={EGG} stroke={EGG_LINE} strokeWidth={4} />
						<rect x={BX + BW * eggF} y={BY} width={BW * (1 - eggF)} height={64} rx={20} fill="#9fd1b4" stroke={GREEN} strokeWidth={4} />
					</g>
					<text x={BX + BW / 2} y={BY + 46} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 48}} fill={INK} opacity={f < c.salmon ? 1 : 0}>her energy and time</text>
				</g>
				<Label x={BX} y={BY + 112} at={c.salmon} text="making eggs" size={46} color={EGG_LINE} anchor="start" />
				<Label x={BX + BW} y={BY + 112} at={c.salmon} text="caring for young" size={46} color={GREEN} anchor="end" />
			</Overlay>
			{/* the cause strip */}
			<div style={{position: 'absolute', inset: 0, opacity: strip}}>
				{[
					{t: 'In mammals and birds, the young begin inside or beside the mother.', ic: 0},
					{t: 'Protected young survive more often.', ic: 1},
					{t: 'So each one is worth more of her energy.', ic: 2},
				].map((s, i) => (
					<Card key={i} x={96 + i * 600} y={430} w={540} h={230} at={cardAt[i] - 6} pad="22px 26px">
						<Body size={38} weight={700}>{s.t}</Body>
					</Card>
				))}
				<Overlay>
					<DrawPath d="M640,545 L690,545" at={c.surv - 10} dur={10} color={INK_SOFT} width={6} />
					<DrawPath d="M1240,545 L1290,545" at={c.worth - 10} dur={10} color={INK_SOFT} width={6} />
					<g opacity={prog(f, c.prot, 12)}><Shield x={1640} y={545} s={1.6} /></g>
				</Overlay>
			</div>
			{/* plates */}
			<Art a={ART.salmon} x={300} y={400} w={520} style={{opacity: prog(f, c.salmon, 16)}} />
			<Art a={ART.seal} x={1100} y={405} w={520} style={{opacity: prog(f, c.seal, 16)}} />
			<Overlay>
				{/* seesaw */}
				<g opacity={prog(f, c.thousands - 30, 16)}>
					<path d={`M${PXC - 50},${PYC + 90} L${PXC + 50},${PYC + 90} L${PXC},${PYC + 6}Z`} fill="#b9a98f" stroke={INK} strokeWidth={4} strokeLinejoin="round" />
					<g transform={`rotate(${tilt} ${PXC} ${PYC})`}>
						<rect x={PXC - HL} y={PYC - 8} width={HL * 2} height={18} rx={9} fill="#d7b98c" stroke={INK} strokeWidth={4} />
					</g>
				</g>
				{eggPile.map((e, i) => <EggDot key={i} x={620 + e.dx} y={yAt(620) + e.dy - 6} r={9} o={prog(f, c.thousands + i * 2, 8)} />)}
				<Label x={620} y={yAt(620) + 52} at={c.thousands} text="thousands of eggs" size={42} color={EGG_LINE} />
				{/* care on the right: one pup plus milk and guarding */}
				<g opacity={prog(f, c.pup, 12)}><circle cx={1240} cy={yAt(1240) - 30} r={26} fill="#d6d9dc" stroke={INK} strokeWidth={4} /></g>
				<g opacity={prog(f, c.milk, 12)}><Shield x={1330} y={yAt(1330) - 40} s={0.95} /></g>
				<Label x={1290} y={yAt(1290) + 52} at={c.pup} text="one pup, lots of care" size={42} color={GREEN} />
				{/* the salmon has nothing left to give */}
				<g opacity={prog(f, c.nothing, 12)}><Shield x={210} y={560} s={1.3} color="#9a9a9a" /></g>
				<Mark x={210} y={560} at={c.nothing + 8} kind="cross" size={90} />
				<Label x={210} y={640} at={c.nothing + 12} text="no care left" size={42} color={RED} />
				{/* reptile exception */}
				<g opacity={prog(f, c.reptiles, 16)}>
					<path d="M850,660 q55,-64 110,-64 t110,64Z" fill="#e6c98f" stroke={INK} strokeWidth={4} strokeLinejoin="round" />
					{[900, 960, 1020].map((x, i) => <ellipse key={i} cx={x} cy={640 - (i % 2) * 6} rx={13} ry={17} fill="#fff6e8" stroke={INK} strokeWidth={3} />)}
					<Parent x={interpolate(prog(f, c.reptiles + 20, 60), [0, 1], [1010, 910])} y={520} s={0.55} color="#a8b27a" />
				</g>
				<Label x={960} y={705} at={c.reptiles + 20} text="eggs buried, parent leaves" size={38} color={INK_SOFT} out={c.trend} />
				<g opacity={prog(f, c.water, 12)}>
					{[0, 1].map(i => <path key={i} d={`M1500,${770 + i * 36} q25,-18 50,0 t50,0 t50,0`} fill="none" stroke={WATER_LINE} strokeWidth={6} strokeLinecap="round" />)}
				</g>
				<Mark x={1600} y={720} at={c.water + 8} kind="tick" size={60} />
			</Overlay>
			<Enter at={c.usual} out={c.reptiles - 4} style={{position: 'absolute', left: 700, top: 690}}><Note>the usual pattern, not always</Note></Enter>
			<Enter at={c.trend} style={{position: 'absolute', left: 790, top: 720}}><Note>a trend, not a rule</Note></Enter>
			<Card x={1060} y={215} w={764} at={c.pi} pad="16px 26px">
				<Body size={34} weight={800} color={AMBER_INK}>Parental investment</Body>
				<Body size={32} weight={600}>the time, energy and protection a parent gives to help its young survive</Body>
			</Card>
		</>
	);
};
