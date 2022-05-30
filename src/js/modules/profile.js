export const profile = () => {
    const logBtn = document.querySelector(".sign-in-up");
    const logMenu = document.querySelector(".login-menu");
    const profileBtnList = document.querySelectorAll("[data-profile-btn]");
    const profilePopupBtnList = document.querySelectorAll(
        "li[data-profile-popup]"
    );
    const profilePopup = document.querySelector(".profile-popup");
    const popupCloseBtn = document.querySelector(
        "[data-profile-popup-close-btn]"
    );

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

    profileBtnList.forEach((btn) => {
        btn.addEventListener("click", () => {
            profilePopup.classList.remove("is-hidden");
        });
    });

    popupCloseBtn.addEventListener("click", () => {
        console.log(profilePopupBtnList);
        profilePopup.classList.add("is-hidden");
    });
};
