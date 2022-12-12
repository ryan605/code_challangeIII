//URLS
let FEATURED_MOVIES=`http://localhost:3000/films`
document.addEventListener(`DOMContentLoaded`, () => {
 
     // create featured movies element
     const createFeaturedMovies =(image, title, description)=>{
        const mainDiv = document.createElement(`div`)
        mainDiv.classList.add(`card`,`col-12`)

        const rowDiv = document.createElement(`div`)
        rowDiv.classList.add(`row`)

        const imgDiv = document.createElement(`div`)
        imgDiv.classList.add(`col-6`)

        const cardBody = document.createElement(`div`)
        cardBody.classList.add(`col-6`,`card-body`)

        const moviePoster = document.createElement(`img`)
        moviePoster.classList.add(`card-img`)
        moviePoster.src=image

        const movieTitle = document.createElement(`h5`)
        movieTitle.classList.add(`card-title`)
        movieTitle.innerText=title

        const movieDescription = document.createElement(`p`)
        movieDescription.classList.add(`card-text`)
        movieDescription.innerText=description

        //appending
        cardBody.appendChild(movieTitle)
        cardBody.appendChild(movieDescription)

        imgDiv.appendChild(moviePoster)

        rowDiv.appendChild(imgDiv)
        rowDiv.appendChild(cardBody)

        mainDiv.appendChild(rowDiv)
        
        return mainDiv
     }

      //load featured movies
 const loadFeaturedMovies = () => {
    fetch(FEATURED_MOVIES)
    .then((response) => response.json)
    .then((data) =>{
        const filmsData = data.films[0]
        const name = filmsData.title
        const description = filmsData.description
        const image = filmsData.poster
        const featuredMovie =createFeaturedMovies(image, name, description)
        document.getElementById(`featured movies`).appendChild(featuredMovie)
    })
  
}
loadFeaturedMovies()


// create all movies element



})



