import { NextResponse } from 'next/server'
import data from '@/data/user.json'

export async function GET() {
  return NextResponse.json(data)
}