"use client";

import { FileClock, Home, Settings, WalletCards } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

const SideNav = () => {
  const pathname = usePathname();
  const menuItems = [
    {
      name: "Home",
      icon: Home,
      path: "/dashboard"
    },
    {
      name: "History",
      icon: FileClock,
      path: "/dashboard/history"
    },
    // {
    //   name: "Billing",
    //   icon: WalletCards,
    //   path: "/dashboard/billing"
    // },
    // {
    //   name: "Settings",
    //   icon: Settings,
    //   path: "/dashboard/settings"
    // },
  ]
  return (
    <div className='h-screen p-5 shadow-sm border bg-white'>
      <div className='flex items-center justify-start gap-3'>
        <Image src={"/logo.svg"} alt="logo" width={40} height={40} />
        <span className='text-xl font-bold'>ContentAI</span>
      </div>

      <div className='my-6'>
        {menuItems.map((item, index) => (
          <Link href={item.path} key={index} className={`flex items-center justify-start gap-3 p-3 mb-2 hover:bg-blue-600 hover:text-white cursor-pointer rounded ${pathname === item.path && 'bg-blue-600 text-white'}`}>
            <item.icon className='w-6 h-6' />
            <span className='text-sm font-medium'>{item.name}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SideNav;