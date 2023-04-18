import '@/styles/globals.css'
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Pro Valorant Match Schedules</title>
        <meta name="description" content="View upcoming pro Valorant matches" key='description' />

        {/* Facebook Meta Tags */}
        <meta property="og:url" content="https://www.post-plant.com/" key='og-url' />
        <meta property="og:type" content="website" key='og-type' />
        <meta property="og:title" content="Pro Valorant Match Schedules" key='og-title' />
        <meta property="og:description" content="View upcoming pro Valorant matches" key='og-description' />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" key='twitter-card' />
        <meta property="twitter:domain" content="www.post-plant.com/" key='twitter-domain' />
        <meta property="twitter:url" content="https://www.post-plant.com/" key='twitter-url' />
        <meta name="twitter:title" content="Pro Valorant Match Schedules" key='twitter-title' />
        <meta name="twitter:description" content="View upcoming pro Valorant matches" key='twitter-description' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
