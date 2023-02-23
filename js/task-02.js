const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.querySelector("ul#ingredients");
ingredients.forEach(value =>{
  const listEl = document.createElement('li');
  listEl.classList.add('item');
  listEl.textContent = value;
  ingredientsList.append(listEl);
});


