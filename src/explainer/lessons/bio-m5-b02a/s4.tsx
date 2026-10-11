import React, {useMemo} from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {Mark, rng} from '../../kit';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, ART, Art, artH, BLUE, Body, Card, COD, Dial, EGG, EGG_LINE, EggDot, Enter, FishIcon, FONT_HAND, GREEN, Heading, INK, INK_SOFT, Label, Note, Overlay, RED, S,
	SealIcon, Scribble, prog,
} from './shared';

// ---------- little text effects for the answer cards ----------
const Because: React.FC<{at: number}> = ({at}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 16);
	return (
		<span style={{position: 'relative', display: 'inline-block', color: '#8a5a0c', fontWeight: 800}}>
			because
			<svg viewBox="0 0 100 40" preserveAspectRatio="none" style={{position: 'absolute', left: -8, top: -8, width: 'calc(100% + 16px)', height: 'calc(100% + 14px)', overflow: 'visible', pointerEvents: 'none', clipPath: `inset(-20% ${100 - p * 100}% -20% -10%)`}}>
				<path d="M50,3 C80,2 98,9 98,20 C98,32 76,38 50,37 C22,37 2,31 2,20 C2,9 24,2 54,4" fill="none" stroke={AMBER} strokeWidth={4} vectorEffect="non-scaling-stroke" strokeLinecap="round" />
			</svg>
		</span>
	);
};
const Link: React.FC<{at: number; children: React.ReactNode}> = ({at, children}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 14);
	return <span style={{color: '#1f6fb2', fontWeight: 800, backgroundImage: 'linear-gradient(#1f6fb2,#1f6fb2)', backgroundRepeat: 'no-repeat', backgroundPosition: '0 100%', backgroundSize: `${p * 100}% 5px`, paddingBottom: 2}}>{children}</span>;
};

// ---------- 8. Worked answer ----------
const TAG_W = 220;
const RailRow: React.FC<{i: number; at: number; tag: string; color: string; text: string}> = ({i, at, tag, color, text}) => (
	<Enter at={at} dy={8} style={{position: 'absolute', left: 96, top: 372 + i * 62, width: 1728}}>
		<div style={{display: 'flex', alignItems: 'center', background: '#fffdf8', borderRadius: 16, border: `2.5px solid ${color}`, height: 54, boxSizing: 'border-box', padding: '0 22px', gap: 18, opacity: 0.85}}>
			<div style={{flex: 'none', width: TAG_W, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 36, color}}>{tag}</div>
			<div style={{fontFamily: "'Inter Tight', sans-serif", fontWeight: 600, fontSize: 30, color: INK, whiteSpace: 'nowrap'}}>{text}</div>
		</div>
	</Enter>
);

