// Scene templates for HSC Science video system
// Designed at 1920x1080, scaled to fit artboards via CSS transform.
// Each scene is a self-contained component with motion notes inline.

const TOK = {
  bg: '#0a0f0d',           // near-black, very subtly green-tinted
  bgLift: '#0f1614',       // surface
  ink: '#e8efe9',          // primary text
  inkDim: '#8a9590',       // secondary text
  inkMute: '#4a554f',      // tertiary
  rule: 'rgba(232,239,233,0.08)',
  // Subject palette — Chemistry
  chem1: '#1f8a6f',        // emerald (primary)
  chem2: '#6fd9b8',         // light emerald
  chem3: '#0d3a2f',        // deep emerald (fills)
  // Universal accent
  amber: '#f0a830',
  amberDim: '#7a5418',
  // Other subjects (locked in for system completeness)
  bio:  '#3a8ad9',
  phys: '#e07a3a',
  math: '#9b6dd9',
};

const FONT_DISPLAY = '"Inter Tight", -apple-system, system-ui, sans-serif';
const FONT_MONO = '"JetBrains Mono", ui-monospace, monospace';

// Inject Google Fonts once
if (typeof document !== 'undefined' && !document.getElementById('hsc-fonts')) {
  const link = document.createElement('link');
  link.id = 'hsc-fonts';
  link.rel = 'stylesheet';
  link.href = 'https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;700&display=swap';
  document.head.appendChild(link);
}

// ─── Frame: 1920x1080 canvas scaled to fit parent artboard ───
function Frame({ children, bg = TOK.bg }) {
  const ref = React.useRef(null);
  const [scale, setScale] = React.useState(1);
  React.useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const fit = () => {
      const p = el.parentElement;
      if (!p) return;
      const r = p.getBoundingClientRect();
      setScale(Math.min(r.width / 1920, r.height / 1080));
    };
    fit();
    const ro = new ResizeObserver(fit);
    if (el.parentElement) ro.observe(el.parentElement);
    return () => ro.disconnect();
  }, []);
  return (
    <div ref={ref} style={{
      width: 1920, height: 1080, background: bg,
      transform: `scale(${scale})`, transformOrigin: 'top left',
      position: 'relative', overflow: 'hidden',
      fontFamily: FONT_DISPLAY, color: TOK.ink,
    }}>{children}</div>
  );
}

// ─── Reusable: subtle grain / noise overlay (cinematic feel) ───
function Grain() {
  return (
    <div style={{
      position: 'absolute', inset: 0, pointerEvents: 'none',
      opacity: 0.04, mixBlendMode: 'overlay',
      backgroundImage: 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'200\' height=\'200\'><filter id=\'n\'><feTurbulence baseFrequency=\'0.9\' numOctaves=\'2\'/></filter><rect width=\'200\' height=\'200\' filter=\'url(%23n)\' opacity=\'0.6\'/></svg>")',
    }} />
  );
}

