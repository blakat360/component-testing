import React from "react";
import { Link } from "gatsby";
import "../components/layout.css";
import SEO from "../components/seo";
import speed from "../images/speed.png";
import loadable from "@loadable/component";
import accuracy from "../images/accuracy.png";
import "../components/Layout/SiteWrapper.css";
import humanerror from "../images/humanerror.png";
import MainFooter from "../components/Footer/footer";
import TripleColumn from "../components/Layout/triplecolumn";
import SingleColumn from "../components/Layout/singlecolumn";
import ReversePyramid from "../components/Layout/reversepyramid";
import VideoContainer from "../components/Layout/videocontainer";
import ParticlesBackground from "../components/Background/particles-background";

const Header = loadable(() => import("../components/Header/Header.js"))

const DesktopPage = () => (
  <div class="sitewrapper">

    <ParticlesBackground/>
    <Header siteTitle="Mesmerix"/>

    <div class="row1">
    <TripleColumn 
        triplecolumn1height="20vh"
        triplecolumn1row="--row1-h1"
        triplecolumn2height="15vh"
        triplecolumn2row="--row1-h2"
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
    <div class="row2">
    <SingleColumn
        singlecolumnrowh="60vh"
        singlecolumn1height="10vh"
        singlecolumn2height="10vh"
        singlecolumn3height="10vh"
        singlecolumn4height="10vh"
        singlecolumnrow1="--row2-h1"
        singlecolumnrow2="--row2-h2"
        singlecolumnrow3="--row2-h3"
        singlecolumnrow4="--row2-h4"
        singlecolumnrow="row2-h1"
        firstrowtitle="text"
        firstrow="text"
        secondrowtitle="text"
        secondrow="text"
        thirdrowtitle="text"
        thirdrow="text"
        fourthrowtitle="text"
        fourthrow="text"
        />
      
    </div>
    <div class="row3">
      <VideoContainer videorow="--row3-h1" videoURL="https://player.vimeo.com/video/51863131" videowidth="1280" videoheight="720" rowheight="800px" videotitle="Alt-J - Fitzpleasure"/> 
    </div>
    <div class="footerrow">
      <MainFooter homepageLink="www.mesmerix.co.uk" companyName="Mesmerix"/>
    </div>

  </div>
)

export default DesktopPage;
