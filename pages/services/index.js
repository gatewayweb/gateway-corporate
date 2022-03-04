import Head from 'next/head';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      name: 'JAMStack Development',
      href: '/services/jamstack',
    },
    {
      name: 'Ecommerce Development',
      href: '/services/ecommerce',
    },
    {
      name: 'Wordpress Websites',
      href: '/services/wordpress',
    },
    {
      name: 'Digital Marketing',
      href: '/services/digital-marketing',
    },
    {
      name: 'Search Engine Optimization',
      href: '/services/digital-marketing',
    },
    {
      name: 'Print Design',
      href: '/contact',
    },
  ];
  return (
    <>
      <Head>
        <title>Gateway Web - Services - Web Development, JAMStack, Wordpress</title>
      </Head>
      <div className="bg-gray-100 py-12 px-6 h-full flex-grow">
        <div className="container mx-auto">
          <h1 className="text-center">Services</h1>
          <div className="py-4 w-[700px] max-w-full text-lg mx-auto text-center leading-snug">
            We provide a wide range of services for you and your business. When you work with us, we develop a{' '}
            <strong>personalized</strong> approach to ensure you get exactly what you need.
          </div>
          <div className="w-[800px] max-w-full mx-auto flex flex-wrap items-center justify-center pt-10">
            {services.map((service, index) => {
              return (
                <Link href={service.href} key={index}>
                  <a className="border border-blue-500 text-blue-500 font-bold rounded-full px-6 py-3 mb-4 mr-4 text-lg">
                    {service.name}
                  </a>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
