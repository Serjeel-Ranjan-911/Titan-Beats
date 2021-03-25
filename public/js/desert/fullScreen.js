btnScreen = document.getElementById("btn-screen");
requestFullScreen = () => {
    var el = document.body;

    // Supports most browsers and their versions.
    var requestMethod =
        el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullScreen;

    if (requestMethod) {
        // Native full screen.
        btnScreen.style.display = "none";
        requestMethod.call(el);
    } else if (typeof window.ActiveXObject !== "undefined") {
        // Older IE.
        var wscript = new ActiveXObject("WScript.Shell");

        if (wscript !== null) {
            wscript.SendKeys("{F11}");
        }
    }
};

const exitHandler = () => {
    if (!(document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement)) {
        console.log("out now");
        btnScreen.style.display = "visible";
    }
};

document.addEventListener("fullscreenchange", exitHandler, false);
document.addEventListener("mozfullscreenchange", exitHandler, false);
document.addEventListener("MSFullscreenChange", exitHandler, false);
document.addEventListener("webkitfullscreenchange", exitHandler, false);

btnScreen.addEventListener("click", requestFullScreen);
