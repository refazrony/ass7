import Link from "next/link";

function Card({ data }) {
    const { title, poster_path, id } = data

    return (
        <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
            <img
                className="w-full object-cover"
                src={poster_path}
                alt=""
            />
            <figcaption className="pt-4">
                <h3 className="text-xl mb-1">{title}</h3>
                <p className="text-[#575A6E] text-sm mb-2">
                    Action/Adventure/Sci-fi
                </p>
                <div className="flex items-center space-x-1 mb-5">
                    <img src="./assets/star.svg" width={14} height={14} alt="" />
                    <img src="./assets/star.svg" width={14} height={14} alt="" />
                    <img src="./assets/star.svg" width={14} height={14} alt="" />
                    <img src="./assets/star.svg" width={14} height={14} alt="" />
                    <img src="./assets/star.svg" width={14} height={14} alt="" />
                </div>
                <Link
                    className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                    href={`movie/${id}`}
                >
                    <img src="./assets/tag.svg" alt="" />
                    <span>Details </span>
                </Link>
            </figcaption>
        </figure>
    );
}

export default Card;