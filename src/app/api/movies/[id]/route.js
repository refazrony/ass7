import { getMovieById } from "@/Db/getData";
import { NextResponse } from "next/server";

export async function PATCH(request, response) {
  const body = await request.json();
  const Movie = await getMovieById(response.params.id); // '1'

  if (!Movie) {
    return NextResponse.json({ error: "Movie Not found" }, { status: 404 });
  }
  const data = {
    ...body,
    vote_count: body.vote_count,
    vote_average: body.vote_average,
    adult: body.adult,
    overview: body.overview,
    popularity: body.popularity,
    poster_path: body.poster_path,
    release_date: body.release_date,
    backdrop_path: body.backdrop_path,
    genre_ids: body.genre_ids,
    original_language: body.original_language,
    original_title: body.original_title,
    title: body.title,
  };
  return NextResponse.json(data);
}

export async function GET(request, response) {
  const data = await getMovieById(response.params.id); // '1'
  if (!data) {
    return NextResponse.json({ error: "Movie Not found" }, { status: 404 });
  }
  return NextResponse.json(data);
}

export async function DELETE(request, response) {
  const data = await getMovieById(response.params.id); // '1'
  if (!data) {
    return NextResponse.json({ error: "Movie Not found" }, { status: 404 });
  }
  return NextResponse.json({
    message: "Data deleted successfully movie id (" + response.params.id + ")",
  });
}
