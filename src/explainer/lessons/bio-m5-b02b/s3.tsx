import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Callout, Mark} from '../../kit';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, ART, Art, artH, BLUE, Chip, DrawPath, Droplet, Enter, Fade, FEMALE, fullKey, GOLD, Heading, INK, INK_SOFT, Label, mapper, MALE, NameKey, Note, Overlay, pathOf,
	prog, S, Scribble, SeqStrip, SpermDot, TEAL, Cross, FONT_HAND, POLLEN, has, SvgArt,
} from './shared';

// ---------- 5. Fertilisation and the embryo ----------
const Embryo: React.FC<{x: number; y: number; s: number; o: number}> = ({x, y, s, o}) => has(ART.embryo) ? (
	<g transform={`translate(${x},${y}) scale(${s / 1.9})`} opacity={o}>
		<SvgArt a={ART.embryo} x={-125} y={-150} w={245} />
	</g>
) : (
	<g transform={`translate(${x},${y}) scale(${s})`} opacity={o}>
		<ellipse cx={-30} cy={-36} rx={30} ry={15} fill="#9fd08a" stroke="#2f6a2c" strokeWidth={3.5} transform="rotate(-28 -30 -36)" />
		<ellipse cx={30} cy={-36} rx={30} ry={15} fill="#9fd08a" stroke="#2f6a2c" strokeWidth={3.5} transform="rotate(28 30 -36)" />
		<path d="M0,-14 L0,34" stroke="#2f6a2c" strokeWidth={7} strokeLinecap="round" />
		<path d="M0,34 C0,54 -10,64 -18,76 M0,34 C2,54 10,62 16,72" fill="none" stroke="#8a6a3c" strokeWidth={5} strokeLinecap="round" />
	</g>
);

