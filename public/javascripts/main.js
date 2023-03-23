//Validation when submit create Form 
const createButton = document.querySelector("#createButton");
const createForm = document.querySelector("#createForm");
createButton.addEventListener("click", function onSubmitButtonClicked(event) {
  createForm.classList.add("was-validated");
});
