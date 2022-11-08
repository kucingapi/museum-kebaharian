import { FC } from 'react';
import buildingImage from '../../public/assets/building.png';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import { PromoCard } from '../../components/homepage/PromoCard';
import Image from 'next/image';

export const HeroSection: FC = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 2]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  return (
    <div className="overflow-clip max-h-screen relative">
      <PromoCard />
      <motion.div
        className="min-h-screen object-cover"
        // src={buildingImage.src}
        // alt="building image"
        style={{
          opacity: opacity,
          scale: scale,
        }}
      >
        <Image className='object-cover' fill src={buildingImage.src} sizes="100vw" alt="building image" />
      </motion.div>
    </div>
  );
};
