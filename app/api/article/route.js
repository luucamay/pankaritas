
import prisma from '../../../lib/prisma';
import { NextResponse } from 'next/server'

// POST /api/post
// Required fields in body: title
// Optional fields in body: content
export async function POST(req) {
  const data = await req.json();
  const { title, content } = data
  const result = await prisma.article.create({
    data: {
      title: title,
      description: content,
      durationSecs: 212121
    },
  });
  console.log(result)
  return NextResponse.json(result)
}