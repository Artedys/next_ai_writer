import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta property="og:title" content="ARTEDYS AI Generator v2 (tokenization)" key="title"/>
        <meta property="og:description" content="build with ARTEDYS" key="description"/>
        <meta
          property="og:image"
          content="https://ipfs.io/ipfs/QmWyaHKe7ECpTkodLXy44ErG54Dka1ofg2jjJF8j8yceHC?filename=New%20Logo%20Artedys.jpg"
        />
        <meta name="twitter:card" content="summary_large_image"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
