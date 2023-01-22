/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';
// 1
const promo = document.querySelectorAll('.promo__adv img');
// promo.style.display = 'none';
// promo.remove();

promo.forEach(item => {
  item.remove()
})

// 2
let genre = document.querySelector('.promo__genre');
genre.textContent = 'ДРАМА';

// 3

let bg = document.querySelector('.promo__bg');
bg.style.backgroundImage = "url('./img/bg.jpg')";

// 4

const movieDB = {
  movies: [
    "Логан",
    "Лига справедливости",
    "Ла-ла лэнд",
    "Одержимость",
    "Скотт Пилигрим против..."
  ]
};
movieDB.movies.sort();

// 5

const movieList = document.querySelector('.promo__interactive-list');

movieList.innerHTML = '';

movieDB.movies.forEach((film, i) => {
  movieList.innerHTML += ` <li class="promo__interactive-item">${i + 1} ${film}
                            <div class="delete"></div>
                        </li>`
})




