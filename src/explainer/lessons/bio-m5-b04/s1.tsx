import React, {useMemo} from 'react';
import {useCurrentFrame} from 'remotion';
import {Callout, HandText, rng} from '../../kit';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, AmoebaArt, Arrow, Cam, Enter, Fade, FONT_DISPLAY, FONT_HAND, GreyTag, Hand, Heading, INK, INK_SOFT, Label, Ladder, LINE, NEUT, nucleusAt,
	Nucleotide, Overlay, prog, pulse, S, Scribble, Tick, TileSpec, TwistHelix, Underline, ORIG, ladderGeom,
} from './shared';
import {Tile} from './dna';

// ---------- 1. Hook: the size of the copying job ----------
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('hook'), {
		cell: 'a cell divides', copy: 'copy all of its DNA', billions: 'billions of letters', packed: 'packed into a nucleus', pin: 'far smaller than a pinhead',
		book: 'Copy a book that long', drift: 'would drift', almost: 'almost perfectly', how: 'How', what: 'what happens', orig: 'the original',
	});
	const PX = 120, PY = 330, PW = 820;
	const [nx, ny] = nucleusAt(PX, PY, PW);
	const threadPts = useMemo(() => {
		const pts: string[] = [];
		const N = 420;
		for (let i = 0; i <= N; i++) {
			const t = i / N, th = t * 16 * 2 * Math.PI;
			pts.push(`${(nx + t * 1260 + 30 * Math.cos(th) - 30).toFixed(1)},${(ny + 30 * Math.sin(th) + 16 * Math.sin(t * 9)).toFixed(1)}`);
		}
		return pts;
	}, [nx, ny]);
	const v = prog(f, c.copy + 12, 110) * (1 - prog(f, c.packed, 28));
	const thread = 'M' + threadPts.slice(0, Math.max(2, Math.round(v * 420) + 1)).join(' L');
	const plateO = 1 - prog(f, c.book - 18, 16);
	const pinP = prog(f, c.pin + 12, 18);
	// book
	const R = 8, C = 16, N = R * C;
	const letters = useMemo(() => {
		const r = rng(5), a = 'ATCG';
		return Array.from({length: N}, () => ({l: a[Math.floor(r() * 4)], w: a[Math.floor(r() * 4)], th: r(), rot: (r() - 0.5) * 2, dy: (r() - 0.5) * 2}));
	}, [N]);
	const bookO = prog(f, c.book - 6, 14) * (1 - prog(f, c.how - 16, 14));
	const d = prog(f, c.drift, 60) * (1 - prog(f, c.almost - 4, 14));
	const panel = (x: number, y: number, copy: boolean) => (
		<g>
			<rect x={x} y={y} width={680} height={430} rx={18} fill="#fffdf8" stroke={INK_SOFT} strokeWidth={4} />
			<rect x={x} y={y} width={26} height={430} rx={12} fill="#d9c9a8" />
			{letters.map((L, k) => {
				const row = Math.floor(k / C), col = k % C;
				const appear = copy ? prog(f, c.book + 12 + (k / N) * 36, 6) : 1;
				const wrong = copy && L.th < 0.28 * d;
				return (
					<text key={k} x={x + 62 + col * 38} y={y + 60 + row * 49 + (copy ? L.dy * 9 * d : 0)} textAnchor="middle" opacity={appear} transform={copy ? `rotate(${L.rot * 14 * d} ${x + 62 + col * 38} ${y + 60 + row * 49})` : undefined}
						style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 36}} fill={wrong ? '#9aa0a6' : INK}>{wrong ? L.w : L.l}</text>
				);
			})}
		</g>
	);
	return (
		<>
			<div style={{position: 'absolute', left: 96, top: 92, display: 'flex', opacity: f >= c.how ? 1 : 0}}><HandText text="How does DNA copy itself so accurately?" at={c.how} size={66} cps={30} /></div>
			<Hand at={c.what} x={96} y={178} size={56}>and what happens to the original?</Hand>
			<div style={{opacity: plateO}}>
				<Cam keys={[[0, 1, 960, 540], [c.packed - 6, 1, 960, 540], [c.packed + 22, 2.6, nx, ny], [c.pin, 2.6, nx, ny], [c.pin + 34, 1, 960, 540]]}>
					<Enter at={c.cell - 18} dy={30} style={{position: 'absolute', inset: 0}}><AmoebaArt x={PX} y={PY} w={PW} /></Enter>
					<Overlay>
						<path d={thread} fill="none" stroke={ORIG} strokeWidth={4.5} strokeLinecap="round" strokeLinejoin="round" opacity={v > 0.004 ? 1 : 0} />
						<Scribble cx={nx} cy={ny} rx={70} ry={66} at={c.packed + 14} color={AMBER_INK} seed={4} />
					</Overlay>
				</Cam>
				<Overlay>
					<Label x={PX + 90} y={PY - 12} at={c.cell} text="a cell" size={56} color={INK_SOFT} out={c.packed - 8} />
					<Label x={1120} y={520} at={c.copy + 20} text="DNA" size={60} color={ORIG} out={c.packed} />
					<Label x={1500} y={760} at={c.billions} text="billions of letters" size={54} color={AMBER_INK} out={c.packed} />
					<Fade at={c.billions + 10} out={c.packed}><Arrow x1={1420} y1={720} x2={1330} y2={640} at={c.billions + 10} color={AMBER_INK} dur={18} /></Fade>
				</Overlay>
			</div>
			{/* pinhead comparison */}
			<Overlay style={{opacity: pinP * plateO}}>
				<defs>
					<radialGradient id="pinG" cx="35%" cy="30%" r="75%"><stop offset="0%" stopColor="#f2f3f4" /><stop offset="55%" stopColor="#b9bec3" /><stop offset="100%" stopColor="#7b8187" /></radialGradient>
				</defs>
				<circle cx={1330} cy={620} r={150 * (0.85 + 0.15 * pinP)} fill="url(#pinG)" stroke="#6a7076" strokeWidth={4} />
				<circle cx={1530} cy={560} r={9} fill="#a98bd1" stroke="#6a4c93" strokeWidth={3} />
				<text x={1560} y={530} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40}} fill="#6a4c93">a cell nucleus</text>
				<text x={1330} y={846} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 54}} fill={INK}>a pinhead</text>
				<text x={1330} y={888} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 500, fontSize: 26}} fill={INK_SOFT}>size comparison with a cell nucleus, not to scale</text>
			</Overlay>
			{/* book copy */}
			<Overlay style={{opacity: bookO}}>
				<Label x={200 + 340} y={280} at={c.book} text="the original" size={52} color={INK} />
				<Label x={1080 + 340} y={280} at={c.book + 10} text="the copy" size={52} color={INK} />
				{panel(200, 310, false)}
				{panel(1040, 310, true)}
				<path d="M900,520 L990,520" stroke={INK_SOFT} strokeWidth={6} strokeLinecap="round" markerEnd="none" />
				<path d="M968,500 L992,520 L968,540" fill="none" stroke={INK_SOFT} strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" />
				{Array.from({length: R}, (_, row) => <Tick key={row} x={1760} y={334 + row * 49} at={c.almost + row * 4} s={0.8} />)}
				<Label x={1400} y={790} at={c.drift} text="the copy drifts" size={50} color={GREY_C} out={c.almost - 4} />
				<Label x={1400} y={790} at={c.almost} text="almost perfectly" size={56} color="#2f8a5b" />
			</Overlay>
			{/* the question: helix */}
			<Overlay style={{opacity: prog(f, c.orig, 14)}}>
				<TwistHelix x={460} y={660} w={1000} amp={110} turns={2.5} tw={1} phase={f * 0.03} p={prog(f, c.orig, 40)} rungs={13} />
			</Overlay>
			<Overlay>
				<Label x={960} y={880} at={c.orig + 24} text="?" size={110} color={AMBER_INK} />
			</Overlay>
		</>
	);
};
const GREY_C = '#8d949b';

