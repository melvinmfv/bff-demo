import { NextResponse } from 'next/server'
import data from '@/data/noti.json'

export async function GET(request: Request) {
  return NextResponse.json(data, { status: 200 })
}