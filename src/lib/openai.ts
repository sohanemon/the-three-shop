import { OpenAIApi, Configuration } from 'openai';
/* ---------------------- setting up configuration --------------------- */
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

/* ---------------------- creating openai instance --------------------- */
const ai = new OpenAIApi(configuration);

export default ai;
