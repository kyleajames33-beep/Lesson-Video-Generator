import React, {useMemo} from 'react';
import {AbsoluteFill, Audio, Sequence, interpolate, staticFile, useCurrentFrame} from 'remotion';
import {BLUE, FONT_DISPLAY, INK, INK_SOFT, PAPER, PAPER_DEEP, prog} from './kit';
import type {ExplainerCaption, ExplainerConfig} from './types';

export type {ExplainerConfig} from './types';
const FADE = 14;
export const PAPER_GRAIN = 'assets/explainer-paper-grain.png';

const Paper: React.FC = () => (
	// A pre-made grain tile instead of an SVG turbulence filter: the filter was
	// recomputed every frame and made live browser previews stutter.
	<AbsoluteFill style={{background: `url(${staticFile(PAPER_GRAIN)}) repeat, radial-gradient(ellipse at 50% 40%, #fbf7ef 0%, ${PAPER} 55%, #efe6d6 100%)`}} />
);

const SceneShell: React.FC<{dur: number; first: boolean; children: React.ReactNode}> = ({dur, first, children}) => {
	const f = useCurrentFrame();
	const fadeIn = first ? 1 : prog(f, 0, FADE);
	const fadeOut = 1 - prog(f, dur - 2, FADE);
	const settle = first ? 0 : (1 - prog(f, 0, 22)) * 0.035;
	return <AbsoluteFill style={{opacity: Math.min(fadeIn, fadeOut)}}><Paper /><AbsoluteFill style={{transform: `scale(${1 + settle})`}}>{children}</AbsoluteFill></AbsoluteFill>;
};

const groupCaptions = (caps: ExplainerCaption[]) => {
	const groups: ExplainerCaption[][] = [];
	let cur: ExplainerCaption[] = [];
	for (const c of caps) {
		cur.push(c);
		const t = c.text.trim();
		if (/[.?!;:]$/.test(t) || cur.length >= 8 || (/,$/.test(t) && cur.length >= 4)) { groups.push(cur); cur = []; }
	}
	if (cur.length) groups.push(cur);
	return groups;
};

const Tracker: React.FC<{config: ExplainerConfig; starts: number[]; accent: string}> = ({config, starts, accent}) => {
	const f = useCurrentFrame();
	const tracker = config.tracker;
	if (!tracker) return null;
	const scenes = config.lesson.scenes;
	const idx = starts.reduce((a, s, i) => (f >= s ? i : a), 0);
	const stage = tracker.stageOf[scenes[idx].id] ?? -1;
	if (stage < 0) return null;
	const vis = prog(f, (starts[1] ?? 0) - 20, 20);
	return (
		<div style={{position: 'absolute', right: 96, top: 40, display: 'flex', alignItems: 'center', gap: 0, opacity: vis}}>
			{tracker.labels.map((l, i) => {
				const on = stage >= i + 1;
				const current = stage === i + 1;
				return (
					<React.Fragment key={l}>
						{i > 0 ? <div style={{width: 44, height: 3, background: on ? accent : PAPER_DEEP, borderRadius: 2}} /> : null}
						<div style={{display: 'flex', alignItems: 'center', gap: 8}}>
							<div style={{width: current ? 20 : 14, height: current ? 20 : 14, borderRadius: 999, background: on ? accent : PAPER, border: `3px solid ${on ? accent : PAPER_DEEP}`, boxShadow: current ? '0 0 0 6px rgba(31,111,178,0.15)' : undefined}} />
							<span style={{fontFamily: FONT_DISPLAY, fontSize: 19, fontWeight: 700, letterSpacing: 1.5, color: on ? INK : INK_SOFT, textTransform: 'uppercase'}}>{l}</span>
						</div>
					</React.Fragment>
				);
			})}
		</div>
	);
};

const Captions: React.FC<{groups: ExplainerCaption[][][]; starts: number[]}> = ({groups, starts}) => {
	const f = useCurrentFrame();
	const idx = starts.reduce((a, s, i) => (f >= s ? i : a), 0);
	const ms = ((f - starts[idx]) / 30) * 1000;
	const group = groups[idx].find(g => ms >= g[0].startMs - 80 && ms <= g[g.length - 1].endMs + 250);
	if (!group) return null;
	return (
		<div style={{position: 'absolute', left: 0, right: 0, bottom: 34, display: 'flex', justifyContent: 'center'}}>
			<div style={{background: 'rgba(38,35,31,0.86)', borderRadius: 14, padding: '10px 26px', fontFamily: FONT_DISPLAY, fontSize: 34, fontWeight: 500, color: '#fff', maxWidth: 1300, textAlign: 'center'}}>
				{group.map((w, i) => <span key={i} style={{color: ms >= w.startMs ? '#fff' : 'rgba(255,255,255,0.55)'}}>{w.text}</span>)}
			</div>
		</div>
	);
};


