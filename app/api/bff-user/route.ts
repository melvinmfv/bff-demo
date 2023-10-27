import { NextResponse } from 'next/server'
import { headers } from "next/headers";

import * as jwt from 'jsonwebtoken'
import { NextApiRequest } from 'next'

export async function POST(req: NextApiRequest) {
  if (req.method === 'POST') {
    const headersList = headers();
    const token = headersList.get("authorization");
    if (token) {
      const profile = atob(token.split('.')[1])
      return NextResponse.json({ username: profile }, { status: 200 })
    }
    return NextResponse.json({ status: 400 })
  }
}