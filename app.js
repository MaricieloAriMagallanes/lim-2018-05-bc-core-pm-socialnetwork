//DECLARAMOS LAS VARIABLES
const btnLogout = document.getElementById("btnLogout");
const btnSignin = document.getElementById("btnSignin");
const register = document.getElementById("register");
const email = document.getElementById("email");
const password = document.getElementById("password");
const login = document.getElementById("login");
const logout = document.getElementById("logout");
const btnGoogle = document.getElementById("btnGoogle");
const btnFacebook = document.getElementById("btnFacebook");
let username = document.getElementById("user_name");
const bd = document.getElementById("bd");
const btnSave = document.getElementById("btnSave");
const btnSave2 = document.getElementById("btnSave2");
const post = document.getElementById("post");
const posts = document.getElementById("posts");
const mensaje = document.getElementById("mensaje");
const mensajepas = document.getElementById("mensajepas");
const box = document.getElementById("checkbox");

//jquery del sidebar
$(document).ready(function () {
  $('.sidenav').sidenav();
});
/////////////777------------------------PUBLICO-----------------
function writeUserData(userId, name, email, imageUrl) {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email,
    profile_picture: imageUrl
  });
}
function allData(userId) {
  var areaTs = document.getElementsByClassName('areaT');
   for (let i = 0; i< areaTs.length; i++) {
    areaTs[i].remove();
   }
 var postsAntiguos= firebase.database().ref('posts/');
 postsAntiguos.on('child_added', function(snapshot){
   var antiguo = snapshot.val();
   var keys=Object.values(antiguo);
   console.log(keys[0]);
   //for(let value of keys){

     //var k= value;
     //var body = antiguo[k].body;
     //console.log(k);
    //botones 4 y el contador de likes 
   var btnE = document.createElement("a");
   btnE.setAttribute("class", "btn-flat waves-effect btn-floating btn-large");
   var textE = document.createTextNode("Editar")
   btnE.appendChild(textE);

    var btnUpdate = document.createElement("a");
    btnUpdate.setAttribute("class", "btn-flat waves-effect btn-floating btn-large");
    var iconUpdate = document.createElement("i");
    iconUpdate.setAttribute("class", "large material-icons black-text")
    var textUpdate = document.createTextNode("save")
    iconUpdate.appendChild(textUpdate);
    btnUpdate.appendChild(iconUpdate);

    var btnDelete = document.createElement("a");
    btnDelete.setAttribute("class", "btn-flat waves-effect btn-floating btn-large");
    var iconDelete = document.createElement("i");
    iconDelete.setAttribute("class", "large material-icons black-text")
    var textDelete = document.createTextNode("delete")
    iconDelete.appendChild(textDelete);
    btnDelete.appendChild(iconDelete);
    //Creamos los botones de like
    var btnLike = document.createElement("a");
    btnLike.setAttribute("class", "btn-flat waves-effect btn-floating btn-large");
    var iconLike = document.createElement("i");
    iconLike.setAttribute("class", "large material-icons red-text");
    var textLike = document.createTextNode("favorite");
    iconLike.appendChild(textLike);
    btnLike.appendChild(iconLike);
    //creamos el div del like---------------------------------------------------------------------------
    let numeroClick = document.createElement("span");
  

    var contPost = document.createElement('div');
    let areaTexto= document.createElement('textarea');
    let  textoo = document.createTextNode(keys[0]);
    areaTexto.setAttribute('class','areaT');
    areaTexto.setAttribute("disabled", "false");
    areaTexto.appendChild(textoo);
    contPost.appendChild(areaTexto);
  

    btnE.addEventListener("click", ()=>{
      areaTexto.focus();
      areaTexto.removeAttribute("disabled", "false");
    });
    btnDelete.addEventListener('click', () => {
      let questions = confirm('¿Deseas eliminar este post?');
      if (questions == true) {
        firebase.database().ref().child('/user-posts/' + userId + '/' + newPost).remove();
        firebase.database().ref().child('posts/' + newPost).remove();

        while (contPost.firstChild) contPost.removeChild(contPost.firstChild);

      } else {

      };
    });

    //REALIZAMOS LOS EVENTOS DE LOS BOTONES LIKE
    let contador = 0;
    btnLike.addEventListener('click', () => {
     contador += + 1;
     numeroClick.innerHTML= contador;

    })

    //FIN DE LOS BOTONES

    btnUpdate.addEventListener('click', () => {
      const newUpdate = document.getElementById(newPost);
      const nuevoPost = {
        body: newUpdate.value,
      };

      var updatesUser = {};
      var updatesPost = {};

      updatesUser['/user-posts/' + userId + '/' + newPost] = nuevoPost;
      updatesPost['/posts/' + newPost] = nuevoPost;

      firebase.database().ref().update(updatesUser);
      firebase.database().ref().update(updatesPost);
      M.toast({
        html: 'Post editado y guardado'
      });
      textPost.setAttribute("disabled", "false");
    });


    contPost.appendChild(areaTexto);
    contPost.appendChild(btnUpdate);
    contPost.appendChild(btnDelete);
    //PONEMOS PARA QUE SALGA LOS BOTONES DE LIKE Y DISLIKE
    contPost.appendChild(btnLike);
    //resultado de la umatoria de loslikes-----------------------------------------------------
    contPost.appendChild(numeroClick);
    contPost.appendChild(btnE);
    prueba.appendChild(contPost);
   //}

 });
}


