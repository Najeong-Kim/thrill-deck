import Header from "./_components/Header";
import Hero from "./_components/Hero";
import { Movies } from "./_components/movie";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-50 font-body relative overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <div className="mx-auto px-4 pt-4 pb-16">
          <Movies />
        </div>
      </main>
    </div>
  );
}
