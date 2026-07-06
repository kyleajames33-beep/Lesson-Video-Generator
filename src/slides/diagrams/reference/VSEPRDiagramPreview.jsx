/**
 * VSEPRDiagram.tsx — HSC Science Interactive Diagram
 * =====================================================================
 * PATTERN: "Data-driven 3D-in-SVG diagram" v2 (see ARCHITECTURE.md)
 *
 * This file is split into 5 numbered sections. When replicating this
 * pattern for a new topic, ONLY Sections 2 and 5b change. Sections
 * 1, 3, 4 and 5a are the frozen engine/shell — copy them verbatim.
 *
 *   1. TYPES        — generic scene types (FROZEN)
 *   2. TOPIC DATA   — all VSEPR content lives here (EDIT PER TOPIC)
 *   3. 3D ENGINE    — rotation + projection maths (FROZEN)
 *   4. THEME        — design tokens as inline-style constants (FROZEN)
 *   5. COMPONENT    — 5a: shell/controls/animation/interaction (FROZEN)
 *                     5b: renderScene() (EDIT PER TOPIC FAMILY)
 *
 * Constraints honoured (do not break these when replicating):
 *   - Only import is `react`. No CSS files, no <style> tags, no
 *     className, no Three.js. Inline style objects + SVG attrs only.
 *   - Deterministic when `rotation` prop is supplied (Remotion-safe):
 *     in that mode there is NO requestAnimationFrame, NO SMIL
 *     animation, NO pointer interaction, NO performance.now().
 *   - Ambient animation (bond pulse, sparkle) uses SVG SMIL <animate>,
 *     never CSS keyframes — and renders only in interactive mode.
 *   - SVG defs ids are namespaced per instance (multiple diagrams can
 *     coexist on one static HTML page).
 */
import React, { useEffect, useId, useRef, useState } from "react";
/* =====================================================================
 * SECTION 2 — TOPIC DATA (EDIT PER TOPIC)
 * All syllabus content is declared here as plain data. A new diagram
 * in the same family (3D node/edge scenes) should only need a new
 * version of this section plus tweaks to renderScene() in 5b.
 * =================================================================== */
/** CPK-convention element colours (standard chemistry convention,
 *  matches what students see in textbooks/Jmol). Extend as needed. */
