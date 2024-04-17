import { getMovies } from "@/Db/getData";
import Card from "@/components/Card";
import Image from "next/image";

export default async function Home() {
  const { results: movies } = await getMovies();

  return (

    <div className="content">
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">

        {
          movies.map((movie) => (
            <Card key={movie.id} data={movie} />
          ))
        }


      </div>
    </div>


  )
}
