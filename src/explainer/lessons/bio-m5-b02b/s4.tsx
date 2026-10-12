import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Mark} from '../../kit';
import {cues} from '../../cues';
import {POTS} from '../bio-m5-b01/shared';
import {
	AMBER, AMBER_INK, ART, Art, artH, BeeIcon, BLUE, Body, Cross, DrawPath, EggDot, Enter, Fade, FEMALE, FONT_DISPLAY, FONT_HAND, GREEN, Heading, INK, INK_SOFT, Label, mapper, MALE,
	Note, Overlay, prog, S, Scribble, SeqIcon, SeqKind, SpermDot, TEAL, WATER_LINE, POLLEN, Arrow, Chip,
} from './shared';

const Pill: React.FC<{at: number; children: React.ReactNode; color?: string}> = ({at, children, color = TEAL}) => (
	<Enter at={at} dy={14}><span style={{display: 'inline-block', fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, color, background: '#fffdf8', border: `3px solid ${color}`, borderRadius: 999, padding: '0 26px 6px', whiteSpace: 'nowrap'}}>{children}</span></Enter>
);

const MiniPlant: React.FC<{x: number; y: number; s?: number}> = ({x, y, s = 1}) => (
	<g transform={`translate(${x},${y}) scale(${s})`}>
		<path d="M0,0 L0,-34" stroke="#2f6a2c" strokeWidth={5} strokeLinecap="round" />
		<ellipse cx={-14} cy={-36} rx={16} ry={8} fill="#9fd08a" stroke="#2f6a2c" strokeWidth={3} transform="rotate(-25 -14 -36)" />
		<ellipse cx={14} cy={-36} rx={16} ry={8} fill="#9fd08a" stroke="#2f6a2c" strokeWidth={3} transform="rotate(25 14 -36)" />
		<path d="M-18,0 L18,0" stroke="#8a6a3c" strokeWidth={5} strokeLinecap="round" />
	</g>
);

