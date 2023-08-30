import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="description"
            content="Immerse yourself in the world of TOYS FROM TAIWAN, an electrifying music project by JAM. Join me, the one-man band, as I craft live looping instrumental jam sessions using an array of musical toys from Taiwan, including guitar pedals, keyboards, theremins, drum machines, and loop stations. Experience a fusion of psychedelic, surfer rock, indie vibes, vaporwave, and global influences in every live performance."
          />
          <link
            rel="shortcut icon"
            href={`${process.env.NEXT_PUBLIC_FAVICON}/favicon.ico`}
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Bungee+Inline&family=Cutive+Mono&family=Kirang+Haerang&family=Libre+Barcode+128+Text&family=Special+Elite&family=VT323&family=Zilla+Slab+Highlight&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <div id="overlays" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
