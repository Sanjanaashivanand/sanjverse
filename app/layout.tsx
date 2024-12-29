'use client';

import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "./components/NavBar";
import { usePathname } from 'next/navigation'; 

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children, }: { children: React.ReactNode; }) {
  const pathname = usePathname(); 
  
  const isHomePage = pathname === '/';

  return (
    <html lang="en" data-theme="bumblebee">
      <body className={inter.className}>
        {!isHomePage && <NavBar/>}
        <main>{children}</main> 
      </body>
    </html>
  );
}