function userData(userId) {
  var areaTs = document.getElementsByClassName('areaT');
   for (let i = 0; i< areaTs.length; i++) {
    areaTs[i].remove();
   }
 var postsAntiguos= firebase.database().ref('user-posts/' + userId);
 postsAntiguos.on('child_added', function(snapshot){
   var antiguo = snapshot.val();
   var keys=Object.values(antiguo);
   console.log(keys[0]);
   //for(let value of keys){
 
     //var k= value;
     //var body = antiguo[k].body;
     //console.log(k);

     var btnE = document.createElement("a");
   btnE.setAttribute("class", "btn-flat waves-effect btn-floating btn-large");
   var textE = document.createTextNode("Editar")
   btnE.appendChild(textE);

    var btnUpdate = document.createElement("a");
    btnUpdate.setAttribute("class", "btn-flat waves-effect btn-floating btn-large");
    var iconUpdate = document.createElement("i");
    iconUpdate.setAttribute("class", "large material-icons black-text")
    var textUpdate = document.createTextNode("save")
    iconUpdate.appendChild(textUpdate);
    btnUpdate.appendChild(iconUpdate);

    var btnDelete = document.createElement("a");
    btnDelete.setAttribute("class", "btn-flat waves-effect btn-floating btn-large");
    var iconDelete = document.createElement("i");
    iconDelete.setAttribute("class", "large material-icons black-text")
    var textDelete = document.createTextNode("delete")
    iconDelete.appendChild(textDelete);
    btnDelete.appendChild(iconDelete);
    //Creamos los botones de like
    var btnLike = document.createElement("a");
    btnLike.setAttribute("class", "btn-flat waves-effect btn-floating btn-large");
    var iconLike = document.createElement("i");
    iconLike.setAttribute("class", "large material-icons red-text");
    var textLike = document.createTextNode("favorite");
    iconLike.appendChild(textLike);
    btnLike.appendChild(iconLike);
    //creamos el div del like---------------------------------------------------------------------------
    let numeroClick = document.createElement("span");
  

    var contPost = document.createElement('div');
    let areaTexto= document.createElement('textarea');
    let  textoo = document.createTextNode(keys[0]);
    areaTexto.setAttribute('class','areaT');
    areaTexto.setAttribute("disabled", "false");
    areaTexto.appendChild(textoo);
    contPost.appendChild(areaTexto);
  

    btnE.addEventListener("click", ()=>{
      areaTexto.focus();
      areaTexto.removeAttribute("disabled", "false");
    });
    btnDelete.addEventListener('click', () => {
      let questions = confirm('¿Deseas eliminar este post?');
      if (questions == true) {
        firebase.database().ref().child('/user-posts/' + userId + '/' + newPost).remove();
        firebase.database().ref().child('posts/' + newPost).remove();

        while (contPost.firstChild) contPost.removeChild(contPost.firstChild);

      } else {

      };
    });

    //REALIZAMOS LOS EVENTOS DE LOS BOTONES LIKE
    let contador = 0;
    btnLike.addEventListener('click', () => {
     contador += + 1;
     numeroClick.innerHTML= contador;

    })

    //FIN DE LOS BOTONES

    btnUpdate.addEventListener('click', () => {
      const newUpdate = document.getElementById(newPost);
      const nuevoPost = {
        body: newUpdate.value,
      };

      var updatesUser = {};
      var updatesPost = {};

      updatesUser['/user-posts/' + userId + '/' + newPost] = nuevoPost;
      updatesPost['/posts/' + newPost] = nuevoPost;

      firebase.database().ref().update(updatesUser);
      firebase.database().ref().update(updatesPost);
      M.toast({
        html: 'Post editado y guardado'
      });
      textPost.setAttribute("disabled", "false");
    });


    contPost.appendChild(areaTexto);
    contPost.appendChild(btnUpdate);
    contPost.appendChild(btnDelete);
    //PONEMOS PARA QUE SALGA LOS BOTONES DE LIKE Y DISLIKE
    contPost.appendChild(btnLike);
    //resultado de la umatoria de loslikes-----------------------------------------------------
    contPost.appendChild(numeroClick);
    contPost.appendChild(btnE);
    prueba2.appendChild(contPost);
     
   //}
 
 });
 }
