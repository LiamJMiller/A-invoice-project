// function login() {
//   preventDefault();
//   const username = liam;
//   const password = password;
//   if (user == username && pass == password) {
//     alert("Logged In");
//   } else {
//     alert("incorrect username or password");
//   }
// }

const formlog = document.getElementById("login-form");
const BtnLog = document.getElementById("login-form-submit");
const ErrorMessage = document.getElementById("login-error-msg");
BtnLog.addEventListener("click", (e) => {
  e.preventDefault();
  const username = formlog.username.value;
  const password = formlog.password.value;
  if (username === "admin" && password === "itsourcecode") {
    alert("You have successfully logged in.");
    location.reload();
  } else {
    ErrorMessage.style.opacity = 1;
  }
});
