import { UserButton } from '@clerk/nextjs';
import { Search } from 'lucide-react';
import { usePathname } from 'next/navigation';
import React from 'react'

const Header = () => {
  const pathname = usePathname();
  return (
    <div className='p-5 shadow-sm border-b-2 bg-white flex justify-between items-center'>
      {pathname === '/dashboard' ? <div className='flex gap-2 p-2 items-center border rounded-md max-w-md'>
        <Search />
        <input type="text" placeholder="Search..." className='outline-none' />
      </div> : <div></div>}
      <UserButton />
    </div>
  )
}

export default Header;