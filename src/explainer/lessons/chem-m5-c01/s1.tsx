import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, Callout, DrawPath, Enter, FONT_DISPLAY, FONT_HAND, HandText, INK, INK_SOFT, Mark, prog, scribbleEllipse} from '../../kit';
import {cues} from '../../cues';
import {Body, Card, Co2, Counters, ESC, EqChip, Fade, LensCfg, MoleculeLens, Overlay, RET, SvgText, TEAL, slotPos, useLensSlots} from './parts';
import {Bottle, Heading, bottleGeo, sc} from './common';

const smooth = (u: number) => (u <= 0 ? 0 : u >= 1 ? 1 : u * u * (3 - 2 * u));

// ---------- 1. Hook ----------
const K1 = cues(sc('hook'), {fridge: 'fridge', cap: 'cap', tight: 'tight', nothing: 'nothing about it changes', bubbles: 'bubbles', level: 'level', tomorrow: 'tomorrow', same: 'exactly the same', stopped: 'stopped', goingOn: 'going on', unseen: 'that we just'});
const Flake: React.FC<{x: number; y: number; r: number; at: number}> = ({x, y, r, at}) => (
	<g>
		{[0, 60, 120].map(a => {
			const c = Math.cos((a * Math.PI) / 180) * r, s = Math.sin((a * Math.PI) / 180) * r;
			return <DrawPath key={a} d={`M${x + c},${y + s} L${x - c},${y - s}`} at={at + a / 12} dur={14} color="#7fb0d6" width={4} />;
		})}
	</g>
);
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const BX = 1180, BY = 130, S = 0.575;
	const g = bottleGeo(BX - 223 * S, BY, S);
	const push = interpolate(f, [0, 634], [1, 1.07], {extrapolateRight: 'clamp'});
	return (
		<>
			<div style={{position: 'absolute', inset: 0, background: 'radial-gradient(circle at 66% 55%, rgba(160,200,232,0.30), rgba(160,200,232,0) 52%)', opacity: prog(f, 20, 40)}} />
			<div style={{position: 'absolute', inset: 0, transform: `scale(${push})`, transformOrigin: `${BX}px 560px`}}>
				<Bottle x={BX - 223 * S} y={BY} s={S} />
				<Overlay>
					{/* fridge */}
					<Flake x={1560} y={330} r={34} at={K1.fridge} /><Flake x={1700} y={520} r={26} at={K1.fridge + 8} /><Flake x={1520} y={640} r={22} at={K1.fridge + 14} />
					<SvgText x={1440} y={430} text="a week" size={70} color="#3f78a6" at={K1.fridge - 6} />
					<SvgText x={1440} y={500} text="in the fridge" size={70} color="#3f78a6" at={K1.fridge + 6} />
					{/* cap */}
					<DrawPath d={scribbleEllipse(g.cx, g.capY + 6, 62, 58, 7)} at={K1.cap} dur={22} color={AMBER} width={6} />
					<Callout from={[g.cx - 60, g.capY]} to={[870, 205]} at={K1.cap + 6} text="cap" sub="screwed on tight" color={AMBER_INK} align="right" />
					{/* level and bubbles */}
					<DrawPath d={`M${g.left - 40},${g.surfaceY} L${g.right + 60},${g.surfaceY}`} at={K1.level} dur={20} color={AMBER} width={5} dash="14 12" />
					<Callout from={[g.left - 30, g.surfaceY - 4]} to={[880, 395]} at={K1.level + 4} text="level" sub="doesn't move" color={AMBER_INK} align="right" />
					<DrawPath d={scribbleEllipse(g.cx + 20, g.surfaceY + 36, 120, 42, 4)} at={K1.bubbles} dur={22} color={AMBER} width={5} />
					<Callout from={[g.left + 22, g.surfaceY + 60]} to={[880, 590]} at={K1.bubbles + 4} text="bubbles" sub="don't grow" color={AMBER_INK} align="right" />
					{/* the unseen */}
					<DrawPath d={scribbleEllipse(g.cx, g.surfaceY, 168, 52, 11)} at={K1.goingOn + 4} dur={30} color={ESC} width={6} />
				</Overlay>
				<div style={{position: 'absolute', left: g.right + 70, top: g.surfaceY - 200, opacity: prog(f, K1.unseen, 14), transform: `rotate(${6 * Math.sin(f / 14)}deg)`}}>
					<span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 220, color: ESC, lineHeight: 1}}>?</span>
				</div>
			</div>
			<Heading text="Sealed and still" at={6} out={K1.stopped - 70} />
			<div style={{position: 'absolute', left: 96, top: 92, opacity: prog(f, K1.stopped - 56, 6)}}><HandText text="Has everything stopped?" at={K1.stopped - 20} size={84} cps={30} color={TEAL} /></div>
			<div style={{position: 'absolute', left: 96, top: 700}}><HandText text="tomorrow:" at={K1.tomorrow} size={68} color={INK_SOFT} /></div>
			<div style={{position: 'absolute', left: 96, top: 780}}><HandText text="exactly the same" at={K1.same} size={68} color={INK} /></div>
		</>
	);
};

