import { FormTicket } from '../../components/tiket/FormTicket';
import tiketBackground from '/public/assets/tiket-background.webp';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import Image from 'next/image';
import { FC } from 'react';

const index = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 2]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);
  const moveX = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const moveY = useTransform(scrollYProgress, [0, 1], [0, -300]);
  return (
    <div className="bg-slate-100">
      <div className="overflow-clip max-h-screen relative">
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
            className="object-cover md:min-w-max  min-w-[150vw] max-w-[200vw]"
            fill
            src={tiketBackground.src}
            sizes="200vw"
            alt="building image"
          />
        </motion.div>
      </div>
      <div className="flex md:flex-row flex-col mt-12 gap-32 justify-between w-full px-9">
        <article className="prose max-w-xs md:mb-0 mb-20">
          <h2>
            Beli <TextNeutral>tiket online</TextNeutral> dan tidak perlu <TextNeutral>antri</TextNeutral> lagi
          </h2>
          <p>
            Beli tiket di museum bahari bisa jalan sepuasnya, tidak ada batasan
            waktu. Apa lagi yang ditunggu, yuk beli tiketnya sekarang!!
          </p>
          <div className="badge badge-accent font-bold p-3 ">
            Rp5.000,00/org
          </div>
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
