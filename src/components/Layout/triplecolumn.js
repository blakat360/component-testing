import React from "react";
import "./triplecolumn.css";
import "../Layout/SiteWrapper.css";

// The following additional props are needed to use this: tripleColumnHeight1, tripleColumnRow1 (eg. --row3)
// The rows that can be defined are --row1, --row2, --row3, --row4, --row5, these all have sub dimensions in the style: --row1-h1

function TripleColumn(props) {
    let heightVar1 = props.tripleColumn1Height;
    let heightVar2 = props.tripleColumn2Height;
    let tripleColumnRowNo1 = props.tripleColumn1Row;
    let tripleColumnRowNo2 = props.tripleColumn2Row;
    document.documentElement.style.setProperty(String(tripleColumnRowNo1), heightVar1);
    document.documentElement.style.setProperty(String(tripleColumnRowNo2), heightVar2);
    document.documentElement.style.setProperty("--tripleColumnH1", heightVar1);
    document.documentElement.style.setProperty("--tripleColumnH2", heightVar2);
    return(
        <div class="tripleColumn">
            <div class='leftTitle'>
                <img src={props.imgtopleft} alt={props.imgtopleftalt} height={props.imgtopleftheight}></img>
                <h2>{props.toplefttitle}</h2>
            </div>
            <div class='midTitle'>
                <img src={props.imgtopmid} alt={props.imgtopmidalt} height={props.imgtopmidheight}></img>
                <h2>{props.topmidtitle}</h2>
            </div>
            <div class='rightTitle'>
                <img src={props.imgtopright} alt={props.imgtoprightalt} height={props.imgtoprightheight}></img>
                <h2>{props.toprighttitle}</h2>
            </div>
            <div class='leftText'>
                <h3>{props.topleft}</h3>  
            </div>
            <div class='midText'>
                <h3>{props.topmid}</h3>
            </div>
            <div class='rightText'>
                <h3>{props.topright}</h3>  
            </div>
            
        </div>
    );
    
}

export default TripleColumn;
