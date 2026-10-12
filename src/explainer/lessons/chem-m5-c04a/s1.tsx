import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, DrawPath, FONT_HAND, HandText, INK, INK_SOFT, prog, scribbleEllipse} from '../../kit';
import {cues} from '../../cues';
import {BARS, Bars, ColourStrip, Dial, FWD, Fade, FlaskThumb, NetBar, Overlay, Pill, RxnChip, StageTable, SvgText, Syringe, TEAL, TempGlyph} from './parts';
import type {TRow} from './parts';
import {BAR_SCALE, BeatLabel, CHIP_L, CHIP_R, N2O4G, NO2G, SYX, Title, shade, train, BX} from './board';
import {DEEP, N2O4_INK, NO2_INK, PALE, kf, sc} from './common';

const HEADS = [{text: 'NO_2', color: NO2_INK}, {text: 'N_2O_4', color: N2O4_INK}];

// ---------- 1. Hook ----------
const K1 = cues(sc('hook'), {syr: 'This syringe', brown: 'brown nitrogen dioxide', mixed: 'mixed with colourless', hour: 'an hour', dyn: 'dynamic equilibrium', escape: 'can escape', push: 'push the plunger', half: 'half the space', room: 'room temperature', watch: 'Watch the colour', dark: 'darkens at once', fades: 'slowly fades', settles: 'settles darker', why: 'So why darker', fade: 'why the fade', every: 'every rise'});
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const vol = kf(f, [[K1.push, 1], [K1.dark - 10, 0.5]]);
	const t = f < K1.fades ? 0.5 + (1 - vol) * 1.0 : kf(f, [[K1.fades, 1], [K1.fades + 150, 0.78]]);
	const no2 = kf(f, [[K1.fades, 16], [K1.fades + 150, 12]], false);
	const n2o4 = kf(f, [[K1.fades, 8], [K1.fades + 150, 10]], false);
	const push = 1 + 0.05 * prog(f, 0, 900);
	const bursts = [...train(K1.dyn, 1100, 40, 'join'), ...train(K1.dyn + 20, 1100, 40, 'split')];
	return (
		<>
			<Title text="What happens when we squeeze a gas at equilibrium?" size={62} />
			<div style={{position: 'absolute', left: 0, top: 0, width: 1920, height: 1080, transformOrigin: '500px 400px', transform: `scale(${push})`}}>
				<Syringe x={96} y={150} w={1250} vol={vol} groups={[NO2G(16), N2O4G(8)]} tint={shade(t)} bursts={bursts} opacity={prog(f, K1.syr - 20, 20)} />
			</div>
			<Overlay>
				<Fade at={K1.brown}><SvgText x={150} y={470} text="NO_2: brown" size={38} color={NO2_INK} hand={false} weight={700} at={K1.brown} /></Fade>
				<Fade at={K1.mixed}><SvgText x={420} y={470} text="N_2O_4: colourless" size={38} color={N2O4_INK} hand={false} weight={700} at={K1.mixed} /></Fade>
				<ColourStrip x={260} y={520} w={640} from={PALE} to={DEEP} t={t} at={K1.watch} label="colour" h={44} mark={0.5} />
				<Fade at={K1.watch}><SvgText x={260 + 320} y={610} text="start" size={38} color={INK_SOFT} anchor="middle" at={K1.watch} /></Fade>
				<Fade at={K1.dark}><SvgText x={260 + 640} y={610} text="darker at once" size={38} color={NO2_INK} anchor="end" at={K1.dark} /></Fade>
				<Fade at={K1.settles}><SvgText x={260 + 640 * 0.78} y={664} text="settles darker than the start" size={38} color={TEAL} anchor="middle" at={K1.settles} /></Fade>
				<TempGlyph x={1400} y={780} at={K1.room} label="room temperature" />
				<Fade at={K1.hour} out={K1.push - 10}>
					<circle cx={1000} cy={540} r={44} fill="#fffdf8" stroke={INK} strokeWidth={5} />
					<path d="M1000,540 L1000,510 M1000,540 L1022,552" stroke={INK} strokeWidth={5} strokeLinecap="round" />
					<SvgText x={1060} y={552} text="same shade for an hour" size={36} color={INK_SOFT} at={K1.hour} />
				</Fade>
			</Overlay>
			<RxnChip x={96} y={700} at={K1.dyn - 20} left={CHIP_L} right={CHIP_R} size={44} fwdLit={K1.dyn} revLit={K1.dyn} words={false} />
			<FlaskThumb x={1380} y={200} w={500} at={K1.dyn} out={K1.escape + 30} />
			{[['So why darker?', K1.why, 830], ['Why the fade?', K1.fade, 880], ['Does every rise in pressure do this?', K1.every, 930]].map(([s, at, y]) => (
				<div key={s as string} style={{position: 'absolute', left: 96, top: y as number}}><HandText text={s as string} at={at as number} size={50} color={TEAL} cps={24} /></div>
			))}
		</>
	);
};

