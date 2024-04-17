import { getMovieById } from "@/Db/getData";
import { notFound } from "next/navigation";

async function MovieDetails({ id }) {

    const data = await getMovieById(id);


    if (!data) {
        return notFound();
    }

    return (
        <section>
            <div>
                <img
                    className="w-full object-cover max-h-[300px] lg:max-h-[500px]"
                    src={data?.backdrop_path}
                    alt=""
                />
            </div>
            <div className="grid grid-cols-12 py-12 gap-8">
                <div className="col-span-2">
                    <img
                        src={data?.poster_path}
                        alt=""
                    />
                </div>
                <div className="col-span-8">
                    <h2 className="font-bold text-slate-300 text-2xl">
                        Godzilla x Kong: The New Empire
                    </h2>
                    <p className="my-2 text-slate-400 italic">
                        Following their explosive showdown, Godzilla and Kong must reunite
                        against a colossal undiscovered threat hidden within our world,
                        challenging their very existence – and our own.
                    </p>
                    <ul className="text-slate-300 space-y-2 my-8">
                        <li>Release Date : 2024-03-27</li>
                        <li>Average Vote : 7.5</li>
                        <li>Vote Count : 81</li>
                        <li>Popularity : 2461.857</li>
                    </ul>
                </div>
                <div className="col-span-2 space-y-4">
                    <button className="py-2 w-full bg-primary font-medium text-slate-800 rounded-md">
                        Stream In HD
                    </button>
                    <button className="py-2 w-full bg-primary font-medium text-slate-800 rounded-md">
                        Download In HD
                    </button>
                </div>
            </div>
        </section>
    );
}

export default MovieDetails;