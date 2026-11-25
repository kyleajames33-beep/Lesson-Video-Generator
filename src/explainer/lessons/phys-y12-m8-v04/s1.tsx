// Scenes 1 to 6: the hook (last time's two red stars; how can two stars at the same temperature differ a millionfold?),
// power, not looks (the Sun, Proxima Centauri and Rigel with luminosity bars and live glow rings), the axes (log
// luminosity, temperature increasing to the left, the class letters and a colour band), the main sequence (an
// illustrative sample plotting one by one; the band; mass increasing up and to the left), size from area (two painted
// Suns with square-metre tiles) and the giants (regions, a dimmer tile, Betelgeuse over the inner planets' orbits).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Countdown, Mark, prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading} from '../../math/studio';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {Disc, LPlate, SUN} from '../../physics/light/plates';
import {STAR_BLUE, STAR_RED, STAR_WHITE} from '../../physics/light/stars';
import {hrX, hrY, msLum, radiusOf} from '../../physics/atom/stellar';
import type {HRBox} from '../../physics/atom/stellar';
import {BS, HandoffBoard03, M8V03FinalFrame, SS} from '../phys-y12-m8-v03/s3';
import {ALDEB, BETEL, BETEL_AU, HEAD, HEAD_SIZE, L_SUN_W, ORBITS_AU, PROX, RED_HI, RED_LO, RED_RATIO, RED_T, RIGEL, SAME_T_L, SAME_T_R, SUN_D_LY, T_SUN, appB, cap, cue} from './common';
import {AMBER, GREY, HRDiagram, INK, Lbl, NAVY, PURPLE, RED, TEAL, fx, glowR, sci} from './parts';

export const HR: HRBox = {x: 640, y: 300, w: 1100, h: 540, tHot: 40000, tCool: 2500, lLo: -4, lHi: 6};

// ---------- 1. hook ----------
export const S01: React.FC = () => {
	const id = 'hook';
	const f = useCurrentFrame();
	const st = cue(id, 'the same temperature, so the same class and the same peak'), mp = cue(id, 'a million times more power'), pred = cue(id, 'prediction'), bb = cue(id, 'The bright one is bigger'), pg = cue(id, 'put every star on one graph'), stg = cap(id, cue(id, 'and stellar stage'));
	if (f < 1) return <M8V03FinalFrame />;
	const tickAt = Math.max(bb, pred + 92);
	const pulse = f >= st && f < st + 40 ? Math.sin(((f - st) / 40) * Math.PI) : 0;
	return (
		<>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - prog(f, 2, 18)}}><HandoffBoard03 f={0} final heading={false} chip={false} /></div>
			<HandoffBoard03 f={0} final heading={false} chip={false} tags={false} crossed={false} />
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				{pulse > 0 ? <g fill="none" stroke={RED.stroke} strokeWidth={4 + 4 * pulse}><rect x={SS.x - 6} y={SS.y - 6} width={SS.w + 12} height={SS.h + 12} /><rect x={BS.x - 6} y={BS.y - 6} width={BS.w + 12} height={BS.h + 12} /></g> : null}
				{f >= pg && f < pg + 40 ? <rect x={240} y={240} width={1440} height={560} fill="none" stroke={INK} strokeWidth={4 + 4 * Math.sin(((f - pg) / 40) * Math.PI)} /> : null}
				<Countdown start={pred} end={pred + 90} x={560} y={260} r={40} />
				{f >= tickAt ? <Mark x={900} y={196} at={tickAt} kind="tick" color={INK} size={32} /> : null}
			</FrameSvg>
			<HandTag x={SS.x + SS.w + 20} y={SS.y + 22} text="same T" at={st + 10} size={34} color={RED.ink} />
			<HandTag x={600} y={650} text="× 10⁶ power" at={mp + 10} size={34} color={NAVY.ink} marks={[{kind: 'brace', x: 880, y1: 400, y2: 730, facing: 'right'}]} />
			<Chip x={640} y={172} at={pred} size={28} color={INK}>{"it's bigger"}</Chip>
			<Chip x={640} y={230} at={pred + 4} size={28} color={INK}>{"it's closer"}</Chip>
			<Chip x={640} y={288} at={pred + 8} size={28} color={INK}>{"it's younger"}</Chip>
			<Lbl x={860} y={252} at={tickAt + 10} color={GREY.ink} size={26}>see next</Lbl>
			<Lbl x={1080} y={178} at={bb + 20} color={TEAL.ink} size={30}>far more glowing surface</Lbl>
			<Chip x={96} y={870} at={-30} out={stg} size={30} w={1728} color={INK} border={INK}>Next: how does the HR diagram distinguish brightness, temperature and stellar stage?</Chip>
		</>
	);
};

