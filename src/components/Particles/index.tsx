import { useCallback, useMemo } from "react";
import Particles from "react-tsparticles";
import { Engine, ISourceOptions } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

const optionConfig: ISourceOptions = {
  name: "Absorbers",
  particles: {
    number: {
      value: 18,
    },
    collisions: {
      enable: true,
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      // type: "circle",
      type: "image",
      image: [
        {
          src: "/heart.svg",
          height: 20,
          width: 23,
        },
      ],
    },
    opacity: {
      value: {
        min: 0.1,
        max: 1,
      },
    },
    size: {
      value: {
        min: 10,
        max: 20,
      },
    },
    move: {
      enable: true,
      speed: 0.8,
      direction: "top",
      straight: true,
      warp: true,
    },
  },
  interactivity: {
    events: {
      onClick: {
        enable: false, // true,
        mode: "push",
      },
    },
    modes: {
      push: {
        quantity: 10,
      },
    },
  },
  absorbers: {
    draggable: true,
    size: {
      value: {
        min: 5,
        max: 10,
      },
      limit: 10,
    },
    position: {
      x: 50,
      y: 50,
    },
  },
  background: {
    color: "transparent",
  },
};

const ParticlesCanvas = () => {
  const options = useMemo(() => {
    return optionConfig;
  }, []);

  const initParticles = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return <Particles init={initParticles} options={options} />;
};

export default ParticlesCanvas;
