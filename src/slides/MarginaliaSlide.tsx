// MarginaliaSlide — Atomi signature scene (Phase 4, 2026-05-02).
//
// Purpose: a main concept with handwritten margin annotations.
// The teacher “writes” a side note and draws an arrow to the concept,
// creating the feel of a live annotated textbook page.
//
// Beat plan:
//   0    chrome anchors
//   3    "MARGINALIA" mono eyebrow reveals
//   12   concept card fades up
//   18   heading lands inside card
//   36   body text reveals
//   60   first margin note fades up + arrow draws
//   90   second margin note fades up + arrow draws (if present)
//   120  third margin note fades up + arrow draws (if present)
//   150  callout reveals (if present)

import type {LessonData, MarginaliaScene} from '../lesson/types';
import {FadeUp} from '../animations/FadeUp';
import {ScribbleArrow} from '../animations/DoodlePrimitives';
import {SlideFrame} from './shared/SlideFrame';
import {SlideChrome} from './shared/SlideChrome';
import {Eyebrow} from './shared/Eyebrow';
import {FONT_HAND, TYPE, TOK} from '../styles/tokens';

type MarginaliaSlideProps = {
	scene: MarginaliaScene;
	lesson: LessonData;
	sceneIndex?: number;
	totalScenes?: number;
};

const NOTE_POSITIONS: Record<string, {x: number; y: number; tx: number; ty: number}> = {
	'top-right': {x: 1160, y: 260, tx: 1080, ty: 320},
	'mid-right': {x: 1160, y: 460, tx: 1080, ty: 520},
	'bottom-right': {x: 1160, y: 660, tx: 1080, ty: 720},
};

export const MarginaliaSlide = ({scene, lesson, sceneIndex, totalScenes}: MarginaliaSlideProps) => {
	return (
		<SlideFrame>
			<SlideChrome lesson={lesson} dot="2.1" topic="MARGINALIA" sceneType="marginalia" sceneIndex={sceneIndex} totalScenes={totalScenes} />

			{/* Mono eyebrow */}
			<div style={{position: 'absolute', top: 150, left: 64}}>
				<Eyebrow color={TOK.inkDim}>MARGINALIA</Eyebrow>
			</div>

			{/* Concept card */}
			<FadeUp delay={12} durationFrames={16} dy={24}>
				<div
					style={{
						position: 'absolute',
						left: 140,
						top: 210,
						width: 940,
						height: 600,
						borderRadius: 18,
						border: `1px solid ${TOK.rule}`,
						background:
							`linear-gradient(135deg, ${TOK.bgLift} 0%, rgba(13,58,47,0.48) 55%, ${TOK.bg} 100%)`,
						boxShadow: `0 34px 120px rgba(0,0,0,0.34), inset 0 0 0 1px rgba(232,239,233,0.025)`,
						overflow: 'hidden',
						padding: '54px 58px',
					}}
				>
					{/* Subtle inner glow */}
					<div
						aria-hidden
						style={{
							position: 'absolute',
							inset: -120,
							background:
								`radial-gradient(circle at 50% 42%, ${TOK.chem2}30 0%, ${TOK.chem1}14 26%, transparent 58%)`,
							opacity: 0.18,
						}}
					/>
					<div
						aria-hidden
						style={{
							position: 'absolute',
							inset: 26,
							border: `1px dashed rgba(232,239,233,0.08)`,
							borderRadius: 14,
						}}
					/>

					{/* Heading */}
					<FadeUp delay={18} durationFrames={14} dy={16}>
						<h1
							style={{
								margin: 0,
								fontSize: fitHeadingSize(scene.heading),
								fontWeight: 800,
								lineHeight: 1.02,
								letterSpacing: '-0.035em',
								color: TOK.ink,
								position: 'relative',
								zIndex: 1,
							}}
						>
							{scene.heading}
							<span style={{color: TOK.chem1}}>.</span>
						</h1>
					</FadeUp>

					{/* Body */}
					<div style={{marginTop: 38, position: 'relative', zIndex: 1}}>
						<FadeUp delay={36} durationFrames={14} dy={12}>
							<div
								style={{
									fontSize: 32,
									lineHeight: 1.4,
									fontWeight: 400,
									color: TOK.ink,
									maxWidth: 780,
								}}
							>
								{scene.body}
							</div>
						</FadeUp>
					</div>
				</div>
			</FadeUp>

			{/* Margin notes with arrows */}
			{scene.notes.map((note, index) => {
				const pos = NOTE_POSITIONS[note.position];
				if (!pos) return null;
				const delay = 60 + index * 30;
				const color = note.color ?? TOK.amber;
				const startFromRight = pos.tx > pos.x;
				const arrowStartX = startFromRight ? pos.x + 40 : pos.x - 40;
				const arrowStartY = pos.y + 18;

				return (
					<div key={index} style={{position: 'absolute', left: 0, top: 0, width: 1920, height: 1080, pointerEvents: 'none'}}>
						<FadeUp delay={delay} durationFrames={12} dy={14}>
							<div
								style={{
									position: 'absolute',
									left: pos.x,
									top: pos.y,
									fontFamily: FONT_HAND,
									fontSize: 48,
									color,
									fontWeight: 600,
									whiteSpace: 'nowrap',
									transform: 'rotate(-5deg)',
									transformOrigin: 'left center',
									zIndex: 2,
								}}
							>
								{note.text}
							</div>
						</FadeUp>
						<ScribbleArrow
							x1={arrowStartX}
							y1={arrowStartY}
							x2={pos.tx}
							y2={pos.ty}
							color={color}
							seed={3 + index}
							delay={delay + 8}
							durationFrames={14}
							curve={0.25}
						/>
					</div>
				);
			})}

			{/* Callout */}
			{scene.callout ? (
				<div style={{position: 'absolute', bottom: 150, left: 64}}>
					<FadeUp delay={150} durationFrames={14} dy={20}>
						<div
							style={{
								fontSize: 28,
								fontStyle: 'italic',
								color: TOK.amber,
								fontWeight: 500,
								letterSpacing: '-0.01em',
							}}
						>
							→ {scene.callout}
						</div>
					</FadeUp>
				</div>
			) : null}
		</SlideFrame>
	);
};

const fitHeadingSize = (heading: string) => {
	if (heading.length > 40) return 56;
	if (heading.length > 28) return 64;
	return 72;
};
