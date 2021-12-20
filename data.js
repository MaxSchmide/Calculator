const actions = ["/", "x", "-", "+", "%"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];

let a = "";
let b = "";
let sign = "";
let finish = false;

let out = document.querySelector("p");

const clearAll = () => {
  a = "";
  b = "";
  sign = "";
  finish = false;
  out.textContent = 0;
};
document.querySelector(".ac").onclick = clearAll;

function deleteLast() {
  if (b === "" && sign === "") {
    a = a.slice(0, -1);
    out.textContent = a;
  }
  if (a === "") {
    out.textContent = 0;
  }
  if (b !== "") {
    b = b.slice(0, -1);
    if (b === "") {
      out.textContent = 0;
    } else {
      out.textContent = b;
    }
  }

  if (a !== "" && b !== "" && finish) {
    return;
  }
}
document.querySelector(".delete").onclick = deleteLast;
document.querySelector("#buttons").onclick = (event) => {
  if (!event.target.classList.contains("btn")) return;
  if (event.target.classList.contains("ac")) return;
  if (event.target.classList.contains("delete")) return;

  out.textContent = "";
  const key = event.target.textContent;
  if (numbers.includes(key)) {
    if (b === "" && sign === "") {
      a += key;
      out.textContent = a;
    } else if (a !== "" && b !== "" && finish) {
      b = "";
      b += key;
      out.textContent = b;
    } else {
      b += key;
      out.textContent = b;
    }
  }
  if (actions.includes(key)) {
    sign = key;
    out.textContent = sign;
    return;
  }

  if (key === "=") {
    switch (sign) {
      case "+":
        a = +a + +b;
        break;
      case "-":
        a = +a - +b;
        break;
      case "x":
        a = a * b;
        break;
      case "%":
        a = a % b;
        break;
      case "/":
        if (b === "0") {
          out.textContent = "Error";
          a = "";
          b = "";
          sign = "";
          return;
        }
        a = a / b;
        break;
    }
    finish = true;
    out.textContent = a;
  }
};