const ELEMENT_COLORS = {
    H: "#e8ecef",
    Be: "#b5d345",
    B: "#f2a9a9",
    C: "#3a4450",
    N: "#3468c9",
    O: "#d93a2e",
    F: "#63c96a",
    P: "#f08a1d",
    S: "#e0be2a",
    Cl: "#43b04a",
};
/** Full element names for the hover chip. */
const ELEMENT_NAMES = {
    H: "hydrogen",
    Be: "beryllium",
    B: "boron",
    C: "carbon",
    N: "nitrogen",
    O: "oxygen",
    F: "fluorine",
    P: "phosphorus",
    S: "sulfur",
    Cl: "chlorine",
};
// Reusable direction sets (unit vectors)
const T = 1 / Math.sqrt(3); // tetrahedral component
const TETRA = [
    { x: T, y: T, z: T },
    { x: T, y: -T, z: -T },
    { x: -T, y: T, z: -T },
    { x: -T, y: -T, z: T },
];
const TRI_PLANAR = [0, 1, 2].map((i) => {
    const a = -Math.PI / 2 + (i * 2 * Math.PI) / 3;
    return { x: Math.cos(a), y: Math.sin(a), z: 0 };
});
const GEOMETRIES = [
    {
        id: "linear",
        name: "Linear",
        electronDomains: 2,
        bondingPairs: 2,
        lonePairs: 0,
        bondAngle: "180°",
        example: { formula: "BeCl₂", central: "Be", outer: "Cl" },
        note: "Two bonding pairs repel to opposite sides of the central atom.",
        detail: "Beryllium has exactly two regions of electron density and no lone pairs. The two bonding pairs repel each other, and the furthest apart they can get is directly opposite each other — a straight line with a 180° bond angle.",
        positions: [
            { x: 1, y: 0, z: 0 },
            { x: -1, y: 0, z: 0 },
        ],
    },
    {
        id: "trigonal-planar",
        name: "Trigonal planar",
        electronDomains: 3,
        bondingPairs: 3,
        lonePairs: 0,
        bondAngle: "120°",
        example: { formula: "BF₃", central: "B", outer: "F" },
        note: "Three bonding pairs spread evenly in a flat triangle.",
        detail: "Three bonding pairs and no lone pairs around boron maximise their separation by spreading into a flat triangle. Every F–B–F angle is exactly 120°, and all four atoms lie in the same plane.",
        positions: TRI_PLANAR,
    },
    {
        id: "bent",
        name: "Bent",
        electronDomains: 4,
        bondingPairs: 2,
        lonePairs: 2,
        bondAngle: "104.5°",
        example: { formula: "H₂O", central: "O", outer: "H" },
        note: "Two lone pairs repel more strongly than bonding pairs, squeezing the H–O–H angle below 109.5°.",
        detail: "Oxygen has four electron domains, so they arrange tetrahedrally — but two are lone pairs. Repulsion strength follows lone–lone > lone–bond > bond–bond, so the two lone pairs squeeze the bonding pairs together, compressing the H–O–H angle from 109.5° to about 104.5°. We name the shape from atom positions only: bent.",
        positions: [TETRA[1], TETRA[3], TETRA[0], TETRA[2]], // 2 bonds, 2 lone
    },
    {
        id: "trigonal-pyramidal",
        name: "Trigonal pyramidal",
        electronDomains: 4,
        bondingPairs: 3,
        lonePairs: 1,
        bondAngle: "107°",
        example: { formula: "NH₃", central: "N", outer: "H" },
        note: "One lone pair pushes the three N–H bonds slightly closer than tetrahedral.",
        detail: "Nitrogen's four electron domains arrange tetrahedrally, but one is a lone pair. It occupies more space than a bonding pair and pushes the three N–H bonds slightly closer together (about 107°). The atoms form a pyramid with a triangular base — trigonal pyramidal.",
        positions: [TETRA[1], TETRA[2], TETRA[3], TETRA[0]], // 3 bonds, 1 lone
    },
    {
        id: "tetrahedral",
        name: "Tetrahedral",
        electronDomains: 4,
        bondingPairs: 4,
        lonePairs: 0,
        bondAngle: "109.5°",
        example: { formula: "CH₄", central: "C", outer: "H" },
        note: "Four bonding pairs maximise separation at 109.5° in three dimensions.",
        detail: "Four bonding pairs can spread further apart in three dimensions than in a flat square (which would give only 90°). Pointing at the corners of a tetrahedron gives every H–C–H angle 109.5° — the maximum possible separation for four domains.",
        positions: TETRA,
    },
    {
        id: "trigonal-bipyramidal",
        name: "Trigonal bipyramidal",
        electronDomains: 5,
        bondingPairs: 5,
        lonePairs: 0,
        bondAngle: "90° and 120°",
        example: { formula: "PCl₅", central: "P", outer: "Cl" },
        note: "Two axial bonds at 90° to three equatorial bonds spaced 120° apart.",
        detail: "Five domains cannot all be equivalent. Three equatorial bonds form a flat triangle at 120°, and two axial bonds point straight up and down at 90° to that plane. This is the first shape where two different bond angles appear in one molecule.",
        positions: [{ x: 0, y: 1, z: 0 }, { x: 0, y: -1, z: 0 }, ...TRI_PLANAR.map((v) => ({ x: v.x, y: 0, z: v.y }))],
    },
    {
        id: "octahedral",
        name: "Octahedral",
        electronDomains: 6,
        bondingPairs: 6,
        lonePairs: 0,
        bondAngle: "90°",
        example: { formula: "SF₆", central: "S", outer: "F" },
        note: "Six bonding pairs point to the corners of an octahedron, all at 90°.",
        detail: "Six equivalent bonding pairs point along the positive and negative x, y and z axes — the corners of an octahedron. Every adjacent F–S–F angle is 90°, and all six positions are identical by symmetry.",
        positions: [
            { x: 1, y: 0, z: 0 },
            { x: -1, y: 0, z: 0 },
            { x: 0, y: 1, z: 0 },
            { x: 0, y: -1, z: 0 },
            { x: 0, y: 0, z: 1 },
            { x: 0, y: 0, z: -1 },
        ],
    },
];
/** Callout text for clickable scene parts (topic-specific). */
const PART_LABELS = {
    bond: (g) => `${g.example.central}–${g.example.outer} bond — a shared pair of electrons`,
    lone: () => "Lone pair — repels more strongly than bonding pairs",
};
/* =====================================================================
 * SECTION 3 — 3D ENGINE (FROZEN: copy verbatim into every 3D diagram)
 * Minimal right-handed rotate-then-project pipeline. No matrices, no
 * quaternions — deliberately simple so cheaper models can't break it.
 * =================================================================== */
