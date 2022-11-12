import { renderToHTML } from 'next/dist/server/render';
import { FC } from 'react';

interface eventCard {
  title: String;
  description: String;
  img: String;
  type: 'Sedang_Berlangsung' | 'Akan_Datang' | 'Berakhir';
  dateStart: String;
  dateEnd: String;
}

export const EventCard: FC<eventCard> = (props) => {

  const cardState = () => {
    switch (props.type) {
      case 'Sedang_Berlangsung':
        return (
          <span className="badge badge-success absolute m-6 top-0 left-0 text-slate-50 font-bold">
            Sedang berlangsung
          </span>
        );
      case 'Akan_Datang':
        return (
          <span className="badge badge-warning absolute m-6 top-0 left-0 text-slate-50 font-bold">
            Akan Berlangsung
          </span>
        );
      case 'Berakhir':
        return (
          <span className="badge badge-error absolute m-6 top-0 left-0 text-slate-50 font-bold">
            Sudah Terlewatkan
          </span>
        );

      default:
        break;
    }
  };
  return (
    <div className="card lg:card-side bg-slate-50 shadow-xl md:min-w-[950px] min-w-0 w-[80vw]">
      <figure>
        {cardState()}
        <img
          className="lg:h-full lg:w-auto w-full h-80 object-cover"
          src={props.img.toString()}
          alt="Album"
        />
      </figure>
      <article className="card-body prose lg:w-1/2">
        <h2 className="card-title">{props.title}</h2>
        <p>{props.description}</p>
        <p className="mt-auto">
          {props.dateStart} - {props.dateEnd}
        </p>
      </article>
    </div>
  );
};
