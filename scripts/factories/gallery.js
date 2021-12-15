// Creation des éléments gallerie profil
function mediaFactory(data) {
  const { image, title, video } = data;
  const picture = `assets/images/${id}/${image}`;
  const mpg = `assets/images/${id}/${video}`;

console.log(picture)
  function getUserCardDOM() {
    const article = document.createElement("article");
    const img = document.createElement("img");
    const movies = document.createElement("video");
    const h2 = document.createElement("h2");
    const h3 = document.createElement("h3");
    const likeIcon = document.createElement('img');
    h2.textContent = title;
    likeIcon.setAttribute("src", "assets/icons/likes.svg");
    if (video !== undefined) {
     movies.setAttribute("src", mpg);
      article.appendChild(movies);
    }
    if (image !== undefined) {
      img.setAttribute("src",picture);
      article.appendChild(img);
    }
    article.appendChild(h2);
    article.appendChild(h3);
    h3.appendChild(likeIcon)
    return article;
  }
  return { getUserCardDOM };
}
