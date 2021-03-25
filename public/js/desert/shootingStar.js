//animating shooting star

const spawnShootingStar = () => {
    const hold = `<div class="shooting"><img class="shooting-star" src="/css/svg/layers${
        window.theme === "dark" ? "_night" : ""
    }/shootingStar.svg" alt="shootingStar" /></div>`;

    const wraper = document.querySelector(".wraper");
    wraper.insertAdjacentHTML("afterbegin", hold);
    wraper.children[0].style.left = `${parseInt(Math.random() * 90)}%`;
    wraper.children[0].style.top = `${parseInt(Math.random() * 20)}%`;
    const element = wraper.children[0];
    anime({
        targets: element.children[0],
        width: [
            {
                value: () => parseInt(Math.random() * 100),
            },
            {
                value: "0",
            },
        ],
        marginLeft: [
            {
                value: "0%",
            },
            {
                value: "100%",
            },
        ],
        complete: () => {
            wraper.removeChild(element);
        },
        translateX: "8rem",
        duration: 30000,
        easing: "easeInOutQuad",
    });
};

setInterval(spawnShootingStar, 20000);
