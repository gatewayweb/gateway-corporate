import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import NavigationLink from './navigation-link';

const navigation = [
  {
    text: 'Our Work',
    href: '/our-work',
  },
  {
    text: 'Contact',
    href: '/contact',
  },
];

export default function Layout({ children }) {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
      </Head>
      <div className="flex flex-col h-full min-h-screen pt-[80px]">
        <header className="grid grid-cols-12 px-6 py-4 fixed left-0 top-0 w-full h-[80px] z-20 bg-white bg-opacity-60 backdrop-filter backdrop-blur">
          <div className="col-span-12 flex justify-center md:justify-start md:col-span-4">
            <Link href="/" passHref>
              <a className="transition-transform hover:scale-[1.02]">
                <Image src="/logo-2.png" width={247} height={49} />
              </a>
            </Link>
          </div>
          <div className="hidden md:col-span-8 md:flex justify-end items-center">
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
              <Link href="#">
                <a className="mx-2">Home</a>
              </Link>
              <Link href="#">
                <a className="mx-2">Our Work</a>
              </Link>
              <Link href="#">
                <a className="mx-2">Contact</a>
              </Link>
              <Link href="#">
                <a className="mx-2">Facebook</a>
              </Link>
              <Link href="#">
                <a className="mx-2">Instagram</a>
              </Link>
            </div>
            <div className="text-gray-400 text-sm pl-2 text-center">&copy; Copyright {year} Gatewayweb.net</div>
          </div>
        </footer>
      </div>
    </>
  );
}
