import { motion } from 'framer-motion';
import { FC } from 'react';
import { Button } from '../../components/Button';
import { SectionLayout } from '../../components/SectionLayout';
import bubleGroup from '../../public/assets/bubble-group.webp';

export const PromotionSection: FC = () => {
  return (
    <SectionLayout className="flex md:flex-row flex-col items-center justify-center px-6">
      <div className="p-6 grow-[5]">
        <motion.img
          whileHover={{ scale: 1.1, rotate: 20 }}
          whileTap={{
            scale: 0.8,
            rotate: -20,
          }}
          src={bubleGroup.src}
          alt="museum items"
        />
      </div>
      <article className="prose grow-[7] p-6 text-slate-100 flex flex-col gap-7">
        <h1 className="text-slate-100 mb-0">
          Foto di museum dapat merchandise{' '}
          <span className="text-accent">Gratis!</span>
        </h1>
        <p className="font-normal my-0">
          Dapatkan
          <span className="text-accent font-bold"> merchandise gratis </span>
          dengan upload foto di spot foto yang telah ditentukan. Kirimkan link
          postingan foto instagrammu disini dan jangan lupa tag instagram kami
          @museumkebaharianjkt!
        </p>
        <div>
          <div className="badge bg-accent text-black font-bold p-3">
            Terbatas
          </div>
          <p className="mt-0 text-xs">*untuk 10 orang/bulan</p>
        </div>
        <form className="flex flex-col gap-7">
          <input
            type="text"
            placeholder="Link URL"
            className="input input-info w-full "
          />
          <button
            className={`text-base gap-2 normal-case btn font-bold text-primary bg-slate-100 rounded-xl hover:bg-white`}
          >
            Kirim
          </button>
        </form>
      </article>
    </SectionLayout>
  );
};
