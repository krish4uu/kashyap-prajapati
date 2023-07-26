import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

function Particle() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const options = {
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 2,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 1500,
        },
        value: 35,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: 1,
      },
    },
  };
  return (
    <>
      <Particles options={options} init={particlesInit} />
    </>
  );
}

export default Particle;
