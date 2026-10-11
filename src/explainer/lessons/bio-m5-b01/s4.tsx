import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Countdown, Mark, scribbleEllipse} from '../../kit';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, ART, Art, artH, BLUE, Body, CORAL, DrawPath, Enter, FONT_DISPLAY, FONT_HAND, Germ, GREEN, HandText,
	INK, INK_SOFT, Overlay, S, Sun, Underline, prog,
} from './shared';

// ---------- shared attempt board ----------
const CARD_W = 548, CARD_GAP = 40, CARD_X0 = 96, CARD_Y = 236, CARD_H = 520;
const cardX = (i: number) => CARD_X0 + i * (CARD_W + CARD_GAP);
const CASES = [
	{art: ART.pond, title: 'Bacteria in a warm pond', lines: ['Conditions have stayed', 'the same for years']},
	{art: ART.island, title: 'One plant on an island', lines: ['No others of its kind.', "It can't fertilise itself."]},
	{art: ART.trays, title: 'Runners and seeds', lines: ['Field getting hotter and', 'drier every year']},
];

const Badge: React.FC<{n: number; color?: string}> = ({n, color = AMBER}) => (
	<div style={{width: 54, height: 54, borderRadius: 999, background: color, color: '#fff', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 30, display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none'}}>{n}</div>
);

const CaseCard: React.FC<{i: number; at: number; dimTo?: number; dimAt?: number}> = ({i, at, dimTo = 1, dimAt = 1e9}) => {
	const f = useCurrentFrame();
	const c = CASES[i];
	const p = prog(f, at, 16);
	const dim = 1 - (1 - dimTo) * prog(f, dimAt, 14);
	const artW = CARD_W - 120;
	const aH = Math.min(240, artH(c.art, artW));
	const aW = (aH / artH(c.art, artW)) * artW;
	return (
		<div style={{position: 'absolute', left: cardX(i), top: CARD_Y, width: CARD_W, height: CARD_H, opacity: p * dim, transform: `translateY(${(1 - p) * 18}px)`, background: '#fffdf8', borderRadius: 24, boxShadow: '0 18px 40px rgba(60,45,20,0.10), 0 2px 6px rgba(60,45,20,0.06)', border: '1.5px solid rgba(60,45,20,0.08)', boxSizing: 'border-box'}}>
			<div style={{display: 'flex', alignItems: 'center', gap: 16, padding: '22px 26px 0'}}>
				<Badge n={i + 1} />
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, color: INK, lineHeight: 1}}>{c.title}</div>
			</div>
			<Art a={c.art} x={(CARD_W - aW) / 2} y={96} w={aW} />
			<div style={{position: 'absolute', left: 30, right: 30, top: 360}}>
				{c.lines.map(l => <Body key={l} size={32} weight={600}>{l}</Body>)}
			</div>
		</div>
	);
};

// ---------- 7. Attempt ----------
export const SceneAttempt: React.FC = () => {
	const f = useCurrentFrame();
	const scene = S('attempt');
	const c = cues(scene, {turn: 'Your turn', one: 'bacteria living', two: 'a single plant', three: 'a strawberry plant', which: 'Which method', pause: 'Pause the video'});
	const hold = scene.responseHold ?? {startFrame: c.pause + 60, endFrame: c.pause + 810};
	return (
		<>
			<div style={{position: 'absolute', left: 96, top: 92}}><HandText text="Your turn: asexual or sexual?" at={c.turn} size={84} cps={30} /></div>
			{[c.one, c.two, c.three].map((at, i) => <CaseCard key={i} i={i} at={at} />)}
			<Enter at={c.which} style={{position: 'absolute', left: 96, top: 786, width: 1500}}>
				<Body size={40} weight={700}>Which method better helps each species continue? <span style={{color: AMBER_INK}}>Explain why.</span></Body>
			</Enter>
			<Enter at={c.pause} style={{position: 'absolute', left: 96, top: 846}}>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: INK_SOFT}}>Pause the video if you need more time.</div>
			</Enter>
			<Overlay><Countdown start={hold.startFrame} end={hold.endFrame} x={1752} y={820} r={58} /></Overlay>
		</>
	);
};

