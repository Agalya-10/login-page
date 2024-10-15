let currentRow = null; // Track the currently edited row

function MyButton(event) {
    event.preventDefault(); 
  
    // Get values from input fields
    let userName = document.getElementById('userName').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let cpassword = document.getElementById('cpassword').value;
  
    // Get error message elements
    let nameError = document.getElementById('nameError');
    let emailError = document.getElementById('emailError');
    let passwordError = document.getElementById('passwordError');
    let cpasswordError = document.getElementById('cpasswordError');
  
    let valid = true;
  
    // Validation
    if (userName.trim() === "") {
        nameError.textContent = "Username is required*";
        nameError.style.color = "red";
        nameError.style.fontSize="13px";
        nameError.style.paddingLeft="15px";
        valid = false;
    } else {
        nameError.textContent = '';
    }
  
    if (email.trim() === "") {
        emailError.textContent = "Email is required*";
        emailError.style.color = "red";
        emailError.style.fontSize="13px";
        emailError.style.paddingLeft="15px";
        valid = false;
    } else {
        emailError.textContent = '';
    }
  
    if (password.trim() === "") {
        passwordError.textContent = "Password is required*";
        passwordError.style.color = "red";
        passwordError.style.fontSize="13px";
        passwordError.style.paddingLeft="15px";
        valid = false;
    } else {
        passwordError.textContent = '';
    }

    if (cpassword.trim() === "") {
        cpasswordError.textContent = "Confirm Password is required*";
        cpasswordError.style.color = "red";
        cpasswordError.style.fontSize="13px";
        cpasswordError.style.paddingLeft="15px";
        valid = false;
    } else {
        cpasswordError.textContent = '';
    }

    // Check if password matches confirm password
    if (password !== cpassword) {
        cpasswordError.textContent = "Password does not match*";
        cpasswordError.style.color = "red";
        cpasswordError.style.fontSize = "13px";
        cpasswordError.style.paddingLeft = "15px";
        valid = false;
    }
  
    // Add or update the table
    if (valid) {
        let table = document.getElementById('table2');
        if (currentRow) {
            // Update existing row
            currentRow.cells[0].textContent = userName;
            currentRow.cells[1].textContent = email;
            currentRow.cells[2].textContent = password;
            currentRow.cells[3].textContent = cpassword;
            currentRow = null; // Reset currentRow after updating
            document.getElementById('submitButton').textContent = 'Register';
        } else {
            // Create a new row
            let newRow = table.insertRow(); // Create a new row
  
            // set values  
            let cell1 = newRow.insertCell(0);
            let cell2 = newRow.insertCell(1);
            let cell3 = newRow.insertCell(2);
            let cell4 = newRow.insertCell(3);
            let cell5 = newRow.insertCell(4);
  
            cell1.textContent = userName;
            cell2.textContent = email;
            cell3.textContent = password;
            cell4.textContent = cpassword;

            // Edit and delete buttons
            cell5.innerHTML = `
                <button class="btn bg-success edit-btn">Edit</button>
                <button class="btn bg-danger delete-btn">Delete</button>
            `;

            cell5.querySelector('.edit-btn').addEventListener('click', function() {
                EditRow(newRow);
            });
  
            cell5.querySelector('.delete-btn').addEventListener('click', function() {
                DeleteRow(newRow);
            });
        }
  
        // Reset (refresh) form fields
        document.getElementById('form').reset();
        currentRow = null; // Reset currentRow
    }
}

// Toggle password visibility
const passwordField = document.getElementById("password");
const eyeIcon = document.getElementById("togglePassword");

eyeIcon.addEventListener("click", function() {
    if (passwordField.type === "password") {
        passwordField.type = "text"; 
        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye");
    } else {
        passwordField.type = "password"; 
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");
    }
});

const cpassword = document.getElementById("cpassword");
const eyeIcons = document.getElementById("togglePasswords");

eyeIcons.addEventListener("click", function() {
    if (cpassword.type === "password") {
        cpassword.type = "text"; 
        eyeIcons.classList.remove("fa-eye-slash");
        eyeIcons.classList.add("fa-eye");
    } else {
        cpassword.type = "password"; 
        eyeIcons.classList.remove("fa-eye");
        eyeIcons.classList.add("fa-eye-slash");
    }
});

// Edit row
function EditRow(row) {
    currentRow = row; // Set the current row for editing
    document.getElementById('userName').value = row.cells[0].textContent;
    document.getElementById('email').value = row.cells[1].textContent;
    document.getElementById('password').value = row.cells[2].textContent;
    document.getElementById('cpassword').value = row.cells[3].textContent;

    document.getElementById('submitButton').textContent = 'Update'; // Change button text
}

// Delete row
function DeleteRow(row) {
    row.remove(); // Delete row
}
