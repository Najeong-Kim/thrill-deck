import { Clock, MapPin, Star } from "lucide-react";
import { EscapeRoomType } from "./type";
import PosterImage from "../movie/PosterImage";

const EscapeRoom = ({
  theme_name,
  branch_name,
  difficulty,
  horror_level,
  location,
  poster_image_url,
  play_time,
  synopsis,
}: EscapeRoomType) => {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-[#2a2a2a] bg-[#1a1a1a] transition-all duration-300 hover:border-[#D32F2F] hover:shadow-[0_0_15px_rgba(211,47,47,0.3)] hover:scale-[1.02]">
      <div className="aspect-[2/3] relative">
        <PosterImage
          posterPath={poster_image_url}
          className="object-cover transition-all duration-500 group-hover:brightness-[1.1]"
          fill
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
          <div className="flex items-center gap-4 mb-2">
            {difficulty && (
              <div className="flex items-center gap-1">
                <span className="text-xs text-gray-300">난이도:</span>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-3 w-3 ${star <= difficulty ? "fill-[#D32F2F] text-[#D32F2F]" : "text-gray-500"}`}
                    />
                  ))}
                </div>
              </div>
            )}
            {horror_level && (
              <div className="flex items-center gap-1">
                <span className="text-xs text-gray-300">공포도:</span>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-3 w-3 ${star <= horror_level ? "fill-purple-500 text-purple-500" : "text-gray-500"}`}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
          <p className="text-sm line-clamp-3">{synopsis}</p>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-medium text-white group-hover:text-[#D32F2F] transition-colors duration-300 mb-2">
          {theme_name}
        </h3>
        <div className="space-y-2 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>{branch_name}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>{location}</span>
          </div>
          {play_time && (
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{play_time}분</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EscapeRoom;
