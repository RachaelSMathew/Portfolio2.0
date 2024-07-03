'use client'
import React, {useState} from "react"
import Image from 'next/image'
import projects from './skills.png'

export default function Projects({transformBooks, transformProjects, transformJobs,  setTransformProjects}) {
    const [opacityImageProjects, setOpacityImageProjects] = useState(0)

    return (
        (transformBooks !== 1.8 && transformJobs!==1.3) && <div onClick={()=>{transformProjects!==1.6 && setTransformProjects(1.6)}}  onMouseLeave={() => {if(transformProjects===1.1) setTransformProjects(1)}} onMouseEnter={() => {if(transformProjects==1) setTransformProjects(1.1)}}  style={{cursor: transformProjects !== 1.6 ? "pointer":"default", position: "relative", marginTop: transformProjects!==1.6?"0px":"100px", transition: "1.5s", transform: `scale(${transformProjects})`}}>
        <Image style={{display: transformJobs!== 1.3 && transformBooks!==1.8 ? "block":"none"}} src={projects} width={400} alt={""}    />
        <div onMouseLeave={() => transformProjects!==1.6&&setOpacityImageProjects(0)} onMouseEnter={() => transformProjects!==1.6&&setOpacityImageProjects(0.5)} style={{position: "absolute", top: 60, bottom: 0, left: 30, height: "70%", width: "80%", transition: ".5s ease", backgroundColor: `  rgba(85,64,49,${opacityImageProjects})`}}>
          {transformProjects !== 1.6 ? 
          <>
          <h1 style={{opacity: opacityImageProjects === 0?0:1, position: "absolute", transition: ".5s", top: 0, left: 40, color: "white", fontSize :"40px", }}>projects</h1>
          <h1 style={{opacity: opacityImageProjects === 0?0:1, position: "absolute", transition: ".5s", top: "75%", left: 40, color: "white", fontSize :"20px", }}>Hearts are Trumps (1872)</h1></>:
          <div style={{overflow: "scroll", top: 10, left: 30, width: "283px", height: "225px", position: "relative", backgroundColor: "rgba(242,191,184, 0.8)"}}>
          <div style={{position: "absolute", cursor: "pointer", transition:".5s", zIndex: 3, top: 0, right: 30, color: "black" }} onClick={()=>{setOpacityImageProjects(0); setTransformProjects(1)}} ><h1 style={{fontSize: "30px"}}>X</h1></div>
          <div style={{position: "absolute", transition: ".5s", left: 30, top: 10, right: 30, color: "black" }}>
            <h1 style={{fontSize :"20px", fontWeight: "bold"}}>Python Spellchecker<br/><h1 style={{fontSize:"15px"}}>Python</h1></h1>
            &nbsp;&nbsp;&nbsp;&nbsp;Developed a spellchecker using a phonetic algorithm, Levenshtein distance, and noisy channel model.
            <h1 style={{fontSize :"20px", fontWeight: "bold"}}>C++ Tic-Tac-Toe Game<br/><h1 style={{fontSize:"15px"}}>C++, CMake </h1></h1>
            &nbsp;&nbsp;&nbsp;&nbsp;Developed a tic-tac-toe game of user vs. computer; the latter calculates its next move using the Minimax algorithm, and the game is played on a GUI created with QT Creator
            <h1 style={{fontSize :"20px", fontWeight: "bold"}}>Note-Taking Web Application<br/><h1 style={{fontSize:"15px"}}>React, Firebase </h1></h1>
            &nbsp;&nbsp;&nbsp;&nbsp;Implemented a note-taking web app where users can create an account, make private or public notes for others to see, and like, delete, and filter notes.
            <h1 style={{fontSize :"20px", fontWeight: "bold"}}>Sleep Tracking Web Application<br/><h1 style={{fontSize:"15px"}}>React, Axios, Django</h1></h1>
            &nbsp;&nbsp;&nbsp;&nbsp;Developed a full-stack web application that tracks and stores the user's sleep periods and dreams.
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;Used JSON Web Tokens to create login and registration system and SQLite to store databases.
            </div>
          </div>}
        </div>
      </div>
    )
}
