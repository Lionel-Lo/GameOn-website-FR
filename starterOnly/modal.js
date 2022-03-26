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
const quantity = document.getElementById("quantity");
const quantityHidden = document.querySelector("div.quantity div");
const location1 = document.getElementById("location1");
const location2 = document.getElementById("location2");
const location3 = document.getElementById("location3");
const location4 = document.getElementById("location4");
const location5 = document.getElementById("location5");
const location6 = document.getElementById("location6");
const check1Hidden = document.querySelector("div.check1 div");
const checkbox1 = document.getElementById("checkbox1");
const checkbox1Hidden = document.querySelector("div.checkbox1 div");
const birthdate = document.getElementById("birthdate");
const birthdateHidden = document.querySelector("div.birthdate div");

let checkPrenomValid;
let checkNomValid;
let checkMailValid;
let checkQuantityValid;
let checkLocationValid;
let CheckCheckbox1Valid;
let checkBirthdateValid;

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

//function quantity
function isQuantityValid(quantity) {
  var quantityFormat = "^[0-9]{1,2}$";
  if (quantity.match(quantityFormat)) {
    return true;
  } else {
    return false;
  }
}
//fuction Check Ville
function check1() {
  if (
    location.value == location1.checked ||
    location2.checked ||
    location3.checked ||
    location4.checked ||
    location5.checked ||
    location6.checked
  ) {
    checkLocationValid = true;
  } else {
    checkLocationValid = false;
    check1Hidden.classList.remove("hidden");
  }
}

//function for accept condition
function checkbox() {
  if (checkbox1.checked) {
    return true;
  } else {
    return false;
  }
}

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
//close modal
const close = document.querySelector(".close");
close.addEventListener("click", closeX);
function closeX() {
  modalbg.style.display = "none";
}



//pour le prenom
function testPrenom (){
  isNameValid(prenom.value);
  if (isNameValid(prenom.value) == false) {
    prenomHidden.classList.remove("hidden");
    checkPrenomValid = false
  } else {
    prenomHidden.classList.add("hidden");
    checkPrenomValid = true;
  }};

//pour le nom
function testNom (){
  isNameValid(nom.value);
  if (isNameValid(nom.value) == false) {
    checkNomValid = false
    nomHidden.classList.remove("hidden");
  } else {
    nomHidden.classList.add("hidden");
    checkNomValid = true;
  }};

//pour le mail
function testMail (){
  isMailValid(mail.value);
  if (isMailValid(mail.value) == false) {
    checkMailValid = false
    emailHidden.classList.remove("hidden");
  } else {
    emailHidden.classList.add("hidden");
    checkMailValid = true
  }};

//pour quantity
function testQuantity(){
  isQuantityValid(quantity.value);
  if (isQuantityValid(quantity.value) == false) {
    checkQuantityValid = false;
    quantityHidden.classList.remove("hidden");
  } else {
    quantityHidden.classList.add("hidden");
    checkQuantityValid = true;
  }};

//check condition
function testCondition(){
  if (checkbox() == false) {
    CheckCheckbox1Valid = false;
    checkbox1Hidden.classList.remove("hidden");
  } else {
    CheckCheckbox1Valid = true;
    checkbox1Hidden.classList.add("hidden");
  }};

//pour la date
function testDate(){
  var today = new Date().toISOString().slice(0, 10);
  if (birthdate.value > today) {
    checkBirthdateValid = false;
    birthdateHidden.classList.remove("hidden");
  } else {
    checkBirthdateValid = true;
    birthdateHidden.classList.add("hidden");
  }};

const valid = document.getElementById('submit');
valid.addEventListener("click", (event) => {
  testPrenom();testNom();testMail();testQuantity();testCondition();testDate();check1();
  if (checkPrenomValid && checkNomValid && checkMailValid && checkQuantityValid && checkLocationValid && CheckCheckbox1Valid && checkBirthdateValid == true){
    console.log('cool')
  }else{
    console.error('no no no')
  }})