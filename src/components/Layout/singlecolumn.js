import "../layout.css"
import React from "react";
import "./singlecolumn.css";
import "../Layout/SiteWrapper.css";


// The following additional props are needed to use this: singleColumnHeight, singleColumnRow (eg. --row3)
// The rows that can be defined are --row1, --row2, --row3, --row4, --row5, these all have sub dimensions in the style: --row1-h1

function SingleColumn(props) {
    let heightVar1 = props.singlecolumn1height;
    let heightVar2 = props.singlecolumn2height;
    let heightVar3 = props.singlecolumn3height;
    let heightVar4 = props.singlecolumn4height;
    let topmargin = props.margintop;
    let singlecolumnrow1 = props.singlecolumnrow1;
    let singlecolumnrow2 = props.singlecolumnrow2;
    let singlecolumnrow3 = props.singlecolumnrow3;
    let singlecolumnrow4 = props.singlecolumnrow4;
    document.documentElement.style.setProperty(String(singlecolumnrow1), heightVar1);
    document.documentElement.style.setProperty(String(singlecolumnrow2), heightVar2);
    document.documentElement.style.setProperty(String(singlecolumnrow3), heightVar3);
    document.documentElement.style.setProperty(String(singlecolumnrow4), heightVar4);
    document.documentElement.style.setProperty("--margintop", topmargin);
    return(
        <div class={props.mainwindowtype}>
            <div class='firstRow'>
                <img src={props.imgfirstrow} alt={props.imgfirstrowalt} height={props.imgfirstrowheight}></img>
                <text class={props.headings}>{props.firstrowtitle}<br/><br/></text>
                <p class={props.bodytext}>{props.firstrow}</p>  
            </div>
            {/* <div class='secondRow'>
                <img src={props.imgsecondrow} alt={props.imgsecondrowalt} height={props.imgsecondrowheight}></img>
                <text class={props.headings}>{props.secondrowtitle}</text>
                <p class={props.bodytext}>{props.secondrow}</p>
            </div>
            <div class='thirdRow'>
                <img src={props.imgthirdrow} alt={props.imgthirdrowalt} height={props.imgthirdrowheight}></img>
                <text class={props.headings}>{props.thirdrowtitle}</text>
                <p class={props.bodytext}>{props.thirdrow}</p>  
            </div>
            <div class='fourthRow'>
                <img src={props.imgfourthrow} alt={props.imgfourthrowalt} height={props.imgfourthrowheight}></img>
                <text class={props.headings}>{props.fourthrowtitle}</text>
                <p class={props.bodytext}>{props.fourthrow}</p>  
            </div> */}
        </div>
    );
    
}

export default SingleColumn;
 
