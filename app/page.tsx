'use client'
import React, {useState, useEffect} from "react"
import NavBar from "./navBar"
import Image from 'next/image'
import jobs from './jobs.png'
import skills from './skills.png'
import background from './backgroundImage.png'
import VaraText from './components/VaraText'
import Jobs from "./jobs"
import Literature from "./literature"
import Projects from "./projects"

export default function Page() {
  const [transformProjects, setTransformProjects] = useState(1)
  const [transformBooks, setTransformBooks] = useState(1)
  const [transformJobs, setTransformJobs] = useState(1)
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
    typeof window === "undefined" ? <></> :
    <>
    <NavBar/>
    <Image src={background} style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        zIndex: -1
      }} alt={""} 
    /> 

    <VaraText text="welcome to rachael's world" transformProjects={transformProjects} transformBooks={transformBooks} />
    <view style={{flexDirection: windowSize[1] <= 650 ? "column":"row", justifyContent: "center", alignItems: "center", display: "flex"}}>
    <Projects transformBooks={transformBooks} transformProjects={transformProjects} transformJobs={transformJobs} setTransformProjects={setTransformProjects}/>
    <Jobs transformBooks={transformBooks} transformProjects={transformProjects} transformJobs={transformJobs} setTransformJobs={setTransformJobs}/>
    <Literature transformBooks={transformBooks} transformProjects={transformProjects} transformJobs={transformJobs} setTransformBooks={setTransformBooks}/>
    </view>
    </>
  )
}
