import ai from '@/lib/openai';

export async function fetchImageWithPrompt(prompt: string) {
  try {
    const result = await ai.createImage({
      prompt,
      n: 1,
      size: '1024x1024',
    });
    return result.data.data[0].url;
  } catch (error) {
    console.log('🛑 ~ GET ~ error:', error);
  }
}
