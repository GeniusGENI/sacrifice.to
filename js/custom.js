(function () {
  "use strict";

  document
    .querySelector("#navbarSideCollapse")
    .addEventListener("click", function () {
      document.querySelector(".offcanvas-collapse").classList.toggle("open");
    });

  var header = document.getElementById("header");

  const changeBGColor = () => {
    if (window.scrollY >= 80) {
      header.classList
        .remove("bg-transparent")
        .classList.add("bg-black shadow-sm");
    } else {
      header.classList
        .remove("bg-transparent")
        .classList.add("bg-black shadow-sm");
    }
  };

  window.addEventListener("scroll", changeBGColor);

  tsParticles.load("tsparticles", {
    fullScreen: {
      zIndex: 1,
    },
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
          parallax: {
            force: 60,
          },
        },
      },
      modes: {
        bubble: {
          distance: 400,
          duration: 2,
          opacity: 0.8,
          size: 40,
          divs: {
            distance: 200,
            duration: 0.4,
            mix: false,
            selectors: [],
          },
        },
        grab: {
          distance: 400,
        },
        repulse: {
          divs: {
            distance: 200,
            duration: 0.4,
            factor: 100,
            speed: 1,
            maxSpeed: 50,
            easing: "ease-out-quad",
            selectors: [],
          },
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        color: {
          value: "#ffffff",
        },
        distance: 250,
        enable: true,
        opacity: 0.4,
      },
      move: {
        attract: {
          rotate: {
            x: 600,
            y: 1200,
          },
        },
        enable: true,
        path: {},
        outModes: {
          bottom: "out",
          left: "out",
          right: "out",
          top: "out",
        },
        spin: {},
      },
      number: {
        density: {
          enable: true,
        },
        value: 50,
      },
      opacity: {
        value: {
          min: 0.1,
          max: 0.5,
        },
        animation: {
          enable: true,
          speed: 1,
          minimumValue: 0.1,
        },
      },
      size: {
        value: 1,
        animation: {
          speed: 10,
          minimumValue: 10,
        },
      },
      stroke: {
        width: 1,
        color: {
          value: "#ffffff",
          animation: {
            h: {
              count: 0,
              enable: false,
              offset: 0,
              speed: 1,
              sync: true,
            },
            s: {
              count: 0,
              enable: false,
              offset: 0,
              speed: 1,
              sync: true,
            },
            l: {
              count: 0,
              enable: false,
              offset: 0,
              speed: 1,
              sync: true,
            },
          },
        },
      },
    },
  });
})();
