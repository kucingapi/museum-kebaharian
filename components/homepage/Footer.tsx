import { FC } from 'react';
import logo from 'public/logo/logo-long.png';
import Instagram from 'public/vector/instagram.svg';
import Youtube from 'public/vector/youtube.svg';
import Tiktok from 'public/vector/tiktok.svg';
import Twitter from 'public/vector/twitter.svg';
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';

export const Footer: FC = () => {
  return (
    <footer className="overflow-clip flex relative md:flex-row flex-col justify-between items-center md:items-end shadow-lg md:pb-8 md:px-8">
      <div className="hidden md:block absolute rounded-full left-0 top-1/2 bg-white -z-10 w-[60vw] h-[60vw] -translate-x-1/4 -translate-y-1/2"></div>
      <div className="md:w-5/12 w-full mx-10 bg-white md:bg-transparent md:px-0 px-9 pt-8">
        <img className="md:w-5/12 w-8/12" src={logo.src} alt="" />
        <article className="prose text-gray-500 mt-4">
          <div className="flex md:flex-row flex-col gap-3 w-fit">
            <PhoneIcon className="w-6" />
            <h5>(021) 6693406</h5>
          </div>
          <div className="flex md:flex-row flex-col gap-3 w-fit mt-1 ">
            <EnvelopeIcon className="w-6" />
            <h5>upmuseumkebaharian.disbuddki@gmail.com</h5>
          </div>
          <h5 className="mt-3">
            Copyright 2022 Museum Kebaharian Jakarta. All rights reserved.
          </h5>
        </article>
      </div>
      <div className="flex flex-col">
        <div className="md:mt-0 mt-5 flex justify-center w-full mb-5 md:justify-end gap-3">
          <CircleMedia link="https://www.instagram.com/museumkebaharianjkt">
            <Instagram />
          </CircleMedia>
          <CircleMedia link="https://twitter.com/museumbaharijkt">
            <Twitter />
          </CircleMedia>
          <CircleMedia link="https://www.youtube.com/channel/UCBUGG8LarZfoCEQ-wFV2EoQ">
            <Youtube />
          </CircleMedia>
          <CircleMedia link="https://www.tiktok.com/@museumkebaharianjkt">
            <Tiktok />
          </CircleMedia>
        </div>
        <div className="flex text-slate-200 gap-3">
          <a className="link no-underline">Terms & Conditions</a>
          <a className="link no-underline">Privacy Policy</a>
          <a className="link no-underline">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

interface circleProps {
  link: String;
}

const CircleMedia: FC<circleProps> = (props) => (
  <motion.a
    href={props.link.trim()}
    className="cursor-pointer w-12 h-12 rounded-full bg-white flex justify-center items-center"
    whileHover={{ scale: 1.2, rotate: 45 }}
    whileTap={{
      scale: 0.8,
      rotate: -45,
    }}
  >
    {props.children}
  </motion.a>
);
