// register-form
function formRegister() {
    let blockForm = document.querySelector("#form-register");

    let phoneNumberElement = document.querySelector(
        "input[type='tel'][name='phone']"
    );

    let passwordElement = document.querySelector(
        'input[type="password"][name="password"]'
    );

    let showidIntro = document.querySelector(
        'input[type="text"][name="id-intro"]'
    );

    let showEye = document.querySelector(".show-password");

    let clickIconShowIntro = document.querySelector(".show-id-intro");

    phoneNumberElement.onblur = function(e) {
        let evenElement = e.target.value;
        let filterPhone = /^\d{10}$/;
        let formMessage = document.querySelector(".form-message");
        if (evenElement.trim() == "" || !evenElement.match(filterPhone)) {
            phoneNumberElement.parentElement.parentElement.classList.add("invalid");
            formMessage.innerText = "Số điện thoại của bạn không hợp lệ";
        } else {
            phoneNumberElement.parentElement.parentElement.classList.remove(
                "invalid"
            );
            formMessage.innerText = "";
        }
    };

    phoneNumberElement.oninput = function(e) {
        e.target.value = e.target.value.replace(/[^0-9]/g, "");
        let formMessage = document.querySelector(".form-message");
        if (e.value != "") {
            phoneNumberElement.parentElement.parentElement.classList.remove(
                "invalid"
            );
            formMessage.innerText = "";
        }
    };

    // show password
    showEye.onclick = function(e) {
        e.preventDefault();
        if (
            passwordElement.getAttribute("type") === "password" &&
            showEye.getAttribute("name") === "eye-off-outline"
        ) {
            passwordElement.setAttribute("type", "text");
            showEye.setAttribute("name", "eye-outline");
        } else {
            passwordElement.setAttribute("type", "password");
            showEye.setAttribute("name", "eye-off-outline");
        }
    };

    //password
    passwordElement.onblur = function(e) {
        let evenElement = e.target.value;
        let filterPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,13}$/;
        let formMessage =
            passwordElement.parentElement.parentElement.querySelector(
                ".form-message"
            );
        if (evenElement.trim() == "" || !evenElement.match(filterPassword)) {
            passwordElement.parentElement.parentElement.classList.add("invalid");
            formMessage.innerText =
                "Mật khẩu phải có từ 8-20 ký tự gồm chữ và số in hoa";
        } else {
            passwordElement.parentElement.parentElement.classList.remove("invalid");
            formMessage.innerText = "";
        }
    };

    passwordElement.oninput = function(e) {
        if (e.target.value != "") {
            let formMessage =
                passwordElement.parentElement.parentElement.querySelector(
                    ".form-message"
                );
            passwordElement.parentElement.parentElement.classList.remove("invalid");
            formMessage.innerText = "";
        }
    };

    // show id intro
    clickIconShowIntro.onclick = function() {
        if (showidIntro.classList.contains("hide")) {
            showidIntro.classList.remove("hide");
            showidIntro.classList.add("show");
        } else {
            showidIntro.classList.add("hide");
            showidIntro.classList.remove("show");
        }
    };
}
// login form
function formLogin() {
    let blockFormLogin = document.querySelector("#form-login");

    let phoneNumberElementLogin = blockFormLogin.querySelector(
        "input[type='tel'][name='phone']"
    );

    let passwordElement = document.querySelector(
        'input[type="password"][name="password"]'
    );

    let showEye = document.querySelector(".show-password");

    phoneNumberElementLogin.onblur = function(e) {
        let evenElement = e.target.value;
        let filterPhone = /^\d{10}$/;
        let formMessage = blockFormLogin.querySelector(".form-message");
        if (evenElement.trim() == "" || !evenElement.match(filterPhone)) {
            phoneNumberElementLogin.parentElement.parentElement.classList.add(
                "invalid"
            );
            formMessage.innerText = "Số điện thoại của bạn không hợp lệ";
        } else {
            phoneNumberElementLogin.parentElement.parentElement.classList.remove(
                "invalid"
            );
            formMessage.innerText = "";
        }
    };

    phoneNumberElementLogin.oninput = function(e) {
        e.target.value = e.target.value.replace(/[^0-9]/g, "");
        let formMessage = blockFormLogin.querySelector(".form-message");
        if (e.value != "") {
            phoneNumberElementLogin.parentElement.parentElement.classList.remove(
                "invalid"
            );
            formMessage.innerText = "";
        }
    };

    // show password
    showEye.onclick = function(e) {
        e.preventDefault();
        if (
            passwordElement.getAttribute("type") === "password" &&
            showEye.getAttribute("name") === "eye-off-outline"
        ) {
            passwordElement.setAttribute("type", "text");
            showEye.setAttribute("name", "eye-outline");
        } else {
            passwordElement.setAttribute("type", "password");
            showEye.setAttribute("name", "eye-off-outline");
        }
    };

    //password
    passwordElement.onblur = function(e) {
        let evenElement = e.target.value;
        let filterPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
        let formMessage =
            passwordElement.parentElement.parentElement.querySelector(
                ".form-message"
            );
        if (evenElement.trim() == "" || !evenElement.match(filterPassword)) {
            passwordElement.parentElement.parentElement.classList.add("invalid");
            formMessage.innerText =
                "Mật khẩu phải có từ 8-20 ký tự gồm chữ và số in hoa";
        } else {
            passwordElement.parentElement.parentElement.classList.remove("invalid");
            formMessage.innerText = "";
        }
    };

    passwordElement.oninput = function(e) {
        if (e.target.value != "") {
            let formMessage =
                passwordElement.parentElement.parentElement.querySelector(
                    ".form-message"
                );
            passwordElement.parentElement.parentElement.classList.remove("invalid");
            formMessage.innerText = "";
        }
    };
}

// otp
function otpForm() {
    var nextElement = 0;
    var blockOtp = document.querySelectorAll(".otSc");
    var output = blockOtp.forEach(function(input, index) {
        input.oninput = function(e) {
            e.target.value = e.target.value.replace(/[^0-9]/g, "");
        };
        input.onkeyup = function(e) {
            this.nextElement++;
            if (e.target.value != "") {
                var nextEl = this.nextElementSibling;
                nextEl.focus();
                console.log(blockOtp.length);
                console.log(this.nextElement++);
            }
        };
    });
}