const target1 = document.getElementById("text");
const target2 = document.getElementById("author");

export const entry = anime({
    targets: [target1, target2],
    opacity: [0, 1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i + 1),
    autoplay: false,
});

export const exit = anime({
    targets: [target1, target2],
    opacity: [1, 0],
    duration: 2000,
    easing: "easeOutExpo",
    delay: 1000,
    autoplay: false,
});
