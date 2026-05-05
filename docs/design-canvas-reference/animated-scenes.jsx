// Animated version of the Marginalia scene. Every doodle "draws on" via
// stroke-dashoffset, every handwritten note fades up with stagger.
// This is the Antidote/Atomi/Kurzgesagt move: the page assembles itself
// like someone is sketching it live.
//
// Designed for 1920×1080 at 12s duration. Port to Remotion by replacing
// useTime() with useCurrentFrame()/fps.

// Drawable wrapper: animates stroke-dashoffset on all child <path>/<line>
// elements between t=start..end. Children must be SVG primitives.
function DrawOn({ start = 0, end = 1, children, length = 2000 }) {
  const t = window.useTime();
  const p = window.clamp((t - start) / Math.max(end - start, 0.001), 0, 1);
  const eased = window.Easing.easeInOutCubic(p);
  const dash = length;
  const offset = dash * (1 - eased);
  return (
    <g style={{
      strokeDasharray: dash,
      strokeDashoffset: offset,
    }}>
      {children}
    </g>
  );
}

// Wrap a regular doodle component so its inner SVG paths animate.
// We do it by cloning the component into an SVG context and re-rendering
// with the dashoffset trick. Simpler: render the doodle inside an SVG <g>
// that has the dashoffset style. CSS inherits it down.
function AnimatedDoodle({ start, end, children, length = 1500 }) {
  const t = window.useTime();
  const p = window.clamp((t - start) / Math.max(end - start, 0.001), 0, 1);
  const eased = window.Easing.easeInOutCubic(p);
  // Use CSS to apply dashoffset to all svg paths/lines inside this container.
  return (
    <div style={{
      // CSS variable approach so we can target nested svg elements.
      '--dash': length,
      '--off': length * (1 - eased),
    }}>
      <style>{`
        .draw-on path, .draw-on line {
          stroke-dasharray: var(--dash);
          stroke-dashoffset: var(--off);
        }
      `}</style>
      <div className="draw-on">{children}</div>
    </div>
  );
}

// FadeUp helper — slides up + fades in within a window
function FadeUp({ start = 0, dur = 0.5, dy = 20, children, style }) {
  const t = window.useTime();
  const p = window.clamp((t - start) / dur, 0, 1);
  const eased = window.Easing.easeOutCubic(p);
  return (
    <div style={{
      ...style,
      opacity: eased,
      transform: `${style?.transform || ''} translateY(${(1 - eased) * dy}px)`,
    }}>{children}</div>
  );
}

