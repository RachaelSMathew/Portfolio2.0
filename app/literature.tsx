'use client'
import React, {useState} from "react"
import Image from 'next/image'
import literature from './jobs.png'
import animalFarm from './/animalFarm.png'
import metamorphosis from './metamorphosis.png'
import simplePassion from './simplePassion.png'
import yellowWallpaper from './yellowWallpaper.png'
import star from './star.png'
import arrow from './arrow.png'
import styles from './literature.module.css'

export default function Literature({transformBooks, transformProjects, transformJobs,  setTransformBooks}) {
    const [opacityImageLiterature, setOpacityImageLiterature] = useState(0)
    const [scroll, setScroll] = useState(0)
    const bookInfo = [["Animal Farm", "George Orwell", "4.5"], ["Metamorphosis", "Franz Kafka", "4.0"], ["A Simple Passion", "Annie Ernaux", "5.0"], ["The Yellow Wallpaper", "Charlotte Gilman", "4.9"]]

    return (
        (transformJobs !== 1.3 && transformProjects!==1.6) && 
        <div 
          onClick={()=>{transformBooks!==1.8 && setTransformBooks(1.8)}}  
          onMouseLeave={() => {if(transformBooks===1.1) setTransformBooks(1)}} 
          onMouseEnter={() => {if(transformBooks==1) setTransformBooks(1.1)}}  
          style={{cursor: transformBooks !== 1.8 ? "pointer":"default", position: "relative", marginTop: transformBooks!==1.8?"0px":"100px", transition: "1.5s", transform: `scale(${transformBooks})`}}>
        <Image style={{display: transformJobs!== 1.3 && transformProjects!==1.6? "block":"none"}} src={literature} width={350} alt={""}    />
        <div 
          onMouseLeave={() => transformBooks!==1.8&&setOpacityImageLiterature(0)} 
          onMouseEnter={() => transformBooks!==1.8&&setOpacityImageLiterature(0.6)} 
          style={{backgroundColor: `rgba(85,64,49,${opacityImageLiterature})`}} className={styles.overlay}>
          {transformBooks !== 1.8 ? 
          <>
          <h1 className={styles.title} style={{opacity: opacityImageLiterature === 0?0:1}}>literature</h1>
          <h1 style={{opacity: opacityImageLiterature === 0?0:1}} className={styles.paintingTitle}>Isabella (1848)</h1></>:
          <div className={styles.headerContainer}>
          <div className={styles.header} onClick={()=>{setOpacityImageLiterature(0); setTransformBooks(1)}} ><h1 style={{fontSize: "18px"}}>X</h1></div>
          <div className={styles.header} style={{top: 60, left: 70, zIndex: 2}} ><h1 style={{fontSize: "15px"}}>my favorites</h1></div>
          <div className={styles.arrowContainer}>
            <div onClick={()=> {if(scroll < 0) setScroll(scroll+20)}} className={styles.arrow} style={{display: scroll >= 0 ? "none":"flex"}} >
              <Image style={{display: "block", transform: "rotateY(180deg)"}} src={arrow} width={50} alt={""}/>
            </div>
            <div onClick={()=> {if(scroll > -100) setScroll(scroll-20)}} className={styles.arrow} style={{display: scroll <= -100 ? "none":"flex", left: 240}} >
              <Image style={{display: "block"}} src={arrow} width={50} alt={""}/>
            </div>
          </div>
          <div className={styles.bookContainer}>
            <div style={{marginLeft: scroll+"px"}} className={styles.bookScroll}>
              {bookInfo.map((book, index) => (
                  <div className={styles.singleBook} style={{paddingLeft:index===0?10:0}}>
                  <Image src={index === 0 ? animalFarm:index===1?metamorphosis:index===2?simplePassion:yellowWallpaper} width={70} height={104} alt={""}    />
                  <p className={styles.titleBook} style={{width: index === 3?"100px":"70px"}}>{book[0]}</p>
                  <p className={styles.author}>{book[1]}</p>
                  <div className={styles.rating}>
                    <Image className={styles.star} src={star} width={10} alt={""}    />
                    <h1 className={styles.numRating}>{book[2]}</h1>
                  </div>
                </div>
                ))}
            </div>
          </div>
          </div>}
        </div>
      </div>
    )
}
