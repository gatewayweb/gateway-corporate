import Head from 'next/head';

import Hero from '@/components/home/hero';
import Section1 from '@/components/home/section-1';
import Contact from '@/components/parts/contact';

export default function Home() {
  return (
    <>
      <Head>
        <title>Gateway Web - Web Design, Digital Marketing & Search Engine Optimization</title>
      </Head>
      <Hero />

      <Section1 />

      <div className="bg-gray-100">
        <div className="container px-6 mx-auto">
          <Contact />
        </div>
      </div>
    </>
  );
}
