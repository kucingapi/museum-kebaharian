import { motion, useTransform, useViewportScroll } from 'framer-motion';
import { FC } from 'react';
import { Button } from '../Button';

export const FormTicket: FC = () => {
  const { scrollYProgress } = useViewportScroll();
  const moveY = useTransform(scrollYProgress, [0, 1], [-50, -700]);
  return (
    <motion.div
      style={{ translateY: moveY }}
      className="card relative rounded-3xl md:w-1/2 bg-white/60 flex flex-col items-center px-16 py-12 backdrop-blur-sm"
    >
      <h1 className="text-3xl font-bold text-primary">Beli Tiket Museum</h1>
      <form className="flex flex-col w-full mt-9 gap-4">
        <TextField type="text" placeholder="Email" />
        <TextField type="number" placeholder="Jumlah Tiket" />
        <TextField type="date" placeholder="Tanggal Pemesenan tiket" />
        <label className="label">
          <span className="label-text-alt"></span>
          <span className="label-text-alt text-primary font-bold mr-5 drop-shadow-none">
            Nominal Total:
          </span>
        </label>
        <input
          type="file"
          placeholder=""
          className="w-full h-52 p-4 input input-bordered bg-slate-100 rounded-md"
        />
        <Button type="submit" onClick={() => {}} className="">
          Beli Tiket
        </Button>
      </form>
    </motion.div>
  );
};

interface textFieldProps {
  placeholder: String;
  type: 'text' | 'file' | 'number' | 'date';
}

const TextField: FC<textFieldProps> = (props) => {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder.trim()}
      className="input input-bordered input-primary w-full bg-slate-100 text-primary"
    />
  );
};
