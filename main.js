
function MyButton(event){
    event.preventDefault()

  let user=[]
   
   const userName=document.getElementById('userName').value
  const  email=document.getElementById('email').value
  const  password=document.getElementById('password').value


let userValue={userName,email,password}
user.push(userValue)
    console.log(user)   
}

