import { motion } from 'framer-motion';
import { FC, useRef } from 'react';
import { Button } from '../../components/Button';
import { SectionLayout } from '../../components/SectionLayout';
import vecQrcode from '../../public/assets/vector-qrcode.webp';

export const BuyTicketSection: FC = () => {
  const constraintsRef = useRef(null);
  return (
    <SectionLayout className="flex bg-slate-100 md:flex-row flex-col-reverse items-center justify-center px-6 ">
      <article className="prose grow-[7] p-6 flex flex-col gap-8">
        <h1 className="mb-0">Takut ngantri? Malas menunggu?</h1>
        <p className="font-normal my-0">
          Kini pembelian tiket Museum Bahari dapat dibeli secara
          <span className="text-secondary font-bold"> online!</span>
        </p>
        <p className="font-normal my-0">
          Hanya perlu 5 menit untuk membeli tiket secara online. Jika transaksi
          berhasil, kode QR akan dikirimkan melalui email Anda. Tunjukkan kode
          QR tersebut dan selamat memulai petualangan Anda di museum!
        </p>
        <Button className="text-slate-100 md:w-1/2 max-w-full mt-7">Beli Tiket</Button>
      </article>
      <motion.div
        ref={constraintsRef}
        className="p-6 grow-[5] flex justify-center"
      >
        <motion.img
          whileHover={{ scale: 1.1 }}
          whileTap={{
            scale: 0.8,
          }}
          drag
          dragConstraints={constraintsRef}
          src={vecQrcode.src}
          alt="museum items"
        />
      </motion.div>
    </SectionLayout>
  );
};
