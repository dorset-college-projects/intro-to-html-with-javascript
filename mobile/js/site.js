$(function () {

    console.log('This is jquery loaded');

    initButtons();

})


function initButtons() {

    $('#btnLoadRainbow').on('click', function () {

        loadMovies();
    })


}


function loadMovies() {

    console.log('loading the movies')

    let url = 'https://college-movies.herokuapp.com/';

    $.getJSON(url, function (movieData) {

    

        renderMovieData(movieData)

    })


}

function renderMovieData(movieData) {


   // console.log(movieData);

   let htmlString = [];
   htmlString.push("<ol>");

    for (const movie of movieData) {

        // let title = movie.title;
        // let year = movie.year;
        // let director = movie.director;
        // let id = movie.id
        // let cast = movie.cast

        // object destructuring
        const { title, year, director, id, cast, ...rest } = movie;


        console.log(`${id} : ${title}: ${year} : ${director}`)

       // htmlString.push(`<li>${id} : ${title}: ${year} : ${director}</li>`);
        htmlString.push(`<li>${title}`);

        let castMembers = cast.split(','); // creates an array
        htmlString.push(`<ul>`);
        for (const castMember of castMembers) {
            htmlString.push(`<li>${castMember}</li>`);
        }
        htmlString.push(`</ul>`);



        htmlString.push(`</li>`);
       

    }
    htmlString.push(`</ol>`);

    let renderString = htmlString.join('')

    $('#messagePanel').html(renderString);

}




function demoTarget() {

    console.log('demo target is called');

    //  $('#messagePanel').html('Hello World');

    let rainbow = ['Red', 'Green', 'Yellow', 'Violet', 'Indigo'];

    let htmlString = [];

    htmlString.push('<ol>');

    for (const colour of rainbow) {

        htmlString.push(`<li>${colour}</li>`);

    }

    htmlString.push('</ol>')

    let renderString = htmlString.join('')

    $('#messagePanel').html(renderString);


}