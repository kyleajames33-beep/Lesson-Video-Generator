// B8-15 scenes 6 to 9: the cochlear implant (processor, coil, receiver, electrode array; skips the hair cells, needs a
// working nerve), the Australian story and the implant's limits (timeline, channels against hair cells, learning,
// music, surgery), the bone conduction implant (vibration through the skull to a working cochlea), and matched, not
// ranked (three "must still work" conditions; the choice for a baby born deaf on a level balance).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {
	AMBER_INK, BLUE, Balance, C_AID, C_BC, C_CI, CARD, Call, Chip, DrawPath, EarStack, GREEN, GREYT, GTag, INK, INK_SOFT, ON, PicH, PlateB, RED, Rings, Strip, Svg, Sx, TEAL, Title, Uncoiled, Veil, Waves,
	earPt, lerp, plPt, prog, smooth, vis,
} from './parts';
import type {Arc, EarG, Pt} from './parts';
import {BP, CP, EP, PL} from './assets';
import {K} from './common';
import {ARC_AID, LIT5} from './s1';

export const ARC_BC = (at: number, out?: number, label?: string, o?: number): Arc => ({to: 3, color: C_BC, at, out, rise: 100, label, lx: 470, o});
export const ARC_CI = (at: number, out?: number, label?: string, o?: number): Arc => ({to: 4, color: C_CI, at, out, rise: 132, label, lx: 640, o});

const spiral = (cx: number, cy: number, R: number) => {
	const pts: string[] = [];
	for (let i = 0; i <= 80; i++) { const th = (i / 80) * Math.PI * 4.2; const r = 4 + (R * th) / (Math.PI * 4.2); pts.push(`${cx + r * Math.cos(th)},${cy + r * Math.sin(th)}`); }
	return 'M' + pts.join(' L');
};

// ---------- 6. the cochlear implant ----------
const K6 = K('cochlear-implant', {skips: 'skips the hair', processor: 'A processor', coded: 'coded electrical', coil: 'A coil', radio: 'by radio', receiver: 'to a receiver', pulses: 'sends pulses', threaded: 'threaded along', each: 'Each electrode', high: 'signal high', bypassed: 'are bypassed', must: 'must still'});
const G6: EarG = {cx: 1440, cy: 430, w: 560};
const C6 = {cx: 330, cy: 360, w: 420};
export const SceneImplant: React.FC = () => {
	const f = useCurrentFrame();
	const A = 1 - prog(f, K6.each - 8, 14);
	const ci = smooth(prog(f, K6.threaded, 30));
	const Cp = (p: Pt) => plPt(PL.ci, C6.cx, C6.cy, C6.w, p);
	const arr = earPt(G6, EP.ciArray);
	return (
		<Svg>
			<Title text="The cochlear implant: skip the hair cells" />
			<EarStack g={G6} base={PL.ear} layers={[{p: PL.earCI, o: ci}]} />
			{A > 0.01 ? <g opacity={A}>
				<PlateB p={PL.ci} cx={C6.cx} cy={C6.cy} w={C6.w} />
				<Call x={600} y={250} text="coil: by radio, through skin" pt={Cp(CP.coil)} at={K6.coil} size={34} />
				<Call x={600} y={340} text="processor: sound to coded signal" pt={Cp(CP.proc)} at={K6.processor} size={34} />
				<Call x={600} y={430} text="receiver: under the skin" pt={Cp(CP.recv)} at={K6.receiver} size={34} />
				<Waves a={Cp(CP.coil)} b={[Cp(CP.coil)[0] + 10, Cp(CP.recv)[1] - 20]} at={K6.radio} out={K6.each} amp={16} n={3} period={36} color={C_CI} />
			</g> : null}
			<Call x={760} y={620} text="electrode array" pt={arr} at={K6.threaded} size={38} color={C_CI} />
			<Uncoiled x0={120} x1={760} y={420} at={K6.each} dots={12} dotsAt={K6.each} flash={[{i: 1, at: K6.high}, {i: 8, at: K6.high + 30}]} />
			<Sx x={120} y={340} text="high pitch" size={36} color={C_CI} hand at={K6.high} />
			<Sx x={520} y={340} text="low pitch" size={36} color={C_CI} hand at={K6.high + 30} />
			<GTag x={120} y={490} text="uncoiled view: one electrode per position" size={28} at={K6.each + 10} />
			<Chip x={1380} y={760} text="needs a working nerve" size={32} color={GREEN} ink={INK} at={K6.must} />
			<Strip s={{
				lit: LIT5,
				arcs: [ARC_CI(K6.bypassed, undefined, 'implant: skips the hair cells')],
				grey: [{i: 3, at: K6.bypassed + 10}],
				tick: [{i: 4, at: K6.must}],
				pulses: [{at: K6.bypassed + 16, to: 5, arc: ARC_CI(K6.bypassed), every: 40, dur: 60, color: C_CI}],
			}} />
			{void AMBER_INK}{void BLUE}{void CARD}{void C_AID}{void C_BC}{void DrawPath}{void GREYT}{void INK_SOFT}{void PicH}{void RED}{void Rings}{void TEAL}{void Veil}{void lerp}{void vis}{void BP}
		</Svg>
	);
};