function rotate(v, r) {
    // Yaw about Y axis
    const cy = Math.cos(r.yaw), sy = Math.sin(r.yaw);
    const x1 = v.x * cy + v.z * sy;
    const z1 = -v.x * sy + v.z * cy;
    // Pitch about X axis
    const cp = Math.cos(r.pitch), sp = Math.sin(r.pitch);
    const y2 = v.y * cp - z1 * sp;
    const z2 = v.y * sp + z1 * cp;
    return { x: x1, y: y2, z: z2 };
}
/** Project rotated model coords to SVG pixel coords.
 *  `scale` = pixels per model unit; mild perspective via FOCAL.
 *  SVG y grows downward, so model y is negated. */
function project(v, r, cx, cy, scale) {
    const p = rotate(v, r);
    const FOCAL = 4; // model units from camera; larger = flatter perspective
    const f = FOCAL / (FOCAL - p.z);
    return { x: cx + p.x * scale * f, y: cy - p.y * scale * f, depth: p.z };
}
/** Depth cue helper: maps depth [-1,1] → [min,max]. */
const depthLerp = (depth, min, max) => min + ((depth + 1) / 2) * (max - min);
/* =====================================================================
 * SECTION 4 — THEME (FROZEN: shared design tokens, inline only)
 * Coastal palette consistent with hscscience.com.au. Everything is a
 * plain style object — never emit a <style> tag or className.
 * =================================================================== */