// ---------- 2. power, not looks ----------
const SKY = {x: 96, y: 170, w: 1728, h: 250};
const COLS = [{x: 330, name: 'Sun', L: 1, d: SUN_D_LY, spec: SUN, plate: 120}, {x: 960, name: 'Proxima Centauri', L: PROX.L, d: PROX.d, spec: STAR_RED, plate: 40}, {x: 1590, name: 'Rigel', L: RIGEL.L, d: RIGEL.d, spec: STAR_BLUE, plate: 70}] as const;
const BAR = {base: 820, k: 45};
const barH = (L: number) => 40 + BAR.k * (Math.log10(L) + 3);
export const S02: React.FC = () => {
	const id = 'luminosity-brightness';
	const f = useCurrentFrame();
	const tp = cue(id, 'total power a star gives out'), sl = cue(id, 'one solar luminosity'), di = cue(id, 'distance'), cl = cue(id, "only because it's close"), te = cue(id, 'telescope'), se = cue(id, 'stars we see'), br = cap(id, cue(id, 'not apparent brightness'));
	const show = [tp, te, se];
	const demo = f >= di && f < di + 60 ? Math.sin(((f - di) / 60) * Math.PI) : 0;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<rect x={SKY.x} y={SKY.y} width={SKY.w} height={SKY.h} rx={16} fill="#1d2233" />
				{COLS.map((c, i) => {
					const o = prog(f, show[i], 14);
					if (o <= 0.001) return null;
					const r = glowR(appB(c.L, c.d)) * (i === 0 ? 1 - 0.7 * demo : 1);
					return <g key={c.name} opacity={o}>
						<circle cx={c.x} cy={SKY.y + SKY.h / 2} r={Math.min(118, r)} fill="#fff6d6" opacity={0.28} stroke="#d8d2c4" strokeWidth={2} />
						<Disc spec={c.spec} cx={c.x} cy={SKY.y + SKY.h / 2} d={c.plate} />
						<rect x={c.x - 45} y={BAR.base - barH(c.L)} width={90} height={barH(c.L)} rx={6} fill={NAVY.soft} stroke={NAVY.stroke} strokeWidth={3.5} />
					</g>;
				})}
				<line x1={96} y1={BAR.base} x2={1824} y2={BAR.base} stroke={INK} strokeWidth={3} opacity={prog(f, tp, 12)} />
			</FrameSvg>
			<Lbl x={SKY.x + 16} y={SKY.y + 30} at={di} color="#d8d2c4" size={26}>as seen from Earth (glow size: log scale)</Lbl>
			{COLS.map((c, i) => <Lbl key={c.name} x={c.x} y={BAR.base + 36} at={show[i]} color={INK} size={28} anchor="middle">{c.name}</Lbl>)}
			<Lbl x={400} y={635} at={tp + 10} color={NAVY.ink} size={28}>luminosity L (log scale)</Lbl>
			<Chip x={96} y={440} at={sl} size={28} color={INK}>{`L☉ = ${sci(L_SUN_W, 1)} W`}</Chip>
			<Chip x={96} y={500} at={di} size={28} w={560} color={INK}>apparent brightness ∝ L/d² (inverse square law, Year 11)</Chip>
			<HandTag x={400} y={700} text="close, not powerful" at={cl} size={30} color={GREY.ink} />
			<Lbl x={COLS[1].x} y={740} at={te} color={INK} size={28} anchor="middle">{`Proxima Centauri: ${fx(PROX.d, 1)} ly, L ≈ ${fx(PROX.L, 3)} L☉`}</Lbl>
			<Lbl x={COLS[2].x - 70} y={BAR.base - barH(RIGEL.L) + 20} at={se} color={INK} size={28} anchor="end">{`Rigel: about ${RIGEL.d} ly, L ≈ 10⁵ L☉`}</Lbl>
			<HandTag x={COLS[2].x - 380} y={BAR.base - barH(RIGEL.L) + 80} text="far, but huge power" at={se + 20} size={30} color={NAVY.ink} marks={[{kind: 'circle', cx: COLS[2].x, cy: BAR.base - barH(RIGEL.L) / 2, rx: 64, ry: barH(RIGEL.L) / 2 + 16}]} />
			<Chip x={96} y={880} at={br} size={28} color={NAVY.ink}>HR diagram: luminosity (true power)</Chip>
			<CrossedChip x={700} y={880} at={br + 8} crossAt={br + 20} size={28} caption="distance matters">brighter in the sky = more luminous</CrossedChip>
		</>
	);
};

