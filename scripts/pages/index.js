import { Photographer } from "../entities/Photographer.js";
import { PhotographerCardFactory } from "/factories/PhotographerCardFactory.js";
import { getData } from "/utils/data.js";

// load photographers from data
const photographersData = await getData("data/photographers.json", "photographers")

const cardsContainer = document.getElementById('photographer_section');
const factory = new PhotographerCardFactory();

for (const p of photographersData) {
    const { id, name, portrait, city, country, tagline, price } = p;
    const photographer = new Photographer(id, name, portrait, city, country, tagline, price);
    const card = factory.create(photographer);
    // render photgrapher cards
    cardsContainer.appendChild(card);
}