const THEME = {
    bg: "#f7fafb",
    panel: "#ffffff",
    ink: "#1e3a42",
    inkSoft: "#5b7681",
    accent: "#0e7d8a", // coastal teal
    accentDeep: "#0a5560", // deep water — headings, panel accents
    accentBright: "#22b8c8", // aqua highlight — glows, selection, pulses
    accentSoft: "#d7edf0",
    border: "#dce8ec",
    lonePair: "#8a6bc9", // violet — visually distinct from any CPK colour
    shadowInk: "#123037", // flood colour for drop shadows
    font: "'Nunito','DM Sans','Segoe UI',system-ui,sans-serif",
    radius: 12,
};
const styles = {
    root: {
        fontFamily: THEME.font,
        background: `linear-gradient(180deg, ${THEME.bg} 0%, #eef6f7 100%)`,
        border: `1px solid ${THEME.border}`,
        borderRadius: THEME.radius,
        padding: 16,
        maxWidth: 760,
        color: THEME.ink,
        boxSizing: "border-box",
    },
    title: { fontSize: 18, fontWeight: 800, margin: "0 0 2px", color: THEME.accentDeep },
    subtitle: { fontSize: 13, color: THEME.inkSoft, margin: "0 0 12px" },
    controlsRow: { display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 12 },
    btn: {
        fontFamily: THEME.font,
        fontSize: 13,
        fontWeight: 700,
        padding: "6px 12px",
        borderRadius: 999,
        border: `1px solid ${THEME.border}`,
        background: THEME.panel,
        color: THEME.inkSoft,
        cursor: "pointer",
        transition: "box-shadow 200ms ease, background 200ms ease, color 200ms ease, transform 200ms ease",
    },
    // Active geometry button: aqua glow ring + lift. transition above
    // makes the glow ease in/out — no CSS files needed for this.
    btnActive: {
        background: `linear-gradient(135deg, ${THEME.accent}, ${THEME.accentBright})`,
        borderColor: THEME.accent,
        color: "#fff",
        boxShadow: `0 0 0 3px ${THEME.accentSoft}, 0 4px 14px rgba(34,184,200,0.45)`,
        transform: "translateY(-1px)",
    },
    stage: {
        background: `radial-gradient(120% 130% at 50% 20%, #ffffff 0%, #f2f9fa 55%, #e2f0f2 100%)`,
        border: `1px solid ${THEME.border}`,
        borderRadius: THEME.radius,
        display: "block",
        width: "100%",
        touchAction: "none",
        cursor: "grab",
        userSelect: "none",
    },
    infoPanel: {
        display: "flex",
        flexWrap: "wrap",
        gap: 16,
        marginTop: 12,
        padding: "12px 16px",
        background: `linear-gradient(120deg, ${THEME.accentSoft} 0%, #e9f7f2 60%, #f3f9e9 100%)`,
        borderLeft: `4px solid ${THEME.accentBright}`,
        borderRadius: THEME.radius,
        fontSize: 13,
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.8)",
    },
    infoItem: { display: "flex", flexDirection: "column", minWidth: 90 },
    infoLabel: { fontSize: 11, fontWeight: 800, color: THEME.accent, textTransform: "uppercase", letterSpacing: 0.5 },
    infoValue: { fontSize: 15, fontWeight: 800, color: THEME.accentDeep },
    note: { margin: "10px 0 0", fontSize: 13, color: THEME.inkSoft, lineHeight: 1.5 },
    detailBtn: {
        fontFamily: THEME.font,
        fontSize: 12,
        fontWeight: 800,
        marginTop: 8,
        padding: "4px 12px",
        borderRadius: 999,
        border: `1px solid ${THEME.accent}`,
        background: "transparent",
        color: THEME.accent,
        cursor: "pointer",
    },
    detailBox: {
        marginTop: 8,
        padding: "10px 14px",
        background: THEME.panel,
        border: `1px solid ${THEME.border}`,
        borderLeft: `4px solid ${THEME.lonePair}`,
        borderRadius: THEME.radius,
        fontSize: 13,
        lineHeight: 1.6,
        color: THEME.ink,
    },
    hint: { fontSize: 11, color: THEME.inkSoft, marginTop: 6, display: "flex", alignItems: "center", gap: 8 },
};
export default function VSEPRDiagram({ initialGeometry = "tetrahedral", autoRotate = true, rotation, fixedGeometry, width = 720, height = 400, }) {
    /* ---- 5a. GENERIC SHELL (FROZEN) ---------------------------------- */
    const uid = useId().replace(/[^a-zA-Z0-9]/g, ""); // namespace SVG defs ids
    const [activeId, setActiveId] = useState(fixedGeometry ?? initialGeometry);
    const [rot, setRot] = useState({ yaw: -0.6, pitch: 0.35 });
    const [spinning, setSpinning] = useState(autoRotate && !rotation);
    const [selected, setSelected] = useState(null);
    const [hovered, setHovered] = useState(null); // -1 = central, 0..n = outer atom index
    const [settleScale, setSettleScale] = useState(1); // "settle bounce" on shape change
    const [showDetail, setShowDetail] = useState(false);
    // Animation refs (interactive mode only — never touched when controlled)
    const drag = useRef(null);
    const movedPx = useRef(0); // distinguishes a click from a drag
    const flingVel = useRef({ yaw: 0, pitch: 0 }); // inertia after release
    const spinVel = useRef(0); // eased auto-rotate speed
    const spinningRef = useRef(spinning);
    const settleStart = useRef(null);
    const mounted = useRef(false);
    const controlled = rotation !== undefined; // Remotion / deterministic mode
    const effRot = controlled ? rotation : rot;
    const geo = GEOMETRIES.find((g) => g.id === activeId) ?? GEOMETRIES[0];
    useEffect(() => {
        spinningRef.current = spinning;
    }, [spinning]);
    // Shape change: clear selection and trigger the settle bounce
    // (interactive mode only — settleScale stays 1 when controlled).
    useEffect(() => {
        setSelected(null);
        if (!mounted.current) {
            mounted.current = true;
            return;
        }
        if (!controlled)
            settleStart.current = performance.now();
    }, [activeId, controlled]);
    /**
     * UNIFIED ANIMATION LOOP (interactive mode only).
     * One rAF drives: (a) auto-rotate speed eased toward its target
     * (smooth spin-up/spin-down instead of linear on/off), (b) fling
     * inertia after a drag release with exponential decay, (c) the
     * damped-spring settle bounce. It early-returns without setState
     * when nothing is moving, so idle re-renders are avoided.
     * NEVER runs in controlled mode — that is the Remotion contract.
     */
    useEffect(() => {
        if (controlled)
            return;
        let raf = 0;
        let last = performance.now();
        const tick = (t) => {
            const dt = Math.min((t - last) / 1000, 0.05);
            last = t;
            // (a) eased auto-rotate: speed lerps toward target (smoothstep feel)
            const target = spinningRef.current && !drag.current ? 0.5 : 0;
            spinVel.current += (target - spinVel.current) * Math.min(1, dt * 3.5);
            // (b) fling inertia decays exponentially
            flingVel.current.yaw *= Math.pow(0.08, dt);
            flingVel.current.pitch *= Math.pow(0.08, dt);
            const dYaw = (spinVel.current + flingVel.current.yaw) * dt;
            const dPitch = flingVel.current.pitch * dt;
            if (Math.abs(dYaw) > 1e-5 || Math.abs(dPitch) > 1e-5) {
                setRot((r) => ({
                    yaw: r.yaw + dYaw,
                    pitch: Math.max(-1.4, Math.min(1.4, r.pitch + dPitch)),
                }));
            }
            // (c) settle bounce: damped spring, ~0.8 s, max ±5% scale
            if (settleStart.current !== null) {
                const ts = (t - settleStart.current) / 1000;
                if (ts > 0.85) {
                    settleStart.current = null;
                    setSettleScale(1);
                }
                else {
                    setSettleScale(1 + 0.05 * Math.exp(-5.5 * ts) * Math.sin(16 * ts));
                }
            }
            raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [controlled]);
    const onPointerDown = (e) => {
        if (controlled)
            return;
        e.target.setPointerCapture?.(e.pointerId);
        drag.current = { x: e.clientX, y: e.clientY, t: performance.now() };
        movedPx.current = 0;
        flingVel.current = { yaw: 0, pitch: 0 };
        setSpinning(false);
    };
    const onPointerMove = (e) => {
        if (!drag.current)
            return;
        const now = performance.now();
        const dx = e.clientX - drag.current.x;
        const dy = e.clientY - drag.current.y;
        const dtm = Math.max((now - drag.current.t) / 1000, 1 / 120);
        drag.current = { x: e.clientX, y: e.clientY, t: now };
        movedPx.current += Math.abs(dx) + Math.abs(dy);
        // record release velocity for fling inertia (clamped)
        flingVel.current = {
            yaw: Math.max(-4, Math.min(4, (dx * 0.01) / dtm)),
            pitch: Math.max(-4, Math.min(4, (dy * 0.01) / dtm)),
        };
        setRot((r) => ({
            yaw: r.yaw + dx * 0.01,
            pitch: Math.max(-1.4, Math.min(1.4, r.pitch + dy * 0.01)),
        }));
    };
    const onPointerUp = () => (drag.current = null);
    // Background click (not a drag) clears the selection. Clickable scene
    // parts call e.stopPropagation() so this only fires on empty space.
    const onStageClick = () => {
        if (movedPx.current < 4)
            setSelected(null);
    };
    const toggleSelect = (kind, i) => (e) => {
        e.stopPropagation();
        setSelected((s) => (s && s.kind === kind && s.i === i ? null : { kind, i }));
    };
    /* ---- 5b. TOPIC SCENE RENDERER (EDIT PER TOPIC FAMILY) ------------- */
    // Builds an array of { depth, el } renderables, sorts far→near
    // (painter's algorithm), and returns SVG children. Overlays that must
    // always sit on top (callouts, hover chips) use depth 98/99.
    const renderScene = () => {
        const cx = width / 2;
        const cy = height / 2;
        const scale = Math.min(width, height) * 0.33; // px per model unit
        const R_CENTRAL = scale * 0.3;
        const R_OUTER = scale * 0.22;
        const items = [];
        const bondDirs = geo.positions.slice(0, geo.bondingPairs);
        const loneDirs = geo.positions.slice(geo.bondingPairs);
        /** Small rounded-rect callout, clamped inside the viewBox. */
        const callout = (key, x, y, text) => {
            const w = text.length * 6.6 + 22;
            const bx = Math.max(w / 2 + 6, Math.min(width - w / 2 - 6, x));
            const by = Math.max(30, Math.min(height - 14, y - 26));
            return (<g key={key} pointerEvents="none">
          <rect x={bx - w / 2} y={by - 13} width={w} height={24} rx={12} fill={THEME.accentDeep} opacity={0.94} filter={`url(#${uid}-shadow)`}/>
          <text x={bx} y={by} textAnchor="middle" dominantBaseline="central" fontFamily={THEME.font} fontWeight={700} fontSize={12} fill="#fff">
            {text}
          </text>
        </g>);
        };
        // Central atom (depth 0 — it sits at the origin)
        items.push({
            depth: 0,
            el: (<g key="central" style={{ cursor: controlled ? undefined : "pointer" }} onMouseEnter={controlled ? undefined : () => setHovered(-1)} onMouseLeave={controlled ? undefined : () => setHovered(null)}>
          <circle cx={cx} cy={cy} r={R_CENTRAL} fill={`url(#${uid}-g-${geo.example.central})`} filter={`url(#${uid}-shadow)`}/>
          {/* sparkle: two SMIL-twinkling glints — interactive mode only */}
          {!controlled && (<g pointerEvents="none">
              <circle cx={cx - R_CENTRAL * 0.45} cy={cy - R_CENTRAL * 0.5} r={2.6} fill="#fff">
                <animate attributeName="opacity" values="0;0.9;0" dur="2.6s" repeatCount="indefinite"/>
              </circle>
              <circle cx={cx + R_CENTRAL * 0.55} cy={cy - R_CENTRAL * 0.15} r={1.8} fill="#fff">
                <animate attributeName="opacity" values="0;0.7;0" dur="3.4s" begin="1.1s" repeatCount="indefinite"/>
              </circle>
            </g>)}
          <text x={cx} y={cy} textAnchor="middle" dominantBaseline="central" fontFamily={THEME.font} fontWeight={800} fontSize={R_CENTRAL * 0.85} fill={contrastText(ELEMENT_COLORS[geo.example.central])} pointerEvents="none">
            {geo.example.central}
          </text>
        </g>),
        });
        // Bonds + outer atoms
        bondDirs.forEach((dir, i) => {
            const atomP = project(dir, effRot, cx, cy, scale);
            const bondEnd = project(mul(dir, 0.78), effRot, cx, cy, scale); // stop short of atom face
            const w = depthLerp(atomP.depth, 4, 8);
            const bondOpacity = depthLerp(atomP.depth, 0.55, 1); // depth falloff
            const isSel = selected?.kind === "bond" && selected.i === i;
            items.push({
                depth: atomP.depth - 0.02, // bond draws just behind its atom
                el: (<g key={`b${i}`} onClick={controlled ? undefined : toggleSelect("bond", i)} style={{ cursor: controlled ? undefined : "pointer" }}>
            {/* invisible wide hit area so the bond is easy to click */}
            <line x1={cx} y1={cy} x2={bondEnd.x} y2={bondEnd.y} stroke="transparent" strokeWidth={18} strokeLinecap="round"/>
            <line x1={cx} y1={cy} x2={bondEnd.x} y2={bondEnd.y} stroke={isSel ? THEME.accentBright : "#9fb4bc"} strokeWidth={isSel ? w + 2 : w} strokeLinecap="round" opacity={bondOpacity} filter={isSel ? `url(#${uid}-glow)` : undefined}/>
            {/* ambient pulse along the bond — SMIL, interactive mode only */}
            {!controlled && !isSel && (<line x1={cx} y1={cy} x2={bondEnd.x} y2={bondEnd.y} stroke={THEME.accentBright} strokeWidth={w * 0.5} strokeLinecap="round" pointerEvents="none">
                <animate attributeName="opacity" values="0;0.35;0" dur="3s" begin={`${i * 0.45}s`} repeatCount="indefinite"/>
              </line>)}
          </g>),
            });
            const r = R_OUTER * depthLerp(atomP.depth, 0.8, 1.15);
            items.push({
                depth: atomP.depth,
                el: (<g key={`a${i}`} opacity={depthLerp(atomP.depth, 0.6, 1)} onMouseEnter={controlled ? undefined : () => setHovered(i)} onMouseLeave={controlled ? undefined : () => setHovered(null)}>
            <circle cx={atomP.x} cy={atomP.y} r={r} fill={`url(#${uid}-g-${geo.example.outer})`} filter={`url(#${uid}-shadow)`}/>
            <text x={atomP.x} y={atomP.y} textAnchor="middle" dominantBaseline="central" fontFamily={THEME.font} fontWeight={800} fontSize={r * 0.8} fill={contrastText(ELEMENT_COLORS[geo.example.outer])} pointerEvents="none">
              {geo.example.outer}
            </text>
          </g>),
            });
            // Callout + hover chip render on top of everything (depth 98/99)
            if (isSel)
                items.push({ depth: 99, el: callout(`cb${i}`, (cx + atomP.x) / 2, (cy + atomP.y) / 2, PART_LABELS.bond(geo)) });
            if (hovered === i && !isSel) {
                items.push({
                    depth: 98,
                    el: callout(`hv${i}`, atomP.x, atomP.y - r, `${geo.example.outer} — ${ELEMENT_NAMES[geo.example.outer]}`),
                });
            }
        });
        if (hovered === -1) {
            items.push({
                depth: 98,
                el: callout("hvc", cx, cy - R_CENTRAL, `${geo.example.central} — ${ELEMENT_NAMES[geo.example.central]} (central atom)`),
            });
        }
        // Lone pairs: translucent lobe + two electron dots, pointing outward
        loneDirs.forEach((dir, i) => {
            const tip = project(mul(dir, 0.9), effRot, cx, cy, scale);
            const base = project(mul(dir, 0.35), effRot, cx, cy, scale);
            const angle = (Math.atan2(tip.y - base.y, tip.x - base.x) * 180) / Math.PI;
            const mid = { x: (tip.x + base.x) / 2, y: (tip.y + base.y) / 2 };
            const len = Math.hypot(tip.x - base.x, tip.y - base.y);
            const lobeW = depthLerp(tip.depth, scale * 0.14, scale * 0.2);
            const isSel = selected?.kind === "lone" && selected.i === i;
            items.push({
                depth: tip.depth,
                el: (<g key={`lp${i}`} onClick={controlled ? undefined : toggleSelect("lone", i)} style={{ cursor: controlled ? undefined : "pointer" }} opacity={depthLerp(tip.depth, 0.7, 1)}>
            <g transform={`rotate(${angle} ${mid.x} ${mid.y})`}>
              <ellipse cx={mid.x} cy={mid.y} rx={Math.max(len / 2, 8)} ry={lobeW} fill={THEME.lonePair} opacity={isSel ? 0.55 : 0.28} stroke={isSel ? THEME.accentBright : "none"} strokeWidth={2.5} filter={isSel ? `url(#${uid}-glow)` : undefined}/>
              <circle cx={mid.x - len * 0.12} cy={mid.y} r={4} fill={THEME.lonePair}/>
              <circle cx={mid.x + len * 0.12} cy={mid.y} r={4} fill={THEME.lonePair}/>
            </g>
          </g>),
            });
            if (isSel)
                items.push({ depth: 99, el: callout(`cl${i}`, tip.x, tip.y, PART_LABELS.lone()) });
        });
        items.sort((a, b) => a.depth - b.depth); // far first
        // Settle bounce scales the whole scene about its centre. settleScale
        // is always exactly 1 in controlled mode.
        return (<g transform={settleScale === 1 ? undefined : `translate(${cx} ${cy}) scale(${settleScale}) translate(${-cx} ${-cy})`}>
        {items.map((it) => it.el)}
      </g>);
    };
    /* ---- 5a continued. GENERIC SHELL RENDER (FROZEN) ------------------ */
    const elementsUsed = [geo.example.central, geo.example.outer];
    return (<div style={styles.root}>
      <h3 style={styles.title}>VSEPR theory: shapes of molecules</h3>
      <p style={styles.subtitle}>
        Electron pairs around a central atom repel each other and arrange to be as far apart as possible.
      </p>

      {!fixedGeometry && (<div style={styles.controlsRow} role="tablist" aria-label="Molecular geometry">
          {GEOMETRIES.map((g) => (<button key={g.id} role="tab" aria-selected={g.id === activeId} style={{ ...styles.btn, ...(g.id === activeId ? styles.btnActive : {}) }} onClick={() => setActiveId(g.id)}>
              {g.name}
            </button>))}
        </div>)}

      <svg viewBox={`0 0 ${width} ${height}`} style={styles.stage} onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={onPointerUp} onPointerLeave={onPointerUp} onClick={controlled ? undefined : onStageClick} aria-label={`3D model of ${geo.example.formula}, ${geo.name} shape. Click bonds and lone pairs to learn what they are.`}>
        <defs>
          {/* Sphere gradient recipe: specular hot-spot → light body →
            base colour → shaded rim. Gives a glossy game-like ball. */}
          {elementsUsed.map((sym) => (<radialGradient key={sym} id={`${uid}-g-${sym}`} cx="33%" cy="27%" r="80%">
              <stop offset="0%" stopColor={lighten(ELEMENT_COLORS[sym], 0.85)}/>
              <stop offset="18%" stopColor={lighten(ELEMENT_COLORS[sym], 0.45)}/>
              <stop offset="62%" stopColor={ELEMENT_COLORS[sym]}/>
              <stop offset="100%" stopColor={darken(ELEMENT_COLORS[sym], 0.3)}/>
            </radialGradient>))}
          {/* Soft drop shadow under every atom (and callouts). */}
          <filter id={`${uid}-shadow`} x="-40%" y="-40%" width="180%" height="200%">
            <feDropShadow dx="0" dy="3.5" stdDeviation="4" floodColor={THEME.shadowInk} floodOpacity="0.28"/>
          </filter>
          {/* Aqua glow for the selected bond / lone pair. */}
          <filter id={`${uid}-glow`} x="-60%" y="-60%" width="220%" height="220%">
            <feDropShadow dx="0" dy="0" stdDeviation="5" floodColor={THEME.accentBright} floodOpacity="0.9"/>
          </filter>
        </defs>
        {renderScene()}
        <text x={12} y={height - 12} fontFamily={THEME.font} fontSize={13} fontWeight={800} fill={THEME.accentDeep}>
          {geo.example.formula}
        </text>
      </svg>

      {!controlled && (<div style={styles.hint}>
          <span>Drag to rotate · click a bond or lone pair to inspect it</span>
          <button style={{ ...styles.btn, fontSize: 11, padding: "2px 10px" }} onClick={() => setSpinning((s) => !s)}>
            {spinning ? "Pause spin" : "Auto-rotate"}
          </button>
        </div>)}

      <div style={styles.infoPanel}>
        <Info label="Electron domains" value={String(geo.electronDomains)}/>
        <Info label="Bonding pairs" value={String(geo.bondingPairs)}/>
        <Info label="Lone pairs" value={String(geo.lonePairs)}/>
        <Info label="Bond angle" value={geo.bondAngle}/>
        <Info label="Example" value={geo.example.formula}/>
      </div>
      <p style={styles.note}>{geo.note}</p>
      <button style={styles.detailBtn} onClick={() => setShowDetail((d) => !d)} aria-expanded={showDetail}>
        {showDetail ? "Hide" : "Why this shape?"}
      </button>
      {showDetail && <div style={styles.detailBox}>{geo.detail}</div>}
    </div>);
}
/* ---- small frozen helpers ------------------------------------------ */
function Info({ label, value }) {
    return (<div style={styles.infoItem}>
      <span style={styles.infoLabel}>{label}</span>
      <span style={styles.infoValue}>{value}</span>
    </div>);
}
const mul = (v, k) => ({ x: v.x * k, y: v.y * k, z: v.z * k });
/** Lighten a #rrggbb colour toward white by t ∈ [0,1]. */
function lighten(hex, t) {
    const n = parseInt(hex.slice(1), 16);
    const ch = (v) => Math.round(v + (255 - v) * t);
    const r = ch((n >> 16) & 255), g = ch((n >> 8) & 255), b = ch(n & 255);
    return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")}`;
}
/** Darken a #rrggbb colour toward black by t ∈ [0,1]. */
function darken(hex, t) {
    const n = parseInt(hex.slice(1), 16);
    const ch = (v) => Math.round(v * (1 - t));
    const r = ch((n >> 16) & 255), g = ch((n >> 8) & 255), b = ch(n & 255);
    return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")}`;
}
/** Black or white label text depending on background luminance. */
function contrastText(hex) {
    const n = parseInt(hex.slice(1), 16);
    const lum = 0.299 * ((n >> 16) & 255) + 0.587 * ((n >> 8) & 255) + 0.114 * (n & 255);
    return lum > 150 ? "#1e3a42" : "#ffffff";
}
