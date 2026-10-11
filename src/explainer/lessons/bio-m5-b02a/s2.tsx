import React, {useMemo} from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {Callout, Mark, rng} from '../../kit';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, ART, Art, artH, BLUE, Body, Card, Chip, CalendarIcon, COD, DrawPath, Droplet, EGG_LINE, EggDot, Enter, FishIcon, FONT_HAND, GREEN, HandText,
	Heading, INK, INK_SOFT, Label, Moon, Overlay, RED, S, Scribble, SPERM, SpermDot, Stage, Parent, Trail, WATER, WATER_LINE, prog,
} from './shared';

const Rail: React.FC<{active: 0 | 1 | 2 | -1; at: [number, number, number]}> = ({active, at}) => (
	<>
		{(['the sea', 'a pond', 'a river'] as const).map((t, i) => (
			<Chip key={t} x={1400} y={330 + i * 110} at={at[i]} text={t} size={50} color={active === i ? AMBER_INK : BLUE} />
		))}
	</>
);

const waves = (x: number, y: number, w: number, n = 3, gap = 40) => Array.from({length: n}, (_, i) => {
	const yy = y + i * gap;
	return `M${x},${yy} q${w / 8},-14 ${w / 4},0 t${w / 4},0 t${w / 4},0 t${w / 4},0`;
});

