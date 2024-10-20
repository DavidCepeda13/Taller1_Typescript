export class Serie{
    id: number;
    name: string;
    channel: string;
    seasons: number;
    descripcion: string;
    source: string;
    image: string;

  
    constructor(id: number, name: string, channel: string, seasons: number, descripcion: string, source: string, image: string) {
        this.id = id;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.descripcion= descripcion;
        this.source = source;
        this.image = image;
    }
}