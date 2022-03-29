import Media from "./Media.js"

/* La classe Video est un enfant de la classe Media. Elle a toutes les mêmes propriétés que la classe
Media, mais elle a aussi une propriété de type qui est définie sur "video" */
export class Video extends Media{
    constructor(id, photographer, title, video, likes, date, price) {
        super(id, photographer, title, video, likes, date, price);
        this.type = "video"
    }
}