// ---------- 2a. The syringe at equilibrium ----------
const K2 = cues(sc('syringe-equilibrium'), {scale: 'made-up scale', conc: 'Concentration means', no2: 'two is eight', n2o4: 'is four', joining: 'Joining', fwd: 'forward reaction', splitting: 'splitting', rev: 'the reverse', both: 'Both rates', thirty: 'thirty-two', steady: 'steady'});
export const SceneSyrEq: React.FC = () => {
	const f = useCurrentFrame();
	const bar = kf(f, [[K2.both, 0], [K2.thirty + 10, 32]]);
	const bursts = [...train(K2.joining, 1000, 34, 'join'), ...train(K2.joining + 17, 1000, 34, 'split')];
	const yy = (v: number) => BARS.base - v * BAR_SCALE;
	const rows: TRow[] = [{label: 'at equilibrium', at: K2.no2 - 6, cells: [['8', K2.no2 + 6], ['4', K2.n2o4 + 6], ['32', K2.thirty + 8], ['32', K2.thirty + 16]], gap: ['0', K2.steady + 6]}];
	return (
		<>
			<Title text="The syringe at equilibrium" />
			<Syringe x={SYX.x} y={SYX.y} w={SYX.w} vol={1} groups={[NO2G(16), N2O4G(8)]} tint={shade(0.5)} bursts={bursts} />
			<Overlay>
				<Pill x={96} y={176} w={650} text="made-up numbers to show the pattern" at={K2.scale} color={INK_SOFT} size={34} h={58} />
				<Dial x={96} y={560} label="NO_2" value={8} color={NO2_INK} at={K2.no2 - 10} />
				<Dial x={400} y={560} label="N_2O_4" value={4} color={N2O4_INK} at={K2.n2o4 - 10} />
				<Fade at={K2.conc}><SvgText x={96} y={520} text="concentration = how crowded a gas is" size={38} color={INK} at={K2.conc} /></Fade>
				<Bars x0={BX} fwd={bar} rev={bar} at={K2.both - 8} scale={BAR_SCALE} fwdLabel={f >= K2.thirty ? '32' : ''} revLabel={f >= K2.thirty ? '32' : ''} />
				<g opacity={prog(f, K2.steady, 14)}>
					<path d={`M${BX + BARS.w},${yy(32)} L${BX + BARS.gx},${yy(32)}`} stroke={TEAL} strokeWidth={6} strokeDasharray="10 8" />
					<text x={BX + (BARS.gx + BARS.w) / 2} y={yy(32) - 80} textAnchor="middle" fill={TEAL} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 56}}>equal</text>
				</g>
				<NetBar xc={110} y={850} gap={0} at={K2.steady - 6} zeroAt={K2.steady} />
				<StageTable rows={rows} at={K2.no2 - 12} heads={HEADS} />
			</Overlay>
			<RxnChip x={1020} y={60} at={K2.scale - 40} left={CHIP_L} right={CHIP_R} size={38} fwdLit={K2.fwd} revLit={K2.rev} words={false} fwdTag={{text: 'forward = joining', at: K2.fwd, color: FWD}} revTag={{text: 'reverse = splitting', at: K2.rev, color: AMBER_INK}} />
		</>
	);
};

// ---------- 2b. The squeeze doubles every concentration ----------
const K3 = cues(sc('squeeze-doubles'), {halve: 'halve the volume', same: 'same particles', doubles: 'every concentration doubles', sixteen: 'sixteen', fourEight: 'four to eight', nothing: 'Nothing has reacted', darker: 'already darker', gas: 'brown gas'});
export const SceneSqueeze: React.FC = () => {
	const f = useCurrentFrame();
	const vol = kf(f, [[K3.halve + 10, 1], [K3.doubles + 50, 0.5]]);
	const rows: TRow[] = [
		{label: 'at equilibrium', at: -100, cells: [['8', -100], ['4', -100], ['32', -100], ['32', -100]], gap: ['0', -100]},
		{label: 'just after squeezing', at: K3.sixteen, cells: [['16', K3.sixteen + 8], ['8', K3.fourEight + 12], ['', 0], ['', 0]]},
	];
	return (
		<>
			<Title text="The squeeze doubles every concentration" size={64} />
			<BeatLabel text="the moment of the change" at={K3.halve} />
			<Syringe x={SYX.x} y={SYX.y} w={SYX.w} vol={vol} groups={[NO2G(16), N2O4G(8)]} tint={shade(0.5 / vol)} />
			<Overlay>
				<ColourStrip x={260} y={500} w={520} from={PALE} to={DEEP} t={0.5 / vol} at={K3.halve} label="colour" h={40} mark={0.5} />
				<Dial x={96} y={580} label="NO_2" value={8 / vol} text={String(Math.round(8 / vol))} color={NO2_INK} at={-100} />
				<Dial x={400} y={580} label="N_2O_4" value={4 / vol} text={String(Math.round(4 / vol))} color={N2O4_INK} at={-100} />
				<Fade at={K3.same}><SvgText x={96} y={810} text="same particles, half the room" size={40} color={INK} at={K3.same} /></Fade>
				<Fade at={K3.nothing}><SvgText x={96} y={866} text="no reaction yet, but the brown" size={40} color={NO2_INK} at={K3.nothing} /><SvgText x={96} y={914} text="is already darker" size={40} color={NO2_INK} at={K3.darker} /></Fade>
				<Bars fwd={32} rev={32} at={-100} scale={BAR_SCALE} x0={BX} />
				<SvgText x={BX + 160} y={BARS.base - 32 * BAR_SCALE - 90} text="rates not touched yet" size={36} color={INK_SOFT} anchor="middle" at={K3.nothing + 20} />
				<StageTable rows={rows} at={-100} heads={HEADS} gapAt={-100} />
			</Overlay>
			<RxnChip x={1020} y={60} at={-100} left={CHIP_L} right={CHIP_R} size={38} words={false} fwdLit={-100} revLit={-100} fwdTag={{text: 'forward = joining', at: -100, color: FWD}} revTag={{text: 'reverse = splitting', at: -100, color: AMBER_INK}} />
		</>
	);
};

