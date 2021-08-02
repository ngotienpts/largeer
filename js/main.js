// show search
var showSearchHeader = document.querySelector(".show-search");
var searchHeader = document.querySelector(".header-search");
var closeSearchHeader = document.querySelector(".close-search");
searchHeader.onclick = function() {
    showSearchHeader.classList.add("open");
};
closeSearchHeader.onclick = function() {
    if (showSearchHeader.classList.contains("open")) {
        showSearchHeader.classList.remove("open");
    }
};