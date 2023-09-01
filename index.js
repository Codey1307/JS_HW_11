let btn = document.querySelector(".btn");
let firstPass = document.getElementById("firstPass");
let secondPass = document.getElementById("secondPass");
let inputs = document.querySelectorAll("input");
let icons = Array.from(document.getElementsByClassName("icon-password"));

icons.forEach((icon, i) => {
  icon.addEventListener("click", () => {
    let type =
      inputs[i].getAttribute("type") === "password" ? "text" : "password";
    inputs[i].setAttribute("type", type);
    icon.classList.toggle("fa-eye-slash");
  });
});

function getPassword() {
  if (firstPass.value === secondPass.value) {
    alert("Welcome to the club buddy");
  } else {
    let p = document.createElement("p");
    p.textContent = "Потрібно ввести однакові значення";
    p.style.color = "red";
    btn.insertAdjacentElement("beforebegin", p);
    setTimeout(function (){p.remove()}, 5000);
  }
}

btn.addEventListener("click", getPassword);
