import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import * as SocialShare from "nativescript-social-share";

import { Item } from "./../models/item";
import { ItemService } from "./../services/item.service";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./favorites.component.html",
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavoritesComponent implements OnInit {
    items: Item[];

    constructor(private itemService: ItemService) { }

    ngOnInit(): void {
        this.items = this.itemService.getItems();
    }

    removeFromFavorite(item: any) {
        this.itemService.showToast("Removed from Favorites");
    }
     
    share(item: any) {
        let list = [];
        list.push(item.name);
        list.push(item.description);
        SocialShare.shareText(list.join(", ").trim());
    }
}
