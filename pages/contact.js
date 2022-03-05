import Head from 'next/head';

import Contact from '@/components/parts/contact';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Gateway Web - Contact - Web Design, Digital Marketing & Search Engine Optimization</title>
        <link rel="canonical" key="canonical" href="https://gatewayweb.net/contact" />
        <meta
          name="og:title"
          content="Gateway Web - Contact - Web Design, Digital Marketing & Search Engine Optimization"
        />
      </Head>

      <div className="bg-gray-50 py-20 h-full flex-grow flex items-center">
        <div className="container px-6 mx-auto">
          <Contact />
        </div>
      </div>
    </>
  );
}