type HoldScene = {responseHold?: {startFrame: number; endFrame: number}; captions?: ExplainerCaption[]; id: string; durationInFrames: number};
const fadeVol = (peak: number, len: number, fade = 20) => (f: number) => interpolate(f, [0, fade, Math.max(fade + 1, len - fade), len], [0, peak, peak, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
/** Pilot soundtrack: music only in silent holds (countdown, key-notes copy time), a soft sting, quiet ticks and transitions. */
const Soundtrack: React.FC<{config: ExplainerConfig; starts: number[]}> = ({config, starts}) => {
	const st = config.soundtrack;
	if (!st) return null;
	const out: React.ReactNode[] = [];
	if (st.sting) out.push(<Sequence key="sting" from={0} durationInFrames={95} name="sting"><Audio src={staticFile(st.sting)} volume={fadeVol(0.3, 95, 6)} /></Sequence>);
	(config.lesson.scenes as HoldScene[]).forEach((s, i) => {
		const t0 = starts[i];
		if (st.transition && i > 0) out.push(<Sequence key={'tr' + i} from={t0} durationInFrames={27} name={'transition ' + s.id}><Audio src={staticFile(st.transition)} volume={0.12} /></Sequence>);
		const h = s.responseHold;
		if (h && st.countdownBed) {
			const len = h.endFrame - h.startFrame;
			out.push(<Sequence key={'cd' + i} from={t0 + h.startFrame} durationInFrames={len} name={'countdown bed ' + s.id}><Audio src={staticFile(st.countdownBed)} volume={fadeVol(0.22, len, 24)} /></Sequence>);
			const tick = st.tick; if (tick) [3, 2, 1].forEach(k => out.push(<Sequence key={'tk' + i + k} from={t0 + h.endFrame - k * 30} durationInFrames={24} name="tick"><Audio src={staticFile(tick)} volume={0.25} /></Sequence>));
		}
		if (s.id === 'key-notes' && st.keynotesBed) {
			const caps = s.captions ?? [];
			const speechEnd = caps.length ? Math.ceil((caps[caps.length - 1].endMs / 1000) * 30) + 10 : 0;
			const len = s.durationInFrames - speechEnd;
			if (len > 60) out.push(<Sequence key="kn" from={t0 + speechEnd} durationInFrames={len} name="key-notes bed"><Audio src={staticFile(st.keynotesBed)} volume={fadeVol(0.2, len, 30)} /></Sequence>);
		}
	});
	return <>{out}</>;
};

export const ExplainerVideo: React.FC<{config: ExplainerConfig}> = ({config}) => {
	const scenes = config.lesson.scenes;
	const accent = config.accent ?? BLUE;
	const starts = useMemo(() => { const out: number[] = []; scenes.reduce((t, s) => (out.push(t), t + s.durationInFrames), 0); return out; }, [scenes]);
	const groups = useMemo(() => scenes.map(s => groupCaptions(s.captions ?? [])), [scenes]);
	return (
		<AbsoluteFill style={{background: PAPER}}>
			<Paper />
			{scenes.map((s, i) => {
				const C = config.scenes[s.id];
				return (
					<Sequence key={s.id} from={starts[i]} durationInFrames={s.durationInFrames + FADE} name={s.id}>
						<SceneShell dur={s.durationInFrames} first={i === 0}>{C ? <C /> : null}</SceneShell>
					</Sequence>
				);
			})}
			{scenes.map((s, i) => s.voiceover?.audioFile ? (
				<Sequence key={'a' + s.id} from={starts[i]} durationInFrames={s.durationInFrames} name={'audio ' + s.id}>
					<Audio src={staticFile(s.voiceover.audioFile.replace(/^public\//, ''))} />
				</Sequence>
			) : null)}
			<Soundtrack config={config} starts={starts} />
			<div style={{position: 'absolute', left: 96, top: 44, fontFamily: FONT_DISPLAY, fontSize: 19, fontWeight: 700, letterSpacing: 3, color: INK_SOFT}}>
				<span style={{color: accent}}>{config.subjectLabel}</span> · {config.topicLabel}
			</div>
			<Tracker config={config} starts={starts} accent={accent} />
			{config.burnCaptions ? <Captions groups={groups} starts={starts} /> : null}
		</AbsoluteFill>
	);
};
