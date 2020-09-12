import React from "react";
import loadable from "@loadable/component";

const PageLayout = loadable(() => import("./landing-page.js"))

const IndexPage = () => (
  <PageLayout/>
)

export default IndexPage
