
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
  
    //print table
    if (valid) {
        let table = document.getElementById('table2');
        let newRow = table.insertRow(); // Create a new row
  
        // set values  
        let cell1 = newRow.insertCell(0);
        let cell2 = newRow.insertCell(1);
        let cell3 = newRow.insertCell(2);
        let cell4 = newRow.insertCell(3);
  
        cell1.textContent = userName;
        cell2.textContent = email;
        cell3.textContent = password;
  
        // edit and delete
        cell4.innerHTML = `
          <button class="btn bg-success edit-btn">Edit</button>
          <button class="btn bg-danger delete-btn">Delete</button>
        `;

        cell4.querySelector('.edit-btn').addEventListener('click', function() {
            EditRow(newRow);
        });
  
        cell4.querySelector('.delete-btn').addEventListener('click', function() {
            DeleteRow(newRow);
        });
  
        // Reset (refresh)
        document.getElementById('form').reset();
    }
  }
  
  //edit row
  function EditRow(row) {
    let userName = row.cells[0].textContent;
    let email = row.cells[1].textContent;
    let password = row.cells[2].textContent;
  

    document.getElementById('userName').value = userName;
    document.getElementById('email').value = email;
    document.getElementById('password').value = password;
//   remove row
    row.remove();
  }
  
  // delete values
  function DeleteRow(row) {
    row.remove(); // Delete  row
  }
  