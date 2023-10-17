import { NextResponse } from 'next/server';

const users = [
  { username: 'user', password: '123123', role: 'user' },
  { username: 'admin', password: '123123', role: 'admin' },
];


export async function POST(req: Request) {
  if (req.method === 'POST') {
    const { username, password } = await req.json();

    const user = users.find((u) => u.username === username && u.password === password);

    if (user) {
      const { password, ...userWithoutPassword } = user;
      return NextResponse.json({ user: userWithoutPassword }, { status: 200 })
    } else {
      return NextResponse.json({ error: 'Authentication failed' }, { status: 401 });
    }
  } else {
    return NextResponse.json({ status: 405 },);
  }
}