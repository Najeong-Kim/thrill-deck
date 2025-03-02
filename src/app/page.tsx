import Header from "./_components/Header";
import Hero from "./_components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-50 font-body relative overflow-x-hidden">
      <Header />
      <main>
        <Hero />
      </main>
    </div>
  );
}
