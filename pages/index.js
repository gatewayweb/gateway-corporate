import Hero from '@/components/home/hero';
import Section1 from '@/components/home/section-1';
import Contact from '@/components/parts/contact';

export default function Home() {
  return (
    <>
      <Hero />

      <Section1 />

      <div className="bg-gray-100 py-12">
        <div className="container px-6 mx-auto">
          <div className="text-center">
            <h2>What do you need?</h2>
          </div>
          <Contact />
        </div>
      </div>
    </>
  );
}