// ---------- 3. the axes ----------
const LEFT3 = [{spec: STAR_BLUE, T: 40000 ** 0.5 * 30000 ** 0.5}, {spec: STAR_WHITE, T: 8660}, {spec: STAR_RED, T: 2950}] as const;
export const S03: React.FC = () => {
	const id = 'axes';
	const f = useCurrentFrame();
	const ls = cue(id, 'luminosity up the side'), sb = cue(id, 'surface temperature along the bottom'), pt = cue(id, 'powers of ten'), le = cue(id, 'left'), om = cue(id, 'O on the left to M on the right'), rd = cap(id, cue(id, 'redder'));
	const k = f >= pt ? Math.min(5, Math.floor((f - pt) / 8)) : -1;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<HRDiagram b={HR} f={f} L={{axes: 1}} ticksT={f >= le ? [40000, 20000, 10000, 5000, 2500] : []} ticksL={f >= ls ? [-4, -2, 0, 2, 4, 6] : []} letters={prog(f, om, 14)} colourBand={prog(f, rd, 14)} xTitle={f >= sb ? 'surface temperature (K)' : ''} yTitle={f >= ls ? 'luminosity (L☉)' : ''} />
				{k >= 0 && f < pt + 60 ? <circle cx={HR.x - 50} cy={hrY(HR, 10 ** (-4 + 2 * k))} r={26} fill="none" stroke={NAVY.stroke} strokeWidth={4} /> : null}
				{f >= le ? <g opacity={prog(f, le, 12)}><line x1={HR.x + HR.w - 40} y1={HR.y + HR.h + 96} x2={HR.x + 40} y2={HR.y + HR.h + 96} stroke={RED.stroke} strokeWidth={5} /><path d={`M${HR.x + 26},${HR.y + HR.h + 96} l22,-12 v24 z`} fill={RED.stroke} /></g> : null}
				{LEFT3.map((s, i) => <LPlate key={i} spec={s.spec} p={{x: hrX(HR, s.T) - 40, y: 168, w: 80}} opacity={prog(f, om + 8 * i, 12)} />)}
			</FrameSvg>
			<Lbl x={96} y={330} at={2} color={INK} size={30}>named after Ejnar Hertzsprung</Lbl>
			<Lbl x={96} y={372} at={2} color={INK} size={30}>and Henry Norris Russell</Lbl>
			<HandTag x={96} y={470} text="× 100 each step" at={pt + 10} size={34} color={NAVY.ink} />
			<Lbl x={96} y={530} at={pt} color={INK} size={28}>stars: 10⁻⁴ to 10⁶ times the Sun</Lbl>
			<Lbl x={HR.x + 60} y={HR.y + HR.h + 130} at={le} color={RED.ink} size={28}>hotter ←</Lbl>
			<HandTag x={96} y={640} text="hot on the LEFT" at={le + 20} size={38} color={RED.ink} />
			<Lbl x={96} y={720} at={rd} color={INK} size={28}>left: hotter and bluer</Lbl>
			<Lbl x={96} y={760} at={rd + 6} color={INK} size={28}>right: cooler and redder</Lbl>
		</>
	);
};

