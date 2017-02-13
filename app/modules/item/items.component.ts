import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

import { Item } from "./../models/item";
import { ItemService } from "./../services/item.service";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemsComponent implements OnInit {
    items: Item[];

    constructor(private itemService: ItemService) { }

    ngOnInit(): void {
        this.items = this.itemService.getItems();
    }

    addToFavorite(item: any) {
        if(item.isFavorite){
            this.itemService.showToast("Removed from Favorites");
            item.isFavorite = false;
        }
        else{
            this.itemService.showToast("Added to Favorites");
            item.isFavorite = true;
        }
        console.log(item);
    } 
}
