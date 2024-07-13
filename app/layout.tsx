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

    const [windowSize, setWindowSize] = useState([0,0]);
    
    useEffect(() => {
        if (typeof window === "undefined") return
        setWindowSize([window.innerHeight, window.innerWidth]);
        const windowSizeHandler = () => {
          if (typeof window === "undefined") return
          setWindowSize([window.innerHeight, window.innerWidth]);
        };

        window.addEventListener("resize", windowSizeHandler);

        return () => {
          window.removeEventListener("resize", windowSizeHandler);
        };
    }, []);


    return (
      <html className={zeyada.className} lang="en">
        <body style={{backgroundColor: "#666147", overflow: windowSize[1] <=650 ? "scroll":"hidden"}}>{children}</body>
      </html>
    )
  }
