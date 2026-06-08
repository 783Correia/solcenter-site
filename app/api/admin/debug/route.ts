import { NextResponse } from 'next/server'

export async function GET() {
  const pw = process.env.ADMIN_PASSWORD
  return NextResponse.json({
    has: !!pw,
    length: pw?.length ?? 0,
    first3: pw?.slice(0, 3) ?? '',
    last3: pw?.slice(-3) ?? '',
    hasNewline: pw?.includes('\n') ?? false,
  })
}
