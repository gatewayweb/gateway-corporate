import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import { getService, getServiceSlugs } from '@/lib/api';
import Cta from '@/components/cta';

export default function Service({ service, slug }) {
  return (
    <>
      <Head>
        <title>{service.seo.title}</title>
        <link rel="canonical" key="canonical" href={`https://gatewayweb.net/services/${slug}`} />
        <meta name="og:description" key="og:description" content={service?.seo?.description} />
        <meta name="description" key="description" content={service?.seo?.description} />
      </Head>
      <div className="bg-gray-100 py-12 h-full flex-grow">
        <div className="container mx-auto text-center">
          <Link href="/services">
            <a className="inline-block px-4 py-1 border border-gray-300 rounded-full text-sm mb-6 hover:border-gray-400">
              Back to services
            </a>
          </Link>
          <h1 className="text-center">{service.title}</h1>
          {service?.subtitle ? (
            <div className="py-4 w-[800px] max-w-full text-lg mx-auto text-center">
              <strong>{service.subtitle}</strong>
            </div>
          ) : (
            <></>
          )}
          <div className="py-4 w-[800px] max-w-full text-lg mx-auto text-center">{service.content[0]}</div>
        </div>
        {service?.images?.length ? (
          <div className="bg-white py-16 my-10 px-6">
            <div className="container mx-auto flex flex-wrap justify-center">
              {service?.images?.map((logo, index) => {
                return (
                  <div className="w-1/2 md:w-1/3 xl:w-1/6 max-w-[200px] h-24 px-6" key={index}>
                    <div className="relative w-full h-full">
                      <Image src={logo.url} layout="fill" objectFit="contain" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <></>
        )}
        <div className="container">
          <div className="py-4 w-[800px] max-w-full text-lg mx-auto text-center">{service.content[1]}</div>
        </div>

        <Cta />
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const services = await getServiceSlugs();

  const paths = services.map((service) => {
    return {
      params: { slug: service.slug },
    };
  });

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const service = await getService(params?.slug);

  return { props: { service, slug: params.slug } };
}