// ---------- 3a. External: where, and why water ----------
export const SceneExternalWhere: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('external-where'), {
		ext: 'external fertilisation', outside: 'outside the bodies', water: 'in water', two: 'two reasons', dry: 'stops the gametes', swim: 'sperm need it',
		coral: 'Corals release', sea: 'the sea', frogs: 'Frogs do it', pond: 'in a pond', salmon: 'salmon do it', river: 'in a river', female: 'female lays', gravel: 'in the gravel',
		male: 'the male releases', sperm: 'releases sperm', over: 'over them',
	});
	const A = 1 - prog(f, c.coral - 6, 16);
	const PX = 130, W = 1000;
	const coralP = prog(f, c.coral - 6, 16) * (1 - prog(f, c.frogs - 4, 14));
	const frogP = prog(f, c.frogs - 4, 14) * (1 - prog(f, c.salmon - 4, 14));
	const salP = prog(f, c.salmon - 4, 14);
	const cloudP = prog(f, c.sea, 40);
	const fh = artH(ART.frog, W), sh = artH(ART.salmon, W), ch = artH(ART.coral, W);
	const eggs = useMemo(() => { const r = rng(21); return Array.from({length: 9}, () => ({dx: (r() - 0.5) * 120, dy: (r() - 0.5) * 36})); }, []);
	const ex = PX + W * 0.59, ey = 340 + sh * 0.9;
	return (
		<>
			<Heading size={80} items={[[6, 'The first way'], [c.ext, 'External fertilisation'], [c.two, 'Why does water matter?'], [c.coral, 'Sea, pond and river']]} />
			{/* phase A: the idea, then the two reasons */}
			<div style={{position: 'absolute', inset: 0, opacity: A}}>
				<Overlay>
					<g opacity={prog(f, c.outside - 20, 16)}>
						<rect x={560} y={400} width={360} height={290} rx={26} fill={WATER} stroke={WATER_LINE} strokeWidth={4} opacity={prog(f, c.water, 20)} />
					</g>
					<g opacity={prog(f, c.outside - 10, 16)}>
						<Parent x={300} y={540} s={2.4} color="#e8cdb0" />
						<Parent x={1180} y={540} s={2.4} color="#c9d6e6" flip />
					</g>
					{waves(580, 500, 320).map((d, i) => <DrawPath key={i} d={d} at={c.water + i * 6} dur={20} color={WATER_LINE} width={4} />)}
					<SpermDot x={1010} y={610} s={1.6} rot={180} o={prog(f, c.outside, 12)} />
					<EggDot x={460} y={570} r={20} o={prog(f, c.outside, 12)} />
					{/* the two gametes drift to the meeting place outside both bodies */}
					<g transform={`translate(${-1 * 0},0)`}>
						<g opacity={prog(f, c.outside + 10, 12)}>
							<EggDot x={interpolate(prog(f, c.outside + 20, 40), [0, 1], [470, 700])} y={600} r={20} />
							<SpermDot x={interpolate(prog(f, c.outside + 20, 40), [0, 1], [1000, 760])} y={600} s={1.6} rot={180} />
						</g>
					</g>
					<DrawPath d="M548,380 L548,396 L930,396 L930,380" at={c.outside + 30} dur={24} color={AMBER} width={6} />
					<Label x={740} y={368} at={c.outside + 40} text="meet outside both bodies" size={46} color={AMBER_INK} />
					<Label x={300} y={680} at={c.outside} text="parent" size={44} color={INK_SOFT} />
					<Label x={1180} y={680} at={c.outside + 6} text="parent" size={44} color={INK_SOFT} />
					<Label x={740} y={750} at={c.water} text="usually water" size={60} color={BLUE} />
				</Overlay>
				<Card x={1300} y={330} w={520} at={c.dry}>
					<div style={{display: 'flex', alignItems: 'center', gap: 22}}>
						<svg width={70} height={86} viewBox="-35 -43 70 86"><Droplet x={0} y={4} s={1.2} /></svg>
						<Body size={36} weight={700}>Water stops the gametes drying out</Body>
					</div>
				</Card>
				<Card x={1300} y={560} w={520} at={c.swim}>
					<div style={{display: 'flex', alignItems: 'center', gap: 22}}>
						<svg width={110} height={60} viewBox="-60 -30 120 60"><SpermDot x={34} y={0} s={1.5} rot={0} /></svg>
						<Body size={36} weight={700}>Sperm need water to swim</Body>
					</div>
				</Card>
			</div>
			{/* phase B: three places */}
			<div style={{position: 'absolute', inset: 0, opacity: coralP}}>
				<Art a={ART.coral} x={PX} y={340} w={W} />
				<Art a={ART.cloud} x={PX} y={340 - 26 * cloudP} w={W} style={{opacity: cloudP * 0.95}} />
			</div>
			<div style={{position: 'absolute', inset: 0, opacity: frogP}}>
				<Art a={ART.frog} x={PX} y={310} w={900} />
				<Overlay><Scribble cx={PX + 900 * 0.69} cy={310 + artH(ART.frog, 900) * 0.56} rx={150} ry={80} at={c.pond} seed={4} /></Overlay>
			</div>
			<div style={{position: 'absolute', inset: 0, opacity: salP}}>
				<Art a={ART.salmon} x={PX} y={340} w={W} />
				<Overlay>
					{eggs.map((e, i) => <EggDot key={i} x={ex + e.dx} y={ey + e.dy} r={8} o={prog(f, c.gravel + i * 3, 8)} />)}
					<Trail d={`M${PX + W * 0.8},${340 + sh * 0.22} C${PX + W * 1.02},${340 + sh * 0.3} ${PX + W * 1.0},${340 + sh * 0.85} ${ex + 40},${ey - 10}`} at={c.sperm} dur={40} arrow={[ex + 40, ey - 10, 150]} />
					<Callout from={[PX + W * 0.62, 340 + sh * 0.2]} to={[1180, 400]} at={c.male} text="male" color={BLUE} />
					<Callout from={[PX + W * 0.42, 340 + sh * 0.58]} to={[1180, 520]} at={c.female} text="female" color={AMBER_INK} />
				</Overlay>
			</div>
			<Rail active={f >= c.salmon ? 2 : f >= c.frogs ? 1 : f >= c.coral ? 0 : -1} at={[c.sea, c.pond, c.river]} />
		</>
	);
};

