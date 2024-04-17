import MovieDetails from "@/components/MovieDetails";

async function MovieDetailsById({ params: { movieId } }) {

    return (
        <MovieDetails id={movieId} />
    );
}

export default MovieDetailsById;