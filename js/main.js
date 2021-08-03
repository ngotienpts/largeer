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
// end show search

// show notification
var notifiHeader = document.querySelector(".header-notifi");
var showNotifi = document.querySelector(".show-notifi");
var hideBadge = document.querySelector(".header-notifi-badge");
notifiHeader.onclick = function() {
    if (showNotifi.classList.contains("open")) {
        showNotifi.classList.remove("open");
    } else {
        showNotifi.classList.add("open");
        hideBadge.style.display = "none";
    }
};
// end show notification

// show popup tao bai viet
var createPost = document.querySelector(".navbar-index_right__title");
var getPopup = document.querySelector(".create-post-wrapper");
var closePost = document.querySelector(".create-post__close");
createPost.onclick = function() {
    if (getPopup.classList.contains("open")) {
        getPopup.classList.remove("open");
    } else {
        getPopup.classList.add("open");
    }
};
closePost.onclick = function() {
    if (getPopup.classList.contains("open")) {
        getPopup.classList.remove("open");
    }
};