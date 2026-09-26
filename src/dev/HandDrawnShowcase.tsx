// HandDrawnShowcase — review reel for the hand-drawn stop-motion style.
//
// Part 1 plays every hand-drawn diorama kind (lane "handdrawn") in a concept-
// card-sized frame. Part 2 shows the style toggle on existing diagrams:
// the same component, default look on the left, `diagramStyle: "handDrawn"`
// on the right. Registered in Root.tsx as `HandDrawnShowcase`; each clip is
// also registered on its own as `HandDrawn-<kind>` for social cuts.
//
//   npx remotion render src/index.ts HandDrawnShowcase out/hand-drawn-showcase.mp4

import type {ComponentType, ReactNode} from 'react';
import {AbsoluteFill, Series} from 'remotion';
import {HandDrawnStage} from '../animations/HandDrawn';
import {DiagramRenderer} from '../slides/diagrams/DiagramRenderer';
import type {DiagramConfig} from '../lesson/types';
import {DIORAMA_KINDS} from '../slides/diagrams/dioramaKinds';
import {FONT_DISPLAY, FONT_HAND, FONT_MONO, TOK} from '../styles/tokens';
import {AccentContext, themeFor} from '../styles/theme';
import '../styles/fonts';

export type ShowcaseClip = {kind: string; title: string; subject: string; blurb: string; frames: number; props?: Record<string, unknown>};

export const HAND_DRAWN_CLIPS: ShowcaseClip[] = [
	{kind: 'hdActionPotential', title: 'Action potential', subject: 'Biology', blurb: 'Bio Y12 M8 · nerve impulse, saltatory conduction', frames: 300},
	{kind: 'hdMitosis', title: 'Mitosis', subject: 'Biology', blurb: 'Bio Y12 M5 · cell division, 2n = 4', frames: 420},
	{kind: 'hdDnaReplication', title: 'DNA replication', subject: 'Biology', blurb: 'Bio Y12 M5 · semi-conservative replication', frames: 360},
	{kind: 'hdCollisionTheory', title: 'Collision theory', subject: 'Chemistry', blurb: 'Chem Y11 M3 · rates, activation energy', frames: 360, props: {compare: true}},
	{kind: 'hdDissolvingSalt', title: 'Dissolving an ionic solid', subject: 'Chemistry', blurb: 'Chem Y11 M2 · solutions, ion–dipole forces', frames: 360},
];

const TOGGLE_DEMOS: {label: string; diagram: DiagramConfig; subject: string}[] = [
	{label: 'reactionRun', diagram: {type: 'diorama', kind: 'reactionRun', delay: 10}, subject: 'Chemistry'},
	{label: 'dnaHelix', diagram: {type: 'dnaHelix'}, subject: 'Biology'},
];

const Card = ({children, width}: {children: ReactNode; width: number}) => (
	<div
		style={{
			width,
			padding: 28,
			borderRadius: 28,
			background: TOK.card,
			border: `1px solid ${TOK.cardBorder}`,
			boxShadow: TOK.cardShadow,
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
		}}
	>
		{children}
	</div>
);

const ClipScene = ({clip}: {clip: ShowcaseClip}) => {
	const Kind = DIORAMA_KINDS[clip.kind] as ComponentType<Record<string, unknown>>;
	return (
		<AccentContext.Provider value={themeFor(clip.subject)}>
			<AbsoluteFill style={{background: TOK.bg, alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 18}}>
				<div style={{display: 'flex', alignItems: 'baseline', gap: 24, width: 1240}}>
					<div style={{fontFamily: FONT_HAND, fontSize: 64, fontWeight: 700, color: TOK.ink}}>{clip.title}</div>
					<div style={{fontFamily: FONT_MONO, fontSize: 20, letterSpacing: '0.12em', color: TOK.inkMute}}>{clip.blurb.toUpperCase()}</div>
				</div>
				<Card width={1240}>{Kind ? <Kind delay={20} {...(clip.props ?? {})} /> : null}</Card>
			</AbsoluteFill>
		</AccentContext.Provider>
	);
};

const ToggleDemo = ({d}: {d: (typeof TOGGLE_DEMOS)[number]}) => (
	<AbsoluteFill style={{background: TOK.bg, alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 26}}>
		<div style={{fontFamily: FONT_DISPLAY, fontSize: 40, fontWeight: 800, color: TOK.ink, letterSpacing: '-0.02em'}}>
			Style toggle on an existing diagram: <span style={{fontFamily: FONT_MONO, fontSize: 28}}>"diagramStyle": "handDrawn"</span>
		</div>
		<AccentContext.Provider value={themeFor(d.subject)}>
			<div style={{display: 'flex', gap: 40}}>
				{[false, true].map((hand) => (
					<div key={String(hand)} style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12}}>
						<div style={{fontFamily: FONT_MONO, fontSize: 20, letterSpacing: '0.12em', color: TOK.inkMute}}>{hand ? 'HAND-DRAWN' : 'DEFAULT'}</div>
						<Card width={840}>
							{hand ? (
								<HandDrawnStage id={`demo-${d.label}`}>
									<DiagramRenderer diagram={d.diagram} />
								</HandDrawnStage>
							) : (
								<DiagramRenderer diagram={d.diagram} />
							)}
						</Card>
					</div>
				))}
			</div>
		</AccentContext.Provider>
	</AbsoluteFill>
);

const TOGGLE_EACH = 240;

const ToggleScene = () => (
	<Series>
		{TOGGLE_DEMOS.map((d) => (
			<Series.Sequence key={d.label} durationInFrames={TOGGLE_EACH}>
				<ToggleDemo d={d} />
			</Series.Sequence>
		))}
	</Series>
);

export const TOGGLE_FRAMES = TOGGLE_EACH * TOGGLE_DEMOS.length;
export const showcaseDuration = () => HAND_DRAWN_CLIPS.reduce((n, c) => n + c.frames, 0) + TOGGLE_FRAMES;

export const HandDrawnShowcase = () => (
	<Series>
		{HAND_DRAWN_CLIPS.map((clip) => (
			<Series.Sequence key={clip.kind} durationInFrames={clip.frames}>
				<ClipScene clip={clip} />
			</Series.Sequence>
		))}
		<Series.Sequence durationInFrames={TOGGLE_FRAMES}>
			<ToggleScene />
		</Series.Sequence>
	</Series>
);

/** One clip on its own (for social cuts): `HandDrawn-<kind>` compositions. */
export const HandDrawnClip = ({kind}: {kind: string}) => {
	const clip = HAND_DRAWN_CLIPS.find((c) => c.kind === kind);
	return clip ? <ClipScene clip={clip} /> : null;
};
