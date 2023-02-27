
// validation form register and register user local storage
const inputUsernameRegister = document.querySelector("username");
const inputPasswordRegister = document.querySelector("password");
const btnRegister = document.querySelector(".signup__signInButton");



btnRegister.addEventListener("click", (signup__signInButton) => {
    signup__signInButton.preventDefault();
  if (
    inputUsernameRegister.value === "" ||
    inputPasswordRegister.value === ""
  ) {
    alert("vui lòng không để trống");
  } else {
   
    const user = {
      username: inputUsernameRegister.value,
      password: inputPasswordRegister.value,
    };

    let json = JSON.stringify(user);
    localStorage.setItem(inputUsernameRegister.value, json);
    alert("Đăng Ký Thành Công");
    window.location.href = "login.html";
  }
});
