"use client";

import { useApi } from "@/hooks/useApi";
import Movie from "./Movie";
import { Movie as MovieType } from "./type";

const Movies = () => {
  const { data, loading } = useApi<{ movies: MovieType[] }>("/movies");

  if (loading) return <div>Loading...</div>;

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
      {data?.movies.map((movie) => <Movie key={movie.id} {...movie} />)}
    </section>
  );
};

export default Movies;
