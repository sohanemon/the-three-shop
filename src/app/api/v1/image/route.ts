import { fetchImageWithPrompt } from '@/utils/generate-image';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  return NextResponse.json({ msg: 'This is the image generation route.' });
}

export async function POST(req: Request) {
  const data = await req.json();
  const url = await fetchImageWithPrompt(data.prompt);
  return NextResponse.json({ url });
}
