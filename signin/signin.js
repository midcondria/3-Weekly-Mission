const signinBox = document.querySelector(".signin-box");
const emptyEmail = document.querySelector(".email-empty");
const wrongEmail = document.querySelector(".email-wrong");
const emptyPassword = document.querySelector(".password-empty");
const signinBtn = document.querySelector(".signin-btn");
const notValidEmail = document.querySelector(".not-valid-email");
const notValidPassword = document.querySelector(".not-valid-password");

const emailInput = document.querySelector(".sign-input-email");
const passwordInput = document.querySelector(".sign-input-password");

const TEST_EMAIL = "test@codeit.com";
const TEST_PW = "codeit101";

function emailCheck(e) {
  const type = e.target.type;
  const value = e.target.value;
  let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

  if (type == "email") {
    if (Number(value) == 0) {
      emptyEmail.classList.remove("hidden");
    } else if (!regex.test(value)) {
      wrongEmail.classList.remove("hidden");
    }
  } else if (type == "password") {
    if (Number(value) == 0) {
      emptyPassword.classList.remove("hidden");
    }
  }
}

function reset(e) {
  const type = e.target.type;
  notValidEmail.classList.add("hidden");
  notValidPassword.classList.add("hidden");
  if (type == "email") {
    emptyEmail.classList.add("hidden");
    wrongEmail.classList.add("hidden");
  } else if (type == "password") {
    emptyPassword.classList.add("hidden");
  }
}

function validation() {
  const email = emailInput.value;
  const password = passwordInput.value;
  if (email == TEST_EMAIL && password == TEST_PW) {
    window.location.href = "/forder.html";
  } else {
    notValidEmail.classList.remove("hidden");
    notValidPassword.classList.remove("hidden");
    console.log("돌아가");
  }
}

function validationByEnter(e) {
  if (e.key === "Enter") {
    console.log("동작은함");
    validation();
  }
}

signinBox.addEventListener("focusin", reset);
signinBox.addEventListener("focusout", emailCheck);
signinBox.addEventListener("keydown", validationByEnter);
signinBtn.addEventListener("click", validation);
