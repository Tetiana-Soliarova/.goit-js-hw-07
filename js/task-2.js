const ingredients =
    [
        'Картошка',
        'Грибы',
        'Чеснок',
        'Помидоры',
        'Зелень',
        'Приправы',
    ];
const ingredient = ingredients[0];
const elements = ingredients.map(ingredient => {
  const nameEl = document.createElement('li');
  nameEl.textContent = ingredient;

  return nameEl;
});
const ingredientsEl = document.querySelector('#ingredients');
//console.log( elements);
ingredientsEl.append(...elements);
console.log(ingredientsEl);





/* Создает 1 лішку
const nameEl = document.createElement('li');
nameEl.textContent = ingredient;
//console.log(nameEl);
const ingredientsEl = document.querySelector('#ingredients');

ingredientsEl.appendChild(nameEl);
console.log(ingredientsEl);*/





/*В HTML есть пустой список ul#ingredients.

<ul id="ingredients"></ul>
В JS есть массив строк.

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().*/
console.log(' ');