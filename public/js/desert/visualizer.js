import { getPath } from "./player.js";

//maths function to map value range
Number.prototype.map = function (in_min, in_max, out_min, out_max) {
    return ((this - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

window.onload = function () {
    var audio = document.getElementById("audio");
    const sun1 = document.querySelector(".audioCircle1");
    const sun2 = document.querySelector(".audioCircle2");
    const sun3 = document.querySelector(".audioCircle3");

    audio.src = "/introTune/Liquid_Logo_Intro_Music.mp3";
    audio.play();
    var callBack;
    // audio.onended = () => {
    //     console.log("Ended");
    //     sun1.style.transform = `scale(1)`;
    //     sun2.style.transform = `scale(1)`;
    //     sun3.style.transform = `scale(1)`;
    //     window.cancelAnimationFrame(callBack);
    //     src = null;
    // };

    const player = function () {
        //var files = this.files;
        //audio.src = URL.createObjectURL(files[0]);
        const mood = window.location.href.substring(window.location.href.lastIndexOf("/") + 1);
        getPath(path => {
            audio.src = "/music/" + path;
            audio.load();
            audio.play();
        }, mood);
        //audio.src = "/music/Liquid_Logo_Intro_Music.mp3";

        var context = new AudioContext();
        var src = context.createMediaElementSource(audio);

        var analyser = context.createAnalyser();

        src.connect(analyser);
        analyser.connect(context.destination);

        analyser.fftSize = 32;

        var bufferLength = analyser.frequencyBinCount;
        console.log(bufferLength);

        var dataArray = new Uint8Array(bufferLength);

        function renderFrame() {
            callBack = requestAnimationFrame(renderFrame);

            analyser.getByteFrequencyData(dataArray);

            let circle1 = dataArray[3].map(0, 255, 1, 1.6).toFixed(2) * 1.35;
            let circle2 = dataArray[4].map(0, 255, 1, 1.6).toFixed(2) * 1.2;
            let circle3 = dataArray[5].map(0, 255, 1, 1.6).toFixed(2);
            sun1.style.transform = `scale(${circle1})`;
            sun2.style.transform = `scale(${circle2})`;
            sun3.style.transform = `scale(${circle3})`;
        }

        audio.play();
        renderFrame();
    };

    audio.addEventListener("ended", player);
};
