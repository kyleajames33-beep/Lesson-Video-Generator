# Claude science check numbers for C14, C15, B9 and B10 (17 Oct). Run: python c14-c15-b9-b10-numbers.py
# Ksp values: official NESA HSC Chemistry data sheet ("Solubility constants at 25 C", HSC exams 2019 onward,
# nsw.gov.au chemistry-formulae-sheet-data-sheet-periodic-table-hsc-exams-2019.pdf, read 17 Oct).
import itertools
from fractions import Fraction as F
from math import comb, sqrt

NESA = {  # compound: Ksp on the official sheet (subset used or relevant)
    "BaSO4": 1.08e-10, "Mg(OH)2": 5.61e-12, "PbI2": 9.8e-9, "Ag2CO3": 8.46e-12, "AgCl": 1.77e-10,
    "CaSO4": 4.93e-5, "PbSO4": 2.53e-8, "Ca(OH)2": 5.02e-6, "PbCl2": 1.70e-5, "PbBr2": 6.60e-6,
    "Ag2SO4": 1.20e-5, "CaCO3": 3.36e-9,
}
NOT_ON_SHEET = {"CaF2": 3.45e-11, "Ag2CrO4": 1.12e-12, "CaC2O4.H2O": 2.32e-9}  # CRC 84th ed. (reputable)

def g(x): return f"{x:.4g}"
cbrt = lambda x: x ** (1 / 3)

print("== Data sheet comparison (design value vs NESA) ==")
design = {"BaSO4": 1.08e-10, "CaF2": 3.45e-11, "Mg(OH)2": 5.61e-12, "PbI2": 9.8e-9, "Ag2CO3": 8.46e-12,
          "AgCl": 1.77e-10, "CaSO4": 4.93e-5, "PbSO4": 2.53e-8, "Ag2CrO4": 1.12e-12}
for k, v in design.items():
    if k in NESA:
        print(f"{k}: design {v:.3g}, NESA {NESA[k]:.3g} ->", "MATCH" if abs(v - NESA[k]) / NESA[k] < 1e-9 else "DIFFERS")
    else:
        print(f"{k}: design {v:.3g}, NOT ON NESA SHEET (CRC value {NOT_ON_SHEET[k]:.3g})")

print("\n== C14 ==")
K = NESA["BaSO4"]; s1 = sqrt(K); M_BaSO4 = 137.33 + 32.06 + 4 * 16.00
print("BaSO4 s =", g(s1), "; check s^2 =", g(1.04e-5 ** 2), "; g/L =", g(s1 * M_BaSO4), "M =", round(M_BaSO4, 2),
      "; 1.04e-5*233 =", g(1.04e-5 * 233))
K = NOT_ON_SHEET["CaF2"]; s3 = K / 4; s2 = cbrt(s3)
print("CaF2 s^3 =", g(s3), "; s =", g(s2), "; [F-] =", g(2 * s2), "; check 4(2.05e-4)^3 =", g(4 * 2.05e-4 ** 3))
trap = cbrt(K)
print("CaF2 s-for-2s: s =", g(trap), "; ratio =", g(trap / s2), "; (2s)^2=2s^2 trap s =", g(cbrt(K / 2)))
print("ratio s(CaF2)/s(BaSO4) =", g(s2 / s1))
print("AgCl s =", g(sqrt(NESA["AgCl"])), "(AgCl Ksp > BaSO4 Ksp, both 1:1, so AgCl more soluble:", NESA["AgCl"] > NESA["BaSO4"], ")")
sm = 1.12e-4
print("Mg(OH)2 from s=1.12e-4: [OH-] =", g(2 * sm), "Ksp =", g(sm * (2 * sm) ** 2), "(sheet 5.61e-12); exact s for sheet =",
      g(cbrt(NESA["Mg(OH)2"] / 4)), "; forgot double =", g(sm ** 3), "ratio", g(sm * (2 * sm) ** 2 / sm ** 3))
