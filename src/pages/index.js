import React from "react";
import loadable from "@loadable/component";

const PageLayout = loadable(() => import("../components/Pages/landing-page.js"))

const IndexPage = () => (
  <div>
  <PageLayout/>
  </div>
)

export default IndexPage
