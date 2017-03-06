import {
    Component,
    OnInit,
    ChangeDetectionStrategy
} from "@angular/core";
import * as SocialShare from "nativescript-social-share";
import {
    DownloadManager
} from "nativescript-downloadmanager";
import * as LocalNotifications from "nativescript-local-notifications";


import {
    Item
} from "./../models/item";
import {
    ItemService
} from "./../services/item.service";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemsComponent implements OnInit {
    items: Item[];

    constructor(private itemService: ItemService) {}

    ngOnInit(): void {
        this.items = this.itemService.getItems();
    }

    favorite(item: any) {
        if (item.isFavorite) {
            this.itemService.showToast("Removed from Favorites");
            item.isFavorite = false;
        } else {
            this.itemService.showToast("Added to Favorites");
            item.isFavorite = true;
        }
        console.log(item);
    }

    share(item: any) {
        let list = [];
        list.push(item.name);
        list.push(item.description);
        SocialShare.shareText(list.join(", ").trim());
    }

    downloadFile(file) {
        // Instantiate a Download Manager. The way it"s done (it uses a BroadcastReceiver), 
        // it"s mean to be kept alive during all the application lifetime. But we can kill unsubscribe 
        let dm = new DownloadManager();
        // The file name, and title and description for the notification bar. By default it uses the file name 
        // as title, and no description.
        dm.downloadFile("http://placehold.it/350x150", function (result, uri) {
            // result is a boolean, if the download was successful, it will return true
            if (result) {
                LocalNotifications.schedule([{
                    id: 1,
                    title: "Download Complete",
                    body: "File download successfully",
                    ticker: "The ticker",
                    badge: 1,
                    sound: null, // suppress the default sound
                    at: new Date(new Date().getTime() + (10 * 1000)) // 10 seconds from now
                }]).then(
                    function () {
                        console.log("Notification scheduled");
                    },
                    function (error) {
                        console.log("scheduling error: " + error);
                    }
                );

            }
            // Uri in file:// format of the downloaded file.
            console.log(uri);
            // unregisterBroadcast is used to unregister the broadcast (For example if you just want to
            // download a single file).
            dm.unregisterBroadcast();
        });
    }
}