export const SceneFertilisation: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('fertilisation'), {
		now: 'Now comes', join: 'One sperm cell joins', zygote: 'the zygote', first: 'the first cell', sets: 'one set from the sperm', divides: 'divides again and again',
		embryo: 'called an embryo', begins: 'new plant actually begins', tube: 'the tube took',
	});
	const OV = {x: 640, y: 140, w: 380};
	const om = mapper(ART.ovule, OV.x, OV.y, OV.w);
	const egg = om(287, 173);
	const open = om(290, 40);
	const jp = prog(f, c.join, 30);
	const left: [number, number] = [om(240, 150)[0], om(240, 150)[1]];
	const right: [number, number] = [om(335, 150)[0], om(335, 150)[1]];
	const lp: [number, number] = [left[0] + (egg[0] - left[0]) * jp, left[1] + (egg[1] - left[1]) * jp];
	const PX = 1450, PY = 520;
	const d = prog(f, c.divides, 170);
	const circ = (): [number, number, number][] => {
		if (d < 0.18) return [[0, 0, 62]];
		if (d < 0.4) return [[-44, 0, 46], [44, 0, 46]];
		if (d < 0.65) return [[-40, -38, 36], [40, -38, 36], [-40, 38, 36], [40, 38, 36]];
		return [[-56, -30, 26], [0, -48, 26], [56, -30, 26], [-56, 30, 26], [0, 48, 26], [56, 30, 26], [-28, 0, 24], [28, 0, 24]];
	};
	const embryoIn = prog(f, c.embryo, 24);
	return (
		<>
			<Heading items={[[c.now, 'Fertilisation']]} size={76} />
			<Art a={ART.ovule} x={OV.x} y={OV.y} w={OV.w} />
			<Overlay>
				<path d={`M${open[0]},${OV.y - 40} L${open[0]},${open[1] + 6}`} stroke="#8a5a0c" strokeWidth={13} strokeLinecap="round" />
				<path d={`M${open[0]},${OV.y - 40} L${open[0]},${open[1] + 6}`} stroke={GOLD} strokeWidth={8} strokeLinecap="round" />
				<g opacity={1 - prog(f, c.join + 20, 10)}>{jp < 1 ? <SpermDot x={lp[0]} y={lp[1]} s={0.8} rot={jp < 1 ? 30 : 0} /> : null}</g>
				<SpermDot x={right[0]} y={right[1]} s={0.8} rot={150} o={1 - prog(f, c.join + 10, 20)} />
				<g opacity={prog(f, c.join + 30, 12)}><circle cx={egg[0]} cy={egg[1]} r={24} fill="none" stroke={FEMALE} strokeWidth={5} /></g>
				<Fade at={c.zygote}><Callout from={[egg[0] + 18, egg[1] - 10]} to={[1090, 210]} at={c.zygote} text="zygote" color={FEMALE} size={52} /></Fade>
				{/* big zygote and the divisions: one aligned set, crossfaded as the cells double */}
				{has(ART.zyg1) ? (
					<g opacity={prog(f, c.first, 14) * (1 - embryoIn)}>
						{[ART.zyg1, ART.zyg2, ART.zyg4, ART.zyg8].map((z, n) => {
							const edges = [0, 0.18, 0.4, 0.65, 2];
							const a0 = n === 0 ? 1 : prog(d, edges[n], 0.04);
							const a1 = 1 - (n === 3 ? 0 : prog(d, edges[n + 1], 0.04));
							return <SvgArt key={n} a={z} x={PX - 170} y={PY - 160} w={340} o={a0 * a1} />;
						})}
					</g>
				) : (
					<>
						<g opacity={prog(f, c.first, 14) * (1 - embryoIn)}>
							{circ().map(([dx, dy, r], i) => <circle key={`${d < 0.18 ? 0 : d < 0.4 ? 1 : d < 0.65 ? 2 : 3}-${i}`} cx={PX + dx} cy={PY + dy} r={r} fill="#f6b0a4" stroke={FEMALE} strokeWidth={4} />)}
						</g>
						<g opacity={prog(f, c.first, 14) * (1 - embryoIn)}><circle cx={PX} cy={PY} r={d < 0.18 ? 20 : 0} fill="#fff6d6" stroke={FEMALE} strokeWidth={3} /></g>
					</>
				)}
				<Embryo x={PX} y={PY + 10} s={1.9 * (0.7 + 0.3 * embryoIn)} o={embryoIn} />
				<Fade at={c.first} out={c.embryo}><Label x={PX} y={PY + 215} at={c.first} text={d < 0.18 ? 'zygote' : 'dividing again and again'} size={46} color={FEMALE} /></Fade>
				<Fade at={c.embryo + 14}><Callout from={[PX + 50, PY - 110]} to={[PX + 150, PY - 190]} at={c.embryo + 14} text="embryo" color={TEAL} size={54} /></Fade>
			</Overlay>
			<Enter at={c.sets} style={{position: 'absolute', left: 1180, top: 300}}>
				<span style={{display: 'inline-block', fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, color: BLUE, background: '#fffdf8', border: `3px solid ${BLUE}`, borderRadius: 999, padding: '0 24px 4px', whiteSpace: 'nowrap'}}>one set + one set = two sets</span>
			</Enter>
			<Enter at={c.begins} style={{position: 'absolute', left: 1130, top: 800}}><Note size={42}>the new plant begins here</Note></Enter>
			<NameKey items={fullKey(-20, [{text: 'pollen tube', color: GOLD, at: -20}])} />
			<SeqStrip items={[{k: 'land', at: -20}, {k: 'tube', at: -20}, {k: 'join', at: c.join}]} />
		</>
	);
};

