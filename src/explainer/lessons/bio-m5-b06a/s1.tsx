import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Helix} from '../bio-m5-b01/shared';
import {
	AMBER, AMBER_INK, BAC, Cam, DnaRing, DrawPath, EUK, Fade, GhostRing, GreyCross, GreyTag, Grips, Hand, Heading, INK, INK_SOFT, NUC, NUCL,
	Overlay, PL, PLUM, Pl, Plasmid, Ring2, S, Sx, TagP, TennisBall, TickM, camAt, kf, prog, toScreen,
} from './shared';
import type {CamKey} from './shared';

export const MAIN_Q = 'How is DNA arranged in a bacterium and in your cells?';
/** A tangled loose thread (Lissajous scribble) inside an ellipse. */
export const tangle = (cx: number, cy: number, rx: number, ry: number, a = 3, b = 5, steps = 260) =>
	Array.from({length: steps + 1}, (_, i) => {
		const t = i / steps;
		const x = 0.62 * Math.sin(2 * Math.PI * (a + 0.13) * t) + 0.38 * Math.sin(2 * Math.PI * (a * 2.4 + 0.3) * t + 1.1);
		const y = 0.6 * Math.sin(2 * Math.PI * (b - 0.27) * t + 0.7) + 0.4 * Math.cos(2 * Math.PI * (b * 1.9 + 0.4) * t + 0.3);
		return `${i ? 'L' : 'M'}${(cx + rx * x).toFixed(1)},${(cy + ry * y).toFixed(1)}`;
	}).join(' ');
/** The bacterium and the animal cell on the fixed board, inside the camera. */
export const BoardCells: React.FC<{leftO?: number; rightO?: number; leftDx?: number; children?: React.ReactNode; left?: React.ReactNode; right?: React.ReactNode}> = ({leftO = 1, rightO = 1, leftDx = 0, left, right}) => (
	<>
		<g opacity={leftO} transform={leftDx ? `translate(${leftDx},0)` : undefined}>
			<Pl p={PL.bact} x={BAC.x} y={BAC.y} k={BAC.k} />
			{left}
		</g>
		<g opacity={rightO}>
			<Pl p={PL.animal} x={EUK.x} y={EUK.y} k={EUK.k} />
			{right}
		</g>
	</>
);

