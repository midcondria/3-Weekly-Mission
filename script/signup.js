import {
  validateInput,
  validateEmail,
  validatePasswordWithRegex,
  validatePasswordCheck,
} from "./validation.js";

const signinBox = document.querySelector(".signup-box");
const signinBtn = document.querySelector(".signup-btn");

const emailInput = document.querySelector(".sign-input-email");
const passwordInput = document.querySelector(".sign-input-password");
const passwordCheckInput = document.querySelector(".sign-input-passwordcheck");

const emailErrorMsg = document.querySelector(".email-error-msg");
const passwordErrorMsg = document.querySelector(".password-error-msg");
const passwordCheckErrorMsg = document.querySelector(
  ".passwordcheck-error-msg"
);

const LOGIN_FAIL_MESSAGE_EMAIL = "이메일을 확인해주세요.";

const LOGIN_FAIL_MESSAGE_PASSWORD = "비밀번호를 확인해주세요.";

const URL = "https://bootcamp-api.codeit.kr/api/sign-in";

async function signup() {
  const request = {
    email: emailInput.value,
    password: passwordInput.value,
  };
  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    });
    const data = await response.json();

    if (data.data) {
      window.location.href = "/forder.html";
    } else {
      validateInput(emailInput, emailErrorMsg, LOGIN_FAIL_MESSAGE_EMAIL);
      validateInput(
        passwordInput,
        passwordErrorMsg,
        LOGIN_FAIL_MESSAGE_PASSWORD
      );
    }
  } catch (error) {
    console.log("error fetching data", error);
  }
}

function signupByEnter(e) {
  if (e.key === "Enter") {
    e.preventDefault();
    signin();
  }
}

emailInput.addEventListener("focusout", () =>
  validateEmail(emailInput, emailErrorMsg)
);
passwordInput.addEventListener("focusout", () =>
  validatePasswordWithRegex(passwordInput, passwordErrorMsg)
);
passwordCheckInput.addEventListener("focusout", () => {
  validatePasswordCheck(
    passwordInput,
    passwordCheckInput,
    passwordCheckErrorMsg
  );
});
signinBtn.addEventListener("click", signup);
signinBox.addEventListener("keydown", signupByEnter);
