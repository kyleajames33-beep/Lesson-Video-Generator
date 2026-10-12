import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Callout, HandText, rng} from '../../kit';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, Arrow, Body, Card, COPY, DrawPath, Enter, Fade, FONT_DISPLAY, FONT_HAND, Heading, INK, INK_SOFT, Label, Line, Loop, Nucleus, Overlay, PArt, pm, PL, Pill, pH, POND, prog, PSeq, S, Scribble, SHARE,
	Split, SPLIT, Strip, Tick, Wall, YEAST, along, pathOf, Cross,
} from './shared';

const vis = (f: number, from: number, to?: number, d = 14) => prog(f, from, d) * (to === undefined ? 1 : 1 - prog(f, to, d));

// ---------- 4. One yeast cell makes a bud ----------
const YX = 230, YY = 225, YW = 640;
export const SceneYeast: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('yeast-budding'), {
		yeast: 'Yeast is a fungus', baker: "Baker's yeast", sugar: 'when sugar is plentiful', bump: 'small bump', bud: 'called a bud', nuc: 'inside a nucleus', holds: 'that holds it', copies: 'copies its DNA', moves: 'moves into the bud',
		bigger: 'grows bigger', mat: 'using materials', wall: 'wall forms', breaks: 'breaks away', clone: 'a clone of its parent', same: 'The steps are the same', csp: 'copy share split', diff: 'one difference',
		infis: 'In fission', two: 'the parent becomes two', inbud: 'In budding', carries: 'carries on', grows: 'a new cell grows from it',
	});
	const m = pm(PL.bud1, YX, YY, YW);
	const k = YW / PL.bud1.box[2];
	const E: [number, number] = [962, 427], B: [number, number] = [1061, 331];
	const dir: [number, number] = [0.718, -0.696];
	const g = prog(f, c.bigger, 56);
	const rb = 45 * prog(f, c.bump, 28) + 75 * g;
	const near: [number, number] = [E[0] + dir[0] * 0.55 * rb, E[1] + dir[1] * 0.55 * rb];
	const bc: [number, number] = [near[0] + (B[0] - near[0]) * g, near[1] + (B[1] - near[1]) * g];
	const bumpScr = m(bc[0], bc[1]);
	const bumpOp = prog(f, c.bump, 6) * (1 - prog(f, c.mat + 30, 14));
	// DNA copy leaves the parent nucleus and travels into the bud
	const NUC0 = m(725, 657);
	const small: [number, number] = [E[0] + dir[0] * 25, E[1] + dir[1] * 25];
	const path: [number, number][] = [[725, 657], [800, 575], [900, 480], [small[0], small[1]]].map(p => m(p[0], p[1]));
	const popP = prog(f, c.copies, 24);
	const driftP = prog(f, c.copies + 24, 26);
	const travel = prog(f, c.moves, 44);
	const dupPos: [number, number] = f < c.moves ? [NUC0[0] + 46 * driftP, NUC0[1] - 40 * driftP] : travel < 1 ? along(path, travel) : bumpScr;
	const dupFinal = f >= c.moves + 44 ? bumpScr : dupPos;
	const dupR = (46 - 14 * travel) * k * 1.55;
	const dupOp = popP * (1 - prog(f, c.mat + 30, 14));
	// wall across the neck
	const neck: [number, number] = [987, 403];
	const w1 = m(neck[0] - 44 * 0.696, neck[1] - 44 * 0.718);
	const w2 = m(neck[0] + 44 * 0.696, neck[1] + 44 * 0.718);
	// material dots
	const matRoute: [number, number][] = [m(820, 640), m(900, 520), m(bc[0], bc[1])];
	const mats = Array.from({length: 7}, (_, i) => {
		const t = Math.max(0, ((f - c.bigger - i * 8) / 44) % 1);
		const on = f >= c.bigger + i * 8 && f < c.mat + 40;
		return {p: along(matRoute, t), on};
	});
	const outRight = c.same - 10;
	const lit = [[c.copies + 18, c.same - 2, c.csp], [c.moves + 44, c.same - 2, c.csp + 24], [c.breaks + 8, c.same - 2, c.csp + 50]];
	const contrast = prog(f, c.infis, 18);
	return (
		<>
			<Heading items={[[0, 'Yeast: one cell, one bud'], [c.diff, 'Fission or budding?']]} size={72} />
			<PSeq arts={[PL.bud1, PL.bud2, PL.bud3]} x={YX} y={YY} w={YW} at={[c.mat + 30, c.breaks - 2]} dur={22} />
			<Overlay>
				{/* coded bump growing into the bud */}
				<g opacity={bumpOp}>
					<circle cx={bumpScr[0]} cy={bumpScr[1]} r={rb * k} fill="#f5e8bd" stroke={YEAST} strokeWidth={8} />
				</g>
				<Nucleus x={dupFinal[0]} y={dupFinal[1]} r={dupR} o={dupOp} />
				{mats.map((d, i) => d.on ? <circle key={i} cx={d.p[0]} cy={d.p[1]} r={7} fill={AMBER} stroke={AMBER_INK} strokeWidth={2} opacity={0.9} /> : null)}
				{/* labels: bud, nucleus */}
				<Fade at={c.bud} out={c.breaks}><Callout from={[bumpScr[0] + 56, bumpScr[1] - 8]} to={[930, 506]} at={c.bud} text="bud" color={AMBER_INK} size={58} /></Fade>
				<Scribble cx={NUC0[0]} cy={NUC0[1]} rx={86} ry={92} at={c.nuc} color={'#6c3f92'} seed={3} width={7} />
				<Fade at={c.nuc} out={c.nuc + 80}><Callout from={[NUC0[0] + 82, NUC0[1]]} to={[930, 690]} at={c.nuc} text="nucleus (holds the DNA)" color={'#6c3f92'} size={52} /></Fade>
				<Fade at={c.nuc + 84}><Label x={NUC0[0]} y={NUC0[1] + 130} at={c.nuc + 84} text="nucleus" size={44} color={'#6c3f92'} /></Fade>
				<Fade at={c.wall - 2} out={c.breaks + 10}><Wall x1={w1[0]} y1={w1[1]} x2={w2[0]} y2={w2[1]} at={c.wall} dur={20} width={9} /></Fade>
				<Tick x={NUC0[0] + 30} y={YY + 60} at={c.carries + 6} s={1.5} />
			</Overlay>
			<Pill at={c.yeast} out={outRight} x={960} y={232} size={50}>yeast: a fungus that lives as one cell</Pill>
			<Pill at={c.baker} out={outRight} x={960} y={322} size={44}>baker's yeast, used to make bread</Pill>
			<Pill at={c.sugar} out={outRight} x={960} y={388} size={44} color={SHARE}>usually buds when sugar is plentiful</Pill>
			<Pill at={c.copies} out={outRight} x={960} y={575} size={50} color={COPY}>1 copy the DNA</Pill>
			<Pill at={c.moves} out={outRight} x={960} y={745} size={50} color={SHARE}>2 one copy moves into the bud</Pill>
			<Pill at={c.breaks} out={outRight} x={960} y={805} size={50} color={SPLIT}>3 the bud breaks away: a new cell</Pill>
			{/* contrast: fission versus budding */}
			<div style={{position: 'absolute', inset: 0, opacity: contrast}}>
				<Card x={960} y={236} w={860} at={c.infis} pad="14px 26px" h={250}>
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 56, color: SPLIT, lineHeight: 1}}>fission</div>
					<div style={{display: 'flex', alignItems: 'center', gap: 24, marginTop: 14}}>
						<div style={{position: 'relative', width: 440, height: 108, flex: 'none'}}><PArt a={PL.fis3} x={0} y={0} w={440} /></div>
						<Enter at={c.two} dy={8}><Body size={38} weight={700}>the parent becomes two new cells</Body></Enter>
					</div>
				</Card>
				<Card x={960} y={520} w={860} at={c.inbud} pad="14px 26px" h={290}>
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 56, color: SHARE, lineHeight: 1}}>budding</div>
					<div style={{display: 'flex', alignItems: 'center', gap: 24, marginTop: 6}}>
						<div style={{position: 'relative', width: 200, height: 198, flex: 'none'}}><PArt a={PL.bud3} x={0} y={0} w={200} /></div>
						<Enter at={c.carries} dy={8}><Body size={38} weight={700}>the parent carries on, and a new cell grows from it</Body></Enter>
					</div>
				</Card>
			</div>
			<Strip on={lit.map(a => a)} y={892} />
		</>
	);
};

