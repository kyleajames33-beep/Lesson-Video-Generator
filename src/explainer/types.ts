import type React from 'react';

export type ExplainerCaption = {text: string; startMs: number; endMs: number};
export type ExplainerLessonScene = {id: string; durationInFrames: number; voiceover?: {audioFile?: string}; captions?: ExplainerCaption[]};
export type ExplainerConfig = {
	id: string;
	lesson: {scenes: ExplainerLessonScene[]};
	scenes: Record<string, React.FC>;
	subjectLabel: string;
	topicLabel: string;
	accent?: string;
	tracker?: {labels: string[]; stageOf: Record<string, number>};
	/** Optional pilot soundtrack (owner audio pilot, 14 Oct): music only where nobody speaks. Files are public-relative and must also be in assets. */
	soundtrack?: {sting?: string; countdownBed?: string; keynotesBed?: string; tick?: string; transition?: string};
	/** public-relative paths the lesson uses (images etc.). Audio comes from the lesson JSON. */
	assets: string[];
};
export const totalFrames = (c: ExplainerConfig) => c.lesson.scenes.reduce((t, s) => t + s.durationInFrames, 0);
