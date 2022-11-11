import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';
import logo from '../public/logo/logo-long.png';
import Ticket from '../public/vector/ticket.svg';

const Navbar: FC = () => {
  const router = useRouter();
  return (
    <nav className="bg-slate-100 w-full flex justify-between p-3 items-center">
      <Link href="/">
        <img className="h-14" src={logo.src} alt="logo vertical" />
      </Link>
      <Link href="/tiket">
        <button className="text-base gap-2 normal-case btn font-bold text-slate-100 bg-primary rounded-full">
          <Ticket className="stroke-slate-100 stroke-2" />
          Tiket
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;
