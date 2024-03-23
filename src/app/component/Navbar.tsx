import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Button from './Button';
import TabBar from './TabBar';

const pages = ['How it works', 'Pricing', 'FAQ'];

const Navbar = () => {
  return (
        <div className="flex flex-1 flex-row items-center justify-between pl-24 pr-24 p-3 bg-white shadow-sm">
          <Link href="/">
          <Image src="/Logo.png" alt="dog-walking" width={40} height={40} />
          </Link>
          <div className="flex gap-6 to-inherit">
                <TabBar labels={pages} />
              <Link href="/login">
              <Button variant="secondary" size='medium'>Login</Button>
              </Link>
          </div>
        </div>
  )
}

export default Navbar



