import { useEffect } from 'react';
import Layout from '@/components/layout';
import Script from 'next/script';
import { useRouter } from 'next/router';

import { pageview } from '@/lib/gtag';

import '../styles/globals.css';

const GTM_ID = 'GTM-MCP6F5D';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  return (
    <Layout>
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${GTM_ID}`} />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GTM_ID}', {
          page_path: window.location.pathname,
        });
      `,
        }}
      />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
