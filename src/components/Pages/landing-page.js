import React from "react"
import loadable from "@loadable/component";

const Mobile = loadable(() => import("./landing-page-mobile"))
const Desktop = loadable(() => import("./landing-page-desktop"))

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
        return <Mobile/>;
    }
    else if (viewPortHeight < viewPortWidth) {
        return <Desktop/>;
    }
   }
