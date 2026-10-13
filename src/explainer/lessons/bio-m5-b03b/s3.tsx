import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {Callout} from '../../kit';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, AnimalIcon as _a, Arrow, BeadDot, Cam, CoinIcon as _c, DrawPath, Enter, FONT_DISPLAY, FONT_HAND, Forceps, GAIN, Germ, Hand, Heading, INK, INK_SOFT, Label, NoteCard, Overlay, PArt, PL, SvgPlate, plateMap, PollenFlow, POLLEN, Pill, prog, S, Scorecard, Scribble, ShieldBreak, SlideIn, Tag, Tick, Cross, VAR, WheatIcon, Wisp, along, pathOf, pH, GREYC, HARM, TEAL, WELF_INK, COST_INK, CoverBag, fadeTo, Bracket,
} from './shared';

const ease = (f: number, ks: number[], vs: number[]) => interpolate(f, ks, vs, {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});

const COL1 = {gain: {at: 0, text: 'proven bull, many farms, faster progress'}, variety: {at: 0, text: 'narrower gene pool: shared weakness'}, cost: {at: 0, text: 'usually less than a bull on every farm'}, welfare: {at: 0, text: 'chasing one trait can harm another'}};

// ---------- 3a. Artificial pollination: what the breeder does ----------
export const ScenePollination: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('pollination'), {
		ap: 'artificial pollination', person: 'where a person', stigma: 'chosen stigma', self: 'pollinate themselves', remove: 'removes the anthers', before: 'before they release any pollen', place: 'Then she places pollen', rr: 'the rust-resistant plant', bag: 'covers the flowers with a bag', none: 'no other pollen can arrive',
	});
	// the plate sits at P; the floret is pushed to the centre, then annotated in screen space
	const P = {x: 480, y: 200, w: 960};
	const k = P.w / 1255;
	const earBox = PL.ear.box, flBox = PL.floret.box;
	const zoom = ease(f, [20, 150], [1, 1.45]);
	// after the push the floret organs sit at these screen points
	const Z = 1.3, SX = 170;
	const focus: [number, number] = [1166, 520];
	const post = (nx: number, ny: number): [number, number] => {
		const pre: [number, number] = [P.x + (nx - 358) * k, P.y + (ny - 147) * k];
		return [960 + SX + (pre[0] - focus[0]) * Z, 540 + (pre[1] - focus[1]) * Z];
	};
	const A = [post(1037, 527), post(1259, 370), post(1476, 495)];
	const stig = post(1255, 540);
	const settled = prog(f, 150, 10);
	// forceps visit each anther in turn
	const t0 = c.remove + 16;
	const slot = 38;
	const fx = (i: number) => ease(f, [t0 + i * slot, t0 + i * slot + 12], [i === 0 ? A[0][0] + 260 : A[i - 1][0], A[i][0]]);
	const tip = (i: number): [number, number] => [A[i][0], A[i][1] - 120];
	const phase = (i: number) => f - (t0 + i * slot);
	let fpos: [number, number] = [A[0][0] + 300, 40];
	let carry = -1;
	for (let i = 0; i < 3; i++) {
		const ph = phase(i);
		if (ph >= -14 && ph < 0) fpos = [ease(f, [t0 + i * slot - 14, t0 + i * slot], [i === 0 ? A[0][0] + 300 : tip(i - 1)[0], tip(i)[0]]), ease(f, [t0 + i * slot - 14, t0 + i * slot], [i === 0 ? 40 : 40, tip(i)[1]])];
		if (ph >= 0 && ph < 8) fpos = tip(i);
		if (ph >= 8 && ph < slot - 14) { fpos = [tip(i)[0], ease(f, [t0 + i * slot + 8, t0 + i * slot + slot - 14], [tip(i)[1], 30])]; carry = i; }
	}
	void fx;
	const gone = (i: number) => prog(f, t0 + i * slot + 8, 10);
	const place = prog(f, c.place, 60);
	const donorBase = {x: 1620, y: 300};
	const dx = -50 * prog(f, c.place - 10, 30);
	const pollenPath: [number, number][] = [[1620, 420], [1450, 380], [1250, 430], [stig[0] + 8, stig[1] + 4]];
	const bag = prog(f, c.bag, 36);
	const wispT = (f - c.none) / 50;
	const wispX = wispT < 0 ? 1700 : 1700 - 380 * Math.min(1, wispT * 2) + Math.max(0, wispT - 0.5) * 2 * 160;
	return (
		<>
			<Heading items={[[c.ap - 30, 'Wheat: artificial pollination']]} size={64} />
			<Hand at={c.person} x={96} y={176} size={46}>a person puts pollen on a chosen stigma</Hand>
			<div style={{position: 'absolute', inset: 0, transform: `translateX(${SX * prog(f, 20, 130)}px)`}}><Cam keys={[[0, 1, 960, 540], [20, 1, 960, 540], [150, Z, focus[0], focus[1]]]}>
				<div style={{opacity: 1 - prog(f, 70, 60), position: 'absolute', inset: 0}}>
					<PArt a={PL.ear} x={P.x} y={P.y + (earBox[1] - 147) * k} w={earBox[2] * k} />
				</div>
				<PArt a={PL.floret} x={P.x + (flBox[0] - 358) * k} y={P.y + (flBox[1] - 147) * k} w={flBox[2] * k} />
			</Cam></div>
			<Tag at={c.ap + 40} x={96} y={290} text="seed parent: yield" color={GAIN} size={48} />
			<Tag at={t0 + 3 * slot - 20} x={96} y={370} text="no pollen of its own" color={INK_SOFT} size={42} />
			<Tag at={c.rr - 6} x={1560} y={800} text="pollen parent: rust resistant" color={AMBER_INK} size={42} w={320} />
			{/* donor plant at the right, tipped toward the floret on "places pollen" */}
			<SlideIn at={c.place - 30} dx={80}>
				<div style={{position: 'absolute', left: donorBase.x + dx, top: donorBase.y, width: 200, transformOrigin: '50% 100%', transform: `rotate(${-26 * prog(f, c.place - 10, 30)}deg)`}}>
					<PArt a={PL.ear} x={0} y={0} w={200} />
				</div>
			</SlideIn>
			<Overlay>
				{/* anthers: circle, then forceps lift them away */}
				<Scribble cx={(A[0][0] + A[2][0]) / 2} cy={A[1][1] + 70} rx={340} ry={120} at={c.remove} color={AMBER_INK} seed={7} />
				{A.map((a, i) => (
					<g key={i} opacity={gone(i) * settled}>
						<ellipse cx={a[0]} cy={a[1]} rx={58} ry={112} fill="#f6f1e7" fillOpacity={0.9} />
						<ellipse cx={a[0]} cy={a[1]} rx={58} ry={112} fill="none" stroke={INK_SOFT} strokeWidth={4} strokeDasharray="10 10" />
					</g>
				))}
				{f >= t0 - 14 && f < t0 + 3 * slot ? <Forceps x={fpos[0]} y={fpos[1] + 110} s={0.9} open={carry >= 0 ? 0 : 0.8} rot={0} /> : null}
				{carry >= 0 ? <ellipse cx={fpos[0]} cy={fpos[1] + 130} rx={26} ry={62} fill="#e8b81f" stroke="#a9830a" strokeWidth={4} /> : null}
				{/* the parts, named as they are spoken */}
				<g opacity={1 - prog(f, c.place - 40, 14)}>
					<Callout from={[stig[0] + 6, stig[1] + 8]} to={[1520, 640]} at={c.stigma} text="stigma" sub="where pollen lands" color={'#d4614a'} size={50} />
				</g>
				<Callout from={[A[0][0], A[0][1]]} to={[780, 600]} at={c.remove + 2} text="anther" sub="makes the pollen" color={AMBER_INK} size={50} align="right" />
				{/* her chosen pollen */}
				<PollenFlow pts={pollenPath} at={c.place + 20} n={9} per={5} dur={50} r={9} />
				<g opacity={prog(f, c.place + 60, 12)}><circle cx={stig[0]} cy={stig[1]} r={50} fill={POLLEN} fillOpacity={0.35} stroke="#a9830a" strokeWidth={5} /></g>
				{/* the bag */}
				<CoverBag x={A[0][0] - 40} y={150} w={A[2][0] - A[0][0] + 120} h={720} p={bag} />
				<Wisp x={wispX} y={330} o={prog(f, c.none, 10)} />
			</Overlay>
			<SlideIn at={c.bag}><PArt a={PL.bagged} x={110} y={440} w={210} /></SlideIn>
			<Tag at={c.none} x={96} y={700} text="no other pollen can arrive" color={INK_SOFT} size={40} w={330} />
			<Scorecard x={96} y={820} s={0.22} at={c.ap + 10} colW={480} titles={[{text: 'artificial insemination'}]} cells={{gain: [COL1.gain], variety: [COL1.variety], cost: [COL1.cost], welfare: [COL1.welfare]}} />
		</>
	);
};

