
const mediaSection = document.querySelector(".media-section");

async function getMedia() {
 let medias = await getData("media");
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

const list = document.getElementById("dropdown")
list.children[0].addEventListener('click', toggleDropdownOptions)
list.children[0].addEventListener("keypress",selectDropdownOption)
let sortBy = list.children[0].children[0].innerText
function toggleDropdownOptions()
{
	const dropdownOptions = list.children[1];
	if(dropdownOptions.style.display=="")
	{
		dropdownOptions.style.display = "block";
	}
	else
	{
		dropdownOptions.style.display = "";
	}
}
list.children[1].addEventListener("keypress",selectDropdownOption)
list.children[1].addEventListener("click",selectDropdownOption)
function selectDropdownOption(event)
{

	const option = event;

	const optionValue = option.target.innerText;

	const listValue = list.children[0].children[0];

	option.target.innerText = listValue.innerText;

	listValue.innerText = optionValue;
    sortBy = list.children[0].children[0].innerText
    toggleDropdownOptions();
    initmedia();
}

function sortMedia() {
    if (sortBy == "Popularité") {
      media.sort((a, b) => b.likes - a.likes);
    }
    if (sortBy == "Date") {
      media.sort(function (a, b) {
        let DateA = Date.parse(a.date);
        let DateB = Date.parse(b.date);
        return DateB - DateA;
      });
    }
    if (sortBy == "Titre") {
      media.sort(function (a, b) {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        return 0;
      });
    }
  }