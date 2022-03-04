import Link from 'next/link';

export default function Cta({ title = 'Ready To Get Started?', linkText = 'Contact Us', link = '/contact' }) {
  return (
    <div className="container mx-auto mt-10">
      <Link href={link}>
        <a className="group relative overflow-hidden flex bg-blue-600 rounded-lg p-6 text-white justify-between items-center transition-all hover:bg-blue-700 w-[800px] max-w-full mx-auto">
          <div className="absolute w-1/6 h-[800px] left-0 bg-blue-300 opacity-10 rotate-45 transition-all duration-300 group-hover:-translate-x-[700px]"></div>
          <h3 className="tracking-wide">{title}</h3>
          <div className="font-bold relative">{linkText}</div>
        </a>
      </Link>
    </div>
  );
}
