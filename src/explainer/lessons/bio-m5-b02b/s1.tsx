import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Callout, scribbleEllipse} from '../../kit';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, ANTHERS, ART, Art, artH, BeeIcon, BLUE, Chip, DrawPath, Enter, Fade, FEMALE, FL, fp, fullKey, Heading, HandText, INK, INK_SOFT, KEY_FEMALE, KEY_MALE,
	Label, mapper, MALE, NameKey, Note, Overlay, Pin, POLLEN, prog, S, Scribble, SpermDot, Specks, EggDot, TEAL, Cross,
} from './shared';

// ---------- 1. Hook ----------
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('hook'), {
		two: 'two ways', runner: 'send a runner', newp: 'a new plant grows', flower: 'Or it can flower', bee: 'bee landing', pollen: 'called pollen',
		q: 'Has the plant made a seed yet', notyet: 'Not yet', how: 'So how does a flower',
	});
	const RUN = {x: 310, y: 230, w: 1300};
	const rm = mapper(ART.runner, RUN.x, RUN.y, RUN.w);
	const stem = [rm(390, 510), rm(700, 478), rm(950, 500), rm(1100, 526), rm(1250, 535), rm(1340, 522)];
	const stemD = `M${stem[0]} C${stem[1]} ${stem[2]} ${stem[3]} S${stem[4]} ${stem[5]}`;
	const out = prog(f, c.flower - 4, 18);
	const flowerIn = prog(f, c.flower, 20);
	const beeIn = prog(f, c.bee, 22);
	const BEE = {x: 1050, y: 250, w: 520};
	const bm = mapper(ART.bee, BEE.x, BEE.y, BEE.w);
	const leg = bm(690, 430);
	const target = bm(450, 560);
	const SF = {x: 250 + (1 - prog(f, c.bee, 24)) * 160, y: 300, w: 480};
	const specks: [number, number][] = Array.from({length: 8}, (_, i) => {
		const t = prog(f, c.pollen + i * 7, 40);
		return [leg[0] + (target[0] - leg[0] + (i - 4) * 14) * t, leg[1] + (target[1] - leg[1]) * t + Math.sin(t * Math.PI) * -30] as [number, number];
	});
	const specksO = prog(f, c.pollen, 6) * (1 - prog(f, c.q, 40));
	return (
		<>
			<Heading items={[[c.two, 'One plant, two routes'], [c.how, 'How does a flower make a seed?']]} size={76} />
			<div style={{position: 'absolute', inset: 0, opacity: 1 - out, transform: `translateX(${-out * 220}px)`}}>
				<Art a={ART.runner} x={RUN.x} y={RUN.y} w={RUN.w} style={{opacity: prog(f, c.two - 20, 24)}} />
				<Overlay>
					<DrawPath d={stemD} at={c.runner} dur={60} color={AMBER} width={14} />
					<Label x={rm(400, 360)[0] - 20} y={rm(400, 360)[1] - 40} at={c.runner + 10} text="parent plant" size={48} color={INK_SOFT} />
					<Label x={rm(1380, 320)[0]} y={rm(1380, 320)[1] - 30} at={c.newp} text="new plant" size={52} color={AMBER_INK} />
				</Overlay>
			</div>
			<div style={{opacity: flowerIn}}>
				<Art a={ART.strawFlower} x={SF.x} y={SF.y} w={SF.w} />
			</div>
			<div style={{opacity: beeIn, transform: `translateX(${(1 - beeIn) * 260}px)`}}>
				<Art a={ART.bee} x={BEE.x} y={BEE.y} w={BEE.w} />
			</div>
			<Overlay>
				<Specks pts={specks} o={specksO} />
				<Fade at={c.pollen}><Label x={bm(500, 80)[0]} y={bm(500, 80)[1]} at={c.pollen} text="pollen" size={56} color={AMBER_INK} /></Fade>
				<g opacity={prog(f, c.q, 10)}>
					<text x={790} y={640} textAnchor="middle" style={{fontFamily: "'Caveat', cursive", fontWeight: 700, fontSize: 280}} fill={AMBER_INK}>?</text>
				</g>
				<g opacity={prog(f, c.q + 18, 12) * (1 - prog(f, c.notyet + 40, 14) * 0.5)}>
					<ellipse cx={1700} cy={560} rx={64} ry={88} fill="none" stroke={INK_SOFT} strokeWidth={5} strokeDasharray="4 12" strokeLinecap="round" />
					<text x={1700} y={575} textAnchor="middle" style={{fontFamily: "'Caveat', cursive", fontWeight: 700, fontSize: 56}} fill={INK_SOFT}>seed?</text>
				</g>
				<Cross x={1700} y={560} s={2.4} at={c.notyet + 8} color="#c4432f" />
			</Overlay>
			<Enter at={c.notyet} style={{position: 'absolute', left: 1580, top: 700}}>
				<div style={{fontFamily: "'Caveat', cursive", fontWeight: 700, fontSize: 54, color: '#c4432f', whiteSpace: 'nowrap'}}>not yet</div>
			</Enter>
		</>
	);
};

