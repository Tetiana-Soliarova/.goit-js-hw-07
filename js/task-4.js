const decrementEl = document.querySelector('button[data-action="decrement"]');
console.log(decrementEl);

const incrementEl = document.querySelector('button[data-action="increment"]');
console.log(incrementEl);

//const valueEl = document.querySelector('#value');
//console.log(valueEl);  

const counterValue = 0;


const increment = incrementEl.addEventListener('click', () => {
  console.log('click');
  //
    counterValue = ++ document.querySelector('#value').textContent;
 //counterValue += 1;
 

});  // увеличени

const decrement = decrementEl.addEventListener('click', () => {
  console.log('click');

  counterValue = --(document.querySelector('#value').textContent);

});

//Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

/*Задание 4
Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

Создай переменную counterValue в которой будет хранится текущее значение счетчика.
Создай функции increment и decrement для увеличения и уменьшения значения счетчика
Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
<div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div>*/
console.log('');