// ---------- 8. Feedback ----------
const Verdict: React.FC<{i: number; at: number; text: string; color: string}> = ({i, at, text, color}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 12);
	const pop = p < 1 ? 1.25 - 0.25 * p : 1;
	return (
		<div style={{position: 'absolute', left: cardX(i) + CARD_W - 250, top: CARD_Y - 64, transform: `rotate(-6deg) scale(${pop})`, opacity: p, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 34, letterSpacing: 3, color, border: `5px solid ${color}`, borderRadius: 14, padding: '6px 18px', background: '#fffdf8'}}>{text}</div>
	);
};

const Reason: React.FC<{i: number; at: number; lines: string[]; color?: string}> = ({i, at, lines, color = INK}) => (
	<Enter at={at} style={{position: 'absolute', left: cardX(i), top: CARD_Y + CARD_H + 18, width: CARD_W}}>
		<div style={{background: '#fffdf8', borderRadius: 18, padding: '14px 22px', border: `3px solid ${color}`, boxSizing: 'border-box'}}>
			{lines.map(l => <Body key={l} size={28} weight={600} color={INK}>{l}</Body>)}
		</div>
	</Enter>
);

export const SceneFeedback: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('feedback'), {pond: 'In the stable pond', chose: 'If you chose sexual', island: 'On the island', copy: 'copying itself', straw: 'And for the strawberry', seeds: 'Its seeds produce', runners: 'Runners would only'});
	// tray plate geometry for circling the varied right-hand tray
	const artW = CARD_W - 120;
	const aH = Math.min(240, artH(ART.trays, artW));
	const aW = (aH / artH(ART.trays, artW)) * artW;
	const tx = cardX(2) + (CARD_W - aW) / 2;
	return (
		<>
			<div style={{position: 'absolute', left: 96, top: 92}}><HandText text="Here's how" at={4} size={84} cps={30} /></div>
			{[0, 1, 2].map(i => <CaseCard key={i} i={i} at={0} />)}
			<Verdict i={0} at={c.pond} text="ASEXUAL" color={BLUE} />
			<Reason i={0} at={c.pond + 30} lines={['Already suited: fast copying', 'keeps the winning combination']} color={BLUE} />
			<Verdict i={1} at={c.island} text="ASEXUAL" color={BLUE} />
			<Reason i={1} at={c.copy} lines={['No mate, no self-fertilising:', 'copying itself is the only way']} color={BLUE} />
			<Verdict i={2} at={c.straw} text="SEXUAL" color={CORAL} />
			<Reason i={2} at={c.seeds} lines={['Varied seedlings: some may', 'cope with heat and drought']} color={CORAL} />
			<Overlay>
				{/* the varied (right) tray of seedlings */}
				<DrawPath d={scribbleEllipse(tx + aW * 0.73, CARD_Y + 96 + aH * 0.5, aW * 0.3, aH * 0.55, 61)} at={c.seeds + 8} dur={22} color={AMBER} width={6} />
				<Mark x={tx + aW * 0.27} y={CARD_Y + 96 + aH * 0.15} at={c.runners + 4} kind="cross" size={40} />
			</Overlay>
			<Enter at={c.chose} out={c.island - 6} style={{position: 'absolute', left: 96, top: 852, width: 1400}}>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, color: AMBER_INK}}>Variation only helps when conditions change.</div>
			</Enter>
		</>
	);
};