K = NESA["PbI2"]
print("PbI2 s^3 =", g(K / 4), "s =", g(cbrt(K / 4)), "; trap cbrt(K) =", g(cbrt(K)))
M_Ag2CO3 = 2 * 107.87 + 12.01 + 3 * 16.00
sa = 0.0354 / 275.8
print("Ag2CO3 M =", round(M_Ag2CO3, 2), "; s =", g(sa), "; [Ag+] =", g(2 * sa), "; Ksp =", g(4 * sa ** 3),
      "; from rounded s 1.28e-4:", g(4 * 1.28e-4 ** 3), "; sheet-consistent g/L =", g(cbrt(NESA["Ag2CO3"] / 4) * 275.8))
print("Ag2CO3 trap (0.0354 as s): 4*0.0354^3 =", g(4 * 0.0354 ** 3))

print("\n== C15 ==")
c = 0.010 / 2
print("CaSO4 equal vols 0.010: each", c, "Qsp", g(c * c), "< Ksp", NESA["CaSO4"], c * c < NESA["CaSO4"],
      "; undiluted", g(0.010 ** 2), "> Ksp", 0.010 ** 2 > NESA["CaSO4"])
nPb = 4.0e-3 * 0.0250; nS = 2.0e-4 * 0.0750; V = 0.100
q = (nPb / V) * (nS / V)
print("PbSO4: nPb", g(nPb), "nSO4", g(nS), "[Pb]", g(nPb / V), "[SO4]", g(nS / V), "Qsp", g(q), "Q/K", g(q / NESA["PbSO4"]))
Ks = NESA["AgCl"]; s_ex = (-0.10 + sqrt(0.01 + 4 * Ks)) / 2
print("AgCl in 0.10 Cl-: approx s", g(Ks / 0.10), "exact", repr(s_ex), "s/0.10 % =", g(Ks / 0.10 / 0.10 * 100),
      "; ratio to water", g(sqrt(Ks) / (Ks / 0.10)))
nPb = 1.0e-3 * 0.0200; nI = 2.0e-3 * 0.0300; V = 0.0500
q = (nPb / V) * (nI / V) ** 2
print("Attempt1: nPb", g(nPb), "nI", g(nI), "[Pb]", g(nPb / V), "[I]", g(nI / V), "Qsp", g(q), "<K", q < NESA["PbI2"],
      "; unsquared", g((nPb / V) * (nI / V)), "; undiluted", g(1.0e-3 * (2.0e-3) ** 2))

print("\n== B9 ==")
print("Mendel 787+277 =", 787 + 277, "; 787/277 =", g(787 / 277), "; 277/1064 =", g(277 / 1064))
for k in range(5):
    p = comb(4, k) * F(1, 4) ** k * F(3, 4) ** (4 - k)
    print(f"  exactly {k} short of 4: {p} = {float(p) * 100:.1f}%")
def cross(p1, p2):
    return sorted("".join(sorted(a + b)) for a in p1 for b in p2)
print("Tt x Tt", cross("Tt", "Tt"), "; TT x tt", cross("TT", "tt"), "; Tt x tt", cross("Tt", "tt"))
# chi-squared 52:48 vs 50:50
chi = (52 - 50) ** 2 / 50 + (48 - 50) ** 2 / 50
print("52:48 chi2 =", chi)

# Brute-force pedigree mode checker. person: (id, sex, affected, father, mother)
def fits(ped, mode):
    ids = [p[0] for p in ped]
    def options(sex):
        if mode in ("AD", "AR"):
            return ["AA", "Aa", "aa"]
        return (["HH", "Hh", "hh"] if sex == "F" else ["H", "h"])  # X-linked: h = trait allele
    def affected(gt, sex):
        if mode == "AD": return "A" in gt
        if mode == "AR": return gt == "aa"
        if mode == "XR": return gt == "h" if sex == "M" else gt == "hh"
        if mode == "XD": return "h" in gt
    def child_ok(c, f, m, sex):
        if mode in ("AD", "AR"):
            return any("".join(sorted(x + y)) == c for x in f for y in m)
        if sex == "M":
            return c in m  # son's X from mother
        return any("".join(sorted(f + y)) == c for y in m)  # daughter: father's X + one of mother's
    sexes = {p[0]: p[1] for p in ped}
    for combo in itertools.product(*[options(p[1]) for p in ped]):
        gt = dict(zip(ids, combo))
        ok = True
        for pid, sex, aff, fa, mo in ped:
            if affected(gt[pid], sex) != aff: ok = False; break
            if fa and not child_ok(gt[pid], gt[fa], gt[mo], sex): ok = False; break
        if ok:
            return True
    return False
