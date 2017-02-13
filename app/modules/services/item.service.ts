import { Injectable } from "@angular/core";
import * as Toast from 'nativescript-toast';

import { Item } from "./../models/item";

@Injectable()
export class ItemService {
    private items = new Array<Item>(
        { id: 1, name: "Ter Stegen", description: "Goalkeeper", image:"vegas.jpg", isFavorite: false},
        { id: 3, name: "Piqué", description: "Defender", image:"batman.jpg", isFavorite: true },
        { id: 4, name: "I. Rakitic", description: "Midfielder", image:"vegas.jpg", isFavorite: false },
        { id: 5, name: "Sergio", description: "Midfielder", image:"plane.jpg", isFavorite: true },
        { id: 6, name: "Denis Suárez", description: "Midfielder", image:"vegas.jpg", isFavorite: false },
        { id: 7, name: "Arda", description: "Midfielder", image:"batman.jpg", isFavorite: true },
        { id: 8, name: "A. Iniesta", description: "Midfielder", image:"plane.jpg", isFavorite: false },
        { id: 9, name: "Suárez", description: "Forward", image:"vegas.jpg", isFavorite: true },
        { id: 10, name: "Messi", description: "Forward", image:"batman.jpg", isFavorite: false },
        { id: 11, name: "Neymar", description: "Forward", image:"vegas.jpg", isFavorite: true },
        { id: 12, name: "Rafinha", description: "Midfielder", image:"batman.jpg", isFavorite: true },
        { id: 13, name: "Cillessen", description: "Goalkeeper", image:"plane.jpg", isFavorite: false },
        { id: 14, name: "Mascherano", description: "Defender", image:"batman.jpg", isFavorite: true },
        { id: 15, name: "Paco Alcácer", description: "Forward", image:"plane.jpg", isFavorite: false },
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
