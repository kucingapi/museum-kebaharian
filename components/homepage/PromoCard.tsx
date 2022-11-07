import { motion } from 'framer-motion';
import { Button } from '../Button';

export const PromoCard = () => {
  return (
    <motion.article
      whileTap={{
        borderRadius: '100%',
        maxWidth: '384px',
        padding: '56px',

      }}
      className="prose absolute bg-slate-100 z-50 p-7 ml-16 bottom-0 rounded-t-3xl max-w-xs "
      // className="prose absolute bg-slate-100 z-50 p-14 ml-16 bottom-0 rounded-full max-w-sm"
    >
      <h2 className='leading-tight'>
        Berpetualang dan Mengeksplor{' '}
        <span className="inline text-neutral">Bahari </span>Bersama
      </h2>
      <h3 className="font-normal leading-tight">
        Promo <span className="inline text-neutral">20% diskon </span>
        Setiap pembelian <span className="inline text-neutral">4 tiket </span>
      </h3>
      <Button className="mt-8 w-full">Dapatkan Diskon</Button>
    </motion.article>
  );
};
