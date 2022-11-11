import { useRouter } from 'next/router';
import boat from '/public/assets/phinisi.webp';

const index = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <div className="px-28 py-20">
        <div className="flex gap-5">
          <img
            className="w-7/12 object-cover rounded-2xl"
            src={boat.src}
            alt="boat item"
          />
          <div className="w-5/12 flex flex-col gap-4">
            <img
              className="object-cover rounded-2xl"
              src={boat.src}
              alt="boat item"
            />
            <img
              className="object-cover rounded-2xl"
              src={boat.src}
              alt="boat item"
            />
          </div>
        </div>
      </div>
      <article className="prose bg-slate-100 max-w-full px-28 py-10">
        <h1 className="mb-0">Kapal Phinisi</h1>
        <div className="divider my-2"></div>
        <h4 className="font-normal">
          Perahu phinisi merupakan perahu yang digunakan oleh para nenek moyang
          dalam menjelajahi luasnya perairan Indonesia. Perahu phinisi yang
          dibuat memiliki bentuk yang berbeda dengan kapal pada umumnya yaitu
          karena memiliki bentuk seperti tempurung kelapa yang dipercaya
          memiliki ketahanan dalam berlayar. Selain itu, dalam pembuatan kapal,
          nenek moyang kita menggunakan pasak kayu yang dapat membuatnya semakin
          padat ketika terkena air.
        </h4>
      </article>
    </>
  );
};

export default index;
