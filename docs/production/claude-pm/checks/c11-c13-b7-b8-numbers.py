# Claude science check numbers for C11, C13, B7 and B8 (17 Oct). Run: python c11-c13-b7-b8-numbers.py
import itertools, re
from collections import Counter

print("== C11 ==")
dH = {"CaCl2": -81.3, "NH4NO3": 25.7, "NaCl": 3.9, "KNO3": 34.9, "NH4Cl": 14.8}
for k, v in dH.items():
    print(f"{k}: {v:+.1f} kJ/mol -> {'exothermic, water warms' if v < 0 else 'endothermic, water cools'}")
LE, HE = 787, (-406, -378)  # NaCl lattice enthalpy; single-ion hydration enthalpies (one common table)
print("NaCl lattice +787, hydration sum", sum(HE), "net", LE + sum(HE), "(measured +3.9)")
print("NaCl 1 mol in 1.00 L: dT =", round(3900 / (1000 * 4.18), 2), "C")
print("NH4Cl 5 C drop in 100 g water: q =", 100 * 4.18 * 5, "J; n =", round(2090 / 14800, 3), "mol; m =", round(2090 / 14800 * 53.49, 1), "g")
print("KNO3 63.9/31.6 =", round(63.9 / 31.6, 2))
# CaCl2 rough cycle check (one common table): lattice +2258, Ca2+ hydration -1577, Cl- -378 x 2
print("CaCl2 rough cycle: 2258 - 1577 - 2*378 =", 2258 - 1577 - 2 * 378, "(measured -81)")

print("== C13 ==")
def atoms(f):
    f = f.replace("(s)", "").replace("(aq)", "")
    c = Counter()
    def parse(s, mult):
        i = 0
        while i < len(s):
            if s[i] == "(":
                j = s.index(")", i)
                m = re.match(r"\d+", s[j + 1:])
                n = int(m.group()) if m else 1
                parse(s[i + 1:j], mult * n)
                i = j + 1 + (len(m.group()) if m else 0)
            else:
                m = re.match(r"([A-Z][a-z]?)(\d*)", s[i:])
                c[m.group(1)] += mult * (int(m.group(2)) if m.group(2) else 1)
                i += len(m.group())
    parse(f, 1)
    return c
def side(terms):
    tot = Counter()
    for coef, f in terms:
        for k, v in atoms(f).items():
            tot[k] += coef * v
    return tot
eqs = {
    "KCl + AgNO3": ([(1, "KCl"), (1, "AgNO3")], [(1, "AgCl"), (1, "KNO3")]),
    "2KI + Pb(NO3)2": ([(2, "KI"), (1, "Pb(NO3)2")], [(1, "PbI2"), (2, "KNO3")]),
    "Na2SO4 + Ba(NO3)2": ([(1, "Na2SO4"), (1, "Ba(NO3)2")], [(1, "BaSO4"), (2, "NaNO3")]),
    "CuSO4 + 2NaOH": ([(1, "CuSO4"), (2, "NaOH")], [(1, "Cu(OH)2"), (1, "Na2SO4")]),
    "AgNO3 + NaCl": ([(1, "AgNO3"), (1, "NaCl")], [(1, "AgCl"), (1, "NaNO3")]),
    "Mg(NO3)2 + 2NaOH": ([(1, "Mg(NO3)2"), (2, "NaOH")], [(1, "Mg(OH)2"), (2, "NaNO3")]),
    "KNO3 + NaCl (no ppt)": ([(1, "KNO3"), (1, "NaCl")], [(1, "NaNO3"), (1, "KCl")]),
}
for name, (l, r) in eqs.items():
    print(name, "balanced:", side(l) == side(r), dict(side(l)))
nets = {"Ag+ + Cl-": [(+1, 1), (-1, 1)], "Pb2+ + 2I-": [(+2, 1), (-1, 2)], "Ba2+ + SO4 2-": [(+2, 1), (-2, 1)], "Cu2+ + 2OH-": [(+2, 1), (-1, 2)], "Mg2+ + 2OH-": [(+2, 1), (-1, 2)]}
for n, t in nets.items():
    print("net", n, "charge left =", sum(q * k for q, k in t), "-> neutral solid")
