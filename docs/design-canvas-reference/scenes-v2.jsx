// Scenes v2 — doodle/scribble layer added to break the slideshow feel.
// Antidote/Atomi/Kurzgesagt approach: hand-drawn marginalia, scribbled
// circles around key terms, wobbly arrows, hatched fills, handwritten
// annotations. Every doodle "draws on" via stroke-dashoffset in Remotion.

// Local helpers — pull from window so this file is self-contained for editing
const _Frame = (props) => <window.Frame {...props}/>;
const _Chrome = (props) => <window.Chrome {...props}/>;

// We re-export TOK/FONT_* via window already; access directly here too.
// (TOK and FONT_DISPLAY/FONT_MONO are defined in scenes.jsx and shared on window.)

// ═══════════════════════════════════════════════════════════
// SCENE 01b — HOOK with handwritten margin annotation
// ═══════════════════════════════════════════════════════════
function SceneHookDoodled() {
  return (
    <window.Frame>
      <window.Chrome hideBottom topic="" />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.6) 100%)',
      }} />

      {/* iron sample */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 380, height: 380, borderRadius: '50%',
        background: 'radial-gradient(circle at 35% 30%, #6a6660 0%, #2a2826 60%, #0a0a0a 100%)',
        boxShadow: '0 0 120px rgba(240,168,48,0.15), inset -40px -40px 100px rgba(0,0,0,0.6)',
      }}>
        <div style={{
          position: 'absolute', inset: 0, borderRadius: '50%',
          background: `radial-gradient(circle at 70% 70%, ${window.TOK.amber}90 0%, transparent 25%),
                       radial-gradient(circle at 25% 75%, #c0541e80 0%, transparent 18%)`,
          mixBlendMode: 'screen', opacity: 0.7,
        }} />
      </div>

      {/* Doodled circle around the rusty patch */}
      <div style={{ position: 'absolute', top: 580, left: 1080 }}>
        <window.ScribbleCircle width={220} height={140} color={window.TOK.amber} strokeWidth={4} seed={3} loops={2} />
      </div>

      {/* Handwritten annotation pointing to the rust */}
      <div style={{ position: 'absolute', top: 540, left: 1280, fontFamily: window.FONT_HAND, fontSize: 56, color: window.TOK.amber, fontWeight: 600, transform: 'rotate(-4deg)' }}>
        ← rust!
      </div>

      {/* Hook question */}
      <div style={{ position: 'absolute', left: 64, bottom: 140, right: 64 }}>
        <div style={{ fontFamily: window.FONT_MONO, fontSize: 18, color: window.TOK.amber, letterSpacing: '0.2em', marginBottom: 24 }}>
          ↓  A QUESTION
        </div>
        <div style={{ fontSize: 132, fontWeight: 800, lineHeight: 0.95, letterSpacing: '-0.03em', textWrap: 'balance' }}>
          Why does iron <span style={{ position: 'relative', color: window.TOK.amber, fontStyle: 'italic' }}>
            rust
            <div style={{ position: 'absolute', left: -20, bottom: -28, width: 320 }}>
              <window.ScribbleUnderline width={320} color={window.TOK.amber} strokeWidth={6} seed={7} strokes={2}/>
            </div>
          </span><br/>
          but gold <span style={{ color: window.TOK.chem2 }}>doesn't?</span>
        </div>
      </div>

      {/* margin doodle: tiny star */}
      <div style={{ position: 'absolute', top: 280, left: 120, transform: 'rotate(15deg)' }}>
        <window.ScribbleStar size={48} color={window.TOK.amber} seed={11}/>
      </div>
    </window.Frame>
  );
}

