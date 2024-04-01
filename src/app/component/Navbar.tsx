'use client';

import Link from 'next/link'
import Image from 'next/image'
import Button from './Button';
import TabBar from './TabBar';
import { useUser } from '@clerk/nextjs';
import { UserButton } from "@clerk/nextjs";


const pages = ['How it works', 'Pricing', 'FAQ'];

const Navbar = () => {

  const { user, isLoaded } = useUser();

  return (
        <div className="flex flex-1 flex-row items-center justify-between pl-24 pr-24 p-3 bg-white shadow-sm">
          <Link href="/">
          <Image src="/Logo.png" alt="dog-walking" width={40} height={40} />
          </Link>
          <div className="flex gap-6 to-inherit">
                <TabBar labels={pages} />

                {isLoaded && user && (
                  <Link href="/dashboard">
                    <UserButton afterSignOutUrl='/' />
                  </Link>
                )}
          </div>
        </div>
  )
}

export default Navbar



