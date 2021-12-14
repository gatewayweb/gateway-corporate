import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';

import Button from './button';

export default function Contact() {
  const serviceNext = useRef();

  const services = [
    'New Website',
    'Search Engine Optimization',
    'Website Work',
    'Social Media',
    'Website Redesign',
    'Print Design',
    'Online Shop',
    'Other',
  ];

  const [form, setForm] = useState({
    services: [],
    email: '',
  });

  const toggleService = (service) => {
    let services = [...form.services];
    if (form.services.includes(service)) {
      services = [...form.services].filter((currentService) => currentService !== service);
    } else {
      services.push(service);
    }
    setForm({ ...form, services });
  };

  const buttonNormal = 'bg-white text-gray-500 hover:text-gray-800 hover:border-gray-500';
  const buttonActive =
    'bg-blue-500 text-white border-blue-500 hover:text-gray-100 hover:border-blue-800 drop-shadow-lg';

  useEffect(() => {
    if (form.services.length) {
      gsap.to(serviceNext.current, { opacity: 1, y: 0, duration: 0.25 });
    } else {
      gsap.to(serviceNext.current, { opacity: 0, y: 10, duration: 0.25 });
    }
  }, [form.services]);

  const servicesDone = () => {};

  return (
    <>
      <div className="w-[500px] max-w-full mx-auto flex flex-wrap justify-center">
        <div className="pt-4 pb-5 w-full min-w-full text-center text-gray-500">(Select as many as you want)</div>
        {services.map((service, index) => {
          const isActive = form.services.includes(service);
          return (
            <button
              key={index}
              onClick={() => toggleService(service)}
              className={`group flex items-center border rounded  px-4 py-2 mb-2 mx-1 transition-all duration-500 font-semibold ${
                isActive ? buttonActive : buttonNormal
              }`}
            >
              {service}
            </button>
          );
        })}
      </div>
      <div ref={serviceNext} className="text-center pt-6 opacity-0">
        <Button onClick={servicesDone} customClasses="text-2xl">
          Next
        </Button>
      </div>
    </>
  );
}