// ═══════════════════════════════════════════════════════════
// SCENE 03b — KEY TERM with circle + handwritten note
// ═══════════════════════════════════════════════════════════
function SceneKeyTermDoodled() {
  return (
    <window.Frame>
      <window.Chrome topic="KEY TERM" />
      <div style={{ position: 'absolute', top: 240, left: 64, fontFamily: window.FONT_MONO, fontSize: 22, color: window.TOK.amber, letterSpacing: '0.2em' }}>
        DEFINITION · 01 of 03
      </div>

      <div style={{ position: 'absolute', top: 320, left: 64, right: 64 }}>
        <div style={{ fontSize: 280, fontWeight: 800, lineHeight: 1, letterSpacing: '-0.04em', position: 'relative', display: 'inline-block' }}>
          Oxidation<span style={{ color: window.TOK.chem1 }}>.</span>
          {/* Scribbled circle around 'Ox' */}
          <div style={{ position: 'absolute', top: 30, left: -30, pointerEvents: 'none' }}>
            <window.ScribbleCircle width={300} height={260} color={window.TOK.amber} strokeWidth={5} seed={5} loops={2}/>
          </div>
          {/* Handwritten margin note */}
          <div style={{ position: 'absolute', top: -10, left: 320, fontFamily: window.FONT_HAND, fontSize: 48, color: window.TOK.amber, fontWeight: 600, transform: 'rotate(-6deg)' }}>
            ↑ Greek for<br/>"sharp / acidic"
          </div>
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: 180, left: 64, right: 800 }}>
        <div style={{ height: 2, background: window.TOK.rule, marginBottom: 32 }} />
        <div style={{ fontSize: 44, lineHeight: 1.3, fontWeight: 400 }}>
          A chemical reaction where an atom <span style={{ position: 'relative', color: window.TOK.amber, fontWeight: 600 }}>
            loses electrons
            <div style={{ position: 'absolute', left: -8, top: -12, right: -8, bottom: -12, pointerEvents: 'none' }}>
              <window.ScribbleHighlight width={460} height={70} color={window.TOK.amber} opacity={0.25} seed={9}/>
            </div>
          </span> — almost always to oxygen, but not always.
        </div>
      </div>

      {/* OIL RIG mnemonic with sketchy box */}
      <div style={{ position: 'absolute', bottom: 180, right: 64, width: 640, padding: 40 }}>
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <window.ScribbleBox width={640} height={300} color={window.TOK.chem2} strokeWidth={3} seed={13}/>
        </div>
        <div style={{ fontFamily: window.FONT_HAND, fontSize: 32, color: window.TOK.chem2, marginBottom: 16, transform: 'rotate(-2deg)' }}>
          ★ remember this ★
        </div>
        <div style={{ fontSize: 56, fontWeight: 700, lineHeight: 1.05 }}>
          <span style={{ color: window.TOK.amber }}>OIL</span> <span style={{ color: window.TOK.inkDim, fontSize: 32 }}>—</span> Oxidation Is Loss
        </div>
        <div style={{ fontSize: 56, fontWeight: 700, lineHeight: 1.05, marginTop: 12 }}>
          <span style={{ color: window.TOK.chem2 }}>RIG</span> <span style={{ color: window.TOK.inkDim, fontSize: 32 }}>—</span> Reduction Is Gain
        </div>
      </div>
    </window.Frame>
  );
}