// ---------- 7. Vegetative propagation ----------
export const SceneVegetative: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('vegetative'), {
		second: 'second way', piece: 'A piece of the parent', grows: 'grows roots and leaves', sep: 'separate plant', vp: 'vegetative propagation', strawb: 'the strawberry runner', onion: 'An onion bulb',
		newb: 'small new bulbs', potato: 'A potato tuber', shoots: 'new shoots', cutting: 'cutting grows', cut: 'cut end', nosperm: 'no sperm joined', asex: 'asexual reproduction', clone: 'a clone', carrier: 'a bee or the wind',
	});
	const RN = {x: 96, y: 508, w: 560};
	const rm = mapper(ART.runner, RN.x, RN.y, RN.w);
	const stem = [rm(390, 510), rm(700, 478), rm(950, 500), rm(1100, 526), rm(1250, 535), rm(1340, 522)];
	const ON = {x: 700, y: 290, w: 147};
	const om = mapper(ART.onion, ON.x, ON.y, ON.w);
	const PO = {x: 920, y: 434, w: 440};
	const pm = mapper(ART.potato, PO.x, PO.y, PO.w);
	const MI = {x: 1400, y: 290, w: 281};
	const mm = mapper(ART.mint, MI.x, MI.y, MI.w);
	const base = 840;
	return (
		<>
			<Heading items={[[c.second, 'A second route: no flowers']]} size={76} />
			<div style={{position: 'absolute', left: 96, top: 200, display: 'flex', alignItems: 'center', gap: 18}}>
				<Pill at={c.piece}>piece of the parent</Pill>
				<Enter at={c.grows}><span style={{fontFamily: FONT_DISPLAY, fontSize: 44, color: INK_SOFT}}>&rarr;</span></Enter>
				<Pill at={c.grows}>grows roots and leaves</Pill>
				<Enter at={c.sep}><span style={{fontFamily: FONT_DISPLAY, fontSize: 44, color: INK_SOFT}}>&rarr;</span></Enter>
				<Pill at={c.sep}>new, separate plant</Pill>
				<Enter at={c.vp} style={{marginLeft: 30}}><span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 52, color: AMBER_INK}}>= vegetative propagation</span></Enter>
			</div>
			<Overlay>
				<g opacity={1 - prog(f, c.strawb - 6, 16)}>
					<g opacity={prog(f, c.piece, 14)}>
						<MiniPlant x={330} y={680} s={4.2} />
						<path d="M140,684 L520,684" stroke="#6b4b1d" strokeWidth={10} strokeLinecap="round" />
						<text x={330} y={760} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 48}} fill={INK}>the parent plant</text>
						<DrawPath d="M440,590 L610,640" at={c.piece + 20} dur={14} color="#c4432f" width={5} dash="3 10" />
						<text x={560} y={560} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40}} fill="#c4432f" opacity={prog(f, c.piece + 24, 10)}>a piece</text>
					</g>
					<g opacity={prog(f, c.grows, 14)}>
						<Arrow x1={700} y1={600} x2={880} y2={600} at={c.grows} color={INK_SOFT} />
						<g transform="translate(1100,640)">
							<path d="M0,-140 L0,40" stroke="#2f6a2c" strokeWidth={14} strokeLinecap="round" />
							<ellipse cx={-48} cy={-120} rx={48} ry={22} fill="#9fd08a" stroke="#2f6a2c" strokeWidth={5} transform="rotate(-25 -48 -120)" />
							<ellipse cx={48} cy={-120} rx={48} ry={22} fill="#9fd08a" stroke="#2f6a2c" strokeWidth={5} transform="rotate(25 48 -120)" />
							<path d="M0,40 C-10,80 -34,100 -46,130 M0,40 C4,86 10,108 8,138 M0,40 C20,76 44,96 60,122" fill="none" stroke="#8a6a3c" strokeWidth={7} strokeLinecap="round" opacity={prog(f, c.grows + 14, 30)} />
							<text x={0} y={200} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 48}} fill={INK}>roots and leaves grow</text>
						</g>
					</g>
					<g opacity={prog(f, c.sep, 14)}>
						<Arrow x1={1330} y1={600} x2={1480} y2={600} at={c.sep} color={INK_SOFT} />
						<MiniPlant x={1640} y={680} s={4.2} />
						<text x={1640} y={760} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 48}} fill={TEAL}>a separate new plant</text>
					</g>
				</g>
			</Overlay>
			<Art a={ART.runner} x={RN.x} y={RN.y} w={RN.w} style={{opacity: prog(f, c.strawb, 18), transform: `translateX(${(1 - prog(f, c.strawb, 22)) * -80}px)`}} />
			<Art a={ART.onion} x={ON.x} y={ON.y} w={ON.w} style={{opacity: prog(f, c.onion, 18), transform: `translateY(${(1 - prog(f, c.onion, 22)) * 40}px)`}} />
			<Art a={ART.potato} x={PO.x} y={PO.y} w={PO.w} style={{opacity: prog(f, c.potato, 18), transform: `translateY(${(1 - prog(f, c.potato, 22)) * 40}px)`}} />
			<Art a={ART.mint} x={MI.x} y={MI.y} w={MI.w} style={{opacity: prog(f, c.cutting, 18), transform: `translateY(${(1 - prog(f, c.cutting, 22)) * 40}px)`}} />
			<Overlay>
				<DrawPath d={`M${stem[0]} C${stem[1]} ${stem[2]} ${stem[3]} S${stem[4]} ${stem[5]}`} at={c.strawb + 10} dur={50} color={AMBER} width={11} />
				<Label x={RN.x + 280} y={base} at={c.strawb + 14} text="runner" size={48} color={INK} />
				<Scribble cx={om(40, 1092)[0]} cy={om(40, 1092)[1]} rx={26} ry={26} at={c.newb} color={AMBER} seed={2} width={5} />
				<Scribble cx={om(266, 1101)[0]} cy={om(266, 1101)[1]} rx={26} ry={26} at={c.newb + 6} color={AMBER} seed={3} width={5} />
				<Label x={ON.x + 74} y={base} at={c.onion + 14} text="onion bulb" size={48} color={INK} />
				<Scribble cx={pm(116, 292)[0]} cy={pm(116, 292)[1]} rx={30} ry={30} at={c.shoots} color={AMBER} seed={4} width={5} />
				<Scribble cx={pm(463, 34)[0]} cy={pm(463, 34)[1]} rx={30} ry={30} at={c.shoots + 6} color={AMBER} seed={5} width={5} />
				<Scribble cx={pm(807, 236)[0]} cy={pm(807, 236)[1]} rx={30} ry={30} at={c.shoots + 12} color={AMBER} seed={6} width={5} />
				<Label x={PO.x + 220} y={base} at={c.potato + 14} text="potato tuber" size={48} color={INK} />
				<Scribble cx={mm(338, 1039)[0]} cy={mm(338, 1039)[1]} rx={52} ry={40} at={c.cut} color={AMBER} seed={7} width={5} />
				<Label x={MI.x + 140} y={base} at={c.cutting + 14} text="cutting" size={48} color={INK} />
				{/* no sperm, no egg */}
				<g opacity={prog(f, c.nosperm, 12)}>
					<SpermDot x={150} y={930} s={1.1} />
					<EggDot x={250} y={930} r={20} />
					<text x={310} y={944} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44}} fill={INK}>no sperm, no egg</text>
				</g>
				<Cross x={200} y={930} s={1.6} at={c.nosperm + 12} />
				{/* clone */}
				<g opacity={prog(f, c.clone, 14)}>
					<MiniPlant x={800} y={950} s={1.5} /><MiniPlant x={880} y={950} s={1.5} />
					<text x={940} y={944} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44}} fill={TEAL}>a clone of the parent</text>
				</g>
				{/* no carrier needed */}
				<g opacity={prog(f, c.carrier, 12)}>
					<BeeIcon x={1360} y={926} s={0.8} />
					<DrawPath d="M1420,914 q22,-18 44,0 t44,0" at={c.carrier} dur={14} color={WATER_LINE} width={6} />
					<text x={1530} y={944} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44}} fill={INK}>no carrier needed</text>
				</g>
				<Cross x={1400} y={926} s={1.7} at={c.carrier + 10} />
			</Overlay>
		</>
	);
};