P1 = [("I1", "M", True, None, None), ("I2", "F", False, None, None), ("II2", "M", False, "I1", "I2"),
      ("II3", "F", False, "I1", "I2"), ("II4", "M", False, None, None), ("III1", "F", True, "II4", "II3"),
      ("III2", "M", False, "II4", "II3")]
P2 = [("I1", "M", True, None, None), ("I2", "F", False, None, None), ("II1", "F", True, "I1", "I2"),
      ("II2", "M", False, "I1", "I2"), ("II3", "M", True, "I1", "I2"), ("II4", "M", False, None, None),
      ("III1", "M", True, "II4", "II1"), ("III2", "F", False, "II4", "II1")]
INSET = [("P1", "M", True, None, None), ("P2", "F", True, None, None), ("C", "F", False, "P1", "P2")]
P3 = [("I1", "M", True, None, None), ("I2", "F", True, None, None), ("II1", "F", False, "I1", "I2"),
      ("II2", "M", True, "I1", "I2"), ("II3", "F", True, "I1", "I2"), ("II4", "M", False, None, None),
      ("III1", "M", True, "II4", "II3"), ("III2", "F", False, "II4", "II3")]
P4 = [("I1", "M", True, None, None), ("I2", "F", False, None, None), ("II1", "F", False, "I1", "I2"),
      ("II2", "M", False, "I1", "I2"), ("II3", "F", False, "I1", "I2"), ("II4", "M", False, None, None),
      ("III1", "M", True, "II4", "II1"), ("III2", "F", False, "II4", "II1"), ("III3", "M", True, "II4", "II1")]
CB = [("I1", "M", True, None, None), ("I2", "F", False, None, None), ("II1", "F", False, "I1", "I2"),
      ("II2", "M", False, None, None)]  # colour-blindness attempt family
for name, ped in [("P1", P1), ("P2", P2), ("inset", INSET), ("P3", P3)]:
    print(name, {m: fits(ped, m) for m in ("AD", "AR", "XR", "XD")})
print("P3 next child of Aa x Aa unaffected (aa):", cross("Aa", "Aa").count("aa"), "/ 4")

print("\n== B10 ==")
print("Morgan F2: 2459 + 1011 + 782 =", 2459 + 1011 + 782, "; red:white =", g((2459 + 1011) / 782),
      "; white share of males =", g(782 / (1011 + 782)), "; males red:white", g(1011 / 782))
def xcross(mother, father):  # mother e.g. ("R","r"), father allele e.g. "R"
    d = ["".join(sorted([father, m], key=lambda a: (a.islower(), a))) for m in mother]
    s = [m + "Y" for m in mother]
    return d, s
print("Morgan XRXr x XRY:", xcross(("R", "r"), "R"))
print("Haemophilia XHXh x XHY:", xcross(("H", "h"), "H"), "-> affected son of all children 1/4, of sons 1/2")
print("q=1/100: males", 1 / 100, "females", (1 / 100) ** 2)
print("P4", {m: fits(P4, m) for m in ("AD", "AR", "XR", "XD")})
print("P1 (B9) XR fit:", fits(P1, "XR"), "; XD fit:", fits(P1, "XD"))
woman = [p for p in itertools.product(["HH", "Hh", "hh"]) if p[0] != "hh" and "h" in p[0]]  # unaffected, got h from I1
print("Colour-blindness family XR fit:", fits(CB, "XR"), "; woman's only genotype (unaffected, father X^h):", woman[0][0])
print("Colour blind: XBXb x XBY:", xcross(("B", "b"), "B"))
def abo(g1, g2):
    out = []
    for a in g1:
        for b in g2:
            pair = sorted([a, b], key=lambda x: {"A": 0, "B": 1, "i": 2}[x])
            ph = "AB" if pair == ["A", "B"] else ("O" if pair == ["i", "i"] else pair[0])
            out.append(("".join(pair), ph))
    return out
print("IAi x IBi:", abo("Ai", "Bi"))
gts = sorted({tuple(sorted(p, key=lambda x: "ABi".index(x))) for p in itertools.product("ABi", repeat=2)})
print("ABO genotypes:", len(gts), gts)
print("Snapdragon/roan CRCW x CRCW:", cross("RW", "RW"))