Ksp = {"AgCl": 1.8e-10, "PbCl2": 1.7e-5, "PbI2": 7.1e-9, "BaSO4": 1.1e-10, "Mg(OH)2": 5.6e-12, "Cu(OH)2": 2.2e-20}
print("Ag+ left in 0.10 mol/L Cl-:", Ksp["AgCl"] / 0.10)
print("PbCl2 molar solubility (ideal):", round((Ksp["PbCl2"] / 4) ** (1 / 3), 4), "mol/L =", round((Ksp["PbCl2"] / 4) ** (1 / 3) * 278.1, 2), "g/L")
print("Ba(OH)2 39 g/L as mol/L:", round(39 / 171.34, 3))
# A3 with 0.10 mol/L reagents mixed 1:1: [Ba2+] = 0.05, [OH-] = 0.05
print("A3 Ba(OH)2 Q at 0.05/0.05:", 0.05 * 0.05 ** 2, "(Ksp Ba(OH)2 about 5e-3 so no ppt)")
print("A3 Mg(OH)2 Q at 0.05/0.05:", 0.05 * 0.05 ** 2, "> Ksp", Ksp["Mg(OH)2"], "-> white ppt")
print("Grid check, PbCl2 at 0.05/0.05: Q =", 0.05 * 0.05 ** 2, "> Ksp 1.7e-5 -> slight ppt possible")

print("== B7 ==")
bases = "UCAG"
aa = "FFLLSSSSYY**CC*WLLLLPPPPHHQQRRRRIIIMTTTTNNKKSSRRVVVVAAAADDEEGGGG"
three = {"F": "Phe", "L": "Leu", "S": "Ser", "Y": "Tyr", "*": "Stop", "C": "Cys", "W": "Trp", "P": "Pro", "H": "His", "Q": "Gln", "R": "Arg", "I": "Ile", "M": "Met", "T": "Thr", "N": "Asn", "K": "Lys", "V": "Val", "A": "Ala", "D": "Asp", "E": "Glu", "G": "Gly"}
code = {a + b + c: three[aa[i]] for i, (a, b, c) in enumerate(itertools.product(bases, repeat=3))}
for c in ["GAG", "GUG", "GAA", "CAU", "CAC", "CCU", "GUA"]:
    print(c, code[c])
print("sense codons:", sum(1 for v in code.values() if v != "Stop"))
beta = "VHLTPEEKSAVTALWGKVNVDEVGGEALGRLLVVYPWTQRFFESFGDLSTPDAVMGNPKVKAHGKKVLGAFSDGLAHLDNLKGTFATLSELHCDKLHVDPENFRLLGNVLVCVLAHHFGKEFTPPVQAAYQKVVAGVANALAHKYH"
print("mature beta globin length:", len(beta), "first seven:", "-".join(three[x] for x in beta[:7]), "residue 6:", three[beta[5]])
print("coding strand GAG -> GTG gives mRNA", "GAG".replace("T", "U"), "->", "GTG".replace("T", "U"))

print("== B8 ==")
def gametes(linked_pairs, unlinked, crossover=False):
    # linked_pairs: [("DE","de")] chromosomes; unlinked: [("F","f")]
    chrom_options = []
    for c1, c2 in linked_pairs:
        opts = [c1, c2]
        if crossover:
            opts = [c1[0] + c2[1], c2[0] + c1[1]]
        chrom_options.append(opts)
    for u in unlinked:
        chrom_options.append(list(u))
    return ["".join(p) for p in itertools.product(*chrom_options)]
print("no crossover:", gametes([("DE", "de")], [("F", "f")]))
print("crossover between D and E adds:", gametes([("DE", "de")], [("F", "f")], crossover=True))
yr = gametes([], [("Y", "y"), ("R", "r")])
print("YyRr gametes:", yr, "each 1/%d" % len(yr))
print("pairings:", len(yr) ** 2)
print("2^23 =", 2 ** 23, "; 2^23 x 2^23 = 2^46 =", 2 ** 46, "=", round(2 ** 46 / 1e12, 1), "trillion")
