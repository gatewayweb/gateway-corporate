import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Link from 'next/link';
gsap.registerPlugin(ScrollTrigger);

export default function Section({ content }) {
  const section = useRef();
  const selector = gsap.utils.selector(section);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section.current,
        start: 'top bottom-=200',
        end: 'center center',
        scrub: 0.5,
      },
    });

    tl.from(selector('h2, .subtitle'), { y: 400, opacity: 0 });
    tl.from(selector('.what-we-do-item'), { y: 400, opacity: 0 });
    tl.from(selector('.services-cta'), { y: 400, opacity: 0 }, '-=0.6');
  }, []);

  const services = [
    {
      name: content[2],
      subtitle: content[3],
    },
    {
      name: content[4],
      subtitle: content[5],
    },
  ];

  return (
    <div ref={section} className="lg:container mx-auto w-full max-w-full px-6 py-20">
      <h2 className="text-center">What We Do</h2>
      <div className="subtitle text-center w-[600px] max-w-full mx-auto text-lg mb-6 mt-2 text-gray-500">
        <strong>We can adapt to your business and create a customized experience.</strong>
      </div>
      <div className="flex flex-wrap justify-center">
        {services.map((service) => {
          return (
            <div key={service.name} className="w-full lg:w-1/3 p-4">
              <div className="what-we-do-item h-full border border-gray-100 rounded-lg shadow-md bg-white px-6 py-12 text-center">
                <h3 className="text-2xl mb-4 text-blue-900">{service.name}</h3>
                <div className="text-gray-500 leading mt-2 mb-6 text-lg">{service.subtitle}</div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="text-center">
        <Link href="/services">
          <a className="services-cta text-blue-500 font-bold mt-6 inline-block rounded-lg px-4 py-1 border border-blue-500">
            View All Services
          </a>
        </Link>
      </div>
    </div>
  );
}
