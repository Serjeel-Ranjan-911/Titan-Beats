var theme = "light";
let root = document.documentElement;

const switchTheme = () => {
    if (theme === "light") {
        theme = "dark";
        root.style.setProperty("--page-color", "#191a1e");
        root.style.setProperty("--shadow-down", "inset 6px 6px 12px #0e0e0e, inset -4px -4px 10px rgba(95, 94, 94, 0.25)");
        root.style.setProperty("--shadow-up", " 6px 6px 12px #0e0e0e, -4px -4px 10px rgba(95, 94, 94, 0.25)");
    } else {
        theme = "light";
        root.style.setProperty("--page-color", "#ebecf1");
        root.style.setProperty(
            "--shadow-down",
            "inset 4.5px 4.5px 9px #cbcbcb, inset -4.5px -4.5px 9px #ffffff"
        );
        root.style.setProperty("--shadow-up", "4.5px 4.5px 9px #cbcbcb, -4.5px -4.5px 9px #ffffff");
    }
};

document.querySelector(".theme").addEventListener("click", switchTheme);
