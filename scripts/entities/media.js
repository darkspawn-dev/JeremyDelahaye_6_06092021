// La classe Media est une classe qui représente un seul objet média
export default class Media {
    constructor(id, photographer, title, src, likes, date, price) {
        this.id = id;
        this.photographer = photographer;
        this.title = title;
        this.src = `assets/images/${photographer.id}/${src}`;
        this.likes = likes;
        this.date = date;
        this.price = price;
    }
}



