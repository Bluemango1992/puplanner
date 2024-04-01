<<<<<<< HEAD
'use client';

import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { Container, DistanceCalculator } from "../app/component";
import { useRouter } from "next/navigation"; // Updated import
import Loading from "./loading"; // Updated import
import checkUserExists from "./api/checkUserStatus"; // Updated import

export default function Home() {
  
  const { isSignedIn, user } = useUser();

  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
  
    async function checkUserStatusAndRedirect() {
      if (isSignedIn && user) {
        setIsLoading(true);
  
        const userId = user.id;
        const userStatus = await checkUserExists(userId); // Assume this function now also checks the user's status

        console.log('User status:', userStatus);
  
        if (userStatus === 'pending') {
          // If user is signed in but in a pending state, redirect to meet and greet booking
          if (isMounted) {
            router.push("/meet-and-greet");
          }
        } else if (userStatus === 'active') {
          // If user is active, redirect to the dashboard
          if (isMounted) {
            router.push("/dashboard");
          }
        } else {
          // For new or unrecognized statuses, consider redirecting to an error page or handling accordingly
        }
  
        setIsLoading(false);
      }
    }
  
    checkUserStatusAndRedirect();
  
    return () => {
      isMounted = false;
    };
  }, [isSignedIn, user, router]);
  
  
  if (isSignedIn) {
    // Optionally show a loading state or nothing if redirecting
    return <Loading classes="h-[80vh]" />;
  }

  // Your sign-in or sign-up components should only be rendered if isSignedIn is false
  return (
    <>
      <Container>
        <div className="flex flex-1 items-center justify-center h-[80vh]">
          <DistanceCalculator />
        </div>
      </Container>
    </>
=======
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
>>>>>>> 89079da (first submit)
  );
}