// ---------- 9. Memory ----------
export const SceneMemory: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('memory'), {cont: 'a species continues', asex: 'Asexual reproduction is', sex: 'Sexual reproduction is', dep: 'depends on', next: 'Next'});
	return (
		<>
			<div style={{position: 'absolute', left: 96, top: 92}}><HandText text="What to remember" at={4} size={84} cps={30} /></div>
			<Enter at={c.cont} style={{position: 'absolute', left: 96, top: 214, width: 1700}}>
				<Body size={40} weight={600}>A species continues when <span style={{color: BLUE}}>DNA is passed on</span> and <span style={{color: GREEN}}>offspring survive to reproduce</span>.</Body>
			</Enter>
			<Art a={ART.runner} x={110} y={340} w={340} style={{opacity: prog(f, c.asex, 16)}} />
			<Art a={ART.flower} x={190} y={540} w={190} style={{opacity: prog(f, c.sex, 16)}} />
			<div style={{position: 'absolute', left: 500, top: 330, display: 'flex', gap: 26, alignItems: 'baseline'}}>
				<HandText text="Asexual:" at={c.asex} size={120} cps={14} />
				<HandText text="fast and alike." at={c.asex + 14} size={120} cps={13} color={BLUE} />
			</div>
			<div style={{position: 'absolute', left: 500, top: 520, display: 'flex', gap: 26, alignItems: 'baseline'}}>
				<HandText text="Sexual:" at={c.sex} size={120} cps={14} />
				<HandText text="slow and varied." at={c.sex + 12} size={120} cps={13} color={CORAL} />
			</div>
			<Overlay>
				<Underline x1={500} x2={1560} y={712} at={c.sex + 40} />
				<Sun x={560} y={808} at={c.dep} r={28} />
				<Germ x={1010} y={808} at={c.dep + 10} r={24} />
			</Overlay>
			<Enter at={c.dep} style={{position: 'absolute', left: 632, top: 782}}><Body size={38} weight={600}>stable: <span style={{color: BLUE}}>alike</span> works</Body></Enter>
			<Enter at={c.dep + 10} style={{position: 'absolute', left: 1072, top: 782}}><Body size={38} weight={600}>changing: <span style={{color: CORAL}}>varied</span> helps</Body></Enter>
			<Enter at={c.next} style={{position: 'absolute', right: 96, top: 98}}>
				<div style={{display: 'flex', alignItems: 'center', gap: 14, background: '#fffdf8', borderRadius: 999, padding: '10px 28px', boxShadow: '0 10px 24px rgba(60,45,20,0.1)'}}>
					<span style={{fontFamily: FONT_HAND, fontSize: 42, fontWeight: 700, color: INK}}>Next: how animals bring sperm and egg together</span>
				</div>
			</Enter>
		</>
	);
};

// ---------- 10. Key notes ----------
const NOTES = [
	'A species continues when individuals pass on DNA and their offspring survive to reproduce.',
	'Asexual reproduction: one parent, no gametes joining, offspring are clones. Fast, needs no mate, little variation (mutation can still cause differences).',
	'Sexual reproduction: gametes join, and offspring get new combinations of alleles, usually from two parents. Slower, needs more energy and usually a mate, produces variation.',
	'Variation means differences between individuals. Asexual is fast and alike (suits stable conditions); sexual is slow and varied (helps when conditions change).',
];
export const SceneNotes: React.FC = () => (
	<>
		<div style={{position: 'absolute', left: 96, top: 92}}><HandText text="Key notes: what to write in your book" at={2} size={72} cps={40} /></div>
		<div style={{position: 'absolute', left: 140, top: 236, width: 1640}}>
			{NOTES.map((n, i) => (
				<Enter key={i} at={14 + i * 10} style={{display: 'flex', gap: 22, marginBottom: 28}}>
					<div style={{flex: 'none', width: 18, height: 18, marginTop: 15, borderRadius: 999, background: AMBER}} />
					<Body size={37}>{n}</Body>
				</Enter>
			))}
			<Enter at={60}><div style={{fontFamily: FONT_HAND, fontSize: 44, fontWeight: 700, color: AMBER_INK, marginTop: 14}}>Pause the video if you need more time to copy.</div></Enter>
		</div>
	</>
);