// ---------- 7. an Australian story, and its limits ----------
const K7 = K('australian-story-limits', {story: 'This is', y1978: 'In 1978', grew: 'grew into', world: 'around the world', but: 'But an', restore: 'restore normal', about: 'About twelve', channels: 'electrical channels', richer: 'richer coding', coarser: 'is coarser', learns: 'brain learns', music: 'music is', surgery: 'needs surgery', damage: 'can damage'});
export const SceneStory: React.FC = () => {
	const f = useCurrentFrame();
	const tl = smooth(prog(f, K7.story, 40));
	const x0 = 160, x1 = 1780, ty = 230;
	const pts: {x: number; yr: string; t: string; tag: string; at: number}[] = [
		{x: 160, yr: '1978', t: "Graeme Clark's team, University of Melbourne", tag: 'first patient implanted 1 August 1978', at: K7.y1978},
		{x: 1010, yr: '1982', t: 'first commercial Nucleus implants', tag: 'Cochlear Limited', at: K7.grew},
		{x: 1560, yr: 'today', t: 'used worldwide', tag: '', at: K7.world},
	];
	const cur = smooth(prog(f, K7.learns + 10, 50));
	const curve: Pt[] = Array.from({length: 21}, (_, i) => { const t = i / 20; return [1200 + t * 330, 560 - 140 * (1 - Math.exp(-3.2 * t)) / (1 - Math.exp(-3.2))]; });
	const shown = curve.filter((_, i) => i / 20 <= cur);
	return (
		<Svg>
			<Title text="An Australian story, and its limits" />
			<g opacity={prog(f, K7.story, 14)}>
				<line x1={x0} x2={lerp(x0, x1, tl)} y1={ty} y2={ty} stroke={INK} strokeWidth={5} strokeLinecap="round" />
			</g>
			{pts.map(p => (
				<g key={p.yr}>
					{f >= p.at ? <circle cx={p.x} cy={ty} r={12} fill={C_CI} opacity={prog(f, p.at, 10)} /> : null}
					<Sx x={p.x} y={ty - 26} text={p.yr} size={42} color={C_CI} weight={800} at={p.at} />
					<Sx x={p.x} y={ty + 56} text={p.t} size={34} color={INK} hand at={p.at + 6} />
					{p.tag ? <GTag x={p.x} y={ty + 74} text={p.tag} size={28} at={p.at + 20} /> : null}
				</g>
			))}
			<PicH p={PL.ci} cx={250} cy={520} h={190} at={K7.story + 10} />
			<Chip x={440} y={400} text="access to sound, not normal hearing" size={34} color={RED} ink={INK} at={K7.restore} />
			<g opacity={prog(f, K7.channels, 14)}>
				<Sx x={440} y={520} text="electrical channels: about 12 to 22" size={34} color={C_CI} hand at={ON} />
				{Array.from({length: 20}, (_, i) => <circle key={i} cx={460 + i * 34} cy={552} r={12} fill={C_CI} opacity={prog(f, K7.channels + i, 6)} />)}
			</g>
			<g opacity={prog(f, K7.richer, 14)}>
				{Array.from({length: 3 * 110}, (_, i) => <circle key={i} cx={450 + (i % 110) * 6.2 + (Math.floor(i / 110) % 2) * 3} cy={600 + Math.floor(i / 110) * 7} r={2.4} fill={BLUE} />)}
				<Sx x={440} y={662} text="sensory cells: about 3,500 inner hair cells" size={34} color={BLUE} hand at={ON} />
			</g>
			<GTag x={440} y={690} text="not one channel per cell" size={28} at={K7.coarser} />
			<GTag x={800} y={690} text="not to scale" size={28} at={K7.coarser + 10} />
			<Sx x={440} y={790} text="so the sound is coarser" size={40} color={AMBER_INK} hand at={K7.coarser} />
			<g opacity={prog(f, K7.learns, 14)}>
				<path d="M1200,420 L1200,560 L1540,560" fill="none" stroke={INK_SOFT} strokeWidth={3} />
				{shown.length > 1 ? <path d={'M' + shown.map(p => p.join(',')).join(' L')} fill="none" stroke={TEAL} strokeWidth={6} strokeLinecap="round" /> : null}
				<Sx x={1210} y={410} text="understanding speech" size={30} color={TEAL} hand at={ON} />
				<Sx x={1540} y={596} text="months" size={30} color={INK} hand anchor="end" at={ON} />
			</g>
			<Chip x={1200} y={630} text="music: often harder" size={30} color={AMBER_INK} ink={INK} at={K7.music} />
			<Chip x={1200} y={700} text="surgery: can damage hearing left" size={30} color={RED} ink={INK} at={K7.surgery} />
			<Strip s={{lit: LIT5, grey: [{i: 3, at: ON}], tick: [{i: 4, at: ON}]}} />
			{void C_AID}{void C_BC}{void CARD}{void DrawPath}{void EarStack}{void GREEN}{void GREYT}{void PlateB}{void Rings}{void Uncoiled}{void Veil}{void Waves}{void earPt}{void plPt}{void vis}{void Call}
		</Svg>
	);
};

