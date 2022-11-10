import { CardInfo } from '../../components/homepage/CardInfo';
import { SectionLayout } from '../../components/SectionLayout';
import buildingWithFlag from '/public/assets/building-with-flag.webp';
import food from '/public/assets/food.webp';
import mortar from '/public/assets/mortar.webp';
import boat from '/public/assets/boat.webp';
import { Button } from '../../components/Button';

export const ItemsSection = () => {
  return (
    <SectionLayout className="">
      <div className="flex-col md:flex-row flex w-full">
        <div className="md:w-6/12">
          <img className="w-full" src={buildingWithFlag.src} alt="" />
        </div>
        <article className="p-12 text-right max-w-none md:w-6/12 flex flex-col justify-between items-end py-16">
          <article className="prose text-slate-100">
            <h1 className="text-slate-100">Museum Bahari</h1>
            <p>
              Museum yang menyimpan koleksi yang berhubungan dengan{' '}
              <span className="text-accent">
                kebaharian dan kenelayanan bangsa Indonesia{' '}
              </span>
              dari Sabang hingga Merauke yang berlokasi di seberang Pelabuhan
              Sunda Kelapa. Museum adalah salah satu dari delapan museum yang
              berada di bawah pengawasan dari Dinas Kebudayaan Permuseuman
              Provinsi Daerah Khusus Ibu kota Jakarta.
            </p>
          </article>
          <CardInfo />
        </article>
      </div>
      <div className="md:flex justify-between mt-20 mx-8">
        <div className="md:w-4/12">
          <img src={mortar.src} alt="mortar" />
        </div>
        <div className="md:w-7/12 mt-10 md:mt-0 md:ml-auto relative md:-translate-y-28">
          <img src={boat.src} alt="boat" />
          <img className="mt-10" src={food.src} alt="rempah rempah" />
        </div>
      </div>
      <div className="md:-translate-y-28">
        <article className="prose my-10 md:my-0 md:w-4/12 text-slate-100 mx-9 flex flex-col gap-5 md:absolute md:-translate-y-full">
          <h2 className="text-slate-100 mt-0 mb-0">
            Yuk, <span className="text-accent">temukan</span> sejarahnya!
          </h2>
          <h4 className="text-slate-100 font-normal mt-3">
            Temukan sejarah dan cerita tentang barang-barang bersejarah di
            Museum Bahari
          </h4>
          <input
            type="text"
            placeholder="Masukan kode yang tertera pada koleksi museum"
            className="input input-info w-full bg-white text-black rounded-2xl"
          />
          <Button className="bg-neutral w-fit self-end px-8">
            Cek Sejarahnya
          </Button>
        </article>
      </div>
    </SectionLayout>
  );
};
