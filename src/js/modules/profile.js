export const profile = () => {
    const logBtn = document.querySelector(".sign-in-up");
    const logMenu = document.querySelector(".login-menu");
    const profileBtnList = document.querySelectorAll("[data-profile_btn]");
    const profilePopupBtnList = document.querySelectorAll(
        "li[data-profile_popup]"
    );
    const profilePopup = document.querySelector(".profile-popup");
    const popupCloseBtn = document.querySelector(
        "[data-profile-popup-close-btn]"
    );
    const popupContentList = document.querySelectorAll(
        "div[data-profile_popup]"
    );
    const popupProfileOK = document.querySelector("[data-profile-popup-ok]");
    const popupProfileCANCEL = document.querySelector(
        "[data-profile-popup-cancel]"
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
            let currentItem = btn.dataset.profile_btn;
            console.log(currentItem);

            profilePopupBtnList.forEach((item) => {
                item.classList.remove("active-popup-profile-item");
            });
            popupContentList.forEach((div) => {
                div.classList.add("dn");
            });

            [...profilePopupBtnList]
                .find((btn) => btn.dataset.profile_popup === currentItem)
                .classList.add("active-popup-profile-item");

            [...popupContentList]
                .find((div) => div.dataset.profile_popup === currentItem)
                .classList.remove("dn");

            window.addEventListener("keydown", (e) => {
                if (e.code === "Escape") {
                    profilePopup.classList.add("is-hidden");
                }
            });
        });
    });

    profilePopupBtnList.forEach((btn) => {
        btn.addEventListener("click", () => {
            let currentItem = btn.dataset.profile_popup;

            profilePopupBtnList.forEach((item) => {
                item.classList.remove("active-popup-profile-item");
            });

            popupContentList.forEach((div) => {
                div.classList.add("dn");
            });

            btn.classList.add("active-popup-profile-item");

            [...popupContentList]
                .find((div) => div.dataset.profile_popup === currentItem)
                .classList.remove("dn");
        });
    });

    popupCloseBtn.addEventListener("click", () => {
        profilePopup.classList.add("is-hidden");
    });

    popupProfileOK.addEventListener("click", () => {
        profilePopup.classList.add("is-hidden");
    });

    popupProfileCANCEL.addEventListener("click", () => {
        // profilePopup.classList.add("is-hidden");
    });
};
