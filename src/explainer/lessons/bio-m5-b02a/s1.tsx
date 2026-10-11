import React, {useMemo} from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {rng} from '../../kit';
import {
	AMBER, AMBER_INK, ART, Art, artH, BLUE, Body, Card, Chip, CORAL, DrawPath, Droplet, EGG, EGG_LINE, EggDot, Enter, FONT_HAND, GREEN, HandText, Heading,
	INK, INK_SOFT, Label, Overlay, S, Scribble, SpermDot, SPERM, Trail, prog,
} from './shared';

// ---------- 1. Hook ----------
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('hook'), {
		rel: 'release bundles', float: 'float up', apart: 'break apart', mil: 'millions of tiny', sperm: 'clouds of sperm', seal: 'harbour seal', egg: 'single egg',
		pup: 'single pup', why: 'So why would', mil2: 'millions of eggs', one: 'gets by with one',
	});
	const CX = 160, CY = 330, CW = 1000;
	const sc = CW / ART.coral.box[2];
	const CH = artH(ART.coral, CW);
	const bundles = useMemo(() => {
		const r = rng(11);
		return Array.from({length: 16}, (_, i) => ({
			bx: 0.14 + (i / 15) * 0.74 + (r() - 0.5) * 0.03,
			by: 0.42 + r() * 0.22,
			rise: 0.28 + r() * 0.22,
			sway: r() * 6,
			parts: Array.from({length: 8}, (_, k) => ({ang: (k / 8) * Math.PI * 2 + r(), d: 40 + r() * 70, egg: k < 3})),
		}));
	}, []);
	const outP = prog(f, c.seal - 6, 30);
	const sealP = prog(f, c.seal - 6, 30);
	const cloudP = prog(f, c.mil, 40);
	const rise = prog(f, c.float, 70);
	const split = prog(f, c.apart, 50);
	const SW = 760, SX = 560, SY = 400;
	const sealH = artH(ART.seal, SW);
	const swarm = useMemo(() => { const r = rng(5); return Array.from({length: 70}, () => ({x: 150 + r() * 330, y: 680 + r() * 170, r: 4 + r() * 4})); }, []);
	return (
		<>
			<Heading size={68} items={[[6, 'The Great Barrier Reef, a few nights a year'], [c.seal, 'A harbour seal on a rocky shore'], [c.why, 'Why do these two animals need such different numbers of eggs?']]} />
			{/* coral stage */}
			<div style={{position: 'absolute', inset: 0, transform: `translateX(${-1500 * outP}px)`, opacity: 1 - outP}}>
				<Art a={ART.coral} x={CX} y={CY} w={CW} style={{opacity: prog(f, 4, 20)}} />
				<Art a={ART.cloud} x={CX} y={CY - 30 * cloudP} w={CW} style={{opacity: cloudP * 0.95, transform: `scale(${0.9 + 0.12 * cloudP})`, transformOrigin: '50% 80%'}} />
				<Overlay>
					{bundles.map((b, i) => {
						const appear = prog(f, c.rel + i * 3, 12);
						const x0 = CX + b.bx * CW, y0 = CY + b.by * CH;
						const bx = x0 + Math.sin(f / 22 + b.sway) * 6 * rise;
						const by = y0 - rise * b.rise * CH;
						const whole = appear * (1 - split);
						return (
							<g key={i}>
								<g transform={`translate(${bx},${by})`} opacity={whole}>
									<circle r={15} fill="#f7c9c0" stroke={EGG_LINE} strokeWidth={3} />
									<path d="M0,-15 A15,15 0 0 1 0,15Z" fill="#fff3e0" stroke="none" />
									<circle r={15} fill="none" stroke={EGG_LINE} strokeWidth={3} />
								</g>
								{split > 0 ? b.parts.map((p, k) => {
									const px = bx + Math.cos(p.ang) * p.d * split + Math.sin(f / 18 + k) * 3;
									const py = by + Math.sin(p.ang) * p.d * split - split * 20;
									return p.egg ? <EggDot key={k} x={px} y={py} r={8} o={Math.min(1, split * 2)} /> : <SpermDot key={k} x={px} y={py} s={0.55} rot={(p.ang * 180) / Math.PI + 180} o={Math.min(1, split * 2)} />;
								}) : null}
							</g>
						);
					})}
					<Label x={1240} y={400} at={c.float} text="bundles float up" size={50} color={AMBER_INK} anchor="start" out={c.apart - 4} />
					<Label x={1240} y={400} at={c.apart} text="then break apart" size={50} color={AMBER_INK} anchor="start" />
					<g opacity={prog(f, c.apart + 30, 14)}>
						<EggDot x={1262} y={470} r={11} /><Label x={1288} y={482} at={c.apart + 30} text="egg" size={44} color={EGG_LINE} anchor="start" />
						<SpermDot x={1262} y={530} s={0.9} /><Label x={1288} y={542} at={c.apart + 38} text="sperm" size={44} color={SPERM} anchor="start" />
					</g>
					<Label x={1240} y={640} at={c.mil} text="millions of eggs" size={56} color={EGG_LINE} anchor="start" />
				</Overlay>
			</div>
			{/* seal stage */}
			<div style={{position: 'absolute', inset: 0, transform: `translateX(${(1 - sealP) * 1500}px)`, opacity: sealP}}>
				<Art a={ART.seal} x={SX} y={SY} w={SW} />
				<Overlay>
					<Scribble cx={SX + SW * 0.5} cy={SY + sealH * 0.68} rx={SW * 0.14} ry={sealH * 0.26} at={c.pup} color={AMBER} seed={5} />
					<g opacity={prog(f, c.egg, 10)}>
						<EggDot x={1560} y={640} r={32} />
					</g>
					<Label x={1560} y={720} at={c.egg} text="1 egg" size={56} color={EGG_LINE} />
					<Label x={SX + SW * 0.5 + 90} y={SY + sealH + 54} at={c.pup} text="1 pup" size={56} color={AMBER_INK} anchor="start" />
				</Overlay>
			</div>
			{/* the contrast, once the question is asked */}
			<Overlay>
				<g opacity={prog(f, c.mil2, 14)}>
					{swarm.map((d, i) => <EggDot key={i} x={d.x} y={d.y} r={d.r} o={prog(f, c.mil2 + (i % 14), 8)} />)}
				</g>
				<Label x={315} y={660} at={c.mil2} text="millions of eggs" size={56} color={EGG_LINE} />
			</Overlay>
		</>
	);
};