// ═══════════════════════════════════════════════════════════
// SCENE 09 — QUIZ / PAUSE CARD
// "Pause the video and try" beat. Sketchy answer boxes.
// ═══════════════════════════════════════════════════════════
function SceneQuiz() {
  const opts = [
    { k: 'A', t: 'Iron loses electrons to oxygen', correct: true },
    { k: 'B', t: 'Iron gains electrons from water' },
    { k: 'C', t: 'Oxygen and iron swap protons' },
    { k: 'D', t: 'Iron melts at room temperature' },
  ];
  return (
    <window.Frame>
      <window.Chrome topic="YOUR TURN" />

      {/* "PAUSE" handwritten in corner */}
      <div style={{ position: 'absolute', top: 130, right: 80, transform: 'rotate(8deg)', fontFamily: window.FONT_HAND, fontSize: 96, color: window.TOK.amber, fontWeight: 700, lineHeight: 1 }}>
        pause!
        <div style={{ position: 'absolute', left: -20, top: 30, transform: 'rotate(-15deg)' }}>
          <window.ScribbleStar size={60} color={window.TOK.amber} seed={2}/>
        </div>
      </div>

      <div style={{ position: 'absolute', top: 200, left: 64 }}>
        <div style={{ fontFamily: window.FONT_MONO, fontSize: 22, color: window.TOK.amber, letterSpacing: '0.2em' }}>
          QUICK CHECK · 30 SECONDS
        </div>
        <div style={{ fontSize: 84, fontWeight: 800, marginTop: 16, lineHeight: 0.95, letterSpacing: '-0.03em', maxWidth: 1500 }}>
          When iron rusts, what's <span style={{ position: 'relative' }}>actually
            <div style={{ position: 'absolute', left: -10, bottom: -22, width: 380 }}>
              <window.ScribbleUnderline width={380} color={window.TOK.amber} strokeWidth={5} seed={4} strokes={2}/>
            </div>
          </span> happening?
        </div>
      </div>

      <div style={{
        position: 'absolute', top: 540, left: 64, right: 64,
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28,
      }}>
        {opts.map((o, i) => (
          <div key={o.k} style={{
            position: 'relative', padding: '32px 36px',
            background: window.TOK.bgLift, borderRadius: 14,
            border: `1px solid ${window.TOK.rule}`,
            display: 'flex', alignItems: 'center', gap: 28,
          }}>
            <div style={{
              fontFamily: window.FONT_MONO, fontSize: 36, fontWeight: 700,
              color: window.TOK.amber,
              width: 64, height: 64, borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              border: `2px solid ${window.TOK.amber}`, flexShrink: 0,
            }}>{o.k}</div>
            <div style={{ fontSize: 32, color: window.TOK.ink, lineHeight: 1.3, fontWeight: 500 }}>{o.t}</div>
            {/* hidden by default — reveal at end of beat */}
            {o.correct && (
              <div style={{ position: 'absolute', right: 24, top: '50%', transform: 'translateY(-50%) rotate(-8deg)' }}>
                <window.ScribbleMark kind="check" size={70} color={window.TOK.chem2} strokeWidth={6} seed={i+20}/>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Bottom timer hint */}
      <div style={{ position: 'absolute', bottom: 110, left: 64, fontFamily: window.FONT_HAND, fontSize: 36, color: window.TOK.inkDim, transform: 'rotate(-1deg)' }}>
        take 30s — then keep watching
      </div>
    </window.Frame>
  );
}

// ═══════════════════════════════════════════════════════════
// SCENE 10 — WORKED EXAMPLE (handwritten working)
// HSC science loves "show your working". This scene shows a
// problem being solved line-by-line, with annotations between steps.
// ═══════════════════════════════════════════════════════════
function SceneWorkedExample() {
  return (
    <window.Frame>
      <window.Chrome topic="WORKED EXAMPLE" />

      <div style={{ position: 'absolute', top: 140, left: 64 }}>
        <div style={{ fontFamily: window.FONT_MONO, fontSize: 22, color: window.TOK.amber, letterSpacing: '0.2em' }}>
          PROBLEM · 01
        </div>
        <div style={{ fontSize: 56, fontWeight: 700, marginTop: 12, lineHeight: 1.1, maxWidth: 1300 }}>
          Balance: <span style={{ fontFamily: window.FONT_MONO, color: window.TOK.amber }}>Fe + O₂ → Fe₂O₃</span>
        </div>
      </div>

      {/* Working — each line with a margin annotation */}
      <div style={{ position: 'absolute', top: 380, left: 64, right: 64 }}>
        {/* Step 1 */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 40, marginBottom: 36, position: 'relative' }}>
          <div style={{ fontFamily: window.FONT_MONO, fontSize: 28, color: window.TOK.inkMute, width: 80 }}>STEP 1</div>
          <div style={{ fontFamily: window.FONT_MONO, fontSize: 64, fontWeight: 600 }}>
            Fe <span style={{ color: window.TOK.inkDim }}>+</span> O₂ <span style={{ color: window.TOK.amber }}>→</span> Fe₂O₃
          </div>
          <div style={{ fontFamily: window.FONT_HAND, fontSize: 38, color: window.TOK.inkDim, transform: 'rotate(-3deg)' }}>
            ← unbalanced
          </div>
        </div>

        {/* Step 2 — coefficient added */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 40, marginBottom: 36, position: 'relative' }}>
          <div style={{ fontFamily: window.FONT_MONO, fontSize: 28, color: window.TOK.inkMute, width: 80 }}>STEP 2</div>
          <div style={{ fontFamily: window.FONT_MONO, fontSize: 64, fontWeight: 600 }}>
            <span style={{ position: 'relative' }}>
              <span style={{ color: window.TOK.amber }}>2</span>Fe
              <div style={{ position: 'absolute', top: -50, left: -10, fontFamily: window.FONT_HAND, fontSize: 28, color: window.TOK.amber, transform: 'rotate(-8deg)', whiteSpace: 'nowrap' }}>
                +2 here
              </div>
            </span>
            <span style={{ color: window.TOK.inkDim }}> + </span>O₂<span style={{ color: window.TOK.amber }}> → </span>Fe₂O₃
          </div>
        </div>

        {/* Step 3 — final balance */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 40, marginBottom: 36, position: 'relative' }}>
          <div style={{ fontFamily: window.FONT_MONO, fontSize: 28, color: window.TOK.inkMute, width: 80 }}>STEP 3</div>
          <div style={{ fontFamily: window.FONT_MONO, fontSize: 64, fontWeight: 600 }}>
            <span style={{ color: window.TOK.amber }}>4</span>Fe <span style={{ color: window.TOK.inkDim }}>+</span> <span style={{ color: window.TOK.amber }}>3</span>O₂ <span style={{ color: window.TOK.amber }}>→</span> <span style={{ color: window.TOK.amber }}>2</span>Fe₂O₃
          </div>
          <div style={{ position: 'relative', marginLeft: 20 }}>
            <window.ScribbleMark kind="check" size={70} color={window.TOK.chem1} strokeWidth={6} seed={31}/>
          </div>
        </div>

        {/* Verification — atom count */}
        <div style={{
          marginTop: 60, padding: 32, position: 'relative',
        }}>
          <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
            <window.ScribbleBox width={1500} height={140} color={window.TOK.chem2} strokeWidth={3} seed={37}/>
          </div>
          <div style={{ fontFamily: window.FONT_HAND, fontSize: 32, color: window.TOK.chem2, marginBottom: 12, transform: 'rotate(-1deg)' }}>
            check: count atoms each side
          </div>
          <div style={{ display: 'flex', gap: 60, fontFamily: window.FONT_MONO, fontSize: 32 }}>
            <div><span style={{ color: window.TOK.inkDim }}>Fe:</span> 4 = 4 ✓</div>
            <div><span style={{ color: window.TOK.inkDim }}>O:</span> 6 = 6 ✓</div>
          </div>
        </div>
      </div>
    </window.Frame>
  );
}

// ═══════════════════════════════════════════════════════════
// SCENE 11 — MARGINALIA (Atomi style)
// Big core fact, surrounded by handwritten side-notes, doodles,
// arrows, brackets. Looks like a great student's notebook page.
// ═══════════════════════════════════════════════════════════
function SceneMarginalia() {
  return (
    <window.Frame>
      <window.Chrome topic="THE BIG IDEA" />

      {/* Center: the core fact */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)', textAlign: 'center', width: 1100,
      }}>
        <div style={{ fontFamily: window.FONT_MONO, fontSize: 22, color: window.TOK.amber, letterSpacing: '0.2em', marginBottom: 24 }}>
          ◆ THE ONE THING TO REMEMBER
        </div>
        <div style={{ fontSize: 120, fontWeight: 800, lineHeight: 1, letterSpacing: '-0.03em', position: 'relative', display: 'inline-block' }}>
          <span style={{ color: window.TOK.ink }}>Rust = </span>
          <span style={{ color: window.TOK.amber, position: 'relative' }}>
            iron + oxygen
            <div style={{ position: 'absolute', left: -30, top: -20, right: -30, bottom: -20, pointerEvents: 'none' }}>
              <window.ScribbleCircle width={780} height={180} color={window.TOK.amber} strokeWidth={5} seed={3} loops={2}/>
            </div>
          </span>
        </div>
        <div style={{ fontSize: 36, color: window.TOK.inkDim, marginTop: 60, fontStyle: 'italic' }}>
          That's it. Everything else is just detail.
        </div>
      </div>

      {/* Top-left handwritten note */}
      <div style={{ position: 'absolute', top: 200, left: 100, width: 320, transform: 'rotate(-3deg)' }}>
        <div style={{ fontFamily: window.FONT_HAND, fontSize: 38, color: window.TOK.chem2, fontWeight: 600, lineHeight: 1.2 }}>
          electrons move<br/>from iron → oxygen
        </div>
        <div style={{ marginTop: 12, position: 'relative', height: 40 }}>
          <window.ScribbleArrow x1={40} y1={20} x2={240} y2={140} color={window.TOK.chem2} strokeWidth={3} seed={7} curve={0.3}/>
        </div>
      </div>

      {/* Top-right handwritten note */}
      <div style={{ position: 'absolute', top: 240, right: 100, width: 360, transform: 'rotate(2deg)', textAlign: 'right' }}>
        <div style={{ fontFamily: window.FONT_HAND, fontSize: 38, color: window.TOK.bio, fontWeight: 600, lineHeight: 1.2 }}>
          water speeds it up<br/>(but isn't consumed!)
        </div>
        <div style={{ position: 'relative', height: 40 }}>
          <window.ScribbleArrow x1={300} y1={20} x2={50} y2={150} color={window.TOK.bio} strokeWidth={3} seed={11} curve={-0.3}/>
        </div>
      </div>

      {/* Bottom-left annotation */}
      <div style={{ position: 'absolute', bottom: 200, left: 120, width: 380, transform: 'rotate(-2deg)' }}>
        <div style={{ position: 'relative', height: 40, marginBottom: 8 }}>
          <window.ScribbleArrow x1={50} y1={10} x2={300} y2={-80} color={window.TOK.chem1} strokeWidth={3} seed={17} curve={-0.3}/>
        </div>
        <div style={{ fontFamily: window.FONT_HAND, fontSize: 36, color: window.TOK.chem1, fontWeight: 600, lineHeight: 1.2 }}>
          this is <em style={{ textDecoration: 'underline' }}>oxidation</em>!<br/>(remember OIL RIG)
        </div>
      </div>

      {/* Bottom-right doodle */}
      <div style={{ position: 'absolute', bottom: 200, right: 140, width: 320, transform: 'rotate(3deg)', textAlign: 'right' }}>
        <div style={{ position: 'relative', height: 40, marginBottom: 8 }}>
          <window.ScribbleArrow x1={250} y1={10} x2={20} y2={-80} color={window.TOK.amber} strokeWidth={3} seed={23} curve={0.3}/>
        </div>
        <div style={{ fontFamily: window.FONT_HAND, fontSize: 36, color: window.TOK.amber, fontWeight: 600, lineHeight: 1.2 }}>
          gold doesn't do this<br/>— too unreactive
        </div>
        <div style={{ marginTop: 12, display: 'inline-block' }}>
          <window.ScribbleStar size={50} color={window.TOK.amber} seed={29}/>
        </div>
      </div>

      {/* Tiny doodle stars sprinkled */}
      <div style={{ position: 'absolute', top: 480, left: 280, transform: 'rotate(20deg)' }}>
        <window.ScribbleStar size={32} color={window.TOK.chem2} seed={41}/>
      </div>
      <div style={{ position: 'absolute', top: 540, right: 320, transform: 'rotate(-25deg)' }}>
        <window.ScribbleStar size={28} color={window.TOK.amber} seed={43}/>
      </div>
    </window.Frame>
  );
}

