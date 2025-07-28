import Header from "../_components/Header";
import { Movies } from "../_components/movie";

export default function MoviesPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-50 font-body relative overflow-x-hidden">
      <Header />
      <main>
        <div className="mx-auto px-4 pt-8 pb-16">
          <h1 className="text-4xl font-edo mb-8 text-center neon-text-red">
            <span className="flicker-slow">HORROR</span> MOVIES
          </h1>
          <Movies />
        </div>
      </main>
    </div>
  );
}
