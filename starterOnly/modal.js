function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//function régle regex for name and last name
function isNameValid (name){
  const regexName = '[a-zA-Z]{3,}';
  if(name.toLowerCase().match(regexName)){
    return true;
  }else{
    return false;
  }
}

//function régle mail
function isMailValid(mail){
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(mail.match(mailformat)){
    return true
  }else{
    return false
    }
  }

/*1er selection champ
2e detecter l'envent quand user change value input
3e cree fonction*/

//pour le prenom
const prenom = document.getElementById('first')
prenom.addEventListener('input', event => {
  isNameValid(prenom.value)
  if (isNameValid(prenom.value)==false){
    let hidden = document.querySelector('div.firstName div')
    hidden.classList.remove('hidden');
}else{
  let hidden = document.querySelector('div.firstName div')
    hidden.classList.add('hidden');
}
})


  //pour le nom
const nom = document.getElementById('last')
nom.addEventListener('input', event => {
  isNameValid(nom.value)
  if (isNameValid(nom.value)==false){
    let hidden = document.querySelector('div.lastName div')
    hidden.classList.remove('hidden');
}else{
  let hidden = document.querySelector('div.lastName div')
    hidden.classList.add('hidden');
}
})

//pour le mail
const mail = document.getElementById('email')  
mail.addEventListener('input', event => {
  isMailValid(mail.value)
  console.log(isMailValid(mail.value))
  if (isMailValid(mail.value)==false){
    let elt = document.querySelector('div.mail div')
    elt.classList.remove('hidden');
}else{
  let elt = document.querySelector('div.mail div')
    elt.classList.add('hidden');
}
})



/*var birthdate =document.getElementById('birthdate')

var checkbox_input = document.getElementsByClassName('checkbox-input')

var checkbox2 = document.getElementById('checkbox2')

var button = document.getElementById('button')*/