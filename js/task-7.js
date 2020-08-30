const fontSize = document.getElementById("font-size-control");
const text = document.getElementById("text");

fontSize.addEventListener("input", handleFontSize);
function handleFontSize(event) {
  text.style.fontSize = event.currentTarget.value + "px";
}
