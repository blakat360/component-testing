import "../layout.css"
import React from "react";
import "./textblock.css";
import "../Layout/SiteWrapper.css";


// The following additional props are needed to use this: singleColumnHeight, singleColumnRow (eg. --row3)
// The rows that can be defined are --row1, --row2, --row3, --row4, --row5, these all have sub dimensions in the style: --row1-h1

function TextBlock(props) {
    let heightVar1 = props.textblockheight;
    let textblockrow = props.textblockrow;
    document.documentElement.style.setProperty(String(textblockrow), heightVar1);

    return(
        <div class="textBlock">
            <div class='mainBlock'>
                <text class={props.headtype}>{props.blocktitle}<br/><br/></text>
                <p class={props.bodytype}>{props.mainblock}</p>  
            </div>
        </div>
    );
    
}

export default TextBlock;
