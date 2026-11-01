import React from 'react';
import {Hook,Words,Islets,Insulin,Eases,Glucagon} from './s1';
import {Two,Checks,Memory} from './s2';
import {Attempt,Feedback1,Attempt2,Feedback2,Decision,Notes} from './s3';
export const SCENES:Record<string,React.FC>={hook:Hook,'three-words':Words,islets:Islets,insulin:Insulin,'insulin-eases':Eases,glucagon:Glucagon,'two-hormones':Two,'exam-checks':Checks,memory:Memory,attempt:Attempt,'feedback-one':Feedback1,'attempt-two':Attempt2,'feedback-two':Feedback2,'decision-rule':Decision,'key-notes':Notes};
