import React from "react";
import "../Layout/SiteWrapper.css";
import "../Layout/videocontainer.css";

// The following additional props are needed to use this: videoHeight, videoRow (eg. --row3)
// The rows that can be defined are --row1, --row2, --row3, --row4, --row5, these all have sub dimensions in the style: --row1-h1

function VideoContainer(props) {
    let vidHeightVar = props.videoHeight;
    let vidRow = props.videoRow;
    document.documentElement.style.setProperty(String(vidRow), vidHeightVar);
    return(
        <div class="videoContainerGrid">
            <div class="videoContainer">
            <iframe 
                title={props.videoTitle}
                src={props.videoURL} 
                width={props.videoWidth}
                height={props.videoHeight}
                frameborder="0" 
                allow="autoplay; fullscreen" 
                allowfullscreen>
            </iframe>
            </div>
        </div>
    );
    
}

    

export default VideoContainer;
