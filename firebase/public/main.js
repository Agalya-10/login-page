
// function MyButton(event) {
//   event.preventDefault(); // Prevent default form submission

//   // Get values from input fields
//   let userName = document.getElementById('userName').value;
//   let email = document.getElementById('email').value;
//   let password = document.getElementById('password').value;

//   // Get error message elements
//   let nameError = document.getElementById('nameError');
//   let emailError = document.getElementById('emailError');
//   let passwordError = document.getElementById('passwordError');

//   let valid = true;

//   // Validation
//   if (userName.trim() === "") {
//       nameError.textContent = "Username is required*";
//       nameError.style.color = "red";
//       valid = false;
//   } else {
//       nameError.textContent = '';
//   }

//   if (email.trim() === "") {
//       emailError.textContent = "Email is required*";
//       emailError.style.color = "red";
//       valid = false;
//   } else {
//       emailError.textContent = '';
//   }

//   if (password.trim() === "") {
//       passwordError.textContent = "Password is required*";
//       passwordError.style.color = "red";
//       valid = false;
//   } else {
//       passwordError.textContent = '';
//   }

//   // If valid, log to console and reset
//   if (valid) {
//       console.log("Username:", userName);
//       console.log("Email:", email);
//       console.log("Password:", password);

//       let resultDiv = document.getElementById('table2');
//       resultDiv= `
//       <tr>
//       <td>${userName}</td>
//       <td>${email}</td>
//       <td>${password}</td>
//       <td>
//       <button class="btn bg-success edit-btn">Edit</button>
//       <button class="btn bg-danger delete-btn">Delete</button>
//       </td>
//       </tr>`
//       table2.innerHTML += resultDiv;
//       // Reset the form after logging data
//       document.getElementById('form').reset();
//   }

 
// }



function MyButton(event) {
    event.preventDefault(); // Prevent default form submission
  
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
  
    //print table
    if (valid) {
        let table = document.getElementById('table2');
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
  
        // edit and delete
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
  
        // Reset (refresh)
        document.getElementById('form').reset();
    }
  }
 
  function togglePassword(eyeIcon) {
    var passwordField = eyeIcon.previousElementSibling; 
   
    if (passwordField.type === "password") {
        passwordField.type = "text"; 
        eyeIcon.textContent = "🔓"; 
    } else {
        passwordField.type = "password"; 
        eyeIcon.textContent = "🔒"; 
    }
}


  //edit row
  function EditRow(row) {
    let userName = row.cells[0].textContent;
    let email = row.cells[1].textContent;
    let password = row.cells[2].textContent;
    let cpassword = row.cells[3].textContent;
  
  

    document.getElementById('userName').value = userName;
    document.getElementById('email').value = email;
    document.getElementById('password').value = password;
    document.getElementById('cpassword').value = cpassword;

//   remove row
    row.remove();
  }
  
  // delete values
  function DeleteRow(row) {
    row.remove(); // Delete  row
  }
