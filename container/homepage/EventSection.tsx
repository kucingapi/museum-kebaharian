import { EventCard } from '../../components/homepage/EventCard';
import { SectionLayout } from '../../components/SectionLayout';
import history from '/public/assets/history.webp';
import drinks from '/public/assets/drinks.webp';

export const EventSection = () => {
  return (
    <SectionLayout className="bg-slate-100 py-12">
      <article className="prose pl-8">
        <h2>Pameran Spesial</h2>
      </article>
      <div className="w-full overflow-x-scroll">
        <div className="my-10 flex gap-14 w-fit pl-8">
          <EventCard
            title="Manusia & Bencana"
            date="26 Agustus - 26 Oktober 2022"
            description="Pada pameran Manusia dan Bencana akan memamerkan berbagai macam karya. Salah satuya yaitu puisi-puisi yang lahir akibat rasa kehilanagn yang dirasakan oleh bencana besar yang terjadi. Selain itu juga terdapat foto-foto lukisan bencana karya maestro pelukis ternama yang ada di Indonesia."
            type="Late"
            img={history.src}
          />
          <EventCard
            title="Manusia & Bencana"
            date="26 Agustus - 26 Oktober 2022"
            description="Pada pameran Manusia dan Bencana akan memamerkan berbagai macam karya. Salah satuya yaitu puisi-puisi yang lahir akibat rasa kehilanagn yang dirasakan oleh bencana besar yang terjadi. Selain itu juga terdapat foto-foto lukisan bencana karya maestro pelukis ternama yang ada di Indonesia."
            type="Late"
            img={drinks.src}
          />
        </div>
      </div>
    </SectionLayout>
  );
};
