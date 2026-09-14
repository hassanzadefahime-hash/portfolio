export const network = {
  fullScreen: {
    enable: true,
  },
  
  fpsLimit: 60,
  particles: {
    color: {
      value: "#fe4304" , 
      
    },
    links: {
      enable: false,  
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "out",
      },
      random: true,
      speed: { min: 0.5, max: 2 },
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 400,
      },
      value: 400,
    },
    opacity: {
      value: { min: 0.9, max: 1 },
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 6 }, 
    },
    
  },
  detectRetina: true,
  interactivity: {
    events: {
      onClick: {
        enable: false,
      },
      onHover: {
        enable: true,
        mode: "slow", 
        distance: 150,
      },
      resize: true,
    },
    modes: {
      slow: {
        factor: 3, 
        radius: 200,
      },
    },
  },
};




