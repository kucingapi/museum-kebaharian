import Clock from '/public/vector/clock.svg';
import Ticket from '/public/vector/ticket.svg';
import Place from '/public/vector/outline-place.svg';
import { FC } from 'react';
import { motion } from 'framer-motion';

export const CardInfo: FC = () => (
  <motion.div
    whileTap={{
      borderRadius: '100%',
      border: '15px solid #01578F',
      background: '#FFE999',
    }}
    whileHover={{
      borderRadius: '50%',
      border: '7px solid #01578F',
      background: '#F1E6BE',
    }}
    className="card bg-white mt-8 w-fit"
  >
    <article className="card-body p-5 flex flex-col prose">
      <div className="flex gap-3 w-fit">
        <Ticket className="stroke-neutral stroke-2 w-7" />
        <h5 className="whitespace-nowrap font-bold">5K - Beli tiket online</h5>
      </div>
      <div className="flex gap-3 w-fit">
        <Place className="stroke-neutral stroke-2 w-7" />
        <h5 className="whitespace-nowrap font-bold">
          Jl. Pasar Ikan No. 1, Jakarta Utara 14440
        </h5>
      </div>
      <div className="flex gap-3 w-fit">
        <Clock className="stroke-neutral stroke-2 w-7" />
        <h5 className="whitespace-nowrap font-bold">08.00 - 15.00 WIB</h5>
      </div>
    </article>
  </motion.div>
);
