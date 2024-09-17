import React, { useEffect, useState } from "react";
import Image from 'next/image'
import profilePic from './roseRachael.png'

export default function NavBar() {
    const [gray, setGray] = useState("grayscale(0%)")
    const [changeNav, setChangeNav] = useState(false)
    const [windowSize, setWindowSize] = useState([0,0]);
    
    const [hoverArray, setHoverArray] = useState([0,0,0,0]) // order: linkedin, insta, fb, email
    const labels = ["linkedin", "facebook", "insta", "email"]
    const urls = ["https://www.linkedin.com/in/rachael-mathew-227a18138/", "https://www.facebook.com/abby.sherman.14268/", "https://www.instagram.com/rachaelsmathew/", "mailto: rachaelmathew1@gmail.com"]

    useEffect(() => {
        if (typeof window === "undefined") return
        setWindowSize([window.innerHeight, window.innerWidth]);
        setChangeNav(window.innerWidth<1300)
        const windowSizeHandler = () => {
          if (typeof window === "undefined") return
          setWindowSize([window.innerHeight, window.innerWidth]);
          setChangeNav(window.innerWidth<1000)
        };

        window.addEventListener("resize", windowSizeHandler);

        return () => {
          window.removeEventListener("resize", windowSizeHandler);
        };
    }, []);

    const returnFlowers = () => {
      return (
        windowSize[1] >= 600 && 
        <Image onMouseLeave={() => setGray("grayscale(0%)")} 
          onMouseEnter={() => setGray("grayscale(100%)")} 
          src={profilePic} style={{filter: gray, marginTop: -10, cursor: "pointer", transition: "1s"}} 
          height={windowSize[1] < 600 ? 50:70} 
          alt={""}    />
      )
    }

    return (
        <view style={{backgroundColor: windowSize[1] < 600 ?"#94a2a8":"transparent", height: changeNav ? "60px":"100%", zIndex: 2, minWidth: changeNav ? "100%":"20px", top: changeNav ? null:0, bottom:changeNav ? 0:null, right: 0, display: "flex", position: "fixed", }}>
            <ul style={{flex:1, display: "flex", padding: 0, listStyle: "none", alignItems: "center", flexDirection:  changeNav ? 'row': "column", justifyContent: "space-between"}}>
            {returnFlowers()}
            {labels.map((label, index) => 
              <h1 onMouseEnter={() => setHoverArray(hoverArray.map((c, i) => { return i===index?1:c}))} 
              onMouseLeave={() => setHoverArray(hoverArray.map((c, i) => { return i===index?0:c}))} 
              style={{writingMode: changeNav ? "horizontal-tb":"vertical-lr", cursor: 'pointer'}}>
                <span style={{color: "white", transition: "1.0s", fontSize: "20px", opacity:hoverArray[index]}}>‧₊˚</span>
                <a href={urls[index]} style={{color: "white", textDecoration: "none"}}>{label}</a>
                <span style={{color: "white", transition: "1.0s", fontSize: "20px", opacity:hoverArray[index]}}>˚₊‧</span>
              </h1>
            )}
            {returnFlowers()}
            </ul>
        </view>
    )
}
