import { Injectable } from "@angular/core";
import * as Toast from "nativescript-toast";

import { Item } from "./../models/item";

@Injectable()
export class ItemService {
    private items = new Array<Item>(
        { id: 1, name: "Ter Stegen", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", image: "vegas.jpg", isFavorite: false},
        { id: 3, name: "Piqué", description: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ", image: "batman.jpg", isFavorite: true },
        { id: 4, name: "I. Rakitic", description: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", image: "vegas.jpg", isFavorite: false },
        { id: 5, name: "Sergio", description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", image: "plane.jpg", isFavorite: true },
    );

    getItems(): Item[] {
        return this.items;
    }

    getItem(id: number): Item {
        return this.items.filter(item => item.id === id)[0];
    }

    showToast(text: string) {
        let toast = Toast.makeText(text);
        toast.show();
    }
}
