import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const res = await req.json();
  return NextResponse.json({ hi: 'hi hello', ...res });
}
