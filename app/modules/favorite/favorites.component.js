"use strict";
var core_1 = require("@angular/core");
var SocialShare = require("nativescript-social-share");
var item_service_1 = require("./../services/item.service");
var FavoritesComponent = (function () {
    function FavoritesComponent(itemService) {
        this.itemService = itemService;
    }
    FavoritesComponent.prototype.ngOnInit = function () {
        this.items = this.itemService.getItems();
    };
    FavoritesComponent.prototype.removeFromFavorite = function (item) {
        this.itemService.showToast("Removed from Favorites");
    };
    FavoritesComponent.prototype.share = function (item) {
        var list = [];
        list.push(item.name);
        list.push(item.description);
        SocialShare.shareText(list.join(", ").trim());
    };
    return FavoritesComponent;
}());
FavoritesComponent = __decorate([
    core_1.Component({
        selector: "ns-items",
        moduleId: module.id,
        templateUrl: "./favorites.component.html",
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [item_service_1.ItemService])
], FavoritesComponent);
exports.FavoritesComponent = FavoritesComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmF2b3JpdGVzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZhdm9yaXRlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUEyRTtBQUMzRSx1REFBeUQ7QUFHekQsMkRBQXlEO0FBUXpELElBQWEsa0JBQWtCO0lBRzNCLDRCQUFvQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUFJLENBQUM7SUFFakQscUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM3QyxDQUFDO0lBRUQsK0NBQWtCLEdBQWxCLFVBQW1CLElBQVM7UUFDeEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsd0JBQXdCLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRUQsa0NBQUssR0FBTCxVQUFNLElBQVM7UUFDWCxJQUFJLElBQUksR0FBRyxFQUFFLENBQUM7UUFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM1QixXQUFXLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBQ0wseUJBQUM7QUFBRCxDQUFDLEFBbkJELElBbUJDO0FBbkJZLGtCQUFrQjtJQU45QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFVBQVU7UUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSw0QkFBNEI7UUFDNUMsZUFBZSxFQUFFLDhCQUF1QixDQUFDLE1BQU07S0FDL0MsQ0FBQztxQ0FJbUMsMEJBQVc7R0FIbkMsa0JBQWtCLENBbUI5QjtBQW5CWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0ICogYXMgU29jaWFsU2hhcmUgZnJvbSBcIm5hdGl2ZXNjcmlwdC1zb2NpYWwtc2hhcmVcIjtcblxuaW1wb3J0IHsgSXRlbSB9IGZyb20gXCIuLy4uL21vZGVscy9pdGVtXCI7XG5pbXBvcnQgeyBJdGVtU2VydmljZSB9IGZyb20gXCIuLy4uL3NlcnZpY2VzL2l0ZW0uc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1pdGVtc1wiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9mYXZvcml0ZXMuY29tcG9uZW50Lmh0bWxcIixcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgRmF2b3JpdGVzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBpdGVtczogSXRlbVtdO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBpdGVtU2VydmljZTogSXRlbVNlcnZpY2UpIHsgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaXRlbXMgPSB0aGlzLml0ZW1TZXJ2aWNlLmdldEl0ZW1zKCk7XG4gICAgfVxuXG4gICAgcmVtb3ZlRnJvbUZhdm9yaXRlKGl0ZW06IGFueSkge1xuICAgICAgICB0aGlzLml0ZW1TZXJ2aWNlLnNob3dUb2FzdChcIlJlbW92ZWQgZnJvbSBGYXZvcml0ZXNcIik7XG4gICAgfVxuICAgICBcbiAgICBzaGFyZShpdGVtOiBhbnkpIHtcbiAgICAgICAgbGV0IGxpc3QgPSBbXTtcbiAgICAgICAgbGlzdC5wdXNoKGl0ZW0ubmFtZSk7XG4gICAgICAgIGxpc3QucHVzaChpdGVtLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgU29jaWFsU2hhcmUuc2hhcmVUZXh0KGxpc3Quam9pbihcIiwgXCIpLnRyaW0oKSk7XG4gICAgfVxufVxuIl19