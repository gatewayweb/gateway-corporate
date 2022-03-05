import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import NavigationLink from './navigation-link';

const navigation = [
  {
    text: 'Contact',
    href: '/contact',
  },
  {
    text: 'Services',
    href: '/services',
  },
];

export default function Layout({ children }) {
  const date = new Date();
  const year = date.getFullYear();
  const org = {
    '@context': 'http://schema.org',
    '@type': 'Organization',
    name: 'Gateway Web',
    description:
      'Web development agency including web design, JAMStack development, Wordpress development, Ecommerce websites and more.',
    url: 'https://gatewayweb.net',
    telephone: '6172949889',
    sameAs: ['https://www.facebook.com/GW.Web', 'https://www.instagram.com/gatewayweb/'],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Boston',
      postalCode: '02101',
      addressCountry: 'United States',
    },
  };

  return (
    <>
      <Head>
        <link rel="canonical" key="canonical" href="https://gatewayweb.net" />
        <meta name="robots" content="follow, index" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <meta name="og:email" content="sam@gatewayweb.net" />
        <meta name="og:phone_number" content="+1-617-294-9889" />
        <meta name="og:site_name" content="Gateway Web" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gateway Web - Full Service Digital Solutions" />

        <meta
          name="og:image"
          key="og:image"
          content="https://media.graphcms.com/Bvl7soWDQIyGi9HQ1EYt
        "
        />
        <meta name="og:image:alt" key="og:image:alt" content="Gateway Web - Full Service Digital Solutions" />
        <meta
          name="og:description"
          key="og:description"
          content="Digital company specializing in creating high quality websites for enterprise."
        />
        <meta
          name="description"
          key="description"
          content="Digital company specializing in creating high quality websites for enterprise."
        />

        <meta name="og:type" content="website" />
        <meta name="og:url" content="https://gatewayweb.net/" />
      </Head>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />

      <div className="flex flex-col h-full min-h-screen pt-[80px]">
        <header className="flex px-6 py-4 fixed left-0 top-0 w-full h-[80px] z-20 bg-white bg-opacity-80 backdrop-filter backdrop-blur">
          <div className="w-full flex justify-center md:justify-start md:w-1/3">
            <Link href="/" passHref>
              <a className="transition-transform hover:scale-[1.02]">
                <Image src="/logo-2.png" width={247} height={49} />
              </a>
            </Link>
          </div>
          <div className="hidden md:w-2/3 md:flex justify-end items-center">
            <div className="">
              {navigation.map((link, index) => {
                return <NavigationLink key={index} href={link.href} text={link.text} />;
              })}
            </div>
          </div>
        </header>
        <main className="flex-grow flex flex-col">{children}</main>
        <footer className="py-8 bg-gray-800 px-6 flex justify-center max-w-full">
          <div className="opacity-90 flex flex-col justify-center">
            <Image src="/logo-white.svg" width={200} height={35} />
            <div className="flex justify-center flex-wrap text-gray-200 text-sm font-semibold uppercase py-4 max-w-full">
              <Link href="/">
                <a className="mx-2">Home</a>
              </Link>
              <Link href="/contact">
                <a className="mx-2">Contact</a>
              </Link>
              <Link href="https://www.facebook.com/GW.Web">
                <a target="_blank" className="mx-2">
                  Facebook
                </a>
              </Link>
              <Link href="https://www.instagram.com/gatewayweb/">
                <a target="_blank" className="mx-2">
                  Instagram
                </a>
              </Link>
            </div>
            <div className="text-gray-400 text-sm pl-2 text-center">&copy; Copyright {year} Gatewayweb.net</div>
          </div>
        </footer>
      </div>
    </>
  );
}
