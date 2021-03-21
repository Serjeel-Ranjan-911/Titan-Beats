Number.prototype.map = function (in_min, in_max, out_min, out_max) {
    return ((this - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

window.onload = function () {
    var file = document.getElementById("thefile");
    var audio = document.getElementById("audio");
    const sun1 = document.querySelector(".audioCircle1");
    const sun2 = document.querySelector(".audioCircle2");
    const sun3 = document.querySelector(".audioCircle3");

    file.onchange = function () {
        var files = this.files;
        audio.src = URL.createObjectURL(files[0]);
        audio.load();
        audio.play();
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
            requestAnimationFrame(renderFrame);

            analyser.getByteFrequencyData(dataArray);

            let circle1 = dataArray[3].map(0, 255, 1, 2).toFixed(2) * 1.3;
            let circle2 = dataArray[4].map(0, 255, 1, 2).toFixed(2) * 1.1;
            let circle3 = dataArray[5].map(0, 255, 1, 2).toFixed(2);
            sun1.style.transform = `scale(${circle1})`;
            sun2.style.transform = `scale(${circle2})`;
            sun3.style.transform = `scale(${circle3})`;

            // for (var i = 0; i < bufferLength; i++) {
            //     barHeight = dataArray[i];

            //     var r = barHeight + 25 * (i / bufferLength);
            //     var g = 250 * (i / bufferLength);
            //     var b = 50;

            //     ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
            //     ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);

            //     x += barWidth + 1;
            // }
        }

        audio.play();
        renderFrame();
    };
};