// ---------- 3b. External: same place, same time ----------
export const SceneExternalTiming: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('external-timing'), {
		alone: 'water alone', place: 'same place', time: 'same time', never: 'never meet', coral: 'Many corals', nights: 'same few nights', crowd: 'crowded into one patch',
		salmon: 'Salmon follow', scent: 'scent', gather: 'gather in the same place', ret: 'return at the same time', frogs: 'Frogs gather', clasps: 'clasps', over: 'right over the eggs',
	});
	const A = 1 - prog(f, c.coral - 6, 16);
	const coralP = prog(f, c.coral - 6, 16) * (1 - prog(f, c.salmon - 6, 14));
	const salP = prog(f, c.salmon - 6, 14) * (1 - prog(f, c.frogs - 6, 14));
	const frogP = prog(f, c.frogs - 6, 14);
	const PX = 130, W = 1000;
	const sh = artH(ART.salmon, W);
	const fw = 900, fhh = artH(ART.frog, fw);
	const spread = 1.35 - 0.55 * prog(f, c.crowd, 40);
	const cloudP = prog(f, c.coral + 20, 24);
	const zoom = prog(f, c.clasps - 8, 30);
	const gx = PX + W * 0.6, gy = 370 + sh * 0.9;
	const fishStart: [number, number][] = [[150, 780], [1100, 560], [220, 330], [1000, 840]];
	const SALMON_RED = '#c9654f';
	const px0 = PX + fw * 0.32, py0 = 330 + fhh * 0.4, sx0 = PX + fw * 0.7, sy0 = 330 + fhh * 0.55;
	return (
		<>
			<Heading size={80} items={[[6, 'Water is not enough'], [c.place, 'Same place, same time'], [c.coral, 'Corals: same few nights'], [c.salmon, 'Salmon: scent and season'], [c.frogs, 'Frogs: same pond, then clasp']]} />
			{/* A: the problem */}
			<div style={{position: 'absolute', inset: 0, opacity: A}}>
				<Overlay>
					<g opacity={prog(f, c.place, 12)} transform="translate(420,470)">
						<path d="M0,-70 C-40,-70 -60,-40 -60,-8 C-60,28 0,80 0,80 C0,80 60,28 60,-8 C60,-40 40,-70 0,-70Z" fill="#f6b8a8" stroke={EGG_LINE} strokeWidth={5} />
						<circle cy={-14} r={20} fill="#fffdf8" stroke={EGG_LINE} strokeWidth={4} />
					</g>
					<Label x={420} y={620} at={c.place} text="same place" size={72} color={EGG_LINE} />
					<g opacity={prog(f, c.time, 12)} transform="translate(1100,470)">
						<circle r={72} fill="#fffdf8" stroke={BLUE} strokeWidth={5} />
						<path d="M0,-48 L0,0 L34,22" fill="none" stroke={BLUE} strokeWidth={7} strokeLinecap="round" strokeLinejoin="round" />
					</g>
					<Label x={1100} y={620} at={c.time} text="same time" size={72} color={BLUE} />
					<g opacity={prog(f, c.never - 4, 12)}>
						<EggDot x={640} y={820} r={22} />
						<SpermDot x={1320} y={820} s={1.6} rot={180} />
						<DrawPath d="M690,820 L1230,820" at={c.never} dur={30} color={INK_SOFT} width={5} dash="10 14" />
						<Mark x={960} y={820} at={c.never + 28} kind="cross" size={64} />
					</g>
					<Label x={960} y={910} at={c.never + 10} text="they never meet" size={52} color={RED} />
				</Overlay>
			</div>
			{/* B: coral */}
			<div style={{position: 'absolute', inset: 0, opacity: coralP}}>
				<Art a={ART.coral} x={PX} y={340} w={W} />
				<Art a={ART.cloud} x={PX} y={340 + 30} w={W} style={{opacity: cloudP * 0.95, transform: `scaleX(${spread}) scaleY(${1 - 0.1 * (spread - 0.8)})`, transformOrigin: '50% 80%'}} />
				<Overlay>
					{[0, 1, 2].map(i => <Moon key={i} x={250 + i * 76} y={290} s={0.9} o={prog(f, c.nights + i * 8, 10)} />)}
					<Label x={500} y={308} at={c.nights} text="the same few nights" size={54} color={AMBER_INK} anchor="start" />
					<Scribble cx={PX + W * 0.5} cy={340 + artH(ART.coral, W) * 0.36} rx={W * 0.27} ry={artH(ART.coral, W) * 0.3} at={c.crowd + 20} seed={9} />
					<Label x={1250} y={560} at={c.crowd} text="one crowded patch" size={52} color={AMBER_INK} anchor="start" />
				</Overlay>
			</div>
			{/* B: salmon */}
			<div style={{position: 'absolute', inset: 0, opacity: salP}}>
				<Art a={ART.salmon} x={PX} y={370} w={W} />
				<Overlay>
					<path d="M140,300 C220,260 250,350 330,316 S430,290 470,330" fill="none" stroke={WATER_LINE} strokeWidth={22} strokeLinecap="round" opacity={prog(f, c.scent - 24, 16)} />
					<Label x={150} y={262} at={c.scent - 20} text="home river" size={46} color={BLUE} anchor="start" />
					{[0, 1, 2].map(i => <DrawPath key={i} d={`M${480 + i * 40},${340 + i * 18} q22,36 -6,76`} at={c.scent + i * 10} dur={16} color={AMBER_INK} width={6} />)}
					<DrawPath d="M470,340 C540,400 470,440 420,470" at={c.scent + 30} dur={22} color={AMBER_INK} width={5} dash="2 12" />
					<Label x={520} y={300} at={c.scent} text="follow the scent" size={50} color={AMBER_INK} anchor="start" />
					{fishStart.map(([x, y], i) => {
						const p = prog(f, c.gather + i * 6, 44);
						return <FishIcon key={i} x={interpolate(p, [0, 1], [x, 520 + i * 110])} y={interpolate(p, [0, 1], [y, 915])} s={0.55} color={SALMON_RED} o={prog(f, c.gather, 10)} />;
					})}
					<Scribble cx={gx} cy={gy} rx={120} ry={46} at={c.gather + 20} seed={2} />
					<CalendarIcon x={1280} y={560} s={1.5} o={prog(f, c.ret, 12)} />
					<Label x={1280} y={660} at={c.ret} text="same time of year" size={46} color={BLUE} />
				</Overlay>
			</div>
			{/* B: frogs */}
			<div style={{position: 'absolute', inset: 0, opacity: frogP}}>
				<Stage scale={1 + 0.3 * zoom} ox={200} oy={800}>
					<Art a={ART.frog} x={PX} y={330} w={fw} />
					<Overlay>
						<Scribble cx={PX + fw * 0.3} cy={330 + fhh * 0.3} rx={120} ry={70} at={c.clasps + 6} seed={6} />
						<Trail d={`M${px0},${py0 + 20} C${px0 + 40},${py0 + 150} ${sx0 - 160},${sy0 - 60} ${sx0 - 20},${sy0}`} at={c.over} dur={40} arrow={[sx0 - 20, sy0, 20]} />
					</Overlay>
				</Stage>
				<Overlay>
					<Label x={720} y={270} at={c.clasps} text="the male clasps the female" size={50} color={AMBER_INK} anchor="start" />
					<Label x={720} y={330} at={c.over} text="sperm land right on the eggs" size={50} color={SPERM} anchor="start" />
				</Overlay>
			</div>
			<Rail active={f >= c.frogs ? 1 : f >= c.salmon ? 2 : f >= c.coral ? 0 : -1} at={[4, 8, 12]} />
		</>
	);
};

