import React from 'react'
import { AppBar, Toolbar, Typography, Box, Button, MenuItem } from "@mui/material";
import Link from 'next/link'
import Image from 'next/image'

const pages = ['How it works', 'Pricing', 'FAQ'];

const Navbar = () => {
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