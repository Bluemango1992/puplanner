import React from 'react'
import { MenuItem } from "@mui/material";
import Link from 'next/link'
import Image from 'next/image'
import Button from './Button';
import Box from './Box';
import Typography from '../Typography/page';

const pages = ['How it works', 'Pricing', 'FAQ'];

const Navbar = () => {
  return (
        <div className="flex flex-row items-center justify-between ml-24 mr-24 p-3">
          <Link href="/">
          <Image src="/logo.png" alt="dog-walking" width={40} height={40} />
          </Link>
          <div className="flex gap-6 to-inherit">
          {pages.map((page) => (
                <Button variant="text">{page}</Button>
              ))}
              <Link href="/login">
              <Button variant="secondary">Login</Button>
              </Link>
          </div>
        </div>
  )
}

export default Navbar