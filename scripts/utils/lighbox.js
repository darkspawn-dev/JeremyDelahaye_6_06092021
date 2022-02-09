// on prend les élément du dom 
const lightboxBg = document.getElementsByClassName("lightbox_bg")[0];
const articleImg = document.getElementsByClassName("media-section")[0];
let currentTarget = [];
const previousArrow = document.getElementsByClassName("lightbox-previous")[0];
const nextArrow = document.getElementsByClassName("lightbox-next")[0];
const imageName = document.getElementsByClassName("image-name")[0];
const images = document.getElementsByClassName("images")[0];
const videos = document.getElementsByClassName("videos")[0];
const close = document.getElementsByClassName("lightbox-close")[0];

window.addEventListener("keydown", keyListener, true);


// function suivante & précedente
function keyListener(event) {
  if (event.code == "ArrowLeft") {
    if (currentTarget.previousSibling !== null) {
      event.preventDefault();
      PreviousPic();
    }
  }
  if (event.code == "ArrowRight") {
    if (currentTarget.nextSibling !== null) {
      event.preventDefault();
      NextPic();
    }
  }
  if (event.code == "Escape") {
    event.preventDefault();
    closeLightbox();
  }
}

// affichage et fermeture lightbox
function displayLightbox() {
  lightboxBg.style.display = "block";
}
function closeLightbox() {
  lightboxBg.style.display = "none";
}

function Lightbox() {
  for (let i = 0; i < articleImg.children.length; i++) {
    articleImg.children[i].children[0].addEventListener(
      "keypress",
      runLightbox
    );
    articleImg.children[i].children[0].addEventListener("click", runLightbox);
  }
}

close.addEventListener("click", closeLightbox);

function runLightbox(event) {
  currentTarget = event.target.parentElement;
  displayLightbox();
  img();
}

// précédente
previousArrow.addEventListener("click", PreviousPic);
function PreviousPic() {
  currentTarget = currentTarget.previousSibling;
  img();
}
 // suivante
nextArrow.addEventListener("click", NextPic);
function NextPic() {
  currentTarget = currentTarget.nextSibling;
  img();
}

//gallerie
function img() {
  if (currentTarget.firstChild.tagName == "VIDEO") {
    videos.src = currentTarget.children[0].src;
    videos.style.display = "block";
    images.style.display = "none";
  } else {
    images.style.display = "";
    videos.style.display = "none";
    images.src = currentTarget.children[0].src;
    images.alt = currentTarget.children[1].innerText;
  }
  imageName.innerText = currentTarget.children[1].innerText;
  checkArrow();
}

function checkArrow() {
  if (currentTarget.nextSibling === null) {
    nextArrow.style.display = "none";
  } else {
    nextArrow.style.display = "";
  }
  if (currentTarget.previousSibling === null) {
    previousArrow.style.display = "none";
  } else {
    previousArrow.style.display = "";
  }
}
