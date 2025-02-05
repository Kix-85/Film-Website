export const apiKey = '9813ce01a72ca1bd2ae25f091898b1c7';


export async function fetchContent(apiUrl){
    const fetchedContent = await fetch(apiUrl);
    if(!fetchedContent.ok){
        console.log("Error Error!!");
        return;
    }
    const jsonContent = await fetchedContent.json();
    console.log(jsonContent);
    return jsonContent.results;
}


export function makeTitle(data,type){
    if(type=="film")
        return data.title
    else
        return data.name
}


export function makeCards(data,list,type){
    data.forEach(datum => {
        console.log(datum.id);
        const dataItem = document.createElement('div');
        let x=datum.overview;
        let z=x.substr(0,120);
        z+="....";
        dataItem.innerHTML=`
            <h2 class="content-card">${makeTitle(datum,type)}<h2>
            <img src="https://image.tmdb.org/t/p/w500/${datum.poster_path}" alt="${makeTitle(datum,type)}">
            <p>${z}</p>
            <a href="../details.html">See Details</a>
        `;
        list.appendChild(dataItem);
    })
}