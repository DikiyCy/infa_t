'use strict';

const wrapp = document.querySelectorAll('.wrapp');
const body  = document.getElementsByClassName('body')[0];
const btn  = document.getElementsByClassName('params__button button')[0];

document.addEventListener('DOMContentLoaded', () => {

    // переменная для текущего открытого элемента
    let itemCurent = null;

    wrapp.forEach( item => {
        // открываем\закрываем попар по клику
        item.addEventListener('click', () => {
            itemCurent = item;
            item.classList.toggle('overlay');
            body.classList.toggle('not_csroll');
        })

    });

    // закрываем попап по "ECS"
    document.addEventListener('keydown', (event) => {

        let code = event.keyCode;

        if ( code === 27 ) {
            itemCurent.classList.remove('overlay');
            body.classList.remove('not_csroll');
        }
    });

    // временный клик по кнопке
    btn.addEventListener('click', () => {
        alert('Позже добавится файл для скачивания')
    })

});
