"use client";

import Link from "next/link";
import { useApi } from "@/hooks/useApi";
import Movie from "./Movie";
import { MoviesResponse } from "./type";

const MoviesPreview = () => {
  const { data, loading } = useApi<MoviesResponse>("/movies");

  if (loading) return <div>Loading...</div>;

  // Show only first 3 movies
  const previewMovies = data?.movies.slice(0, 3) || [];

  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
        {previewMovies.map((movie) => (
          <Movie key={movie.id} {...movie} />
        ))}
      </div>

      <div className="text-center">
        <Link
          href="/movies"
          className="inline-flex items-center px-6 py-3 bg-[#D32F2F] text-white font-medium rounded-lg hover:bg-[#B71C1C] transition-all duration-300 neon-glow-red"
        >
          View All Movies
        </Link>
      </div>
    </section>
  );
};

export default MoviesPreview;
