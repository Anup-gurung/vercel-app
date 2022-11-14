
// declaring the variable and calling the varaible wit document.querySelector by it's id
const stdname = document.querySelector("#name");
const stdid = document.querySelector("#id");


// creating a function onFormSubmit 
function onFormSubmit() {
  let isStdnameValid = checkStdname(),
    isStdIdValid = checkStdId();

  let isFormValid = isStdnameValid && isStdIdValid;
  if (isFormValid) {
  }
}
// creating isStdValid functions
const isStdIdValid = (stdid) => {
  const re = /^([SOC])+([0-9])+$/;   //we are using /^([SOC])+([0-9])+$/ so that we let them to enter the required contains
  return re.test(stdid);
};

//creating a function  to check the valid inofrmation entered by the user
function checkStdId() {
  let valid = false;
  const mini = 11;
  const studentId = stdid.value.trim();

  //using if, else and elseif method to verify the contains
  if (!idIsRequired(studentId)) {
    showError(stdid, "Student ID cannot be empty");
  } else if (studentId.length < mini) {
    showError(stdid, `Student ID shoud have atleast ${mini} characters.`);
  } else if (!isStdIdValid(studentId)) {
    showError(stdid, "Student ID should have 'SOC' followed by the 7 digit id");
  } else {
    showSuccess(stdid);
    valid = true;
  }
  return valid;
}
let idIsRequired = (value) => (value === "" ? false : true);

// creating isStdnameValid 
const isStdnameValid = (stdname) => {
  const no = /^(([a-z A-Z])+)$/;   //using ^(([a-z A-Z])+)$/ to verify user about the input we asked!
  return no.test(stdname);
};

//creating checkStdname to verify the more on the input of users
function checkStdname() {
  let valid = false;
  const min = 3,
    max = 25;
  const username = stdname.value.trim();

  //using if ,elseif and else method to verify more about given statemnent by the users
  if (!isRequired(username)) {
    showError(stdname, " Can you please enter your name ");
  } else if (!isBetween(username.length, min, max)) {
    showError(
      stdname,
      `Name should have character  between ${min} and ${max} .`
    );
  } else if (!isStdnameValid(username)) {
    showError(stdname, "Not accepted!!!Retype invalid value!");
  } else {
    showSuccess(stdname);
    valid = true;
  }
  return valid;
}

let isRequired = (value) => (value === "" ? false : true);

const isBetween = (length, min, max) =>
  length < min || length > max ? false : true;

let showError = (input, message) => {
  let formField = input.parentElement;
  formField.classList.remove("success");
  formField.classList.add("error");

  const error = formField.querySelector("small");
  error.textContent = message;
};

const showSuccess = (input) => {
  const formField = input.parentElement;
  formField.classList.remove("error");
  formField.classList.add("success");
  formField.querySelector("small").textContent = "";
};
