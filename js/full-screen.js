const fsBtn = document.querySelector(".full-screem-btn");
const wndw = document.querySelector(".window");

fsBtn.addEventListener("click", () => {
    // console.log("full screen");
    // console.log(wndw);
    wndw.classList.toggle("is-full-screen");
    document.body.classList.toggle("is-full-screen");
});
