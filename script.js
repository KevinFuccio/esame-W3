Promise.all([
  fetch(
    "https://striveschool-api.herokuapp.com/api/deezer/search?q=dreamTheater"
  ),
  fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=megadeth"),
])
  .then(function (response) {
    return Promise.all(
      response.map(function (response) {
        return response.json();
      })
    );
  })
  .then(function (data) {
    let album1 = data[0].data;
    let album2 = data[1].data;
    for (let i = 0; i < album2.length; i++) {
      album1.push(album2[i]);
    }
    let albumTot = album1;
    let favoriteTracks = document.getElementById("favoriteTracks");
    albumTot.forEach((el, index) => {
      if (
        el.title === "Pull Me Under" ||
        el.title === "Tornado Of Souls (Remastered 2004)" ||
        el.title === "Caught in a Web" ||
        el.title === "À Tout Le Monde [Set Me Free]"
      ) {
        favoriteTracks.innerHTML += `<div class="card bg-warning m-3 mh-100 remove" id="list-${index}" style="width: 18rem">
                    <img src="${el.album.cover}" class="card-img-top mt-2" style="height: 200px" alt="..." />
                    <div class="card-body d-flex flex-column justify-content-between">
                        <h5 class="card-title">${el.title}</h5>
                    </div>
                </div>`;
      } else {
      }
    });
    return albumTot;
  })
  .then(function (albumTot) {
    let singleSong = albumTot;

    singleSong.forEach((el, index) => {
      if (el.title === "Surrounded") {
        favoriteTrack.innerHTML += `<div class="card bg-warning m-3 mh-100" id="list-${index}" style="width: 18rem">
            <img src="${el.album.cover}" class="card-img-top mt-2" style="height: 200px" alt="..." />
            <div class="card-body d-flex flex-column justify-content-between">
                <h5 class="card-title">${el.title}</h5>
            </div>
        </div>`;
      } else {
      }
    });
    return albumTot;
  }).then(function(albumTot){
    let canzoni ="";
    let trackId =albumTot
    trackId.sort((a,b)=>{
     return a.id - b.id 
    })
    for (let i = 0; i < albumTot.length; i++) {
        canzoni += `${trackId[i].title}, `   
      }
    let songsBtn = document.querySelector('#songs')
    songsBtn.addEventListener('click', ()=>{
        alert(`LISTA CANZONI: ${canzoni}.`)
    })
    return albumTot
  })
  .then(function (albumTot) {
    let albumCarousel = albumTot;
    

    let carousel = document.getElementById("carosello");
    albumCarousel.forEach((el)=>{
        if (
            el.title === "Pull Me Under" ||
            el.title === "Tornado Of Souls (Remastered 2004)" ||
            el.title === "Caught in a Web" ||
            el.title === "À Tout Le Monde [Set Me Free]"
          ) {
        carousel.innerHTML += 
        `<div class="carousel-item activeCarousel">
            <img src="${el.album.cover}" class="d-block w-100" alt="...">
        </div>
        `
        }
    });
    // document.querySelector('.activeCarousel').classList.add('active')

    let modalBody = document.querySelector('#modalBody')
    albumTot.forEach((el) =>{
      modalBody.innerHTML+= `${el.title}, `

    })
    
  })
  .catch(function (error) {
    console.log(error);
  });
