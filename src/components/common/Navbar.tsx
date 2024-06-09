import Image from 'next/image';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import NavbarActions from './NavbarActions';

const Navbar = async () => {
  return (
    <nav className=' flex h-[40px] justify-between p-4'>
      <div className='flex items-center'>
        <Menu size={18} strokeWidth={1} className='mr-3 md:hidden' />
        <Image src='/assets/logo.jpg' alt='logo' height='0' width='0' className='w-7' />
      </div>
      <div className='hidden  w-[65%]  items-center gap-6 md:flex'>
        <Link href='/shop' className='whitespace-nowrap'>
          Shop
        </Link>
        <Link href='/shop' className='whitespace-nowrap'>
          On sale
        </Link>
        <Link href='/shop' className='whitespace-nowrap'>
          New Arrival
        </Link>
        <Link href='/shop' className='whitespace-nowrap'>
          Brands
        </Link>
      </div>
      <div className='flex justify-center gap-4'>
        <NavbarActions />
      </div>
    </nav>
  );
};

export default Navbar;