export const SceneWorked: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('worked-explain'), {
		q: 'The question', ex: 'explain why', cmd: 'The command word', cause: 'the cause', causeS: 'Fish release far', b1: ['because', 2], effect: 'the effect', effS: 'Fish cope', b2: ['because', 3],
		so1: 'so some young', contrast: 'the contrast', conS: 'Mammals need', b3: ['because', 4], so2: 'so almost every', b4: ['because', 5], link: 'a link', linkS: 'a parent has limited', so3: 'so it makes', or: 'or few eggs',
	});
	// each stage: large card from its start cue until the next stage starts, then it becomes a one-line rail row
	const BIG = (idx: number, tag: string, color: string, at: number, nextAt: number, art: React.ReactNode, children: React.ReactNode) => {
		const out = nextAt >= 1e8 ? 1 : 1 - prog(f, nextAt - 8, 14);
		return (
			<Enter at={at - 10} dy={14} style={{position: 'absolute', left: 96, top: 372 + idx * 62, width: 1728}}>
				<div style={{opacity: out, display: 'flex', alignItems: 'center', gap: 24, background: '#fffdf8', borderRadius: 26, padding: '26px 34px', boxShadow: '0 18px 40px rgba(60,45,20,0.12)', border: `4px solid ${color}`, boxSizing: 'border-box'}}>
					<div style={{flex: 'none', width: TAG_W, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, color}}>{tag}</div>
					<div style={{flex: 1, fontFamily: "'Inter Tight', sans-serif", fontWeight: 600, fontSize: 38, lineHeight: 1.3, color: INK}}>{children}</div>
					<div style={{flex: 'none', width: 210, height: 110, position: 'relative'}}>{art}</div>
				</div>
			</Enter>
		);
	};
	return (
		<>
			<Heading size={80} items={[[6, 'Building a model answer']]} />
			<Enter at={c.cmd} style={{position: 'absolute', left: 1040, top: 100}}><Note>explain = give reasons, joined by because</Note></Enter>
			<Card x={96} y={215} w={1728} at={c.q} pad="14px 30px">
				<Body size={34} weight={700}>
					<span style={{color: INK_SOFT}}>Question: </span>
					<span style={{position: 'relative'}}>Explain<span style={{position: 'absolute', left: 0, right: 0, bottom: -4, height: 6, background: AMBER, borderRadius: 3, transformOrigin: 'left', transform: `scaleX(${prog(f, c.ex, 14)})`}} /></span>
					{' '}why fish that fertilise externally release far more eggs than mammals that fertilise internally.
				</Body>
			</Card>
			<RailRow i={0} at={c.effS - 6} tag="CAUSE" color="#c4432f" text="Many eggs and sperm are lost, and most young die before they grow up." />
			<RailRow i={1} at={c.conS - 6} tag="EFFECT" color="#1f6fb2" text="Huge numbers of eggs make up for the losses." />
			<RailRow i={2} at={c.linkS - 6} tag="CONTRAST" color="#2f8a5b" text="Sperm is protected inside the female, and each young gets care." />
			{BIG(0, 'CAUSE', '#c4432f', c.causeS, c.effS,
				<Art a={ART.salmon} x={0} y={14} w={210} />,
				<>Fish release far more eggs <Because at={c.b1} /> many eggs and sperm in water are swept away or eaten, and most of the young that form are eaten or die before they grow up.</>)}
			{BIG(1, 'EFFECT', '#1f6fb2', c.effS, c.conS,
				<Art a={ART.salmon} x={0} y={14} w={210} />,
				<>Fish cope <Because at={c.b2} /> huge numbers of eggs make up for these losses, <Link at={c.so1}>so</Link> some young still survive.</>)}
			{BIG(2, 'CONTRAST', '#2f8a5b', c.conS, c.linkS,
				<Art a={ART.seal} x={0} y={14} w={210} />,
				<>Mammals need far fewer eggs <Because at={c.b3} /> the sperm is placed inside the female, where it is protected, <Link at={c.so2}>so</Link> almost every egg is fertilised. They have only a few young <Because at={c.b4} /> each one gets a lot of parental investment.</>)}
			{BIG(3, 'LINK', '#8a5a0c', c.linkS, 1e9,
				<div style={{display: 'flex', gap: 8}}><Art a={ART.salmon} x={0} y={24} w={100} /><Art a={ART.seal} x={108} y={24} w={100} /></div>,
				<>A parent has limited energy, <Link at={c.so3}>so</Link> it makes many eggs with little care, <Link at={c.or}>or</Link> few eggs with a lot of care.</>)}
		</>
	);
};

