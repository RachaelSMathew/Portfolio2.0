import React, { useEffect, useState } from "react";
import Image from 'next/image'
import profilePic from './roseRachael.png'

export default function NavBar() {
    const [gray, setGray] = useState("grayscale(0%)")
    const [changeNav, setChangeNav] = useState(false)
    const [windowSize, setWindowSize] = useState([0,0]);
    
  const [linkedinHover, setLinkedInHover] = useState(0)
  const [intstaHover, setInstaHover] = useState(0)
  const [fbHover, setFBHover] = useState(0)

    return (
        <view style={{width: windowSize[1], height: windowSize[0], top: changeNav ? 29:0, display: "flex", position: "fixed", alignItems: "flex-end", justifyContent: "space-around", flexDirection:  changeNav ? 'row': "column"}}>
            <Image onMouseLeave={() => setGray("grayscale(0%)")} onMouseEnter={() => setGray("grayscale(100%)")} src={profilePic} style={{filter: gray, marginRight: 15, marginTop: -10, cursor: "pointer", transition: "1s"}} height={70} alt={""}    />
            <h1 onMouseEnter={() => setLinkedInHover(1)} onMouseLeave={() => setLinkedInHover(0)} style={{writingMode: changeNav ? "horizontal-tb":"vertical-lr", cursor: 'pointer'}}><span style={{color: "white", transition: "1.0s", opacity:linkedinHover}}>‧₊˚</span><a href="https://www.linkedin.com/in/rachael-mathew-227a18138/" style={{color: "white", textDecoration: "none"}}>linkedIn</a><span style={{color: "white", transition: "1.0s", opacity:linkedinHover}}>˚₊‧</span></h1>
            <h1 onMouseEnter={() => setFBHover(1)} onMouseLeave={() => setFBHover(0)} style={{writingMode: changeNav ? "horizontal-tb":"vertical-lr", cursor: 'pointer'}}><span style={{color: "white", transition: "1.0s", opacity:fbHover}}>‧₊˚</span><a href="https://www.facebook.com/abby.sherman.14268/" style={{color: "white", textDecoration: "none"}}>facebook</a><span style={{color: "white", transition: "1.0s", opacity:fbHover}}>˚₊‧</span></h1>
            <h1 onMouseEnter={() => setInstaHover(1)} onMouseLeave={() => setInstaHover(0)} style={{writingMode: changeNav ? "horizontal-tb":"vertical-lr", cursor: 'pointer'}}><span style={{color: "white", transition: "1.0s", opacity:intstaHover}}>‧₊˚</span><a href="https://www.instagram.com/rachaelsmathew/" style={{color: "white", textDecoration: "none"}}>insta</a><span style={{color: "white", transition: "1.0s", opacity:intstaHover}}>˚₊‧</span></h1>
            <Image onMouseLeave={() => setGray("grayscale(0%)")} onMouseEnter={() => setGray("grayscale(100%)")} src={profilePic} style={{filter: gray, marginRight: 15, cursor: "pointer", transition: "1s"}} height={70} alt={""}    />
        </view>
    )
}
