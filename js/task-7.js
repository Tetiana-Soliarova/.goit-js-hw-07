const inputEl = document.querySelector('#font-size-control');
console.log(inputEl);

const spanEl = document.querySelector('#text');
console.log(spanEl);

inputEl.addEventListener('input', onInputChange);



function onInputChange(event) {
    spanEl.style.fontSize = `${event.currentTarget.value}px`;                                            
}
/*Задание 7
Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

<input id="font-size-control" type="range" />
<br />
<span id="text">Абракадабра!</span>*/