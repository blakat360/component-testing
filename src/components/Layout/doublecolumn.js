import React from "react";
import "./doublecolumn.css";
import "../Layout/SiteWrapper.css";

// The following additional props are needed to use this: doubleColumnHeight1, doubleColumnRow1 (eg. --row3)
// The rows that can be defined are --row1, --row2, --row3, --row4, --row5, these all have sub dimensions in the style: --row1-h1

function DoubleColumn(props) {
    let heightVar1 = props.doubleColumn1Height;
    let heightVar2 = props.doubleColumn2Height;
    let doubleColumnRowNo1 = props.doubleColumn1Row;
    let doubleColumnRowNo2 = props.doubleColumn2Row;
    document.documentElement.style.setProperty(String(doubleColumnRowNo1), heightVar1);
    document.documentElement.style.setProperty(String(doubleColumnRowNo2), heightVar2);
    document.documentElement.style.setProperty("--doubleColumnH1", heightVar1);
    document.documentElement.style.setProperty("--doubleColumnH2", heightVar2);
    return(
        <div class="doubleColumn">
            <div class='leftTitle'>
                <img src={props.imgtopleft} alt={props.imgtopleftalt} height={props.imgtopleftheight}></img>
                <h2>{props.toplefttitle}</h2>
            </div>
            <div class='rightTitle'>
                <img src={props.imgtopright} alt={props.imgtoprightalt} height={props.imgtoprightheight}></img>
                <h2>{props.toprighttitle}</h2>
            </div>
            <div class='leftText'>
                <h3>{props.topleft}</h3>  
            </div>
            <div class='rightText'>
                <h3>{props.topright}</h3>  
            </div>
        </div>
    );
    
}

export default DoubleColumn;
 
