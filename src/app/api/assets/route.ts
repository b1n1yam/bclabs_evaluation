import { db } from '@/app/utils/db';
import { PrismaClient } from '@prisma/client';

export async function GET(req: Request) {

  const result = await db.asset.findMany()

  return Response.json(result);
}
