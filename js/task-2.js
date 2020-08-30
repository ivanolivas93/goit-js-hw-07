const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ul = document.querySelector("#ingredients");

ingredients.forEach((item) => {
  let li = document.createElement("li");
  li.textContent = item;
  ul.append(li);
});
