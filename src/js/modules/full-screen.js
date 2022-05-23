export const fullScreen = () => {
    const fsBtn = document.querySelector(".full-screen-btn");
    const elem = document.documentElement;

    fsBtn.addEventListener("click", () => {
        closeFullscreen();
        openFullscreen();
        fsBtn.classList.toggle("activeFs");
        if (fsBtn.classList.contains("activeFs")) {
            fsBtn.lastElementChild.textContent = "Minimize";
        } else {
            fsBtn.lastElementChild.textContent = "Full screen";
        }
    });

    /* Open Full Screen */
    function openFullscreen() {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) {
            /* Firefox */
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) {
            /* Chrome, Safari and Opera */
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) {
            /* IE/Edge */
            elem.msRequestFullscreen();
        }
    }

    /* Close Full Screen */
    function closeFullscreen() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            /* Firefox */
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            /* Chrome, Safari and Opera */
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            /* IE/Edge */
            document.msExitFullscreen();
        }
    }
};
