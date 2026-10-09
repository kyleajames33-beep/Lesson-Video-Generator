export const DEFAULT_TTS_MODEL = 'eleven_flash_v2_5';
export const buildSpeechRequest = ({text, voiceId, modelId = DEFAULT_TTS_MODEL, requestOptions = {}}) => {
  if (!requestOptions || typeof requestOptions !== 'object' || Array.isArray(requestOptions)) throw new Error('Request options must be an object.');
  if (Object.keys(requestOptions).length && modelId !== 'eleven_v4') throw new Error('Explicit request options are currently supported only for v4.');
  if (/\[\/?(?:STUDENT|NARRATOR)\]/i.test(text)) throw new Error('Speaker tags require the dialogue generator.');
  if (modelId === 'eleven_v4') {
    if (/<\/?(?:break|phoneme|prosody|speak)\b/i.test(text)) throw new Error('v4 does not support SSML. Use separate recordings and measured silence for response holds.');
    if (text.length > 2000) throw new Error('v4 timestamp requests are limited here to 2,000 characters; split the scene before generating.');
    // This pipeline keeps the timestamped Dialogue route for a single narrator.
    // Dialogue uses settings.similarity, rather than TTS voice_settings.similarity_boost.
    const allowed = ['stability', 'similarity', 'language_code', 'seed', 'apply_text_normalization', 'pronunciation_dictionary_locators'];
    if (Object.keys(requestOptions).some(key => !allowed.includes(key))) throw new Error('Unsupported v4 request option. Style, speed and SSML are not v4 controls.');
    const body = {inputs: [{text, voice_id: voiceId}], model_id: modelId};
    const settings = {};
    for (const key of ['stability', 'similarity']) if (requestOptions[key] !== undefined) {
      const value = requestOptions[key];
      if (!Number.isFinite(value) || value < 0 || value > 1) throw new Error(`${key} must be between 0 and 1.`);
      settings[key] = value;
    }
    if (Object.keys(settings).length) body.settings = settings;
    if (requestOptions.language_code !== undefined) {
      if (!/^[a-z]{2}$/u.test(requestOptions.language_code)) throw new Error('language_code must be an ISO 639-1 code, such as en. Accent is selected through the voice.');
      body.language_code = requestOptions.language_code;
    }
    if (requestOptions.seed !== undefined) {
      if (!Number.isInteger(requestOptions.seed) || requestOptions.seed < 0 || requestOptions.seed > 4294967295) throw new Error('Invalid v4 seed.');
      body.seed = requestOptions.seed;
    }
    if (requestOptions.apply_text_normalization !== undefined) {
      if (!['auto', 'on', 'off'].includes(requestOptions.apply_text_normalization)) throw new Error('Invalid text normalization mode.');
      body.apply_text_normalization = requestOptions.apply_text_normalization;
    }
    if (requestOptions.pronunciation_dictionary_locators !== undefined) {
      const locators = requestOptions.pronunciation_dictionary_locators;
      if (!Array.isArray(locators) || locators.length > 3 || locators.some(item => !item ||
          Object.keys(item).sort().join(',') !== 'pronunciation_dictionary_id,version_id' ||
          typeof item.pronunciation_dictionary_id !== 'string' || !item.pronunciation_dictionary_id.trim() ||
          typeof item.version_id !== 'string' || !item.version_id.trim())) throw new Error('Pronunciation dictionaries require explicit IDs and version IDs, at most three.');
      body.pronunciation_dictionary_locators = locators;
    }
    return {endpoint: 'https://api.elevenlabs.io/v1/text-to-dialogue/with-timestamps',
      body};
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
