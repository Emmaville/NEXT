import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        {/* Start of Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;700;900&display=swap"
          rel="stylesheet"
        />
        {/* End of Google Fonts */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