// ---------- 2c. Joining gains more ----------
const K4 = cues(sc('joining-gains-more'), {rates: 'Now the rates', join: 'Joining needs', meet: 'to meet', twice: 'twice as crowded', over: 'twice over', calc: 'thirty-two times two', hund: 'one hundred and twenty-eight', split: 'Splitting needs', doubles: 'only doubles', sixty: 'sixty-four', boosts: 'boosts both', gains: 'gains more'});
export const SceneJoining: React.FC = () => {
	const f = useCurrentFrame();
	const fwd = kf(f, [[K4.over, 32], [K4.hund + 20, 128]]);
	const rev = kf(f, [[K4.doubles, 32], [K4.sixty + 10, 64]]);
	const bursts = [...train(K4.join, 1100, 20, 'join'), ...train(K4.split, 1100, 40, 'split')];
	const rows: TRow[] = [
		{label: 'at equilibrium', at: -100, cells: [['8', -100], ['4', -100], ['32', -100], ['32', -100]], gap: ['0', -100]},
		{label: 'just after squeezing', at: -100, cells: [['16', -100], ['8', -100], ['128', K4.hund + 10], ['64', K4.sixty + 6]], gap: ['64', K4.boosts + 10]},
	];
	const ring = scribbleEllipse(BX + BARS.w / 2, BARS.base - 128 * BAR_SCALE + 20, 110, 70, 4);
	return (
		<>
			<Title text="Joining gains more" />
			<BeatLabel text="the moment of the change" at={-100} />
			<Syringe x={SYX.x} y={SYX.y} w={SYX.w} vol={0.5} groups={[NO2G(16), N2O4G(8)]} tint={shade(1)} bursts={bursts} />
			<Overlay>
				<Dial x={96} y={580} label="NO_2" value={16} color={NO2_INK} at={-100} />
				<Dial x={400} y={580} label="N_2O_4" value={8} color={N2O4_INK} at={-100} />
				<Fade at={K4.join}>
					<SvgText x={100} y={830} text="joining: 2 NO_2 must meet" size={40} color={FWD} at={K4.join} />
					<path d="M150,845 L180,880 M240,845 L212,880" stroke={FWD} strokeWidth={6} strokeLinecap="round" />
				</Fade>
				<Fade at={K4.split}><SvgText x={100} y={930} text="splitting: 1 N_2O_4 on its own" size={40} color={AMBER_INK} at={K4.split} /></Fade>
				<Fade at={K4.twice}><SvgText x={690} y={500} text="each one is twice as crowded" size={30} color={NO2_INK} at={K4.twice} hand={false} weight={600} /></Fade>
				<Fade at={K4.over}><SvgText x={690} y={556} text="forward: 32 × 2 × 2" size={40} color={FWD} at={K4.over} hand={false} /></Fade>
				<Fade at={K4.hund}><SvgText x={690} y={612} text="= 128" size={52} color={FWD} at={K4.hund} hand={false} weight={800} /></Fade>
				<Fade at={K4.doubles}><SvgText x={690} y={694} text="reverse: 32 × 2 = 64" size={38} color={AMBER_INK} at={K4.doubles} hand={false} /></Fade>
				<Bars fwd={fwd} rev={rev} at={K4.rates} scale={BAR_SCALE} x0={BX} />
				<Fade at={K4.gains}><DrawPath d={ring} at={K4.gains} dur={24} color={TEAL} width={6} /><SvgText x={BX + 190} y={BARS.base - 128 * BAR_SCALE - 70} text="gains more" size={44} color={TEAL} at={K4.gains + 10} /></Fade>
				<StageTable rows={rows} at={-100} heads={HEADS} gapAt={K4.boosts} />
			</Overlay>
			<RxnChip x={1020} y={60} at={-100} left={CHIP_L} right={CHIP_R} size={38} words={false} fwdLit={-100} revLit={-100} fwdTag={{text: 'forward = joining', at: -100, color: FWD}} revTag={{text: 'reverse = splitting', at: -100, color: AMBER_INK}} />
		</>
	);
};
void AMBER; void HandText;
