import React from "react";
import { Box, Button, Container } from "../app/component";
import { Card } from "../app/component/Cards";
import { Layout } from "../app/component/Layout";
import Image from 'next/image'
import Navbar from "./component/Navbar";
import Link from "next/link";
import Typography from "./Typography/typograph";

export default function Home() {

  return (
    <div className="h-screen">
      <Navbar />
          <Container className="mt-40">
            <Layout>
              <div className="flex flex-1 flex-col items-center justify-start gap-6 mt-3">
              <Typography variant="h1" className="mt-10">Peace of Mind for Your Pooch, Convenience for You.</Typography>
              <Typography variant="body1" className="mt-3">Reliable, AI-Optimized Dog Walking Services Tailored to Your Schedule.</Typography>
              <div className="flex items-center justify-around gap-6 mt-3">
                <Typography variant="subtitle2">Flexible Scheduling</Typography>
                <Typography variant="subtitle2">Real-Time Updates</Typography>
                <Typography variant="subtitle2">Affordable Pricing</Typography>
              </div>
              <div className="flex flex-1 w-full items-center justify-start gap-6 mt-3">
              <Link href="/signup">
                <Button variant="primary" size="medium">Get Started</Button>
              </Link>
              <Link href="/onboarding/owner">
                <Button variant="text" size="medium">Learn More</Button>
              </Link>
              </div>
              </div>
              

              <div className="flex flex-1 items-center justify-center">
                <Image
                  alt='Mountains'
                  src='/dog.jpeg'
                  width={500}
                  height={500}
                  className="rounded-3xl shadow-lg"
                />
                </div>
            </Layout>
             </Container>
          </div>
  );
}


