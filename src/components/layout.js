import React from "react";
import PropTypes from "prop-types";
import "./layout.css";
import "../components/Layout/SiteWrapper.css";
import loadable from "@loadable/component";
import ParticlesBackground from "../components/Background/particles-background";
import MainFooter from "../components/Footer/footer";

const Header = loadable(() => import("../components/Header/Header.js"))


const Layout = ({ children }, props) => {
  return (
    <div class="sitewrapper">
      <ParticlesBackground/>
      <Header siteTitle={props.siteTitle}/>
        <main>{children}</main>
      <div class="footerrow">
      <MainFooter homepageLink="www.mesmerix.co.uk" companyName="Mesmerix"/>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
