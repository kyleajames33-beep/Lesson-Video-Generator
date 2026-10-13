import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {
	AMBER_INK, Enter, Fade, FONT_HAND, Hand, Heading, ladderGeom, Ladder, NEWC, ORIG, Overlay,
	Polymerase, prog, pulse, RepairIcon, S, Scribble, Tick, TileSpec, Tile,
} from './shared';

const GREYC = '#8d949b';

// ---------- 12. Errors and repair ----------
const ET = 'ACTGCAT';
const EG = 'TGACGTA';
const EW: Record<number, string> = {2: 'G', 4: 'A', 6: 'G'};
export const SceneErrorsRepair: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('errors-repair'), {
		acc: 'Copying is accurate', wrong: 'a wrong nucleotide', poly: 'DNA polymerase', backup: 'back up to remove', repair: 'repair proteins', after: 'afterwards', fixed: 'almost every mistake', survives: 'One that survives',
		mutation: 'a mutation', change: 'a change in the base order',
	});
	const X = 330, P = 200, Y = 320;
	const g = ladderGeom({x: X, y: Y, pitch: P, n: 7});
	const cx = (i: number) => X + i * P;
	const lands = [14, 30, c.wrong + 20, c.poly + 8, c.repair - 12, c.repair + 4, c.repair + 14];
	const rem: Record<number, number> = {2: c.backup + 14, 4: c.after + 40};
	const fixAt: Record<number, number> = {2: c.backup + 36, 4: c.after + 52};
	// polymerase position (column units) over time
	const polyCol = (() => {
		const ks: [number, number][] = [[0, -0.8], [c.poly, 0.7], [c.poly + 76, 3], [c.backup + 6, 2], [fixAt[2] + 12, 2], [c.after + 20, 6.6]];
		for (let k = 1; k < ks.length; k++) if (f <= ks[k][0]) { const [a, b] = [ks[k - 1], ks[k]]; return a[1] + (b[1] - a[1]) * Math.max(0, (f - a[0]) / (b[0] - a[0])); }
		return 6.6;
	})();
	const polyO = prog(f, c.poly - 8, 12) * (1 - prog(f, c.after + 24, 14));
	const sweepCol = -0.8 + 7.8 * prog(f, c.after - 18, 90);
	const sweepO = prog(f, c.repair, 12) * (1 - prog(f, c.survives - 6, 14));
	const passT = (col: number) => c.poly + 8 + (col / 3) * 70;
	const botSpec = (i: number): TileSpec | null => {
		const L = lands[i];
		const wrongL = EW[i];
		if (f < L) return {l: wrongL ?? EG[i], o: 0};
		const p = prog(f, L, 14);
		const land = {dy: (1 - p) * 110, o: p};
		if (wrongL && rem[i] === undefined) return {l: wrongL, tone: 'grey', ...land, glow: pulse(f, L + 6, 24)};
		if (wrongL && f < rem[i]) return {l: wrongL, tone: 'grey', ...land, glow: pulse(f, L + 6, 24)};
		if (wrongL) {
			if (f < fixAt[i]) return null;
			const q = prog(f, fixAt[i], 14);
			return {l: EG[i], dy: (1 - q) * 110, o: q, glow: pulse(f, fixAt[i] + 8, 24)};
		}
		return {l: EG[i], ...land, glow: i <= 3 ? pulse(f, passT(i), 22) * 0.7 : 0};
	};
	const bot = Array.from({length: 7}, (_, i) => botSpec(i));
	const top: TileSpec[] = ET.split('').map(l => ({l}));
	const unit = (i: number) => prog(f, lands[i] + 2, 10);
	const bond = (i: number) => (EW[i] && (rem[i] === undefined || f < rem[i]) ? 0 : prog(f, (EW[i] ? fixAt[i] : lands[i]) + 8, 12));
	const pop = (i: number) => {
		const r = rem[i];
		if (r === undefined || f < r || f > r + 22) return null;
		const q = prog(f, r, 20);
		return <Tile x={cx(i) + q * 40} y={g.yBot - g.so + q * 150} face="up" l={EW[i]} tone="grey" rot={q * 40} o={1 - q} />;
	};
	const survive = c.survives + 6;
	return (
		<>
			<Heading items={[[2, 'When copying goes wrong']]} size={64} />
			<Overlay>
				<Ladder x={X} y={Y} n={7} pitch={P} top={top} bot={bot} topColor={ORIG} botColor={NEWC} botUnit={unit} botLink={i => Math.min(unit(i), unit(i - 1))} bond={bond} />
				{[2, 4].map(i => pop(i))}
				{/* mismatch ring and tag */}
				<Fade at={c.wrong + 34} out={fixAt[2] + 24}><Scribble cx={cx(2)} cy={(g.topFace + g.botFace) / 2} rx={78} ry={110} at={c.wrong + 34} color={GREYC} seed={5} /></Fade>
				<Fade at={c.wrong + 34} out={rem[2] + 8}><text x={cx(2)} y={g.yBot + 90} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 48}} fill="#5d646b">mismatch</text></Fade>
				<Fade at={c.backup + 40} out={c.backup + 130}><text x={cx(2)} y={g.yBot + 90} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 48}} fill={NEWC}>fixed</text></Fade>
				<Fade at={rem[4] + 14} out={c.fixed + 40}><text x={cx(4)} y={g.yBot + 90} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 48}} fill={NEWC}>fixed</text></Fade>
				{[2, 4].map(i => <Tick key={i} x={cx(i) + 90} y={(g.topFace + g.botFace) / 2 + 3} at={fixAt[i] + 16} s={0.9} />)}
				<Scribble cx={cx(6)} cy={(g.topFace + g.botFace) / 2} rx={78} ry={110} at={survive} color={GREYC} seed={9} />
				<Fade at={survive}><text x={cx(6)} y={g.yBot + 90} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 48}} fill="#5d646b">survived</text></Fade>
				{/* polymerase backs up; repair sweeps afterwards */}
				<Polymerase x={cx(0) + (polyCol) * P} y={g.yBot} s={0.8} o={polyO} label={false} />
				<g opacity={sweepO}><RepairIcon x={cx(0) + sweepCol * P} y={g.yBot + 150} s={0.8} label={false} /></g>
			</Overlay>
			<Hand at={c.poly + 20} out={c.repair - 6} x={cx(0) + 4} y={g.yBot + 250} size={46} color="#7b4fb3">DNA polymerase checks each base and backs up</Hand>
			<Hand at={c.repair} out={c.survives - 6} x={cx(0) + 4} y={g.yBot + 250} size={46} color="#1f7a6f">repair proteins check the new strand afterwards</Hand>
			<Hand at={c.fixed} out={c.survives - 6} x={cx(0) + 4} y={g.yBot + 308} size={50} color={NEWC}>so almost every mistake is fixed</Hand>
			<Enter at={c.mutation} style={{position: 'absolute', left: 96, top: g.yBot + 190, width: 1500}}>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 56, color: AMBER_INK, lineHeight: 1.05}}>a base that survives can become a mutation:<br />a change in the base order</div>
			</Enter>
		</>
	);
};
