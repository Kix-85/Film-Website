import { apiKey,fetchContent,makeCards,makeTitle } from "./helper.js";

const apiUrlTV=`https://api.themoviedb.org/3/discover/tv?include_adult=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${apiKey}`;

const seriesList=document.getElementById("series-list");

fetchContent(apiUrlTV).then(series=>{
    makeCards(series,seriesList,"series")
})