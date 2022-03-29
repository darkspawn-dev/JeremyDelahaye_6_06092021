import  Media  from "../entities/Media.js"
/* Cette classe est un enfant de la classe Media. Elle a toutes les mêmes propriétés que la classe
Media, mais elle a aussi une propriété de type qui est définie sur "image" */

export class Image extends Media{
    constructor(id, photographer, title, image, likes, date, price) {
        super(id, photographer, title, image, likes, date, price);
        this.type = "image"
    }
}