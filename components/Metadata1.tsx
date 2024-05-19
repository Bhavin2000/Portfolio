// components/Metadata.tsx
import Head from 'next/head';

export default function Metadata() {
  return (
    <Head>
      <title>Bhavin Raut | Personal Portfolio | Front End Developer</title>
      <meta name="description" content="Bhavin is a skilled Front End Developer specializing in modern web technologies." />
      <meta name="keywords" content="Bhavin Raut, Front End Developer, Web Developer, JavaScript, React, Portfolio" />
      <meta name="author" content="Bhavin Raut" />
      <meta name="google-site-verification" content="1EpbNQDkMSRVCSViQUNMDsbjRypZEQxSOnvXUtASB7w" />
      <link rel="canonical" href="https://bhavinraut.vercel.app/" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content="Bhavin Raut | Personal Portfolio | Front End Developer" />
      <meta property="og:description" content="Bhavin is a skilled Front End Developer specializing in modern web technologies." />
      <meta property="og:image" content="https://yourdomain.com/your-image.jpg" />
      <meta property="og:url" content="https://bhavinraut.vercel.app/" />
      <meta property="og:type" content="website" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Bhavin Raut | Personal Portfolio | Front End Developer" />
      <meta name="twitter:description" content="Bhavin is a skilled Front End Developer specializing in modern web technologies." />
{/*       <meta name="twitter:image" content="https://yourdomain.com/your-image.jpg" /> */}

      {/* Favicon Links */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
  );
}
