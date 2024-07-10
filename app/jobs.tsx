'use client'
import React, {useEffect, useRef, useState} from "react"
import Image from 'next/image'
import portfolio from './portfolio.png'
import flux from './fluxMarine.png'
import gameChanger from './gameChanger.png'
import iRobot from './iRobot.png'

export default function Jobs({transformBooks, transformProjects, transformJobs, setTransformJobs}) {
    const [opacityImageJobs, setOpacityImageJobs] = useState(0)
    const [opacityFlux, setOpacityFlux] = useState(0)
    const [scrollJobs,  setScrollJobs] = useState(0)
    const [firstScroll, setFirstScroll] = useState(true)
    const highlightTextRef=useRef<any>(null)
    var scrollVar = 0
    var changes = 0

    const getScroll = (event: WheelEvent) => {
      if(scrollVar + event.deltaY >= 0 && scrollVar + event.deltaY <= 485) scrollVar += event.deltaY
      else if (scrollVar + event.deltaY > 485) scrollVar = 485
      else scrollVar = 0
      changes += 1
      if(changes == 7) {
        changes = 0
        setScrollJobs(scrollVar)
        if(scrollVar >= 380.44) {
          setFirstScroll(false)
        }
      }
    }

    useEffect(() => {

      if(transformJobs === 1.3) {
          setOpacityFlux(.6) // when jobs is first opened, flux ship fades into view
      }

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
        <Image style={{display: transformProjects!== 1.6 && transformBooks!==1.8? "block":"none", transition: "all .5s ease-out", opacity: transformJobs === 1.3 ? 0.65:1}} src={portfolio} width={500} alt={""}    />
        <div onMouseLeave={() => transformJobs!==1.3&&setOpacityImageJobs(0)} onMouseEnter={() => transformJobs!==1.3&&setOpacityImageJobs(0.6)} style={{position: "absolute", top: 100, left: 115, height: "62%", width: "54%", transition: ".5s ease", borderRadius: "210px /290px", backgroundColor: `  rgba(178,157,103,${opacityImageJobs})`}}>
          {transformJobs !== 1.3 ? 
          <>
          <h1 style={{opacity: opacityImageJobs === 0?0:1, position: "absolute", transition: ".5s", top: 0, left: 50, color: "white", fontSize :"35px", }}>past occupations</h1>
          <h1 style={{opacity: opacityImageJobs === 0?0:1, position: "absolute", transition: ".5s", top: "70%", left: 70, color: "white", fontSize :"20px", }}>The Martyr of <br/>the Solway(1871)</h1></>:
          <div style={{overflow: "scroll", overflowX: "hidden", borderRadius: "210px /290px", width: "270px", height: "372px", position: "relative", backgroundColor: "rgba(190,172,124, 0.3)"}}>
          <div style={{position: "absolute", cursor: "pointer", transition:".5s", zIndex: 3, top: 0, right: 130, color: "black" }} onClick={()=>{setOpacityImageJobs(0); setScrollJobs(0); scrollVar = 0;  setTransformJobs(1)}} ><h1 style={{fontSize: "30px"}}>X</h1></div>
          <p ref={highlightTextRef} style={{position: "absolute",transition: ".5s", left: 30, top: 30, right: 30, color: "black" }}>
            {/** scrollJobs can only be compared to decimals */}
            <h1 style={{fontSize :"20px", color: "black", textAlign: "center", fontWeight: "bold"}}>Flux Marine, Front End Web Developer</h1>
            <h1 style={{color: scrollJobs>=44.44?"black":"#574b0f", textAlign: "center", transition: "all .5s ease-out", fontSize:"15px"}}>Feb 2024 - June 2024</h1>
            <Image style={{position: "absolute", top: 10, transition: "all 1.5s ease-out", opacity: opacityFlux}} src={flux} width={460} alt={""}    />
            <h1 style={{fontSize :"15px", position: "relative", color: scrollJobs>=60.44?"black":"#574b0f", transition: "all .5s ease-out"}} >&nbsp;&nbsp;&nbsp;&nbsp;Developed front end of a progressive web app using <span style={{color: "#f1c6bf", fontSize: "18px"}}>React Native</span> that allows users to track their boat’s location, past trips, speed, battery, voltage, and other metrics.</h1>
            <h1 style={{fontSize :"20px", color: scrollJobs>=145.44?"black":"#574b0f", transition: "all .5s ease-out", textAlign: "center", fontWeight: "bold"}}>GameChanger, iOS Developer Intern<br/><h1 style={{fontSize:"15px", color: scrollJobs>=175.44?"black":"#574b0f", transition: "all .5s ease-out", textAlign: "center", }}>June 2023 - Aug 2023</h1></h1>
            <Image style={{position: "absolute", top: 270, right: 40, transition: "all 2s ease-out", opacity: !firstScroll ? 0.45 : scrollJobs>=215.44?0.45:0}} src={gameChanger} width={260} alt={""}    />
            <h1 style={{fontSize :"15px", left: 15, position: "relative", color: scrollJobs>=215.44?"black":"#574b0f", transition: "all .5s ease-out"}} >&nbsp;&nbsp;&nbsp;&nbsp;Enhanced GameChanger app by adding linkable buttons using Rx<span style={{color: "#f1c6bf", fontSize: "18px"}}>Swift</span>, replacing directional icons as PDF files using SnapKit, adding/editing "help & feedback" buttons/snackbars, and realigning misplaced icons.</h1>
            <h1 style={{fontSize :"20px", textAlign: "center", fontWeight: "bold", color: scrollJobs>=335.44?"black":"#574b0f", transition: "all .5s ease-out"}}>iRobot, Software DevOps Co-op<br/><h1 style={{fontSize:"15px", textAlign: "center", zIndex: 1, position: "relative", color: scrollJobs>=355.44?"black":"#574b0f", transition: "all .5s ease-out"}}>June 2022 - Dec 2022</h1></h1>
            <Image style={{position: "absolute", top: 470, left: 20, transition: "all 2s ease-out", opacity: !firstScroll ? 0.7 : scrollJobs>=397.44?0.7:0}} src={iRobot} width={260} alt={""}    />
            <h1 style={{fontSize :"15px", position: "relative", fontWeight: "bold", color: scrollJobs>=397.44?"black":"#574b0f", transition: "all .5s ease-out"}}>&nbsp;&nbsp;&nbsp;&nbsp;Designed <span style={{color: "#f1c6bf", fontSize: "18px"}}>Jenkins</span> pipelines using <span style={{color: "#f1c6bf", fontSize: "18px"}}>Groovy</span> and <span style={{color: "#f1c6bf", fontSize: "18px"}}>EC2</span> instances and executed tasks in a Docker container using an ECR image to automate tasks such as configuring repositories, uploading build files to Artifactory, and syncing files.</h1>
          </p>
          </div>}
        </div>
      </div>
    )
}