// ---------- 6a. Seed and fruit ----------
export const SceneSeedFruit: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('seed-fruit'), {
		after: 'After fertilisation', seed: 'becomes a seed', package: 'protective package', embryo: 'holding the embryo', food: 'a store of food', coat: 'tough outer coat', because: 'The food is there',
		fruit: 'grows into a fruit', pod: 'like a pea pod', protects: 'protects the seeds',
	});
	const slide = prog(f, c.package - 12, 26);
	const PR = {x: 520 - 424 * slide, y: 300, w: 900 - 260 * slide};
	const pm = mapper(ART.ovary, PR.x, PR.y, PR.w);
	const BN = {x: 960, y: 190, w: 470};
	const bm = mapper(ART.bean, BN.x, BN.y, BN.w);
	const swap = prog(f, c.seed, 24);
	return (
		<>
			<Heading items={[[c.after, 'After fertilisation']]} size={76} />
			<Art a={ART.ovary} x={PR.x} y={PR.y} w={PR.w} style={{opacity: 1 - swap}} />
			<Art a={ART.pod} x={PR.x} y={PR.y} w={PR.w} style={{opacity: swap}} />
			<Overlay>
				<Fade at={c.seed}><Label x={pm(475, 100)[0]} y={PR.y - 84} at={c.seed} text="ovules become seeds" size={slide > 0.5 ? 38 : 46} color={TEAL} /></Fade>
				<Fade at={c.fruit}><Callout from={pm(240, 150)} to={[PR.x + 120, PR.y + artH(ART.ovary, PR.w) + 110]} at={c.fruit} text="fruit" color={FEMALE} size={50} /></Fade>
				<Fade at={c.pod}><Label x={PR.x + PR.w / 2} y={PR.y - 28} at={c.pod} text="like a pea pod" size={slide > 0.5 ? 40 : 52} color={INK} /></Fade>
				<Fade at={c.protects}><Callout from={pm(624, 120)} to={[PR.x + PR.w - 30, PR.y + artH(ART.ovary, PR.w) + 110]} at={c.protects} text="seeds inside" color={TEAL} align="right" size={46} /></Fade>
			</Overlay>
			<div style={{opacity: prog(f, c.package, 20)}}>
				<Art a={ART.bean} x={BN.x} y={BN.y} w={BN.w} />
			</div>
			<Overlay>
				<Fade at={c.embryo}><Callout from={bm(335, 280)} to={[1500, 260]} at={c.embryo} text="embryo: shoot and root" color={TEAL} size={42} /></Fade>
				<Fade at={c.food}><Callout from={bm(520, 700)} to={[1500, 540]} at={c.food} text="food store (cotyledons)" color={AMBER_INK} size={42} /></Fade>
				<Fade at={c.coat}><Callout from={bm(700, 260)} to={[1500, 400]} at={c.coat} text="seed coat" color="#7a4a2b" size={42} /></Fade>
			</Overlay>
			<Enter at={c.because} style={{position: 'absolute', left: 96, top: 780}}><Note size={40}>no leaves yet, so it has a food store</Note></Enter>
			<SeqStrip items={[{k: 'land', at: -20}, {k: 'tube', at: -20}, {k: 'join', at: -20}, {k: 'seed', at: c.seed}]} />
		</>
	);
};

// ---------- 6b. Travelling and waiting ----------
const WindIcon: React.FC<{x: number; y: number; at: number}> = ({x, y, at}) => (
	<g transform={`translate(${x},${y})`}>
		{[0, 1, 2].map(i => <DrawPath key={i} d={`M-70,${-30 + i * 30} q30,-24 60,0 t60,0 t40,0`} at={at + i * 6} dur={20} color="#7fb0d6" width={6} />)}
		<circle cx={90} cy={-4} r={9} fill="#c9a86a" stroke="#6b4b1d" strokeWidth={2.5} />
	</g>
);
const WaterIcon: React.FC<{x: number; y: number; at: number}> = ({x, y, at}) => (
	<g transform={`translate(${x},${y})`}>
		{[0, 1, 2].map(i => <DrawPath key={i} d={`M-70,${-10 + i * 28} q23,-20 46,0 t46,0 t46,0`} at={at + i * 6} dur={20} color="#7fb0d6" width={6} />)}
		<ellipse cx={-6} cy={-26} rx={11} ry={7} fill="#c9a86a" stroke="#6b4b1d" strokeWidth={2.5} />
	</g>
);
const AnimalIcon: React.FC<{x: number; y: number; at: number}> = ({x, y, at}) => (
	<g transform={`translate(${x},${y})`} opacity={prog(useCurrentFrame(), at, 14)}>
		<ellipse cx={0} cy={0} rx={52} ry={34} fill="#b9a98f" stroke={INK} strokeWidth={3.5} />
		<circle cx={-54} cy={-14} r={22} fill="#b9a98f" stroke={INK} strokeWidth={3.5} />
		<path d="M-74,-12 l-22,6 l22,4" fill="#e8b73a" stroke={INK} strokeWidth={3} strokeLinejoin="round" />
		<circle cx={-58} cy={-20} r={3.4} fill={INK} />
		<path d="M30,-4 l46,14 l-44,10z" fill="#b9a98f" stroke={INK} strokeWidth={3} strokeLinejoin="round" />
		<path d="M-10,32 l-4,26 M12,32 l4,26" stroke={INK} strokeWidth={4} strokeLinecap="round" />
		<ellipse cx={-30} cy={30} rx={9} ry={6} fill="#c9a86a" stroke="#6b4b1d" strokeWidth={2.5} />
	</g>
);

