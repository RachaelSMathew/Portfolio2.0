'use client'
import React, {useEffect, useState} from "react"
import Image from 'next/image'
import literature from './jobs.png'
import animalFarm from './/animalFarm.png'
import metamorphosis from './metamorphosis.png'
import simplePassion from './simplePassion.png'
import yellowWallpaper from './yellowWallpaper.png'
import star from './star.png'
import arrow from './arrow.png'
import styles from './literature.module.css'
import bookIcon from './bookIcon.png'

export default function Literature({transformBooks, transformProjects, transformJobs,  setTransformBooks}) {
    const [opacityImageLiterature, setOpacityImageLiterature] = useState(0)
    const [scroll, setScroll] = useState(0)
    const [tab, setTab] = useState(0) // 0=favorite, 1=saved
    const [bookInfo, setBookInfo] = useState([["Animal Farm", "George Orwell", "4.5", 0], ["Metamorphosis", "Franz Kafka", "4.0", 0], ["A Simple Passion", "Annie Ernaux", "5.0", 0], ["The Yellow Wallpaper", "Charlotte Gilman", "4.9", 0]])
    const [numInScroll, setNumInScroll] = useState(0);

    useEffect(() => {
      setScroll(0)
    }, [tab])

    const updateSaved = (num) => {
      setBookInfo(bookInfo.map((book, index) => {
        if(index === num) {
          setNumInScroll(numInScroll + (book[3] === 0 ? 1 : -1))
          return [book[0], book[1], book[2], book[3]===0?1:0]
        } else {
          return [...book]
        }
    }))
    }

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

          <div onClick={()=>setTab(0)} className={styles.header} style={{top: 60, left: 70, zIndex: 2, width: "70px"}} ><h1 style={{fontSize: "15px"}}>my favorites</h1></div>
          <div className={styles.header} style={{top: 85, left: 70, zIndex: 2, width: "70px", height: "1px", backgroundColor: tab == 0 ? "black":"transparent"}} />

          <div onClick={()=>setTab(1)} className={styles.header} style={{top: 60, left: 160, zIndex: 2, width: "30px"}} ><h1 style={{fontSize: "15px"}}>saved</h1></div>
          <div className={styles.header} style={{top: 85, left: 158, zIndex: 2, width: "30px", height: "1px", backgroundColor: tab == 1 ? "black":"transparent"}} />

          {(tab===0||numInScroll > 2) && <div className={styles.arrowContainer}>
            <div onClick={()=> {if(scroll < 0) setScroll(scroll+20)}} className={styles.arrow} style={{display: scroll >= 0 ? "none":"flex"}} >
              <Image style={{display: "block", transform: "rotateY(180deg)"}} src={arrow} width={50} alt={""}/>
            </div>
            <div onClick={()=> {if(scroll > -100) setScroll(scroll-20)}} className={styles.arrow} style={{display: scroll <= (tab===0 ||numInScroll>3 ? -100:-20) ? "none":"flex", left: 240}} >
              <Image style={{display: "block"}} src={arrow} width={50} alt={""}/>
            </div>
          </div>}
          <div className={styles.bookContainer}>
            <div style={{marginLeft: scroll+"px"}} className={styles.bookScroll}>
              <h1 className={styles.noSavedBooks} style={{transition: tab == 1 ? ".5s":"0s", opacity: tab == 1 && numInScroll === 0? 1:0}}>click on the books in the my favorites to add to your collection!</h1>
              <div style={{paddingLeft: 5}}/>
              {bookInfo.map((book, index) => (
                  tab === 0 || (tab === 1 && book[3] == 1) ? <div className={styles.singleBook}>
                  <div style={{position: "relative", height: "103px"}}><Image style={{cursor: "pointer"}} onClick={() =>{updateSaved(index)}} src={book[0] === "Animal Farm" ? animalFarm:book[0]==="A Simple Passion"?simplePassion:book[0]==="Metamorphosis"?metamorphosis:yellowWallpaper} width={70} height={104} alt={""}    />
                  <Image style={{top: 5, left: 47, position: "absolute", transition: ".5s", display: book[3] == 1 ? "flex":"none"}} src={bookIcon} width={20} alt={""}    /></div>
                  <p className={styles.titleBook} style={{width: index === 3?"100px":"70px"}}>{book[0]}</p>
                  <p className={styles.author}>{book[1]}</p>
                  <div className={styles.rating}>
                    <Image className={styles.star} src={star} width={10} alt={""}    />
                    <h1 className={styles.numRating}>{book[2]}</h1>
                  </div>
                </div>:null
                ))}
            </div>
          </div>
          </div>}
        </div>
      </div>
    )
}
