import { NextRequest, NextResponse } from 'next/server';

const API_BASE_URL = process.env.API_BASE_URL;

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const targetPath = searchParams.get('url');

  if (!targetPath) {
    return NextResponse.json({ error: 'Missing "url" query param' }, { status: 400 });
  }

  try {
    const res = await fetch(`${API_BASE_URL}${targetPath}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });

    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (e) {
    return NextResponse.json({ error: e }, { status: 500 });
  }
}
