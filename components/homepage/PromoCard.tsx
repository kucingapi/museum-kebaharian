import { motion } from 'framer-motion';
import { Button } from '../Button';

export const PromoCard = () => {
  return (
    <motion.article
      whileTap={{
        borderTopLeftRadius: '100%',
        borderTopRightRadius: '100%',
        border: '10px solid #01578F',
        borderBottomWidth: '0px'
      }}
      style={{
        border: '0px solid #01578F',
      }}
      className="prose absolute bg-slate-100 z-50 p-7 lg:ml-16 lg:translate-x-0 lg:left-0 -translate-x-1/2 left-1/2  bottom-0 rounded-t-3xl max-w-xs "
    >
      <h2 className="leading-tight">
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
