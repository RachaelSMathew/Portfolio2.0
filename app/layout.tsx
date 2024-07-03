"use client"
/** https://nextjs.org/docs/pages/building-your-application/optimizing/fonts  */
import { Zeyada } from 'next/font/google'
import React, { useEffect, useState } from "react"

const zeyada = Zeyada({
  weight: '400',
  subsets: ['latin'],
  style: 'normal'
})


export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    const [windowSize, setWindowSize] = useState([
      window.innerHeight,
      window.innerWidth,
    ]);
  
    useEffect(() => {
      const windowSizeHandler = () => {
        setWindowSize([window.innerWidth, window.innerHeight]);
      };
      window.addEventListener("resize", windowSizeHandler);
  
      return () => {
        window.removeEventListener("resize", windowSizeHandler);
      };
    }, []);
    return (
      <html className={zeyada.className} lang="en">
        <body style={{backgroundColor: "#666147", overflow: "scroll"}}>{children}</body>
      </html>
    )
  }