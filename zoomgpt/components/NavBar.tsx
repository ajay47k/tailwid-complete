import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import MobileNav from './MobileNav'

const NavBar = () => {
  return (
    <div className='flex-between fixed z-50 w-full bg-[var(--darks-1)]'>
      <Link href="/" className='flex items-center gap-1'>
      <Image 
      src="/icons/finallogo.svg"
      width={32}
      height={32}
      alt="ZoomGpt"
      className='max-sm:size-10'/>
      <p className="text-[26px] max-sm:hidden">ZoomGpt</p>
      </Link>
    <div className='flex-between gap-5'>
    {/* {Clerk user Management} */}
    <MobileNav/>
    
    </div>

    </div>
  )
}

export default NavBar