// ─── Reusable: chrome — top brand row + bottom syllabus row ───
function Chrome({ subject = 'CHEMISTRY', module = 'MODULE 3 · REACTIVE CHEMISTRY', dot = '3.2', total = '12', topic, hideTop, hideBottom }) {
  return (
    <>
      {!hideTop && (
        <div style={{
          position: 'absolute', top: 48, left: 64, right: 64,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          fontFamily: FONT_MONO, fontSize: 20, letterSpacing: '0.12em',
          color: TOK.inkDim, textTransform: 'uppercase',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <span style={{ width: 10, height: 10, background: TOK.chem1, borderRadius: 2, display: 'inline-block' }} />
            <span style={{ color: TOK.ink, fontWeight: 600 }}>{subject}</span>
            <span style={{ color: TOK.rule }}>/</span>
            <span>{module}</span>
          </div>
          <div>HSC · YEAR 11</div>
        </div>
      )}
      {!hideBottom && (
        <div style={{
          position: 'absolute', bottom: 48, left: 64, right: 64,
          display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
          fontFamily: FONT_MONO, fontSize: 18, letterSpacing: '0.08em',
          color: TOK.inkMute, textTransform: 'uppercase',
        }}>
          <div>SYLLABUS · INQ-{dot}</div>
          {topic && <div style={{ color: TOK.inkDim }}>{topic}</div>}
          <div>{dot.padStart(4,'0')} / {total.padStart(4,'0')}</div>
        </div>
      )}
    </>
  );
}

// ═══════════════════════════════════════════════════════════
// SCENE 01 — HOOK / COLD OPEN
// Big provocative question. Type as hero. Single visual moment.
// Motion: question fades in word-by-word; iron sample placeholder
// rotates slowly; rust spreads as orange dust over 4s.
// ═══════════════════════════════════════════════════════════
function SceneHook() {
  return (
    <Frame>
      <Chrome hideBottom topic="" />
      {/* Vignette */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.6) 100%)',
      }} />

      {/* Centered iron sample placeholder */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 380, height: 380, borderRadius: '50%',
        background: `radial-gradient(circle at 35% 30%, #6a6660 0%, #2a2826 60%, #0a0a0a 100%)`,
        boxShadow: `0 0 120px rgba(240,168,48,0.15), inset -40px -40px 100px rgba(0,0,0,0.6)`,
      }}>
        {/* rust patches */}
        <div style={{
          position: 'absolute', inset: 0, borderRadius: '50%',
          background: `radial-gradient(circle at 70% 70%, ${TOK.amber}90 0%, transparent 25%),
                       radial-gradient(circle at 25% 75%, #c0541e80 0%, transparent 18%),
                       radial-gradient(circle at 60% 25%, ${TOK.amberDim}80 0%, transparent 15%)`,
          mixBlendMode: 'screen', opacity: 0.7,
        }} />
        <div style={{
          position: 'absolute', bottom: -28, left: '50%', transform: 'translateX(-50%)',
          fontFamily: FONT_MONO, fontSize: 14, color: TOK.inkMute, letterSpacing: '0.2em',
        }}>[ Fe SAMPLE · 24h IN MOIST AIR ]</div>
      </div>

      {/* Hook question, bottom-left, hero scale */}
      <div style={{
        position: 'absolute', left: 64, bottom: 140, right: 64,
      }}>
        <div style={{ fontFamily: FONT_MONO, fontSize: 18, color: TOK.amber, letterSpacing: '0.2em', marginBottom: 24 }}>
          ↓  A QUESTION
        </div>
        <div style={{
          fontSize: 132, fontWeight: 800, lineHeight: 0.95,
          letterSpacing: '-0.03em', textWrap: 'balance',
          color: TOK.ink,
        }}>
          Why does iron <span style={{ color: TOK.amber, fontStyle: 'italic', fontWeight: 700 }}>rust</span><br/>
          but gold <span style={{ color: TOK.chem2 }}>doesn't?</span>
        </div>
      </div>

      <Grain />
      {/* MOTION NOTE: words stagger-fade-in 60ms apart; sphere parallax-rotates
          on x-axis 3deg over 8s; rust patches scale 0→1 with elastic ease */}
    </Frame>
  );
}

// ═══════════════════════════════════════════════════════════
// SCENE 02 — TITLE CARD
// Big topic, syllabus dot, episode number. Confident, spacious.
// Motion: title slides up, underline draws L→R, chrome fades in.
// ═══════════════════════════════════════════════════════════
function SceneTitle() {
  return (
    <Frame>
      <Chrome />
      <div style={{
        position: 'absolute', top: '50%', left: 64, right: 64,
        transform: 'translateY(-50%)',
      }}>
        <div style={{
          fontFamily: FONT_MONO, fontSize: 22, letterSpacing: '0.2em',
          color: TOK.chem2, marginBottom: 32,
        }}>EPISODE · 04</div>
        <div style={{
          fontSize: 220, fontWeight: 800, lineHeight: 0.92,
          letterSpacing: '-0.04em',
        }}>
          <div>Reactivity</div>
          <div style={{ color: TOK.chem1 }}>of metals.</div>
        </div>
        <div style={{
          marginTop: 48, height: 4, width: 280,
          background: TOK.amber, borderRadius: 2,
        }} />
        <div style={{
          marginTop: 36, fontSize: 32, color: TOK.inkDim, maxWidth: 1100,
          lineHeight: 1.4, fontWeight: 400,
        }}>
          Why some metals tarnish in seconds and others survive thousands of years
          buried in the earth.
        </div>
      </div>
    </Frame>
  );
}

