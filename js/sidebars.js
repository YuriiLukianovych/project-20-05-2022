const leftsideBtn = document.querySelector(".left-side-btn");
const rightsideBtn = document.querySelector(".right-side-btn");
const leftSidebar = document.querySelector(".window__left-sidebar");
const rightSidebar = document.querySelector(".window__right-sidebar");
const wndwBody = document.querySelector(".window__body");

leftsideBtn.addEventListener("click", () => {
    leftsideBtn.classList.toggle("active");
    leftSidebar.classList.toggle("is-hidden");
    if (
        !leftSidebar.classList.contains("is-hidden") ||
        !rightSidebar.classList.contains("is-hidden")
    ) {
        wndwBody.classList.add("with-sidebars");
    } else {
        wndwBody.classList.remove("with-sidebars");
    }
});

rightsideBtn.addEventListener("click", () => {
    rightsideBtn.classList.toggle("active");
    rightSidebar.classList.toggle("is-hidden");
    if (
        !leftSidebar.classList.contains("is-hidden") ||
        !rightSidebar.classList.contains("is-hidden")
    ) {
        wndwBody.classList.add("with-sidebars");
    } else {
        wndwBody.classList.remove("with-sidebars");
    }
});
