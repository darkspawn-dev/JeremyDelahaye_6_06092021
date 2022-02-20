// class Gallery {
//   constructor(image, title, video, likes) {
//     this.image = image;
//     this.title = title;
//     this.video = video;
//     this.likes = likes;
//   }


//   render() {
//      const { image, title, video, likes } = data;

//     const picture = `assets/images/${id}/${image}`;
//     const mpg = `assets/images/${id}/${video}`;

//     const article = document.createElement("article");
//     article.setAttribute("class", "article")
//     const img = document.createElement("img");
//     const movies = document.createElement("video");
//     const h2 = document.createElement("h2");
//     const h3 = document.createElement("h3");
//     const likeIcon = document.createElement("img");
//     likeIcon.setAttribute("alt", img)
//     const likeCounter = document.createElement("span");
//     likeIcon.classList.add("likeIcon");
//     h2.textContent = title;
//     likeCounter.textContent = likes;
  
//     likeIcon.setAttribute("src", "assets/icons/likes.svg");
  

//     //console.log(likeIcon)
//     if (video) {
//       // console.log(data)
//       movies.setAttribute("src", mpg);
//       movies.setAttribute("tabindex", "0");
//       article.appendChild(movies);
//     }
//     //console.log(movies)

//     if (image !== undefined) {
//       img.setAttribute("src", picture);
//       img.setAttribute("alt", title);
//       img.setAttribute("tabindex", "0");
//       article.appendChild(img)
//     }

//     article.appendChild(h2);
//     article.appendChild(h3);
//     h3.appendChild(likeCounter);
//     h3.appendChild(likeIcon);

//     return article;
    
//   }
// }

// Creation des éléments gallerie profil
function mediaFactory(data) {
  const { image, title, video, likes } = data;

  const picture = `assets/images/${id}/${image}`;
  const mpg = `assets/images/${id}/${video}`;

  // console.log(mpg)

  function getUserCardDOM() {
    const article = document.createElement("article");
    const img = document.createElement("img");
    const movies = document.createElement("video");
    const h2 = document.createElement("h2");
    const h3 = document.createElement("h3");
    const likeIcon = document.createElement("img");
    likeIcon.setAttribute("alt", img)
    const likeCounter = document.createElement("span");
    likeIcon.classList.add("likeIcon");
    h2.textContent = title;
    likeCounter.textContent = likes;
    
    likeIcon.setAttribute("src", "assets/icons/likes.svg");
    
  
    //console.log(likeIcon)
    if (video) {
      // console.log(data)
      movies.setAttribute("src", mpg);
      movies.setAttribute("tabindex","0");
      article.appendChild(movies);
    }
    //console.log(movies)

    if (image !== undefined) {
      img.setAttribute("src", picture);
      img.setAttribute("alt", title);
      img.setAttribute("tabindex","0");
      article.appendChild(img)
    }

    article.appendChild(h2);
    article.appendChild(h3);
    h3.appendChild(likeCounter);
    h3.appendChild(likeIcon);

    return article;
  }
  
  return { getUserCardDOM };
}

