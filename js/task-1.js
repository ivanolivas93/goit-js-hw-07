const categories = document.querySelectorAll(".item");
console.log(categories);

console.log(`В списке ${categories.length} категории.`);

const items = document.querySelectorAll(".item");
Array.prototype.forEach.call(items, (element) => {
  const title = element.querySelector("h2").innerHTML;
  const itemsLength = element.querySelectorAll("li").length;
  console.log(`Категория: ${title} / Количество элементов: ${itemsLength}`);
});
