import Head from 'next/head';

import Hero from '@/components/home/hero';
import Section1 from '@/components/home/section-1';
import Contact from '@/components/parts/contact';
import { getPage } from '@/lib/api';

export default function Home(props) {
  const { title, content } = props;

  return (
    <>
      <Head>
        <title>Gateway Web - Web Design, Digital Marketing & Search Engine Optimization</title>
      </Head>
      <Hero title={content[0]} subtitle={content[1]} image={props.images[0]} />

      <Section1 content={content} />

      <div className="bg-gray-50">
        <div className="container px-6 mx-auto">
          <Contact />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const data = await getPage('home');

  return { props: data };
}