// ---------- 2a. The male side ----------
export const SceneMale: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('male-side'), {
		flower: 'typical flower', problem: 'has a problem', stamens: 'stamens', anthers: 'anthers', grain: 'Each tiny pollen grain', cells: 'carries the cells', up: 'up here',
	});
	const pop = prog(f, c.grain, 16);
	const anthers = ANTHERS.map(([x, y]) => fp(x, y));
	return (
		<>
			<Heading items={[[c.flower, 'A typical flower, cut in half']]} size={72} />
			<Art a={ART.flower} x={FL.x} y={FL.y} w={FL.w} style={{opacity: prog(f, 0, 24), transform: `translateX(${(1 - prog(f, 0, 24)) * 120}px)`}} />
			<Overlay>
				<Fade at={c.stamens} out={c.stamens + 90}><Callout from={fp(372, 520)} to={[800, 470]} at={c.stamens} text="stamen" color={MALE} align="right" size={52} /></Fade>
				{anthers.map(([x, y], i) => <Scribble key={i} cx={x} cy={y} rx={34} ry={46} at={c.anthers + i * 4} color={AMBER} seed={i + 2} width={6} />)}
				<Fade at={c.anthers + 6} out={c.anthers + 100}><Callout from={fp(270, 380)} to={[800, 330]} at={c.anthers + 6} text="anther" color={MALE} align="right" size={52} /></Fade>
				{/* pollen grain pops out of an anther */}
				<g opacity={pop}>
					<DrawPath d={`M${anthers[3][0] + 30},${anthers[3][1]} C${anthers[3][0] + 120},${anthers[3][1] - 40} 1480,420 1550,462`} at={c.grain} dur={20} color={MALE} width={4} dash="3 10" />
					<g transform={`translate(1640,480) scale(${0.4 + 0.6 * pop})`}>
						<circle r={86} fill={POLLEN} stroke={AMBER_INK} strokeWidth={5} />
						{Array.from({length: 14}, (_, i) => <circle key={i} cx={Math.cos(i * 0.9) * 66} cy={Math.sin(i * 0.9) * 66} r={6} fill="#f7dc7a" />)}
						<circle r={30} fill="#fff6d6" stroke={AMBER_INK} strokeWidth={3} opacity={prog(f, c.cells, 14)} />
					</g>
				</g>
				<Fade at={c.grain + 14}><Label x={1640} y={620} at={c.grain + 14} text="pollen grain" size={50} color={MALE} /></Fade>
				<Fade at={c.cells}><Label x={1640} y={668} at={c.cells} text="a plain cell inside," size={34} color={INK_SOFT} font="body" weight={600} /><Label x={1640} y={708} at={c.cells + 6} text="which will become sperm" size={34} color={INK_SOFT} font="body" weight={600} /></Fade>
				<Pin x={fp(640, 350)[0]} y={fp(640, 350)[1] - 36} at={c.up} color={AMBER_INK} label="male side" dx={70} />
			</Overlay>
			<Enter at={c.problem} style={{position: 'absolute', left: 1500, top: 200}}>
				<Note size={40}>two places, far apart</Note>
			</Enter>
			<NameKey items={[{...KEY_MALE[0], at: c.stamens + 70}, {...KEY_MALE[1], at: c.anthers + 90}, {...KEY_MALE[2], at: c.grain + 50}]} />
			<Enter at={c.stamens + 40} style={{position: 'absolute', left: 96, top: 720}}>
				<div style={{fontFamily: "'Caveat', cursive", fontWeight: 700, fontSize: 50, color: AMBER_INK, whiteSpace: 'nowrap'}}>STAMEN has MEN in it</div>
			</Enter>
		</>
	);
};

