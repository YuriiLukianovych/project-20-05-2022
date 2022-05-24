export const tempMainContent = () => {
    const allButtons = document.querySelectorAll(".window__header li");
    const mainBtn = document.querySelector("[data-temp-main-content-btn]");
    const mainContent = document.querySelector("[data-temp-main-content]");
    const mainWindow = document.querySelector("[data-main-window]");

    mainBtn.addEventListener("click", () => {
        [...mainWindow.firstElementChild.children].forEach((el) => {
            el.classList.add("dn");
        });
        mainContent.classList.remove("dn");

        allButtons.forEach((btn) => {
            btn.classList.remove("active");
        });
        mainBtn.classList.add("active");
    });
};
