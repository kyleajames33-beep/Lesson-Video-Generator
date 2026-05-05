// Final round of animated scenes: Hook, Formula breakdown, Process steps.
// These are the highest-impact remaining scenes for the lesson arc.

// ═══════════════════════════════════════════════════════════
// HOOK ANIMATED — 8s. Question types in word-by-word, doodle
// circle around "rust" draws on, margin annotation appears late.
// ═══════════════════════════════════════════════════════════
function HookAnimated() {
  return (
    <window.Frame>
      <window.FadeUp start={0} dur={0.4}><window.Chrome hideBottom topic="" /></window.FadeUp>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.6) 100%)' }} />

      {/* Iron sample — fades in early, slow rotate */}
      <window.FadeUp start={0.2} dur={1.0} style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <div style={{
          width: 380, height: 380, borderRadius: '50%',
          background: 'radial-gradient(circle at 35% 30%, #6a6660 0%, #2a2826 60%, #0a0a0a 100%)',
          boxShadow: '0 0 120px rgba(240,168,48,0.15), inset -40px -40px 100px rgba(0,0,0,0.6)',
          position: 'relative',
        }}>
          <div style={{
            position: 'absolute', inset: 0, borderRadius: '50%',
            background: `radial-gradient(circle at 70% 70%, ${window.TOK.amber}90 0%, transparent 25%),
                         radial-gradient(circle at 25% 75%, #c0541e80 0%, transparent 18%)`,
            mixBlendMode: 'screen', opacity: 0.7,
          }} />
        </div>
      </window.FadeUp>

      {/* Doodle circle around the rusty patch — draws on at 3.5s */}
      <div style={{ position: 'absolute', top: 580, left: 1080 }}>
        <window.AnimatedDoodle start={3.5} end={4.5} length={1200}>
          <window.ScribbleCircle width={220} height={140} color={window.TOK.amber} strokeWidth={4} seed={3} loops={2} />
        </window.AnimatedDoodle>
      </div>
      <window.FadeUp start={4.3} dur={0.4} style={{ position: 'absolute', top: 540, left: 1280, transform: 'rotate(-4deg)' }}>
        <div style={{ fontFamily: window.FONT_HAND, fontSize: 56, color: window.TOK.amber, fontWeight: 600 }}>← rust!</div>
      </window.FadeUp>

      {/* Question — staggered word reveals */}
      <div style={{ position: 'absolute', left: 64, bottom: 140, right: 64 }}>
        <window.FadeUp start={0.5} dur={0.4}>
          <div style={{ fontFamily: window.FONT_MONO, fontSize: 18, color: window.TOK.amber, letterSpacing: '0.2em', marginBottom: 24 }}>↓  A QUESTION</div>
        </window.FadeUp>
        <div style={{ fontSize: 132, fontWeight: 800, lineHeight: 0.95, letterSpacing: '-0.03em', textWrap: 'balance' }}>
          {['Why', 'does', 'iron'].map((w, i) => (
            <window.FadeUp key={i} start={1.0 + i * 0.18} dur={0.4} style={{ display: 'inline-block', marginRight: 24 }}>
              <span>{w}</span>
            </window.FadeUp>
          ))}
          <window.FadeUp start={1.5} dur={0.4} style={{ display: 'inline-block', position: 'relative' }}>
            <span style={{ color: window.TOK.amber, fontStyle: 'italic' }}>rust</span>
            <div style={{ position: 'absolute', left: -20, bottom: -28, width: 320, pointerEvents: 'none' }}>
              <window.AnimatedDoodle start={2.5} end={3.4} length={700}>
                <window.ScribbleUnderline width={320} color={window.TOK.amber} strokeWidth={6} seed={7} strokes={2}/>
              </window.AnimatedDoodle>
            </div>
          </window.FadeUp>
          <br/>
          {['but', 'gold'].map((w, i) => (
            <window.FadeUp key={i} start={4.5 + i * 0.18} dur={0.4} style={{ display: 'inline-block', marginRight: 24 }}>
              <span>{w}</span>
            </window.FadeUp>
          ))}
          <window.FadeUp start={4.9} dur={0.4} style={{ display: 'inline-block' }}>
            <span style={{ color: window.TOK.chem2 }}>doesn't?</span>
          </window.FadeUp>
        </div>
      </div>
    </window.Frame>
  );
}