// ---------- 1. Hook: two metres in a tennis ball ----------
const H1 = 'hook';
const KH = cues(S(H1), {copy: 'In the copying video', billions: 'billions of letters', how: 'How', unwind: 'If you could unwind', two: 'two metres', sits: 'It sits in a nucleus', six: 'six thousandths', blow: 'Blow that nucleus up', tennis: 'tennis ball', ten: 'more than ten kilometres', store: 'So how does a cell store', bact: 'And does a bacterium', none: 'no nucleus at all', diff: 'do it differently'});
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const keys: CamKey[] = [[0, 1, EUK.x, EUK.y], [KH.blow - 4, 1, EUK.x, EUK.y], [KH.blow + 36, 2.3, NUC.cx, NUC.cy], [KH.bact - 4, 2.3, NUC.cx, NUC.cy], [KH.bact + 34, 1, 960, 560]];
	const c = camAt(f, keys);
	const thread = `M${NUC.cx},${NUC.cy} ` + Array.from({length: 40}, (_, i) => `L${(NUC.cx + 20 + i * 36).toFixed(0)},${(NUC.cy + 14 * Math.sin(i * 1.3)).toFixed(0)}`).join(' ');
	const ball = prog(f, KH.tennis - 10, 20) * (1 - prog(f, KH.bact, 16));
	const cellO = prog(f, KH.how - 6, 16);
	const bacIn = prog(f, KH.bact + 6, 26);
	const strip = prog(f, KH.ten - 4, 14) * (1 - prog(f, KH.store + 20, 14));
	const scroll = (f * 7) % 240;
	return (
		<>
			<Heading text="How does a cell store all that DNA?" at={KH.store - 4} out={KH.bact} size={60} />
			<Heading text={MAIN_Q} at={KH.bact + 20} size={56} />
			<Overlay>
				{/* recall: the helix from the copying video */}
				<Fade at={KH.copy} out={KH.how + 4}>
					<Helix x={760} y={420} w={400} h={120} color={PLUM} at={KH.copy} dur={24} turns={4} />
					<Sx x={960} y={620} text="billions of letters" size={46} color={AMBER_INK} hand anchor="middle" at={KH.billions} />
				</Fade>
				<g transform={`translate(960,560) scale(${c.s}) translate(${-c.x},${-c.y})`}>
					<g opacity={bacIn} transform={`translate(${-(1 - bacIn) * 420},0)`}>
						<Pl p={PL.bact} x={BAC.x} y={BAC.y} k={BAC.k} />
					</g>
					<g opacity={cellO}>
						<Pl p={PL.animal} x={EUK.x} y={EUK.y} k={EUK.k} />
						<g opacity={1 - prog(f, KH.bact, 16)}>
							<DrawPath d={thread} at={KH.unwind + 10} dur={70} color={PLUM} width={4} />
						</g>
						<TennisBall cx={NUC.cx} cy={NUC.cy} r={NUC.r} o={ball} />
					</g>
					<Ring2 cx={NUC.cx} cy={NUC.cy} rx={NUC.r + 16} ry={NUC.r + 16} at={KH.sits} out={KH.blow} width={4} />
				</g>
				<Hand x={1250} y={470} text="about 2 metres" at={KH.two} out={KH.blow} size={52} />
				<TagP x={1130} y={250} text="nucleus: about 6 micrometres (0.006 mm)" at={KH.six} out={KH.blow} />
				<TagP x={1290} y={250} text="enlarged about 11,000 times" at={KH.tennis + 6} out={KH.store + 20} />
				<TagP x={1290} y={330} text="tennis ball = the nucleus" at={KH.tennis + 14} out={KH.store + 20} />
				{/* the thread at tennis-ball scale: past a row of landmarks */}
				{strip > 0.01 ? (
					<g opacity={strip}>
						<rect x={96} y={880} width={1728} height={150} rx={20} fill="#fffdf8" stroke="rgba(60,45,20,0.18)" strokeWidth={3} />
						{Array.from({length: 9}, (_, i) => {
							const x = 120 + ((i * 240 - scroll + 2400) % 2160) - 120;
							if (x < 110 || x > 1790) return null;
							return i % 2 ? (
								<g key={i}><rect x={x} y={920} width={50} height={40} fill="#e8d9bd" stroke={INK} strokeWidth={2.5} /><path d={`M${x - 6},${922} L${x + 25},${898} L${x + 56},${922}`} fill="#c98b5a" stroke={INK} strokeWidth={2.5} /></g>
							) : (
								<g key={i}><path d={`M${x + 25},${960} L${x + 25},${934}`} stroke="#8a6a50" strokeWidth={5} /><circle cx={x + 25} cy={918} r={20} fill="#9fb98a" stroke={INK} strokeWidth={2.5} /></g>
							);
						})}
						<path d="M110,990 L1810,990" stroke={PLUM} strokeWidth={4} />
						<Sx x={1800} y={1018} text="more than 10 km (a long walk)" size={34} color={AMBER_INK} hand anchor="end" at={KH.ten + 6} />
					</g>
				) : null}
				<Sx x={430} y={790} text="a bacterium: no nucleus" size={40} color={INK_SOFT} hand anchor="middle" at={KH.none} />
				<Sx x={960} y={1000} text="Does it do it differently?" size={44} color={AMBER_INK} hand anchor="middle" at={KH.diff} />
			</Overlay>
		</>
	);
};
void toScreen;

