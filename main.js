
function MyButton(event) {
  event.preventDefault(); // Prevent default form submission

  // Get values from input fields
  let userName = document.getElementById('userName').value;
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;

  // Get error message elements
  let nameError = document.getElementById('nameError');
  let emailError = document.getElementById('emailError');
  let passwordError = document.getElementById('passwordError');

  let valid = true;

  // Validation
  if (userName.trim() === "") {
      nameError.textContent = "Username is required*";
      nameError.style.color = "red";
      valid = false;
  } else {
      nameError.textContent = '';
  }

  if (email.trim() === "") {
      emailError.textContent = "Email is required*";
      emailError.style.color = "red";
      valid = false;
  } else {
      emailError.textContent = '';
  }

  if (password.trim() === "") {
      passwordError.textContent = "Password is required*";
      passwordError.style.color = "red";
      valid = false;
  } else {
      passwordError.textContent = '';
  }

  // If valid, log to console and reset
  if (valid) {
      console.log("Username:", userName);
      console.log("Email:", email);
      console.log("Password:", password);

      let resultDiv = document.getElementById('result');
      resultDiv.innerHTML = `
          <h2>User Details</h2>
          <p><strong>Username:</strong> ${userName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Password:</strong> ${password}</p>`;

      // Reset the form after logging data
      document.getElementById('form').reset();
  }
}