// ═══════════════════════════════════════════════════════════
// SCENE 03 — KEY TERM REVEAL
// Big word + etymology + plain-English definition. Glossary moment.
// Motion: term scales up from 0.9, definition types in.
// ═══════════════════════════════════════════════════════════
function SceneKeyTerm() {
  return (
    <Frame>
      <Chrome topic="KEY TERM" />
      {/* Left rail card label */}
      <div style={{
        position: 'absolute', top: 240, left: 64,
        fontFamily: FONT_MONO, fontSize: 22, color: TOK.amber,
        letterSpacing: '0.2em',
      }}>DEFINITION · 01 of 03</div>

      <div style={{
        position: 'absolute', top: 320, left: 64, right: 64,
      }}>
        <div style={{
          fontSize: 280, fontWeight: 800, lineHeight: 1,
          letterSpacing: '-0.04em', color: TOK.ink,
        }}>
          Oxidation<span style={{ color: TOK.chem1 }}>.</span>
        </div>
        <div style={{
          fontFamily: FONT_MONO, fontSize: 22, color: TOK.inkMute,
          marginTop: 24, letterSpacing: '0.05em',
        }}>
          /ˌɒk.sɪˈdeɪ.ʃən/  ·  noun  ·  from Greek <em style={{color:TOK.chem2}}>oxys</em> (sharp, acidic)
        </div>
      </div>

      <div style={{
        position: 'absolute', bottom: 180, left: 64, right: 800,
      }}>
        <div style={{ height: 2, background: TOK.rule, marginBottom: 32 }} />
        <div style={{ fontSize: 44, lineHeight: 1.3, fontWeight: 400, color: TOK.ink, textWrap: 'pretty' }}>
          A chemical reaction where an atom <span style={{ color: TOK.amber, fontWeight: 600 }}>loses electrons</span> —
          almost always to oxygen, but not always.
        </div>
      </div>

      {/* Right side: mnemonic */}
      <div style={{
        position: 'absolute', bottom: 180, right: 64, width: 640,
        padding: 40, border: `1px solid ${TOK.rule}`, borderRadius: 8,
        background: 'rgba(31,138,111,0.05)',
      }}>
        <div style={{ fontFamily: FONT_MONO, fontSize: 18, color: TOK.chem2, letterSpacing: '0.15em', marginBottom: 16 }}>
          REMEMBER →
        </div>
        <div style={{ fontSize: 56, fontWeight: 700, lineHeight: 1.05 }}>
          <span style={{ color: TOK.amber }}>OIL</span> <span style={{ color: TOK.inkDim, fontSize: 32, fontWeight: 400 }}>—</span> Oxidation Is Loss
        </div>
        <div style={{ fontSize: 56, fontWeight: 700, lineHeight: 1.05, marginTop: 12 }}>
          <span style={{ color: TOK.chem2 }}>RIG</span> <span style={{ color: TOK.inkDim, fontSize: 32, fontWeight: 400 }}>—</span> Reduction Is Gain
        </div>
      </div>
    </Frame>
  );
}

