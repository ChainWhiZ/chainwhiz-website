import Head from "next/head";
import Image from "next/image";
import Landing from "../layout/Landing/Landing";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Chainwhiz</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#d4ff1f" />
        <meta
          key="description"
          name="description"
          content="Chainwhiz is an open-source bounty marketplace on Polygon connecting Web3 protocols and DAOs with builders, contributors, and communities."
        />
         <meta
          key="image"
          name="image"
          content="./chainwhiz-assests/logo.svg"
        />
        <meta key="og:title" name="og:title" content="Chainwhiz" />
        <meta
          key="og:description"
          name="og:description"
          content="Chainwhiz is an open-source bounty marketplace on Polygon connecting Web3 protocols and DAOs with builders, contributors, and communities."
        />
        <meta key="og:url" name="og:url" content="https://chainwhiz.app" />
        <meta
          key="og:image"
          name="og:image"
          content={"https://iili.io/j5IbyB.jpg"}
        />
        <meta key="og:image:alt" name="og:image:alt" content="Chainwhiz" />
        <meta key="og:locale" name="og:locale" content="en_US" />
        <meta key="og:site_name" name="og:site_name" content="Chainwhiz" />
        <meta key="twitter:card" name="twitter:card" content="summary_large_image"/>
        <meta key="twitter:site" name="twitter:site" content="@chainwhiz" />
        <meta key="twitter:creator" content="@chainwhiz" />
        <meta key="twitter:creator" name="twitter:creator" content="@chainwhiz" />
        <meta key="twitter:site" name="twitter:site" content="@chainwhiz" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>
      <Landing />
    </div>
  );
}
