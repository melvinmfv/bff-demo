import { NextResponse } from 'next/server';
import * as jwt from 'jsonwebtoken';

export async function POST(req: Request) {
  if (req.method === 'POST') {
    const { username, password } = await req.json();
    if (username === 'melvin' && password === 'verylongpassword') {
      const user = { id: 1, username: 'Melvin' }
      const token = jwt.sign(user, 'secret-key')
      return NextResponse.json({ token }, { status: 200 });
    } else {
      return NextResponse.json({ status: 401 },);
    }
  } else {
    return NextResponse.json({ status: 405 },);
  }
}