// ---------- 2b. The female side ----------
export const SceneFemale: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('female-side'), {
		carpel: 'The female part', stigma: 'sticky top', style: 'the style', ovary: 'the ovary', ovules: 'ovules', egg: 'egg cell', buried: 'buried deep', swim: 'swim', how: 'how will they',
	});
	const OV = {x: 1545, y: 300, w: 280};
	const om = mapper(ART.ovule, OV.x, OV.y, OV.w);
	const egg = om(287, 173);
	const pinA = fp(640, 350);
	const pinE = fp(EGG_X, EGG_Y);
	const lineP = prog(f, c.swim, 36);
	return (
		<>
			<Heading items={[[c.carpel, 'The female side']]} size={72} />
			<Art a={ART.flower} x={FL.x} y={FL.y} w={FL.w} />
			<Overlay>
				<Scribble cx={fp(470, 400)[0]} cy={fp(470, 400)[1] + 20} rx={84} ry={262} at={c.carpel + 40} color={FEMALE} seed={5} width={6} />
				<Fade at={c.carpel + 40} out={c.carpel + 60}><Label x={800} y={140} at={c.carpel + 40} text="carpel" size={52} color={FEMALE} anchor="end" /></Fade>
				<Fade at={c.stigma} out={c.stigma + 100}><Callout from={fp(430, 128)} to={[800, 190]} at={c.stigma} text="stigma" color={FEMALE} align="right" size={52} /></Fade>
				<Fade at={c.style} out={c.style + 100}><Callout from={fp(450, 400)} to={[800, 360]} at={c.style} text="style" color={FEMALE} align="right" size={52} /></Fade>
				<Fade at={c.ovary} out={c.ovary + 100}><Callout from={fp(366, 700)} to={[800, 520]} at={c.ovary} text="ovary" color={FEMALE} align="right" size={52} /></Fade>
				<Fade at={c.ovules} out={c.ovules + 110}><Callout from={fp(415, 770)} to={[800, 660]} at={c.ovules} text="ovules" color={FEMALE} align="right" size={52} /></Fade>
				<Pin x={pinA[0]} y={pinA[1] - 36} at={0} color={AMBER_INK} label="pollen" dx={60} />
				<Pin x={pinE[0]} y={pinE[1] + 10} at={c.buried} color={FEMALE} label="egg" dx={-44} />
				<path d={`M${pinA[0]},${pinA[1] - 26} L${pinA[0] + (pinE[0] - pinA[0]) * lineP},${pinA[1] - 26 + (pinE[1] - 40 - pinA[1] + 26) * lineP}`} stroke="#c4432f" strokeWidth={5} strokeDasharray="3 12" strokeLinecap="round" fill="none" />
				<g opacity={prog(f, c.swim, 12)}>
					<SpermDot x={pinA[0] + 120} y={(pinA[1] + pinE[1]) / 2} s={1.3} />
					<Cross x={pinA[0] + 112} y={(pinA[1] + pinE[1]) / 2} s={2} at={c.swim + 8} />
				</g>
				{/* ovule close-up inset */}
				<g opacity={prog(f, c.ovules, 16)}>
					<rect x={OV.x - 24} y={OV.y - 28} width={OV.w + 48} height={artH(ART.ovule, OV.w) + 56} rx={26} fill="#fffdf8" stroke="rgba(60,45,20,0.12)" strokeWidth={2} />
				</g>
			</Overlay>
			<Art a={ART.ovule} x={OV.x} y={OV.y} w={OV.w} style={{opacity: prog(f, c.ovules, 16)}} />
			<Overlay>
				<Scribble cx={egg[0]} cy={egg[1]} rx={30} ry={30} at={c.egg} color={FEMALE} seed={7} width={5} />
				<Fade at={c.egg}><Label x={OV.x + OV.w / 2} y={OV.y - 44} at={c.egg} text="egg cell inside the ovule" size={42} color={FEMALE} /></Fade>
				<Fade at={c.how}><Label x={OV.x + OV.w / 2} y={OV.y + artH(ART.ovule, OV.w) + 72} at={c.how} text="how will sperm get there?" size={44} color="#c4432f" /></Fade>
			</Overlay>
			<NameKey items={[...KEY_MALE.map(k => ({...k, at: -20})), {...KEY_FEMALE[0], at: c.stigma + 70}, {...KEY_FEMALE[1], at: c.style + 70}, {...KEY_FEMALE[2], at: c.ovary + 70}, {...KEY_FEMALE[3], at: c.ovules + 70}, {...KEY_FEMALE[4], at: c.egg + 20}]} />
		</>
	);
};
const EGG_X = 527, EGG_Y = 676;
void [AMBER, BLUE, Chip, INK, HandText, EggDot, TEAL, scribbleEllipse, fullKey, BeeIcon];
