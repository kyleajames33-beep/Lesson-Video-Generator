import React from 'react';
import {Img, staticFile, useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, BLUE, BLUE_SOFT, DrawPath, Enter, FONT_DISPLAY, FONT_HAND, HandText, INK, INK_SOFT, PAPER, prog} from '../../kit';

const WHITE = '#fffdf8';
const RED = '#d06945';
const BLUE_DARK = '#245c80';
const card: React.CSSProperties = {background: WHITE, border: '2px solid #e6dccb', borderRadius: 28, boxShadow: '0 16px 28px rgba(70,54,31,0.09)'};
const title: React.CSSProperties = {fontFamily: FONT_HAND, color: INK, fontWeight: 700, fontSize: 88, lineHeight: 1};
const body: React.CSSProperties = {fontFamily: FONT_DISPLAY, color: INK, fontWeight: 600, fontSize: 44, lineHeight: 1.18};
const page: React.CSSProperties = {position: 'absolute', inset: 0, padding: '108px 108px 80px'};
const Head: React.FC<{children: string; at?: number}> = ({children, at = 0}) => <div style={{...title, maxWidth: 1550}}><HandText text={children} at={at} size={88} /></div>;
const Box: React.FC<{x: number; y: number; w: number; h: number; at: number; children: React.ReactNode; border?: string}> = ({x, y, w, h, at, children, border}) => <Enter at={at} style={{position: 'absolute', left: x, top: y, width: w, height: h, ...card, borderColor: border ?? '#e6dccb', padding: '26px 34px', boxSizing: 'border-box'}}>{children}</Enter>;
const Small: React.FC<{children: React.ReactNode; color?: string}> = ({children, color = INK_SOFT}) => <div style={{fontFamily: FONT_DISPLAY, fontSize: 30, lineHeight: 1.2, fontWeight: 600, color}}>{children}</div>;
const Arrow: React.FC<{d: string; at: number; color?: string; width?: number}> = ({d, at, color = BLUE, width = 7}) => <DrawPath d={d} at={at} dur={26} color={color} width={width} />;

export const Hook: React.FC = () => {
	const f = useCurrentFrame();
	const heat = prog(f, 75, 28);
	return <div style={page}>
		<Head>Why does sweating cool you?</Head>
		<Enter at={25} style={{position: 'absolute', left: 126, top: 245, width: 720, ...body, fontSize: 49}}>Working muscles release heat. After a run, your body warms.</Enter>
		<Enter at={115} style={{position: 'absolute', left: 126, top: 345, width: 730, fontFamily: FONT_HAND, fontSize: 63, fontWeight: 700, color: BLUE_DARK}}>How does it get back towards its usual range?</Enter>
		<div style={{position: 'absolute', left: 1080, top: 185, width: 440, height: 760}}><Img src={staticFile('assets/biology/b4-person-adult-v1.png')} style={{height: 800, width: 'auto', objectFit: 'contain', filter: `drop-shadow(0 12px 18px rgba(48,39,28,.15)) sepia(${0.12 * heat})`}} /></div>
		<svg style={{position: 'absolute', inset: 0, width: '100%', height: '100%'}} viewBox="0 0 1920 1080">
			<circle cx={1315} cy={545} r={260} fill={RED} opacity={0.08 * heat} />
			<Arrow d="M1500 370 C1600 330 1640 310 1680 300" at={74} color={RED} />
			<text x={1510} y={270} fontFamily={FONT_HAND} fontSize={55} fontWeight={700} fill={RED} opacity={heat}>temperature rises</text>
		</svg>
		<Box x={125} y={730} w={750} h={178} at={245} border={BLUE_SOFT}><div style={{...body, fontSize: 41}}>Homeostasis</div><Small>Keeping internal conditions within a workable range</Small></Box>
	</div>;
};