// ═══════════════════════════════════════════════════════════
// MARGINALIA SCENE — animated
// Beat plan (12s total):
//   0.0  chrome fades in
//   0.4  "the one thing to remember" label fades up
//   1.0  "Rust = " fades in
//   1.5  "iron + oxygen" fades in
//   2.5  scribble circle draws around "iron + oxygen" (1.2s)
//   4.0  top-left handwritten note fades up
//   4.4  top-left arrow draws on
//   5.4  top-right handwritten note fades up
//   5.8  top-right arrow draws on
//   6.8  bottom-left arrow draws on
//   7.0  bottom-left note fades up
//   7.8  bottom-right arrow draws on
//   8.0  bottom-right note + star
//   9.0  sprinkled stars pop in
//   10.0 italic subline fades in (held to end)
// ═══════════════════════════════════════════════════════════
function MarginaliaAnimated() {
  return (
    <window.Frame>
      <FadeUp start={0} dur={0.4} dy={0}>
        <window.Chrome topic="THE BIG IDEA" />
      </FadeUp>

      {/* Center: core fact */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)', textAlign: 'center', width: 1100,
      }}>
        <FadeUp start={0.4} dur={0.5}>
          <div style={{ fontFamily: window.FONT_MONO, fontSize: 22, color: window.TOK.amber, letterSpacing: '0.2em', marginBottom: 24 }}>
            ◆ THE ONE THING TO REMEMBER
          </div>
        </FadeUp>
        <div style={{ fontSize: 120, fontWeight: 800, lineHeight: 1, letterSpacing: '-0.03em', position: 'relative', display: 'inline-block' }}>
          <FadeUp start={1.0} dur={0.4} style={{ display: 'inline-block' }}>
            <span style={{ color: window.TOK.ink }}>Rust = </span>
          </FadeUp>
          <FadeUp start={1.5} dur={0.5} style={{ display: 'inline-block' }}>
            <span style={{ color: window.TOK.amber, position: 'relative' }}>
              iron + oxygen
              <div style={{ position: 'absolute', left: -30, top: -20, right: -30, bottom: -20, pointerEvents: 'none' }}>
                <AnimatedDoodle start={2.5} end={3.7} length={2400}>
                  <window.ScribbleCircle width={780} height={180} color={window.TOK.amber} strokeWidth={5} seed={3} loops={2}/>
                </AnimatedDoodle>
              </div>
            </span>
          </FadeUp>
        </div>
        <FadeUp start={10.0} dur={0.6}>
          <div style={{ fontSize: 36, color: window.TOK.inkDim, marginTop: 60, fontStyle: 'italic' }}>
            That's it. Everything else is just detail.
          </div>
        </FadeUp>
      </div>

      {/* Top-left: electrons note + arrow */}
      <div style={{ position: 'absolute', top: 200, left: 100, width: 320, transform: 'rotate(-3deg)' }}>
        <FadeUp start={4.0} dur={0.5}>
          <div style={{ fontFamily: window.FONT_HAND, fontSize: 38, color: window.TOK.chem2, fontWeight: 600, lineHeight: 1.2 }}>
            electrons move<br/>from iron → oxygen
          </div>
        </FadeUp>
        <div style={{ marginTop: 12, position: 'relative', height: 40 }}>
          <AnimatedDoodle start={4.4} end={5.2} length={400}>
            <window.ScribbleArrow x1={40} y1={20} x2={240} y2={140} color={window.TOK.chem2} strokeWidth={3} seed={7} curve={0.3}/>
          </AnimatedDoodle>
        </div>
      </div>

      {/* Top-right: water note + arrow */}
      <div style={{ position: 'absolute', top: 240, right: 100, width: 360, transform: 'rotate(2deg)', textAlign: 'right' }}>
        <FadeUp start={5.4} dur={0.5}>
          <div style={{ fontFamily: window.FONT_HAND, fontSize: 38, color: window.TOK.bio, fontWeight: 600, lineHeight: 1.2 }}>
            water speeds it up<br/>(but isn't consumed!)
          </div>
        </FadeUp>
        <div style={{ position: 'relative', height: 40 }}>
          <AnimatedDoodle start={5.8} end={6.6} length={400}>
            <window.ScribbleArrow x1={300} y1={20} x2={50} y2={150} color={window.TOK.bio} strokeWidth={3} seed={11} curve={-0.3}/>
          </AnimatedDoodle>
        </div>
      </div>

      {/* Bottom-left: oxidation note + arrow */}
      <div style={{ position: 'absolute', bottom: 200, left: 120, width: 380, transform: 'rotate(-2deg)' }}>
        <div style={{ position: 'relative', height: 40, marginBottom: 8 }}>
          <AnimatedDoodle start={6.8} end={7.6} length={400}>
            <window.ScribbleArrow x1={50} y1={10} x2={300} y2={-80} color={window.TOK.chem1} strokeWidth={3} seed={17} curve={-0.3}/>
          </AnimatedDoodle>
        </div>
        <FadeUp start={7.0} dur={0.5}>
          <div style={{ fontFamily: window.FONT_HAND, fontSize: 36, color: window.TOK.chem1, fontWeight: 600, lineHeight: 1.2 }}>
            this is <em style={{ textDecoration: 'underline' }}>oxidation</em>!<br/>(remember OIL RIG)
          </div>
        </FadeUp>
      </div>

      {/* Bottom-right: gold note + arrow + star */}
      <div style={{ position: 'absolute', bottom: 200, right: 140, width: 320, transform: 'rotate(3deg)', textAlign: 'right' }}>
        <div style={{ position: 'relative', height: 40, marginBottom: 8 }}>
          <AnimatedDoodle start={7.8} end={8.6} length={400}>
            <window.ScribbleArrow x1={250} y1={10} x2={20} y2={-80} color={window.TOK.amber} strokeWidth={3} seed={23} curve={0.3}/>
          </AnimatedDoodle>
        </div>
        <FadeUp start={8.0} dur={0.5}>
          <div style={{ fontFamily: window.FONT_HAND, fontSize: 36, color: window.TOK.amber, fontWeight: 600, lineHeight: 1.2 }}>
            gold doesn't do this<br/>— too unreactive
          </div>
        </FadeUp>
        <FadeUp start={8.6} dur={0.4}>
          <div style={{ marginTop: 12, display: 'inline-block' }}>
            <AnimatedDoodle start={8.6} end={9.2} length={200}>
              <window.ScribbleStar size={50} color={window.TOK.amber} seed={29}/>
            </AnimatedDoodle>
          </div>
        </FadeUp>
      </div>

      {/* Sprinkled stars */}
      <FadeUp start={9.0} dur={0.4}>
        <div style={{ position: 'absolute', top: 480, left: 280, transform: 'rotate(20deg)' }}>
          <AnimatedDoodle start={9.0} end={9.5} length={200}>
            <window.ScribbleStar size={32} color={window.TOK.chem2} seed={41}/>
          </AnimatedDoodle>
        </div>
      </FadeUp>
      <FadeUp start={9.3} dur={0.4}>
        <div style={{ position: 'absolute', top: 540, right: 320, transform: 'rotate(-25deg)' }}>
          <AnimatedDoodle start={9.3} end={9.8} length={200}>
            <window.ScribbleStar size={28} color={window.TOK.amber} seed={43}/>
          </AnimatedDoodle>
        </div>
      </FadeUp>
    </window.Frame>
  );
}

// Wrapper that gives the scene a Stage with scrubber
function MarginaliaPreview() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#000' }}>
      <window.Stage width={1920} height={1080} duration={12} background={window.TOK.bg} loop>
        <MarginaliaAnimated/>
      </window.Stage>
    </div>
  );
}

Object.assign(window, { MarginaliaAnimated, MarginaliaPreview, AnimatedDoodle, FadeUp });
