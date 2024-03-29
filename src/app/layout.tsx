import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Navbar } from "../app/component";
import { ClerkProvider } from '@clerk/nextjs'

import "./globals.css";

const font = Manrope({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Puplanner",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={font.className}>
          <Navbar />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
