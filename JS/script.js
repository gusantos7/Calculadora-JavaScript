const userInput = document.getElementById("userInput");
var expression = "";

function reciproco() {
  expression = `${1 / userInput.value}`;
  userInput.value = expression;
  if (userInput.value == "Infinity") {
    userInput.style.fontSize = '35px'
    userInput.value = "Não pode dividir por 0!";
  }
}
function quadrado() {
  expression = `${userInput.value ** 2}`;
  userInput.value = expression;
}
function raiz() {
  expression = `${Math.sqrt(userInput.value)}`;
  userInput.value = expression;
}

function press(num) {
  expression += num;
  userInput.value = expression;
}

function igual() {
  userInput.value = eval(expression);
  expression = "";
}

function borracha() {
  expression = "";
  userInput.value = expression;
}
