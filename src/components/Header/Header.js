import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import "../layout.css";
import "../Header/headerStyling.css";
import logo from "../../images/mesmerixHorixzontalSF.png";
import { OutboundLink } from "gatsby-plugin-google-gtag";
import "../Buttons/buttonMob.css";
import "../Buttons/buttonDesktop.css";

let mesmerixEmail = 'j.bolton@mesmerix.co.uk'
let mailSubject = encodeURIComponent('Mesmerix Project Enquiry')
let mailBody = encodeURIComponent(
` 
#############################
#-Please-Complete-the-Below-Form-#
#############################

Company:
Goals of Proof of Concept:
Proposed Timeline:
Project Budget:
Best way to Contact You:
Availability for Follow Up Meeting:
Preferred Meeting Medium:
`)

const Headermob = ({ siteTitle }) => (
  <header class="headerRow">
    <div class="logoMobile">
      <img src={logo} width="450vw" href="/index/" alt="Logo"></img>
    </div>
    <div class="homeButtonMobile">
      <Link to="/about/"><button className="buttonmob">Home</button></Link>
      </div>
      <div class="solutionsButtonMobile">
      <Link to="/about/"><button className="buttonmob">Solutions</button></Link>
      </div>
      <div class="resourcesButtonMobile">
      <Link to="/about/"><button className="buttonmob">Resources</button></Link>
      </div>
      <div class="aboutButtonMobile">
        <Link to="/about/"><button className="buttonmob">About</button></Link>
      </div>
      <div class="contactButtonMobile">
        <OutboundLink href={`mailto:${mesmerixEmail}?subject=${mailSubject}&body=${mailBody}`}>
        <button className="buttonmob">Contact</button>
        </OutboundLink>
      </div>
  </header>
)

Headermob.propTypes = {
  siteTitle: PropTypes.string,
}

Headermob.defaultProps = {
  siteTitle: ``,
}

const HeaderDesktop = ({ siteTitle }) => (
    <header class="headerRow">
      <div class='logoDesktop'>
        <img src={logo} width="450vw" href="/index/" alt="Logo"></img>
        <h1 style={{ margin: 0 }}>
        </h1>
      </div>
      <div class='homeButtonDesktop'>
      <Link to="/about/"><button className="buttondesktop">Home</button></Link>
      </div>
      <div class='solutionsButtonDesktop'>
      <Link to="/about/"><button className="buttondesktop">Solutions</button></Link>
      </div>
      <div class='resourcesButtonDesktop'>
      <Link to="/about/"><button className="buttondesktop">Resources</button></Link>
      </div>
      <div class='aboutButtonDesktop'>
        <Link to="/about/"><button className="buttondesktop">About</button></Link>
      </div>
      <div class='contactButtonDesktop'>
        <OutboundLink href={`mailto:${mesmerixEmail}?subject=${mailSubject}&body=${mailBody}`}>
        <button className="buttondesktop">Contact</button>
        </OutboundLink>
      </div>
    </header>
  )
  
  HeaderDesktop.propTypes = {
    siteTitle: PropTypes.string,
  }
  
  HeaderDesktop.defaultProps = {
    siteTitle: ``,
  }
  

export default function getViewport(props) {
    var viewPortWidth;
    var viewPortHeight;
   
    // the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
    if (typeof window.innerWidth !== 'undefined') {
      viewPortWidth = window.innerWidth;
      viewPortHeight = window.innerHeight;
    }
   
   // IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
    else if (typeof document.documentElement !== 'undefined'
    && typeof document.documentElement.clientWidth !==
    'undefined' && document.documentElement.clientWidth !== 0) {
       viewPortWidth = document.documentElement.clientWidth;
       viewPortHeight = document.documentElement.clientHeight;
    }
   
    // older versions of IEfi
    else {
      viewPortWidth = document.getElementsByTagName('body')[0].clientWidth;
      viewPortHeight = document.getElementsByTagName('body')[0].clientHeight;
    }

    if (viewPortHeight > viewPortWidth) {
        return <Headermob/>;
    }
    else if (viewPortHeight < viewPortWidth) {
        return <HeaderDesktop/>;
    }
   }