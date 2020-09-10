import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/Buttons/buttonMob.css"
import "../components/Layout/SiteWrapper.css";



const IndexPage = () => (
  
  <Layout>
    <div class="row1">
    <SEO title="Home" />
    <Link href="http://localhost:8000/page-2/"><button className="buttonmob">Hello</button></Link>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </div>
  </Layout>
)

export default IndexPage
