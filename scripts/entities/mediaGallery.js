import { MediaCardFactory } from "../factories/mediaCardFactory.js";
import { Lightbox } from "./lightbox.js";

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

  like(mediaId) {
    this.media.find((m) => m.id === mediaId).likes++;
    this.render(this.sortBy);
  }

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
  // lightbox previous
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
