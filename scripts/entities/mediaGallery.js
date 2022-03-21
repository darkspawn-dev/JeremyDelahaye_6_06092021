import { MediaCardFactory } from "../factories/mediaCardFactory.js";
import { Lightbox } from "./lightbox.js";

/* Le constructeur crée un nouvel objet Lightbox et le stocke dans la propriété `lightbox`.
Il crée également un nouvel objet `MediaGallery` et le stocke dans la propriété `media`.
Il crée également une nouvelle propriété `totalLikes` et la définit sur 0.
Il crée également une nouvelle propriété `totalLikesCounter` et la stocke dans la propriété
`totalLikesCounter`.
Il crée également une nouvelle propriété `currentMediaIndex` et la définit sur `null`.
Il crée également une nouvelle méthode `lightboxNext` et la stocke dans la propriété `lightboxNext`.
Il crée également une nouvelle méthode `lightboxPrevious` et la stocke dans la propriété
`lightboxPrevious`.
Il crée également une nouvelle méthode `lightboxNext` et la stocke dans la propriété `lightboxNext`.
Il crée également une nouvelle méthode "lightboxPrevious" et stocke */
export class MediaGallery {
  constructor(containerId, totalLikeCounterId, lightboxContainerId, media) {
    this.container = document.getElementById(containerId);
    this.media = media;
    this.totalLikes = 0;
    this.totalLikesCounter = document.getElementById(totalLikeCounterId);
    this.lightbox = new Lightbox(lightboxContainerId);
    this.currentMediaIndex = null;

    this.lightbox.next.addEventListener("click", (e) => this.lightboxNext());
    this.lightbox.previous.addEventListener("click", (e) =>
      this.lightboxPrevious()
    );
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") {
        this.lightboxPrevious();
      }
      if (e.key === "ArrowRight") {
        this.lightboxNext();
      }
    });
  }

/**
 * Il rend les cartes multimédias par tri.
 * @param sortBy - Les médias à trier.
 */
  render(sortBy) {
    const factory = new MediaCardFactory();
    this.container.textContent = "";
    this.totalLikes = 0;
    for (const m of this.sortMedia(sortBy)) {
      const card = factory.create(m);
      card
        .querySelector(".likeIcon")
        .addEventListener("click", (e) => this.like(m.id));
      card
        .querySelector(".likeIcon")
        .addEventListener("keypress", (e) => this.like(m.id));
      card
        .querySelector(".mediaElement")
        .addEventListener("click", (e) => this.toggleLightbox(m.id));
      card
        .querySelector(".mediaElement")
        .addEventListener("keypress", (e) => this.toggleLightbox(m.id));
      this.totalLikes += m.likes;
      this.container.appendChild(card);
    }
    this.totalLikesCounter.textContent = this.totalLikes;
  }

  
  
  /**
   * Trier le tableau de médias par le paramètre sortBy
   * @param sortBy - Le nom de la colonne à trier.
   * @returns Le média trié par la valeur sortBy sélectionnée.
   */
  sortMedia(sortBy) {
    this.sortBy = sortBy;
    switch (sortBy) {
      case "Popularité":
        return this.media.sort((a, b) => b.likes - a.likes);

      case "Date":
        return this.media.sort(function (a, b) {
          let DateA = Date.parse(a.date);
          let DateB = Date.parse(b.date);
          return DateB - DateA;
        });

      case "Titre":
        return this.media.sort(function (a, b) {
          if (a.title < b.title) {
            return -1;
          }
          if (a.title > b.title) {
            return 1;
          }
          return 0;
        });
      default:
        return this.media;
    }
  }

 /**
  * `like` augmente le nombre de likes pour le média avec l'identifiant donné
  * @param mediaId - L'identifiant du média à liker.
  */
  like(mediaId) {
    this.media.find((m) => m.id === mediaId).likes++;
    this.render(this.sortBy);
  }

/**
 * Basculer la lightbox et mettre à jour les boutons précédent et suivant
 * @param mediaId - L'identifiant du média à afficher.
 */
  toggleLightbox(mediaId) {
    this.currentMediaIndex = this.media.findIndex((m) => m.id === mediaId);
    this.lightbox.toggle(this.sortMedia()[this.currentMediaIndex]);
    if (this.currentMediaIndex === 0) {
      this.lightbox.previous.style.display = "none";
    } else {
      this.lightbox.previous.style.display = "block";
    }
    if (this.currentMediaIndex === this.media.length - 1) {
      this.lightbox.next.style.display = "none";
    } else {
      this.lightbox.next.style.display = "block";
    }
  }
 
/**
 * * Si l'index multimédia actuel est 0, masquez le bouton précédent.
 * * Si l'index multimédia actuel est le dernier média, masquez le bouton suivant.
 * * Si l'index de média actuel n'est pas 0, affichez le bouton précédent.
 * * Si l'index de média actuel n'est pas le dernier média, alors affichez le bouton suivant.
 * * Afficher le média actuel
 * @returns Rien.
 */
  lightboxPrevious() {
    if (this.currentMediaIndex === 0) return;
    this.currentMediaIndex--;
    if (this.currentMediaIndex === 0) {
      this.lightbox.previous.style.display = "none";
    } else {
      this.lightbox.previous.style.display = "block";
    }
    if (this.currentMediaIndex === this.media.length - 1) {
      this.lightbox.next.style.display = "none";
    } else {
      this.lightbox.next.style.display = "block";
    }
    this.lightbox.display(this.sortMedia()[this.currentMediaIndex]);
  }
  
  // lighbox next
  /**
   * *Si l'index de média actuel est le dernier index de média, alors ne faites rien.*
   * 
   * *Sinon, incrémentez l'index de média actuel de 1.*
   * 
   * *Si l'index multimédia actuel est le premier index multimédia, masquez le bouton précédent.*
   * 
   * *Sinon, affichez le bouton précédent.*
   * 
   * *Si l'index multimédia actuel est le dernier index multimédia, masquez le bouton suivant.*
   * 
   * *Sinon, affichez le bouton suivant.*
   * 
   * *Afficher le média actuel.*
   * @returns Rien.
   */
  lightboxNext() {
    if (this.currentMediaIndex === this.media.length - 1) return;
    this.currentMediaIndex++;
    if (this.currentMediaIndex === 0) {
      this.lightbox.previous.style.display = "none";
    } else {
      this.lightbox.previous.style.display = "block";
    }
    if (this.currentMediaIndex === this.media.length - 1) {
      this.lightbox.next.style.display = "none";
    } else {
      this.lightbox.next.style.display = "block";
    }
    this.lightbox.display(this.sortMedia()[this.currentMediaIndex]);
  }
}
