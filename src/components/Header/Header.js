import React from "react";
import PropTypes from "prop-types";
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
  <header class="headerrow">
    <div class="logoMobile">
      <img src={logo} width="450vw" href="/index/" alt="Logo"></img>
    </div>
    <div class="buttonContainerMobile">
      <OutboundLink href={`mailto:${mesmerixEmail}?subject=${mailSubject}&body=${mailBody}`}>
        <button className="buttonmob">Email Us</button>
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
    <div>
    <header class="headercontainer">
      <div class="logoDesktop">
        <img src={logo} width="1000vw" href="/index/" alt="Logo"></img>
        <h1 style={{ margin: 0 }}>
        </h1>
      </div>
      <div class="buttonContainerDesktop">
        <OutboundLink href={`mailto:${mesmerixEmail}?subject=${mailSubject}&body=${mailBody}`}>
        <button className="buttondesktop">Email Us</button>
        </OutboundLink>
      </div>
    </header>
    </div>
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