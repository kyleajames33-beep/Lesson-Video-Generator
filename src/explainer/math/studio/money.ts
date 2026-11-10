// Money engine for the finance lessons (f09 to f15, root decision 50). No React.
// Two modes:
//   'exact' (default): the recurrence A(k) = A(k−1)(1 + r) − M in full precision, as the site and the HSC
//                      formulas work it; round only for display (toCents).
//   'cents': every month's interest is rounded to the nearest cent and the balance is held in whole
//            cents (integer arithmetic), as a bank statement does.
// Closed forms are given beside the schedules so a lesson can show either and check they agree.

export type MoneyMode = 'exact' | 'cents';
/** Round to whole cents (half away from zero). */
export const toCents = (v: number) => Math.sign(v) * Math.round(Math.abs(v) * 100 + 1e-9) / 100;

export type LoanRow = {month: number; opening: number; interest: number; repayment: number; closing: number};
/**
 * A reducing-balance loan month by month: interest goes on first, then the repayment comes off. The final
 * repayment is short (only what is owed), and the schedule stops at a zero balance or at maxMonths.
 */
export const loanSchedule = (P: number, r: number, M: number, maxMonths = 1200, mode: MoneyMode = 'exact'): LoanRow[] => {
	const rows: LoanRow[] = [];
	if (mode === 'cents') {
		let bal = Math.round(P * 100);
		const Mc = Math.round(M * 100);
		for (let k = 1; k <= maxMonths && bal > 0; k++) {
			const i = Math.round(bal * r);
			const owed = bal + i, pay = Math.min(Mc, owed);
			rows.push({month: k, opening: bal / 100, interest: i / 100, repayment: pay / 100, closing: (owed - pay) / 100});
			bal = owed - pay;
		}
		return rows;
	}
	let bal = P;
	for (let k = 1; k <= maxMonths && bal > 1e-9; k++) {
		const i = bal * r, owed = bal + i, pay = Math.min(M, owed);
		rows.push({month: k, opening: bal, interest: i, repayment: pay, closing: owed - pay < 1e-9 ? 0 : owed - pay});
		bal = owed - pay;
	}
	return rows;
};
/** Balance owing after n repayments (closed form, may go negative past the payoff): P(1 + r)ⁿ − M((1 + r)ⁿ − 1)/r. */
export const loanBalance = (P: number, r: number, M: number, n: number) => {
	const g = (1 + r) ** n;
	return r === 0 ? P - M * n : P * g - (M * (g - 1)) / r;
};
/** The equal repayment that clears P in n months: M = P r (1 + r)ⁿ / ((1 + r)ⁿ − 1). */
export const loanRepayment = (P: number, r: number, n: number) => {
	const g = (1 + r) ** n;
	return r === 0 ? P / n : (P * r * g) / (g - 1);
};
/** The largest loan that M a month clears in n months (present value): M((1 + r)ⁿ − 1)/(r(1 + r)ⁿ). */
export const loanPresentValue = (M: number, r: number, n: number) => {
	const g = (1 + r) ** n;
	return r === 0 ? M * n : (M * (g - 1)) / (r * g);
};
/** Exact (fractional) number of repayments to clear P: n = −log(1 − Pr/M)/log(1 + r); Infinity when M ≤ Pr. */
export const loanTerm = (P: number, r: number, M: number) => {
	if (r === 0) return P / M;
	if (M <= P * r) return Infinity;
	return -Math.log(1 - (P * r) / M) / Math.log(1 + r);
};
/** Whole repayments to clear the loan, and the short final repayment (exact mode). */
export const loanPayoff = (P: number, r: number, M: number) => {
	const n = loanTerm(P, r, M);
	if (!Number.isFinite(n)) return {repayments: Infinity, finalRepayment: NaN, totalPaid: Infinity, interest: Infinity};
	const whole = Math.ceil(n - 1e-9);
	const before = loanBalance(P, r, M, whole - 1);
	const finalRepayment = before * (1 + r);
	const totalPaid = M * (whole - 1) + finalRepayment;
	return {repayments: whole, finalRepayment, totalPaid, interest: totalPaid - P};
};

export type SavingsRow = {month: number; opening: number; interest: number; deposit: number; closing: number};
/** An account month by month: interest on the opening balance first, then the deposit (end of month). Negative deposits are withdrawals. */
export const savingsSchedule = (start: number, r: number, deposit: number | ((month: number) => number), months: number, mode: MoneyMode = 'exact'): SavingsRow[] => {
	const rows: SavingsRow[] = [];
	let bal = mode === 'cents' ? Math.round(start * 100) : start;
	for (let k = 1; k <= months; k++) {
		const d = typeof deposit === 'function' ? deposit(k) : deposit;
		if (mode === 'cents') {
			const i = Math.round(bal * r), dc = Math.round(d * 100);
			rows.push({month: k, opening: bal / 100, interest: i / 100, deposit: dc / 100, closing: (bal + i + dc) / 100});
			bal = bal + i + dc;
		} else {
			const i = bal * r;
			rows.push({month: k, opening: bal, interest: i, deposit: d, closing: bal + i + d});
			bal = bal + i + d;
		}
	}
	return rows;
};
/** Future value of n end-of-period deposits M at rate r: M((1 + r)ⁿ − 1)/r. */
export const annuityFV = (M: number, r: number, n: number) => (r === 0 ? M * n : (M * ((1 + r) ** n - 1)) / r);
/** Future value with a starting balance P as well: P(1 + r)ⁿ + M((1 + r)ⁿ − 1)/r. */
export const accountFV = (P: number, M: number, r: number, n: number) => P * (1 + r) ** n + annuityFV(M, r, n);
/** The deposit that reaches a goal FV in n periods: M = FV r/((1 + r)ⁿ − 1). Round UP to the cent to reach it. */
export const depositForGoal = (FV: number, r: number, n: number) => (r === 0 ? FV / n : (FV * r) / ((1 + r) ** n - 1));
/** Round a payment up to the next cent (a deposit that must reach a goal). */
export const ceilCents = (v: number) => Math.ceil(v * 100 - 1e-7) / 100;
/** Exact (fractional) number of deposits to reach a goal: n = log(1 + FV r/M)/log(1 + r). */
export const termForGoal = (FV: number, r: number, M: number) => (r === 0 ? FV / M : Math.log(1 + (FV * r) / M) / Math.log(1 + r));
/** A yearly rate compounded k times a year as the rate per period (6% p.a. monthly → 0.005). */
export const perPeriod = (annualPercent: number, periodsPerYear = 12) => annualPercent / 100 / periodsPerYear;
