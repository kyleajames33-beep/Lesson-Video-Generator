export const DEFAULT_TTS_MODEL = 'eleven_flash_v2_5';
export const buildSpeechRequest = ({text, voiceId, modelId = DEFAULT_TTS_MODEL}) => {
  if (/\[\/?(?:STUDENT|NARRATOR)\]/i.test(text)) throw new Error('Speaker tags require the dialogue generator.');
  if (modelId === 'eleven_v4') {
    if (text.length > 2000) throw new Error('v4 timestamp requests are limited here to 2,000 characters; split the scene before generating.');
    // v4 uses the Text to Dialogue API, including for a single narrator.
    // Use provider defaults: legacy style/speed settings are unsupported.
    return {endpoint: 'https://api.elevenlabs.io/v1/text-to-dialogue/with-timestamps',
      body: {inputs: [{text, voice_id: voiceId}], model_id: modelId}};
  }
  if (!['eleven_flash_v2_5', 'eleven_turbo_v2_5', 'eleven_multilingual_v2', 'eleven_v3'].includes(modelId)) {
    throw new Error(`Unsupported narration model: ${modelId}`);
  }
  const limit = modelId === 'eleven_v3' ? 5000 : modelId === 'eleven_multilingual_v2' ? 10000 : 40000;
  if (text.length > limit) throw new Error(`${modelId} input exceeds ${limit} characters.`);
  return {endpoint: `https://api.elevenlabs.io/v1/text-to-speech/${encodeURIComponent(voiceId)}/with-timestamps`,
    body: {text, model_id: modelId,
      voice_settings: modelId === 'eleven_v3' ? {stability: 0.5} :
        {stability: 0.5, similarity_boost: 0.75, style: 0.3, use_speaker_boost: true, speed: 1.0}}};
};

export const validateSpeechPayload = payload => {
  const alignment = payload.alignment;
  const chars = alignment?.characters, starts = alignment?.character_start_times_seconds, ends = alignment?.character_end_times_seconds;
  if (!payload.audio_base64 || !Array.isArray(chars) || !Array.isArray(starts) || !Array.isArray(ends) || !ends.length || chars.length !== starts.length || starts.length !== ends.length ||
      ends.some((end, i) => !Number.isFinite(end) || !Number.isFinite(starts[i]) || starts[i] < 0 || end < starts[i] || (i > 0 && end < ends[i - 1]))) {
    throw new Error('Provider returned missing or invalid audio/alignment; output was not saved.');
  }
  return alignment;
};
