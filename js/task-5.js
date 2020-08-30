let inputText = document.getElementById("name-input");
let outputText = document.getElementById("name-output");

let inputValue = (e) => {
  outputText.textContent = e.target.value;

  if ((inputText = null)) {
    outputText.textContent = "незнакомец";
  }
};

inputText.addEventListener("input", inputValue);
