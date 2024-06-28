import { db } from "@/app/utils/db";

export async function GET(req: Request) {

  const result = await db.swap.findMany()
  // Loading the demo data
  return Response.json(result);
}
