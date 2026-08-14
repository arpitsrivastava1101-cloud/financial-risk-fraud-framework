// =========================================
// DARK / LIGHT MODE
// =========================================

function setDarkMode() {

    document.body.classList.add("dark-mode");

    localStorage.setItem("theme", "dark");

    updateThemeButtons();

}


function setLightMode() {

    document.body.classList.remove("dark-mode");

    localStorage.setItem("theme", "light");

    updateThemeButtons();

}


function updateThemeButtons() {

    const lightButton =
        document.getElementById("lightModeBtn");

    const darkButton =
        document.getElementById("darkModeBtn");


    if (!lightButton || !darkButton) {

        return;

    }


    if (
        document.body.classList.contains("dark-mode")
    ) {

        darkButton.classList.add("active");

        lightButton.classList.remove("active");

    }

    else {

        lightButton.classList.add("active");

        darkButton.classList.remove("active");

    }

}


// =========================================
// LOAD SAVED THEME
// =========================================

function loadTheme() {

    const savedTheme =
        localStorage.getItem("theme");


    if (savedTheme === "dark") {

        document.body.classList.add("dark-mode");

    }

    else {

        document.body.classList.remove("dark-mode");

    }


    updateThemeButtons();

}


loadTheme();



// =========================================
// REGISTER
// =========================================

const registerForm =
    document.getElementById("registerForm");


if (registerForm) {

    registerForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const name =
                document
                .getElementById("registerName")
                .value
                .trim();


            const email =
                document
                .getElementById("registerEmail")
                .value
                .trim();


            const password =
                document
                .getElementById("registerPassword")
                .value;


            const confirmPassword =
                document
                .getElementById("confirmPassword")
                .value;


            // Check fields

            if (
                name === "" ||
                email === "" ||
                password === "" ||
                confirmPassword === ""
            ) {

                alert("Please fill all fields.");

                return;

            }


            // Password length

            if (password.length < 6) {

                alert(
                    "Password must contain at least 6 characters."
                );

                return;

            }


            // Password match

            if (password !== confirmPassword) {

                alert("Passwords do not match!");

                return;

            }


            // Save customer information

            localStorage.setItem(
                "customerName",
                name
            );


            localStorage.setItem(
                "customerEmail",
                email
            );


            alert(
                "Account created successfully!"
            );


            // Go to Login

            window.location.href =
                "login.html";

        }
    );

}



// =========================================
// LOGIN
// =========================================

const loginForm =
    document.getElementById("loginForm");


if (loginForm) {

    loginForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const email =
                document
                .getElementById("loginEmail")
                .value
                .trim();


            const password =
                document
                .getElementById("loginPassword")
                .value;


            if (
                email === "" ||
                password === ""
            ) {

                alert(
                    "Please enter your email and password."
                );

                return;

            }


            // Get registered customer

            const customerName =
                localStorage.getItem(
                    "customerName"
                );


            if (!customerName) {

                alert(
                    "No registered account found. Please register first."
                );

                return;

            }


            alert(
                "Login successful!"
            );


            // Open Dashboard

            window.location.href =
                "dashboard.html";

        }
    );

}



// =========================================
// SHOW CUSTOMER NAME
// =========================================

const customerNameElement =
    document.getElementById(
        "customerName"
    );


if (customerNameElement) {

    const customerName =
        localStorage.getItem(
            "customerName"
        );


    if (customerName) {

        customerNameElement.textContent =
            "Welcome, " + customerName;

    }

}



// =========================================
// LOGOUT
// =========================================

function logoutUser() {

    const confirmLogout =
        confirm(
            "Are you sure you want to logout?"
        );


    if (confirmLogout) {

        window.location.href =
            "login.html";

    }

}



// =========================================
// FRAUD CHECK
// =========================================

const fraudCheckForm =
    document.getElementById(
        "fraudCheckForm"
    );


if (fraudCheckForm) {

    fraudCheckForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const amount =
                Number(
                    document
                    .getElementById("amount")
                    .value
                );


            const result =
                document.getElementById(
                    "fraudResult"
                );


            result.style.display =
                "block";


            /*
                Demo fraud detection.

                Later you can replace this
                with your Java/Spring Boot
                machine learning API.
            */


            if (amount >= 50000) {

                result.style.background =
                    "#ffe5e5";

                result.style.color =
                    "#d93025";


                result.innerHTML =

                    "⚠️ <strong>High Risk:</strong> " +

                    "This transaction has been flagged " +

                    "for further investigation.";

            }


            else if (amount >= 20000) {

                result.style.background =
                    "#fff4d6";

                result.style.color =
                    "#a66b00";


                result.innerHTML =

                    "⚠️ <strong>Medium Risk:</strong> " +

                    "This transaction requires " +

                    "additional review.";

            }


            else {

                result.style.background =
                    "#e5f7eb";

                result.style.color =
                    "#16803c";


                result.innerHTML =

                    "✓ <strong>Low Risk:</strong> " +

                    "This transaction appears to be safe.";

            }

        }
    );

}



// =========================================
// LOGIN / REGISTER PAGE SLIDE
// =========================================

function slideToPage(url, direction) {

    const container =
        document.querySelector(".auth-container");


    if (!container) {

        window.location.href = url;

        return;

    }


    if (direction === "register") {

        container.classList.add("slide-left");

    }

    else {

        container.classList.add("slide-right");

    }


    setTimeout(function() {

        window.location.href = url;

    }, 450);

}



// =========================================
// CONTACT FORM
// =========================================

const contactForm =
    document.getElementById("contactForm");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const name =
                document
                .getElementById("contactName")
                .value
                .trim();


            alert(
                "Thank you, " +
                name +
                "! Your message has been received."
            );


            contactForm.reset();

        }
    );

}