// Creation des éléments
function photographerFactory(data) {
    const { name, portrait, city, country, price, tagline, id} = data;

    const picture = `/assets/images/Photographers ID Photos/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement('article');
        const a = document.createElement('a');
        a.setAttribute("href", "photographer.html?id=" + id,);

        const img = document.createElement('img');
        img.setAttribute("alt", name)
        img.setAttribute("src", picture);

        const h2 = document.createElement('h2');
        h2.textContent = name;  
      
        const h3 = document.createElement( 'h3' );
        h3.textContent = city + ", " + country;
      
        const h4 = document.createElement( 'h4' );
        h4.textContent = tagline;
        
        
        const h5 = document.createElement('h5');

        h5.textContent = price + "€/jour";
   
        article.appendChild(a);
        a.appendChild(img)
        a.appendChild(h2)
        article.appendChild(h3);
        article.appendChild(h4);
        article.appendChild(h5);
        return (article);
        
    }

    return { name, picture, city, country, price, tagline, id, getUserCardDOM }
}

