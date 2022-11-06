import { AnimatePresence, motion } from 'framer-motion';
import logo from '../public/404-error-rafiki.svg';

export default function Home() {
  const message = 'Oops Something Went Wrong'.split('');
  return (
    <>
      <div className="w-full flex items-center flex-col p-5">
        <img className="w-1/2" src={logo.src} alt="404 not found" />
        <article className="prose flex gap-2 align-baseline max-w-max">
          {message.map((value, index) => {
            return (
              <motion.h1
                key={index}
                whileHover={{
                  scale: 1.7,
                  color: ['#C7DBFF', '#62B6CB', '#FFE999'],
                  transition: { type: 'spring', mass: 1 },
                }}
              >
                {value}
              </motion.h1>
            );
          })}
        </article>
      </div>
    </>
  );
}
