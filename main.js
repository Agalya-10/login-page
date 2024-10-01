// var form = document.getElementById('form').value;
// let userName=document.getElementById('userName').value;
// let email=document.getElementById('email').value;
// let password=document.getElementById('password').value;
// var nameError = document.getElementById('nameError').value;
// var emailError = document.getElementById('emailError').value;
// var passwordError = document.getElementById('passwordError').value;


function MyButton(event){
    event.preventDefault()

  // let user=[]
   
   let userName=document.getElementById('userName').value;
   let email=document.getElementById('email').value;
   let password=document.getElementById('password').value;
  //  let errorMessages = ''

    console.log(userName)   
    console.log(email)
    console.log(password)

    let resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h2>User Details</h2>
        <p><strong>Username:</strong> ${userName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Password:</strong> ${password}</p>`;

}
//    form.addEventListener('submit',(e)=>{
//     e.preventDefault()

// if(userName !== ""){
//   nameError.innerHTML = '' ;      
//  }
//  else if(userName === ""){
//   nameError.innerHTML = 'Username is Not Required*';
//   nameError.style.color = "red";
//   nameError.style.fontsize ="12px"

  
//  }
// })


