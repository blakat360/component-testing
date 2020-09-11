import React from "react";
import Particles from 'react-particles-js';
import fadeIn from './fade-in.css';

let particlesCanvas = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: '-1',
}

const ParticlesBackground = ({ children }) => {
    return (
        <div class={fadeIn}>
        <div style={particlesCanvas}>
        <Particles height={'100vh'} params={{
            "particles": {
                "number": {
                    "value": 200,
                    "density": {
                    enable: true,
                    value_area: 3000
                    }
                },
                "size": {
                    "value": 3
                },
                "retina_detect": true
            },
            resize: true,
        }}/>
        </div>
        <main>{children}</main>
        </div>
    )
}

export default ParticlesBackground;