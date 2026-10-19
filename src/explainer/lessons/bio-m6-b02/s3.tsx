// M6 B02 scenes 9 and 10: the full mutagen board (what each does to DNA, then the three ways a change lasts) and the
// memory lines (mutagen = cause, mutation = change; UV kinks, X-rays snap).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Heading, Overlay, PlateB, Sx, prog} from '../bio-m5-b13/shared';
import {PLATES} from '../bio-m6-b01/assets';
import {S} from './common';
import {AMBER, AMBER_INK, BEAKER, CardBox, GREYT, INK, INK_SOFT, MechIcon, SUN, SlimStrand, SpectrumBar, smooth, vis} from './parts';
import type {PB} from '../bio-m5-b07/shared';

const fitW = (p: PB, maxW: number, maxH: number) => Math.min(maxW, (maxH * (p.box[2] - p.box[0])) / (p.box[3] - p.box[1]));

// ---------- 9. One question for any mutagen ----------
const K9 = cues(S('any-mutagen'), {ask: 'ask what it physically does to DNA', uv: 'UV joins neighbouring bases', ion: 'Ionising radiation breaks strands', chem: 'Chemicals swap in for bases', vir: 'Some viruses insert new DNA', last: 'Then the last step', damaged: 'Damaged bases become mutations', joined: 'A break joined back wrongly', inserted: 'inserted viral DNA'});
export const SceneAnyMutagen: React.FC = () => {
	const f = useCurrentFrame();
	const rows: {p: PB; id?: string; g: string; does: string; icon: 'kink' | 'gap' | 'base' | 'insert'; at: number; out: number}[] = [
		{p: SUN, id: 'am-sun', g: 'EM radiation: UV', does: 'joins neighbouring bases (a kink)', icon: 'kink', at: K9.uv, out: K9.ion},
		{p: PLATES.xray, g: 'EM radiation: X-rays, gamma', does: 'breaks strands', icon: 'gap', at: K9.ion, out: K9.chem},
		{p: BEAKER, g: 'chemicals', does: 'swap in for, change, or slide between bases', icon: 'base', at: K9.chem, out: K9.vir},
		{p: PLATES.virus, g: 'naturally occurring (e.g. viruses)', does: 'insert new DNA', icon: 'insert', at: K9.vir, out: K9.last},
	];
	const routes = [
		{t: 'damaged base → copied before repair → mutation', at: K9.damaged, y: 760},
		{t: 'break → joined back wrongly → piece lost or swapped', at: K9.joined, y: 876},
		{t: 'viral DNA inserted → gene broken or switched on', at: K9.inserted, y: 946},
	];
	return (
		<>
			<Heading text="Ask: what does it do to DNA?" at={K9.ask - 30} size={56} />
			<Overlay>
				{rows.map((r, k) => {
					const y = 200 + k * 116;
					const hot = vis(f, r.at, r.out, 10);
					return (
						<g key={k} opacity={prog(f, k * 6, 12)}>
							<CardBox x={100} y={y} w={1720} h={104} at={-100} />
							<PlateB p={r.p} cx={170} cy={y + 52} w={fitW(r.p, 100, 86)} id={r.id} />
							<Sx x={250} y={y + 64} text={r.g} size={34} color={INK} hand />
							<MechIcon kind={r.icon} x={760} y={y + 38} s={1.3} />
							<rect x={930} y={y + 10} width={880} height={84} rx={14} fill={hot > 0.01 ? '#fff3d9' : 'none'} stroke={hot > 0.5 ? AMBER : 'rgba(60,45,20,0.12)'} strokeWidth={hot > 0.5 ? 4 : 2} />
							<Sx x={956} y={y + 64} text={r.does} size={32} color={INK} weight={600} at={r.at - 4} />
						</g>
					);
				})}
				<Sx x={100} y={700} text="how the change lasts" size={40} color={INK} hand at={K9.last} />
				{routes.map((r, k) => <Sx key={k} x={130} y={r.y} text={r.t} size={36} color={k === 0 ? AMBER_INK : INK} hand at={r.at} />)}
				<Sx x={230} y={814} text="or: damaged base → repaired correctly → no mutation" size={28} color={GREYT} hand at={K9.damaged + 40} />
			</Overlay>
		</>
	);
};

// ---------- 10. Memory ----------
const K10 = cues(S('memory'), {two: 'Two things to keep', cause: 'A mutagen is the cause', change: 'a mutation is the change', rad: 'And for radiation', uvk: 'UV kinks', xs: 'X-rays snap', cant: "UV can't knock electrons off", ionis: 'X-rays are ionising'});
export const SceneMemory: React.FC = () => {
	const f = useCurrentFrame();
	const kinkA = smooth(prog(f, K10.uvk + 6, 20));
	const brk = smooth(prog(f, K10.xs + 6, 14));
	const flash = Math.max(vis(f, K10.cant, K10.cant + 50, 10), vis(f, K10.ionis, K10.ionis + 50, 10));
	return (
		<>
			<Heading text="Two things to keep" at={K10.two} size={56} />
			<Overlay>
				<Sx x={140} y={330} text="Mutagen = cause." size={80} color={INK} hand at={K10.cause} />
				<Sx x={1000} y={330} text="Mutation = change." size={80} color={AMBER_INK} hand at={K10.change} />
				<Sx x={140} y={570} text="UV kinks," size={96} color="#5c3f8a" hand at={K10.uvk} />
				<Sx x={720} y={570} text="X-rays snap" size={96} color="#2d5584" hand at={K10.xs} />
				<g opacity={prog(f, K10.uvk, 12)}><SlimStrand x={150} y={640} n={11} pitch={30} gap={40} lineW={5} kink={{i: 5, amt: kinkA}} rung={i => (i === 5 || i === 6 ? {color: AMBER, w: 5} : undefined)} /></g>
				<g opacity={prog(f, K10.xs, 12)}><SlimStrand x={730} y={640} n={14} pitch={30} gap={40} lineW={5} breaks={[{i: 6, line: 'top', amt: brk}, {i: 6, line: 'bot', amt: brk}]} /></g>
				<Sx x={140} y={790} text="UV can't knock electrons off, so it bonds neighbouring bases" size={32} color={INK} weight={600} at={K10.cant} />
				<Sx x={140} y={840} text="X-rays are ionising, so they break the strands" size={32} color={INK} weight={600} at={K10.ionis} />
				<SpectrumBar x={300} y={930} w={1320} h={44} size={19} o={prog(f, K10.rad, 12)} arrow={0} ion={0.35 + 0.65 * flash} />
				{void INK_SOFT}
			</Overlay>
		</>
	);
};
