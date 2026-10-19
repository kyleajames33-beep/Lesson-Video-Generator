// M6 C02 scenes 1 to 5: one acid with three partners, binary acids, oxoacids, naming bases, shared properties.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {cues} from '../../cues';
import {Heading, sc} from './common';
import {BEAKER, CLEANER, LEMON, LITMUS, MARBLE, MG_ACID, SOAP, TUBE, VINEGAR} from './assets';
import {
	ACID, ACID_INK, AChip, AMBER, AMBER_INK, AN, AN_INK, BASE, BASE_INK, CAT, CAT_INK, Card, CodeThermo, DrawPath, FTile, Fade, GREYT, GREY_INK, INK, INK_SOFT, IonTile, Mistake, Mol, Note,
	Overlay, PROTON, PROTON_INK, PairAt, PlateAt, Proton, ProtonHop, RoleRing, Sx, TEAL, mw, picW, pulseAt, smooth, tileW, vis,
} from './parts';

// ---------- 1. Hook: one acid, three results ----------
const H1 = 'hook';
const K1 = cues(sc(H1), {add: 'Add hydrochloric acid', mg: 'strip of magnesium', marble: 'marble chips', naoh: 'sodium hydroxide solution', warm: 'gets warm', same: 'Same acid', name: 'name every substance', predict: 'predict the products', balance: 'balance the equations'});
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const h = 530, y = 300;
	const xs = [150, 720, 1270];
	const plates = [MG_ACID, MARBLE, BEAKER];
	const cuesAt = [K1.mg, K1.marble, K1.naoh];
	const labels = ['magnesium: fizzes', 'marble: fizzes', 'sodium hydroxide: no fizz, warms'];
	return (
		<>
			<Heading text="One acid, three results. What forms?" at={4} size={58} />
			<Overlay>
				{plates.map((p, i) => {
					const w = picW(p, h);
					const s = pulseAt(f, cuesAt[i], 0.06, 26);
					return (
						<g key={i}>
							<g transform={`translate(${xs[i] + w / 2},${y + h}) scale(${s}) translate(${-(xs[i] + w / 2)},${-(y + h)})`}>
								<PlateAt p={p} x={xs[i]} y={y} h={h} at={K1.add + i * 8} />
							</g>
							<Note x={xs[i] + w / 2} y={y + h + 54} text={labels[i]} size={36} anchor="middle" at={cuesAt[i]} />
							<AChip x={xs[i] + w / 2} y={y + h + 100} text="products?" size={34} color={AMBER_INK} anchor="middle" at={K1.predict + i * 6} />
						</g>
					);
				})}
				<Fade at={K1.naoh}><Sx x={xs[2] + picW(BEAKER, h) / 2} y={y + h * 0.55} text="NaOH(aq) + HCl(aq)" size={30} color={INK} anchor="middle" weight={700} at={-1000} /></Fade>
				<CodeThermo x={xs[2] + picW(BEAKER, h) + 40} y={y + 80} h={360} level={0.3 + 0.4 * smooth(prog(f, K1.warm, 50))} at={K1.naoh} />
				<Note x={150} y={250} text="same acid: hydrochloric acid" size={36} color={INK_SOFT} at={K1.same} />
				<Note x={1100} y={250} text="name it · predict it · balance it" size={36} color={TEAL} at={K1.name} />
				{void K1.balance}
			</Overlay>
		</>
	);
};

