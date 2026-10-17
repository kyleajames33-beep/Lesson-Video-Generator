import type {ExplainerConfig} from '../../types';
import {Hook, Signal, Cooling, Practice, KeyNotes} from './scenes';

export const config_bio_m8_temperature_trial: ExplainerConfig = {
	id: 'Explainer-bio-m8-temperature-trial',
	lesson: {scenes: [
		{id: 'hook', durationInFrames: 600},
		{id: 'signal', durationInFrames: 1170},
		{id: 'cooling', durationInFrames: 840},
		{id: 'practice', durationInFrames: 1110},
		{id: 'key-notes', durationInFrames: 570},
	]},
	scenes: {hook: Hook, signal: Signal, cooling: Cooling, practice: Practice, 'key-notes': KeyNotes},
	subjectLabel: 'BIOLOGY',
	topicLabel: 'HOMEOSTASIS',
	assets: ['assets/biology/b4-person-adult-v1.png'],
};
