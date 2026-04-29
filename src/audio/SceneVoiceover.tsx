import React from 'react';
import {Audio, Sequence, staticFile} from 'remotion';
import type {SceneData} from '../lesson/types';

type SceneVoiceoverProps = {
  scene: SceneData;
};

const toStaticFilePath = (audioFile: string) => audioFile.replace(/^public[\\/]/, '').replace(/\\/g, '/');

export const SceneVoiceover = ({scene}: SceneVoiceoverProps) => {
  const audioFile = scene.voiceover?.audioFile;

  if (!audioFile) {
    return null;
  }

  const startFrame = scene.voiceover?.startFrame ?? 0;
  const endFrame = scene.voiceover?.endFrame ?? scene.durationInFrames;
  const trimAfter = Math.max(1, endFrame - startFrame);

  return (
    <Sequence from={startFrame} durationInFrames={trimAfter}>
      <Audio src={staticFile(toStaticFilePath(audioFile))} trimAfter={trimAfter} volume={0.96} />
    </Sequence>
  );
};