// ---------- 3b. The knowledge it uses, and how the new variety is made ----------
const GREEN_AL = '#5aa14a', BLUE_AL = '#3b6fa8';
const PlantRow: React.FC<{y: number; x0: number; gap?: number; at: number; per?: number; plants: {beads: string[]; both?: boolean; show?: boolean}[]; label: string; labelAt: number; tickAt?: number; seedFirst?: boolean; count?: string; countColor?: string}> = ({y, x0, gap = 160, at, per = 8, plants, label, labelAt, tickAt = at + 40, seedFirst, count, countColor = GAIN}) => {
	const f = useCurrentFrame();
	return (
		<g>
			<g opacity={prog(f, labelAt, 12)}><text x={x0 - 40} y={y + 8} textAnchor="end" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 38}} fill={INK_SOFT}>{label}</text></g>
			{count ? <g opacity={prog(f, tickAt + 24, 12)}><text x={x0 + 5 * gap - 90} y={y + 8} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 36}} fill={countColor}>{count}</text></g> : null}
			{plants.map((p, i) => {
				const px = x0 + i * gap;
				const o = prog(f, at + i * per, 12);
				const dim = p.both === false ? 1 - 0.7 * prog(f, tickAt, 14) : 1;
				return (
					<g key={i} opacity={o * dim}>
						{seedFirst ? <ellipse cx={px} cy={y + 52} rx={14} ry={9} fill="#d9b86a" stroke="#9a7a1f" strokeWidth={3} opacity={1 - prog(f, at + i * per + 24, 12)} /> : null}
						<WheatIcon x={px} y={y - 4} s={0.72} />
						{p.beads.map((b, k) => <BeadDot key={k} cx={px - 14 + k * 28} cy={y + 62} r={11} color={b} />)}
						{p.both ? <g opacity={prog(f, tickAt + i * 5, 10)}><Tick x={px + 46} y={y - 36} at={tickAt + i * 5} s={0.9} /></g> : null}
					</g>
				);
			})}
		</g>
	);
};

