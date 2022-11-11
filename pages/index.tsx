import Head from 'next/head';
import Navbar from '../components/Navbar';
import { Test } from '../components/QrReader';
import { BuyTicketSection } from '../container/homepage/BuyTicketSection';
import { EventSection } from '../container/homepage/EventSection';
import { HeroSection } from '../container/homepage/HeroSection';
import { ItemsSection } from '../container/homepage/ItemsSection';
import { PromotionSection } from '../container/homepage/PromotionSection';

export default function Home() {
  return (
    <>
      <Head>
        <title>Museum Kebahariaan Jakarta</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Mueseum kebahariaan adalah museum kelatuan yang berada di jakarta. Kami buka dari senin-minggu dengan harga tiket Rp.5000"
          key="desc"
        />
      </Head>
      <main>
        <HeroSection />
        <PromotionSection />
        <BuyTicketSection />
        <ItemsSection />
        <EventSection />
        {/* <Test /> */}
      </main>
    </>
  );
}
