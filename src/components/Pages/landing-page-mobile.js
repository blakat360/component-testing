import React from "react";
import { Link } from "gatsby";
import "../layout.css";
import SEO from "../seo";
import speed from "../../images/speed.png";
import loadable from "@loadable/component";
import "../Background/fade-in.css";
import accuracy from "../../images/accuracy.png";
import "../Layout/SiteWrapper.css";
import humanerror from "../../images/humanerror.png";
import MainFooter from "../Footer/footer";
import ParticlesBackground from "../Background/particles-background";

const Header = loadable(() => import("../Header/Header.js"))
const TripleColumn = loadable(() => import("../Layout/triplecolumn"))
const SingleColumn = loadable(() => import("../Layout/singlecolumn"))
const ReversePyramid = loadable(() => import("../Layout/reversepyramid"))
const VideoContainer = loadable(() => import("../Layout/videocontainer"))

const MobilePage = () => (
  <div class="fadeIn">
  <div class="sitewrapper">

    <ParticlesBackground/>
    <Header siteTitle="Mesmerix"/>

    <div class="row1">
        <VideoContainer videorow="--row1-h1" videoURL="https://player.vimeo.com/video/51863131" videowidth="1280" videoheight="210vh" rowheight="50vw" videotitle="Alt-J - Fitzpleasure"/> 
    </div>
    <div class="row2">
    <SingleColumn
        headings="mobileTextHeading"
        bodytext="mobileTextBody"
        singlecolumnrowh="60vh"
        singlecolumn1height="10vh"
        singlecolumn2height="10vh"
        singlecolumn3height="10vh"
        singlecolumn4height="12vh"
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
    <div class="footerRow">
      <MainFooter homepagelink="www.mesmerix.co.uk" companyname="Mesmerix"/>
    </div>
    </div>
  </div>
)

export default MobilePage;
