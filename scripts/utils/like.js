let totalLike = "";
function calcLike() {
  let tempLike = 0;
  for (i = 0; i < media.length; i++) {
    tempLike = tempLike + media[i].likes;
    totalLike = tempLike;
  }
}
const likeIcons = document.getElementsByClassName("likeIcon");

function likeIcon() {
  for (let i = 0; i < likeIcons.length; i++) {
    likeIcons[i].addEventListener("click", addLike);
  }
}
function addLike(event) {
  const counter = event.target.parentNode.querySelector("span");
  const totalLikeCounter = document.getElementById("totalLikeCounter");
  counter.textContent = parseInt(counter.textContent, 10) + 1;
  totalLikeCounter.textContent = parseInt(totalLikeCounter.textContent, 10) + 1;
}
