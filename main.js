const screen = document.querySelector(".calc-screen");
const btns = document.querySelector(".calc-btns");

let buffer = 0;
let operator = null;

function getInput(num) {
  if (buffer === 0) {
    buffer = num;
  } else {
    buffer += num;
  }
}

const handleClick = (event) => {
  switch (event.target.innerText) {
    case "0":
      if (buffer !== 0) {
        getInput(event.target.innerText);
        console.log(`Number clicked: ${event.target.innerText}`);
        console.log(buffer);
      }
      break;
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
      getInput(event.target.innerText);
      console.log(`Number clicked: ${event.target.innerText}`);
      console.log(buffer);
      break;
    case "+":
    case "-":
    case "/":
    case "*":
    case ".":
    case "=":
    case "C":
    case "CE":
    case "◀":
      console.log(`Symbol clicked: ${event.target.innerText}`);
      break;
  }
};

btns.addEventListener("click", handleClick);
