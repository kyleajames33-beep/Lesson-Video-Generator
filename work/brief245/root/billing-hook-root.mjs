// Brief 194: account for each paid response without requiring user_read.
import fs from 'node:fs';
import crypto from 'node:crypto';
const ledger='work/brief245/root/spend-elevenlabs.json', nativeFetch=globalThis.fetch;
globalThis.fetch=async (url,options)=>{
 if(String(url)!=='https://api.elevenlabs.io/v1/text-to-dialogue/with-timestamps') throw Error('Only the authorised v4 speech endpoint may be called');
 const body=JSON.parse(options.body),sent=body.inputs.reduce((n,input)=>n+input.text.length,0);
 let spend=JSON.parse(fs.readFileSync(ledger,'utf8'));
 if(spend.requests.some(r=>r.status==='pending'||r.status==='unknown'))throw Error('Unresolved earlier paid request. Stop without retry');
 if(spend.cumulativeBilledCharacters+sent>(spend.cap??40000))throw Error('run budget reached (cap '+(spend.cap??40000)+')');
 const row={lesson:process.env.BRIEF194_LESSON,scene:process.env.BRIEF194_SCENE,sentCharacters:sent,textSha256:crypto.createHash('sha256').update(body.inputs.map(input=>input.text).join('')).digest('hex'),startedAt:new Date().toISOString(),status:'pending'};
 spend.requests.push(row);
 const save=()=>{
  for(const prior of spend.requests) if(prior.httpStatus===200 && prior.headerNamesRecorded!==true){
   prior.creditCostHeader=prior.characterCountHeader;prior.characterCountHeader=null;
   prior.billedCharacters=prior.sentCharacters;prior.billingBasis='sent characters (earlier saved header was character-cost, not a character count)';prior.headerNamesRecorded=true;
  }
  spend.cumulativeBilledCharacters=spend.requests.reduce((n,r)=>n+(r.billedCharacters??0),0);fs.writeFileSync(ledger,JSON.stringify(spend,null,2)+'\n');
 };
 save();
 try{
  const response=await nativeFetch(url,options);
  row.httpStatus=response.status;row.requestId=response.headers.get('request-id');
  const raw=response.headers.get('character-count')??response.headers.get('x-character-count');
  row.creditCostHeader=response.headers.get('character-cost');row.headerNamesRecorded=true;
  row.characterCountHeader=raw;
  row.billedCharacters=raw!==null&&Number.isFinite(Number(raw))?Number(raw):response.ok?sent:0;
  row.billingBasis=raw!==null?'response character-count header':response.ok?'sent characters':'HTTP error, no successful generation';
  row.status=response.ok?'response-received':'http-error';row.completedAt=new Date().toISOString();save();
  return response;
 }catch(e){row.status='unknown';row.error='Network request failed; billing unknown. Do not retry automatically';save();throw e;}
};
