import React from "react";
import { Container, DistanceCalculator } from "../app/component";
import { Layout } from "../app/component/Layout";
import { auth } from "@clerk/nextjs"; // Import the 'redirect' function from the '@clerk/nextjs' package
import { redirect } from "next/navigation"; // Import the 'redirect' function from the 'next/navigation' package

export default async function Home() {

  const { userId } = auth();

  console.log(userId);

  if (userId) {
    redirect("/dashboard");
  }

  return (
    <div className="bg-gray-100 h-[90vh]">
    <div className="h-1/2 flex justify-center items-end bg-gradient-to-tr from-orange-100 to-orange-200">
      <div className="relative top-1/2">
    <DistanceCalculator />
    </div>
    </div>
    <div className="bg-gray-100 h-1/2 ">
    </div>
    </div>
  );
}