// ═══════════════════════════════════════════════════════════
// FORMULA ANIMATED — 12s. Each term flies in with stagger,
// arrows draw, brackets fall in last.
// ═══════════════════════════════════════════════════════════
function FormulaAnimated() {
  const Term = ({ t, color, label, sub, start }) => (
    <window.FadeUp start={start} dur={0.5}>
      <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
        <div style={{ fontSize: 160, fontWeight: 700, color, lineHeight: 1, fontFamily: window.FONT_MONO }}>{t}</div>
        {label && (
          <window.FadeUp start={start + 0.4} dur={0.4} style={{ position: 'absolute', top: '100%', marginTop: 24, width: 240, textAlign: 'center' }}>
            <div style={{ width: 1, height: 40, background: color, margin: '0 auto 8px' }} />
            <div style={{ fontFamily: window.FONT_MONO, fontSize: 16, color, letterSpacing: '0.1em' }}>{label}</div>
            {sub && <div style={{ fontSize: 22, color: window.TOK.inkDim, marginTop: 6, fontWeight: 400 }}>{sub}</div>}
          </window.FadeUp>
        )}
      </div>
    </window.FadeUp>
  );
  return (
    <window.Frame>
      <window.FadeUp start={0} dur={0.4}><window.Chrome topic="THE REACTION" /></window.FadeUp>
      <div style={{ position: 'absolute', top: 200, left: 64, right: 64 }}>
        <window.FadeUp start={0.3} dur={0.5}>
          <div style={{ fontFamily: window.FONT_MONO, fontSize: 22, color: window.TOK.amber, letterSpacing: '0.2em' }}>↳ THE RUSTING EQUATION</div>
        </window.FadeUp>
        <window.FadeUp start={0.7} dur={0.5}>
          <div style={{ fontSize: 56, fontWeight: 600, marginTop: 16, color: window.TOK.inkDim, lineHeight: 1.2, maxWidth: 1400 }}>
            What's actually happening when iron meets oxygen and water?
          </div>
        </window.FadeUp>
      </div>

      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -30%)', display: 'flex', alignItems: 'center', gap: 36 }}>
        <Term t="4Fe" color={window.TOK.chem2} label="IRON" sub="metal, solid" start={2.0}/>
        <window.FadeUp start={2.5} dur={0.3}><div style={{ fontSize: 100, color: window.TOK.inkDim, fontFamily: window.FONT_MONO }}>+</div></window.FadeUp>
        <Term t="3O₂" color={window.TOK.amber} label="OXYGEN" sub="from the air" start={3.0}/>
        <window.FadeUp start={3.5} dur={0.3}><div style={{ fontSize: 100, color: window.TOK.inkDim, fontFamily: window.FONT_MONO }}>+</div></window.FadeUp>
        <Term t="6H₂O" color={window.TOK.bio} label="WATER" sub="catalyst, not consumed" start={4.0}/>
        <window.FadeUp start={5.0} dur={0.4}><div style={{ fontSize: 100, color: window.TOK.amber, fontFamily: window.FONT_MONO, fontWeight: 700 }}>→</div></window.FadeUp>
        <Term t="4Fe(OH)₃" color={window.TOK.amber} label="HYDRATED RUST" sub="iron(III) oxide" start={5.5}/>
      </div>

      <window.FadeUp start={8.0} dur={0.6} style={{ position: 'absolute', bottom: 140, left: 64, right: 64, textAlign: 'center' }}>
        <div style={{ fontSize: 28, color: window.TOK.inkDim, fontStyle: 'italic' }}>
          Read left to right: reactants <span style={{ color: window.TOK.amber }}>→</span> products. Atoms aren't created or destroyed — only rearranged.
        </div>
      </window.FadeUp>
    </window.Frame>
  );
}