export const ScenePollinationKnowledge: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('pollination-knowledge'), {
		pollen: 'Pollen is made', anthers: 'in the anthers', lands: 'lands on a stigma', tube: 'a tube carries sperm', egg: 'to the egg', every: 'Every seed has the two parents', first: 'her first seedlings', mixed: 'the alleles are mixed in new ways', some: 'only some plants show both traits', keeps: 'She keeps those', reps: 'repeats this for several generations', gain: 'The gain is a new variety', years: 'years of hand work',
	});
	const R = {x: 96, y: 210, w: 480};
	const kk = R.w / 730;
	const bm = (nx: number, ny: number): [number, number] => [R.x + (nx - 885) * kk, R.y + (ny - 225) * kk];
	const anth = bm(1255, 365), stg = bm(1195, 525), eggP = bm(1265, 745);
	const tube: [number, number][] = [[1195, 525], [1225, 580], [1252, 640], [1262, 700], [1265, 745]].map(p => bm(p[0], p[1]));
	const recallOut = c.every - 16;
	const small = prog(f, recallOut, 22);
	const sw = 520 - 300 * small;
	const gridO = prog(f, c.every - 10, 14) * (1 - prog(f, c.gain - 10, 12));
	const g1 = [0, 1, 2].map(() => ({beads: [GREEN_AL, BLUE_AL]}));
	const g2 = [
		{beads: [GREEN_AL, BLUE_AL], both: true}, {beads: [GREEN_AL, GREEN_AL], both: false}, {beads: [BLUE_AL, BLUE_AL], both: false}, {beads: [GREEN_AL, BLUE_AL], both: true}, {beads: [GREEN_AL, GREEN_AL], both: false},
	];
	const g3 = [
		{beads: [GREEN_AL, BLUE_AL], both: true}, {beads: [GREEN_AL, BLUE_AL], both: true}, {beads: [GREEN_AL, BLUE_AL], both: true}, {beads: [GREEN_AL, GREEN_AL], both: false}, {beads: [BLUE_AL, BLUE_AL], both: false},
	];
	const g4 = [
		{beads: [GREEN_AL, BLUE_AL], both: true}, {beads: [GREEN_AL, BLUE_AL], both: true}, {beads: [GREEN_AL, BLUE_AL], both: true}, {beads: [GREEN_AL, BLUE_AL], both: true}, {beads: [GREEN_AL, GREEN_AL], both: false},
	];
	return (
		<>
			<Heading items={[[c.pollen - 4, 'How a new variety is made']]} size={64} />
			{/* recall of the flower cut-away, then shrunk to the corner */}
			<div style={{position: 'absolute', inset: 0, opacity: 1 - small}}>
				<PArt a={PL.floret} x={R.x} y={R.y} w={R.w} />
			</div>
			<div style={{position: 'absolute', inset: 0, opacity: small}}>
				<PArt a={PL.floret} x={R.x} y={R.y} w={220} />
			</div>
			<Overlay>
				<g opacity={1 - small}>
					<Callout from={[anth[0], anth[1]]} to={[690, 290]} at={c.anthers - 6} text="anther: makes pollen" color={AMBER_INK} size={42} />
					<Callout from={[stg[0], stg[1] + 6]} to={[690, 410]} at={c.lands - 6} text="stigma: pollen lands" color={'#d4614a'} size={42} />
					<DrawPath d={pathOf(tube)} at={c.tube} dur={40} color={TEAL} width={9} />
					<text x={R.x + 20} y={R.y + 600} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 34}} fill={INK_SOFT} opacity={prog(f, c.pollen, 12)}>a wheat floret (it has no petals)</text>
					<Callout from={[tube[4][0], tube[4][1]]} to={[690, 640]} at={c.tube} text="tube: carries sperm to the egg" color={TEAL} size={42} />
					<PollenFlow pts={[[anth[0] + 40, anth[1] - 20], [stg[0] - 80, stg[1] - 40], [stg[0], stg[1] - 4]]} at={c.lands - 4} n={5} per={5} dur={34} />
					<circle cx={eggP[0]} cy={eggP[1]} r={14 * prog(f, c.egg - 8, 10)} fill="#f08f86" stroke="#c4432f" strokeWidth={4} />
				</g>
			</Overlay>
			{/* the breeding rows */}
			<Overlay style={{opacity: gridO}}>
				<g opacity={prog(f, c.every, 10)}>
					<WheatIcon x={760} y={235} s={0.8} /><WheatIcon x={1100} y={235} s={0.8} />
					<text x={760} y={334} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 36}} fill={GAIN}>yield parent</text>
					<text x={1100} y={334} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 36}} fill={AMBER_INK}>rust-resistant parent</text>
				</g>
				<BeadDot cx={760} cy={362} r={12} color={GREEN_AL} o={prog(f, c.every + 10, 10)} />
				<BeadDot cx={1100} cy={362} r={12} color={BLUE_AL} o={prog(f, c.every + 10, 10)} />
				{[760, 1100].map((x, i) => {
					const t = prog(f, c.every + 24 + i * 6, 34);
					return <circle key={x} cx={x + (1500 - x) * t} cy={362 + (320 - 362) * t - Math.sin(t * Math.PI) * 30} r={10} fill={i ? BLUE_AL : GREEN_AL} stroke={INK} strokeWidth={2} opacity={t > 0 && t < 1 ? 1 : 0} />;
				})}
				<g opacity={prog(f, c.every + 56, 12)}>
					<ellipse cx={1500} cy={320} rx={44} ry={28} fill="#d9b86a" stroke="#9a7a1f" strokeWidth={4} />
					<BeadDot cx={1486} cy={320} r={11} color={GREEN_AL} /><BeadDot cx={1516} cy={320} r={11} color={BLUE_AL} />
					<text x={1500} y={382} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 36}} fill={INK_SOFT}>seed with both parents</text>
				</g>
				<PlantRow y={470} x0={820} at={c.first} plants={g1} label="first seedlings" labelAt={c.first} seedFirst />
				<PlantRow y={600} x0={820} at={c.mixed} plants={g2} label="their seeds" labelAt={c.mixed} tickAt={c.some} count="2 of 5 show both" />
				<PlantRow y={730} x0={820} at={c.reps - 24} per={5} plants={g3} label="generation 3" labelAt={c.reps - 24} tickAt={c.reps - 12} count="3 of 5 show both" />
				<PlantRow y={860} x0={820} at={c.reps - 6} per={5} plants={g4} label="generation 4" labelAt={c.reps - 6} tickAt={c.reps + 8} count="4 of 5: more each time" />
				<g opacity={prog(f, c.keeps, 12)}><text x={1500} y={548} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40}} fill={GAIN}>she keeps these</text></g>
				<g opacity={prog(f, c.some, 12)}><text x={1250} y={478} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 30}} fill={INK_SOFT}>in this example, one of each allele shows both traits</text></g>
				<g opacity={prog(f, c.reps - 24, 12)}><text x={1740} y={800} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 32}} fill={GREYC}>illustrative</text></g>
			</Overlay>
			<Scorecard x={470} y={250} s={0.95} at={c.gain + 2} colW={470} titles={[{text: 'artificial insemination'}, {text: 'artificial pollination'}]} cells={{gain: [COL1.gain, {at: c.gain + 14, text: 'a new variety with both traits'}], variety: [COL1.variety, null], cost: [COL1.cost, {at: c.years, text: 'years of hand work'}], welfare: [COL1.welfare, {at: c.years + 36, text: 'not an animal issue', grey: true}]}} lit={{gain: c.gain + 8, cost: c.years - 6}} />
		</>
	);
};

