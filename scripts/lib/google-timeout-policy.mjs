export const isGoogleClientTimeout=e=>e?.name==='TimeoutError'||e?.cause?.name==='TimeoutError'||['ETIMEDOUT','UND_ERR_CONNECT_TIMEOUT','UND_ERR_HEADERS_TIMEOUT','UND_ERR_BODY_TIMEOUT'].includes(e?.cause?.code??e?.code);
export const googleTimeoutRequestKey=(lesson,scenes,textHashes)=>JSON.stringify([lesson,scenes,textHashes]);
export const googleTimeoutCount=(records,lesson,scenes,textHashes)=>records.filter(r=>googleTimeoutRequestKey(r.lesson,r.scenes,r.textHashes)===googleTimeoutRequestKey(lesson,scenes,textHashes)).reduce((n,r)=>Math.max(n,r.attempt??0),0);
export function googleTimeoutAction(error,attempt,priorTimeouts=0){
 if(!isGoogleClientTimeout(error))return 'other error';
 return attempt+priorTimeouts>=2?'stop lesson':'retry once';
}
