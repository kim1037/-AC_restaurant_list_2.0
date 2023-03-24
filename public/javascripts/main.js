//Validation when submit create Form
const createButton = document.querySelector("#createButton");
const createForm = document.querySelector("#createForm");
createButton.addEventListener("click", function onSubmitButtonClicked(event) {
  createForm.classList.add("was-validated");
});

// //監聽select事件，更改排序方式
// const sortBy = document.getElementById("sortBy");
// sortBy.addEventListener("change", selectChange);

// function selectChange() {
//   console.log(sortBy.value);
// }