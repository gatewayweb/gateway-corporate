import Link from 'next/link';

export default function NavigationLink({ href, text }) {
  return (
    <Link href={href} passHref>
      <a className="text-blue-900 ml-8 text-sm md:text-lg font-bold tracking-wide uppercase transition-colors hover:text-blue-700">
        {text}
      </a>
    </Link>
  );
}
