import React from "react";
import "./singlecolumn.css";
import "../Layout/SiteWrapper.css";

function threecolumn(props) {

    return(
        <div class="singleColumn">
            <div class='topLeft'>
                <img src={props.imgtopleft} alt={props.imgtopleftalt} height={props.imgtopleftheight}></img>
                <h2>{props.toplefttitle}</h2>
                <h3>{props.topleft}</h3>  
            </div>
            <div class='topMid'>
                <img src={props.imgtopmid} alt={props.imgtopmidalt} height={props.imgtopmidheight}></img>
                <h2>{props.topmidtitle}</h2>
                <h3>{props.topmid}</h3>
            </div>
            <div class='topRight'>
                <img src={props.imgtopright} alt={props.imgtoprightalt} height={props.imgtoprightheight}></img>
                <h2>{props.toprighttitle}</h2>
                <h3>{props.topright}</h3>  
            </div>
        </div>
    );
    
}

export default threecolumn;
 
