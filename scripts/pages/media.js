let medias = "";
let media = [];
let totalLike = "";
const sortList = document.getElementById('sortList');
const mediaSection = document.querySelector(".media-section");


async function getMedia() {
  medias = await getData("media");
  for (let i = 0; i < medias.length; i++) {
    if (medias[i].photographerId == id) {
      media.push(medias[i]);
    }
  }
  return media;
}

async function displayData() {
  media.forEach((_media) => {
    const mediaModel = mediaFactory(_media);
    const mediaCardDOM = mediaModel.getUserCardDOM();
    mediaSection.appendChild(mediaCardDOM);
  });
}

sortList.addEventListener('change', init)
sortList.addEventListener('mouseover',activeSort)
sortList.addEventListener('mouseout', notactiveSort)

function activeSort(){
  sortList.className += 'active'
}
function notactiveSort(){
  sortList.className = ''
}
function sortMedia(){
  var sortBy = sortList.options[sortList.selectedIndex].value;
  if(sortBy == "byPopularity"){
    media.sort((a,b) => b.likes - a.likes)
  }
  if(sortBy == "byDate"){
    media.sort(function (a,b){
      let DateA = Date.parse(a.date);
      let DateB = Date.parse(b.date);
      return DateB - DateA})
  }
  if(sortBy == "byTitle"){
    media.sort(function(a,b){
      if(a.title < b.title){return -1}
      if(a.title > b.title){return 1}
      return 0})
  }
}

function calcLike(){
  let tempLike = 0
  for(i = 0; i<media.length;i++){
    tempLike = tempLike + media[i].likes;
    totalLike = tempLike
  }
}