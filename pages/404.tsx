import { motion } from 'framer-motion';
import Head from 'next/head';
import logo from '../public/404-error-rafiki.svg';

export default function FourOFour() {
  const message = 'Oops Something Went Wrong'.split('');
  return (
    <>
      <Head>
        <title>Halaman Tidak Ditemukan</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="w-full flex items-center flex-col p-5">
        <img className="w-1/2" src={logo.src} alt="404 not found" />
        <article
          style={{
            gridTemplateColumns: 'repeat(auto-fit, 40px)',
          }}
          className={`prose grid gap-1 max-w-none w-full justify-center`}
        >
          {message.map((value, index) => {
            return (
              <div key={index} className="flex justify-center">
                <motion.h1
                  whileHover={{
                    scale: 1.7,
                    color: ['#C7DBFF', '#62B6CB', '#FFE999'],
                    transition: { type: 'spring', mass: 1 },
                  }}
                >
                  {value}
                </motion.h1>
              </div>
            );
          })}
        </article>
      </div>
    </>
  );
}
