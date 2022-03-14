export class Photographer{
    constructor(id, name, portrait, city, country, tagline, price) {
        this.id = id;
        this.name = name;
        this.portrait = portrait;
        this.city = city;
        this.country = country;
        this.tagline = tagline;
        this.price = price;
        this.picture = `./assets/images/Photographers_ID_Photos/${portrait}`;
    }   
}
