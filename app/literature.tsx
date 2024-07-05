'use client'
import React, {useRef, useState} from "react"
import Image from 'next/image'
import literature from './jobs.png'
import animalFarm from './animalFarm.png'
import metamorphosis from './metamorphosis.png'
import simplePassion from './simplePassion.png'
import yellowWallpaper from './yellowWallpaper.png'
import star from './star.png'
import arrow from './arrow.png'

export default function Literature({transformBooks, transformProjects, transformJobs,  setTransformBooks}) {
    const [opacityImageLiterature, setOpacityImageLiterature] = useState(0)
    const [scroll, setScroll] = useState(0)

    return (
        (transformJobs !== 1.3 && transformProjects!==1.6) && <div onClick={()=>{transformBooks!==1.8 && setTransformBooks(1.8)}}  onMouseLeave={() => {if(transformBooks===1.1) setTransformBooks(1)}} onMouseEnter={() => {if(transformBooks==1) setTransformBooks(1.1)}}  style={{cursor: transformBooks !== 1.8 ? "pointer":"default", position: "relative", marginTop: transformBooks!==1.8?"0px":"100px", transition: "1.5s", transform: `scale(${transformBooks})`}}>
        <Image style={{display: transformJobs!== 1.3 && transformProjects!==1.6? "block":"none"}} src={literature} width={350} alt={""}    />
        <div onMouseLeave={() => transformBooks!==1.8&&setOpacityImageLiterature(0)} onMouseEnter={() => transformBooks!==1.8&&setOpacityImageLiterature(0.6)} style={{position: "absolute", top: 65, left: 60, height: "60%", width: "70%", transition: ".5s ease", backgroundColor: `  rgba(85,64,49,${opacityImageLiterature})`}}>
          {transformBooks !== 1.8 ? 
          <>
          <h1 style={{opacity: opacityImageLiterature === 0?0:1, position: "absolute", transition: ".5s", top: 0, left: 20, color: "white", fontSize :"40px", }}>literature</h1>
          <h1 style={{opacity: opacityImageLiterature === 0?0:1, position: "absolute", transition: ".5s", top: "75%", left: 20, color: "white", fontSize :"20px", }}>Isabella (1848)</h1></>:
          <div style={{overflow: "scroll", width: "235px", height: "180px", position: "relative", backgroundColor: "rgba(220,190,161, 0.3)"}}>
          <div style={{position: "fixed", cursor: "pointer", transition:".5s", zIndex: 3, top: 57, right: 70, color: "black" }} onClick={()=>{setOpacityImageLiterature(0); setTransformBooks(1)}} ><h1 style={{fontSize: "18px"}}>X</h1></div>
          <div style={{position: "fixed", cursor: "pointer", transition:".5s", zIndex: 3, top: 60, left: 70, color: "black" }} ><h1 style={{fontSize: "15px"}}>my favorites</h1></div>
          <div style={{flexDirection: "row", alignItems :"center", gap: 4, display: "flex"}}>
            <div onClick={()=> {if(scroll < 0) setScroll(scroll+20)}} style={{position: "fixed", display: scroll >= 0 ? "none":"flex", cursor: "pointer", zIndex: 3, top: 150, left: 70}} ><Image style={{display: "block", transform: "rotateY(180deg)"}} src={arrow} width={40} alt={""}    /></div>
            <div onClick={()=> {if(scroll > -100) setScroll(scroll-20)}} style={{position: "fixed", display: scroll <= -100 ? "none":"flex", cursor: "pointer", zIndex: 3, top: 150, left: 250}} ><Image style={{display: "block"}} src={arrow} width={40} alt={""}    /></div>
          </div>
          <div style={{position: "absolute", transition: ".5s", left: 10, top: 33, color: "black" }}>
            <div style={{marginLeft: scroll+"px", transition: "all 1s ease-out", flexDirection: "row", gap: 10, display: "flex", overflowX: "hidden", overflowY: "hidden"}}>
            <div style={{ flexDirection:"column", display: "flex"}}>
              <Image src={animalFarm} width={70} height={104} alt={""}    />
              <p style={{fontSize: 12, margin: 0, height: "15px"}}>Animal Farm</p>
              <p style={{fontSize: 9, margin: 0, height: "15px"}}>George Orwell</p>
              <div style={{flexDirection: "row", height: "10px", gap: 2, alignItems: "center", margin: 0, display: "flex"}}>
                <Image style={{display: "block", marginTop: -5, }} src={star} width={10} alt={""}    />
                <h1 style={{fontWeight: "bold", letterSpacing: 1, fontSize: 7}}>4.5</h1>
              </div>
            </div>
            <div style={{flexDirection:"column", display: "flex"}}>
            <Image style={{display: "block"}} src={metamorphosis} width={73} alt={""}    />
            <p style={{fontSize: 12, margin: 0, height: "15px"}}>Metamorphosis</p>
              <p style={{fontSize: 9, margin: 0, height: "15px"}}>Franz Kafka</p>
              <div style={{flexDirection: "row", height: "10px", gap: 2, alignItems: "center", margin: 0, display: "flex"}}>
                <Image style={{display: "block", marginTop: -5, }} src={star} width={10} alt={""}    />
                <h1 style={{fontWeight: "bold", letterSpacing: 1, fontSize: 7}}>4.0</h1>
              </div>
            </div>
            <div style={{flexDirection:"column", display: "flex"}}>
            <Image style={{display: "block"}} src={simplePassion} width={66} alt={""}    />
            <p style={{fontSize: 11, margin: 0, height: "15px"}}>A Simple Passion</p>
              <p style={{fontSize: 9, margin: 0, height: "15px"}}>Annie Ernaux</p>
              <div style={{flexDirection: "row", height: "10px", gap: 2, alignItems: "center", margin: 0, display: "flex"}}>
                <Image style={{display: "block", marginTop: -5, }} src={star} width={10} alt={""}    />
                <h1 style={{fontWeight: "bold", letterSpacing: 1, fontSize: 7}}>5.0</h1>
              </div>
            </div>
            <div style={{flexDirection:"column", display: "flex"}}>
            <Image style={{display: "block"}} src={yellowWallpaper} width={64} alt={""}    />
            <p style={{fontSize: 11, margin: 0, width: "100px", overflow: "hidden", height: "15px"}}>Yellow Wallpaper</p>
              <p style={{fontSize: 9, margin: 0, height: "15px"}}>Charlotte Gilman</p>
              <div style={{flexDirection: "row", height: "10px", gap: 2, alignItems: "center", margin: 0, display: "flex"}}>
                <Image style={{display: "block", marginTop: -5, }} src={star} width={10} alt={""}    />
                <h1 style={{fontWeight: "bold", letterSpacing: 1, fontSize: 7}}>4.9</h1>
              </div>
            </div>
            </div>
          </div>
          </div>}
        </div>
      </div>
    )
}/**
Metamorphosis
Animal Farm
The yellow Wallpaper */