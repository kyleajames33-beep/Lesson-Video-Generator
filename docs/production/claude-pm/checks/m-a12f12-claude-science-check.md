# m-a12f12 maths check

Revision 1, checked 4 November 2026. Source SHA-256 `49d5e2f126cb111b70e699e5b277e406bc6bef8d8eaa14d065e6dd11bb08d2e2`. Source-only check.

The 2024 action is supported by the fresh official [Financial mathematics page](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4572a048), with its glossary placeholders resolved against the programme codename crosswalk:

- `ci7d0e9fff`: “Identify an annuity as either an investment account with regular, equal contributions and interest compounding at the end of each period, or as a single sum investment from which regular equal withdrawals are made”.

Exact-rational SymPy evidence is in `work/brief161/f12.py` and `.json`. The savings balances are 200, 401 and 603.005; the first withdrawal-fund balance is 99349.09; and the $400 attempt reaches 1206.01 after three deposits. With 119 fixed withdrawals the final amount available is about $1050.33; a 120th $1050.91 withdrawal would overdraw the fund by about $0.58. The handoff and period counts agree with the stated timing.

1. **Should fix:** Specify nominal annual rates compounded at the payment frequency before using annual rate divided by payments per year.
2. **Should fix:** State the smaller final withdrawal when saying the rounded-payment fund reaches zero.

These are the learning review findings. Confirmed site findings, including the current superannuation guarantee rate, are recorded separately. Count: 0 blockers, 2 should fix, 0 optional.
