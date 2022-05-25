import Split from "split.js";

export const splitWindow = () => {
    const mainWindow = document.querySelector("[data-main-window]");
    const splitBtn = document.querySelector(".window-split-button");
    const split1 = document.querySelector("#split-1");
    const split2 = document.querySelector("#split-2");
    const subMenuSplit = document.querySelector(".split-submenu");
    const windowSplitText = document.querySelector(".window-split-text");
    const splitIconsList = document.querySelectorAll(
        ".window-split-button>span>svg"
    );

    // закрити підменю, якщо клік був не по кнопці або не по субменю
    window.addEventListener("click", (e) => {
        if (
            !e.target.closest(".window-split-button") &&
            !e.target.closest(".split-submenu")
        ) {
            closeSubMenu();
        }
    });

    let split = 0; // variable for initialize Split

    splitBtn.addEventListener("click", () => {
        subMenuSplit.classList.toggle("split-submenu-hidden");
    });

    [...subMenuSplit.children].forEach((li) => {
        li.addEventListener("click", onSubMenuSplitClick);
    });

    function onSubMenuSplitClick(e) {
        const currentSplitMode = e.currentTarget.dataset.splitmode;

        // Текст про кількість вікон
        switch (currentSplitMode) {
            case "one":
                windowSplitText.textContent = "one";
                break;
            case "two-row":
                windowSplitText.textContent = "two";
                break;
            case "two-col":
                windowSplitText.textContent = "two";
                break;

            default:
                windowSplitText.textContent = "one";
                break;
        }

        splitIconsList.forEach((el) => {
            el.classList.add("dn");
        });
        const icon = [...splitIconsList].find((el) => {
            return el.dataset.splitmode === currentSplitMode;
        });
        icon.classList.remove("dn");

        [...e.currentTarget.parentNode.children].forEach((el) => {
            el.classList.remove("active-icon");
        });
        e.currentTarget.classList.add("active-icon");

        // включити вибраний режим
        switch (currentSplitMode) {
            case "one":
                noSplit();
                break;
            case "two-row":
                splitHorizontal();
                break;
            case "two-col":
                splitVertical();
                break;

            default:
                noSplit();
                break;
        }
        closeSubMenu();
    }
    function closeSubMenu() {
        subMenuSplit.classList.add("split-submenu-hidden");
    }

    function focusInWindow() {
        split1.addEventListener("focusin", () => {
            if (split2.hasAttribute("data-active")) {
                split2.removeAttribute("data-active");
            }
            if (split2.classList.contains("in-focus")) {
                split2.classList.remove("in-focus");
            }
            if (mainWindow.dataset.split === "1") {
                split1.classList.remove("in-focus");
            }
            if (mainWindow.dataset.split === "2") {
                split1.classList.add("in-focus");
                split1.setAttribute("data-active", "true");
            }
        });

        split2.addEventListener("focusin", () => {
            if (split1.hasAttribute("data-active")) {
                split1.removeAttribute("data-active");
            }
            if (split1.classList.contains("in-focus")) {
                split1.classList.remove("in-focus");
            }
            if (mainWindow.dataset.split === "1") {
                split2.classList.remove("in-focus");
            }
            if (mainWindow.dataset.split === "2") {
                split2.classList.add("in-focus");
                split2.setAttribute("data-active", "true");
            }
        });
    }
    function splitVertical() {
        if (split1.hasAttribute("data-active")) {
            split1.classList.add("in-focus");
            split2.classList.remove("dn");
        }
        if (split2.hasAttribute("data-active")) {
            split2.classList.add("in-focus");
            split1.classList.remove("dn");
        }

        if (split !== 0) {
            split.destroy();
            split = 0;
        }
        split2.classList.remove("dn");
        mainWindow.dataset.split = "2";
        const gutter = document.querySelector(".gutter");
        if (gutter) {
            gutter.remove();
        }
        mainWindow.classList.remove("split-column");
        mainWindow.classList.add("split-row");

        focusInWindow();

        split = Split(["#split-1", "#split-2"], {
            direction: "horizontal", // horizontal, vertical
            minSize: 0,
            gutterSize: 5,
            snapOffset: 0,
            sizes: [50, 50],
        });
    }

    function splitHorizontal() {
        if (split1.hasAttribute("data-active")) {
            split1.classList.add("in-focus");
            split2.classList.remove("dn");
        }
        if (split2.hasAttribute("data-active")) {
            split2.classList.add("in-focus");
            split1.classList.remove("dn");
        }

        if (split !== 0) {
            split.destroy();
            split = 0;
        }

        mainWindow.dataset.split = "2";
        const gutter = document.querySelector(".gutter");
        if (gutter) {
            gutter.remove();
        }
        mainWindow.classList.remove("split-row");
        mainWindow.classList.add("split-column");

        focusInWindow();

        split = Split(["#split-1", "#split-2"], {
            direction: "vertical", // horizontal, vertical
            minSize: 0,
            gutterSize: 5,
            snapOffset: 0,
            sizes: [50, 50],
        });
    }

    function noSplit() {
        if (split1.classList.contains("in-focus")) {
            split1.classList.remove("in-focus");
        }

        if (split2.classList.contains("in-focus")) {
            split2.classList.remove("in-focus");
        }

        if (split !== 0) {
            split.destroy();
            split = 0;
        }

        if (!split1.hasAttribute("data-active")) {
            split1.classList.add("dn");
        }
        if (!split2.hasAttribute("data-active")) {
            split2.classList.add("dn");
        }

        mainWindow.dataset.split = "1";

        const gutter = document.querySelector(".gutter");
        if (gutter) {
            gutter.remove();
        }
        mainWindow.classList.remove("split-row");
        mainWindow.classList.remove("split-column");

        focusInWindow();
    }
};
