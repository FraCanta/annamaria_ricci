import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="it">
      <Head>
        {/* Sitemap link */}
        <link
          rel="sitemap"
          type="application/xml"
          title="Sitemap"
          href="/sitemap.xml"
        />
        <meta
          name="google-site-verification"
          content="nrHV2MQ_ziMHOzgrljTK-sECIJk0ydVLb1GPPYIpQ_w"
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