// ---------- 3c. One variety everywhere, and what it risks ----------
export const SceneSharedWeakness: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('shared-weakness'), {
		share: 'share the same defences', uganda: 'first found in Uganda', strain: 'A new strain', overcame: 'overcame a resistance gene', everywhere: 'grow that one variety',
	});
	const FX = 1010, FY = 290;
	const plants = Array.from({length: 15}, (_, i) => [FX + (i % 5) * 160, FY + Math.floor(i / 5) * 190] as [number, number]);
	const pin: [number, number] = [96 + 260 * 0.72, 560 + 300 * 0.5];
	const fungus = prog(f, c.strain, 50);
	const fp: [number, number] = [pin[0] + (FX - 40 - pin[0]) * fungus, pin[1] + (FY + 200 - pin[1]) * fungus - Math.sin(fungus * Math.PI) * 120];
	const spread = (i: number) => prog(f, c.overcame - 10 + (plants[i][0] - FX) / 25 + (plants[i][1] - FY) / 40, 14);
	return (
		<>
			<Heading items={[[c.everywhere - 20, 'One variety everywhere']]} size={64} />
			{/* the gene pool is one colour */}
			<Overlay>
				<rect x={96} y={196} width={500} height={290} rx={22} fill="#fffdf8" fillOpacity={0.6} stroke={INK_SOFT} strokeWidth={4} strokeDasharray="2 12" strokeLinecap="round" opacity={prog(f, 4, 14)} />
				{Array.from({length: 24}, (_, i) => <BeadDot key={i} cx={140 + (i % 8) * 58} cy={250 + Math.floor(i / 8) * 62} r={19} color="#5aa14a" o={prog(f, 6 + i * 2, 10)} />)}
				<text x={346} y={455} textAnchor="middle" opacity={prog(f, 40, 14)} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 38}} fill={VAR}>one variety: one set of alleles</text>
				{/* Africa chip */}
				<g opacity={prog(f, c.uganda - 20, 14)}>
					<rect x={96} y={520} width={300} height={340} rx={22} fill="#fffdf8" stroke={PAPER_DEEP_} strokeWidth={4} />
					<path d={AFRICA(96 + 20, 520 + 20, 260, 300)} fill="#e6dcc4" stroke={INK_SOFT} strokeWidth={4} strokeLinejoin="round" />
				</g>
				<g opacity={prog(f, c.uganda, 10)} transform={`translate(${pin[0]},${pin[1] - 6 + (1 - prog(f, c.uganda, 10)) * -40})`}>
					<path d="M0,0 C-22,-26 -18,-46 0,-46 C18,-46 22,-26 0,0Z" fill={HARM} stroke="#8a2a1c" strokeWidth={3} /><circle cx={0} cy={-32} r={6} fill="#fffdf8" />
				</g>
				<g opacity={prog(f, c.uganda + 6, 12)}><text x={246} y={892} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 36}} fill={INK_SOFT}>Uganda, 1998 to 1999</text></g>
			</Overlay>
			{/* the field */}
			<Overlay>
				<rect x={FX - 80} y={FY - 90} width={850} height={620} rx={26} fill="#eadfbf" fillOpacity={0.45} stroke={INK_SOFT} strokeWidth={4} strokeDasharray="2 12" strokeLinecap="round" opacity={prog(f, c.share - 20, 14)} />
				{plants.map(([x, y], i) => {
					const sp = spread(i);
					return (
						<g key={i} opacity={prog(f, c.share - 10 + i * 3, 10)}>
							<WheatIcon x={x} y={y + 40} s={1.15} rust={sp} shield={f < c.overcame ? 1 : 0} />
							<ShieldBreak x={x + 30} y={y - 2} s={1.15} p={prog(f, c.overcame, 18)} o={f >= c.overcame ? 1 : 0} />
							{sp > 0 ? <circle cx={x} cy={y + 20} r={60 * sp} fill="#c25a1c" fillOpacity={0.18 * (1 - sp * 0.4)} /> : null}
						</g>
					);
				})}
				{f >= c.strain && f < c.overcame + 30 ? <g opacity={prog(f, c.strain, 8)}><Germ x={fp[0]} y={fp[1]} r={22} at={c.strain} /></g> : null}
			</Overlay>
			<Pill at={c.uganda + 30} x={FX - 50} y={790} color={HARM} size={40}>1998 to 1999, Uganda: new stem rust strain</Pill>
			<NoteCard x={640} y={560} w={330} at={c.overcame + 60} color={VAR} glyph="variety" title="variety" size={26}>one variety everywhere: shared weakness</NoteCard>
			<Scorecard x={470} y={800} s={0.26} at={c.overcame + 40} colW={470} titles={[{text: 'artificial insemination'}, {text: 'artificial pollination'}]} cells={{gain: [COL1.gain, {at: 0, text: 'a new variety with both traits'}], variety: [COL1.variety, {at: c.overcame + 70, text: 'one variety everywhere: shared weakness'}], cost: [COL1.cost, {at: 0, text: 'years of hand work'}], welfare: [COL1.welfare, {at: 0, text: 'not an animal issue', grey: true}]}} lit={{variety: c.overcame + 66}} />
		</>
	);
};
const PAPER_DEEP_ = '#ede4d3';
/** Rough coded Africa outline in a w x h box at x,y. */
const AFRICA = (x: number, y: number, w: number, h: number) => {
	const pts: [number, number][] = [[0.22, 0.04], [0.5, 0.0], [0.66, 0.1], [0.78, 0.22], [0.9, 0.3], [0.97, 0.36], [0.84, 0.5], [0.78, 0.68], [0.64, 0.9], [0.52, 1.0], [0.42, 0.78], [0.38, 0.56], [0.14, 0.46], [0.02, 0.32], [0.08, 0.14]];
	return pts.map((p, i) => `${i ? 'L' : 'M'}${(x + p[0] * w).toFixed(1)},${(y + p[1] * h).toFixed(1)}`).join(' ') + 'Z';
};

