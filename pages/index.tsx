import Head from 'next/head';
import Navbar from '../components/Navbar';
import { HeroSection } from '../container/homepage/HeroSection';
import { PromotionSection } from '../container/homepage/PromotionSection';

export default function Home() {
  return (
    <>
      <Head>
      <title>Museum Kebahariaan Jakarta</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <main>
        <HeroSection />
        <PromotionSection />
      </main>
    </>
  );
}