// ---------- 8. When are seeds the better route? ----------
const Panel: React.FC<{x: number; y: number; w: number; h: number; at: number; title: string; color: string}> = ({x, y, w, h, at, title, color}) => (
	<Enter at={at} dy={14} style={{position: 'absolute', left: x, top: y, width: w}}>
		<div style={{height: h, background: '#fffdf8', borderRadius: 24, border: `3px solid ${color}`, boxShadow: '0 18px 40px rgba(60,45,20,0.10)', boxSizing: 'border-box', padding: '14px 28px'}}>
			<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 56, color}}>{title}</div>
		</div>
	</Enter>
);

export const SceneSeedsBetter: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('seeds-better'), {
		when: 'So when is making', depends: 'depends on the conditions', paddock: 'steady paddock', runners: 'spread fast by runners', nocarrier: 'no carrier needed', disease: 'a new disease', clones: 'a field of clones',
		fail: 'fail together', seeds: 'Seeds come from sexual', vary: 'the seedlings vary', survive: 'some may survive', far: 'Seeds can travel far', newp: 'reach new places', sum1: 'Runners are fast', sum2: 'Seeds make varied',
	});
	const RN = {x: 150, y: 300, w: 640};
	const CR = {x: 1070, y: 270, w: 620};
	const SL = {x: 1100, y: 486, w: 560};
	const arc = prog(f, c.newp, 40);
	const rb = RN.y + artH(ART.runner, RN.w);
	const sb = SL.y + artH(ART.seedlings, SL.w);
	return (
		<>
			<Heading items={[[c.when, 'When are seeds the better route?']]} size={72} />
			<Panel x={96} y={190} w={840} h={690} at={c.paddock - 10} title="Steady paddock" color={GREEN} />
			<Panel x={984} y={190} w={840} h={690} at={c.disease - 10} title="New disease arrives" color={FEMALE} />
			<Art a={ART.runner} x={RN.x} y={RN.y} w={RN.w} style={{opacity: prog(f, c.runners, 18)}} />
			<Art a={ART.cloneRow} x={CR.x} y={CR.y} w={CR.w} style={{opacity: prog(f, c.clones, 18)}} />
			<Art a={ART.seedlings} x={SL.x} y={SL.y} w={SL.w} style={{opacity: prog(f, c.vary, 18)}} />
			<Overlay>
				<Fade at={c.runners}><Label x={RN.x + 320} y={rb + 60} at={c.runners} text="runners spread fast" size={50} color={GREEN} /></Fade>
				<Fade at={c.nocarrier}><Label x={RN.x + 320} y={rb + 120} at={c.nocarrier} text="no carrier needed" size={46} color={INK_SOFT} /></Fade>
				<Mark x={800} y={250} at={c.nocarrier + 20} kind="tick" size={56} />
				<Fade at={c.sum1}><Label x={RN.x + 320} y={rb + 190} at={c.sum1} text="alike and close" size={54} color={AMBER_INK} /></Fade>
				<Fade at={c.fail}><Label x={CR.x + 310} y={CR.y + artH(ART.cloneRow, CR.w) + 50} at={c.fail} text="same weakness, so they fail together" size={42} color="#c4432f" /></Fade>
				{[1, 3].map((p, i) => <Scribble key={p} cx={SL.x + POTS[p] * SL.w} cy={SL.y + artH(ART.seedlings, SL.w) * 0.55} rx={40} ry={62} at={c.survive + i * 8} color={GREEN} seed={p + 2} width={6} />)}
				<Fade at={c.survive}><Label x={SL.x + 280} y={sb + 44} at={c.survive} text="varied, so some survive" size={42} color={GREEN} /></Fade>
				{/* seed travels over a fence to a bare patch */}
				<g opacity={prog(f, c.far, 14)}>
					<path d="M1330,860 L1330,806 M1370,860 L1370,806 M1410,860 L1410,806 M1316,822 L1424,822" stroke="#8a6a3c" strokeWidth={6} strokeLinecap="round" />
					<rect x={1560} y={816} width={210} height={54} rx={14} fill="none" stroke={INK_SOFT} strokeWidth={4} strokeDasharray="4 12" />
					<text x={1665} y={806} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 34}} fill={INK_SOFT}>new place</text>
					<g transform={`translate(${1120 + 540 * arc},${850 - Math.sin(arc * Math.PI) * 120})`}><ellipse rx={13} ry={18} fill="#c9a86a" stroke="#6b4b1d" strokeWidth={3} /></g>
				</g>
				<Fade at={c.sum2}><Label x={1760} y={248} at={c.sum2} text="varied and far" size={54} color={AMBER_INK} anchor="end" /></Fade>
			</Overlay>
			<Enter at={c.depends} style={{position: 'absolute', left: 1000, top: 100}}><Note size={40}>it depends on the conditions</Note></Enter>
		</>
	);
};

