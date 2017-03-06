"use strict";
var core_1 = require("@angular/core");
var SocialShare = require("nativescript-social-share");
var nativescript_downloadmanager_1 = require("nativescript-downloadmanager");
var LocalNotifications = require("nativescript-local-notifications");
var item_service_1 = require("./../services/item.service");
var ItemsComponent = (function () {
    function ItemsComponent(itemService) {
        this.itemService = itemService;
    }
    ItemsComponent.prototype.ngOnInit = function () {
        this.items = this.itemService.getItems();
    };
    ItemsComponent.prototype.favorite = function (item) {
        if (item.isFavorite) {
            this.itemService.showToast("Removed from Favorites");
            item.isFavorite = false;
        }
        else {
            this.itemService.showToast("Added to Favorites");
            item.isFavorite = true;
        }
        console.log(item);
    };
    ItemsComponent.prototype.share = function (item) {
        var list = [];
        list.push(item.name);
        list.push(item.description);
        SocialShare.shareText(list.join(", ").trim());
    };
    ItemsComponent.prototype.downloadFile = function (file) {
        // Instantiate a Download Manager. The way it"s done (it uses a BroadcastReceiver), 
        // it"s mean to be kept alive during all the application lifetime. But we can kill unsubscribe 
        var dm = new nativescript_downloadmanager_1.DownloadManager();
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
                        sound: null,
                        at: new Date(new Date().getTime() + (10 * 1000)) // 10 seconds from now
                    }]).then(function () {
                    console.log("Notification scheduled");
                }, function (error) {
                    console.log("scheduling error: " + error);
                });
            }
            // Uri in file:// format of the downloaded file.
            console.log(uri);
            // unregisterBroadcast is used to unregister the broadcast (For example if you just want to
            // download a single file).
            dm.unregisterBroadcast();
        });
    };
    return ItemsComponent;
}());
ItemsComponent = __decorate([
    core_1.Component({
        selector: "ns-items",
        moduleId: module.id,
        templateUrl: "./items.component.html",
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [item_service_1.ItemService])
], ItemsComponent);
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FJdUI7QUFDdkIsdURBQXlEO0FBQ3pELDZFQUVzQztBQUN0QyxxRUFBdUU7QUFNdkUsMkRBRW9DO0FBUXBDLElBQWEsY0FBYztJQUd2Qix3QkFBb0IsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFBRyxDQUFDO0lBRWhELGlDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDN0MsQ0FBQztJQUVELGlDQUFRLEdBQVIsVUFBUyxJQUFTO1FBQ2QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDbEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsd0JBQXdCLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUM1QixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1lBQ2pELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQzNCLENBQUM7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFFRCw4QkFBSyxHQUFMLFVBQU0sSUFBUztRQUNYLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzVCLFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCxxQ0FBWSxHQUFaLFVBQWEsSUFBSTtRQUNiLG9GQUFvRjtRQUNwRiwrRkFBK0Y7UUFDL0YsSUFBSSxFQUFFLEdBQUcsSUFBSSw4Q0FBZSxFQUFFLENBQUM7UUFDL0IsdUdBQXVHO1FBQ3ZHLGdDQUFnQztRQUNoQyxFQUFFLENBQUMsWUFBWSxDQUFDLDZCQUE2QixFQUFFLFVBQVUsTUFBTSxFQUFFLEdBQUc7WUFDaEUsMkVBQTJFO1lBQzNFLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ1Qsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7d0JBQ3pCLEVBQUUsRUFBRSxDQUFDO3dCQUNMLEtBQUssRUFBRSxtQkFBbUI7d0JBQzFCLElBQUksRUFBRSw0QkFBNEI7d0JBQ2xDLE1BQU0sRUFBRSxZQUFZO3dCQUNwQixLQUFLLEVBQUUsQ0FBQzt3QkFDUixLQUFLLEVBQUUsSUFBSTt3QkFDWCxFQUFFLEVBQUUsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLHNCQUFzQjtxQkFDMUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUNKO29CQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztnQkFDMUMsQ0FBQyxFQUNELFVBQVUsS0FBSztvQkFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixHQUFHLEtBQUssQ0FBQyxDQUFDO2dCQUM5QyxDQUFDLENBQ0osQ0FBQztZQUVOLENBQUM7WUFDRCxnREFBZ0Q7WUFDaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNqQiwyRkFBMkY7WUFDM0YsMkJBQTJCO1lBQzNCLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FBQyxBQTdERCxJQTZEQztBQTdEWSxjQUFjO0lBTjFCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsVUFBVTtRQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtRQUNyQyxlQUFlLEVBQUUsOEJBQXVCLENBQUMsTUFBTTtLQUNsRCxDQUFDO3FDQUltQywwQkFBVztHQUhuQyxjQUFjLENBNkQxQjtBQTdEWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQ29tcG9uZW50LFxuICAgIE9uSW5pdCxcbiAgICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneVxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0ICogYXMgU29jaWFsU2hhcmUgZnJvbSBcIm5hdGl2ZXNjcmlwdC1zb2NpYWwtc2hhcmVcIjtcbmltcG9ydCB7XG4gICAgRG93bmxvYWRNYW5hZ2VyXG59IGZyb20gXCJuYXRpdmVzY3JpcHQtZG93bmxvYWRtYW5hZ2VyXCI7XG5pbXBvcnQgKiBhcyBMb2NhbE5vdGlmaWNhdGlvbnMgZnJvbSBcIm5hdGl2ZXNjcmlwdC1sb2NhbC1ub3RpZmljYXRpb25zXCI7XG5cblxuaW1wb3J0IHtcbiAgICBJdGVtXG59IGZyb20gXCIuLy4uL21vZGVscy9pdGVtXCI7XG5pbXBvcnQge1xuICAgIEl0ZW1TZXJ2aWNlXG59IGZyb20gXCIuLy4uL3NlcnZpY2VzL2l0ZW0uc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1pdGVtc1wiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9pdGVtcy5jb21wb25lbnQuaHRtbFwiLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBpdGVtczogSXRlbVtdO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBpdGVtU2VydmljZTogSXRlbVNlcnZpY2UpIHt9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pdGVtcyA9IHRoaXMuaXRlbVNlcnZpY2UuZ2V0SXRlbXMoKTtcbiAgICB9XG5cbiAgICBmYXZvcml0ZShpdGVtOiBhbnkpIHtcbiAgICAgICAgaWYgKGl0ZW0uaXNGYXZvcml0ZSkge1xuICAgICAgICAgICAgdGhpcy5pdGVtU2VydmljZS5zaG93VG9hc3QoXCJSZW1vdmVkIGZyb20gRmF2b3JpdGVzXCIpO1xuICAgICAgICAgICAgaXRlbS5pc0Zhdm9yaXRlID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLml0ZW1TZXJ2aWNlLnNob3dUb2FzdChcIkFkZGVkIHRvIEZhdm9yaXRlc1wiKTtcbiAgICAgICAgICAgIGl0ZW0uaXNGYXZvcml0ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coaXRlbSk7XG4gICAgfVxuXG4gICAgc2hhcmUoaXRlbTogYW55KSB7XG4gICAgICAgIGxldCBsaXN0ID0gW107XG4gICAgICAgIGxpc3QucHVzaChpdGVtLm5hbWUpO1xuICAgICAgICBsaXN0LnB1c2goaXRlbS5kZXNjcmlwdGlvbik7XG4gICAgICAgIFNvY2lhbFNoYXJlLnNoYXJlVGV4dChsaXN0LmpvaW4oXCIsIFwiKS50cmltKCkpO1xuICAgIH1cblxuICAgIGRvd25sb2FkRmlsZShmaWxlKSB7XG4gICAgICAgIC8vIEluc3RhbnRpYXRlIGEgRG93bmxvYWQgTWFuYWdlci4gVGhlIHdheSBpdFwicyBkb25lIChpdCB1c2VzIGEgQnJvYWRjYXN0UmVjZWl2ZXIpLCBcbiAgICAgICAgLy8gaXRcInMgbWVhbiB0byBiZSBrZXB0IGFsaXZlIGR1cmluZyBhbGwgdGhlIGFwcGxpY2F0aW9uIGxpZmV0aW1lLiBCdXQgd2UgY2FuIGtpbGwgdW5zdWJzY3JpYmUgXG4gICAgICAgIGxldCBkbSA9IG5ldyBEb3dubG9hZE1hbmFnZXIoKTtcbiAgICAgICAgLy8gVGhlIGZpbGUgbmFtZSwgYW5kIHRpdGxlIGFuZCBkZXNjcmlwdGlvbiBmb3IgdGhlIG5vdGlmaWNhdGlvbiBiYXIuIEJ5IGRlZmF1bHQgaXQgdXNlcyB0aGUgZmlsZSBuYW1lIFxuICAgICAgICAvLyBhcyB0aXRsZSwgYW5kIG5vIGRlc2NyaXB0aW9uLlxuICAgICAgICBkbS5kb3dubG9hZEZpbGUoXCJodHRwOi8vcGxhY2Vob2xkLml0LzM1MHgxNTBcIiwgZnVuY3Rpb24gKHJlc3VsdCwgdXJpKSB7XG4gICAgICAgICAgICAvLyByZXN1bHQgaXMgYSBib29sZWFuLCBpZiB0aGUgZG93bmxvYWQgd2FzIHN1Y2Nlc3NmdWwsIGl0IHdpbGwgcmV0dXJuIHRydWVcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBMb2NhbE5vdGlmaWNhdGlvbnMuc2NoZWR1bGUoW3tcbiAgICAgICAgICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkRvd25sb2FkIENvbXBsZXRlXCIsXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IFwiRmlsZSBkb3dubG9hZCBzdWNjZXNzZnVsbHlcIixcbiAgICAgICAgICAgICAgICAgICAgdGlja2VyOiBcIlRoZSB0aWNrZXJcIixcbiAgICAgICAgICAgICAgICAgICAgYmFkZ2U6IDEsXG4gICAgICAgICAgICAgICAgICAgIHNvdW5kOiBudWxsLCAvLyBzdXBwcmVzcyB0aGUgZGVmYXVsdCBzb3VuZFxuICAgICAgICAgICAgICAgICAgICBhdDogbmV3IERhdGUobmV3IERhdGUoKS5nZXRUaW1lKCkgKyAoMTAgKiAxMDAwKSkgLy8gMTAgc2Vjb25kcyBmcm9tIG5vd1xuICAgICAgICAgICAgICAgIH1dKS50aGVuKFxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5vdGlmaWNhdGlvbiBzY2hlZHVsZWRcIik7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzY2hlZHVsaW5nIGVycm9yOiBcIiArIGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFVyaSBpbiBmaWxlOi8vIGZvcm1hdCBvZiB0aGUgZG93bmxvYWRlZCBmaWxlLlxuICAgICAgICAgICAgY29uc29sZS5sb2codXJpKTtcbiAgICAgICAgICAgIC8vIHVucmVnaXN0ZXJCcm9hZGNhc3QgaXMgdXNlZCB0byB1bnJlZ2lzdGVyIHRoZSBicm9hZGNhc3QgKEZvciBleGFtcGxlIGlmIHlvdSBqdXN0IHdhbnQgdG9cbiAgICAgICAgICAgIC8vIGRvd25sb2FkIGEgc2luZ2xlIGZpbGUpLlxuICAgICAgICAgICAgZG0udW5yZWdpc3RlckJyb2FkY2FzdCgpO1xuICAgICAgICB9KTtcbiAgICB9XG59Il19