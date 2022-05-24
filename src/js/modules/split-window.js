import Split from "split.js";

export const splitWindow = () => {
    const mainWindow = document.querySelector("[data-main-window]");
    const splitBtn = document.querySelector(".window-split-button");
    const split1 = document.querySelector("#split-1");
    const split2 = document.querySelector("#split-2");
    const subMenuSplit = document.querySelector(".split-submenu");
    // const windowSplitText = document.querySelector(".window-split-text");
    const splitIconsList = document.querySelectorAll(
        ".window-split-button>span>svg"
    );
    document.addEventListener("click", (e) => {
        if (e.target === subMenuSplit) {
            console.log("click in submenu");
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
        // windowSplitText.textContent = currentSplitMode;
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
                splitVertical();
                break;
            case "two-col":
                splitHorizontal();
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
        // mainWindow.dataset.split === "2"; 1 or 2
        split1.addEventListener("focusin", () => {
            if (mainWindow.dataset.split === "1") {
                split1.classList.remove("in-focus");
            }
        });
    }
    function splitHorizontal() {
        // if (Split(["#split-1", "#split-2"])) {
        //     Split(["#split-1", "#split-2"]).destroy();
        // }
        if (split !== 0) {
            split.destroy();
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

    function splitVertical() {
        // if (Split(["#split-1", "#split-2"])) {
        //     Split(["#split-1", "#split-2"]).destroy();
        // }
        if (split !== 0) {
            split.destroy();
        }
        split2.classList.remove("dn");
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
        // if (Split(["#split-1", "#split-2"])) {
        //     Split(["#split-1", "#split-2"]).destroy();
        // }

        if (split !== 0) {
            split.destroy();
        }
        split2.classList.add("dn");
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
