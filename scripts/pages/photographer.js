// Recuperer l'id via l'url
const id = new URLSearchParams(window.location.search).get("id");
var photographers = "";
var thisPhotographer = "";

async function getPhotographer() {
  photographers = await getData("photographers");
  for (let i = 0; i < photographers.length; i++){
    if (photographers[i].id == id) {
      thisPhotographer = photographers[i];
      return { photographer: thisPhotographer };
    }
  }
}

// affichage des medias
async function displayHeader(photographer) {
  const photographerModel = photographerFactory(photographer);
  photographerModel.getUserCardDOM();
}

// appel data
async function getData(subsetName) {
  return fetch("data/photographers.json")
    .then((response) => response.json())
    .then((data) => {
      return data[subsetName];
    });

}

