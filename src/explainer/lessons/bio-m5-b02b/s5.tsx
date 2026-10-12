import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Countdown} from '../../kit';
import {cues} from '../../cues';
import {HAVE, PAINTBRUSH} from './assets';
import {POTS} from '../bio-m5-b01/shared';
import {
	AMBER, AMBER_INK, ART, Art, artH, BLUE, Body, Brush, Cross, DrawPath, Enter, Fade, FEMALE, fp, FONT_DISPLAY, FONT_HAND, GOLD, GREEN, HandText, Heading, INK, INK_SOFT, Label, mapper, Note,
	Overlay, pathOf, POLLEN, prog, S, Scribble, SeqIcon, SeqKind, Specks, TEAL, TUBE_BOX, Chip, RED,
} from './shared';

const FY = 230, FH = 710;
const CX = [96, 676, 1256];
const CW = 568;
const TITLES = ['Mesh-bagged flowers', 'Paintbrush pollination', 'Potatoes from tubers'];

const Badge: React.FC<{n: number}> = ({n}) => (
	<div style={{width: 54, height: 54, borderRadius: 999, background: AMBER, color: '#fff', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 30, display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none'}}>{n}</div>
);
const Frame: React.FC<{i: number; at: number; h?: number}> = ({i, at, h = FH}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 16);
	return (
		<div style={{position: 'absolute', left: CX[i], top: FY, width: CW, height: h, opacity: p, transform: `translateY(${(1 - p) * 18}px)`, background: '#fffdf8', borderRadius: 24, boxShadow: '0 18px 40px rgba(60,45,20,0.10), 0 2px 6px rgba(60,45,20,0.06)', border: '1.5px solid rgba(60,45,20,0.08)', boxSizing: 'border-box'}}>
			<div style={{display: 'flex', alignItems: 'center', gap: 16, padding: '16px 24px 0'}}>
				<Badge n={i + 1} />
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, color: INK, lineHeight: 1}}>{TITLES[i]}</div>
			</div>
		</div>
	);
};
const Col: React.FC<{i: number; y: number; children: React.ReactNode}> = ({i, y, children}) => (
	<div style={{position: 'absolute', left: CX[i] + 28, top: FY + y, width: CW - 56, display: 'flex', flexDirection: 'column', gap: 12}}>{children}</div>
);
const Para: React.FC<{at: number; q?: boolean; children: React.ReactNode}> = ({at, q, children}) => (
	<Enter at={at}>
		<Body size={q ? 30 : 28} weight={q ? 800 : 600} color={q ? AMBER_INK : INK} style={{lineHeight: 1.2}}>{children}</Body>
	</Enter>
);

const potatoCopies = (i: number, at: number, y: number, spots = false) => (
	<>
		{[0, 1, 2].map(k => <Art key={k} a={ART.potato} x={CX[i] + 40 + k * 104} y={FY + y} w={92} style={{opacity: prog(useCurrentFrame(), at + k * 5, 14)}} />)}
		{spots ? [0, 1, 2].map(k => (
			<Overlay key={k}>{[[-22, 22], [10, 34], [30, 14]].map(([dx, dy], j) => <circle key={j} cx={CX[i] + 40 + k * 104 + 46 + dx * 0.8} cy={FY + y + 32 + dy * 0.7} r={6} fill="#c4432f" opacity={0.85} />)}</Overlay>
		)) : null}
	</>
);

