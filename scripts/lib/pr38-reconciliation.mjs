import {hash} from './science-audit.mjs';
export const reconciliationRefs=Object.freeze({base:'b3796f22c311e30df3778732a9cd254cc5029a22',historicalDraft:'858b8163d5ba199b8d39933e786c1b7fe88d09cc',preservedMain:'ca58c157f0349b29774f93a76cd041aefab3a2a2'});
export function narrationRelation(base,current,proposal){
 if(base===proposal)return 'not-a-historical-narration-change';
 if(current===proposal)return 'same-as-proposal';
 return current===base?'current-retains-baseline-text':'current-diverged-from-both';
}
export function audioReferenceStatus(scene){
 const text=scene.voiceover?.text,file=scene.voiceover?.audioFile;if(!text?.trim())return 'not-narrated';if(!file)return 'unwired';
 const token=file.match(/\.([a-f0-9]{12})\.(?:mp3|wav)$/iu)?.[1];if(!token)return 'unversioned-reference';
 return token===hash(text).slice(0,12)?'text-hash-matches-reference':'stale-text-hash-reference';
}
export function changedNarration(base,current,proposal){
 const index=lesson=>new Map(lesson.scenes.map(s=>[s.id,s])),b=index(base),c=index(current),p=index(proposal);
 if(b.size!==base.scenes.length||c.size!==current.scenes.length||p.size!==proposal.scenes.length)throw new Error('Duplicate scene ID');
 const changes=[];
 for(const id of new Set([...b.keys(),...p.keys()])){
  const before=b.get(id)?.voiceover?.text??null,after=p.get(id)?.voiceover?.text??null;if(before===after)continue;
  const active=c.get(id),now=active?.voiceover?.text??null;
  changes.push({scene:id,relation:narrationRelation(before,now,after),baseTextSha256:before===null?null:hash(before),currentTextSha256:now===null?null:hash(now),historicalTextSha256:after===null?null:hash(after),
   currentScenePresent:!!active,currentAudioReference:active?.voiceover?.audioFile??null,currentAudioStatus:active?audioReferenceStatus(active):'scene-missing'});
 }
 return changes;
}
export function heldScene({file,scene,sourceSha256,current,proposal,proposalSource,relation,disposition}){
 const currentText=current?.voiceover?.text??null,proposalText=proposal?.voiceover?.text??null;
 const blockers=['science-and-teacher-approval-pending','voice-settings-and-audio-authorisation-pending','measured-cues-captions-and-device-review-pending'];
 if(proposalSource==='historical-pr38')blockers.unshift('historical-proposal-not-integrated-with-current-source');
 if(relation==='current-diverged-from-both')blockers.unshift('current-narration-diverged-preserve-main-and-review-intent');
 if(!current)blockers.unshift('current-scene-missing');if(!proposalText)blockers.unshift('proposal-has-no-narration');
 if(proposalText?.includes('\u2014'))blockers.push('prohibited-punctuation-in-historical-candidate');
 return {file,scene,sourceSha256,sourceTextSha256:currentText===null?null:hash(currentText),candidateTextSha256:proposalText===null?null:hash(proposalText),proposalSource,disposition,relation,
  status:'hold',canExecute:false,blockers,nextAudioAction:!current||!proposalText?'review':current?.voiceover?.audioFile?'regenerate':'generate',
  currentAudioReference:current?.voiceover?.audioFile??null,currentAudioStatus:current?audioReferenceStatus(current):'scene-missing',audioGenerated:false,registered:false};
}
