<<<<<<< HEAD
'use client';

import Link from 'next/link'
import Image from 'next/image'
import Button from './Button';
import TabBar from './TabBar';
import { useUser } from '@clerk/nextjs';
import { UserButton } from "@clerk/nextjs";

=======
import React from 'react'
import { AppBar, Toolbar, Typography, Box, Button, MenuItem } from "@mui/material";
import Link from 'next/link'
import Image from 'next/image'
>>>>>>> 89079da (first submit)

const pages = ['How it works', 'Pricing', 'FAQ'];

const Navbar = () => {
<<<<<<< HEAD

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



=======
  return (
    <div className="bg-slate-100">
        <div className="flex flex-row items-center justify-between ml-24 mr-24 p-1">
          <Link href="/">
          <Image src="/logo.png" alt="dog-walking" width={50} height={50} />
          </Link>
          <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
          {pages.map((page) => (
                <MenuItem key={page}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
              <Link href="/login">
              <Button variant="outlined" color="secondary">Login</Button>
              </Link>
          </Box>
        </div>
      </div>
  )
}

export default Navbar
>>>>>>> 89079da (first submit)
