//DECLARAMOS LAS VARIABLES

const register = document.getElementById("btnRegister");
const email = document.getElementById("email");
const password = document.getElementById("password");
const login = document.getElementById("login");
const username = document.getElementById("user_name");


function writeUserData(userId, name, email, imageUrl) {
    firebase.database().ref('users/' + userId).set({
      username: name,
      email: email,
      profile_picture : imageUrl
    });
  }

register.addEventListener('click', () =>{
firebase.auth().createUserWithEmailAndPassword(email.value,password.value)
.then(function(){
  verificacionEmail();
    console.log('Se creo el usuario')
    M.toast({html: 'Correo de confirmacion enviado.'})

})
.catch(function(error) {
    console.log(error.code, error.message)
    let errorCode = error.code;
    let errorMessage = error.message;
    if(errorCode === "auth/invalid-email"){
        M.toast({html: 'Correo invalido'})
      }else if(errorCode === "auth/wrong-password"){
        M.toast({html: 'La contraseña es invalida'})
      }else if(errorCode == "auth/weak-password"){
        M.toast({html: 'Tú contraseña es muy debil'}) 
      }else if(errorCode == "auth/email-already-in-use"){
        M.toast({html: 'Este correo ya existe '})}  
  });
});

let verificacionEmail= ()=>{
  var user = firebase.auth().currentUser;

  user.sendEmailVerification()
  .then(function() {
  // Email sent.
  console.log("correo enviado");
  })
  .catch(function(error) {
  // An error happened.
  console.log(error);
  });
}