function writeNewPost(uid, body) {
  // A post entry.
  var postData = {
    uid: uid,
    body: body,
  };
  // Get a key for a new Post.
  var newPostKey = firebase.database().ref().child('posts').push().key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updates = {};
  updates['/posts/' + newPostKey] = postData;
  updates['/user-posts/' + uid + '/' + newPostKey] = postData;

  firebase.database().ref().update(updates);
  return newPostKey;
}
/////////////aqui boton de publicar
btnSave.addEventListener('click', (user) => {
  if (post.value.trim() === "") {
    M.toast({
      html: 'No puedes publicar campos vacíos'
    });
  } else {
    var userEmail = firebase.auth().currentUser.email;
    var userId = firebase.auth().currentUser.uid;
    const newPost = writeNewPost(userId, post.value);
    allData(userId);

   var btnE = document.createElement("a");
   btnE.setAttribute("class", "btn-flat waves-effect btn-floating btn-large");
   var textE = document.createTextNode("Editar")
   btnE.appendChild(textE);

    var btnUpdate = document.createElement("a");
    btnUpdate.setAttribute("class", "btn-flat waves-effect btn-floating btn-large");
    var iconUpdate = document.createElement("i");
    iconUpdate.setAttribute("class", "large material-icons black-text")
    var textUpdate = document.createTextNode("save")
    iconUpdate.appendChild(textUpdate);
    btnUpdate.appendChild(iconUpdate);

    var btnDelete = document.createElement("a");
    btnDelete.setAttribute("class", "btn-flat waves-effect btn-floating btn-large");
    var iconDelete = document.createElement("i");
    iconDelete.setAttribute("class", "large material-icons black-text")
    var textDelete = document.createTextNode("delete")
    iconDelete.appendChild(textDelete);
    btnDelete.appendChild(iconDelete);
    //Creamos los botones de like
    var btnLike = document.createElement("a");
    btnLike.setAttribute("class", "btn-flat waves-effect btn-floating btn-large");
    var iconLike = document.createElement("i");
    iconLike.setAttribute("class", "large material-icons red-text");
    var textLike = document.createTextNode("favorite");
    iconLike.appendChild(textLike);
    btnLike.appendChild(iconLike);
    //creamos el div del like---------------------------------------------------------------------------
    let numeroClick = document.createElement("span");

    //nombre
    var authorPost = document.createElement("p");
    var nameAuthor = document.createTextNode(`${userEmail}`)
    authorPost.appendChild(nameAuthor);
    //Aqui acabamos la creacion de botones de like
    var contPost = document.createElement('div');
    var textPost = document.createElement('textarea')
    textPost.setAttribute("disabled", "false");
    textPost.setAttribute("id", newPost);

    textPost.innerHTML = post.value;
    
    btnE.addEventListener("click", ()=>{
      textPost.focus();
      textPost.removeAttribute("disabled", "false");
    });
    btnDelete.addEventListener('click', () => {
      let questions = confirm('¿Deseas eliminar este post?');
      if (questions == true) {
        firebase.database().ref().child('/user-posts/' + userId + '/' + newPost).remove();
        firebase.database().ref().child('posts/' + newPost).remove();

        while (contPost.firstChild) contPost.removeChild(contPost.firstChild);

      } else {

      };
    });
     
    //REALIZAMOS LOS EVENTOS DE LOS BOTONES LIKE
    let contador = 0;
    btnLike.addEventListener('click', () => {
     contador += + 1;
     numeroClick.innerHTML= contador;

    })

    //FIN DE LOS BOTONES

    btnUpdate.addEventListener('click', () => {
      if(textPost.value == ""){
        M.toast({
          html: 'No puedes guardar post vacios'
        });
      }
      else {
      const newUpdate = document.getElementById(newPost);
      const nuevoPost = {
        body: newUpdate.value,
      };

      var updatesUser = {};
      var updatesPost = {};

      updatesUser['/user-posts/' + userId + '/' + newPost] = nuevoPost;
      updatesPost['/posts/' + newPost] = nuevoPost;

      firebase.database().ref().update(updatesUser);
      firebase.database().ref().update(updatesPost);
      M.toast({
        html: 'Post editado y guardado'
      });
      textPost.setAttribute("disabled", "false");
    }
    });

    contPost.appendChild(authorPost);
    contPost.appendChild(textPost);
    contPost.appendChild(btnUpdate);
    contPost.appendChild(btnDelete);
    //PONEMOS PARA QUE SALGA LOS BOTONES DE LIKE Y DISLIKE
    contPost.appendChild(btnLike);
    //resultado de la umatoria de loslikes-----------------------------------------------------
    contPost.appendChild(numeroClick);
    contPost.appendChild(btnE);
    //padre agarra a los pequeños
    posts.appendChild(contPost);

  }
})

