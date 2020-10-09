import "../layout.css"
import React from "react";
import "./tripleiconset.css";
import "../Layout/SiteWrapper.css";


// The following additional props are needed to use this: singleColumnHeight, singleColumnRow (eg. --row3)
// The rows that can be defined are --row1, --row2, --row3, --row4, --row5, these all have sub dimensions in the style: --row1-h1

function TripleIconSet(props) {
    let heightVar1 = props.firstrowheight;
    let heightVar2 = props.secondrowheight;
    let heightVar3 = props.thirdrowheight;
    let topmargin = props.margintop;
    let singlecolumnrow1 = props.firstrowno;
    let singlecolumnrow2 = props.secondrowno;
    let singlecolumnrow3 = props.thirdrowno;
    document.documentElement.style.setProperty(String(singlecolumnrow1), heightVar1);
    document.documentElement.style.setProperty(String(singlecolumnrow2), heightVar2);
    document.documentElement.style.setProperty(String(singlecolumnrow3), heightVar3);
    document.documentElement.style.setProperty("--iconrow1", heightVar1);
    document.documentElement.style.setProperty("--iconrow2", heightVar2);
    document.documentElement.style.setProperty("--iconrow3", heightVar3);
    document.documentElement.style.setProperty("--topmargin", topmargin);
    return(
        <div class="tripleIconSet">
            <div class='firstRowIcon'>                
                <text class={props.headings}>{props.firstrowtitle}<br/><br/></text>
                <p class={props.bodytext}>{props.firstrow}</p>  
            </div>
            <div class='firstRowImg'>
                <img src={props.imgfirstrow} alt={props.imgfirstrowalt} height={props.imgfirstrowheight}></img>
            </div>
            <div class='secondRowIcon'> 
                <text class={props.headings}>{props.secondrowtitle}<br/><br/></text>
                <p class={props.bodytext}>{props.secondrow}</p>
            </div>
            <div class='secondRowImg'>
                <img src={props.imgsecondrow} alt={props.imgsecondrowalt} height={props.imgsecondrowheight}></img>
            </div>
            <div class='thirdRowIcon'>
                <text class={props.headings}>{props.thirdrowtitle}<br/><br/></text>
                <p class={props.bodytext}>{props.thirdrow}</p>  
            </div>
            <div class='thirdRowImg'>
                <img src={props.imgthirdrow} alt={props.imgthirdrowalt} height={props.imgthirdrowheight}></img>
            </div>
        </div>
    );
    
}

export default TripleIconSet;
