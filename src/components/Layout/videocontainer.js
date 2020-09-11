import React from "react";
import "../Layout/videocontainer.css";


function VideoContainer(props) {
    let vidHeightVar = props.videoHeight;
    document.documentElement.style.setProperty('--row3', vidHeightVar);
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
            <p>
                <a href="https://vimeo.com/51863131">Alt-J -  Tesselate</a> 
                from 
                <a href="https://vimeo.com/mautztastaton">Mautz &amp; Tastaton</a> 
                on 
                <a href="https://vimeo.com">Vimeo</a>.</p>
            </div>
        </div>
    );
    
}

    

export default VideoContainer;
