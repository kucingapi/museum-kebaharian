import { FC } from 'react';

interface eventCard {
  title: String;
  description: String;
  img: String;
  type: 'Active' | 'Coming';
  date: String;
}

export const EventCard: FC<eventCard> = (props) => {
  return (
    <div className="card lg:card-side bg-slate-50 shadow-xl md:min-w-[950px] min-w-0 w-[80vw]">
      <figure>
        {props.type == 'Active' ? (
          <span className="badge badge-success absolute m-6 top-0 left-0 text-slate-50 font-bold">
            Sedang berlangsung
          </span>
        ) : (
          <span className="badge badge-warning absolute m-6 top-0 left-0 text-slate-50 font-bold">
            Sedang berlangsung
          </span>
        )}

        <img className="lg:h-full lg:w-auto w-full h-80 object-cover" src={props.img.toString()} alt="Album" />
      </figure>
      <article className="card-body prose lg:w-1/2">
        <h2 className="card-title">{props.title}</h2>
        <p>{props.description}</p>
        <p className="mt-auto">{props.date}</p>
      </article>
    </div>
  );
};
