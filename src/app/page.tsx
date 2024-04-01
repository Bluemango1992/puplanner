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
  );
}
