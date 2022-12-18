const btn1 = document.querySelector("#submitBtn");
const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const btnCtn = document.querySelector(".btn__ctn");
const form = document.querySelector("#form");
const body = document.querySelector("body");
const screenHeight = window.innerHeight;
const testInput = document.querySelector(".test");

const personalInputs = [nameInput, email, phone];



personalInputs.forEach((input) => {
  input.addEventListener("focus", () => {
    if (screen.width <= 750) {
      btnCtn.style.display = "none";
      form.style.position = "absolute";
    }
  });

  input.addEventListener("keyup", () => {
    if (window.innerHeight === screenHeight) {
      btnCtn.style.display = "block";
    }
  });
});


window.addEventListener("resize", (e) => {
    if (window.innerHeight === screenHeight) {
        btnCtn.style.display = "block";
    } else {
        btnCtn.style.display = "none";
      }
});

btn1.addEventListener("click", () => {});
