import React from "react";
import "./triplecolumn.css";
import "../Layout/SiteWrapper.css";
import "../layout.css"

// The following additional props are needed to use this: tripleColumnHeight1, tripleColumnRow1 (eg. --row3)
// The rows that can be defined are --row1, --row2, --row3, --row4, --row5, these all have sub dimensions in the style: --row1-h1

function TripleColumn(props) {
    let heightVar1 = props.triplecolumn1height;
    let heightVar2 = props.triplecolumn2height;
    let tripleColumnRowNo1 = props.triplecolumn1row;
    let tripleColumnRowNo2 = props.triplecolumn2row;
    document.documentElement.style.setProperty(String(tripleColumnRowNo1), heightVar1);
    document.documentElement.style.setProperty(String(tripleColumnRowNo2), heightVar2);
    document.documentElement.style.setProperty("--tripleColumnH1", heightVar1);
    document.documentElement.style.setProperty("--tripleColumntext", heightVar2);
    return(
        <div class="tripleColumn">
            <div class='leftTitle'>
                <img src={props.imgtopleft} alt={props.imgtopleftalt} height={props.imgtopleftheight}></img>
                <p class={props.headings}>{props.toplefttitle}</p>
            </div>
            <div class='midTitle'>
                <img src={props.imgtopmid} alt={props.imgtopmidalt} height={props.imgtopmidheight}></img>
                <p class={props.headings}>{props.topmidtitle}</p>
            </div>
            <div class='rightTitle'>
                <img src={props.imgtopright} alt={props.imgtoprightalt} height={props.imgtoprightheight}></img>
                <p class={props.headings}>{props.toprighttitle}</p>
            </div>
            <div class='leftText'>
                <p class={props.bodytext}>{props.topleft}</p>  
            </div>
            <div class='midText'>
                <p class={props.bodytext}>{props.topmid}</p>
            </div>
            <div class='rightText'>
                <p class={props.bodytext}>{props.topright}</p>  
            </div>
            
        </div>
    );
    
}

export default TripleColumn;
