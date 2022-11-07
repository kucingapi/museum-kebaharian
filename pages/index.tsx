import Navbar from '../components/Navbar';
import { HeroSection } from '../container/homepage/HeroSection';
import { PromotionSection } from '../container/homepage/PromotionSection';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <PromotionSection />
      </main>
    </>
  );
}
