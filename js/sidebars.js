const leftsideBtn = document.querySelector(".left-side-btn");
const rightsideBtn = document.querySelector(".right-side-btn");
const leftSidebar = document.querySelector(".window__left-sidebar");
const rightSidebar = document.querySelector(".window__right-sidebar");

leftsideBtn.addEventListener("click", () => {
    leftSidebar.classList.toggle("is-hidden");
});

rightsideBtn.addEventListener("click", () => {
    rightSidebar.classList.toggle("is-hidden");
});
