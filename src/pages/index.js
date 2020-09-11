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
import ReversePyramid from "../components/Layout/reversepyramid";
import VideoContainer from "../components/Layout/videocontainer";
import ParticlesBackground from "../components/Background/particles-background";

const Header = loadable(() => import("../components/Header/Header.js"))

const IndexPage = () => (
  <div class="sitewrapper">

    <ParticlesBackground/>
    <Header siteTitle="Mesmerix"/>

    <div class="row1">
      <ReversePyramid 
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
      />
    </div>
    <div class="row2">
      <TripleColumn 
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
      <VideoContainer videoURL="https://player.vimeo.com/video/51863131" videoWidth="1280" videoHeight="800px" videoTitle="Alt-J - Fitzpleasure"/> 
    </div>
    <div class="footerrow">
      <MainFooter homepageLink="www.mesmerix.co.uk" companyName="Mesmerix"/>
    </div>

  </div>
)

export default IndexPage

// <Layout>
// <div class="row2">
// <SEO title="Home" />
// <Link href="http://localhost:8000/page-2/"><button className="buttonmob">Hello</button></Link>
// <h1>Hi people</h1>
// <p>Welcome to your new Gatsby site.</p>
// <p>Now go build something great.</p>
// <Link to="/page-2/">Go to page 2</Link> <br />
// <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
// </div>
// </Layout>