const BRUSH_TUBE: [number, number][] = [[506, 335], [504, 450], [503, 560], [503, 640], [520, 680], [542, 692]];
const FlowerBrush: React.FC<{i: number; at: number; tubeAt: number; p: number; w?: number; y?: number}> = ({i, at, tubeAt, p, w = 215, y = 90}) => {
	const f = useCurrentFrame();
	const X = CX[i] + (CW - w) / 2;
	const plate = HAVE.has(PAINTBRUSH);
	const m = mapper(plate ? ART.brush : ART.flower, X, FY + y, w);
	const tp = (plate ? BRUSH_TUBE : TUBE_BOX).map(([a, b]) => m(a, b));
	const stig = plate ? m(506, 320) : m(470, 128);
	const tip = prog(f, tubeAt, 50) * p;
	return (
		<>
			<Art a={plate ? ART.brush : ART.flower} x={X} y={FY + y} w={w} style={{opacity: prog(f, at, 16)}} />
			<Overlay>
				<g opacity={prog(f, tubeAt, 4) ? 1 : 0}>
					<path d={pathOf(tp)} fill="none" stroke="#8a5a0c" strokeWidth={7} strokeLinecap="round" strokeLinejoin="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - tip} />
					<path d={pathOf(tp)} fill="none" stroke={GOLD} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - tip} />
				</g>
				{plate ? null : <Specks pts={[[stig[0] - 8, stig[1] - 6], [stig[0] + 6, stig[1] - 10], [stig[0] + 14, stig[1] - 2]]} r={4} o={prog(f, at + 10, 10)} />}
				{plate ? null : <Brush x={stig[0] + 6} y={stig[1] - 8} rot={75} s={0.45} o={prog(f, at + 6, 14)} />}
			</Overlay>
		</>
	);
};

// ---------- 10. Attempt ----------
export const SceneAttempt: React.FC = () => {
	const scene = S('attempt');
	const c = cues(scene, {
		turn: 'Your turn', one: 'One', c1: 'a grower covers', c1b: 'The grower also removes', q1: 'Which step failed', two: 'Two', c2: 'a gardener brushes', c2b: 'Two days later', q2: 'Has fertilisation happened',
		three: 'Three', c3: 'a farmer grows', c3b: 'a new disease', q3: 'Why is that field', pause: 'Pause the video',
	});
	const hold = scene.responseHold ?? {startFrame: 1510, endFrame: 2710};
	const bw = 176;
	return (
		<>
			<div style={{position: 'absolute', left: 96, top: 92}}><HandText text="Your turn: three situations" at={c.turn} size={76} cps={30} /></div>
			<Frame i={0} at={c.one} /><Frame i={1} at={c.two} /><Frame i={2} at={c.three} />
			<Art a={ART.bagged} x={CX[0] + (CW - bw) / 2} y={FY + 78} w={bw} style={{opacity: prog(useCurrentFrame(), c.c1, 16)}} />
			<FlowerBrush i={1} at={c.c2} tubeAt={c.c2b} p={0.55} w={226} y={70} />
			{potatoCopies(2, c.c3, 76)}
			<Art a={ART.seedlings} x={CX[2] + 50} y={FY + 188} w={250} style={{opacity: prog(useCurrentFrame(), c.c3b, 16)}} />
			<Overlay>
				<Fade at={c.c3}><Label x={CX[2] + 190} y={FY + 168} at={c.c3} text="tuber pieces" size={32} color={INK_SOFT} /></Fade>
				<Fade at={c.c3b}><Label x={CX[2] + 190} y={FY + 290} at={c.c3b} text="a row grown from seed" size={32} color={INK_SOFT} /></Fade>
				<Countdown start={hold.startFrame} end={hold.endFrame} x={1740} y={110} r={44} />
			</Overlay>
			<Col i={0} y={312}>
				<Para at={c.c1}>Mesh bags cover the flowers before they open, so that bees and wind can't get to them.</Para>
				<Para at={c.c1b}>The anthers are removed, so the flowers have no pollen of their own. No seeds form.</Para>
				<Para at={c.q1} q>Which step failed, and why?</Para>
			</Col>
			<Col i={1} y={312}>
				<Para at={c.c2}>A gardener brushes pollen onto the stigma with a small paintbrush.</Para>
				<Para at={c.c2b}>Two days later, pollen tubes are growing down the style but have not reached the ovules.</Para>
				<Para at={c.q2} q>Has fertilisation happened yet? Why or why not?</Para>
			</Col>
			<Col i={2} y={312}>
				<Para at={c.c3}>A farmer grows potatoes from pieces of last year's tubers.</Para>
				<Para at={c.c3b}>A new disease arrives.</Para>
				<Para at={c.q3} q>Why is this field at more risk than a field grown from seed?</Para>
			</Col>
			<Enter at={c.pause} style={{position: 'absolute', left: 900, top: 112}}><span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: INK_SOFT}}>Pause the video if you would like more time.</span></Enter>
		</>
	);
};

