import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  return NextResponse.json({ msg: 'This is the image generation route.' });
}
