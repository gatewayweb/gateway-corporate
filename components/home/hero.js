import { useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

export default function Hero() {
  const section = useRef();
  const selector = gsap.utils.selector(section);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(selector('.hero-overlay'), { opacity: 0.8, duration: 1.5 });
    tl.to(selector('h1'), { opacity: 0.9, duration: 2 }, '-=1.25');
    tl.from(selector('.hero-subtitle'), { opacity: 0, duration: 1.5 }, '-=1.5');
    tl.to(selector('#arrow-down'), { y: 10, duration: 0.5, yoyo: true, repeat: -1 });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={section}
      className="relative flex justify-center items-center w-full h-[400px] lg:h-[800px] overflow-hidden"
    >
      <Image
        layout="fill"
        objectFit="cover"
        objectPosition="center center"
        src="/home-hero-bg.jpg"
        className="opacity-60"
      />
      <div className="hero-overlay opacity-0 absolute h-full w-full left-0 top-0 bg-gradient-radial from-black to-transparent"></div>

      <div className="hero-content relative">
        <h1 className="opacity-0 text-white">
          Welcome to your <span className="font-black">Gateway</span>
        </h1>
        <div className="hero-subtitle text-center text-lg pt-4 uppercase tracking-wide text-gray-400 font-bold">
          Full Service Digital Solutions
        </div>
      </div>

      <div
        className="absolute w-full left-0 bottom-10 text-gray-300 text-center flex flex-col justify-center"
        id="arrow-down"
      >
        <Image height={50} width={50} src="/arrow.svg" />
      </div>
    </div>
  );
}