export const Signal: React.FC = () => {
	const f = useCurrentFrame();
	return <div style={page}>
		<Head>Who notices the change?</Head>
		<Enter at={30} style={{position: 'absolute', left: 110, top: 225, ...body, color: RED}}>Body temperature rises</Enter>
		<Enter at={55} style={{position: 'absolute', left: 145, top: 315, height: 635}}><Img src={staticFile('assets/biology/b4-person-adult-v1.png')} style={{height: 635, width: 'auto', objectFit: 'contain'}} /></Enter>
		<Box x={685} y={278} w={1080} h={147} at={125} border={BLUE}><div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 43, color: BLUE_DARK}}>1  Receptor</div><Small>Thermoreceptors in skin and hypothalamus sense temperature</Small></Box>
		<Box x={685} y={482} w={1080} h={147} at={355} border={AMBER}><div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 43, color: AMBER_INK}}>2  Control centre</div><Small>The hypothalamus coordinates a response</Small></Box>
		<Box x={685} y={686} w={1080} h={147} at={660} border={BLUE}><div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 43, color: BLUE_DARK}}>3  Effector</div><Small>Sweat glands in skin release sweat</Small></Box>
		<svg style={{position: 'absolute', inset: 0, width: '100%', height: '100%'}} viewBox="0 0 1920 1080">
			<circle cx={360} cy={478} r={20 + 9 * Math.sin(f / 12)} fill={BLUE} opacity={prog(f, 120, 15) * 0.75} />
			<circle cx={280} cy={367} r={15 + 6 * Math.sin(f / 14)} fill={AMBER} opacity={prog(f, 175, 15) * 0.8} />
			<Arrow d="M370 476 Q480 330 680 350" at={160} color={BLUE} />
			<Arrow d="M285 365 Q510 260 680 350" at={215} color={AMBER} />
			<Arrow d="M1200 425 L1200 470" at={310} color={AMBER} />
			<Arrow d="M1200 630 L1200 675" at={575} color={BLUE} />
			<Arrow d="M680 760 Q510 760 370 660" at={775} color={BLUE} />
			<g opacity={prog(f, 820, 15)} transform="translate(380 650)"><path d="M0 35 C-26 6 -20 -8 0 -34 C20 -8 26 6 0 35" fill={BLUE} /></g>
		</svg>
		<Enter at={890} style={{position: 'absolute', left: 715, top: 884, width: 1030, fontFamily: FONT_HAND, fontSize: 47, fontWeight: 700, color: BLUE_DARK}}>A signal reaches the glands in the skin.</Enter>
	</div>;
};

export const Cooling: React.FC = () => {
	const f = useCurrentFrame();
	return <div style={page}>
		<Head>Where does the heat go?</Head>
		<Box x={120} y={275} w={675} h={460} at={30} border={BLUE}>
			<div style={{fontFamily: FONT_HAND, fontSize: 56, fontWeight: 700, color: BLUE_DARK}}>At the skin</div>
			<div style={{...body, marginTop: 28}}>Sweat evaporates into the air.</div>
			<div style={{...body, marginTop: 35, color: RED}}>Evaporation takes heat from the skin.</div>
		</Box>
		<svg style={{position: 'absolute', inset: 0, width: '100%', height: '100%'}} viewBox="0 0 1920 1080">
			<path d="M980 750 Q1310 795 1700 750" stroke={INK} strokeWidth={12} fill="none" opacity={prog(f, 65, 15)} />
			{[0, 1, 2, 3].map((i) => <g key={i} opacity={prog(f, 100 + i * 32, 14) * (1 - prog(f, 270 + i * 38, 110))} transform={`translate(${1090 + i * 140},715) scale(${1 - 0.85 * prog(f, 270 + i * 38, 110)})`}><path d="M0 -34 C-30 10 -20 29 0 35 C20 29 30 10 0 -34" fill={BLUE} opacity={0.75} /></g>)}
			{[0, 1, 2].map(i => <Arrow key={i} d={`M${1140 + i * 180} 610 Q${1110 + i * 180} 510 ${1170 + i * 180} 450`} at={255 + i * 42} color={RED} width={5} />)}
		</svg>
		<Enter at={440} style={{position: 'absolute', left: 985, top: 845, fontFamily: FONT_HAND, fontSize: 55, color: RED, fontWeight: 700}}>heat leaves with evaporation</Enter>
		<Enter at={560} style={{position: 'absolute', left: 125, top: 810, width: 720, ...body, fontSize: 40}}>Body temperature moves back towards its usual range.</Enter>
		<svg style={{position: 'absolute', inset: 0, width: '100%', height: '100%'}} viewBox="0 0 1920 1080"><Arrow d="M1660 275 Q1320 220 1000 275" at={640} color={BLUE_DARK} width={6} /></svg>
		<Enter at={665} style={{position: 'absolute', left: 1040, top: 315, fontFamily: FONT_HAND, fontSize: 44, fontWeight: 700, color: BLUE_DARK}}>negative feedback reduces the rise</Enter>
	</div>;
};