// ═══════════════════════════════════════════════════════════
// PROCESS ANIMATED — 16s. Cards slide in left-to-right, arrows
// between them draw on. Each card has its own little reveal.
// ═══════════════════════════════════════════════════════════
function ProcessAnimated() {
  const steps = [
    { n: '01', t: 'Water touches iron', d: 'A droplet of moisture lands on the metal surface. It dissolves CO₂ from the air, becoming weakly acidic.' },
    { n: '02', t: 'Iron loses electrons', d: 'Iron atoms at the surface release 2 electrons each: Fe → Fe²⁺ + 2e⁻. They dissolve into the droplet.' },
    { n: '03', t: 'Oxygen accepts them', d: 'On the droplet\'s edge, O₂ from the air picks up those electrons and combines with water to form OH⁻ ions.' },
    { n: '04', t: 'Rust precipitates', d: 'Fe²⁺ and OH⁻ meet, oxidise further with more O₂, and form solid Fe(OH)₃ — visible orange rust.' },
  ];
  return (
    <window.Frame>
      <window.FadeUp start={0} dur={0.4}><window.Chrome topic="THE PROCESS" /></window.FadeUp>
      <div style={{ position: 'absolute', top: 160, left: 64, right: 64 }}>
        <window.FadeUp start={0.3} dur={0.5}>
          <div style={{ fontFamily: window.FONT_MONO, fontSize: 22, color: window.TOK.amber, letterSpacing: '0.2em' }}>STEP-BY-STEP · 4 STAGES</div>
        </window.FadeUp>
        <window.FadeUp start={0.7} dur={0.5}>
          <div style={{ fontSize: 80, fontWeight: 700, marginTop: 16, lineHeight: 1, letterSpacing: '-0.03em' }}>How rust actually forms.</div>
        </window.FadeUp>
      </div>

      <div style={{ position: 'absolute', top: 460, left: 64, right: 64, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 28 }}>
        {steps.map((s, i) => {
          const cardStart = 2.0 + i * 2.5;
          return (
            <window.FadeUp key={s.n} start={cardStart} dur={0.6} dy={40}>
              <div style={{
                background: window.TOK.bgLift, borderRadius: 12, padding: 32,
                border: `1px solid ${window.TOK.rule}`, position: 'relative',
                display: 'flex', flexDirection: 'column', height: 480,
              }}>
                <div style={{
                  height: 180, borderRadius: 8, marginBottom: 24,
                  background: `repeating-linear-gradient(45deg, ${window.TOK.bg}, ${window.TOK.bg} 8px, ${window.TOK.bgLift} 8px, ${window.TOK.bgLift} 16px)`,
                  border: `1px dashed ${window.TOK.rule}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: window.FONT_MONO, fontSize: 14, color: window.TOK.inkMute, letterSpacing: '0.15em',
                }}>[ DIAGRAM · STEP {s.n} ]</div>
                <div style={{ fontFamily: window.FONT_MONO, fontSize: 20, color: window.TOK.chem2, letterSpacing: '0.1em', marginBottom: 12 }}>{s.n}</div>
                <div style={{ fontSize: 32, fontWeight: 700, lineHeight: 1.1, marginBottom: 14 }}>{s.t}</div>
                <div style={{ fontSize: 18, color: window.TOK.inkDim, lineHeight: 1.5 }}>{s.d}</div>
                {i < steps.length - 1 && (
                  <window.FadeUp start={cardStart + 1.2} dur={0.4} style={{ position: 'absolute', right: -22, top: '40%' }}>
                    <div style={{ color: window.TOK.amber, fontSize: 28, fontFamily: window.FONT_MONO }}>→</div>
                  </window.FadeUp>
                )}
              </div>
            </window.FadeUp>
          );
        })}
      </div>
    </window.Frame>
  );
}

function HookPreview() { return <div style={{width:'100%',height:'100%',background:'#000'}}><window.Stage width={1920} height={1080} duration={8} background={window.TOK.bg} loop><HookAnimated/></window.Stage></div>; }
function FormulaPreview() { return <div style={{width:'100%',height:'100%',background:'#000'}}><window.Stage width={1920} height={1080} duration={12} background={window.TOK.bg} loop><FormulaAnimated/></window.Stage></div>; }
function ProcessPreview() { return <div style={{width:'100%',height:'100%',background:'#000'}}><window.Stage width={1920} height={1080} duration={16} background={window.TOK.bg} loop><ProcessAnimated/></window.Stage></div>; }

Object.assign(window, {
  HookAnimated, FormulaAnimated, ProcessAnimated,
  HookPreview, FormulaPreview, ProcessPreview,
});
