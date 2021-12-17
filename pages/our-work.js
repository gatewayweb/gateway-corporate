import Head from 'next/head';
import Link from 'next/link';

const work = [
  {
    name: 'Dannys Dozens',
    website: 'https://dannysdozens.com',
    description: '',
    image: '',
  },
  {
    name: 'Paul John & Son',
    website: 'https://pauljohnandson.com',
    description: '',
    image: '',
  },
  {
    name: 'KinCare at Home',
    website: 'https://kincareathome.com',
    description: '',
    image: '',
  },
  {
    name: 'Keenes Lake Campground',
    website: 'https://keeneslakecampground.com',
    description: '',
    image: '',
  },
  {
    name: 'SpareMonkey Studio',
    website: 'https://sparemonkeystudio.com',
    description: '',
    image: '',
  },
  {
    name: 'US Markerboard',
    website: 'https://usmarkerboard.com',
    description: '',
    image: '',
  },
];

export default function OurWorkPage() {
  return (
    <>
      <Head>
        <title>Gateway Web - Contact - Web Design, Digital Marketing &amp; Search Engine Optimization</title>
      </Head>

      <div className="bg-gray-100 py-12 px-6 h-full flex-grow">
        <div className="container mx-auto">
          <h1 className="text-center">Our Work</h1>
          <div className="py-4 w-[500px] max-w-full text-lg mx-auto text-center">
            While we cannot show all of our work, here are some recent examples (with our customers permission of
            course). Interested in hearing about what else we have been up to?{' '}
            <Link href="/contact" passHref>
              <a className="text-blue-500 font-semibold">Reach out to us</a>
            </Link>
          </div>
          <div className="grid grid-cols-12 pt-12">
            {work.map((item, index) => {
              return (
                <div key={index} className="col-span-12 lg:col-span-3 p-3">
                  <div className="bg-blue-900 w-full p-6 flex flex-col justify-end items-center rounded-lg">
                    <h3 className="text-white">{item.name}</h3>
                    <div className="text-gray-200 text-sm">{item.website}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