// ---------- 2. Two kinds of cell ----------
const H2 = 'two-kinds-of-cell';
const K2 = cues(S(H2), {every: 'Every cell stores', helix: 'the same double helix', differs: 'What differs', where: 'where the DNA is kept', shape: 'what shape it takes', euk: 'A eukaryote', animal: 'like an animal', inside: 'inside a nucleus', compartment: 'an inner compartment', membrane: 'membrane around it', prok: 'A prokaryote has', none: 'has no nucleus', bacteria: 'Bacteria are the prokaryotes'});
export const SceneTwoKinds: React.FC = () => {
	const f = useCurrentFrame();
	const hx = prog(f, K2.differs, 16);
	return (
		<>
			<Heading text={MAIN_Q} at={-100} size={56} />
			<Overlay>
				<BoardCells
					left={<g opacity={hx}><DrawPath d={tangle(NUCL.cx, NUCL.cy, 110, 30)} at={K2.differs} dur={30} color={PLUM} width={3.5} /></g>}
					right={<g opacity={hx}><DrawPath d={tangle(NUC.cx, NUC.cy, NUC.r * 0.62, NUC.r * 0.62, 4, 5)} at={K2.differs + 6} dur={30} color={PLUM} width={3.5} /></g>} />
				<Fade at={K2.helix - 6} out={K2.differs + 10}>
					<Helix x={720} y={500} w={480} h={110} color={PLUM} at={K2.helix - 6} dur={24} turns={4} />
					<Sx x={960} y={680} text="same four bases: A, T, C, G" size={40} color={AMBER_INK} hand anchor="middle" at={K2.helix + 10} />
				</Fade>
				<Sx x={960} y={300} text="the same DNA in both cells" size={44} color={PLUM} hand anchor="middle" at={K2.differs + 14} />
				<Ring2 cx={NUCL.cx} cy={NUCL.cy} rx={170} ry={62} at={K2.where} out={K2.euk} />
				<Ring2 cx={NUC.cx} cy={NUC.cy} rx={NUC.r + 26} ry={NUC.r + 26} at={K2.where + 10} out={K2.euk} seed={5} />
				{/* eukaryote: the nuclear envelope around the DNA */}
				<circle cx={NUC.cx} cy={NUC.cy} r={NUC.r + 6} fill="none" stroke="#5b4d70" strokeWidth={6} strokeDasharray="24 12" opacity={prog(f, K2.compartment, 14) * (0.4 + 0.6 * Math.abs(Math.sin((f - K2.compartment) * 0.08)))} />
				<Sx x={EUK.x} y={940} text="eukaryote: DNA inside a nucleus" size={44} color={INK} hand anchor="middle" at={K2.inside} />
				{/* prokaryote: no envelope */}
				<GhostRing cx={NUCL.cx} cy={NUCL.cy} rx={150} ry={50} at={K2.none - 4} />
				<GreyCross x={NUCL.cx + 150} y={NUCL.cy - 40} at={K2.none + 4} s={22} />
				<Sx x={BAC.x} y={780} text="prokaryote: no nucleus" size={44} color={INK} hand anchor="middle" at={K2.none} />
				<TickM x={BAC.x + 240} y={762} at={K2.bacteria + 6} />
				<Sx x={BAC.x} y={830} text="e.g. bacteria" size={36} color={INK_SOFT} hand anchor="middle" at={K2.bacteria + 4} />
				<Sx x={960} y={1010} text="one thread = the whole double helix" size={36} color={INK_SOFT} hand anchor="middle" at={K2.differs + 24} />
			</Overlay>
		</>
	);
};

// ---------- shared stage geometry for the bacterium push-in (scenes 3 to 5) ----------
export const BCAM: CamKey = [0, 1.9, BAC.x + 10, BAC.y];
export const bscr = (p: [number, number]) => toScreen({s: BCAM[1], x: BCAM[2], y: BCAM[3]}, p);
export const RING = {rx: 110, ry: 32};

