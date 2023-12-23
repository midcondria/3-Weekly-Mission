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

const SIGNUP_FAIL_MESSAGE_EMAIL = "중복된 이메일입니다.";

const URL = "https://bootcamp-api.codeit.kr/api/sign-up";

async function signup() {
  const isVerifed =
    validateEmail(emailInput, emailErrorMsg) &&
    validatePasswordWithRegex(passwordInput, passwordErrorMsg) &&
    validatePasswordCheck(
      passwordInput,
      passwordCheckInput,
      passwordCheckErrorMsg
    );
  if (!isVerifed) return;

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
      validateInput(emailInput, emailErrorMsg, SIGNUP_FAIL_MESSAGE_EMAIL);
    }
  } catch (error) {
    console.log("error fetching data", error);
  }
}

function signupByEnter(e) {
  if (e.key === "Enter") {
    e.preventDefault();
    signup();
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
