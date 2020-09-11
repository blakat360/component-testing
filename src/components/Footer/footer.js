import React from "react"
import "./footer.css"; 
import { Link } from "gatsby"

export default function MainFooter(props) {
    return(
    <div>
          © {new Date().getFullYear()} 
          <Link href={props.homepageLink}> {props.companyName}</Link>
    </div>
    )
}
