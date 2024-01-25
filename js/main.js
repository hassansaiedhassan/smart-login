var signinEmail = document.getElementById("signinEmail");
var signinPassword = document.getElementById("signinPassword");
var btn = document.getElementById("btn");
var signupName = document.getElementById("signupName");
var signupEmail = document.getElementById("signupEmail");
var signupPassword = document.getElementById("signupPassword");
var incorrect = document.getElementById("incorrect");
var userName = localStorage.getItem('sessionUsername');
var btn2 = document.getElementById("btn2");
var usernameElement = document.getElementById('username');
if (usernameElement !== null) {
  usernameElement.innerHTML = "Welcome " + userName;
}
var signupArray = [];



if (localStorage.getItem('users') == null) {
    signupArray = [];
} else {
    signupArray = JSON.parse(localStorage.getItem('users'));
}

function signup() {
    var name = signupName.value;
    var email = signupEmail.value;
    var password = signupPassword.value;
    

    if (name == "" || email == "" || password == "") {
        incorrect.innerHTML = '<span class="text-white m-3">All inputs are required</span>';
        return;
    }
  
    var newUser = {
        name: name,
        email: email,
        password: password
    };

    if (signupArray.length == 0) {
        signupArray.push(newUser);
        localStorage.setItem('users', JSON.stringify(signupArray));
        document.getElementById('exist').innerHTML = '<span class="text-success m-3">Success</span>';
    } 
    
    else if (isNameExist(newUser.name)) {
        document.getElementById('exist').innerHTML = '<span class="text-danger m-3">Name already exists</span>';
    } else if (isEmailExist(newUser.email)) {
        document.getElementById('exist').innerHTML = '<span class="text-danger m-3">Email already exists</span>';
    } else {
        signupArray.push(newUser);
        localStorage.setItem('users', JSON.stringify(signupArray));
        document.getElementById('exist').innerHTML = '<span class="text-success m-3">Success</span>';
    }
}



function isNameExist(name) {
    for (var i = 0; i < signupArray.length; i++) {
        if (signupArray[i].name.toLowerCase() == name.toLowerCase()) {
            return true;
        }
    }
    return false;
}

function isEmailExist(email) {
    for (var i = 0; i < signupArray.length; i++) {
        if (signupArray[i].email.toLowerCase() == email.toLowerCase()) {
            return true;
        }
    }
    return false;
}

console.log(signupArray);

// ============= for login================

var pathparts = location.host.split('/');


var newUrl = '';
console.log(pathparts);
function login() {
  var userEmail = signinEmail.value;
  var userPassword = signinPassword.value;

  if (userEmail === "" || userPassword === "") {
    incorrect.innerHTML = '<span class="text-white m-3">All inputs are required</span>';
    return false;
  }
 var loggedIn= false
  for (var i = 0; i < signupArray.length; i++) {
    if (userEmail.toLowerCase() === signupArray[i].email && userPassword === signupArray[i].password) {
      localStorage.setItem('sessionUsername', signupArray[i].name);
     loggedIn=true;
     break;
      
    }
  
  
}
if (loggedIn) {
  if (newUrl === '/') {
    location.replace('https://'  +'./home_page.html');
  } else {
    location.replace(newUrl + './home_page.html');
  }
} else {
  incorrect.innerHTML = '<span class="p-2 text-danger">Incorrect email or password</span>';
}

}

function logout(){
    
    localStorage.removeItem('sessionUsername');

}
var switchKey= document.getElementById('navbarSupportedContent');

flag=true;
if(flag=true){
switchKey.classList.remove("show");
switchKey.classList.add("hide");
flag=false}
function controlbtnNav( ){

  if(flag==false){
switchKey.classList.remove("hide");
switchKey.classList.add("show");
flag=true;

}
else{
  flag=false;
  switchKey.classList.remove("show");
  switchKey.classList.add("hide");

}

}
