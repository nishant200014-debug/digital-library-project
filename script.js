// ===== ELEMENTS =====
const loginBtn = document.getElementById("loginBtn");

const popupOverlay = document.getElementById("popupOverlay");

const closeBtn = document.getElementById("closeBtn");

const loginSubmitBtn = document.getElementById("loginSubmitBtn");

const signupBtn = document.getElementById("signupBtn");


// ===== OPEN POPUP =====
loginBtn.addEventListener("click", () => {

    popupOverlay.style.display = "flex";

});


// ===== CLOSE POPUP =====
closeBtn.addEventListener("click", () => {

    popupOverlay.style.display = "none";

});


// ===== SIGNUP =====
signupBtn.addEventListener("click", () => {

    let email = document.getElementById("email").value;

    let password = document.getElementById("password").value;


    if(email === "" || password === ""){

        alert("Please fill all fields");

        return;

    }

    localStorage.setItem(email, password);

    alert("Signup Successful");

});


// ===== LOGIN =====
loginSubmitBtn.addEventListener("click", () => {

    let email = document.getElementById("email").value;

    let password = document.getElementById("password").value;


    let storedPassword = localStorage.getItem(email);


    if(storedPassword === password){

        alert("Login Successful");

        popupOverlay.style.display = "none";

    }

    else{

        alert("Invalid Email or Password");

    }

});

//--------- HEADER ---------//
const header = document.querySelector("header");

const homeSection = document.querySelector(".home");

// ===== NAVBAR START HIDDEN =====
header.classList.add("hide");


// ===== CLICK HOME TO SHOW NAVBAR =====
home.addEventListener("click", () => {

    header.classList.toggle("hide");

});