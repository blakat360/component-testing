import React from "react";
import { Link } from "gatsby";
import "../components/layout.css";
import SEO from "../components/seo";
import loadable from "@loadable/component";
import "../components/Layout/SiteWrapper.css";

const PageLayout = loadable(() => import("./landing-page.js"))

const IndexPage = () => (
  <PageLayout/>
)

export default IndexPage
