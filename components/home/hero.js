import { useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

export default function Hero({ title, subtitle, image }) {
  const section = useRef();
  const selector = gsap.utils.selector(section);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(selector('.hero-overlay'), { opacity: 0.2, duration: 4 });
    tl.to(selector('h1'), { opacity: 0.9, duration: 2 }, '-=3.25');
    tl.from(selector('.hero-subtitle'), { opacity: 0, duration: 1.5 }, '-=3');
    tl.to(selector('#arrow-down'), { y: 10, duration: 0.5, yoyo: true, repeat: -1 });

    return () => {
      tl.kill();
    };
  });

  return (
    <div
      ref={section}
      className="relative flex justify-center items-center w-full h-[400px] lg:h-[600px] overflow-hidden"
    >
      <Image
        layout="fill"
        objectFit="cover"
        objectPosition="center center"
        src={image.url}
        className="opacity-100 hero-img"
        priority={true}
      />
      <div className="hero-overlay opacity-0 absolute h-full w-full left-0 top-0 bg-gradient-radial from-blue-400 to-gray-400"></div>

      <div className="hero-content relative flex flex-col items-center">
        <h1 className="opacity-0 text-white text-center text-6xl md:text-8xl drop-shadow-xl">
          <strong>Your</strong> Gateway
        </h1>
        <div className="hero-subtitle border border-gray-300 rounded-full mt-8 bg-black bg-opacity-30 drop-shadow-lg">
          <div className="text-center text-lg py-3 px-8 uppercase tracking-wide text-gray-300 font-bold">
            {subtitle}
          </div>
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
