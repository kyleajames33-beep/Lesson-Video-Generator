// The owner specifies a 7 pm Sydney daily reset for this production account.
const sydney = new Intl.DateTimeFormat('en-CA', {timeZone:'Australia/Sydney',year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',hourCycle:'h23'});
export function googleQuotaDay(value = new Date()) {
  const date = new Date(value);
  if(!Number.isFinite(date.getTime()))throw Error('Invalid request-ledger timestamp');
  const parts=Object.fromEntries(sydney.formatToParts(date).map(p=>[p.type,p.value]));
  const day=new Date(Date.UTC(Number(parts.year),Number(parts.month)-1,Number(parts.day)-(Number(parts.hour)<19?1:0)));
  return day.toISOString().slice(0,10);
}
export const requestsInGoogleQuotaDay = (entries, now = new Date()) => entries.filter(entry=>googleQuotaDay(entry.at)===googleQuotaDay(now));