let administrador = () => {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      if (user.emailVerified) {
        registro.classList.add("hiden");
        wall.classList.remove("hiden");

        // console.log('User is signed in.');
        // login.classList.remove("hiden");
        // logout.classList.add("hiden");
        bd.classList.remove("hiden");
        posts.classList.remove("hiden");
        //console.log(user);
        username.innerHTML = `Bienvenidx, ${user.email}`;
      } else if (user.emailVerified == false) {
        M.toast({
          html: 'Verifica tu email antes de ingresar'
        })
      }
    } else {
      console.log('No esta logueado')
      registro.classList.remove("hiden");
      wall.classList.add("hiden");

    }
  });
}
administrador();

box.addEventListener("change", () => {
  if (box.checked === true) {
    posts.classList.add("hiden");
    postsPrivados.classList.remove("hiden");
  } else if (box.checked == false) {
    posts.classList.remove("hiden");
    postsPrivados.classList.add("hiden");
  };
  
btnSave2.addEventListener("click",(user)=>{
  if (post.value.trim() === "") {
    M.toast({
      html: 'No puedes publicar campos vacíos'
    });
  } else{
  posts.classList.add("hiden");
  postsPrivados.classList.remove("hiden");

  var userEmail = firebase.auth().currentUser.email;
  var userId = firebase.auth().currentUser.uid;
  const newPost = writeNewPost(userId, post.value);
  userData(userId);
  var btnE = document.createElement("a");
  btnE.setAttribute("class", "btn-flat waves-effect btn-floating btn-large");
  var textE = document.createTextNode("Editar")
  btnE.appendChild(textE);

  var btnUpdate = document.createElement("a");
  btnUpdate.setAttribute("class", "btn-flat waves-effect btn-floating btn-large");
  var iconUpdate = document.createElement("i");
  iconUpdate.setAttribute("class", "large material-icons black-text")
  var textUpdate = document.createTextNode("save")
  iconUpdate.appendChild(textUpdate);
  btnUpdate.appendChild(iconUpdate);

  var btnDelete = document.createElement("a");
  btnDelete.setAttribute("class", "btn-flat waves-effect btn-floating btn-large");
  var iconDelete = document.createElement("i");
  iconDelete.setAttribute("class", "large material-icons black-text")
  var textDelete = document.createTextNode("delete")
  iconDelete.appendChild(textDelete);
  btnDelete.appendChild(iconDelete);
  //Creamos los botones de like
  var btnLike = document.createElement("a");
  btnLike.setAttribute("class", "btn-flat waves-effect btn-floating btn-large");
  var iconLike = document.createElement("i");
  iconLike.setAttribute("class", "large material-icons red-text")
  var textLike = document.createTextNode("favorite")
  iconLike.appendChild(textLike);
  btnLike.appendChild(iconLike);
  //conteo de likes
  let numeroClick = document.createElement("span");

  //nombre
  var authorPost = document.createElement("p");
  var nameAuthor = document.createTextNode(`${userEmail}`)
  authorPost.appendChild(nameAuthor);
  //Aqui acabamos la creacion de botones de like
  var contPost = document.createElement('div');
  var textPost = document.createElement('textarea')
  textPost.setAttribute("disabled", "false");
  textPost.setAttribute("id", newPost);

  textPost.innerHTML = post.value;

  btnE.addEventListener("click", ()=>{
    textPost.removeAttribute("disabled", "false");
  });
  btnDelete.addEventListener('click',() => {
    let questions = confirm('¿Deseas eliminar este post?');
    if (questions == true) {
      firebase.database().ref().child('/user-posts/' + userId + '/' + newPost).remove();
      firebase.database().ref().child('posts/' + newPost).remove();

      while (contPost.firstChild) contPost.removeChild(contPost.firstChild);

    } else {

    };
  });

  //REALIZAMOS LOS EVENTOS DE LOS BOTONES LIKE
  let contador = 0;
  btnLike.addEventListener('click', () => {
      contador += + 1;
      numeroClick.innerHTML= contador;

  })

  //FIN DE LOS BOTONES

  btnUpdate.addEventListener('click', () => {
    if(textPost.value == ""){
      M.toast({
        html: 'No puedes guardar post vacios'
      });
    }
    else {
    const newUpdate = document.getElementById(newPost);
    const nuevoPost = {
      body: newUpdate.value,
    };

    var updatesUser = {};
    var updatesPost = {};

    updatesUser['/user-posts/' + userId + '/' + newPost] = nuevoPost;
    updatesPost['/posts/' + newPost] = nuevoPost;

    firebase.database().ref().update(updatesUser);
    firebase.database().ref().update(updatesPost);
    M.toast({
      html: 'Post editado y guardado'
    });
    textPost.setAttribute("disabled", "false");
  }
  });

  contPost.appendChild(authorPost);
  contPost.appendChild(textPost);
  contPost.appendChild(btnUpdate);
  contPost.appendChild(btnDelete);
  //PONEMOS PARA QUE SALGA LOS BOTONES DE LIKE Y DISLIKE
  contPost.appendChild(btnLike);
  contPost.appendChild(numeroClick);
  contPost.appendChild(btnE);
  //padre agarra a los pequeños
  postsPrivados.appendChild(contPost);
 }

});
})
    