// ---------- 2. Binary acids: hydro- ... -ic acid ----------
const H2 = 'binary-acids';
const K2 = cues(sc(H2), {first: 'First, names', groups: 'fall into two groups', binary: 'Binary acids are', named: 'named hydro', nonmetal: 'then the non-metal', ic: 'then ic acid', hcl: 'H C l in water', hcla: 'is hydrochloric acid', hbr: 'H B r is', hf: 'H F is', h2s: 'H two S is', gas: 'As a pure gas', hydchl: 'hydrogen chloride, which', last: 'the last video'});
const ROOT = '#7a746a';
const NameParts: React.FC<{x: number; y: number; root: string; at: number; size?: number; o?: number}> = ({x, y, root, at, size = 50, o = 1}) => {
	const w1 = mw('hydro', size, false, 800), w2 = mw(root, size, false, 800);
	return (
		<g opacity={o}>
			<Sx x={x} y={y} text="hydro" size={size} color={PROTON_INK} weight={800} at={at} />
			<Sx x={x + w1} y={y} text={root} size={size} color={ROOT} weight={800} at={at + 4} />
			<Sx x={x + w1 + w2} y={y} text="ic acid" size={size} color={ACID_INK} weight={800} at={at + 8} />
		</g>
	);
};
export const SceneBinary: React.FC = () => {
	const f = useCurrentFrame();
	const rows: [string, string, number][] = [['HCl', 'chlor', K2.hcl], ['HBr', 'brom', K2.hbr], ['HF', 'fluor', K2.hf], ['H_2S', 'sulfur', K2.h2s]];
	const tmpl = (t: string, c: string, at: number, x: number, w: number) => (
		<Fade at={at}>
			<rect x={x} y={400} width={w} height={74} rx={14} fill="#fffdf8" stroke={c} strokeWidth={4} />
			<Sx x={x + w / 2} y={450} text={t} size={40} color={c} anchor="middle" weight={800} at={-1000} />
		</Fade>
	);
	return (
		<>
			<Heading text="Naming acids: binary acids" at={4} size={58} />
			<Overlay>
				<Fade at={K2.groups}>
					<rect x={96} y={180} width={1728} height={70} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={3} />
					<Sx x={126} y={228} text="Common inorganic acids:" size={34} color={INK} weight={700} at={-1000} />
					<Sx x={560} y={228} text="binary acids" size={36} color={TEAL} weight={800} at={-1000} />
					<Sx x={820} y={228} text="and oxoacids" size={36} color={GREYT} weight={800} at={-1000} />
				</Fade>
				<Note x={96} y={330} text="Binary acid: H + one non-metal, no O." size={46} at={K2.binary} />
				<Note x={96} y={450} text="Name:" size={42} color={INK_SOFT} at={K2.named} />
				{tmpl('hydro', PROTON_INK, K2.named, 220, 200)}
				<Sx x={438} y={452} text="+" size={44} color={INK} weight={800} at={K2.nonmetal} />
				{tmpl('non-metal', ROOT, K2.nonmetal, 480, 260)}
				<Sx x={758} y={452} text="+" size={44} color={INK} weight={800} at={K2.ic} />
				{tmpl('ic acid', ACID_INK, K2.ic, 800, 220)}
				{rows.map(([fm, root, at], i) => {
					const y = 600 + i * 92;
					const lit = i === rows.length - 1 ? 1 : 1 - 0.55 * prog(f, rows[i + 1][2], 12);
					return (
						<g key={fm} opacity={lit}>
							<FTile x={120} y={y} formula={fm} size={50} at={at} />
							<DrawPath d={`M${310},${y - 16} L${400},${y - 16}`} at={at + 6} dur={10} color={INK_SOFT} width={4} />
							<NameParts x={430} y={y} root={root} at={i === 0 ? K2.hcla : at + 10} />
						</g>
					);
				})}
				<Note x={880} y={600} text="(in water)" size={34} color={INK_SOFT} at={K2.hcl} />
				<Fade at={K2.gas}>
					<rect x={1100} y={720} width={724} height={250} rx={20} fill="#fffdf8" stroke={TEAL} strokeWidth={3} />
				</Fade>
				<PlateAt p={TUBE.clear} x={1130} y={740} h={90} at={K2.gas} />
				<Sx x={1130} y={880} text="HCl(g): hydrogen chloride" size={36} color={INK} weight={700} at={K2.hydchl} />
				<Sx x={1130} y={940} text="HCl(aq): hydrochloric acid" size={36} color={TEAL} weight={700} at={K2.hydchl + 10} />
				{void K2.first}{void K2.last}
			</Overlay>
		</>
	);
};

