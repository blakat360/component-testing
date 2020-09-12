import React from "react";
import Particles from 'react-particles-js';
import './fade-in.css';

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
        <div class="fadeIn">
        <div style={particlesCanvas}>
        <Particles height={'100vh'} params={{
            "particles": {
                "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                  },
                "number": {
                    "value": 150,
                    "density": {
                    enable: true,
                    value_area: 3000
                    },
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