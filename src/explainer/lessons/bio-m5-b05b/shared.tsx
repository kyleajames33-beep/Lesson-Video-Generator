import React from 'react';
import lesson from '../../../../docs/production/claude-pm/lessons/b5b/measured/lesson.json';
import {Plate} from '../../kit';
import type {CueScene} from '../../cues';
import * as A from './assets';

export * from '../bio-m5-b05a/shared';
export * from './meio';

export const S = (id: string): CueScene & {durationInFrames: number} => {
	const s = (lesson.scenes as unknown as (CueScene & {durationInFrames: number})[]).find(x => x.id === id);
	if (!s) throw new Error(`scene ${id} missing`);
	return s;
};

export type PDef = {src: string; nat: [number, number]; box: [number, number, number, number]};
export const PL: Record<string, PDef> = {
	brothers: {src: A.BROTHERS, nat: [1280, 1920], box: [320, 320, 660, 1230]},
	pod: {src: A.POD, nat: [1600, 1600], box: [330, 630, 950, 340]},
};
export const pH = (a: PDef, w: number) => (w * a.box[3]) / a.box[2];
/** A painted plate, or a dashed coded stand-in when the file is not in HAVE. */
export const PArt: React.FC<{a: PDef; x: number; y: number; w: number; o?: number; style?: React.CSSProperties}> = ({a, x, y, w, o = 1, style}) => {
	if (!A.HAVE.has(a.src)) return <div style={{position: 'absolute', left: x, top: y, width: w, height: pH(a, w), border: '4px dashed #b9a98f', borderRadius: 24, opacity: o}} />;
	return <Plate src={a.src} natural={a.nat} crop={a.box} width={w} style={{left: x, top: y, opacity: o, ...style}} />;
};
