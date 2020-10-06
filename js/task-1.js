//1//
const cartegoryEl = document.querySelector('#categories');
console.log(cartegoryEl);//not

const ulCartegoryEl = Array.from(cartegoryEl.querySelectorAll('#categories .item'));
console.log(`В списке ${ulCartegoryEl.length} категории`); //В списке 3 категории



const nameEl = document.querySelector('#categories h2'); 
//console.log(`Категория: ${nameEl.textContent}`);




const categoriesLi = Array.from(
    document.querySelectorAll("#categories > li")
);
//console.log(categoriesLi); //[li.item, li.item, li.item]

const sumEl = Array.from(document.querySelectorAll('#categories li ul'));
//console.log(`Количество элементов: ${sumEl.length}`);//Количество элементов: 12
//console.log(sumEl);// [ul, ul, ul]


const resultt = [];
categoriesLi.forEach(element => {
    resultt.push(
        `Категория: ${element.firstElementChild .textContent.trim()}/Количество: ${element.lastElementChild.children.length
            }`
    );
});

console.log(resultt);

console.log(' ');



