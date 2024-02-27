import React from "react";
import { Typography, Box, Button } from "@mui/material";
import Image from 'next/image'
import Navbar from "./component/Navbar";
import Link from "next/link";

export default function Home() {

  return (
    <div className="bg-slate-200 h-screen">
      <Navbar />
          <div className="flex flex-row items-center justify-between gap-6 p-24">
              <div className="flex-1 flex-col gap-8">
              <Typography variant="h2">Peace of Mind for Your Pooch, Convenience for You.</Typography>
              <Typography variant="subtitle1">Reliable, AI-Optimized Dog Walking Services Tailored to Your Schedule.</Typography>
         <div className="flex flex-row items-center justify-start gap-6 mt-3">
          <Link href="/signup">
          <Button variant="contained" color="primary">Sign Up</Button>
          </Link>
          <Button variant="text" color="primary">Learn More</Button>
         </div>
         <div className="flex items-center justify-between gap-6 mt-3">
          <Typography variant="subtitle1">Flexible Scheduling</Typography>
          <Typography variant="subtitle1">Real-Time Updates</Typography>
          <Typography variant="subtitle1">Affordable Pricing</Typography>
          </div>
              </div>
<div className="flex-1">
                <Image src="/next.svg" alt="dog-walking" width={500} height={500} />
                </div>
          </div>
    </div>
  );
}


