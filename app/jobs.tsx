'use client'
import React, {useEffect, useRef, useState} from "react"
import Image from 'next/image'
import portfolio from './portfolio.png'

export default function Jobs({transformBooks, transformProjects, transformJobs, setTransformJobs}) {
    const [opacityImageJobs, setOpacityImageJobs] = useState(0)
    const [scrollJobs,  setScrollJobs] = useState(0)
    const highlightTextRef=useRef<any>(null)
    var help = 0
    var changes = 0

    const getScroll = (event: WheelEvent) => {
      if(help + event.deltaY >= 0 && help + event.deltaY <= 680) help += event.deltaY
      else if (help + event.deltaY > 680) help = 680
      else help = 0
      changes += 1
      if(changes == 7) {
        changes = 0
        setScrollJobs(help)
      }
    }

    useEffect(() => {
      if(highlightTextRef && highlightTextRef.current) {
        highlightTextRef.current.addEventListener('wheel', getScroll)
      }
      return () => {
        if(highlightTextRef && highlightTextRef.current) {
          highlightTextRef.current.removeEventListener('wheel', getScroll)
        }
      };
    }, [transformJobs]);
    
    return (
      (transformProjects !== 1.6 && transformBooks!==1.8) && <div onClick={()=>{transformJobs!==1.3 && setTransformJobs(1.3)}}  onMouseLeave={() => {if(transformJobs===1.1) setTransformJobs(1)}} onMouseEnter={() => {if(transformJobs==1) setTransformJobs(1.1)}}  style={{cursor: transformJobs !== 1.3 ? "pointer":"default", position: "relative", transition: "1.5s", transform: `scale(${transformJobs})`}}>
        <Image style={{display: transformProjects!== 1.6 && transformBooks!==1.8? "block":"none"}} src={portfolio} width={500} alt={""}    />
        <div onMouseLeave={() => transformJobs!==1.3&&setOpacityImageJobs(0)} onMouseEnter={() => transformJobs!==1.3&&setOpacityImageJobs(0.6)} style={{position: "absolute", top: 100, left: 115, height: "62%", width: "54%", transition: ".5s ease", borderRadius: "210px /290px", backgroundColor: `  rgba(178,157,103,${opacityImageJobs})`}}>
          {transformJobs !== 1.3 ? 
          <>
          <h1 style={{opacity: opacityImageJobs === 0?0:1, position: "absolute", transition: ".5s", top: 0, left: 50, color: "white", fontSize :"35px", }}>past occupations</h1>
          <h1 style={{opacity: opacityImageJobs === 0?0:1, position: "absolute", transition: ".5s", top: "70%", left: 70, color: "white", fontSize :"20px", }}>The Martyr of <br/>the Solway(1871)</h1></>:
          <div style={{overflow: "scroll", borderRadius: "210px /290px", width: "270px", height: "372px", position: "relative", backgroundColor: "rgba(190,172,124, 0.3)"}}>
          <div style={{position: "absolute", cursor: "pointer", transition:".5s", zIndex: 3, top: 0, right: 130, color: "black" }} onClick={()=>{setOpacityImageJobs(0); setScrollJobs(0); help = 0;  setTransformJobs(1)}} ><h1 style={{fontSize: "30px"}}>X</h1></div>
          <p ref={highlightTextRef} style={{position: "absolute", transition: ".5s", left: 30, top: 30, right: 30, color: "black" }}>
            <h1 style={{fontSize :"20px", color: scrollJobs>=14.44?"gold":"black", transition: "all .5s ease-out", fontWeight: "bold"}}>Flux Marine, Front End Web Developer<br/><h1 style={{color: scrollJobs>=44.44?"gold":"black", transition: "all .5s ease-out", fontSize:"15px"}}>Feb 2024 - June 2024</h1></h1>
            <h1 style={{fontSize :"15px", color: scrollJobs>=75.44?"gold":"black", transition: "all .5s ease-out"}} >&nbsp;&nbsp;&nbsp;&nbsp;Developed front end of a progressive web app using React Native that allows users to track their boat’s location, past trips, speed, battery, voltage, and other metrics.</h1>
            <h1 style={{fontSize :"20px", color: scrollJobs>=145.44?"gold":"black", transition: "all .5s ease-out", fontWeight: "bold"}}>GameChanger, iOS Developer Intern<br/><h1 style={{fontSize:"15px", color: scrollJobs>=175.44?"gold":"black", transition: "all .5s ease-out",}}>June 2023 - Aug 2023</h1></h1>
            <h1 style={{fontSize :"15px", color: scrollJobs>=215.44?"gold":"black", transition: "all .5s ease-out"}} >&nbsp;&nbsp;&nbsp;&nbsp;Enhanced GameChanger app by adding linkable buttons using RxSwift, replacing directional icons as PDF files using SnapKit, adding/editing "help & feedback" buttons/snackbars, and realigning misplaced icons.</h1>
            <h1 style={{fontSize :"20px", fontWeight: "bold", color: scrollJobs>=335.44?"gold":"black", transition: "all .5s ease-out"}}>iRobot, Software DevOps Co-op<br/><h1 style={{fontSize:"15px", color: scrollJobs>=355.44?"gold":"black", transition: "all .5s ease-out"}}>June 2022 - Dec 2022</h1></h1>
            <h1 style={{fontSize :"15px", fontWeight: "bold", color: scrollJobs>=370.44?"gold":"black", transition: "all .5s ease-out"}}>&nbsp;&nbsp;&nbsp;&nbsp;Designed Jenkins pipelines using Groovy and EC2 instances and executed tasks in a Docker container using an ECR image to automate tasks such as configuring repositories, uploading build files to Artifactory, and syncing files.</h1>
          </p>
          </div>}
        </div>
      </div>
    )
}
