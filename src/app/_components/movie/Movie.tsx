import Image from "next/image";
import { Star } from "lucide-react";
import { Movie as MovieType } from "./type";

const Movie = ({ title, description, rating, image, tags }: MovieType) => {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-[#2a2a2a] bg-[#1a1a1a] transition-all duration-300 hover:border-[#D32F2F] hover:shadow-[0_0_15px_rgba(211,47,47,0.3)] hover:scale-[1.02]">
      <div className="aspect-[2/3] relative">
        <Image
          src={image}
          alt={`${title}-thumbnail`}
          fill
          className="object-cover transition-all duration-500 group-hover:brightness-[1.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
          <div className="flex items-center gap-1 mb-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`h-4 w-4 ${star <= rating ? "fill-[#D32F2F] text-[#D32F2F]" : "text-gray-500"}`}
              />
            ))}
          </div>
          <p className="text-sm line-clamp-3">{description}</p>
        </div>
      </div>
      <div className="p-4">
        <div className="flex gap-2 mb-2">
          {tags?.map((tag) => (
            <span
              key={tag.id}
              className="text-xs px-2 py-1 rounded bg-[#5E35B1]/20 text-[#5E35B1] border border-[#5E35B1]/30"
            >
              {tag.name}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-medium text-white group-hover:text-[#D32F2F] transition-colors duration-300">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default Movie;