// ---------- 8. the bone conduction implant ----------
const K8 = K('bone-conduction', {third: 'The third', voice: 'own voice', bones: 'the bones', implant: 'A bone conduction implant', screw: 'titanium screw', grows: 'bone grows', processor: 'A sound processor', vibration: 'into vibration', skull: 'through the skull', skips: 'It skips', suits: 'it suits', mixed: 'or mixed', one: 'in one ear', across: 'sending sound', needs: 'But it needs'});
const G8: EarG = {cx: 1440, cy: 430, w: 560};
const B8 = {cx: 330, cy: 260, w: 440};
export const SceneBone: React.FC = () => {
	const f = useCurrentFrame();
	const Bp = (p: Pt) => plPt(PL.bc, B8.cx, B8.cy, B8.w, p);
	const bc = smooth(prog(f, K8.processor, 30));
	const band = vis(f, K8.voice, K8.one - 4, 14);
	const pair = prog(f, K8.one, 14);
	const fix = earPt(G8, EP.bcFix);
	const coch = earPt(G8, EP.cochlea);
	const dimMid = prog(f, K8.skips, 16);
	return (
		<Svg>
			<Title text="The bone conduction implant" />
			<EarStack g={G8} base={PL.ear} layers={[{p: PL.earBC, o: bc}]} />
			<Veil c={earPt(G8, [1010, 990])} rx={120} ry={52} v={dimMid * 0.7} rot={4} />
			<Rings c={fix} at={K8.processor + 20} R={50} color={C_BC} />
			<Waves a={fix} b={coch} at={K8.skull} amp={20} n={4} period={50} color={C_BC} />
			<g opacity={prog(f, K8.implant - 6, 14)}><PlateB p={PL.bc} cx={B8.cx} cy={B8.cy} w={B8.w} /></g>
			<Call x={110} y={400} text="titanium screw in bone" pt={[Bp(BP.screw)[0] + 10, Bp(BP.screw)[1] + 16]} at={K8.screw} size={34} from={[150, 368]} />
			<GTag x={110} y={418} text="bone grows onto the screw" size={28} at={K8.grows} />
			<Call x={600} y={300} text="processor: sound to vibration" pt={Bp(BP.proc)} at={K8.processor} size={34} />
			{band > 0.01 ? <g opacity={band}>
				<rect x={110} y={490} width={440} height={100} rx={20} fill="#efe3c6" stroke="#b9a57a" strokeWidth={3} />
				{Array.from({length: 22}, (_, i) => <circle key={i} cx={130 + (i % 11) * 39 + (i > 10 ? 18 : 0)} cy={i > 10 ? 565 : 520} r={6 + (i % 3) * 2} fill="#d8c69a" />)}
				<Rings c={[140, 540]} at={K8.voice} R={100} color={C_BC} />
				<Sx x={110} y={640} text="bone carries vibration" size={36} color={C_BC} hand at={K8.voice + 6} />
			</g> : null}
			{pair > 0.01 ? <g opacity={pair}>
				<path d={spiral(180, 540, 44)} fill="none" stroke="#a8a092" strokeWidth={6} strokeLinecap="round" />
				<path d={spiral(470, 540, 44)} fill="none" stroke={GREEN} strokeWidth={6} strokeLinecap="round" />
				<Sx x={180} y={624} text="deaf ear" size={30} color={GREYT} hand anchor="middle" at={ON} />
				<Sx x={470} y={624} text="working cochlea" size={30} color={GREEN} hand anchor="middle" at={ON} />
				<DrawPath d="M238,540 Q325,490 402,540" at={K8.across} dur={16} color={C_BC} width={5} />
				<path opacity={prog(f, K8.across + 14, 6)} d="M386,526 L404,541 L382,550" fill="none" stroke={C_BC} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />
				<Sx x={110} y={700} text="one deaf ear: sound sent across" size={34} color={INK} hand at={K8.across} />
			</g> : null}
			<Chip x={600} y={460} text="suits: conductive, mixed" size={32} color={C_BC} ink={INK} at={K8.suits} />
			<Chip x={600} y={540} text="needs a working cochlea" size={32} color={GREEN} ink={INK} at={K8.needs} />
			<Strip s={{
				lit: LIT5,
				arcs: [ARC_BC(K8.skips, undefined, 'skips the outer and middle ear')],
				grey: [{i: 1, at: K8.skips + 10}, {i: 2, at: K8.skips + 10}],
				tick: [{i: 3, at: K8.needs}],
				pulses: [{at: K8.skips + 16, to: 5, arc: ARC_BC(K8.skips), every: 40, dur: 60, color: C_BC}],
			}} />
			{void AMBER_INK}{void BLUE}{void CARD}{void C_AID}{void C_CI}{void INK_SOFT}{void PicH}{void RED}{void TEAL}{void Uncoiled}{void lerp}{void CP}
		</Svg>
	);
};

