import type React from 'react';
import {Hook,Where,Trade,Guard,Aba,Loop} from './s1';
import {Cost,Xero,Australian,Compare} from './s2';
import {Attempt,Feedback1,Attempt2,Feedback2,Decision,Notes} from './s3';
export const SCENES:Record<string,React.FC>={hook:Hook,'where-water-goes':Where,'trade-off':Trade,'guard-cells':Guard,'aba-closes':Aba,'plant-loop':Loop,'cost-of-closing':Cost,xerophytes:Xero,'australian-examples':Australian,'response-or-built-in':Compare,attempt:Attempt,'feedback-one':Feedback1,'attempt-two':Attempt2,'feedback-two':Feedback2,'decision-rule':Decision,'key-notes':Notes};
