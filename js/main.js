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
            getPopupWallet.classList.remove("open");
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

// show popup vi cua toi
var wallet = document.querySelector(".wallet");
var getPopupWallet = document.querySelector(".my-wallet-wrapper");
var closewallet = document.querySelector(".close-recharge");
wallet.onclick = function() {
    if (getPopupWallet.classList.contains("open")) {
        getPopupWallet.classList.remove("open");
    } else {
        getPopupWallet.classList.add("open");
    }
};
closewallet.onclick = function() {
    if (getPopupWallet.classList.contains("open")) {
        getPopupWallet.classList.remove("open");
    }
};
// end show popup vi cua toi
// end show form login
// upload 1 file
// function readURL(input, imgControlName) {
//     if (input.files && input.files[0]) {
//         var reader = new FileReader();
//         reader.onload = function(e) {
//             $(imgControlName).attr("src", e.target.result);
//         };
//         reader.readAsDataURL(input.files[0]);
//     }
// }
// $("#imag").change(function() {
//     var imgControlName = "#ImgPreview";
//     readURL(this, imgControlName);
//     $(".preview1").addClass("it");
//     $(".btn-rmv1").addClass("rmv");
// });
// $("#removeImage1").click(function(e) {
//     e.preventDefault();
//     $("#imag").val("");
//     $("#ImgPreview").attr("src", "");
//     $(".preview1").removeClass("it");
//     $(".btn-rmv1").removeClass("rmv");
// });
// upload nhieu file
var upload = $(".imag")[0],
    infos = $("#block-preview");

upload.onchange = function() {
    readFilesInfo(this.files, 0);
};

function readFilesInfo(files, i) {
    var item = "",
        i = i || 0,
        filesNum = files.length,
        reader = null;

    reader = readAsDataURL(files[i]);
    reader.onloadend = function() {
        item =
            '<div class="article">' +
            (isImage(files[i]) ?
                '<img src="' +
                reader.result +
                '" width="auto" height="90px"><input type="button" id="removeImage1" value="x" class="rmv" />' :
                "") +
            "</div>";

        i++;
        infos.innerHTML = infos.innerHTML + item;

        if (i < filesNum) {
            readFilesInfo(files, i);
        }
    };
}

function readAsDataURL(file) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    return reader;
}

function isImage(file) {
    return /image/.test(file.type);
}

function $(selector, oParent) {
    if (typeof selector === "object") {
        return selector;
    }
    oParent = oParent || document;
    switch (selector.charAt(0)) {
        case "#":
            return oParent.querySelector(selector);
        default:
            return oParent.querySelectorAll(selector);
    }
}
// upload nhieu file
// end upload file