// ═══════════════════════════════════════════════════════════
// SCENE 04 — FORMULA / EQUATION BREAKDOWN
// Equation centered, each part annotated with hand-drawn brackets.
// Motion: equation appears element-by-element; arrows/labels draw in stagger.
// ═══════════════════════════════════════════════════════════
function SceneFormula() {
  const Term = ({ children, color = TOK.ink, label, sub }) => (
    <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
      <div style={{ fontSize: 160, fontWeight: 700, color, lineHeight: 1, fontFamily: FONT_MONO }}>{children}</div>
      {label && (
        <div style={{ position: 'absolute', top: '100%', marginTop: 24, width: 240, textAlign: 'center' }}>
          <div style={{ width: 1, height: 40, background: color, margin: '0 auto 8px' }} />
          <div style={{ fontFamily: FONT_MONO, fontSize: 16, color, letterSpacing: '0.1em' }}>{label}</div>
          {sub && <div style={{ fontSize: 22, color: TOK.inkDim, marginTop: 6, fontWeight: 400 }}>{sub}</div>}
        </div>
      )}
    </div>
  );
  return (
    <Frame>
      <Chrome topic="THE REACTION" />
      <div style={{
        position: 'absolute', top: 200, left: 64, right: 64,
      }}>
        <div style={{ fontFamily: FONT_MONO, fontSize: 22, color: TOK.amber, letterSpacing: '0.2em' }}>
          ↳ THE RUSTING EQUATION
        </div>
        <div style={{ fontSize: 56, fontWeight: 600, marginTop: 16, color: TOK.inkDim, lineHeight: 1.2, maxWidth: 1400 }}>
          What's actually happening when iron meets oxygen and water?
        </div>
      </div>

      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -30%)',
        display: 'flex', alignItems: 'center', gap: 36,
      }}>
        <Term color={TOK.chem2} label="IRON" sub="metal, solid">4Fe</Term>
        <div style={{ fontSize: 100, color: TOK.inkDim, fontFamily: FONT_MONO }}>+</div>
        <Term color={TOK.amber} label="OXYGEN" sub="from the air">3O₂</Term>
        <div style={{ fontSize: 100, color: TOK.inkDim, fontFamily: FONT_MONO }}>+</div>
        <Term color={TOK.bio} label="WATER" sub="catalyst, not consumed">6H₂O</Term>
        <div style={{ fontSize: 100, color: TOK.amber, fontFamily: FONT_MONO, fontWeight: 700 }}>→</div>
        <Term color={TOK.amber} label="HYDRATED RUST" sub="iron(III) oxide">4Fe(OH)₃</Term>
      </div>

      <div style={{
        position: 'absolute', bottom: 140, left: 64, right: 64, textAlign: 'center',
        fontSize: 28, color: TOK.inkDim, fontStyle: 'italic',
      }}>
        Read left to right: reactants <span style={{ color: TOK.amber }}>→</span> products. Atoms aren't created or destroyed — only rearranged.
      </div>
    </Frame>
  );
}

