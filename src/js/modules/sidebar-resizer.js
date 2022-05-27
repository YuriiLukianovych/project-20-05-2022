export const sidebarResizer = () => {
    const rightSidebar = document.querySelector(".window__right-sidebar");
    const resizer = document.querySelector(".right-sidebar__resizer");

    let mousePosition;
    let boxWidth;

    window.addEventListener("mousedown", (event) => {
        if (event.target.closest(".right-sidebar__resizer")) {
            mousePosition = event.x;
            boxWidth = rightSidebar.clientWidth;
            window.addEventListener("mousemove", mouseMove);
        }
    });

    window.addEventListener("mouseup", () => {
        window.removeEventListener("mousemove", mouseMove);
    });

    window.addEventListener("touchstart", (event) => {
        if (event.target.closest(".right-sidebar__resizer")) {
            mousePosition = event.touches[0].clientX;
            boxWidth = rightSidebar.clientWidth;
            window.addEventListener("touchmove", touchMove);
        }
    });

    window.addEventListener("touchend", () => {
        window.removeEventListener("touchmove", touchMove);
    });

    function mouseMove(event) {
        const addWidth = mousePosition - event.x;
        const width = boxWidth + addWidth;
        rightSidebar.style.width = `${width}px`;
    }

    function touchMove(event) {
        const addWidth = mousePosition - event.touches[0].clientX;
        const width = boxWidth + addWidth;
        rightSidebar.style.width = `${width}px`;
    }
};
