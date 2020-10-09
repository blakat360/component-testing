import "bootstrap/dist/css/bootstrap.min.css";
import "../Background/fade-in.css";
import React from "react";
import "../layout.css";
import SEO from "../seo";
import speed from "../../images/speed.png";
import loadable from "@loadable/component";
import accuracy from "../../images/accuracy.png";
import arheadset from "../../images/ar-headset.jpg";
import "../Layout/SiteWrapper.css";
import humanerror from "../../images/humanerror.png";
import MainFooter from "../Footer/footer";
import ParticlesBackground from "../Background/particles-background";


const Header = loadable(() => import("../Header/Header.js"))
const TripleColumn = loadable(() => import("../Layout/triplecolumn.js"))
const ReversePyramid = loadable(() => import("../Layout/reversepyramid.js"))
const VideoContainer = loadable(() => import("../Layout/videocontainer.js"))
const TitledImage = loadable(() => import("../Layout/Titledimage.js"))
const ArticleSlider = loadable(() => import("../Layout/Articleslider.js"))
const TripleIconSet = loadable(() => import("../Layout/tripleiconset.js"))
const SingleColumn = loadable(() => import("../Layout/singlecolumn.js"))
const TextBlock = loadable(() => import("../Layout/textblock.js"))

const MobilePage = () => (
  <div class="fadeIn">
  <div class="sitewrapper">

    <ParticlesBackground/>
    <Header siteTitle="Mesmerix"/>

    <div class="row1">
      <TextBlock
      textblockheight="30vh"
      textblockrow="--row1-h1"
      headtype="mobileTextHeading"
      bodytype="mobileTextBody"
      blocktitle="Paving the way for Industry 4.0"
      mainblock="Guided assembly and real-time Machine Verification in one simple package"
      />
    </div>
    <div class="row2">

        <ArticleSlider 
        articleSliderHeight="37vh"
        articleSliderRow="--row2-h1"
        titles="mobileSlideText"
        slideonehead="Why has Industry 4.0 failed so far?"
        slideonebody="Why are we not enjoying the full benefits of the fourth industrial revolution? A look into the barriers between us and successful Industry 4.0 
        deployment."
        slidetwohead="Could Machine Verification 2.0 define Industry 4.0?"
        slidetwobody="An investigation into the benefits of Machine Verification 2.0 and how it could provide the boost Industry 4.0 needs to succeed worldwide."
        slidethreehead="Why do we struggle with big data?"
        slidethreebody="Could the manufacturing industry's struggle with digital transformation be its greatest downfall? A look into the big data issues 
        holding us back from Industry 4.0 and their solutions."
        buttontype="buttonslidemobile"
        carouselItemClass="carouselItemMobile"
        caroImageClass="imageBlockMobile"
        caroTextClass="textBlockMobile"
        headerTextType="mobileSlideTextHead"
        bodyTextType="mobileSlideTextBody"
        />
    </div>
    <div class="row3">
      <SingleColumn 
      singlecolumn1height="50vh"
      singlecolumn2height="60vh"
      singlecolumn3height="60vh"
      singlecolumn4height="60vh"
      mainwindowtype="singleColumnMobile"
      singlecolumnrow1="--row3-h1"
      singlecolumnrow1="--row3-h2"
      singlecolumnrow1="--row3-h3"
      singlecolumnrow1="--row3-h4"
      headings="mobileTextHeading"
      bodytext="mobileTextBody"
      firstrowtitle="Machine Verification 2.0 - The key to Industry 4.0 success"
      firstrow="As we stand on the precipice of the fourth industrial revolution we can only imagine the advancements we will soon be making, 
      however the barriers we must break through to achieve these stand just as tall. Our standards for quality control, 
      production rate and data insights are rising every day, yet the driving force behind them, humanity, has remained the same for thousands of years. 
      This is driving a huge gap in the knowledge and capabilities of people, a gap which could hold humanity back in its relentless pursuit of innovation."
      secondrowtitle="Simplify your IoT deployments"
      secondrow="Gone are the days of inflexible IoT devices, each requiring complex systems to extract real value from its data. 
      With Machine Verification 2.0, a single piece of hardware can provide the same functionality as hundreds of legacy IoT devices. 
      Any hyper-specialist functionalities not provided by the main system are covered by a range of add-ons, seamlessly integrating with the main system. 
      A single cohesive solution to data collection across the entirety of the assembly process."
      thirdrowtitle="Optimize your workforce"
      thirdrow="Guided assembly complemented by ultra-precise machine verification, a system that provides a huge increase to both assembly speed and 
      placement accuracy, making human error almost non-existent whilst boosting the productivity of your workforce to new heights. 
      The benefits of the system extend far beyond the individual level. With the wealth of comprehensive data collected by the system, 
      managers are provided with the information they need to optimize every aspect of their workforce, boosting productivity and efficiency even further."
      fourthrowtitle="Gain valuable data insights"
      fourthrow="As data is collected at each stage of the assembly process for every product produced, root cause analysis and similar efficiency-boosting 
      methodologies can produce far more valuable results. Highly-granular data produced on a per-worker basis enables analytics platforms to provide 
      detailed and valuable insights on every aspect of the assembly process, allowing for effective optimization and large cost savings by identifying 
      areas of inefficiency."
      />
    </div>
    <div class="footerRow">
      <MainFooter homepagelink="www.mesmerix.co.uk" companyname="Mesmerix"/>
    </div>
    </div>
  </div>
)

export default MobilePage;