// ---------- 3. Oxoacids: -ate to -ic, -ite to -ous ----------
const H3 = 'oxoacids';
const K3 = cues(sc(H3), {oxo: 'Oxoacids contain oxygen', ion: 'the ion inside', ate: 'ends in ate', ic: 'the acid ends in ic', sulfate: 'sulfate gives', nitrate: 'nitrate gives', phosphate: 'phosphate gives', carbonate: 'carbonate gives', ite: 'ends in ite', ous: 'the acid ends in ous', sulfite: 'sulfite gives', nitrite: 'nitrite gives', never: 'never start with hydro', h2so4: 'So H two S O four', not: 'not hydrosulfuric acid', belongs: 'That name belongs'});
type ORow = {ion: string; ionName: string; acid: string; acidName: string; n: number; at: number};
export const SceneOxo: React.FC = () => {
	const f = useCurrentFrame();
	const L: ORow[] = [
		{ion: 'SO_4^{2-}', ionName: 'sulfate', acid: 'H_2SO_4', acidName: 'sulfuric acid', n: 2, at: K3.sulfate},
		{ion: 'NO_3^{-}', ionName: 'nitrate', acid: 'HNO_3', acidName: 'nitric acid', n: 1, at: K3.nitrate},
		{ion: 'PO_4^{3-}', ionName: 'phosphate', acid: 'H_3PO_4', acidName: 'phosphoric acid', n: 3, at: K3.phosphate},
		{ion: 'CO_3^{2-}', ionName: 'carbonate', acid: 'H_2CO_3', acidName: 'carbonic acid', n: 2, at: K3.carbonate},
	];
	const R: ORow[] = [
		{ion: 'SO_3^{2-}', ionName: 'sulfite', acid: 'H_2SO_3', acidName: 'sulfurous acid', n: 2, at: K3.sulfite},
		{ion: 'NO_2^{-}', ionName: 'nitrite', acid: 'HNO_2', acidName: 'nitrous acid', n: 1, at: K3.nitrite},
	];
	const all = [...L, ...R];
	const lit = (r: ORow) => { const i = all.indexOf(r); const nx = all[i + 1]; return nx ? 1 - 0.6 * prog(f, nx.at, 12) * (1 - prog(f, K3.never, 14)) : 1; };
	const row = (r: ORow, x: number, y: number) => {
		const ax = x + 380;
		return (
			<g key={r.acid} opacity={lit(r)}>
				<IonTile x={x} y={y} t={r.ion} kind="-" size={34} at={r.at} anchor="start" />
				<Sx x={x + 10} y={y + 42} text={r.ionName} size={28} color={AN_INK} hand at={r.at} />
				<DrawPath d={`M${x + 170},${y - 12} L${x + 240},${y - 12}`} at={r.at + 6} dur={10} color={INK_SOFT} width={4} />
				{Array.from({length: r.n}, (_, k) => {
					const t = smooth(prog(f, r.at + 8 + k * 5, 18));
					return t > 0.01 && t < 0.99 ? <Proton key={k} x={x + 250 + t * 150} y={y - 50 - Math.sin(t * Math.PI) * 30} s={0.75} /> : null;
				})}
				<Sx x={ax + 10} y={y} text={r.acid} size={40} color={INK} weight={800} at={r.at + 22} />
				<Sx x={ax + 10} y={y + 42} text={r.acidName} size={32} color={ACID_INK} hand at={r.at + 26} />
			</g>
		);
	};
	const hydroOff = prog(f, K3.never + 6, 14);
	return (
		<>
			<Heading text="Naming acids: oxoacids" at={4} size={58} />
			<Overlay>
				<Note x={96} y={230} text="Oxoacid: contains O. Name it from the ion." size={46} at={K3.oxo} />
				<Note x={96} y={290} text="acid = ion + enough H^{+} to cancel its charge" size={34} color={PROTON_INK} at={K3.ion} />
				<Card x={96} y={330} w={840} h={500} at={K3.ate - 6} stroke={ACID} />
				<Note x={126} y={390} text="ion -ate  →  acid -ic" size={44} color={ACID_INK} at={K3.ate} />
				{L.map((r, i) => row(r, 126, 480 + i * 92))}
				<Card x={984} y={330} w={840} h={320} at={K3.ite - 6} stroke={AN} />
				<Note x={1014} y={390} text="ion -ite  →  acid -ous" size={44} color={AN_INK} at={K3.ite} />
				{R.map((r, i) => row(r, 1014, 480 + i * 92))}
				{/* never hydro */}
				<Fade at={K3.never}>
					<rect x={984} y={680} width={360} height={80} rx={16} fill="#fffdf8" stroke={TEAL} strokeWidth={3} />
					<Sx x={1010} y={734} text="oxoacid: hydro-" size={36} color={INK} weight={700} at={-1000} opacity={1 - 0.5 * hydroOff} />
					<DrawPath d="M1150,722 L1290,716" at={K3.never + 6} dur={10} color={TEAL} width={8} />
				</Fade>
				<Note x={1370} y={734} text="never" size={44} color={TEAL} at={K3.never + 8} />
				<Mistake x={96} y={880} text="H_2SO_4: hydrosulfuric acid" at={K3.not} note="has O: sulfuric acid" size={34} />
				<Fade at={K3.belongs}>
					<rect x={984} y={870} width={600} height={80} rx={16} fill="#e5f2ec" stroke={TEAL} strokeWidth={3} />
					<Sx x={1010} y={924} text="H_2S: hydrosulfuric acid" size={38} color={TEAL} weight={800} at={-1000} />
				</Fade>
				{void K3.ic}{void K3.ous}{void K3.h2so4}
			</Overlay>
		</>
	);
};