btnSignin.addEventListener('click', () => {
  firebase.auth().signInWithEmailAndPassword(email.value, password.value)
    .then(function () {
      console.log('Inicia Sesion')
    })
    .catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      if(errorCode == "auth/wrong-password"){
        M.toast({html: "Contraseña invalida"});
      }
      console.log(errorCode)

    });
});

btnLogout1.addEventListener('click', () => {
  firebase.auth().signOut().then(function () {
    console.log('Cerro Sesion');
    registro.classList.remove("hiden");
    wall.classList.add("hiden");
    bd.classList.add("hiden");
    posts.classList.add("hiden");
  }).catch(function (error) {
    console.log('Error al cerrar Sesion');
  });
})

btnLogout2.addEventListener('click', () => {
  firebase.auth().signOut().then(function () {
    console.log('Cerro Sesion');
    registro.classList.remove("hiden");
    wall.classList.add("hiden");
    bd.classList.add("hiden");
    posts.classList.add("hiden");
  }).catch(function (error) {
    console.log('Error al cerrar Sesion');
  });
})

btnGoogle.addEventListener('click', () => {
  var provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({
    'display': 'popup'
  });
  firebase.auth().signInWithPopup(provider).then(function (result) {
    console.log('Sesion con google')
    var user = result.user;
    writeUserData(user.uid, user.displayName, user.email, user.photoURL);
  }).catch(function (error) {
    console.log(error.code);
    console.log(error.message);
    console.log(error.email);
    console.log(error.credential);
    // ...
  });
})

btnFacebook.addEventListener('click', () => {
 
      var provider = new firebase.auth.FacebookAuthProvider();
      provider.addScope("public_profile")
      provider.setCustomParameters({
        'display': 'popup'
      });
      firebase.auth().signInWithPopup(provider)
      .then(function (result) {
        let token = result.credential.accessToken;
        let user= result.user
        let name = result.user.displayName;
        //cambie de vista
        registro.classList.add("hiden");
        wall.classList.remove("hiden");
        bd.classList.remove("hiden");
        posts.classList.remove("hiden");
            username.innerHTML = `Bienvenidx, ${user.displayName}`;
        writeUserData(user.uid, user.displayName, user.email, user.photoURL)
        ///console.log('Logreado con Fb')
      }).catch(function (error) {
        
        console.log(error.code);
        console.log(error.message);
        console.log(error.email);
        console.log(error.credential);
        if(errorCode == "auth/account-exist-with-different-credential"){
          M.toast({html: "Existe un usuario con el mismo email"});
        }
      });
   
})