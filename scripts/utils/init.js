async function init() {
    const { photographer } = await getPhotographer();
    await initmedia();
    displayHeader(photographer);
}
  async function initmedia() {
    media = [];
    mediaSection.innerHTML = "";
    await getMedia();
    sortMedia();
    //calcLike();
    displayData();
  }
  
  init();

  async function getData(subsetName) {
  return await fetch("data/photographers.json")
    .then((response) => response.json())
    .then((data) => {
      return data[subsetName];
    });
}