// ---------- 11. Feedback ----------
const MiniStrip: React.FC<{i: number; y: number; at: number; states: ('lit' | 'off' | 'half')[]; crossAt: (number | null)[]}> = ({i, y, at, states, crossAt}) => {
	const f = useCurrentFrame();
	const ks: SeqKind[] = ['land', 'tube', 'join', 'seed'];
	return (
		<div style={{position: 'absolute', left: CX[i] + 24, top: FY + y, display: 'flex', gap: 8, opacity: prog(f, at, 14)}}>
			{ks.map((k, n) => (
				<div key={k} style={{position: 'relative', width: 124, height: 56, borderRadius: 999, border: `3px solid ${states[n] === 'off' ? '#c9c0b0' : AMBER}`, background: states[n] === 'lit' ? '#fff4d6' : '#fffdf8', opacity: states[n] === 'off' ? 0.55 : 1, display: 'flex', alignItems: 'center', gap: 2, paddingLeft: 8, boxSizing: 'border-box'}}>
					<svg width={40} height={40} viewBox="-30 -30 60 60"><SeqIcon k={k} x={0} y={0} s={0.9} /></svg>
					<span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 34, color: AMBER_INK}}>{k}</span>
					{crossAt[n] !== null ? <svg width={124} height={56} viewBox="0 0 124 56" style={{position: 'absolute', left: -3, top: -3, opacity: prog(f, crossAt[n] as number, 8)}}><path d="M16,8 L108,48 M108,8 L16,48" stroke="#c4432f" strokeWidth={6} strokeLinecap="round" /></svg> : null}
				</div>
			))}
		</div>
	);
};
const Stamp: React.FC<{i: number; at: number; text: string; color: string; y: number; size?: number}> = ({i, at, text, color, y, size = 30}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 12);
	return <div style={{position: 'absolute', left: CX[i] + 40, top: FY + y, transform: 'rotate(-4deg)', opacity: p, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, letterSpacing: 2, color, border: `5px solid ${color}`, borderRadius: 14, padding: '4px 16px', background: '#fffdf8', whiteSpace: 'nowrap'}}>{text}</div>;
};
const RCol: React.FC<{i: number; y: number; children: React.ReactNode}> = ({i, y, children}) => (
	<div style={{position: 'absolute', left: CX[i] + 24, top: FY + y, width: CW - 48, display: 'flex', flexDirection: 'column', gap: 10}}>{children}</div>
);
const Reason: React.FC<{at: number; color: string; children: React.ReactNode; size?: number}> = ({at, color, children, size = 28}) => (
	<Enter at={at}>
		<div style={{background: '#fffdf8', border: `3px solid ${color}`, borderRadius: 16, padding: '6px 14px'}}><Body size={size} weight={700} color={AMBER_INK} style={{lineHeight: 1.16}}>{children}</Body></div>
	</Enter>
);

