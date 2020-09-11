import React from "react";
import "./singlecolumn.css";
import "../Layout/SiteWrapper.css";

// The following additional props are needed to use this: singleColumnHeight, singleColumnRow (eg. --row3)

function singlecolumn(props) {
    let heightVar = props.singleColumnHeight;
    let singleColumnRow = props.singleColumnRow;
    document.documentElement.style.setProperty(String(singleColumnRow), heightVar);
    return(
        <div class="singleColumn">
            <div class='firstRow'>
                <img src={props.imgfirstRow} alt={props.imgfirstRowalt} height={props.imgfirstRowheight}></img>
                <h2>{props.firstRowtitle}</h2>
                <h3>{props.firstRow}</h3>  
            </div>
            <div class='secondRow'>
                <img src={props.imgsecondRow} alt={props.imgsecondRowalt} height={props.imgsecondRowheight}></img>
                <h2>{props.secondRowtitle}</h2>
                <h3>{props.secondRow}</h3>
            </div>
            <div class='thirdRow'>
                <img src={props.imgthirdRow} alt={props.imgthirdRowalt} height={props.imgthirdRowheight}></img>
                <h2>{props.thirdRowtitle}</h2>
                <h3>{props.thirdRow}</h3>  
            </div>
            <div class='fourthRow'>
                <img src={props.imgfourthRow} alt={props.imgfourthRowalt} height={props.imgfourthRowheight}></img>
                <h2>{props.fourthRowtitle}</h2>
                <h3>{props.fourthRow}</h3>  
            </div>
        </div>
    );
    
}

export default singlecolumn;
 
