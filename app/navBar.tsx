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
    const [emailHover, setEmailHover] = useState(0)
    
    useEffect(() => {
        if (typeof window === "undefined") return
        setWindowSize([window.innerHeight, window.innerWidth]);
        setChangeNav(window.innerWidth<1300)
        const windowSizeHandler = () => {
          if (typeof window === "undefined") return
          setWindowSize([window.innerHeight, window.innerWidth]);
          setChangeNav(window.innerWidth<1300)
        };

        window.addEventListener("resize", windowSizeHandler);

        return () => {
          window.removeEventListener("resize", windowSizeHandler);
        };
    }, []);

    return (
        <view style={{alignItems: "center", backgroundColor: windowSize[1] < 600 ?"#94a2a8":"transparent", minHeight: changeNav ? "20px":"100%", zIndex: 2, minWidth: changeNav ? "100%":"20px", top: changeNav ? null:0, bottom:changeNav ? 0:null, right: 0, display: "flex", position: "fixed", justifyContent: "space-between", flexDirection:  changeNav ? 'row': "column"}}>
            {windowSize[1] >= 600 && <Image onMouseLeave={() => setGray("grayscale(0%)")} onMouseEnter={() => setGray("grayscale(100%)")} src={profilePic} style={{filter: gray, marginTop: -10, cursor: "pointer", transition: "1s"}} height={windowSize[1] < 600 ? 50:70} alt={""}    />}
            <h1 onMouseEnter={() => setLinkedInHover(1)} onMouseLeave={() => setLinkedInHover(0)} style={{writingMode: changeNav ? "horizontal-tb":"vertical-lr", cursor: 'pointer'}}><span style={{color: "white", transition: "1.0s", opacity:linkedinHover}}>‧₊˚</span><a href="https://www.linkedin.com/in/rachael-mathew-227a18138/" style={{color: "white", textDecoration: "none"}}>linkedIn</a><span style={{color: "white", transition: "1.0s", opacity:linkedinHover}}>˚₊‧</span></h1>
            <h1 onMouseEnter={() => setFBHover(1)} onMouseLeave={() => setFBHover(0)} style={{writingMode: changeNav ? "horizontal-tb":"vertical-lr", cursor: 'pointer'}}><span style={{color: "white", transition: "1.0s", opacity:fbHover}}>‧₊˚</span><a href="https://www.facebook.com/abby.sherman.14268/" style={{color: "white", textDecoration: "none"}}>facebook</a><span style={{color: "white", transition: "1.0s", opacity:fbHover}}>˚₊‧</span></h1>
            <h1 onMouseEnter={() => setInstaHover(1)} onMouseLeave={() => setInstaHover(0)} style={{writingMode: changeNav ? "horizontal-tb":"vertical-lr", cursor: 'pointer'}}><span style={{color: "white", transition: "1.0s", opacity:intstaHover}}>‧₊˚</span><a href="https://www.instagram.com/rachaelsmathew/" style={{color: "white", textDecoration: "none"}}>insta</a><span style={{color: "white", transition: "1.0s", opacity:intstaHover}}>˚₊‧</span></h1>
            <h1 onMouseEnter={() => setEmailHover(1)} onMouseLeave={() => setEmailHover(0)} style={{writingMode: changeNav ? "horizontal-tb":"vertical-lr", cursor: 'pointer'}}><span style={{color: "white", transition: "1.0s", opacity:emailHover}}>‧₊˚</span><a href="mailto: rachaelmathew1@gmail.com" style={{color: "white", textDecoration: "none"}}>email</a><span style={{color: "white", transition: "1.0s", opacity:emailHover}}>˚₊‧</span></h1>
            {windowSize[1] >= 600  && <Image onMouseLeave={() => setGray("grayscale(0%)")} onMouseEnter={() => setGray("grayscale(100%)")} src={profilePic} style={{filter: gray, cursor: "pointer", transition: "1s"}} height={windowSize[1] < 600 ? 50:70} alt={""}    />}
        </view>
    )
}