// ---------- 4. Copying the winner ----------
const PotatoPlant: React.FC<{x: number; y: number; s?: number; o?: number; sick?: number}> = ({x, y, s = 1, o = 1, sick = 0}) => (
	<g transform={`translate(${x},${y}) scale(${s})`} opacity={o}>
		<SvgPlate a={PL.potatoPlant} x={-52} y={-80} w={104} />
		{sick > 0 ? <g opacity={Math.min(1, sick)}><SvgPlate a={PL.potatoSick} x={-52} y={-80} w={104} /></g> : null}
	</g>
);

export const SceneCloning: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('cloning'), {
		third: 'There is a third option', copy: 'copy the winner', pieces: 'pieces of tubers', same: 'every new plant has the same alleles', clone: 'so it is a clone', uniform: 'uniform crop quickly', shares: 'shares one weakness', cav: 'Cavendish banana',
	});
	const row = Array.from({length: 7}, (_, i) => [180 + i * 110, 550] as [number, number]);
	const plantIn = (i: number) => prog(f, c.uniform + i * 7, 10);
	const sick = (i: number) => prog(f, c.shares + i * 10, 12);
	const germT = prog(f, c.shares, 70);
	const [gx, gy] = along(row.map(p => [p[0], p[1] - 90] as [number, number]), germT);
	return (
		<>
			<Heading items={[[c.third - 6, 'A third option: copy the winner']]} size={64} />
			<SlideIn at={c.copy}><PArt a={PL.potato} x={96} y={200} w={270} /></SlideIn>
			<Overlay>
				{[0, 1, 2].map(i => (
					<g key={i} opacity={prog(f, c.pieces + i * 10, 12)} transform={`translate(${470 + i * 120},${300})`}>
						<ellipse rx={44} ry={32} fill="#c9a36a" stroke="#7a5a2c" strokeWidth={4} /><path d="M-6,-30 L-10,-52 M10,-30 L14,-48" stroke="#a45a8a" strokeWidth={6} strokeLinecap="round" />
					</g>
				))}
				<Arrow x1={405} y1={310} x2={440} y2={310} at={c.pieces} color={INK_SOFT} dur={12} />
				<g opacity={prog(f, c.pieces + 20, 12)}><text x={590} y={382} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 38}} fill={INK_SOFT}>pieces of tubers</text></g>
				{/* the clone row: identical plants, one after another */}
				{row.map(([x, y], i) => <PotatoPlant key={i} x={x} y={y} s={0.95} o={plantIn(i)} sick={sick(i)} />)}
				{f >= c.shares && f < c.shares + 90 ? <Germ x={gx} y={gy} r={16} at={c.shares} /> : null}
			</Overlay>
			<Hand at={c.clone} x={96} y={434} size={52}>clone: the same alleles</Hand>
			<Tag at={c.uniform} x={96} y={620} text="a uniform crop, quickly" color={GAIN} size={42} w={340} />
			<Tag at={c.shares} x={470} y={620} text="one weakness for every plant" color={HARM} size={42} w={440} />
			<SlideIn at={c.cav - 6} dy={-30}><PArt a={PL.bunch} x={1420} y={190} w={250} /></SlideIn>
			<SlideIn at={c.cav + 20}><PArt a={PL.plantation} x={960} y={480} w={860} /></SlideIn>
			<Overlay><Scribble cx={1060} cy={640} rx={90} ry={110} at={c.cav + 50} color={HARM} seed={9} /></Overlay>
			<Tag at={c.cav + 60} x={960} y={800} text="Cavendish banana: one clone, one weakness" color={HARM} size={44} />
			<Scorecard x={96} y={705} s={0.4} at={c.clone} colW={470} titles={[{text: 'insemination'}, {text: 'pollination'}, {text: 'copying'}]} cells={{gain: [COL1.gain, {at: 0, text: 'new variety'}, {at: c.uniform + 40, text: 'uniform, quick'}], variety: [COL1.variety, {at: 0, text: 'shared weakness'}, {at: c.shares + 50, text: 'one weakness'}], cost: [COL1.cost, {at: 0, text: 'years of hand work'}, {at: c.shares + 70, text: 'not covered here', grey: true}], welfare: [COL1.welfare, {at: 0, text: 'not an animal issue', grey: true}, {at: c.shares + 70, text: 'not covered here', grey: true}]}} />
		</>
	);
};
