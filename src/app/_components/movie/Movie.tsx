import { Star } from "lucide-react";
import { MovieType } from "./type";
import PosterImage from "./PosterImage";

const Movie = ({ title, overview, vote_average, poster_path }: MovieType) => {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-[#2a2a2a] bg-[#1a1a1a] transition-all duration-300 hover:border-[#D32F2F] hover:shadow-[0_0_15px_rgba(211,47,47,0.3)] hover:scale-[1.02]">
      <div className="aspect-[2/3] relative">
        <PosterImage
          posterPath={poster_path}
          className="object-cover transition-all duration-500 group-hover:brightness-[1.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
          <div className="flex items-center gap-1 mb-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`h-4 w-4 ${star <= Math.floor((vote_average ?? 0) / 2) ? "fill-[#D32F2F] text-[#D32F2F]" : "text-gray-500"}`}
              />
            ))}
          </div>
          <p className="text-sm line-clamp-3">{overview}</p>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-medium text-white group-hover:text-[#D32F2F] transition-colors duration-300">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default Movie;
