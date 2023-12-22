const signinBox = document.querySelector(".signin-box");
const signinBtn = document.querySelector(".signin-btn");

const emailInput = document.querySelector(".sign-input-email");
const passwordInput = document.querySelector(".sign-input-password");

const emailErrorMsg = document.querySelector(".email-error-msg");
const passwordErrorMsg = document.querySelector(".password-error-msg");

const TEST_EMAIL = "test@codeit.com";
const TEST_PW = "codeit101";

const EMPTY_EMAIL_MSG = "이메일을 입력해주세요.";
const INVALID_EMAIL_MSG = "올바른 이메일 주소가 아닙니다.";
const LOGIN_FAIL_MESSAGE_EMAIL = "이메일을 확인해주세요.";

const EMPTY_PASSWORD_MSG = "비밀번호를 입력해주세요.";
const LOGIN_FAIL_MESSAGE_PASSWORD = "비밀번호를 확인해주세요.";

const URL = "https://bootcamp-api.codeit.kr/api/sign-in";

function validateInput(inputEl, errorMsgEl, message) {
  errorMsgEl.textContent = message;
  if (message) {
    inputEl.classList.add("error");
    return;
  }
  inputEl.classList.remove("error");
  return;
}

function validateEmail() {
  const email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;

  if (emailInput.value === "") {
    return validateInput(emailInput, emailErrorMsg, EMPTY_EMAIL_MSG);
  }
  if (!email_regex.test(emailInput.value)) {
    return validateInput(emailInput, emailErrorMsg, INVALID_EMAIL_MSG);
  }
  return validateInput(emailInput, emailErrorMsg, "");
}

function validatePassword() {
  if (passwordInput.value === "") {
    return validateInput(passwordInput, passwordErrorMsg, EMPTY_PASSWORD_MSG);
  }
  return validateInput(passwordInput, passwordErrorMsg, "");
}

async function signin() {
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

function validationByEnter(e) {
  if (e.key === "Enter") {
    e.preventDefault();
    signin();
  }
}

emailInput.addEventListener("focusout", validateEmail);
passwordInput.addEventListener("focusout", validatePassword);
signinBtn.addEventListener("click", signin);
signinBox.addEventListener("keydown", validationByEnter);
