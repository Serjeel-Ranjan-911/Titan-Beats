window.theme = "light";

const changeTheme = () => {
    let btn = document.getElementById("btn-img");

    let Back = document.getElementById("Back");
    let Middle = document.getElementById("Middle");
    let Front = document.getElementById("Front");

    let sun = document.querySelector(".sun");
    let cloud = document.querySelectorAll("[id*='cloud--']");
    let cloudBack = document.querySelectorAll("[id*='cloud-back--']");

    let mountains = document.getElementById("Mountains");
    let sky = document.getElementById("Sky");

    let shootingStar = document.querySelectorAll(".shooting-star");

    if (window.theme === "light") {
        btn.src = "css/logo/dark.png";
        window.theme = "dark";

        Back.src = "css/svg/layers_night/Back.svg";
        Middle.src = "css/svg/layers_night/Middle.svg";
        Front.src = "css/svg/layers_night/Front.svg";
        mountains.src = "css/svg/layers_night/Mountains.svg";
        sky.src = "css/svg/layers_night/Sky.svg";

        sun.style.color = "rgba(251, 255, 0, 0.342)";

        cloud.forEach(item => {
            item.setAttribute("xlink:href", "css/svg/layers_night/Clouds.svg#svg8");
        });

        cloudBack.forEach(item => {
            item.setAttribute("xlink:href", "css/svg/layers_night/CloudFar.svg#svg8");
        });
        shootingStar.forEach(item => {
            item.setAttribute("src", "css/svg/layers_night/shootingStar.svg");
        });
    } else {
        btn.src = "css/logo/light.png";
        window.theme = "light";

        Back.src = "css/svg/layers/Back.svg";
        Middle.src = "css/svg/layers/Middle.svg";
        Front.src = "css/svg/layers/Front.svg";
        mountains.src = "css/svg/layers/Mountains.svg";
        sky.src = "css/svg/layers/Sky.svg";

        sun.style.color = "rgba(241, 241, 241, 0.342)";

        cloud.forEach(item => {
            item.setAttribute("xlink:href", "css/svg/layers/Clouds.svg#svg8");
        });
        cloudBack.forEach(item => {
            item.setAttribute("xlink:href", "css/svg/layers/CloudFar.svg#svg8");
        });
        shootingStar.forEach(item => {
            item.setAttribute("src", "css/svg/layers/shootingStar.svg");
        });
    }
};

document.querySelector("#btn-img").addEventListener("click", changeTheme);
