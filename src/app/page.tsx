import React from "react";
import { Box, Button } from "./component";
import Image from 'next/image'
import Navbar from "./component/Navbar";
import Link from "next/link";
import Typography from "./Typography/typograph";

export default function Home() {

  return (
    <div className="h-screen">
      <Navbar />
          <div className="flex flex-row items-center justify-between p-24">
              <Box className="flex flex-1">
              <Typography variant="h1">Peace of Mind for Your Pooch, Convenience for You.</Typography>
              <Typography variant="caption">Reliable, AI-Optimized Dog Walking Services Tailored to Your Schedule.</Typography>
         <div className="flex gap-6 mt-6 mb-6">
          <Link href="/signup">
          <Button variant="primary">Sign Up</Button>
          </Link>
          <Button variant="outlined">Learn More</Button>
         </div>
         <div className="flex items-center justify-around gap-6 mt-3">
          <Typography variant="subtitle1">Flexible Scheduling</Typography>
          <Typography variant="subtitle1">Real-Time Updates</Typography>
          <Typography variant="subtitle1">Affordable Pricing</Typography>
          </div>
              </Box>
            <Box className="flex flex-1">
                <Image
                  alt='Mountains'
                  src='/dog.jpeg'
                  width={500}
                  height={500}
                  className="rounded-3xl shadow-lg"
                />
            </Box>
             </div>
          </div>
  );
}


