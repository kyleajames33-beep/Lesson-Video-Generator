import {useId} from 'react';
import {Easing, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {FONT_DISPLAY, TOK} from '../../../../styles/tokens';
import {DioramaDefs, DioramaPlinth} from '../../diorama';

export type PlantReproductionBoardProps = {
  mode: 'locations' | 'delivery' | 'seed' | 'runner' | 'selfCross';
  /** Scene-local semantic entrance frames. No additional diagram delay. */
  at: Record<string, number>;
};

const GREEN = '#527d3e';
const LEAF = '#8fba67';
const CORAL = '#e69486';
const CREAM = '#fff0cf';
const BROWN = '#8b653f';
const BLUE = TOK.bio1;
const clamp = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};
const ease = Easing.bezier(0.2, 0.7, 0.3, 1);
const MODE_KEYS = {
  locations: ['anther', 'stigma', 'pollenDetail', 'style', 'ovary', 'ovule', 'embryoSac', 'egg'],
  delivery: ['pollination', 'pollenTube', 'spermDelivery', 'fusion', 'zygote'],
  seed: ['zygote', 'embryo', 'seed', 'fruit'],
  runner: ['runner', 'node', 'rootsShoot', 'noFusion', 'independent'],
  selfCross: ['self', 'cross', 'conditionalFusion'],
} as const;

const Text = ({x, y, children, color = TOK.ink, anchor = 'start'}: {
  x: number; y: number; children: React.ReactNode; color?: string; anchor?: 'start' | 'middle' | 'end';
}) => <text x={x} y={y} fontSize={50} fontWeight={650} fill={color} textAnchor={anchor}>{children}</text>;

/** Stable cutaway reference, enlarged from the existing flower motif. */
const Flower = () => <g data-plant-flower>
  <path d="M390 520 L390 446" stroke={GREEN} strokeWidth={16} />
  <path d="M365 372 C230 340 205 175 275 138 C290 230 345 292 374 320Z" fill={CORAL} opacity={0.7} stroke={BROWN} strokeWidth={3} />
  <path d="M415 372 C550 340 575 175 505 138 C490 230 435 292 406 320Z" fill={CORAL} opacity={0.7} stroke={BROWN} strokeWidth={3} />
  <ellipse cx={390} cy={410} rx={108} ry={76} fill={LEAF} stroke={GREEN} strokeWidth={5} />
  <path d="M374 175 L374 339 L406 339 L406 175" fill={LEAF} stroke={GREEN} strokeWidth={4} />
  <ellipse cx={390} cy={164} rx={48} ry={17} fill={GREEN} />
  <path d="M318 371 Q286 287 300 203 M462 371 Q494 287 480 203" fill="none" stroke={BROWN} strokeWidth={7} />
  <ellipse cx={300} cy={186} rx={21} ry={38} fill={TOK.amber} stroke={BROWN} strokeWidth={3} />
  <ellipse cx={480} cy={186} rx={21} ry={38} fill={TOK.amber} stroke={BROWN} strokeWidth={3} />
  <ellipse cx={425} cy={413} rx={30} ry={42} fill={CREAM} stroke={BROWN} strokeWidth={3} />
  <ellipse cx={351} cy={407} rx={23} ry={34} fill={CREAM} stroke={BROWN} strokeWidth={3} />
</g>;

const Leaves = ({x, y, growth = 1}: {x: number; y: number; growth?: number}) => <g transform={`translate(${x},${y}) scale(${growth})`}>
  <path d="M0 0 C-120 -30 -120 -132 -40 -107 C-12 -92 0 -45 0 0Z" fill={LEAF} stroke={GREEN} strokeWidth={5} />
  <path d="M0 0 C120 -30 120 -132 40 -107 C12 -92 0 -45 0 0Z" fill={LEAF} stroke={GREEN} strokeWidth={5} />
  <path d="M0 0 C-36 -97 -24 -159 0 -171 C24 -159 36 -97 0 0Z" fill={GREEN} />
</g>;

const FloweringPlant = ({x}: {x: number}) => <g transform={`translate(${x},0)`}>
  <path d="M0 475 L0 310 M0 365 Q-70 290 -95 205 M0 365 Q70 290 95 205" fill="none" stroke={GREEN} strokeWidth={12} />
  <Leaves x={0} y={415} growth={0.75} />
  {[-95, 95].map(dx => <g key={dx} transform={`translate(${dx},195)`}>
    {[0, 72, 144, 216, 288].map(angle => <ellipse key={angle} cx={0} cy={-27} rx={25} ry={42} transform={`rotate(${angle})`} fill={CORAL} stroke={BROWN} strokeWidth={2} />)}
    <circle r={20} fill={TOK.amber} stroke={BROWN} strokeWidth={3} />
  </g>)}
