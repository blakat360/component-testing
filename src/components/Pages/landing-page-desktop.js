import "../Background/fade-in.css";
import React from "react";
import { Link } from "gatsby";
import "../layout.css";
import SEO from "../seo";
import speed from "../../images/speed.png";
import loadable from "@loadable/component";
import accuracy from "../../images/accuracy.png";
import "../Layout/SiteWrapper.css";
import humanerror from "../../images/humanerror.png";
import MainFooter from "../Footer/footer";
import ParticlesBackground from "../Background/particles-background";

const Header = loadable(() => import("../Header/Header.js"))
const TripleColumn = loadable(() => import("../Layout/triplecolumn.js"))
const ReversePyramid = loadable(() => import("../Layout/reversepyramid.js"))
const VideoContainer = loadable(() => import("../Layout/videocontainer.js"))


const DesktopPage = () => (
  <div class="fadeIn">
  <div class="sitewrapper">

    <ParticlesBackground/>
    <Header siteTitle="Mesmerix"/>

    <div class="row1">
        <VideoContainer videorow="--row1-h1" videoURL="https://player.vimeo.com/video/51863131" videowidth="1280" videoheight="720" rowheight="800px" videotitle="Alt-J - Fitzpleasure"/> 
    </div>
    <div class="row2">
      <TripleColumn 
        headings="desktopTextHeading"
        bodytext="desktopTextBody"
        triplecolumn1height="30vh"
        triplecolumn1row="--row2-h1"
        triplecolumn2height="40vh"
        triplecolumn2row="--row2-h2"
        imgtopleft={speed} 
        topleft="Using AR technology the system instructs the user, whilst verifying each step to ensure perfection."
        toplefttitle="Increase production speed and efficiency"
        imgtopleftheight="50vw"
        imgtopmid={accuracy}
        imgtopmidheight="50vw"
        topmid="Low-tolerance verification of part placement, at every stage of the construction process."
        topmidtitle="Sub-Millimetre accuracy at 60fps"
        topright="Typical human error rates in assembly range between 10%-30%, our technology will reduce your error rates to almost 0%."
        toprighttitle="Remove human error from your processes"
        imgtopright={humanerror}
        imgtoprightheight="50vw"
      />
    </div>
    <div class="row3">
    <ReversePyramid 
        headings="desktopTextHeading"
        bodytext="desktopTextBody"
        pyramidrow1h="30vh"
        pyramidrow1no="--row3-h1"
        pyramidrow2h="40vh"
        pyramidrow2no="--row3-h2"
        pyramidrow3h="10vh"
        pyramidrow4h="30vh"
        pyramidtop="30vh"
        pyramidbottom="70vh"
        imgtopleft={speed}
        topleft="Using AR technology the system instructs the user, whilst verifying each step to ensure perfection."
        toplefttitle="Increase production speed and efficiency"
        imgtopleftheight="50vw"
        imgtopmid={accuracy}
        imgtopmidheight="50vw"
        topmid="Low-tolerance verification of part placement, at every stage of the construction process."
        topmidtitle="Sub-Millimetre accuracy at 60fps"
        topright="Typical human error rates in assembly range between 10%-30%, our technology will reduce your error rates to almost 0%."
        toprighttitle="Remove human error from your processes"
        imgtopright={humanerror}
        imgtoprightheight="50vw"
        bottomleft="Human errors cost us billions every year, especially in the
        manufacturing industry, representing 23% of unplanned
        downtime at an average cost of $260,000 an hour."
        bottomright="At Mesmerix, we have created a technique to eliminate this
        cost, using a combination of augmented reality and machine
        vision to perfect the art of machine verification."      
        imgbottomleft=""
        bottomlefttitle="Human Error"
        imgbottomleftheight=""
        bottomrighttitle="Mesmerix"
        imgbottomright=""
        imgbottomrightheight=""
      />
    </div>
    <div class="footerRow">
      <MainFooter homepagelink="www.mesmerix.co.uk" companyname="Mesmerix"/>
    </div>
    </div>
  </div>
)

export default DesktopPage;