// ---------- 3. The bacterium: a ring in the nucleoid ----------
const H3 = 'bacterium-ring';
const K3 = cues(S(H3), {start: 'Start with a bacterium', most: 'In most bacteria', one: 'one long molecule', ends: 'whose two ends are joined', ring: 'it forms a ring', circ: 'circular chromosome', nonuc: 'With no nucleus', region: 'lies in one region', nucleoid: 'called the nucleoid', like: 'nucleus-like', nomem: 'has no membrane', simply: 'It is simply'});
export const SceneBacteriumRing: React.FC = () => {
	const f = useCurrentFrame();
	const keys: CamKey[] = [[0, 1, 960, 560], [30, BCAM[1], BCAM[2], BCAM[3]]];
	const m = prog(f, K3.ends + 6, 34);
	const draw = prog(f, K3.one, 26);
	const pts = Array.from({length: 121}, (_, i) => {
		const u = i / 120;
		const lx = NUCL.cx - 170 + 340 * u, ly = NUCL.cy + 9 * Math.sin(u * Math.PI * 6);
		const rx = NUCL.cx - RING.rx * Math.cos(2 * Math.PI * u), ry = NUCL.cy - RING.ry * Math.sin(2 * Math.PI * u);
		return [lx + (rx - lx) * m, ly + (ry - ly) * m] as [number, number];
	});
	const d = pts.map((p, i) => `${i ? 'L' : 'M'}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ');
	const c = bscr([NUCL.cx, NUCL.cy]);
	const click = f >= K3.ends + 38 ? Math.max(0, 1 - (f - K3.ends - 38) / 16) : 0;
	return (
		<>
			<Heading text="A bacterium: one ring" at={4} size={60} />
			<Overlay>
				<Cam keys={keys}>
					<BoardCells rightO={1 - 0.7 * prog(f, 10, 16)} left={
						<g>
							<ellipse cx={NUCL.cx} cy={NUCL.cy} rx={150} ry={48} fill="#fff7e2" opacity={0.7 * prog(f, K3.region, 16)} />
							{draw > 0 ? <path d={d} fill="none" stroke={PLUM} strokeWidth={4} strokeLinecap="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - draw} /> : null}
							{draw > 0.95 && m < 0.98 ? <><circle cx={pts[0][0]} cy={pts[0][1]} r={6} fill={AMBER} /><circle cx={pts[120][0]} cy={pts[120][1]} r={6} fill={AMBER} /></> : null}
							{click > 0 ? <circle cx={pts[0][0]} cy={pts[0][1]} r={8 + 22 * (1 - click)} fill="none" stroke={AMBER} strokeWidth={3} opacity={click} /> : null}
							<GhostRing cx={NUCL.cx} cy={NUCL.cy} rx={160} ry={54} at={K3.nomem - 4} />
							<GreyCross x={NUCL.cx + 156} y={NUCL.cy - 44} at={K3.nomem + 4} s={14} />
						</g>
					} />
				</Cam>
				<Sx x={c[0]} y={300} text="circular chromosome: a ring" size={50} color={PLUM} hand anchor="middle" at={K3.circ} />
				<Sx x={c[0]} y={340} text="one DNA molecule, two ends joined" size={34} color={INK_SOFT} hand anchor="middle" at={K3.circ + 10} />
				<Sx x={c[0] - 40} y={830} text="nucleoid" size={62} color={AMBER_INK} hand anchor="end" at={K3.nucleoid} />
				<Sx x={c[0] - 20} y={830} text="= nucleus-like" size={46} color={AMBER_INK} hand at={K3.like} />
				<Sx x={c[0]} y={880} text="(eukaryote: a true nucleus)" size={32} color={INK_SOFT} hand anchor="middle" at={K3.like + 12} />
				<TagP x={c[0]} y={920} text="no membrane around it" anchor="middle" at={K3.nomem + 8} />
			</Overlay>
		</>
	);
};

// ---------- 4. Not floating loose: coiling ----------
const H4 = 'coiling';
const K4 = cues(S(H4), {far: 'far longer than the cell', stretched: 'Stretched out', mm: 'one and a half millimetres', hundred: 'several hundred times', loose: 'not floating loose', enz: 'Enzymes twist the ring', rubber: 'rubber band', coil: 'coil up on itself', proteins: 'proteins grip', points: 'many points', compact: 'hold it compact', packs: 'That packs the long ring'});
export const SceneCoiling: React.FC = () => {
	const f = useCurrentFrame();
	const keys: CamKey[] = [[0, BCAM[1], BCAM[2], BCAM[3]], [K4.far, BCAM[1], BCAM[2], BCAM[3]], [K4.far + 30, 1, 520, 583], [K4.enz + 10, 1, 520, 583], [K4.enz + 46, BCAM[1], BCAM[2], BCAM[3]]];
	const rx = kf(f, [[K4.far, RING.rx], [K4.stretched + 20, 440], [K4.enz, 440], [K4.coil, RING.rx]]);
	const ry = kf(f, [[K4.far, RING.ry], [K4.stretched + 20, 175], [K4.enz, 175], [K4.coil, RING.ry]]);
	const coil = prog(f, K4.rubber, 50);
	const c = bscr([NUCL.cx, NUCL.cy]);
	const tw = prog(f, K4.enz + 4, 40);
	const band = Array.from({length: 161}, (_, i) => {
		const t = (i / 160) * Math.PI * 2;
		return [1560 + 110 * Math.cos(t), 250 + 46 * Math.sin(t) * (1 - tw) + 46 * Math.sin(2 * t) * 0.7 * tw] as [number, number];
	}).map((p, i) => `${i ? 'L' : 'M'}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ');
	return (
		<>
			<Heading text="Not floating loose" at={4} size={60} />
			<Overlay>
				<Cam keys={keys}>
					<BoardCells rightO={0.3} left={
						<g>
							<ellipse cx={NUCL.cx} cy={NUCL.cy} rx={150} ry={48} fill="#fff7e2" opacity={0.7} />
							<DnaRing cx={NUCL.cx} cy={NUCL.cy} rx={rx} ry={ry} coil={coil} width={4} />
							<Grips cx={NUCL.cx} cy={NUCL.cy} rx={RING.rx} ry={RING.ry} at={K4.proteins} n={10} r={6} />
						</g>
					} />
				</Cam>
				{/* the one ratio in this scene */}
				<Fade at={K4.mm - 4} out={K4.enz}>
					<rect x={96} y={850} width={1100} height={170} rx={20} fill="#fffdf8" stroke="rgba(60,45,20,0.18)" strokeWidth={3} />
					<Sx x={126} y={900} text="ring stretched out: about 1.5 mm" size={38} color={PLUM} weight={600} at={K4.mm} />
					<Sx x={126} y={948} text="cell: about 2 to 4 micrometres long" size={34} color={INK} weight={600} at={K4.mm + 10} />
					<Sx x={126} y={996} text="several hundred times longer (about 400 to 800)" size={36} color={AMBER_INK} hand at={K4.hundred} />
				</Fade>
				<Fade at={K4.loose - 4} out={K4.proteins}>
					<rect x={1290} y={890} width={440} height={170} rx={18} fill="#fffdf8" stroke="rgba(60,45,20,0.18)" strokeWidth={3} />
					<path d={tangle(1510, 950, 110, 40, 5, 7)} fill="none" stroke={PLUM} strokeWidth={3} opacity={0.45} />
					<GreyCross x={1510} y={950} at={K4.loose + 4} s={40} />
					<Sx x={1510} y={1036} text="not floating loose" size={40} color={INK_SOFT} hand anchor="middle" at={K4.loose + 6} />
				</Fade>
				{/* analogy: twisting a loop of rubber band */}
				<Fade at={K4.enz} out={K4.compact + 30}>
					<path d={band} fill="none" stroke="#c98b5a" strokeWidth={9} strokeLinecap="round" />
					<Sx x={1560} y={360} text="analogy: twisting a loop of rubber band" size={30} color={INK_SOFT} hand anchor="middle" at={K4.enz + 6} />
				</Fade>
				<Hand x={c[0]} y={300} text="enzymes twist the ring into coils" at={K4.coil - 6} out={K4.packs + 30} anchor="middle" size={42} />
				<Hand x={c[0]} y={840} text="held compact by proteins" at={K4.points} anchor="middle" size={46} />
				<Sx x={c[0]} y={900} text="packed into the nucleoid, with no membrane" size={36} color={INK_SOFT} hand anchor="middle" at={K4.packs} />
			</Overlay>
		</>
	);
};

// ---------- 5. Plasmids ----------
const H5 = 'plasmids';
const K5 = cues(S(H5), {many: 'Many bacteria also', plasmids: 'carry plasmids', small: 'small separate rings', smaller: 'usually much smaller', copies: 'The cell copies a plasmid', sep: 'separately from the main', extra: 'extra genes', resist: 'resistant to an antibiotic', saw: 'You saw bacteria pass', conj: 'in conjugation', often: 'Plasmids are often'});
const P1: [number, number] = [250, 566], P2: [number, number] = [628, 560], P3: [number, number] = [612, 612];
const B2 = {x: 430, y: 880};
export const ScenePlasmids: React.FC = () => {
	const f = useCurrentFrame();
	const zoomOut = K5.saw;
	const keys: CamKey[] = [[0, BCAM[1], BCAM[2], BCAM[3]], [zoomOut, BCAM[1], BCAM[2], BCAM[3]], [zoomOut + 30, 1, 470, 720]];
	const cp = prog(f, K5.copies + 10, 26);
	const in2 = prog(f, K5.saw + 10, 26);
	const travel = prog(f, K5.conj + 4, 50);
	const route: [number, number][] = [P1, [400, 640], [430, 700], [430, 790], [360, 875]];
	const seg = travel * (route.length - 1), si = Math.min(route.length - 2, Math.floor(seg)), st = seg - si;
	const tp: [number, number] = [route[si][0] + (route[si + 1][0] - route[si][0]) * st, route[si][1] + (route[si + 1][1] - route[si][1]) * st];
	const arrived = travel >= 1;
	const pulse = f >= K5.copies && f < K5.copies + 20 ? 1 + 0.4 * Math.sin(((f - K5.copies) / 20) * Math.PI) : 1;
	return (
		<>
			<Heading text="Plasmids: small extra rings" at={4} size={60} />
			<Overlay>
				<Cam keys={keys}>
					<BoardCells rightO={0.3} left={
						<g>
							<ellipse cx={NUCL.cx} cy={NUCL.cy} rx={150} ry={48} fill="#fff7e2" opacity={0.7} />
							<DnaRing cx={NUCL.cx} cy={NUCL.cy} rx={RING.rx} ry={RING.ry} coil={1} width={4} />
							<Grips cx={NUCL.cx} cy={NUCL.cy} rx={RING.rx} ry={RING.ry} at={-100} n={10} r={6} />
							<Plasmid cx={P1[0]} cy={P1[1]} at={K5.plasmids} gene={K5.extra} />
							<g transform={`translate(${P2[0]},${P2[1]}) scale(${pulse}) translate(${-P2[0]},${-P2[1]})`}><Plasmid cx={P2[0]} cy={P2[1]} at={K5.plasmids + 6} /></g>
							{cp > 0 ? <Plasmid cx={P2[0] - 40 * cp} cy={P2[1] - 22 * cp} at={-100} o={cp} /> : null}
							<Plasmid cx={P3[0]} cy={P3[1]} at={K5.plasmids + 12} />
						</g>
					} />
					{/* conjugation: a second bacterium (the same blank plate) and a tube between them */}
					<g opacity={in2} transform={`translate(${-(1 - in2) * 400},0)`}>
						<Pl p={PL.bact} x={B2.x} y={B2.y} k={BAC.k} />
						<Plasmid cx={540} cy={880} at={-100} />
					</g>
					<g opacity={prog(f, K5.conj - 6, 14)}>
						<path d="M430,672 L430,790" stroke="#b9a07a" strokeWidth={14} strokeLinecap="round" />
						<path d="M430,672 L430,790" stroke="#efe2c6" strokeWidth={7} strokeLinecap="round" />
					</g>
					{f >= K5.conj + 4 && !arrived ? <Plasmid cx={tp[0]} cy={tp[1]} at={-100} gene={-100} /> : null}
					{arrived ? <Plasmid cx={360} cy={875} at={-100} gene={-100} /> : null}
				</Cam>
				{/* labels while pushed in */}
				<Fade at={K5.small} out={zoomOut - 6}>
					<Sx x={960} y={300} text="plasmid: small, separate ring" size={50} color={PLUM} hand anchor="middle" at={K5.small} />
				</Fade>
				<Ring2 cx={bscr(P2)[0] - 20} cy={bscr(P2)[1] + 30} rx={110} ry={90} at={K5.small + 4} out={K5.copies} />
				<TagP x={960} y={800} text="usually much smaller than the main chromosome (not to scale)" anchor="middle" at={K5.smaller} out={zoomOut - 6} size={30} />
				<Hand x={1200} y={380} text="copied on its own" at={K5.sep} out={zoomOut - 6} size={40} />
				<Fade at={K5.resist - 6} out={zoomOut - 6}>
					<g transform={`translate(${bscr(P1)[0] - 120},${bscr(P1)[1] - 120}) rotate(-25)`}>
						<rect x={-34} y={-14} width={68} height={28} rx={14} fill="#fffdf8" stroke={INK} strokeWidth={3} />
						<rect x={-34} y={-14} width={34} height={28} rx={14} fill="#e88a6a" stroke={INK} strokeWidth={3} />
					</g>
					<Sx x={bscr(P1)[0] - 60} y={bscr(P1)[1] - 110} text="e.g. antibiotic resistance gene" size={36} color={AMBER_INK} hand at={K5.resist} />
				</Fade>
				{/* conjugation labels */}
				<Sx x={1110} y={640} text="conjugation, as in the single-celled video" size={36} color={INK_SOFT} hand at={K5.conj + 6} />
				<Sx x={1110} y={700} text="a copy of the plasmid passes across" size={36} color={PLUM} hand at={K5.conj + 30} />
				<Sx x={1110} y={760} text="the resistance gene spreads" size={36} color={AMBER_INK} hand at={K5.often} />
				<GreyTag x={960} y={990} text="plasmids are also used as tools in biotechnology, later" anchor="middle" at={K5.often + 20} />
			</Overlay>
		</>
	);
};
void INK;
