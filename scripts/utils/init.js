async function init() {
  const { photographer } = await getPhotographer();
  await initmedia();
  displayHeader(photographer);
  contactModal.contactName(photographer);
}
async function initmedia() {
  media = []; // a refaire
  sortBy = list.children[0].children[0].innerText; // a refaire
  mediaSection.innerHTML = "";
  await getMedia();
  sortMedia();
  calcLike();
  displayData();
  likeIcon();
  Lightbox();

}

init();
