import React from "react";
import "./reversepyramid.css";
import "../Layout/SiteWrapper.css";

function reversePyramid(props) {

    return(
        <div class="reversepyramid">
            <div class='revPyramidTopLeft'>
                <img src={props.imgtopleft} alt={props.imgtopleftalt} height={props.imgtopleftheight}></img>
                <h2>{props.toplefttitle}</h2>
                <h3>{props.topleft}</h3>  
            </div>
            <div class='revPyramidTopMid'>
                <img src={props.imgtopmid} alt={props.imgtopmidalt} height={props.imgtopmidheight}></img>
                <h2>{props.topmidtitle}</h2>
                <h3>{props.topmid}</h3>
            </div>
            <div class='revPyramidTopRight'>
                <img src={props.imgtopright} alt={props.imgtoprightalt} height={props.imgtoprightheight}></img>
                <h2>{props.toprighttitle}</h2>
                <h3>{props.topright}</h3>  
            </div>
            <div class='revPyramidBottomLeft'>
                <img src={props.imgbottomleft} alt={props.imgbottomleftalt} height={props.imgbottomleftheight}></img>
                <h2>{props.bottomlefttitle}</h2>
                <h3>{props.bottomleft}</h3>
            </div>
            <div class='revPyramidBottomRight'>
                <img src={props.imgbottomright} alt={props.imgbottomrightalt} height={props.imgbottomrightheight}></img>
                <h2>{props.bottomrighttitle}</h2>
                <h3>{props.bottomright}</h3>
            </div>
        </div>

    );
    
}

export default reversePyramid;
  