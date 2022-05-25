export const loginMenu = () => {
    const logBtn = document.querySelector(".sign-in-up");
    const logMenu = document.querySelector(".login-menu");

    logBtn.addEventListener("click", () => {
        logMenu.classList.toggle("login-menu-hidden");
    });

    // закрити підменю, якщо клік був не по кнопці або не по субменю
    window.addEventListener("click", (e) => {
        if (
            !e.target.closest(".sign-in-up") &&
            !e.target.closest(".login-menu")
        ) {
            closelogMenu();
        }
    });

    function closelogMenu() {
        logMenu.classList.add("login-menu-hidden");
    }
};
