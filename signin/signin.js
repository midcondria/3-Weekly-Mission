const signinBox = document.querySelector(".signin-box");
const emptyEmail = document.querySelector(".email-empty");
const wrongEmail = document.querySelector(".email-wrong");
const emptyPassword = document.querySelector(".password-empty");

function emailValidation(e) {
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
  if (type == "email") {
    emptyEmail.classList.add("hidden");
    wrongEmail.classList.add("hidden");
  } else if (type == "password") {
    emptyPassword.classList.add("hidden");
  }
}

signinBox.addEventListener("focusin", reset);
signinBox.addEventListener("focusout", emailValidation);
