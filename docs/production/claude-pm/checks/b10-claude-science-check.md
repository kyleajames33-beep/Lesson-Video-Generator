# B10 Claude science check (17 Oct)

Scope: every number, cross, pedigree and claim in `lessons/bio-m5-b10.md` (Revision 1, re-checked against Revision 2). Arithmetic, X-linked crosses, ABO genotypes and pedigree logic recomputed by `c14-c15-b9-b10-numbers.py` in this folder. U+2014 search: none.

## Numbers (all confirmed by script)

| Item | Recomputed | Design | Result |
|---|---|---|---|
| Morgan F2 (Science 32:120, 1910) | 2,459 red females, 1,011 red males, 782 white males; total 4,252; no white females | same | correct |
| Red : white overall | 4.44 : 1 | "not 3 : 1" (author note) | correct |
| White share of males | 782 / 1,793 = 43.6 per cent | Rev 1 "exactly what Morgan saw"; Rev 2 "close to half" | **fixed** |
| X^R X^r x X^R Y | daughters X^R X^R, X^R X^r (all red); sons X^R Y, X^r Y (1 : 1) | same | correct |
| X^H X^h x X^H Y | affected son 1/4 of all children, 1/2 of sons; carrier daughter 1/4 of all, 1/2 of daughters; no affected daughters | same | correct |
| Male excess, q = 1/100 | males about 1/100, females about 1/10,000 | same | correct |
| Colour blindness X^B X^b x X^B Y | (a) 1/4 of all children; (b) 1/2 of sons; (c) no colour-blind daughters, 1/2 carriers | same | correct |
| Woman's genotype | unaffected with an X^b father: only X^B X^b | carrier | correct |
| C^R C^W x C^R C^W | 1 : 2 : 1 genotypes and phenotypes | same | correct |
| ABO genotypes | 6 (IA IA, IA IB, IA i, IB IB, IB i, ii), 4 groups | same | correct |
| IA i x IB i | AB, A, B, O, each 1/4 | same | correct |

## Pedigree logic (brute force)

| Pedigree | AD | AR | XR | XD | Design claim | Result |
|---|---|---|---|---|---|---|
| P4 (scene 5) | no | yes | yes | no | fits XR; also AR with a carrier spouse; taught as a pattern | correct |
| B9 P1 (recalled) | no | yes | no | no | not X-linked recessive (affected daughter, unaffected father) | correct; also not XD (I-1 affected, daughter II-3 unaffected) |
| Colour-blindness family | | | yes | | consistent | correct |

Scene 5 Revision 1 said the P1 condition "wasn't X-linked". True for P1, but the reasoning given rules out only the recessive form; Revision 2 says "wasn't X-linked recessive".

## Claims

- Drosophila and human females XX, males XY; *white*, F8 (haemophilia A) and the red and green opsin genes are on the X with no Y copy. Correct.
- F1 of white male x red females "all red": textbooks report all red; Morgan recorded 1,237 red plus 3 white males (author note). Acceptable.
- "Every single white-eyed fly was male" for the F2 cross. Correct.
- Father passes X to every daughter and Y to every son; never father to son; every daughter of an affected father is a carrier (for X-linked recessive). Correct.
- Haemophilia A: X-linked recessive, blood clots poorly. Correct.
- Snapdragon: one functional pigment-pathway allele gives less pigment, pink; red and white return in the F2, so no blending. Correct ("less", not "half").
- Roan Shorthorns: intermixed fully red and fully white hairs; roan x roan 1 : 2 : 1; co-dominance (HSC and site convention). Correct.
- ABO: IA and IB encode glycosyltransferases adding N-acetylgalactosamine (A) and galactose (B); the common O allele has a frameshift and makes a non-working enzyme. "Small sugar markers" for antigens: correct at this level. IA and IB co-dominant, both dominant over i. Correct.
- Typing tile: removed in Revision 2 (learning finding); no claim remains.

## Count

0 numerical errors. 0 pedigree errors. 2 wording findings (scene 3 "exactly"; scene 5 "X-linked" without "recessive"), both applied.

## Resolution

All findings are applied in Revision 2 of `lessons/bio-m5-b10.md`: scene 3 says the result matches Morgan's counts with "close to half the sons white-eyed" and an on-screen "1,011 : 782, close to 1 : 1" tag; scene 5 says "wasn't X-linked recessive"; the unnarrated typing tile is removed. Science is cleared for voicing.
