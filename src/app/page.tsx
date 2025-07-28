import Header from "./_components/Header";
import Hero from "./_components/Hero";
import { Movies } from "./_components/movie";
import { EscapeRooms } from "./_components/escape-room";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-50 font-body relative overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <div className="mx-auto px-4 pt-4 pb-16 space-y-16">
          <section>
            <h2 className="text-3xl font-edo mb-8 text-center neon-text-red">
              <span className="flicker-slow">HORROR</span> MOVIES
            </h2>
            <Movies />
          </section>

          <section>
            <h2 className="text-3xl font-edo mb-8 text-center neon-text-purple">
              <span className="flicker-slow">ESCAPE</span> ROOMS
            </h2>
            <EscapeRooms />
          </section>
        </div>
      </main>
    </div>
  );
}
