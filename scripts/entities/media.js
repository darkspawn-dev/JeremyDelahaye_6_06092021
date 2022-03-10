class Media {
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

export class Image extends Media{
    constructor(id, photographer, title, image, likes, date, price) {
        super(id, photographer, title, image, likes, date, price);
        this.type = "image"
    }
}

export class Video extends Media{
    constructor(id, photographer, title, video, likes, date, price) {
        super(id, photographer, title, video, likes, date, price);
        this.type = "video"
    }
}

