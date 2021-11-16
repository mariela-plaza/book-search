export class APIWrapper {
    kind: string;
    totalItems: number;
    items: any[];
    cleanData: any[] = [];

    constructor(data: any) {
        this.kind = data.kind;
        this.totalItems = data.totalItems;
        this.items = data.items;
    }

    removeUnfitItems() {
        this.cleanData = this.items.filter(bookItem => {
            const bookInfo = bookItem.volumeInfo;

            if (bookInfo.title !== undefined && bookInfo.description !== undefined && bookInfo.imageLinks !== undefined) {
                return bookItem;
            }
        })
    }

}