// ---------- 2. Nucleotides ----------
const CHAIN = 'ATCGGTAC';
export const SceneNucleotides: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('nucleotides'), {
		chain: 'long chain', nuc: 'called nucleotides', parts: 'three parts', sugar: 'sugar called deoxyribose', phos: 'phosphate group', phos2: 'phosphorus and oxygen atoms',
		base: 'nitrogenous base', carries: 'carries the letter', link: 'sugars and phosphates', backbone: 'in a backbone', hang: 'bases hang off it', four: 'four kinds',
		tA: 'A T', tT: 'T C', tC: 'C and', tG: 'and G', order: 'The order of those letters', info: 'information', stores: 'a cell stores',
	});
	const BIG = {x: 960, y: 470, s: 2.3}, CH = {x: 260, y: 400, s: 1};
	const bs = BIG.s;
	const m = prog(f, c.link, 34);
	const gx = BIG.x + (CH.x - BIG.x) * m, gy = BIG.y + (CH.y - BIG.y) * m, gs = BIG.s + (CH.s - BIG.s) * m;
	const pitch = 190;
	const enter = (k: number) => (k === 1 ? c.link + 6 : k === 2 ? c.link + 24 : c.backbone + (k - 3) * 7);
	const nuc = (k: number) => {
		const e = enter(k);
		const p = prog(f, e, 18);
		const bx = k === 0 ? gx : CH.x + k * pitch;
		return {k, p, x: k === 0 ? gx : bx + (1 - p) * 420, y: k === 0 ? gy : CH.y, s: k === 0 ? gs : 1, o: k === 0 ? 1 : p};
	};
	const hl = (k: number) => pulse(f, c.backbone + 6 + k * 7, 20);
	// ghost chain at the start
	const ghostO = prog(f, c.chain, 20) * (1 - prog(f, c.nuc + 14, 14));
	const keyAt = [c.tA, c.tT, c.tC, c.tG];
	const names = ['adenine', 'thymine', 'cytosine', 'guanine'];
	const sugarP = pulse(f, c.sugar + 10, 36), phosP = pulse(f, c.phos + 10, 36), baseP = pulse(f, c.base + 10, 36);
	const labelsO = 1 - prog(f, c.link - 6, 12);
	return (
		<>
			<Heading items={[[2, 'DNA is a chain of nucleotides']]} size={66} />
			<Overlay>
				{/* ghost chain: DNA is a long chain of small units */}
				<g opacity={ghostO}>
					<line x1={430} y1={280} x2={1490} y2={280} stroke={INK_SOFT} strokeWidth={5} strokeDasharray="2 12" strokeLinecap="round" />
					{Array.from({length: 9}, (_, k) => <circle key={k} cx={430 + k * 132.5} cy={280} r={26} fill="#fffdf8" stroke={INK_SOFT} strokeWidth={5} opacity={prog(f, c.chain + k * 3, 10)} />)}
				</g>
				{/* links between chain nucleotides */}
				{Array.from({length: 7}, (_, k) => {
					const a = nuc(k), b = nuc(k + 1);
					const lp = prog(f, enter(k + 1) + 14, 12);
					if (lp <= 0 || m < 0.5) return null;
					const x1 = a.x + 36, x2 = b.x - 97;
					return <line key={k} x1={x1} y1={a.y} x2={x1 + (x2 - x1) * lp} y2={b.y} stroke={NEUT} strokeWidth={10} strokeLinecap="round" opacity={Math.min(a.o, b.o)} />;
				})}
				{Array.from({length: 8}, (_, k) => {
					const n = nuc(k);
					if (k === 0 && f < c.nuc) return null;
					const nt = prog(f, enter(k) + 6, 12);
					return <Nucleotide key={k} x={n.x} y={n.y} s={n.s} l={CHAIN[k]} o={k === 0 ? prog(f, c.nuc, 12) : n.o} hlS={k === 0 ? sugarP * (1 - m) + hl(k) : hl(k)} hlP={k === 0 ? phosP * (1 - m) + hl(k) : hl(k)} hlB={k === 0 ? baseP * (1 - m) : 0} notches={k === 0 ? prog(f, c.link - 8, 10) * (1 - prog(f, c.link + 30, 12)) : nt * (1 - prog(f, enter(k) + 26, 10))} />;
				})}
				{/* part labels */}
				<g opacity={labelsO}>
					<Callout from={[BIG.x + 12 * bs, BIG.y - 10 * bs]} to={[BIG.x + 300, BIG.y - 200]} at={c.sugar} text="sugar: deoxyribose" color={AMBER_INK} size={52} />
					<Callout from={[BIG.x - 70 * bs - 6, BIG.y - 6]} to={[BIG.x - 340, BIG.y - 200]} at={c.phos} text="phosphate group" color="#8a5a0c" align="right" size={52} />
					<Label x={BIG.x - 340} y={BIG.y - 150} at={c.phos2} text="holds phosphorus and oxygen atoms" size={34} color={INK_SOFT} anchor="end" font="body" weight={600} />
					<Callout from={[BIG.x + 40 * bs, BIG.y + 108 * bs]} to={[BIG.x + 300, BIG.y + 340]} at={c.base} text="nitrogenous base" color={ORIG} size={52} />
					<Label x={BIG.x + 314} y={BIG.y + 395} at={c.carries} text="the part that carries the letter" size={34} color={INK_SOFT} anchor="start" font="body" weight={600} />
				</g>
			</Overlay>
			{/* base key */}
			<Overlay>
				{keyAt.map((at, k) => {
					const x = 220 + k * 190;
					const p = prog(f, at - 4, 10);
					return (
						<g key={k} opacity={p} transform={`translate(0,${(1 - p) * 20})`}>
							<Tile x={x} y={720} face="down" l={'ATCG'[k]} glow={pulse(f, at, 20)} />
							<text x={x} y={846} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40}} fill={LINE['ATCG'[k]]} opacity={prog(f, at + 6, 10) * (1 - prog(f, c.order, 16))}>{names[k]}</text>
						</g>
					);
				})}
				<Underline x1={190} x2={1650} y={640} at={c.order} color={AMBER} />
			</Overlay>
			<Hand at={c.info - 6} x={760} y={690} size={64}>order of letters = information</Hand>
			<Enter at={c.stores} style={{position: 'absolute', left: 760, top: 770}}><span style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 32, color: INK_SOFT}}>the cell stores it along the chain</span></Enter>
		</>
	);
};

