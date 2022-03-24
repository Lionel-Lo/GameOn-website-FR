//function

function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//function régle regex for name and last name
function isNameValid(name) {
  const regexName = "[a-zA-Z]{3,}";
  if (name.toLowerCase().match(regexName)) {
    return true;
  } else {
    return false;
  }
}

//function régle mail
function isMailValid(mail) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (mail.match(mailformat)) {
    return true;
  } else {
    return false;
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const prenom = document.getElementById("first");
const prenomHidden = document.querySelector("div.firstName div");
const nom = document.getElementById("last");
const nomHidden = document.querySelector("div.lastName div");
const mail = document.getElementById("email");
const emailHidden = document.querySelector("div.mail div");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}



/*1er selection champ
2e detecter l'envent quand user change value input
3e cree fonction*/

//pour le prenom
prenom.addEventListener("input", (event) => {
  isNameValid(prenom.value);
  if (isNameValid(prenom.value) == false) {
    prenomHidden.classList.remove("hidden");
  } else {
    prenomHidden.classList.add("hidden");
  }
});

//pour le nom
nom.addEventListener("input", (event) => {
  isNameValid(nom.value);
  if (isNameValid(nom.value) == false) {
    nomHidden.classList.remove("hidden");
  } else {
    nomHidden.classList.add("hidden");
  }
});

//pour le mail
mail.addEventListener("input", (event) => {
  isMailValid(mail.value);
  if (isMailValid(mail.value) == false) {
    emailHidden.classList.remove("hidden");
  } else {
    emailHidden.classList.add("hidden");
  }
});

/*var birthdate =document.getElementById('birthdate')

var checkbox_input = document.getElementsByClassName('checkbox-input')

var checkbox2 = document.getElementById('checkbox2')

var button = document.getElementById('button')*/
