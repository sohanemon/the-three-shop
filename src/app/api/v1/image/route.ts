import { fetchImageWithPrompt } from '@/utils/generate-image';
import urlToBase64 from '@/utils/url-to-base64';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  return NextResponse.json({ msg: 'This is the image generation route.' });
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const url = await fetchImageWithPrompt(data.prompt);
    const base64 = urlToBase64(url!);
    return NextResponse.json({ url: base64 });
  } catch (e) {
    console.log(e);
  }
}
