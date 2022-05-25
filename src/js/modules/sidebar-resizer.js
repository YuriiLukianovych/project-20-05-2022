export const sidebarResizer = () => {
    const rightSidebar = document.querySelector(".window__right-sidebar");
    const resizer = document.querySelector(".right-sidebar__resizer");

    // resizer.addEventListener("mousedown", ts);
    // resizer.addEventListener("mousemove", tm);
    let x;
    // let y;
    // let hh;
    let ww;

    function ts(e) {
        // x = e.touches[0].clientX;
        // y = e.touches[0].clientY;
        // hh = rightSidebar.clientHeight;
        // ww = rightSidebar.clientWidth;
    }

    function tm(e) {
        // let mx = e.touches[0].clientX;
        // my = e.touches[0].clientY;
        // let cx = mx - x;
        // cy = my - y;
        // rightSidebar.style.width = cx + ww;
        // rightSidebar.style.height = cy + hh;
    }

    resizer.addEventListener("mousedown", mousedown);

    function mousedown(e) {
        window.addEventListener("mousemove", mousemove);
        window.addEventListener("mouseup", mouseup);
        const rect = rightSidebar.getBoundingClientRect();
        let prevX = e.clientX;
        // let prevY = e.clientY;

        function mousemove(e) {
            let newX = prevX - e.clientX;
            // let newY = prevY - e.clientY;

            // const rect = rightSidebar.getBoundingClientRect();

            rightSidebar.style.width = rightSidebar.clientWidth - newX + "px";
            // rightSidebar.style.width =
            //     Number.parseInt(rightSidebar.style.width) - newX + "px";
            // console.log(Number.parseInt(rightSidebar.style.width));

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