// ---------- 4. the main sequence ----------
export const S04: React.FC = () => {
	const id = 'main-sequence';
	const f = useCurrentFrame();
	const ps = cue(id, 'plot the stars around us'), ds = cue(id, "don't scatter at random"), sq = cue(id, 'sequence'), fh = cue(id, 'fusing hydrogen into helium in their cores'), ma = cue(id, 'set by its mass'), dm = cue(id, 'red and dim'), lu = cap(id, cue(id, 'one solar luminosity'));
	const sunX = hrX(HR, T_SUN), sunY = hrY(HR, 1);
	const sm = prog(f, lu, 30);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<HRDiagram b={HR} f={f} L={{axes: 1, band: prog(f, sq, 20), ms: 1, msAt: ps, msEach: Math.max(2, (ds - ps) / 30)}} />
				{f >= ma ? <g opacity={prog(f, ma, 14)}><line x1={hrX(HR, 4000)} y1={hrY(HR, msLum(4000)) - 50} x2={hrX(HR, 25000)} y2={hrY(HR, msLum(25000)) - 50} stroke={PURPLE.stroke} strokeWidth={6} /><path d={`M${hrX(HR, 25000)},${hrY(HR, msLum(25000)) - 50} l8,24 l18,-18 z`} fill={PURPLE.stroke} /></g> : null}
				{f >= dm ? <circle cx={hrX(HR, PROX.T)} cy={hrY(HR, PROX.L)} r={14} fill="none" stroke={INK} strokeWidth={4} opacity={prog(f, dm + 10, 12)} /> : null}
				{f >= lu - 10 ? <Disc spec={SUN} cx={sunX - 320 * (1 - sm)} cy={sunY - 260 * (1 - sm)} d={200 - 170 * sm} opacity={prog(f, lu - 10, 10)} /> : null}
			</FrameSvg>
			<Lbl x={HR.x + 20} y={HR.y + 30} at={ps} color={GREY.ink} size={26}>illustrative sample of nearby stars</Lbl>
			<CrossedChip x={96} y={330} at={ds} crossAt={ds + 20} size={30} caption="one band">random?</CrossedChip>
			<Lbl x={hrX(HR, 4500)} y={hrY(HR, 0.6) + 40} at={sq} color={AMBER.ink} size={30}>main sequence (~90%)</Lbl>
			<Lbl x={96} y={470} at={fh} color={INK} size={28}>main sequence: core hydrogen fusion</Lbl>
			<Lbl x={hrX(HR, 12000)} y={hrY(HR, msLum(12000)) - 110} at={ma} color={PURPLE.ink} size={28}>mass increases ↖</Lbl>
			<HandTag x={96} y={560} text="heavier: hotter, brighter" at={ma + 16} size={32} color={PURPLE.ink} />
			<Lbl x={HR.x + 20} y={HR.y + 70} at={dm} color={INK} size={26}>massive: hot, blue, luminous</Lbl>
			<Lbl x={HR.x + HR.w - 20} y={HR.y + HR.h - 20} at={dm + 6} color={INK} size={26} anchor="end">low mass: cool, red, dim</Lbl>
			<Lbl x={hrX(HR, PROX.T) - 20} y={hrY(HR, PROX.L) - 30} at={dm + 10} color={INK} size={26} anchor="end">Proxima: 3000 K, 0.002 L☉</Lbl>
			<Lbl x={sunX + 40} y={sunY + 50} at={lu + 20} color={INK} size={28}>Sun: 5800 K, 1 L☉ (G2)</Lbl>
			<HandTag x={0} y={0} at={lu + 24} color={INK} marks={[{kind: 'circle', cx: sunX, cy: sunY, rx: 30, ry: 28}]} />
		</>
	);
};

