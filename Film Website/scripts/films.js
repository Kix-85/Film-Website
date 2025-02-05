import { apiKey,fetchContent,makeCards,makeTitle } from "./helper.js";

const api_url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}`;

const movieList=document.getElementById("movie-list");

fetchContent(api_url).then(movies=>{
    makeCards(movies,movieList,"film")
})