export const SceneFeedback: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('feedback'), {
		v1: 'pollination failed', mesh: 'The mesh kept out', own: 'no pollen of their own', tube: 'no pollen tube grew', sperm: 'no sperm met an egg', seeds: 'no seeds formed', knock: 'Fertilisation did not happen either',
		v2: 'not yet', brush: 'The brush did', fert: 'Fertilisation happens when', ifyes: 'If you said yes', v3: 'the potatoes are all clones', alleles: 'share the same alleles', dis: 'A disease that can attack', vary: 'Seedlings from seed vary', ifc: 'If you said clones',
	});
	const bw = 160;
	const sm = mapper(ART.seedlings, CX[2] + 50, FY + 200, 250);
	return (
		<>
			<div style={{position: 'absolute', left: 96, top: 92}}><HandText text="Here is how it works" at={4} size={76} cps={30} /></div>
			{[0, 1, 2].map(i => <Frame key={i} i={i} at={0} />)}
			<Art a={ART.bagged} x={CX[0] + (CW - bw) / 2} y={FY + 76} w={bw} />
			<MiniStrip i={0} y={290} at={c.v1} states={['lit', 'off', 'off', 'off']} crossAt={[c.v1 + 6, c.tube, c.sperm, c.seeds]} />
			<Stamp i={0} at={c.v1} text="POLLINATION FAILED" color="#c4432f" y={354} size={28} />
			<RCol i={0} y={420}>
				<Reason at={c.mesh} color={AMBER}>The bag stops the arrival: no pollen reaches the stigma.</Reason>
				<Reason at={c.knock} color={INK_SOFT} size={26}>No fertilisation either: a knock-on effect.</Reason>
			</RCol>
			<FlowerBrush i={1} at={-20} tubeAt={-20} p={0.55} w={216} y={64} />
			<MiniStrip i={1} y={290} at={c.v2} states={['lit', 'half', 'off', 'off']} crossAt={[null, null, null, null]} />
			<Stamp i={1} at={c.v2} text="NOT YET" color="#c4432f" y={354} size={28} />
			<RCol i={1} y={420}>
				<Reason at={c.brush} color={AMBER}>Brush = arrival. The tubes are still on their way: no joining yet.</Reason>
				<Reason at={c.ifyes} color={INK_SOFT} size={26}>Pollen on the flower is pollination, not fertilisation.</Reason>
			</RCol>
			{potatoCopies(2, -20, 70, true)}
			<Art a={ART.seedlings} x={CX[2] + 50} y={FY + 200} w={250} />
			<Overlay>
				<Label x={CX[2] + 190} y={FY + 186} at={c.alleles} text="clones: the same weakness" size={32} color="#c4432f" />
				{[1, 3].map((p, k) => <Scribble key={p} cx={sm(POTS[p] * 1513 + 0, 0)[0] - 0} cy={FY + 200 + artH(ART.seedlings, 250) * 0.55} rx={22} ry={32} at={c.vary + k * 8} color={GREEN} seed={p + 1} width={5} />)}
				<Fade at={c.vary}><Label x={CX[2] + 190} y={FY + 200 + artH(ART.seedlings, 250) + 36} at={c.vary} text="varied, so some survive" size={32} color={GREEN} /></Fade>
			</Overlay>
			<Stamp i={2} at={c.v3} text="CLONES: SAME WEAKNESS" color="#c4432f" y={354} size={28} />
			<RCol i={2} y={420}>
				<Reason at={c.dis} color={AMBER}>A disease that attacks one can attack them all.</Reason>
				<Reason at={c.ifc} color={INK_SOFT} size={26}>Clones do just as well until something changes.</Reason>
			</RCol>
			<div style={{display: 'none'}}>{f}</div>
		</>
	);
};

