anime({
    targets: ".square1",
    translateX: 250,
    rotateZ: 360,
    scale: 4,
    duration: 3000,
    loop: true,
    direction: "alternate",
});

anime({
    targets: ".square2",
    left: "240px",
    duration: 3000,
    backgroundColor: "#FFF",
    borderRadius: ["0%", "50%"],
    easing: "easeInOutQuad",
    loop: true,
});

anime({
    targets: ".morph",
    d: [
        {
            value:
                "m 291.04166,216.86902 -44.08227,-0.91051 -40.41705,2.13055 -37.24557,-34.74007 0.83392,-62.26346 25.66097,-48.225435 51.12289,-0.824814 48.57916,-0.541159 27.37108,38.545908 0.28415,73.83384 z",
        },
    ],
    duration: 2000,
    direction: "alternate",
    loop: true,
    easing: "easeInQuint",
});

anime({
    targets: ".star",
    keyframes: [
        { scale: 4, rotateZ: 360 },
        { scale: 1, rotateZ: 720 },
    ],
    easing: "easeInOutQuad",
    direction: "alternate",
    loop: true,
    duration: 5000,
});

//animating clouds
anime({
    targets: ".cloud--1",
    left: "120%",
    duration: () => parseInt(Math.random() * 60000 + 30000),
    delay: () => parseInt(Math.random() * 20000),
    easing: "linear",
    loop: true,
});
anime({
    targets: ".cloud--2",
    left: "120%",
    duration: () => parseInt(Math.random() * 60000 + 30000),
    delay: () => parseInt(Math.random() * 20000),
    easing: "linear",
    loop: true,
});
anime({
    targets: ".cloud--3",
    left: "120%",
    duration: () => parseInt(Math.random() * 60000 + 30000),
    delay: () => parseInt(Math.random() * 20000),
    easing: "linear",
    loop: true,
});
anime({
    targets: ".cloud--4",
    left: "120%",
    duration: () => parseInt(Math.random() * 60000 + 30000),
    delay: () => parseInt(Math.random() * 20000),
    easing: "linear",
    loop: true,
});

//back clouds
anime({
    targets: ".cloud-back--1",
    left: "120%",
    duration: () => parseInt(Math.random() * 120000 + 60000),
    delay: () => parseInt(Math.random() * 20000),
    easing: "linear",
    loop: true,
});
anime({
    targets: ".cloud-back--2",
    left: "120%",
    duration: () => parseInt(Math.random() * 120000 + 60000),
    delay: () => parseInt(Math.random() * 20000),
    easing: "linear",
    loop: true,
});
anime({
    targets: ".cloud-back--3",
    left: "120%",
    duration: () => parseInt(Math.random() * 120000 + 60000),
    delay: () => parseInt(Math.random() * 20000),
    easing: "linear",
    loop: true,
});

//animaing sun
anime({
    targets: "[class*='sun--']",
    scale: anime.stagger([1.5, 2]),
    delay: anime.stagger(300, { from: "last" }),
    loop: true,
    direction: "alternate",
    easing: "easeInOutQuad",
});

//animating mist

anime({
    targets: ".mist path",
    d: [
        {
            value:
                "m -0.51539831,33.982105 c 0,0 14.59260931,-4.443618 74.74622131,12.294398 61.027947,16.981304 94.547897,43.672934 157.830247,45.970357 90.72062,3.293552 112.71108,-34.082657 186.1717,-42.763122 52.72538,-6.230287 95.10091,23.519718 95.10091,23.519718 l -1.86096,89.021654 -514.4677581,-1.62452 z",
        },
        {
            value:
                "m -0.51539831,33.982105 c 0,0 51.43061831,64.525117 104.22836831,31.193207 84.46247,-53.322267 128.56575,-42.505637 166.90167,-11.482023 70.56779,57.107491 118.7587,27.149485 163.49313,-7.233361 42.095,-32.354178 79.22591,26.543528 79.22591,26.543528 l -1.86096,89.021654 -514.4677581,-1.62452 z",
        },
        {
            value:
                "m -0.51539831,33.982105 c 0,0 117.19847831,100.054875 179.82359831,33.461065 68.42842,-72.7648672 117.98243,-51.577066 156.31834,-20.553452 70.56779,57.107492 96.2287,-12.58072 149.88599,4.861877 33.02357,10.735107 27.82115,21.251861 27.82115,21.251861 l -1.86096,89.021654 -514.4677581,-1.62452 z",
        },
        {
            value:
                "m -0.51539831,33.982105 c 0,0 14.59260931,-4.443618 74.74622131,12.294398 61.027947,16.981304 94.547897,43.672934 157.830247,45.970357 90.72062,3.293552 112.71108,-34.082657 186.1717,-42.763122 52.72538,-6.230287 95.10091,23.519718 95.10091,23.519718 l -1.86096,89.021654 -514.4677581,-1.62452 z",
        },
        {
            value:
                "m -0.51539831,33.982105 c 0,0 117.19847831,100.054875 179.82359831,33.461065 68.42842,-72.7648672 117.98243,-51.577066 156.31834,-20.553452 70.56779,57.107492 96.2287,-12.58072 149.88599,4.861877 33.02357,10.735107 27.82115,21.251861 27.82115,21.251861 l -1.86096,89.021654 -514.4677581,-1.62452 z",
        },
    ],
    easing: "linear",
    duration: 30000,
    loop: true,
});