// ---------- 8b. A bad year ----------
export const SceneBadYear: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('bad-year'), {
		storm: 'storm year', seal: 'seal colony', cod: 'cod population', eggs: 'millions of eggs', surv: 'adults survive', adds: 'how many young each adult adds', tenpups: 'ten living pups',
		thousand: 'thousands of living young fish', after: 'After the storm', onepup: 'one pup left', hundreds: 'hundreds of young fish', next: 'Next breeding season', sealadd: 'about one pup',
		slow: 'rebuilds slowly', codadd: 'millions of eggs again', fast: 'rebuild faster', enough: 'as long as enough',
	});
	const SY = 360, CY = 665;
	const sx = (i: number) => 410 + i * 92;
	const cx = (i: number) => 440 + i * 200;
	const young = useMemo(() => { const r = rng(52); return Array.from({length: 4}, () => Array.from({length: 20}, (_, k) => ({x: (r() - 0.5) * 120, y: (r() - 0.5) * 80, keep: k % 10 === 0, k}))); }, []);
	const cloud = useMemo(() => { const r = rng(71); return Array.from({length: 44}, () => ({x: 1135 + r() * 110, y: 625 + r() * 90, r: 4 + r() * 3})); }, []);
	const sealDial = prog(f, c.slow, 260) * 0.3;
	const codDial = prog(f, c.fast, 40) * 0.92;
	const slash = (i: number) => prog(f, c.after + i * 5, 12);
	return (
		<>
			<Heading size={80} items={[[6, 'What a bad year does'], [c.adds, 'How many young does each adult add?']]} />
			<Enter at={c.storm} style={{position: 'absolute', left: 96, top: 186}}><Note color={RED}>a storm kills nine in every ten of the young alive</Note></Enter>
			<Overlay>
				{/* the seesaw returns, small */}
				<g opacity={prog(f, c.storm, 16)} transform="translate(1720,140)">
					<path d="M-26,34 L26,34 L0,0Z" fill="#b9a98f" stroke={INK} strokeWidth={3} />
					<g transform="rotate(-8)"><rect x={-70} y={-6} width={140} height={10} rx={5} fill="#d7b98c" stroke={INK} strokeWidth={3} /></g>
				</g>
				{/* seal row */}
				<Label x={96} y={SY - 50} at={c.seal} text="Seal colony" size={60} color={INK} anchor="start" />
				<Label x={96} y={SY + 4} at={c.surv} text="adults survive" size={42} color={GREEN} anchor="start" />
				{Array.from({length: 10}, (_, i) => (
					<g key={i}>
						<SealIcon x={sx(i)} y={SY - 8} s={0.6} o={prog(f, c.seal + i * 3, 10)} ring={prog(f, c.surv, 12) > 0.5 ? GREEN : undefined} />
						<g opacity={prog(f, c.tenpups + i * 4, 10) * (i === 4 ? 1 : 1 - 0.78 * slash(i))}>
							<circle cx={sx(i)} cy={SY + 62} r={14} fill="#d6d9dc" stroke={INK} strokeWidth={3} />
						</g>
						{i !== 4 ? <g opacity={slash(i)}><path d={`M${sx(i) - 14},${SY + 48} l28,28 M${sx(i) + 14},${SY + 48} l-28,28`} stroke={RED} strokeWidth={5} strokeLinecap="round" /></g> : null}
					</g>
				))}
				<Label x={sx(0) - 40} y={SY + 128} at={c.onepup} text="1 pup left for 10 mothers" size={46} color={AMBER_INK} anchor="start" />
				{/* cod row */}
				<Label x={96} y={CY - 70} at={c.cod} text="Cod population" size={60} color={INK} anchor="start" />
				<Label x={96} y={CY - 18} at={c.surv + 8} text="adults survive" size={42} color={GREEN} anchor="start" />
				{[0, 1, 2, 3].map(i => (
					<g key={i}>
						<FishIcon x={cx(i)} y={CY} s={0.9} o={prog(f, c.cod + i * 6, 10)} ring={prog(f, c.surv + 8, 12) > 0.5 ? GREEN : undefined} />
						{young[i].map((d, k) => {
							const gone = d.keep ? 0 : prog(f, c.after + k * 2, 14);
							return <circle key={k} cx={cx(i) + d.x} cy={CY + 92 + d.y} r={8} fill={COD} stroke={INK} strokeWidth={1.5} opacity={prog(f, c.thousand + k * 2, 8) * (1 - gone)} />;
						})}
					</g>
				))}
				<Label x={cx(0) - 80} y={CY + 190} at={c.thousand} text="thousands of living young each" size={44} color={INK_SOFT} anchor="start" out={c.after} />
				<Label x={cx(0) - 80} y={CY + 190} at={c.hundreds} text="hundreds of young fish left per cod" size={44} color={AMBER_INK} anchor="start" />
				{/* eggs: kept apart from the living young */}
				{cloud.map((d, i) => <EggDot key={i} x={d.x} y={d.y} r={d.r} o={prog(f, c.eggs + (i % 12), 8) * (f < c.after ? 1 : 0.18 + 0.82 * prog(f, c.codadd, 20))} />)}
				<Label x={1190} y={600} at={c.eggs} text="millions of eggs" size={40} color={EGG_LINE} />
				{/* the key question: what each adult adds next season */}
				<g opacity={prog(f, c.adds, 14)}>
					<rect x={1330} y={SY - 78} width={330} height={150} rx={22} fill="#fffdf8" stroke={AMBER} strokeWidth={4} />
					<rect x={1330} y={CY - 78} width={330} height={150} rx={22} fill="#fffdf8" stroke={AMBER} strokeWidth={4} />
				</g>
				<Label x={1495} y={SY - 30} at={c.adds} text="each adult adds" size={40} color={INK_SOFT} />
				<Label x={1495} y={CY - 30} at={c.adds + 6} text="each adult adds" size={40} color={INK_SOFT} />
				<Label x={1495} y={SY + 30} at={c.adds + 14} text="?" size={64} color={AMBER_INK} out={c.sealadd} />
				<Label x={1495} y={CY + 30} at={c.adds + 20} text="?" size={64} color={AMBER_INK} out={c.codadd} />
				<Label x={1495} y={SY + 30} at={c.sealadd} text="about 1 pup" size={58} color={AMBER_INK} />
				<Label x={1495} y={CY + 30} at={c.codadd} text="millions of eggs" size={52} color={EGG_LINE} />
				<Dial x={1740} y={SY} r={44} p={f < c.slow ? 0.02 : sealDial} color={AMBER_INK} label={f >= c.slow ? 'rebuilds slowly' : undefined} o={prog(f, c.next, 14)} />
				<Dial x={1740} y={CY} r={44} p={f < c.fast ? 0.02 : codDial} color={GREEN} label={f >= c.fast ? 'rebuilds faster' : undefined} o={prog(f, c.next, 14)} />
			</Overlay>
			<Enter at={c.enough} style={{position: 'absolute', left: 560, top: 908}}><Note>as long as enough adults survive</Note></Enter>
		</>
	);
};
