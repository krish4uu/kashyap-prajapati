import React from "react";
import Particles from "react-particles-js";

function Particle() {
  return (
    <Particles

params={{
	    "particles": {
	        "number": {
	            "value": 35,
              density: {
              enable: true,
              value_area: 1500,
            },
	        },
	        "size": {
	            "value": 1
	        },
          opacity: {
            anim: {
              enable: true,
              speed: 4,
              opacity_min: 0.05,
            },
          },
          move: {
           speed: 1.4,
          },
	    },
	    // "interactivity": {
      //   // detect_on: "window",
	    //     "events": {
	    //         "onhover": {
	    //             "enable": true,
	    //             "mode": "repulse"
	    //         }
	    //     },
          
	    // }
	}}


      // params={{
      //   particles: {
      //     number: {
      //       value: 160,
      //       density: {
      //         enable: true,
      //         value_area: 1500,
      //       },
      //     },
      //     line_linked: {
      //       enable: true,
      //       opacity: 0.03,
      //     },
      //     move: {
      //       direction: "right",
      //       speed: 0.01,
      //     },
      //     size: {
      //       value: 1,
      //     },
      //     opacity: {
      //       anim: {
      //         enable: true,
      //         speed: 1,
      //         opacity_min: 0.05,
      //       },
      //     },
      //   },
      //   // interactivity: {
      //   //   events: {
      //   //     onclick: {
      //   //       enable: true,
      //   //       mode: "push",
      //   //     },
      // //   interactivity: {
	    // //     events: {
	    // //         onhover: {
	    // //             enable: true,
	    // //             mode: "repulse",
	    // //         },
      // //         onclick: {
      // //         enable: true,
      // //         mode: "push",
      // //       },
	    // //     },
	    // // },
      //     modes: {
      //       push: {
      //         particles_nb: 5,
      //       },
      //     },
      //   },

      //   {
        
      //   }
      // }
    />
  );
}

export default Particle;
