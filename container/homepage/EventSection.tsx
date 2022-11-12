import { EventCard } from '../../components/homepage/EventCard';
import { SectionLayout } from '../../components/SectionLayout';
import history from '/public/assets/history.webp';
import drinks from '/public/assets/drinks.webp';
import { FC } from 'react';
import { Event } from '../../api/interface/event/event';

interface EventStaticProp {
  response: Event[];
}

export const EventSection: FC<EventStaticProp> = (props) => {
  return (
    <SectionLayout className="bg-slate-100 py-12">
      <article className="prose pl-8">
        <h2>Pameran Spesial</h2>
      </article>
      <div className="w-full overflow-x-scroll">
        <div className="my-10 flex gap-14 w-fit pl-8">
          {props.response.map((data) => {
            return (
              <EventCard
                key={data.id}
                title={data.name}
                description={data.description}
                dateStart={data.start_date}
                dateEnd={data.expired_date}
                type="Berakhir"
                img={data.event_photo.original_url}
              />
            );
          })}
        </div>
      </div>
    </SectionLayout>
  );
};