// ---------- 5a. Protists that divide: amoeba and paramecium ----------
const AX = 150, AY = 335, AW = 780;
const PX = 990, PY = 385, PW2 = 800;
const Pond: React.FC = () => {
	const f = useCurrentFrame();
	const r = rng(41);
	const specks = Array.from({length: 26}, (_, i) => ({x: 120 + r() * 1680, y: 240 + r() * 600, s: 3 + r() * 5, ph: r() * 6.28, sp: 0.02 + r() * 0.03}));
	return (
		<>
			<div style={{position: 'absolute', left: 96, top: 215, width: 1728, height: 650, borderRadius: 40, background: `radial-gradient(ellipse at 40% 35%, #f0f8f5, ${POND} 60%, #d3e8e4)`, boxShadow: 'inset 0 0 60px rgba(60,110,100,0.12)'}} />
			<Overlay>
				{specks.map((s, i) => <circle key={i} cx={s.x + Math.sin(f * s.sp + s.ph) * 16} cy={s.y + Math.cos(f * s.sp * 0.8 + s.ph) * 10} r={s.s} fill="#9cc5be" opacity={0.55} />)}
			</Overlay>
		</>
	);
};
export const SceneProtists: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('protist-fission'), {
		prot: 'Protists are a mixed group', pond: 'pond water', some: 'Some are single cells', amoeba: 'An amoeba', shapeless: 'shapeless cell', crawls: 'crawls along', copies: ['copies its DNA', 1], nuc: 'inside its nucleus',
		pulls: 'pulls apart', two: 'two amoebae', bf: 'binary fission again', para: 'A paramecium', slipper: 'slipper-shaped', hairs: 'tiny hairs', pcopies: ['copies its DNA', 2], divides: 'divides across the middle', own: 'its own copy',
	});
	const am = pm(PL.amo1, AX, AY, AW);
	const dx = 70 * prog(f, c.shapeless, 90) - 20;
	const wob = f < c.copies ? 1 + 0.014 * Math.sin(f / 7) : 1;
	const nuc1 = am(894, 600);
	const dupP = prog(f, c.copies, 30);
	const dupOp = dupP * (1 - prog(f, c.pulls + 4, 16));
	const aIn = prog(f, c.amoeba - 6, 20);
	const pIn = prog(f, c.para - 6, 24);
	const pm2 = pm(PL.para, PX, PY, PW2);
	const macro = pm2(908, 565), micro = pm2(1026, 591);
	const cutX = 1487;
	const copyP = prog(f, c.pcopies, 30);
	const slide = 38 * prog(f, c.divides + 26, 22);
	const dLine = prog(f, c.divides, 24);
	const glow = prog(f, c.pcopies, 12) * (1 - prog(f, c.pcopies + 40, 20));
	const pbob = Math.sin(f / 9) * 3;
	const parts: React.ReactNode = (
		<>
			<PArt a={PL.para} x={PX} y={PY + pbob} w={PW2} />
			<Overlay>
				<g opacity={copyP}>
					<ellipse cx={macro[0] + 205 * copyP} cy={macro[1] + pbob} rx={62} ry={32} fill="#7b4fb3" stroke="#4a2a70" strokeWidth={5} opacity={0.92} />
					<circle cx={micro[0] + 205 * copyP} cy={micro[1] + pbob} r={13} fill="#7b4fb3" stroke="#4a2a70" strokeWidth={4} />
				</g>
				<g opacity={glow}>
					<circle cx={macro[0]} cy={macro[1] + pbob} r={74} fill="none" stroke={AMBER} strokeWidth={8} />
					<circle cx={micro[0]} cy={micro[1] + pbob} r={26} fill="none" stroke={AMBER} strokeWidth={8} />
				</g>
			</Overlay>
		</>
	);
	return (
		<>
			<Heading items={[[0, 'Protists'], [c.amoeba, 'Protists that divide in two']]} size={72} />
			<Pond />
			<Pill at={c.prot + 40} out={c.amoeba} x={130} y={250} size={46}>not animals, plants or fungi</Pill>
			<Pill at={c.pond} out={c.amoeba} x={130} y={340} size={46}>many live in pond water</Pill>
			<Pill at={c.some} out={c.amoeba} x={130} y={430} size={46}>some are single cells</Pill>
			{/* amoeba */}
			<div style={{position: 'absolute', inset: 0, opacity: aIn, transform: `translateX(${dx}px) scale(${wob})`, transformOrigin: '540px 540px'}}>
				<PSeq arts={[PL.amo1, PL.amo2, PL.amo3]} x={AX} y={AY} w={AW} at={[c.pulls, c.two]} dur={24} />
				<Overlay>
					<Fade at={c.nuc} out={c.pulls}><Scribble cx={nuc1[0]} cy={nuc1[1]} rx={58} ry={58} at={c.nuc} color={'#6c3f92'} seed={6} width={6} /></Fade>
					<Nucleus x={nuc1[0] + 96 * dupP} y={nuc1[1] + 6 * dupP} r={46} o={dupOp} />
					<Fade at={c.nuc + 10} out={c.pulls}><Label x={nuc1[0]} y={nuc1[1] - 100} at={c.nuc + 10} text="nucleus" size={46} color={'#6c3f92'} /></Fade>
				</Overlay>
			</div>
			<Overlay>
				<Fade at={c.amoeba}><Label x={500 + dx} y={AY - 30} at={c.amoeba} text="amoeba" size={64} color={INK} /></Fade>
				<Fade at={c.bf}><Label x={520 + dx} y={AY + 440} at={c.bf} text="binary fission" size={64} color={SHARE} /></Fade>
			</Overlay>
			{/* paramecium */}
			<div style={{position: 'absolute', inset: 0, opacity: pIn, transform: `translateX(${(1 - pIn) * 260}px)`}}>
				{f >= c.divides ? <Split cut={cutX} d={slide}>{parts}</Split> : parts}
				<Overlay>
					<DrawPath d={`M${cutX},${PY - 30} L${cutX},${PY + 340}`} at={c.divides} dur={24} color={SPLIT} width={7} dash="14 12" opacity={1 - prog(f, c.divides + 28, 12)} />
				</Overlay>
			</div>
			<Overlay>
				<Fade at={c.para}><Label x={1390} y={PY - 36} at={c.para} text="paramecium" size={64} color={INK} /></Fade>
				<Fade at={c.hairs} out={c.pcopies - 6}><Callout from={[1330, PY + 296]} to={[1190, 790]} at={c.hairs} text="cilia: tiny hairs" color={INK_SOFT} size={46} /></Fade>
				<Fade at={c.own + 0}>
					<Tick x={1240} y={PY + 360} at={c.own} s={1.3} />
					<Label x={1240} y={PY + 440} at={c.own} text="its own copy" size={46} color={'#2f8a5b'} />
					<Tick x={1640} y={PY + 360} at={c.own + 8} s={1.3} />
					<Label x={1640} y={PY + 440} at={c.own + 8} text="its own copy" size={46} color={'#2f8a5b'} />
				</Fade>
			</Overlay>
			<Strip on={[[c.copies, c.para - 10, c.pcopies], [c.pulls, c.para - 10, c.pcopies + 44], [c.two, c.para - 10, c.divides]]} y={892} />
		</>
	);
};

