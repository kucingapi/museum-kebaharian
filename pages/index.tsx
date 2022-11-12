import Head from 'next/head';
import { FC } from 'react';
import { API } from '../api';
import { Event } from '../api/interface/event/event';
import { Test } from '../components/QrReader';
import { BuyTicketSection } from '../container/homepage/BuyTicketSection';
import { EventSection } from '../container/homepage/EventSection';
import { HeroSection } from '../container/homepage/HeroSection';
import { ItemsSection } from '../container/homepage/ItemsSection';
import { PromotionSection } from '../container/homepage/PromotionSection';

interface HomeStaticProp {
  response: Event[];
}

export async function getStaticProps() {
  const res = await API.getAllEvent();

  return {
    props: {
      response: res.data.data,
    },
  };
}

const Home: FC<HomeStaticProp> = (props) => {
  // console.log(props.response);

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
        <EventSection response={props.response} />
        {/* <Test /> */}
      </main>
    </>
  );
};
export default Home;
