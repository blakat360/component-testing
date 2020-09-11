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
    let singlecolumnrow1 = props.singlecolumnrow1;
    let singlecolumnrow2 = props.singlecolumnrow2;
    let singlecolumnrow3 = props.singlecolumnrow3;
    let singlecolumnrow4 = props.singlecolumnrow4;
    document.documentElement.style.setProperty(String(singlecolumnrow1), heightVar1);
    document.documentElement.style.setProperty(String(singlecolumnrow2), heightVar2);
    document.documentElement.style.setProperty(String(singlecolumnrow3), heightVar3);
    document.documentElement.style.setProperty(String(singlecolumnrow4), heightVar4);
    document.documentElement.style.setProperty("--singlecolumnh1", heightVar1);
    document.documentElement.style.setProperty("--singlecolumnh2", heightVar2);
    document.documentElement.style.setProperty("--singlecolumnh3", heightVar3);
    document.documentElement.style.setProperty("--singlecolumnh4", heightVar4);
    return(
        <div class="singleColumn">
            <div class='firstRow'>
                <img src={props.imgfirstrow} alt={props.imgfirstrowalt} height={props.imgfirstrowheight}></img>
                <h2>{props.firstrowtitle}</h2>
                <h3>{props.firstrow}</h3>  
            </div>
            <div class='secondRow'>
                <img src={props.imgsecondrow} alt={props.imgsecondrowalt} height={props.imgsecondrowheight}></img>
                <h2>{props.secondrowtitle}</h2>
                <h3>{props.secondrow}</h3>
            </div>
            <div class='thirdRow'>
                <img src={props.imgthirdrow} alt={props.imgthirdrowalt} height={props.imgthirdrowheight}></img>
                <h2>{props.thirdrowtitle}</h2>
                <h3>{props.thirdrow}</h3>  
            </div>
            <div class='fourthRow'>
                <img src={props.imgfourthrow} alt={props.imgfourthrowalt} height={props.imgfourthrowheight}></img>
                <h2>{props.fourthrowtitle}</h2>
                <h3>{props.fourthrow}</h3>  
            </div>
        </div>
    );
    
}

export default SingleColumn;
 