// ---------- 5b. A protist that buds: Acineta ----------
const CX0 = 150, CY0 = 215, CW0 = 300;
export const SceneAcineta: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('acineta'), {few: 'a few protists', budding: 'by budding', name: 'stalked Acineta', rel: 'releases a small swimming bud', same: 'the same two methods', csp: 'copy share split',
	});
	const a = pm(PL.acin, CX0, CY0, CW0);
	const ks = CW0 / PL.acin.box[2];
	const podCenter = a(976, 408);
	const route: [number, number][] = [[976, 408], [925, 330], [895, 235], [1000, 150], [1300, 175], [1620, 250]].map(p => a(p[0], p[1]));
	const swim = prog(f, c.rel, 60);
	const pos = along(route, swim);
	const budOut = swim > 0.02;
	const budO = prog(f, c.rel, 6) * (1 - prog(f, c.same - 6, 14));
	const flick = Math.sin(f / 2.2);
	const inP = prog(f, 0, 24);
	const cols = prog(f, c.same, 16);
	return (
		<>
			<Heading items={[[0, 'Some protists bud'], [c.name, 'Acineta, a budding protist']]} size={72} />
			<PArt a={PL.acin} x={CX0} y={CY0 + 10} w={CW0} style={{opacity: inP, transform: `translateX(${(1 - inP) * -140}px)`}} />
			<Overlay>
				{/* cover the painted bud once the swimming bud has left */}
				<ellipse cx={podCenter[0]} cy={podCenter[1] + 10} rx={36} ry={42} fill="#d5d8c3" opacity={prog(f, c.rel + 8, 12)} />
				{budOut ? (
					<g opacity={budO} transform={`translate(${pos[0]},${pos[1] + 10}) rotate(${-14 + flick * 6})`}>
						{Array.from({length: 14}, (_, i) => {
							const ang = (i / 14) * Math.PI * 2;
							const len = 9 + (i % 2 ? flick * 3 : -flick * 3);
							return <line key={i} x1={Math.cos(ang) * 40} y1={Math.sin(ang) * 31} x2={Math.cos(ang) * (40 + len)} y2={Math.sin(ang) * (31 + len)} stroke="#7a7a5a" strokeWidth={3} strokeLinecap="round" />;
						})}
						<ellipse rx={42} ry={32} fill="#efefd8" stroke="#6a6a4a" strokeWidth={5} />
						<circle cx={5} cy={3} r={11} fill="#8a5cb0" />
					</g>
				) : null}
				<Fade at={c.rel + 50} out={c.same - 4}><Label x={640} y={330} at={c.rel + 50} text="a swimming bud" size={52} color={SHARE} /></Fade>
				<Fade at={c.budding + 10} out={c.same - 4}><Label x={560} y={420} at={c.budding + 10} text="budding" size={72} color={AMBER_INK} /></Fade>
			</Overlay>
			{/* the same two methods, with the examples seen so far */}
			<div style={{position: 'absolute', inset: 0, opacity: cols}}>
				<div style={{position: 'absolute', left: 560, top: 232, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 64, color: SPLIT}}>binary fission</div>
				<div style={{position: 'absolute', left: 1230, top: 232, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 64, color: SHARE}}>budding</div>
				<div style={{position: 'absolute', left: 540, top: 316, width: 600}}>
					<div style={{position: 'relative', height: 148}}><PArt a={PL.cell1} x={0} y={8} w={270} /><span style={{position: 'absolute', left: 310, top: 40, fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 42, color: INK}}>bacterium</span></div>
					<div style={{position: 'relative', height: 152}}><PArt a={PL.amo1} x={0} y={4} w={270} /><span style={{position: 'absolute', left: 310, top: 46, fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 42, color: INK}}>amoeba</span></div>
					<div style={{position: 'relative', height: 128}}><PArt a={PL.para} x={0} y={4} w={300} /><span style={{position: 'absolute', left: 340, top: 30, fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 42, color: INK}}>paramecium</span></div>
				</div>
				<div style={{position: 'absolute', left: 1210, top: 316, width: 600}}>
					<div style={{position: 'relative', height: 212}}><PArt a={PL.yeast1} x={0} y={0} w={140} /><span style={{position: 'absolute', left: 190, top: 76, fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 42, color: INK}}>baker's yeast</span></div>
					<div style={{position: 'relative', height: 200}}><PArt a={PL.acin} x={20} y={0} w={96} /><span style={{position: 'absolute', left: 190, top: 70, fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 42, color: INK}}>Acineta</span></div>
				</div>
			</div>
			<div style={{position: 'absolute', left: 560, top: 750, opacity: prog(f, c.csp, 14)}}>
				<HandText text="Copy, share, split" at={c.csp} size={104} cps={14} color={AMBER_INK} />
			</div>
			<Strip on={[[-40], [-40], [-40]]} y={892} />
		</>
	);
};
void [Arrow, Body, Line, Loop, INK, pathOf, Cross, pH, FONT_DISPLAY];
