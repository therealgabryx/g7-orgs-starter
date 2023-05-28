import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="preconnect"
          href="https://rsms.me/"
        />
        <link
          rel="stylesheet"
          href="https://rsms.me/inter/inter.css"
        />
      </Head>
      {/* --> only for common head shared across pages */}
      <body className="scroll-smooth">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
