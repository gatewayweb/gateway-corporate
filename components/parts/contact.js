import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import axios from 'axios';

import Button from './button';
import Link from 'next/link';

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

const FormSuccess = () => {
  return (
    <div className="py-12 text-center">
      <h2 className="text-green-600">Thank you!</h2>
      <div className="pt-4 text-lg font-semibold">We received your request and will be in touch shortly.</div>
    </div>
  );
};

const FormError = ({ swiper }) => {
  return (
    <div className="py-12 text-center">
      <h2 className="text-red-700">Could not submit your request</h2>
      <div className="pt-4 text-lg font-semibold">
        If this happens again, please email us directly at{' '}
        <Link href="mailto:sam@gatewayweb.net" passHref>
          <a className="text-blue-500">
            <strong>contact@gatewayweb.net</strong>
          </a>
        </Link>
      </div>
      <div className="text-center pt-8 w-full">
        <Button color="light-gray" customClasses="text-2xl mr-6 font-normal" onClick={() => swiper.slideTo(1)}>
          Try Again
        </Button>
      </div>
    </div>
  );
};

const hubspotPortal = 8782616;
const hubspotFormId = '75fc255b-4056-49fa-8131-313aaeb259c0';

export default function Contact() {
  const submitButton = useRef();
  const serviceNext = useRef();
  const section = useRef();
  const selector = gsap.utils.selector(section);

  const [swiper, setSwiper] = useState(null);

  const [form, setForm] = useState({
    services: [],
    email: '',
    details: '',
    success: false,
    fail: false,
  });

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const toggleService = (service) => {
    let services = [...form.services];
    if (form.services.includes(service)) {
      services = [...form.services].filter((currentService) => currentService !== service);
    } else {
      services.push(service);
    }
    setForm({ ...form, services });
  };

  const buttonNormal = 'bg-white text-gray-500 hover:text-gray-800 hover:border-gray-400';
  const buttonActive =
    'bg-blue-500 text-white border-blue-500 hover:text-gray-100 hover:border-blue-800 drop-shadow-lg';

  useEffect(() => {
    if (form.services.length) {
      gsap.to(serviceNext.current, { opacity: 1, y: 0, duration: 0.25 });
    } else {
      gsap.to(serviceNext.current, { opacity: 0, y: 10, duration: 0.25 });
    }
  }, [form.services]);

  useEffect(() => {
    if (form.email.length) {
      console.log(submitButton);
      gsap.to(submitButton.current, { opacity: 1, y: 0, duration: 0.25 });
    } else {
      gsap.to(submitButton.current, { opacity: 0, y: 10, duration: 0.25 });
    }
  }, [form.email]);

  const onSubmit = () => {
    if (form.services && form.services.length && form.email && form.email.length) {
      const formattedData = {
        fields: [
          {
            name: 'email',
            value: form.email,
          },
          {
            name: 'services_interest',
            value: form.services.join(', '),
          },
          {
            name: 'additional_details',
            value: form.details,
          },
        ],
      };
      axios
        .post(
          `https://api.hsforms.com/submissions/v3/integration/submit/${hubspotPortal}/${hubspotFormId}`,
          formattedData,
        )
        .then((response) => {
          if (!response || response.errors) {
            setForm({ ...form, fail: true, success: false });
          } else {
            setForm({ ...form, fail: false, success: true });
          }
          swiper.slideTo(3);
        })
        .catch(() => {
          setForm({ ...form, fail: true, success: false });
          swiper.slideTo(3);
        });
    }
  };

  return (
    <>
      <div ref={section} className="">
        <Swiper
          autoHeight={true}
          onSwiper={setSwiper}
          spaceBetween={50}
          slidesPerView={1}
          allowTouchMove={false}
          navigation={{ nextEl: '.contact-next-button', prevEl: '.contact-prev-button' }}
          modules={[Navigation]}
        >
          <SwiperSlide>
            <div className="flex flex-wrap justify-center w-[500px] max-w-full mx-auto">
              <div className="text-center">
                <h2>What do you need?</h2>
              </div>
              <div className="pt-4 pb-5 w-full min-w-full text-center text-gray-500">(Select as many as you want)</div>
              {services.map((service, index) => {
                const isActive = form.services.includes(service);
                return (
                  <button
                    key={index}
                    onClick={() => toggleService(service)}
                    className={`service-button group flex items-center border rounded  px-4 py-2 mb-2 mx-1 transition-all duration-200 font-semibold ${
                      isActive ? buttonActive : buttonNormal
                    }`}
                  >
                    {service}
                  </button>
                );
              })}

              <div ref={serviceNext} className="text-center pt-6 opacity-0 w-full">
                <Button customClasses="contact-next-button text-2xl">Next</Button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[500px] max-w-full mx-auto">
              <div className="text-center">
                <h2>One More Thing...</h2>
                <div className="px-6 pt-8">
                  <input
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    type="email"
                    className="h-10 block w-full rounded drop-shadow-xl px-6 text-center text-lg font-semibold"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="pt-8 px-6">
                  <div className="pb-2 text-center text-gray-500">Give us some more details (optional)</div>
                  <textarea
                    name="details"
                    onChange={onChange}
                    className="rounded drop-shadow-xl w-full h-24 p-4 resize-none"
                  ></textarea>
                </div>
                <div className="text-center pt-8 w-full flex justify-center">
                  <Button color="light-gray" customClasses="contact-prev-button text-2xl font-normal">
                    Back
                  </Button>

                  <div className="opacity-0" ref={submitButton}>
                    <Button customClasses="contact-next-button text-2xl ml-6" onClick={onSubmit}>
                      Submit
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {form.success ? (
              <FormSuccess />
            ) : form.fail ? (
              <FormError swiper={swiper} />
            ) : (
              <div className="text-lg text-gray-400">Loading...</div>
            )}
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
