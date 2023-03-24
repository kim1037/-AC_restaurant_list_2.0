//Validation when submit create Form
const createButton = document.querySelector("#createButton");
const createForm = document.querySelector("#createForm");
createButton.addEventListener("click", function onSubmitButtonClicked(event) {
  createForm.classList.add("was-validated");
});

//透過select，更改餐廳排序方式
function sortRestaurants() {
  const sortBy = document.querySelector("#sortBy").value;
  window.location.href = `/?sortBy=${sortBy}`;
}