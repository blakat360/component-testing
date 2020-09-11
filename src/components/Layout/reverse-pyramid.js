import React from "react";
import "./reverse-pyramid.css";
import "../Layout/SiteWrapper.css";
import TripleColumn from "./triplecolumn";
import DoubleColumn from "./doublecolumn";

// Rows still need defining

export default function ReversePyramid(props) {
    let heightVar1 = props.pyramidrow1h + props.pyramidrow2h;
    let heightVar2 = props.pyramidrow3h + props.pyramidrow4h;
    let pyramidRowNo1 = props.pyramidrow1no;
    let pyramidRowNo2 = props.pyramidrow2no;
    document.documentElement.style.setProperty(String(pyramidRowNo1), heightVar1);
    document.documentElement.style.setProperty(String(pyramidRowNo2), heightVar2);
    document.documentElement.style.setProperty("--pyramidRow1", heightVar1);
    document.documentElement.style.setProperty("--pyramidRow2", heightVar2);
    return(
        <div class="reversepyramid">
            <div class="pyramidRow1">
                <TripleColumn 
                tripleColumn1Height={props.pyramidrow1h}
                tripleColumn1Row={props.pyramidrow1no}
                tripleColumn2Height={props.pyramidrow2h}
                tripleColumn2Row={props.pyramidrow2no}
                imgtopleft={props.imgtopleft}
                topleft={props.topleft}
                toplefttitle={props.toplefttitle}
                imgtopleftheight={props.imgtopleftheight}
                imgtopmid={props.imgtopmid}
                imgtopmidheight={props.imgtopleftheight}
                topmid={props.topmid}
                topmidtitle={props.topmidtitle}
                topright={props.topright}
                toprighttitle={props.toprighttitle}
                imgtopright={props.imgtopright}
                imgtoprightheight={props.imgtoprightheight}
                />
            </div>
            <div class="pyramidRow2">
            <DoubleColumn 
                doubleColumn1Height={props.pyramidrow3h}
                doubleColumn1Row={props.pyramidrow3no}
                doubleColumn2Height={props.pyramidrow4h}
                doubleColumn2Row={props.pyramidrow4no}
                imgtopleft={props.imgbottomleft}
                topleft={props.bottomleft}
                toplefttitle={props.bottomlefttitle}
                imgtopleftheight={props.imgbottomleftheight}
                topright={props.bottomright}
                toprighttitle={props.bottomrighttitle}
                imgtopright={props.imgbottomright}
                imgtoprightheight={props.imgbottomrightheight}
                />
            </div>
      </div>
    );
}