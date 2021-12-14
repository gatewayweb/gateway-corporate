import Image from 'next/image';

import NavigationLink from './navigation-link';

export default function Layout({ children }) {
  return (
    <>
      <header className="grid grid-cols-12 px-6 py-4 fixed left-0 top-0 w-full h-[80px] z-20 bg-white bg-opacity-60 backdrop-filter backdrop-blur">
        <div className="col-span-12 flex justify-center md:justify-start md:col-span-4">
          <Image src="/logo-2.png" width={247} height={49} />
        </div>
        <div className="hidden md:col-span-8 md:flex justify-end items-center">
          <div className="">
            <NavigationLink href="#" text="Our Work" />
            <NavigationLink href="#" text="Contact" />
          </div>
        </div>
      </header>
      <main>{children}</main>
    </>
  );
}