// ---------- 9. Worked outline ----------
const KEYW = /(pollen tube|pollination|fertilisation|zygote|embryo|seed|fruit|sperm cell)/gi;
const Sentence: React.FC<{lead: string; rest: string; k: SeqKind; at: number; y: number; h?: number}> = ({lead, rest, k, at, y, h = 118}) => {
	const parts = rest.split(KEYW);
	return (
		<Enter at={at} dy={22} style={{position: 'absolute', left: 96, top: y, width: 1180}}>
			<div style={{height: h, background: '#fffdf8', borderRadius: 20, border: '2px solid rgba(60,45,20,0.1)', boxShadow: '0 12px 28px rgba(60,45,20,0.08)', boxSizing: 'border-box', padding: '12px 24px', display: 'flex', alignItems: 'center', gap: 20}}>
				<svg width={64} height={64} viewBox="-34 -34 68 68" style={{flex: 'none'}}><SeqIcon k={k} x={0} y={0} s={1.1} /></svg>
				<div style={{fontFamily: FONT_DISPLAY, fontSize: 30, fontWeight: 500, color: INK, lineHeight: 1.25}}>
					<span style={{fontWeight: 800, color: TEAL, borderBottom: `5px solid ${TEAL}`}}>{lead}</span>
					{parts.map((p, i) => (i % 2 ? <span key={i} style={{fontWeight: 800, color: AMBER_INK, background: 'rgba(240,184,60,0.22)', borderRadius: 6, padding: '0 4px'}}>{p}</span> : <span key={i}>{p}</span>))}
				</div>
			</div>
		</Enter>
	);
};
const Bracket: React.FC<{y1: number; y2: number; at: number; text: string}> = ({y1, y2, at, text}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 14);
	return (
		<>
			<Overlay><DrawPath d={`M1306,${y1} q22,0 22,22 L1328,${(y1 + y2) / 2 - 14} q0,16 16,16 q-16,0 -16,16 L1328,${y2 - 22} q0,22 -22,22`} at={at} dur={18} color={AMBER_INK} width={5} /></Overlay>
			<div style={{position: 'absolute', left: 1368, top: (y1 + y2) / 2 - 30, width: 470, opacity: p, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, color: AMBER_INK, lineHeight: 1}}>{text}</div>
		</>
	);
};

