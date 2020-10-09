import "../layout.css"
import React from "react";
import "./Titledimage.css";
import "../Layout/SiteWrapper.css";
import { Link } from "gatsby";
import "../Buttons/buttonMob.css";
import "../Buttons/buttonDesktop.css";
import "../Buttons/buttonSlide.css";
// The following additional props are needed to use this: doubleColumnHeight1, doubleColumnRow1 (eg. --row3)
// The rows that can be defined are --row1, --row2, --row3, --row4, --row5, these all have sub dimensions in the style: --row1-h1

function TitledImage(props) {
    let heightVar1 = props.titledImageHeight;
    let titledImageRowNo = props.titledImageRow;
    document.documentElement.style.setProperty(String(titledImageRowNo), heightVar1);
    document.documentElement.style.setProperty("--titledImageH1", heightVar1);
    return(
        <div class="titledImage">
            <div class='titleText'>
                <p class={props.headings}>{props.titleText}</p>
                <p class={props.body}>{props.bodyText}</p>
                <Link to="/about/"><button class={props.buttonClass}>Find out more</button></Link>
            </div>
            <div class='imageblock'>
                <img src={props.imageTag} alt={props.imageAlt} height={props.imageHeight}></img>
            </div>
        </div>
    );
    
}

export default TitledImage;
 