import Image from 'next/image';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import NavbarActions from './NavbarActions';

interface NavProps {
  name: string;
  href: string;
}

const NavLinks: NavProps[] = [
  {
    name: 'Shop',
    href: '/shop',
  },
  {
    name: 'On sale',
    href: '/sale',
  },
  {
    name: 'New Arrival',
    href: '/arrival',
  },
  {
    name: 'Brands',
    href: '/brands',
  },
];

const Navbar = async () => {
  return (
    <nav className=' flex h-[40px] justify-between p-4'>
      <div className='flex items-center'>
        <Menu size={18} strokeWidth={1} className='mr-3 md:hidden' />
        <Image src='/assets/logo.jpg' alt='logo' height='0' width='0' className='w-7' />
      </div>
      <div className='hidden  w-[65%]  items-center gap-6 md:flex'>
        {NavLinks.map((items, indx) => (
          <Link key={indx} href={items.href} className='whitespace-nowrap'>
            {items.name}
          </Link>
        ))}
      </div>
      <div className='flex justify-center gap-4'>
        <NavbarActions />
      </div>
    </nav>
  );
};

export default Navbar;
