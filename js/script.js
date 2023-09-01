'use strict';

window.addEventListener('DOMContentLoaded', ()=> {
    const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const advImg = document.querySelectorAll('.promo__adv img'),
      promoGenre = document.querySelector('.promo__genre'),
      promoBg = document.querySelector('.promo__bg'),
      promoList = document.querySelector('.promo__interactive-list'),
      formFilm = document.querySelector('form.add'),
      inputFilm = formFilm.querySelector('input'),
      checkboxFilm = formFilm.querySelector('[type="checkbox"]');

advImg.forEach(item => {
    item.remove();
});

promoGenre.textContent = 'драма';

promoBg.style.backgroundImage = 'url("img/bg.jpg")';

promoList.innerHTML = '';

movieDB.movies.sort();

console.log(movieDB.movies);
function createFilms() {
    movieDB.movies.sort();
    movieDB.movies.forEach((item, i) => {
        promoList.innerHTML += `
        <li class="promo__interactive-item">${i+1}) ${item}
            <div class="delete"></div>
        </li>
        `;
    });
    
}

formFilm.addEventListener('click', (e)=> {
    e.preventDefault();

    if (inputFilm.value.length > 21) {
        movieDB.movies.push(inputFilm.value.slice(0, 6  ) + '...');
    }else if (checkboxFilm.checked && inputFilm.value !== '' && inputFilm.value !== ' ' && !+inputFilm.value) {
        movieDB.movies.push(inputFilm.value);
        console.log('Like');
        checkboxFilm.checked = false;
    } else if (inputFilm.value == '' || inputFilm.value == ' ' || +inputFilm.value) {
        console.log('error');
        checkboxFilm.checked = false;
    } else {
        movieDB.movies.push(inputFilm.value);
    }

    inputFilm.value = '';
    promoList.innerHTML = '';
    createFilms();

});

createFilms();
});



