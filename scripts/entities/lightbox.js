export class Lightbox {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.container
      .querySelector(".lightbox-close")
      .addEventListener("click", (e) => this.toggle());
    this.container
      .querySelector(".lightbox-close")
      .addEventListener("keypress", (e) => this.toggle());
    this.previous = this.container.querySelector(".lightbox-previous");
    this.next = this.container.querySelector(".lightbox-next");

    this.toggleEvents() 
  }

  //lighbox navigatuion
  toggleEvents() {
    const nav = (event) => {
      if (event.key === "Escape" && this.container.style.display === "block") {
        this.toggle();
      }
    }
     
      document.addEventListener("keydown", nav);
    
  }

  //affichage de la lightbox
  toggle(media) {
    if (this.container.style.display === "none" && media) {
      this.container.style.display = "block";
      this.display(media);
    } else {
      this.container.style.display = "none";
    }
  }

  // affichage des medias de la lightbox
  display(media) {
    let mediaContainer;
    if (media.type === "video") {
      mediaContainer = this.container.querySelector(".videos");
      this.container.querySelector(".images").style.display = "none";
    } else {
      mediaContainer = this.container.querySelector(".images");
      this.container.querySelector(".videos").style.display = "none";
    }
    mediaContainer.setAttribute("src", media.src);
    mediaContainer.style.display = "block";
  }
}
