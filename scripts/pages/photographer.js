import { Photographer } from "./../entities/photographer.js";
import { getData }  from "./../utils/data.js";
import { Video } from "../entities/Video.js";
import { Image } from "./../entities/Image.js";
import { MediaGallery } from "./../entities/mediaGallery.js";
import { Modal } from "../entities/modal.js";

// load photographer data based of id
const photographerId = parseInt(
  new URLSearchParams(window.location.search).get("id"),
  10
);
const photographersData = await getData(
  "data/photographers.json",
  "photographers"
);

const photographer = photographersData
  .map((d) => {
    const { id, name, portrait, city, country, tagline, price } = d;
    return new Photographer(id, name, portrait, city, country, tagline, price);
  })
  .find((p) => p.id === photographerId);

const header = document.getElementById("photograph-header");
const portrait = header.querySelector("img");
portrait.setAttribute("src", photographer.picture);
portrait.setAttribute("alt", photographer.portrait);

const h2 = header.querySelector("h2");
h2.textContent = photographer.name;

const h3 = header.querySelector("h3");
h3.textContent = photographer.city + ", " + photographer.country;

const h4 = header.querySelector("h4");
h4.textContent = photographer.tagline;

const likenprice = document.getElementById("LikeTotal");
likenprice.setAttribute("tabindex", "0");
const pricey = likenprice.querySelector("h2");
pricey.setAttribute("tabindex", "0");
totalLikeCounter.setAttribute("tabindex", "0");
pricey.textContent = photographer.price + "€ / jour";



// load media based of id
const mediaData = await getData("data/photographers.json", "media");

const media = mediaData
  .filter((d) => d.photographerId === photographerId)
  .map((d) => {
    const { id, title, image, likes, date, price, video } = d;
      if (video) {
      return new Video(id, photographer, title, video, likes, date, price);
    }
    return new Image(id, photographer, title, image, likes, date, price);
  });

/* Cela crée une nouvelle instance de la classe MediaGallery et transmet le tableau de médias. Le
tableau de médias est ensuite passé à la méthode de rendu qui rendra les médias en fonction de la
valeur du menu déroulant. */
const gallery = new MediaGallery("media-section","totalLikeCounter","lightboxContainer", media)
gallery.render("Popularité");

const select = document.getElementById('dropdown');
select.addEventListener("change", (e) => gallery.render(e.target.value));





/* Le code ci-dessus crée un modal qui s'affichera lorsque l'utilisateur cliquera sur le bouton
modalOpen. Le modal se fermera également lorsque l'utilisateur cliquera sur le bouton closeModal. Le
modal validera également l'entrée de l'utilisateur et fermera le modal si l'entrée de l'utilisateur
est valide. */
const contactModal = new Modal("contact_modal");
const closeModal = document.getElementById('closeModal');
closeModal.addEventListener("click", e => contactModal.close());
const openModal = document.getElementById('modalOpen');
openModal.addEventListener("click", e => contactModal.display());

contactModal.contactName(photographer); 

const form = document.getElementById('contact');
form.addEventListener('submit', e => {
  e.preventDefault();
  if (contactModal.validate()) {
    contactModal.close()
    return true
  } else {
    return false
  }
});

