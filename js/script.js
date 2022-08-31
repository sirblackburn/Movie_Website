

document.addEventListener('DOMContentLoaded', () => {
   
    

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


    const advImages = document.querySelectorAll('.promo__adv img');


    const advertRemove = (arr) => {
        arr.forEach(imgs => {
            imgs.remove();
        });
    };
    advertRemove(advImages);

    const sortArray = (arr) => {
        arr.sort();
    };



    const filmsList = document.querySelector('.promo__interactive-list');

    const filmBanner = document.querySelector('.promo__bg');
    filmBanner.style.cssText = ('background-image: url("../img/bg.jpg")');

    const filmTitle = document.querySelector('.promo__genre');
    filmTitle.innerHTML = "драма";


    const addForm = document.querySelector('form.add'),
          addInput = addForm.querySelector('.adding__input'),
          checkbox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let addFilm = addInput.value;
        const favorite = checkbox.checked;

       if (addFilm) {

        if (addFilm.length >= 21) {
            addFilm = `${addFilm.substring(0, 22)}...`;
        }

        if (favorite) {
            console.log('Favorite film was added!');
        }

        movieDB.movies.push(addFilm);
        sortArray(movieDB.movies);
        createMovieList(movieDB.movies, filmsList);
        event.target.reset();
       } 

        
    });


    function createMovieList(films, parent) {
        parent.innerHTML = "";
        sortArray(films);

        films.forEach((film, i) => {
            parent.innerHTML += 
            `<li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
            </li>`;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createMovieList(films, parent);
            });
        });

    }

    createMovieList(movieDB.movies, filmsList);

    console.log(movieDB);


});