// ═══════════════════════════════════════════════════════════
// SCENE 05 — STEP-BY-STEP PROCESS
// Numbered horizontal flow. Each step is a card with a placeholder
// diagram + caption.
// Motion: cards slide in left→right, 200ms stagger; arrow fills.
// ═══════════════════════════════════════════════════════════
function SceneProcess() {
  const steps = [
    { n: '01', t: 'Water touches iron', d: 'A droplet of moisture lands on the metal surface. It dissolves CO₂ from the air, becoming weakly acidic.' },
    { n: '02', t: 'Iron loses electrons', d: 'Iron atoms at the surface release 2 electrons each: Fe → Fe²⁺ + 2e⁻. They dissolve into the droplet.' },
    { n: '03', t: 'Oxygen accepts them', d: 'On the droplet\'s edge, O₂ from the air picks up those electrons and combines with water to form OH⁻ ions.' },
    { n: '04', t: 'Rust precipitates', d: 'Fe²⁺ and OH⁻ meet, oxidise further with more O₂, and form solid Fe(OH)₃ — visible orange rust.' },
  ];
  return (
    <Frame>
      <Chrome topic="THE PROCESS" />
      <div style={{ position: 'absolute', top: 160, left: 64, right: 64 }}>
        <div style={{ fontFamily: FONT_MONO, fontSize: 22, color: TOK.amber, letterSpacing: '0.2em' }}>
          STEP-BY-STEP · 4 STAGES
        </div>
        <div style={{ fontSize: 80, fontWeight: 700, marginTop: 16, lineHeight: 1, letterSpacing: '-0.03em' }}>
          How rust actually forms.
        </div>
      </div>

      <div style={{
        position: 'absolute', top: 460, left: 64, right: 64,
        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 28,
      }}>
        {steps.map((s, i) => (
          <div key={s.n} style={{
            background: TOK.bgLift, borderRadius: 12, padding: 32,
            border: `1px solid ${TOK.rule}`, position: 'relative',
            display: 'flex', flexDirection: 'column', height: 480,
          }}>
            {/* placeholder diagram */}
            <div style={{
              height: 180, borderRadius: 8, marginBottom: 24,
              background: `repeating-linear-gradient(45deg, ${TOK.bg}, ${TOK.bg} 8px, ${TOK.bgLift} 8px, ${TOK.bgLift} 16px)`,
              border: `1px dashed ${TOK.rule}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: FONT_MONO, fontSize: 14, color: TOK.inkMute, letterSpacing: '0.15em',
            }}>[ DIAGRAM · STEP {s.n} ]</div>
            <div style={{ fontFamily: FONT_MONO, fontSize: 20, color: TOK.chem2, letterSpacing: '0.1em', marginBottom: 12 }}>
              {s.n}
            </div>
            <div style={{ fontSize: 32, fontWeight: 700, lineHeight: 1.1, marginBottom: 14 }}>{s.t}</div>
            <div style={{ fontSize: 18, color: TOK.inkDim, lineHeight: 1.5 }}>{s.d}</div>
            {i < steps.length - 1 && (
              <div style={{
                position: 'absolute', right: -22, top: '40%',
                color: TOK.amber, fontSize: 28, fontFamily: FONT_MONO,
              }}>→</div>
            )}
          </div>
        ))}
      </div>
    </Frame>
  );
}

// ═══════════════════════════════════════════════════════════
// SCENE 06 — DIAGRAM WITH CALLOUTS
// Big central diagram (placeholder) + 4 numbered callouts with leader lines.
// Motion: diagram fades in; callouts pop in one-by-one with leader lines drawing.
// ═══════════════════════════════════════════════════════════
function SceneDiagram() {
  const Callout = ({ n, t, d, x, y, side = 'right' }) => (
    <div style={{ position: 'absolute', left: x, top: y, width: 360 }}>
      <div style={{
        fontFamily: FONT_MONO, fontSize: 18, color: TOK.amber,
        letterSpacing: '0.15em', marginBottom: 8,
      }}>◆ {n}</div>
      <div style={{ fontSize: 28, fontWeight: 700, lineHeight: 1.15, marginBottom: 8 }}>{t}</div>
      <div style={{ fontSize: 18, color: TOK.inkDim, lineHeight: 1.45 }}>{d}</div>
    </div>
  );
  return (
    <Frame>
      <Chrome topic="ANATOMY OF A RUST DROPLET" />
      <div style={{ position: 'absolute', top: 160, left: 64 }}>
        <div style={{ fontFamily: FONT_MONO, fontSize: 22, color: TOK.amber, letterSpacing: '0.2em' }}>
          DIAGRAM · CROSS-SECTION
        </div>
        <div style={{ fontSize: 64, fontWeight: 700, marginTop: 12, lineHeight: 1 }}>Inside a single droplet.</div>
      </div>

      {/* central diagram placeholder */}
      <div style={{
        position: 'absolute', top: 360, left: '50%', transform: 'translateX(-50%)',
        width: 640, height: 520, borderRadius: 16,
        background: `radial-gradient(ellipse at center, ${TOK.chem3}80 0%, ${TOK.bgLift} 70%)`,
        border: `1px dashed ${TOK.rule}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: FONT_MONO, fontSize: 16, color: TOK.inkMute, letterSpacing: '0.2em',
      }}>[ ELECTROCHEMICAL CELL DIAGRAM ]</div>

      {/* leader lines (visual stand-ins) */}
      <svg style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} viewBox="0 0 1920 1080">
        <line x1="490" y1="500" x2="640" y2="450" stroke={TOK.amber} strokeWidth="1.5" />
        <line x1="490" y1="800" x2="640" y2="780" stroke={TOK.amber} strokeWidth="1.5" />
        <line x1="1430" y1="500" x2="1280" y2="500" stroke={TOK.amber} strokeWidth="1.5" />
        <line x1="1430" y1="800" x2="1280" y2="780" stroke={TOK.amber} strokeWidth="1.5" />
      </svg>

      <Callout n="01" t="Anodic region" d="Iron loses electrons here. The metal slowly dissolves into the droplet as Fe²⁺ ions." x={120} y={460} />
      <Callout n="02" t="Cathodic edge" d="Where the droplet meets air, O₂ accepts electrons travelling through the iron." x={120} y={760} />
      <Callout n="03" t="Electron flow" d="Electrons travel through the metal itself — iron is a conductor. No wire needed." x={1450} y={460} />
      <Callout n="04" t="Ion bridge" d="The droplet's water completes the circuit, carrying ions between the two regions." x={1450} y={760} />
    </Frame>
  );
}

// ═══════════════════════════════════════════════════════════
// SCENE 07 — COMPARISON (this vs that)
// Split screen, two subjects, properties stack.
// Motion: divider draws down; each row populates left then right, stagger.
// ═══════════════════════════════════════════════════════════
function SceneCompare() {
  const rows = [
    ['Reactivity', 'High', 'Almost zero'],
    ['Position in series', 'Mid-table', 'Bottom (noble)'],
    ['Reacts with O₂?', 'Yes — readily', 'No'],
    ['Reacts with acid?', 'Yes', 'No'],
    ['Found in nature as', 'Ore (Fe₂O₃)', 'Pure metal (Au)'],
    ['Cost / kg', '$0.10', '$80,000'],
  ];
  return (
    <Frame>
      <Chrome topic="WHY THE DIFFERENCE?" />
      <div style={{ position: 'absolute', top: 160, left: 64, right: 64 }}>
        <div style={{ fontFamily: FONT_MONO, fontSize: 22, color: TOK.amber, letterSpacing: '0.2em' }}>
          COMPARISON · TWO METALS
        </div>
        <div style={{ fontSize: 84, fontWeight: 700, marginTop: 16, lineHeight: 0.95, letterSpacing: '-0.03em' }}>
          Iron <span style={{ color: TOK.inkMute, fontWeight: 400 }}>vs</span> Gold.
        </div>
      </div>

      {/* headers */}
      <div style={{
        position: 'absolute', top: 410, left: 64, right: 64,
        display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 0,
        borderBottom: `1px solid ${TOK.rule}`, paddingBottom: 24,
      }}>
        <div style={{ fontFamily: FONT_MONO, fontSize: 18, color: TOK.inkMute, letterSpacing: '0.2em' }}>PROPERTY</div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 16 }}>
          <div style={{ width: 16, height: 16, background: TOK.amber, borderRadius: 3 }} />
          <div style={{ fontSize: 56, fontWeight: 700, color: TOK.amber }}>Iron</div>
          <div style={{ fontFamily: FONT_MONO, fontSize: 22, color: TOK.inkMute }}>Fe · 26</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 16 }}>
          <div style={{ width: 16, height: 16, background: TOK.chem2, borderRadius: 3 }} />
          <div style={{ fontSize: 56, fontWeight: 700, color: TOK.chem2 }}>Gold</div>
          <div style={{ fontFamily: FONT_MONO, fontSize: 22, color: TOK.inkMute }}>Au · 79</div>
        </div>
      </div>

      {/* rows */}
      <div style={{ position: 'absolute', top: 510, left: 64, right: 64 }}>
        {rows.map((r, i) => (
          <div key={i} style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr 1fr',
            padding: '24px 0', borderBottom: `1px solid ${TOK.rule}`,
            alignItems: 'center',
          }}>
            <div style={{ fontSize: 28, color: TOK.inkDim }}>{r[0]}</div>
            <div style={{ fontSize: 32, color: TOK.ink, fontWeight: 600 }}>{r[1]}</div>
            <div style={{ fontSize: 32, color: TOK.ink, fontWeight: 600 }}>{r[2]}</div>
          </div>
        ))}
      </div>
    </Frame>
  );
}

