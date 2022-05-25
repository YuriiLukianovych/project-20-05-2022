export const sideBar = () => {
    const leftsideBtn = document.querySelector(".left-side-btn");
    const rightsideBtn = document.querySelector(".right-side-btn");
    const leftSidebar = document.querySelector(".window__left-sidebar");
    const rightSidebar = document.querySelector(".window__right-sidebar");
    const wndwBody = document.querySelector(".window__body");
    const wndwWorkingSpace = document.querySelector(".window__working-space");
    const splitContainer = document.querySelector("#split-container");
    const split1 = document.querySelector("#split-1");
    const split2 = document.querySelector("#split-2");

    function paddingsForSplitWindows() {
        // paddings for vertical split
        if (splitContainer.classList.contains("split-row")) {
            // забрати/додати бордер-радіус в залежності від того, чи відкриті лівий та правий сайдбари
            if (!leftSidebar.classList.contains("is-hidden")) {
                split1.classList.add("with-left-sidebars");
            } else {
                split1.classList.remove("with-left-sidebars");
            }
            if (!rightSidebar.classList.contains("is-hidden")) {
                split2.classList.add("with-right-sidebars");
                console.log("Я тут!!!");
            } else {
                split2.classList.remove("with-right-sidebars");
            }
            // split2.classList.toggle("with-right-sidebars");
        }

        // paddings for gorizontal split
        // забрати/додати бордер-радіус в залежності від того, чи відкриті лівий та правий сайдбари
        if (
            !leftSidebar.classList.contains("is-hidden")
            // !rightSidebar.classList.contains("is-hidden")
        ) {
            split2.classList.add("with-left-sidebars");
        } else {
            split2.classList.remove("with-left-sidebars");
        }
        if (
            // !leftSidebar.classList.contains("is-hidden")
            !rightSidebar.classList.contains("is-hidden")
        ) {
            split2.classList.add("with-right-sidebars");
        } else {
            split2.classList.remove("with-right-sidebars");
        }
        if (
            !leftSidebar.classList.contains("is-hidden") &&
            !rightSidebar.classList.contains("is-hidden")
        ) {
            split2.classList.add("with-two-sidebars");
        } else {
            split2.classList.remove("with-two-sidebars");
        }
    }

    leftsideBtn.addEventListener("click", () => {
        leftsideBtn.classList.toggle("active");
        leftSidebar.classList.toggle("is-hidden");
        wndwWorkingSpace.classList.toggle("with-sidebar");

        paddingsForSplitWindows();
    });

    rightsideBtn.addEventListener("click", () => {
        rightsideBtn.classList.toggle("active");
        rightSidebar.classList.toggle("is-hidden");
        if (!rightSidebar.classList.contains("is-hidden")) {
            wndwBody.classList.add("with-sidebars");
        } else {
            wndwBody.classList.remove("with-sidebars");
        }
        paddingsForSplitWindows();
    });
};
