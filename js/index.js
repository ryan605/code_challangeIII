//URLS
let FEATURED_MOVIES=`http://localhost:3000/films`
document.addEventListener(`DOMContentLoaded`, () => {
 
     // create featured movies element
     const createFeaturedMovies =(image, title, description, time, duration, tickets)=>{
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

        const movieTime = document.createElement(`p`)
        movieTime.classList.add(`card-title`)
        movieTime.innerText=time

        const movieDuration = document.createElement(`p`)
        movieDuration.classList.add(`card-title`)
        movieDuration.innerText=duration

        const ticks = document.createElement(`p`)
        ticks.classList.add(`card-text`)
        ticks.innerText=tickets

        //appending
        cardBody.appendChild(movieTitle)
        cardBody.appendChild(movieDescription)
        cardBody.appendChild(movieTime)
        cardBody.appendChild(movieDuration)
        cardBody.appendChild(ticks)

        imgDiv.appendChild(moviePoster)

        rowDiv.appendChild(imgDiv)
        rowDiv.appendChild(cardBody)

        mainDiv.appendChild(rowDiv)
        
        return mainDiv
     }

      //load featured movies
    const loadFeaturedMovies = () => {
    fetch(FEATURED_MOVIES)
    .then((response) => response.json())
    .then((data) =>{
        for(let i=0; i<data.length; i++){

        const filmsData = data[i]
    
        const name = filmsData.title
    
        const description = filmsData.description
    
        const image = filmsData.poster

        const time = filmsData.showtime

        const duration = filmsData.runtime

        const tickets = filmsData.tickets_sold
    
        const featuredMovie =createFeaturedMovies(image, name, description, time, duration, tickets)
    
        document.getElementById(`featured movies`).appendChild(featuredMovie)
    
    }
        
    })
  
}
loadFeaturedMovies()
//movie list
const createMovieList = (tag, photo) => {

    const divMain = document.createElement(`div`)
    divMain.classList.add(`col-4`)

    const divRow = document.createElement(`div`)
    divRow.classList.add(`row`)

    const photoDiv = document.createElement(`div`)
    photoDiv.classList.add(`img-top`)

    const moviePhoto = document.createElement(`img`)
    moviePhoto.classList.add(`movie-img`)
    moviePhoto.src=photo

    const bodyDiv = document.createElement(`div`)
    bodyDiv.classList.add(`movie-tag`)

    const movieTag = document.createElement(`h2`)
    movieTag.classList.add(`tag`)
    movieTag.innerText=tag

    return divMain

    //appending 
    bodyDiv.appendChild
    
}
createMovieList()
})




