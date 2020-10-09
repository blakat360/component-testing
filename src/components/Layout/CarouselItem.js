import "../layout.css"
import React from "react";
import "./CarouselItem.css";
import "../Layout/SiteWrapper.css";
import { Link } from "gatsby";
import "../Buttons/buttonSlide.css";


// The following additional props are needed to use this: singleColumnHeight, singleColumnRow (eg. --row3)
// The rows that can be defined are --row1, --row2, --row3, --row4, --row5, these all have sub dimensions in the style: --row1-h1

function CarouselItem(props) {
    return(
        <div class={props.carouselItemClass}>
            <div class={props.caroImageClass}>
                <img src={props.itemImage} width="450vw" href="/index/" alt="Logo"></img>
            </div>
            <div class={props.caroTextClass}>
                <p class={props.headerTextType}>{props.itemHeading}</p>
                <p class={props.bodyTextType}>{props.itemBody}</p>
                <Link to="/about/"><button className={props.buttonType}>Read Article</button></Link>
            </div>
        </div>
    );
    
}

export default CarouselItem;
 