export const SceneDispersal: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('dispersal'), {
		made: 'made for waiting', coat: 'The coat protects', carry: 'carry seeds away', wind: 'wind, water', disp: 'seed dispersal', job: 'different job', later: 'Later', water: 'has water', oxy: 'oxygen',
		temp: 'suitable temperature', germ: 'germinates', roots: 'grow roots and leaves',
	});
	const SD = {x: 130, y: 250, w: 330};
	const SL = {x: 170, y: 200, w: 250};
	const germ = prog(f, c.germ, 30);
	return (
		<>
			<Heading items={[[c.made, 'Waiting and travelling']]} size={76} />
			<div style={{opacity: 1 - germ}}><Art a={ART.bean} x={SD.x} y={SD.y} w={SD.w} /></div>
			<div style={{opacity: germ, clipPath: `inset(${(1 - germ) * 100}% 0 0 0)`}}><Art a={ART.seedling} x={SL.x} y={SL.y} w={SL.w} /></div>
			<Overlay>
				<Fade at={c.coat}><Label x={SD.x + SD.w / 2} y={SD.y + artH(ART.bean, SD.w) + 52} at={c.coat} text="the coat stops it drying out" size={40} color="#7a4a2b" out={c.germ} /></Fade>
				<Fade at={c.germ + 10}><Label x={SL.x + SL.w / 2} y={SL.y + artH(ART.seedling, SL.w) + 50} at={c.germ + 10} text="germinates: roots and leaves" size={40} color={TEAL} /></Fade>
				{has(ART.dispWind) ? (
					<>
						<g opacity={prog(f, c.wind, 16)} transform={`translate(${(1 - prog(f, c.wind, 30)) * -30 + Math.sin(f / 22) * 5},0)`}><SvgArt a={ART.dispWind} x={560} y={208} w={340} /></g>
						<g opacity={prog(f, c.wind + 14, 16)} transform={`translate(0,${(1 - prog(f, c.wind + 14, 24)) * 20 + Math.sin(f / 17) * 3})`}><SvgArt a={ART.dispWater} x={950} y={212} w={340} /></g>
						<g opacity={prog(f, c.wind + 28, 16)} transform={`translate(0,${(1 - prog(f, c.wind + 28, 24)) * 20})`}><SvgArt a={ART.dispAnimal} x={1340} y={230} w={340} /></g>
					</>
				) : (
					<>
						<WindIcon x={760} y={330} at={c.wind} />
						<WaterIcon x={1060} y={330} at={c.wind + 14} />
						<AnimalIcon x={1380} y={320} at={c.wind + 28} />
					</>
				)}
				<Fade at={c.carry + 30}><Label x={1070} y={505} at={c.carry + 30} text="carries seeds" size={54} color={TEAL} /></Fade>
				<Fade at={c.disp}><Label x={1070} y={585} at={c.disp} text="seed dispersal" size={72} color={TEAL} /></Fade>
				<g opacity={prog(f, c.job, 14)}>
					<text x={1070} y={665} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 48}} fill={AMBER_INK}>not pollination (that carries pollen)</text>
					<Cross x={1400} y={647} s={1.4} at={c.job + 14} />
				</g>
				{/* conditions to germinate */}
				<g opacity={prog(f, c.later, 14)}><text x={1070} y={738} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44}} fill={INK_SOFT}>to germinate it needs</text></g>
				<g opacity={prog(f, c.water, 12)} transform="translate(780,830)">
					<Droplet x={0} y={0} s={0.9} /><text x={44} y={14} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 48}} fill={BLUE}>water</text>
				</g>
				<g opacity={prog(f, c.oxy, 12)} transform="translate(1040,830)">
					{[[-16, 6, 10], [8, -14, 14], [14, 14, 8]].map(([x, y, r], i) => <circle key={i} cx={x} cy={y} r={r} fill="#e6f3fb" stroke="#7fb0d6" strokeWidth={3} />)}
					<text x={44} y={14} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 48}} fill="#4a86b0">oxygen</text>
				</g>
				<g opacity={prog(f, c.temp, 12)} transform="translate(1330,830)">
					<rect x={-8} y={-30} width={16} height={50} rx={8} fill="#fff" stroke={INK} strokeWidth={3.5} />
					<circle cx={0} cy={26} r={14} fill="#d4614a" stroke={INK} strokeWidth={3.5} />
					<rect x={-3.5} y={-6} width={7} height={30} fill="#d4614a" />
					<text x={34} y={14} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 48}} fill="#d4614a">suitable warmth</text>
				</g>
			</Overlay>
		</>
	);
};
void [AMBER, Chip, GOLD, Mark, MALE, Overlay, pathOf, Scribble, fullKey, POLLEN, Heading, NameKey];