// ---------- 9. matched, not ranked ----------
const K9 = K('matched-not-ranked', {ranked: "aren't ranked", matched: "they're matched", aid: 'A hearing aid', path: 'enough of the pathway', bone: 'A bone conduction', cochlea: 'the cochlea must', ci: 'A cochlear implant', nerve: 'the nerve must', baby: 'For a', early: 'implanting early', consent: "can't consent", deaf: 'Many Deaf', auslan: 'use Auslan', culture: 'a culture', weigh: 'families weigh'});
export const SceneMatched: React.FC = () => {
	const f = useCurrentFrame();
	const A = 1 - prog(f, K9.baby - 6, 16);
	const B = prog(f, K9.baby, 16);
	const arcO = 1 - 0.65 * B;
	const cols: {x: number; p: typeof PL.aid; h: number; chip: string; at: number; col: string}[] = [
		{x: 96, p: PL.aid, h: 190, chip: 'hearing aid → enough of the path', at: K9.aid, col: C_AID},
		{x: 610, p: PL.bc, h: 110, chip: 'bone conduction → cochlea', at: K9.bone, col: C_BC},
		{x: 1040, p: PL.ci, h: 190, chip: 'cochlear implant → nerve', at: K9.ci, col: C_CI},
	];
	return (
		<Svg>
			<Title text="Matched, not ranked" />
			<Sx x={96} y={214} text="louder, or skip the broken part" size={50} color={BLUE} hand at={K9.matched} />
			<EarStack g={{cx: 1620, cy: 420, w: 360}} base={PL.ear} o={prog(f, K9.ranked, 16)} />
			{A > 0.01 ? <g opacity={A}>
				{cols.map((c, i) => {
					const w = 0.47 * 30 * c.chip.length + 36;
					return <g key={i}>
						<PicH p={c.p} cx={c.x + w / 2} cy={380} h={c.h} at={c.at} />
						<Chip x={c.x} y={510} text={c.chip} size={30} color={c.col} ink={INK} at={c.at + 6} />
						<GTag x={c.x} y={584} text={['louder: path must work', 'skips outer and middle ear', 'skips the hair cells'][i]} size={28} at={[K9.path, K9.cochlea, K9.nerve][i]} />
					</g>;
				})}
			</g> : null}
			{B > 0.01 ? <g opacity={B}>
				<Balance x={880} y={330} L={300} />
				<Sx x={580} y={530} text="early implant:" size={36} color={INK} hand anchor="middle" at={K9.early} />
				<Sx x={580} y={574} text="spoken language" size={36} color={TEAL} hand anchor="middle" at={K9.early} />
				<Sx x={1180} y={530} text="can't consent;" size={36} color={INK} hand anchor="middle" at={K9.consent} />
				<Sx x={1180} y={574} text="Deaf culture and Auslan" size={36} color={C_CI} hand anchor="middle" at={K9.auslan} />
				<GTag x={1180} y={600} text="Deaf: the cultural community" size={28} anchor="middle" at={K9.deaf} />
				<GTag x={1180} y={656} text="Auslan: Australian Sign Language" size={28} anchor="middle" at={K9.auslan + 10} />
				<Sx x={880} y={280} text="families weigh both" size={46} color={AMBER_INK} hand anchor="middle" at={K9.weigh} />
			</g> : null}
			<Strip s={{
				lit: LIT5,
				arcs: [ARC_AID(K9.aid, undefined, undefined, arcO), ARC_BC(K9.bone, undefined, undefined, arcO), ARC_CI(K9.ci, undefined, undefined, arcO)],
				tick: [{i: 3, at: K9.cochlea, out: K9.baby}, {i: 4, at: K9.nerve, out: K9.baby}],
			}} />
			{void CARD}{void DrawPath}{void GREEN}{void GREYT}{void INK_SOFT}{void PlateB}{void RED}{void Rings}{void Uncoiled}{void Veil}{void Waves}{void earPt}{void plPt}{void vis}{void Call}{void lerp}{void BP}{void CP}{void EP}{void smooth}
		</Svg>
	);
};
