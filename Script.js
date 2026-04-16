const loginBtn = document.getElementById("loginBtn");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const message = document.getElementById("message");

// Example valid credentials
const validUsername = "admin";
const validPassword = "password12";

// Simple suspicious patterns
function containsSuspiciousInput(text) {
  const patterns = ["'", '"', ";", "--", " or ", " OR ", "="];
  return patterns.some(pattern => text.includes(pattern));
}

loginBtn.addEventListener("click", function () {
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  message.className = "message";

  // TC_02 - Empty fields
  if (username === "" || password === "") {
    message.textContent = "Fields are required.";
    message.classList.add("error");
    return;
  }

  // TC_04 - SQL Injection attempt
  if (containsSuspiciousInput(username) || containsSuspiciousInput(password)) {
    message.textContent = "Suspicious input detected. Login rejected.";
    message.classList.add("error");
    return;
  }

  // Task 2 - Boundary testing for password length (8-12)
  if (password.length < 8 || password.length > 12) {
    message.textContent = "Password must be between 8 and 12 characters.";
    message.classList.add("error");
    return;
  }

  // TC_01 - Valid login
  if (username === validUsername && password === validPassword) {
    message.textContent = "Login successful.";
    message.classList.add("success");
  } 
  // TC_03 - Invalid login
  else {
    message.textContent = "Invalid credentials.";
    message.classList.add("error");
  }
});
