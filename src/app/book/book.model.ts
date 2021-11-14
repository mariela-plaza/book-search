export class Book {
    constructor(
        public title: string,
        public authors: string[],
        public imagePath: string,
        public avgRating: number,
        public ratingCounts: number,
        public publisher: string,
        public description: string,
        public language: string,
        public categories: string[],
        public pageCount: number
    ) { }
}