import { FormTicket } from '../../components/tiket/FormTicket';
import tiketBackground from '/public/assets/tiket-background.webp';
import bankBni from '/public/assets/logo_bank_bni.webp';
import bankBri from '/public/assets/logo_bank_bri.webp';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import Image from 'next/image';
import { FC } from 'react';
import Link from 'next/link';
import { ChevronDoubleLeftIcon } from '@heroicons/react/24/solid';

const index = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 2]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);
  const moveX = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const moveY = useTransform(scrollYProgress, [0, 1], [0, -300]);
  return (
    <div className="bg-slate-100">
      <div className="overflow-clip max-h-screen relative">
        <Link className="text-white absolute z-50 mt-5 ml-5 flex items-center justify-center" href="/">
          <ChevronDoubleLeftIcon className='w-5' />
          <p className=''>Back</p>
        </Link>
        <motion.div
          className="min-h-screen object-cover"
          style={{
            opacity: opacity,
            scale: scale,
            translateX: moveX,
            translateY: moveY,
          }}
        >
          <Image
            className="object-cover md:min-w-max min-w-[150vw] max-w-[200vw]"
            fill
            src={tiketBackground.src}
            sizes="200vw"
            alt="building image"
          />
        </motion.div>
      </div>
      <div className="flex md:flex-row flex-col-reverse py-12 md:gap-32 justify-between w-full pl-9 text-center md:text-left items-center ">
        <article className="prose max-w-xs md:mb-0 mb-20">
          <h2>
            Beli <TextNeutral>tiket online</TextNeutral> dan tidak perlu{' '}
            <TextNeutral>antri</TextNeutral> lagi
          </h2>
          <p>
            Beli tiket di museum bahari bisa jalan sepuasnya, tidak ada batasan
            waktu. Apa lagi yang ditunggu, yuk beli tiketnya sekarang!!
          </p>
          <div className="badge badge-accent font-bold p-3 ">
            Rp5.000,00/org
          </div>
          <h2>
            Gimana <TextNeutral>cara bayar</TextNeutral> tiket?
          </h2>
          <p>
            Mudah banget! Cukup transfer total nominal* ke rekening bank kami
          </p>
          <div className="flex gap-3 items-center">
            <img
              className="object-scale-down w-14 my-0"
              src={bankBni.src}
              alt="bank bri"
            />
            <p className="md:whitespace-nowrap my-0">
              005643789912 a.n. Museum Kebaharian Jakarta
            </p>
          </div>
          <div className="flex gap-3 items-center">
            <img
              className="object-scale-down w-24 my-0"
              src={bankBri.src}
              alt="bank bri"
            />
            <p className="md:whitespace-nowrap my-0">
              3058843746523715 a.n. Museum Kebaharian Jakarta
            </p>
          </div>
          <p className="md:whitespace-nowrap ">
            Tambahkan <TextNeutral>keterangan nama Anda</TextNeutral> pada saat
            melakukan transfer ke rekening kami.
          </p>
          <p className="md:whitespace-nowrap text-xs">
            *Berlaku untuk transaksi tiket dengan minimal pembelian dua tiket
          </p>
        </article>
        <FormTicket />
      </div>
    </div>
  );
};

const TextNeutral: FC = (props) => {
  return <span className="text-neutral">{props.children}</span>;
};

export default index;
