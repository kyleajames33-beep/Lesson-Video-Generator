import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, DrawPath, Enter, FONT_DISPLAY, FONT_HAND, HandText, INK, INK_SOFT, prog} from '../../kit';
import {cues} from '../../cues';
import {Chip, Overlay, Sx, TEAL} from '../chem-m5-c06/parts';
import {toks} from '../chem-m5-c05/parts';
import {Heading, sc} from './common';
import {RuleChip, TYPE_SPECS, TypeCard} from './types';

// ---------- 13. Decision rule: types one and two, and the handoff ----------
const D = 'decision-rule';
const KD = cues(sc(D), {t1: 'for type one', write: 'write the expression', t2: 'For type two', put: 'Put the start', meas: 'measured value in the', subtract: 'subtract to get', coef: 'use the coefficients', complete: 'then complete', sub2: ['substitute', 2], back: 'written backwards', flip: 'flip K', next: 'Next type three'});
export const SceneDecisionA: React.FC = () => {
	const f = useCurrentFrame();
	const S = 0.72, X = 96, Y = [190, 370, 560];
	const cardR = X + 1400 * S;
	return (
		<>
			<Heading text="Types one and two" at={4} size={62} />
			<Overlay>
				<TypeCard spec={TYPE_SPECS[0]} x={X} y={Y[0]} s={S} at={KD.t1 - 10} lift={prog(f, KD.t1, 12) * (1 - prog(f, KD.t2, 12))} line2="write K, substitute" line2At={KD.write} />
				<TypeCard spec={TYPE_SPECS[1]} x={X} y={Y[1]} s={S} at={KD.t1 - 4} lift={prog(f, KD.t2, 12) * (1 - prog(f, KD.back, 12))} ringRow={{r: 0, at: KD.put, out: KD.meas}} ringCell={{r: 2, c: 2, at: KD.meas + 4, out: KD.coef}} />
				<TypeCard spec={TYPE_SPECS[2]} x={X} y={Y[2]} s={S} at={KD.t1 + 2} dim={1 - prog(f, KD.next, 14)} lift={prog(f, KD.next, 14)} nextTag={[KD.t1 + 2, KD.next]} />
				{/* the four-step order for type two, attached to card 2 */}
				<DrawPath d={`M${cardR},${Y[1] + 75} L${1140},${Y[1] + 75}`} at={KD.put - 6} dur={12} color={TEAL} width={4} />
				<RuleChip x={1140} y={330} w={700} at={KD.put - 4} ats={[KD.meas, KD.subtract, KD.coef, KD.complete]} lit={[[0, KD.meas], [1, KD.subtract], [2, KD.coef], [3, KD.complete]]} extra={{text: 'Then substitute into K.', at: KD.sub2}} title="Type 2: start in the Initial row, then" />
				{/* flip K, under card 1 */}
				<Chip x={1140} y={214} w={420} text="reversed: 1 / K" size={42} at={KD.flip} color={TEAL} />
				<DrawPath d={`M${cardR},${Y[0] + 60} L${1140},${Y[0] + 56}`} at={KD.flip - 4} dur={10} color={TEAL} width={4} />
				{/* next */}
				<Chip x={X} y={760} w={1000} text="Next: K and a start, find the concentrations" size={42} at={KD.next + 6} color={TEAL} />
			</Overlay>
		</>
	);
};

// ---------- 14. Key notes ----------
const rich = (text: string) => toks(text).map((t, i) => t.k === 1 ? <sub key={i} style={{fontSize: '0.64em', lineHeight: 0}}>{t.s}</sub> : t.k === 2 ? <sup key={i} style={{fontSize: '0.64em', lineHeight: 0}}>{t.s}</sup> : <span key={i}>{t.s}</span>);
const NOTES = [
	'Three types of K calculation. Type 1: every equilibrium concentration is given, so substitute into K. Type 2: the start and one equilibrium value are given, so use an ICE table, then K. Type 3: K and the start are given, so find the equilibrium concentrations with x (next video).',
	'K uses concentrations in mol/L (moles divided by litres), coefficients as powers, and equilibrium values only. Leave out pure solids, pure liquids and water as the solvent. No unit is written for K.',
	'Type 2 order: start in the Initial row; the measured value in the Equilibrium row; its Change = equilibrium minus initial; the other changes from the coefficients (used up is minus, made is plus); complete Equilibrium = Initial + Change; substitute; check.',
	'Only the change row follows the coefficients.',
	'K belongs to the equation as written, at one temperature. Reversed: K becomes 1 / K. Every coefficient multiplied by n: K goes to the power n.',
];
export const KeyNotesBoard: React.FC<{notes: string[]; aids: string[]; tag: string; size?: number; aidTop?: number}> = ({notes, aids, tag, size = 31, aidTop = 716}) => (
	<>
		<div style={{position: 'absolute', left: 96, top: 84}}><HandText text="Key notes: what to write in your book" at={2} size={60} cps={40} /></div>
		<Enter at={110} style={{position: 'absolute', left: 1110, top: 100}}>
			<div style={{fontFamily: FONT_HAND, fontSize: 36, fontWeight: 700, color: AMBER_INK}}>Pause the video if you need more time to copy.</div>
		</Enter>
		<div style={{position: 'absolute', left: 120, top: 176, width: 1690}}>
			{notes.map((n, i) => (
				<Enter key={i} at={34 + i * 12} style={{display: 'flex', gap: 22, marginBottom: 16}}>
					<div style={{flex: 'none', width: 15, height: 15, marginTop: size * 0.32, borderRadius: 999, background: AMBER}} />
					<div style={{fontFamily: FONT_DISPLAY, fontSize: size, fontWeight: 500, color: INK, lineHeight: 1.24}}>{rich(n)}</div>
				</Enter>
			))}
		</div>
		<Enter at={96} style={{position: 'absolute', left: 96, top: aidTop, width: 1730}}>
			<div style={{background: '#fffdf8', border: `4px solid ${TEAL}`, borderRadius: 22, padding: '8px 30px 10px', boxShadow: '0 12px 28px rgba(60,45,20,0.10)'}}>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 32, color: INK_SOFT}}>Memory aids</div>
				{aids.map((a, i) => <div key={i} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: i === 0 ? 52 : 44, color: i === 0 ? TEAL : INK, lineHeight: 1.08}}>{a}</div>)}
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 26, color: TEAL, marginTop: 4}}>{tag}</div>
			</div>
		</Enter>
	</>
);
export const SceneNotesA: React.FC = () => (
	<KeyNotesBoard notes={NOTES} aids={['Measured value: Equilibrium row first.', 'Only the change row follows the coefficients.', 'Flip the equation, flip K.']} tag="same temperature, equation as written" />
);
void Sx; void INK;