</g>;

/** Each mode is an explanatory model, not a full flowering-plant life cycle. */
export const PlantReproductionBoard = ({mode, at}: PlantReproductionBoardProps) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const id = 'plant-' + useId().replace(/[^a-zA-Z0-9]/g, '');
  if (!(mode in MODE_KEYS)) throw new Error('Unknown plant reproduction mode.');
  for (const [key, value] of Object.entries(at)) {
    if (!MODE_KEYS[mode].some(k => k === key) || !Number.isInteger(value) || value < 0) {
      throw new Error('Plant cues must be named nonnegative scene-local integer frames: ' + key);
    }
  }
  let previous = -1;
  for (const key of MODE_KEYS[mode]) {
    if (at[key] !== undefined) {
      if (at[key] < previous) throw new Error('Plant event cues must follow the declared botanical sequence.');
      previous = at[key];
    }
  }
  const cue = (key: string) => at[key] ?? Infinity;
  const progress = (key: string, seconds = 0.5, start = cue(key)) => frame < start ? 0 : interpolate(frame, [start, start + seconds * fps], [0, 1], {...clamp, easing: ease});
  const shown = (key: string) => frame >= cue(key);
  const leader = (d: string, key: string) => <path d={d} pathLength={1} fill="none" stroke={BLUE} strokeWidth={4} strokeDasharray={1} strokeDashoffset={1-progress(key)} />;
  let content: React.ReactNode;

  if (mode === 'locations') {
    const nesting = shown('ovary');
    content = <>
      <DioramaPlinth id={id} cx={390} cy={525} rx={135} />
      <Flower />
      {!shown('style') && <g opacity={progress('anther')}><Text x={60} y={75}>Anther</Text>{leader('M190 90 L275 153', 'anther')}</g>}
      <g opacity={progress('stigma')}><Text x={510} y={145}>Stigma</Text>{leader('M510 160 L439 164', 'stigma')}</g>
      <g opacity={progress('style')}><Text x={72} y={305}>Style</Text>{leader('M210 291 L367 285', 'style')}</g>
      <g opacity={progress('ovary')}><Text x={525} y={442}>Ovary</Text>{leader('M520 427 L491 414', 'ovary')}</g>
      {!nesting && <g opacity={progress('pollenDetail')} data-plant-pollen-detail>
        <Text x={940} y={110}>Pollen grain</Text>
        <circle cx={1080} cy={295} r={115} fill={CREAM} stroke={BROWN} strokeWidth={7} />
        {[0, 1].map(i => <ellipse key={i} cx={1050+i*63} cy={290} rx={18} ry={31} fill={BLUE} />)}
        <Text x={1300} y={310} color={BLUE}>Sperm cells</Text>{leader('M1280 295 L1139 292', 'pollenDetail')}
        <Text x={850} y={500}>Pollen and sperm are different.</Text>
      </g>}
      {nesting && <g opacity={progress('ovary')} data-plant-nested-locations>
        <rect x={825} y={45} width={845} height={510} rx={110} fill="#ecf3e4" stroke={GREEN} strokeWidth={5} />
        <Text x={870} y={120}>Ovary</Text>
        <g opacity={progress('ovule')}>
          <ellipse cx={1095} cy={340} rx={190} ry={145} fill={CREAM} stroke={BROWN} strokeWidth={5} data-plant-ovule />
          <Text x={1370} y={232}>Ovule</Text>{leader('M1350 222 L1249 261', 'ovule')}
          <g opacity={progress('embryoSac')}>
            <ellipse cx={1095} cy={346} rx={112} ry={84} fill={TOK.bio3} stroke={BLUE} strokeWidth={4} data-plant-embryo-sac />
            <Text x={1370} y={335}>Embryo sac</Text>{leader('M1350 324 L1210 345', 'embryoSac')}
            <g opacity={progress('egg')}>
              <circle cx={1095} cy={355} r={32} fill={CORAL} stroke={BROWN} strokeWidth={4} data-plant-egg />
              <Text x={1370} y={442}>Egg cell</Text>{leader('M1350 428 L1130 367', 'egg')}
            </g>
          </g>
        </g>
      </g>}
    </>;
  } else if (mode === 'delivery') {
    const travel = progress('pollination', 1.1);
    const delivery = progress('spermDelivery', 1.1);
    const fuse = progress('fusion', 0.9);
    const formed = frame >= Math.max(cue('zygote'), cue('fusion') + 0.9 * fps);
    content = <>
      <Flower />
      <g opacity={progress('pollination')}>
        <Text x={45} y={70}>Pollen reaches stigma</Text>
        <circle cx={300+90*travel} cy={146-12*travel-Math.sin(travel*Math.PI)*55} r={16} fill={TOK.amber} stroke={BROWN} strokeWidth={3} data-plant-stigma-pollen />
      </g>
      <path d="M390 146 C398 260 375 352 420 394" pathLength={1} stroke={BLUE} strokeWidth={8} fill="none" strokeDasharray={1} strokeDashoffset={1-progress('pollenTube',1.4)} data-plant-tube />
      <g opacity={progress('pollenTube')}>
        <Text x={45} y={590}>Pollen tube: a route</Text>
        <ellipse cx={1210} cy={324} rx={405} ry={230} fill={CREAM} stroke={BROWN} strokeWidth={5} data-plant-ovule />
        <Text x={975} y={70}>Magnified ovule</Text>
        <ellipse cx={1250} cy={345} rx={198} ry={140} fill={TOK.bio3} stroke={BLUE} strokeWidth={4} data-plant-embryo-sac />
        <Text x={1170} y={190}>Embryo sac</Text>
        <path d="M816 323 C922 291 990 318 1080 342" fill="none" stroke={BLUE} strokeWidth={18} pathLength={1} strokeDasharray={1} strokeDashoffset={1-progress('pollenTube',1.4)} />
        <circle cx={1280} cy={360} r={formed ? 48 : 42} fill={CORAL} stroke={formed ? BLUE : BROWN} strokeWidth={formed ? 7 : 4} data-plant-fusion-cell={formed ? 'zygote' : 'egg'} />
        <Text x={1280} y={285} anchor="middle">{formed ? 'Zygote' : 'Egg cell'}</Text>
        <path d="M1280 295 L1280 304" fill="none" stroke={BLUE} strokeWidth={4} />
        {!formed && <g opacity={progress('spermDelivery')*(1-fuse)}>
          <ellipse cx={860+270*delivery+110*fuse} cy={323+37*delivery} rx={18} ry={27} fill={BLUE} data-plant-travelling-sperm />
          <Text x={550} y={510} color={BLUE}>Sperm cell</Text>
          <path d={`M820 491 L${835+270*delivery+110*fuse} ${323+37*delivery}`} fill="none" stroke={BLUE} strokeWidth={4} />
        </g>}
        <g opacity={progress('fusion')}><Text x={900} y={590}>{formed ? 'Fusion forms a zygote.' : 'Sperm joins egg.'}</Text></g>
      </g>
    </>;
  } else if (mode === 'seed') {
    const embryo = progress('embryo', 1.1);
    const seed = shown('seed');
    content = <>
      <g opacity={progress('zygote')}>
        <ellipse cx={550} cy={337} rx={184} ry={218} fill={CREAM} stroke={seed ? BROWN : GREEN} strokeWidth={seed ? 12 : 6} data-plant-persistent-envelope={seed ? 'seed' : 'ovule'} />
        <Text x={550} y={90} anchor="middle">{seed ? 'Seed' : 'Ovule'}</Text>
        <g opacity={1-embryo}>
          <circle cx={550} cy={340} r={42} fill={CORAL} stroke={BLUE} strokeWidth={6} />
          <Text x={85} y={350}>Zygote</Text>{leader('M250 334 L505 338', 'zygote')}
        </g>
        <g opacity={Math.sin(embryo*Math.PI)} data-plant-dividing-cells>
          {[[-19,-19],[19,-19],[-19,19],[19,19]].map(([dx,dy],i)=><circle key={i} cx={550+dx} cy={340+dy} r={23} fill={CORAL} stroke={BLUE} strokeWidth={4} />)}
        </g>
        <g opacity={Math.max(0,2*embryo-1)} data-plant-contained-embryo>
          <path d="M548 397 Q584 340 552 302 Q502 270 476 304 Q470 345 532 350 Q585 352 613 319 Q631 275 583 276 Q550 278 552 315" fill={LEAF} stroke={GREEN} strokeWidth={9} />
          <Text x={778} y={360}>Embryo</Text>{leader('M761 344 L633 330', 'embryo')}
        </g>
        <g opacity={progress('seed')}>
          <Text x={70} y={180}>Seed coat</Text>{leader('M300 164 L406 217', 'seed')}
          <Text x={60} y={588}>Stored resources</Text>{leader('M480 573 L480 452', 'seed')}
        </g>
      </g>
      <g opacity={progress('fruit')}>
        <Text x={1050} y={76}>Ovary usually becomes</Text><Text x={1100} y={132}>fruit around seeds</Text>
        <ellipse cx={1355} cy={350} rx={200} ry={196} fill={CORAL} stroke={BROWN} strokeWidth={6} />
        {[1280,1425].map(x=><g key={x}><ellipse cx={x} cy={350} rx={45} ry={69} fill={CREAM} stroke={BROWN} strokeWidth={7} /><path d={`M${x-8} 376 Q${x+17} 340 ${x} 326`} stroke={GREEN} strokeWidth={9} fill="none" /></g>)}
        <Text x={1355} y={590} anchor="middle">Seeds contain embryos.</Text>
      </g>
    </>;
  } else if (mode === 'runner') {
    const growth = progress('rootsShoot', 1.4);
    content = <>
      <path d="M50 459 L1670 459 L1670 610 L50 610Z" fill="#efdfc7" />
      <path d="M50 459 L1670 459" stroke={BROWN} strokeWidth={5} />
      <path d="M300 450 L300 375" stroke={GREEN} strokeWidth={16} /><Leaves x={300} y={383} />
      <Text x={100} y={95}>Parent plant</Text>
      <path d="M300 450 C550 415 840 471 1110 450" fill="none" stroke={GREEN} strokeWidth={13} pathLength={1} strokeDasharray={1} strokeDashoffset={1-progress('runner',1.4)} data-plant-runner-stem />
      <g opacity={progress('runner')}><Text x={500} y={370}>Runner = stem</Text>{leader('M735 386 L745 444', 'runner')}</g>
      <g opacity={progress('node')}>
        <circle cx={1110} cy={450} r={16} fill={BROWN} />
        <path d="M1110 448 Q1080 408 1104 410 Q1130 417 1110 448Z" fill={LEAF} stroke={GREEN} strokeWidth={3} />
        <Text x={780} y={192}>Node: leaf or bud site</Text>{leader('M1045 210 L1103 431', 'node')}
      </g>
      <g opacity={progress('rootsShoot')} data-plant-rooted-node>
        <path d="M1110 451 Q1064 512 1020 561 M1110 451 Q1110 512 1140 581 M1110 451 Q1180 518 1225 551" fill="none" stroke={BROWN} strokeWidth={7} pathLength={1} strokeDasharray={1} strokeDashoffset={1-growth} />
        <path d="M1110 450 L1110 321" stroke={GREEN} strokeWidth={12} pathLength={1} strokeDasharray={1} strokeDashoffset={1-growth} />
        <Leaves x={1110} y={329} growth={growth*0.7} />
        <Text x={1300} y={346}>Shoot</Text><Text x={1300} y={545}>Roots</Text>
      </g>
      <g opacity={progress('noFusion')}><Text x={1260} y={92}>No gamete fusion</Text></g>
      <g opacity={progress('independent',0.5,Math.max(cue('independent'),cue('rootsShoot')+1.4*fps))}><Text x={1210} y={604}>Can grow alone</Text></g>
    </>;
  } else {
    const cross = shown('cross');
    const key = cross ? 'cross' : 'self';
    const travel = progress(key,1.4);
    content = <g opacity={progress('self')}>
      <Text x={100} y={85}>{cross ? 'Cross-pollination: different plants' : 'Self-pollination: same plant'}</Text>
      <FloweringPlant x={440} />
      {cross && <FloweringPlant x={1240} />}
      <path d={cross ? 'M535 170 Q840 115 1145 170' : 'M345 170 Q440 115 535 170'} fill="none" stroke={BLUE} strokeWidth={5} pathLength={1} strokeDasharray={1} strokeDashoffset={1-travel} />
      <circle cx={cross ? 535+610*travel : 345+190*travel} cy={170-110*travel*(1-travel)} r={16} fill={TOK.amber} stroke={BROWN} strokeWidth={3} />
      <g opacity={progress('conditionalFusion')}>
        <Text x={850} y={558} anchor="middle">If compatible pollen leads to sperm-egg fusion:</Text>
        <Text x={850} y={614} anchor="middle" color={BLUE}>sexual reproduction through either route.</Text>
      </g>
    </g>;
  }
  return <svg viewBox="0 0 1720 620" role="img" aria-label={
    mode === 'locations' ? 'Flower locations: anther and stigma, then ovary containing ovule, embryo sac and egg. Pollen grain differs from sperm cells.' :
    mode === 'delivery' ? 'Pollen transfer, tube-mediated sperm delivery and sperm-egg fusion are separate. The model follows embryo-forming fusion only.' :
    mode === 'seed' ? 'Zygote develops into embryo inside the surrounding ovule that develops into seed. Ovary usually develops into fruit. Embryo-forming focus, not the complete life cycle.' :
    mode === 'runner' ? 'Strawberry runner is a stem. Roots and shoot develop at a suitable node before a new rooted plant can become independent. No gamete fusion.' :
    'Self and cross refer to pollen source and destination. Compatible pollen followed by sperm-egg fusion can lead to sexual reproduction.'
  } data-plant-reproduction-mode={mode} style={{width:'100%',display:'block',fontFamily:FONT_DISPLAY,overflow:'visible'}}>
    <DioramaDefs id={id} />
    {content}
  </svg>;
};
