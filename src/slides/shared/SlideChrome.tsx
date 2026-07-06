// SlideChrome — top + bottom chrome rows. Implements motion principle #2:
// "Always anchor with a frame. Top-row chrome (subject + module) and bottom-row
// chrome (syllabus dot + episode count) appear within the first 400ms and persist."
//
// Source pattern: docs/design-canvas-reference/scenes.jsx Chrome.

import {interpolate, useCurrentFrame} from 'remotion';
import type {LessonData} from '../../lesson/types';
import {FONT_MONO, TOK} from '../../styles/tokens';
import {useAccent} from '../../styles/theme';
import {ChapterRibbon} from './ChapterRibbon';

const clamp = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};

type SlideChromeProps = {
	lesson: LessonData;
	/** Syllabus dot point reference, e.g. "2.1" or "INQ-2.1". */
	dot?: string;
	/** Centred topic label, e.g. "A QUESTION" or "WORKED EXAMPLE". */
	topic?: string;
	/** 1-based scene index for the bottom-right "0001 / 0009" counter. */
	sceneIndex?: number;
	/** Total scenes in the lesson. */
	totalScenes?: number;
	/** Hide top row only. */
	hideTop?: boolean;
	/** Hide bottom row only. */
	hideBottom?: boolean;
	/** Subject accent color (defaults to chem1). Used for the top-left badge dot. */
	accent?: string;
	/** Current scene type for the chapter ribbon. */
	sceneType?: string;
};

export const SlideChrome = ({
	lesson,
	dot,
	topic,
	sceneIndex,
	totalScenes,
	hideTop,
	hideBottom,
	accent,
	sceneType,
}: SlideChromeProps) => {
	const frame = useCurrentFrame();
	const theme = useAccent();
	const accentColor = accent ?? theme.accent;
	// Chrome appears within first 400ms (motion principle #2)
	const reveal = interpolate(frame, [0, 12], [0, 1], clamp);
	const translateY = (1 - reveal) * 8;

	const subject = lesson.subject.toUpperCase();
	const moduleLabel = (lesson.syllabusModule || lesson.module).toUpperCase();
	// Extract just the lesson code from "Lesson 1A" → "1A", with fallback.
	const lessonCode = lesson.lesson.replace(/^Lesson\s+/i, '');
	const lessonPositionLabel = lesson.moduleLessonCount
		? `L${lessonCode} OF ${lesson.moduleLessonCount}`
		: null;
	const yearLabel = lessonPositionLabel
		? `${lessonPositionLabel} · HSC · ${lesson.yearLevel.toUpperCase()}`
		: `HSC · ${lesson.yearLevel.toUpperCase()}`;
	// Syllabus reference for the bottom-left chip. Prefer an explicit `dot`
	// override; otherwise derive a real per-lesson reference from data — the
	// module content outcome (e.g. "CH12-13"), falling back to the module
	// number (e.g. "M6"). Never a hardcoded value.
	const moduleNumber = (lesson.module.match(/\d+/) ?? [])[0];
	const syllabusRef = dot ?? lesson.nesaOutcomes?.[0] ?? (moduleNumber ? `M${moduleNumber}` : null);
	const dotLabel = syllabusRef ? `SYLLABUS · ${syllabusRef}` : null;
	const counter =
		sceneIndex && totalScenes
			? `${String(sceneIndex).padStart(4, '0')} / ${String(totalScenes).padStart(4, '0')}`
			: null;

	return (
		<>
			{!hideTop ? (
				<div
					style={{
						position: 'absolute',
						top: 48,
						left: 64,
						right: 64,
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
						fontFamily: FONT_MONO,
						fontSize: 20,
						letterSpacing: '0.12em',
						color: TOK.inkDim,
						textTransform: 'uppercase',
						opacity: reveal,
						transform: `translateY(${-translateY}px)`,
					}}
				>
					<div style={{display: 'flex', alignItems: 'center', gap: 16}}>
						<span style={{width: 10, height: 10, background: accentColor, borderRadius: 2}} />
						<span style={{color: TOK.ink, fontWeight: 600}}>{subject}</span>
						<span style={{color: TOK.rule}}>/</span>
						<span>{moduleLabel}</span>
					</div>
					<div>{yearLabel}</div>
				</div>
			) : null}

			{!hideBottom ? (
				<div
					style={{
						position: 'absolute',
						bottom: 48,
						left: 64,
						right: 64,
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'flex-end',
						fontFamily: FONT_MONO,
						fontSize: 18,
						letterSpacing: '0.08em',
						color: TOK.inkMute,
						textTransform: 'uppercase',
						opacity: reveal,
						transform: `translateY(${translateY}px)`,
					}}
				>
					<div>{dotLabel ?? <span style={{opacity: 0.4}}>{lesson.lesson.toUpperCase()}</span>}</div>
					{topic ? <div style={{color: TOK.inkDim}}>{topic}</div> : <div />}
					<div>{counter ?? <span style={{opacity: 0.4}}>·</span>}</div>
				</div>
			) : null}
			{/* ChapterRibbon removed — was sitting above the bottom chrome and
			    bleeding into slide content (callouts, footers). Phase info is
			    redundant: the scene counter + slide type label already convey it. */}
		</>
	);
};
