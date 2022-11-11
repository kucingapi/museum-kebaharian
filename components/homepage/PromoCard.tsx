import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '../Button';

export const PromoCard = () => {
  return (
    <motion.article
      whileTap={{
        borderTopLeftRadius: '100%',
        borderTopRightRadius: '100%',
        border: '15px solid #01578F',
        borderBottomWidth: '0px',
      }}
      onTapStart={() => {
        window.scrollBy({
          top: 15,
          behavior: 'smooth',
        });
      }}
      onHoverStart={() => {
        window.scrollBy({
          top: 10,
          behavior: 'smooth',
        });
      }}
      whileHover={{
        borderTopLeftRadius: '50%',
        borderTopRightRadius: '50%',
        border: '7px solid #01578F',
        borderBottomWidth: '0px',
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
        Hanya dengan <span className="inline text-neutral"> Rp.5000 </span>
        bisa sepuasnya menikmati Museum <span className="inline text-neutral"> Bahari</span>
      </h3>
      <Link href="/tiket">
        <Button className="mt-8 w-full">Dapatkan Diskon</Button>
      </Link>
    </motion.article>
  );
};
