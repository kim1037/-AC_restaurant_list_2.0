//Validation when submit create Form
const createButton = document.querySelector("#createButton");
const createForm = document.querySelector("#createForm");
createButton.addEventListener("click", function onSubmitButtonClicked(event) {
  createForm.classList.add("was-validated");
});

//透過select，更改餐廳排序方式
function sortRestaurants() {
  const sortBy = document.querySelector("#sortBy").value;
  const regex = /sortBy=.*/;
  if (window.location.href.includes("search")) { //搜尋結果
    window.location.href = window.location.href.replace(
      regex,
      `sortBy=${sortBy}`
    );
  } else { //首頁
    window.location.href = `/?sortBy=${sortBy}`;
  }
}