// ---------- 2. Look inside ----------
const K2 = cues(sc('look-inside'), {surface: 'surface', liquid: 'liquid', gas: 'gas', dissolved: 'dissolved carbon dioxide', gasTop: 'carbon dioxide gas', moving: 'always moving', breakFree: 'break free', escape: 'escape', retStart: 'some gas molecules', dissolve: 'dissolve back in', capOn: 'when the cap first', built: 'gas built up', caught: 'caught up', match: 'they match', every: 'for every molecule', dbl: 'double arrow', once: 'at once', co2: 'carbon dioxide'});
const R2 = {cx: 1090, cy: 520, r: 320};
const retVal2 = (f: number) => (f < K2.retStart ? 0 : 4 + 8 * smooth((f - 850) / 190));
const CFG2: LensCfg = {
	id: 'c1', ...R2, size: 0.85, seed: 5, nGas: 9, nWater: 12, maxF: 1500,
	escRate: f => (f >= K2.escape ? 1 / 24 : 0),
	retRate: f => (f >= K2.retStart ? retVal2(f) / 12 / 24 : 0),
	gas: f => (f < K2.gasTop ? 0 : Math.min(3, (f - K2.gasTop) / 10) + 6 * smooth((f - 840) / 160)),
	water: f => (f < K2.dissolved ? 0 : Math.min(12, (f - K2.dissolved) / 4)),
};
const Tag: React.FC<{x: number; y: number; text: string; at: number; color?: string; w?: number}> = ({x, y, text, at, color = INK, w = 150}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12);
	if (o <= 0) return null;
	return (
		<g opacity={o}>
			<rect x={x - w / 2} y={y - 36} width={w} height={54} rx={14} fill="#fffdf8" stroke={color} strokeWidth={2.5} opacity={0.94} />
			<text x={x} y={y + 5} textAnchor="middle" fill={color} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44}}>{text}</text>
		</g>
	);
};
export const SceneLook: React.FC = () => {
	const f = useCurrentFrame();
	const slots = useLensSlots(CFG2);
	const lensIn = prog(f, 0, 30);
	const b = bottleGeo(110, 160, 0.53);
	const w0 = slots.water[0], g0 = slots.gas[0];
	const ret = retVal2(f);
	const gp = g0 ? slotPos(CFG2, g0, f) : {x: 0, y: 0, rot: 0};
	return (
		<>
			<Heading text="Zoom in to the surface" />
			<Bottle x={110} y={160} s={0.53} />
			<Overlay>
				<g opacity={lensIn}>
					<DrawPath d={scribbleEllipse(b.cx, b.surfaceY, 124, 38, 5)} at={0} dur={22} color={AMBER} width={5} />
					<DrawPath d={`M${b.cx + 112},${b.surfaceY - 34} L${R2.cx - 232},${R2.cy - 236}`} at={6} dur={22} color={AMBER} width={3} />
					<DrawPath d={`M${b.cx + 112},${b.surfaceY + 34} L${R2.cx - 232},${R2.cy + 236}`} at={6} dur={22} color={AMBER} width={3} />
				</g>
				<MoleculeLens cfg={CFG2} reveal={lensIn} />
				{/* the surface */}
				<Fade at={K2.surface} out={K2.dissolved - 10}>
					<DrawPath d={`M${R2.cx - R2.r + 20},${R2.cy} L${R2.cx + R2.r - 20},${R2.cy}`} at={K2.surface} dur={28} color={AMBER} width={9} />
					<Callout from={[R2.cx + R2.r - 60, R2.cy]} to={[R2.cx + R2.r + 40, R2.cy - 70]} at={K2.surface + 18} text="the surface" color={AMBER_INK} />
				</Fade>
				<Tag x={R2.cx - R2.r + 96} y={R2.cy + 108} text="liquid" at={K2.liquid} color="#3f78a6" />
				<Tag x={R2.cx - R2.r + 96} y={R2.cy - 62} text="gas" at={K2.gas} color={INK_SOFT} w={120} />
				{/* named parts: dissolved molecule, gas molecule */}
				{w0 ? <Fade at={K2.dissolved + 10} out={K2.gasTop - 8}>
					<DrawPath d={scribbleEllipse(w0.sx, w0.sy, 70, 46, 9)} at={K2.dissolved + 10} dur={20} color={ESC} width={5} />
				</Fade> : null}
				<Fade at={K2.dissolved} out={K2.gasTop - 4}>
					<SvgText x={R2.cx - R2.r + 10} y={R2.cy + R2.r + 56} text="CO_2 dissolved in the water" size={46} color="#3f78a6" anchor="start" />
				</Fade>
				{g0 ? <Fade at={K2.gasTop + 6} out={K2.moving - 4}>
					<DrawPath d={scribbleEllipse(gp.x, gp.y, 70, 46, 12)} at={K2.gasTop + 6} dur={20} color={AMBER_INK} width={5} />
				</Fade> : null}
				<Fade at={K2.gasTop} out={K2.moving - 4}>
					<SvgText x={R2.cx - R2.r + 10} y={R2.cy + R2.r + 56} text="CO_2 gas in the space above" size={46} color={AMBER_INK} anchor="start" />
				</Fade>
				<Fade at={K2.moving} out={K2.breakFree - 20}>
					<SvgText x={R2.cx - R2.r + 10} y={R2.cy + R2.r + 56} text="particles never stop moving" size={46} color={INK} anchor="start" />
					<DrawPath d={`M${R2.cx - R2.r + 10},${R2.cy + R2.r + 72} q30,-14 60,0 t60,0 t60,0 t60,0 t60,0 t60,0`} at={K2.moving + 4} dur={30} color={INK_SOFT} width={4} />
				</Fade>
				{/* legend: what the molecule is */}
				<Fade at={K2.co2 + 60} out={K2.moving + 0}>
					<Co2 x={560} y={800} s={1.3} />
					<SvgText x={560} y={868} text="carbon dioxide" size={40} color={INK} anchor="middle" />
				</Fade>
			</Overlay>
			<Counters x={1480} y={230} escAt={K2.escape} retAt={K2.retStart} esc={12} ret={ret} equalAt={K2.caught + 12} />
			<div style={{position: 'absolute', left: 1480, top: 560, width: 400, opacity: prog(f, K2.capOn, 12) * (1 - prog(f, K2.built, 12))}}>
				<HandText text="cap just on:" at={K2.capOn} size={50} color={AMBER_INK} />
				<div style={{height: 4}} /><HandText text="more out than back" at={K2.capOn + 14} size={50} color={AMBER_INK} />
			</div>
			<div style={{position: 'absolute', left: 1480, top: 560, opacity: prog(f, K2.caught + 8, 10)}}><HandText text="caught up!" at={K2.caught + 10} size={72} color={TEAL} /></div>
			<div style={{position: 'absolute', left: 1480, top: 760, opacity: prog(f, K2.every, 10)}}><HandText text="one out, one back in" at={K2.every + 4} size={50} color={TEAL} /></div>
			<EqChip x={1470} y={660} at={K2.dbl} parts={['CO_2(aq)', 'ARROW', 'CO_2(g)']} size={36} pulseAt={K2.once} />
			<div style={{position: 'absolute', left: 1480, top: 840, opacity: prog(f, K2.once + 20, 10)}}><HandText text="both at once" at={K2.once + 22} size={50} color={TEAL} /></div>
		</>
	);
};

