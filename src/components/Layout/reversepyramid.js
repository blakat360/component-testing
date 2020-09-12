import "../layout.css"
import React from "react";
import "./reverse-pyramid.css";
import "../Layout/SiteWrapper.css";
import loadable from "@loadable/component";

const TripleColumn = loadable(() => import("../Layout/triplecolumn.js"))
const DoubleColumn = loadable(() => import("../Layout/doublecolumn.js"))
// Rows still need defining

function ReversePyramid(props) {
    let heightVar1 = props.pyramidtop;
    let heightVar2 = props.pyramidbottom;
    let pyramidRowNo1 = props.pyramidrow1no;
    let pyramidRowNo2 = props.pyramidrow2no;
    document.documentElement.style.setProperty(String(pyramidRowNo1), heightVar1);
    document.documentElement.style.setProperty(String(pyramidRowNo2), heightVar2);
    document.documentElement.style.setProperty("--pyramidRow1", heightVar1);
    document.documentElement.style.setProperty("--pyramidRow2", heightVar2);
    return(
        <div class="reversepyramid">
            <div class="revPyramidTopRow">
                <TripleColumn 
                    headings={props.headings}
                    bodytext={props.bodytext}
                    triplecolumn1height={props.pyramidrow1h}
                    triplecolumn1row=""
                    triplecolumn2height={props.pyramidrow2h}
                    triplecolumn2row=""
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
            <div class="revPyramidBottomRow">
            <DoubleColumn 
                headings={props.headings}
                bodytext={props.bodytext}
                doublecolumn1height={props.pyramidrow3h}
                doublecolumn1row=""
                doublecolumn2height={props.pyramidrow4h}
                doublecolumn2row=""
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
export default ReversePyramid;