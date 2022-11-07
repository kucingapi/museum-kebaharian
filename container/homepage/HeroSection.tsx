import { FC } from 'react';
import buildingImage from '../../public/assets/building.png';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import { PromoCard } from '../../components/homepage/PromoCard';

export const HeroSection: FC = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 2]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  return (
    <div className="overflow-clip max-h-screen relative">
      <PromoCard />
      <motion.img
        className="min-h-screen object-cover"
        src={buildingImage.src}
        alt="building image"
        style={{
          opacity: opacity,
          scale: scale,
        }}
      />
    </div>
  );
};
