/* Créer une carte HTML pour chaque photographe */

export class PhotographerCardFactory {

    create(photographer) {

        const htmlCard = document.createElement("article");

        const a = document.createElement("a");
        a.setAttribute("href", "photographer.html?id=" + photographer.id);
    
        const img = document.createElement("img");
        img.setAttribute("alt", photographer.name);
        img.setAttribute("src", photographer.picture);
    
        const h2 = document.createElement("h2");
        h2.textContent = photographer.name;
    
        const h3 = document.createElement("h3");
        h3.textContent = photographer.city + ", " + photographer.country;
    
        const h4 = document.createElement("h4");
        h4.textContent = photographer.tagline;
    
        const h5 = document.createElement("h5");
    
        h5.textContent = photographer.price + "€/jour";
    
        htmlCard.appendChild(a);
        a.appendChild(img);
        a.appendChild(h2);
        htmlCard.appendChild(h3);
        htmlCard.appendChild(h4);
        htmlCard.appendChild(h5);
      
        return htmlCard;
    }
}