// ---------- 5. size from area ----------
const INSET: HRBox = {x: 1480, y: 200, w: 340, h: 220, tHot: 40000, tCool: 2500, lLo: -4, lHi: 6};
const TILE = 22;
export const S05: React.FC = () => {
	const id = 'area-rule';
	const f = useCurrentFrame();
	const ld = cue(id, 'depends on its temperature and on its surface area'), sq = cue(id, 'every square metre of surface gives out the same power'), mm = cue(id, 'more luminosity means more surface'), ar = cue(id, 'Area goes as radius squared'), ra = cue(id, 'ten times the radius'), tr = cap(id, cue(id, 'classic trap'));
	const g = prog(f, ra, 40);
	const dS = 160 - 108 * g, dL = 240 + 280 * g;
	const fill = prog(f, mm, 40);
	const L = {cx: 1000, cy: 590}, S = {cx: 330, cy: 590};
	const tiles: React.ReactNode[] = [];
	if (fill > 0.001) for (let i = -12; i <= 12; i++) for (let j = -12; j <= 12; j++) { const x = L.cx + i * TILE * 1.15, y = L.cy + j * TILE * 1.15; if (Math.hypot(x - L.cx, y - L.cy) < dL / 2 - 14 && (Math.abs(i) + Math.abs(j)) / 24 <= fill * 1.2) tiles.push(<rect key={`${i}_${j}`} x={x - TILE / 2} y={y - TILE / 2} width={TILE} height={TILE} fill="none" stroke={TEAL.stroke} strokeWidth={2.5} />); }
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<HRDiagram b={INSET} f={f} L={{axes: 1, band: 1}} size={20} ticksT={[]} ticksL={[]} letters={0} colourBand={0} xTitle="T" yTitle="L" />
				<Disc spec={SUN} cx={S.cx} cy={S.cy} d={dS} />
				<Disc spec={SUN} cx={L.cx} cy={L.cy} d={dL} />
				<rect x={S.cx - TILE / 2} y={S.cy - TILE / 2} width={TILE} height={TILE} fill="none" stroke={TEAL.stroke} strokeWidth={4} opacity={prog(f, sq, 12)} />
				<rect x={L.cx - TILE / 2} y={L.cy - TILE / 2} width={TILE} height={TILE} fill="none" stroke={TEAL.stroke} strokeWidth={4} opacity={prog(f, sq, 12)} />
				{tiles}
				{f >= tr ? <circle cx={hrX(INSET, T_SUN)} cy={hrY(INSET, SAME_T_L)} r={8} fill={AMBER.stroke} stroke={INK} strokeWidth={2} opacity={prog(f, tr, 12)} /> : null}
			</FrameSvg>
			<Lbl x={INSET.x} y={INSET.y - 14} at={0} color={INK} size={26}>HR diagram</Lbl>
			<Chip x={96} y={176} at={ld} size={28} color={INK}>L depends on T and on surface area</Chip>
			<Lbl x={96} y={290} at={sq} color={TEAL.ink} size={30}>1 m² tile: same power per m² (same T)</Lbl>
			<Lbl x={S.cx} y={S.cy + 140} at={0} color={INK} size={28} anchor="middle">the Sun</Lbl>
			<Lbl x={L.cx} y={L.cy - dL / 2 - 30} at={0} color={INK} size={28} anchor="middle">same T, more luminous</Lbl>
			<Chip x={1260} y={460} at={ar} size={30} color={INK}>area = 4πR² ∝ R²</Chip>
			<div style={{position: 'absolute', left: 96, top: 868}}><Row at={ra - 6} size={44}><AnswerBox at={ra}>{`L ratio = ${SAME_T_L} → area ratio = ${SAME_T_L} → R ratio = √${SAME_T_L} = ${fx(SAME_T_R)}`}</AnswerBox></Row></div>
			<HandTag x={1260} y={560} text="area ∝ R²" at={ra + 20} size={34} color={TEAL.ink} />
			<Lbl x={1260} y={610} at={ra + 30} color={GREY.ink} size={26}>sizes: a schematic cue</Lbl>
			<CrossedChip x={1260} y={660} at={tr} crossAt={tr + 14} size={28} caption="R ∝ √L at the same T">R ratio = 100</CrossedChip>
			<HandTag x={1260} y={800} text="square root!" at={tr + 20} size={34} color={GREY.ink} />
			<Lbl x={hrX(INSET, T_SUN) + 14} y={hrY(INSET, SAME_T_L) - 10} at={tr + 6} color={TEAL.ink} size={26}>{`≈ ${fx(radiusOf(T_SUN, SAME_T_L))} R☉`}</Lbl>
		</>
	);
};

