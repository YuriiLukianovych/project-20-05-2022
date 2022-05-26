export const leftSidebarTabs = () => {
    const tabBtnFolder = document.querySelector(".folder-tab");
    const tabBtnSearch = document.querySelector(".search-tab");
    const folderContent = document.querySelector(".tabs-folder-content");
    const searchContent = document.querySelector(".tabs-search-content");

    tabBtnFolder.addEventListener("click", () => {
        tabBtnFolder.classList.add("active-tab");
        tabBtnSearch.classList.remove("active-tab");
        folderContent.classList.remove("dn");
        searchContent.classList.add("dn");
    });

    tabBtnSearch.addEventListener("click", () => {
        tabBtnSearch.classList.add("active-tab");
        tabBtnFolder.classList.remove("active-tab");
        folderContent.classList.add("dn");
        searchContent.classList.remove("dn");
    });
};