// ---------- 3. Two strands and the pairing rule ----------
const PTOP = 'ATGCTA', PBOT = 'TACGAT';
export const ScenePairing: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('pairing'), {
		strands: 'two strands', dh: 'double helix', outside: 'run on the outside', inward: 'point inward', meet: 'inward and meet', random: 'not at random', apT: 'A always pairs with T', cG: 'C always pairs with G',
		fit: 'only those pairs fit', jig: 'like jigsaw pieces', comp: 'complementary base pairing', hyd: 'Weak attractions', two: 'two between A and T', three: 'three between C and G',
		remember: 'To remember the pairs', apple: 'Apple in the Tree', car: 'Car in the Garage', dna: 'in DNA',
	});
	const g = ladderGeom({x: 535, y: 560, pitch: 170, n: 6});
	const amp = (g.yBot - g.yTop) / 2;
	const cyH = (g.yBot + g.yTop) / 2;
	const helixP = prog(f, c.strands, 70);
	const untwist = prog(f, c.inward, 50);
	const rot = prog(f, c.dh - 4, 84);
	const phase = 2 * Math.PI * rot + (Math.PI / 2) * untwist;
	const helixO = 1 - prog(f, c.meet - 6, 12);
	const ladderO = prog(f, c.meet - 6, 12);
	const meetP = prog(f, c.meet, 26);
	const bondP = (i: number) => prog(f, c.hyd + i * 3, 16);
	const warm = (i: number) => PTOP[i] === 'A' || PTOP[i] === 'T';
	const top: (TileSpec | null)[] = PTOP.split('').map((l, i) => ({l, dy: -(1 - meetP) * 70, o: ladderO, glow: prog(f, c.fit, 20) * pulse(f, c.fit + 4, 50) * 0.8}));
	const bot: (TileSpec | null)[] = PBOT.split('').map((l, i) => ({l, dy: (1 - meetP) * 70, o: ladderO, glow: prog(f, c.fit, 20) * pulse(f, c.fit + 4, 50) * 0.8}));
	const bondColor = (i: number) => {
		const hot = warm(i) ? pulse(f, c.two, 70) : pulse(f, c.three, 70);
		return hot > 0.05 ? AMBER_INK : '#6b5a45';
	};
	// demo tiles: A meets C (clash), then A meets T; then C meets G
	const clashT = (f - (c.random + 8)) / 60;
	const gapC = (() => {
		if (f < c.random + 8) return 92;
		if (clashT < 0.4) return 92 - (92 - 27) * Math.min(1, clashT / 0.4);
		if (clashT < 0.75) return 27 + (clashT - 0.4) * 0.0;
		return 27 + (92 - 27) * Math.min(1, (clashT - 0.75) / 0.25);
	})();
	const shake = clashT > 0.4 && clashT < 0.75 ? Math.sin((f - c.random) * 1.8) * 6 : 0;
	const seatT = prog(f, c.apT + 8, 22);
	const showT = f >= c.apT - 6;
	const D1 = {x: 1180, y: 240};
	const D2 = {x: 1500, y: 240};
	const botY = (D: {y: number}, gap: number) => D.y + 72 + gap + 72;
	const swapped = f >= c.apT - 2;
	const gap1 = swapped ? 92 * (1 - seatT) : gapC;
	const seat2 = prog(f, c.cG + 8, 22);
	const demoO = prog(f, c.random - 8, 12) * (1 - prog(f, c.comp - 12, 14));
	const aidO = prog(f, c.remember, 12);
	return (
		<>
			<Heading items={[[c.strands - 20, 'Two strands, one pairing rule']]} size={64} />
			{/* helix credit */}
			<Enter at={c.dh + 20} out={c.inward + 40} style={{position: 'absolute', left: 1080, top: 190, width: 780}}>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 48, color: AMBER_INK, lineHeight: 1}}>Watson and Crick model, 1953</div>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 500, fontSize: 25, color: INK_SOFT, marginTop: 6}}>built using X-ray images by Rosalind Franklin and others</div>
			</Enter>
			<Overlay>
				<TwistHelix x={450} y={cyH} w={1020} amp={amp} turns={2.5} tw={1 - untwist} phase={phase} p={helixP} rungs={12} o={helixO} />
				<Fade at={c.outside + 8} out={c.inward + 10}><Scribble cx={850} cy={cyH - amp - 2} rx={120} ry={30} at={c.outside + 8} color={AMBER_INK} seed={6} /></Fade>
				<g opacity={prog(f, c.outside + 20, 12) * (1 - prog(f, c.inward + 10, 12))}><text x={850} y={cyH - amp - 52} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 46}} fill={AMBER_INK}>backbone, on the outside</text></g>
				<g opacity={prog(f, c.inward + 8, 12) * (1 - prog(f, c.meet - 6, 12))}><text x={960} y={cyH + 8} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 46}} fill={ORIG}>bases point inward</text></g>
			</Overlay>
			{/* ladder */}
			<Overlay>
				<Ladder x={535} y={560} n={6} pitch={170} top={top} bot={bot} bond={bondP} bondColor={bondColor} o={ladderO} />
				{PTOP.split('').map((l, i) => {
					const hot = warm(i) ? pulse(f, c.two, 70) : pulse(f, c.three, 70);
					const p = warm(i) ? prog(f, c.two, 10) : prog(f, c.three, 10);
					return <text key={i} x={g.colX(i) + 62} y={g.midY + 20} textAnchor="middle" opacity={p * ladderO} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 60 + hot * 10}} fill={AMBER_INK}>{warm(i) ? '2' : '3'}</text>;
				})}
			</Overlay>
			<Hand at={c.comp} x={535} y={g.yBot + 64} size={66}>complementary base pairing</Hand>
			<Hand at={c.hyd + 6} x={1480} y={470} size={42} w={400} color={INK_SOFT}>hydrogen bond: a weak attraction</Hand>
			{/* demo: does it fit? */}
			<Overlay style={{opacity: demoO}}>
				<Tile x={D1.x} y={D1.y} face="down" l="A" glow={pulse(f, c.fit + 6, 50)} />
				{!swapped ? <Tile x={D1.x + shake} y={botY(D1, gapC)} face="up" l="C" /> : <Tile x={D1.x} y={botY(D1, gap1)} face="up" l="T" o={showT ? 1 : 0} glow={pulse(f, c.jig, 50)} />}
				<Tick x={D1.x + 90} y={D1.y + 90} at={c.apT + 34} s={1.1} />
				<g opacity={f >= c.cG - 6 ? 1 : 0}>
					<Tile x={D2.x} y={D2.y} face="down" l="C" glow={pulse(f, c.fit + 6, 50)} />
					<Tile x={D2.x} y={botY(D2, 92 * (1 - seat2))} face="up" l="G" o={prog(f, c.cG - 6, 10)} glow={pulse(f, c.jig, 50)} />
					<Tick x={D2.x + 90} y={D2.y + 90} at={c.cG + 36} s={1.1} />
				</g>
			</Overlay>
			<GreyTag at={c.random + 40} out={c.apT - 4} x={D1.x - 90} y={D1.y + 220} text="does not fit" size={40} />
			<Hand at={c.apT + 20} out={c.comp - 12} x={D1.x - 30} y={D1.y - 70} size={46} color={AMBER_INK}>A with T</Hand>
			<Hand at={c.cG + 20} out={c.comp - 12} x={D2.x - 30} y={D2.y - 70} size={46} color={AMBER_INK}>C with G</Hand>
			{/* the memory aid */}
			<div style={{opacity: aidO}}>
				<Overlay>
					<g opacity={prog(f, c.apple, 12)}>
						<text x={520} y={270} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 84}} fill={INK}><tspan fill={LINE.A} fontSize={104}>A</tspan>pple in the <tspan fill={LINE.T} fontSize={104}>T</tspan>ree</text>
						<g transform="translate(1180,238)"><circle r={26} fill="#d4614a" stroke="#8c2f20" strokeWidth={4} /><path d="M2,-26 C4,-40 14,-44 22,-42" stroke="#4a8f45" strokeWidth={6} fill="none" strokeLinecap="round" /></g>
						<g transform="translate(1260,238)"><rect x={-7} y={0} width={14} height={34} fill="#8a6b45" /><circle cx={0} cy={-14} r={34} fill="#6fae5b" stroke="#3f7a35" strokeWidth={4} /></g>
					</g>
					<g opacity={prog(f, c.car, 12)}>
						<text x={520} y={376} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 84}} fill={INK}><tspan fill={LINE.C} fontSize={104}>C</tspan>ar in the <tspan fill={LINE.G} fontSize={104}>G</tspan>arage</text>
						<g transform="translate(1180,360)"><rect x={-46} y={-14} width={92} height={30} rx={10} fill="#9d7ad1" stroke="#5d3f8f" strokeWidth={4} /><path d="M-26,-14 L-14,-34 L20,-34 L32,-14" fill="#cdbbea" stroke="#5d3f8f" strokeWidth={4} strokeLinejoin="round" /><circle cx={-24} cy={18} r={11} fill={INK} /><circle cx={26} cy={18} r={11} fill={INK} /></g>
						<g transform="translate(1290,360)"><path d="M-44,26 L-44,-14 L0,-40 L44,-14 L44,26Z" fill="#cfd5f4" stroke="#4e5bb2" strokeWidth={4} strokeLinejoin="round" /><rect x={-24} y={-4} width={48} height={30} fill="#fffdf8" stroke="#4e5bb2" strokeWidth={3} /></g>
					</g>
				</Overlay>
				<Hand at={c.dna} x={520} y={410} size={60} color={AMBER_INK}>in DNA</Hand>
			</div>
		</>
	);
};