// ---------- 3. Dynamic equilibrium and the two towns ----------
const K3 = cues(sc('dynamic-name'), {dynamic: 'dynamic equilibrium', dynWord: ['dynamic', 2], bothGo: 'both processes keep going', equil: ['equilibrium', 2], cancel: 'cancel out', picture: 'picture to hold onto', water: 'water', gas: 'gas', towns: 'two towns', joined: 'joined by', surface: 'at the surface', molecules: 'molecules as', traffic: 'traffic', same: 'same number of cars', minute: 'every minute', neverStops: 'traffic never stops', popSame: 'population', unlike: 'unlike drivers', random: 'at random', notice: 'notice', size: 'same size', equal: 'equal rates', notEqual: 'not equal amounts'});
const House: React.FC<{x: number; h: number; w: number; roof: string; at: number; base?: number}> = ({x, h, w, roof, at, base = 600}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 14);
	if (p <= 0) return null;
	return (
		<g transform={`translate(${x},${base}) scale(1,${p})`} opacity={p}>
			<rect x={0} y={-h} width={w} height={h} fill="#fffdf8" stroke={INK} strokeWidth={4} rx={3} />
			<path d={`M${-8},${-h} L${w / 2},${-h - 44} L${w + 8},${-h} Z`} fill={roof} stroke={INK} strokeWidth={4} strokeLinejoin="round" />
			<rect x={w / 2 - 9} y={-30} width={18} height={30} fill="#d9c9a8" stroke={INK} strokeWidth={3} />
			{h > 110 ? <rect x={10} y={-h + 22} width={14} height={16} fill="#cfe3f1" stroke={INK} strokeWidth={2.5} /> : null}
			{h > 150 ? <rect x={w - 24} y={-h + 22} width={14} height={16} fill="#cfe3f1" stroke={INK} strokeWidth={2.5} /> : null}
		</g>
	);
};
const Car: React.FC<{x: number; y: number; dir: 1 | -1; color: string; o: number; wob?: number}> = ({x, y, dir, color, o, wob = 0}) => (
	<g transform={`translate(${x.toFixed(1)},${(y + wob).toFixed(1)}) scale(${dir},1)`} opacity={o}>
		<rect x={-24} y={-12} width={48} height={20} rx={7} fill={color} stroke={INK} strokeWidth={3} />
		<path d="M-10,-12 L-5,-23 L10,-23 L15,-12 Z" fill={color} stroke={INK} strokeWidth={3} strokeLinejoin="round" />
		<circle cx={-13} cy={9} r={5.5} fill={INK} /><circle cx={13} cy={9} r={5.5} fill={INK} />
	</g>
);
const CFG3: LensCfg = {
	id: 'c3', cx: 1672, cy: 540, r: 170, size: 0.5, seed: 21, nGas: 3, nWater: 8, maxF: 1300,
	escRate: () => 1 / 34, retRate: () => 1 / 34, gas: () => 3, water: () => 8,
};
export const SceneName: React.FC = () => {
	const f = useCurrentFrame();
	const LANE_L = 700, LANE_R = 1090, LEN = LANE_R - LANE_L;
	const carsOn = prog(f, K3.molecules + 6, 12);
	const wob = (i: number) => (f > K3.unlike ? 7 * Math.sin(f * 0.2 + i * 2.1) * prog(f, K3.unlike, 20) : 0);
	const cars = [0, 1, 2];
	const inset = prog(f, K3.size + 6, 24);
	return (
		<>
			{/* term board */}
			<Enter at={0} out={K3.picture - 14} style={{position: 'absolute', inset: 0}}>
				<div style={{position: 'absolute', left: 0, right: 0, top: 150, textAlign: 'center'}}><HandText text="dynamic equilibrium" at={K3.dynamic - 8} size={150} color={TEAL} cps={20} /></div>
				<div style={{position: 'absolute', left: 130, top: 430, width: 760}}>
					<HandText text="Dynamic" at={K3.dynWord} size={104} color={ESC} />
					<div style={{opacity: prog(f, K3.bothGo, 14), marginTop: 6}}><Body size={46}>both processes keep going</Body></div>
				</div>
				<div style={{position: 'absolute', left: 1010, top: 430, width: 820}}>
					<HandText text="Equilibrium" at={K3.equil} size={104} color={AMBER_INK} />
					<div style={{opacity: prog(f, K3.cancel - 20, 14), marginTop: 6}}><Body size={46}>their effects cancel out, so nothing changes overall</Body></div>
				</div>
				<Overlay>
					{/* cycle icon */}
					<g opacity={prog(f, K3.dynWord + 20, 10)}>
						<DrawPath d="M330,720 A70,70 0 0 1 470,720" at={K3.dynWord + 22} dur={20} color={ESC} width={9} />
						<DrawPath d="M458,694 L470,720 L442,722" at={K3.dynWord + 38} dur={8} color={ESC} width={9} />
						<DrawPath d="M470,740 A70,70 0 0 1 330,740" at={K3.dynWord + 42} dur={20} color={RET} width={9} />
						<DrawPath d="M342,766 L330,740 L358,738" at={K3.dynWord + 58} dur={8} color={RET} width={9} />
					</g>
					{/* balance icon */}
					<g opacity={prog(f, K3.equil + 20, 10)}>
						<DrawPath d="M1330,860 L1330,690 M1290,860 L1370,860" at={K3.equil + 22} dur={16} color={INK} width={7} />
						<DrawPath d="M1200,700 L1460,700" at={K3.equil + 34} dur={16} color={INK} width={7} />
						<DrawPath d="M1215,700 L1185,780 L1275,780 Z M1445,700 L1415,780 L1505,780 Z" at={K3.equil + 48} dur={18} color={AMBER_INK} width={6} />
					</g>
				</Overlay>
			</Enter>

			{f >= K3.picture - 14 ? <Heading text="Two towns, one road" at={K3.picture} /> : null}
			<Overlay>
				{/* ground and towns */}
				<DrawPath d="M120,602 L672,602" at={K3.water - 10} dur={24} color={INK} width={5} />
				<DrawPath d="M1108,602 L1430,602" at={K3.gas} dur={20} color={INK} width={5} />
				{[[140, 110, 78, '#8fc0e3'], [228, 160, 70, '#8fc0e3'], [308, 100, 86, '#8fc0e3'], [404, 200, 70, '#8fc0e3'], [484, 140, 80, '#8fc0e3'], [574, 115, 72, '#8fc0e3']].map((h, i) => <House key={i} x={h[0] as number} h={h[1] as number} w={h[2] as number} roof={h[3] as string} at={K3.towns + i * 4} />)}
				{[[1140, 100, 80, '#f6d79a'], [1236, 150, 72, '#f6d79a'], [1324, 95, 78, '#f6d79a']].map((h, i) => <House key={i} x={h[0] as number} h={h[1] as number} w={h[2] as number} roof={h[3] as string} at={K3.towns + 8 + i * 4} />)}
				<SvgText x={385} y={690} text="water" size={74} color={ESC} anchor="middle" at={K3.water} />
				<SvgText x={1265} y={690} text="gas" size={74} color={AMBER_INK} anchor="middle" at={K3.gas} />
				{/* road */}
				<DrawPath d="M672,566 Q890,556 1108,566" at={K3.joined} dur={24} color={INK} width={5} />
				<DrawPath d="M672,640 Q890,650 1108,640" at={K3.joined + 6} dur={24} color={INK} width={5} />
				<DrawPath d="M690,603 L1090,603" at={K3.joined + 14} dur={24} color={INK_SOFT} width={3} dash="22 18" />
				<Fade at={K3.surface} out={K3.molecules - 6}><Callout from={[890, 646]} to={[800, 760]} at={K3.surface} text="the surface" color={AMBER_INK} size={52} /></Fade>
				{/* traffic */}
				{carsOn > 0 ? cars.map(i => {
					const t = f * 3.2 + i * (LEN / 3);
					const u = (t % LEN) / LEN;
					const o = Math.min(1, u / 0.1, (1 - u) / 0.1) * carsOn;
					return (
						<g key={i}>
							<Car x={LANE_L + u * LEN} y={585} dir={1} color="#6aa6d6" o={o} wob={wob(i)} />
							<Car x={LANE_R - (((t + 55) % LEN) / LEN) * LEN} y={622} dir={-1} color="#f0b24a" o={Math.min(1, (((t + 55) % LEN) / LEN) / 0.1, (1 - ((t + 55) % LEN) / LEN) / 0.1) * carsOn} wob={wob(i + 4)} />
						</g>
					);
				}) : null}
				<Fade at={K3.molecules} out={K3.same - 6}>
					<Callout from={[800, 640]} to={[780, 760]} at={K3.molecules} text="a car = a molecule" color={ESC} size={50} />
				</Fade>
				<Fade at={K3.traffic} out={K3.same - 6}>
					<SvgText x={900} y={500} text="the traffic" size={56} color={INK} at={K3.traffic} />
				</Fade>
				{/* equal numbers each way */}
				<Fade at={K3.same} out={K3.popSame + 40}>
					<DrawPath d="M720,520 L1060,520" at={K3.same} dur={20} color={ESC} width={6} />
					<DrawPath d="M1040,504 L1062,520 L1040,536" at={K3.same + 16} dur={8} color={ESC} width={6} />
					<SvgText x={890} y={496} text="8 cars each minute" size={48} color={ESC} anchor="middle" at={K3.same + 4} />
					<DrawPath d="M1060,716 L720,716" at={K3.minute} dur={20} color={AMBER_INK} width={6} />
					<DrawPath d="M742,700 L718,716 L742,732" at={K3.minute + 16} dur={8} color={AMBER_INK} width={6} />
					<SvgText x={890} y={778} text="8 cars each minute" size={48} color={AMBER_INK} anchor="middle" at={K3.minute + 4} />
				</Fade>
				{/* populations */}
				<SvgText x={385} y={752} text="population stays the same" size={42} color={INK_SOFT} anchor="middle" at={K3.popSame} />
				<SvgText x={1265} y={752} text="population stays the same" size={42} color={INK_SOFT} anchor="middle" at={K3.popSame + 10} />
				<Mark x={655} y={738} at={K3.popSame + 24} kind="tick" size={36} />
				<Mark x={1535} y={738} at={K3.popSame + 34} kind="tick" size={36} />
				{/* random */}
				<Fade at={K3.unlike + 30} out={K3.notice - 10}>
					<SvgText x={890} y={480} text="no one chooses: random motion" size={46} color={ESC} anchor="middle" at={K3.unlike + 30} />
				</Fade>
				{/* sizes */}
				<Fade at={K3.size - 30}>
					<DrawPath d="M140,372 Q140,356 160,356 L300,356 Q320,356 320,340 Q320,356 340,356 L500,356 Q520,356 520,372" at={K3.notice} dur={26} color={ESC} width={5} />
					<SvgText x={330} y={318} text="bigger town" size={50} color={ESC} anchor="middle" at={K3.notice + 14} />
					<DrawPath d="M1140,396 Q1140,380 1160,380 L1245,380 Q1265,380 1265,364 Q1265,380 1285,380 L1360,380 Q1380,380 1380,396" at={K3.notice + 8} dur={26} color={AMBER_INK} width={5} />
					<SvgText x={1260} y={344} text="smaller town" size={50} color={AMBER_INK} anchor="middle" at={K3.notice + 22} />
				</Fade>
			</Overlay>
			{/* molecule view again */}
			<Overlay>
				<MoleculeLens cfg={CFG3} reveal={inset} ring={INK} ringW={4} />
				<SvgText x={1672} y={790} text="more dissolved than gas" size={42} color={INK} anchor="middle" at={K3.size + 30} />
			</Overlay>
			{/* the aid */}
			<div style={{position: 'absolute', left: 120, top: 810}}>
				<HandText text="Equal rates, not equal amounts." at={K3.equal} size={92} color={TEAL} cps={19} />
				<svg width={1250} height={30} style={{position: 'absolute', left: 0, top: 96, overflow: 'visible'}}><DrawPath d="M4,14 Q320,2 640,14 T1240,12" at={K3.notEqual + 28} dur={26} color={AMBER} width={8} /></svg>
			</div>
		</>
	);
};
