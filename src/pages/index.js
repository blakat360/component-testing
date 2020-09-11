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
import ReversePyramid from "../components/Layout/reverse-pyramid";
import VideoContainer from "../components/Layout/videocontainer";
import ParticlesBackground from "../components/Background/particles-background";

const Header = loadable(() => import("../components/Header/Header.js"))

const IndexPage = () => (
  <div class="sitewrapper">

    <ParticlesBackground/>
    <Header siteTitle="Mesmerix"/>

    <div class="row1">
      {/* <ReversePyramid 
      pyramidrow1h="20vh"
      pyramidrow1no="--row1-h1"
      pyramidrow2h="40vh"
      pyramidrow2no="--row1-h2"
      pyramidrow3h="20vh"
      pyramidrow4h="40vh"
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
      /> */}
    </div>
    <div class="row2">
      <TripleColumn 
        tripleColumn1Height="30vh"
        tripleColumn1Row="--row2-h1"
        tripleColumn2Height="30vh"
        tripleColumn2Row="--row2h2"
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
      <VideoContainer videoRow="--row3" videoURL="https://player.vimeo.com/video/51863131" videoWidth="1280" videoHeight="800px" videoTitle="Alt-J - Fitzpleasure"/> 
    </div>
    <div class="footerrow">
      <MainFooter homepageLink="www.mesmerix.co.uk" companyName="Mesmerix"/>
    </div>

  </div>
)

export default IndexPage