// ---------- 4. Naming bases ----------
const H4 = 'naming-bases';
const K4 = cues(sc(H4), {named: 'named like any ionic', metal: 'metal first', naoh: 'Sodium hydroxide', caoh: 'calcium hydroxide', mgoh: 'magnesium hydroxide', nooh: 'bases with no hydroxide', ammonia: 'Ammonia, N H three', accepts: 'accepts protons', write: 'Write it as ammonia', not: 'not ammonium hydroxide', carbs: 'metal carbonates', hcarbs: 'hydrogen carbonates', caco3: 'like calcium carbonate', nahco3: 'sodium hydrogen carbonate', too: 'react as bases too'});
export const SceneBases: React.FC = () => {
	const rows: [string, string, string, number, number][] = [['NaOH', 'sodium hydroxide', 'Na^{+}', 1, K4.naoh], ['Ca(OH)_2', 'calcium hydroxide', 'Ca^{2+}', 2, K4.caoh], ['Mg(OH)_2', 'magnesium hydroxide', 'Mg^{2+}', 2, K4.mgoh]];
	return (
		<>
			<Heading text="Naming bases" at={4} size={58} />
			<Overlay>
				<Card x={96} y={190} w={820} h={640} at={K4.named - 4} />
				<Note x={126} y={250} text="Hydroxides: metal + hydroxide" size={44} color={INK} at={K4.named} />
				<Note x={126} y={300} text="metal first, then the negative ion" size={32} color={INK_SOFT} at={K4.metal} />
				{rows.map(([fm, nm, cat, n, at], i) => {
					const y = 420 + i * 140;
					return (
						<g key={fm}>
							<FTile x={126} y={y} formula={fm} size={46} at={at} />
							<Note x={130} y={y + 58} text={nm} size={32} color={INK_SOFT} at={at + 4} />
							<IonTile x={480} y={y} t={cat} kind="+" size={32} at={at + 8} anchor="start" />
							{Array.from({length: n}, (_, k) => <IonTile key={k} x={620 + k * 120} y={y} t="OH^{-}" kind="-" size={32} at={at + 12 + k * 4} anchor="start" />)}
						</g>
					);
				})}
				{/* ammonia */}
				<Card x={960} y={190} w={864} h={400} at={K4.nooh} />
				<Note x={990} y={250} text="bases with no hydroxide" size={40} color={INK} at={K4.nooh} />
				<Fade at={K4.ammonia - 4}><Mol x={1110} y={420} m="NH3" s={1.4} /></Fade>
				<RoleRing x={1110} y={410} r={100} role="base" at={K4.accepts} tag="proton acceptor" size={30} />
				<Sx x={1250} y={410} text="NH_3(aq): ammonia" size={42} color={INK} weight={800} at={K4.ammonia} />
				<Mistake x={1250} y={460} text="NH_4OH, ammonium hydroxide" at={K4.not} note="write NH_3(aq)" size={30} />
				{/* carbonates */}
				<Card x={960} y={630} w={864} h={300} at={K4.carbs - 4} />
				<Note x={990} y={690} text="metal carbonates and hydrogen carbonates" size={36} color={INK} at={K4.carbs} />
				<FTile x={990} y={790} formula="CaCO_3" size={46} at={K4.caco3} />
				<Note x={994} y={850} text="calcium carbonate" size={30} color={INK_SOFT} at={K4.caco3} />
				<FTile x={1330} y={790} formula="NaHCO_3" size={46} at={K4.nahco3} />
				<Note x={1334} y={850} text="sodium hydrogen carbonate" size={30} color={INK_SOFT} at={K4.nahco3} />
				<Note x={990} y={905} text="both accept H^{+}: bases" size={34} color={BASE_INK} at={K4.too} />
				{void K4.write}{void K4.hcarbs}{void BASE}{void CAT}{void CAT_INK}
			</Overlay>
		</>
	);
};

