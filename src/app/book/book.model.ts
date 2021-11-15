interface VolumeInfo {
    title: string,
    authors: string[],
    imageLinks: { smallThumbnail: string, thumnail: string },
    averageRating: number,
    ratingsCount: number,
    publisher: string,
    description: string,
    language: string,
    categories: string[],
    pageCount: number
}


export class Book {
    public title: string;
    public authors: string[];
    public imagePath: string;
    public avgRating: number;
    public ratingsCount: number;
    public publisher: string;
    public description: string;
    public language: string;
    public categories: string[];
    public pageCount: number;

    constructor(volume: any) {
        const volumeInfo: VolumeInfo = volume.volumeInfo;

        this.title = volumeInfo.title;
        this.language = volumeInfo.language;
        this.pageCount = volumeInfo.pageCount;


        this.imagePath = (volumeInfo.imageLinks === undefined) ? 'https://via.placeholder.com/132x200' : volumeInfo.imageLinks.smallThumbnail;
        this.avgRating = (volumeInfo.averageRating === undefined) ? 0 : volumeInfo.averageRating;
        this.ratingsCount = (volumeInfo.ratingsCount === undefined) ? 0 : volumeInfo.ratingsCount;
        this.authors = (volumeInfo.authors === undefined) ? ['No author was found'] : volumeInfo.authors;
        this.publisher = (volumeInfo.publisher === undefined) ? 'No publisher was found' : volumeInfo.publisher;
        this.description = (volumeInfo.description === undefined) ? 'No description was found' : volumeInfo.description;
        this.categories = (volumeInfo.categories === undefined) ? ['No categories'] : volumeInfo.categories;
    }
}