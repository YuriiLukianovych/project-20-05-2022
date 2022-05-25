export const sidebarResizer = () => {
    const rightSidebar = document.querySelector(".window__right-sidebar");
    const resizer = document.querySelector(".right-sidebar__resizer");

    resizer.addEventListener("mousedown", mousedown);

    function mousedown(e) {
        window.addEventListener("mousemove", mousemove);
        window.addEventListener("mouseup", mouseup);

        let prevX = e.clientX;
        // let prevY = e.clientY;

        function mousemove(e) {
            let newX = prevX - e.clientX;
            // let newY = prevY - e.clientY;

            const rect = rightSidebar.getBoundingClientRect();

            rightSidebar.style.width = rect.width + newX + "px";
            // rightSidebar.style.width = rect.top - newY + "px";

            prevX = e.clientX;
            // prevY = e.clientY;
        }

        function mouseup() {
            window.removeEventListener("mousemove", mousemove);
            window.removeEventListener("mouseup", mouseup);
        }
    }
};
