'use client'
import React from 'react';
// if some issue with  usePathname add the part about useClient directive to make it work == 'use client'
import { sidebarLinks } from '@/constants';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/lib/utils';
const SideBar = () => {
  const pathname =usePathname()
  console.log(sidebarLinks)
  return (
    <section className='sticky left-0 top-0 flex h-screen w-fit flex-col justify-between bg-[var(--darks-1)] p-6 pt-28 text-white
    max-sm:hidden lg:w-[264px]'>
      <div className='flex flex-col gap-6'>
        {}
        {/* Use this to populate the sidebarlinks with routes */}
      {sidebarLinks.map((link)=>{
        const isActive = pathname ==link.route || pathname.startsWith(link.route)
        return (
          <Link
          href={link.route}
          key={link.label}
          className={cn('flex gap-4 items-center p-4 rounded-lg justify-start',{
            'bg-[var(--blue-1)]':isActive,
          })}
          >
            {link.label}
          </Link>
        )
      })
      
      }
      </div>
    </section>
  );
};
export default SideBar; 
