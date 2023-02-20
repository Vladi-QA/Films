let numberOfFilms= +prompt("How many films have you seen?", "");
let personalMovieDB={
    count: numberOfFilms,
    movies:{},
    actors:{},
    geners: [],
    private: false
}
    const a = prompt("Pleace tell us what movies have you seen last time?", ""),
        b = prompt("Please give us score of this movie?", ""),
        c = prompt("Pleace tell us what movies have you seen last time?", ""),
        d = prompt("Please give us score of this movie?", "");

personalMovieDB.movies[a]=b;
personalMovieDB.movies[c]=d;

console.log(personalMovieDB);