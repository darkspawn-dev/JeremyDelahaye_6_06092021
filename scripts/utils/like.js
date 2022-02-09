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
    likeIcons[i].addEventListener("click", addLike())

  }
  function addLike(event) {
    updateLike(event.target, 1);
  }
}