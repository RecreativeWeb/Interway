// AU CHARGEMENT DE LA PAGE
// DANS LA DIV RECOMMANDATION
let recom = document.querySelector('#reco');
// APPEL A L API 
fetch("http://www.omdbapi.com/?apikey=e7a85a&t=scream")
.then(response => response.json())
.then(response => {

    // CREATION ELEMENTS ET CONTENUS
    const recoArticle = document.createElement('article');
    recoArticle.style.background = "url(" + response.Poster + ")no-repeat top center";
    recom.appendChild(recoArticle);
    const infosContainer = document.createElement('div');
    const titleRecoMovie = document.createElement('h3');
    titleRecoMovie.textContent = response.Title;
    const infosRecoMovie = document.createElement('ul');
    const yearRecoMovie = document.createElement('li');
    yearRecoMovie.textContent = response.Year;
    const directorRecoMovie = document.createElement('li');
    directorRecoMovie.textContent = response.Director;

    const syno = document.createElement('p');
    syno.textContent = response.Plot;
    syno.classList.add('syno');
    recom.appendChild(syno);

    // INSERTION ELEMENT DANS LE DOM
    infosRecoMovie.appendChild(yearRecoMovie);
    infosRecoMovie.appendChild(directorRecoMovie);
    infosContainer.appendChild(titleRecoMovie);
    infosContainer.appendChild(infosRecoMovie);
    recoArticle.appendChild(infosContainer);
    infosContainer.classList.add('infosStyle');
});

// FIND A MOVIE
let validate = document.querySelector('#validate');
let inputTitle = document.querySelector('#title');
let movContain = document.querySelector('#movContain');
// AU CLIC SUR LE BOUTON FIND
validate.addEventListener('click', (e) => {
     e.preventDefault();
     // DISPARITION DE LA RECOMMANDANTION
     recom.style.display = "none";
     movContain.innerHTML="";
     // APPEL A L API AVEC LE TITRE DEMANDE
     fetch("http://www.omdbapi.com/?apikey=e7a85a&t=" + inputTitle.value)
     .then(response => response.json())
     .then(response => {

        if(response.Response === "False"){
            const err = document.createElement('div');
            err.textContent = "Movie not found!";
            err.classList.add('err');
            movContain.appendChild(err);
            inputTitle.value=" ";
        }
        else{
            // CREATION ELEMENTS ET CONTENUS
            const newArticle = document.createElement('article');
            newArticle.style.background = "url(" + response.Poster + ")no-repeat top center";
            movContain.appendChild(newArticle);
            const synopsis = document.createElement('p');
            synopsis.textContent = response.Plot;
            movContain.appendChild(synopsis);
            const infos = document.createElement('div');
            infos.classList.add('infosStyle');
            newArticle.appendChild(infos);
            const titleMovie = document.createElement('h3');
            titleMovie.textContent = response.Title;
            infos.appendChild(titleMovie);
            const infosMovie = document.createElement('ul');
            const yearMovie = document.createElement('li');
            yearMovie.textContent = response.Year;
            const directorMovie = document.createElement('li');
            directorMovie.textContent = response.Director;
            // INSERTION DANS LE DOM
            infosMovie.appendChild(yearMovie);
            infosMovie.appendChild(directorMovie);
            infos.appendChild(infosMovie);
        
            inputTitle.value=" ";
        }

     });
})