// ---------- 6. huge and cool: the giants ----------
export const HL: HRBox = {x: 220, y: 300, w: 700, h: 520, tHot: 40000, tCool: 2500, lLo: -4, lHi: 6};
const ORB = {cx: 1420, cy: 590, k: 80};
export const S06: React.FC = () => {
	const id = 'giants';
	const f = useCurrentFrame();
	const tr = cue(id, 'the top right'), lp = cue(id, 'much less power per square metre'), ma = cue(id, 'Mars'), rs = cue(id, 'our two red stars'), ra = cap(id, cue(id, 'radius'));
	const tilesO = prog(f, lp, 14) * (1 - prog(f, ma - 6, 10));
	const orbO = prog(f, ma, 14);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<HRDiagram b={HL} f={f} L={{axes: 1, band: 1, ms: 1, regions: prog(f, tr, 14), giants: prog(f, tr + 10, 14), labels: prog(f, tr, 14), hiPt: f >= rs ? [[RED_T, RED_LO], [RED_T, RED_HI]] : []}} size={26} ticksT={[40000, 10000, 2500]} ticksL={[-4, 0, 4]} />
				<LPlate spec={STAR_RED} p={{x: 1600, y: 168, w: 200}} />
				{tilesO > 0.001 ? <g opacity={tilesO}>
					<Disc spec={SUN} cx={1150} cy={560} d={200} /><rect x={1139} y={549} width={22} height={22} fill="#fff6d6" stroke={TEAL.stroke} strokeWidth={4} />
					<Disc spec={STAR_RED} cx={1500} cy={560} d={200} /><rect x={1489} y={549} width={22} height={22} fill="none" stroke={TEAL.stroke} strokeWidth={4} opacity={0.6} />
				</g> : null}
				{orbO > 0.001 ? <g opacity={orbO}>
					{Object.entries(ORBITS_AU).map(([n, a]) => <circle key={n} cx={ORB.cx} cy={ORB.cy} r={a * ORB.k} fill="none" stroke={n === 'Mars' ? INK : GREY.stroke} strokeWidth={n === 'Mars' ? 3.5 : 2.5} />)}
					<circle cx={ORB.cx} cy={ORB.cy} r={8} fill="#f2b632" />
					<circle cx={ORB.cx} cy={ORB.cy} r={BETEL_AU * ORB.k * prog(f, ma + 10, 30)} fill="#e9774a" fillOpacity={0.18} stroke="#c8443a" strokeWidth={4} />
				</g> : null}
			</FrameSvg>
			<Lbl x={hrX(HL, ALDEB.T) - 16} y={hrY(HL, ALDEB.L) + 30} at={tr + 20} color={INK} size={26} anchor="end">Aldebaran</Lbl>
			<Lbl x={hrX(HL, BETEL.T) - 14} y={hrY(HL, BETEL.L) - 18} at={tr + 24} color={INK} size={26} anchor="end">Betelgeuse</Lbl>
			<HandTag x={1040} y={720} text="cool: less power per m²" at={lp + 10} out={ma - 6} size={32} color={RED.ink} />
			<HandTag x={96} y={900} text="cool, so needs huge area" at={lp + 30} out={ra} size={32} color={RED.ink} />
			<Lbl x={1040} y={210} at={ma} color={INK} size={26}>orbits: Mercury, Venus, Earth, Mars</Lbl>
			<Lbl x={1040} y={250} at={ma + 20} color={RED.ink} size={26}>{`Betelgeuse: about ${Math.round(BETEL.R / 10) * 10} R☉ (estimates vary)`}</Lbl>
			<HandTag x={0} y={0} at={ma + 40} color={INK} marks={[{kind: 'circle', cx: ORB.cx + ORBITS_AU.Mars * ORB.k, cy: ORB.cy, rx: 26, ry: 26}]} />
			<Lbl x={ORB.cx + ORBITS_AU.Mars * ORB.k + 30} y={ORB.cy + 8} at={ma + 40} color={INK} size={26}>Mars</Lbl>
			<Lbl x={hrX(HL, RED_T) - 16} y={hrY(HL, RED_LO) + 6} at={rs} color={INK} size={26} anchor="end">0.01 L☉</Lbl>
			<Lbl x={hrX(HL, RED_T) + 18} y={hrY(HL, RED_HI) + 30} at={rs} color={INK} size={26}>10⁴ L☉</Lbl>
			<div style={{position: 'absolute', left: 96, top: 850}}><Row at={ra - 6} size={44}><AnswerBox at={ra}>{`L ratio = 10⁶ → R ratio = √10⁶ = ${fx(RED_RATIO)}`}</AnswerBox></Row></div>
			<HandTag x={1000} y={900} text="× 1000 radius" at={ra + 16} size={34} color={TEAL.ink} />
		</>
	);
};