// ---------- 4. The odds ----------
export const SceneOdds: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('odds'), {
		poor: 'odds are poor', first: 'First', lost: 'lost before they meet', sweep: 'sweep', eat: 'eat', thin: 'spread so thin', second: 'Second', eaten: 'eaten or die', salmon: 'Chinook salmon',
		num: 'four thousand', num2: 'fourteen thousand', few: 'a few still', rule: 'So the rule', w: ['water', 2], t: 'timing', h: 'huge numbers',
	});
	const FX = 96, FY = 240, FW = 1300, FH = 470;
	const dots = useMemo(() => {
		const r = rng(77);
		return Array.from({length: 190}, (_, i) => {
			const egg = i < 66;
			const big = r() < 0.35;
			return {egg, x: 30 + r() * (FW - 60), y: 24 + r() * (FH - 48), dx: big ? 500 + r() * 500 : 20 + r() * 50, dy: (r() - 0.5) * 80, lane: Math.floor(r() * 3), eat: r() < 0.24, wob: r() * 6};
		});
	}, []);
	const fert = useMemo(() => Array.from({length: 28}, (_, i) => ({x: 190 + (i % 7) * 170, y: 90 + Math.floor(i / 7) * 105, i})), []);
	const keep = [9, 10, 16, 17];
	const sw = prog(f, c.sweep, 50), th = prog(f, c.thin, 50), eatP = prog(f, c.eat, 80);
	const field = 1 - 0.78 * prog(f, c.second, 16);
	const lanes = [90, 235, 380];
	const count = Math.round(4000 * prog(f, c.num, 30));
	return (
		<>
			<Heading size={80} items={[[6, 'The odds are poor'], [c.first, 'Loss 1: before they meet'], [c.second, 'Loss 2: before they grow up'], [c.rule, 'The rule for external fertilisation']]} />
			<Overlay>
				<defs><clipPath id="fieldclip"><rect x={0} y={0} width={FW} height={FH} rx={26} /></clipPath></defs>
				<g transform={`translate(${FX},${FY})`}>
					<rect width={FW} height={FH} rx={26} fill={WATER} stroke={WATER_LINE} strokeWidth={4} opacity={prog(f, 4, 16)} />
					<g clipPath="url(#fieldclip)" opacity={field * prog(f, 10, 16)}>
						{waves(80, 70, 360, 1).concat(waves(600, 180, 400, 1), waves(300, 330, 500, 1)).map((d, i) => <path key={i} d={d} fill="none" stroke="#fff" strokeWidth={4} opacity={0.5} />)}
						{dots.map((d, i) => {
							const fishX = -160 + 1800 * eatP;
							const x0 = d.x + d.dx * sw * (d.egg ? 0.9 : 1) + Math.sin(f / 20 + d.wob) * 4;
							const eaten = d.eat && fishX - 30 > d.x;
							const cx = (x0 - FW / 2) * (1 + 0.3 * th) + FW / 2;
							const cy = (d.y + d.dy * sw - FH / 2) * (1 + 0.3 * th) + FH / 2;
							const o = (eaten ? 0 : 1) * (d.egg ? 1 - 0.2 * th : 1 - 0.65 * th) * prog(f, 10 + (i % 20), 10);
							return d.egg ? <EggDot key={i} x={cx} y={cy} r={9} o={o} /> : <SpermDot key={i} x={cx} y={cy} s={0.55} rot={180 + d.wob * 20} o={o} />;
						})}
						{lanes.map((y, i) => <FishIcon key={i} x={-160 + 1800 * eatP + i * 30} y={y} s={1.2} color="#7d8da0" o={eatP > 0 && eatP < 1 ? 1 : 0} />)}
						{[0, 1, 2].map(i => (
							<g key={i} opacity={prog(f, c.sweep, 12) * (1 - prog(f, c.eat - 20, 12))}>
								<path d={`M${300 + i * 40},${110 + i * 150} l240,0`} stroke={AMBER_INK} strokeWidth={7} strokeLinecap="round" />
								<path d={`M${526 + i * 40},${96 + i * 150} l22,14 l-22,14`} fill="none" stroke={AMBER_INK} strokeWidth={7} strokeLinecap="round" strokeLinejoin="round" />
							</g>
						))}
					</g>
					{/* loss 2: the fertilised eggs and their young */}
					<g opacity={prog(f, c.second, 16)}>
						{fert.map(d => {
							const gone = keep.includes(d.i) ? 0 : prog(f, c.eaten + (d.i % 9) * 8 + Math.floor(d.i / 9) * 4, 14);
							return (
								<g key={d.i} opacity={prog(f, c.second + d.i * 1.5, 8) * (1 - gone)}>
									<EggDot x={d.x} y={d.y} r={22} />
									<circle cx={d.x} cy={d.y} r={8} fill={SPERM} />
								</g>
							);
						})}
					</g>
					<Scribble cx={fert[9].x + 85} cy={fert[9].y + 50} rx={140} ry={92} at={c.few} seed={8} />
				</g>
			</Overlay>
			<Card x={96} y={736} w={1300} at={c.first} out={c.second - 6} pad="16px 28px">
				<Body size={34} weight={700}><span style={{color: AMBER_INK}}>Loss 1:</span> eggs and sperm are swept away or eaten before they meet.</Body>
			</Card>
			<Card x={96} y={736} w={1300} at={c.second} pad="16px 28px">
				<Body size={34} weight={700}><span style={{color: AMBER_INK}}>Loss 2:</span> fertilised eggs and young are eaten or die before they grow up.</Body>
			</Card>
			<Art a={ART.salmon} x={1450} y={250} w={380} style={{opacity: prog(f, c.salmon, 16)}} />
			<Card x={1420} y={470} w={440} at={c.num} pad="14px 22px">
				<Body size={30} weight={600} color={INK_SOFT}>One female Chinook salmon lays</Body>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 56, color: EGG_LINE, lineHeight: 1.05, whiteSpace: 'nowrap'}}>
					{count.toLocaleString('en-AU')}<span style={{opacity: prog(f, c.num2, 10)}}> to 14,000</span>
				</div>
				<Body size={30} weight={600} color={INK_SOFT}>eggs</Body>
			</Card>
			<div style={{position: 'absolute', left: 96, top: 842, display: 'flex', gap: 24, alignItems: 'baseline'}}>
				<Enter at={c.rule}><span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 64, color: INK_SOFT}}>The rule:</span></Enter>
				<Enter at={c.w}><span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 84, color: BLUE}}>water</span></Enter>
				<Enter at={c.t}><span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 84, color: AMBER_INK}}>+ timing</span></Enter>
				<Enter at={c.h}><span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 84, color: EGG_LINE}}>+ huge numbers</span></Enter>
			</div>
		</>
	);
};
