import { Search } from 'lucide-react';
import React from 'react'

const Header = () => {
  return (
    <div className='p-5 shadow-sm border-b-2 bg-white'>
      <div className='flex gap-2 p-2 items-center border rounded-md max-w-md'>
        <Search />
        <input type="text" placeholder="Search..." className='outline-none' />
      </div>
    </div>
  )
}

export default Header;