// ---------- 2. Fertilisation and the meeting problem ----------
export const SceneMeeting: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('meeting'), {
		sperm: 'A sperm cell', egg: 'an egg cell', gam: 'gametes', set: 'one set of chromosomes', s1: ['one set', 2], plus: 'plus', s2: ['one set', 3], two: 'full two sets',
		half: 'half of the instructions', join: 'sperm joins', fert: 'called fertilisation', zyg: 'the zygote', full: 'full set of instructions', hard: 'The hard part',
		cant: "can't move", short: 'swim a short way', dry: 'dry out quickly', ways: 'two main ways',
	});
	const EX = 800, EY = 480, SX0 = 380;
	const travel = prog(f, c.join, 44);
	const sx = SX0 + (EX - 140 - SX0) * travel;
	const zy = prog(f, c.zyg, 16);
	const pre = 1 - prog(f, c.ways - 8, 18);
	const eggStroke = zy > 0.5 ? GREEN : EGG_LINE;
	const BAR_W = 260, BAR_Y = 725;
	return (
		<>
			<Heading size={76} items={[[6, 'Getting a sperm to meet an egg'], [c.ways, 'Two main ways to meet']]} />
			<Overlay>
				<g opacity={pre}>
					{/* egg / zygote */}
					<g opacity={prog(f, c.egg, 14)}>
						<circle cx={EX} cy={EY} r={150} fill={zy > 0.5 ? '#e7f3ea' : '#fff2e4'} stroke={eggStroke} strokeWidth={6} />
						<circle cx={EX} cy={EY} r={144} fill="none" stroke={eggStroke} strokeWidth={2} opacity={0.4} />
					</g>
					<Label x={EX} y={EY - 180} at={c.egg} text="egg" size={56} color={EGG_LINE} out={c.zyg} />
					<Label x={EX} y={EY - 180} at={c.zyg} text="zygote" size={56} color={GREEN} />
					{/* sperm travelling */}
					<g opacity={prog(f, c.sperm, 14) * (1 - zy)}>
						<g transform={`translate(${sx},${EY}) scale(1.15)`}>
							<ellipse rx={46} ry={34} fill="#dbe8f6" stroke={SPERM} strokeWidth={5} />
							<path d="M-46,0 q-30,-26 -60,0 t-60,0 t-60,0" fill="none" stroke={SPERM} strokeWidth={5} strokeLinecap="round" />
							<rect x={-16} y={-6} width={32} height={12} rx={6} fill={SPERM} opacity={prog(f, c.set, 12)} />
						</g>
					</g>
					<Label x={SX0 - 40} y={EY - 100} at={c.sperm} text="sperm" size={56} color={SPERM} out={c.join} />
					{/* the instruction strip inside the cell: half in the egg, joined to the other half at the zygote */}
					<rect x={EX - 80} y={EY - 16} width={160} height={32} rx={16} fill="none" stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="8 7" opacity={prog(f, c.set + 10, 12) * (1 - zy)} />
					<rect x={EX - 80} y={EY - 16} width={160} height={32} rx={16} fill={SPERM} opacity={zy} />
					<path d={`M${EX},${EY - 16} h64 a16,16 0 0 1 16,16 a16,16 0 0 1 -16,16 h-64 z`} fill={EGG_LINE} opacity={prog(f, c.set + 10, 12)} />
					<path d={`M${EX - 80},${EY} a16,16 0 0 1 16,-16 h64 v32 h-64 a16,16 0 0 1 -16,-16 z`} fill={SPERM} opacity={zy} />
					<line x1={EX} x2={EX} y1={EY - 16} y2={EY + 16} stroke="#fffdf8" strokeWidth={3} opacity={zy} />
					{/* one set + one set = two sets */}
					<g opacity={prog(f, c.s1, 10)}>
						<rect x={150} y={846} width={760} height={96} rx={22} fill="#fffdf8" stroke={BLUE} strokeWidth={3} />
					</g>
					<Label x={178} y={912} at={c.s1} text="one set" size={56} color={SPERM} anchor="start" />
					<Label x={345} y={912} at={c.plus} text="+" size={56} color={INK} anchor="start" />
					<Label x={400} y={912} at={c.s2} text="one set" size={52} color={EGG_LINE} anchor="start" />
					<Label x={565} y={912} at={c.two} text="= two sets" size={52} color={GREEN} anchor="start" />
					{/* instruction bars */}
					<g opacity={prog(f, c.half, 12) * (1 - zy)}>
						<rect x={SX0 - 110 - BAR_W / 2 + 110} y={BAR_Y} width={BAR_W} height={36} rx={10} fill="#fffdf8" stroke={INK_SOFT} strokeWidth={3} />
						<rect x={SX0 - BAR_W / 2 + 0} y={BAR_Y} width={BAR_W / 2} height={36} rx={10} fill={SPERM} />
						<rect x={EX - BAR_W / 2} y={BAR_Y} width={BAR_W} height={36} rx={10} fill="#fffdf8" stroke={INK_SOFT} strokeWidth={3} />
						<rect x={EX - BAR_W / 2} y={BAR_Y} width={BAR_W / 2} height={36} rx={10} fill={EGG_LINE} />
					</g>
					<Label x={SX0} y={BAR_Y + 80} at={c.half} text="half the instructions" size={36} color={INK_SOFT} out={c.join} />
					<Label x={EX} y={BAR_Y + 80} at={c.half + 10} text="half the instructions" size={36} color={INK_SOFT} out={c.join} />
					<g opacity={prog(f, c.full, 14)}>
						<rect x={EX - BAR_W} y={BAR_Y} width={BAR_W * 2} height={36} rx={10} fill="#fffdf8" stroke={INK_SOFT} strokeWidth={3} />
						<rect x={EX - BAR_W} y={BAR_Y} width={BAR_W} height={36} rx={10} fill={SPERM} />
						<rect x={EX} y={BAR_Y} width={BAR_W} height={36} rx={10} fill={EGG_LINE} />
					</g>
					<Label x={EX} y={BAR_Y + 80} at={c.full} text="the full set of instructions" size={38} color={GREEN} />
					{/* the join */}
					<Label x={(SX0 + EX) / 2 + 20} y={EY - 235} at={c.fert} text="fertilisation" size={64} color={AMBER_INK} />
					<DrawPath d={`M${SX0 + 90},${EY - 190} Q${(SX0 + EX) / 2},${EY - 250} ${EX - 160},${EY - 190}`} at={c.join} dur={40} color={AMBER} width={5} />
					{/* the meeting problem */}
					<g transform="translate(0,0)">
						<g opacity={prog(f, c.cant, 12)}>
							<circle cx={1330} cy={330} r={46} fill="#fff2e4" stroke={EGG_LINE} strokeWidth={5} />
							<path d="M1330,372 L1330,420 M1306,420 L1354,420" stroke={INK} strokeWidth={6} strokeLinecap="round" />
							<circle cx={1330} cy={420} r={0} />
						</g>
						<Label x={1420} y={346} at={c.cant} text="egg can't move" size={56} color={EGG_LINE} anchor="start" />
						<g opacity={prog(f, c.short, 12)}>
							<SpermDot x={1300} y={520} s={1.8} />
						</g>
						<DrawPath d="M1320,520 L1480,520" at={c.short} dur={26} color={SPERM} width={6} dash="2 12" />
						<DrawPath d="M1494,486 L1494,554" at={c.short + 24} dur={8} color={AMBER} width={8} />
						<Label x={1520} y={540} at={c.short} text="swims only a short way" size={48} color={SPERM} anchor="start" />
						<Droplet x={1330} y={720} s={1.5} o={prog(f, c.dry, 12) * (1 - 0.7 * prog(f, c.dry + 20, 30))} />
						<DrawPath d="M1380,690 q20,-24 40,0 M1380,730 q20,-24 40,0" at={c.dry + 6} dur={20} color={INK_SOFT} width={4} />
						<Label x={1450} y={746} at={c.dry} text="both dry out quickly" size={56} color={BLUE} anchor="start" />
					</g>
				</g>
				{/* the two ways */}
				<g opacity={prog(f, c.ways, 20)}>
					<rect x={96} y={260} width={820} height={600} rx={28} fill="#fffdf8" stroke={BLUE} strokeWidth={4} strokeDasharray="14 12" />
					<rect x={1004} y={260} width={820} height={600} rx={28} fill="#fffdf8" stroke={AMBER} strokeWidth={4} strokeDasharray="14 12" />
				</g>
				<Label x={506} y={350} at={c.ways + 6} text="outside the body" size={76} color={BLUE} />
				<Label x={1414} y={350} at={c.ways + 20} text="inside the female" size={76} color={AMBER_INK} />
				<Label x={506} y={560} at={c.ways + 36} text="?" size={160} color={BLUE} />
				<Label x={1414} y={560} at={c.ways + 46} text="?" size={160} color={AMBER_INK} />
			</Overlay>
		</>
	);
};
