import Image from 'next/image';
import { Menu, Search, ShoppingCart, UserRound } from 'lucide-react';
import Link from 'next/link';
import { Input } from '../ui/Input';
import { ThemeBtn } from './ThemeBtn';
const Navbar = () => {
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
        <Input type='text' className='h-5' placeholder='Search' />
      </div>
      <div className='flex gap-4'>
        <Search size={18} strokeWidth={1} className='text-secondary-foreground' />
        <ShoppingCart size={18} strokeWidth={1} className='text-secondary-foreground' />
        <UserRound size={18} strokeWidth={1} className='text-secondary-foreground' />
        <ThemeBtn />
      </div>
    </nav>
  );
};

export default Navbar;