// ═══════════════════════════════════════════════════════════
// SCENE 12 — LAB FOOTAGE FRAME
// A scene that cleanly composites real lab video into the brand.
// ═══════════════════════════════════════════════════════════
function SceneLabFootage() {
  return (
    <window.Frame>
      <window.Chrome topic="IN THE LAB" />

      {/* Main video panel — placeholder for real footage */}
      <div style={{
        position: 'absolute', top: 160, left: 64, width: 1280, height: 720,
        borderRadius: 12, overflow: 'hidden', position: 'absolute',
        background: `linear-gradient(135deg, #1a2520 0%, #0a0f0d 100%)`,
        border: `1px solid ${window.TOK.rule}`,
      }}>
        {/* sketchy crosshatch placeholder */}
        <div style={{ position: 'absolute', inset: 0, opacity: 0.3 }}>
          <window.ScribbleHatch width={1280} height={720} color={window.TOK.chem2} spacing={24} strokeWidth={1} seed={5} opacity={0.3}/>
        </div>
        <div style={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          fontFamily: window.FONT_MONO, fontSize: 22, color: window.TOK.inkMute, letterSpacing: '0.2em', textAlign: 'center',
        }}>
          [ LAB FOOTAGE · IRON WOOL IN BLEACH ]<br/>
          <div style={{ fontSize: 14, marginTop: 12, color: window.TOK.inkMute }}>1280 × 720 · drop video here</div>
        </div>
        {/* REC badge */}
        <div style={{ position: 'absolute', top: 24, left: 24, display: 'flex', alignItems: 'center', gap: 10, fontFamily: window.FONT_MONO, fontSize: 18, color: window.TOK.amber, letterSpacing: '0.15em' }}>
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#e74c3c' }}/>
          REC
        </div>
        {/* Scribbled circle pointing at imagined detail */}
        <div style={{ position: 'absolute', top: 220, left: 760, transform: 'rotate(-5deg)' }}>
          <window.ScribbleCircle width={280} height={200} color={window.TOK.amber} strokeWidth={4} seed={9} loops={2}/>
        </div>
      </div>

      {/* Right rail: handwritten observations */}
      <div style={{ position: 'absolute', top: 200, right: 64, width: 460 }}>
        <div style={{ fontFamily: window.FONT_HAND, fontSize: 44, color: window.TOK.amber, fontWeight: 700, transform: 'rotate(-2deg)', marginBottom: 24 }}>
          observations:
        </div>
        {[
          { t: 't = 0s', n: 'iron wool, dry, grey' },
          { t: 't = 12s', n: 'red glow appears' },
          { t: 't = 30s', n: 'orange flakes form' },
          { t: 't = 60s', n: 'visibly rusted!' },
        ].map((o, i) => (
          <div key={i} style={{ display: 'flex', gap: 20, marginBottom: 20, alignItems: 'baseline' }}>
            <div style={{ fontFamily: window.FONT_MONO, fontSize: 22, color: window.TOK.chem2, minWidth: 100, letterSpacing: '0.05em' }}>{o.t}</div>
            <div style={{ fontFamily: window.FONT_HAND, fontSize: 32, color: window.TOK.ink, fontWeight: 500, transform: `rotate(${(i%2?-1:1)}deg)` }}>{o.n}</div>
          </div>
        ))}

        {/* Bottom doodle */}
        <div style={{ marginTop: 40, position: 'relative' }}>
          <window.ScribbleBox width={460} height={120} color={window.TOK.chem2} strokeWidth={3} seed={51}/>
          <div style={{ position: 'absolute', inset: 0, padding: 24, fontFamily: window.FONT_HAND, fontSize: 30, color: window.TOK.chem2, lineHeight: 1.3, transform: 'rotate(-0.5deg)' }}>
            <b>conclusion:</b> oxidation accelerates<br/>massively in moist conditions
          </div>
        </div>
      </div>
    </window.Frame>
  );
}

Object.assign(window, {
  SceneHookDoodled, SceneKeyTermDoodled,
  SceneQuiz, SceneWorkedExample, SceneMarginalia, SceneLabFootage,
});
