import React, { useEffect, useState } from "react";
import Vara from "vara";
/** source: https://dminhvu.com/post/react-vara-animated-handwriting-text */
export default function VaraText({ text, transformProjects, transformBooks }) {
    var counter = 0

    useEffect(() => {
        if(counter === 0) counter ++ // text shows up twice so we need this counter
        else return
        var vara = new Vara(
         "#vara-container",
         "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Satisfy/SatisfySL.json",
         [
           {
             text: text,
             fontSize: 60,
             strokeWidth: 2.2,
             duration: 5000,
             textAlign: "center"
           }
         ]
       );
    }, []);
   
    return <div style={{paddingTop: 30}} id="vara-container" />;
  }
