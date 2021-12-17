import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function Section() {
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

    tl.from(selector('h2, .subtitle'), { y: 400, opacity: 0, stagger: 0.2 });
    tl.from(selector('.what-we-do-item'), { y: 400, opacity: 0, stagger: 0.1 });
  }, []);

  const services = [
    {
      name: 'Web',
      subtitle: 'We create high quality, modern and performant websites from small business to enterprise.',
    },
    {
      name: 'Digital',
      subtitle: 'We are experts with search engine optimization and social media marketing.',
    },
    {
      name: 'Print',
      subtitle: "We make beautiful print designs from brochures to posters that match your company's branding",
    },
  ];

  return (
    <div ref={section} className="lg:container mx-auto w-full max-w-full px-6 py-16">
      <h2 className="text-center">What We Do</h2>
      <div className="subtitle text-center w-[500px] max-w-full mx-auto text-lg my-6 text-gray-500">
        We do everything your business needs from web to digital marketing to physical print design.
      </div>
      <div className="grid grid-cols-12">
        {services.map((service) => {
          return (
            <div key={service.name} className="col-span-12 lg:col-span-4 p-4">
              <div className="what-we-do-item h-full border border-gray-100 rounded-lg shadow-xl px-6 py-12 text-center">
                <h3 className="text-2xl mb-4 text-blue-900">{service.name}</h3>
                <div className="text-gray-500 leading mt-2 mb-6 text-lg">{service.subtitle}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
