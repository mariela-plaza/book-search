export class APIWrapper {
    public kind: string;
    public totalItems: number;
    public items: any[];

    constructor(wrapper: any) {
        this.kind = wrapper.kind;
        this.totalItems = wrapper.totalItems;
        this.items = wrapper.items;
    }
}