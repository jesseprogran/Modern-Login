const container = document.querySelector("#container"); //This variable holds a reference to the DOM element with the id "container
const registerBtn = document.querySelector("#register");
const loginBtn = document.querySelector("#login");

registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});
