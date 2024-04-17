import Modal from "@/components/Modal";
import MovieDetails from "@/components/MovieDetails";

async function movieModal({ params: { movieId } }) {

    return (
        <Modal>
            <MovieDetails id={movieId} />
        </Modal>
    );
}

export default movieModal;