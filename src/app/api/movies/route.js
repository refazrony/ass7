import { NextResponse } from "next/server";
import { getMovies } from "@/Db/getData";

export async function GET() {
  const data = await getMovies();
  return NextResponse.json(data.results);
}
