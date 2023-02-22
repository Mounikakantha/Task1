export class ItemDTO {
    itemName:string;
    category:string;

    constructor(
        itemName:string,
        category:string
    )
    {
        this.itemName=itemName;
        this.category=category;
    }
}