// ---------- 5. Shared properties ----------
const H5 = 'properties';
const K5 = cues(sc(H5), {share: 'each share properties', give: 'acids give away protons', take: 'bases take them', sour: 'Acids taste sour', lemon: 'like lemon juice', red: 'blue litmus red', metals: 'reactive metals', carbs: 'with carbonates', bitter: 'Bases taste bitter', slippery: 'feel slippery', soap: 'like soap', blue: 'red litmus blue', neut: 'neutralise each other', never: 'Never test taste', strongly: 'How strongly', own: 'its own video'});
export const SceneProps: React.FC = () => {
	const f = useCurrentFrame();
	const slide = smooth(prog(f, K5.neut, 30)) * (1 - smooth(prog(f, K5.never, 30)));
	const AX = 96 + slide * 50, BX = 1000 - slide * 50;
	const hop = K5.take - 4;
	return (
		<>
			<Heading text="What acids and bases share" at={4} size={58} />
			<Overlay>
				<Note x={96} y={240} text="acids give away protons; bases take them" size={42} color={PROTON_INK} at={K5.share} />
				<ProtonHop a={[1330, 200]} b={[1600, 200]} at={hop} />
				<Fade at={K5.give}><rect x={1270} y={160} width={120} height={80} rx={16} fill="#fff8ea" stroke={ACID} strokeWidth={4} /><Sx x={1250} y={212} text="acid" size={30} color={ACID_INK} anchor="end" hand at={-1000} /></Fade>
				<Fade at={K5.give}><rect x={1540} y={160} width={120} height={80} rx={16} fill="#f4eefb" stroke={BASE} strokeWidth={4} /><Sx x={1680} y={212} text="base" size={30} color={BASE_INK} hand at={-1000} /></Fade>
				{f < hop ? <Proton x={1330} y={200} o={prog(f, K5.give, 10)} /> : f >= hop + 26 ? <Proton x={1600} y={200} /> : null}
				{/* acids */}
				<g transform={`translate(${AX - 96},0)`}>
					<Card x={96} y={300} w={824} h={620} at={K5.sour - 6} stroke={ACID} />
					<Note x={126} y={360} text="Acids" size={52} color={ACID_INK} at={K5.sour} />
					<PlateAt p={LEMON} x={126} y={390} h={210} at={K5.lemon} />
					<PlateAt p={VINEGAR} x={410} y={370} h={240} at={K5.lemon + 6} />
					<Note x={540} y={480} text="taste sour" size={38} at={K5.sour + 6} />
					<PairAt a={LITMUS.blue} b={LITMUS.red} x={126} y={630} h={190} at={K5.red - 14} swap={K5.red} dur={30} />
					<Note x={400} y={740} text="blue litmus → red" size={38} color="#b8434f" at={K5.red} />
					<Note x={126} y={866} text="react with reactive metals" size={36} at={K5.metals} />
					<Note x={126} y={906} text="and carbonates" size={36} at={K5.carbs} />
				</g>
				{/* bases */}
				<g transform={`translate(${BX - 1000},0)`}>
					<Card x={1000} y={300} w={824} h={620} at={K5.bitter - 6} stroke={BASE} />
					<Note x={1030} y={360} text="Bases" size={52} color={BASE_INK} at={K5.bitter} />
					<PlateAt p={SOAP} x={1030} y={420} h={160} at={K5.soap} />
					<PlateAt p={CLEANER} x={1330} y={370} h={240} at={K5.soap + 6} />
					<Note x={1490} y={460} text="taste bitter," size={38} at={K5.bitter + 6} />
					<Note x={1490} y={506} text="feel slippery" size={38} at={K5.slippery} />
					<PairAt a={LITMUS.red} b={LITMUS.blue} x={1030} y={630} h={190} at={K5.blue - 14} swap={K5.blue} dur={30} />
					<Note x={1304} y={740} text="red litmus → blue" size={38} color="#2f55b8" at={K5.blue} />
				</g>
				<AChip x={960} y={940} text="acid + base cancel: they neutralise each other" size={36} color={TEAL} anchor="middle" at={K5.neut} out={K5.never} />
				<AChip x={96} y={950} text="never taste or touch lab chemicals" size={34} color="#b5502b" at={K5.never} />
				<AChip x={1100} y={950} text="Later: strong and weak acids" size={34} color={INK_SOFT} at={K5.own} />
				{void K5.strongly}{void AN}{void AMBER}{void AMBER_INK}{void GREY_INK}{void PROTON}{void tileW}{void vis}
			</Overlay>
		</>
	);
};
