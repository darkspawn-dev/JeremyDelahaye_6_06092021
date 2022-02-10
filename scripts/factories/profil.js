// Creation des éléments header profil

function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price} = data;

    const picture = `/assets/images/Photographers ID Photos/${portrait}`;

    function getUserCardDOM() {
        const header = document.querySelector(".photograph-header");
        const likenprice = document.querySelector(".LikeTotal")
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const h3 = document.createElement( 'h3' );
        h3.textContent = city + ", " + country;
        const h4 = document.createElement( 'h4' );
        h4.textContent = tagline;
        header.appendChild(img)
        header.appendChild(h2);
        header.appendChild(h3);
        header.appendChild(h4);
        const pricey = document.createElement( 'h2');
        const likey = document.createElement('h3');
        const totalLikeCounter = document.createElement('span');
        totalLikeCounter.id = "totalLikeCounter";
        const likeicon = document.createElement('img');
        likeicon.setAttribute("src", "assets/icons/likesblack.svg");
        pricey.textContent = price + "€ / jour";
        
        totalLikeCounter.textContent = totalLike;
        likenprice.appendChild(pricey);
        likenprice.appendChild(likey);
        likey.appendChild(totalLikeCounter);
        likey.appendChild(likeicon);
        return (header);
    }
    return { getUserCardDOM }
}