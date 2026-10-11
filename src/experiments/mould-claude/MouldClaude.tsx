import React from 'react';
import {AbsoluteFill, Audio, Sequence, staticFile, useCurrentFrame} from 'remotion';
import lesson from '../../../docs/production/fungi-design-reset-2026-10-11/teaching-reset/measured/lesson.json';
import {AMBER, BLUE, FONT_DISPLAY, INK, INK_SOFT, PAPER, PAPER_DEEP, prog} from './kit';
import {SceneAttempt, SceneFeedback, SceneHook, SceneMemory, SceneNewGrowth, SceneNotes, SceneRelease, SceneSporeCase, SceneThreads} from './scenes';

type Caption = {text: string; startMs: number; endMs: number};
type LessonScene = {id: string; durationInFrames: number; voiceover?: {audioFile?: string}; captions?: Caption[]};
const SCENES = (lesson as unknown as {scenes: LessonScene[]}).scenes;
const COMPONENTS: Record<string, React.FC> = {
	'mould-hook': SceneHook, 'mould-threads': SceneThreads, 'mould-spore-case': SceneSporeCase, 'mould-release': SceneRelease,
	'mould-new-growth': SceneNewGrowth, 'mould-attempt': SceneAttempt, 'mould-feedback': SceneFeedback, 'mould-memory': SceneMemory, 'key-notes': SceneNotes,
};
const STAGE: Record<string, number> = {'mould-hook': 0, 'mould-threads': 1, 'mould-spore-case': 2, 'mould-release': 3, 'mould-new-growth': 4, 'mould-attempt': 5, 'mould-feedback': 5, 'mould-memory': 5, 'key-notes': -1};
const FADE = 14;

const starts: number[] = [];
SCENES.reduce((t, s) => (starts.push(t), t + s.durationInFrames), 0);
export const MOULD_TOTAL = SCENES.reduce((t, s) => t + s.durationInFrames, 0);

const SceneShell: React.FC<{dur: number; first: boolean; children: React.ReactNode}> = ({dur, first, children}) => {
	const f = useCurrentFrame();
	const fadeIn = first ? 1 : prog(f, 0, FADE);
	const fadeOut = 1 - prog(f, dur - 2, FADE);
	const settle = first ? 0 : (1 - prog(f, 0, 22)) * 0.035;
	return <AbsoluteFill style={{opacity: Math.min(fadeIn, fadeOut)}}><Paper /><AbsoluteFill style={{transform: `scale(${1 + settle})`}}>{children}</AbsoluteFill></AbsoluteFill>;
};

/** Journey tracker: threads, spore case, release, growth. */
const Tracker: React.FC = () => {
	const f = useCurrentFrame();
	const idx = starts.reduce((a, s, i) => (f >= s ? i : a), 0);
	const stage = STAGE[SCENES[idx].id];
	if (stage < 0) return null;
	const labels = ['threads', 'spore case', 'release', 'new growth'];
	const vis = prog(f, starts[1] - 20, 20);
	return (
		<div style={{position: 'absolute', right: 96, top: 40, display: 'flex', alignItems: 'center', gap: 0, opacity: vis}}>
			{labels.map((l, i) => {
				const on = stage >= i + 1;
				const current = stage === i + 1;
				return (
					<React.Fragment key={l}>
						{i > 0 ? <div style={{width: 44, height: 3, background: on ? BLUE : PAPER_DEEP, borderRadius: 2}} /> : null}
						<div style={{display: 'flex', alignItems: 'center', gap: 8}}>
							<div style={{width: current ? 20 : 14, height: current ? 20 : 14, borderRadius: 999, background: on ? BLUE : PAPER, border: `3px solid ${on ? BLUE : PAPER_DEEP}`, boxShadow: current ? `0 0 0 6px rgba(31,111,178,0.15)` : undefined}} />
							<span style={{fontFamily: FONT_DISPLAY, fontSize: 19, fontWeight: 700, letterSpacing: 1.5, color: on ? INK : INK_SOFT, textTransform: 'uppercase'}}>{l}</span>
						</div>
					</React.Fragment>
				);
			})}
		</div>
	);
};

/** Word-timed captions grouped into short phrases. */
const groupCaptions = (caps: Caption[]) => {
	const groups: Caption[][] = [];
	let cur: Caption[] = [];
	for (const c of caps) {
		cur.push(c);
		const t = c.text.trim();
		if (/[.?!;:]$/.test(t) || cur.length >= 8 || (/,$/.test(t) && cur.length >= 4)) { groups.push(cur); cur = []; }
	}
	if (cur.length) groups.push(cur);
	return groups;
};
const CAPTION_GROUPS = SCENES.map(s => groupCaptions(s.captions ?? []));
const Captions: React.FC = () => {
	const f = useCurrentFrame();
	const idx = starts.reduce((a, s, i) => (f >= s ? i : a), 0);
	const ms = ((f - starts[idx]) / 30) * 1000;
	const group = CAPTION_GROUPS[idx].find(g => ms >= g[0].startMs - 80 && ms <= g[g.length - 1].endMs + 250);
	if (!group) return null;
	return (
		<div style={{position: 'absolute', left: 0, right: 0, bottom: 34, display: 'flex', justifyContent: 'center'}}>
			<div style={{background: 'rgba(38,35,31,0.86)', borderRadius: 14, padding: '10px 26px', fontFamily: FONT_DISPLAY, fontSize: 34, fontWeight: 500, color: '#fff', maxWidth: 1300, textAlign: 'center'}}>
				{group.map((w, i) => <span key={i} style={{color: ms >= w.startMs ? '#fff' : 'rgba(255,255,255,0.55)'}}>{w.text}</span>)}
			</div>
		</div>
	);
};

const Paper: React.FC = () => (
	<AbsoluteFill style={{background: `radial-gradient(ellipse at 50% 40%, #fbf7ef 0%, ${PAPER} 55%, #efe6d6 100%)`}}>
		<svg width="100%" height="100%" style={{position: 'absolute', inset: 0, opacity: 0.35}}>
			<filter id="grain"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" /><feColorMatrix values="0 0 0 0 0.35  0 0 0 0 0.3  0 0 0 0 0.22  0 0 0 0.12 0" /></filter>
			<rect width="100%" height="100%" filter="url(#grain)" />
		</svg>
	</AbsoluteFill>
);

export const MouldClaude: React.FC = () => (
	<AbsoluteFill style={{background: PAPER}}>
		<Paper />
		{SCENES.map((s, i) => {
			const C = COMPONENTS[s.id];
			return (
				<Sequence key={s.id} from={starts[i]} durationInFrames={s.durationInFrames + FADE} name={s.id}>
					<SceneShell dur={s.durationInFrames} first={i === 0}>{C ? <C /> : null}</SceneShell>
				</Sequence>
			);
		})}
		{SCENES.map((s, i) => s.voiceover?.audioFile ? (
			<Sequence key={'a' + s.id} from={starts[i]} durationInFrames={s.durationInFrames} name={'audio ' + s.id}>
				<Audio src={staticFile(s.voiceover.audioFile.replace(/^public\//, ''))} />
			</Sequence>
		) : null)}
		<div style={{position: 'absolute', left: 96, top: 44, fontFamily: FONT_DISPLAY, fontSize: 19, fontWeight: 700, letterSpacing: 3, color: INK_SOFT}}>
			<span style={{color: BLUE}}>BIOLOGY</span> · BREAD MOULD
		</div>
		<Tracker />
		<Captions />
	</AbsoluteFill>
);
