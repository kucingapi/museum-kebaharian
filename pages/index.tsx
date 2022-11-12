import Head from 'next/head';
import { createContext, FC } from 'react';
import { API } from '../api';
import { Event } from '../api/interface/event/event';
import { Item } from '../api/interface/item/Item';
import { Test } from '../components/QrReader';
import { BuyTicketSection } from '../container/homepage/BuyTicketSection';
import { EventSection } from '../container/homepage/EventSection';
import { HeroSection } from '../container/homepage/HeroSection';
import { ItemsSection } from '../container/homepage/ItemsSection';
import { PromotionSection } from '../container/homepage/PromotionSection';
import { ApiContext } from '../contexts/ApiContext';
import { getDataFromAxios } from '../functions/getDataFromAxios';

interface HomeStaticProp {
  events: Event[];
  items: Item[];
}

export async function getStaticProps() {
  try {
    const eventsRes = await API.getAllEvent();
    const itemsRes = await API.getAllItem();

    return {
      props: {
        events: eventsRes.data.data,
        items: getDataFromAxios<Item[]>(itemsRes),
      },
    };
  } catch (error) {
    return { props: error };
  }
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
        <ApiContext.Provider value={props}>
          <HeroSection />
          <PromotionSection />
          <BuyTicketSection />
          <ItemsSection />
          <EventSection response={props.events} />
        </ApiContext.Provider>
        {/* <Test /> */}
      </main>
    </>
  );
};
export default Home;