export const SceneWorkedOutline: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('worked-outline'), {
		build: 'build a model answer', question: 'The question', cmd: 'The command word', seq: 'sequence words', first: 'First', then: 'Then', next: 'Next', fert: 'That is fertilisation', fin: 'Finally',
	});
	const Y = [300, 434, 568, 702];
	return (
		<>
			<Heading items={[[c.build, 'Build a model answer']]} size={76} />
			<Enter at={c.question} style={{position: 'absolute', left: 96, top: 186, width: 1728}}>
				<div style={{background: '#fffdf8', borderRadius: 18, border: `3px solid ${AMBER}`, padding: '8px 24px', fontFamily: FONT_DISPLAY, fontSize: 31, fontWeight: 600, color: INK}}>
					<span style={{color: INK_SOFT, fontWeight: 700}}>Question: </span>
					<span style={{fontWeight: 800}}>Outline</span> sexual reproduction in flowering plants from pollination to seed formation.
				</div>
			</Enter>
			<Overlay><DrawPath d="M262,244 C300,252 340,238 390,246" at={c.cmd} dur={14} color={AMBER} width={6} /></Overlay>
			<Enter at={c.cmd} style={{position: 'absolute', left: 96, top: 246}}><span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, color: AMBER_INK}}>outline = give the main steps, in order</span></Enter>
			<Enter at={c.seq} style={{position: 'absolute', left: 1000, top: 246}}><span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, color: TEAL}}>so use sequence words</span></Enter>
			<Sentence lead="First," rest=" pollen is transferred from an anther to a stigma, by wind, water or animals." k="land" at={c.first - 6} y={Y[0]} />
			<Sentence lead="Then" rest=" the pollen grain grows a pollen tube down the style to an ovule, carrying sperm cells." k="tube" at={c.then - 6} y={Y[1]} />
			<Sentence lead="Next," rest=" a sperm cell joins the egg cell in the ovule. That is fertilisation, and it forms a zygote that develops into an embryo." k="join" at={c.next - 6} y={Y[2]} />
			<Sentence lead="Finally," rest=" the ovule develops into a seed holding the embryo, and in many plants the ovary develops into a fruit." k="seed" at={c.fin - 6} y={Y[3]} />
			<Bracket y1={Y[0]} y2={Y[0] + 118} at={c.first + 50} text="1 mark: pollination" />
			<Bracket y1={Y[1]} y2={Y[2] + 118} at={c.fert + 20} text="1 mark: fertilisation" />
			<Bracket y1={Y[3]} y2={Y[3] + 118} at={c.fin + 60} text="1 mark: embryo and seed" />
			<Enter at={c.fin + 90} style={{position: 'absolute', left: 1368, top: 850}}><span style={{fontFamily: FONT_DISPLAY, fontSize: 24, fontWeight: 600, color: INK_SOFT}}>marking guide from the site's model answer</span></Enter>
		</>
	);
};
void [BLUE, Body, GREEN, MALE, SeqIcon, Arrow, Chip, POLLEN, INK];