export const Practice: React.FC = () => {
	const f = useCurrentFrame();
	const reveal = f >= 500;
	return <div style={page}>
		<Head>Your turn: complete the loop</Head>
		<Enter at={30} style={{position: 'absolute', left: 115, top: 250, ...body, width: 1500}}>A runner's body temperature rises. Name the receptor, control centre, effector and response. Why is this negative feedback?</Enter>
		{!reveal && <>
			<Box x={190} y={520} w={1540} h={240} at={45}><div style={{fontFamily: FONT_HAND, fontSize: 62, fontWeight: 700, color: BLUE_DARK, textAlign: 'center', marginTop: 12}}>Try the loop before the answer appears.</div><div style={{fontFamily: FONT_DISPLAY, color: INK_SOFT, textAlign: 'center', fontSize: 35, marginTop: 20}}>Pause if you want longer.</div></Box>
			<div style={{position: 'absolute', right: 172, bottom: 118, fontFamily: FONT_HAND, fontSize: 86, color: AMBER_INK, fontWeight: 700}}>{f >= 135 && f < 435 ? Math.max(1, 10 - Math.floor((f - 135) / 30)) : ''}</div>
		</>}
		{reveal && <>
			<Box x={120} y={470} w={1670} h={255} at={500} border={BLUE}><div style={{...body, fontSize: 40}}>Thermoreceptors detect the rise. The hypothalamus signals sweat glands. Sweat evaporates, taking heat from the skin. Body temperature falls towards its usual range.</div></Box>
			<Enter at={690} style={{position: 'absolute', left: 150, top: 785, fontFamily: FONT_HAND, fontSize: 48, color: RED, fontWeight: 700}}>Classic mistake: <span style={{textDecoration: 'line-through'}}>sweat cools as soon as it appears</span></Enter>
			<Enter at={740} style={{position: 'absolute', left: 150, top: 857, fontFamily: FONT_DISPLAY, fontSize: 35, color: BLUE_DARK, fontWeight: 700}}>Cooling comes from evaporation.</Enter>
		</>}
	</div>;
};

export const KeyNotes: React.FC = () => <div style={page}>
	<Head>Key notes: write in your book</Head>
	<Box x={170} y={300} w={1580} h={540} at={40} border={BLUE}>
		<div style={{...body, fontSize: 48, marginTop: 8}}>Temperature rises → thermoreceptors detect it → hypothalamus signals sweat glands.</div>
		<div style={{...body, fontSize: 48, marginTop: 72}}>Sweat evaporates and removes heat from skin, helping temperature fall.</div>
		<div style={{fontFamily: FONT_HAND, fontSize: 59, color: BLUE_DARK, fontWeight: 700, marginTop: 75}}>Negative feedback reduces the original change.</div>
	</Box>
	<Enter at={165} style={{position: 'absolute', right: 185, bottom: 105, fontFamily: FONT_DISPLAY, fontSize: 30, color: INK_SOFT}}>Pause to copy.</Enter>
</div>;