// ---------- 12. Memory ----------
const TinyCells: React.FC<{at: number}> = ({at}) => {
	const f = useCurrentFrame();
	return (
		<g opacity={prog(f, at, 14)} transform="translate(1520,930)">
			<circle cx={0} cy={4} r={20} fill="#f2e3b6" stroke={INK} strokeWidth={3} /><circle cx={20} cy={-14} r={10} fill="#f2e3b6" stroke={INK} strokeWidth={3} />
			<g transform="translate(110,0)"><rect x={-34} y={-16} width={68} height={32} rx={16} fill="#cfe8da" stroke={INK} strokeWidth={3} /><path d="M0,-16 L0,16" stroke={INK} strokeWidth={3} strokeDasharray="4 4" /></g>
			<g transform="translate(220,0)"><path d="M-30,0 C-30,-26 10,-30 30,-10 C40,10 10,30 -20,22 C-34,16 -30,6 -30,0Z" fill="#dbeaf6" stroke={INK} strokeWidth={3} /><circle cx={-4} cy={0} r={6} fill={BLUE} /></g>
		</g>
	);
};
export const SceneMemory: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('memory'), {
		rule: 'one rule', arr: 'the pollen arriving', join: 'the sperm joining', between: 'In between', carry: 'does the carrying', order: 'In order', land: 'land', tube: ['tube', 2], jn: 'join', seed: 'seed', stam: 'stamen has', men: 'the male part', next: 'Next',
	});
	const kinds: [SeqKind, number, string | null][] = [['land', c.land, 'arrival'], ['tube', c.tube, null], ['join', c.jn, 'joining'], ['seed', c.seed, null]];
	return (
		<>
			<Heading items={[[c.rule, 'One rule to remember']]} size={76} />
			<div style={{position: 'absolute', left: 110, top: 190}}><HandText text="Pollination = the pollen arriving" at={c.arr} size={70} cps={26} color={AMBER_INK} /></div>
			<div style={{position: 'absolute', left: 110, top: 270}}><HandText text="Fertilisation = the sperm joining the egg" at={c.join} size={70} cps={26} color={FEMALE} /></div>
			<div style={{position: 'absolute', left: 110, top: 350}}><HandText text="In between, the pollen tube does the carrying" at={c.between} size={52} cps={26} color={GOLD} /></div>
			{kinds.map(([k, at, sub], i) => {
				const p = prog(f, at, 16);
				return (
					<div key={k} style={{position: 'absolute', left: 140 + i * 420, top: 470, width: 380, height: 300, borderRadius: 30, background: '#fffdf8', border: `5px solid ${AMBER}`, boxShadow: '0 18px 40px rgba(60,45,20,0.10)', opacity: p, transform: `translateY(${(1 - p) * 30}px)`, boxSizing: 'border-box'}}>
						<svg width={380} height={200} viewBox="-190 -100 380 200"><SeqIcon k={k} x={0} y={0} s={3.2} /></svg>
						<div style={{textAlign: 'center', fontFamily: FONT_HAND, fontWeight: 700, fontSize: 96, color: AMBER_INK, lineHeight: 0.9}}>{k}</div>
					</div>
				);
			})}
			<Overlay>
				{kinds.map(([k, at, sub], i) => sub ? <Fade key={k} at={at + 14}><Label x={140 + i * 420 + 190} y={830} at={at + 14} text={sub} size={54} color={INK_SOFT} /></Fade> : null)}
				<Fade at={c.tube + 4}><Label x={140 + 420 + 190} y={830} at={c.tube + 4} text="the carrying" size={54} color={INK_SOFT} /></Fade>
				<TinyCells at={c.next + 20} />
			</Overlay>
			<Enter at={c.stam} style={{position: 'absolute', left: 96, top: 880}}><span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 52, color: AMBER_INK, whiteSpace: 'nowrap'}}>STAMEN has MEN in it</span></Enter>
			<Chip x={640} y={886} at={c.next} text="Next: how single-celled organisms copy themselves" size={38} color={BLUE} />
		</>
	);
};

// ---------- 13. Key notes ----------
const NOTES = [
	'Pollination: pollen reaches a stigma (by wind, water or animals). It is not fertilisation.',
	'Fertilisation: a sperm cell joins an egg cell in an ovule to make a zygote.',
	'The pollen tube grows down the style and carries the sperm cells to the egg.',
	'The zygote becomes an embryo, the ovule becomes a seed, and in many plants the ovary becomes a fruit.',
	'Vegetative propagation (runners, bulbs, tubers, cuttings) is asexual, so the offspring are usually clones.',
	'Seeds vary and can travel. Clones are fast and alike, but share the same weaknesses.',
];
export const SceneNotes: React.FC = () => (
	<>
		<div style={{position: 'absolute', left: 96, top: 92}}><HandText text="Key notes: what to write in your book" at={2} size={72} cps={40} /></div>
		<div style={{position: 'absolute', left: 120, top: 212, width: 1680}}>
			{NOTES.map((n, i) => (
				<Enter key={i} at={14 + i * 12} style={{display: 'flex', gap: 22, marginBottom: 14}}>
					<div style={{flex: 'none', width: 16, height: 16, marginTop: 13, borderRadius: 999, background: AMBER}} />
					<Body size={32}>{n}</Body>
				</Enter>
			))}
			<Enter at={80} style={{marginTop: 14, background: '#fffdf8', border: `4px solid ${AMBER}`, borderRadius: 24, padding: '10px 30px', width: 'fit-content'}}>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 70, color: AMBER_INK, lineHeight: 1.1}}>Land, tube, join, seed.</div>
			</Enter>
		</div>
	</>
);
void [DrawPath, Cross, Note, TEAL, TUBE_BOX, fp, INK, RED, POLLEN, Specks];
