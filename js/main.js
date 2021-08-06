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

// show popup tao cong dong
var createGroup = document.querySelector(".create-group");
var getPopupGroup = document.querySelector(".create-group-wrapper");
var closePopupGroup = document.querySelector(".create-group__close");
createGroup.onclick = function() {
    if (getPopupGroup.classList.contains("open")) {
        getPopupGroup.classList.remove("open");
    } else {
        getPopupGroup.classList.add("open");
    }
};
closePopupGroup.onclick = function() {
    if (getPopupGroup.classList.contains("open")) {
        getPopupGroup.classList.remove("open");
    }
};
document.onkeydown = function(e) {
    switch (e.which) {
        case 27:
            getPopupGroup.classList.remove("open");
            getPopupLogin.classList.remove("open");
            showNotifi.classList.remove("open");
            showSearchHeader.classList.remove("open");
            break;
    }
};
// end show popup tao cong dong
// show form login
var showLoginForm = document.querySelector(".user-login");
var getPopupLogin = document.querySelector(".login-wrapper");
var closePopLogin = document.querySelector(".login-btn-close");
showLoginForm.onclick = function() {
    if (getPopupLogin.classList.contains("open")) {
        getPopupLogin.classList.remove("open");
    } else {
        getPopupLogin.classList.add("open");
    }
};
closePopLogin.onclick = function() {
    if (getPopupLogin.classList.contains("open")) {
        getPopupLogin.classList.remove("open");
    }
};
// end show form login