// ═══════════════════════════════════════════════════════════
// SCENE 08 — RECAP / END CARD
// 3 takeaways + next-up card. Calm, summarising.
// Motion: takeaways tick in 1-2-3; next-up card slides up from bottom.
// ═══════════════════════════════════════════════════════════
function SceneRecap() {
  const takeaways = [
    { n: '01', t: 'Rust is oxidation', d: 'Iron loses electrons to oxygen. Always.' },
    { n: '02', t: 'Water is the catalyst', d: 'No moisture, no rust. That\'s why deserts preserve iron.' },
    { n: '03', t: 'Reactivity series predicts it', d: 'Where a metal sits on the series tells you if it will rust at all.' },
  ];
  return (
    <Frame>
      <Chrome topic="THE RECAP" />
      <div style={{ position: 'absolute', top: 140, left: 64 }}>
        <div style={{ fontFamily: FONT_MONO, fontSize: 22, color: TOK.amber, letterSpacing: '0.2em' }}>
          ◆ THREE THINGS TO REMEMBER
        </div>
        <div style={{ fontSize: 96, fontWeight: 800, marginTop: 16, lineHeight: 0.95, letterSpacing: '-0.04em' }}>
          The whole<br/>video, in <span style={{ color: TOK.chem1 }}>30 seconds</span>.
        </div>
      </div>

      <div style={{
        position: 'absolute', top: 470, left: 64, right: 800,
        display: 'flex', flexDirection: 'column', gap: 28,
      }}>
        {takeaways.map((t) => (
          <div key={t.n} style={{ display: 'flex', gap: 28, alignItems: 'flex-start' }}>
            <div style={{
              fontFamily: FONT_MONO, fontSize: 28, color: TOK.amber,
              padding: '6px 14px', border: `1px solid ${TOK.amber}`, borderRadius: 4,
              flexShrink: 0,
            }}>{t.n}</div>
            <div>
              <div style={{ fontSize: 40, fontWeight: 700, lineHeight: 1.1, marginBottom: 8 }}>{t.t}</div>
              <div style={{ fontSize: 24, color: TOK.inkDim, lineHeight: 1.4 }}>{t.d}</div>
            </div>
          </div>
        ))}
      </div>

      {/* next-up card */}
      <div style={{
        position: 'absolute', right: 64, top: 360, width: 660,
        background: TOK.bgLift, border: `1px solid ${TOK.chem1}`, borderRadius: 16,
        padding: 40,
      }}>
        <div style={{ fontFamily: FONT_MONO, fontSize: 18, color: TOK.chem2, letterSpacing: '0.2em', marginBottom: 12 }}>
          ▶ NEXT EPISODE · 05
        </div>
        <div style={{ fontSize: 56, fontWeight: 700, lineHeight: 1.05, marginBottom: 16 }}>
          The Reactivity Series.
        </div>
        <div style={{ fontSize: 22, color: TOK.inkDim, lineHeight: 1.45, marginBottom: 32 }}>
          A ranked list of every metal — and why it predicts almost everything in reactive chemistry.
        </div>
        {/* placeholder thumbnail */}
        <div style={{
          height: 200, borderRadius: 8,
          background: `linear-gradient(135deg, ${TOK.chem3}, ${TOK.bg})`,
          border: `1px dashed ${TOK.rule}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: FONT_MONO, fontSize: 14, color: TOK.inkMute, letterSpacing: '0.2em',
        }}>[ THUMBNAIL · EP05 ]</div>
      </div>
    </Frame>
  );
}

// Export to window for the host file
Object.assign(window, {
  Frame, Chrome,
  SceneHook, SceneTitle, SceneKeyTerm, SceneFormula,
  SceneProcess, SceneDiagram, SceneCompare, SceneRecap,
  TOK, FONT_DISPLAY, FONT_MONO,
});
