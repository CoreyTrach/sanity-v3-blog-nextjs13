import Image from 'next/image';
import Link from 'next/link';
import Logo from '../assets/images/papafam_logo.bmp';

export default function Header() {
  return (
    <header className='flex items-center justify-between space-x-2 font-bold px-10 py-5'>
      <div className='flex items-center space-x-2'>
        <Link href='/'>
          <Image
            className='rounded-full'
            src={Logo}
            width={50}
            height={50}
            alt='logo'
          />
        </Link>
        <h1>Corey`&apos`s Portfolio/Blog</h1>
      </div>
      <div></div>
    </header>
  );
}
