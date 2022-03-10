export class MediaCardFactory {
  create(media) {
    const article = document.createElement("article");
    let mediaContainer;

    if (media.type === "video") {
      mediaContainer = document.createElement("video");
    } else {
        mediaContainer = document.createElement("img");
        mediaContainer.setAttribute("alt", media.title);
    }
    mediaContainer.setAttribute("src", media.src);
    mediaContainer.setAttribute("tabindex", "0");
    mediaContainer.setAttribute("class", "mediaElement");
    article.appendChild(mediaContainer);

    const h2 = document.createElement("h2");
    h2.textContent = media.title;

    const h3 = document.createElement("h3");

    const likeIcon = document.createElement("img");
    likeIcon.setAttribute("alt", "likes");
    likeIcon.setAttribute("tabindex", "0");
 
    const likeCounter = document.createElement("span");
    likeIcon.classList.add("likeIcon");
    likeCounter.textContent = media.likes;

    likeIcon.setAttribute("src", "assets/icons/likes.svg");

    article.appendChild(h2);
    article.appendChild(h3);
    h3.appendChild(likeCounter);
    h3.appendChild(likeIcon);

    return article;
  }
}
