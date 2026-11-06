// M8 G03 (Biology practice: feedback loops): measured lesson lookups and the three worded questions. Lesson key m8g03b
// in the design; the measured narration lives under lessons/m8g03 (the reports and take were written under that key).
import lesson from '../../../../docs/production/claude-pm/lessons/m8g03/measured/lesson.json';
import type {CueScene} from '../../cues';
import {cues} from '../../cues';
import type {QBlock} from '../bio-m8-g01/board';

type SceneL = CueScene & {durationInFrames: number; responseHold?: {startFrame: number; endFrame: number}};
const L = lesson as unknown as {scenes: SceneL[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('M8 G03 (Biology) scene not found ' + id);
	return s;
};
export const hold = (id: string) => sc(id).responseHold as {startFrame: number; endFrame: number};
export const K = <Q extends string>(id: string, map: Record<Q, string | [string, number]>) => cues(sc(id), map);

const b = (text: string, para = false, weight = 500): QBlock => ({text, at: -1000, para, weight});

export const Q1_STEM = [b('When a person stands up quickly, blood pools in the veins of the legs and blood pressure in the upper body falls. Baroreceptors (stretch receptors in the walls of the aorta and the carotid arteries) detect the fall in blood pressure. The cardiovascular centre in the medulla oblongata sends nerve impulses to the heart, which beats faster and more strongly, and to arterioles, which narrow. Within seconds, blood pressure returns towards its usual level.')];
export const Q1_DEM = [
	b('(a) Construct a negative feedback loop for this response, naming each of the five components. (3 marks)', false, 600),
	b('(b) Predict what would happen to blood pressure on standing if the nerves from the baroreceptors were damaged. Justify your prediction. (2 marks)', true, 600),
];
export const Q2_STEM = [b('A healthy adult fasted overnight, then ate a meal containing carbohydrate at time 0. Blood samples were taken for 3 hours to measure blood glucose and blood insulin concentrations.')];
export const Q2_DEM = [
	b('(a) Identify the time at which blood glucose and blood insulin each peaked, and account for the difference. (2 marks)', false, 600),
	b('(b) Explain the change in blood glucose between 45 and 120 minutes, with reference to negative feedback. (3 marks)', true, 600),
	b('(c) Using the graph and your knowledge, explain the change in blood glucose between 150 and 180 minutes. (2 marks)', true, 600),
];
export const GLU: [number, number][] = [[0, 5.0], [15, 6.4], [30, 7.6], [45, 7.2], [60, 6.6], [90, 5.6], [120, 5.0], [150, 4.6], [180, 4.9]];
export const INS: [number, number][] = [[0, 6], [15, 28], [30, 50], [45, 62], [60, 52], [90, 30], [120, 14], [150, 7], [180, 6]];
export const Q3_P = [b('Process P: As soil dries, root and leaf cells produce more abscisic acid (ABA). ABA causes the stomata to close, and the rate of water loss from the leaves falls.')];
export const Q3_Q = [b('Process Q: During a long run, blood glucose concentration falls. The pancreas releases glucagon. Liver cells break down glycogen and release glucose, and blood glucose concentration rises back towards its usual level.')];
export const Q3_R = [b('Process R: A ripening banana releases ethylene, a gas. Ethylene causes the banana and nearby bananas to ripen faster, and ripening bananas release more ethylene.')];
export const Q3_DEM = [
	b('(a) Identify which process is an example of positive feedback. (1 mark)', false, 600),
	b('(b) A student states that process Q is an example of positive feedback because blood glucose concentration increases. Explain why the student is incorrect. (3 marks)', true, 600),
];
